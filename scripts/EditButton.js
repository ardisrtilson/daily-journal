import { getMoods, useMoods } from "./MoodProvider.js"
import { getInstructors, useInstructors } from "./InstructorProvider.js"
import { useJournalEntries, getEntries, editEntry} from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
let capturedId = 0

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        capturedId = id
    render(id)
    }
})   

const render = (id) => {
    const contentTarget = document.querySelector(`.editCard--${id}`)
    getMoods().then(() => {
        const allMoods = useMoods()
    getInstructors().then(() => {
        const allInstructors = useInstructors()
    contentTarget.innerHTML = `
        <input type="text" id="concept--${id}" placeholder="Concept" />
        <textarea id="journal--entry--${id}" placeholder ="Entry"></textarea>
        <select name="mood" id="journal--mood--${id}">
        <option value="0">Please select a mood...</option>
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        </select>
        <select name="Instructor" id="journal--instructor--${id}">
        <option value="0">Please select an instructor...</option>
        ${
            allInstructors.map(
                (instructor) => {
                    return `<option value="${ instructor.id }">${ instructor.first_name }</option>`
                }
            ).join("")
        }
        </select>
        <button type="button" name="conceptsCovered" id="saveEditedEntry--${id}">
        Record Journal Entry
    </button>`
    })})}

    eventHub.addEventListener("click", clickEvent => {
        if(clickEvent.target.id.startsWith("saveEditedEntry--")){
            const [prompt, id] = clickEvent.target.id.split("--")
            const editedConcept = document.querySelector(`#concept--${id}`)
            const editedEntry = document.querySelector(`#journal--entry--${id}`)
            const editedMood = document.querySelector(`#journal--mood--${id}`)
            const editedInstructor = document.querySelector(`#journal--instructor--${id}`)
                if (editedConcept.value != "" 
                && editedEntry.value != "" 
                && editedMood.value != ""
                && editedInstructor.value != ""
                ){
            const newEntry = {
                id: id,
                entry: editedEntry.value,
                concept: editedConcept.value,
                moodId: editedMood.value,
                instructorId: editedInstructor.value,
                date: Date.now()
            }
            editEntry(newEntry)

    }
    else{window.alert("One or more of your entry fields is blank.")}
}
})