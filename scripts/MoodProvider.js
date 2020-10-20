let journal = []

export const getMoods = () => {
return fetch("http://localhost:3000/moods")
    .then(response => response.json())
    .then(retrievedEntries => {
       journal = retrievedEntries
    })
}

export const useMoods = () => {
    return journal.slice()
    }