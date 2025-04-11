import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StorybookPage from '@view/pages/Storybook';

const AppRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/storybook" element={<StorybookPage />} />
            <Route path="/keyboard" element={<KeyboardPage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;