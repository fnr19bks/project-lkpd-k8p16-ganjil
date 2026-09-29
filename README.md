# 🧪 KARYA LAB — Uji, Perbaiki, Tampilkan Karyamu!

**LKPD Interaktif Informatika Kelas 8** · Proyek Integratif: Uji, Presentasi, Refleksi
**Kode Berkas:** K8P16 · **Semester Ganjil 2026/2027**

Aplikasi web LKPD berbasis **game bertingkat** untuk murid SMP Kelas VIII (13–14 tahun).
Digitalisasi + gamifikasi LKPD cetak Bagian **A–G** dari modul ajar K8P16.

---

## 🎯 Tujuan Pembelajaran

Setelah memainkan aplikasi ini, murid mampu:

1. Menguji artefak (Dashboard, Infografis, Program, Kampanye Digital) dengan **Uji 3B**: Berfungsi, Benar, Bermanfaat & Aman.
2. Memberi umpan balik dengan kalimat **“Aku melihat — Aku merasa — Aku menyarankan”**.
3. Memprioritaskan perbaikan dengan **Matriks Prioritas** (penting × mudah).
4. Mencatat **Log Perbaikan** (sebelum → sesudah) dan menguji ulang.
5. Mempresentasikan karya dalam **5 bagian cerita** (Masalah – Karya – Uji – Perbaikan – Manfaat).
6. Merefleksikan dengan model **Apa – Lalu Apa – Sekarang Apa**.
7. Memahami **etika karya digital**: privasi, hak cipta, kejujuran, cek fakta.

---

## ✨ Fitur Lengkap

| Fitur | Keterangan |
|---|---|
| 🎬 Halaman Pembuka | Form kelompok, anggota, jenis karya, peran |
| 🔍 Misi 1–7 | Linear, tidak bisa dilompati |
| 🐞 Misi 2 — Spot the Bug | Menemukan bug Dashboard Sampah Versi 1 |
| ✅ Misi 3 — Uji 3B | Memasangkan temuan ke kategori |
| 🎯 Misi 4 — Matriks Prioritas | Skor Penting × Mudah, urut otomatis |
| 🔧 Misi 5 — Log Perbaikan | Drag-drop / klik “sebelum → sesudah” |
| 🎤 Misi 6 — Showcase | Susun 5 bagian cerita + timer 2 menit |
| 🧠 Misi 7 — Refleksi & Etika | Kuis etika + Apa–Lalu Apa–Sekarang Apa |
| 🏆 Halaman Hasil | Skor 0–100, bintang 1–5, ringkasan, salin, unduh |
| 🌈 Pelangi Perasaan | 4 tombol warna |
| 👥 Penilaian Teman | Kontribusi 1–4 + pujian + saran |
| 📖 Glosarium EN–ID | 22+ istilah dwibahasa |
| 🔊 Suara Web Audio API | ding / buzz / tap / fanfare — tanpa file mp3 |
| 🎊 Konfeti Canvas | Buatan sendiri, tanpa library |
| 💾 Auto-save | `localStorage` kunci `karyaLab_progress` |
| 🌙 Mode Gelap / Terang | Tombol header |
| 🎞️ Mode Kurangi Gerak | `Shift + M` |
| A+ / A++ / A | 3 tingkat ukuran teks |
| 🧑‍🏫 Mode Guru | Klik logo **3×** → kunci jawaban + reset |
| 📋 Salin & ⬇️ Unduh | Ringkasan hasil (.txt) |
| 📱 Responsif | 320px s/d 1440px |
| 🔒 Privasi | Tidak ada data dikirim ke server |

---

## 🚀 Cara Pakai (untuk Guru)

1. Buka file `index.html` di browser (Chrome / Edge / Firefox).
2. Bagikan link ke murid (setelah deploy) atau copy foldernya ke laptop lab.
3. Murid mengisi halaman pembuka → main 7 misi → showcase → hasil.
4. Di akhir, murid klik **📋 Salin Hasil** atau **⬇️ Unduh Hasil (.txt)** untuk dikumpulkan.

