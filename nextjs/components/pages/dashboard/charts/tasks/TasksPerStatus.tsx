import { useGetTaskStatusQuery } from "./queries";

import dynamic from "next/dynamic";
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

const TasksPerStatus = () => {
  const { loading, error, data, refetch } = useGetTaskStatusQuery();

  const count_draft = data?.task.filter(
    (task) => task.status.name === "Draft"
  ).length;
  const count_in_progress = data?.task.filter(
    (task) => task.status.name === "In-Progress"
  ).length;
  const count_done = data?.task.filter(
    (task) => task.status.name === "Done"
  ).length;

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: ["Draft", "In-Progress", "Done"],
    },
    title: {
      text: "Tasks Based on Status",
      align: "center",
    },
    fill: {
      colors: ["#000484"],
    },
  };

  const series = [
    {
      name: "Status",
      data: [count_draft, count_in_progress, count_done],
    },
  ];

  return <Chart options={options} series={series} type="bar" width="100%" />;
};

export default TasksPerStatus;