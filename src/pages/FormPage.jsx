import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormDataAction } from "../redux/formReducer";
import '../App.css'

function FormPage() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const dispatch = useDispatch()

    const handleSave = () => {
        if (name !== "" && age !== "") {
            dispatch(saveFormDataAction({name, age}))
        }
        else {
            alert("Fill the form!!")
        }
        
    }

    return (
        <div className="form">
            <h1>Form</h1>
            <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Enter name..." />
            <input className="inp" onChange={e => setAge(e.target.value)} value={age} type="number" placeholder="Enter age..." />
            <button onClick={handleSave}>Save</button>
        </div>
    );
}

export default FormPage;