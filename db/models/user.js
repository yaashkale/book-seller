import dbConnect from '../connection'
import {Schema,model} from 'mongoose'
import { models } from 'mongoose'
const userSchema = new Schema({
    username: {unique: true, required: true, type: String},
    password: {required: true, type: String}
})

const User = models.Users 
export default User