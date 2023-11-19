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

// const findBookingBy Usserr
const findBookingByUser = async (req, res) => {
    try {
        const user_booking = req.params.user_booking;

        const find = await BookingModel.findOne({
            user_booking: user_booking
        });

        if (!find) {
            return res.status(200).json({
                status: true,
                message: "Người dùng chưa đặt lịch",
            });
        }

        return res.status(200).json({
            status: true,
            message: "Lấy thông tin đặt lịch của người dùng thành công",
            data: find
        });

    } catch (error) {
        console.error('Error in findBookingByUser:', error);
        return res.status(500).json({
            status: false,
            message: "Lỗi server nội bộ"
        });
    }
};









const generateCodeBooking = () =>{
    const length = 8
    let code = ""
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        code += char.charAt(randomIndex);
    }

    return code
} 


const createBooking =  async (req,res) =>{


        try {
            const {code_service, booking_time} =  req.body
        const money = 0


        const time = new Date(booking_time)
  
        if (!time) {
            res.status(400).json({
                status: false,
                message: "Thời gian đặt không hợp lệ"
            });
            return;
        }
        const currentDate = new Date();

        if (time <= currentDate) {
            res.status(422).json({
                status: false,
                message: "Vui lòng đặt thời gian sắp tới"
            });
            return;
        }


        const user  = req.user
        console.log(user);
        const randomCode = generateCodeBooking()
        const bookingCreate = new BookingModel({
            booking_code: randomCode,
            user_booking     : user.username,
            code_service: code_service,
            booking_time: time,
            totalMoney: money
            
        })
        const saveBooking = await bookingCreate.save()

        res.status(200).json({
            status: true,
            message: "booking successfully !!!",
            data : bookingCreate
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: true,
            message: "booking failed !!!"
        })

    }
}






// luot lich sắp tới

const getCommingBooking = async (req,res) =>{
    try {
        
        const data = await BookingModel.find({
            status: "wait"
        })

        const sortData = data.sort((a,b ) =>{
            a.booking_time - b.booking_time
        })
      

        res.status(200).json({
            status: true,
            message: "get successfully !!!",
            data : sortData
        })

    } catch (error) {
        console.log(error);
    }
}





const cancelBooking  =  async (req,res) =>{
    try {
        
       const booking_code = req.params.booking_code || req.body.booking_code

       console.log(booking_code);

        if(!booking_code){
            res.status(500).json({
                status: false,
                message: "Đã xảy ra lỗi"
            })
            return
        }

       const cancelBooking = await BookingModel.findOneAndUpdate(
            { booking_code: booking_code },
            { status: "cancelled" },
            { new: true }
        )

        if(!cancelBooking){
            res.status(500).json({
                status: false,
                message: "Đã xảy ra lỗi"
            })
            return
        }
        
        res.status(200).json({
            status: true,
            message: "Hủy thành công"
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: false,
            message: "Đã xảy ra lỗi"
        })
    }
}







module.exports = {
    getAllBooking,createBooking,cancelBooking,getCommingBooking,findBookingByUser
}




