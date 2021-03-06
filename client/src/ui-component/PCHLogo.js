import React from 'react';
import PCHLogoFile from '../assets/images/PCH_logo_only.png';
import PCHLogoWhite from '../assets/images/PCH_logo_white.png';

// material-ui
import { useTheme } from '@material-ui/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ===========================|| LOGO SVG ||=========================== //

const PCHLogo = () => {
    const theme = useTheme();

    return (
        //  * if you want to use image instead of svg uncomment following, and comment out <svg> element.
        <img src={theme.palette.mode === 'light' ? PCHLogoFile : PCHLogoWhite} alt="PCH" width="85" />

        //         <svg width="92" height="32" viewBox="0 0 92 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        //             <path
        //                 d="M1933 2574 c-123 -119 -223 -210 -223 -202 0 7 -88 101 -195 208
        // l-195 195 -182 -180 c-101 -99 -380 -376 -621 -615 l-437 -435 54 -3 55 -3
        // 562 446 c309 245 565 445 570 443 5 -2 66 -48 135 -103 l125 -99 -341 -341
        // c-187 -187 -340 -343 -340 -348 0 -4 21 -7 46 -7 52 0 -5 -43 838 628 247 197
        // 372 290 380 284 6 -5 267 -212 579 -461 l568 -451 52 0 52 0 -93 93 -92 92 -2
        // 245 -3 245 -155 0 -155 0 -3 -85 -3 -84 -377 377 -377 376 -222 -215z"
        //                 fill={theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.grey[900]}
        //             />
        //             <path
        //                 d="M1744 1450 c-139 -25 -265 -92 -359 -192 -125 -132 -186 -290 -186
        // -485 -1 -282 127 -504 355 -617 121 -61 222 -81 370 -73 99 5 235 32 254 51 6
        // 6 -23 264 -31 272 -2 2 -26 -5 -53 -16 -28 -10 -86 -23 -130 -29 -250 -34
        // -435 97 -476 337 -22 131 17 274 101 365 110 119 310 159 472 93 52 -21 59
        // -22 63 -7 12 42 28 253 20 260 -37 36 -286 61 -400 41z"
        //                 fill={theme.palette.primary.main}
        //             />
        //             <path
        //                 d="M90 761 l0 -681 135 0 135 0 0 260 0 260 150 0 c158 0 228 10 297 42
        // 184 86 266 339 183 561 -30 80 -111 165 -192 203 l-63 29 -322 3 -323 3 0
        // -680z m587 389 c43 -26 63 -68 63 -130 0 -58 -18 -99 -56 -129 -24 -19 -40
        // -21 -175 -21 l-149 0 0 150 0 150 143 0 c123 0 146 -3 174 -20z"
        //                 fill={theme.palette.primary.main}
        //             />
        //             <path
        //                 d="M2410 760 l0 -680 135 0 135 0 2 273 3 272 205 0 205 0 3 -272 2
        // -273 135 0 135 0 0 680 0 680 -135 0 -135 0 0 -270 0 -270 -210 0 -210 0 0
        // 270 0 270 -135 0 -135 0 0 -680z"
        //                 fill={theme.palette.primary.main}
        //             />
        //         </svg>
    );
};

export default PCHLogo;
