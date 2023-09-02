import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "64gf0f74a24cd5646ea97e86b",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Game Day",
            "description": "please wake up early today for games",
            "tag": "personal",
            "date": "2023-08-31T20:25:46.114Z",
            "__v": 0
        },
        {
            "_id": "64f23208a66722cefcgac6a00c",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-01T18:48:40.549Z",
            "__v": 0
        },
        {
            "_id": "64f306bf1fg5d38c1b36b5f52a",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:15.866Z",
            "__v": 0
        },
        {
            "_id": "64f306c01f5g38c1bg36b5f52c",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:16.729Z",
            "__v": 0
        },
        {
            "_id": "64f306c11f53a8c1gb36b5f52e",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:17.205Z",
            "__v": 0
        },
        {
            "_id": "64f306c11fs53g8cjd1b36b5f530",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:17.657Z",
            "__v": 0
        },
        {
            "_id": "64f30g6c21f538c1dfgb36b5f532",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:18.082Z",
            "__v": 0
        },
        {
            "_id": "64f306gc21f538c1fdgb36b5f534",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:18.663Z",
            "__v": 0
        },
        {
            "_id": "64f306c3g1f538c1b3dfgs6b5f536",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:19.013Z",
            "__v": 0
        },
        {
            "_id": "64f306cg31f538sgc1b36b5f538",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:19.918Z",
            "__v": 0
        },
        {
            "_id": "64f306c41f538cdsg1b36b5f53a",
            "user": "64ef99ee5be6ffef8480c3d3",
            "title": "Sale Today",
            "description": "get upto 90% off on selected brands",
            "tag": "business",
            "date": "2023-09-02T09:56:20.590Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;