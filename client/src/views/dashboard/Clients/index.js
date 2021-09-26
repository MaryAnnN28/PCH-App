import React, { useState } from 'react';
import { Box, Grid, Typography, Button, IconButton, ButtonBase, Avatar } from '@material-ui/core';
import ClientList from './ListView/ClientList';
import Add from '@material-ui/icons/Add';

const Clients = () => {
    const [clients, setClients] = useState([]);

    return (
        <>
            <Box sx={{ maxWidth: '100%', p: 4 }}>
                <Grid container sx={{ mb: 4, display: 'flex', justifyContent: 'flex-end' }}>
                    <Grid item sx={{}}>
                        <ButtonBase sx={{ borderRadius: '12px' }}>
                            <Avatar variant="circular">
                                <Add color="primary.light" />
                            </Avatar>
                        </ButtonBase>
                    </Grid>
                </Grid>
                <Grid container sx={{ mb: 4 }}>
                    <Grid item md={12}>
                        <ClientList />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Clients;
