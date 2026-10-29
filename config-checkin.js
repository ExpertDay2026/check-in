// ======================================================================
// WAJIB: ganti ISI_URL_EXEC_BARU_DI_SINI dengan URL /exec dari Apps Script (Code.gs),
//        tetap di dalam tanda kutip.
// Posisi memakai PERSEN dari desain 1080 x 1920 (titik tengah elemen):
//   x = dari kiri, y = dari atas, w = lebar kotak, h = tinggi maksimum (untuk ukuran huruf otomatis)
//   size = ukuran huruf (persen lebar desain), weight, color, min (huruf terkecil), lines: 2 (nama dipecah 2 baris)
// Gambar latar: 1080 x 2520 px. 300 px atas & bawah (bleed) hanya tampil di HP yang lebih tinggi dari 16:9,
//   jadi simpan semua yang penting di area tengah y = 300 s/d 2220. Isi bleed: 0 bila gambar 1080 x 1920.
// ======================================================================
window.APP = {
  CHECKIN_API_URL: 'https://script.google.com/macros/s/AKfycbwshTczi7I7VZ05iLgT8pVOaW2KoO1BySEJJLBghiprZZ5IUOBSarUsjpB3Ty55xDdp/exec',

  VIBRATE: [200, 100, 200],   // getar saat tap tombol Check-in (milidetik); false = mati

  DESIGN: {
    width: 1080, height: 1920,
    color: '#ffffff',
    font: "'Poppins', system-ui, sans-serif",
    fontUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap',
    letterbox: '#0A1A3E',               // samakan dengan warna tepi desain

    // Layar 1: isian
    form: {
      bg: 'checkin-bg.webp',
      bleed: 300,
      field:   { bg: 'rgba(255,255,255,.95)', color: '#0A1A3E', border: '#F0D678', radius: 2.4, pad: 2.2, size: 4, weight: 500 },
      tab:     { x: 50, y: 42, w: 80, size: 4, weight: 700, teksInternal: 'Internal', teksExternal: 'External' },
      lokasi:  { x: 50, y: 48.5, w: 75, size: 3.3, padY: 1.0, weight: 700, teksKarawang: 'Karawang', teksSemarang: 'Semarang' },
      npk:     { x: 50, y: 56, w: 80, placeholder: 'NPK (6 digits)', digits: 6 },   // digits: 6 = hanya angka & tepat 6 digit (hapus bila format NPK lain; boleh pakai inputmode: 'text')
      nama:    { x: 50, y: 50, w: 80, placeholder: 'Full Name' },
      company: { x: 50, y: 58, w: 80, placeholder: 'Company' },
      tombol:  { x: 50, y: 67, w: 62, size: 5, weight: 700, color: '#0A1A3E', bg: '#F0D678', radius: 3.2, pad: 2.4, teks: 'Check-in' },
      pesan:   { x: 50, y: 76, w: 80, size: 3.4, weight: 500, color: '#ffb4b4', lineHeight: 1.3 }   // pesan galat
    },

    // Layar 2: Check-in Completed
    success: {
      bg: 'checked-in-bg.webp',          // desain lama (maskot): ganti ke 'checked-in-bg.webp' dan hapus baris bleed di bawah
      bleed: 300,
      nama:    { x: 50, y: 54, w: 77, h: 9.2, size: 8, weight: 700, lineHeight: 1.1, lines: 2, min: 3.5 },
      divisi:  { x: 50, y: 63, w: 84, h: 6,  size: 5, weight: 500, color: '#F0D678', min: 3.2 },
      waktu:   { x: 50, y: 70, size: 4, weight: 500, color: 'rgba(255,255,255,.88)' },
      catatan: { x: 50, y: 73, w: 80, size: 3.4, weight: 500, color: '#F0D678' }                // "sudah check-in sebelumnya"
    },

    // Tampilan landscape (HP diputar): kanvas desain 1920 x 1080, gambar latar 2520 x 1080 (300 px kiri & kanan = bleed).
    // x, y, w, h = persen dari 1920 x 1080 (titik tengah elemen). Ukuran huruf (size) mengikuti pengaturan portrait di atas.
    // Isi bleed: 0 bila gambar Anda 1920 x 1080 biasa. Kotak kartu di gambar: x 1040-1840, y 130-950 (isian) dan x 1000-1840, y 260-870 (berhasil).
    landscape: {
      width: 1920, height: 1080,
      form: {
        bg: 'checkin-bg-landscape.webp', bleed: 300,
        tab:     { x: 70.5, y: 33.4, w: 50 },
        lokasi:  { x: 70.5, y: 45.0, w: 40, size: 2.8, padY: 1.0},
        npk:     { x: 70.5, y: 54.0, w: 50 },        
        nama:    { x: 57.7, y: 48.0, w: 24.4 },      
        company: { x: 83.3, y: 48.0, w: 24.4 },      
        tombol:  { x: 70.5, y: 68.0, w: 50 },
        pesan:   { x: 70.5, y: 76, w: 50 }
      },
      success: {
        bg: 'checked-in-bg-landscape.webp', bleed: 300,
        nama:    { x: 70.5, y: 44, w: 50, h: 17 },
        divisi:  { x: 70.5, y: 57, w: 50, h: 7 },
        waktu:   { x: 70.5, y: 67 },
        catatan: { x: 70.5, y: 75, w: 50 }
      }
    }
  }
};
