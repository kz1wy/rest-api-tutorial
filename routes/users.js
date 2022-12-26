import express from "express";
import { createUser,getUserById,getUsers,deleteUser,patchUser } from "../controllers/users.js";
const router = express.Router();


//get all user
router.get('/',getUsers);

//create auto id with uuidv4
router.post('/', createUser);

//get user by id
router.get('/:id',getUserById);

//delete user by id
router.delete('/:id',deleteUser);

//patch/update user details
router.patch('/:id', patchUser);

export default router;