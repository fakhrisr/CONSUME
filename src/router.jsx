import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import  Profile  from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Stuff from "./pages/Stuff";
import User from "./pages/User";
import TrashStuff from "./pages/TrashStuff";
import TrashUser from "./pages/TrashUser";
import Inbound from "./pages/Inbound";
// import LendingStuff from "./pages/LendingStuff";
import Lending from "./pages/Lending";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/stuffs', element: <Stuff /> },
    { path: '/users', element: <User /> },
    { path: '/stuffs/trash', element: <TrashStuff /> },
    { path: '/users/trash', element: <TrashUser /> },
    { path: '/inbound-stuffs', element: <Inbound /> },
    { path: '/lendings', element: <Lending /> }

])