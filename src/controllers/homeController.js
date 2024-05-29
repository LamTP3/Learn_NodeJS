
const getHomePage = (req, res) => {
    return res.send('Hello World !')
}

const getSamplePage = (req, res) => {
    return res.render('sample.ejs')
}
module.exports = {
    getHomePage,
    getSamplePage
}