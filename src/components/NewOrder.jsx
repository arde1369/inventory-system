import React, { useState } from 'react';
import Select from "react-select"
import { getAllItems, submitOrderToBackEnd } from "../http/ItemsHttpClient"

export function NewOrder(){
    const loadedOptions = getAllItems()
    const formattedForSelect = []
    const [options, setOptions] = useState([])
    const [submissionResponse, setSubmissionResponse] = useState(null)

    for(var i = 0; i < loadedOptions.length; i++){
        formattedForSelect.push({label : `${loadedOptions[i].id + " : " + loadedOptions[i].name}`, value : loadedOptions[i].id})
    }

    function handleUpdate(selectedOptions){
        setOptions(selectedOptions)
    }

    function handleSubmit(event){
        event.preventDefault()
        const response = submitOrderToBackEnd(options)
        if(response.ok){
            setSubmissionResponse('Order submitted successfully')
        } else {
            setSubmissionResponse(response.errors)
        }
        setOptions([])
    }
    

    return (
        <>
            <h1>Create a new New Order</h1>
            <form onSubmit={handleSubmit}>
                <Select
                    isMulti
                    name="selectedItems"
                    options={formattedForSelect}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleUpdate}
                    value={options}
                />
                <button>Submit Order</button>
            </form>
            {submissionResponse && <p>{submissionResponse}</p>}
        </>
    )
}