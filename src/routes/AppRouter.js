import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AddStudent from "./../components/pages/AddStudent";
import UpdateStudent from "./../components/pages/UpdateStudent";
import ViewStudent from "./../components/pages/ViewStudent";
import AddAcademicYearAndSemester from "./../components/pages/AddAcademicYearAndSemester";
import UpdateAcademicYearAndSemester from "./../components/pages/UpdateAcademicYearAndSemester";
import ViewAcademicYearAndSemester from "./../components/pages/ViewAcademicYearAndSemester";
import AddProgramme from "./../components/pages/AddProgramme";
import UpdateProgramme from "./../components/pages/UpdateProgramme";
import ViewProgramme from "./../components/pages/ViewProgramme";
import AddGroup from "./../components/pages/AddGroup";
import UpdateGroup from "../components/pages/UpdateGroup";
import ViewGroup from "../components/pages/ViewGroup";
import AddSubGroup from "./../components/pages/AddSubGroup";
import UpdateSubGroup from "./../components/pages/UpdateSubGroup";
import ViewSubGroup from "./../components/pages/ViewSubGroup";
import AddTag from "./../components/pages/AddTag";
import UpdateTag from "../components/pages/UpdateTag";
import ViewTag from "./../components/pages/ViewTag";
import AddLecturerNotAvailableTime from "./../components/pages/AddLecturerNotAvailableTime";
import UpdateLecturerNotAvailableTime from "./../components/pages/UpdateLecturerNotAvailableTime";
import ViewLecturerNotAvailableTime from "./../components/pages/ViewLecturerNotAvailableTime";
import ViewGroupNotAvailableTime from "./../components/pages/ViewGroupNotAvailableTime";
import ViewSubGroupNotAvailableTime from "./../components/pages/ViewSubGroupNotAvailableTime";
import ViewSessionNotAvailableTime from "./../components/pages/ViewSessionNotAvailableTime";
import AddSessionNotAvailableTime from "./../components/pages/AddSessionNotAvailableTime";
import UpdateSessionNotAvailableTime from "./../components/pages/UpdateSessionNotAvailableTime";
import AddGroupNotAvailableTime from "./../components/pages/AddGroupNotAvailableTime";
import UpdateGroupNotAvailableTime from "./../components/pages/UpdateGroupNotAvailableTime";
import AddSubGroupNotAvailableTime from "./../components/pages/AddSubGroupNotAvailableTime";
import UpdateSubGroupNotAvailableTime from "./../components/pages/UpdateSubGroupNotAvailableTime";
import ViewConsecutiveSession from "./../components/pages/ViewConsecutiveSession";
import AddConsecutiveSession from "./../components/pages/AddConsecutiveSession";
import AddParallelSession from "./../components/pages/AddParallelSession";
import ViewParallelSession from "./../components/pages/ViewParallelSession";
import AddNotOverlappingSession from "./../components/pages/AddNotOverlappingSession";
import ViewNotOverlappingSession from "./../components/pages/ViewNotOverlappingSession";
import ManagementOne from "./../components/pages/ManagementOne";
import ManagementTwo from "./../components/pages/ManagementTwo";
import ManagementThree from "./../components/pages/ManagementThree";
import ManagementFour from "./../components/pages/ManagementFour";
import ManagementFive from "./../components/pages/ManagementFive";
import ManagementSix from "./../components/pages/ManagementSix";
import ManagementSeven from "./../components/pages/ManagementSeven";
import LecturerTable from "./../components/lecturers/LecturerTable";
import EditLecturer from "./../components/lecturers/EditLecturer";
import ViewLecturers from "./../components/lecturers/ViewLecturers";
import SubjectTable from "./../components/subjects/SubjectTable";
import EditSubject from "./../components/subjects/EditSubject";
import ViewSubjects from "./../components/subjects/ViewSubjects";
import FacultyTable from "./../components/faculty/FacultyTable";
import EditFaculty from "./../components/faculty/EditFaculty";
import ViewFaculties from "./../components/faculty/ViewFaculties";
import DepartmentTable from "./../components/department/DepartmentTable";
import EditDepartment from "./../components/department/EditDepartment";
import ViewDepartments from "./../components/department/ViewDepartments";
import CenterTable from "./../components/center/CenterTable";
import EditCenter from "./../components/center/EditCenter";
import ViewCenters from "./../components/center/ViewCenters";
import LevelTable from "./../components/levels/LevelTable";
import EditLevel from "./../components/levels/EditLevel";
import ViewLevels from "./../components/levels/ViewLevels";
import BuildingTable from "./../components/building/BuildingTable";
import EditBuilding from "./../components/building/EditBuilding";
import ViewBuildings from "./../components/building/ViewBuildings";
import RoomTable from "./../components/room/RoomTable";
import EditRoom from "./../components/room/EditRoom";
import ViewRooms from "./../components/room/ViewRooms";
import LecturersStatistics from "./../components/statistics/LecturersStatistics";
import StudentsStatistics from "./../components/statistics/StudentsStatistics";
import SubjectsStatistics from "./../components/statistics/SubjectsStatistics";
import Home from "../components/pages/Home";
import SHome from "../components/pages/SHome";
import AddWorkingDays from "../components/pages/AddWorkingDays";
import ViewWorkingDays from "../components/pages/ViewWorkingDays";
import UpdateWorkingDays from "../components/pages/UpdateWorkingDays";
import AddWorkingHours from "../components/pages/AddWorkingHours";
import ViewWorkingHours from "../components/pages/ViewWorkingHours";
import UpdateWorkingHours from "../components/pages/UpdateWorkingHours";
import AddTimeSlots from "../components/pages/AddTimeSlot";
import CreatePrimarySession from "../components/primarySession/CreatePrimarySession";
import ViewPrimarySession from "../components/primarySession/ViewPrimarySession";
import AddLecturerRooms from "../components/Location/LecturerRooms/AddLecturerRooms";
import AddGroupsRooms from "../components/Location/GroupsRooms/AddGroupsRooms";
import AddTagRooms from "../components/Location/TagRooms/AddTagRooms";
import AddSubjectRooms from "../components/Location/SubjectRooms/AddSubjectRooms";
import AddNotAvailableRooms from "../components/Location/NotAvailableRooms/AddNotAvailableRooms";
import ViewLecturerRooms from "../components/Location/LecturerRooms/ViewLecturerRooms";
import ViewGroupsRooms from "../components/Location/GroupsRooms/ViewGroupRooms";
import ViewNotAvailableRooms from "../components/Location/NotAvailableRooms/ViewNotAvailableRooms";
import ViewSubjectRooms from "../components/Location/SubjectRooms/ViewSubjectRooms";
import ViewTagRooms from "../components/Location/TagRooms/ViewTagRooms";
import AddSessionRooms from "../components/Location/SessionRooms/AddSessionRooms";
import ViewSessionRooms from "../components/Location/SessionRooms/ViewSessionRooms";
import AddConsecutiveSessionRoom from "../components/Location/ConscutiveSessionRoom/AddConsecutiveSessionRoom";
import ViewConsecutiveSessionRoom from "../components/Location/ConscutiveSessionRoom/ViewConsecutiveSessionRoom";

class AppRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/managementOne" component={ManagementOne} />
          <Route path="/managementTwo" component={ManagementTwo} />
          <Route path="/managementThree" component={ManagementThree} />
          <Route path="/managementFour" component={ManagementFour} />
          <Route path="/managementFive" component={ManagementFive} />
          <Route path="/managementSix" component={ManagementSix} />
          <Route path="/managementSeven" component={ManagementSeven} />
          <Route path="/addStudent" component={AddStudent} />
          <Route path="/updateStudent" component={UpdateStudent} />
          <Route path="/viewStudent" component={ViewStudent} />
          <Route
            path="/addAcademicYearAndSemester"
            component={AddAcademicYearAndSemester}
          />
          <Route
            path="/updateAcademicYearAndSemester"
            component={UpdateAcademicYearAndSemester}
          />
          <Route
            path="/viewAcademicYearAndSemester"
            component={ViewAcademicYearAndSemester}
          />
          <Route path="/addProgramme" component={AddProgramme} />
          <Route path="/updateProgramme" component={UpdateProgramme} />
          <Route path="/viewProgramme" component={ViewProgramme} />
          <Route path="/addGroup" component={AddGroup} />
          <Route path="/updateGroup" component={UpdateGroup} />
          <Route path="/viewGroup" component={ViewGroup} />
          <Route path="/addSubGroup" component={AddSubGroup} />
          <Route path="/updateSubGroup" component={UpdateSubGroup} />
          <Route path="/viewSubGroup" component={ViewSubGroup} />
          <Route path="/addTag" component={AddTag} />
          <Route path="/updateTag" component={UpdateTag} />
          <Route path="/viewTag" component={ViewTag} />
          <Route
            path="/addLecturerNotAvailableTime"
            component={AddLecturerNotAvailableTime}
          />
          <Route
            path="/updateLecturerNotAvailableTime"
            component={UpdateLecturerNotAvailableTime}
          />
          <Route
            path="/viewLecturerNotAvailableTime"
            component={ViewLecturerNotAvailableTime}
          />
          <Route
            path="/addGroupNotAvailableTime"
            component={AddGroupNotAvailableTime}
          />
          <Route
            path="/updateGroupNotAvailableTime"
            component={UpdateGroupNotAvailableTime}
          />
          <Route
            path="/viewGroupNotAvailableTime"
            component={ViewGroupNotAvailableTime}
          />
          <Route
            path="/addSubGroupNotAvailableTime"
            component={AddSubGroupNotAvailableTime}
          />

          <Route
            path="/updateSubGroupNotAvailableTime"
            component={UpdateSubGroupNotAvailableTime}
          />
          <Route
            path="/viewSubGroupNotAvailableTime"
            component={ViewSubGroupNotAvailableTime}
          />
          <Route
            path="/addSessionNotAvailableTime"
            component={AddSessionNotAvailableTime}
          />
          <Route
            path="/updateSessionNotAvailableTime"
            component={UpdateSessionNotAvailableTime}
          />
          <Route
            path="/viewSessionNotAvailableTime"
            component={ViewSessionNotAvailableTime}
          />
          <Route
            path="/addConsecutiveSession"
            component={AddConsecutiveSession}
          />
          <Route
            path="/viewConsecutiveSession"
            component={ViewConsecutiveSession}
          />
          <Route path="/addParallelSession" component={AddParallelSession} />
          <Route path="/viewParallelSession" component={ViewParallelSession} />
          <Route
            path="/addNotOverlappingSession"
            component={AddNotOverlappingSession}
          />
          <Route
            path="/viewNotOverlappingSession"
            component={ViewNotOverlappingSession}
          />
          <Route path="/lecturer" component={LecturerTable} />
          <Route path="/editLecturer" component={EditLecturer} />
          <Route path="/viewLecturers" component={ViewLecturers} />
          <Route path="/subject" component={SubjectTable} />
          <Route path="/editSubject" component={EditSubject} />
          <Route path="/viewSubjects" component={ViewSubjects} />
          <Route path="/faculty" component={FacultyTable} />
          <Route path="/editFaculty" component={EditFaculty} />
          <Route path="/viewFaculties" component={ViewFaculties} />
          <Route path="/department" component={DepartmentTable} />
          <Route path="/editDepartment" component={EditDepartment} />
          <Route path="/viewDepartments" component={ViewDepartments} />
          <Route path="/viewCenters" component={ViewCenters} />
          <Route path="/center" component={CenterTable} />
          <Route path="/editCenter" component={EditCenter} />
          <Route path="/viewCenters" component={ViewCenters} />
          <Route path="/level" component={LevelTable} />
          <Route path="/editLevel" component={EditLevel} />
          <Route path="/viewLevels" component={ViewLevels} />
          <Route path="/session1" component={CreatePrimarySession} />
          <Route path="/viewSession1" component={ViewPrimarySession} />

          <Route path="/building" component={BuildingTable} />
          <Route path="/editBuilding" component={EditBuilding} />
          <Route path="/viewBuildings" component={ViewBuildings} />
          <Route path="/room" component={RoomTable} />
          <Route path="/editRoom" component={EditRoom} />
          <Route path="/viewRooms" component={ViewRooms} />
          <Route path="/lecturersStatistics" component={LecturersStatistics} />
          <Route path="/studentsStatistics" component={StudentsStatistics} />
          <Route path="/subjectsStatistics" component={SubjectsStatistics} />
          <Route path="/addLecturerRooms" component={AddLecturerRooms} />
          <Route path="/viewLecturerRooms" component={ViewLecturerRooms} />
          <Route path="/addGroupsRooms" component={AddGroupsRooms} />
          <Route path="/viewGroupsRooms" component={ViewGroupsRooms} />
          <Route path="/addTagsRooms" component={AddTagRooms} />
          <Route path="/viewTagsRooms" component={ViewTagRooms} />
          <Route path="/addSubjectRooms" component={AddSubjectRooms} />
          <Route path="/viewSubjectRooms" component={ViewSubjectRooms} />
          <Route path="/addSessionRooms" component={AddSessionRooms} />
          <Route
            path="/consecutiveSessionRoom"
            component={AddConsecutiveSessionRoom}
          />
          <Route
            path="/viewConsecutiveSessionRoom"
            component={ViewConsecutiveSessionRoom}
          />
          <Route path="/viewSessionRooms" component={ViewSessionRooms} />
          <Route path="/notAvailableRooms" component={AddNotAvailableRooms} />
          <Route
            path="/viewNotAvailableRooms"
            component={ViewNotAvailableRooms}
          />
          <Route path="/sHome" component={SHome} />
          <Route path="/addWorkingDays" component={AddWorkingDays} />
          <Route path="/viewWorkingDays" component={ViewWorkingDays} />
          <Route path="/updateWorkingDays" component={UpdateWorkingDays} />
          <Route path="/addWorkingHours" component={AddWorkingHours} />
          <Route path="/viewWorkingHours" component={ViewWorkingHours} />
          <Route path="/updateWorkingHours" component={UpdateWorkingHours} />
          <Route path="/addTimeSlots" component={AddTimeSlots} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default AppRouter;
