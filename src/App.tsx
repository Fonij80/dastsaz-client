import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import WorkshopList from './pages/WorkshopList';
import WorkshopDetail from './pages/WorkshopDetail';
import Booking from './pages/Booking';
import Confirmation from './pages/Confirmation';
import Auth from './pages/Auth';
import HostCreateWorkshop from './pages/HostCreateWorkshop';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<WorkshopList />} />
          <Route path="/workshops/:id" element={<WorkshopDetail />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/host/create" element={<HostCreateWorkshop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
