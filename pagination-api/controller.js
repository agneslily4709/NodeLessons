import {users} from "./data.js"
export const getAllUsers = (req,res) => {
        res.json(users)
}

export const getUsersByPageLimit = (req,res) => {
        const page = req.query.page
        const limit = req.query.limit
        const start  = (page-1)*limit
        const end= page * limit
        let result = {}
        if(end<users.length){
                result.next = {
                        page:page+1,
                        limit:limit
                }
        }
        if(start>0){
                result.prev = {
                        page:page-1,
                        limit:limit
                }
        }
        result.result = users.slice(start,end)
        res.json(result)
}