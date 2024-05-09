import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import _ from 'lodash'

const Status = ( ( {data, currentStatus} ) => {

    const steps = []

    const status_sort = {
        'Draft': 0,
        'In-Progress': 1,
        'Done': 2
    }

    const statusList = data?.status

    const status = []

    statusList?.map( (value) => {
        status.push({
            name: value.name,
            sort: status_sort[value.name]
        })
    })

    const status_ordered = _.orderBy(status, ['sort'],['asc'])

    status_ordered.map( (value) => {
        steps.push(value.name)
    })

    return (
        <Box sx={{ marginTop: '40px', width: '100%' }}>
            <Stepper activeStep={status_sort[currentStatus]} alternativeLabel>
            {steps.map((label) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
        </Box>
    )
})

export default Status