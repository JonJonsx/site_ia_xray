import React from 'react'

// import SideBar from './components/SideBar/SideBar'
import ControlPanel from './pages/ControlPanel/ControlPanel';
import DashBoard from './pages/DashBoard/DashBoard';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <DashBoard />
            },
            {
                path: '/controlpanel',
                element: <ControlPanel />
            }
        ]
    }
]);

export default function AppWithRouterAccess() {
    return <RouterProvider router={router}/>
}