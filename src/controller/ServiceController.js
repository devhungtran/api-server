const { ServiceModel } = require("../model/ServiceModel")

// get all service

const getAllService = async (req,res) =>{
    try {
        const service = await ServiceModel.find({})
        if(service){
            res.status(200).json(
                {
                    status: true,
                    message: "get all service successfully !!!",
                    data: service
                }
            )
        }else{
            res.status(500).json(
                {
                    status: false,
                    message: "get all service failed !!!"
                }
            )
        }

    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                status: false,
                message: "get all service failed !!!"
            }
        )
    }
}



// create service






const deleteService =  async (req,res) =>{
    try {
       
        const code_service = req.params.code_service || req.body.code_service;
        if(!code_service){
            res.status(500).json(
                {
                    status: false,
                    message: "Vui lòng nhập mã sản phẩnm"
                }
            )
            return

        }

        const deleteService = await ServiceModel.findOneAndDelete({
            code_service: code_service
        })
        if(deleteService){
            res.status(200).json(
                {
                    status: true,
                    message: "Xóa sản phẩm thành công"
                }
            )
        }else{
            res.status(500).json(
                {
                    status: false,
                    message: "Mã sản phẩm không tồn tại !!!"
                }
            )
        }
        

    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                status: false,
                message: "Lỗi server !"
            }
        )
    }
}





const findServiceByCode =  async(req,res) => {
    try {
        const code_service = req.params.code_service
        res.status(200).json(
            {
                status: true,
                message: "get service successfully",
                data: service
            }
        )
        const service = await ServiceModel.findOne({
            code_service: code_service
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(
            {
                status: true,
                message: "get service failed",

            }
        )
    }
}








const createService =  async(req,res) =>{
    
    try {
   

        const {code_service,name_service,price,image,description}  = req.body

        // validation

        if(!code_service){
            res.status(500).json(
                {
                    status: false,
                    message: "Vui lòng nhập mã sản phẩnm"
                }
            )
            return

        }
        if(!name_service){
            res.status(500).json(
                {
                    status: false,
                    message: "Vui lòng nhập tên sản phẩn"
                    
                }
            )
            return
        }

        if(!price){
            res.status(500).json(
                {
                    status: false,
                    message: "Vui lòng nhập giá sản phẩm"
                }
            )
            return
        }

    

        
        if(!description){
            res.status(500).json(
                {
                    status: false,
                    message: "Vui lòng nhập mô tả sản phẩm"
                }
                
            )
            return
        }


        
        const validation = await ServiceModel.findOne({
            code_service: code_service
        })
        if(validation){
            res.status(500).json(
                {
                    status: false,
                    message: "Mã sản phẩm đã tồn tại"
                }
            )
            
            return
        }





        
        const service = await ServiceModel.create({
            code_service: code_service,
            name_service: name_service,
            price: price,
            image: {
                image: {
                    img_list: image || [],
                  },
            },
            description: description,
        })


        if(!service){
            res.status(500).json(
                {
                    status: false,
                    message: "failed"
                }
            )
            return
        }else{
            res.status(200).json(
                {
                    status: true,
                    message: "create service successfully",
                    data: service
                }
            )
        }



    } catch (error) {
        res.status(500).json(
            {
                status: false,
                message: error
            }
        )
    }
}







module.exports = {
    getAllService,
    createService,
    deleteService,
    findServiceByCode
}