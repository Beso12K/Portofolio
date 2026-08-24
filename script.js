/* ---------------- i18n ---------------- */
let currentLang = "en";
const dict = {
	avail: { en: "Available for work", id: "Tersedia untuk bekerja" },
	navAbout: { en: "About", id: "Tentang" },
	navWork: { en: "Work", id: "Karya" },
	navServices: { en: "Services", id: "Layanan" },
	navExperience: { en: "Experience", id: "Pengalaman" },
	navAchievements: { en: "Achievements", id: "Prestasi" },
	navContact: { en: "Contact", id: "Kontak" },
	heroEyebrow: {
		en: "Computer Science Student &amp; Creative Editor",
		id: "Mahasiswa Ilmu Komputer &amp; Editor Kreatif",
	},
	heroRole: {
		en: "A <b>Computer Science</b> student and self-taught editor from Bali, cutting audio, video, and visuals for stages, screens, and startups — now expanding into <b>web</b> and <b>game development</b>.",
		id: "Mahasiswa <b>Ilmu Komputer</b> asal Bali dan editor otodidak, mengerjakan audio, video, dan visual untuk panggung, layar, dan startup — kini merambah ke <b>pengembangan web</b> dan <b>game</b>.",
	},
	metaBasedLabel: { en: "Based in", id: "Berdomisili di" },
	metaStudyLabel: { en: "Studying", id: "Sedang menempuh" },
	metaStudyValue: { en: "Computer Science, BINUS @Malang", id: "Ilmu Komputer, BINUS @Malang" },
	metaBackgroundLabel: { en: "Background", id: "Latar belakang" },
	metaBackgroundValue: {
		en: "Software Engineering, SMK TI Bali Global",
		id: "Rekayasa Perangkat Lunak, SMK TI Bali Global",
	},
	scrubIntro: { en: "Intro", id: "Awal" },
	scrubAbout: { en: "About", id: "Tentang" },
	scrubWork: { en: "Work", id: "Karya" },
	scrubServices: { en: "Services", id: "Layanan" },
	scrubExperience: { en: "Experience", id: "Pengalaman" },
	scrubAchievements: { en: "Achievements", id: "Prestasi" },
	scrubContact: { en: "Contact", id: "Kontak" },
	sectionAbout: { en: "About", id: "Tentang" },
	aboutP1: {
		en: "I'm <b>I Kadek Mahesa Arta Wibawa</b>, born in 2008 and originally from Bali. I'm currently studying <b>Computer Science</b> at BINUS University, Malang campus — pairing that with a self-driven practice in editing and development that started long before I picked a major.",
		id: "Saya <b>I Kadek Mahesa Arta Wibawa</b>, lahir tahun 2008 dan berasal dari Bali. Saat ini saya menempuh studi <b>Ilmu Komputer</b> di BINUS University, kampus Malang — dipadukan dengan praktik editing dan pengembangan yang sudah saya jalani secara mandiri jauh sebelum menentukan jurusan.",
	},
	aboutP2: {
		en: "Before university, I studied at <b>SMK TI Bali Global Denpasar</b>, majoring in Software Engineering (Rekayasa Perangkat Lunak), where I first started applying technical thinking to creative work.",
		id: "Sebelum kuliah, saya bersekolah di <b>SMK TI Bali Global Denpasar</b>, jurusan Rekayasa Perangkat Lunak, di sanalah saya pertama kali menerapkan cara berpikir teknis ke dalam karya kreatif.",
	},
	aboutP3: {
		en: "Performing arts has a special place for me too — from being part of a theatre club to helping direct a stage production, storytelling on stage shapes the way I think about pacing and visuals on screen.",
		id: "Seni pertunjukan juga punya tempat khusus buat saya — dari ikut komunitas teater sampai membantu menyutradarai pementasan, cara bercerita di atas panggung ikut membentuk cara saya memikirkan pacing dan visual di layar.",
	},
	eduSub1: {
		en: "Software Engineering (Rekayasa Perangkat Lunak)",
		id: "Rekayasa Perangkat Lunak",
	},
	eduSub2: { en: "Computer Science", id: "Ilmu Komputer" },
	sectionWork: { en: "Work", id: "Karya" },
	workIntro: {
		en: "A working archive of what I've made, grouped by craft. Photos and clips are shown directly — each category's full set lives on Drive.",
		id: "Kumpulan karya yang pernah saya buat, dikelompokkan berdasarkan bidangnya. Foto dan klip ditampilkan langsung — arsip lengkap tiap kategori ada di Drive.",
	},
	sectionServices: { en: "Services", id: "Layanan" },
	servicesIntro: {
		en: "Ways I can help — tap any of these to get in touch.",
		id: "Beberapa hal yang bisa saya bantu — klik salah satu untuk menghubungi saya.",
	},
	sectionExperience: { en: "Experience", id: "Pengalaman" },
	xpPR: { en: "Public Relations", id: "Hubungan Masyarakat" },
	xpPRDate: { en: "Apr 2024 – Feb 2025", id: "Apr 2024 – Feb 2025" },
	xpIntern: { en: "Internship", id: "Magang" },
	xpInternDate: { en: "Jul 2024 – Dec 2024", id: "Jul 2024 – Des 2024" },
	xpLead: { en: "Lead Designer", id: "Lead Designer" },
	xpLeadDate: { en: "Jul 2025 – Aug 2026", id: "Jul 2025 – Ags 2026" },
	sectionAchievements: { en: "Achievements", id: "Prestasi" },
	ach1Title: { en: "Hackathon Winner", id: "Juara Hackathon" },
	ach1Org: { en: "iCode Hackathon, 2023", id: "Hackathon iCode, 2023" },
	ach2Title: { en: "Poster Design Competition Winner", id: "Juara Lomba Desain Poster" },
	ach2Org: { en: "National Art Competition (Lomba Seni Nasional)", id: "Lomba Seni Nasional" },
	ach3Title: { en: "Assistant Director", id: "Asisten Sutradara" },
	ach3Org: { en: "Stage production, Teater Bagol", id: "Produksi pementasan, Teater Bagol" },
	sectionContact: { en: "Contact", id: "Kontak" },
	contactHeading: { en: "Let's talk about your next edit.", id: "Yuk bahas proyek berikutnya." },
	driveLink: { en: "Full archive on Drive ↗", id: "Arsip lengkap di Drive ↗" },
	driveAudioLink: { en: "Listen on Drive ↗", id: "Dengar di Drive ↗" },
	visitBadge: { en: "Visit ↗", id: "Kunjungi ↗" },
	wc0title: { en: "Audio Editing", id: "Edit Audio" },
	wc0desc: {
		en: "Mixing, cleanup, and sound design.",
		id: "Mixing, pembersihan audio, dan sound design.",
	},
	wc1title: { en: "Videotron Visual Editing", id: "Edit Visual Videotron" },
	wc1desc: { en: "Large-screen visuals for events.", id: "Visual layar besar untuk acara." },
	wc2title: { en: "YouTube Video Editing", id: "Edit Video YouTube" },
	wc2desc: { en: "Full channel edits, cut to pace.", id: "Edit video channel secara utuh." },
	wc3title: { en: "Game Content Editing", id: "Edit Konten Game" },
	wc3desc: {
		en: "News-style cuts for gaming content.",
		id: "Editan bergaya berita untuk konten game.",
	},
	wc4title: { en: "Theatre Poster Editing", id: "Edit Poster Teater" },
	wc4desc: { en: "Key art for stage productions.", id: "Key art untuk produksi panggung." },
	wc5title: { en: "Documentation Editing", id: "Edit Dokumentasi" },
	wc5desc: { en: "Event coverage, edited down.", id: "Liputan acara yang diedit rapi." },
	wc6title: { en: "Simple Promotion Video Editing", id: "Edit Video Promosi Sederhana" },
	wc6desc: { en: "Short promo cuts.", id: "Video promosi berdurasi pendek." },
	wc7title: { en: "Website Development", id: "Pengembangan Website" },
	wc7desc: { en: "Front-end builds and layouts.", id: "Pembuatan front-end dan layout." },
	wc8title: { en: "Game Development", id: "Pengembangan Game" },
	wc8desc: { en: "Small game builds and prototypes.", id: "Prototipe dan build game sederhana." },
	wc9title: { en: "Other Editing", id: "Editan Lainnya" },
	wc9desc: {
		en: "Everything that doesn't fit above.",
		id: "Semua yang tidak masuk kategori di atas.",
	},
	wc10title: { en: "News Design", id: "Desain Berita" },
	wc10desc: {
		en: "Graphic layouts and visuals for news content.",
		id: "Layout grafis dan visual untuk konten berita.",
	},
	svc0: { en: "Social Media Admin", id: "Admin Media Sosial" },
	svc1: { en: "Poster Designer", id: "Desainer Poster" },
	svc2: { en: "Video Editor", id: "Video Editor" },
	svc3: { en: "Web Developer", id: "Pengembang Web" },
	svc4: { en: "Game Developer", id: "Pengembang Game" },
	svc5: { en: "Public Relations", id: "Hubungan Masyarakat" },
};

