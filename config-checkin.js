// ======================================================================
// WAJIB: ganti ISI_URL_EXEC_BARU_DI_SINI dengan URL /exec dari Apps Script (Code.gs),
//        tetap di dalam tanda kutip.
// Posisi memakai PERSEN dari desain 1080 x 1920 (titik tengah elemen):
//   x = dari kiri, y = dari atas, w = lebar kotak, h = tinggi maksimum (untuk ukuran huruf otomatis)
//   size = ukuran huruf (persen lebar desain), weight, color, min (huruf terkecil), lines: 2 (nama dipecah 2 baris)
// Gambar latar: 1080 x 2520 px. 300 px atas & bawah (bleed) hanya tampil di HP yang lebih tinggi dari 16:9,
//   jadi simpan semua yang penting di area tengah y = 300 s/d 2220. Isi bleed: 0 bila gambar 1080 x 1920.
// Pratinjau (tambah &grid=1 untuk garis bantu 10%):
//   .../checkin.html?demo=form     layar isian
//   .../checkin.html?demo=ok       layar Check-in Completed
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
      bg: 'checkin-bg.png',
      bleed: 300,
      field:   { bg: 'rgba(255,255,255,.95)', color: '#0A1A3E', border: '#F0D678', radius: 2.4, pad: 2.2, size: 4, weight: 500 },
      tab:     { x: 50, y: 42, w: 80, size: 4, weight: 700, teksInternal: 'Internal', teksExternal: 'External' },
      npk:     { x: 50, y: 50, w: 80, placeholder: 'NPK (6 digits)', digits: 6 },   // digits: 6 = hanya angka & tepat 6 digit (hapus bila format NPK lain; boleh pakai inputmode: 'text')
      nama:    { x: 50, y: 50, w: 80, placeholder: 'Full Name' },
      company: { x: 50, y: 58, w: 80, placeholder: 'Company' },
      tombol:  { x: 50, y: 67, w: 62, size: 5, weight: 700, color: '#0A1A3E', bg: '#F0D678', radius: 3.2, pad: 2.4, teks: 'Check-in' },
      pesan:   { x: 50, y: 76, w: 80, size: 3.4, weight: 500, color: '#ffb4b4', lineHeight: 1.3 }   // pesan galat
    },

    // Layar 2: Check-in Completed
    success: {
      bg: 'checked-in-bg.png',          // desain lama (maskot): ganti ke 'checked-in-bg.webp' dan hapus baris bleed di bawah
      bleed: 300,
      nama:    { x: 50, y: 54, w: 77, h: 9.2, size: 8, weight: 700, lineHeight: 1.1, lines: 2, min: 3.5 },
      divisi:  { x: 50, y: 57, w: 84, h: 6,  size: 5, weight: 500, color: '#F0D678', min: 3.2 },
      waktu:   { x: 50, y: 68, size: 4, weight: 500, color: 'rgba(255,255,255,.88)' },
      catatan: { x: 50, y: 73, w: 80, size: 3.4, weight: 500, color: '#F0D678' },                // "sudah check-in sebelumnya"
      ulang:   { x: 50, y: 93, w: 62, size: 3.4, teks: 'Check in another person' }              // false = sembunyikan
    },

    // Tampilan landscape (HP diputar): 2 kolom. Teks di bawah tampil sebagai pengganti teks yang di portrait ada di gambar latar.
    landscape: {
      judul: 'SELF CHECK-IN', event: 'EXPERT DAY 2026', sub: 'Select your guest type and fill in your details',
      suksesJudul: 'CHECK-IN COMPLETED', suksesSub: 'Thank you for coming. Please enjoy the event.'
      // bg: 'checkin-bg-landscape.png'   // opsional: gambar latar khusus landscape (tanpa ini latar digambar otomatis)
    }
  }
};
