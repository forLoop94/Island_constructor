import './App.css'
import { Home } from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './components/Root';
import Slideshow from './components/Slideshow';
import { Projects } from './pages/Projects';
import { Footer } from './components/Footer';
import { ContactPopup } from './components/ContactPopup';
import { News } from './pages/News';
import { NewsDetails } from './components/NewsDetails';
import { ProjectDetails } from './components/ProjectDetails';
import ProjectsOverview from './components/ProjectsOverview';
import AboutPage from './pages/AboutPage';
import Objectives from './pages/Objectives';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/slide" element={<Slideshow />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/popup" element={<ContactPopup />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-overview" element={<ProjectsOverview />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
        <Route path="/vision-mission" element={<Objectives />} />
      </Route>
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;

export default App;

