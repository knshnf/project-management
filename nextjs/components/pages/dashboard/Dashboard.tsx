import Layout from "../../layout/Layout";
import { pageHeight } from "../../shared_styles/common";
import Box from "@mui/material/Box";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button } from "@mui/material";

import TasksPerStatus from "./charts/tasks/TasksPerStatus";
import TasksDonePerMonth from "./charts/tasks/TasksDonePerMonth";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  return (
    <Box sx={pageHeight()}>
      <Layout />
      <Box
        sx={{
          display: "flex",
          flexDirection: "col",
          alignItems: "end",
          justifyContent: "center",
          width: "100%",
          marginTop: 3,
          gap: 3,
          paddingX: 3
        }}
      >
        <Box
          sx={{
            width: "100%",
            border: '1px solid #C1C7CD',
            padding: 5
          }}
        >
          {TasksDonePerMonth(new Date(2024, 0), new Date(2024, 11))}
        </Box>
        <Box
          sx={{
            width: "100%",
            border: '1px solid #C1C7CD',
            padding: 5
          }}
        >
          {TasksPerStatus()}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
