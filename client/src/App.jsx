
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
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>

      {/* old routing system */}

      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path='/' element={ <Home />} /><Route path='/about' element={<About />} />
          <Route element={<LoggedOutRedirect />}  >
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
          </Route>
          <Route element={<LoggedInRedirect />} >
            <Route path='/profile' element={<Profile />} />
          </Route>

        </Routes>
        <Footer/>
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
