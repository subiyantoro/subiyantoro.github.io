import {createBrowserRouter } from "react-router-dom";
import MainLayout from "../views/MainLayout";
import HomePage from "../views/HomePage";
import ErrorPage from "../views/ErrorPage";
import ExperiencePage from "../views/ExperiencePage";
import PortoPage from "../views/PortoPage";
import ContactPage from "../views/ContactPage";

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
            },
            {
                path: 'portfolio',
                element: <PortoPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            }
        ]
    }
]);

export {
    routes
};
