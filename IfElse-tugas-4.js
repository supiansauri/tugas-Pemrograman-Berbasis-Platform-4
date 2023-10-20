const penjualan = 250000;
let uangJasa;
let uangKomisi;

if (penjualan <= 200000) {
  uangJasa = 10000;
  uangKomisi = penjualan * 0.1;
} else if (penjualan > 200000 && penjualan <= 500000) {
  uangJasa = 20000;
  uangKomisi = penjualan * 0.15;
} else {
  uangJasa = 30000;
  uangKomisi = penjualan * 0.2;
}

const total = uangJasa + uangKomisi;

console.log("Penjualan = Rp. " + penjualan);
console.log("Uang Jasa = Rp. " + uangJasa);
console.log("Komisi = Rp. " + uangKomisi);
console.log("Total  = Rp. " + total);