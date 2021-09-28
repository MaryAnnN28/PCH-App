import React, { useState } from 'react';
import { Button, Grid, Card, CardActions, CardContent, CardMedia, CardHeader, Chip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SubCard from 'ui-component/cards/SubCard';
import Card1 from 'assets/images/cards/card-1.jpg';
import { FaBed, FaBath } from 'react-icons/fa';

const nodeURL = process.env.REACT_APP_STRAPI_URL;

const useStyles = makeStyles((theme) => ({
    root: {},
    card: {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100],
        boxShadow: 10
    },
    cityChip: {
        display: 'flex',
        position: 'absolute',
        top: '10',
        right: '10'
    }
}));

const ListingsGrid = ({ listings }) => {
    const classes = useStyles();

    console.log(listings);

    return (
        <>
            <Grid container spacing={3} sx={{ p: 4 }}>
                {listings.map((listing) => (
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Card className={classes.card} sx={{ boxShadow: 1 }}>
                            <span className={classes.cityChip}>
                                <Chip label={`${listing.city}, ${listing.state}`} color="primary" />
                            </span>
                            <CardMedia component="img" image={`${nodeURL}${listing.image?.url}`} title="Card 1" />
                            <CardContent>
                                <Grid container>
                                    <Grid item md={4}>
                                        <Typography variant="h4">${listing.price}</Typography>
                                    </Grid>
                                    <Grid item md={1}>
                                        <Typography variant="h5" textAlign="right" sx={{ pr: 0.75 }}>
                                            {listing.bedroom}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1}>
                                        <FaBed size="1.2rem" />
                                    </Grid>
                                    <Grid item md={1}>
                                        <Typography variant="h5" textAlign="right" sx={{ pr: 0.75 }}>
                                            {listing.bath}
                                        </Typography>
                                    </Grid>
                                    <Grid item md={1}>
                                        <FaBath size="1rem" />
                                    </Grid>

                                    <Grid item md={3}>
                                        <Typography variant="h5" textAlign="right">
                                            {listing.sqFt} sqft
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Typography variant="subtitle2">{listing.address}</Typography>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Typography variant="h5">{listing.city}</Typography>
                                    </Grid>
                                    <Grid item md={3}>
                                        <Typography variant="h5">
                                            {listing.state} {listing.zip}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                ;
            </Grid>
        </>
    );
};

export default ListingsGrid;
