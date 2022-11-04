import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/tailwind.css';
import './assets/main.css';
import './index.css';
import Jobs from './pages/Jobs';
import DetailedJob from './pages/DetailedJob';

function App() {
  return (
    <div className="App font-proxi">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Jobs />} />
          <Route path='/detailed/:id' element={<DetailedJob />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
