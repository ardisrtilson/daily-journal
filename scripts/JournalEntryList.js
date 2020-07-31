import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

const entryLog = document.querySelector("#entryLog")

export const journalList = () => {
    getEntries().then(() => {
        const entries = useJournalEntries()
        render(entries)
    })
}

    const render = (entryArray) => {
        const allEntriesConvertedToStrings = entryArray.map(
            (currentEntry) => {
                return JournalEntryComponent(currentEntry)
            }
        ).join("")

        entryLog.innerHTML = allEntriesConvertedToStrings
    }