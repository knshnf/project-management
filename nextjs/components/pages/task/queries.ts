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
  tags(order_by: {sort: asc}) {
    id
    color
    name
    sort
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
        task_tags(order_by: {tag: {sort: asc}}) {
            tag {
                id
                color
                name
                sort
            }
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
        task_tags(order_by: {tag: {sort: asc}}) {
            tag {
                id
                color
                name
                sort
            }
        }
    }
  }
`;

export { useGetCommentsByTaskIdQuery } from './queries.types'
const GET_COMMENTS_BY_ID = gql`
query GetCommentsByTaskId($_eq: Int!) {
    comments(where: {task_id: {_eq: $_eq}}) {
        comment
        created_at
        id
        name
        task_id
        user_id
        updated_at
        user {
            first_name
            last_name
            middle_name
            name
            suffix_name
            username
        }
    }
}
`

// Create
export { useAddTaskMutation } from './queries.types'
export const ADD_TASK = gql`
mutation AddTask(
    $name: String!,
    $description: String!,
    $project_id: Int!,
    $status_id: Int!,
    $task_type_id: Int!,
    $user_id: Int!,
    $task_tags: [task_tags_insert_input!]!
) {
    insert_task(
        objects: {
            name: $name,
            description: $description,
            project_id: $project_id,
            status_id: $status_id,
            task_type_id: $task_type_id,
            user_id: $user_id,
            task_tags: {data: $task_tags}
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
            task_tags {
                id
              tag {
                name,
                color,
                sort
              }
          }
        }
    }
    }
`;

export { useAddCommentMutation } from './queries.types'
export const ADD_COMMENT = gql`
mutation AddComment(
    $comment: String!,
    $task_id: Int!,
    $user_id: Int!
) {
    insert_comments(
        objects: {
            comment: $comment,
            task_id: $task_id,
            user_id: $user_id,
        }
    ) {
        returning {
            comment
            created_at
            id
            name
            task_id
            updated_at
            user_id
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
    $user_id: Int!,
    $in_progress_date: timestamptz!,
    $done_date: timestamptz!,
    $task_tags_ids: [bigint!], 
    $task_tags: [task_tags_insert_input!]!
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
    delete_task_tags(where: {task_id: {_eq: $id}, tag_id: {_nin: $task_tags_ids}}) {
            affected_rows
            returning {
                id
                tag_id
                task_id
                user_id
            }
        }

    insert_task_tags(objects: $task_tags, on_conflict: {constraint: task_tags_task_id_tag_id_key, update_columns: [task_id, tag_id]}) {
            affected_rows
            returning {
                tag {
                    color
                    id
                    name
                    sort
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
