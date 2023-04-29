/* import createHttpError from "http-errors" */
import Author from "../../models/Author.js"

let create = async (req, res, next) => {
    try {
        let one = new Author(req.body)
        await one.save() // llama a la función save() para guardar el autor en la base de datos
        return res.status(201).json({
            email: one.email,
            author: `${one.name} ${one.last_name}`,
            success: true,
            createdAt: one.createdAt // accede a la propiedad createdAt después de llamar a la función save()
        })
    } catch (error) {
        next(error)
    }
}

export default create

/*
import Author from "../../models/Author.js";

const create = async (req, res, next) => {
    try {
        const newAuthor = new Author({
            name: req.body.name,
            description: req.body.description,
            active: true, // Hasta que se configure el panel de admin, ACTIVE debe estar en true
        });
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (error) {
        next(error);
    }
};

export default create; 
*/