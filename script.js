/* =========================================================
   KARYA LAB — Uji, Perbaiki, Tampilkan!
   LKPD Interaktif Informatika Kelas 8 · K8P16 · Ganjil 2026/2027
   Murni client-side: HTML + CSS + Vanilla JS
   ========================================================= */

/* =========================================================
   // ⚙️ TUNABLE CONSTANTS  (guru boleh ubah bagian ini saja)
   ========================================================= */
const NAMA_SEKOLAH       = "SMP Negeri 19 Kota Bekasi";                 // ⚙️ TUNABLE
const FOOTER_TEXT        = "LKPD Informatika Kelas 8 · Proyek Integratif: Uji, Presentasi, Refleksi · © 2026 SMP Negeri 19 Kota Bekasi"; // ⚙️ TUNABLE (B11 — wajib persis)
const TAHUN              = 2026;                                          // ⚙️ TUNABLE
const KODE_BERKAS        = "K8P16";                                       // ⚙️ TUNABLE
const DEFAULT_LANG       = "id";                                          // ⚙️ TUNABLE ("id" = padanan tampil)
const SOUND_ENABLED      = true;                                          // ⚙️ TUNABLE
const MAX_RETRY          = 2;                                             // ⚙️ TUNABLE
const SKOR_MIN_BINTANG   = [0, 40, 60, 80, 95];                           // ⚙️ TUNABLE
const TIMER_SHOWCASE_DETIK = 120;                                         // ⚙️ TUNABLE
const STORAGE_KEY        = "karyaLab_progress";                           // ⚙️ TUNABLE
const MAX_SKOR           = 150;                                           // total poin maksimum sistem
const LOGO_PATH          = "logo.png";                                    // ⚙️ TUNABLE (lihat index.html)

/* =========================================================
   // DATA SOAL — SEMUA DATA BAGIAN 5 (JANGAN DIUBAH SEMBARANGAN)
   ========================================================= */
const DATA_SOAL = {
  // 5.1 Dashboard Versi 1 (buggy)
  dashboardV1: {
    judul: "Dashboard Sampah Versi 1 (masih bermasalah)",
    baris: [
      { kelas: "8A", botol: 24, bungkus: 41, persen: "26,1%", petugas: "Aisyah Putri Rahma" },
      { kelas: "8B", botol: 18, bungkus: 36, persen: "19,6%", petugas: "Bima Saputra" },
      { kelas: "8C", botol: 30, bungkus: 58, persen: "3,26%", petugas: "Citra Lestari" },
      { kelas: "8D", botol: 10, bungkus: 33, persen: "—",     petugas: "Dimas Pratama" }
    ],
    totalBotolSalah: 82,
    totalBungkus: 168
  },

  // 5.2 Dashboard Versi 2 (setelah perbaikan)
  dashboardV2: {
    judul: "Dashboard Sampah Versi 2 (sudah diperbaiki)",
    baris: [
      { kelas: "8A", botol: 24, bungkus: 41, persen: "26,1%", piket: "1" },
      { kelas: "8B", botol: 18, bungkus: 36, persen: "19,6%", piket: "2" },
      { kelas: "8C", botol: 30, bungkus: 58, persen: "32,6%", piket: "3" },
      { kelas: "8D", botol: 20, bungkus: 33, persen: "21,7%", piket: "4" }
    ],
    totalBotol: 92,
    totalBungkus: 168,
    totalPersen: "100%"
  },

  // Temuan bug pada Misi 2
  bugList: [
    { id: "total",    wajib: true,  poin: 10, pesan: "Total botol 82 salah! 24+18+30+20 = 92." },
    { id: "persen8c", wajib: true,  poin: 10, pesan: "Persen 8C 3,26% salah! 30 ÷ 92 × 100% = 32,6%." },
    { id: "nama",     wajib: true,  poin: 10, pesan: "Ada nama lengkap murid — melanggar privasi!" },
    { id: "nilai8d",  wajib: false, poin: 10, pesan: "Nilai kelas 8D salah ketik: 10 → seharusnya 20." }
  ],

  // 5.3 Skenario uji program Scratch
  scratch: [
    { no: 1, nama: "Normal", aksi: 'Memilih "Cek sumber dulu"', harap: 'Skor +1 & muncul "Bagus!"', nyata: "Sesuai", status: "Lulus" },
    { no: 2, nama: "Jawaban salah", aksi: 'Memilih "Langsung teruskan"', harap: 'Muncul "Hati-hati, cek dulu ya"', nyata: "Sesuai", status: "Lulus" },
    { no: 3, nama: "Mulai lagi", aksi: 'Menekan tombol "Mulai lagi"', harap: "Kembali ke soal 1 & skor jadi 0", nyata: "Skor tidak kembali ke 0", status: "Perlu perbaikan" }
  ],

  // 5.4 Umpan balik
  umpanBalik: {
    buruk: '"Infografismu jelek!"',
    baik: '"Aku melihat tulisan judulnya kecil. Aku merasa sulit membacanya dari belakang kelas. ' +
          'Aku menyarankan hurufnya diperbesar dan pakai warna yang lebih gelap. Oh ya, gambar botolnya bagus sekali!"'
  },

  // Misi 3 — 5 temuan + kategori benar
  temuan3B: [
    { teks: "Total 82 padahal 92",                          jawab: "Benar" },
    { teks: "Persentase 3,26% salah, harusnya 32,6%",        jawab: "Benar" },
    { teks: "Ada nama lengkap murid",                        jawab: "Aman" },
    { teks: "Diagram tidak berjudul",                        jawab: "Bermanfaat" },
    { teks: "Semua batang sama warna",                       jawab: "Bermanfaat" }
  ],

  // 5.5 Matriks Prioritas & Log Perbaikan
  matriks: [
    { no: 1, teks: "Total botol 82 padahal 92",              jenis: "Benar",      penting: 3, mudah: 3, perbaikan: "Angka 8D → 20; total → 92" },
    { no: 2, teks: "Persen 8C 3,26% padahal 32,6%",          jenis: "Benar",      penting: 3, mudah: 3, perbaikan: "Angka → 32,6%; pakai rumus" },
    { no: 3, teks: "Ada nama lengkap murid",                 jenis: "Aman",       penting: 3, mudah: 3, perbaikan: 'Ganti "Kelompok piket 1–4"' },
    { no: 4, teks: "Diagram tanpa judul",                    jenis: "Bermanfaat", penting: 2, mudah: 3, perbaikan: "Tambah judul & satuan" },
    { no: 5, teks: "Semua batang sama warna",                jenis: "Bermanfaat", penting: 1, mudah: 2, perbaikan: "Belum dikerjakan (prioritas rendah)" }
  ],
  // kunci prioritas: temuan no 1 (angka) dan no 3 (nama pribadi) harus ada di 3 teratas
  prioritasKunci: [1, 3],

  // Misi 5 — Log Perbaikan (sebelum → sesudah)
  logPerbaikan: [
    { id: "L1", sebelum: "Total botol: 82",                        sesudah: "Total botol: 92" },
    { id: "L2", sebelum: "Persen 8C: 3,26%",                       sesudah: "Persen 8C: 32,6%" },
    { id: "L3", sebelum: "Kolom Petugas: Aisyah Putri Rahma…",     sesudah: "Kolom Petugas: Kelompok piket 1–4" },
    { id: "L4", sebelum: "Diagram tanpa judul",                    sesudah: 'Diagram berjudul "Sampah Plastik per Kelas (buah)"' }
  ],

  // 5.6 Showcase — 5 bagian cerita 2 menit
  showcase: [
    { id: "S1", bagian: "1. Masalah",            waktu: "15 detik", isi: "Masalah apa & siapa yang terdampak" },
    { id: "S2", bagian: "2. Karya",              waktu: "30 detik", isi: "Tunjukkan karya & cara kerjanya" },
    { id: "S3", bagian: "3. Uji",                waktu: "25 detik", isi: "Bagaimana diuji & temuan utama" },
    { id: "S4", bagian: "4. Perbaikan",          waktu: "25 detik", isi: "Apa yang diubah (sebelum → sesudah)" },
    { id: "S5", bagian: "5. Manfaat & Ajakan",   waktu: "25 detik", isi: "Manfaat bagi sekolah & ajakan" }
  ],

  // 5.7 Soal Etika
  etika: [
    { teks: "Foto teman tanpa izin dipasang di poster kampanye.", benar: "tidak", alasan: "Tidak boleh — melanggar privasi." },
    { teks: "Gambar dari internet dipakai di infografis tanpa menyebut sumber.", benar: "tidak", alasan: "Tidak boleh — berpotensi melanggar hak cipta." },
    { teks: "Data diubah agar karya terlihat bagus.", benar: "tidak", alasan: "Tidak boleh — tidak jujur, data harus apa adanya." }
  ],

  // 5.8 Refleksi
  refleksi: [
    { id: "refApa",      label: "Apa yang terjadi?",              arti: "Ceritakan apa yang diuji, ditemukan, diperbaiki, dan perasaannya." },
    { id: "refLalu",     label: "Lalu Apa artinya?",              arti: "Apa yang dipelajari tentang karya, kerja sama, dan diri sendiri?" },
    { id: "refSekarang", label: "Sekarang Apa yang akan dilakukan?", arti: "Rencana perbaikan & langkah lanjut." }
  ],

  // Glosarium dwibahasa (WAJIB)
  glosarium: [
    { en: "Artifact / Artefact", id: "Artefak (hasil karya)",           di: "Header" },
    { en: "Showcase",            id: "Unjuk karya / pameran karya",      di: "Misi 6" },
    { en: "Dashboard",           id: "Papan pantau data",                di: "Misi 1" },
    { en: "Infographic",         id: "Infografis (poster informasi)",    di: "Misi 1" },
    { en: "Campaign",            id: "Kampanye digital (ajakan massal)", di: "Misi 1" },
    { en: "Prototype",           id: "Purwarupa (contoh awal)",          di: "Misi 4" },
    { en: "Testing",             id: "Pengujian",                        di: "Misi 2" },
    { en: "Feedback",            id: "Umpan balik (masukan)",            di: "Misi 3" },
    { en: "Iteration",           id: "Iterasi (pengulangan perbaikan)",  di: "Misi 5" },
    { en: "Bug",                 id: "Kesalahan pada program/karya",     di: "Misi 2" },
    { en: "Log",                 id: "Catatan berurutan",                di: "Misi 5" },
    { en: "Self Assessment",     id: "Penilaian diri",                   di: "Misi 7" },
    { en: "Peer Assessment",     id: "Penilaian teman sebaya",           di: "Halaman Hasil" },
    { en: "Worked Example",      id: "Contoh terselesaikan",             di: "Modal bantuan" },
    { en: "Pitch",               id: "Presentasi singkat",               di: "Misi 6" },
    { en: "What–So What–Now What", id: "Apa–Lalu Apa–Sekarang Apa (model refleksi)", di: "Misi 7" },
    { en: "Scaffolding",         id: "Bantuan bertahap",                 di: "Tooltip" },
    { en: "Usability",           id: "Kemudahan dipakai",                di: "Misi 3" },
    { en: "Data Privacy",        id: "Privasi data",                     di: "Misi 7" },
    { en: "Copyright",           id: "Hak cipta",                        di: "Misi 7" },
    { en: "Fact Checking",       id: "Cek fakta",                        di: "Misi 7" },
    { en: "Presentation",        id: "Presentasi",                       di: "Misi 6" }
  ],

  // Kartu Uji 3B adaptif per jenis karya
  kartuAdaptif: {
    Dashboard:  { judul: "Kartu Uji 3B — Dashboard (Papan Pantau Data)",
                  isi: "Periksa: angka total benar? rumus persen tepat? ada data pribadi? diagram ada judulnya?" },
    Infografis: { judul: "Kartu Uji 3B — Infographic (Infografis)",
                  isi: "Periksa: judul terbaca? warna kontras? sumber gambar ada? data akurat & tidak menyesatkan?" },
    Program:    { judul: "Kartu Uji 3B — Program (Scratch/Kuis)",
                  isi: "Periksa: skenario normal, jawaban salah, dan mulai lagi. Apakah skor kembali ke 0?" },
    Kampanye:   { judul: "Kartu Uji 3B — Campaign (Kampanye Digital)",
                  isi: "Periksa: ajakan jelas? ada izin foto? sumber gambar? pesan tidak menyinggung siapa pun?" }
  }
};

