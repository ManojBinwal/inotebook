import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';



const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setNotes } = context
    return (
        <div className=" row my-3">
            <h1>your Notes</h1>
            {notes.map((notes) => {
                return <NoteItem notes={notes} />;
            })}
        </div>

    )
}

export default Notes