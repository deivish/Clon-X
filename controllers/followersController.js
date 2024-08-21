const followers = [
    {
        id: new Date().getMilliseconds(),
        user: "Camilo",
    }
]

const listFollowers = (request, response) => {
    response.json(followers);
}

module.exports = {
    listFollowers
}