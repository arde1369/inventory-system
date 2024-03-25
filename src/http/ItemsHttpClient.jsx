export async function getAllItems({signal}){
    let url = 'http://localhost:8080/inventory/getAllItems';

    const response = await fetch(url, { signal })

    if(!response.ok){
        const error = new Error('An error occurred while fetching the events');
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const retrievedItems = await response.json();
    const formattedItems = []

    for(var i = 0; i < retrievedItems.length; i++){
        formattedItems.push({label : `${retrievedItems[i].id + " : " + retrievedItems[i].name}`, value : retrievedItems[i].id})
    }
  
    return formattedItems;
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