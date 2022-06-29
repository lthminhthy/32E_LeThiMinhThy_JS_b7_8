var arrNumber = [];
document.getElementById('btnThemSo').onclick = function () {

    var soThem = Number(document.getElementById('soThem').value);
    // var so = 0;
    arrNumber.push(soThem);
    // so = '['+ arrNumber + ']';
    document.getElementById('themSo').innerHTML = arrNumber;
}

document.getElementsByClassName('btn btn-danger').onclick = function (event) {
    event.preventDefault();
}


// 1
document.getElementById('btnTongSoDuong').onclick = function () {
    var ketQua_1 = 0;


    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            ketQua_1 += arrNumber[i];
        }
    }
    document.getElementById('ketQua_1').innerHTML = ketQua_1;
}

// 2
document.getElementById('btnDemSoDuong').onclick = function () {
    var dem = 0;

    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            dem++
        }

    }
    document.getElementById('ketQua_2').innerHTML = dem;
}

// 3
document.getElementById('btnTimSoNhoNhat').onclick = function () {
    var soNhoNhat = arrNumber[0];
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] < soNhoNhat) {
            soNhoNhat = arrNumber[i];
        }
    }
    document.getElementById('ketQua_3').innerHTML = soNhoNhat;
}

// 4
document.getElementById('btnDuongNhoNhat').onclick = function () {
    var arrDuong = [];

    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            arrDuong.push(arrNumber[i]);
        }
    }
    if (arrDuong.length == 0) {
        document.getElementById('ketQua_4').innerHTML = "Không có số dương";
        return
    }
    var soDuongNhoNhat = arrDuong[0];
    for (var z = 0; z < arrDuong.length; z++) {
        if (arrDuong[z] < soDuongNhoNhat) {
            soDuongNhoNhat = arrDuong[z];
        }
    }

    document.getElementById('ketQua_4').innerHTML = soDuongNhoNhat;

}


// 5
document.getElementById('btnSoChanCuoiCung').onclick = function () {
    var soChanCuoiCung = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] % 2 === 0) {
            soChanCuoiCung = arrNumber[i];
        } else {
            soChanCuoiCung = "-1";
        }
    }
    document.getElementById('ketQua_5').innerHTML = soChanCuoiCung;

}


// 6
document.getElementById('btnDoiCho').onclick = function () {
    // var newArr = [];
    var viTri1 = Number(document.getElementById('viTri1').value);
    var viTri2 = Number(document.getElementById('viTri2').value);
    var bienTam = [];

    bienTam = arrNumber[viTri1];
    arrNumber[viTri1] = arrNumber[viTri2];
    arrNumber[viTri2] = bienTam;


    document.getElementById('ketQua_6').innerHTML = arrNumber;

}


// 7
document.getElementById('btnSapXepTangDan').onclick = function () {
    var soHang = arrNumber[0];
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = i + 1; j < arrNumber.length; j++) {
            if (arrNumber[i] > arrNumber[j]) {
                soHang = arrNumber[j];
                arrNumber[j] = arrNumber[i];
                arrNumber[i] = soHang;
            }
        }
    }
    document.getElementById('ketQua_7').innerHTML = arrNumber;

}


// 8
document.getElementById('btnSoNguyenToDauTien').onclick = function () {
    var ketQua_8 = 0;

    for (var i = 0; i < arrNumber.length; i++) {
        var kiemTra = kiemTraSoNguyenTo(arrNumber[i]);
        if (kiemTra === true) {
            ketQua_8 += arrNumber[i];
            break;
        }
        else {
            ketQua_8 = null;
        }
    }
    if (ketQua_8 === null) {
        ketQua_8 = "-1";
    }
    document.getElementById('ketQua_8').innerHTML = ketQua_8;
}




// 9
var arrThem_9 = [];
document.getElementById('btnThemSo_9').onclick = function () {
    var soThem_9 = Number(document.getElementById('soThem_9').value);

    arrThem_9.push(soThem_9);
    document.getElementById('themSo_9').innerHTML = arrThem_9;
}

// đếm số nguyên tố
document.getElementById('btnDemSoNguyen_9').onclick = function () {
    var soNguyen = 0;
    soNguyen = demSoNguyen(arrThem_9);
    document.getElementById('ketQua_9').innerHTML = "Số nguyên: " + soNguyen;
}




// 10
document.getElementById('btnSoSanh').onclick = function () {
    var soSanh = "";
    var soDuong = 0;
    var soAm = 0;
    soDuong = demSoDuong(arrNumber);
    soAm = demSoAm(arrNumber);
    if (soDuong > soAm) {
        soSanh = "Số dương nhiều hơn số âm";
    } else if (soDuong < soAm) {
        soSanh = "Số âm nhiều hơn số dương";
    } else {
        soSanh = "Số dương và số âm bằng nhau";
    }
    document.getElementById('ketQua_10').innerHTML = soSanh;
}