/* =========================================================
   // STATE — objek state global
   ========================================================= */
const state = {
  screen: "start",
  namaKelompok: "",
  anggota: [],
  jenisKarya: "",
  peran: "",
  kesiapan: "",
  masalah: "",
  pengguna: "",
  bugDitemukan: [],
  misi3: {},            // index temuan -> kategori
  misi3Terkunci: false,
  misi4Skor: {},        // index -> {penting, mudah}
  misi4Urut: [],        // urutan index hasil sorting
  misi4Top3: [],
  misi4Terkunci: false,
  misi5: {},            // slotId -> chipId
  misi5Terkunci: false,
  misi6: {},            // slotIndex -> chipId
  misi6Terkunci: false,
  misi6Format: "",
  etika: {},            // index -> "boleh"/"tidak"
  etikaTerkunci: false,
  refleksi: { refApa: "", refLalu: "", refSekarang: "" },
  perasaan: "",
  apresiasi: { apre1: "", apre2: "", apre3: "" },
  teman: [
    { nama: "", kontribusi: "", pujian: "", saran: "" },
    { nama: "", kontribusi: "", pujian: "", saran: "" }
  ],
  poin: { misi1: 0, misi2: 0, misi3: 0, misi4: 0, misi5: 0, misi6: 0, misi7: 0 },
  retry: { misi3: 0, misi4: 0, misi5: 0, misi6: 0, misi7: 0 },
  selesai: {},          // "misi1".."misi7" -> true
  sound: SOUND_ENABLED,
  lang: DEFAULT_LANG,
  theme: "light",
  textsize: "normal",
  motion: "full",
  guru: false
};

/* =========================================================
   // FUNGSI UTILITAS
   ========================================================= */

/** Menampilkan toast di atas layar. tipe: info | ok | err */
function showToast(pesan, tipe = "info", durasi = 2200) {
  const box = document.getElementById("toastBox");
  const el = document.createElement("div");
  el.className = "toast " + tipe;
  el.textContent = pesan;
  box.appendChild(el);
  setTimeout(() => {
    el.style.transition = "opacity .3s";
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 320);
  }, durasi);
}

/** Escape teks agar aman dimasukkan ke HTML/SVG */
function escapeXML(teks) {
  return String(teks == null ? "" : teks)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/* ---------- AUDIO: Web Audio API (tanpa file mp3) ---------- */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      audioCtx = null;
    }
  }
  return audioCtx;
}

/**
 * Memainkan nada sederhana.
 * jenis: "ding" | "buzz" | "tap" | "fanfare"
 */
function playSound(jenis) {
  if (!state.sound) return;
  const ctx = getAudioCtx();
  if (!ctx) return;
  if (ctx.state === "suspended") ctx.resume();

  const now = ctx.currentTime;
  const buat = (freq, mulai, durasi, tipe = "sine", vol = 0.16) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = tipe;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now + mulai);
    gain.gain.exponentialRampToValueAtTime(vol, now + mulai + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + mulai + durasi);
    osc.connect(gain).connect(ctx.destination);
    osc.start(now + mulai);
    osc.stop(now + mulai + durasi + 0.05);
  };

  if (jenis === "ding") {
    buat(880, 0, 0.18, "sine", 0.18);
    buat(1320, 0.06, 0.22, "sine", 0.12);
  } else if (jenis === "buzz") {
    buat(180, 0, 0.20, "square", 0.12);
    buat(140, 0.10, 0.20, "square", 0.10);
  } else if (jenis === "tap") {
    buat(520, 0, 0.06, "triangle", 0.10);
  } else if (jenis === "fanfare") {
    [523, 659, 784, 1047].forEach((f, i) => buat(f, i * 0.12, 0.28, "sine", 0.15));
  }
}

/* ---------- KONFETI (canvas buatan sendiri, tanpa library) ---------- */
const confettiCanvas = document.getElementById("confettiCanvas");
const confettiCtx = confettiCanvas.getContext("2d");
let confettiParts = [];
let confettiAktif = false;

function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeConfetti);
resizeConfetti();

function confetti(jumlah = 130) {
  if (state.motion === "reduced") return;
  const warna = ["#1E5B94", "#39B54A", "#F5C518", "#D9534F", "#8E44AD", "#FFFFFF"];
  for (let i = 0; i < jumlah; i++) {
    confettiParts.push({
      x: Math.random() * confettiCanvas.width,
      y: -20 - Math.random() * 120,
      vx: (Math.random() - 0.5) * 3.2,
      vy: 2 + Math.random() * 4,
      s: 5 + Math.random() * 8,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.25,
      c: warna[Math.floor(Math.random() * warna.length)]
    });
  }
  if (!confettiAktif) {
    confettiAktif = true;
    requestAnimationFrame(gambarConfetti);
  }
}

function gambarConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParts.forEach(p => {
    p.x += p.vx; p.y += p.vy; p.vy += 0.045; p.rot += p.vr;
    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot);
    confettiCtx.fillStyle = p.c;
    confettiCtx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.62);
    confettiCtx.restore();
  });
  confettiParts = confettiParts.filter(p => p.y < confettiCanvas.height + 60);
  if (confettiParts.length > 0) {
    requestAnimationFrame(gambarConfetti);
  } else {
    confettiAktif = false;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

/* ---------- SIMPAN / MUAT PROGRES ---------- */
function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    /* localStorage penuh / diblokir → abaikan, game tetap jalan */
  }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    Object.keys(state).forEach(k => {
      if (Object.prototype.hasOwnProperty.call(data, k)) state[k] = data[k];
    });
    return true;
  } catch (e) {
    return false;
  }
}

function hapusProgress() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

/* ---------- SKOR & BINTANG ---------- */
function hitungSkorTotal() {
  let raw = 0;
  Object.values(state.poin).forEach(v => { raw += (Number(v) || 0); });
  const skor = Math.min(100, Math.round((raw / MAX_SKOR) * 100));
  return { raw, skor };
}

function bintangDariSkor(skor) {
  let b = 1;
  SKOR_MIN_BINTANG.forEach((min, i) => { if (skor >= min) b = i + 1; });
  return b;
}

function tambahPoin(kunci, nilai) {
  state.poin[kunci] = (state.poin[kunci] || 0) + nilai;
  saveProgress();
}

/* ---------- FORMAT WAKTU ---------- */
function formatWaktu(detik) {
  const m = Math.floor(detik / 60);
  const s = detik % 60;
  return m + ":" + String(s).padStart(2, "0");
}

/* ---------- TIMER ---------- */
let timerHandle = null;
function jalankanCountdown(elId, detik, saatHabis) {
  clearInterval(timerHandle);
  const el = document.getElementById(elId);
  let sisa = detik;
  el.classList.remove("habis");
  el.textContent = formatWaktu(sisa);
  timerHandle = setInterval(() => {
    sisa--;
    if (sisa <= 0) {
      clearInterval(timerHandle);
      el.textContent = "0:00";
      el.classList.add("habis");
      playSound("fanfare");
      if (typeof saatHabis === "function") saatHabis();
      return;
    }
    el.textContent = formatWaktu(sisa);
    if (sisa <= 10) {
      playSound("tap");
      el.classList.add("habis");
    }
  }, 1000);
}

/* =========================================================
   // FUNGSI RENDER — Navigasi & Header
   ========================================================= */
const DAFTAR_MISI = [
  { id: "misi1", screen: "screen-misi1", nama: "Jenis & Kesiapan" },
  { id: "misi2", screen: "screen-misi2", nama: "Temukan Kesalahan" },
  { id: "misi3", screen: "screen-misi3", nama: "Uji 3B" },
  { id: "misi4", screen: "screen-misi4", nama: "Matriks Prioritas" },
  { id: "misi5", screen: "screen-misi5", nama: "Perbaiki & Catat" },
  { id: "misi6", screen: "screen-misi6", nama: "Showcase 5 Bagian" },
  { id: "misi7", screen: "screen-misi7", nama: "Refleksi & Etika" }
];

