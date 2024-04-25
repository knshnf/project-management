import Layout from '../../layout/Layout'
import { pageHeight } from '../../shared_styles/common'

import Box from '@mui/material/Box';

const Dashboard = ( () => {

    return (
        <Box sx={pageHeight}>
            <Layout />
            <Box>
                Dashboard Content
            </Box>
        </Box>
    )
})

export default Dashboard