/* ================================================================
   WORK CONFIG — EDIT DI SINI untuk mengubah isi bagian Work
   ----------------------------------------------------------------
   Ini bagian yang paling sering kamu sentuh: ganti foto/video,
   ganti link Drive, atau ganti link project. Judul & deskripsi
   tiap kategori masih diatur lewat dict di atas (key wc0title,
   wc0desc, dst) — tidak usah diubah di sini.

   Tiap kategori (workCategories) punya "type":

     "gallery" -> tampilkan thumbnail foto/video (dari array
                  "items" di bawah) + 1 tombol "Full archive on
                  Drive" untuk seluruh kategori. Klik foto -> popup
                  foto besar. Klik video -> popup video langsung play.
                  Dipakai untuk: Videotron, YouTube, Game News,
                  Theatre Poster, Documentation, Promo Video, Other.

     "linkout" -> tampilkan thumbnail, TIAP thumbnail langsung bisa
                  diklik dan membuka link project itu sendiri
                  (website hidup / halaman game), BUKAN popup.
                  Dipakai untuk: Website Development, Game Development.

     "audio"   -> tanpa thumbnail sama sekali (audio tidak ada
                  visualnya) — cuma 1 tombol ke folder Drive kamu.
                  Dipakai untuk: Audio Editing.

   ----------------------------------------------------------------
   CARA GANTI FOTO / VIDEO (kategori "gallery")
   ----------------------------------------------------------------
   Tiap kategori "gallery" punya array "items". Tiap item di array
   itu adalah SATU thumbnail, formatnya:

     { type: "image", src: "assets/work/videotron/poster1.jpg" }
     atau
     { type: "video", src: "assets/work/videotron/clip1.mp4",
                       poster: "assets/work/videotron/clip1-cover.jpg" }

   - type      : "image" untuk foto, "video" untuk video.
   - src       : lokasi file foto/videonya. Taruh file kamu di
                 folder di sebelah index.html (contoh: buat folder
                 "assets/work/videotron/" lalu isi src dengan path
                 relatif ke situ, seperti contoh di atas).
   - poster    : (KHUSUS video, boleh dikosongkan "") gambar sampul
                 yang tampil sebelum videonya diputar. Kalau kamu
                 kosongkan, thumbnail videonya akan tampil kotak
                 placeholder polos sampai diklik. Gambar poster itu
                 kecil (JPG biasa) jadi AMAN diupload ke GitHub —
                 yang perlu dipindah keluar cuma file videonya (lihat
                 bagian "VIDEO DARI YOUTUBE / DRIVE" di bawah).

   Klik thumbnail foto -> muncul popup menampilkan foto itu lebih
   besar & jelas. Klik thumbnail video -> muncul popup dan videonya
   langsung diputar (dengan tombol play/pause/fullscreen bawaan
   browser, atau player YouTube/Drive kalau videonya dari sana). Ini
   semua sudah otomatis, kamu tinggal isi "items".
   ----------------------------------------------------------------
   VIDEO DARI YOUTUBE / DRIVE (biar file .mp4 gak usah diupload ke GitHub)
   ----------------------------------------------------------------
   GitHub menolak/memperingatkan file di atas 50–100MB, dan repo yang
   penuh video jadi berat untuk di-clone. Solusinya: upload videonya
   ke YouTube atau Google Drive, lalu di sini kamu cukup simpan
   LINK-nya saja (bukan file videonya) lewat field "provider":

     { type: "video", provider: "youtube",
       src: "https://youtu.be/VIDEO_ID_KAMU",   // link biasa juga bisa
       poster: "Asset/Video/Y1.jpg" }            // gambar sampul (JPG kecil, aman diupload)

     { type: "video", provider: "drive",
       src: "https://drive.google.com/file/d/FILE_ID/view?usp=sharing", // link share biasa
       poster: "Asset/Video/Y1.jpg" }

   - Kalau "provider" tidak diisi sama sekali, videonya dianggap file
     lokal (.mp4 di folder Asset/ seperti sebelumnya) — jadi kamu
     TIDAK WAJIB ubah item yang sudah kamu isi kalau belum sempat
     pindahkan videonya.
   - YouTube: upload videonya dengan privasi "Unlisted" (tidak
     nongol di pencarian/channel publik, tapi tetap bisa dibuka siapa
     pun yang punya link) — paling direkomendasikan, gratis, dan
     tahan banting untuk trafik berapa pun.
   - Google Drive: pastikan sharing-nya "Anyone with the link can
     view". Link biasa yang kamu copy dari tombol "Share" itu sudah
     otomatis dibaca dengan benar (tidak perlu diotak-atik jadi ID
     doang). Drive punya kuota bandwidth harian per file untuk
     penonton anonim — cukup untuk portofolio pribadi, tapi kalau
     videonya tiba-tiba rame ditonton bisa sempat muncul pesan error
     kuota selama beberapa jam.
   - Poster/cover gambar tetap disimpan lokal di Asset/ seperti biasa
     (ukurannya kecil, tidak masalah untuk GitHub).

   Mau nambah/kurang jumlah thumbnail dalam 1 kategori? Tinggal
   tambah/hapus baris di dalam array "items"-nya, bebas berapa pun.

   Kalau src dikosongkan ("") -> thumbnail tampil placeholder biasa
   dan TIDAK bisa diklik (belum ada apa-apa untuk ditampilkan).
   ----------------------------------------------------------------
   CARA GANTI ASPECT RATIO (bentuk kotak thumbnail)
   ----------------------------------------------------------------
   Tambahkan "ratio" di item yang mau kamu atur bentuknya, contoh:

     { type: "image", src: "assets/work/videotron/foto1.jpg", ratio: "ar1" }

   Pilihannya:
     "ar1" -> potret / tegak   (4:5)  — cocok untuk foto portrait
     "ar2" -> kotak            (1:1)  — cocok untuk poster/IG post
     "ar3" -> lanskap / lebar  (16:9) — cocok untuk video/landscape

   Kalau "ratio" tidak diisi sama sekali, thumbnail itu otomatis
   kebagian gantian ar3/ar1/ar2 sesuai urutannya dalam "items" —
   jadi kamu TIDAK WAJIB isi "ratio" di semua item, cukup di item
   yang bentuknya mau kamu tentukan sendiri secara spesifik.

   Mau bentuk lain di luar 3 itu (misal 3:4 atau 9:16 untuk video
   vertikal)? Tambahkan class baru di style.css, contoh:
     .thumb.ar4{ aspect-ratio: 9/16; }
   lalu pakai ratio:"ar4" di item-nya.
   ----------------------------------------------------------------
   CARA GANTI LINK (kategori "linkout": Website & Game Development)
   ----------------------------------------------------------------
   Ganti items[].link dengan URL website/game aslinya, contoh:
     { link: "https://situs-kamu.com" }
   Thumbnail-nya sendiri tetap dari array "items" juga (boleh kasih
   "src" di situ untuk gambar cover-nya) — bedanya diklik langsung
   buka link tersebut di tab baru, bukan popup.
   ----------------------------------------------------------------
   CARA NAMBAH KATEGORI BARU
   ----------------------------------------------------------------
   Ada 2 langkah, dan HARUS dua-duanya — kalau cuma salah satu,
   nanti judul atau isinya nggak muncul dengan benar.

   Langkah 1 — tambah judul & deskripsinya di dict (di atas WORK
   CONFIG ini). Pakai nomor yang BELUM PERNAH dipakai sebelumnya —
   paling gampang, pakai angka setelah yang terbesar yang sudah ada.
   Contoh, kalau nomor terbesar yang sudah dipakai adalah wc10,
   berarti kategori barumu pakai wc11:

     wc11title: { en: "Category Name", id: "Nama Kategori" },
     wc11desc: { en: "Short description.", id: "Deskripsi singkat." },

   Langkah 2 — tambah objeknya di array workCategories di bawah ini.
   "i" HARUS SAMA PERSIS dengan nomor yang kamu pakai di Langkah 1
   (di contoh ini berarti i: 11):

     {
       i: 11,
       type: "gallery", // atau "linkout" / "audio", lihat penjelasan di atas
       driveLink: "https://drive.google.com/...",
       items: [
         { type: "image", src: "" },
       ],
     }, // Category Name

   PENTING soal urutan: kategori tampil di halaman SESUAI URUTANNYA
   di dalam array workCategories (dari atas ke bawah), BUKAN sesuai
   angka "i"-nya. Jadi kalau kamu mau kategori barumu muncul di
   tengah-tengah (misalnya persis setelah "Game Content Editing"),
   taruh saja objeknya di posisi itu dalam array — nomor "i"-nya
   tetap bebas berapa saja asal belum pernah dipakai dan cocok
   dengan nomor di dict Langkah 1. Kamu TIDAK PERLU menggeser atau
   mengganti nomor "i" kategori-kategori lain yang sudah ada.
   ================================================================ */
