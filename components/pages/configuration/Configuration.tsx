import { useState, useEffect } from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Layout from '../../layout/Layout'
import Table from './Table'

import { pageHeight } from '../../shared_styles/common'

import { useQuery, gql } from '@apollo/client';

const Configuration = ( () => {

    const [table, setTable] = useState('status')

    const tableOptions= [
        {
            key: 'status',
            value: 'Status'
        },
        {
            key: 'task_type',
            value: 'Task Type'
        },
        {
            key: 'projects',
            value: 'Projects'
        },
        {
            key: 'users',
            value: 'Users'
        },
    ]

    const handleTable = ( ( event: React.SyntheticEvent, value: string ) => {
        setTable(value)
    })

    return (
        <Box sx={pageHeight}>
            <Layout />
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Box 
                    sx={{
                        height: '930px', 
                        width: '15%',
                        borderRight: '1px solid gray',
                        textAlign: 'center',
                        padding: '10px',
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        MASTERDATA
                    </Typography>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={table}
                        onChange={handleTable}
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        {
                            tableOptions.map( (table) => {
                                return (
                                    <Tab
                                        label={table.value}
                                        value={table.key}
                                    />
                                )
                            })
                        }
                    </Tabs>
                </Box>
                <Table table={table}/>
            </Box>
        </Box>
    )
})

export default Configuration