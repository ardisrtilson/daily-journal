import {saveJournalEntry} from "./JournalDataProvider.js"
import { journalList } from "./JournalEntryList.js"
import {getMoods, useMoods} from "./MoodProvider.js"
import {getInstructors, useInstructors} from "./InstructorProvider.js"

const journalForm = document.querySelector(".journalForm")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "conceptsCovered") {
        const journalEntry = document.querySelector("#journal--entry")
        const journalConcept = document.querySelector("#journal--concept")
        const journalMood = document.querySelector("#journal--mood")
        const journalInstructor = document.querySelector("#journal--instructor")
        const journalTags = document.querySelector("#journal--tags")
        const tagString = String(journalTags.value)
        const [tag1, tag2, tag3] = tagString.split(",")

    if (journalMood.value != 0 && journalInstructor.value != 0) {
    if (journalConcept.value.length >= 10){
        window.alert("Concept Must Be Less Than 10 Characters")

    } else{

        const swearArray = ["shit", "piss", "fuck", "cunt", "cock", "dick"]
        var conceptSwear = []
        var entrySwear = []

        for (const swears of swearArray){
            conceptSwear.push(journalConcept.value.search(swears))
            entrySwear.push(journalEntry.value.search(swears))
        }

        const conceptCheck = conceptSwear.includes(0)
        const entryCheck = entrySwear.includes(0)

            
            if (conceptCheck === true || entryCheck === true){
                window.alert("Plz Don't Swear")

            } else{ 
        const newNote = {
            
            entry: journalEntry.value,
            concept: journalConcept.value,
            moodId: journalMood.value,
            instructorId: journalInstructor.value,
            tagId: journalTags.value,
            date: Date.now()
        }
        saveJournalEntry(newNote)
        journalList()
        JournalFormComponent()
    }
    }}
    else {window.alert("Plz Select a Mood")}
}

})

export const JournalFormComponent  = () => {
    getMoods().then(() => {
        const allMoods = useMoods()
    getInstructors().then(() => {
        const allInstructors = useInstructors()
    journalForm.innerHTML =`
        <input type="text" id="journal--concept" placeholder="Concept" />
        <textarea id="journal--entry" placeholder ="Entry"></textarea>
        <select name="mood" id="journal--mood">
        <option value="0">Please select a mood...</option>
        ${
            allMoods.map(
                (mood) => {
                    return `<option value="${ mood.id }">${ mood.label }</option>`
                }
            ).join("")
        }
        </select>
        <select name="Instructor" id="journal--instructor">
        <option value="0">Please select an instructor...</option>
        ${
            allInstructors.map(
                (instructor) => {
                    return `<option value="${ instructor.id }">${ instructor.first_name }</option>`
                }
            ).join("")
        }
        </select>
        <input type="text" id="journal--tags" placeholder="Tags" />
        <button type="button" name="conceptsCovered" id="conceptsCovered">
        Record Journal Entry
    </button>`
})})}