const workCategories = [
	{
		i: 0,
		type: "audio",
		driveLink:
			"https://drive.google.com/drive/folders/1FGmqHYSp_pdEJV3MY46_H3OSneq1Rzeu?usp=sharing",
	}, // Audio Editing — tanpa thumbnail sama sekali (audio tidak ada visualnya), cuma tombol Drive.
	{
		i: 1,
		type: "gallery",
		driveLink:
			"https://drive.google.com/drive/folders/1OZhibGtXC092yuOlzEqzXmx5aODy_mTK?usp=drive_link",
		// items: [
		// 	{ type: "video", src: "", poster: "" }, // <- isi src (video) & poster (gambar sampul)
		// 	{ type: "image", src: "" }, // <- isi src (foto)
		// 	{ type: "image", src: "" },
		// ],
	}, // Videotron Visual Editing
	{
		i: 2,
		type: "gallery",
		driveLink:
			"https://drive.google.com/drive/folders/1ZDJsPvW6YLikeaCq8AH8Eo3u-gQkx9di?usp=drive_link",
		items: [
			{
				type: "video",
				provider: "drive",
				src: "https://drive.google.com/file/d/1PKHJ68RMHOuJRYVTVS2cnEbCs-idT6Fi/view?usp=sharing",
				poster: "Asset/Video/Y1.jpg",
				ratio: "ar1",
			},
			{
				type: "video",
				provider: "drive",
				src: "https://drive.google.com/file/d/1nSsLkT0nkOGhtRJ8_7u30TTmXicZDAAO/view?usp=drive_link",
				poster: "Asset/Video/Y2.jpg",
				ratio: "ar1",
			},
			{
				type: "video",
				provider: "drive",
				src: "https://drive.google.com/file/d/1jTMZRG9k-2xdb1KpTCqAiwOK4sROLO_K/view?usp=drive_link",
				poster: "Asset/Video/Y3.jpg",
				ratio: "ar1",
			},
		],
	}, // YouTube Video Editing
	{
		i: 3,
		type: "gallery",
		driveLink:
			"https://drive.google.com/drive/folders/1GBy-d_pL_lpQ-XO_lJ2kvKQeh5StHqOp?usp=drive_link",
		items: [
			{ type: "image", src: "Asset/Foto/G1.jpg", ratio: "ar1" },
			{ type: "image", src: "Asset/Foto/G2.jpg", ratio: "ar1" },
			{ type: "image", src: "Asset/Foto/G3.jpg", ratio: "ar1" },
		],
	}, // Game Content Editing
	{
		i: 10,
		type: "gallery",
		driveLink:
			"https://drive.google.com/drive/folders/1GBy-d_pL_lpQ-XO_lJ2kvKQeh5StHqOp?usp=drive_link", // <- TODO: ganti dengan link Drive folder News Design kamu sendiri
		items: [
			{ type: "image", src: "Asset/Foto/B1.jpg", ratio: "ar1" }, // <- TODO: ganti dengan foto News Design kamu sendiri
			{ type: "image", src: "Asset/Foto/B2.jpg", ratio: "ar1" },
			{ type: "image", src: "Asset/Foto/B3.jpg", ratio: "ar1" },
		],
	}, // News Design (kategori baru — ditaruh di sini, urutan ke-5, supaya tampil persis
	//   setelah Game Content Editing di halaman Work)
	{
		i: 4,
		type: "gallery",
		driveLink:
			"https://drive.google.com/drive/folders/1peM2La_ES-_xQxyWy8N98mp68TjCzvgk?usp=drive_link",
		items: [
			{ type: "image", src: "Asset/Foto/T1.jpg", ratio: "ar4" },
			{ type: "image", src: "Asset/Foto/T2.jpg", ratio: "ar4" },
			{ type: "image", src: "Asset/Foto/T3.jpg", ratio: "ar4" },
		],
	}, // Theatre Poster Editing
	{
		i: 5,
		type: "gallery",
		driveLink:
			"https://drive.google.com/drive/folders/1HIPcGF-PK5dihTlvzq15v2JYW7Fs2mxb?usp=drive_link",
		items: [
			{
				type: "video",
				provider: "drive",
				src: "https://drive.google.com/file/d/1DN_uFUq7oIDvHwk39vCBxn94NJnYQI4H/view?usp=drive_link",
				poster: "Asset/Video/D1.jpg",
				ratio: "ar1",
			},
			{
				type: "video",
				provider: "drive",
				src: "https://drive.google.com/file/d/1RdPDde2JmpJo9eogTKM564YD9CwzmJx1/view?usp=drive_link",
				poster: "Asset/Video/D2.jpg",
				ratio: "ar1",
			},
			{ type: "video", src: "Asset/Video/D3.mp4", poster: "Asset/Video/D3.jpg", ratio: "ar1" },
		],
	}, // Documentation Editing
	{
		i: 6,
		type: "gallery",
		driveLink:
			"https://drive.google.com/drive/folders/1L5rgDW7bxX31JTnTcGNoQYpKkbSzrBg2?usp=drive_link",
		items: [
			{
				type: "video",
				provider: "drive",
				src: "https://drive.google.com/file/d/1hgMeslsc_saY0Wrq4b-IWVsEZ6Av6kGp/view?usp=drive_link",
				poster: "Asset/Video/P1.jpg",
				ratio: "ar1",
			},
			{ type: "video", src: "Asset/Video/P2.mp4", poster: "Asset/Video/P2.jpg", ratio: "ar1" },
			{
				type: "video",
				provider: "drive",
				src: "https://drive.google.com/file/d/1nFmQNjoxHU1xCzmvkuGDVdJpJTriykbx/view?usp=drive_link",
				poster: "Asset/Video/P3.jpg",
				ratio: "ar1",
			},
		],
	}, // Simple Promotion Video Editing
	{
		i: 7,
		type: "linkout",
		items: [
			{
				link: "https://pelanggaransekolah.site.je",
				src: "Asset/Foto/W1.png",
			}, // <- ganti "#" dengan URL website aslinya, "src" untuk gambar cover
			{
				link: "https://drive.google.com/file/d/1JAYLneB8OsWutgzckx_tIjtTGvi25gbO/view?usp=drive_link",
				src: "Asset/Foto/W2.jpg",
				ratio: "ar3",
			}, // <- ganti "#" dengan URL website aslinya, "src" untuk gambar cover
		],
	}, // Website Development
	{
		i: 8,
		type: "linkout",
		items: [
			{ link: "https://penjelajahterbaik.netlify.app", src: "Asset/Foto/G1.png" },
			{ link: "https://snake-game-by-mahesa.netlify.app", src: "Asset/Foto/G2.png", ratio: "ar3" }, // <- ganti "#" dengan URL/halaman game aslinya
		],
	}, // Game Development
	{
		i: 9,
		type: "gallery",
		driveLink:
			"https://drive.google.com/drive/folders/1vdwqVZWstX1vTNErIo74WP3zTso2z4xx?usp=drive_link",
		items: [
			{ type: "image", src: "Asset/Foto/O1.jpg", ratio: "ar1" },
			{ type: "image", src: "Asset/Foto/O2.jpg", ratio: "ar1" },
			{ type: "image", src: "Asset/Foto/O3.jpg", ratio: "ar1" },
		],
	}, // Other Editing
];

