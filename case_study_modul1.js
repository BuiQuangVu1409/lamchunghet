class Giai {
    constructor(giai,mien,arrNumber) {
        this.giai = giai;
        this.mien = mien;
        this.arrNumber = arrNumber;
    }
    // function
    testNumber = function (soMuonKTra) {
        for(let i = 0; i < arrNumber.length; i++) {
            if (soMuonKTra === arrNumber[i]) {
                alert("bạn trúng giải");
                break;
            } else {
                alert("Bạn không trúng giải");
                break;
            }
        }

    }
}
class ketQua {
    constructor(giai,so) {
        this.giai= giai;
        this.so= so;
    }
    testGiaiSoi= function (){
        for (let i = 0; i < arrNumber.length; i++) {
            if(giai===arrNumber[0]){
                alert('Giải Nhất');
            }else if (giai===arrNumber[1]){
                alert('giải Nhì');
            }else if (giai===arrNumber[2]){
                alert('giải ba');
            }else
                alert('không trúng');
        }
    }
}
// giaiObj.testNumber("123");
let soSanh ;
let giai = ["Giải nhất", "Giải nhì" ,"Giải ba","Giải tư","Giải năm"];
let arrNumber = [ "123", "011", "765","746" ];
let giaiObj = new Giai(giai, arrNumber);

function myFunction() {
    soSanh =document.getElementById("txtnhap3so").value;
    if(arrNumber[0]===soSanh){
        alert("trúng");
    }else{
        alert("không trúng");
    }
}
function myFunction1() {
    soSanh=document.getElementById("txtnhap2so").value;
    if(arrNumber[1]===soSanh){
        alert("trúng");
    }else{
        alert("không trúng");
    }
}

