import * as Types from '../../../types/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMasterdataQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMasterdataQuery = { __typename?: 'query_root', status: Array<{ __typename?: 'status', id: number, name: string, color?: string | null }>, task_type: Array<{ __typename?: 'task_type', id: number, name: string }>, users: Array<{ __typename?: 'users', id: number, name: string, last_name: string, first_name: string, middle_name?: string | null, suffix_name?: string | null, username: string, role?: string | null }>, projects: Array<{ __typename?: 'projects', id: number, name: string, task_type_id: number, task_type?: { __typename?: 'task_type', name: string } | null }>, tags: Array<{ __typename?: 'tags', id: number, color?: string | null, name: string, sort: number }> };

export type GetStatusIdQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type GetStatusIdQuery = { __typename?: 'query_root', status: Array<{ __typename?: 'status', id: number, name: string }> };

export type GetTaskQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTaskQuery = { __typename?: 'query_root', task: Array<{ __typename?: 'task', id: number, name: string, description?: string | null, created_at: any, updated_at: any, draft_date?: any | null, in_progress_date?: any | null, done_date?: any | null, project?: { __typename?: 'projects', id: number, name: string } | null, status?: { __typename?: 'status', id: number, name: string, color?: string | null } | null, task_type?: { __typename?: 'task_type', id: number, name: string } | null, user?: { __typename?: 'users', id: number, name: string } | null, task_tags: Array<{ __typename?: 'task_tags', tag: { __typename?: 'tags', id: number, color?: string | null, name: string, sort: number } }> }> };

export type GetTaskIdQueryVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type GetTaskIdQuery = { __typename?: 'query_root', task_by_pk?: { __typename?: 'task', id: number, name: string, description?: string | null, created_at: any, updated_at: any, draft_date?: any | null, in_progress_date?: any | null, done_date?: any | null, project?: { __typename?: 'projects', id: number, name: string } | null, status?: { __typename?: 'status', id: number, name: string } | null, task_type?: { __typename?: 'task_type', id: number, name: string } | null, user?: { __typename?: 'users', id: number, name: string } | null, task_tags: Array<{ __typename?: 'task_tags', tag: { __typename?: 'tags', id: number, color?: string | null, name: string, sort: number } }> } | null };

export type GetCommentsByTaskIdQueryVariables = Types.Exact<{
  _eq: Types.Scalars['Int']['input'];
}>;


export type GetCommentsByTaskIdQuery = { __typename?: 'query_root', comments: Array<{ __typename?: 'comments', comment: string, created_at: any, id: number, name?: string | null, task_id: number, user_id: number, updated_at: any, user: { __typename?: 'users', first_name: string, last_name: string, middle_name?: string | null, name: string, suffix_name?: string | null, username: string } }> };

export type AddTaskMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  description: Types.Scalars['String']['input'];
  project_id: Types.Scalars['Int']['input'];
  status_id: Types.Scalars['Int']['input'];
  task_type_id: Types.Scalars['Int']['input'];
  user_id: Types.Scalars['Int']['input'];
  task_tags: Array<Types.Task_Tags_Insert_Input> | Types.Task_Tags_Insert_Input;
}>;


export type AddTaskMutation = { __typename?: 'mutation_root', insert_task?: { __typename?: 'task_mutation_response', returning: Array<{ __typename?: 'task', id: number, name: string, description?: string | null, project_id: number, status_id: number, task_type_id: number, user_id: number, status?: { __typename?: 'status', name: string } | null, task_tags: Array<{ __typename?: 'task_tags', id: number, tag: { __typename?: 'tags', name: string, color?: string | null, sort: number } }> }> } | null };

export type AddCommentMutationVariables = Types.Exact<{
  comment: Types.Scalars['String']['input'];
  task_id: Types.Scalars['Int']['input'];
  user_id: Types.Scalars['Int']['input'];
}>;


export type AddCommentMutation = { __typename?: 'mutation_root', insert_comments?: { __typename?: 'comments_mutation_response', returning: Array<{ __typename?: 'comments', comment: string, created_at: any, id: number, name?: string | null, task_id: number, updated_at: any, user_id: number }> } | null };

