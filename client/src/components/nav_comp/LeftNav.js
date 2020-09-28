//contains nav components for left side of bar, i.e logo, home, library
import React from 'react';
// import HomeLogo from '../../style/Home'
import { Link } from 'react-router-dom';

function LeftNav(){
  
    return(
        <div className="leftnav">
            <Link to="/profile" id="logo">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    viewBox="100 110 150.000000 100.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <metadata>
                        Created by potrace 1.10, written by Peter Selinger 2001-2011
                    </metadata>
                    <g transform="translate(0.000000,251.000000) scale(0.050000,-0.050000)"
                        stroke="none">
                        <path d="M3260 2741 c0 -11 18 -29 40 -41 54 -29 63 -716 10 -760 -63 -52 -32
                            -70 120 -70 152 0 183 18 120 70 -25 21 -30 93 -30 422 l0 398 -130 0 c-71 0
                            -130 -9 -130 -19z"/>
                        <path d="M2798 2454 c-141 -94 -100 -235 96 -328 110 -52 146 -108 104 -158
                            -38 -47 -163 -29 -188 27 -36 82 -110 60 -110 -33 l0 -79 132 -14 c368 -39
                            497 241 177 382 -120 53 -159 118 -98 162 63 46 169 12 169 -54 0 -11 23 -19
                            50 -19 60 0 76 126 18 148 -81 31 -282 12 -350 -34z"/>
                    </g>
                </svg>
            </Link>
            
        </div>
    )
}

export default LeftNav;
