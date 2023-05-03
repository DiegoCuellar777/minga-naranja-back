const validator = (schema) => [
    (req, res, next) => {
        console.log('Este es req body',req.body);
        console.log('Esta es el shcema',schema._ids._byKey);
        const validation = schema.validate(req.body, { abortEarly: false })

        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(err => err.message)
            })
        }

        return next()
    }
]

export default validator