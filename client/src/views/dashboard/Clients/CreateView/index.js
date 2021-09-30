import React, { useState } from 'react';
import { Box, Button, Dialog, Grid, Step, Stepper, StepLabel, Stack, Typography } from '@material-ui/core';

import ContactForm from './ContactForm';
import DetailsForm from './DetailsForm';
import AddlDetails from './AddlDetails';
import { createClient } from '../../../../actions/clientActions';

const steps = ['Client Details', 'Address', 'Additional Info'];

function getStepContent(step, handleNext, handleBack, setErrorIndex, contactData, setContactData, detailsData, setDetailsData) {
    switch (step) {
        case 0:
            return (
                <ContactForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    contactData={contactData}
                    setContactData={setContactData}
                />
            );
        case 1:
            return (
                <DetailsForm
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    detailsData={detailsData}
                    setDetailsData={setDetailsData}
                />
            );
        case 2:
            return (
                <AddlDetails
                    handleNext={handleNext}
                    handleBack={handleBack}
                    setErrorIndex={setErrorIndex}
                    detailsData={detailsData}
                    setDetailsData={setDetailsData}
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
    const [detailsData, setDetailsData] = useState({});

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
                                    detailsData,
                                    setDetailsData
                                )}
                                {activeStep === steps.length - 1 && (
                                    <Stack direction="row" justifyContent={activeStep !== 0 ? 'space-between' : 'flex-end'}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} sx={{ my: 2, ml: 1 }}>
                                                Back
                                            </Button>
                                        )}

                                        <Button variant="contained" onClick={handleNext} sx={{ my: 2, ml: 1 }}>
                                            {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
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
