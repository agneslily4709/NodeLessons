import express from "express"
import { getAllUsers, getPostsByPageLimit, getUsersByPageLimit } from "./controller.js"
import { paginate } from "./middleware.js"
import { posts, users } from "./data.js"

const router = express.Router()

router.get("/getAllUsers",getAllUsers)
router.get("/getUsers",paginate(users),getUsersByPageLimit)
router.get("/getPosts",paginate(posts),getPostsByPageLimit)

export default router