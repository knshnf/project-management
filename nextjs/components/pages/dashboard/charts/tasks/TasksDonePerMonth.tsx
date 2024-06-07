import Box from "@mui/material/Box";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { useGetTasksDoneByRangeQuery } from "./queries";

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TasksDonePerMonth = (start_date: Date, end_date: Date) => {
  const [from_date, setFromDate] = useState(dayjs(start_date));
  const [to_date, setToDate] = useState(dayjs(end_date));

  const { loading, error, data, refetch } = useGetTasksDoneByRangeQuery({
    variables: {
      _lte: to_date.toISOString(),
      _gte: from_date.toISOString(),
    },
  });

  const chart_data = {};
  const curr_date = from_date.toDate();

  while (curr_date <= to_date.toDate()) {
    if (loading) {
      return;
    }
    chart_data[curr_date.toDateString()] = data?.task.filter((task) => {
      if (
        new Date(task.done_date).getMonth() === curr_date.getMonth() &&
        new Date(task.done_date).getFullYear() === curr_date.getFullYear()
      )
        return true;
    }).length;

    curr_date.setMonth(curr_date.getMonth() + 1);
  }

  const chart_values: number[] = Object.values(chart_data);
  const chart_categories = Object.keys(chart_data).map((e) => {
    return MONTHS[new Date(Date.parse(e)).getMonth()];
  });

  const options: ApexOptions = {
    xaxis: {
      categories: chart_categories,
    },
    colors: ["#000484"],
  };

  const series = [
    {
      name: "Status",
      data: chart_values,
      // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  ];

  return (
    <>
      {/* <Typography> Tasks Per Month </Typography> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "col",
            gap: 1,
            marginBottom: 2,
          }}
        >
          <DatePicker
            label={"From"}
            views={["month", "year"]}
            sx={{
              width: "30%",
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
              width: "30%",
            }}
            value={dayjs(to_date)}
            slotProps={{ textField: { size: "small" } }}
            minDate={dayjs(from_date).set("month", from_date.get("month") + 1)}
            onChange={(newValue) => setToDate(newValue)}
          />
        </Box>
      </LocalizationProvider>

      <Chart options={options} series={series} type="line" width="100%" />
    </>
  );
};

export default TasksDonePerMonth;
