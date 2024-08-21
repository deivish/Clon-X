const register = [
    {
        id: new Date().getMilliseconds(),
        user: "Camilo",
        gmail: "camilo@gmail.com",
        password: "87367b 3hb j"
    }
]

const listRegister = (request, response) => {
    response.json(register);
}

module.exports = {
    listRegister
}