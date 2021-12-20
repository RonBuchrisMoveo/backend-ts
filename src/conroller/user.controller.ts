import { Request, Response } from 'express'
import { IUser } from '../interface/user.interface'
import { query, add, remove, update } from '../services/user.service'


//GET LIST
export async function getUsers(req: Request, res: Response): Promise<void> {
    try {
        console.log(`queryParams`, req)
        const users: IUser[] = await query()
        res.json(users);
    } catch (err) {
        res.status(500).send({ err: 'Failed to get user' })
    }
}

// POST (add user)
export async function addUser(req:Request, res:Response) {
    try {
      const user:IUser = req.body;
      const addedUser = await add(user)
      res.json(addedUser)
    } catch (err) {
      res.status(500).send({ err: 'Failed to add user' })
    }
  }

//DELETE(Remove user)
export async function removeUser(req: Request, res: Response): Promise<void> {
    try {
        const userId: string = req.params.id;
        const removedId: string = await remove(userId)
        res.send(removedId)
    } catch (err) {
        res.status(500).send({ err: 'Failed to remove user' })
    }
}

// PUT (Update workspace)
export async function updateUser(req:Request, res:Response): Promise<void> {
    try {
      const user = req.body;
      const updatedUser = await update(user)
      res.json(updatedUser)
    } catch (err) {
      res.status(500).send({ err: 'Failed to update workspace' })
  
    }
  }