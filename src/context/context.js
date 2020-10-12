import React, { Component } from "react";
import { ipcRenderer } from "electron";
import Swal from "sweetalert2";

// Log context
const LogContext = React.createContext();
class LogProvider extends Component {
  state = {
    lecturers: [],
    sortedLecturers: [],
    lecturer: {},
    subjects: [],
    sortedSubjects: [],
    sub: {},
    faculties: [],
    sortedFaculties: [],
    fac: {},
    departments: [],
    sortedDepartments: [],
    dep: {},
    centers: [],
    sortedCenters: [],
    cent: {},
    levels: [],
    sortedLevels: [],
    lev: {},
    buildings: [],
    sortedBuildings: [],
    buil: {},
    rooms: [],
    sortedRooms: [],
    groupRooms: [],
    lecturerRooms: [],
    subjectRooms: [],
    tagRooms: [],
    notAvailableRooms: [],
    primarySessions: [],
    sortedPrimarySessions: [],
    room: {},
    search: "",
    alert: {
      show: false,
      message: "",
      variant: "success",
    },
  };

  //search primary sessions
  handleSearch = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortSessionData
    );
  };

  sortSessionData = () => {
    console.log("sessions");
    const { primarySessions, search } = this.state;
    let tempSessions = [...primarySessions];

    if (search.length > 0) {
      tempSessions = tempSessions.filter((item) => {
        let tempLecturer;
        let tempSearch = search.toLowerCase();
        item.lecturers.map((lec) => {
          tempLecturer = lec.toLowerCase().slice(0, search.length);
        });
        let tempTag = item.tag.toLowerCase().slice(0, search.length);
        let tempGroup = item.group.toLowerCase().slice(0, search.length);
        let tempSubject = item.subject.toLowerCase().slice(0, search.length);
        if (tempSearch === tempLecturer) {
          return item;
        } else if (tempSearch === tempTag) {
          return item;
        } else if (tempSearch === tempGroup) {
          return item;
        } else if (tempSearch === tempSubject) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedPrimarySessions: tempSessions,
    });
  };

  // handle lecturer change
  handleLecturerChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortLecturerData
    );
  };

  sortLecturerData = () => {
    const { lecturers, search } = this.state;
    let tempLecturers = [...lecturers];

    if (search.length > 0) {
      tempLecturers = tempLecturers.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempLecturer = item.name.toLowerCase().slice(0, search.length);
        if (tempSearch === tempLecturer) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedLecturers: tempLecturers,
    });
  };

  // handle faculty change
  handleFacultyChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortFacultyData
    );
  };

  sortFacultyData = () => {
    const { faculties, search } = this.state;
    let tempFaculties = [...faculties];

    if (search.length > 0) {
      tempFaculties = tempFaculties.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempFaculty = item.faculty.toLowerCase().slice(0, search.length);
        if (tempSearch === tempFaculty) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedFaculties: tempFaculties,
    });
  };

  // handle subject change
  handleSubjectChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortSubjectData
    );
  };

  sortSubjectData = () => {
    const { subjects, search } = this.state;
    let tempSubjects = [...subjects];

    if (search.length > 0) {
      tempSubjects = tempSubjects.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempSubject = item.subject.toLowerCase().slice(0, search.length);
        if (tempSearch === tempSubject) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedSubjects: tempSubjects,
    });
  };

  // handle department change
  handleDepartmentChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortDepartmentData
    );
  };

  sortDepartmentData = () => {
    const { departments, search } = this.state;
    let tempDepartments = [...departments];

    if (search.length > 0) {
      tempDepartments = tempDepartments.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempDepartment = item.department
          .toLowerCase()
          .slice(0, search.length);
        if (tempSearch === tempDepartment) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedDepartments: tempDepartments,
    });
  };

  // handle center change
  handleCenterChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortCenterData
    );
  };

  sortCenterData = () => {
    const { centers, search } = this.state;
    let tempCenters = [...centers];

    if (search.length > 0) {
      tempCenters = tempCenters.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempCenter = item.center.toLowerCase().slice(0, search.length);
        if (tempSearch === tempCenter) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedCenters: tempCenters,
    });
  };

  // handle level change
  handleLevelChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortLevelData
    );
  };

  sortLevelData = () => {
    const { levels, search } = this.state;
    let tempLevels = [...levels];

    if (search.length > 0) {
      tempLevels = tempLevels.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempLevel = item.level.toLowerCase().slice(0, search.length);
        let tempCategory = item.category.toLowerCase().slice(0, search.length);
        if (tempSearch === tempLevel) {
          return item;
        }
        if (tempSearch === tempCategory) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedLevels: tempLevels,
    });
  };

  // handle building change
  handleBuildingChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortBuildingData
    );
  };

  sortBuildingData = () => {
    const { buildings, search } = this.state;
    let tempBuildings = [...buildings];

    if (search.length > 0) {
      tempBuildings = tempBuildings.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempBuilding = item.building.toLowerCase().slice(0, search.length);

        if (tempSearch === tempBuilding) {
          return item;
        }

        return null;
      });
    }
    this.setState({
      sortedBuildings: tempBuildings,
    });
  };

  // handle room change
  handleRoomChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortRoomData
    );
  };

  sortRoomData = () => {
    const { rooms, search } = this.state;
    let tempRooms = [...rooms];

    if (search.length > 0) {
      tempRooms = tempRooms.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempRoom = item.roomName.toLowerCase().slice(0, search.length);

        if (tempSearch === tempRoom) {
          return item;
        }

        return null;
      });
    }
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  componentDidMount = () => {
    this.populateLecturers();
    this.populateSubjects();

    this.populateFaculties();
    this.populateDepartments();
    this.populateCenters();
    this.populateLevels();
    this.populateBuildings();
    this.populateRooms();
    this.populatePrimarySessions();
    this.populateGroupsRooms();
    this.populateLecturerRooms();
    this.populateSubjectRooms();
    this.populateTagRooms();
    this.populateNotAvailableRooms();
    ipcRenderer.on("lecturers:clear", () => {
      this.setState({ lecturers: [] });
      this.showAlert("Lecturers Cleared");
    });
    ipcRenderer.on("subjects:clear", () => {
      this.setState({ subjects: [] });
      this.showAlert("Subjects Cleared");
    });
  };

  // show alert
  showAlert = (message, variant = "success", seconds = 3000) => {
    this.setState({ alert: { show: true, message, variant } });

    setTimeout(() => {
      this.setState({
        alert: { show: false, message: "", variant: "success" },
      });
    }, seconds);
  };

  // delete lecturer
  deleteLecturer = (id) => {
    // delete tag

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("lecturers:delete", id);
          this.showAlert("Lecturer Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Lecturer has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add lecturer

  addLecturer = (lecturer) => {
    var empId;
    if (lecturer.eid !== "") {
      empId = this.state.lecturers.filter((l) => l.eid == lecturer.eid);
    }
    if (empId !== "")
      this.showAlert("please select different employee ID", "danger");
    if (lecturer.name === "")
      this.showAlert("please enter Lecturer Name", "danger");
    else if (lecturer.eid === "")
      this.showAlert("please enter Employee ID", "danger");
    else if (lecturer.faculty === "")
      this.showAlert("please select Faculty", "danger");
    else if (lecturer.department === "")
      this.showAlert("please select Department", "danger");
    else if (lecturer.center === "")
      this.showAlert("please select Center", "danger");
    else if (lecturer.building === "")
      this.showAlert("please select Building", "danger");
    else if (lecturer.level === "")
      this.showAlert("please select Level", "danger");
    else if (empId == "") {
      ipcRenderer.send("lecturers:add", lecturer);
      this.showAlert("Lecturer Added");
    }
  };

  singleLecturer = (id) => {
    var lecturer = this.state.lecturers.filter((lec) => lec._id === id);
    this.setState({ lecturer });
  };

  //update lecturer
  updateLecturer = (lecturer) => {
    if (lecturer.name === "")
      this.showAlert("please enter Lecturer Name", "danger");
    else if (lecturer.eid === "")
      this.showAlert("please enter Employee ID", "danger");
    else if (lecturer.faculty === "none")
      this.showAlert("please select Faculty", "danger");
    else if (lecturer.department === "none")
      this.showAlert("please select Department", "danger");
    else if (lecturer.center === "none")
      this.showAlert("please select Center", "danger");
    else if (lecturer.building === "none")
      this.showAlert("please select Building", "danger");
    else if (lecturer.level === "none")
      this.showAlert("please select Level", "danger");
    else {
      ipcRenderer.send("lecturers:update", lecturer);
      this.showAlert("Lecturer Updated");
    }
  };

  // populate lecturers
  populateLecturers = () => {
    try {
      ipcRenderer.send("lecturers:load");
      ipcRenderer.on("lecturers:get", (e, lecturers) => {
        this.setState({
          lecturers: JSON.parse(lecturers),
          sortedLecturers: JSON.parse(lecturers),
        });
      });
    } catch (ex) {}
  };

  // delete subject
  deleteSubject = (code) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("subjects:delete", code);
          this.showAlert("Subject Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Subject has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add subject

  addSubject = (subject) => {
    if (subject.subject === "")
      this.showAlert("please enter Subject Name", "danger");
    else if (subject.code === "")
      this.showAlert("please enter Subject Code", "danger");
    else if (subject.year === "")
      this.showAlert("please enter Offered Year", "danger");
    else if (subject.semester === "")
      this.showAlert("please select Offered Semester", "danger");
    else {
      ipcRenderer.send("subjects:add", subject);
      this.showAlert("Subject Added");
    }
  };

  singleSubject = (id) => {
    var sub = this.state.subjects.filter((subject) => subject._id === id);
    this.setState({ sub });
  };

  //update subject
  updateSubject = (subject) => {
    if (subject.subject === "")
      this.showAlert("please enter Subject Name", "danger");
    else if (subject.code === "")
      this.showAlert("please enter Subject Code", "danger");
    else if (subject.year === "")
      this.showAlert("please enter Offered Year", "danger");
    else if (subject.semester === "none")
      this.showAlert("please select Offered Semester", "danger");
    else {
      ipcRenderer.send("subjects:update", subject);
      this.showAlert("subject Updated");
    }
  };

  // populate subject
  populateSubjects = () => {
    try {
      ipcRenderer.send("subjects:load");
      ipcRenderer.on("subjects:get", (e, subjects) => {
        this.setState({
          subjects: JSON.parse(subjects),
          sortedSubjects: JSON.parse(subjects),
        });
      });
    } catch (ex) {}
  };

  // delete faculty
  deleteFaculty = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("faculties:delete", id);
          this.showAlert("Faculty Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Faculty has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add faculty

  addFaculty = (faculty) => {
    if (faculty.faculty === "" || faculty.faculty === "") {
      this.showAlert("please enter Faculty Name", "danger");
      return false;
    }
    ipcRenderer.send("faculties:add", faculty);
    this.showAlert("Faculty Added");
  };

  singleFaculty = (id) => {
    var fac = this.state.faculties.filter((faculty) => faculty._id === id);
    this.setState({ fac });
  };

  //update faculty
  updateFaculty = (faculty) => {
    if (faculty.faculty === "" || faculty.faculty === "") {
      this.showAlert("please enter Faculty Name", "danger");
      return false;
    }
    ipcRenderer.send("faculties:update", faculty);
    this.showAlert("Faculty Updated");
  };

  // populate faculties
  populateFaculties = () => {
    try {
      ipcRenderer.send("faculties:load");
      ipcRenderer.on("faculties:get", (e, faculties) => {
        this.setState({
          faculties: JSON.parse(faculties),
          sortedFaculties: JSON.parse(faculties),
        });
      });
    } catch (ex) {}
  };

  // delete department
  deleteDepartment = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("departments:delete", id);
          this.showAlert("Department Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Department has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add department

  addDepartment = (department) => {
    if (department.department === "" || department.department === "") {
      this.showAlert("please enter Department Name", "danger");
      return false;
    }
    ipcRenderer.send("departments:add", department);
    this.showAlert("Department Added");
  };

  singleDepartment = (id) => {
    var dep = this.state.departments.filter(
      (department) => department._id === id
    );
    this.setState({ dep });
  };

  //update department
  updateDepartment = (department) => {
    if (department.department === "" || department.department === "") {
      this.showAlert("please enter Department Name", "danger");
      return false;
    }
    ipcRenderer.send("departments:update", department);
    this.showAlert("Department Updated");
  };

  // populate departments
  populateDepartments = () => {
    try {
      ipcRenderer.send("departments:load");
      ipcRenderer.on("departments:get", (e, departments) => {
        this.setState({
          departments: JSON.parse(departments),
          sortedDepartments: JSON.parse(departments),
        });
      });
    } catch (ex) {}
  };

  // delete center
  deleteCenter = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("centers:delete", id);
          this.showAlert("Center Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Center has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add center

  addCenter = (center) => {
    if (center.center === "" || center.center === "") {
      this.showAlert("please enter Center Name", "danger");
      return false;
    }
    ipcRenderer.send("centers:add", center);
    this.showAlert("Center Added");
  };

  singleCenter = (id) => {
    var cent = this.state.centers.filter((center) => center._id === id);
    this.setState({ cent });
  };

  //update center
  updateCenter = (center) => {
    if (center.center === "" || center.center === "") {
      this.showAlert("please enter Center Name", "danger");
      return false;
    }

    ipcRenderer.send("centers:update", center);
    this.showAlert("Center Updated");
  };

  // populate centers
  populateCenters = () => {
    try {
      ipcRenderer.send("centers:load");
      ipcRenderer.on("centers:get", (e, centers) => {
        this.setState({
          centers: JSON.parse(centers),
          sortedCenters: JSON.parse(centers),
        });
      });
    } catch (ex) {}
  };

  // delete center
  deleteLevel = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("levels:delete", id);
          this.showAlert("Level Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Level has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // delete level
  deleteLevel = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("levels:delete", id);
          this.showAlert("levels Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "levels has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add levels

  addLevel = (level) => {
    if (level.category === "")
      this.showAlert("please enter Category Name", "danger");
    else if (level.level === "") this.showAlert("please enter Level", "danger");
    else {
      ipcRenderer.send("levels:add", level);
      this.showAlert("Level Added");
    }
  };

  singleLevel = (id) => {
    var lev = this.state.levels.filter((level) => level._id === id);
    this.setState({ lev });
  };

  //update level
  updateLevel = (level) => {
    if (level.category === "")
      this.showAlert("please enter Category Name", "danger");
    else if (level.level === "") this.showAlert("please enter Level", "danger");
    else {
      ipcRenderer.send("levels:update", level);
      this.showAlert("Level Updated");
    }
  };

  // populate levels
  populateLevels = () => {
    try {
      ipcRenderer.send("levels:load");
      ipcRenderer.on("levels:get", (e, levels) => {
        this.setState({
          levels: JSON.parse(levels),
          sortedLevels: JSON.parse(levels),
        });
      });
    } catch (ex) {}
  };

  // yash context

  // delete building
  deleteBuilding = (building) => {
    this.state.rooms.map((room) => {
      if (room.building == building.building) {
        this.deleteLinkedRoom(room._id);
      }
    });
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("buildings:delete", building._id);
          this.showAlert("Building Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Building has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add building

  addBuilding = (building) => {
    if (building.building === "" || building.building === "") {
      this.showAlert("please enter Building Name", "danger");
      return false;
    }
    ipcRenderer.send("buildings:add", building);
    this.showAlert("Building Added");
  };

  singleBuilding = (id) => {
    var buil = this.state.buildings.filter((building) => building._id === id);
    this.setState({ buil });
  };

  //update building
  updateBuilding = (building) => {
    if (building.building === "" || building.building === "") {
      this.showAlert("please enter Building Name", "danger");
      return false;
    }
    ipcRenderer.send("buildings:update", building);
    this.showAlert("Building Updated");
  };

  // populate buildings
  populateBuildings = () => {
    try {
      ipcRenderer.send("buildings:load");
      ipcRenderer.on("buildings:get", (e, buildings) => {
        this.setState({
          buildings: JSON.parse(buildings),
          sortedBuildings: JSON.parse(buildings),
        });
      });
    } catch (ex) {}
  };

  // delete room
  deleteRoom = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("rooms:delete", id);
          this.showAlert("Room Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Room has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // delete Linked Room
  deleteLinkedRoom = (id) => {
    ipcRenderer.send("rooms:delete", id);
  };

  // add room

  addRoom = (room) => {
    if (room.roomName === "")
      this.showAlert("please enter Room Name", "danger");
    else if (room.roomType === "")
      this.showAlert("please select Room Type", "danger");
    else if (room.building === "")
      this.showAlert("please select Building", "danger");
    else if (room.capacity === "")
      this.showAlert("please select Capacity", "danger");
    else {
      ipcRenderer.send("rooms:add", room);
      this.showAlert("room Added");
    }
  };

  singleRoom = (id) => {
    var room = this.state.rooms.filter((room) => room._id === id);
    this.setState({ room });
  };

  //update room
  updateRoom = (room) => {
    if (room.roomName === "")
      this.showAlert("please enter Room Name", "danger");
    else if (room.roomType === "")
      this.showAlert("please select Room Type", "danger");
    else if (room.building === "none")
      this.showAlert("please select Building", "danger");
    else if (room.capacity === "")
      this.showAlert("please select Capacity", "danger");
    else {
      ipcRenderer.send("rooms:update", room);
      this.showAlert("Room Updated");
    }
  };

  // populate rooms
  populateRooms = () => {
    try {
      ipcRenderer.send("rooms:load");
      ipcRenderer.on("rooms:get", (e, rooms) => {
        this.setState({
          rooms: JSON.parse(rooms),
          sortedRooms: JSON.parse(rooms),
        });
      });
    } catch (ex) {}
  };

  //  Add Lecturer-Rooms
  AddLecturerRooms = (Lroom) => {
    if (Lroom.lecturer === "")
      this.showAlert("please select Lecturer", "danger");
    else if (Lroom.laboratories === "" && Lroom.lectureHalls === "")
      this.showAlert("please select Room", "danger");
    else {
      ipcRenderer.send("lecturer_Rooms:add", Lroom);
      this.showAlert("Lecturer Room Added");
    }
  };

  // populate Lecturer-Rooms
  populateLecturerRooms = () => {
    try {
      ipcRenderer.send("lecturer_Rooms:load");
      ipcRenderer.on("lecturer_Rooms:get", (e, lecturerRooms) => {
        this.setState({
          lecturerRooms: JSON.parse(lecturerRooms),
        });
      });
    } catch (ex) {}
  };

  //   delete Lecturer Room
  deleteLecturerRoom = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("lecturer_Rooms:delete", id);
          this.showAlert("Lecturer-Room Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Lecturer-Room has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // Add Groups-Rooms
  AddGroupsRooms = (Groom) => {
    if (Groom.group === "") this.showAlert("please select Group", "danger");
    else if (Groom.laboratories === "" && Groom.lectureHalls === "")
      this.showAlert("please select Room", "danger");
    else {
      ipcRenderer.send("group_Rooms:add", Groom);
      this.showAlert("Group-Rooms Added");
    }
  };

  // delete Group Room
  deleteGroupRoom = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("group_Rooms:delete", id);
          this.showAlert(" Group-Room Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Group-Room has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };
  // populate Groups-Rooms
  populateGroupsRooms = () => {
    try {
      ipcRenderer.send("group_Rooms:load");
      ipcRenderer.on("group_Rooms:get", (e, groupRooms) => {
        this.setState({
          groupRooms: JSON.parse(groupRooms),
        });
      });
    } catch (ex) {}
  };

  singleGroupRoom = (id) => {
    var singleGroupRoom = this.state.groupRooms.filter((gr) => gr._id === id);
    this.setState({ singleGroupRoom });
  };

  // Add Subject-Rooms
  AddSubjectRooms = (Sroom) => {
    if (Sroom.subject === "") this.showAlert("please select Subject", "danger");
    else if (Sroom.tag === "") this.showAlert("please select Tag", "danger");
    else if (Sroom.laboratories === "" && Sroom.lectureHalls === "")
      this.showAlert("please select Room", "danger");
    else {
      ipcRenderer.send("subject_Rooms:add", Sroom);
      this.showAlert("Subject-Rooms Added");
    }
    // }
  };

  // delete Subject Room
  deleteSubjectRoom = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("subject_Rooms:delete", id);
          this.showAlert("Subject-Room Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Subject-Room has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // populate Subject-Rooms
  populateSubjectRooms = () => {
    try {
      ipcRenderer.send("subject_Rooms:load");
      ipcRenderer.on("subject_Rooms:get", (e, subjectRooms) => {
        this.setState({
          subjectRooms: JSON.parse(subjectRooms),
        });
      });
    } catch (ex) {}
  };

  // Add Tag-Rooms
  AddTagRooms = (Troom) => {
    if (Troom.tagName === "") this.showAlert("please select Tag", "danger");
    else if (Troom.laboratories === "" && Troom.lectureHalls == "")
      this.showAlert("please select Room", "danger");
    else {
      ipcRenderer.send("tag_Rooms:add", Troom);
      this.showAlert("tag-Rooms Added");
    }
    // }
  };

  // populate Tag-Rooms
  populateTagRooms = () => {
    try {
      ipcRenderer.send("tag_Rooms:load");
      ipcRenderer.on("tag_Rooms:get", (e, tagRooms) => {
        this.setState({
          tagRooms: JSON.parse(tagRooms),
        });
      });
    } catch (ex) {}
  };

  // delete Tag Room
  deleteTagRoom = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("tag_Rooms:delete", id);
          this.showAlert("Tag-Room Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Tag-Room has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  //create Primary Session

  createPrimarySession = (session) => {
    if (session.lecturers.length === 0)
      this.showAlert("please select Lecturer", "danger");
    else if (session.tag === "") this.showAlert("please select Tag", "danger");
    else if (session.group === "")
      this.showAlert("please select Group", "danger");
    else if (session.subject === "")
      this.showAlert("please select Subject", "danger");
    else if (session.stdCount === "")
      this.showAlert("please enter Student Count", "danger");
    else if (session.duration === "")
      this.showAlert("please enter Duration", "danger");
    else {
      ipcRenderer.send("primary_Sessions:add", session);
      this.showAlert("Primary Session Added");
    }
  };

  // populate Primary Session
  populatePrimarySessions = () => {
    try {
      ipcRenderer.send("primary_Sessions:load");
      ipcRenderer.on("primary_Sessions:get", (e, primary_Sessions) => {
        this.setState({
          primarySessions: JSON.parse(primary_Sessions),
          sortedPrimarySessions: JSON.parse(primary_Sessions),
        });
      });
    } catch (ex) {}
  };

  // delete Session
  deleteSession = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("primary_Sessions:delete", id);
          this.showAlert("Session Removed");
          Swal.fire({
            timer: 2000,
            timerProgressBar: true,
            icon: "success",
            title: "Deleted!",
            text: "Session has been deleted",
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // delete Primary Session
  deletePrimarySession = (id) => {
    try {
      ipcRenderer.send("primary_Sessions:delete", id);
      this.showAlert("Session Removed");
    } catch (error) {}
  };

  //Add Session Rooms
  AddSessionRooms = (session) => {
    if (session.room === "") this.showAlert("please select Room", "danger");
    else {
      ipcRenderer.send("primary_Sessions:update", session);
      this.showAlert("Add Session-Room");
    }
  };

  //Add ConsecutiveSession Room
  AddConsecutiveSessionRoom = (session) => {
    if (session.room === "") this.showAlert("please select Room", "danger");
    else {
      ipcRenderer.send("consecutiveSession:update", session);
      this.showAlert("Add Consecutive Session-Room");
    }
  };

  deleteConsecutiveSessionRoom = (s) => {
    const session = {
      _id: s._id,
      number: s.number,
      sessions: s.sessions,
      room: "",
    };

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("consecutiveSession:update", session);
          this.showAlert("Delete Consecutive Session-Room");
          Swal.fire({
            timer: 2000,
            timerProgressBar: true,
            icon: "success",
            title: "Deleted!",
            text: "Consecutive Session-Room has been deleted",
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // Add Not Available Rooms
  AddNotAvailableRooms = (room) => {
    if (room.room === "") this.showAlert("please select Room", "danger");
    else if (room.day === "") this.showAlert("please select Day", "danger");
    else if (room.start === "")
      this.showAlert("please select Start Time", "danger");
    else if (room.end === "")
      this.showAlert("please select End Time", "danger");
    else {
      ipcRenderer.send("no_Rooms:add", room);
      this.showAlert("Not Available Rooms Added");
    }
    // }
  };

  // populate Not Available Rooms
  populateNotAvailableRooms = () => {
    try {
      ipcRenderer.send("no_Rooms:load");
      ipcRenderer.on("no_Rooms:get", (e, no_Rooms) => {
        this.setState({
          notAvailableRooms: JSON.parse(no_Rooms),
        });
      });
    } catch (ex) {}
  };

  // delete Not Available Room
  deleteNotAvailableRoom = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.value) {
          ipcRenderer.send("no_Rooms:delete", id);
          this.showAlert("Not Available Room Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Not Available Room has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  render() {
    return (
      <LogContext.Provider
        value={{
          ...this.state,
          showAlert: this.showAlert,

          deleteLecturer: this.deleteLecturer,
          addLecturer: this.addLecturer,
          singleLecturer: this.singleLecturer,
          updateLecturer: this.updateLecturer,

          deleteSubject: this.deleteSubject,
          addSubject: this.addSubject,
          singleSubject: this.singleSubject,
          updateSubject: this.updateSubject,

          deleteFaculty: this.deleteFaculty,
          addFaculty: this.addFaculty,
          singleFaculty: this.singleFaculty,
          updateFaculty: this.updateFaculty,

          deleteDepartment: this.deleteDepartment,
          addDepartment: this.addDepartment,
          singleDepartment: this.singleDepartment,
          updateDepartment: this.updateDepartment,

          deleteCenter: this.deleteCenter,
          addCenter: this.addCenter,
          singleCenter: this.singleCenter,
          updateCenter: this.updateCenter,

          deleteLevel: this.deleteLevel,
          addLevel: this.addLevel,
          singleLevel: this.singleLevel,
          updateLevel: this.updateLevel,

          deleteBuilding: this.deleteBuilding,
          addBuilding: this.addBuilding,
          singleBuilding: this.singleBuilding,
          updateBuilding: this.updateBuilding,

          addRoom: this.addRoom,
          deleteRoom: this.deleteRoom,
          singleRoom: this.singleRoom,
          updateRoom: this.updateRoom,
          deleteLinkedRoom: this.deleteLinkedRoom,

          AddLecturerRooms: this.AddLecturerRooms,
          deleteLecturerRoom: this.deleteLecturerRoom,

          AddGroupsRooms: this.AddGroupsRooms,
          deleteGroupRoom: this.deleteGroupRoom,
          singleGroupRoom: this.singleGroupRoom,

          AddSubjectRooms: this.AddSubjectRooms,
          deleteSubjectRoom: this.deleteSubjectRoom,

          AddTagRooms: this.AddTagRooms,
          deleteTagRoom: this.deleteTagRoom,

          AddNotAvailableRooms: this.AddNotAvailableRooms,
          deleteNotAvailableRoom: this.deleteNotAvailableRoom,

          createPrimarySession: this.createPrimarySession,
          deleteSession: this.deleteSession,

          AddSessionRooms: this.AddSessionRooms,
          AddConsecutiveSessionRoom: this.AddConsecutiveSessionRoom,
          deleteConsecutiveSessionRoom: this.deleteConsecutiveSessionRoom,

          handleLecturerChange: this.handleLecturerChange,
          handleSubjectChange: this.handleSubjectChange,
          handleFacultyChange: this.handleFacultyChange,
          handleDepartmentChange: this.handleDepartmentChange,
          handleCenterChange: this.handleCenterChange,
          handleLevelChange: this.handleLevelChange,
          handleBuildingChange: this.handleBuildingChange,
          handleRoomChange: this.handleRoomChange,
          handleSearch: this.handleSearch,
        }}
      >
        {this.props.children}
      </LogContext.Provider>
    );
  }
}

const LogConsumer = LogContext.Consumer;
export { LogProvider, LogConsumer, LogContext };
