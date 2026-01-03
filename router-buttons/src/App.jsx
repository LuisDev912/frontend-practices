import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
const ContainerPage = lazy(() => import('./pages/ContainerPage.jsx'));

const FirsButton = lazy(() => import('./pages/buttonsPages/firstButton.jsx'));
const SecondButton = lazy(() => import('./pages/buttonsPages/secondButton.jsx'));
const ThirdButton = lazy(() => import('./pages/buttonsPages/thirdButton.jsx'));

const MainLayout = lazy(() => import('./layout/MainLayout.jsx'));

function App() {

  return (
    <>
       <Suspense fallback={<div style={{
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '15%',
      fontWeight: '600'
    }}> wait... </div>} >
        
        <Routes>
          <Route element={<MainLayout />}>
          
            <Route path="/" element={<HomePage />} />

            <Route path="/start" element={<ContainerPage />} />
            <Route path="/start/one" element={<FirsButton />} />
            <Route path="/start/two" element={<SecondButton />} />
            <Route path="/start/three" element={<ThirdButton />} />

            <Route path="*" element={<NotFoundPage />} />
          
          </Route>
        </Routes>

      </Suspense>
    </>
  )
}

export default App