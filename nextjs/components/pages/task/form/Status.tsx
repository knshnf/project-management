import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import _ from 'lodash'
import { Typography } from '@mui/material';

const Status = ( ( {masterData, currentStatus, taskData} ) => {
    const steps = []

    const status_sort = {
        'Draft': 0,
        'In-Progress': 1,
        'Done': 2
    }

    const statusList = masterData?.status

    const status = []

    statusList?.map( (value) => {
        let date;
        if(value.name === 'Draft') {
            date = taskData?.task_by_pk?.draft_date;
        }
        else if (value.name === 'In-Progress') {
            date = taskData?.task_by_pk?.in_progress_date
        }
        else if (value.name === 'Done') {
            date = taskData?.task_by_pk?.done_date
        }

        status.push({
            name: value.name,
            sort: status_sort[value.name],
            date: date
        })
    })

    const status_ordered = _.orderBy(status, ['sort'],['asc'])

    status_ordered.map( (value) => {
        steps.push({label: value.name, date: value.date})
    })

    return (
        <Box sx={{ marginTop: '40px', width: '100%' }}>
            <Stepper activeStep={status_sort[currentStatus]} alternativeLabel>
            {steps.map((step) => (
                <Step key={step.label}>
                <StepLabel>
                    {step.label}
                    <br/>
                    <Typography sx={{fontSize: '12px'}}>
                        {step.date ? new Date(step.date).toDateString().split(' ').slice(1).join(' ') : null}
                    </Typography>
                    
                </StepLabel>
                </Step>
            ))}
            </Stepper>
        </Box>
    )
})

export default Status