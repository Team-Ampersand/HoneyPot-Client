import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Main,
  Onboarding,
  SignUp,
  Writing,
  Posting,
  Thumbnail,
  Mypage,
  Edit,
  SignIn,
  Root,
} from "./components";
import { GlobalStyles } from "./style/Globalstyle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import getToken from "./apis/getToken";
import AIWriting from "./components/AIWriting";

function AuthGuard({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { accessToken } = getToken();

  useEffect(() => {
    const path = location.pathname;
    if (accessToken) {
      if (path === "/signin" || path === "/signup") {
        navigate("/main", { replace: true });
      }
    } else {
      if (path !== "/signin" && path !== "/signup") {
        navigate("/signin", { replace: true });
      }
    }
  }, [location, accessToken, navigate]);

  return children;
}

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <AuthGuard>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/main" element={<Main />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/thumbnail" element={<Thumbnail />} />
            <Route path="/posting/:id" element={<Posting />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/ai-writing" element={<AIWriting />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </AuthGuard>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
