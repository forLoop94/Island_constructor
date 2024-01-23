import { Outlet } from 'react-router-dom';
import { NavPanel } from './NavPanel';

const Root = () => {
  return (
    <div id="root">
      <NavPanel />
      <div id="pages-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;