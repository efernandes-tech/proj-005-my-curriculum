import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CurriculumPtBr from './pages/CurriculumPtBr';
import CurriculumEnUs from './pages/CurriculumEnUs';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<CurriculumPtBr />} />
            <Route path="/en" element={<CurriculumEnUs />} />
        </Routes>
    );
};

export default AppRoutes;
