
import express from 'express'
import configViewEngine from '../src/config/viewEngine'
import initWebRoute from '../src/routes/web'
import initAPIRoute from '../src/routes/api'

require('dotenv').config()
const app = express()
const port = process.env.PORT || 6969

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//set up view engine
configViewEngine(app)

//init web route
initWebRoute(app)
initAPIRoute(app)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})