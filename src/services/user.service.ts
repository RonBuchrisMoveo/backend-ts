import {getCollection} from '../services/db.service'
import { IUser } from "../interface/user.interface"
const ObjectId = require('mongodb').ObjectId

export async function query():Promise<IUser[]> {
    const collection = await getCollection('user')
    const users :IUser[] = await collection.find({}).toArray()
    console.log(`users`, users)
    return users
}

export async function add(user:IUser):Promise<IUser> {
    try {
        const collection = await getCollection('user')
        const addedUser = await collection.insertOne(user)
        return addedUser
    } catch (err) {
        throw err
    }
}

export async function remove(userId:string):Promise<string> {
    try {
        const collection = await getCollection('user')
        await collection.deleteOne({ '_id': ObjectId(userId) })
        return userId
    } catch (err) {
        throw err
    }
}

export async function update(user:IUser):Promise<IUser> {
    var id:string = ObjectId(user._id)
    delete user._id
    try {
        const collection = await getCollection('user')
        await collection.updateOne({ "_id": id }, { $set: { ...user } })
        user._id = id
        return user
    } catch (err) {
        throw err
    }
}