/* ---------------- build work grid (tidak perlu diubah) ---------------- */
const grid = document.getElementById("workGrid");
const ars = ["ar3", "ar1", "ar2"];

// bikin satu elemen thumbnail dari 1 item. "clickable" menentukan apakah
// klik-nya harus buka popup (foto/video) atau buka link (linkout).
function buildThumb(item, index, mode) {
	// aspect ratio: pakai "ratio" yang kamu isi di item, kalau tidak diisi
	// akan otomatis gantian ar3/ar1/ar2 seperti biasa (lihat penjelasan
	// "GANTI ASPECT RATIO" di atas WORK CONFIG)
	const ar = item.ratio || ars[index % ars.length];
	const hasMedia = Boolean(item.src);
	const bg = hasMedia ? ` style="background-image:url('${item.src}')"` : "";

	if (mode === "linkout") {
		// thumbnail Website/Game Dev: klik langsung buka link project-nya di tab baru
		return `<a class="thumb ${ar} linkout${hasMedia ? " has-media" : ""}" href="${item.link}" target="_blank" rel="noopener"${bg}>
      <span class="visit" data-i18n="visitBadge"></span>
    </a>`;
	}

	// thumbnail galeri biasa (foto/video): klik buka popup, lewat data-* di bawah
	const isVideo = item.type === "video";
	// poster JPG dipakai sebagai gambar thumbnail kalau ada — berlaku sama saja
	// baik videonya file lokal maupun dari YouTube/Drive (lihat "provider" di atas)
	const posterBg = isVideo && item.poster ? ` style="background-image:url('${item.poster}')"` : bg;
	const classes = `thumb ${ar}${isVideo ? " video-thumb" : ""}${hasMedia || (isVideo && item.poster) ? " has-media" : ""}`;
	const badge = isVideo ? "VID" : "IMG";

	if (!item.src) {
		// belum ada file/link diisi -> tampil placeholder polos, tidak bisa diklik
		return `<div class="${classes}"><span class="badge">${badge}</span></div>`;
	}

	// provider: "youtube" / "drive" -> lightbox nanti tahu harus buka embed,
	// bukan file .mp4 lokal. Kalau tidak diisi, dianggap file lokal seperti biasa.
	const provider = item.provider || "local";
	return `<div class="${classes}" data-media-type="${item.type}" data-media-src="${item.src}" data-media-provider="${provider}"${posterBg}>
    <span class="badge">${badge}</span>
  </div>`;
}

