import React from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        "name": "harry",
        "class": "5b"
    }
    return (
        <NoteState.provider value={state}>
            {props.children}
        </NoteState.provider>
    )
}

export default NoteState;