import { sendNewRequest } from "./dataAccess.js"


export const requestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="parentName">Legal Guardian's Name</label>
            <input type="text" name="parentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="childName">Child's Name</label>
            <input type="text" name="childName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numberOfAttendants">Number of Attendants</label>
            <input type="number" name="numberOfAttendants" class="input" />
        </div>
        <div class="field">
            <label class="label" for="address">Address</label>
            <input type="text" name="address" class="input" />
        </div>
        <div class="field">
            <label class="label" for="requestDate">Request Date</label>
            <input type="date" name="requestDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="durration">Lenghth of Reservation</label>
            <input type="number" name="durration" class="input" />
        </div>
        
        <button class="button" id="submitRequest">Submit Request</button>
    `
    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        const userParentName = document.querySelector("input[name='parentName']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttendance = document.querySelector("input[name='numberOfAttendants']").value
        const userAddress = document.querySelector("input[name='address']").value
        const userDate = document.querySelector("input[name='requestDate']").value
        const userDurration = document.querySelector("input[name='durration']").value

        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            attending: userAttendance,
            address: userAddress,
            reserveDate: userDate,
            durration: userDurration

        }
        sendNewRequest(dataToSendToAPI)
    }
}) 