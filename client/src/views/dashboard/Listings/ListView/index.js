import React, { useState } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import ListingsGrid from './ListingsGrid';

const ListingsListView = () => {
    const [listings, setListings] = useState([]);

    return (
        <Box sx={{ p: 2 }}>
            <Grid container>
                <ListingsGrid />
            </Grid>
        </Box>
    );
};

export default ListingsListView;
