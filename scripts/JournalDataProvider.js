let journal = []
const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("entryStateChanged"))
}

export const saveJournalEntry = (newJournalEntry) => {

fetch("http://localhost:3000/journals", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newJournalEntry)
})
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getEntries = () => {
return fetch("http://localhost:3000/journals?_expand=mood&_expand=instructor")
    .then(response => response.json()) 
    .then(retrievedEntries => {
       journal = retrievedEntries
    })
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:3000/journals/${entryId}`, {
        method: "DELETE"
    })
    .then(response => response.json())
        .then(getEntries)
        .then(dispatchStateChangeEvent) 
}

export const editEntry = (edit) => {
    return fetch(`http://localhost:3000/journals/${edit.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(edit)
    }).then(getEntries)
    .then(dispatchStateChangeEvent)
}