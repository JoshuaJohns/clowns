const applicationState = {
    requests: [],
    clowns: [],
    completions: [],
}
const API = "http://localhost:8088"


// Fetch functions
export const fetchRequests = () => {
    return fetch(`${API}/requests?_sort=reserveDate&_order=asc`)
        .then(response => response.json())
        .then(
            (scheduleRequest) => {
                applicationState.requests = scheduleRequest
            }
        )
}
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (clowns) => {
                applicationState.clowns = clowns
            }
        )
}
export const fetchCompletions = () => {
    return fetch(`${API}/completions`)
        .then(response => response.json())
        .then(
            (completions) => {
                applicationState.completions = completions
            }
        )
}


// Get functions
export const getRequests = () => {
    return applicationState.requests.map(request => ({ ...request }))
}
export const getClowns = () => {
    return applicationState.clowns.map(clown => ({ ...clown }))
}
export const getCompletions = () => {
    return applicationState.completions.map(completion => ({ ...completion }))
}


// POST functions
export const sendNewRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }
    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}
export const saveCompletion = (userCompletion) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userCompletion)
    }


    return fetch(`${API}/completions`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

// Delete functions
export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}