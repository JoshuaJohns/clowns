import { requestForm } from "./requestForm.js"
import { Request } from "./requestList.js"



export const htmlRep = () => {
    return `
    <h1>Hire Buttons and Lollipop the Clowns!</h1>
    <section class="requestForm">
        ${requestForm()}
    </section>

    <section class="requestList">
        ${Request()}
    </section>

    `
}