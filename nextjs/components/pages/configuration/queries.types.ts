import * as Types from '../../../types/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetMasterdataQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetMasterdataQuery = { __typename?: 'query_root', status: Array<{ __typename?: 'status', id: number, name: string, color?: string | null }>, task_type: Array<{ __typename?: 'task_type', id: number, name: string }>, users: Array<{ __typename?: 'users', id: number, name: string, last_name: string, first_name: string, middle_name?: string | null, suffix_name?: string | null, username: string, role?: string | null }>, projects: Array<{ __typename?: 'projects', id: number, name: string, task_type_id: number, task_type?: { __typename?: 'task_type', name: string } | null }>, tags: Array<{ __typename?: 'tags', color?: string | null, id: number, name: string, sort: number }> };

export type AddStatusMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  color: Types.Scalars['String']['input'];
}>;


export type AddStatusMutation = { __typename?: 'mutation_root', insert_status?: { __typename?: 'status_mutation_response', returning: Array<{ __typename?: 'status', id: number, name: string, color?: string | null }> } | null };

export type AddTaskTypeMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type AddTaskTypeMutation = { __typename?: 'mutation_root', insert_task_type?: { __typename?: 'task_type_mutation_response', returning: Array<{ __typename?: 'task_type', id: number, name: string }> } | null };

export type AddProjectsMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  task_type_id: Types.Scalars['Int']['input'];
}>;


export type AddProjectsMutation = { __typename?: 'mutation_root', insert_projects?: { __typename?: 'projects_mutation_response', returning: Array<{ __typename?: 'projects', id: number, name: string, task_type_id: number }> } | null };

export type AddUsersMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  username: Types.Scalars['String']['input'];
  last_name: Types.Scalars['String']['input'];
  first_name: Types.Scalars['String']['input'];
  middle_name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  suffix_name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  role: Types.Scalars['String']['input'];
}>;


export type AddUsersMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: number, name: string, username: string }> } | null };

export type AddTagsMutationVariables = Types.Exact<{
  color: Types.Scalars['String']['input'];
  name: Types.Scalars['String']['input'];
  sort: Types.Scalars['bigint']['input'];
}>;


export type AddTagsMutation = { __typename?: 'mutation_root', insert_tags?: { __typename?: 'tags_mutation_response', returning: Array<{ __typename?: 'tags', color?: string | null, id: number, name: string, sort: number }> } | null };

export type UpdateStatusMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
  color: Types.Scalars['String']['input'];
}>;


export type UpdateStatusMutation = { __typename?: 'mutation_root', update_status?: { __typename?: 'status_mutation_response', returning: Array<{ __typename?: 'status', id: number, name: string }> } | null };

export type UpdateTaskTypeMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
}>;


export type UpdateTaskTypeMutation = { __typename?: 'mutation_root', update_task_type?: { __typename?: 'task_type_mutation_response', returning: Array<{ __typename?: 'task_type', id: number, name: string }> } | null };

export type UpdateProjectsMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
  task_type_id: Types.Scalars['Int']['input'];
}>;


export type UpdateProjectsMutation = { __typename?: 'mutation_root', update_projects?: { __typename?: 'projects_mutation_response', returning: Array<{ __typename?: 'projects', id: number, name: string, task_type_id: number }> } | null };

export type UpdateTagsMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  color: Types.Scalars['String']['input'];
  name: Types.Scalars['String']['input'];
  sort: Types.Scalars['bigint']['input'];
}>;


export type UpdateTagsMutation = { __typename?: 'mutation_root', update_tags?: { __typename?: 'tags_mutation_response', returning: Array<{ __typename?: 'tags', id: number, color?: string | null, name: string, sort: number }> } | null };

export type DeleteStatusMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteStatusMutation = { __typename?: 'mutation_root', delete_status?: { __typename?: 'status_mutation_response', returning: Array<{ __typename?: 'status', id: number }> } | null };

export type DeleteTaskTypeMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteTaskTypeMutation = { __typename?: 'mutation_root', delete_task_type?: { __typename?: 'task_type_mutation_response', returning: Array<{ __typename?: 'task_type', id: number }> } | null };

