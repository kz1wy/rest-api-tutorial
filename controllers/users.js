import { v4 as uuidv4 } from 'uuid';
let users = [
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

export const createUser = (req, res) => {
    const user = req.body;

    const userId = uuidv4();
    const userWithId = { ...user, id: userId};
    users.push(userWithId);
    res.send(`User name ${user.lastName} is added to the Users database!`)
}

export const getUserById =  (req,res) =>{
    const {id} = req.params;

    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser);

}

export const getUsers = (req, res) =>{
    console.log(users);
    res.send(users);
}

export const deleteUser =  (req,res) =>{
    const {id} = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User ${id} has been deleted`);
}

export const patchUser = (req,res) =>{
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    
    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;

    if(lastName) user.lastName = lastName;

    if(age) user.age = age;
    //message
    res.send(`User ${id} has been updated`);
}