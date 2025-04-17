import React from 'react';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