export type DeleteProjectsMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteProjectsMutation = { __typename?: 'mutation_root', delete_projects?: { __typename?: 'projects_mutation_response', returning: Array<{ __typename?: 'projects', id: number }> } | null };

export type DeleteUsersMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteUsersMutation = { __typename?: 'mutation_root', delete_users?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: number }> } | null };

export type DeleteTagsMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
}>;


export type DeleteTagsMutation = { __typename?: 'mutation_root', delete_tags?: { __typename?: 'tags_mutation_response', returning: Array<{ __typename?: 'tags', id: number }> } | null };


export const GetMasterdataDocument = gql`
    query GetMasterdata {
  status(order_by: {id: asc}) {
    id
    name
    color
  }
  task_type(order_by: {name: asc}) {
    id
    name
  }
  users(order_by: {name: asc}) {
    id
    name
    last_name
    first_name
    middle_name
    suffix_name
    username
    role
  }
  projects(order_by: {name: asc}) {
    id
    name
    task_type_id
    task_type {
      name
    }
  }
  tags(order_by: {sort: asc}) {
    color
    id
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
export const AddStatusDocument = gql`
    mutation AddStatus($name: String!, $color: String!) {
  insert_status(objects: {name: $name, color: $color}) {
    returning {
      id
      name
      color
    }
  }
}
    `;
export type AddStatusMutationFn = Apollo.MutationFunction<AddStatusMutation, AddStatusMutationVariables>;

/**
 * __useAddStatusMutation__
 *
 * To run a mutation, you first call `useAddStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStatusMutation, { data, loading, error }] = useAddStatusMutation({
 *   variables: {
 *      name: // value for 'name'
 *      color: // value for 'color'
 *   },
 * });
 */
export function useAddStatusMutation(baseOptions?: Apollo.MutationHookOptions<AddStatusMutation, AddStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddStatusMutation, AddStatusMutationVariables>(AddStatusDocument, options);
      }
export type AddStatusMutationHookResult = ReturnType<typeof useAddStatusMutation>;
export type AddStatusMutationResult = Apollo.MutationResult<AddStatusMutation>;
export type AddStatusMutationOptions = Apollo.BaseMutationOptions<AddStatusMutation, AddStatusMutationVariables>;
export const AddTaskTypeDocument = gql`
    mutation AddTaskType($name: String!) {
  insert_task_type(objects: {name: $name}) {
    returning {
      id
      name
    }
  }
}
    `;
export type AddTaskTypeMutationFn = Apollo.MutationFunction<AddTaskTypeMutation, AddTaskTypeMutationVariables>;

/**
 * __useAddTaskTypeMutation__
 *
 * To run a mutation, you first call `useAddTaskTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskTypeMutation, { data, loading, error }] = useAddTaskTypeMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useAddTaskTypeMutation(baseOptions?: Apollo.MutationHookOptions<AddTaskTypeMutation, AddTaskTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTaskTypeMutation, AddTaskTypeMutationVariables>(AddTaskTypeDocument, options);
      }
export type AddTaskTypeMutationHookResult = ReturnType<typeof useAddTaskTypeMutation>;
export type AddTaskTypeMutationResult = Apollo.MutationResult<AddTaskTypeMutation>;
export type AddTaskTypeMutationOptions = Apollo.BaseMutationOptions<AddTaskTypeMutation, AddTaskTypeMutationVariables>;
export const AddProjectsDocument = gql`
    mutation AddProjects($name: String!, $task_type_id: Int!) {
  insert_projects(objects: {name: $name, task_type_id: $task_type_id}) {
    returning {
      id
      name
      task_type_id
    }
  }
}
    `;
export type AddProjectsMutationFn = Apollo.MutationFunction<AddProjectsMutation, AddProjectsMutationVariables>;

/**
 * __useAddProjectsMutation__
 *
 * To run a mutation, you first call `useAddProjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectsMutation, { data, loading, error }] = useAddProjectsMutation({
 *   variables: {
 *      name: // value for 'name'
 *      task_type_id: // value for 'task_type_id'
 *   },
 * });
 */
export function useAddProjectsMutation(baseOptions?: Apollo.MutationHookOptions<AddProjectsMutation, AddProjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddProjectsMutation, AddProjectsMutationVariables>(AddProjectsDocument, options);
      }
