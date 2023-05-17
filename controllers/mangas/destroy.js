import Manga from '../../models/Manga.js';
import Chapter from '../../models/Chapter.js';

const destroyManga = async (req, res, next) => {
    const mangaId = req.params.id

    try {
        const destroyedChapters = await Chapter.deleteMany({ manga_id: mangaId })

        if (destroyedChapters.deletedCount === 0) {
            return res.status(404).json({ response: 'No chapters found for the manga' })
        }

        try {
            const destroyedManga = await Manga.deleteOne({ _id: mangaId })

            if (destroyedManga.deletedCount === 0) {
                return res.status(404).json({ response: 'Manga not found' })
            }

            return res.status(200).json({ response: 'Manga and chapters successfully deleted' })
        } catch (error) {
            return res.status(500).json({ response: 'Error deleting manga', error: error.message })
        }
    } catch (error) {
        next(error)
    }
}

export default destroyManga
