import Author from "../models/Author.js";
import Company from "../models/Company.js"

async function is_Active(req, res, next) {
    req.body.user_id = req.user.id
    console.log(req.body.user_id)
    try {
        const author = await Author.findOne({ user_id: req.body.user_id });
        if (author && author.active) {
            console.log("author active")
            return next();
        }

        const company = await Company.findOne({ user_id: req.body.user_id });
        if (company && company.active) {
            console.log("company active")
            return next();
        }

        return res.status(401).json({ message: "El autor/editorial no está activo" })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error en el servidor' });
    }
};

export default is_Active
