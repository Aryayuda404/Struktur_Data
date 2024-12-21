let arr = [9, 4, 6, 2, 7, 8, 5]; // array length adalah 7

function quicksort(arr) {
  /* jika array memiliki 1 element atau kosong kembalikan array itu sendiri */
  if (arr.length <= 1){
    return arr
  }

  /* length di kurangi 1 berarti 6, yang isinya yaitu arr ke-6 */
  let key = arr[arr.length - 1]
  let kiri = [] //untuk menampung array lebih kecil
  let kanan = [] //untuk menampung array lebih besar

  /* Proses perecahan array */
  for(let i = 0; i < arr.length - 1; i++){ //perulangan untuk cek nilai setiap index pada array dengan length 7
    if(arr[i] < key){ //perkondisian jika array ke-i < key, atau kurang dari 6
      kiri.push(arr[i]) //maka push array yang lebih kecil dari key ke array kiri
    }else{ //kondisi terakhir jika array ke-i > key, atau lebih dari 6
      kanan.push(arr[i]) //maka push array yang lebih besar dari key ke array kanan
    }
  }
  /* proses rekursi, dimana hasil dari array sebelah kiri atau kanan di urutkan lagi dengan function quicksort sampai dengan ukuran array kecil atau 1 element, setelah hanya tersisa 1 element atau kosong akan mengembalikan nilai array itu sendiri*/
  let penampungKiri = quicksort(kiri) 
  let penampungKanan = quicksort(kanan)

  /* menggabungkan array yang sudah terurut menjadi satu menggunakan concatenation*/
  return penampungKiri.concat(key, penampungKanan)
}

console.log("Hasil quickSort: ", quicksort(arr)) //proses menjalankan function dengan array yang sudah di sediakan yaitu [9, 4, 6, 2, 7, 8, 5]

/*
output:
Hasil quickSort:
[
  2, 4, 5, 6,
  7, 8, 9
] 
*/