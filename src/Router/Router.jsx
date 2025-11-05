import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";
import User from "../pages/User";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([

    {
        path: "/",

        element: <DashboardLayout></DashboardLayout>, // dashboard layout
        children: [
            {
                index: true, // '/admin/dashboard' এর জন্য ডিফল্ট পেজ
                element: <DashboardPage  />,
            },
            {
                path: '/admin/dashboard/user',
                element: <User></User> // user page route

            },

            {
                path:'/admin/dashboard/profile',
                element:<Profile></Profile> // profile page route
            }

        ]

    },












])