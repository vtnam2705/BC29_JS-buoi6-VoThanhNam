// Bài 1 - tìm số nhỏ nhất
var n = 0; // 
var S = 0; // Cho tổng là 0
// while (S < 10000) {
//     n++; 
//     S += n;
// };
// console.log(`Tong la ${S}`);
// console.log(`So la ${n}`);


document.getElementById("btn-result").onclick = function () {
    var limit = document.getElementById("txtNum").value;
    var ketQua = document.getElementById("result");

    while (S < limit) {
        n++;
        S += n;
    };

    ketQua.innerHTML = `Số nhỏ nhất là: ${n}`;
}



// ****************************************************************************************
// Bài 2 - Tính tổng
// var S = 0;
// function tinhTong(n, x) {
//     for (let i = 1; i <= n; i++) {
//         S += Math.pow(x, i);
//     }
//     return S;
// }
// console.log(tinhTong(10, 2));

document.getElementById("btn-console").onclick = function () {
    var soMu = document.getElementById("soMu").value;
    var coSo = parseInt(document.getElementById("coSo").value);
    var console = document.getElementById("console");

    var sum = 0;
    function tinhTong(soMu, coSo) {
        for (let i = 1; i <= soMu; i++) {
            sum += Math.pow(coSo, i);
        }
        return sum;
    }

    sum = tinhTong(soMu, coSo);

    console.innerHTML = `Tổng của biểu thức với ${coSo} và ${soMu} là: ${sum}`
}
// ****************************************************************************************
// Bài 3 - Tinh giai thua
// function tinhGiaiThua(n) {
//     var a = 1;
//     for (var i = 1; i <= n; i++) {
//         a *= i;
//     };
//     return a;
// };
// console.log(tinhGiaiThua(5));

document.getElementById("btn-ketQua").onclick = function () {
    var soN = document.getElementById("soN").value;
    var inKetQua = document.getElementById("ketQua");

    var giaiThua = 1;
    for (let i = 1; i <= soN; i++) {
        giaiThua *= i;
    }

    inKetQua.innerHTML = `Giai thừa của ${soN}: ${giaiThua}`;
}


// ****************************************************************************************
// Bài 4 - In thẻ div
// var n = 12;

// for (let i = 1; i <= n; i++) {
//     if(i % 2 == 0) {
//         console.log(`Div chẵn ${i}`);
//     } else {
//         console.log(`Div lẻ ${i}`);
//     }
// }

document.getElementById("btn-thongBao").onclick = function () {
    var soThe = document.getElementById("soThe").value;
    var content = "";
    var thongBao = document.getElementById("thongBao");
    
    for (let i = 1; i <= soThe; i++) {
        if (i % 2 == 0) {
            content += "<div>Div chẵn " + i + "</div>";
            thongBao.innerHTML = content;
        } else {
            content += "<div>Div lẻ " + i + "</div>";
            thongBao.innerHTML = content;
        }
    }

    // In kết quả
    // thongBao.innerHTML = content;

}




// In số nguyên tố
// Hàm kiểm tra số nguyên tố
function ktSoNguyenTo(x) {
    if (x <= 1) return 0; //0 : false
    for (var j = 2; j <= Math.sqrt(x); j++) {
        if (x % j == 0) return 0;
    }
    return 1; //1 : true
}

// function main(n) {
//     for(var i = 2; i <= n; i++) {
//         if (ktSoNguyenTo(i)) {
//             console.log(i)
//         }
//     }
//     return i
// }

// console.log(main(30))


document.getElementById("btn-inKetQua").onclick = function () {
    var soNguyenTo = document.getElementById("soNT").value;
    var content = "";
    var inKQ = document.getElementById("inKetQua");

    for (var i = 2; i <= soNguyenTo; i++) {
        if (ktSoNguyenTo(i)) {
            content += " " + i;
        }
    }

    inKQ.innerHTML = "Số nguyên tố nhỏ hơn " + soNguyenTo + " là : " + content;

    inKQ.classList.add("alert-success");
}