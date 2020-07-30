const journalForm = document.querySelector(".journalForm")


export const JournalFormComponent = () => {

journalForm.innerHTML +=`
<form action="">
<fieldset>
<label class="title" for="journalDate">Date of entry</label>
<input type="date" name="journalDate" id="journalDate">
</fieldset>
<fieldset>
    <label class="title" for="conceptsCovered">Concepts Covered</label>
    <input type="text" name="conceptsCovered" id="conceptsCovered">
    </fieldset>
<fieldset>
        <label class="title" for="journalEntry">Journal Entry</label>
        <textarea name="journalEntry" id="journalEntry">
</textarea>
</fieldset>
<fieldset>
            <label class="title" for="Mood">Mood</label>
            <select name="mood" id="mood">
            <option value="Happy">Happy</option>
            <option value="Sad">Sad</option>
            <option value="Afraid">Afraid</option>
            <option value="Mad">Mad</option>
            </select>
</fieldset>
    <button type="button" name="conceptsCovered" id="conceptsCovered">
        Record Journal Entry
    </button>
</form>`
}