function judulScreen(id) {
  const map = {
    "screen-start": "Halaman Pembuka",
    "screen-showcase": "Showcase — Panggung Presentasi",
    "screen-result": "Hasil Akhir"
  };
  if (map[id]) return map[id];
  const m = DAFTAR_MISI.find(x => x.screen === id);
  return m ? ("Misi " + m.id.replace("misi", "") + " — " + m.nama) : "KARYA LAB";
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const target = document.getElementById(id);
  if (target) target.classList.add("active");
  state.screen = id;
  document.getElementById("hdrTitle").textContent = judulScreen(id);
  window.scrollTo({ top: 0, behavior: state.motion === "reduced" ? "auto" : "smooth" });
  renderProgressStrip();
  renderMinimap();
  saveProgress();
}

function renderProgressStrip() {
  const strip = document.getElementById("progressStrip");
  strip.innerHTML = "";
  DAFTAR_MISI.forEach((m, i) => {
    const div = document.createElement("div");
    div.className = "star-dot";
    if (state.selesai[m.id]) div.classList.add("selesai");
    else if (state.screen === m.screen) div.classList.add("aktif");
    div.innerHTML = '<span class="bulat">' + (state.selesai[m.id] ? "★" : (i + 1)) + "</span>" + m.nama;
    strip.appendChild(div);
  });
}

function renderMinimap() {
  const mm = document.getElementById("minimap");
  mm.innerHTML = "";
  DAFTAR_MISI.forEach((m, i) => {
    const el = document.createElement("div");
    el.className = "mm-item";
    if (state.selesai[m.id]) el.classList.add("done");
    else if (state.screen === m.screen) el.classList.add("now");
    el.textContent = (state.selesai[m.id] ? "✔ " : (i + 1) + ". ") + m.nama;
    mm.appendChild(el);
  });
  const elSh = document.createElement("div");
  elSh.className = "mm-item" + (state.screen === "screen-showcase" ? " now" : "") +
                  (state.selesai.showcase ? " done" : "");
  elSh.textContent = "🎬 Showcase";
  mm.appendChild(elSh);
}

/* =========================================================
   // RENDER: START
   ========================================================= */
function initStart() {
  document.getElementById("inpKelompok").value = state.namaKelompok || "";
  const inputs = document.querySelectorAll(".inp-anggota");
  inputs.forEach((inp, i) => { inp.value = (state.anggota && state.anggota[i]) || ""; });
  document.getElementById("inpJenis").value = state.jenisKarya || "";
  if (state.peran) {
    const r = document.querySelector('input[name="peran"][value="' + state.peran + '"]');
    if (r) r.checked = true;
  }
}

/* =========================================================
   // RENDER: MISI 1
   ========================================================= */
function renderMisi1() {
  document.querySelectorAll("#gridJenis .pick-card").forEach(c => {
    c.classList.toggle("chosen", c.dataset.jenis === state.jenisKarya);
  });
  document.querySelectorAll("#gridKesiapan .pick-card").forEach(c => {
    c.classList.toggle("chosen", c.dataset.siap === state.kesiapan);
  });
  document.getElementById("inpMasalah").value = state.masalah || "";
  document.getElementById("inpPengguna").value = state.pengguna || "";
}

/* =========================================================
   // RENDER: MISI 2
   ========================================================= */
function renderMisi2() {
  document.querySelectorAll("#tblBuggy .bug").forEach(td => {
    if (state.bugDitemukan.includes(td.dataset.bug)) td.classList.add("found");
  });
  const wajib = DATA_SOAL.bugList.filter(b => b.wajib).map(b => b.id);
  const ketemuWajib = wajib.filter(id => state.bugDitemukan.includes(id)).length;
  document.getElementById("bugCount").textContent = ketemuWajib;

  const sudahLengkap = ketemuWajib >= 3;
  document.getElementById("panelV2").classList.toggle("hidden", !sudahLengkap);
  document.getElementById("btnMisi2Lanjut").disabled = !sudahLengkap;

  if (sudahLengkap && !state.selesai.misi2) {
    state.selesai.misi2 = true;
    state.poin.misi1 = state.poin.misi1 || 0;
    playSound("fanfare");
    confetti(90);
    showToast("Semua temuan utama ketemu! 🎉", "ok");
  }
  if (sudahLengkap) gambarChartV2();
  renderProgressStrip();
  renderMinimap();
}

/* Gambar diagram batang SVG versi 2 (tanpa library) */
function gambarChartV2() {
  const box = document.getElementById("chartV2");
  if (!box || box.dataset.done === "1") return;
  box.dataset.done = "1";

  const data = DATA_SOAL.dashboardV2.baris;
  const W = 640, H = 300;
  const padKiri = 60, padBawah = 70, padAtas = 50, padKanan = 20;
  const maxV = 60;
  const areaW = W - padKiri - padKanan;
  const areaH = H - padAtas - padBawah;
  const barW = areaW / data.length * 0.5;

  let svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" ' +
            'aria-label="Diagram batang sampah plastik per kelas, total 92 buah">';
  svg += '<text x="' + (W / 2) + '" y="26" text-anchor="middle" font-size="17" font-weight="700" ' +
         'fill="#1E5B94">Sampah Plastik per Kelas (buah)</text>';

  // sumbu
  svg += '<line x1="' + padKiri + '" y1="' + (padAtas + areaH) + '" x2="' + (padKiri + areaW) +
         '" y2="' + (padAtas + areaH) + '" stroke="#4A5A6A" stroke-width="2"/>';
  svg += '<line x1="' + padKiri + '" y1="' + padAtas + '" x2="' + padKiri + '" y2="' +
         (padAtas + areaH) + '" stroke="#4A5A6A" stroke-width="2"/>';

  // gridline + label
  for (let v = 0; v <= maxV; v += 20) {
    const y = padAtas + areaH - (v / maxV) * areaH;
    svg += '<line x1="' + padKiri + '" y1="' + y + '" x2="' + (padKiri + areaW) + '" y2="' + y +
           '" stroke="#D7E3EE" stroke-width="1"/>';
    svg += '<text x="' + (padKiri - 10) + '" y="' + (y + 5) + '" text-anchor="end" font-size="12" ' +
           'fill="#4A5A6A">' + v + "</text>";
  }

  const warnaBar = ["#1E5B94", "#39B54A", "#F5C518", "#8E44AD"];
  data.forEach((d, i) => {
    const cx = padKiri + (areaW / data.length) * (i + 0.5);
    const h = (d.botol / maxV) * areaH;
    const y = padAtas + areaH - h;
    svg += '<rect x="' + (cx - barW / 2) + '" y="' + y + '" width="' + barW + '" height="' + h +
           '" rx="6" fill="' + warnaBar[i % warnaBar.length] + '"/>';
    svg += '<text x="' + cx + '" y="' + (y - 8) + '" text-anchor="middle" font-size="14" ' +
           'font-weight="700" fill="#12263A">' + d.botol + "</text>";
    svg += '<text x="' + cx + '" y="' + (padAtas + areaH + 24) + '" text-anchor="middle" ' +
           'font-size="14" font-weight="600" fill="#4A5A6A">' + d.kelas + "</text>";
  });
  svg += "</svg>";
  box.innerHTML = svg;
}

/* =========================================================
   // RENDER: MISI 3
   ========================================================= */
function renderMisi3() {
  // Kartu adaptif sesuai jenis karya Misi 1
  const jenis = state.jenisKarya || "Dashboard";
  const kartu = DATA_SOAL.kartuAdaptif[jenis] || DATA_SOAL.kartuAdaptif.Dashboard;
  document.getElementById("kartuAdaptif").innerHTML =
    "<h3>" + escapeXML(kartu.judul) + "</h3><p>" + escapeXML(kartu.isi) + "</p>";

  const wrap = document.getElementById("listTemuan");
  wrap.innerHTML = "";

  DATA_SOAL.temuan3B.forEach((t, i) => {
    const item = document.createElement("div");
    item.className = "temuan-item";
    item.dataset.idx = i;

    const p = document.createElement("p");
    p.textContent = (i + 1) + ". " + t.teks;
    item.appendChild(p);

    const btns = document.createElement("div");
    btns.className = "cat-btns";
    [["Benar", "🎯 Benar (Correctness)"],
     ["Fungsi", "⚙️ Berfungsi (Function)"],
     ["Aman", "🛡️ Bermanfaat & Aman"],
     ["Bermanfaat", "🌟 Bermanfaat (Benefit)"]].forEach(pair => {
      if (pair[0] === "Aman" && i !== 2) { /* tetap tampil */ }
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = pair[1];
      b.dataset.nilai = pair[0];
      if (state.misi3[i] === pair[0]) b.classList.add("sel");
      b.addEventListener("click", () => pilihKategori3(i, pair[0]));
      btns.appendChild(b);
    });

    // hilangkan duplikasi "Bermanfaat & Aman" vs "Bermanfaat" agar jelas
    item.appendChild(btns);
    wrap.appendChild(item);

    if (state.misi3Terkunci) {
      item.classList.add(state.misi3[i] === t.jawab ? "benar" : "salah");
      btns.querySelectorAll("button").forEach(b => { b.disabled = true; });
    }
  });

  const benar = hitungBenar3();
  document.getElementById("misi3Benar").textContent = benar;
}

function hitungBenar3() {
  let n = 0;
  DATA_SOAL.temuan3B.forEach((t, i) => { if (state.misi3[i] === t.jawab) n++; });
  return n;
}

function pilihKategori3(idx, nilai) {
  if (state.misi3Terkunci) return;
  state.misi3[idx] = nilai;
  playSound("tap");
  saveProgress();
  renderMisi3();
}

/* =========================================================
   // RENDER: MISI 4
   ========================================================= */
