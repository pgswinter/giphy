import fs from 'fs';
import path from 'path';

class GiphyLib {
    static getAllFavourite(req, res) {
        try {
            const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/index.json')));
            return res.status(200).send({
                data: data.favourite
            })
        } catch (error) {
            return res.status(500).send({
                message: 'Server can not process!',
                error: `${error}`
            })
        }
    }
    static insertFavourite(req, res) {
        const {
            favourite_item
        } = req.body;
        try {
            const currentData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/index.json')))
            const { favourite } = currentData;
            const checkExisted = favourite.filter(item => item.id === favourite_item.id)
            if (checkExisted.length === 0) {
                favourite.push(favourite_item)
                const newData = {
                    favourite
                }
                try {
                    fs.writeFileSync(path.join(__dirname, '../data/index.json'), JSON.stringify(newData, null, 4))
                    return res.status(200).send({
                        message: 'insert favourite successfully',
                    });
                } catch (error) {
                    return res.status(500).send({
                        message: 'Server can not process!',
                        error: `${error}`
                    })
                }
            } else {
                const newFavourite = favourite.filter(item => item.id !== checkExisted[0].id);
                const newData = {
                    favourite: newFavourite
                }
                try {
                    fs.writeFileSync(path.join(__dirname, '../data/index.json'), JSON.stringify(newData, null, 4))
                    return res.status(200).send({
                        message: 'insert favourite successfully',
                    });
                } catch (error) {
                    return res.status(500).send({
                        message: 'Server can not process!',
                        error: `${error}`
                    })
                }
            }
        } catch (error) {
            return res.status(500).send({
                message: 'Server can not process!',
                error: `${error}`
            })
        }
    }
}

export default GiphyLib