import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import {routes} from "./configs/routes";
import {AnimatePresence} from "framer-motion";

const App = () => (
    <React.StrictMode>
        <AnimatePresence mode="wait">
            <RouterProvider router={routes} />
        </AnimatePresence>
    </React.StrictMode>
)

export default App;
