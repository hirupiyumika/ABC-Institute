const path = require("path");
const url = require("url");
const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const AcademicYearAndSemester = require("./models/AcademicYearAndSemster");
const Programme = require("./models/Programme");
const Group = require("./models/Group");
const SubGroup = require("./models/SubGroup");
const Tag = require("./models/Tag");
const Student = require("./models/Student");
const Lecturers = require("./models/lecturer");
const Subjects = require("./models/subject");
const Faculties = require("./models/faculty");
const Departments = require("./models/department");
const Centers = require("./models/center");
const Levels = require("./models/level");
const Buildings = require("./models/building");
const Rooms = require("./models/room");
const WorkingDaysSchema = require("./models/addWorkingDays");
const TimeSlotSchema = require("./models/addTimeSlot");
const PrimarySessions = require("./models/primarySession");
const LecturerNotAvailableTime = require("./models/LecturerNotAvailableTime");
const GroupNotAvailableTime = require("./models/GroupNotAvailableTime");
const SubGroupNotAvailableTime = require("./models/SubGroupNotAvailableTime");
const SessionNotAvailableTime = require("./models/SessionNotAvailableTime");
const ConsecutiveSession = require("./models/ConsecutiveSession");
const NotOverlappingSession = require("./models/NotOverlappingSession");
const ParallelSession = require("./models/ParallelSession");
const connectDB = require("./config/db");
const isOnline = require("is-online");
const Alert = require("electron-alert");
const GroupRooms = require("./models/groupRooms");
const LecturerRooms = require("./models/lecturerRooms");
const SubjectRooms = require("./models/subjectRooms");
const TagRooms = require("./models/tagRooms");
const NoRooms = require("./models/notAvailavleRooms");

let alert = new Alert();

let swalOptionsNotConnected = {
  type: "error",
  title: "Oops...",
  text: "No internet connection!",
};
let swalOptionsConnected = {
  type: "success",
  title: "Connected",
  text: "Connected to the internet!",
};

(async () => {
  const response = await isOnline();
  if (!response) {
    alert.fireFrameless(swalOptionsNotConnected, null, true, false);
  } else {
    alert.fireFrameless(swalOptionsConnected, null, true, false);
  }
})();

// database connection
connectDB();

let mainWindow;

let isDev = false;
const isMac = process.platform === "darwin" ? true : false;

if (
  process.env.NODE_ENV !== undefined &&
  process.env.NODE_ENV === "development"
) {
  isDev = true;
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    show: false,
    backgroundColor: "white",
    icon: `${__dirname}/assets/icon.png`,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  let indexPath;

  if (isDev && process.argv.indexOf("--noDevServer") === -1) {
    indexPath = url.format({
      protocol: "http:",
      host: "localhost:8080",
      pathname: "index.html",
      slashes: true,
    });
  } else {
    indexPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "dist", "index.html"),
      slashes: true,
    });
  }

  mainWindow.loadURL(indexPath);

  // Don't show until we are ready and loaded
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();

    // Open devtools if dev
    // if (isDev) {
    //   const {
    //     default: installExtension,
    //     REACT_DEVELOPER_TOOLS,
    //   } = require("electron-devtools-installer");

    //   installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
    //     console.log("Error loading React DevTools: ", err)
    //   );
    //   mainWindow.webContents.openDevTools();
    // }
  });

  mainWindow.on("closed", () => (mainWindow = null));
}

// app.on("ready", createMainWindow);

app.on("ready", () => {
  createMainWindow();
  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);
});

const menu = [
  ...(isMac ? [{ role: "appMenu" }] : []),
  {
    role: "fileMenu",
  },
  {
    role: "editMenu",
  },
  {
    label: "Clear All",
    submenu: [
      {
        label: "Student Management",
        submenu: [
          {
            label: "Clear all Academic Year and Semesters",
            click: () => clearAcademicYearAndSemesters(),
          },
          {
            label: "Clear all Programmes",
            click: () => clearProgrammes(),
          },
          {
            label: "Clear all Groups",
            click: () => clearGroups(),
          },
          {
            label: "Clear all Sub Groups",
            click: () => clearSubGroups(),
          },

          {
            label: "Clear all Students",
            click: () => clearStudents(),
          },
        ],
      },
      {
        label: "Tag Management",
        submenu: [
          {
            label: "Clear all Tags",
            click: () => clearTags(),
          },
        ],
      },

      {
        label: "Lecturer Management",
        submenu: [
          {
            label: "Clear all Lecturers",
            click: () => clearLecturers(),
          },
          {
            label: "Clear all Faculties",
            click: () => clearFaculties(),
          },
          {
            label: "Clear all Departments",
            click: () => clearDepartments(),
          },
          {
            label: "Clear all Centers",
            click: () => clearCenters(),
          },
          {
            label: "Clear all Levels",
            click: () => clearLevels(),
          },
        ],
      },
      {
        label: "Subject Management",
        submenu: [
          {
            label: "Clear all Subjects",
            click: () => clearSubjects(),
          },
        ],
      },
      {
        label: "Location Management",
        submenu: [
          {
            label: "Clear all Buildings",
            click: () => clearBuildings(),
          },
          {
            label: "Clear all Rooms",
            click: () => clearRooms(),
          },
        ],
      },
    ],
  },
  ...(isDev
    ? [
        {
          label: "Developer",
          submenu: [
            { role: "reload" },
            { role: "forcereload" },
            { role: "separator" },
            { role: "toggledevtools" },
          ],
        },
      ]
    : []),
];

