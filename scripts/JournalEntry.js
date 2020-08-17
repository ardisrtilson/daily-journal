import { useMoods } from "./MoodProvider.js"
import { useInstructors } from "./InstructorProvider.js"

export const JournalEntryComponent = (entry) => {

    let allMoods = useMoods()
    let allInstructors = useInstructors()
    console.log()
    return `
        <section id="${entry.id}" class="journalEntry">
        <fieldset>
        ${entry.concept} <br>
        ${entry.entry} <br>
        ${new Date(entry.date).toLocaleDateString('en-US') } <br>
        ${allMoods.find(mood => mood.id === parseInt(entry.moodId)).label} <br>
        ${allInstructors.find(instructor => instructor.id === parseInt(entry.instructorId)).first_name} <br>
        <button id="deleteEntry--${entry.id}">Delete</button>
        </fieldset>
        </section>
    `
}

// const render = (noteArray, criminalArray) => {
//     contentTarget.innerHTML = noteArray.reverse().map(currentNote => {
//         const relatedCriminal = criminalArray.find(criminal => criminal.id === currentNote.criminalId)
//         console.log(relatedCriminal)
//             return NoteHTMLConverter(currentNote, relatedCriminal)
//         }
//     ).join("")}