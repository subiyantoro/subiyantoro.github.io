import React from 'react';
import './App.css';
import {RouterProvider} from "react-router-dom";
import {routes} from "./configs/routes";

const App = () => (
    <React.StrictMode>
        <RouterProvider router={routes} />
    </React.StrictMode>
)

export default App;