export type UpdateTaskMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
  description: Types.Scalars['String']['input'];
  project_id: Types.Scalars['Int']['input'];
  status_id: Types.Scalars['Int']['input'];
  task_type_id: Types.Scalars['Int']['input'];
  user_id: Types.Scalars['Int']['input'];
  in_progress_date: Types.Scalars['timestamptz']['input'];
  done_date: Types.Scalars['timestamptz']['input'];
  task_tags_ids?: Types.InputMaybe<Array<Types.Scalars['bigint']['input']> | Types.Scalars['bigint']['input']>;
  task_tags: Array<Types.Task_Tags_Insert_Input> | Types.Task_Tags_Insert_Input;
}>;


export type UpdateTaskMutation = { __typename?: 'mutation_root', update_task?: { __typename?: 'task_mutation_response', returning: Array<{ __typename?: 'task', id: number, name: string, description?: string | null, project_id: number, status_id: number, task_type_id: number, user_id: number, status?: { __typename?: 'status', name: string } | null }> } | null, delete_task_tags?: { __typename?: 'task_tags_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'task_tags', id: number, tag_id: number, task_id: number, user_id: number }> } | null, insert_task_tags?: { __typename?: 'task_tags_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'task_tags', tag: { __typename?: 'tags', color?: string | null, id: number, name: string, sort: number } }> } | null };

export type DeleteTaskMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteTaskMutation = { __typename?: 'mutation_root', delete_task?: { __typename?: 'task_mutation_response', returning: Array<{ __typename?: 'task', id: number, name: string }> } | null };


export const GetMasterdataDocument = gql`
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

/**
 * __useGetMasterdataQuery__
 *
 * To run a query within a React component, call `useGetMasterdataQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMasterdataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMasterdataQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMasterdataQuery(baseOptions?: Apollo.QueryHookOptions<GetMasterdataQuery, GetMasterdataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMasterdataQuery, GetMasterdataQueryVariables>(GetMasterdataDocument, options);
      }
export function useGetMasterdataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMasterdataQuery, GetMasterdataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMasterdataQuery, GetMasterdataQueryVariables>(GetMasterdataDocument, options);
        }
export type GetMasterdataQueryHookResult = ReturnType<typeof useGetMasterdataQuery>;
export type GetMasterdataLazyQueryHookResult = ReturnType<typeof useGetMasterdataLazyQuery>;
export type GetMasterdataQueryResult = Apollo.QueryResult<GetMasterdataQuery, GetMasterdataQueryVariables>;
export const GetStatusIdDocument = gql`
    query GetStatusId($name: String!) {
  status(where: {name: {_eq: $name}}) {
    id
    name
  }
}
    `;

/**
 * __useGetStatusIdQuery__
 *
 * To run a query within a React component, call `useGetStatusIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStatusIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStatusIdQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetStatusIdQuery(baseOptions: Apollo.QueryHookOptions<GetStatusIdQuery, GetStatusIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStatusIdQuery, GetStatusIdQueryVariables>(GetStatusIdDocument, options);
      }
export function useGetStatusIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStatusIdQuery, GetStatusIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStatusIdQuery, GetStatusIdQueryVariables>(GetStatusIdDocument, options);
        }
export type GetStatusIdQueryHookResult = ReturnType<typeof useGetStatusIdQuery>;
export type GetStatusIdLazyQueryHookResult = ReturnType<typeof useGetStatusIdLazyQuery>;
export type GetStatusIdQueryResult = Apollo.QueryResult<GetStatusIdQuery, GetStatusIdQueryVariables>;
export const GetTaskDocument = gql`
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

/**
 * __useGetTaskQuery__
 *
 * To run a query within a React component, call `useGetTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTaskQuery(baseOptions?: Apollo.QueryHookOptions<GetTaskQuery, GetTaskQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
      }
export function useGetTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
        }
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskQueryResult = Apollo.QueryResult<GetTaskQuery, GetTaskQueryVariables>;
export const GetTaskIdDocument = gql`
    query GetTaskId($id: bigint!) {
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

/**
 * __useGetTaskIdQuery__
 *
 * To run a query within a React component, call `useGetTaskIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetTaskIdQuery(baseOptions: Apollo.QueryHookOptions<GetTaskIdQuery, GetTaskIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaskIdQuery, GetTaskIdQueryVariables>(GetTaskIdDocument, options);
      }
export function useGetTaskIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskIdQuery, GetTaskIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaskIdQuery, GetTaskIdQueryVariables>(GetTaskIdDocument, options);
        }
export type GetTaskIdQueryHookResult = ReturnType<typeof useGetTaskIdQuery>;
export type GetTaskIdLazyQueryHookResult = ReturnType<typeof useGetTaskIdLazyQuery>;
export type GetTaskIdQueryResult = Apollo.QueryResult<GetTaskIdQuery, GetTaskIdQueryVariables>;
export const GetCommentsByTaskIdDocument = gql`
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
    `;

/**
 * __useGetCommentsByTaskIdQuery__
 *
 * To run a query within a React component, call `useGetCommentsByTaskIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsByTaskIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsByTaskIdQuery({
 *   variables: {
 *      _eq: // value for '_eq'
 *   },
 * });
 */
export function useGetCommentsByTaskIdQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsByTaskIdQuery, GetCommentsByTaskIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsByTaskIdQuery, GetCommentsByTaskIdQueryVariables>(GetCommentsByTaskIdDocument, options);
      }
export function useGetCommentsByTaskIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsByTaskIdQuery, GetCommentsByTaskIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsByTaskIdQuery, GetCommentsByTaskIdQueryVariables>(GetCommentsByTaskIdDocument, options);
        }
export type GetCommentsByTaskIdQueryHookResult = ReturnType<typeof useGetCommentsByTaskIdQuery>;
export type GetCommentsByTaskIdLazyQueryHookResult = ReturnType<typeof useGetCommentsByTaskIdLazyQuery>;
export type GetCommentsByTaskIdQueryResult = Apollo.QueryResult<GetCommentsByTaskIdQuery, GetCommentsByTaskIdQueryVariables>;
export const AddTaskDocument = gql`
    mutation AddTask($name: String!, $description: String!, $project_id: Int!, $status_id: Int!, $task_type_id: Int!, $user_id: Int!, $task_tags: [task_tags_insert_input!]!) {
  insert_task(
    objects: {name: $name, description: $description, project_id: $project_id, status_id: $status_id, task_type_id: $task_type_id, user_id: $user_id, task_tags: {data: $task_tags}}
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
          name
          color
          sort
        }
      }
    }
  }
}
    `;
export type AddTaskMutationFn = Apollo.MutationFunction<AddTaskMutation, AddTaskMutationVariables>;

/**
 * __useAddTaskMutation__
 *
 * To run a mutation, you first call `useAddTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskMutation, { data, loading, error }] = useAddTaskMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      project_id: // value for 'project_id'
 *      status_id: // value for 'status_id'
 *      task_type_id: // value for 'task_type_id'
 *      user_id: // value for 'user_id'
 *      task_tags: // value for 'task_tags'
 *   },
 * });
 */
export function useAddTaskMutation(baseOptions?: Apollo.MutationHookOptions<AddTaskMutation, AddTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTaskMutation, AddTaskMutationVariables>(AddTaskDocument, options);
      }
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = Apollo.MutationResult<AddTaskMutation>;
export type AddTaskMutationOptions = Apollo.BaseMutationOptions<AddTaskMutation, AddTaskMutationVariables>;
export const AddCommentDocument = gql`
    mutation AddComment($comment: String!, $task_id: Int!, $user_id: Int!) {
  insert_comments(
    objects: {comment: $comment, task_id: $task_id, user_id: $user_id}
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
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      task_id: // value for 'task_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($id: bigint!, $name: String!, $description: String!, $project_id: Int!, $status_id: Int!, $task_type_id: Int!, $user_id: Int!, $in_progress_date: timestamptz!, $done_date: timestamptz!, $task_tags_ids: [bigint!], $task_tags: [task_tags_insert_input!]!) {
  update_task(
    where: {id: {_eq: $id}}
    _set: {name: $name, description: $description, project_id: $project_id, status_id: $status_id, task_type_id: $task_type_id, user_id: $user_id, in_progress_date: $in_progress_date, done_date: $done_date}
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
  insert_task_tags(
    objects: $task_tags
    on_conflict: {constraint: task_tags_task_id_tag_id_key, update_columns: [task_id, tag_id]}
  ) {
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
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      project_id: // value for 'project_id'
 *      status_id: // value for 'status_id'
 *      task_type_id: // value for 'task_type_id'
 *      user_id: // value for 'user_id'
 *      in_progress_date: // value for 'in_progress_date'
 *      done_date: // value for 'done_date'
 *      task_tags_ids: // value for 'task_tags_ids'
 *      task_tags: // value for 'task_tags'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: bigint!) {
  delete_task(where: {id: {_eq: $id}}) {
    returning {
      id
      name
    }
  }
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;