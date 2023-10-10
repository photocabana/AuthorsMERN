import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"

const Update = () => {
    const { id } = useParams()
    const [authorName, setAuthorName] = useState("")
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [authorNotFoundError, setAuthorNotFoundError] = useState("")
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/oneAuthor/${id}`)
        .then((response) => {
            console.log(response)
            setAuthorName(response.data.author.name)
        })
        .catch((err) => {
            console.log(err)
            setAuthorNotFoundError(`Author not found using that ID`)
        })
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
    
        axios
            .patch(`http://localhost:8000/api/updateAuthor/${id}`, { name: authorName })
            .then((response) => {
                console.log(response)
                navigate("/")
            })
            .catch((err) => {
                console.log(err.response.data.error.errors)
                setErrors(err.response.data.error.errors)
            })
        }

    return (
        <div>
            <form onSubmit={submitHandler}>
                {authorNotFoundError ? (
                    <h2>{authorNotFoundError} <Link to="/new">Click here to add author</Link></h2>) : null}
                <Link to="/">Home</Link>
                <p className="purple-text">Edit this author:</p>
                <div className="form-group">
                    <label htmlFor="name">Name:  </label>
                    <input type="text" name="name" value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
                    {errors.name ? <p>{errors.name.message}</p> : null}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Update
