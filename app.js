// let meyveSiyahisi = ["alma", "banan", "armud", "üzüm", "çiyələk"]
// let daxilEdilenMeyve = prompt("Bir meyvə adı daxil edin:");
// if (meyveSiyahisi.includes(daxilEdilenMeyve)) {
//     console.log("Meyvə siyahıda var!");
// } else {
//     console.log("Meyvə siyahıda yoxdur!");
// }


// hometask




let users = [["sabir","1234"], ["Sona","1234"],["Gulay","1234"],["Aga","1234"],["Aysha","1234"],["Ehmed","1234"],["Polad" , "1234"],["Yusif","1234"]]
function add() {
    
    let name = document.getElementById("username").value;
    let Pasword = document.getElementById("pasword").value;
let check = users.find(user=> user[0] == name && user[1] == Pasword);
    if (check) {
    console.log("giris ugurludur");
    
    } else {
    console.log("Melumatlar sehvdir");
    }
    document.getElementById("username").value="";
    document.getElementById("pasword").value="";
    
    }