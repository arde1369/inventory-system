import React, { useState } from 'react';
import Select from "react-select"
import { useQuery } from '@tanstack/react-query';
import { getAllItems, submitOrderToBackEnd } from "../http/ItemsHttpClient"



export function NewOrder(){

    const [options, setOptions] = useState([])
    const [submissionResponse, setSubmissionResponse] = useState(null)

    const {data, isPending, isError, error} = useQuery({
        queryKey : ['items'],
        queryFn : getAllItems
    })

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
            {isError && 
                    <div>
                        <h3>Error occurred retreiving items from database. Please try again...</h3>

                    </div>
                }
            {isPending && <p>Fetching items from database. Please wait...</p>}
            {data &&
                <form onSubmit={handleSubmit}>

                        <Select
                            isMulti
                            name="selectedItems"
                            options={data}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={handleUpdate}
                            value={options}
                        />
                    <button>Submit Order</button>
                </form>
            }
            {submissionResponse && <p>{submissionResponse}</p>}
        </>
    )
}