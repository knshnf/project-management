import Box from "@mui/material/Box";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";

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

const TasksDonePerMonth = ({start_date, end_date}) => {
  const { loading, error, data, refetch } = useGetTasksDoneByRangeQuery({
    variables: {
      _lte: end_date.toISOString(),
      _gte: start_date.toISOString(),
    },
  });

  if(loading) {
    return <CircularProgress/>
  }

  const chart_data = {};
  const curr_date = start_date.toDate();

  while (curr_date <= end_date.toDate()) {
    chart_data[curr_date.toDateString()] = data?.task.filter((task) => (
        new Date(task.done_date).getMonth() === curr_date.getMonth() &&
        new Date(task.done_date).getFullYear() === curr_date.getFullYear()
    )).length;

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
    },
  ];

  return (
    <>
      <Typography> <Box fontWeight={700}> Monthly Finished Tasks </Box> </Typography>
      <Chart options={options} series={series} type="line" width="100%" />
    </>
  );
};

export default TasksDonePerMonth;
