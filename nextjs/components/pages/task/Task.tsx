import { useState, useEffect } from 'react' 

import Layout from '../../layout/Layout'
import { pageHeight } from '../../shared_styles/common'

import { DataGrid, GridToolbar, GridEventListener, GridRowSelectionModel } from '@mui/x-data-grid';

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

import { useRouter } from 'next/router';
import { Chip } from '@mui/material';

import { 
    useGetTaskQuery, 
    useDeleteTaskMutation,
} from './queries'

const Task = ( () => {

    const router = useRouter()

    const parameterView = router.query.view

    const [view, setView] = useState(parameterView)

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    useEffect( () => {
        if (view == undefined){
            setView('kanban')
            router.push(`http://localhost:3000/task?view=${view}`)
        } 
    },[parameterView])

    useEffect( () => {
        setRowSelectionModel([])
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

    const { loading, error, data, refetch } = useGetTaskQuery()

    const kanbanView = ( () => {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
            }}>
                {data?.task.map( (t) => {
                    const statusColor = t.status.color
                    return (
                        
                        <Button
                            sx={{
                                margin: '10px',
                            }}
                            href={`http://localhost:3000/formtask?view=${view}&mode=edit&id=${t.id}`}
                        >
                            <Card 
                                sx={{
                                    textAlign: 'left',
                                    width: '320px',
                                    height: '250px',
                                    display: 'flex',
                                    flexDirection: 'Column',
                                }}
                                variant="outlined"
                            >
                                <CardContent>
                                    {
                                    (t.name.length > 35)
                                    ?
                                    <Typography noWrap variant="h6" component="div">
                                        {t.name}
                                    </Typography>
                                    :
                                    <Typography variant="h6" component="div">
                                        {t.name}
                                    </Typography>
                                    
                                    }

                                
                                    <Typography 
                                        variant="caption"
                                    >
                                        {t.description}
                                    </Typography>
                                    {/* <Typography variant="caption" component="div">
                                        {t.user.name}
                                    </Typography> */}
                                </CardContent>
                            
                                <Box sx={{
                                    marginTop: 'auto',
                                    marginX: '15px',
                                    marginBottom: '10px'
                                }}>
                                    {t.task_tags.map( (task_tag) => {
                                        return (
                                            <Chip 
                                                variant="filled" 
                                                label={task_tag.tag.name} 
                                                sx={{marginRight: '5px', borderRadius: '5px'}} 
                                                style={{ backgroundColor: task_tag.tag.color}}  
                                                size="small"
                                            />
                                        )
                                    })} 
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center',
                                        height: '30px',
                                        background: statusColor,
                                        color: 'white',
                                    
                                    }}
                                >
                                    {t.status.name}
                                </Box>
                            </Card>
                        </Button>
                    )
                })}
            </Box>
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
                    rows={data?.task ?? []}
                    columns={columns}
                    onRowSelectionModelChange={(newRowSelectionModel) => {
                        setRowSelectionModel(newRowSelectionModel);
                    }}
                    onRowClick={handleRowClick}
                    slots={{ toolbar: GridToolbar }}
                    checkboxSelection
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
                    padding: '10px',
                }}
            >
                <Button 
                    variant="contained"
                    href={`http://localhost:3000/formtask?view=${view}&mode=${'create'}`}
                >
                    Create
                </Button>
            </Box>
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