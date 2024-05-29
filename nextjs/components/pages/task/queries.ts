import { gql } from '@apollo/client'

export { useGetMasterdataQuery } from './queries.types'
export const GET_MASTERDATA = gql`
query GetMasterdata {
  status {
      id
      name
      color
  }
  task_type {
      id
      name
  }
  users {
      id
      name
      last_name
      first_name
      middle_name
      suffix_name
      username
      role
  }
  projects {
      id
      name
      task_type_id
      task_type {
          name
      }
  }
}
`;

export { useGetStatusIdQuery } from './queries.types'
export const GET_STATUS_ID = gql`
query GetStatusId(
    $name: String!
) {
  status(
    where: {name: {_eq: $name}}
    ) {
      id
      name
  }
}
`;

export { useGetTaskQuery } from './queries.types'
const GET_TASK = gql`
query GetTask {
    task {
        id
        name
        description
        created_at
        updated_at
        draft_date
        in_progress_date
        done_date
        project {
            id
            name
        }
        status {
            id
            name
            color
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

export { useGetTaskIdQuery } from './queries.types'
const GET_TASK_ID = gql`
query GetTaskId(
    $id: bigint!
) {
    task_by_pk(id: $id) {
        id
        name
        description
        created_at
        updated_at
        draft_date
        in_progress_date
        done_date
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

// Create
export { useAddTaskMutation } from './queries.types'
export const ADD_TASK = gql`
mutation AddTask(
    $name: String!,
    $description: String!,
    $project_id: Int!,
    $status_id: Int!,
    $task_type_id: Int!,
    $user_id: Int!
) {
    insert_task(
        objects: {
            name: $name,
            description: $description,
            project_id: $project_id,
            status_id: $status_id,
            task_type_id: $task_type_id,
            user_id: $user_id
        }
    ) {
        returning {
            id
            name
            description
            project_id
            status_id
            task_type_id
            user_id
            status {
                name
            }
        }
    }
    }
`;
  
// Update
export { useUpdateTaskMutation } from './queries.types'
const UPDATE_TASK = gql`
mutation UpdateTask(
    $id: bigint!,
    $name: String!
    $description: String!,
    $project_id: Int!,
    $status_id: Int!,
    $task_type_id: Int!,
    $user_id: Int!
    $in_progress_date: timestamptz!,
    $done_date: timestamptz!
) {
    update_task(
        where: {
            id: {_eq: $id }
        }, 
        _set: {
            name: $name,
            description: $description,
            project_id: $project_id,
            status_id: $status_id,
            task_type_id: $task_type_id,
            user_id: $user_id,
            in_progress_date: $in_progress_date,
            done_date: $done_date
        }
    ) {
        returning {
            id
            name
            description
            project_id
            status_id
            task_type_id
            user_id
            status {
                name
            }
        }
    }
    }
`;

// Delete
export { useDeleteTaskMutation } from './queries.types'
const DELETE_TASK = gql`
mutation DeleteTask(
    $id: bigint!
) {
    delete_task(
        where: {
            id: {_eq: $id}
        }
    ) {
        returning {
          id
          name
        }
      }
    }
`;