function renderWork() {
	grid.innerHTML = "";
	workCategories.forEach((cat) => {
		const card = document.createElement("div");
		card.className = "work-card reveal in-view";

		let body = "";
		if (cat.type === "audio") {
			body = `<div class="card-actions"><a class="btn" href="${cat.driveLink}" target="_blank" rel="noopener" data-i18n="driveAudioLink"></a></div>`;
		} else if (cat.type === "gallery") {
			const thumbs = (cat.items || []).map((item, j) => buildThumb(item, j, "gallery")).join("");
			const galleryHTML = thumbs ? `<div class="gallery">${thumbs}</div>` : "";
			body = `${galleryHTML}
              <div class="card-actions"><a class="btn" href="${cat.driveLink}" target="_blank" rel="noopener" data-i18n="driveLink"></a></div>`;
		} else if (cat.type === "linkout") {
			const thumbs = cat.items.map((item, j) => buildThumb(item, j, "linkout")).join("");
			body = `<div class="gallery">${thumbs}</div>`;
		}

		card.innerHTML = `
      <div class="work-card-head">
        <h3 data-i18n="wc${cat.i}title"></h3>
        <div class="desc" data-i18n="wc${cat.i}desc"></div>
      </div>
      ${body}`;
		grid.appendChild(card);
	});
}

