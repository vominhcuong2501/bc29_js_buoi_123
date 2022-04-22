// var inputUsername = document.getElementById("txtUsername");
// console.log(inputUsername.value);

// var username = document.getElementById("txtUsername").value;
// console.log(username);

document.getElementById("btnClick").onclick = function() {
    // Xử Lý
    //Dom tơi the input#txtUsername lay value
    var username = document.getElementById("txtUsername").value;
    console.log(username);
};

document.getElementById("btnCong").onclick = function() {
    //Dom toi 2 the input lay value
    var input1 = document.getElementById("txtNumber_1").value*1;
    var input2 = document.getElementById("txtNumber_2").value*1;
    console.log(input1);
    console.log(input2);

    // Mẹo string * number = number/ *1
    //chuyển dữ liệu từ string => number
    // number_1 = parseInt(input1) // số nguyên: parseInt, số thực: parseFloat
    // number_2 = parseInt(input2)
    // var tong = number_1 + number_2;

    //Xử lý
    var tong = input1 + input2;
    console.log(tong)

    //Show kết quả ra UI
    document.getElementById("divInfo").innerHTML = "Tổng là: " + tong;

    //Style div#divInfo - Inline
    // document.getElementById("divInfo").style.backgroundColor= "red";
    // document.getElementById("divInfo").style.color= "white";
    // document.getElementById("divInfo").style.fontSize= "50px";
    // document.getElementById("divInfo").style.textAlign= "center";
    // document.getElementById("divInfo").style.margin= "20px";

    //Style div#divInfo - Class gán thẻ class sẽ xóa những cái cũ
    document.getElementById("divInfo").className = "textUpper showInfo";

    //Style div#divInfo - classlist thêm thuộc tính cho thẻ class
    document.getElementById("divInfo").classList.add("showInfo");
}


document.getElementById("btnLogin").onclick = function() {
    // lấy value trong thẻ input
    var UserName = document.getElementById("userName").value;
    var PassWord = document.getElementById("passWord").value;
    // var result = "Usename: " + UserName +  "<br> Password: " + PassWord;
    // show
    var result = "";
    result += "<p>Username: " + UserName + "</p>";
    result += "<p>Paswword: " + PassWord + "</p>";

    document.getElementById("footerLogin").innerHTML = result;
}



document.getElementById("btnOn").onclick = function() {
    document.getElementById("imgBulb").src = "./images/pic_bulbon.gif";
}
document.getElementById("btnOff").onclick = function() {
    document.getElementById("imgBulb").src = "./images/pic_bulboff.gif";
}
document.getElementById("btnDisabledOn").onclick = function() {
    // khóa nút #btnOn
    document.getElementById("btnOn").disabled = true;
}
document.getElementById("btnEnabledOn").onclick = function() {
    document.getElementById("btnOn").disabled = false;
}

document.getElementById("btnTinh").onclick = function() {
    // + dau vao
    //lay value so tien
    var tongtien = document.getElementById("tongTien").value*1;
    //lay value so % tip
    var selecttip = document.getElementById("selectTip").value*1;
    // lay value so nguoi muon share
    var songuoi = document.getElementById("share").value*1;
    // + xu ly
    var tip = (tongtien*(selecttip/100))/songuoi;
    // + dau ra
    document.getElementById("footerTip").innerHTML = "Số tiền tip là " + tip + "$/person";
    document.getElementById("footerTip").classList.add("alert-success");
}


document.getElementById("btnTaoThe").onclick = function() {
    // cach 1
    // var tagP = "<p>Hello Cybersoft</p>";
    // document.getElementById("divContent").innerHTML = tagP;

    //cach 2
    // xoa noi dung ben trong the  #dicContent
    document.getElementById("divContent").innerHTML = "";
    // tao the P
    var tagP = document.createElement("p")
    // them text cho the P
    tagP.innerHTML = "hello Cybersoft";
    // gán the P ra the #divContent
    document.getElementById("divContent").appendChild(tagP);

}

document.getElementById("btnTaoBang").onclick = function() {
    // tao 3 dong mỗi dòng 3 cột
    // var content = "";
    // content += "<tr>"
    // content += "<td>1</td>"
    // content += "<td>Sumsung</td>"
    // content += "<td>200$</td>"
    // content += "</tr>"

    // content += "<tr>"
    // content += "<td>2</td>"
    // content += "<td>Xiaomi</td>"
    // content += "<td>200$</td>"
    // content += "</tr>"

    // content += "<tr>"
    // content += "<td>3</td>"
    // content += "<td>Iphone</td>"
    // content += "<td>200$</td>"
    // content += "</tr>"
    // document.getElementById("tbody").innerHTML = content;

    //cach 2
    var tagTR_1 = document.createElement("tr");
    var tagTD_1_1 = document.createElement("td");
    tagTD_1_1.innerHTML = "1";
    var tagTD_2_1 = document.createElement("td");
    tagTD_2_1.innerHTML = "Samsung";
    var tagTD_3_1 = document.createElement("td");
    tagTD_3_1.innerHTML = "200$";
    tagTR_1.appendChild(tagTD_1_1);
    tagTR_1.appendChild(tagTD_2_1);
    tagTR_1.appendChild(tagTD_3_1);
    document.getElementById("tbody").appendChild(tagTR_1);

    var tagTR_2 = document.createElement("tr");
    var tagTD_1_2 = document.createElement("td");
    tagTD_1_2.innerHTML = "1";
    var tagTD_2_2 = document.createElement("td");
    tagTD_2_2.innerHTML = "Samsung";
    var tagTD_3_2 = document.createElement("td");
    tagTD_3_2.innerHTML = "200$";
    tagTR_2.appendChild(tagTD_1_2);
    tagTR_2.appendChild(tagTD_2_2);
    tagTR_2.appendChild(tagTD_3_2);
    document.getElementById("tbody").appendChild(tagTR_2);

    var tagTR_3 = document.createElement("tr");
    var tagTD_1_3 = document.createElement("td");
    tagTD_1_3.innerHTML = "1";
    var tagTD_2_3 = document.createElement("td");
    tagTD_2_3.innerHTML = "Samsung";
    var tagTD_3_3 = document.createElement("td");
    tagTD_3_3.innerHTML = "200$";
    tagTR_3.appendChild(tagTD_1_3);
    tagTR_3.appendChild(tagTD_2_3);
    tagTR_3.appendChild(tagTD_3_3);
    document.getElementById("tbody").appendChild(tagTR_3);    
}
