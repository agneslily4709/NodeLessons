import {users} from "./data.js"
export const getAllUsers = (req,res) => {
        res.json(users)
}

export const getUsersByPageLimit = (req,res) => {
        const page = req.query.page
        const limit = req.query.limit
        console.log(page,limit)
        const start  = (page-1)*limit
        const end= page * limit
        const result = users.slice(start,end)
        res.json(result)
}