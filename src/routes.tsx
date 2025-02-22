import { createHashRouter } from "react-router-dom";
import App from "./App";
import EnergyForecasting from "./pages/projects/EnergyForecasting";
import ProjectLayout from "./components/layout/ProjectLayout";
import Resume from "./components/sections/Resume";
import ErrorBoundary from "./components/common/ErrorBoundary";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "projects",
    element: <ProjectLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "energy-forecasting",
        element: <EnergyForecasting />,
      },
    ],
  },
  {
    path: "resume",
    element: <Resume />,
    errorElement: <ErrorBoundary />,
  },
]);
