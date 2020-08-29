export const JournalEntryComponent = (entry) => {
    return `
        <section id="${entry.id}" class="journalEntry">
        <fieldset>
        ${entry.concept} <br>
        ${entry.entry} <br>
        ${new Date(entry.date).toLocaleDateString('en-US') } <br>
        ${entry.mood.label} <br>
        ${entry.instructor.first_name} <br>
        <button id="deleteEntry--${entry.id}">Delete</button>
        <button id="editEntry--${entry.id}">Edit</button>
        </fieldset>
        </section>
    `
}