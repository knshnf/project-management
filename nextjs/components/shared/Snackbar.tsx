import { useState } from 'react'

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const SnackbarSuccess = ( (message: any, snackbarOpen: boolean) => {

    const [feedbackOpen, setFeedbackOpen] = useState(snackbarOpen);

    const handleFeedbackClose = ( () => {
        setFeedbackOpen(false)
    })

    return (
        <Snackbar
            ContentProps={{
                sx:{
                    color: "white",
                    bgcolor: "green",
                    fontWeight: "bold",
                    margin: "auto"
                }
            }}
            open={feedbackOpen}
            autoHideDuration={3000}
            message={`Successfully Created New ${message.message}`}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            action={
                <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleFeedbackClose}
                >
                <CloseIcon fontSize="small" />
                </IconButton>
            }
        />
    )
})

export const SnackbarDelete = ( () => {

})

export const SnackbarError = ( () => {

})
