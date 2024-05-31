import * as Types from '../../../../../types/graphql.types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type GetTaskStatusQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTaskStatusQuery = { __typename?: 'query_root', task: Array<{ __typename?: 'task', status?: { __typename?: 'status', name: string } | null }> };

export type GetUniqueStatusQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUniqueStatusQuery = { __typename?: 'query_root', status: Array<{ __typename?: 'status', name: string }> };

export type GetTasksDoneQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTasksDoneQuery = { __typename?: 'query_root', task: Array<{ __typename?: 'task', done_date?: any | null }> };

export type GetTasksDoneByRangeQueryVariables = Types.Exact<{
  _gte?: Types.InputMaybe<Types.Scalars['timestamptz']['input']>;
  _lte?: Types.InputMaybe<Types.Scalars['timestamptz']['input']>;
}>;


export type GetTasksDoneByRangeQuery = { __typename?: 'query_root', task: Array<{ __typename?: 'task', done_date?: any | null }> };


export const GetTaskStatusDocument = gql`
    query GetTaskStatus {
  task {
    status {
      name
    }
  }
}
    `;

/**
 * __useGetTaskStatusQuery__
 *
 * To run a query within a React component, call `useGetTaskStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTaskStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTaskStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTaskStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetTaskStatusQuery, GetTaskStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTaskStatusQuery, GetTaskStatusQueryVariables>(GetTaskStatusDocument, options);
      }
export function useGetTaskStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTaskStatusQuery, GetTaskStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTaskStatusQuery, GetTaskStatusQueryVariables>(GetTaskStatusDocument, options);
        }
export type GetTaskStatusQueryHookResult = ReturnType<typeof useGetTaskStatusQuery>;
export type GetTaskStatusLazyQueryHookResult = ReturnType<typeof useGetTaskStatusLazyQuery>;
export type GetTaskStatusQueryResult = Apollo.QueryResult<GetTaskStatusQuery, GetTaskStatusQueryVariables>;
export const GetUniqueStatusDocument = gql`
    query GetUniqueStatus {
  status(distinct_on: name) {
    name
  }
}
    `;

/**
 * __useGetUniqueStatusQuery__
 *
 * To run a query within a React component, call `useGetUniqueStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUniqueStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUniqueStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUniqueStatusQuery(baseOptions?: Apollo.QueryHookOptions<GetUniqueStatusQuery, GetUniqueStatusQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUniqueStatusQuery, GetUniqueStatusQueryVariables>(GetUniqueStatusDocument, options);
      }
export function useGetUniqueStatusLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUniqueStatusQuery, GetUniqueStatusQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUniqueStatusQuery, GetUniqueStatusQueryVariables>(GetUniqueStatusDocument, options);
        }
export type GetUniqueStatusQueryHookResult = ReturnType<typeof useGetUniqueStatusQuery>;
export type GetUniqueStatusLazyQueryHookResult = ReturnType<typeof useGetUniqueStatusLazyQuery>;
export type GetUniqueStatusQueryResult = Apollo.QueryResult<GetUniqueStatusQuery, GetUniqueStatusQueryVariables>;
export const GetTasksDoneDocument = gql`
    query GetTasksDone {
  task {
    done_date
  }
}
    `;

/**
 * __useGetTasksDoneQuery__
 *
 * To run a query within a React component, call `useGetTasksDoneQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksDoneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksDoneQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTasksDoneQuery(baseOptions?: Apollo.QueryHookOptions<GetTasksDoneQuery, GetTasksDoneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTasksDoneQuery, GetTasksDoneQueryVariables>(GetTasksDoneDocument, options);
      }
export function useGetTasksDoneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksDoneQuery, GetTasksDoneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTasksDoneQuery, GetTasksDoneQueryVariables>(GetTasksDoneDocument, options);
        }
export type GetTasksDoneQueryHookResult = ReturnType<typeof useGetTasksDoneQuery>;
export type GetTasksDoneLazyQueryHookResult = ReturnType<typeof useGetTasksDoneLazyQuery>;
export type GetTasksDoneQueryResult = Apollo.QueryResult<GetTasksDoneQuery, GetTasksDoneQueryVariables>;
export const GetTasksDoneByRangeDocument = gql`
    query GetTasksDoneByRange($_gte: timestamptz = "", $_lte: timestamptz = "") {
  task(where: {done_date: {_lte: $_lte, _gte: $_gte}}) {
    done_date
  }
}
    `;

/**
 * __useGetTasksDoneByRangeQuery__
 *
 * To run a query within a React component, call `useGetTasksDoneByRangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTasksDoneByRangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTasksDoneByRangeQuery({
 *   variables: {
 *      _gte: // value for '_gte'
 *      _lte: // value for '_lte'
 *   },
 * });
 */
export function useGetTasksDoneByRangeQuery(baseOptions?: Apollo.QueryHookOptions<GetTasksDoneByRangeQuery, GetTasksDoneByRangeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTasksDoneByRangeQuery, GetTasksDoneByRangeQueryVariables>(GetTasksDoneByRangeDocument, options);
      }
export function useGetTasksDoneByRangeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTasksDoneByRangeQuery, GetTasksDoneByRangeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTasksDoneByRangeQuery, GetTasksDoneByRangeQueryVariables>(GetTasksDoneByRangeDocument, options);
        }
export type GetTasksDoneByRangeQueryHookResult = ReturnType<typeof useGetTasksDoneByRangeQuery>;
export type GetTasksDoneByRangeLazyQueryHookResult = ReturnType<typeof useGetTasksDoneByRangeLazyQuery>;
export type GetTasksDoneByRangeQueryResult = Apollo.QueryResult<GetTasksDoneByRangeQuery, GetTasksDoneByRangeQueryVariables>;