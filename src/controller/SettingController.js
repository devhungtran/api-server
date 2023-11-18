const { SettingModel } = require("../model/SettingModel");







const getSetting =  async(req,res) =>{
    try {
        

        // const newSystem = new SettingModel({
        //     app_name: "Spa Beauty",
        //     banner: "/uploads/img/banner.jpg",
        //     facebook_url: "https://facebook.com/devhungtran",
        //     email_contact: "devhungtran@gmail.com",
        //     phone_contact: "0333433969",
    
        // })

        const getSetting = await SettingModel.find({})

        res.status(200).json({
            status: true,
            message:  "get data sucesssfully",
            data: getSetting
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message:  "get data failed",
            
        })
    }
}




const updateSetting = async (req,res) =>{
    try {
        const {newAppName, newBanner, newFacebook_url, newEmail_contact, newPhone_contact } = req.body
        const getSetting = await SettingModel.find({})
        if(!newAppName){
            newAppName =  getSetting.app_name
        }
        if(!newBanner){
            newBanner =  getSetting.banner
        }
        if(!newFacebook_url){
            newFacebook_url =  getSetting.facebook_url
        }
        if(!newPhone_contact){
            newPhone_contact =  getSetting.phone_contact
        }


        const newUpdate = {
            app_name: newAppName,
            banner: newBanner,
            facebook_url: newFacebook_url,
            email_contact: newEmail_contact,
            phone_contact: newPhone_contact
        }

        const update = await SettingModel.findOneAndUpdate({
        }, newUpdate, {new: true})
        if(!update){
            return res.json(500).json({
                status: false,
                message: "update failed !!!"
            })
            
        }
        res.json(200).json({
            status: false,
            message: "update successfully !!!"
        })
    } catch (error) {
        res.json(500).json({
            status: false,
            message: "update failed"
        })
    }
}




module.exports = {
    getSetting, updateSetting
}

