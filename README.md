# To-Do List Application (Based on TodoMVC)

## Giới thiệu
Đây là ứng dụng **To-Do List** được phát triển **dựa trên phần mềm mã nguồn mở TodoMVC** – một dự án OSS nổi tiếng dùng để minh họa kiến trúc và chức năng chuẩn của ứng dụng quản lý công việc.

Dự án được xây dựng nhằm phục vụ học tập cho môn **Phần mềm mã nguồn mở**, với mục tiêu nghiên cứu, kế thừa và mở rộng một phần mềm OSS có sẵn.

---

## Phần mềm mã nguồn mở được sử dụng
- **Tên OSS**: TodoMVC  
- **Trang chủ**: https://todomvc.com  
- **GitHub**: https://github.com/tastejs/todomvc  
- **Giấy phép**: MIT License  

TodoMVC cung cấp kiến trúc chuẩn (MVC) và các chức năng cơ bản của một ứng dụng To-Do List như thêm, xóa, hoàn thành công việc và lưu trữ dữ liệu cục bộ.

---

## Kiến trúc phần mềm
Ứng dụng kế thừa **mô hình MVC (Model – View – Controller)** từ TodoMVC:

- **Model**: Quản lý dữ liệu công việc (task), trạng thái hoàn thành, thời gian nhắc việc.
- **View**: Giao diện HTML/CSS hiển thị danh sách công việc và các thành phần tương tác.
- **Controller**: Xử lý logic ứng dụng bằng JavaScript, điều phối dữ liệu giữa Model và View.

Dữ liệu được lưu trữ bằng **LocalStorage** trên trình duyệt.

---

## Các chức năng chính
### Chức năng kế thừa từ TodoMVC
- Thêm công việc mới
- Hiển thị danh sách công việc
- Đánh dấu công việc hoàn thành
- Xóa công việc đã hoàn thành
- Lưu trữ dữ liệu bằng LocalStorage

### Chức năng mở rộng của nhóm
- Nhắc việc bằng **Notification API**
- Âm thanh báo thức khi đến thời hạn
- **Focus Timer (Pomodoro)** hỗ trợ tập trung làm việc
- Giao diện tiếng Việt, đơn giản và dễ sử dụng

---

## Công nghệ sử dụng
- HTML5
- CSS3
- JavaScript (ES6)
- Web APIs: Notification API
- LocalStorage
- GitHub Pages (triển khai)

---

## Cách cài đặt và sử dụng
1. Clone repository:
   ```bash
   [git clone <link-repository>](https://paintruong.github.io/todo-list-app/)
