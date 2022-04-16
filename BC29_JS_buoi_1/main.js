// alert(" Bootcamp 29");
/*console.log("Hello Cybersoft");
console.log("Hello John Cena");*/

/* Variable - Biến */
/* 1 dấu = được gọi là phép gán
    bên phải dấu = thực thi trước 
    bên trái dấu = được gán sau*/
var username = "Cuong"; // string
console.log(username);

var address = "112 Cao Thang"; // string
console.log(address);

var numberStudent = 08026; // number // đặt tên theo Camel case
console.log(numberStudent)

var isLogin = true; //boolean (true/false)

var age; // undefined
console.log(age)

var empty = null;
empty = "Cybersoft"; // cập nhật giá trị Cybersoft cho biến empty
console.log(empty)

/* Toan tu */
var a = 5;
var b = 5;

// Cộng (+): cộng số & nối chuỗi
var tong = a + b;
console.log("Tổng là:" + tong);

// Trừ (-):
var hieu = a -b;
console.log("Hiệu là:" + hieu);

// Tích (*):
var tich = a * b;
console.log("Tích là:" + tich);

// Chia (/): lấy phần nguyên
var thuong = a/b;
console.log("Thương là:" + thuong);

// Chia (%): lấy phần dư
var layPhanDu = a%b;
console.log("Phần dư là:" + layPhanDu)

// Tăng 1 đơn vị (++)
var count = 0;
var newCount = ++count; // count + 1
console.log(newCount);

// Giảm 1 đơn vị (--)
var count = 0;
var newCount = --count; // count - 1
console.log(newCount);

// Phép gán (+=) (-=) (*=) (/=) (%=)
var number = 0;
number += 1; // number = number + 1
console.log(number);

// Gán trươc tăng sau
var a;
var b = 2;
a = 4;
b = ++b + ++a;
console.log(a, b);

var a = 3;
var b = 1;
a+= b;
b = b++ + a++
console.log(a, b);


// Hằng số ES6
const PI = 3.14;

// - Đầu vào bài toán tam giác vuông
    var canh1 = 3;
    var canh2 = 4;
    var canhHuyen = 0;
// - Xử lý
    canhHuyen = canh1 * canh1 + canh2 * canh2;
// Căn bậc hai
   canhHuyen = Math.sqrt(canhHuyen);
// - Đầu ra 
    console.log(canhHuyen);

// Gia sử
// n = 245 => 2 + 4 + 5 => ?
//  Đầu vào
// + n = 245
var n = 251;
//   Xử lý
// Tách lấy hàng trăm: Math.floor(n/100)
var hangTram = Math.floor(n/100);
// Tách lấy hàng chục: Math.floor(n%100/10)
var hangChuc = Math.floor(n%100/10);
// Tách lấy hàng đơn vị n%10
var hangDv = n%10;
// hàng trăm + hàng chục + hàng đơn vị
var tongKySo = hangTram + hangChuc + hangDv;
//   Đầu ra
console.log(tongKySo);
// show kết quả




