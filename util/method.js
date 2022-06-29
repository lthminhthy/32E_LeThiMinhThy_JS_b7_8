function kiemTraSoNguyenTo(arrNumber) {
    // input 1 so

    // biến kiểm tra là output, đúng là số nguyên tố, sai là false

    var kiemTra = true;
    if (arrNumber < 2) {
        kiemTra = false;
    }
    for (var uoc = 2; uoc <= arrNumber/2; uoc++) {
        // mỗi lần duyệt qua 1 ước thì kiểm tra ước đó
        if (arrNumber % uoc == 0) {
            // 3 ước rồi
            kiemTra = false;
            break;
        }
    }
    return kiemTra;

}




function demSoNguyen(arrThem_9) {
    var soLuong = 0;
    for (i = 0; i < arrThem_9.length; i++) {
        if (kiemTra = true) {
            soLuong++;
        }
    }
    return soLuong;
}


function demSoDuong(arrNumber) {
    var soLuongSoDuong = 0;
    for (i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] > 0) {
            soLuongSoDuong++;
        }
    }
    return soLuongSoDuong;
}
function demSoAm(arrNumber) {
    var soLuongSoAm = 0;
    for (i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] < 0) {
            soLuongSoAm++;
        }
    }
    return soLuongSoAm;
}



