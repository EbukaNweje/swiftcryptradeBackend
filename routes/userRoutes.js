const express = require("express")
const ReqAccount = require("../controllers/Account")
const UserData = require("../controllers/User")
const ContactsData = require("../controllers/Contacts")

const Routers = express.Router()

Routers.route("/requestaccount/:userId").post(ReqAccount.ResAccount)
Routers.route("/userdata/:userId").get(UserData.getoneUser).delete(UserData.deleteoneUser).patch(UserData.updateoneUser)
Routers.route("/alluserdata").get(UserData.allUserData)
Routers.route('/lastDeposit/:id').patch(UserData.updateLastDepo)
Routers.route('/totalDeposit/:id').patch(UserData.updateTotalDeposit)
Routers.route('/accountBalance/:id').patch(UserData.updateAccountBalance)
Routers.route('/startUpDeposit/:id').patch(UserData.updateStartUpDeposit)
Routers.route('/totalEarned/:id').patch(UserData.updateTotalEarned)
Routers.route('/contact').post(ContactsData.CreateContact)



module.exports = Routers
