import { useSelector } from "react-redux";
import '../App.css'

function DataPage() {
const {name, age} = useSelector(state => state.formReducer)

console.log(name, age);

    return (
        <div className="Data">
            <p className="one">Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
}

export default DataPage;