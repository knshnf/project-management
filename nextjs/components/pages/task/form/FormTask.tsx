import { useState } from 'react' 

import Layout from '../../../layout/Layout'
import { pageHeight } from '../../../shared_styles/common'

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useRouter } from 'next/router'
import { useQuery, gql } from '@apollo/client';

const FormTask = ( () => {

    const [edit,setEdit] = useState(false)
    const [save, setSave] = useState(true)
    const [cancel, setCancel] = useState(true)

    const handleEdit = ( () => {
        setEdit(true)
        setSave(false)
        setCancel(false)
    }) 

    const handleSave = ( () => {
        setEdit(false)
        setSave(true)
        setCancel(true)
    }) 

    const handleCancel = ( () => {
        setEdit(false)
        setSave(true)
        setCancel(true)
    }) 

    const router = useRouter()
    const id = router.query.id

    const GET_TASK_ID = gql`
    query GetTaskId {
        task_by_pk(id: ${id}) {
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

    const { loading, error, data } = useQuery(GET_TASK_ID);

    return (
        <Box sx={pageHeight}>
            <Layout />
            <Box
                sx={{
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                {
                    (save == false) 
                    ? 
                        <Button
                            sx={{
                                marginLeft: '15px'
                            }}
                            variant="contained"
                            color='success'
                            onClick={handleSave}
                        >
                            Save
                        </Button> 
                    : 
                    null
                }

                {
                    (cancel == false) 
                    ? 
                        <Button
                            sx={{
                                marginLeft: '15px'
                            }}
                            variant="contained"
                            color='error'
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    : 
                    null
                }

                {
                    (edit == false) 
                    ? 
                        <Button
                            sx={{
                                marginLeft: '15px'
                            }}
                            variant="contained"
                            hidden={cancel}
                            onClick={handleEdit}
                        >
                            Edit
                        </Button>
                    : 
                    null
                }
            </Box>
            <Divider />
            <Box
                sx={{
                    height: '60px'
                }}
            >
                Status Bar
            </Box>
            <Divider />
            <Box>
                <Typography variant="h5" gutterBottom>
                    {data?.task_by_pk.name}
                </Typography>

                <Typography variant="h5" gutterBottom>
                    {data?.task_by_pk.description}
                </Typography>

                <Typography variant="h5" gutterBottom>
                    {data?.task_by_pk.created_at}
                </Typography>

                <Typography variant="h5" gutterBottom>
                    {data?.task_by_pk.updated_at}
                </Typography>

                <Typography variant="h5" gutterBottom>
                    {data?.task_by_pk.project.name}
                </Typography>

                <Typography variant="h5" gutterBottom>
                    {data?.task_by_pk.status.name}
                </Typography>

                <Typography variant="h5" gutterBottom>
                    {data?.task_by_pk.task_type.name}
                </Typography>

                <Typography variant="h5" gutterBottom>
                    {data?.task_by_pk.user.name}
                </Typography>

                
            </Box>
        </Box>
    )
})

export default FormTask