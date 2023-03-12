import dbConnect from "@/db/connection";
import User from "@/db/models/user";
export default async function handler(req, res) {
    await dbConnect()
   console.log(req.body);
   const {username,password} = req.body;
   const newUser = User.create(req.body).then(()=>{
    res.send({status: 'okay'});
   }).catch((err)=>{
    res.send({status: 'not okay'})
    console.log(err);
   })
  }
  