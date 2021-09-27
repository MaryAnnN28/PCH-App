import React, { useState } from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import LoanOfficerListView from './ListView';

const LoanOfficers = () => {
    const [team, setTeam] = useState([]);

    return (
        <Box>
            <h1>Team Page</h1>
            <Container>
                <LoanOfficerListView />
            </Container>
        </Box>
    );
};

export default LoanOfficers;
