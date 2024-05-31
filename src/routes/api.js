import express from 'express'
import APIControler from '../controller/APIController'

let router = express.Router();
const initAPIRoute = (app) => {

    router.get('/users', APIControler.getAllUser)
    router.post('/create-user', APIControler.createNewUser);
    router.put('/update-user', APIControler.updateUser);
    router.delete('/delete-user/:id', APIControler.deleteUser);


    app.use('/api/v1/', router)
}

module.exports = initAPIRoute