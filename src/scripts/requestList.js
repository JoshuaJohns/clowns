import { getClowns, getRequests, saveCompletion, getCompletions } from "./dataAccess.js";

const incompleteRequest = (currentObject) => {
    const clowns = getClowns()
    const completions = getCompletions()
    let html = ''
    const completed = completions.find(completion => completion.requestId === currentObject.id)
    if (!completed) {
        html += `<li>
                ${currentObject.parentName} and ${currentObject.childName} scheduled for ${currentObject.reserveDate}
                <select class="clowns" id="clowns">
                <option value="">Choose</option>`
        clowns.forEach(clown => {
            html += `<option value="${currentObject.id}--${clown.id}">${clown.name}</option>`
        })
        html += ` </select>
    <button class="request__delete"
    id="request--${currentObject.id}">
    Deny
    </button>

    </li>
    `
    }
    return html
}

const completedRequest = (currentObject) => {
    const completions = getCompletions()
    // const completed = completions.find(completion => completion.requestId === currentObject.id)
    let newArray = []

    if (completions.find(completion => completion.requestId === currentObject.id)) {
        newArray.push(`<li>Completed request #${currentObject.id} on ${currentObject.reserveDate}</li>`)

    }

    return newArray
}





export const Request = () => {
    const requests = getRequests()
    // const sortReqests = requests.sort((a, b) => b.reserveDate - a.reserveDate)
    let html = `
            <div class="request">
            ${requests.map(incompleteRequest).join("")}
            </div>
            <div class="completed">
            ${requests.map(completedRequest).join("")}
            </div>
    `
    return html
}

document.addEventListener("change", (event) => {
    if (event.target.id === "clowns") {
        const [requestId, clownId] = event.target.value.split("--")

        const completions = {
            requestId: parseInt(requestId),
            clownId: parseInt(clownId),
            date_created: Date.now()
        }

        saveCompletion(completions)
    }
})
