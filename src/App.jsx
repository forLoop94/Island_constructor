import './App.css'
import { Home } from './components/Home'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Root from './components/Root';
import { About } from './components/About';
import Slideshow from './components/Slideshow';
import { Projects } from './components/Projects';
import { VisionMission } from './components/VisionMission';
import { Footer } from './components/Footer';
import { ContactPopup } from './components/ContactPopup';
import { News } from './components/News';
import { NewsDetails } from './components/NewsDetails';
import { ProjectDetails } from './components/ProjectDetails';
import ProjectsOverview from './components/ProjectsOverview';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/slide" element={<Slideshow />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/popup" element={<ContactPopup />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects-overview" element={<ProjectsOverview />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsId" element={<NewsDetails />} />
        <Route path="/vision-mission" element={<VisionMission />} />
      </Route>
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;

export default App;

