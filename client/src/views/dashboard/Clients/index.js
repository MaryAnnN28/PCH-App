import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import ClientList from './ListView/ClientList';

const Clients = () => {
    const [clients, setClients] = useState([]);

    return (
        <>
            <Box sx={{ maxWidth: '100%', p: 4 }}>
                <Grid container sx={{ mb: 2 }}>
                    <Grid item sx={{ float: 'right' }}>
                        <Button>Add Client</Button>
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