/* ================================================================
   LIGHTBOX (popup foto/video) — JANGAN DIUBAH
   ----------------------------------------------------------------
   Ini yang bikin thumbnail foto/video di bagian Work bisa diklik
   dan muncul lebih besar & fokus di tengah layar (video langsung
   ikut diputar). Elemennya (#lightbox, #lightboxMedia,
   #lightboxClose) ada di index.html, tepat sebelum tag </body>.
   Tidak ada yang perlu kamu ubah di sini — cukup isi "src"/"poster"
   di WORK CONFIG di atas, popup ini akan otomatis jalan.
   ================================================================ */
const lightbox = document.getElementById("lightbox");
const lightboxMedia = document.getElementById("lightboxMedia");
const lightboxClose = document.getElementById("lightboxClose");

// Ambil ID video dari link YouTube biasa (youtu.be/ID, watch?v=ID, shorts/ID, dst).
// Kalau yang dikasih sudah berupa ID polos (bukan URL), dipakai apa adanya.
function extractYouTubeId(src) {
	const patterns = [
		/youtu\.be\/([\w-]+)/,
		/[?&]v=([\w-]+)/,
		/youtube\.com\/embed\/([\w-]+)/,
		/youtube\.com\/shorts\/([\w-]+)/,
	];
	for (const p of patterns) {
		const m = src.match(p);
		if (m) return m[1];
	}
	return src; // dianggap sudah ID
}

