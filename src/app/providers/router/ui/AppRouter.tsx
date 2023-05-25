import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <div className='page-wrapper'>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            element={element}
                            path={path}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;