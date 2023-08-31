import React from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        "name": "harry",
        "class": "5b"
    }
    return (
        <NoteContext.provider value={state}>
            {props.children}
        </NoteContext.provider>
    )
}

export default NoteState;