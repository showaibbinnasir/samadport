import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
