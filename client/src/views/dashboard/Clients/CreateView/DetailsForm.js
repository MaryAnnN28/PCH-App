import React, { useState } from 'react';
import { Box, Button, Checkbox, Grid, Typography, TextField, FormControlLabel, Stack } from '@material-ui/core';
import MainCard from 'ui-component/cards/MainCard';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    type: yup.string().required
});

const DetailsForm = ({ handleNext, setErrorIndex, detailsData, setDetailsData }) => {
    const [client, setClient] = useState('');

    const formik = useFormik({
        initialValues: {
            type: ''
        },
        validationSchema,
        onSubmit: (values) => {
            setDetailsData({
                type: values.type
            });
            handleNext();
        }
    });

    return (
        <MainCard title="Detail and Specifications">
            <Grid container md={12} sx={{ p: 4 }}>
                <Grid item>
                    <form onSubmit={formik.handleSubmit} id="validation-forms">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    id="type"
                                    name="type"
                                    label="Type"
                                    defaultValue={formik.values.type}
                                    onChange={formik.handleChange}
                                    error={formik.touched.type && Boolean(formik.errors.stype)}
                                    helperText={formik.touched.type && formik.errors.type}
                                    fullWidth
                                    autoComplete="type"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="address1"
                                    name="address1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="address2"
                                    name="address2"
                                    label="Address line 2"
                                    fullWidth
                                    autoComplete="shipping address-line2"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="city" name="city" label="City" fullWidth autoComplete="shipping address-level2" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="zip" name="zip" label="Zip / Postal code" fullWidth autoComplete="shipping postal-code" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField id="country" name="country" label="Country" fullWidth autoComplete="shipping country" />
                            </Grid>
                            <Grid item xs={12}>
                                <Stack direction="row" justifyContent="flex-end">
                                    <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" onClick={() => setErrorIndex(0)}>
                                        Next
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default DetailsForm;
