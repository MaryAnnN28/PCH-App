import React, { useState } from 'react';
import { Box, Button, Checkbox, Grid, Typography, TextField, FormControlLabel, Stack } from '@material-ui/core';
import MainCard from 'ui-component/cards/MainCard';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required')
});

const ContactForm = ({ handleNext, setErrorIndex, contactData, setContactData }) => {
    const [client, setClient] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: ''
        },
        validationSchema,
        onSubmit: (values) => {
            setContactData({
                firstName: values.firstName,
                lastName: values.lastName
            });
            handleNext();
        }
    });

    return (
        <MainCard title="Contact Information">
            <Grid container md={12} sx={{ p: 4 }}>
                <Grid item>
                    <form onSubmit={formik.handleSubmit} id="validation-forms">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    label="First Name *"
                                    defaultValue={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name *"
                                    defaultValue={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                    fullWidth
                                    autoComplete="family-name"
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

export default ContactForm;
