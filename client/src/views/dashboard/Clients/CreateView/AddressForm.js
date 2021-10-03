import React, { useState } from 'react';
import { Autocomplete, Box, Button, Checkbox, Grid, Typography, TextField, FormControlLabel, Stack } from '@material-ui/core';

import AnimateButton from 'ui-component/extended/AnimateButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import states from '../../../../utils/states';
import countries from '../../../../utils/countries';

const validationSchema = yup.object({
    address1: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    zip: yup.string().required('Zip is required'),
    state: yup.string().required('State is required')
});

const AddressForm = ({ handleNext, handleBack, setErrorIndex, addressData, setAddressData }) => {
    const [client, setClient] = useState('');
    const [value, setValue] = useState('');

    const formik = useFormik({
        initialValues: {
            address1: addressData.address1 || '',
            address2: addressData.address2 || '',
            city: addressData.city || '',
            zip: addressData.zip || '',
            state: addressData.state || '',
            country: addressData.country || ''
        },
        validationSchema,
        onSubmit: (values) => {
            setAddressData({
                address1: values.address1,
                address2: values.address2,
                city: values.city,
                state: values.state,
                zip: values.zip,
                country: values.country
            });
            handleNext();
        }
    });

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid container md={12} sx={{ p: 1 }}>
            <Grid item>
                <form onSubmit={formik.handleSubmit} id="validation-forms">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="address1"
                                name="address1"
                                label="Address 1"
                                defaultValue={formik.values.address1}
                                onChange={formik.handleChange}
                                error={formik.touched.address1 && Boolean(formik.errors.address1)}
                                helperText={formik.touched.address1 && formik.errors.address1}
                                fullWidth
                                autoComplete="shipping address-line1"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="address2"
                                name="address2"
                                label="Address 2"
                                defaultValue={formik.values.address2}
                                onChange={formik.handleChange}
                                autoComplete="shipping address-line2"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                autoComplete="shipping city"
                                defaultValue={formik.values.city}
                                onChange={formik.handleChange}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                getOptionLabel={(option) => option.value}
                                options={states}
                                renderInput={(params) => (
                                    <TextField
                                        fullWidth
                                        id="state"
                                        name="state"
                                        label="State/Province/Region"
                                        autoComplete="shipping state"
                                        defaultValue={formik.values.state}
                                        onChange={(e) => formik.setFieldValue('state', e.target.value)}
                                        error={formik.touched.state && Boolean(formik.errors.state)}
                                        helperText={formik.touched.state && formik.errors.state}
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="zip"
                                name="zip"
                                label="Zip / Postal code"
                                fullWidth
                                defaultValue={formik.values.zip}
                                autoComplete="shipping zip"
                                onChange={formik.handleChange}
                                error={formik.touched.zip && Boolean(formik.errors.zip)}
                                helperText={formik.touched.zip && formik.errors.zip}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Autocomplete
                                getOptionLabel={(option) => option.text}
                                options={countries}
                                renderInput={(params) => (
                                    <TextField
                                        fullWidth
                                        id="country"
                                        name="country"
                                        label="Country"
                                        autoComplete="shipping country"
                                        defaultValue={formik.values.country}
                                        onChange={(e) => formik.setFieldValue('country', e.target.value)}
                                        {...params}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Stack direction="row" justifyContent="space-between">
                                <Button onClick={handleBack} sx={{ my: 2, ml: 1 }}>
                                    Back
                                </Button>
                                <AnimateButton>
                                    <Button variant="contained" type="submit" sx={{ my: 2, ml: 1 }} onClick={() => setErrorIndex(1)}>
                                        Next
                                    </Button>
                                </AnimateButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default AddressForm;
