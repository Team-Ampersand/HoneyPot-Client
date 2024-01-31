import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './public/Globalstyle';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Main from './components/Main';
import Onbording from './components/Onbording';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