/* sprint 01 */
// clear all students
async function clearStudents() {
  try {
    await Student.deleteMany({});
    mainWindow.webContents.send("students:clear");
  } catch (error) {
    console.log(error);
  }
}

// clear all programmes
async function clearProgrammes() {
  try {
    await Programme.deleteMany({});
    mainWindow.webContents.send("programmes:clear");
  } catch (error) {
    console.log(error);
  }
}

// clear all groups
async function clearGroups() {
  try {
    await Group.deleteMany({});
    mainWindow.webContents.send("groups:clear");
  } catch (error) {
    console.log(error);
  }
}

// clear all sub groups
async function clearSubGroups() {
  try {
    await SubGroup.deleteMany({});
    mainWindow.webContents.send("subGroups:clear");
  } catch (error) {
    console.log(error);
  }
}

// clear all tags
async function clearTags() {
  try {
    await Tag.deleteMany({});
    mainWindow.webContents.send("tags:clear");
  } catch (error) {
    console.log(error);
  }
}

// clear all academic year and semesters
async function clearAcademicYearAndSemesters() {
  try {
    await AcademicYearAndSemester.deleteMany({});
    mainWindow.webContents.send("academicYearAndSemesters:clear");
  } catch (error) {
    console.log(error);
  }
}

// get academic year and semesters from database
ipcMain.on("academicYearAndSemesters:load", sendAcademicYearAndSemesters);
async function sendAcademicYearAndSemesters() {
  try {
    const academicYearAndSemesters = await AcademicYearAndSemester.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send(
      "academicYearAndSemesters:get",
      JSON.stringify(academicYearAndSemesters)
    );
  } catch (error) {
    console.log(error);
  }
}

// get programme
ipcMain.on("programmes:load", sendProgrammes);
async function sendProgrammes() {
  try {
    const programmes = await Programme.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send("programmes:get", JSON.stringify(programmes));
  } catch (error) {
    console.log(error);
  }
}

// get group
ipcMain.on("groups:load", sendGroups);
async function sendGroups() {
  try {
    const groups = await Group.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send("groups:get", JSON.stringify(groups));
  } catch (error) {
    console.log(error);
  }
}

// get sub group
ipcMain.on("subGroups:load", sendSubGroups);
async function sendSubGroups() {
  try {
    const subGroups = await SubGroup.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send("subGroups:get", JSON.stringify(subGroups));
  } catch (error) {
    console.log(error);
  }
}

// get tag
ipcMain.on("tags:load", sendTags);
async function sendTags() {
  try {
    const tags = await Tag.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send("tags:get", JSON.stringify(tags));
  } catch (error) {
    console.log(error);
  }
}

// get students
ipcMain.on("students:load", sendStudents);
async function sendStudents() {
  try {
    const students = await Student.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send("students:get", JSON.stringify(students));
  } catch (error) {
    console.log(error);
  }
}

// update academic year and semester
ipcMain.on(
  "academicYearAndSemesters:update",
  async (e, academicYearAndSemester) => {
    // console.log(academicYearAndSemester);
    try {
      await AcademicYearAndSemester.findByIdAndUpdate(
        academicYearAndSemester._id,
        {
          year: academicYearAndSemester.year,
          semester: academicYearAndSemester.semester,
          yearAndSemester: academicYearAndSemester.yearAndSemester,
        }
      );
      sendAcademicYearAndSemesters();
    } catch (error) {
      console.log(error);
    }
  }
);

// update programme
ipcMain.on("programmes:update", async (e, programmeItem) => {
  try {
    await Programme.findByIdAndUpdate(programmeItem._id, {
      programme: programmeItem.programme,
    });
    sendProgrammes();
  } catch (error) {
    console.log(error);
  }
});

// update group
ipcMain.on("groups:update", async (e, groupItem) => {
  try {
    await Group.findByIdAndUpdate(groupItem._id, {
      group: groupItem.group,
    });
    sendGroups();
  } catch (error) {
    console.log(error);
  }
});

// update sub group
ipcMain.on("subGroups:update", async (e, subGroupItem) => {
  try {
    await SubGroup.findByIdAndUpdate(subGroupItem._id, {
      subGroup: subGroupItem.subGroup,
    });
    sendSubGroups();
  } catch (error) {
    console.log(error);
  }
});

// update tag
ipcMain.on("tags:update", async (e, tagItem) => {
  try {
    await Tag.findByIdAndUpdate(tagItem._id, {
      tag: tagItem.tag,
    });
    sendTags();
  } catch (error) {
    console.log(error);
  }
});

// update student
ipcMain.on("students:update", async (e, studentItem) => {
  try {
    await Student.findByIdAndUpdate(studentItem._id, {
      academicYearAndSemester: studentItem.academicYearAndSemester,
      programme: studentItem.programme,
      mainGroup: studentItem.mainGroup,
      mainGroupID: studentItem.mainGroupID,
      subGroup: studentItem.subGroup,
      subGroupID: studentItem.subGroupID,
    });
    sendStudents();
  } catch (error) {
    console.log(error);
  }
});

// create academic year and semester
ipcMain.on(
  "academicYearAndSemesters:add",
  async (e, academicYearAndSemester) => {
    try {
      await AcademicYearAndSemester.create(academicYearAndSemester);
      sendAcademicYearAndSemesters();
    } catch (error) {
      console.log(error);
    }
  }
);

