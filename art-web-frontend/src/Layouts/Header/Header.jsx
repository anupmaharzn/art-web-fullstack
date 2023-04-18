import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import * as routeList from "../../routes";
import "./header.scss";
import cartIcon from "../../assets/image/cart.svg";
import menuIcon from "../../assets/image/menu.svg";
import closeIcon from "../../assets/image/close.svg";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../Pages/Login/actions";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  console.log("cart from header", cartItems.length);
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleLogout = () => {
    dispatch(Logout());
    toast("Logout sucessfully");
    navigate("/");
  };

  return (
    <>
      <ToastContainer position="bottom-center" autoClose={1000} theme="dark" />

      <header className="header-outline">
        <div className="container">
          <div className="row">
            <div className="col">
              <section className="header">
                {/* logo */}
                <h1 className="logo">
                  <RouterLink
                    to={routeList.HOME_PAGE}
                    className="logo"
                    alt="QALA"
                  >
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="270.000000pt"
                      height="114.000000pt"
                      viewBox="0 0 270.000000 114.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <metadata>
                        Created by potrace 1.10, written by Peter Selinger
                        2001-2011
                      </metadata>
                      <g
                        transform="translate(0.000000,114.000000) scale(0.100000,-0.100000)"
                        fill="#000000"
                        stroke="none"
                      >
                        <path
                          d="M1062 1063 c-10 -16 -70 -119 -132 -230 -76 -135 -121 -205 -137
-212 -13 -6 -28 -22 -33 -37 -11 -27 -14 -134 -4 -134 3 0 25 11 48 25 60 35
90 69 83 95 -4 15 32 80 134 239 76 120 139 225 139 233 0 17 -41 48 -64 48
-8 0 -23 -12 -34 -27z m64 -15 c9 -6 -26 -68 -115 -208 -69 -109 -130 -205
-136 -214 -6 -9 -15 -13 -21 -8 -15 9 235 453 250 445 6 -3 16 -10 22 -15z
m-282 -454 c27 -27 19 -51 -31 -85 -45 -32 -46 -32 -40 -8 4 13 7 36 7 51 0
26 22 58 40 58 5 0 16 -7 24 -16z"
                        />
                        <path
                          d="M1414 760 c-41 -16 -54 -49 -54 -132 0 -42 4 -88 10 -102 11 -29 64
-60 91 -53 11 3 19 1 19 -4 0 -17 52 -59 71 -59 28 0 23 14 -10 27 -30 11 -51
57 -51 111 0 30 -34 62 -66 62 -14 0 -23 -4 -19 -10 3 -5 14 -10 24 -10 25 0
39 -19 43 -60 3 -33 2 -35 -27 -33 -40 3 -65 36 -65 84 0 38 1 39 34 39 50 0
67 -9 82 -44 13 -30 13 -28 14 41 0 39 -3 79 -6 88 -8 20 -48 37 -69 29 -24
-10 -17 -25 8 -19 29 8 42 -8 51 -59 7 -35 6 -38 -11 -31 -10 5 -37 10 -60 13
-40 4 -43 6 -43 33 0 59 69 98 113 65 33 -25 49 -134 27 -190 -6 -16 -6 -27 0
-31 27 -16 40 114 19 187 -15 55 -70 81 -125 58z"
                        />
                        <path
                          d="M1705 760 c-8 -12 -95 -271 -95 -281 0 -3 14 -6 30 -7 27 -1 30 2 30
31 l-1 32 -15 -25 -15 -25 5 25 c3 14 6 28 6 33 0 4 20 7 45 7 25 0 45 5 45
10 0 6 -18 10 -39 10 l-40 0 31 91 c17 49 32 88 35 85 4 -4 -20 -88 -45 -153
-2 -7 1 -13 6 -13 6 0 19 25 28 55 10 30 21 52 25 48 4 -5 22 -54 40 -110 18
-57 38 -103 44 -103 10 0 -70 260 -88 288 -10 15 -24 16 -32 2z"
                        />
                        <path
                          d="M1960 615 l0 -155 83 0 82 0 -1 37 -1 38 -47 0 -46 0 0 118 0 117
-35 0 -35 0 0 -155z m30 25 l0 -120 60 0 c33 0 60 -4 60 -10 0 -6 -30 -10 -70
-10 l-70 0 0 130 c0 80 4 130 10 130 6 0 10 -47 10 -120z m30 5 c0 -70 -4
-115 -10 -115 -6 0 -10 45 -10 115 0 70 4 115 10 115 6 0 10 -45 10 -115z m90
-165 c0 -6 -30 -10 -70 -10 -40 0 -70 4 -70 10 0 6 30 10 70 10 40 0 70 -4 70
-10z"
                        />
                        <path
                          d="M2265 758 c-17 -46 -95 -284 -95 -290 0 -4 18 -8 39 -8 33 0 40 4 45
25 5 21 12 25 41 25 29 0 36 -4 41 -25 5 -21 12 -25 46 -25 28 0 39 4 35 13
-2 6 -21 62 -40 122 -59 180 -56 175 -83 175 -14 0 -27 -6 -29 -12z m4 -85
c-16 -48 -29 -90 -29 -95 0 -4 16 -8 35 -8 19 0 35 -4 35 -10 0 -5 -18 -10
-39 -10 -36 0 -40 -3 -55 -41 -9 -23 -19 -39 -22 -36 -8 8 86 287 96 287 5 0
-4 -39 -21 -87z m131 -195 c0 -5 -4 -8 -8 -8 -4 0 -21 39 -36 88 -49 150 -45
145 -65 83 -9 -30 -22 -56 -28 -58 -10 -4 8 63 43 157 4 12 94 -237 94 -262z
m-61 98 c11 -41 24 -82 27 -90 3 -9 1 -16 -5 -16 -6 0 -13 11 -17 25 -5 21
-12 25 -44 25 -22 0 -42 5 -45 10 -4 6 10 10 34 10 23 0 41 2 41 4 0 2 -7 23
-15 46 -17 49 -18 60 -7 60 5 0 19 -33 31 -74z"
                        />
                        <path d="M1396 695 c-9 -24 -7 -45 3 -45 12 0 22 43 12 53 -5 5 -11 1 -15 -8z" />
                        <path
                          d="M526 619 c-19 -17 -41 -45 -47 -63 l-12 -33 -35 23 c-79 54 -154 35
-160 -40 -4 -40 26 -99 59 -116 17 -10 16 -13 -21 -50 -63 -63 -66 -126 -9
-155 35 -18 76 -13 125 15 l32 18 17 -44 c30 -80 103 -107 152 -58 24 24 25
31 21 95 -3 40 -2 66 4 63 5 -3 31 0 59 6 80 19 112 80 70 131 -25 31 -37 19
-19 -18 8 -15 13 -36 10 -46 -9 -42 -110 -61 -175 -33 -37 15 -78 56 -57 56
24 0 80 50 100 90 19 38 26 112 14 145 -7 17 -54 45 -78 45 -8 0 -31 -14 -50
-31z m100 -24 c30 -47 -3 -149 -61 -185 -41 -25 -45 -25 -45 3 0 12 -7 35 -15
51 -8 15 -15 35 -15 43 0 17 27 72 48 96 23 26 68 22 88 -8z m-195 -75 c28
-21 68 -88 69 -116 0 -6 -27 -10 -69 -10 -77 1 -107 19 -131 77 -10 24 -10 33
5 55 15 23 22 26 56 21 21 -3 52 -15 70 -27z m59 -157 c-1 -5 -7 -19 -15 -33
-8 -14 -14 -37 -15 -52 0 -35 -48 -69 -105 -75 -36 -5 -45 -2 -58 17 -12 17
-13 29 -6 49 14 35 48 71 84 87 32 14 115 19 115 7z m97 -72 c29 -15 49 -80
37 -122 -21 -73 -82 -68 -122 11 -24 47 -25 107 -1 151 11 21 11 21 37 -4 15
-13 37 -30 49 -36z"
                        />
                        <path
                          d="M1730 638 c0 -8 7 -34 15 -57 l14 -41 -39 0 c-22 0 -40 -4 -40 -10 0
-5 20 -10 45 -10 38 0 45 -3 45 -19 0 -19 17 -38 26 -29 2 3 -8 40 -22 84 -27
79 -44 112 -44 82z"
                        />
                        <path
                          d="M1390 573 c0 -26 25 -59 50 -66 28 -7 25 7 -5 27 -14 9 -25 23 -25
31 0 7 -4 17 -10 20 -5 3 -10 -2 -10 -12z"
                        />
                        <path
                          d="M1510 490 c0 -13 37 -50 50 -50 16 0 12 11 -16 36 -28 26 -34 29 -34
14z"
                        />
                      </g>
                    </svg>
                  </RouterLink>
                </h1>
                {/* navigation */}
                <nav className="nav hide-for-mobile">
                  <ul className="nav__items">
                    <li className="nav__item">
                      <Link
                        to="arkworks"
                        style={{ cursor: "pointer" }}
                        spy={true}
                        className="nav__links"
                      >
                        ARTWORKS
                      </Link>
                    </li>
                    <li className="nav__item">
                      <RouterLink
                        to={routeList.ABOUT_ME}
                        className="nav__links"
                      >
                        ABOUT ME
                      </RouterLink>
                    </li>

                    <li className="nav__item">
                      <RouterLink to={routeList.CART} className="nav__links">
                        <img src={cartIcon} alt="cart"></img>
                        <span>CART({cartItems.length})</span>
                      </RouterLink>
                    </li>
                    {userInfo?.data?.token && (
                      <li className="nav__item">
                        <RouterLink
                          to={routeList.DASHBOARD_PAGE}
                          className="nav__links"
                        >
                          DASHBOARD
                        </RouterLink>
                      </li>
                    )}
                    {userInfo?.data?.token ? (
                      <li className="nav__item">
                        <button onClick={handleLogout} className="nav__links">
                          LOGOUT
                        </button>
                      </li>
                    ) : (
                      <li className="nav__item">
                        <RouterLink
                          to={routeList.LOGIN_PAGE}
                          className="nav__links"
                        >
                          LOGIN
                        </RouterLink>
                      </li>
                    )}
                  </ul>
                </nav>
                {/* mobile icons */}
                <div className="hide-for-desktop  mobile-icons ">
                  <RouterLink
                    style={{ position: "relative" }}
                    to={routeList.CART}
                  >
                    <img
                      className="mobile-icons-cart"
                      src={cartIcon}
                      alt="cart"
                    ></img>
                    <span className="mobile-icons-number">
                      {cartItems.length}
                    </span>
                  </RouterLink>

                  {toggle ? (
                    <RouterLink onClick={handleToggle}>
                      <img
                        className="mobile-icons-menu"
                        src={closeIcon}
                        alt="menu"
                      ></img>
                    </RouterLink>
                  ) : (
                    <RouterLink onClick={handleToggle}>
                      <img
                        className="mobile-icons-menu"
                        src={menuIcon}
                        alt="menu"
                      ></img>
                    </RouterLink>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </header>

      {/* mobile nav */}
      <div className="hide-for-desktop">
        <nav className={toggle ? "nav-drawer show-nav-drawer" : "nav-drawer"}>
          <ul className="nav-drawer__items">
            <li className="nav-drawer__item">
              <Link
                to="arkworks"
                style={{ cursor: "pointer" }}
                spy={true}
                className="nav-drawer__links"
                onClick={handleToggle}
              >
                ARTWORKS
              </Link>
            </li>
            <li className="nav-drawer__item">
              <RouterLink
                onClick={handleToggle}
                to={routeList.ABOUT_ME}
                className="nav-drawer__links"
              >
                ABOUT ME
              </RouterLink>
            </li>
            {userInfo?.data?.token && (
              <li className="nav-drawer__item">
                <RouterLink
                  onClick={handleToggle}
                  to={routeList.DASHBOARD_PAGE}
                  className="nav-drawer__links"
                >
                  DASHBOARD
                </RouterLink>
              </li>
            )}
            {userInfo?.data?.token ? (
              <li className="nav-drawer__item" onClick={handleToggle}>
                <button onClick={handleLogout}>LOGOUT</button>
              </li>
            ) : (
              <li className="nav-drawer__item">
                <RouterLink
                  onClick={handleToggle}
                  to={routeList.LOGIN_PAGE}
                  className="nav-drawer__links"
                >
                  {" "}
                  LOGIN
                </RouterLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
