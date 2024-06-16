import logo from "./logo.svg";
import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Projects } from "./pages/Projects.tsx";
import { HomeLayout } from "./Layout/HomeLayout";
import { HomeLayoutProvider } from "./Context/HomeLayoutProvider.tsx";
import { ProjectSingle } from "./pages/ProjectSingle.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <HomeLayoutProvider>
        <HomeLayout />
      </HomeLayoutProvider>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="/home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "project/:id",
        element: <ProjectSingle />
      }
    ],
  },
  {
    path: "*",
    element: <Navigate to="/login" />, // Redirect to Login for all undefined routes
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
