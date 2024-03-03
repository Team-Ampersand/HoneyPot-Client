import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main, Onboarding, SignIn, SignUp, Writing, Posting, Thumbnail, Mypage } from './components';
import { GlobalStyles } from './style/Globalstyle';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
