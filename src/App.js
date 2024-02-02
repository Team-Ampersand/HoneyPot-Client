import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './public/Globalstyle';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Main from './components/Main';
import Onbording from './components/Onbording';
import Writing from './components/Writing';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Onbording" element={<Onbording />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Writing" element={<Writing/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
