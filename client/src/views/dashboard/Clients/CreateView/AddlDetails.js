import React, { useState } from 'react';
import { Box, Button, Checkbox, Grid, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Stack } from '@material-ui/core';

import AnimateButton from 'ui-component/extended/AnimateButton';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    type: yup.string().required
});

const AddlDetails = ({ handleNext, handleBack, setErrorIndex, extraData, setExtraData }) => {
    const formik = useFormik({
        initialValues: {
            bestContactTime: extraData.bestContactTime
        },
        validationSchema,
        onSubmit: (values) => {
            setExtraData({
                bestContactTime: values.bestContactTime
            });
            handleNext();
        }
    });

    return (
        <Grid container md={12} sx={{ p: 1 }}>
            <Grid item>
                <form onSubmit={formik.handleSubmit} id="validation-forms">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Best Time to Contact</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.bestContactTime}
                                    label="Best Contact Time"
                                    onChange={(e) => formik.setFieldValue('bestContactTime', e.target.value)}
                                    autoComplete="bestContactTime"
                                >
                                    <MenuItem value="morning">Morning</MenuItem>
                                    <MenuItem value="afternoon">Afternoon</MenuItem>
                                    <MenuItem value="evening">Evening</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
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
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default AddlDetails;
