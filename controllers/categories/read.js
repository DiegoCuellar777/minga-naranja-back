let read = (req, res, next)=>res.status(200).render('index', { 
    title: 'CATEGORIES',
    subtitle: "Endpoints of categories"
})


export default read 