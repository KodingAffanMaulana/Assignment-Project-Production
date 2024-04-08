import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import EditPhoto from './routes/EditPhoto';
import Home from './routes/Home';
import Photos from './routes/Photos';
import AddPhoto from './routes/AddPhoto';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <main className="overflow-hidden">
      <div className="flex justify-center gap-10 p-[29px] border-b-2 border-dashed relative bg-gradient-to-r from-blue-500 from-10% via-sky-500 via-30% to-pink-500 to-90% ... bg-opacity-20 backdrop-blur-xl text-white">
        <Link to="/">Home</Link>
        <Link to="/photos">My Photos</Link>
        <Link to="/add">Add Photo</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos">
          <Route index element={<Photos />} />
          <Route path=":id" element={<EditPhoto />} />
        </Route>
        <Route path="/add" element={<AddPhoto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default App;
