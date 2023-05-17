import Manga from '../../models/Manga.js';
import Author from '../../models/Author.js';

const getMangas = async (req, res, next) => {
    try {
        const authorId = req.params.author_id;
        const { id } = req.user;
        const { title, author_id, category_id, order, limit, page } = req.query;
        const queries = {};
        const sort = {};
        const pagination = {
            limit: limit ? Number(limit) : 6,
            page: page ? Number(page) : 1
        };
        console.log(id)

        if (author_id) {
            queries.author_id = author_id;
        }
        
        if (title) {
            queries.title = new RegExp(title.trim(), 'i');
        }

        if (category_id) {
            queries.category_id = category_id.split(',');
        }

        if (order) {
            sort.title = order;
        }

        const author = await Author.findOne({ user_id: id });

        if (author) {
            const mangas = await Manga
                .find(queries)
                .sort(sort)
                .skip((pagination.page - 1) * pagination.limit)
                .limit(pagination.limit);

            return res.status(200).json({
                status: 200,
                response: mangas
            });
        } else {
            return res.status(404).json({
                status: 404,
                message: 'Author not found'
            });
        }
    } catch (error) {
        next(error);
    }
};

export default getMangas;
