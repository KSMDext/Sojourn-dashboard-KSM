import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const Protected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkForUserLogin = () => {
      const token = localStorage.getItem("userAuthToken");

      if (!token) {
        navigate("/login", { replace: true });
      } else {
        try {
          const decodedToken = jwt_decode(token);
          const currentTime = Date.now() / 1000; // Convert to seconds

          if (decodedToken.exp < currentTime) {
            // Token has expired
            navigate("/login", { replace: true });
          }
        } catch (error) {
          // Handle invalid token
          navigate("/login", { replace: true });
        }
      }
    };

    checkForUserLogin();
  }, [navigate]);

  return <Outlet />;
};

export default Protected;
