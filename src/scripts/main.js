import { fetchClowns, fetchRequests, deleteRequest, fetchCompletions } from "./dataAccess.js"
import { htmlRep } from "./htmlRep.js"




const mainContainer = document.querySelector("#container")

const render = () => {
    fetchRequests()
        .then(() => fetchClowns())
        .then(() => fetchCompletions())

        .then(
            () => {
                mainContainer.innerHTML = htmlRep()
            }
        )
}

render()

document.addEventListener(
    "stateChanged",
    CustomEvent => {
        render()
    }
)

//When the Delete button is clicked delete the selected request by reffrenceing its id
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [, requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})