export type AddProjectsMutationHookResult = ReturnType<typeof useAddProjectsMutation>;
export type AddProjectsMutationResult = Apollo.MutationResult<AddProjectsMutation>;
export type AddProjectsMutationOptions = Apollo.BaseMutationOptions<AddProjectsMutation, AddProjectsMutationVariables>;
export const AddUsersDocument = gql`
    mutation AddUsers($name: String!, $username: String!, $last_name: String!, $first_name: String!, $middle_name: String, $suffix_name: String, $role: String!) {
  insert_users(
    objects: {name: $name, username: $username, last_name: $last_name, first_name: $first_name, middle_name: $middle_name, suffix_name: $suffix_name, role: $role}
  ) {
    returning {
      id
      name
      username
    }
  }
}
    `;
export type AddUsersMutationFn = Apollo.MutationFunction<AddUsersMutation, AddUsersMutationVariables>;

/**
 * __useAddUsersMutation__
 *
 * To run a mutation, you first call `useAddUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUsersMutation, { data, loading, error }] = useAddUsersMutation({
 *   variables: {
 *      name: // value for 'name'
 *      username: // value for 'username'
 *      last_name: // value for 'last_name'
 *      first_name: // value for 'first_name'
 *      middle_name: // value for 'middle_name'
 *      suffix_name: // value for 'suffix_name'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useAddUsersMutation(baseOptions?: Apollo.MutationHookOptions<AddUsersMutation, AddUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUsersMutation, AddUsersMutationVariables>(AddUsersDocument, options);
      }
export type AddUsersMutationHookResult = ReturnType<typeof useAddUsersMutation>;
export type AddUsersMutationResult = Apollo.MutationResult<AddUsersMutation>;
export type AddUsersMutationOptions = Apollo.BaseMutationOptions<AddUsersMutation, AddUsersMutationVariables>;
export const AddTagsDocument = gql`
    mutation AddTags($color: String!, $name: String!, $sort: bigint!) {
  insert_tags(objects: {color: $color, name: $name, sort: $sort}) {
    returning {
      color
      id
      name
      sort
    }
  }
}
    `;
export type AddTagsMutationFn = Apollo.MutationFunction<AddTagsMutation, AddTagsMutationVariables>;

/**
 * __useAddTagsMutation__
 *
 * To run a mutation, you first call `useAddTagsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTagsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTagsMutation, { data, loading, error }] = useAddTagsMutation({
 *   variables: {
 *      color: // value for 'color'
 *      name: // value for 'name'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useAddTagsMutation(baseOptions?: Apollo.MutationHookOptions<AddTagsMutation, AddTagsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddTagsMutation, AddTagsMutationVariables>(AddTagsDocument, options);
      }
export type AddTagsMutationHookResult = ReturnType<typeof useAddTagsMutation>;
export type AddTagsMutationResult = Apollo.MutationResult<AddTagsMutation>;
export type AddTagsMutationOptions = Apollo.BaseMutationOptions<AddTagsMutation, AddTagsMutationVariables>;
export const UpdateStatusDocument = gql`
    mutation UpdateStatus($id: bigint!, $name: String!, $color: String!) {
  update_status(where: {id: {_eq: $id}}, _set: {name: $name, color: $color}) {
    returning {
      id
      name
    }
  }
}
    `;
export type UpdateStatusMutationFn = Apollo.MutationFunction<UpdateStatusMutation, UpdateStatusMutationVariables>;

/**
 * __useUpdateStatusMutation__
 *
 * To run a mutation, you first call `useUpdateStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateStatusMutation, { data, loading, error }] = useUpdateStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      color: // value for 'color'
 *   },
 * });
 */
export function useUpdateStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateStatusMutation, UpdateStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateStatusMutation, UpdateStatusMutationVariables>(UpdateStatusDocument, options);
      }
export type UpdateStatusMutationHookResult = ReturnType<typeof useUpdateStatusMutation>;
export type UpdateStatusMutationResult = Apollo.MutationResult<UpdateStatusMutation>;
export type UpdateStatusMutationOptions = Apollo.BaseMutationOptions<UpdateStatusMutation, UpdateStatusMutationVariables>;
export const UpdateTaskTypeDocument = gql`
    mutation UpdateTaskType($id: bigint!, $name: String!) {
  update_task_type(where: {id: {_eq: $id}}, _set: {name: $name}) {
    returning {
      id
      name
    }
  }
}
    `;
