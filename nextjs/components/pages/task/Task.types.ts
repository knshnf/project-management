import * as Types from '../../../types/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetTaskQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTaskQuery = { __typename?: 'query_root', task: Array<{ __typename?: 'task', id: number, name: string, description?: string | null, created_at: any, updated_at: any, project?: { __typename?: 'projects', id: number, name: string } | null, status?: { __typename?: 'status', id: number, name: string } | null, task_type?: { __typename?: 'task_type', id: number, name: string } | null, user?: { __typename?: 'users', id: number, name: string } | null }> };


export const GetTaskDocument = gql`
    query GetTask {
  task {
    id
    name
    description
    created_at
    updated_at
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
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
}
export function useGetTaskLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskQuery, GetTaskQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTaskQuery, GetTaskQueryVariables>(GetTaskDocument, options);
}
export type GetTaskQueryHookResult = ReturnType<typeof useGetTaskQuery>;
export type GetTaskLazyQueryHookResult = ReturnType<typeof useGetTaskLazyQuery>;
export type GetTaskQueryResult = Apollo.QueryResult<GetTaskQuery, GetTaskQueryVariables>;