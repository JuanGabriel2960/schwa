import { Route, Routes, Navigate } from 'react-router-dom';
import * as Pages from './pages';

export const LandingModule = () => {

    return (
        <div>
            <Routes>
                <Route path="" element={<Pages.Home />} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </div>
    )
}

export default LandingModule
