import {saveJournalEntry} from "./JournalDataProvider.js"
import { journalList } from "./JournalEntryList.js"

const journalForm = document.querySelector(".journalForm")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "conceptsCovered") {
        const journalEntry = document.querySelector("#journal--entry")
        const journalConcept = document.querySelector("#journal--concept")
        const journalMood = document.querySelector("#journal--mood")
    
        const newNote = {
            entry: journalEntry.value,
            concept: journalConcept.value,
            mood: journalMood.value,
            date: Date.now()
        }

        saveJournalEntry(newNote)
        journalList()
    }
})

export const JournalFormComponent  = () => {
    journalForm.innerHTML +=`
        <input type="text" id="journal--concept" placeholder="Concept" />
        <textarea id="journal--entry" placeholder ="Entry"></textarea>
        <select name="mood" id="journal--mood">
        <option value="Happy">Happy</option>
        <option value="Sad">Sad</option>
        <option value="Afraid">Afraid</option>
        <option value="Mad">Mad</option>
        </select>
        <button type="button" name="conceptsCovered" id="conceptsCovered">
        Record Journal Entry
    </button>`
}
