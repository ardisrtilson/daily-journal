import { useJournalEntries, getEntries, deleteEntry} from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import { getMoods } from "./MoodProvider.js"
import { getInstructors } from "./InstructorProvider.js"

const entryLog = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

let allEntriesConvertedToStrings = []
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
       deleteEntry(id).then(
           () => {
               const updatedJournal = useJournalEntries()
               render(updatedJournal)
           }
       )
    }
})

export const journalList = () => {
    getEntries().then(() => {
    getMoods().then(() => {
    getInstructors().then(() => {
        const entries = useJournalEntries()
        console.log(entries)
    // allMoods.find(mood => mood.id === parseInt(entry.moodId)).label
    // allInstructors.find(instructor => instructor.id === parseInt(entry.instructorId)).first_name
        render(entries)
    })
})
})
}

    const render = (entryArray) => {

        allEntriesConvertedToStrings = entryArray.map(
            (currentEntry) => {
                return `${JournalEntryComponent(currentEntry)}`
                
            }
    ).join("")
        
        entryLog.innerHTML = allEntriesConvertedToStrings
    }