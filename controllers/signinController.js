const signinUser = [
    {
        id: new Date().getMilliseconds(),
        user: "Santiago",
        gmail: "Santiago@gmail.com",
        password: "87367b3hb"
    }
]

const listUsersSingin = (request, response) => {
    response.json(signinUser);
}

module.exports = {
    listUsersSingin
}