### 🔑 Mode Guru (Rahasia)
Klik **logo sekolah di header sebanyak 3×** → muncul kunci jawaban semua misi + tombol reset.

---

## 📁 Struktur File

```
karya-lab/
├── index.html      ← Struktur semua screen
├── style.css       ← Styling, dark mode, responsif, animasi
├── script.js       ← Logika game, state, localStorage, audio, konfeti
├── favicon.svg     ← Ikon otak + roda gigi + papan skor
├── logo.png        ← Ganti dengan logo SMPN 19 Kota Bekasi (200×200px)
└── README.md       ← Dokumen ini
```

> **Catatan logo:** Jika `logo.png` belum ada, aplikasi otomatis menampilkan fallback
> kotak putih bertuliskan **SMPN19** — tetap rapi.

---

## ☁️ Deploy Gratis di GitHub Pages — Langkah demi Langkah

### Langkah 1 — Buat Akun GitHub
1. Buka <https://github.com/signup>
2. Isi email, password, dan username (contoh: `guru-informatika-smpn19`)
3. Verifikasi email → login

### Langkah 2 — (Opsional) Install Git
- **Windows:** unduh di <https://git-scm.com>
- **Mac:** cek dengan `git --version` di Terminal
- Tidak mau install? Gunakan **Upload via Web** di Langkah 4A.

### Langkah 3 — Buat Repository Baru
1. Klik **“+”** kanan atas → **New repository**
2. Isi:
   - **Repository name:** `karya-lab`
   - **Description:** `LKPD Interaktif Informatika Kelas 8 - Uji, Presentasi, Refleksi`
   - **Public** ✅
   - **Add a README file** ✅
3. Klik **Create repository**

### Langkah 4A — Upload via Web (PALING MUDAH)
1. Di repo, klik **Add file** → **Upload files**
2. Seret semua file: `index.html`, `style.css`, `script.js`, `favicon.svg`, `README.md`, `logo.png`
3. Isi commit message → **Commit changes**

### Langkah 4B — Upload via Git (Alternatif)
```bash
git init
git add .
git commit -m "Upload LKPD Karya Lab"
git branch -M main
git remote add origin https://github.com/USERNAME/karya-lab.git
git push -u origin main
```

### Langkah 5 — Aktifkan GitHub Pages
1. Tab **Settings** → sidebar **Pages**
2. **Source:** Branch `main`, Folder `/ (root)`
3. Klik **Save**
4. Tunggu 1–3 menit → link live muncul:
   `https://USERNAME.github.io/karya-lab/`

### Langkah 6 — Uji Aplikasi
Cek: halaman start, 7 misi, showcase, hasil akhir, tombol salin/unduh, footer, favicon, tampilan HP.

### Langkah 7 — Bagikan ke Murid
Kirim link via Google Classroom / WhatsApp grup.
Boleh dibuat QR Code gratis di <https://www.qr-code-generator.com> → tempel di LKPD cetak.

### Langkah 8 — Kustomisasi Logo
1. Siapkan `logo.png` (200×200 px, latar transparan)
2. Upload menimpa placeholder
3. Refresh situs

### 🆘 Jika Error
| Masalah | Solusi |
|---|---|
| 404 | Pastikan `index.html` ada di root repo |
| CSS tidak muncul | Cek `<link rel="stylesheet" href="style.css">` (tanpa slash depan) |
| Logo tidak muncul | Case-sensitive: `Logo.png` ≠ `logo.png` |
| Layar putih | Tekan **F12** → tab **Console** → laporkan error |

---

## ⚙️ Parameter yang Bisa Diubah (Tunable)

Semua parameter ditandai komentar `// ⚙️ TUNABLE` di dalam kode.

