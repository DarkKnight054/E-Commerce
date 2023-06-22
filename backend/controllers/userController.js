const User = require('../dummyData/user');



const getAllUser = async (req,res)=>{
    try{
        res.status(200).send(`User List`);
    }
    catch(err){
        res.status(201).send(err.message);
    }
}
const loginUser = async (req,res)=>{
    try{
        const {email, password} = req.body;
        let userFound = false;
        User.forEach((user)=>{
            if(user.email===email && user.password === password)
            {
                const userString = JSON.stringify(user);
                res.status(200).send(`${userString}`);
                userFound = true;
                return ;
            }
        });
        if(!userFound)
        {
            res.status(200).send('Invalid Email Address or Password');
        }
    }
    catch (err)
    {
        res.status(201).send(err.message);
    }
}


const registerUser = async(req,res)=>{
    try
    {
        const {name,email,location,password,contactNo} = req.body;
        const userCredential = {
            'name': name,
            'email': email,
            'password': password,
            'location': location,
            'contactNo': contactNo,
        }
        for (let x in userCredential)
        {
            console.log(x, userCredential[x]);
        }
        res.status(200).send(userCredential);
        res.end();
    }
    catch(err){
        res.status(201).send(err.message);
        res.end();
    }
}


module.exports = {
    getAllUser,
    loginUser,
    registerUser,
};