import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    {
        firstName: "Ngo",
        lastName: "Hue",
        age: 20
    },
    {
        firstName: "Anh",
        lastName: "Mai",
        age: 20
    }
]

router.get('/',(req, res) =>{
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    const userId = uuidv4();
    const userWithId = { ...user, id: userId}
    users.push(userWithId);
    res.send(`User name ${user.lastName} is added to the Users database!`)
});

export default router;