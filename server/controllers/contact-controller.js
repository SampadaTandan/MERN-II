const Contact = require("../models/contact-model");
const contactForm = async (req,res)=>{
    try{
        const response = req.body;
        await Contact.create(response);
        res.status(201).json({message: "Contact created successfully"});
    }catch(error){
        return res.status(500).json({message: "message is not delivered"})
    }
}
module.exports = contactForm;