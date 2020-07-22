import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("#entryLog")

const EntryListComponent = (entryArray) => {

    let journalHTML = ""

    for (const currentEntry of entryArray) {
        journalHTML += JournalEntryComponent(currentEntry)
    }

        entryLog.innerHTML += 
        `<article class="journalEntry">
            ${journalHTML}
        </article>`
    }

    export const journalList = () => {
        
        const entries = useJournalEntries()
        EntryListComponent(entries)
    
    }