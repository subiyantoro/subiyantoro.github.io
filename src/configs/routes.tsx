import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../views/MainLayout";
import HomePage from "../views/HomePage";
import ErrorPage from "../views/ErrorPage";
import ExperiencePage from "../views/ExperiencePage";

const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'experience',
                element: <ExperiencePage />
            }
        ]
    }
]);

export {
    routes
};
