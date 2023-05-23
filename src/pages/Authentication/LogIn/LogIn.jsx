import "../styles.css";
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useState } from "react";
import { useAuth } from "../../../contexts/auth-context";

const LogIn = () => {
  const { loginHandler } = useAuth();

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
    hidePwd: true,
  });

  const guestUserDetails = {
    email: "monikashah@gmail.com",
    password: "monikashah",
  };

  const loginFormSubmitHandler = (event) => {
    event.preventDefault();
    loginHandler(userLoginDetails);
  };

  return (
    <div className="page-wrapper">
      <section className="form login">
        <div className="form-content">
          <div className="form-header">
            <h2>Log In</h2>
          </div>
          <form onSubmit={loginFormSubmitHandler}>
            <div className="field input-field">
              <input
                type="email"
                placeholder="Email"
                className="input"
                onChange={(event) =>
                  setUserLoginDetails({
                    ...userLoginDetails,
                    email: event.target.value,
                  })
                }
              />
            </div>
            <div className="field input-field">
              <input
                type={userLoginDetails.hidePwd ? "password" : "text"}
                placeholder="Password"
                className="password"
                onChange={(event) =>
                  setUserLoginDetails({
                    ...userLoginDetails,
                    password: event.target.value,
                  })
                }
              />
              {userLoginDetails.hidePwd ? (
                <VisibilityOutlinedIcon
                  className="eye-icon"
                  onClick={() => setUserLoginDetails({...userLoginDetails, hidePwd: !userLoginDetails.hidePwd})}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="eye-icon"
                  onClick={() => setUserLoginDetails({...userLoginDetails, hidePwd: !userLoginDetails.hidePwd})}
                />
              )}
            </div>
            <div className="field input-field">
              <button className="login-btn" type="submit">
                Log In
              </button>
            </div>
            <div className="field input-field">
              <button
                className="guest-login-btn"
                type="submit"
                onClick={() =>
                  setUserLoginDetails({
                    email: guestUserDetails.email,
                    password: guestUserDetails.password,
                  })
                }
              >
                Log In as a Guest
              </button>
            </div>
            <div className="form-link">
              <span>New to Plantique?</span>{" "}
              <Link to="/signup">
                <span className="link">SignUp</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
export default LogIn;