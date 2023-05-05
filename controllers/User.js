const User = require("../models/User")

exports.getoneUser = async (req, res, next) =>{
    try {
        const userId = req.params.userId
        const UserData = await User.findById(userId)
        
        res.status(201).json({
            message: "User Data",
            data: UserData
        })

    }catch(err){
        next(err)
    }
}

exports.allUserData = async (req, res, next) =>{
    try {
        const UserDatas = await User.find()
        
        res.status(201).json({
            message: "All User Data",
            maxnumber: UserDatas.length,
            data: UserDatas
        })

    }catch(err){
        next(err)
    }
}

exports.deleteoneUser = async (req, res, next) =>{
    try {
        const userId = req.params.userId
        const UserDatadelete = await User.findByIdAndDelete(userId)
        
        res.status(200).json({
            message: "User Data have been deleted",
            data: UserDatadelete
        })

    }catch(err){
        next(err)
    }
}

exports.updateoneUser = async (req, res, next) =>{
    try {
        const userId = req.params.userId
        const UserDataupdate= await User.findByIdAndUpdate(userId,req.body,{
            new: true
        })
        
        res.status(201).json({
            message: "User Data have been Updated",
            data: UserDataupdate
        })

    }catch(err){
        next(err)
    }
}


exports.updateLastDepo = async (req,res, next) => {
    try{
        const id = req.params.id
        const {lastDeposit} = req.body
      if(!lastDeposit){
        res.status(400).json({
            message: "wrong input"
        })
      }else{
        const lastDepo = await User.findByIdAndUpdate(id,{lastDeposit:lastDeposit},{
            new: true
        })
        res.status(201).json({
        message:"Updated successfully",
        data:lastDepo
     })
      }
    }catch(e){
       next(e)
    }
}

exports.updateTotalDeposit = async (req,res, next) => {
    try{
        const id = req.params.id
        const {totalDeposit} = req.body
      if(!totalDeposit){
        res.status(400).json({
            message: "wrong input"
        })
      }else{
        const totalDepo = await User.findByIdAndUpdate(id,{totalDeposit:totalDeposit},{
            new: true
        })
        res.status(201).json({
        message:"Updated successfully",
        data:totalDepo
     })
      }
    }catch(e){
       next(e)
    }
}

exports.updateAccountBalance = async (req,res, next) => {
    try{
        const id = req.params.id
        const {accountBalance} = req.body
      if(!accountBalance){
        res.status(400).json({
            message: "wrong input"
        })
      }else{
        const totalDepo = await User.findByIdAndUpdate(id,{accountBalance:accountBalance},{
            new: true
        })
        res.status(201).json({
        message:"Updated successfully",
        data:totalDepo
     })
      }
    }catch(e){
       next(e)
    }
}

exports.updateStartUpDeposit = async (req,res, next) => {
    try{
        const id = req.params.id
        const {startUpDeposit} = req.body
      if(!startUpDeposit){
        res.status(400).json({
            message: "wrong input"
        })
      }else{
        const totalDepo = await User.findByIdAndUpdate(id,{startUpDeposit:startUpDeposit},{
            new: true
        })
        res.status(201).json({
        message:"Updated successfully",
        data:totalDepo
     })
      }
    }catch(e){
       next(e)
    }
}
exports.updateTotalEarned = async (req,res, next) => {
    try{
        const id = req.params.id
        const {totalEarned} = req.body
      if(!totalEarned){
        res.status(400).json({
            message: "wrong input"
        })
      }else{
        const totalDepo = await User.findByIdAndUpdate(id,{totalEarned:totalEarned},{
            new: true
        })
        res.status(201).json({
        message:"Updated successfully",
        data:totalDepo
     })
      }
    }catch(e){
       next(e)
    }
}
