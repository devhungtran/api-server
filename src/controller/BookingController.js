const { BookingModel } = require("../model/BookingModel")




const getAllBooking =  async(req,res) =>{
    try {
        const allBooking = await BookingModel.find({})

        res.status(200).json({
            status: true,
            message: "Get all booking successfully !!!",
            data: allBooking
        })

    
    } catch (error) {
        console.log(error);
    }
}


const createBooking =  async (req,res) =>{
    try {
        
    } catch (error) {
        console.log(error);
    }
}







module.exports = {
    getAllBooking,createBooking
}




