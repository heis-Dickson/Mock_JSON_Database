const jwt = require('jsonwebtoken');
const secretkey = 'your_secret_key';

exports.login = async (req, res) => {
    const { username, password } = req.body;

   try{
       //generate a json web token
       const token = jwt.sign({id: 'user1'}, secretkey,{expiresIn: '5m'});

        //create a cookie and stuff the jsonwebtoken inside of it 
        res.cookie('jwt', token, {maxAge: 5 * 60 * 1000, httponly: true} );
        
        //send the token as a response
        res.status(200).json({message: 'Login successful' , token: token});

   } catch(error){
        res.status(500).json({message: error.message });

   }





}