export type UpdateTaskTypeMutationFn = Apollo.MutationFunction<UpdateTaskTypeMutation, UpdateTaskTypeMutationVariables>;

/**
 * __useUpdateTaskTypeMutation__
 *
 * To run a mutation, you first call `useUpdateTaskTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskTypeMutation, { data, loading, error }] = useUpdateTaskTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateTaskTypeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskTypeMutation, UpdateTaskTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskTypeMutation, UpdateTaskTypeMutationVariables>(UpdateTaskTypeDocument, options);
      }
export type UpdateTaskTypeMutationHookResult = ReturnType<typeof useUpdateTaskTypeMutation>;
export type UpdateTaskTypeMutationResult = Apollo.MutationResult<UpdateTaskTypeMutation>;
export type UpdateTaskTypeMutationOptions = Apollo.BaseMutationOptions<UpdateTaskTypeMutation, UpdateTaskTypeMutationVariables>;
export const UpdateProjectsDocument = gql`
    mutation UpdateProjects($id: bigint!, $name: String!, $task_type_id: Int!) {
  update_projects(
    where: {id: {_eq: $id}}
    _set: {name: $name, task_type_id: $task_type_id}
  ) {
    returning {
      id
      name
      task_type_id
    }
  }
}
    `;
export type UpdateProjectsMutationFn = Apollo.MutationFunction<UpdateProjectsMutation, UpdateProjectsMutationVariables>;

/**
 * __useUpdateProjectsMutation__
 *
 * To run a mutation, you first call `useUpdateProjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectsMutation, { data, loading, error }] = useUpdateProjectsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      task_type_id: // value for 'task_type_id'
 *   },
 * });
 */
export function useUpdateProjectsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectsMutation, UpdateProjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectsMutation, UpdateProjectsMutationVariables>(UpdateProjectsDocument, options);
      }
export type UpdateProjectsMutationHookResult = ReturnType<typeof useUpdateProjectsMutation>;
export type UpdateProjectsMutationResult = Apollo.MutationResult<UpdateProjectsMutation>;
export type UpdateProjectsMutationOptions = Apollo.BaseMutationOptions<UpdateProjectsMutation, UpdateProjectsMutationVariables>;
export const UpdateTagsDocument = gql`
    mutation UpdateTags($id: bigint!, $color: String!, $name: String!, $sort: bigint!) {
  update_tags(
    where: {id: {_eq: $id}}
    _set: {name: $name, color: $color, sort: $sort}
  ) {
    returning {
      id
      color
      name
      sort
    }
  }
}
    `;
export type UpdateTagsMutationFn = Apollo.MutationFunction<UpdateTagsMutation, UpdateTagsMutationVariables>;

