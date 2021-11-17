const { httpGet } = require('./mock-http-interface')

const getArnieQuotes = async (urls) => {
    return Promise.all(
        urls.map(async (url) => {
            try {
                const response = await httpGet(url)
                const resKey =
                    response.status === 200 ? 'Arnie Quote' : 'FAILURE'
                return { [resKey]: JSON.parse(response.body).message }
            } catch (err) {
                console.log('Should handle error here', err)
            }
        })
    )
}

module.exports = {
    getArnieQuotes,
}
