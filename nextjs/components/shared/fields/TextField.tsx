import Box from '@mui/material/Box';

const TextField = ( ({ label, value, mode })  => {
    return (
        <Box
            sx={{
                width: '100%',
                margin: '40px',
                display: 'flex',
            }}
        >
            <Box 
                sx={{
                    width: '30%',
                    textAlign: 'left'
                }}
            >
                {label}:
            </Box>
            <Box
                sx={{
                    width: '70%',
                    marginLeft: '40px'
                }}
            >
                {value}
            </Box>
        </Box>
    )

})

export default TextField
