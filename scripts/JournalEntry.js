export const JournalEntryComponent = (entry) => {
    return `
        <section id="${entry.id}" class="journalEntry">
        ${entry.date}, ${entry.concept}, ${entry.date}, ${entry.mood}
        </section>
    `
}