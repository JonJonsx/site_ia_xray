import React from 'react'

// import SideBar from './components/SideBar/SideBar'
import ControlPanel from './pages/ControlPanel/ControlPanel';
import DashBoard from './pages/DashBoard/DashBoard';
// import ErrorPage from './pages/ErrorPage/ErrorPage';
import App from './App';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './helpers/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: 
                    <PrivateRoute>
                        <DashBoard />
                    </PrivateRoute>                
            },
            {
                path: '/controlpanel',
                element: 
                        <ControlPanel />
            }
        ]
    }
]);

export default function AppWithRouterAccess() {
    return <RouterProvider router={router}/>
}