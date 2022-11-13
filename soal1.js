const prompt = require('prompt-sync')({sigint: true});

/* Soal 1 */
console.log("# Tugas Pekan 3 - Program Akar Persamaan Kuadrat");
const getSquareRoot = (angka) => {
  if (isNaN(angka)) {
    return "Inputan harus berupa angka";
  } else if (angka < 0) {
    return "Tidak bisa input bilangan negatif";
  } else if (angka % 2 != 0) {
    return "Tidak bisa input bilangan ganjil";
  } else {
    return Math.sqrt(angka);
  }
};

const angka = prompt("Input bilangan genap : ");
console.log(getSquareRoot(angka));