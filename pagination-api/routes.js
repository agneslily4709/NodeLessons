import express from "express"
import { getAllUsers, getUsersByPageLimit } from "./controller.js"

const router = express.Router()

router.get("/getAllUsers",getAllUsers)
router.get("/getUsers",getUsersByPageLimit)

export default router