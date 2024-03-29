import React from "react";
import { Link } from "react-router-dom";
import { HOME_PAGE } from "../../routes";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer-outline">
        <div className="container">
          <div className="row">
            <div className="col">
              <section className="footer">
                <div className="footer-left">
                  <Link to={HOME_PAGE} className="logo" alt="QALA">
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
                  </Link>
                  <span className="label">© 2023 Qala</span>
                </div>
                <div className="footer-right">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-links"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-links"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      target="_blank"
                      rel="noreferrer"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-links"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-links"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z" />
                    </svg>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
