import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@material-ui/core';

// project imports
import config from 'config';
import PCHLogo from 'ui-component/PCHLogo';

// ===========================|| MAIN LOGO ||=========================== //

const LogoSection = () => (
    <ButtonBase disableRipple component={Link} to={config.defaultPath}>
        <PCHLogo />
    </ButtonBase>
);

export default LogoSection;