// create programme
ipcMain.on("programmes:add", async (e, programme) => {
  try {
    await Programme.create(programme);
    sendProgrammes();
  } catch (error) {
    console.log(error);
  }
});

// create group
ipcMain.on("groups:add", async (e, group) => {
  try {
    await Group.create(group);
    sendGroups();
  } catch (error) {
    console.log(error);
  }
});

// create sub group
ipcMain.on("subGroups:add", async (e, subGroup) => {
  try {
    await SubGroup.create(subGroup);
    sendSubGroups();
  } catch (error) {
    console.log(error);
  }
});

// create tag
ipcMain.on("tags:add", async (e, tag) => {
  try {
    await Tag.create(tag);
    sendTags();
  } catch (error) {
    console.log(error);
  }
});

// create student
ipcMain.on("students:add", async (e, student) => {
  try {
    await Student.create(student);
    sendStudents();
  } catch (error) {
    console.log(error);
  }
});
// delete academic year and semester
ipcMain.on("academicYearAndSemesters:delete", async (e, id) => {
  try {
    await AcademicYearAndSemester.findOneAndDelete({ _id: id });
    sendAcademicYearAndSemesters();
  } catch (error) {
    console.log(error);
  }
});

// delete programme
ipcMain.on("programmes:delete", async (e, id) => {
  try {
    await Programme.findOneAndDelete({ _id: id });
    sendProgrammes();
  } catch (error) {
    console.log(error);
  }
});

// delete group
ipcMain.on("groups:delete", async (e, id) => {
  try {
    await Group.findOneAndDelete({ _id: id });
    sendGroups();
  } catch (error) {
    console.log(error);
  }
});

// delete sub group
ipcMain.on("subGroups:delete", async (e, id) => {
  try {
    await SubGroup.findOneAndDelete({ _id: id });
    sendSubGroups();
  } catch (error) {
    console.log(error);
  }
});

// delete tag
ipcMain.on("tags:delete", async (e, id) => {
  try {
    await Tag.findOneAndDelete({ _id: id });
    sendTags();
  } catch (error) {
    console.log(error);
  }
});

// delete student
ipcMain.on("students:delete", async (e, id) => {
  try {
    await Student.findOneAndDelete({ _id: id });
    sendStudents();
  } catch (error) {
    console.log(error);
  }
});
/* sprint 01 */

/* sprint 02 */
// create  lecturer not available time

ipcMain.on(
  "lecturerNotAvailableTime:add",
  async (e, lecturerNotAvailableTime) => {
    try {
      await LecturerNotAvailableTime.create(lecturerNotAvailableTime);
      sendLecturerNotAvailableTimes();
    } catch (error) {
      console.log(error);
    }
  }
);

// get lecturer not available time
ipcMain.on("lecturerNotAvailableTime:load", sendLecturerNotAvailableTimes);
async function sendLecturerNotAvailableTimes() {
  try {
    const lecturerNotAvailableTimes = await LecturerNotAvailableTime.find().sort(
      {
        createdDate: 1,
      }
    );
    mainWindow.webContents.send(
      "lecturerNotAvailableTime:get",
      JSON.stringify(lecturerNotAvailableTimes)
    );
  } catch (error) {
    console.log(error);
  }
}

// delete lecturer not available time
ipcMain.on("lecturerNotAvailableTime:delete", async (e, id) => {
  try {
    await LecturerNotAvailableTime.findOneAndDelete({ _id: id });
    sendLecturerNotAvailableTimes();
  } catch (error) {
    console.log(error);
  }
});

// update lecturer not available time
ipcMain.on(
  "lecturerNotAvailableTime:update",
  async (e, lecturerNotAvailableTime) => {
    try {
      await LecturerNotAvailableTime.findByIdAndUpdate(
        lecturerNotAvailableTime._id,
        {
          lecturer: lecturerNotAvailableTime.lecturer,
          day: lecturerNotAvailableTime.day,
          from: lecturerNotAvailableTime.from,
          to: lecturerNotAvailableTime.to,
        }
      );
      sendLecturerNotAvailableTimes();
    } catch (error) {
      console.log(error);
    }
  }
);

// create group not available time
ipcMain.on("groupNotAvailableTime:add", async (e, groupNotAvailableTime) => {
  console.log(groupNotAvailableTime);
  try {
    await GroupNotAvailableTime.create(groupNotAvailableTime);
    sendGroupNotAvailableTimes();
  } catch (error) {
    console.log(error);
  }
});

// get group not available time
ipcMain.on("groupNotAvailableTime:load", sendGroupNotAvailableTimes);
async function sendGroupNotAvailableTimes() {
  try {
    const groupNotAvailableTimes = await GroupNotAvailableTime.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send(
      "groupNotAvailableTime:get",
      JSON.stringify(groupNotAvailableTimes)
    );
  } catch (error) {
    console.log(error);
  }
}

// delete group not available time
ipcMain.on("groupNotAvailableTime:delete", async (e, id) => {
  try {
    await GroupNotAvailableTime.findOneAndDelete({ _id: id });
    sendGroupNotAvailableTimes();
  } catch (error) {
    console.log(error);
  }
});

// update group not available time
ipcMain.on("groupNotAvailableTime:update", async (e, groupNotAvailableTime) => {
  try {
    await GroupNotAvailableTime.findByIdAndUpdate(groupNotAvailableTime._id, {
      group: groupNotAvailableTime.group,
      day: groupNotAvailableTime.day,
      from: groupNotAvailableTime.from,
      to: groupNotAvailableTime.to,
    });
    sendGroupNotAvailableTimes();
  } catch (error) {
    console.log(error);
  }
});

