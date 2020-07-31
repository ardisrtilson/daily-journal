export const JournalEntryComponent = (entry) => {
    return `
        <section id="${entry.id}" class="journalEntry">
        <fieldset>
        ${entry.concept} <br>
        ${entry.entry} <br>
        ${new Date(entry.date).toLocaleDateString('en-US') } <br>
        ${entry.mood} <br>
        </fieldset>
        </section>
    `
}