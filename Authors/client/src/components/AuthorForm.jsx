import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Form = () => {
    const [name, setName] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/newAuthor", { name })
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch(err => {
            console.log(err.response)
            setErrors(err.response.data.error.errors)
        })
}

return (
    <div className="container">
        <div className="row">
        <div className="col-12">
            <Link to="/">Home</Link>
            <p className="purple-text">Add a new author:</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} value={name}/>
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
        </div>
    </div>
    )
}

export default Form