import React, { useState } from 'react';
import { Box, Button, Dialog, Grid, Step, Stepper, StepLabel, Stack, Typography } from '@material-ui/core';

import ContactInfo from './ContactInfo';
import AddressForm from './AddressForm';
import AddlDetails from './AddlDetails';
import { createClient } from '../../../../actions/clientActions';
import AnimateButton from 'ui-component/extended/AnimateButton';

const steps = ['Client Details', 'Address', 'Additional Info'];

function getStepContent(
    step,
    handleNext,
    handleBack,
    setErrorIndex,
    contactData,
    setContactData,
    addressData,
    setAddressData,
    extraData,
    setExtraData
) {
    switch (step) {
        case 0:
            return (
                <ContactInfo
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    contactData={contactData}
                    setContactData={setContactData}
                />
            );
        case 1:
            return (
                <AddressForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    addressData={addressData}
                    setAddressData={setAddressData}
                />
            );
        case 2:
            return (
                <AddlDetails
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    extraData={extraData}
                    setExtraData={setExtraData}
                />
            );
        default:
            throw new Error('Unknown step');
    }
}

const ClientCreateView = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [errorIndex, setErrorIndex] = useState(null);
    const [contactData, setContactData] = useState({});
    const [addressData, setAddressData] = useState({});
    const [extraData, setExtraData] = useState({});

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setErrorIndex(null);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <Box sx={{ maxWidth: '100%' }}>
            <Grid container sx={{ mt: 2 }}>
                <Grid item md={12} sx={{ px: 2 }}>
                    <Stepper activeStep={activeStep} sx={{ pb: 4 }}>
                        {steps.map((label, index) => {
                            const labelProps = {};

                            if (index === errorIndex) {
                                labelProps.optional = (
                                    <Typography variant="caption" color="error">
                                        Error
                                    </Typography>
                                );

                                labelProps.error = true;
                            }

                            return (
                                <Step key={label}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    <>
                        {activeStep === steps.length ? (
                            <>
                                <Typography variant="h5" gutterBottom>
                                    Client saved
                                </Typography>
                                <Stack direction="row" justifyContent="flex-end">
                                    <AnimateButton>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => {
                                                setContactData({});
                                                setAddressData({});
                                                setExtraData({});
                                                setActiveStep(0);
                                            }}
                                            sx={{ my: 3, ml: 1 }}
                                        >
                                            Reset
                                        </Button>
                                    </AnimateButton>
                                </Stack>
                            </>
                        ) : (
                            <>
                                {getStepContent(
                                    activeStep,
                                    handleNext,
                                    handleBack,
                                    setErrorIndex,
                                    contactData,
                                    setContactData,
                                    addressData,
                                    setAddressData,
                                    extraData,
                                    setExtraData
                                )}
                                {activeStep === steps.length - 1 && (
                                    <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} sx={{ my: 2, ml: 1 }}>
                                                Back
                                            </Button>
                                        )}

                                        <Button variant="contained" onClick={handleNext} sx={{ my: 2, ml: 1 }}>
                                            {activeStep === steps.length - 1 ? 'Add Client' : 'Next'}
                                        </Button>
                                    </Stack>
                                )}
                            </>
                        )}
                    </>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ClientCreateView;
