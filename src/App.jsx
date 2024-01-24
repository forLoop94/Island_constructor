import './App.css'
import { Home } from './components/Home'
import { NavPanel } from './components/NavPanel'

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/slide" element={<Slideshow />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/vision-mission" element={<VisionMission />} />
      </Route>
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;

export default App;

