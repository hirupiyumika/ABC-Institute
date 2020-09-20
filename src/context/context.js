import React, { Component } from "react";
import { ipcRenderer } from "electron";
import Swal from "sweetalert2";

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
    // this.populateLogs();
    this.populateLecturers();
    this.populateSubjects();

    this.populateFaculties();
    this.populateDepartments();
    this.populateCenters();
    this.populateLevels();
    this.populateBuildings();
    this.populateRooms();
    this.populatePrimarySessions();
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
            text: "tag has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add lecturer

  addLecturer = (lecturer) => {
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
    else {
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
        // console.log(this.state.logs);
      });
    } catch (ex) {}
  };

  // delete subject
  deleteSubject = (code) => {
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
          ipcRenderer.send("subjects:delete", code);
          this.showAlert("Subject Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "tag has been deleted",
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
        // console.log(this.state.logs);
      });
    } catch (ex) {}
  };

  // delete faculty
  deleteFaculty = (id) => {
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
          ipcRenderer.send("faculties:delete", id);
          this.showAlert("Faculty Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "tag has been deleted",
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
    // console.log("FAC", faculty);
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
          ipcRenderer.send("departments:delete", id);
          this.showAlert("Department Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "tag has been deleted",
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
    // console.log("FAC", department);
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
          ipcRenderer.send("centers:delete", id);
          this.showAlert("Center Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "tag has been deleted",
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
    // console.log("center", center);
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
          ipcRenderer.send("levels:delete", id);
          this.showAlert("Level Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "tag has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // delete level
  deleteLevel = (id) => {
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
          ipcRenderer.send("levels:delete", id);
          this.showAlert("levels Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "tag has been deleted",
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
    console.log("uplevel", level);
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
  deleteBuilding = (id) => {
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
          ipcRenderer.send("buildings:delete", id);
          this.showAlert("Building Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "tag has been deleted",
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
    // console.log("BUILDING", building);
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
          ipcRenderer.send("rooms:delete", id);
          this.showAlert("Room Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "tag has been deleted",
            showConfirmButton: true,
            timer: 1500,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // add room

  addRoom = (room) => {
    console.log("room", room);
    if (room.roomName === "")
      this.showAlert("please enter Room Name", "danger");
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

  //create Primary Session

  createPrimarySession = (session) => {
    console.log("session", session);
    if (session.lecturers === "")
      this.showAlert("please select Lecturer", "danger");
    else if (session.tag === "") this.showAlert("please select Tag", "danger");
    // else if (session.mainGroup === "" || session.subGroup === "")
    //   this.showAlert("please select Group", "danger");
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

  render() {
    console.log("primarySessions", this.state.primarySessions);
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

          deleteRoom: this.deleteRoom,
          addRoom: this.addRoom,
          singleRoom: this.singleRoom,
          updateRoom: this.updateRoom,

          createPrimarySession: this.createPrimarySession,

          handleLecturerChange: this.handleLecturerChange,
          handleSubjectChange: this.handleSubjectChange,
          handleFacultyChange: this.handleFacultyChange,
          handleDepartmentChange: this.handleDepartmentChange,
          handleCenterChange: this.handleCenterChange,
          handleLevelChange: this.handleLevelChange,
          handleBuildingChange: this.handleBuildingChange,
          handleRoomChange: this.handleRoomChange,
        }}
      >
        {this.props.children}
      </LogContext.Provider>
    );
  }
}

const LogConsumer = LogContext.Consumer;
export { LogProvider, LogConsumer, LogContext };
