import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

export const protect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try{
        token=req.headers.authorization.split(' ')[1]
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        
        //sorting user id from jwt token

        req.user=await User.findById(decoded.id).select('-password')
      

    }catch(error){
        console.error(error)
        res.status(401)
        throw new Error("Not autherized, token failed")
    }
  }
  if (!token) {
    res.status(401)
    throw new Error('Not authorized,  no token')
  }
 next()
})


export const admin=(req,res,next)=>{
  if(req.user && req.user.isAdmin){
    next()
  }else{
    res.status(401)
    throw new Error('NOt authorized as an admin')
  }
}