function renderMisi4() {
  const tbody = document.getElementById("tbodyMatriks");
  tbody.innerHTML = "";
  DATA_SOAL.matriks.forEach((m, i) => {
    const skorTersimpan = state.misi4Skor[i] || {};
    const p = skorTersimpan.penting || "";
    const md = skorTersimpan.mudah || "";

    const tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" + m.no + "</td>" +
      "<td>" + escapeXML(m.teks) + "</td>" +
      "<td>" + escapeXML(m.jenis) + "</td>" +
      '<td><select data-idx="' + i + '" data-jenis="penting" aria-label="Penting untuk ' + escapeXML(m.teks) + '">' +
        opsiSkor(p) +
      "</select></td>" +
      '<td><select data-idx="' + i + '" data-jenis="mudah" aria-label="Mudah untuk ' + escapeXML(m.teks) + '">' +
        opsiSkor(md) +
      "</select></td>" +
      '<td><span class="skor-pill" id="skorPill' + i + '">' +
        ((Number(p) || 0) + (Number(md) || 0) || "–") +
      "</span></td>";
    tbody.appendChild(tr);
  });

  tbody.querySelectorAll("select").forEach(sel => {
    sel.disabled = state.misi4Terkunci;
    sel.addEventListener("change", () => {
      const i = Number(sel.dataset.idx);
      if (!state.misi4Skor[i]) state.misi4Skor[i] = { penting: "", mudah: "" };
      state.misi4Skor[i][sel.dataset.jenis] = sel.value;
      const pil = document.getElementById("skorPill" + i);
      const pv = Number(state.misi4Skor[i].penting) || 0;
      const mv = Number(state.misi4Skor[i].mudah) || 0;
      pil.textContent = (pv + mv) || "–";
      saveProgress();
    });
  });

  if (state.misi4Terkunci) {
    document.getElementById("hasilPrioritas").classList.remove("hidden");
    tampilkanUrutanPrioritas();
    tampilkanPilihTop3();
  } else if (state.misi4Urut && state.misi4Urut.length) {
    document.getElementById("hasilPrioritas").classList.remove("hidden");
    tampilkanUrutanPrioritas();
    tampilkanPilihTop3();
  }
}

function opsiSkor(terpilih) {
  let s = '<option value="">–</option>';
  [1, 2, 3].forEach(v => {
    s += '<option value="' + v + '"' + (String(terpilih) === String(v) ? " selected" : "") + ">" + v + "</option>";
  });
  return s;
}

function hitungPrioritas() {
  const lengkap = DATA_SOAL.matriks.every((m, i) => {
    const s = state.misi4Skor[i];
    return s && s.penting && s.mudah;
  });
  if (!lengkap) {
    showToast("Isi dulu semua skor Penting & Mudah (1–3).", "err");
    playSound("buzz");
    return false;
  }

  const arr = DATA_SOAL.matriks.map((m, i) => {
    const s = state.misi4Skor[i];
    return { idx: i, no: m.no, teks: m.teks, jenis: m.jenis,
             total: Number(s.penting) + Number(s.mudah) };
  });
  arr.sort((a, b) => b.total - a.total || a.no - b.no);
  state.misi4Urut = arr.map(x => x.idx);

  document.getElementById("hasilPrioritas").classList.remove("hidden");
  tampilkanUrutanPrioritas();
  tampilkanPilihTop3();

  if (!state.poin.misi4Sudah) {
    tambahPoin("misi4", 10);
    state.poin.misi4Sudah = true;
    saveProgress();
  }
  showToast("Prioritas berhasil dihitung! 📊", "ok");
  playSound("ding");
  return true;
}

function tampilkanUrutanPrioritas() {
  const ol = document.getElementById("listPrioritas");
  ol.innerHTML = "";
  state.misi4Urut.forEach(i => {
    const m = DATA_SOAL.matriks[i];
    const s = state.misi4Skor[i] || { penting: 0, mudah: 0 };
    const li = document.createElement("li");
    if (m.jenis === "Aman") li.classList.add("aman");
    if (m.jenis === "Benar") li.classList.add("benar");
    li.innerHTML = "<strong>" + escapeXML(m.teks) + "</strong> — " +
      "Jenis: " + escapeXML(m.jenis) +
      " · Penting " + s.penting + " × Mudah " + s.mudah +
      " = <strong>Skor " + (Number(s.penting) + Number(s.mudah)) + "</strong>";
    ol.appendChild(li);
  });
}

function tampilkanPilihTop3() {
  const box = document.getElementById("pilihTop3");
  box.innerHTML = "";
  state.misi4Urut.forEach(i => {
    const m = DATA_SOAL.matriks[i];
    const label = document.createElement("label");
    if (state.misi4Top3.includes(m.no)) label.classList.add("picked");
    label.innerHTML = '<input type="checkbox" value="' + m.no + '"' +
      (state.misi4Top3.includes(m.no) ? " checked" : "") +
      (state.misi4Terkunci ? " disabled" : "") + ">" +
      "<span><strong>No " + m.no + "</strong> — " + escapeXML(m.teks) + " <em>(" + escapeXML(m.jenis) + ")</em></span>";
    const cb = label.querySelector("input");
    cb.addEventListener("change", () => {
      const no = Number(cb.value);
      if (cb.checked) {
        if (state.misi4Top3.length >= 3) {
          cb.checked = false;
          showToast("Maksimal 3 temuan teratas.", "err");
          return;
        }
        state.misi4Top3.push(no);
        playSound("tap");
      } else {
        state.misi4Top3 = state.misi4Top3.filter(x => x !== no);
      }
      document.getElementById("top3Count").textContent = state.misi4Top3.length;
      tampilkanPilihTop3();
      saveProgress();
    });
    box.appendChild(label);
  });
  document.getElementById("top3Count").textContent = state.misi4Top3.length;
}

/* =========================================================
   // RENDER: MISI 5 (Log Perbaikan)
   ========================================================= */
let chipTerpilih5 = null;

function renderMisi5() {
  const rows = document.getElementById("logRows");
  rows.innerHTML = "";

  DATA_SOAL.logPerbaikan.forEach(log => {
    const row = document.createElement("div");
    row.className = "log-row";

    const sebelum = document.createElement("div");
    sebelum.className = "sebelum";
    sebelum.textContent = "SEBELUM: " + log.sebelum;

    const arrow = document.createElement("div");
    arrow.className = "arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "➡️";

    const slot = document.createElement("div");
    slot.className = "drop-slot";
    slot.dataset.slot = log.id;
    slot.tabIndex = 0;
    slot.setAttribute("role", "button");
    const isi = state.misi5[log.id];
    if (isi) {
      const chip = DATA_SOAL.logPerbaikan.find(l => l.id === isi);
      slot.textContent = chip ? chip.sesudah : "";
      slot.classList.add("filled");
      if (state.misi5Terkunci) {
        slot.classList.add(isi === log.id ? "benar" : "salah");
      }
    } else {
      slot.textContent = "Klik di sini untuk menempelkan kartu SESUDAH";
    }

    slot.addEventListener("click", () => pasangChip5(log.id));
    slot.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pasangChip5(log.id); } });
    slot.addEventListener("dragover", e => { e.preventDefault(); slot.classList.add("hover"); });
    slot.addEventListener("dragleave", () => slot.classList.remove("hover"));
    slot.addEventListener("drop", e => {
      e.preventDefault();
      slot.classList.remove("hover");
      const id = e.dataTransfer.getData("text/plain");
      if (id) pasangChipLangsung5(log.id, id);
    });

    row.appendChild(sebelum);
    row.appendChild(arrow);
    row.appendChild(slot);
    rows.appendChild(row);
  });

  // Pool chip SESUDAH (urutan diacak sekali)
  const pool = document.getElementById("chipPool5");
  pool.innerHTML = "";
  const urutanAcak = ["L3", "L1", "L4", "L2"];
  urutanAcak.forEach(id => {
    const log = DATA_SOAL.logPerbaikan.find(l => l.id === id);
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.dataset.chip = id;
    chip.draggable = !state.misi5Terkunci;
    chip.textContent = log.sesudah;

    const sudahDipakai = Object.values(state.misi5).includes(id);
    if (sudahDipakai) chip.classList.add("terpakai");

    chip.addEventListener("click", () => {
      if (state.misi5Terkunci || chip.classList.contains("terpakai")) return;
      chipTerpilih5 = (chipTerpilih5 === id) ? null : id;
      document.querySelectorAll("#chipPool5 .chip").forEach(c => c.classList.remove("selected"));
      if (chipTerpilih5) { chip.classList.add("selected"); playSound("tap"); }
    });

    chip.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", id);
    });

    pool.appendChild(chip);
  });

  document.getElementById("logBenar").textContent = hitungLogBenar();
  document.getElementById("btnUjiUlang").disabled = hitungLogBenar() < 4 || state.misi5Terkunci;
  renderProgressStrip();
}

function pasangChip5(slotId) {
  if (state.misi5Terkunci) return;
  if (!chipTerpilih5) {
    showToast("Pilih dulu kartu SESUDAH di bawah.", "info");
    return;
  }
  pasangChipLangsung5(slotId, chipTerpilih5);
  chipTerpilih5 = null;
}

function pasangChipLangsung5(slotId, chipId) {
  if (state.misi5Terkunci) return;
  // kalau chip sudah dipakai di slot lain → hapus dari sana
  Object.keys(state.misi5).forEach(k => {
    if (state.misi5[k] === chipId) delete state.misi5[k];
  });
  state.misi5[slotId] = chipId;
  playSound("tap");
  saveProgress();
  renderMisi5();
}

function hitungLogBenar() {
  let n = 0;
  Object.keys(state.misi5).forEach(slot => {
    if (state.misi5[slot] === slot) n++;
  });
  return n;
}

/* =========================================================
   // RENDER: MISI 6 (Showcase 5 bagian)
   ========================================================= */
let chipTerpilih6 = null;

