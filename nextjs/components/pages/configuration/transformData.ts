
export const transformData = ( (data, table) => {

    let finalData;
    
    if (table == 'projects') {
        const info = data?.[table]
        let newInfo = []
        info.map( (i) => {
         const value = {
            __typename: 'projects',
            id: i.id,
            name: i.name,
            task_type_id: i.task_type_id,
            task_type: i.task_type.name
         }  
         newInfo.push(value)     
         finalData = {
         projects: newInfo
        }     
        })
    } else {
        finalData = data
    }
    return finalData
})