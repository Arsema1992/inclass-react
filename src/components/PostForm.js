import { useState, useContext } from "react"
import { DataContext, DataProvider } from "../contexts/Dataprovider"
export default function PostForm() {
    const[title, setTitle] = useState('')
    const[body,setBody] = useState('')
    const { addPost } = useContext(DataContext)
  async function handleSumbit(e) {
      e.preventDefault()  
      const newPost = await addPost(title, body)
      setTitle('')
      setBody('') 

    }
    
    
    return (
        <form onSubmit={handleSumbit}>
            <div>
            <input 
            type="text" 
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
            </div>
            <div>
            <textarea name="" 
            id="" cols="30" 
            rows="10"
            onChange={(e) => setTitle(e.target.value)}

            ></textarea>
            </div>
            <button>Add Post</button>
 
        </form>
    )
}