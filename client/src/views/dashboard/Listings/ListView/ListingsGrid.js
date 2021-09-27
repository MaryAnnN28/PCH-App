import React, { useState } from 'react';
import { Button, Grid, Card, CardActions, CardContent, CardMedia, CardHeader, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SubCard from 'ui-component/cards/SubCard';
import Card1 from 'assets/images/cards/card-1.jpg';

const useStyles = makeStyles((theme) => ({
    root: {},
    card: {
        background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[50],
        border: '1px solid',
        borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.grey[100],
        boxShadow: 10
    }
}));

const ListingsGrid = () => {
    const [listings, setListings] = useState([]);
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={3} sx={{ p: 2 }}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    {/* <SubCard title="Image Cap"> */}
                    <Card className={classes.card}>
                        <CardMedia component="img" image={Card1} title="Card 1" />
                        <CardContent>
                            <Grid container>
                                <Grid item>
                                    <Typography variant="subtitle1">Special title</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle2">
                                        With supporting text below as a natural lead-in to additional content.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container sx={{ display: 'flex', placeItems: 'center' }}>
                                <Grid item md={12}>
                                    <Typography variant="caption">Last updated 3 mins ago</Typography>
                                </Grid>
                                <Grid item md={12}>
                                    <Button variant="text">Card Link</Button>
                                    <Button variant="text" color="secondary">
                                        Another
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Card>
                    {/* </SubCard> */}
                </Grid>
            </Grid>
        </>
    );
};

export default ListingsGrid;
