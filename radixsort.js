let arr = [170, 45, 75, 90, 802, 24, 2];  // Array yang ingin diurutkan, length = 7

function radixSort(arr) {
  /*Mencari nilai terbesar di dalam array untuk di proses*/
  let max = Math.max(...arr);  // Mencari angka terbesar dalam array
  
  /* Mencari jumlah digit pada angka terbesar */
  let maxDigits = Math.floor(Math.log10(max)) + 1;  // Hitung jumlah digit angka terbesar
  
  /* Iterasi untuk setiap digit (satuan, puluhan, ratusan)
  Mulai dari digit satuan (exp = 1), kemudian meningkat menjadi puluhan (exp = 10), dan seterusnya */
  for (let exp = 1; exp <= maxDigits; exp++) {
    // Buat 10 bucket untuk setiap digit (0-9)
    let buckets = Array.from({ length: 10 }, () => []);  // Membuat array bucket kosong untuk digit 0-9
    
    // Kelompokkan elemen berdasarkan digit saat ini
    for (let i = 0; i < arr.length; i++) {
      // Ambil digit saat ini (misalnya digit satuan, puluhan, dll.)
      let digit = Math.floor(arr[i] / Math.pow(10, exp - 1)) % 10;  // Mengambil digit berdasarkan exp
      
      // Masukkan elemen ke dalam bucket yang sesuai berdasarkan digit
      buckets[digit].push(arr[i]);  // Menempatkan elemen pada bucket sesuai digit yang ditemukan
    }

    // Gabungkan elemen dari semua bucket kembali ke array asli
    let index = 0;  // Variabel untuk melacak posisi saat memasukkan elemen kembali ke array
    for (let i = 0; i < buckets.length; i++) {
      for (let j = 0; j < buckets[i].length; j++) {
        // Menyalin elemen dari bucket kembali ke array utama
        arr[index++] = buckets[i][j];  // Elemen yang ada di dalam bucket digabungkan kembali
      }
    }
  }

  return arr;
}

console.log("Array setelah diurutkan:", radixSort(arr));  // output setelah array di sorting dengan radixsort
