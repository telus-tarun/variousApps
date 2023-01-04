import './App.css';
import { Navbar } from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import User from './Components/User';
import UserDetails from './Components/UserDetails';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<User />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;





//api - 6f401e534ba24d9cb7b33dd25f69fasa