// Ambil FILE_ID dari link share Google Drive biasa (.../d/FILE_ID/view...).
// Kalau yang dikasih sudah berupa ID polos, dipakai apa adanya.
function extractDriveId(src) {
	const m = src.match(/\/d\/([\w-]+)/) || src.match(/[?&]id=([\w-]+)/);
	return m ? m[1] : src;
}

function openLightbox(type, src, provider) {
	if (!src) return; // belum ada file/link diisi, jangan buka apa-apa

	if (type === "video" && provider === "youtube") {
		const id = extractYouTubeId(src);
		lightboxMedia.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
	} else if (type === "video" && provider === "drive") {
		const id = extractDriveId(src);
		lightboxMedia.innerHTML = `<iframe src="https://drive.google.com/file/d/${id}/preview" allow="autoplay" allowfullscreen></iframe>`;
	} else if (type === "video") {
		lightboxMedia.innerHTML = `<video src="${src}" controls autoplay playsinline></video>`;
	} else {
		lightboxMedia.innerHTML = `<img src="${src}" alt="">`;
	}
	lightbox.classList.add("open");
	document.body.style.overflow = "hidden";
}
function closeLightbox() {
	lightbox.classList.remove("open");
	lightboxMedia.innerHTML = ""; // stop video-nya dengan cara buang elemennya
	document.body.style.overflow = "";
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
	if (e.target === lightbox) closeLightbox(); // klik area gelap di luar foto/video = tutup
});
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeLightbox();
});

