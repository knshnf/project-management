import { useState, useEffect } from 'react' 
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import { Button } from '@mui/material';
import { 
    useAddCommentMutation,
    useGetCommentsByTaskIdQuery
} from '../queries'
import Divider from '@mui/material/Divider';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
function CustomTabPanel(props: TabPanelProps) {
const { children, value, index, ...other } = props;

return (
    <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
    {value === index && (
        <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
        </Box>
    )}
    </div>
);
}
  
function a11yProps(index: number) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}
  
const Comment = ( ({key, data}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Typography sx={{
                    fontWeight: 'bold'
                }}>
                    {data.user.name}
                </Typography>
                <Typography sx={{
                    color: 'text.secondary'
                }}>
                    {new Date(data.created_at).toDateString()}
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
            }}>
                <Typography>
                    {data.comment}
                </Typography>
            </Box>
        </Box>
    )
})

const Comments = ( ({task_id}) => {
    const [value, setValue] = useState(0);
    const [comment, setComment] = useState("")
    const [user_id, setUserId] = useState(null)

    useEffect(() => {
        setUserId(JSON.parse(localStorage.getItem('user')).id);
        console.log(user_id)
    },[]);

    const { loading : loadingComments, error: errorComments, data: dataComments, refetch } = useGetCommentsByTaskIdQuery({
        variables: {
            _eq: task_id,
        }
    })
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [addComment, { data, loading, error }] = useAddCommentMutation({
           variables: {
                comment: comment,
                task_id: task_id,
                user_id: user_id
            },
                
            onCompleted: (data) => {
                setComment("");
                refetch()
            }
        });

    const handleComment = ( ()=> {
        addComment()
    })
    
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Comments" {...a11yProps(0)} />
                </Tabs>
            </Box>
            <CustomTabPanel 
                value={value} 
                index={0}
            >
                <Box
                    sx={{
                        margin: '40px',
                        marginTop: '10px'
                    }}
                >
                    <TextField 
                        id="outlined-basic" 
                        label="Add a comment" 
                        variant="outlined"
                        sx={{
                            width: '100%',
                            borderRadius: '10px',
                            margin: 'auto',
                        }}
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                        value={comment}
                    />
                    <Button
                        variant="contained"
                        sx={{
                            marginTop: '15px'
                        }}
                        onClick={handleComment}
                    >
                        Comment
                    </Button> 
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        marginTop: '40px',
                    }}>
                        {
                            dataComments?.comments.map( (comment) => {
                                return (
                                    <>
                                        <Comment key={comment.id} data={comment}/>
                                        <Divider/>
                                    </>
                                )
                            })
                        }
                    </Box>
                    
                </Box>
            </CustomTabPanel>
        </Box>
    )})

export default Comments