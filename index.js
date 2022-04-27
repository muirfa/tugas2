let email = "g2academy@gmail.com";
let uang = 5000;
let pilihan =  "b"


if (pilihan == "a") {
    var minuman = "Air Mineral";
    var harga =  5000;
} else if (pilihan == "b") {
    var minuman =  "Soda"
    var harga =  7500
} else if (pilihan == "c" || !pilihan){
    var minuman = "Coffee"
    var harga = 12250
}

if (!email && !uang) {
    console.log("Silahkan periksa kembali inputan anda!");
} else if (!email) {
    console.log("Email harus diisi");
} else if (typeof email !== "string") {
    console.log("Invalid inputan");
} else if (!uang) {
    console.log("Masukan uang terlebih dahulu");
} else if (typeof uang !== "number") {
    console.log("Invalid inputan");
} else {
    if (uang >= harga) {
        kembalian =  uang - harga;
        console.log("Selamat datang " + email + " di Vending Machine Suka-suka");
        console.log("Anda membeli " + minuman + ", silahkan mengambil minuman anda");
        console.log("Kembalian anda adalah " + kembalian)
        console.log("Terima kasih")
    } else {
        kekurangan =  harga - uang;
        console.log("Selamat datang " + email + " di Vending Machine Suka-suka");
        console.log("Anda ingin membeli " + minuman + " tapi uang tidak cukup");
        console.log("Aang anda " + uang + " dan harga " + minuman + " adalah " 
        + harga + " kekurangan uang anda adalah " + kekurangan);
        console.log("Terima kasih")
    }   
}