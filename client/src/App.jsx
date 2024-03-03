
// import { RouterProvider } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
// import router from './router/Router'
import { ToastContainer } from 'react-toastify';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import LoggedOutRedirect from './middlewares/LoggedOutRedirect';
import LoggedInRedirect from './middlewares/LoggedInRedirect';

function App() {
  return (
    <>

      {/* old routing system */}

      <BrowserRouter>
        <Routes>

          <Route element={<LoggedOutRedirect />}  >
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Route>
          <Route element={<LoggedInRedirect />} >
            <Route path='/profile' element={<Profile />} />
          </Route>

        </Routes>
      </BrowserRouter>





      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      {/* <RouterProvider router={router} /> */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </>
  )
}

export default App
