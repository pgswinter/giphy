import GiphyLib from '../controllers';

export default (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the Giphy API!',
    }));
    app.get('/api/favourite', GiphyLib.getAllFavourite);
    app.post('/api/insert/favourite', GiphyLib.insertFavourite);
}