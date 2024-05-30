import { gql } from '@apollo/client'

export { useGetTaskStatusQuery } from './queries.types'
export const GET_TASK_STATUS = gql`
query GetTaskStatus {
    task {
      status {
        name
      }
    }
  }
`;

export { useGetUniqueStatusQuery } from './queries.types'
const GET_UNIQUE_STATUS = gql`
query GetUniqueStatus {
    status(distinct_on: name) {
      name
    }
  }
`;

export { useGetTasksDoneQuery } from './queries.types'
const GET_TASKS_DONE = gql`
query GetTasksDone {
  task {
    done_date
  }
}
`;

export { useGetTasksDoneByRangeQuery } from './queries.types'
const GET_TASKS_DONE_BY_RANGE = gql`
query GetTasksDoneByRange($_gte: timestamptz = "", $_lte: timestamptz = "") {
  task(where: {done_date: {_lte: $_lte, _gte: $_gte}}) {
    done_date
  }
}
`;



