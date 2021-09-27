import React, { useState } from 'react';
import { useTheme } from '@material-ui/styles';
import { useNavigate } from 'react-router';
import { Box, Grid, Typography, Button, IconButton, ButtonBase, Avatar, Fab, Tooltip } from '@material-ui/core';
import ClientList from './ListView/ClientList';
import Add from '@material-ui/icons/Add';
import AnimateButton from 'ui-component/extended/AnimateButton';
import SpeedDialTooltipOpen from 'views/ui-elements/advance/UISpeeddial/SpeedDialTooltipOpen';

const Clients = () => {
    const theme = useTheme();
    const [clients, setClients] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleAddClick = () => {
        navigate('/dashboard/clients/new');
    };

    return (
        <>
            <Tooltip title="Live Customize">
                <Fab
                    component="div"
                    onClick={handleAddClick}
                    size="medium"
                    variant="string"
                    color="secondary"
                    sx={{
                        top: 100,
                        m: 4,
                        position: 'fixed',
                        right: 20,
                        zIndex: theme.zIndex.speedDial,
                        boxShadow: theme.customShadows.secondary
                    }}
                >
                    <IconButton color="inherit" size="large" disableRipple>
                        <Add />
                    </IconButton>
                </Fab>
            </Tooltip>
            <Box sx={{ maxWidth: '100%', p: 4 }}>
                <Grid container sx={{ mt: 8, mb: 4 }}>
                    <Grid item md={12}>
                        <ClientList />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Clients;
