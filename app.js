const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware để cho phép xử lý JSON và các yêu cầu POST
app.use(express.json());

// Định nghĩa một tuyến đường đơn giản
app.get('/', (req, res) => {
  res.send('Welcome to your API!');
});

// Lấy danh sách tất cả người dùng
app.get('/users', (req, res) => {
    // Thực hiện lấy dữ liệu từ cơ sở dữ liệu hoặc tài nguyên khác
    const users = [...]; // Dữ liệu người dùng ở đây
    res.json(users);
  });
  
  // Lấy thông tin một người dùng cụ thể
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Thực hiện tìm người dùng theo ID và trả về thông tin của họ
    const user = {...}; // Thông tin người dùng ở đây
    res.json(user);
  });
  
  // Thêm một người dùng mới
  app.post('/users', (req, res) => {
    const newUser = req.body;
    // Thực hiện thêm người dùng vào cơ sở dữ liệu và trả về thông tin người dùng mới
    // ...
    res.json(newUser);
  });
  
  // Cập nhật thông tin của một người dùng
  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    // Thực hiện cập nhật thông tin người dùng theo ID và trả về thông tin người dùng đã cập nhật
    // ...
    res.json(updatedUserData);
  });
  
  // Xóa một người dùng
  app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Thực hiện xóa người dùng theo ID và trả về thông báo thành công
    // ...
    res.send('User deleted successfully');
  });
  

// Lắng nghe cổng và khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
