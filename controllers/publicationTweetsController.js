const tweets = [
    {
        id: new Date().getMilliseconds(),
        user: "Camilo",
        coment: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum hasido",
    }
]

const listTweets = (request, response) => {
    response.json(tweets);
}

module.exports = {
    listTweets
}