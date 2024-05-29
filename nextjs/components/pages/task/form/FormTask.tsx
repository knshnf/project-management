import { useState, useEffect } from 'react' 
import dateformat from 'dateformat'

import Layout from '../../../layout/Layout'
import { pageHeight } from '../../../shared_styles/common'

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

import { useRouter } from 'next/router'

import { 
    useGetTaskIdQuery, 
    useGetMasterdataQuery,
    useGetStatusIdQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} from '../queries'

import TextFieldRead from '../../../shared/fields/TextField'
import TextFieldEdit from '../../../shared/fields/TextFieldEdit'
import Status from './Status'

const FormTask = ( () => {

    const router = useRouter()

    const parameterId = router.query.id
    const parameterView = router.query.view

    const [mode, setMode] = useState(router.query.mode)

    const [id, setId] = useState<Number | undefined>(Number(parameterId))

    const { loading, error, data, refetch } = useGetTaskIdQuery({
        variables: {
            id: id,
        }
    })

    useEffect( () => {
        setName(data?.task_by_pk.name)
        setDescription(data?.task_by_pk.description)
        setTaskTypeId(data?.task_by_pk.task_type.id)
        setProjectId(data?.task_by_pk.project.id)
        setStatusId(data?.task_by_pk.status.id)
        setStatusName(data?.task_by_pk.status.name)
        setUserId(data?.task_by_pk.user.id)
        setUpdatedAt(data?.task_by_pk.updated_at)
        setCreatedAt(data?.task_by_pk.created_at)
        setDraftDate(data?.task_by_pk.draft_date)
        setInProgressDate(data?.task_by_pk.in_progress_date)
        setDoneDate(data?.task_by_pk.done_date)
    },[data])

    useEffect( () => {
        if (mode == 'create') {
            setStatusId(1)
        } 
    },[mode])

    const [name, setName] = useState(data?.task_by_pk.name)
    const [description, setDescription] = useState(data?.task_by_pk.description)
    const [task_type_id, setTaskTypeId] = useState(Number(data?.task_by_pk.task_type.id))
    const [project_id, setProjectId] = useState(Number(data?.task_by_pk.project.id))
    const [status_id, setStatusId] = useState(null)
    const [user_id, setUserId] = useState(Number(data?.task_by_pk.user.id))

    const [updatedAt, setUpdatedAt] = useState(data?.task_by_pk.updated_at)
    const [createdAt, setCreatedAt] = useState(data?.task_by_pk.created_at)
    const [draftDate, setDraftDate] = useState(data?.task_by_pk.draft_date)
    const [inProgressDate, setInProgressDate] = useState(data?.task_by_pk.in_progress_date)
    const [doneDate, setDoneDate] = useState(data?.task_by_pk.done_date)
 
    const [status_name, setStatusName] = useState(data?.task_by_pk.status.name)

    const [edit,setEdit] = useState(false)
    const [save, setSave] = useState(true)
    const [cancel, setCancel] = useState(true)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const { error: errorMasterdata, data: dataMasterdata } = useGetMasterdataQuery()

    const [ addTask, { error: addTaskError, data: dataAddTask } ] = useAddTaskMutation({
        variables: {
            name: name,
            description: description,
            task_type_id: task_type_id,
            project_id: project_id,
            user_id: user_id,
            status_id: status_id,
        },
        onCompleted: (data) => {
            setId(Number(dataAddTask?.insert_task.returning[0].id))
            setName(dataAddTask?.insert_task.returning[0].name)
            setDescription(dataAddTask?.insert_task.returning[0].description)
            setTaskTypeId(Number(dataAddTask?.insert_task.returning[0].task_type_id))
            setProjectId(Number(dataAddTask?.insert_task.returning[0].project_id))
            setStatusId(Number(dataAddTask?.insert_task.returning[0].status_id))
            setUserId(Number(dataAddTask?.insert_task.returning[0].user_id))
            setStatusName(dataAddTask?.insert_task.returning[0].status.name)
            refetch()
            router.push(`http://localhost:3000/formtask?view=${parameterView}&mode=edit&id=${Number(dataAddTask?.insert_task.returning[0].id)}`)
        }
    });

    const [ updateTask, { error: updateTaskError, data: dataUpdateTask } ] = useUpdateTaskMutation({
        onCompleted: (data) => {
            setId(Number(data.update_task.returning[0].id))
            setName(data.update_task.returning[0].name)
            setDescription(data.update_task.returning[0].description)
            setTaskTypeId(Number(data.update_task.returning[0].task_type_id))
            setProjectId(Number(data.update_task.returning[0].project_id))
            setStatusId(Number(data.update_task.returning[0].status_id))
            setUserId(Number(data.update_task.returning[0].user_id))
            setStatusName(data.update_task.returning[0].status.name),
            refetch()
            router.push(`http://localhost:3000/formtask?view=${parameterView}&mode=edit&id=${Number(data.update_task.returning[0].id)}`)
        }
    })

    const [ deleteTask ] = useDeleteTaskMutation({
        variables: {
            id: id
        }
    })


    const { data: dataDraft } = useGetStatusIdQuery({
        variables: {
            name: 'Draft'
        },
    })

    const { data: dataInProgress } = useGetStatusIdQuery({
        variables: {
            name: 'In-Progress'
        },
    })

    const { data: dataDone } = useGetStatusIdQuery({
        variables: {
            name: 'Done'
        },
    })

    const handleCreate = ( ()=> {
        setMode('edit')
        addTask()
    })

    const handleEdit = ( () => {

        setName(data?.task_by_pk.name)
        setDescription(data?.task_by_pk.description)
        setTaskTypeId(data?.task_by_pk.task_type.id)
        setProjectId(data?.task_by_pk.project.id)
        setStatusId(data?.task_by_pk.status.id)
        setStatusName(data?.task_by_pk.status.name)
        setUserId(data?.task_by_pk.user.id)

        setEdit(true)
        setSave(false)
        setCancel(false)
    }) 

    const handleSave = ( () => {
        setEdit(false)
        setSave(true)
        setCancel(true)
        updateTask({
            variables: {
                id: id,
                name: name,
                description: description,
                task_type_id: task_type_id,
                project_id: project_id,
                user_id: user_id,
                status_id: status_id,
                in_progress_date: inProgressDate,
                done_date: doneDate
            }
        })
        refetch()
    }) 

    const handleDraft = ( () => {
        setEdit(false)
        setSave(true)
        setCancel(true)
        setStatusId(dataDraft.status[0].id)
        setStatusName(dataDraft.status[0].name)
        updateTask({
            variables: {
                id: id,
                name: name,
                description: description,
                task_type_id: task_type_id,
                project_id: project_id,
                user_id: user_id,
                status_id: dataDraft.status[0].id,
                in_progress_date: null,
                done_date: null
            }
        })
        refetch()
    })

    const handleInProgress = ( () => {
        setEdit(false)
        setSave(true)
        setCancel(true)

        setStatusId(dataInProgress.status[0].id)
        setStatusName(dataInProgress.status[0].name)
        updateTask({
            variables: {
                id: id,
                name: name,
                description: description,
                task_type_id: task_type_id,
                project_id: project_id,
                user_id: user_id,
                status_id: dataInProgress.status[0].id,
                in_progress_date: new Date(),
                done_date:  null
            }
        })
        refetch()
    })

    const handleDone = ( () => {
        setEdit(false)
        setSave(true)
        setCancel(true)
        setStatusId(dataDone.status[0].id)
        setStatusName(dataDone.status[0].name)
        updateTask({
            variables: {
                id: id,
                name: name,
                description: description,
                task_type_id: task_type_id,
                project_id: project_id,
                user_id: user_id,
                status_id: dataDone.status[0].id,
                in_progress_date:  inProgressDate,
                done_date: new Date()
            }
        })
        refetch()
    })

    const handleCancel = ( () => {
        setEdit(false)
        setSave(true)
        setCancel(true)
    }) 

    const handleDelete = ( () => {
        setAnchorEl(null);
        deleteTask()
        router.push(`http://localhost:3000/task?view=${parameterView}`)
    }) 

    console.log(dateformat(new Date('2024-04-23T08:01:12.341816+00:00'), "dd-mmm-yyyy"))

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
                (mode == 'create')
                ?
                <Button
                    sx={{
                        marginLeft: '15px'
                    }}
                    variant="contained"
                    onClick={handleCreate}
                >
                    Create
                </Button> 
                : 
                null
            }
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
                    (edit == false && mode != 'create') 
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
                <Button
                    sx={{
                        margin: 'auto',
                    }} 
                    onClick={handleClick}
                >
                    <SettingsIcon />
                </Button>
            </Box>
            <Divider />
            <Box
                sx={{
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >

                    {
                        (status_name == 'Done') ?
                        <Button
                            id="action_draft"
                            variant="text"
                            sx={{
                                marginLeft: '15px',
                            }}
                            onClick={handleDraft}
                        >
                            Set to Draft
                        </Button>
                        : 
                        null
                    }

                    {
                        (status_name == 'Draft') ?
                        <Button
                            id="action_in_progress"
                            variant="text"
                            sx={{
                                marginLeft: '15px',
                            }}
                            onClick={handleInProgress}
                        >
                            Set to In-Progress
                        </Button>
                        : 
                        null
                    }

                    {
                        (status_name == 'In-Progress') ?
                        <Button
                            id="action_done"
                            variant="text"
                            sx={{
                                marginLeft: '15px',
                            }}
                            onClick={handleDone}
                        >
                            Set to Done
                        </Button>   
                        : 
                        null
                    }

                <Button
                    sx={{
                        marginLeft: 'auto',
                        marginRight: '15px'
                    }}
                    href={`http://localhost:3000/task?view=${parameterView}`}
                >
                    Return to Task
                </Button>
            </Box>
            <Divider />
            <Status data={dataMasterdata} currentStatus={data?.task_by_pk.status.name}/>
            <Box
                sx={{
                    minHeight: '750px',
                    width: '95%',
                    border: '1px solid #C1C7CD',
                    borderRadius: '10px',
                    margin: 'auto',
                    marginTop: '30px',
                }}
            >
            {
                (mode == 'create' || mode == 'edit' && edit == true) ?
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <TextField
                        id="name"
                        variant="standard"
                        label="Name"
                        value={name}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={e => setName(e.target.value)}
                        sx={{
                            margin: '40px'
                        }}
                    />

                    <TextFieldEdit
                        label='Description'
                        value={ 
                            <TextField
                                sx={{
                                    width: '100%'
                                }}
                                id="description"
                                variant="standard"
                                size="small"
                                value={description}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                multiline
                                maxRows={4}
                                onChange={e => setDescription(e.target.value)}
                            />
                        }
                    />

                    <TextFieldEdit
                        label='Project'
                        value={ 
                            <Select
                                sx={{
                                    width: '100%'
                                }}
                                labelId="project_id"
                                id="project_id"
                                value={project_id}
                                variant="standard"
                                onChange={e => setProjectId(Number(e.target.value))}
                                label="Project"
                            >
                                {
                                    dataMasterdata?.projects.map( (dtt) => {
                                        return (
                                            <MenuItem key={dtt.id} value={dtt.id}> {dtt.name} </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        }
                    />

                    <TextFieldEdit
                        label='Task Type'
                        value={ 
                            <Select
                                sx={{
                                    width: '100%'
                                }}
                                id="task_type_id"
                                value={task_type_id}
                                variant="standard"
                                onChange={e => setTaskTypeId(Number(e.target.value))}
                                label="Task Type"
                            >
                                {
                                    dataMasterdata?.task_type.map( (dtt) => {
                                        return (
                                            <MenuItem key={dtt.id} value={dtt.id}> {dtt.name} </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        }
                    />

                    <TextFieldEdit
                        label='User'
                        value={ 
                            <Select
                                sx={{
                                    width: '100%'
                                }}
                                labelId="user_id"
                                id="user_id"
                                value={user_id}
                                variant="standard"
                                onChange={e => setUserId(Number(e.target.value))}
                                label="User"
                            >
                                {
                                    dataMasterdata?.users.map( (dtt) => {
                                        return (
                                            <MenuItem key={dtt.id} value={dtt.id}> {dtt.name} </MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        }
                    />

                    {/* <TextFieldRead 
                        label='Created At'
                        value={data?.task_by_pk.created_at}
                        mode={mode}
                    />

                    <TextFieldRead 
                        label='Updated At'
                        value={data?.task_by_pk.updated_at}
                        mode={mode}
                    /> */}


                </Box>
                :
                <Box>

                    <Typography 
                        sx={{
                            margin: '40px'
                        }}
                        variant='h5'
                    >
                        {name}
                    </Typography>


                    <TextFieldRead 
                        label='Description'
                        value={description}
                        mode={mode}
                    />

                    <TextFieldRead 
                        label='Project'
                        value={data?.task_by_pk.project.name}
                        mode={mode}
                    />

                    <TextFieldRead 
                        label='Task Type'
                        value={data?.task_by_pk.task_type.name}
                        mode={mode}
                    />

                    <TextFieldRead 
                        label='User'
                        value={data?.task_by_pk.user.name}
                        mode={mode}
                    />

                    <TextFieldRead 
                        label='Created At'
                        value={dateformat(createdAt, "dd-mmm-yyyy")}
                        mode={mode}
                    />

                    <TextFieldRead 
                        label='Updated At'
                        value={dateformat(updatedAt, "dd-mmm-yyyy")}
                        mode={mode}
                    />

                    <TextFieldRead 
                        label='Draft Date'
                        value={dateformat(draftDate, "dd-mmm-yyyy")}
                        mode={mode}
                    />

                    <TextFieldRead 
                        label='In Progress Date'
                        value={inProgressDate ? dateformat(inProgressDate, "dd-mmm-yyyy") : 
                            "none"
                        }
                        mode={mode}
                    />

                    <TextFieldRead
                        label='Done Date'
                        value={doneDate ? dateformat(doneDate, "dd-mmm-yyyy") : 
                            "none"
                        }
                        mode={mode}
                    />

                </Box>
            }
            </Box>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem component="a" href={`http://localhost:3000/formtask?view=${parameterView}&mode=${'create'}`}>Create New</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>
        </Box>
    )
})

export default FormTask