function renderMisi6() {
  const col = document.getElementById("slots6");
  col.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const div = document.createElement("div");
    div.className = "slot-6";
    const isi = state.misi6[i];
    const bagian = isi ? DATA_SOAL.showcase.find(s => s.id === isi) : null;

    div.innerHTML = '<span class="nomor">' + (i + 1) + "</span>" +
      '<div class="isi"><strong>' + (bagian ? escapeXML(bagian.bagian) : "Kosong") + "</strong><br>" +
      "<small>" + (bagian ? escapeXML(bagian.waktu + " — " + bagian.isi) : "Klik kartu di bawah, lalu klik kotak ini") + "</small></div>";

    if (!state.misi6Terkunci) {
      div.style.cursor = "pointer";
      div.tabIndex = 0;
      div.setAttribute("role", "button");
      div.addEventListener("click", () => pasangChip6(i));
      div.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pasangChip6(i); } });
    } else if (bagian) {
      div.style.borderColor = (bagian.id === ["S1", "S2", "S3", "S4", "S5"][i]) ? "#39B54A" : "#D9534F";
      div.style.background = (bagian.id === ["S1", "S2", "S3", "S4", "S5"][i]) ? "rgba(57,181,74,.12)" : "rgba(217,83,79,.12)";
    }
    col.appendChild(div);
  }

  const pool = document.getElementById("pool6");
  pool.innerHTML = "";
  ["S3", "S5", "S1", "S4", "S2"].forEach(id => {
    const s = DATA_SOAL.showcase.find(x => x.id === id);
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = s.bagian + " (" + s.waktu + ")";
    const dipakai = Object.values(state.misi6).includes(id);
    if (dipakai) chip.classList.add("terpakai");
    chip.addEventListener("click", () => {
      if (state.misi6Terkunci || chip.classList.contains("terpakai")) return;
      chipTerpilih6 = (chipTerpilih6 === id) ? null : id;
      document.querySelectorAll("#pool6 .chip").forEach(c => c.classList.remove("selected"));
      if (chipTerpilih6) { chip.classList.add("selected"); playSound("tap"); }
    });
    pool.appendChild(chip);
  });

  document.getElementById("urutanBenar").textContent = hitungUrutan6Benar();
  document.getElementById("btnMisi6Lanjut").disabled = !(state.selesai.misi6);
}

function pasangChip6(slotIdx) {
  if (state.misi6Terkunci) return;
  if (!chipTerpilih6) { showToast("Pilih dulu kartu bagian cerita di bawah.", "info"); return; }
  Object.keys(state.misi6).forEach(k => {
    if (state.misi6[k] === chipTerpilih6) delete state.misi6[k];
  });
  state.misi6[slotIdx] = chipTerpilih6;
  chipTerpilih6 = null;
  playSound("tap");
  saveProgress();
  renderMisi6();
}

function hitungUrutan6Benar() {
  const kunci = ["S1", "S2", "S3", "S4", "S5"];
  let n = 0;
  kunci.forEach((id, i) => { if (state.misi6[i] === id) n++; });
  return n;
}

function tampilkanPanelFormat6() {
  document.getElementById("panelFormat6").classList.remove("hidden");
  document.querySelectorAll("#gridFormat .pick-card").forEach(c => {
    c.classList.toggle("chosen", c.dataset.format === state.misi6Format);
  });
}

function tampilkanPanelTimer6() {
  document.getElementById("panelTimer6").classList.remove("hidden");
}

/* =========================================================
   // RENDER: MISI 7 (Etika & Refleksi)
   ========================================================= */
function renderMisi7() {
  const wrap = document.getElementById("listEtika");
  wrap.innerHTML = "";
  DATA_SOAL.etika.forEach((e, i) => {
    const div = document.createElement("div");
    div.className = "etika-item q" + (i + 1);
    div.innerHTML = "<p>" + (i + 1) + ". " + escapeXML(e.teks) + "</p>";

    const btns = document.createElement("div");
    btns.className = "cat-btns";
    [["tidak", "🚫 Tidak boleh"], ["boleh", "✅ Boleh"]].forEach(pair => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = pair[1];
      if (state.etika[i] === pair[0]) b.classList.add("sel");
      b.disabled = state.etikaTerkunci;
      b.addEventListener("click", () => {
        if (state.etikaTerkunci) return;
        state.etika[i] = pair[0];
        playSound("tap");
        saveProgress();
        renderMisi7();
      });
      btns.appendChild(b);
    });
    div.appendChild(btns);

    if (state.etikaTerkunci) {
      div.classList.add(state.etika[i] === e.benar ? "benar" : "salah");
      const p = document.createElement("p");
      p.style.marginTop = "8px";
      p.innerHTML = "<em>" + escapeXML(e.alasan) + "</em>";
      div.appendChild(p);
    }
    wrap.appendChild(div);
  });

  document.getElementById("etikaBenar").textContent = hitungEtikaBenar();

  DATA_SOAL.refleksi.forEach(r => {
    const el = document.getElementById(r.id);
    if (el) el.value = state.refleksi[r.id] || "";
  });
}

function hitungEtikaBenar() {
  let n = 0;
  DATA_SOAL.etika.forEach((e, i) => { if (state.etika[i] === e.benar) n++; });
  return n;
}

/* =========================================================
   // RENDER: SHOWCASE
   ========================================================= */
function renderShowcase() {
  document.getElementById("stageTeam").textContent =
    (state.namaKelompok || "Kelompok") + " — " + (state.jenisKarya || "Karya");
  const ol = document.getElementById("stageList");
  ol.innerHTML = "";
  const kunci = ["S1", "S2", "S3", "S4", "S5"];
  kunci.forEach((id, i) => {
    const s = DATA_SOAL.showcase.find(x => x.id === (state.misi6[i] || id)) || DATA_SOAL.showcase[i];
    const li = document.createElement("li");
    li.innerHTML = "<b>" + escapeXML(s.bagian) + "</b>" +
      "<span class='waktu'>⏱ " + escapeXML(s.waktu) + "</span><br>" + escapeXML(s.isi);
    ol.appendChild(li);
  });
  document.getElementById("apre1").value = state.apresiasi.apre1 || "";
  document.getElementById("apre2").value = state.apresiasi.apre2 || "";
  document.getElementById("apre3").value = state.apresiasi.apre3 || "";
  document.getElementById("timerShowcase").textContent = formatWaktu(TIMER_SHOWCASE_DETIK);
}

/* =========================================================
   // RENDER: HASIL
   ========================================================= */
function renderResult() {
  const { skor } = hitungSkorTotal();
  const bintang = bintangDariSkor(skor);

  document.getElementById("scoreNumber").textContent = skor;
  document.getElementById("scoreStars").innerHTML =
    Array.from({ length: 5 }, (_, i) => (i < bintang ? "⭐" : "☆")).join("");

  const anggotaTeks = (state.anggota || []).filter(a => a && a.trim()).join(", ") || "—";

  const prioritasTeks = state.misi4Top3
    .map(no => {
      const m = DATA_SOAL.matriks.find(x => x.no === no);
      return m ? ("No " + m.no + " — " + m.teks) : "";
    })
    .filter(Boolean).join("; ") || "—";

  const logTeks = Object.keys(state.misi5)
    .map(slot => {
      const l = DATA_SOAL.logPerbaikan.find(x => x.id === slot);
      const c = DATA_SOAL.logPerbaikan.find(x => x.id === state.misi5[slot]);
      return l && c ? ("• " + l.sebelum + "  →  " + c.sesudah) : "";
    }).filter(Boolean).join("<br>") || "—";

  const html =
    blok("🏷️ Identitas Kelompok",
      "<p><strong>Kelompok:</strong> " + escapeXML(state.namaKelompok || "—") + "</p>" +
      "<p><strong>Anggota:</strong> " + escapeXML(anggotaTeks) + "</p>" +
      "<p><strong>Jenis Karya:</strong> " + escapeXML(state.jenisKarya || "—") + "</p>" +
      "<p><strong>Peran:</strong> " + escapeXML(state.peran || "—") + "</p>" +
      "<p><strong>Kesiapan:</strong> " + escapeXML(state.kesiapan || "—") + "</p>" +
      "<p><strong>Masalah:</strong> " + escapeXML(state.masalah || "—") + "</p>" +
      "<p><strong>Pengguna:</strong> " + escapeXML(state.pengguna || "—") + "</p>") +

    blok("🔍 Temuan Uji (Misi 2)",
      "<p>Bug ditemukan: <strong>" + state.bugDitemukan.length + "</strong></p>" +
      "<ul>" + state.bugDitemukan.map(id => {
        const b = DATA_SOAL.bugList.find(x => x.id === id);
        return b ? "<li>" + escapeXML(b.pesan) + "</li>" : "";
      }).join("") + "</ul>") +

    blok("✅ Uji 3B (Misi 3)",
      "<p>Jawaban benar: <strong>" + hitungBenar3() + "/5</strong></p>" +
      "<ul>" + DATA_SOAL.temuan3B.map((t, i) =>
        "<li>" + escapeXML(t.teks) + " → <strong>" + escapeXML(state.misi3[i] || "belum dijawab") +
        "</strong> (kunci: " + escapeXML(t.jawab) + ")</li>").join("") + "</ul>") +

    blok("🎯 Prioritas Perbaikan (Misi 4)",
      "<p><strong>3 teratas:</strong> " + escapeXML(prioritasTeks) + "</p>") +

    blok("🔧 Log Perbaikan (Misi 5)",
      "<p>" + logTeks + "</p>") +

    blok("🎤 Presentasi (Misi 6)",
      "<p><strong>Format:</strong> " + escapeXML(state.misi6Format || "—") + "</p>" +
      "<p><strong>Urutan cerita:</strong> " +
        ["S1", "S2", "S3", "S4", "S5"].map((id, i) => {
          const s = DATA_SOAL.showcase.find(x => x.id === state.misi6[i]);
          return s ? s.bagian : "-";
        }).join(" → ") + "</p>") +

    blok("🧠 Refleksi (Misi 7)",
      "<p><strong>Apa:</strong> " + escapeXML(state.refleksi.refApa || "—") + "</p>" +
      "<p><strong>Lalu Apa:</strong> " + escapeXML(state.refleksi.refLalu || "—") + "</p>" +
      "<p><strong>Sekarang Apa:</strong> " + escapeXML(state.refleksi.refSekarang || "—") + "</p>" +
      "<p><strong>Etika benar:</strong> " + hitungEtikaBenar() + "/3</p>") +

    blok("⭐ Apresiasi untuk Kelompok Lain",
      "<p><strong>Bintang 1:</strong> " + escapeXML(state.apresiasi.apre1 || "—") + "</p>" +
      "<p><strong>Bintang 2:</strong> " + escapeXML(state.apresiasi.apre2 || "—") + "</p>" +
      "<p><strong>Harapan:</strong> " + escapeXML(state.apresiasi.apre3 || "—") + "</p>") +

    blok("👥 Penilaian Teman",
      state.teman.map((t, i) =>
        "<p><strong>Teman " + (i + 1) + ":</strong> " + escapeXML(t.nama || "—") +
        " · Kontribusi: " + escapeXML(t.kontribusi || "—") +
        " · Dikagumi: " + escapeXML(t.pujian || "—") +
        " · Saran: " + escapeXML(t.saran || "—") + "</p>").join(""));

  document.getElementById("resultSummary").innerHTML = html;

  document.querySelectorAll("#rainbowBox .pick-card").forEach(c => {
    c.classList.toggle("chosen", c.dataset.feel === state.perasaan);
  });
}

