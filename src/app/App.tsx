import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <NavBar />
                <div className='content_page'>
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;