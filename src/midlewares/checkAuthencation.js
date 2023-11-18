const jwt = require('jsonwebtoken');

const checkAuthenticationMDW = async (req, res, next) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldmh1bmd0cmFuIiwiZW1haWwiOiJkZXZodW5ndHJhbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDAzODUwMjUsImV4cCI6MTcwMjk3NzAyNX0.CCU7M5YYdHVJ3yGUH31oOa52e_oFUxfqTD6lMitP8GY"

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




const checkAdmin = async (req, res, next) => {
  try {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldmh1bmd0cmFuIiwiZW1haWwiOiJkZXZodW5ndHJhbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDAzODUwMjUsImV4cCI6MTcwMjk3NzAyNX0.CCU7M5YYdHVJ3yGUH31oOa52e_oFUxfqTD6lMitP8GY"

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
  checkAuthenticationMDW, checkAdmin
}




