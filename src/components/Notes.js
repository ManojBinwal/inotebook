import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';



const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addNote } = context;
    return (
        <>
            <AddNote />
            <div className=" row my-3">
                <h1>your Notes</h1>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} notes={notes} />;
                })}
            </div>
        </>
    )
}

export default Notes