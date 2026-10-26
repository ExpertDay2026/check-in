// Tambahan config untuk checkin.html. Dimuat SETELAH config.js, jadi file lama tidak perlu diubah.
// Layar "Check-in Completed" memakai DESIGN.success yang sudah ada (checked-in-bg.webp, nama, divisi, waktu).
// Pratinjau: .../checkin.html?demo=form   dan   .../checkin.html?demo=ok   (tambah &grid=1 untuk garis bantu 10%)
window.APP.CHECKIN_API_URL = 'https://script.google.com/macros/s/AKfycbwshTczi7I7VZ05iLgT8pVOaW2KoO1BySEJJLBghiprZZ5IUOBSarUsjpB3Ty55xDdp/exec';   // URL /exec dari Code.gs yang baru

window.APP.DESIGN.form = {
  bg: 'rsvp-bg.webp',   // ganti dengan gambar form check-in Anda (1080 x 2520 bila ber-bleed)
  bleed: 300,           // isi 0 bila gambar 1080 x 1920 biasa
  field:   { bg: 'rgba(255,255,255,.95)', color: '#0A1A3E', border: '#F0D678', radius: 2.4, pad: 2.2, size: 4, weight: 500 },
  tab:     { x: 50, y: 42, w: 80, size: 4, weight: 700, teksInternal: 'Internal', teksExternal: 'External' },
  npk:     { x: 50, y: 50, w: 80, placeholder: 'Employee ID (NPK)', inputmode: 'text' },   // 'numeric' bila NPK hanya angka
  nama:    { x: 50, y: 50, w: 80, placeholder: 'Full Name' },
  company: { x: 50, y: 58, w: 80, placeholder: 'Company' },
  tombol:  { x: 50, y: 69, w: 62, size: 5, weight: 700, color: '#0A1A3E', bg: '#F0D678', radius: 3.2, pad: 2.4, teks: 'Check-in' },
  pesan:   { x: 50, y: 76, w: 80, size: 3.4, weight: 500, color: '#ffb4b4', lineHeight: 1.3 }
};

// Opsional di layar berhasil (tambahkan ke DESIGN.success di config.js bila ingin menggeser):
//   catatan: { x: 50, y: 73, w: 80, size: 3.4 }                        // "Anda sudah check-in sebelumnya."
//   ulang:   { x: 50, y: 93, w: 62, size: 3.4, teks: 'Check in another person' }   // false = sembunyikan