function blok(judul, isi) {
  return '<div class="res-block"><h4>' + judul + "</h4>" + isi + "</div>";
}

/* =========================================================
   // FUNGSI: SALIN & UNDUH HASIL
   ========================================================= */
function buatTeksHasil() {
  const { raw, skor } = hitungSkorTotal();
  const bintang = bintangDariSkor(skor);
  const garis = "==================================================";
  const L = [];

  L.push(garis);
  L.push("KARYA LAB — UJI, PERBAIKI, TAMPILKAN KARYAMU!");
  L.push("LKPD Informatika Kelas 8 — Proyek Integratif: Uji, Presentasi, Refleksi");
  L.push("Kode Berkas: " + KODE_BERKAS + " · Tahun " + TAHUN);
  L.push(garis, "");

  L.push("[IDENTITAS]");
  L.push("Nama Kelompok : " + (state.namaKelompok || "-"));
  L.push("Anggota       : " + ((state.anggota || []).filter(a => a && a.trim()).join(", ") || "-"));
  L.push("Jenis Karya   : " + (state.jenisKarya || "-"));
  L.push("Peran         : " + (state.peran || "-"));
  L.push("Kesiapan      : " + (state.kesiapan || "-"));
  L.push("Masalah       : " + (state.masalah || "-"));
  L.push("Pengguna      : " + (state.pengguna || "-"));
  L.push("");

  L.push("[MISI 1] Skor bagian: " + state.poin.misi1);
  L.push("");

  L.push("[MISI 2] Temuan Kesalahan (" + state.bugDitemukan.length + " temuan)");
  state.bugDitemukan.forEach(id => {
    const b = DATA_SOAL.bugList.find(x => x.id === id);
    if (b) L.push(" - " + b.pesan);
  });
  L.push("");

  L.push("[MISI 3] Uji 3B — benar " + hitungBenar3() + "/5");
  DATA_SOAL.temuan3B.forEach((t, i) => {
    L.push(" - " + t.teks + " => " + (state.misi3[i] || "belum dijawab") + " (kunci: " + t.jawab + ")");
  });
  L.push("");

  L.push("[MISI 4] Matriks Prioritas");
  state.misi4Urut.forEach(i => {
    const m = DATA_SOAL.matriks[i];
    const s = state.misi4Skor[i] || { penting: "-", mudah: "-" };
    L.push(" - No " + m.no + " [" + m.jenis + "] " + m.teks +
           " | Penting " + s.penting + " x Mudah " + s.mudah + " = " + (Number(s.penting) + Number(s.mudah)));
  });
  L.push(" 3 Teratas: " + (state.misi4Top3.join(", ") || "-"));
  L.push("");

  L.push("[MISI 5] Log Perbaikan");
  DATA_SOAL.logPerbaikan.forEach(l => {
    const c = DATA_SOAL.logPerbaikan.find(x => x.id === state.misi5[l.id]);
    L.push(" - " + l.sebelum + "  ->  " + (c ? c.sesudah : "(belum)"));
  });
  L.push("");

  L.push("[MISI 6] Showcase");
  L.push(" Format: " + (state.misi6Format || "-"));
  for (let i = 0; i < 5; i++) {
    const s = DATA_SOAL.showcase.find(x => x.id === state.misi6[i]);
    L.push(" " + (i + 1) + ". " + (s ? s.bagian + " (" + s.waktu + ")" : "-"));
  }
  L.push("");

  L.push("[MISI 7] Etika & Refleksi");
  L.push(" Etika benar: " + hitungEtikaBenar() + "/3");
  L.push(" APA          : " + (state.refleksi.refApa || "-"));
  L.push(" LALU APA     : " + (state.refleksi.refLalu || "-"));
  L.push(" SEKARANG APA : " + (state.refleksi.refSekarang || "-"));
  L.push("");

  L.push("[APRESIASI UNTUK KELOMPOK LAIN]");
  L.push(" Bintang 1: " + (state.apresiasi.apre1 || "-"));
  L.push(" Bintang 2: " + (state.apresiasi.apre2 || "-"));
  L.push(" Harapan  : " + (state.apresiasi.apre3 || "-"));
  L.push("");

  L.push("[PENILAIAN TEMAN (PEER ASSESSMENT)]");
  state.teman.forEach((t, i) => {
    L.push(" Teman " + (i + 1) + ": " + (t.nama || "-") +
           " | Kontribusi: " + (t.kontribusi || "-") +
           " | Dikagumi: " + (t.pujian || "-") +
           " | Saran: " + (t.saran || "-"));
  });
  L.push("");

  L.push("[PELANGI PERASAAN]");
  L.push(" " + (state.perasaan || "-"));
  L.push("");

  L.push(garis);
  L.push("SKOR AKHIR: " + skor + "/100  (" + bintang + " dari 5 bintang)");
  L.push("Poin mentah: " + raw + " / " + MAX_SKOR);
  L.push(garis);
  L.push(FOOTER_TEXT);

  return L.join("\n");
}

function salinHasil() {
  const teks = buatTeksHasil();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(teks)
      .then(() => { showToast("Hasil disalin ke clipboard! 📋", "ok"); playSound("ding"); })
      .catch(() => salinFallback(teks));
  } else {
    salinFallback(teks);
  }
}

function salinFallback(teks) {
  const ta = document.createElement("textarea");
  ta.value = teks;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    showToast("Hasil disalin! 📋", "ok");
    playSound("ding");
  } catch (e) {
    showToast("Gagal menyalin. Gunakan tombol Unduh.", "err");
  }
  ta.remove();
}

