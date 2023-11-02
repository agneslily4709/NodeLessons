import {users} from "./data.js"
export const getAllUsers = (req,res) => {
        res.json(users)
}

export const getUsersByPageLimit = (req,res) => {
        res.json(res.paginatedResults)
}
export const getPostsByPageLimit = (req,res) => {
        res.json(res.paginatedResults)
}