// create sub group not available time
ipcMain.on(
  "subGroupNotAvailableTime:add",
  async (e, subGroupNotAvailableTime) => {
    try {
      await SubGroupNotAvailableTime.create(subGroupNotAvailableTime);
      sendSubGroupNotAvailableTimes();
    } catch (error) {
      console.log(error);
    }
  }
);

// get sub group not available time
ipcMain.on("subGroupNotAvailableTime:load", sendSubGroupNotAvailableTimes);
async function sendSubGroupNotAvailableTimes() {
  try {
    const subGroupNotAvailableTimes = await SubGroupNotAvailableTime.find().sort(
      {
        createdDate: 1,
      }
    );
    mainWindow.webContents.send(
      "subGroupNotAvailableTime:get",
      JSON.stringify(subGroupNotAvailableTimes)
    );
  } catch (error) {
    console.log(error);
  }
}

// delete sub group not available time
ipcMain.on("subGroupNotAvailableTime:delete", async (e, id) => {
  try {
    await SubGroupNotAvailableTime.findOneAndDelete({ _id: id });
    sendSubGroupNotAvailableTimes();
  } catch (error) {
    console.log(error);
  }
});

// update sub group not available time
ipcMain.on(
  "subGroupNotAvailableTime:update",
  async (e, subGroupNotAvailableTime) => {
    try {
      await SubGroupNotAvailableTime.findByIdAndUpdate(
        subGroupNotAvailableTime._id,
        {
          subGroup: subGroupNotAvailableTime.subGroup,
          day: subGroupNotAvailableTime.day,
          from: subGroupNotAvailableTime.from,
          to: subGroupNotAvailableTime.to,
        }
      );
      sendSubGroupNotAvailableTimes();
    } catch (error) {
      console.log(error);
    }
  }
);

// create session not available time
ipcMain.on(
  "sessionNotAvailableTime:add",
  async (e, sessionNotAvailableTime) => {
    try {
      await SessionNotAvailableTime.create(sessionNotAvailableTime);
      sendSessionNotAvailableTimes();
    } catch (error) {
      console.log(error);
    }
  }
);

// get session not available time
ipcMain.on("sessionNotAvailableTime:load", sendSessionNotAvailableTimes);
async function sendSessionNotAvailableTimes() {
  try {
    const sessionNotAvailableTimes = await SessionNotAvailableTime.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send(
      "sessionNotAvailableTime:get",
      JSON.stringify(sessionNotAvailableTimes)
    );
  } catch (error) {
    console.log(error);
  }
}

// delete session not available time
ipcMain.on("sessionNotAvailableTime:delete", async (e, id) => {
  try {
    await SessionNotAvailableTime.findOneAndDelete({ _id: id });
    sendSessionNotAvailableTimes();
  } catch (error) {
    console.log(error);
  }
});

// update session not available time
ipcMain.on(
  "sessionNotAvailableTime:update",
  async (e, sessionNotAvailableTime) => {
    try {
      await SessionNotAvailableTime.findByIdAndUpdate(
        sessionNotAvailableTime._id,
        {
          primarySession: sessionNotAvailableTime.primarySession,
          day: sessionNotAvailableTime.day,
          from: sessionNotAvailableTime.from,
          to: sessionNotAvailableTime.to,
        }
      );
      sendSessionNotAvailableTimes();
    } catch (error) {
      console.log(error);
    }
  }
);

// get time slots
ipcMain.on("timeSlots:load", sendTimeSlots);
async function sendTimeSlots() {
  try {
    const timeSlots = await TimeSlotSchema.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send("timeSlots:get", JSON.stringify(timeSlots));
  } catch (error) {
    console.log(error);
  }
}

// create consecutive session
ipcMain.on("consecutiveSession:add", async (e, consecutiveSession) => {
  try {
    await ConsecutiveSession.create(consecutiveSession);
    sendConsecutiveSessions();
  } catch (error) {
    console.log(error);
  }
});

// get consecutive session
ipcMain.on("consecutiveSession:load", sendConsecutiveSessions);
async function sendConsecutiveSessions() {
  try {
    const consecutiveSessions = await ConsecutiveSession.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send(
      "consecutiveSession:get",
      JSON.stringify(consecutiveSessions)
    );
  } catch (error) {
    console.log(error);
  }
}

// delete consecutive session
ipcMain.on("consecutiveSession:delete", async (e, id) => {
  try {
    await ConsecutiveSession.findOneAndDelete({ _id: id });
    sendConsecutiveSessions();
  } catch (error) {
    console.log(error);
  }
});

// create parallel session
ipcMain.on("parallelSession:add", async (e, parallelSession) => {
  try {
    await ParallelSession.create(parallelSession);
    sendParallelSessions();
  } catch (error) {
    console.log(error);
  }
});

// get parallel session
ipcMain.on("parallelSession:load", sendParallelSessions);
async function sendParallelSessions() {
  try {
    const parallelSessions = await ParallelSession.find().sort({
      createdDate: 1,
    });
    mainWindow.webContents.send(
      "parallelSession:get",
      JSON.stringify(parallelSessions)
    );
  } catch (error) {
    console.log(error);
  }
}

// create not overlapping session
ipcMain.on("notOverlappingSession:add", async (e, notOverlappingSession) => {
  try {
    await NotOverlappingSession.create(notOverlappingSession);
    sendNotOverlappingSessions();
  } catch (error) {
    console.log(error);
  }
});

