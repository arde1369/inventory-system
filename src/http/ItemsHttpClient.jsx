export function getAllItems(){
    return [
        {
            id : '1ab',
            name : 'Beaker'
        },
        {
            id : '1ac',
            name : 'Bunsen Burner'
        },
        {
            id : '2ab',
            name : 'Syringe'
        },
        {
            id : '2bc',
            namee : 'Microscope'
        }
    ]
}

export function submitOrderToBackEnd(order){
    console.log(order)
    const response = {
        status : 200,
        ok : true,
        errors : false,
        body : order
    }
    return response
}