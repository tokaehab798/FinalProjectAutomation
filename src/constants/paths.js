// navbar paths
const NAVBAR_PATHS = {
  home: "/",
  about: "/about",
  departmentMembers: "/departmentMembers",
  successstories: "/successstories",
  competitions: "/competitions",
  projects: "/projects",
  form: "/Form",
  studyplan: "/studyplan",
};

export const PATHS = {
  ...NAVBAR_PATHS,

  login: "/login",
  departmentmember: (memberId = ":memberId") => `/departmentmember/${memberId}`,
  successstory: (storyId = ":storyId") => `/successstory/${storyId}`,
  competition: (compeId = ":compeId") => `/competition/${compeId}`,
  project: (projId = ":projId") => `/project/${projId}`,
  adminform: "/adminform",
  doctorform: "/doctorform",
  externaltraining2: "/externaltraining2",
  externaltraining: (ExtId = ":ExtId") => `/externaltraining/${ExtId}`,
  internaltraining: "/internaltraining",
  internaltraining2: (interId = ":interId") => `/internaltraining2/${interId}`,
  AdminAddAbout: "/AdminAddAbout",
  adminaddinternal: "/adminaddinternal",
  adminaddexternal: "/adminaddexternal",
  adminaddsuccessstory: "/adminaddsuccessstory",
  adminaddstudyplan: "/adminaddstudyplan",
  adminaddcompetition: "/adminaddcompetition",
  staffEditProfile: "/staffEditProfile",
  adminAddProject: "/adminAddProject",
  notfound: "/notfound",
};
