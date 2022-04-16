 
// Mô hình 3 khối
// - Đầu vào
//   + Tên phim: ABC
//   + Giá vé người lớn: 50000
var a = 50000;
//   + Số vé người lớn đã bán: 100
var b = 100;
//   + Giá vé trẻ em: 40000
var c = 40000;
//   + Số vé trẻ em đã bán: 50
var d = 50;
//   + Tỷ lệ phần trăm từ thiện 10%
var e = 10/100

// - Xử lý
//   + Tính doanh thu vé người lớn: Giá vé người lớn * Số vé người lớn đã bán
var doanhThuNguoiLon = a * b;
//   + Tính doanh thu vé trẻ em: Giá vé trẻ em * Số vé trẻ em đã bán
var doanhThuTreEm = c * d;
//   + Tính doanh thu = doanh thu vé người lớn + doanh thu vé trẻ em
var doanhThu = doanhThuNguoiLon + doanhThuTreEm;
//   + Từ thiện: 10/100* doanh thu
var tuThien = doanhThu * 10/100;
//   + lợi nhuận: doanh thu - từ thiện
var loiNhuan = doanhThu - tuThien;

// - Đầu ra
console.log("doanh thu vé người lớn:" + doanhThuNguoiLon);
console.log("doanh thu vé trẻ em:" + doanhThuTreEm);
console.log("Doanh thu:" + doanhThu);
console.log("Từ Thiện:" + tuThien);
console.log("Lợi nhuận:" + loiNhuan);


// Format VND
var currentFormat = new Intl.NumberFormat("vn-VN");

var ketQua = "Loi nhuan là: " + currentFormat.format(loiNhuan);

console.log(ketQua);


