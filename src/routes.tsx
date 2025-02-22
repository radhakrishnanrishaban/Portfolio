import { createHashRouter } from "react-router-dom";
import App from "./App";
import EnergyForecasting from "./pages/projects/EnergyForecasting";
import ProjectLayout from "./components/layout/ProjectLayout";
import Resume from "./components/sections/Resume";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <ProjectLayout />,
    children: [
      {
        path: "energy-forecasting",
        element: <EnergyForecasting />,
      },
    ],
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
