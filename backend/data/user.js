import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'vignesh',
    email: 'v@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'prasad',
    email: 'p@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users