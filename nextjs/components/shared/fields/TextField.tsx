import Box from '@mui/material/Box';

const TextField = ( ({ label, value, mode })  => {
    return (
        <Box
            sx={{
                width: '500px',
                margin: '40px',
                marginLeft: '50px',
                display: 'flex',
            }}
        >
            <Box 
                sx={{
                    width: '30%',
                    textAlign: 'right'
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