| Parameter | Lokasi | Default | Fungsi |
|---|---|---|---|
| `NAMA_SEKOLAH` | `script.js` atas | `"SMP Negeri 19 Kota Bekasi"` | Nama sekolah |
| `FOOTER_TEXT` | `script.js` atas | teks footer lengkap | Teks footer |
| `TAHUN` | `script.js` | `2026` | Tahun |
| `KODE_BERKAS` | `script.js` | `"K8P16"` | Kode modul |
| `DEFAULT_LANG` | `script.js` | `"id"` | Bahasa default |
| `SOUND_ENABLED` | `script.js` | `true` | Suara default |
| `MAX_RETRY` | `script.js` | `2` | Percobaan ulang |
| `SKOR_MIN_BINTANG` | `script.js` | `[0,40,60,80,95]` | Ambang bintang 1–5 |
| `TIMER_SHOWCASE_DETIK` | `script.js` | `120` | Durasi presentasi |
| `DATA_SOAL` | `script.js` | objek | Semua soal |
| `--warna-primer` dll | `style.css :root` | `#1E5B94` dst | Palet warna |
| `LOGO_PATH` | `index.html` | `logo.png` | Nama file logo |

---

## 🔒 Privasi & Keamanan

- ❌ Tidak ada backend, database, API server, atau login
- ❌ Tidak ada Google Analytics / Facebook Pixel / tracker
- ❌ Tidak meminta nomor HP, alamat, atau foto murid
- ✅ Semua jawaban hanya di memori & `localStorage` browser
- ✅ Offline-friendly: setelah load pertama, gameplay dasar tetap jalan
- ✅ Tanpa request server eksternal selain Google Fonts (opsional)

---

## 🎨 Palet Warna

| Warna | Hex | Fungsi |
|---|---|---|
| Biru Tua | `#1E5B94` | Header & tombol utama |
| Hijau | `#39B54A` | Status benar/selesai |
| Kuning | `#F5C518` | Highlight prioritas |
| Merah | `#D9534F` | Salah / temuan kritis |
| Ungu | `#8E44AD` | Showcase / panggung |
| Latar | `#F4F8FB` | Biru sangat muda |

---

## ✅ Kriteria Keberhasilan (Acceptance Criteria)

| # | Kriteria | Status |
|---|---|---|
| AC1 | Semua file terbentuk tanpa placeholder kosong | ✅ |
| AC2 | Halaman start punya form lengkap + pilih jenis karya | ✅ |
| AC3 | 7 misi linear + showcase, tidak bisa lompat | ✅ |
| AC4 | Setiap istilah Inggris punya padanan Indonesia | ✅ |
| AC5 | Data soal Bagian 5 dipakai persis | ✅ |
| AC6 | Misi 2 menemukan minimal 3 temuan | ✅ |
| AC7 | Misi 3 punya 3 kategori Uji 3B | ✅ |
| AC8 | Misi 4 mendahulukan kebenaran & keamanan | ✅ |
| AC9 | Misi 5 drag-drop “sebelum → sesudah” | ✅ |
| AC10 | Misi 6 susun 5 bagian + timer 2 menit | ✅ |
| AC11 | Misi 7 model Apa–Lalu Apa–Sekarang Apa | ✅ |
| AC12 | Halaman hasil: skor, bintang, ringkasan, salin, unduh | ✅ |
| AC13 | Footer persis sesuai B11 | ✅ |
| AC14 | Progres tersimpan di localStorage | ✅ |
| AC15 | Responsif 320px & 1440px | ✅ |
| AC16 | Kontras WCAG AA | ✅ |
| AC17 | Mode gelap & kurangi gerak berfungsi | ✅ |
| AC18 | Tanpa request server eksternal selain Google Fonts | ✅ |
| AC19 | Suara, konfeti, animasi saat benar/selesai | ✅ |
| AC20 | README lengkap dengan deploy + kredit | ✅ |

---

## 🏅 Kredit

**TIM MGMP INFORMATIKA SMP NEGERI 19 KOTA BEKASI**
Kurikulum Merdeka · Pembelajaran Mendalam 2026

---

## 📄 Lisensi

Digunakan untuk keperluan pembelajaran internal SMP Negeri 19 Kota Bekasi.
Bebas dimodifikasi oleh guru untuk kepentingan pendidikan.

---

© 2026 SMP Negeri 19 Kota Bekasi