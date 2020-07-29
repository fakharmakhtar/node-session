const router = require('express').Router();
const axios = require('axios');
async function getFilms() {
    const response = await axios.get('https://swapi.dev/api/films/');
    return response.data.results;
}
router.get('/films', (req, res) => {
    // axios.get('https://swapi.dev/api/films/').then(response => res.send(response.data.results));
    getFilms().then(films => res.send(films));
})
router.get('/films/search', (req, res) => {
    axios.get('https://swapi.dev/api/films/').then(response => {
        const films = response.data.results;
        const f = films.filter(e => e.title == req.query.q);
        if (!f.length) {
            res.status(404).send('Film not found');
        } else {
            res.send(f);
        }

    });
})
module.exports = router;