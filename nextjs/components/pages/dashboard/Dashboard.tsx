import Layout from '../../layout/Layout'
import { pageHeight } from '../../shared_styles/common'
import Box from '@mui/material/Box';

import { 
    useGetTaskStatusQuery,
    useGetUniqueStatusQuery,
    useGetTasksDoneQuery,
    useGetTasksDoneByRangeQuery
} from './queries'

import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Dashboard = ( () => {

  const TasksPerStatus = ( () => {

    const { loading, error, data, refetch } = useGetTaskStatusQuery()
  
    const count_draft = data?.task.filter((task) => task.status.name === 'Draft').length;
    const count_in_progress = data?.task.filter((task) => task.status.name === 'In-Progress').length;
    const count_done = data?.task.filter((task) => task.status.name === 'Done').length;
  
    const options = {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ['Draft', 'In-Progress', 'Done']
        },
        title: {
          text: 'Tasks Based on Status',
          // align: "center"
        },
        fill: {
          colors: ['#000484']
        }
      }
  
    const series =  [
        {
          name: "Status",
          data: [count_draft, count_in_progress, count_done]
        }
      ]
    
    return (
      <Chart
          options={options}
          series={series}
          type="bar"
          width="600"
      />
    )
  })
  
  const TasksDonePerMonth = ( (start_date: Date, end_date: Date) => {
    const { loading, error, data, refetch } = useGetTasksDoneByRangeQuery({
      variables: {
        _lte: end_date.toISOString(),
        _gte: start_date.toISOString()
        },
    });
  
    const chart_data = {}
  
    const curr_date = new Date(start_date)
    while(curr_date <= end_date) {
      chart_data[curr_date.toDateString()] = data?.task.filter((task) => {
        if (new Date(task.done_date).getMonth() === curr_date.getMonth() &&
        new Date(task.done_date).getFullYear() === curr_date.getFullYear())
          return true;
      }).length;
  
      curr_date.setMonth(curr_date.getMonth() + 1);
    }
  
    const xaxis_categories = Object.keys(chart_data).map((e) => {
      return MONTHS[new Date(Date.parse(e)).getMonth()]
    });
  
    const series_data : number[] = Object.values(chart_data)
  
    const options = {
      xaxis: {
        categories: xaxis_categories,
      },
      title: {
        text: `Tasks Done Per Month ${MONTHS[start_date.getMonth()]} ${start_date.getFullYear()} — ${MONTHS[end_date.getMonth()]} ${end_date.getFullYear()}`,
        // align: "center"
      },
      colors: ['#000484']
    }
  
    const series =  [
      {
        name: "Status",
        data: series_data
      }
    ]
    
    return (
      <Chart
        options={options}
        series={series}
        type="line"
        width="600"
      />
    )
  })

    return (
        <Box sx={pageHeight}>
          <Layout />
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'col', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginTop: 10,
          }}>
            {TasksPerStatus()}
            {TasksDonePerMonth(new Date(2024, 0), new Date(2024, 11))}
          </Box>
        </Box>
    )
})

export default Dashboard