const authorize = (req,res,next) => {

    const {user} = req.query; 
    if(user === 'jhon'){
        req.user = {name:'jhon', id:3}
        next()
    } else{
        res.status(401).send('Unauthorized');
    }
// console.log('authorized..')
// next();
}

module.exports = authorize;

//authorization dummy we use the object destruction to access the properties of the user so 
//we use const {user} that is the way where we can access the properties of the user