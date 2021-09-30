import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { fetchClients } from '../../../../actions/clientActions';
import useScriptRef from 'hooks/useScriptRef';
import ClientList from './ClientList';

const ClientListView = () => {
    const scripted = useScriptRef();
    const [clients, setClients] = useState([]);

    const getClients = useCallback(async () => {
        try {
            const response = await fetchClients();
            if (scripted.current) {
                setClients(response);
            }
        } catch (error) {
            console.log(error);
        }
    }, [scripted]);

    useEffect(() => {
        getClients();
    }, []);

    console.log(clients);

    return (
        <>
            <Box>
                <ClientList clients={clients} />
            </Box>
        </>
    );
};

export default ClientListView;
