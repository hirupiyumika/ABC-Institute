import React, { Component } from "react";
import { ipcRenderer } from "electron";
import Swal from "sweetalert2";

const StudentContext = React.createContext();
class StudentProvider extends Component {
  state = {
    academicYearAndSemesters: [],
    sortedAcademicYearAndSemesters: [],
    programmes: [],
    sortedProgrammes: [],
    groups: [],
    sortedGroups: [],
    subGroups: [],
    sortedSubGroups: [],
    tags: [],
    sortedTags: [],
    students: [],
    sortedStudents: [],
    filteredacademicYearAndSemester: {},
    filteredProgramme: {},
    filteredGroup: {},
    filteredSubGroup: {},
    filteredTag: {},
    filteredStudent: {},
    show: false,
    message: "",
    variant: "success",
    search: "",
  };

  // update academic year and semester
  updateAcademicYearAndSemester = (academicYearAndSemester) => {
    if (
      academicYearAndSemester.year === "" ||
      academicYearAndSemester.semester === ""
    ) {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringAcademicYearAndSemester(academicYearAndSemester)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send(
          "academicYearAndSemesters:update",
          academicYearAndSemester
        );
        this.showAlert("year & semster updated");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // update programme
  updateProgramme = (programmeItem) => {
    if (programmeItem.programme === "") {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringProgramme(programmeItem.programme)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("programmes:update", programmeItem);
        this.showAlert("programme updated");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // update group
  updateGroup = (groupItem) => {
    if (groupItem.group === "") {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringGroup(groupItem.group)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("groups:update", groupItem);
        this.showAlert("group updated");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // update sub group
  updateSubGroup = (subGroupItem) => {
    if (subGroupItem.subGroup === "") {
      this.showAlert("please enter all fields", "danger");
      return false;
    }
    if (this.filteringSubGroup(subGroupItem.subGroup)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("subGroups:update", subGroupItem);
        this.showAlert("sub group updated");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // update tag
  updateTag = (TagItem) => {
    if (TagItem.tag === "") {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringTag(TagItem.tag)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("tags:update", TagItem);
        this.showAlert("tag updated");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // update student
  updateStudent = (studentItem) => {
    if (
      studentItem.academicYearAndSemester === "" ||
      studentItem.programme === "" ||
      studentItem.mainGroup === "" ||
      studentItem.subGroup === ""
    ) {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringStudent(studentItem)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("students:update", studentItem);
        this.showAlert("student updated");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // filter academic year and semester
  filterAcademicYearAndSemester = (_id) => {
    const { academicYearAndSemesters } = this.state;

    let tempAcademicYearAndSemesters = [...academicYearAndSemesters];

    const selectedAcademicYearAndSemester = tempAcademicYearAndSemesters.filter(
      (item) => item._id === _id
    );

    this.setState({
      filteredacademicYearAndSemester: selectedAcademicYearAndSemester,
    });
  };

  // filter programme
  filterProgramme = (_id) => {
    const { programmes } = this.state;

    let tempProgrammes = [...programmes];

    const selectedProgram = tempProgrammes.filter((item) => item._id === _id);

    this.setState({
      filteredProgramme: selectedProgram,
    });
  };

  // filter group
  filterGroup = (_id) => {
    const { groups } = this.state;

    let tempGroups = [...groups];

    const selectedGroup = tempGroups.filter((item) => item._id === _id);

    this.setState({
      filteredGroup: selectedGroup,
    });
  };

  // filter sub group
  filterSubGroup = (_id) => {
    const { subGroups } = this.state;

    let tempSubGroups = [...subGroups];

    const selectedSubGroup = tempSubGroups.filter((item) => item._id === _id);

    this.setState({
      filteredSubGroup: selectedSubGroup,
    });
  };

  // filter tag
  filterTag = (_id) => {
    const { tags } = this.state;

    let tempTags = [...tags];

    const selectedTag = tempTags.filter((item) => item._id === _id);

    this.setState({
      filteredTag: selectedTag,
    });
  };

  // filter student
  filterStudent = (_id) => {
    const { students } = this.state;

    let tempStudents = [...students];

    const selectedStudent = tempStudents.filter((item) => item._id === _id);

    this.setState({
      filteredStudent: selectedStudent,
    });
  };

  // delete academic year and semester
  deleteAcademicYearAndSemester = (_id) => {
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
          const condition = navigator.onLine;
          if (condition) {
            ipcRenderer.send("academicYearAndSemesters:delete", _id);
            this.showAlert("year & semester removed");
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "year & semester has been deleted",
              showConfirmButton: true,
              timer: 1500,
            }).then(function () {});
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No internet connection!",
            });
          }
        }
      });
    } catch (error) {}
  };

  // delete program
  deleteProgramme = (_id) => {
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
          const condition = navigator.onLine;
          if (condition) {
            ipcRenderer.send("programmes:delete", _id);
            this.showAlert("programme removed");
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "programme has been deleted",
              showConfirmButton: true,
              timer: 1500,
            }).then(function () {});
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No internet connection!",
            });
          }
        }
      });
    } catch (error) {}
  };

  // delete group
  deleteGroup = (_id) => {
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
          const condition = navigator.onLine;
          if (condition) {
            ipcRenderer.send("groups:delete", _id);
            this.showAlert("group removed");
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "group has been deleted",
              showConfirmButton: true,
              timer: 1500,
            }).then(function () {});
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No internet connection!",
            });
          }
        }
      });
    } catch (error) {}
  };

  // delete sub group
  deleteSubGroup = (_id) => {
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
          const condition = navigator.onLine;
          if (condition) {
            ipcRenderer.send("subGroups:delete", _id);
            this.showAlert("sub group removed");
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "sub group has been deleted",
              showConfirmButton: true,
              timer: 1500,
            }).then(function () {});
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No internet connection!",
            });
          }
        }
      });
    } catch (error) {}
  };

  // delete tag
  deleteTag = (_id) => {
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
          const condition = navigator.onLine;
          if (condition) {
            ipcRenderer.send("tags:delete", _id);
            this.showAlert("tag removed");
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "tag has been deleted",
              showConfirmButton: true,
              timer: 1500,
            }).then(function () {});
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No internet connection!",
            });
          }
        }
      });
    } catch (error) {}
  };

  // delete student
  deleteStudent = (_id) => {
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
          const condition = navigator.onLine;
          if (condition) {
            ipcRenderer.send("students:delete", _id);
            this.showAlert("student removed");

            Swal.fire({
              icon: "success",
              title: "Deleted!",
              text: "student has been deleted",
              showConfirmButton: true,
              timer: 1500,
            }).then(function () {});
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "No internet connection!",
            });
          }
        }
      });
    } catch (error) {}
  };

  // filtering academic year and semester
  filteringAcademicYearAndSemester = (academicYearAndSemester) => {
    const { academicYearAndSemesters } = this.state;

    let tempAcademicYearAndSemesters = [...academicYearAndSemesters];

    const selectedAcademicYearAndSemester = tempAcademicYearAndSemesters.filter(
      (item) =>
        item.year === academicYearAndSemester.year &&
        item.semester === academicYearAndSemester.semester
    );

    if (selectedAcademicYearAndSemester.length !== 0) return true;
    else return false;
  };
  // add academic year and semester
  addAcademicYearAndSemester = (academicYearAndSemester) => {
    if (
      academicYearAndSemester.year === "" ||
      academicYearAndSemester.semester === ""
    ) {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringAcademicYearAndSemester(academicYearAndSemester)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send(
          "academicYearAndSemesters:add",
          academicYearAndSemester
        );
        this.showAlert("year & semester added");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // filtering programme
  filteringProgramme = (programme) => {
    const { programmes } = this.state;

    let tempProgrammes = [...programmes];

    const selectedProgram = tempProgrammes.filter(
      (item) => item.programme === programme
    );

    if (selectedProgram.length !== 0) {
      return true;
    } else return false;
  };

  // add programme
  addProgramme = (programme) => {
    if (programme.programme === "") {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringProgramme(programme.programme)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("programmes:add", programme);
        this.showAlert("program added");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // filtering group
  filteringGroup = (group) => {
    const { groups } = this.state;

    let tempGroups = [...groups];

    const selectedGroup = tempGroups.filter((item) => item.group === group);

    if (selectedGroup.length !== 0) return true;
    else return false;
  };

  // add group
  addGroup = (group) => {
    if (group.group === "") {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringGroup(group.group)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("groups:add", group);
        this.showAlert("group added");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // filtering sub group
  filteringSubGroup = (subGroup) => {
    const { subGroups } = this.state;

    let tempSubGroups = [...subGroups];

    const selectedSubGroup = tempSubGroups.filter(
      (item) => item.subGroup === subGroup
    );

    if (selectedSubGroup.length !== 0) return true;
    else return false;
  };

  // add sub group
  addSubGroup = (subGroup) => {
    if (subGroup.subGroup === "") {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringSubGroup(subGroup.subGroup)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("subGroups:add", subGroup);
        this.showAlert("sub group added");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // filtering tag
  filteringTag = (tag) => {
    const { tags } = this.state;

    let tempTags = [...tags];

    const selectedTag = tempTags.filter((item) => item.tag === tag);
    if (selectedTag.length !== 0) return true;
    else return false;
  };

  // add tag
  addTag = (tag) => {
    if (tag.tag === "") {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringTag(tag.tag)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("tags:add", tag);
        this.showAlert("tag added");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // filtering student
  filteringStudent = (student) => {
    const { students } = this.state;

    let tempStudents = [...students];

    const selectedStudent = tempStudents.filter(
      (item) =>
        item.academicYearAndSemester === student.academicYearAndSemester &&
        item.programme === student.programme &&
        item.mainGroup === student.mainGroup &&
        item.subGroup === student.subGroup
    );

    if (selectedStudent.length !== 0) return true;
    else return false;
  };

  // add student
  addStudent = (student) => {
    if (
      student.academicYearAndSemester === "" ||
      student.programme === "" ||
      student.mainGroup === "" ||
      student.subGroup === ""
    ) {
      this.showAlert("please enter all fields", "danger");
      return false;
    }

    if (this.filteringStudent(student)) {
      Swal.fire({
        icon: "warning",
        title: "Warning",
        text: "Already added data",
      });
    } else {
      const condition = navigator.onLine;
      if (condition) {
        ipcRenderer.send("students:add", student);
        this.showAlert("student added");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No internet connection!",
        });
      }
    }
  };

  // show alert
  showAlert = (message, variant = "success", seconds = 3000) => {
    this.setState({ show: true, message, variant });

    setTimeout(() => {
      this.setState({ show: false, message: "", variant: "success" });
    }, seconds);
  };

  // populate academic year and semsters
  populateAcademicYearAndSemesters() {
    try {
      ipcRenderer.send("academicYearAndSemesters:load");
      ipcRenderer.on(
        "academicYearAndSemesters:get",
        (e, academicYearAndSemesters) => {
          this.setState({
            academicYearAndSemesters: JSON.parse(academicYearAndSemesters),
            sortedAcademicYearAndSemesters: JSON.parse(
              academicYearAndSemesters
            ),
          });
        }
      );
    } catch (ex) {}
  }

  // populate programmes
  populateProgrammes() {
    try {
      ipcRenderer.send("programmes:load");
      ipcRenderer.on("programmes:get", (e, programmes) => {
        this.setState({
          programmes: JSON.parse(programmes),
          sortedProgrammes: JSON.parse(programmes),
        });
      });
    } catch (ex) {}
  }

  // populate groups
  populateGroups() {
    try {
      ipcRenderer.send("groups:load");
      ipcRenderer.on("groups:get", (e, groups) => {
        this.setState({
          groups: JSON.parse(groups),
          sortedGroups: JSON.parse(groups),
        });
      });
    } catch (ex) {}
  }

  // populate sub groups
  populateSubGroups() {
    try {
      ipcRenderer.send("subGroups:load");
      ipcRenderer.on("subGroups:get", (e, subGroups) => {
        this.setState({
          subGroups: JSON.parse(subGroups),
          sortedSubGroups: JSON.parse(subGroups),
        });
      });
    } catch (ex) {}
  }

  // populate  tags
  populateTags() {
    try {
      ipcRenderer.send("tags:load");
      ipcRenderer.on("tags:get", (e, tags) => {
        this.setState({
          tags: JSON.parse(tags),
          sortedTags: JSON.parse(tags),
        });
      });
    } catch (ex) {}
  }

  // populate students
  populateStudents() {
    try {
      ipcRenderer.send("students:load");
      ipcRenderer.on("students:get", (e, students) => {
        this.setState({
          students: JSON.parse(students),
          sortedStudents: JSON.parse(students),
        });
      });
    } catch (ex) {}
  }

  // handle  academic year and semesters change
  handleAcademicYearAndSemestersChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortAcademicYearAndSemestersData
    );
  };

  sortAcademicYearAndSemestersData = () => {
    const { academicYearAndSemesters, search } = this.state;
    let tempAcademicYearAndSemesters = [...academicYearAndSemesters];

    if (search.length > 0) {
      tempAcademicYearAndSemesters = tempAcademicYearAndSemesters.filter(
        (item) => {
          let tempSearch = search.toLowerCase();
          let tempacademicYearAndSemester1 = item.yearAndSemester
            .toLowerCase()
            .slice(0, search.length);
          let tempacademicYearAndSemester2 = item.year
            .toLowerCase()
            .slice(0, search.length);
          let tempacademicYearAndSemester3 = item.semester
            .toLowerCase()
            .slice(0, search.length);
          if (tempSearch === tempacademicYearAndSemester1) {
            return item;
          }
          if (tempSearch === tempacademicYearAndSemester2) {
            return item;
          }
          if (tempSearch === tempacademicYearAndSemester3) {
            return item;
          }
          return null;
        }
      );
    }
    this.setState({
      sortedAcademicYearAndSemesters: tempAcademicYearAndSemesters,
    });
  };

  // handle programme change
  handleProgrammeChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortProgrammeData
    );
  };

  sortProgrammeData = () => {
    const { programmes, search } = this.state;
    let tempProgrammes = [...programmes];

    if (search.length > 0) {
      tempProgrammes = tempProgrammes.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempProgramme = item.programme
          .toLowerCase()
          .slice(0, search.length);
        if (tempSearch === tempProgramme) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedProgrammes: tempProgrammes,
    });
  };

  // handle group change
  handleGroupChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortGroupData
    );
  };

  sortGroupData = () => {
    const { groups, search } = this.state;
    let tempGroups = [...groups];

    if (search.length > 0) {
      tempGroups = tempGroups.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempGroup = item.group.toLowerCase().slice(0, search.length);
        if (tempSearch === tempGroup) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedGroups: tempGroups,
    });
  };

  // handle sub group change
  handleSubGroupChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortSubGroupData
    );
  };

  sortSubGroupData = () => {
    const { subGroups, search } = this.state;
    let tempSubGroups = [...subGroups];

    if (search.length > 0) {
      tempSubGroups = tempSubGroups.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempSubGroup = item.subGroup.toLowerCase().slice(0, search.length);
        if (tempSearch === tempSubGroup) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedSubGroups: tempSubGroups,
    });
  };

  // handle tag change
  handleTagChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortTagData
    );
  };

  sortTagData = () => {
    const { tags, search } = this.state;
    let tempTags = [...tags];

    if (search.length > 0) {
      tempTags = tempTags.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempTag = item.tag.toLowerCase().slice(0, search.length);
        if (tempSearch === tempTag) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedTags: tempTags,
    });
  };

  // handle student change
  handleStudentChange = (event) => {
    const name = event.target.name;

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState(
      {
        [name]: value,
      },

      this.sortStudentData
    );
  };

  sortStudentData = () => {
    const { students, search } = this.state;
    let tempStudents = [...students];

    if (search.length > 0) {
      tempStudents = tempStudents.filter((item) => {
        let tempSearch = search.toLowerCase();
        let tempStudent1 = item.programme.toLowerCase().slice(0, search.length);
        let tempStudent2 = item.mainGroup.toLowerCase().slice(0, search.length);
        let tempStudent3 = item.subGroup.toLowerCase().slice(0, search.length);
        let tempStudent4 = item.academicYearAndSemester
          .toLowerCase()
          .slice(0, search.length);
        if (tempSearch === tempStudent1) {
          return item;
        }
        if (tempSearch === tempStudent2) {
          return item;
        }
        if (tempSearch === tempStudent3) {
          return item;
        }
        if (tempSearch === tempStudent4) {
          return item;
        }
        return null;
      });
    }
    this.setState({
      sortedStudents: tempStudents,
    });
  };

  componentDidMount = () => {
    this.populateAcademicYearAndSemesters();
    this.populateProgrammes();
    this.populateGroups();
    this.populateSubGroups();
    this.populateTags();
    this.populateStudents();
    ipcRenderer.on("students:clear", () => {
      this.setState({ students: [], sortedStudents: [] });
      this.showAlert("students cleared");
    });

    ipcRenderer.on("academicYearAndSemesters:clear", () => {
      this.setState({
        academicYearAndSemesters: [],
        sortedAcademicYearAndSemesters: [],
      });
      this.showAlert("academic year & semesters cleared");
    });

    ipcRenderer.on("programmes:clear", () => {
      this.setState({ programmes: [], sortedProgrammes: [] });
      this.showAlert("programmes cleared");
    });

    ipcRenderer.on("groups:clear", () => {
      this.setState({ groups: [], sortedGroups: [] });
      this.showAlert("groups cleared");
    });

    ipcRenderer.on("subGroups:clear", () => {
      this.setState({ subGroups: [], sortedSubGroups: [] });
      this.showAlert("sub groups cleared");
    });

    ipcRenderer.on("tags:clear", () => {
      this.setState({ tags: [], sortedTags: [] });
      this.showAlert("tags cleared");
    });
  };

  render() {
    return (
      <StudentContext.Provider
        value={{
          ...this.state,
          addAcademicYearAndSemester: this.addAcademicYearAndSemester,
          deleteAcademicYearAndSemester: this.deleteAcademicYearAndSemester,
          filterAcademicYearAndSemester: this.filterAcademicYearAndSemester,
          updateAcademicYearAndSemester: this.updateAcademicYearAndSemester,
          addProgramme: this.addProgramme,
          deleteProgramme: this.deleteProgramme,
          filterProgramme: this.filterProgramme,
          updateProgramme: this.updateProgramme,
          addGroup: this.addGroup,
          deleteGroup: this.deleteGroup,
          filterGroup: this.filterGroup,
          updateGroup: this.updateGroup,
          addSubGroup: this.addSubGroup,
          deleteSubGroup: this.deleteSubGroup,
          filterSubGroup: this.filterSubGroup,
          updateSubGroup: this.updateSubGroup,
          addTag: this.addTag,
          deleteTag: this.deleteTag,
          filterTag: this.filterTag,
          updateTag: this.updateTag,
          addStudent: this.addStudent,
          deleteStudent: this.deleteStudent,
          filterStudent: this.filterStudent,
          updateStudent: this.updateStudent,
          handleAcademicYearAndSemestersChange: this
            .handleAcademicYearAndSemestersChange,
          handleProgrammeChange: this.handleProgrammeChange,
          handleGroupChange: this.handleGroupChange,
          handleSubGroupChange: this.handleSubGroupChange,
          handleTagChange: this.handleTagChange,
          handleStudentChange: this.handleStudentChange,
        }}
      >
        {this.props.children}
      </StudentContext.Provider>
    );
  }
}

const StudentConsumer = StudentContext.Consumer;
export { StudentProvider, StudentConsumer, StudentContext };
