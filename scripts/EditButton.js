import {editEntry} from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    
    if (clickEvent.target.id.startsWith("editEntry--")) {
        console.log("Test")
        const [prefix, id] = clickEvent.target.id.split("--")
        editEntry(id).then(
           () => {
               const updatedJournal = useJournalEntries()
               render(updatedJournal)
           }
       )
    }
})

const renderEditField = () => {
    entryLog.innerHTML = allEntriesConvertedToStrings
}
