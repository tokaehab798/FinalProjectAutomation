import * as pages from "./pages";
import { ADMIN, ALL_ROLES, DOCTOR, STUDENT } from "./roles";
import { PATHS } from "./paths";

// navbar routes
export const NAVBAR_ROUTES = [
  {
    path: PATHS.home,
    roles: ALL_ROLES,
    page: pages.Home,
    label: "Home",
  },
  {
    path: PATHS.about,
    roles: ALL_ROLES,
    page: pages.About,
    label: "About",
  },
  {
    path: PATHS.departmentMembers,
    roles: ALL_ROLES,
    page: pages.DepartmentMembers,
    label: "Department Members",
  },
  {
    path: PATHS.successstories,
    roles: ALL_ROLES,
    page: pages.Successstories,
    label: "Success Stories",
  },
  {
    path: PATHS.competitions,
    roles: ALL_ROLES,
    page: pages.Competitions,
    label: "Competitions",
  },
  {
    path: PATHS.projects,
    roles: ALL_ROLES,
    page: pages.Projects,
    label: "Projects",
  },
  {
    path: PATHS.form, // studentForm
    roles: [STUDENT],
    page: pages.Form,
    label: "Form",
  },
  {
    path: PATHS.adminform, // adminForm
    roles: [ADMIN],
    page: pages.AdminForm,
    label: "Form",
  },
  {
    path: PATHS.doctorform, // doctorForm
    roles: [DOCTOR],
    page: pages.DoctorForm,
    label: "Form",
  },
  {
    path: PATHS.studyplan,
    roles: ALL_ROLES,
    page: pages.Studyplan,
    label: "Studyplan",
  },
];

export const ADDITIONAL_ROUTES = [
  {
    path: PATHS.departmentmember(),
    roles: ALL_ROLES,
    page: pages.DepartmentMember,
  },
  {
    path: PATHS.successstory(),
    roles: ALL_ROLES,
    page: pages.Successstory,
  },
  {
    path: PATHS.competition(),
    roles: ALL_ROLES,
    page: pages.Competition,
  },
  {
    path: PATHS.project(),
    roles: ALL_ROLES,
    page: pages.Project,
  },
  {
    path: PATHS.externaltraining2,
    roles: ALL_ROLES,
    page: pages.ExternalTraining2,
  },
  {
    path: PATHS.externaltraining(),
    roles: ALL_ROLES,
    page: pages.ExternalTraining,
  },
  {
    path: PATHS.internaltraining,
    roles: ALL_ROLES,
    page: pages.InternalTraining,
  },
  {
    path: PATHS.staffEditProfile,
    roles: [ADMIN, DOCTOR],
    page: pages.staffEditProfile,
  },
  {
    path: PATHS.internaltraining2(),
    roles: ALL_ROLES,
    page: pages.InternalTraining2,
  },
  {
    path: PATHS.AdminAddAbout,
    roles: [ADMIN],
    page: pages.AdminAddAbout,
  },
  {
    path: PATHS.adminaddinternal,
    roles: [ADMIN],
    page: pages.AdminAddInternal,
  },
  {
    path: PATHS.adminaddexternal,
    roles: [ADMIN],
    page: pages.AdminAddExternal,
  },
  {
    path: PATHS.adminaddsuccessstory,
    roles: [ADMIN],
    page: pages.AdminAddSuccessstory,
  },
  {
    path: PATHS.adminAddProject,
    roles: [ADMIN],
    page: pages.AdminAddProject,
  },
  {
    path: PATHS.adminaddstudyplan,
    roles: [ADMIN],
    page: pages.AdminAddStudyplan,
  },
  {
    path: PATHS.adminaddcompetition,
    roles: [ADMIN],
    page: pages.AdminAddCompetition,
  },
  {
    path: PATHS.notfound,
    roles: ALL_ROLES,
    page: pages.NotFound,
  },
];

export const LOGIN_ROUTE = {
  path: PATHS.login,
  roles: ALL_ROLES,
  page: pages.Login,
};

// all routes
export const ROUTES = [...NAVBAR_ROUTES, ...ADDITIONAL_ROUTES, LOGIN_ROUTE];
