import { useState, useEffect } from 'react' 

import Layout from '../../layout/Layout'
import { pageHeight } from '../../shared_styles/common'

import { DataGrid, GridToolbar, GridEventListener   } from '@mui/x-data-grid';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import TableRowsIcon from '@mui/icons-material/TableRows';

import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

const Task = ( () => {

    const router = useRouter()

    const parameterView = router.query.view

    const [view, setView] = useState('kanban')

    useEffect( () => {
        if (parameterView == undefined){
            router.push(`http://localhost:3000/task?view=kanban`)
        }
    },[view])

    const handleView = (
        event: React.MouseEvent<HTMLElement>,
        changeView: string | null,
      ) => {
        router.push(`http://localhost:3000/task?view=${changeView}`)
        setView(changeView);
    };

    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
        router.push(`http://localhost:3000/formtask?view=${view}&id=${params.row.id}`)
      };

    const columns = [
        { 
            field: 'name', 
            headerName: 'Title' ,
            flex: 1
        }, 
        { 
            field: 'description', 
            headerName: 'Description',
            flex: 1
        }, 
        { 
            field: 'task_type', 
            headerName: 'Task Type',
            valueFormatter: (value) => value.name,
            flex: 1
        }, 
        { 
            field: 'user', 
            headerName: 'User',
            valueFormatter: (value) => value.name,
            flex: 1
        }, 
        { 
            field: 'status', 
            headerName: 'Status',
            valueFormatter: (value) => value.name,
            flex: 1
        }, 
    ]

    const GET_TASK = gql`
    query GetTask {
        task {
            id
            name
            description
            created_at
            updated_at
            project {
                id
                name
            }
            status {
                id
                name
            }
            task_type {
                id
                name
            }
            user {
                id
                name
            }
        }
      }
    `;
    
    const { loading, error, data } = useQuery(GET_TASK);

    const kanbanView = ( () => {
        return (
            data?.task.map( (t) => {
                return (
                    <Button
                        sx={{
                            margin: '10px',
                        }}
                        href={`http://localhost:3000/formtask?view=${view}&id=${t.id}`}
                    >
                        <Card 
                            sx={{
                                textAlign: 'left',
                                width: '320px',
                                height: '220px'
                            }}
                            variant="outlined"
                        >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {t.name}
                                </Typography>
                                <Typography variant="caption">
                                    {t.description}
                                </Typography>
                                <Typography variant="caption" component="div">
                                    {t.user.name}
                                </Typography>
                                <Typography variant="caption" component="div">
                                    {t.status.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Button>
                )
            })
        )
    })

    const tableView = ( () => {
        return (
            <Box
                sx={{
                    height: '860px',
                    width: '100%',
                }}
            >
                <DataGrid
                    loading={loading}
                    rows={data?.task}
                    columns={columns}
                    onRowClick={handleRowClick}
                    slots={{ toolbar: GridToolbar }}
                />
            </Box>
        )
    })

    const content = ( () => {
        if (view == 'kanban') {
            return kanbanView()
        } else if (view == 'table') {
            return tableView()
        }
    })

    return (
        <Box sx={pageHeight}>
            <Layout />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '10px'
                }}
            >
                    <Box>
                        Filters
                    </Box>
                    <Box
                        sx={{
                            marginLeft: 'auto',
                            marginRight: '15px'
                        }}
                    >
                        <ToggleButtonGroup
                            sx={{
                                marginLeft: 'auto'
                            }}
                            size="small"
                            value={view}
                            exclusive
                            onChange={handleView}
                            aria-label="view"
                        >
                            <ToggleButton value="kanban" aria-label="left aligned">
                                <ViewKanbanIcon />
                            </ToggleButton>
                            <ToggleButton value="table" aria-label="centered">
                                <TableRowsIcon />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
            </Box>
            <Divider />

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                }}
            >

                {content()}
                
            </Box>
        </Box>
    )
})

export default Task