// klik pada thumbnail foto/video (bukan yang tipe "linkout") -> buka lightbox
grid.addEventListener("click", (e) => {
	const thumb = e.target.closest(".thumb[data-media-src]");
	if (!thumb) return;
	openLightbox(thumb.dataset.mediaType, thumb.dataset.mediaSrc, thumb.dataset.mediaProvider);
});

/* ---------------- build services grid ---------------- */
const serviceGrid = document.getElementById("serviceGrid");
for (let i = 0; i < 6; i++) {
	const a = document.createElement("a");
	a.className = "service-chip";
	a.href = "#contact";
	a.innerHTML = `<span class="name" data-i18n="svc${i}"></span><span class="arrow mono">→</span>`;
	serviceGrid.appendChild(a);
}

/* ---------------- i18n apply ---------------- */
function applyLang(lang) {
	currentLang = lang;
	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n");
		if (dict[key]) el.innerHTML = dict[key][lang];
	});
	document.documentElement.lang = lang;
	document.getElementById("langSwitch").setAttribute("data-lang", lang);
	document.querySelectorAll("[data-lang-btn]").forEach((b) => {
		b.classList.toggle("active", b.getAttribute("data-lang-btn") === lang);
	});
}
document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
	btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang-btn")));
});
renderWork();
applyLang("en");

/* ---------------- typing effect on hero name ---------------- */
const heroName = document.getElementById("heroName");
const fullName = "I Kadek Mahesa\nArta Wibawa";
setTimeout(() => {
	heroName.innerHTML = "";
	const textSpan = document.createElement("span");
	const cursor = document.createElement("span");
	cursor.className = "cursor";
	heroName.appendChild(textSpan);
	heroName.appendChild(cursor);
	let i = 0;
	function typeChar() {
		if (i < fullName.length) {
			const ch = fullName[i];
			textSpan.innerHTML += ch === "\n" ? "<br>" : ch;
			i++;
			setTimeout(typeChar, 42);
		}
	}
	typeChar();
}, 900);

/* ---------------- scroll reveal ---------------- */
const io = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("in-view");
				io.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.15 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------------- scrubber progress ---------------- */
const fill = document.getElementById("scrubFill");
function updateFill() {
	const h = document.documentElement;
	const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
	fill.style.width = Math.min(100, Math.max(0, scrolled)) + "%";
}
window.addEventListener("scroll", updateFill);
updateFill();

/* ================================================================
   SCROLLSPY (penanda menu aktif) — JANGAN DIUBAH
   ----------------------------------------------------------------
   PERBAIKAN BUG: sebelumnya ini pakai IntersectionObserver yang
   cuma menganggap "aktif" kalau sebuah section masuk ke band
   tengah layar (rootMargin -45% atas & bawah, cuma ~10% tinggi
   layar). Section yang pendek — seperti Achievements — bisa saja
   terlewat dari band sempit itu dalam satu scroll cepat, sehingga
   observer tidak pernah sempat menandainya "aktif" dan penanda
   menu jadi lompat ke section lain (Work).

   Sekarang dipakai cara yang lebih sederhana & selalu akurat:
   setiap kali discroll, kita hitung posisi scroll saat ini, lalu
   cari section paling bawah yang bagian atasnya sudah terlewati.
   Ini tidak bergantung pada tinggi section atau kecepatan scroll,
   jadi tidak akan pernah "kelewat" lagi.
   ================================================================ */
const points = document.querySelectorAll(".scrub-points a");
const navA = document.querySelectorAll(".navlinks a");
const spySections = ["hero", "about", "work", "services", "experience", "achievements", "contact"]
	.map((id) => document.getElementById(id))
	.filter(Boolean);

function updateActiveSection() {
	const triggerLine = window.scrollY + window.innerHeight * 0.4;
	let activeId = spySections[0].id;
	spySections.forEach((sec) => {
		if (sec.offsetTop <= triggerLine) activeId = sec.id;
	});
	points.forEach((p) => p.classList.toggle("active", p.dataset.section === activeId));
	navA.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + activeId));
}
window.addEventListener("scroll", updateActiveSection);
updateActiveSection();
