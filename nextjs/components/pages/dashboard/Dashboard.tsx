import Layout from "../../layout/Layout";
import { pageHeight } from "../../shared_styles/common";
import Box from "@mui/material/Box";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Button } from "@mui/material";

import TasksPerStatus from "./charts/tasks/TasksPerStatus";
import TasksDonePerMonth from "./charts/tasks/TasksDonePerMonth";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  const [from_date, setFromDate] = useState(dayjs(new Date(2024, 0)));
  const [to_date, setToDate] = useState(dayjs(new Date(2024, 11)));

  return (
    <Box sx={pageHeight()}>
      <Layout />
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: "100%",
        paddingX: 3,
        marginTop: 3
      }}>
        <Box
          fontWeight={700}
          textAlign='center'
        >
          Task Performance
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "col",
              justifyContent: 'flex-end',
              gap: 1,
            }}
          >
            <DatePicker
              label={"From"}
              views={["month", "year"]}
              sx={{
                width: "50%",
              }}
              slotProps={{ textField: { size: "small" } }}
              value={dayjs(from_date)}
              maxDate={dayjs(to_date).set("month", to_date.get("month") - 1)}
              onChange={(newValue) => setFromDate(newValue)}
            />
            <DatePicker
              label={"To"}
              views={["month", "year"]}
              sx={{
                width: "50%",
              }}
              value={dayjs(to_date)}
              slotProps={{ textField: { size: "small" } }}
              minDate={dayjs(from_date).set("month", from_date.get("month") + 1)}
              onChange={(newValue) => setToDate(newValue)}
            />
          </Box>
        </LocalizationProvider>
      </Box>
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
            padding: 3
          }}
        >
          <TasksDonePerMonth start_date={from_date} end_date={to_date}/>
        </Box>
        <Box
          sx={{
            width: "100%",
            border: '1px solid #C1C7CD',
            padding: 3
          }}
        >
          {TasksPerStatus()}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
