import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/main", { replace: true });
  }, [navigate]);

  return null;
};

export default Root;