/**
 * __useUpdateTagsMutation__
 *
 * To run a mutation, you first call `useUpdateTagsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTagsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTagsMutation, { data, loading, error }] = useUpdateTagsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      color: // value for 'color'
 *      name: // value for 'name'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useUpdateTagsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTagsMutation, UpdateTagsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTagsMutation, UpdateTagsMutationVariables>(UpdateTagsDocument, options);
      }
export type UpdateTagsMutationHookResult = ReturnType<typeof useUpdateTagsMutation>;
export type UpdateTagsMutationResult = Apollo.MutationResult<UpdateTagsMutation>;
export type UpdateTagsMutationOptions = Apollo.BaseMutationOptions<UpdateTagsMutation, UpdateTagsMutationVariables>;
export const DeleteStatusDocument = gql`
    mutation DeleteStatus($id: bigint!) {
  delete_status(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteStatusMutationFn = Apollo.MutationFunction<DeleteStatusMutation, DeleteStatusMutationVariables>;

/**
 * __useDeleteStatusMutation__
 *
 * To run a mutation, you first call `useDeleteStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteStatusMutation, { data, loading, error }] = useDeleteStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteStatusMutation(baseOptions?: Apollo.MutationHookOptions<DeleteStatusMutation, DeleteStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteStatusMutation, DeleteStatusMutationVariables>(DeleteStatusDocument, options);
      }
export type DeleteStatusMutationHookResult = ReturnType<typeof useDeleteStatusMutation>;
export type DeleteStatusMutationResult = Apollo.MutationResult<DeleteStatusMutation>;
export type DeleteStatusMutationOptions = Apollo.BaseMutationOptions<DeleteStatusMutation, DeleteStatusMutationVariables>;
export const DeleteTaskTypeDocument = gql`
    mutation DeleteTaskType($id: bigint!) {
  delete_task_type(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteTaskTypeMutationFn = Apollo.MutationFunction<DeleteTaskTypeMutation, DeleteTaskTypeMutationVariables>;

/**
 * __useDeleteTaskTypeMutation__
 *
 * To run a mutation, you first call `useDeleteTaskTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskTypeMutation, { data, loading, error }] = useDeleteTaskTypeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTaskTypeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskTypeMutation, DeleteTaskTypeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskTypeMutation, DeleteTaskTypeMutationVariables>(DeleteTaskTypeDocument, options);
      }
export type DeleteTaskTypeMutationHookResult = ReturnType<typeof useDeleteTaskTypeMutation>;
export type DeleteTaskTypeMutationResult = Apollo.MutationResult<DeleteTaskTypeMutation>;
export type DeleteTaskTypeMutationOptions = Apollo.BaseMutationOptions<DeleteTaskTypeMutation, DeleteTaskTypeMutationVariables>;
export const DeleteProjectsDocument = gql`
    mutation DeleteProjects($id: bigint!) {
  delete_projects(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteProjectsMutationFn = Apollo.MutationFunction<DeleteProjectsMutation, DeleteProjectsMutationVariables>;

/**
 * __useDeleteProjectsMutation__
 *
 * To run a mutation, you first call `useDeleteProjectsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectsMutation, { data, loading, error }] = useDeleteProjectsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteProjectsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProjectsMutation, DeleteProjectsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProjectsMutation, DeleteProjectsMutationVariables>(DeleteProjectsDocument, options);
      }
export type DeleteProjectsMutationHookResult = ReturnType<typeof useDeleteProjectsMutation>;
export type DeleteProjectsMutationResult = Apollo.MutationResult<DeleteProjectsMutation>;
export type DeleteProjectsMutationOptions = Apollo.BaseMutationOptions<DeleteProjectsMutation, DeleteProjectsMutationVariables>;
export const DeleteUsersDocument = gql`
    mutation DeleteUsers($id: bigint!) {
  delete_users(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteUsersMutationFn = Apollo.MutationFunction<DeleteUsersMutation, DeleteUsersMutationVariables>;

/**
 * __useDeleteUsersMutation__
 *
 * To run a mutation, you first call `useDeleteUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUsersMutation, { data, loading, error }] = useDeleteUsersMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUsersMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUsersMutation, DeleteUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUsersMutation, DeleteUsersMutationVariables>(DeleteUsersDocument, options);
      }
export type DeleteUsersMutationHookResult = ReturnType<typeof useDeleteUsersMutation>;
export type DeleteUsersMutationResult = Apollo.MutationResult<DeleteUsersMutation>;
export type DeleteUsersMutationOptions = Apollo.BaseMutationOptions<DeleteUsersMutation, DeleteUsersMutationVariables>;
export const DeleteTagsDocument = gql`
    mutation DeleteTags($id: bigint!) {
  delete_tags(where: {id: {_eq: $id}}) {
    returning {
      id
    }
  }
}
    `;
export type DeleteTagsMutationFn = Apollo.MutationFunction<DeleteTagsMutation, DeleteTagsMutationVariables>;

/**
 * __useDeleteTagsMutation__
 *
 * To run a mutation, you first call `useDeleteTagsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTagsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTagsMutation, { data, loading, error }] = useDeleteTagsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTagsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTagsMutation, DeleteTagsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTagsMutation, DeleteTagsMutationVariables>(DeleteTagsDocument, options);
      }
export type DeleteTagsMutationHookResult = ReturnType<typeof useDeleteTagsMutation>;
export type DeleteTagsMutationResult = Apollo.MutationResult<DeleteTagsMutation>;
export type DeleteTagsMutationOptions = Apollo.BaseMutationOptions<DeleteTagsMutation, DeleteTagsMutationVariables>;