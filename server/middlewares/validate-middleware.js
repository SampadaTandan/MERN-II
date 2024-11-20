const validate = (schema) => async(req, res, next) =>{
    try{
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    }catch (err) {
        // res.status(400).json({message: error.message})
        const status= 422;
        const message = "Fill the input properly";
        

        const error = {
            status,
            message,
            
        }
        next(error)
    }
}
module.exports = validate;