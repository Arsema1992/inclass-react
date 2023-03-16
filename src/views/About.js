import { useContext } from "react"
import { DataContext } from "../contexts/Dataprovider"

export default function About() {
    const { title } = useContext(DataContext)
    


    return(
        <div>
        <h1>About</h1>

        { title }
        </div>
    )
}