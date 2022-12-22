import express from "express";

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
    users.push(user);
    res.send(`User name ${user.firstName} is added to the Users database!`)
});

export default router;