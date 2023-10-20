const penjualan = 250000;
let uangJasa;
let uangKomisi;

if (penjualan <= 200000) {
  uangJasa = 10000;
  uangKomisi = penjualan * 0.1;
} else if (penjualan > 200000 && penjualan <= 500000) {
  uangJasa = 20000;
  uangKomisi = penjualan * 0.15;
} else if (penjualan > 500000) {
  uangJasa = 30000;
  uangKomisi = penjualan * 0.2;
} else {
  uangJasa = 0;
  uangKomisi = 0;
}

const total = uangJasa + uangKomisi;

console.log("Total Pendapatan: Rp. " + penjualan);
console.log("Uang Jasa: Rp. " + uangJasa);
console.log("Uang Komisi: Rp. " + uangKomisi);
console.log("Total : Rp. " + total);