import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../views/MainLayout";
import HomePage from "../views/HomePage";
import ErrorPage from "../views/ErrorPage";

const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    }
]);

export {
    routes
};