// get parallel session
ipcMain.on("notOverlappingSession:load", sendNotOverlappingSessions);
async function sendNotOverlappingSessions() {
  try {
    const notOverlappingSessions = await NotOverlappingSession.find().sort({
      createdDate: 1,
    });

    mainWindow.webContents.send(
      "notOverlappingSession:get",
      JSON.stringify(notOverlappingSessions)
    );
  } catch (error) {
    console.log(error);
  }
}
/* sprint 02 */

// hiruni main
// get lecturers data from database
ipcMain.on("lecturers:load", sendLecturers);
async function sendLecturers() {
  try {
    const lecturers = await Lecturers.find().sort({ created: 1 });
    mainWindow.webContents.send("lecturers:get", JSON.stringify(lecturers));
    // console.log(lecturers);
  } catch (error) {
    console.log(error);
  }
}

// create lecturer
ipcMain.on("lecturers:add", async (e, lecturer) => {
  // console.log("lecturer", lecturer);

  try {
    await Lecturers.create(lecturer);
    sendLecturers();
  } catch (error) {
    console.log(error);
  }
});

//update lecturer
ipcMain.on("lecturers:update", async (e, lecturer) => {
  // console.log("up", lecturer);

  try {
    await Lecturers.findByIdAndUpdate(lecturer._id, {
      name: lecturer.name,
      eid: lecturer.eid,
      faculty: lecturer.faculty,
      department: lecturer.department,
      center: lecturer.center,
      building: lecturer.building,
      level: lecturer.level,
      rank: lecturer.rank,
    });
    sendLecturers();
  } catch (error) {
    console.log(error);
  }
});

// delete lecturer
ipcMain.on("lecturers:delete", async (e, id) => {
  try {
    await Lecturers.findOneAndDelete({ _id: id });
    sendLecturers();
  } catch (error) {
    console.log(error);
  }
});

// clear all lecturers
async function clearLecturers() {
  try {
    await Lecturers.deleteMany({});
    mainWindow.webContents.send("lecturers:clear");
  } catch (error) {
    console.log(error);
  }
}

// get subjects data from database
ipcMain.on("subjects:load", sendSubjects);
async function sendSubjects() {
  try {
    const subjects = await Subjects.find().sort({ created: 1 });
    mainWindow.webContents.send("subjects:get", JSON.stringify(subjects));
    // console.log("hh", subjects);
  } catch (error) {
    console.log(error);
  }
}

// create subject
ipcMain.on("subjects:add", async (e, subject) => {
  // console.log(subject);

  try {
    await Subjects.create(subject);
    sendSubjects();
  } catch (error) {
    console.log(error);
  }
});

// delete subject
ipcMain.on("subjects:delete", async (e, id) => {
  try {
    await Subjects.findOneAndDelete({ code: id });
    sendSubjects();
  } catch (error) {
    console.log(error);
  }
});

//update subject
ipcMain.on("subjects:update", async (e, sub) => {
  // console.log("sub", sub);

  try {
    await Subjects.findByIdAndUpdate(sub._id, {
      subject: sub.subject,
      code: sub.code,
      year: sub.year,
      semester: sub.semester,
      lectureHours: sub.lectureHours,
      tutorialHours: sub.tutorialHours,
      labHours: sub.labHours,
      evolutionHours: sub.evolutionHours,
    });
    sendSubjects();
  } catch (error) {
    console.log(error);
  }
});

// clear all subjects
async function clearSubjects() {
  try {
    await Subjects.deleteMany({});
    mainWindow.webContents.send("subjects:clear");
  } catch (error) {
    console.log(error);
  }
}

// get faculties data from database
ipcMain.on("faculties:load", sendFaculties);
async function sendFaculties() {
  try {
    const faculties = await Faculties.find().sort({ created: 1 });
    mainWindow.webContents.send("faculties:get", JSON.stringify(faculties));
    // console.log("f", faculties);
  } catch (error) {
    console.log(error);
  }
}

// create Faculty
ipcMain.on("faculties:add", async (e, faculty) => {
  // console.log("faculties", faculty);

  try {
    await Faculties.create(faculty);
    sendFaculties();
  } catch (error) {
    console.log(error);
  }
});

//update Faculty
ipcMain.on("faculties:update", async (e, faculty) => {
  // console.log("faculties", faculty);

  try {
    await Faculties.findByIdAndUpdate(faculty._id, {
      faculty: faculty.faculty,
    });
    sendFaculties();
  } catch (error) {
    console.log(error);
  }
});

// delete Faculties
ipcMain.on("faculties:delete", async (e, id) => {
  try {
    await Faculties.findOneAndDelete({ _id: id });
    sendFaculties();
  } catch (error) {
    console.log(error);
  }
});

// clear all faculties
async function clearFaculties() {
  try {
    await Faculties.deleteMany({});
    mainWindow.webContents.send("faculties:clear");
  } catch (error) {
    console.log(error);
  }
}

// get Departments data from database
ipcMain.on("departments:load", sendDepartments);
async function sendDepartments() {
  try {
    const departments = await Departments.find().sort({ created: 1 });
    mainWindow.webContents.send("departments:get", JSON.stringify(departments));
    // console.log("d", departments);
  } catch (error) {
    console.log(error);
  }
}

// create Department
ipcMain.on("departments:add", async (e, department) => {
  // console.log("departments", department);

  try {
    await Departments.create(department);
    sendDepartments();
  } catch (error) {
    console.log(error);
  }
});

