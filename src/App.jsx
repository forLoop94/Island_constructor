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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Route>,
  ),
);

const App = () => <RouterProvider router={router} />;

export default App;

