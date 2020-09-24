import React, { Component } from "react";
import { ipcRenderer } from "electron";
import Swal from "sweetalert2";

const DaysAndHoursContext = React.createContext();
class DaysAndHoursProvider extends Component {
  state = {
    workingDays: [],
    workingHours: [],
    filteredWorkingDays: {},
    filteredWorkingHours: {},
    timeSlot: "",
    show: false,
    message: "",
    variant: "success",
  };

  //*****************************************************************************************Working Days */
  // Add Working Days
  AddWorkingDays = (AddWorkingDays) => {
    ipcRenderer.send("AddWorkingDays:add", AddWorkingDays);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Working Days Added",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // Populate working Days
  populateWorkingDays() {
    try {
      ipcRenderer.send("workingDays:load");
      ipcRenderer.on("workingDays:get", (e, workingDays) => {
        this.setState({
          workingDays: JSON.parse(workingDays),
        });
        console.log("abc", this.state.workingDays);
      });
    } catch (ex) {}
  }

  // delete working days
  deleteWorkingDays = (_id) => {
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
          ipcRenderer.send("workingDays:delete", _id);
          this.showAlert("Working Day Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Working Day Removed",
            showConfirmButton: true,
          }).then(function () {});
        }
      });
    } catch (error) {}
  };

  // filter working days
  filterWorkingDays = (_id) => {
    const { workingDays } = this.state;

    let tempWorkingDays = [...workingDays];

    const selectedWorkingDays = tempWorkingDays.filter(
      (item) => item._id === _id
    );

    this.setState({
      filteredWorkingDays: selectedWorkingDays,
    });
  };

  // Update Working Days
  updateWorkingDays = (workingDays) => {
    ipcRenderer.send("workingDays:update", workingDays);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Working Day Updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  //*****************************************************************************************Working Hours */

  // Add Working Hours
  AddWorkingHours = (AddWorkingHours) => {
    ipcRenderer.send("AddWorkingHours:add", AddWorkingHours);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Working Hours Added",
      showConfirmButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  };

  // delete working hours
  deleteWorkingHours = (_id) => {
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
          ipcRenderer.send("workingHours:delete", _id);
          this.showAlert("Working Hours Removed");
          Swal.fire({
            icon: "success",
            title: "Deleted!",
            text: "Working Hour Removed",
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
        }
      });
    } catch (error) {}
  };

  // Update Working Hours
  updateWorkingHours = (workingDays) => {
    ipcRenderer.send("workingHours:update", workingDays);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Working Hour Updated",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.history.back();
    });
  };

  //*****************************************************************************************Time Slots */
  // Add Time Slots
  AddTimeSlot = (AddTimeSlot) => {
    ipcRenderer.send("AddTimeSlot:add", AddTimeSlot);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Time Slot Added",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.reload();
    });
  };

  // Populate time Slots
  populateTimeSlot() {
    try {
      ipcRenderer.send("timeSlot:load");
      ipcRenderer.on("timeSlot:get", (e, timeSlot) => {
        this.setState({
          timeSlot: JSON.parse(timeSlot),
        });
      });
    } catch (ex) {}
  }

  // Update Time Slot
  updateTimeSlot = (timeSlot) => {
    ipcRenderer.send("timeSlot:update", timeSlot);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Time Slot Updated",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.reload();
    });
  };

  componentDidMount = () => {
    this.populateWorkingDays();
    this.populateTimeSlot();
    ipcRenderer.on("workingDays:clear", () => {
      this.setState({ workingDays: [] });
      this.showAlert("Working Days Cleared");
    });
  };

  showAlert = (message, variant = "success", seconds = 3000) => {
    this.setState({ show: true, message, variant });

    setTimeout(() => {
      this.setState({ show: false, message: "", variant: "success" });
    }, seconds);
  };

  render() {
    return (
      <DaysAndHoursContext.Provider
        value={{
          ...this.state,
          AddWorkingDays: this.AddWorkingDays,
          deleteWorkingDays: this.deleteWorkingDays,
          filterWorkingDays: this.filterWorkingDays,
          updateWorkingDays: this.updateWorkingDays,
          AddWorkingHours: this.AddWorkingHours,
          deleteWorkingHours: this.deleteWorkingHours,
          updateWorkingHours: this.updateWorkingHours,
          AddTimeSlot: this.AddTimeSlot,
          updateTimeSlot: this.updateTimeSlot,
        }}
      >
        {this.props.children}
      </DaysAndHoursContext.Provider>
    );
  }
}

const DaysAndHoursConsumer = DaysAndHoursContext.Consumer;
export { DaysAndHoursProvider, DaysAndHoursConsumer, DaysAndHoursContext };
