import { useState, useEffect } from 'react'

import _  from 'lodash'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { DataGrid, GridToolbar, GridRowSelectionModel  } from '@mui/x-data-grid';

import { tableData } from './data'
import { transformData } from './transformData'

import { SnackbarSuccess } from '../../shared/Snackbar'

import { 
    useGetMasterdataQuery,
    useAddStatusMutation,
    useAddTaskTypeMutation,
    useAddProjectsMutation,
    useAddUsersMutation,
    useUpdateStatusMutation,
    useUpdateTaskTypeMutation,
    useUpdateProjectsMutation,
    useDeleteStatusMutation,
    useDeleteTaskTypeMutation,
    useDeleteProjectsMutation,
    useDeleteUsersMutation,
} from './queries'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
  
const tableOptions = {
    'status': {
        'label': 'Status',
        'message': 'Status'
    },

    'task_type': {
        'label': 'Task Type',
        'message': 'Task Type'
    },

    'users': {
        'label': 'Users',
        'message': 'User'
    },

    'projects': {
        'label': 'Projects',
        'message': 'Project'
    }
}


const Table = ( ( table ) => {

    useEffect( () => {
        setRowSelectionModel([])
    },[table.table])

    const { loading, error, data, refetch } = useGetMasterdataQuery()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const [feedbackOpen, setFeedbackOpen] = useState(false);

    const handleClose = () => {
        setName(null);
        setTaskTypeId(null);
        setUsername(null);
        setLastName(null);
        setFirstName(null);
        setMiddleName(null);
        setSuffixName(null);
        setRole(null);
        setOpen(false);
    }

    const [name, setName] = useState(null)
    const [task_type_id, setTaskTypeId] = useState(null)

    const [fullName, setFullName] = useState(null)
    const [username, setUsername] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [middleName, setMiddleName] = useState(null)
    const [suffixName, setSuffixName] = useState(null)
    const [role, setRole] = useState(null)

    const [color, setColor] = useState(null)

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    useEffect( () => {
        const users_name = `${lastName}, ${firstName} ${middleName}`
        setFullName(users_name)
    }, [lastName, firstName, middleName])

    const [ addStatus ] = useAddStatusMutation({
        variables: {
            name: name,
            color: color
        },
        onCompleted: (data) => {
            setFeedbackOpen(true)
            refetch()
        }
    });

    const [ addTaskType ] = useAddTaskTypeMutation({
        variables: {
            name: name
        },
        onCompleted: (data) => {
            setFeedbackOpen(true)
            refetch()
        }
    });

    const [ addProjects ] = useAddProjectsMutation({
        variables: {
            name: name,
            task_type_id: task_type_id
        },
        onCompleted: (data) => {
            setFeedbackOpen(true)
            refetch()
        }
    });

    const [ addUsers ] = useAddUsersMutation({
        variables: {
            name: fullName,
            username: username,
            last_name: lastName,
            first_name: firstName,
            middle_name: middleName,
            suffix_name: suffixName,
            role: role
        },
        onCompleted: (data) => {
            setFeedbackOpen(true)
            refetch()
        }
    });

    const [ updateStatus ] = useUpdateStatusMutation()

    const [ updateTaskType ] = useUpdateTaskTypeMutation()

    const [ updateProjects ] = useUpdateProjectsMutation()
    
    const [ deleteStatus ] = useDeleteStatusMutation()

    const [ deleteTaskType ] = useDeleteTaskTypeMutation()

    const [ deleteProjects ] = useDeleteProjectsMutation()

    const [ deleteUsers ] = useDeleteUsersMutation()

    const create = ( () => {
        if (table.table == 'status') {
            addStatus()
        } else if (table.table == 'task_type') {
            addTaskType()
        } else if (table.table == 'projects') {
            addProjects()
        } else if (table.table == 'users') {
            addUsers()
        }
        handleClose()
    })

    const deleteRow = ( () => {
        if (rowSelectionModel.length > 0) {
            rowSelectionModel.map( (value) => {
                if (table.table == 'status') {
                    deleteStatus({
                        variables: {
                            id: value
                        },
                        onCompleted: (data) => {
                            refetch()
                        }
                    })
                } else if (table.table == 'task_type') {
                    deleteTaskType({
                        variables: {
                            id: value
                        },
                        onCompleted: (data) => {
                            refetch()
                        }
                    })
                } else if (table.table == 'projects') {
                    deleteProjects({
                        variables: {
                            id: value
                        },
                        onCompleted: (data) => {
                            refetch()
                        }
                    })
                } else if (table.table == 'users') {
                    deleteUsers({
                        variables: {
                            id: value
                        },
                        onCompleted: (data) => {
                            refetch()
                        }
                    })
                }
            }) 
        }
    })

    const inputs = ( () => {

        const inputFields = ( () => {
            const formStatus = ['status']
            const formTaskType = ['task_type']
            const formProjects = ['projects']
            const formUsers = ['users']
            if (formStatus.includes(table.table)) {
                return (
                    <Box>
                        <TextField
                            id="name"
                            variant="standard"
                            fullWidth={true}
                            label="Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setName(e.target.value)}
                        />

                        <TextField
                            id="color"
                            variant="standard"
                            fullWidth={true}
                            label="Color"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setColor(e.target.value)}
                        />
                    </Box>
                )
            } else if (formTaskType.includes(table.table)) {
                return (
                    <TextField
                        id="name"
                        variant="standard"
                        fullWidth={true}
                        label="Name"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setName(e.target.value)}
                    />
                )
            } else if (formProjects.includes(table.table)) {
                return (
                    <Box>
                        <TextField
                            id="name"
                            variant="standard"
                            label="Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setName(e.target.value)}
                        />
                            <InputLabel id="task_type_id">Task Type</InputLabel>
                            <Select
                                labelId="task_type_id"
                                id="task_type_id"
                                value={task_type_id}
                                onChange={e => setTaskTypeId(e.target.value)}
                                label="Task Type"
                            >
                                {
                                    data.task_type.map( (dtt) => {
                                        return (
                                            <MenuItem key={dtt.id} value={dtt.id}> {dtt.name} </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                    </Box>

                )
            } else if (formUsers.includes(table.table)) {
                return (
                    <Box>
                        <TextField
                            id="username"
                            variant="standard"
                            label="Username"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setUsername(e.target.value)}
                        />

                        <TextField
                            id="last_name"
                            variant="standard"
                            label="Last Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setLastName(e.target.value)}
                        />

                        <TextField
                            id="first_name"
                            variant="standard"
                            label="First Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setFirstName(e.target.value)}
                        />

                        <TextField
                            id="middle_name"
                            variant="standard"
                            label="Middle Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setMiddleName(e.target.value)}
                        />

                        <TextField
                            id="suffix_name"
                            variant="standard"
                            fullWidth={true}
                            label="Suffix Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setSuffixName(e.target.value)}
                        />

                        <InputLabel id="role">Role</InputLabel>
                        <Select
                                labelId="role"
                                id="role"
                                value={role}
                                onChange={e => setRole(e.target.value)}
                                label="Role"
                            >
                                <MenuItem value='admin'> Admin </MenuItem>
                                <MenuItem value='user'> User </MenuItem>
                        </Select>

                    </Box>                    
                )
            }
        }) 

        return inputFields()
    })

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        if (table.table == 'status') {
            updateStatus({
                variables: {
                    id: updatedRow.id,
                    name: updatedRow.name,
                    color: updatedRow.color
                },
                onCompleted: (data) => {
                    refetch()
                }
            })
        } else if (table.table == 'task_type') {
            updateTaskType({
                variables: {
                    id: updatedRow.id,
                    name: updatedRow.name
                },
                onCompleted: (data) => {
                    refetch()
                }
            })
        } else if (table.table == 'projects') {
            updateProjects({
                variables: {
                    id: updatedRow.id,
                    name: updatedRow.name,
                    task_type_id: updatedRow.task_type_id,
                },
                onCompleted: (data) => {
                    refetch()
                }
            })
        }
        return updatedRow
      };
    
    const cleanData = transformData(data, table.table)
    const dataGrid = tableData(cleanData, table.table)

    return (
        <Box 
            sx={{
                height: '930px', 
                width: '84%',
                padding: '10px',
            }}
        >
            <Box
                sx={{
                    padding: '10px',
                }}
            >
                {
                    (rowSelectionModel.length > 0) 
                    ?
                    <Button 
                        variant="contained"
                        color="error"
                        onClick={deleteRow}
                    >
                        Delete
                    </Button>
                    :
                    <Button 
                        variant="contained"
                        onClick={handleOpen}
                    >
                        Create
                    </Button>
                }

            </Box>
            <DataGrid
                editMode="row"
                loading={loading}
                rows={dataGrid.rows}
                columns={dataGrid.columns}
                slots={{ toolbar: GridToolbar }}
                onRowSelectionModelChange={(newRowSelectionModel) => {
                    setRowSelectionModel(newRowSelectionModel);
                }}
                rowSelectionModel={rowSelectionModel}
                processRowUpdate={processRowUpdate}
                onProcessRowUpdateError={error =>  console.log(error)}
                checkboxSelection 
            />

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            margin: '10px',
                        }}
                    >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            New {tableOptions[table.table].label}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            margin: '10px',
                            width: '100%',
                        }}
                    >
                        { inputs() }
                    </Box>
                    <Box
                        sx={{
                            marginTop: '30px',
                        }}
                    >
                        <Button variant="contained" onClick={create}>Create</Button>
                        <Button sx={{marginLeft: '10px'}} variant="outlined" onClick={handleClose}>Cancel</Button>
                    </Box>
                </Box>
            </Modal>

        </Box>
    )
})

export default Table