function unduhHasil() {
  const teks = buatTeksHasil();
  const blob = new Blob([teks], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const nama = (state.namaKelompok || "TanpaNama").replace(/[^\w\s-]/g, "").replace(/\s+/g, "_");
  a.href = url;
  a.download = "Hasil_KaryaLab_" + nama + ".txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  showToast("File hasil diunduh! ⬇️", "ok");
  playSound("ding");
}

/* =========================================================
   // MODAL
   ========================================================= */
function bukaModal(id) {
  document.getElementById(id).classList.add("open");
  playSound("tap");
}
function tutupModal(id) {
  document.getElementById(id).classList.remove("open");
}

function renderGlosarium() {
  const tb = document.getElementById("tbodyGlosarium");
  tb.innerHTML = "";
  DATA_SOAL.glosarium.forEach(g => {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td><strong>" + escapeXML(g.en) + "</strong></td>" +
                   "<td><em>" + escapeXML(g.id) + "</em></td>" +
                   "<td>" + escapeXML(g.di) + "</td>";
    tb.appendChild(tr);
  });
}

function renderGuru() {
  const box = document.getElementById("guruIsi");
  box.innerHTML =
    "<h3 class='sub-h'>Misi 2 — Bug wajib</h3>" +
    "<ul class='work-list'>" +
    DATA_SOAL.bugList.map(b => "<li>" + (b.wajib ? "WAJIB" : "bonus") + ": " + escapeXML(b.pesan) + "</li>").join("") +
    "</ul>" +
    "<h3 class='sub-h'>Misi 3 — Kunci Uji 3B</h3>" +
    "<ul class='work-list'>" +
    DATA_SOAL.temuan3B.map(t => "<li>" + escapeXML(t.teks) + " → <strong>" + escapeXML(t.jawab) + "</strong></li>").join("") +
    "</ul>" +
    "<h3 class='sub-h'>Misi 4 — Kunci Prioritas</h3>" +
    "<p>Skor: No1=6, No2=6, No3=6, No4=5, No5=3. 3 teratas wajib memuat <strong>No 1 (angka salah)</strong> dan " +
    "<strong>No 3 (nama pribadi)</strong>.</p>" +
    "<h3 class='sub-h'>Misi 5 — Kunci Log Perbaikan</h3>" +
    "<ul class='work-list'>" +
    DATA_SOAL.logPerbaikan.map(l => "<li>" + escapeXML(l.sebelum) + " → " + escapeXML(l.sesudah) + "</li>").join("") +
    "</ul>" +
    "<h3 class='sub-h'>Misi 6 — Kunci Urutan</h3>" +
    "<p>Masalah → Karya → Uji → Perbaikan → Manfaat & Ajakan (15/30/25/25/25 detik).</p>" +
    "<h3 class='sub-h'>Misi 7 — Kunci Etika</h3>" +
    "<ul class='work-list'>" +
    DATA_SOAL.etika.map((e, i) => "<li>Soal " + (i + 1) + " → <strong>Tidak boleh</strong>. " + escapeXML(e.alasan) + "</li>").join("") +
    "</ul>" +
    "<h3 class='sub-h'>Latihan Bagian F</h3>" +
    "<ul class='work-list'>" +
    "<li>Total bungkus jajanan: 41+36+58+33 = <strong>168</strong>.</li>" +
    "<li>Persen 8C: 30 ÷ 92 × 100% = <strong>32,6%</strong>.</li>" +
    "<li>Skenario uji program: 3 skenario (normal, jawaban salah, mulai lagi). Skenario 3 perlu perbaikan.</li>" +
    "<li>Ubah \"Infografismu jelek!\" → kalimat Aku Melihat–Aku Merasa–Aku Menyarankan.</li>" +
    "<li>Prioritas: (a) angka salah &amp; (b) nama/foto tanpa izin → tertinggi.</li>" +
    "</ul>";
}

/* =========================================================
   // EVENT LISTENERS
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Logo error fallback ---------- */
  const logoImg = document.getElementById("logoImg");
  const logoFb = document.getElementById("logoFallback");
  logoImg.addEventListener("error", () => {
    logoImg.style.display = "none";
    logoFb.style.display = "flex";
  });
  if (logoImg.complete && logoImg.naturalWidth === 0) {
    logoImg.style.display = "none";
    logoFb.style.display = "flex";
  }

  /* ---------- Mode Guru (klik logo 3×) ---------- */
  let klikLogo = 0, timerLogo = null;
  document.getElementById("logoBtn").addEventListener("click", () => {
    klikLogo++;
    clearTimeout(timerLogo);
    timerLogo = setTimeout(() => { klikLogo = 0; }, 900);
    if (klikLogo >= 3) {
      klikLogo = 0;
      state.guru = true;
      renderGuru();
      bukaModal("modalGuru");
    }
  });

  document.getElementById("btnReset").addEventListener("click", () => {
    if (confirm("Hapus semua progres dan mulai dari awal?")) {
      hapusProgress();
      location.reload();
    }
  });

  /* ---------- Tutup modal ---------- */
  document.querySelectorAll(".modal-close").forEach(b => {
    b.addEventListener("click", () => tutupModal(b.dataset.close));
  });
  document.querySelectorAll(".modal-backdrop").forEach(bd => {
    bd.addEventListener("click", e => { if (e.target === bd) bd.classList.remove("open"); });
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-backdrop.open").forEach(m => m.classList.remove("open"));
    }
  });

  /* ---------- Tombol header ---------- */
  document.getElementById("btnLang").addEventListener("click", () => {
    document.body.classList.toggle("show-padanan");
    const aktif = document.body.classList.contains("show-padanan");
    state.lang = aktif ? "id" : "en";
    showToast(aktif ? "Padanan Bahasa Indonesia: TAMPIL" : "Padanan Bahasa Indonesia: SEMBUNYI", "info");
    saveProgress();
  });

  document.getElementById("btnSound").addEventListener("click", function () {
    state.sound = !state.sound;
    this.classList.toggle("off", !state.sound);
    this.textContent = state.sound ? "🔊" : "🔇";
    if (state.sound) playSound("ding");
    saveProgress();
  });

  document.getElementById("btnTheme").addEventListener("click", function () {
    state.theme = state.theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", state.theme);
    this.textContent = state.theme === "dark" ? "☀️" : "🌙";
    saveProgress();
  });

  document.getElementById("btnText").addEventListener("click", function () {
    const urut = ["normal", "besar", "xl"];
    const label = { normal: "A+", besar: "A++", xl: "A" };
    const i = urut.indexOf(state.textsize);
    state.textsize = urut[(i + 1) % urut.length];
    document.documentElement.setAttribute("data-textsize", state.textsize);
    this.textContent = label[state.textsize];
    showToast("Ukuran teks: " + state.textsize.toUpperCase(), "info");
    saveProgress();
  });

  // Mode kurangi gerak: klik ❓ lalu tahan? → sederhana: tombol ❓ buka bantuan,
  // dan shortcut Shift+M untuk kurangi gerak.
  document.addEventListener("keydown", e => {
    if (e.shiftKey && (e.key === "M" || e.key === "m")) {
      state.motion = state.motion === "full" ? "reduced" : "full";
      document.documentElement.setAttribute("data-motion", state.motion);
      showToast(state.motion === "reduced" ? "Gerak dikurangi 🎞️" : "Animasi penuh ▶️", "info");
      saveProgress();
    }
  });

  document.getElementById("btnHelp").addEventListener("click", () => bukaModal("modalCara"));

  /* ---------- Modal dari footer ---------- */
  document.getElementById("btnGlosarium").addEventListener("click", () => { renderGlosarium(); bukaModal("modalGlosarium"); });
  document.getElementById("btnGlosarium2").addEventListener("click", () => { renderGlosarium(); bukaModal("modalGlosarium"); });
  document.getElementById("btnCaraMain2").addEventListener("click", () => bukaModal("modalCara"));
  document.getElementById("btnWorked2").addEventListener("click", () => bukaModal("modalWorked"));
  document.getElementById("btnCaraMain").addEventListener("click", () => bukaModal("modalCara"));
  document.getElementById("btnWorked").addEventListener("click", () => bukaModal("modalWorked"));

  /* ---------- START ---------- */
  document.getElementById("formStart").addEventListener("input", () => {
    state.namaKelompok = document.getElementById("inpKelompok").value.slice(0, 40);
    state.anggota = Array.from(document.querySelectorAll(".inp-anggota")).map(i => i.value.slice(0, 25));
    state.jenisKarya = document.getElementById("inpJenis").value;
    const r = document.querySelector('input[name="peran"]:checked');
    state.peran = r ? r.value : "";
    saveProgress();
  });

  document.getElementById("btnMulai").addEventListener("click", () => {
    const form = document.getElementById("formStart");
    if (!form.checkValidity()) {
      form.reportValidity();
      playSound("buzz");
      return;
    }
    state.namaKelompok = document.getElementById("inpKelompok").value.trim();
    state.anggota = Array.from(document.querySelectorAll(".inp-anggota")).map(i => i.value.trim());
    state.jenisKarya = document.getElementById("inpJenis").value;
    const r = document.querySelector('input[name="peran"]:checked');
    state.peran = r ? r.value : "";

    if (!state.namaKelompok || !state.jenisKarya || !state.peran) {
      showToast("Lengkapi nama kelompok, jenis karya, dan peranmu dulu ya.", "err");
      playSound("buzz");
      return;
    }

    playSound("fanfare");
    confetti(80);
    showToast("Selamat datang di KARYA LAB! 🚀", "ok");
    saveProgress();
    showScreen("screen-misi1");
    renderMisi1();
  });

  document.getElementById("btnLanjut").addEventListener("click", () => {
    const ada = loadProgress();
    if (!ada) {
      showToast("Belum ada progres tersimpan. Mulai dari awal dulu ya.", "err");
      playSound("buzz");
      return;
    }
    terapkanPreferensi();
    // cari screen terakhir
    const selesaiMisi = DAFTAR_MISI.filter(m => state.selesai[m.id]).length;
    let target = "screen-start";
    if (state.namaKelompok && state.jenisKarya) {
      if (selesaiMisi === 0) target = "screen-misi1";
      else if (selesaiMisi >= 7) target = state.selesai.showcase ? "screen-result" : "screen-showcase";
      else target = DAFTAR_MISI[selesaiMisi].screen;
    }
    showScreen(target);
    if (target === "screen-misi1") renderMisi1();
    if (target === "screen-misi2") renderMisi2();
    if (target === "screen-misi3") renderMisi3();
    if (target === "screen-misi4") renderMisi4();
    if (target === "screen-misi5") renderMisi5();
    if (target === "screen-misi6") { renderMisi6(); if (state.misi6Terkunci) { tampilkanPanelFormat6(); if (state.misi6Format) tampilkanPanelTimer6(); } }
    if (target === "screen-misi7") renderMisi7();
    if (target === "screen-showcase") renderShowcase();
    if (target === "screen-result") renderResult();
    showToast("Progres dimuat! Lanjutkan perjalananmu 💪", "ok");
  });

  /* ---------- MISI 1 ---------- */
  document.querySelectorAll("#gridJenis .pick-card").forEach(c => {
    c.addEventListener("click", () => {
      state.jenisKarya = c.dataset.jenis;
      document.getElementById("inpJenis").value = c.dataset.jenis;
      playSound("tap");
      renderMisi1();
      saveProgress();
    });
  });

  document.querySelectorAll("#gridKesiapan .pick-card").forEach(c => {
    c.addEventListener("click", () => {
      state.kesiapan = c.dataset.siap;
      playSound("tap");
      renderMisi1();
      saveProgress();
    });
  });

  ["inpMasalah", "inpPengguna"].forEach(id => {
    document.getElementById(id).addEventListener("input", e => {
      if (id === "inpMasalah") state.masalah = e.target.value.slice(0, 220);
      else state.pengguna = e.target.value.slice(0, 220);
      saveProgress();
    });
  });

  document.getElementById("btnMisi1Lanjut").addEventListener("click", () => {
    if (!state.jenisKarya || !state.kesiapan || !state.masalah.trim() || !state.pengguna.trim()) {
      showToast("Lengkapi: jenis karya, kesiapan, masalah, dan pengguna.", "err");
      playSound("buzz");
      return;
    }
    if (!state.selesai.misi1) {
      state.selesai.misi1 = true;
      tambahPoin("misi1", 5);
      showToast("Kesiapan dicatat! Ayo uji karyamu. ✅", "ok");
      playSound("ding");
      confetti(60);
    }
    saveProgress();
    showScreen("screen-misi2");
    renderMisi2();
  });

  /* ---------- MISI 2 ---------- */
  document.querySelectorAll("#tblBuggy .bug").forEach(td => {
    const aksi = () => {
      const id = td.dataset.bug;
      if (state.bugDitemukan.includes(id)) {
        showToast("Bagian ini sudah kamu tandai.", "info");
        return;
      }
      state.bugDitemukan.push(id);
      const b = DATA_SOAL.bugList.find(x => x.id === id);
      tambahPoin("misi2", b ? b.poin : 10);
      playSound("ding");
      showToast((b ? b.pesan : "Temuan benar!") + "  +10 poin", "ok");
      saveProgress();
      renderMisi2();
    };
    td.addEventListener("click", aksi);
    td.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); aksi(); } });
  });

  document.getElementById("btnMisi2Lanjut").addEventListener("click", () => {
    showScreen("screen-misi3");
    renderMisi3();
  });

  /* ---------- MISI 3 ---------- */
  document.getElementById("btnCek3").addEventListener("click", () => {
    const terjawab = Object.keys(state.misi3).length;
    if (terjawab < 5) {
      showToast("Masih ada temuan yang belum dipasangkan.", "err");
      playSound("buzz");
      return;
    }
    state.misi3Terkunci = true;
    const benar = hitungBenar3();
    const poinBaru = Math.max(0, benar * 5 - state.poin.misi3);
    state.poin.misi3 = benar * 5;
    state.selesai.misi3 = benar >= 4;
    playSound(benar >= 4 ? "fanfare" : "buzz");
    if (benar >= 4) { confetti(90); showToast("Hebat! " + benar + "/5 benar. +" + poinBaru + " poin", "ok"); }
    else showToast("Baru " + benar + "/5 benar. Perhatikan kuncinya di halaman hasil.", "err");
    document.getElementById("btnMisi3Lanjut").disabled = !state.selesai.misi3;
    renderMisi3();
    saveProgress();
  });

  document.getElementById("btnMisi3Lanjut").addEventListener("click", () => {
    showScreen("screen-misi4");
    renderMisi4();
  });

  /* ---------- MISI 4 ---------- */
  document.getElementById("btnHitungPrioritas").addEventListener("click", hitungPrioritas);

  document.getElementById("btnCek4").addEventListener("click", () => {
    if (state.misi4Top3.length !== 3) {
      showToast("Pilih tepat 3 temuan teratas.", "err");
      playSound("buzz");
      return;
    }
    const kunci = DATA_SOAL.prioritasKunci;
    const ok = kunci.every(k => state.misi4Top3.includes(k));
    if (ok) {
      state.misi4Terkunci = true;
      state.selesai.misi4 = true;
      if (!state.poin.misi4Sudah) { tambahPoin("misi4", 10); state.poin.misi4Sudah = true; }
      playSound("fanfare");
      confetti(90);
      showToast("Tepat! Kebenaran & keamanan didahulukan. 🎯", "ok");
      document.getElementById("btnMisi4Lanjut").disabled = false;
    } else {
      state.retry.misi4++;
      playSound("buzz");
      if (state.retry.misi4 >= MAX_RETRY) {
        showToast("Ingat aturan emas: temuan tentang KEBENARAN dan KEAMANAN selalu didahulukan!", "err", 3500);
      } else {
        showToast("Belum tepat. Coba ingat aturan emasnya.", "err");
      }
    }
    saveProgress();
  });

  document.getElementById("btnMisi4Lanjut").addEventListener("click", () => {
    showScreen("screen-misi5");
    renderMisi5();
  });

  /* ---------- MISI 5 ---------- */
  document.getElementById("btnCekLog").addEventListener("click", () => {
    const benar = hitungLogBenar();
    state.misi5Terkunci = benar >= 4;
    state.poin.misi5 = benar * 5;
    if (state.misi5Terkunci) {
      state.selesai.misi5 = true;
      playSound("fanfare");
      confetti(90);
      showToast("Log Perbaikan tersusun rapi! +" + (benar * 5) + " poin", "ok");
    } else {
      playSound("buzz");
      showToast("Baru " + benar + "/4 benar. Periksa lagi.", "err");
    }
    document.getElementById("btnUjiUlang").disabled = !state.misi5Terkunci;
    document.getElementById("btnMisi5Lanjut").disabled = !state.selesai.misi5;
    renderMisi5();
    saveProgress();
  });

  document.getElementById("btnUjiUlang").addEventListener("click", () => {
    document.getElementById("panelUjiUlang").classList.remove("hidden");
    playSound("fanfare");
    confetti(110);
    showToast("Uji ulang berhasil! Semua persen berjumlah 100% ✓", "ok", 3000);
    document.getElementById("btnMisi5Lanjut").disabled = false;
    state.selesai.misi5 = true;
    saveProgress();
  });

  document.getElementById("btnMisi5Lanjut").addEventListener("click", () => {
    showScreen("screen-misi6");
    renderMisi6();
  });

  /* ---------- MISI 6 ---------- */
  document.getElementById("btnCek6").addEventListener("click", () => {
    const benar = hitungUrutan6Benar();
    if (benar < 5) {
      state.retry.misi6++;
      playSound("buzz");
      showToast("Urutan belum tepat. Ingat: Masalah dulu, Manfaat terakhir.", "err");
      return;
    }
    state.misi6Terkunci = true;
    if (!state.poin.misi6Urutan) { tambahPoin("misi6", 10); state.poin.misi6Urutan = true; }
    playSound("fanfare");
    confetti(90);
    showToast("Urutan cerita tepat! +10 poin 🎤", "ok");
    tampilkanPanelFormat6();
    renderMisi6();
    saveProgress();
  });

  document.querySelectorAll("#gridFormat .pick-card").forEach(c => {
    c.addEventListener("click", () => {
      if (!state.misi6Terkunci) { showToast("Selesaikan urutan cerita dulu.", "info"); return; }
      state.misi6Format = c.dataset.format;
      if (!state.poin.misi6Format) { tambahPoin("misi6", 5); state.poin.misi6Format = true; }
      playSound("ding");
      tampilkanPanelFormat6();
      tampilkanPanelTimer6();
      state.selesai.misi6 = true;
      document.getElementById("btnMisi6Lanjut").disabled = false;
      showToast("Format dipilih: " + state.misi6Format, "ok");
      saveProgress();
    });
  });

  document.getElementById("btnTimer6").addEventListener("click", () => {
    jalankanCountdown("timer6", TIMER_SHOWCASE_DETIK, () => {
      showToast("Waktu latihan habis! Siap tampil? 🎬", "info");
    });
    playSound("tap");
  });

  document.getElementById("btnMisi6Lanjut").addEventListener("click", () => {
    showScreen("screen-misi7");
    renderMisi7();
  });

  /* ---------- MISI 7 ---------- */
  document.getElementById("btnCek7").addEventListener("click", () => {
    if (Object.keys(state.etika).length < 3) {
      showToast("Jawab dulu semua kuis etika.", "err");
      playSound("buzz");
      return;
    }
    state.etikaTerkunci = true;
    const benar = hitungEtikaBenar();
    state.poin.misi7 = benar * 5;
    if (benar >= 2) {
      playSound("fanfare");
      confetti(80);
      showToast("Etika: " + benar + "/3 benar!", "ok");
    } else {
      playSound("buzz");
      showToast("Etika: baru " + benar + "/3. Perhatikan alasannya.", "err");
    }
    renderMisi7();
    saveProgress();
  });

  ["refApa", "refLalu", "refSekarang"].forEach(id => {
    document.getElementById(id).addEventListener("input", e => {
      state.refleksi[id] = e.target.value.slice(0, 400);
      cekRefleksiLengkap();
      saveProgress();
    });
  });

  function cekRefleksiLengkap() {
    const lengkap = ["refApa", "refLalu", "refSekarang"].every(id => (state.refleksi[id] || "").trim().length > 3);
    if (lengkap && !state.poin.misi7Refleksi) {
      tambahPoin("misi7", 10);
      state.poin.misi7Refleksi = true;
      showToast("Refleksimu lengkap! +10 poin 🧠", "ok");
      playSound("ding");
    }
    document.getElementById("btnMisi7Lanjut").disabled = !lengkap;
    if (lengkap) state.selesai.misi7 = true;
  }

  document.getElementById("btnMisi7Lanjut").addEventListener("click", () => {
    const lengkap = ["refApa", "refLalu", "refSekarang"].every(id => (state.refleksi[id] || "").trim().length > 3);
    if (!lengkap) {
      showToast("Isi ketiga kotak refleksi dulu ya.", "err");
      playSound("buzz");
      return;
    }
    state.selesai.misi7 = true;
    saveProgress();
    showScreen("screen-showcase");
    renderShowcase();
  });

  /* ---------- SHOWCASE ---------- */
  document.getElementById("btnMulaiTampil").addEventListener("click", () => {
    document.getElementById("stageShowcase").classList.add("tampil");
    playSound("fanfare");
    confetti(120);
    jalankanCountdown("timerShowcase", TIMER_SHOWCASE_DETIK, () => {
      showToast("Presentasi selesai! 👏", "ok");
      confetti(140);
    });
  });

  ["apre1", "apre2", "apre3"].forEach(id => {
    document.getElementById(id).addEventListener("input", e => {
      state.apresiasi[id] = e.target.value.slice(0, 80);
      saveProgress();
    });
  });

  document.getElementById("btnKeHasil").addEventListener("click", () => {
    state.selesai.showcase = true;
    saveProgress();
    showScreen("screen-result");
    renderResult();
    const { skor } = hitungSkorTotal();
    if (skor >= 80) { confetti(160); playSound("fanfare"); }
  });

  /* ---------- HASIL ---------- */
  document.querySelectorAll("#rainbowBox .pick-card").forEach(c => {
    c.addEventListener("click", () => {
      state.perasaan = c.dataset.feel;
      playSound("tap");
      renderResult();
      saveProgress();
      showToast("Perasaan dicatat: " + c.dataset.feel, "ok");
    });
  });

  ["1", "2"].forEach(n => {
    const idx = Number(n) - 1;
    document.getElementById("peerNama" + n).addEventListener("input", e => {
      state.teman[idx].nama = e.target.value.slice(0, 25); saveProgress();
    });
    document.getElementById("peerKontrib" + n).addEventListener("change", e => {
      state.teman[idx].kontribusi = e.target.value; saveProgress();
    });
    document.getElementById("peerPujian" + n).addEventListener("input", e => {
      state.teman[idx].pujian = e.target.value.slice(0, 120); saveProgress();
    });
    document.getElementById("peerSaran" + n).addEventListener("input", e => {
      state.teman[idx].saran = e.target.value.slice(0, 120); saveProgress();
    });
  });

  document.getElementById("btnSalin").addEventListener("click", salinHasil);
  document.getElementById("btnUnduh").addEventListener("click", unduhHasil);

  document.getElementById("btnMainLagi").addEventListener("click", () => {
    if (confirm("Mulai ulang dari awal? Semua jawaban akan dihapus.")) {
      hapusProgress();
      location.reload();
    }
  });

  /* ---------- INIT ---------- */
  function terapkanPreferensi() {
    document.documentElement.setAttribute("data-theme", state.theme);
    document.documentElement.setAttribute("data-textsize", state.textsize);
    document.documentElement.setAttribute("data-motion", state.motion);
    document.body.classList.toggle("show-padanan", state.lang === "id");
    document.getElementById("btnTheme").textContent = state.theme === "dark" ? "☀️" : "🌙";
    document.getElementById("btnSound").textContent = state.sound ? "🔊" : "🔇";
    document.getElementById("btnSound").classList.toggle("off", !state.sound);
    const label = { normal: "A+", besar: "A++", xl: "A" };
    document.getElementById("btnText").textContent = label[state.textsize];
  }

  terapkanPreferensi();
  renderGlosarium();
  initStart();
  renderProgressStrip();
  renderMinimap();
  showScreen("screen-start");
  document.getElementById("hdrTitle").textContent = "KARYA LAB — Uji, Perbaiki, Tampilkan Karyamu!";
});