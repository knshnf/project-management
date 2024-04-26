import { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import { DataGrid, GridToolbar, GridRowSelectionModel  } from '@mui/x-data-grid';

import { useQuery, useMutation, gql } from '@apollo/client';

import { tableData } from './data'
import { transformData } from './transformData'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
  
const tableOptions = {
    'status': {
        'label': 'Status'
    },

    'task_type': {
        'label': 'Task Type'
    },

    'users': {
        'label': 'Users'
    },

    'projects': {
        'label': 'Projects'
    }
}


const Table = ( ( table ) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setName(null);
        setOpen(false);
    }

    const [name, setName] = useState(null)

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    const GET_CONFIG = gql`
    query GetConfig {
        status {
            id
            name
        }
        task_type {
            id
            name
        }
        users {
            id
            name
            last_name
            first_name
            middle_name
            suffix_name
            username
        }
        projects {
            id
            name
            task_type {
                name
            }
        }
      }
    `;

    const ADD_STATUS = gql`
    mutation AddStatus($name: String!) {
        insert_status(objects: {name: $name}) {
            returning {
              id
              name
            }
          }
        }
    `;

    const DELETE_STATUS = gql`
    mutation DeleteStatus($id: bigint!) {
        delete_status(where: {id: {_eq: $id }}) {
            returning {
              id
            }
          }
        }
    `;

    const create = ( () => {
        if (table.table == 'status') {
            addStatus()
        }

        handleClose()
    })

    const deleteRow = ( () => {
        if (rowSelectionModel.length > 0) {
            rowSelectionModel.map( (value) => {
                deleteStatus({
                    variables: {
                        id: value
                    }
                })
            })
        }
    })
    
    const { loading, error, data } = useQuery(GET_CONFIG);
    const [addStatus, { loading: loadingAddStatus, error: errorAddStatus, data: dataAddStatus }] = useMutation(ADD_STATUS, {
        variables: {
            name: name
        }
    });

    const [deleteStatus] = useMutation(DELETE_STATUS)
    
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
                        }}
                    >
                        <TextField
                            id="name"
                            variant="standard"
                            label="Name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => setName(e.target.value)}
                        />
                    </Box>
                    <Box
                        sx={{
                            margin: '10px',
                        }}
                    >
                        <Button variant="contained" onClick={create}>Create</Button>
                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    </Box>
                </Box>

            </Modal>
        </Box>
    )
})

export default Table