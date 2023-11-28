// routes.jsx
import { createBrowserRouter } from 'react-router-dom';
import Form from './pages/Form';
import App from './pages/App';
import Discription from './pages/Discription';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/form',
    element: <Form />,
  },
  {
    path: '/dis',
    element: <Discription />,
  },
 
]);

export default router;
