const tweetsData = require('../data/tweetsData');

const listTweets = (request, response) => {
    response.json(tweetsData); // Retornar la lista de tweets
};

// Publicar un nuevo tweet
const postTweet = (request, response) => {
    const { user, mensaje } = request.body;
    const newTweet = {
        id: new Date().getTime(),
        user,
        mensaje
    };

    tweetsData.push(newTweet); // Agregar el nuevo tweet a la lista
    response.status(201).json(newTweet);
};

module.exports = {
    listTweets,
    postTweet
};
