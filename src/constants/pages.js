import { lazy } from "react";

const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const DepartmentMembers = lazy(() =>
  import("../pages/departmentMembers/DepartmentMembers")
);
const DepartmentMember = lazy(() =>
  import("../pages/departmentMember/DepartmentMember")
);
const Successstories = lazy(() =>
  import("../pages/successstories/Successstories")
);
const Successstory = lazy(() => import("../pages/successstory/Successstory"));
const Competitions = lazy(() => import("../pages/competitions/Competitions"));
const Competition = lazy(() => import("../pages/competition/Competition"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const Project = lazy(() => import("../pages/project/Project"));
const staffEditProfile = lazy(() => import("../pages/staffEditProfile/staffEditProfile"));
const Form = lazy(() => import("../pages/form/Form"));
const AdminForm = lazy(() => import("../pages/adminform/AdminForm"));
const DoctorForm = lazy(() => import("../pages/doctorform/DoctorForm"));
const ExternalTraining2 = lazy(() =>
  import("../pages/externaltraining2/ExternalTraining2")
);
const ExternalTraining = lazy(() =>
  import("../pages/externaltrainingDetails/ExternalTraining")
);
const InternalTraining = lazy(() =>
  import("../pages/InternalTraining/InternalTraining")
);
const InternalTraining2 = lazy(() =>
  import("../pages/internaltraining2/InternalTraining2")
);
const Studyplan = lazy(() => import("../pages/studyplan/Studyplan"));
const Login = lazy(() => import("../pages/login/Login"));
const AdminAddAbout = lazy(() =>
  import("../pages/adminAddAbout/AdminAddAbout")
);
const AdminAddExternal = lazy(() =>
  import("../pages/adminAddExternal/AdminAddExternal")
);
const AdminAddCompetition = lazy(() =>
  import("../pages/adminAddCompetition/AdminAddCompetition")
);
const AdminAddStudyplan = lazy(() =>
  import("../pages/adminAddStudyplan/AdminAddStudyplan")
);
const AdminAddSuccessstory = lazy(() =>
  import("../pages/adminAddSuccessstory/AdminAddSuccessstory")
);
const AdminAddProject = lazy(() =>
  import("../pages/adminAddProject/AdminAddProject")
);
const AdminAddInternal = lazy(() =>
  import("../pages/adminAddInternal/AdminAddInternal")
);
const NotFound = lazy(() => import("../pages/notfound/notFound"));

export {
  Home,
  About,
  DepartmentMembers,
  DepartmentMember,
  Successstories,
  Successstory,
  Competitions,
  Competition,
  Projects,
  Project,
  Form,
  AdminForm,
  DoctorForm,
  ExternalTraining,
  ExternalTraining2,
  InternalTraining,
  InternalTraining2,
  Studyplan,
  Login,
  AdminAddAbout,
  AdminAddSuccessstory,
  AdminAddStudyplan,
  AdminAddCompetition,
  AdminAddExternal,
  AdminAddProject,
  AdminAddInternal,
  staffEditProfile,
  NotFound,
};
