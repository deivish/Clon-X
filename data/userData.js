const userData = [
    {
        id: 1,
        name: "Andres Camilo Betancur",
        user: "Camilo19",
        gmail: "camilo@gmail.com",
        password: "87367bklñ00", 
        followers: [
            { id: 2, user: "Maria25" }, 
            { id: 3, user: "JuanCarlos" } 
        ],
        followed: [
            { id: 3, user: "JuanCarlos" } 
        ]
    },
    {
        id: 2,
        name: "Maria Gonzalez",
        user: "Maria25",
        gmail: "maria25@gmail.com",
        password: "password123",
        followers: [],
        followed: [
            { id: 1, user: "Camilo19" } 
        ]
    },
    {
        id: 3,
        name: "Juan Carlos Rodriguez",
        user: "JuanCarlos",
        gmail: "juancarlos@gmail.com",
        password: "securepass456",
        followers: [
            { id: 1, user: "Camilo19" } 
        ],
        followed: [
            { id: 1, user: "Camilo19" } 
        ]
    }
];

module.exports = userData;