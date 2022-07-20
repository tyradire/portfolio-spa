import AboutMe from "../Components/AboutMe/AboutMe"
import Projects from "../Components/Projects/Projects"
import Technology from "../Components/Technology/Technology"
import { ABOUT_ROUTE, PROJECTS_ROUTE, TECHNOLOGY_ROUTE } from "./constants"

export const mainRoutes = [
  {
    path: ABOUT_ROUTE,
    Component: AboutMe
  },
  {
    path: PROJECTS_ROUTE,
    Component: Projects
  },
  {
    path: TECHNOLOGY_ROUTE,
    Components: Technology
  },
]