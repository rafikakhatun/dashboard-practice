import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Dashboard/DashboardLayout";

export const router = createBrowserRouter([

    {
        path: "/",

        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                index: true, // '/admin/dashboard' এর জন্য ডিফল্ট পেজ
                element: <DashboardPage />,
            },
            {
                path: 'User',
                element: <User></User>

            }
        ]

    },












])