import { useContext } from "react"
import { AuthContext } from "./AuthProvider"
import Firebase_db from "../routes/Firebase_db"

export const useAuth= () => {
    const value = useContext(AuthContext)
    return value
}