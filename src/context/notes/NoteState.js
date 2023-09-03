import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)


    //get all notes
    const getNotes = async () => {

        //API call
        const response = await fetch(`${host}/api/note/fetchallnotes`, {
            method: 'GET',
            headers: {
                'content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjk5ZWU1YmU2ZmZlZjg0ODBjM2QzIn0sImlhdCI6MTY5MzQyNDE2MX0.0oGuEJ64jTSQAiml5hUy1n9NSNdzn35OevKf3exKA4o'
            }
    
        });
        const json = await response.json()
        console.log(json)
    }

    // Add a Note
    const addNote = async (title, description, tag) => {

        //API call
        const response = await fetch(`${host}/api/note/addnote`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjk5ZWU1YmU2ZmZlZjg0ODBjM2QzIn0sImlhdCI6MTY5MzQyNDE2MX0.0oGuEJ64jTSQAiml5hUy1n9NSNdzn35OevKf3exKA4o'
            },
            body: JSON.stringify({ title, description, tag })
        });
        // const json = response.json();

        console.log("Adding a new note")

        const note = {
            "_id": "61322f119553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a0664",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = (id) => {
        console.log("deleting the note with the note id" + id)
        const newNotes = notes.filter((notes) => { return notes._id !== id })
        setNotes(newNotes)

    }
    // Edit a Note
    const editNote = async (id, title, tag, description) => {
        //API call
        const response = await fetch(`${host}/api/note/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlZjk5ZWU1YmU2ZmZlZjg0ODBjM2QzIn0sImlhdCI6MTY5MzQyNDE2MX0.0oGuEJ64jTSQAiml5hUy1n9NSNdzn35OevKf3exKA4o'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        //Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id == id) {
                element.title = title;
                element.description = description
                element.tag = tag
            }
        }

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;