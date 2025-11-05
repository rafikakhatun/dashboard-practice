import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";
import DashboardPage from "../Dashboard/DashboardPage";
import User from "../Dashboard/User";

export const router = createBrowserRouter([

    {
        path: "/",

        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true, // '/admin/dashboard' এর জন্য ডিফল্ট পেজ
                element: <DashboardPage  />,
            },
            {
                path: 'user',
                element: <User></User>

            }
        ]

    },












])