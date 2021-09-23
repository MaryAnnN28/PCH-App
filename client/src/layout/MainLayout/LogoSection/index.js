import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@material-ui/core';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import PCHLogo from 'ui-component/PCHLogo';
// client/src/assets/images/PCH_logo_only.png

// ===========================|| MAIN LOGO ||=========================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <Logo />
        <PCHLogo />
    </ButtonBase>
);

export default LogoSection;
