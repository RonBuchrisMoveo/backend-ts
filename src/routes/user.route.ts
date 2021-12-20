import { addUser, getUsers, removeUser, updateUser } from '../conroller/user.controller'
import express from 'express'

export const router = express.Router()

router.get('/', getUsers)
router.post('/', addUser)
router.put('/:id', updateUser)
router.delete('/:id', removeUser)

// module.exports = router