import _ from 'lodash'

import { useGetMasterdataQuery } from './queries'

const columns = ( () => {

    const { data } = useGetMasterdataQuery()

    const taskTypeOptions = _.map(data?.task_type, 'name')

    return {
        'status': {
            columns: [
                { 
                    field: 'name', 
                    headerName: 'Status',
                    flex: 1,
                    editable: true
                }, 
                { 
                    field: 'color', 
                    headerName: 'Color',
                    flex: 1,
                    editable: true
                }, 
            ]
        },
    
        'task_type': {
            columns: [
                { 
                    field: 'name', 
                    headerName: 'Task Type',
                    flex: 1,
                    editable: true
                }, 
            ]
        },
    
        'users': {
            columns: [
                { 
                    field: 'username', 
                    headerName: 'Username' ,
                    flex: 1,
                    editable: true
                }, 
                { 
                    field: 'last_name', 
                    headerName: 'Last Name',
                    flex: 1,
                    editable: true
                }, 
                { 
                    field: 'first_name', 
                    headerName: 'First Name',
                    flex: 1,
                    editable: true
                }, 
                { 
                    field: 'middle_name', 
                    headerName: 'Middle Name' ,
                    flex: 1,
                    eimtable: true
                }, 
                { 
                    field: 'suffix_name', 
                    headerName: 'Suffix Name',
                    flex: 1,
                    editable: true
                },
                { 
                    field: 'role', 
                    headerName: 'Role',
                    flex: 1,
                    editable: true
                },
            ]
        },
    
        'projects': {
            columns: [
                { 
                    field: 'name', 
                    headerName: 'Project',
                    flex: 1,
                    editable: true
                },
                { 
                    field: 'task_type_id', 
                    headerName: 'Task Type ID',
                    flex: 1,
                    editable: true,
                    type: 'singleSelect',
                    getOptionValue: (value: any) => value.id,
                    getOptionLabel: (value: any) => value.name,
                    valueOptions: data?.task_type,
                }, 
            ]
        }
    }

})

export const tableData = ( (data, table) => {

    const getColumns = columns()

    const finalData = {
        rows: data?.[table] ?? [],
        columns: getColumns[table].columns
    }

    return finalData
})