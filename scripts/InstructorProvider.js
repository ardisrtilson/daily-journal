let journal = []

export const getInstructors = () => {
return fetch("http://localhost:3000/instructors")
    .then(response => response.json()) 
    .then(retrievedEntries => {
       journal = retrievedEntries
    })
}

export const useInstructors = () => {
    return journal.slice()
    }