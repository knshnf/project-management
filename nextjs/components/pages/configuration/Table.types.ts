import * as Types from '../../../types/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateStatusMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
}>;


export type UpdateStatusMutation = { __typename?: 'mutation_root', update_status?: { __typename?: 'status_mutation_response', returning: Array<{ __typename?: 'status', id: number, name: string }> } | null };

export type UpdateTaskTypeMutationVariables = Types.Exact<{
  id: Types.Scalars['bigint']['input'];
  name: Types.Scalars['String']['input'];
}>;


export type UpdateTaskTypeMutation = { __typename?: 'mutation_root', update_task_type?: { __typename?: 'task_type_mutation_response', returning: Array<{ __typename?: 'task_type', id: number, name: string }> } | null };


export const UpdateStatusDocument = gql`
    mutation UpdateStatus($id: bigint!, $name: String!) {
  update_status(where: {id: {_eq: $id}}, _set: {name: $name}) {
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