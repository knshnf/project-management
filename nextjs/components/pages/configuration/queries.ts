import { gql } from '@apollo/client'

// Read
export { useGetMasterdataQuery } from './queries.types'
export const GET_MASTERDATA = gql`
query GetMasterdata {
  status(
    order_by: {id: asc}
    ) {
      id
      name
      color
  }
  task_type(
    order_by: {name: asc}
    ) {
      id
      name
  }
  users(
    order_by: {name: asc}
    ) {
      id
      name
      last_name
      first_name
      middle_name
      suffix_name
      username
      role
  }
  projects(
    order_by: {name: asc}
    ) {
      id
      name
      task_type_id
      task_type {
          name
      }
  }
}
`;

// Create
export { useAddStatusMutation } from './queries.types'
export const ADD_STATUS = gql`
mutation AddStatus($name: String!, $color: String!) {
    insert_status(objects: {
        name: $name,
        color: $color,
        }
    ) {
        returning {
        id
        name
        color
        }
    }
    }
`;

export { useAddTaskTypeMutation } from './queries.types'
export const ADD_TASK_TYPE = gql`
mutation AddTaskType($name: String!) {
    insert_task_type(
        objects: {
            name: $name
        }
    ) {
        returning {
        id
        name
        }
    }
    }
`;

export { useAddProjectsMutation } from './queries.types'
export const ADD_PROJECTS = gql`
mutation AddProjects($name: String!, $task_type_id: Int!) {
    insert_projects(
        objects: {
            name: $name, 
            task_type_id: $task_type_id
        }
    ) {
        returning {
            id
            name
            task_type_id
        }
    }
    }
`;

export { useAddUsersMutation } from './queries.types'
export const ADD_USERS = gql`
mutation AddUsers(
    $name: String!,
    $username: String!, 
    $last_name: String!,
    $first_name: String!,
    $middle_name: String,
    $suffix_name: String,
    $role: String!
) {
    insert_users(
        objects: {
            name: $name,
            username: $username, 
            last_name: $last_name,
            first_name: $first_name,
            middle_name: $middle_name,
            suffix_name: $suffix_name,
            role: $role
        }
    ) {
        returning {
            id
            name
            username
        }
    }
    }
`;

// Update
export { useUpdateStatusMutation } from './queries.types'
const UPDATE_STATUS = gql`
mutation UpdateStatus(
    $id: bigint!,
    $name: String!
    $color: String!
) {
    update_status(
        where: {id: {_eq: $id }}, 
        _set: {
            name: $name
            color: $color
        }
    ) {
        returning {
        id
        name
        }
    }
    }
`;

export { useUpdateTaskTypeMutation } from './queries.types'
const UPDATE_TASK_TYPE = gql`
mutation UpdateTaskType(
    $id: bigint!,
    $name: String!
) {
    update_task_type(
        where: {id: {_eq: $id }}, 
        _set: {name: $name}
    ) {
        returning {
        id
        name
        }
    }
    }
`;

export { useUpdateProjectsMutation } from './queries.types'
const UPDATE_PROJECTS = gql`
mutation UpdateProjects(
    $id: bigint!,
    $name: String!,
    $task_type_id: Int!
) {
    update_projects(
        where: {
            id: {_eq: $id }
        }, 
        _set: {
            name: $name
            task_type_id: $task_type_id
        }
    ) {
        returning {
        id
        name
        task_type_id
        }
    }
    }
`;

// Delete
export { useDeleteStatusMutation } from './queries.types'
export const DELETE_STATUS = gql`
mutation DeleteStatus($id: bigint!) {
    delete_status(where: {id: {_eq: $id }}) {
        returning {
            id
        }
    }
}
`;

export { useDeleteTaskTypeMutation } from './queries.types'
export const DELETE_TASK_TYPE = gql`
mutation DeleteTaskType($id: bigint!) {
    delete_task_type(where: {id: {_eq: $id }}) {
        returning {
            id
        }
    }
}
`;

export { useDeleteProjectsMutation } from './queries.types'
export const DELETE_PROJECTS = gql`
mutation DeleteProjects($id: bigint!) {
    delete_projects(where: {id: {_eq: $id }}) {
        returning {
            id
        }
    }
}
`;

export { useDeleteUsersMutation } from './queries.types'
export const DELETE_USERS = gql`
mutation DeleteUsers($id: bigint!) {
    delete_users(where: {id: {_eq: $id }}) {
        returning {
            id
        }
    }
}
`;