//update Department
ipcMain.on("departments:update", async (e, department) => {
  // console.log("departments", department);

  try {
    await Departments.findByIdAndUpdate(department._id, {
      department: department.department,
    });
    sendDepartments();
  } catch (error) {
    console.log(error);
  }
});

// delete Departments
ipcMain.on("departments:delete", async (e, id) => {
  try {
    await Departments.findOneAndDelete({ _id: id });
    sendDepartments();
  } catch (error) {
    console.log(error);
  }
});

// clear all departments
async function clearDepartments() {
  try {
    await Departments.deleteMany({});
    mainWindow.webContents.send("departments:clear");
  } catch (error) {
    console.log(error);
  }
}

// get Centers data from database
ipcMain.on("centers:load", sendCenters);
async function sendCenters() {
  try {
    const centers = await Centers.find().sort({ created: 1 });
    mainWindow.webContents.send("centers:get", JSON.stringify(centers));
    // console.log("d", centers);
  } catch (error) {
    console.log(error);
  }
}

// create center
ipcMain.on("centers:add", async (e, center) => {
  // console.log("centers", center);

  try {
    await Centers.create(center);
    sendCenters();
  } catch (error) {
    console.log(error);
  }
});

//update centers
ipcMain.on("centers:update", async (e, center) => {
  // console.log("centers", center);

  try {
    await Centers.findByIdAndUpdate(center._id, {
      center: center.center,
    });
    sendCenters();
  } catch (error) {
    console.log(error);
  }
});

// delete Center
ipcMain.on("centers:delete", async (e, id) => {
  try {
    await Centers.findOneAndDelete({ _id: id });
    sendCenters();
  } catch (error) {
    console.log(error);
  }
});

// clear all centers
async function clearCenters() {
  try {
    await Centers.deleteMany({});
    mainWindow.webContents.send("centers:clear");
  } catch (error) {
    console.log(error);
  }
}

// get levels data from database
ipcMain.on("levels:load", sendLevels);
async function sendLevels() {
  try {
    const levels = await Levels.find().sort({ created: 1 });
    mainWindow.webContents.send("levels:get", JSON.stringify(levels));
  } catch (error) {
    console.log(error);
  }
}

// create level
ipcMain.on("levels:add", async (e, level) => {
  // console.log("levels", level);

  try {
    await Levels.create(level);
    sendLevels();
  } catch (error) {
    console.log(error);
  }
});

//update level
ipcMain.on("levels:update", async (e, level) => {
  // console.log("uplevels", level);

  try {
    await Levels.findByIdAndUpdate(level._id, {
      category: level.category,
      level: level.level,
    });
    sendLevels();
  } catch (error) {
    console.log(error);
  }
});

// delete level
ipcMain.on("levels:delete", async (e, id) => {
  try {
    await Levels.findOneAndDelete({ _id: id });
    sendLevels();
  } catch (error) {
    console.log(error);
  }
});

// clear all levels
async function clearLevels() {
  try {
    await Levels.deleteMany({});
    mainWindow.webContents.send("levels:clear");
  } catch (error) {
    console.log(error);
  }
}

// yash main

// get buildings data from database
ipcMain.on("buildings:load", sendBuildings);
async function sendBuildings() {
  try {
    const buildings = await Buildings.find().sort({ created: 1 });
    mainWindow.webContents.send("buildings:get", JSON.stringify(buildings));
    // console.log("f", buildings);
  } catch (error) {
    console.log(error);
  }
}

// create Building
ipcMain.on("buildings:add", async (e, building) => {
  // console.log("buildings", building);

  try {
    await Buildings.create(building);
    sendBuildings();
  } catch (error) {
    console.log(error);
  }
});

//update Building
ipcMain.on("buildings:update", async (e, building) => {
  // console.log("buildings", building);

  try {
    await Buildings.findByIdAndUpdate(building._id, {
      building: building.building,
    });
    sendBuildings();
  } catch (error) {
    console.log(error);
  }
});

// delete buildings
ipcMain.on("buildings:delete", async (e, id) => {
  try {
    await Buildings.findOneAndDelete({ _id: id });
    sendBuildings();
  } catch (error) {
    console.log(error);
  }
});

// clear all buildings
async function clearBuildings() {
  try {
    await Buildings.deleteMany({});
    mainWindow.webContents.send("buildings:clear");
  } catch (error) {
    console.log(error);
  }
}

// get rooms data from database
ipcMain.on("rooms:load", sendRooms);
async function sendRooms() {
  try {
    const rooms = await Rooms.find().sort({ created: 1 });
    mainWindow.webContents.send("rooms:get", JSON.stringify(rooms));
    // console.log("f", rooms);
  } catch (error) {
    console.log(error);
  }
}

// create rooms
ipcMain.on("rooms:add", async (e, room) => {
  // console.log("rooms", room);

  try {
    await Rooms.create(room);
    sendRooms();
  } catch (error) {
    console.log(error);
  }
});

//update room
ipcMain.on("rooms:update", async (e, room) => {
  // console.log("rooms", room);

  try {
    await Rooms.findByIdAndUpdate(room._id, {
      roomName: room.roomName,
      roomType: room.roomType,
      building: room.building,
      capacity: room.capacity,
    });
    sendRooms();
  } catch (error) {
    console.log(error);
  }
});

