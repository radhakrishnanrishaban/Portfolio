import { createHashRouter } from "react-router-dom";
import App from "./App";
import EnergyForecasting from "./pages/projects/EnergyForecasting";
import ProjectLayout from "./components/layout/ProjectLayout";
import Resume from "./components/sections/Resume";
import ErrorBoundary from "./components/common/ErrorBoundary";
import RootLayout from "./components/layout/RootLayout";

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "projects",
        element: <ProjectLayout />,
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
      },
    ],
  },
]);
