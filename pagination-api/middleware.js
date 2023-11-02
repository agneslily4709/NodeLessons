export const paginate = (data) => {
        return (req,res,next) =>{
                const page = parseInt(req.query.page)
                const limit = parseInt(req.query.limit)
                const start  = (page-1)*limit
                const end= page * limit
                let result = {}
                if(end<data.length){
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
                result.result = data.slice(start,end)
                res.paginatedResults = result
                next()       
        }
}