// delete rooms
ipcMain.on("rooms:delete", async (e, id) => {
  try {
    await Rooms.findOneAndDelete({ _id: id });
    sendRooms();
  } catch (error) {
    console.log(error);
  }
});

// clear all rooms
async function clearRooms() {
  try {
    await Rooms.deleteMany({});
    mainWindow.webContents.send("rooms:clear");
  } catch (error) {
    console.log(error);
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//********************************************************************************************** Working Days*/
//Add Working Days to the DataBase
ipcMain.on("AddWorkingDays:add", async (e, AddWorkingDays) => {
  try {
    await WorkingDaysSchema.create(AddWorkingDays);
  } catch (error) {
    console.log(error);
  }
});

// Get Working Days from the Database
ipcMain.on("workingDays:load", sendWorkingDays);
async function sendWorkingDays() {
  try {
    const workingDays = await WorkingDaysSchema.find();

    mainWindow.webContents.send("workingDays:get", JSON.stringify(workingDays));
  } catch (error) {
    console.log(error);
  }
}

// delete working day
ipcMain.on("workingDays:delete", async (e, id) => {
  try {
    await WorkingDaysSchema.findOneAndDelete({ _id: id });
    sendWorkingDays();
  } catch (error) {
    console.log(error);
  }
});

// Update working Day
ipcMain.on("workingDays:update", async (e, workingDays) => {
  try {
    await WorkingDaysSchema.findByIdAndUpdate(workingDays._id, {
      day: workingDays.day,
    });
    sendWorkingDays();
  } catch (error) {
    console.log(error);
  }
});

//********************************************************************************************** Working Hours*/
//Add Working Hour
ipcMain.on("AddWorkingHours:add", async (e, AddWorkingHours) => {
  try {
    await WorkingDaysSchema.findByIdAndUpdate(AddWorkingHours._id, {
      startingHours: AddWorkingHours.startingHours,
      endingHours: AddWorkingHours.endingHours,
    });
  } catch (error) {
    console.log(error);
  }
});

// delete working day
ipcMain.on("workingHours:delete", async (e, id) => {
  try {
    await WorkingDaysSchema.findByIdAndUpdate(id, {
      startingHours: null,
      endingHours: null,
    });
    sendWorkingDays();
  } catch (error) {
    console.log(error);
  }
});

// Update working Hour
ipcMain.on("workingHours:update", async (e, workingDays) => {
  try {
    await WorkingDaysSchema.findByIdAndUpdate(workingDays._id, {
      startingHours: workingDays.startingHours,
      endingHours: workingDays.endingHours,
    });
    sendWorkingDays();
  } catch (error) {
    console.log(error);
  }
});

//********************************************************************************************** Time Slots*/
//Add Time Slot to the DataBase
ipcMain.on("AddTimeSlot:add", async (e, AddTimeSlot) => {
  try {
    // console.log(AddTimeSlot);
    await TimeSlotSchema.create(AddTimeSlot);
  } catch (error) {
    console.log(error);
  }
});

// Get Time Slot from the Database
ipcMain.on("timeSlot:load", sendTimeSlot);
async function sendTimeSlot() {
  try {
    const timeSlot = await TimeSlotSchema.find();
    mainWindow.webContents.send("timeSlot:get", JSON.stringify(timeSlot));
  } catch (error) {
    console.log(error);
  }
}

// Update Time Slot
ipcMain.on("timeSlot:update", async (e, timeSlot) => {
  try {
    await TimeSlotSchema.findByIdAndUpdate(timeSlot._id, {
      slot: timeSlot.slot,
    });
  } catch (error) {
    console.log(error);
  }
});

// get primary_Session data from database
ipcMain.on("primary_Sessions:load", sendPrimarySessions);
async function sendPrimarySessions() {
  try {
    const primary_Sessions = await PrimarySessions.find().sort({ created: 1 });
    mainWindow.webContents.send(
      "primary_Sessions:get",
      JSON.stringify(primary_Sessions)
    );
    // console.log("f", primary_Sessions);
  } catch (error) {
    console.log(error);
  }
}

// create primary_Session
ipcMain.on("primary_Sessions:add", async (e, primary_Session) => {
  // console.log("primary_Sessions", primary_Session);

  try {
    await PrimarySessions.create(primary_Session);
    sendPrimarySessions();
  } catch (error) {
    console.log("err", error);
  }
});

// delete primary_Session
ipcMain.on("primary_Sessions:delete", async (e, id) => {
  // console.log("id-session", id);
  try {
    await PrimarySessions.findOneAndDelete({ _id: id });
    sendPrimarySessions();
  } catch (error) {
    console.log(error);
  }
});

//update primary_Session
ipcMain.on("primary_Sessions:update", async (e, session) => {
  // console.log("AddSessionRooms", session);

  try {
    await PrimarySessions.findByIdAndUpdate(session.id, {
      lecturers: session.lecturers,
      tag: session.tag,
      group: session.group,
      subject: session.subject,
      code: session.code,
      stdCount: session.stdCount,
      duration: session.duration,
      room: session.room,
    });
    sendPrimarySessions();
  } catch (error) {
    console.log(error);
  }
});

//create consecutive_session
ipcMain.on("consecutiveSession:update", async (e, session) => {
  console.log("consecutiveSession", session);

  try {
    await ConsecutiveSession.findByIdAndUpdate(session._id, {
      lecturers1: session.lecturers1,
      lecturers2: session.lecturers2,
      lecturers3: session.lecturers3,
      tag1: session.tag1,
      tag2: session.tag2,
      tag3: session.tag3,
      group1: session.group1,
      group2: session.group2,
      group3: session.group3,
      subject1: session.subject1,
      subject2: session.subject2,
      subject3: session.subject3,
      stdCount1: session.stdCount1,
      stdCount2: session.stdCount2,
      stdCount3: session.stdCount3,
      duration1: session.duration1,
      duration2: session.duration2,
      duration3: session.duration3,
      room: session.room,
    });
    sendConsecutiveSessions();
  } catch (error) {
    console.log(error);
  }
});

// get Lecturer_Rooms data from database
ipcMain.on("lecturer_Rooms:load", sendLecturerRooms);
async function sendLecturerRooms() {
  try {
    const lecturer_Rooms = await LecturerRooms.find().sort({ created: 1 });
    mainWindow.webContents.send(
      "lecturer_Rooms:get",
      JSON.stringify(lecturer_Rooms)
    );
    // console.log("lecturer_Rooms", lecturer_Rooms);
  } catch (error) {
    console.log(error);
  }
}

// create Lecturer_Rooms
ipcMain.on("lecturer_Rooms:add", async (e, room) => {
  // console.log("lecturer_Rooms", room);

  try {
    await LecturerRooms.create(room);
    sendLecturerRooms();
  } catch (error) {
    console.log(error);
  }
});

// delete Lecturer_Rooms
ipcMain.on("lecturer_Rooms:delete", async (e, id) => {
  try {
    await LecturerRooms.findOneAndDelete({ _id: id });
    sendLecturerRooms();
  } catch (error) {
    console.log(error);
  }
});

// get group_Rooms data from database
ipcMain.on("group_Rooms:load", sendGroupRooms);
async function sendGroupRooms() {
  try {
    const group_Rooms = await GroupRooms.find().sort({ created: 1 });
    mainWindow.webContents.send("group_Rooms:get", JSON.stringify(group_Rooms));
    // console.log("f", group_Rooms);
  } catch (error) {
    console.log(error);
  }
}

// delete group_Rooms
ipcMain.on("group_Rooms:delete", async (e, id) => {
  try {
    await GroupRooms.findOneAndDelete({ _id: id });
    sendGroupRooms();
  } catch (error) {
    console.log(error);
  }
});

// create group_Rooms
ipcMain.on("group_Rooms:add", async (e, room) => {
  // console.log("group_Rooms", room);

  try {
    await GroupRooms.create(room);
    sendGroupRooms();
  } catch (error) {
    console.log(error);
  }
});

// get subject_Rooms data from database
ipcMain.on("subject_Rooms:load", sendSubjectRooms);
async function sendSubjectRooms() {
  try {
    const subject_Rooms = await SubjectRooms.find().sort({ created: 1 });
    mainWindow.webContents.send(
      "subject_Rooms:get",
      JSON.stringify(subject_Rooms)
    );
    // console.log("subject_Rooms", subject_Rooms);
  } catch (error) {
    console.log(error);
  }
}

// create subject_Rooms
ipcMain.on("subject_Rooms:add", async (e, room) => {
  // console.log("subject_Rooms", room);

  try {
    await SubjectRooms.create(room);
    sendSubjectRooms();
  } catch (error) {
    console.log(error);
  }
});

// delete subject_Room
ipcMain.on("subject_Rooms:delete", async (e, id) => {
  try {
    await SubjectRooms.findOneAndDelete({ _id: id });
    sendSubjectRooms();
  } catch (error) {
    console.log(error);
  }
});

// get Tag_Rooms data from database
ipcMain.on("tag_Rooms:load", sendTagRooms);
async function sendTagRooms() {
  try {
    const tag_Rooms = await TagRooms.find().sort({ created: 1 });
    mainWindow.webContents.send("tag_Rooms:get", JSON.stringify(tag_Rooms));
    // console.log("tag_Rooms", tag_Rooms);
  } catch (error) {
    console.log(error);
  }
}

// create Tag_Rooms
ipcMain.on("tag_Rooms:add", async (e, room) => {
  // console.log("tag_Rooms", room);

  try {
    await TagRooms.create(room);
    sendTagRooms();
  } catch (error) {
    console.log(error);
  }
});

// delete Tag_Room
ipcMain.on("tag_Rooms:delete", async (e, id) => {
  try {
    await TagRooms.findOneAndDelete({ _id: id });
    sendTagRooms();
  } catch (error) {
    console.log(error);
  }
});

// get Not Available_Rooms data from database
ipcMain.on("no_Rooms:load", sendNoRooms);
async function sendNoRooms() {
  try {
    const no_Rooms = await NoRooms.find().sort({ created: 1 });
    mainWindow.webContents.send("no_Rooms:get", JSON.stringify(no_Rooms));
    // console.log("no_Rooms", no_Rooms);
  } catch (error) {
    console.log(error);
  }
}

// create  Not Available_Rooms
ipcMain.on("no_Rooms:add", async (e, room) => {
  // console.log("no_Rooms", room);

  try {
    await NoRooms.create(room);
    sendNoRooms();
  } catch (error) {
    console.log(error);
  }
});

// delete Not Available_Rooms
ipcMain.on("no_Rooms:delete", async (e, id) => {
  try {
    await NoRooms.findOneAndDelete({ _id: id });
    sendNoRooms();
  } catch (error) {
    console.log(error);
  }
});

//********************************************************************************************************* */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

// Stop error
app.allowRendererProcessReuse = true;
