const jwt = require('jsonwebtoken');

const checkAuthenticationMDW = async (req, res, next) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldmh1bmd0cmFuIiwiZW1haWwiOiJkZXZodW5ndHJhbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDAyOTc4OTgsImV4cCI6MTcwMjg4OTg5OH0.ZaR7aJloulivv_VDuXZin2eiWyAw_nZJxPG7fwSwfKo"

    if (!token) {
      return res.status(401).json({ message: 'Vui lòng đăng nhập' });
    }

    
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();

    } catch (error) {
        res.status(500).json({ message: 'Token khong chinh xac' });
    }
}




module.exports = {
  checkAuthenticationMDW,
}




