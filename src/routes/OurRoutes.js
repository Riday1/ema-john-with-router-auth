import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main'
const OurRoutes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>
        }
    ])
    return router;
};

export default OurRoutes;