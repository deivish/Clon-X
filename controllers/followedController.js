const followed = [
    {
        id: new Date().getMilliseconds(),
        user: "Andres",
    }
]

const listFollowed = (request, response) => {
    response.json(followed);
}

module.exports = {
    listFollowed
}