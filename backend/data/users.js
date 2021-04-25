import bcrypt from 'bcryptjs'


const users=[
    {
        name:'Admin User',
        email:'admin@exapmle.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Rohit',
        email:'rohit@exapmle.com',
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:'sharma',
        email:'sharma@exapmle.com',
        password:bcrypt.hashSync('123456',10),
    },
]

export  default users 