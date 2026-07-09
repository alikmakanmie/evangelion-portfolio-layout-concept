export interface Project {
  id: string;
  code: string;
  title: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  url: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'DEVELOPMENT';
}

export interface AssetDescription {
  id: string;
  name: string;
  originalDescription: string;
  webImplementation: string;
  coordinates: { x: number; y: number; width: number; height: number }; // Percentage coordinate on poster for hotspots
}

export const ASSET_LIST: AssetDescription[] = [
  {
    id: 'central-rei',
    name: 'Patung Dada Sentral Rei Ayanami',
    originalDescription: 'Karakter utama di tengah dengan rambut biru pendek, mata merah yang mencolok, dan mengenakan plugsuit putih-hitam dengan aksen merah di kerah. Bayangan dan pencahayaan sangat dramatis (gaya retro anime).',
    webImplementation: 'Ditempatkan di lapisan latar depan (foreground layer) dengan efek parallax terkuat. Memiliki bayangan lembut (shadow-2xl) dan filter high-contrast. Responsif terhadap pergerakan mouse (sedikit bergeser secara dinamis).',
    coordinates: { x: 45, y: 40, width: 25, height: 50 }
  },
  {
    id: 'secondary-rei',
    name: 'Patung Dada Kanan (Lebih Kecil)',
    originalDescription: 'Bust Rei Ayanami yang lebih kecil di sisi kanan, tampak menyamping (profile), dibingkai oleh efek kertas sobek (torn paper effect) berwarna abu-abu/putih bertekstur grunge, memberikan kesan terfragmentasi.',
    webImplementation: 'Menggunakan masker CSS berbentuk grunge/torn paper, ditempatkan di sisi kanan dengan parallax lebih lambat untuk efek kedalaman (depth of field). Dilengkapi dengan overlay logo NERV di atasnya.',
    coordinates: { x: 80, y: 45, width: 18, height: 40 }
  },
  {
    id: 'text-00',
    name: 'Teks Besar "00"',
    originalDescription: 'Angka "00" raksasa berwarna merah solid dengan outline putih tebal di bagian kiri atas. Mewakili identitas unit Evangelion milik Rei (EVA-00).',
    webImplementation: 'Didesain menggunakan SVG atau Tailwind CSS teks tebal berongga (outline). Menggunakan font display besar (misal: "Space Grotesk" atau "Impact"). Diberikan efek blending mode "screen" atau "overlay" sebagai elemen grid latar belakang.',
    coordinates: { x: 12, y: 20, width: 15, height: 20 }
  },
  {
    id: 'text-eva-unit',
    name: 'Teks "EVA UNIT"',
    originalDescription: 'Teks "EVA UNIT" berwarna biru muda dengan border biru tua, berada tepat di bawah angka "00".',
    webImplementation: 'Teks stensil dengan gaya militer futuristik. Menggunakan font sans-serif berkecepatan tinggi dengan tracking lebar (letter-spacing) dan bayangan neon biru.',
    coordinates: { x: 12, y: 43, width: 15, height: 5 }
  },
  {
    id: 'text-rei-name',
    name: 'Teks Nama "REI AYANAMI"',
    originalDescription: 'Teks nama karakter berwarna merah dengan border putih di bagian kanan bawah, memperkuat fokus karakter utama.',
    webImplementation: 'Menggunakan warna merah menyala dengan animasi transisi masuk (staggered letter animation). Berfungsi sebagai penanda identitas utama pada layout portofolio.',
    coordinates: { x: 70, y: 88, width: 20, height: 5 }
  },
  {
    id: 'kanji-texts',
    name: 'Teks Kanji / Jepang (Termasuk Label "Spam" & "Peringatan")',
    originalDescription: 'Berbagai teks Kanji tersebar: "警告" (Keikoku / Warning) di pojok kiri bawah dan kanan atas dengan latar merah, "垃圾广告" (Lājī guǎnggào / Iklan Sampah - teks humoris grunge) di kiri bawah, dan kaligrafi hitam "新龍" (Shinryu / Naga Baru) di beberapa tempat.',
    webImplementation: 'Disajikan sebagai elemen dekorasi mengambang (floating UI labels). Label "警告" (Warning) berkedip merah neon sebagai peringatan interaktif, sementara kaligrafi "新龍" menggunakan font brush tradisional Jepang untuk kontras retro-futuristik.',
    coordinates: { x: 10, y: 90, width: 10, height: 8 }
  },
  {
    id: 'nerv-logo',
    name: 'Logo NERV',
    originalDescription: 'Logo ikonik organisasi NERV (setengah daun ara merah dengan tulisan "GOD\'S IN HIS HEAVEN. ALL\'S RIGHT WITH THE WORLD") yang samar di bagian kanan tengah bawah.',
    webImplementation: 'Aset SVG vektor presisi tinggi yang ditempatkan di latar belakang dengan opacity rendah (20-30%) dan mode blending "overlay", memberikan kesan distopia teknologi.',
    coordinates: { x: 95, y: 55, width: 5, height: 10 }
  },
  {
    id: 'technical-mesh',
    name: 'Jaring Teknis Latar Belakang (Wireframe Globe & Grid)',
    originalDescription: 'Struktur jaring kawat (wireframe globe) bulat tiga dimensi dan garis-garis grid koordinat militer yang memenuhi latar belakang gelap.',
    webImplementation: 'Dibuat dinamis menggunakan HTML5 Canvas 2D/3D interaktif yang berputar perlahan berdasarkan pergerakan kursor mouse (interactive physics), memberikan kesan UI sistem komputer taktis (HUD).',
    coordinates: { x: 30, y: 22, width: 12, height: 12 }
  }
];

export const METHOD_ISOLATION = {
  title: 'Metode Isolasi (Pemotongan) Gambar Rei Ayanami',
  steps: [
    {
      step: '1',
      title: 'Pen Tool / Vector Masking (Photoshop/Illustrator)',
      desc: 'Gunakan Pen Tool (P) untuk membuat jalur vektor yang presisi di sepanjang garis luar rambut biru Rei dan plugsuit putihnya. Karena rambut Rei memiliki detail tajam, metode vektor ini memberikan potongan tepi (hard edges) yang sangat bersih khas anime.'
    },
    {
      step: '2',
      title: 'Refine Edge / Select and Mask (Penanganan Rambut Halus)',
      desc: 'Gunakan fitur "Select and Mask" di bagian ujung-ujung helai rambut untuk memisahkan rambut dari jaring kawat latar belakang. Kuas "Refine Radius Tool" dapat mendeteksi celah kecil di antara rambut untuk transparansi sempurna.'
    },
    {
      step: '3',
      title: 'Pemisahan Lapisan & Spot-Healing (Latar Belakang)',
      desc: 'Setelah Rei dipotong, gunakan "Content-Aware Fill" atau "Clone Stamp Tool" pada area latar belakang poster asli yang tertutup badan Rei, agar jaring kawat (mesh globe) di belakangnya bisa direkonstruksi secara utuh untuk parallax berlapis.'
    },
    {
      step: '4',
      title: 'Ekspor Format Optimal (WebP dengan Alpha Channel)',
      desc: 'Ekspor gambar Rei yang terisolasi ke format WebP (atau PNG-24) dengan kompresi lossy 85% untuk menjaga transparansi alpha channel dengan ukuran file minimal (<150KB), memastikan loading website super cepat.'
    },
    {
      step: '5',
      title: 'CSS Masking & Blending Fallback',
      desc: 'Di sisi web, jika menggunakan gambar mentah dengan latar hitam, gunakan CSS property `mix-blend-mode: screen` atau `mix-blend-mode: lighten` untuk mengeliminasi warna hitam pekat di sekitar rambut Rei secara instan tanpa potong manual.'
    }
  ]
};

export const INTERACTION_SPECS = {
  title: 'Spesifikasi Interaksi & Parallax Fisika',
  details: [
    {
      feature: 'Parallax Mouse Multi-Lapisan',
      math: 'dx = (mouseX - windowWidth/2) * speedFactor',
      desc: 'Setiap elemen poster merespon pergerakan mouse dengan koefisien kecepatan yang berbeda. Latar belakang (mesh kawat) bergeser sangat lambat (factor: 0.01), teks besar "00" bergeser sedang (0.02), potret Rei utama bergeser cepat (0.05) ke arah berlawanan, menciptakan ilusi 3D stereoskopik mendalam.'
    },
    {
      feature: 'Rotasi Grid 3D Interaktif',
      math: 'rotationSpeed = baseSpeed + (mouseAcceleration * 0.1)',
      desc: 'Wireframe bola dunia (mesh globe) di latar belakang berputar otomatis pada sumbu Y. Saat mouse bergerak cepat, kecepatan rotasi bertambah, menciptakan efek responsif real-time terhadap aktivitas pengguna.'
    },
    {
      feature: 'Layar HUD Taktis & Efek Kursor',
      math: 'opacity = clamp(1 - distance/300, 0.1, 1)',
      desc: 'Kursor mouse digantikan oleh crosshair taktis melingkar khas sistem target Evangelion. Elemen interaktif di dekat kursor akan sedikit bersinar terang (glow neon) dan memancarkan gelombang sonar sirkular saat diklik.'
    },
    {
      feature: 'Efek Glitch Audio-Visual',
      math: 'frequency = random(100ms, 2000ms)',
      desc: 'Label peringatan "警告" dan grid merah sesekali mengalami efek "glitch" visual singkat (translasi acak dan pergeseran warna RGB) saat didekati oleh mouse, memperkuat tema distopia sci-fi militer.'
    }
  ]
};

export const CORE_SKILLS = {
  title: 'KEMAMPUAN INTI',
  items: [
    { name: 'Laravel / Web Development', level: 86 },
    { name: 'Python / Flask API', level: 84 },
    { name: 'Git (GitHub/GitLab)', level: 88 },
    { name: 'Postman / API Testing', level: 85 },
    { name: 'Linux (Arch/Fedora)', level: 82 },
    { name: 'Network Troubleshooting', level: 78 },
  ]
};

export const TOOLS = {
  title: 'TOOLS',
  items: [
    { name: 'Figma / Canva / Photoshop', level: 83 },
    { name: 'After Effects', level: 80 },
    { name: 'ADB / Custom Recovery', level: 75 },
    { name: 'Windows ISO Customization', level: 70 },
    { name: 'Visual Merchandising', level: 65 },
    { name: 'Video Content Production', level: 80 },
  ]
};

export const EDUCATION = {
  title: 'PENDIDIKAN',
  items: [
    {
      school: 'SMKN 04 Payakumbuh',
      major: 'Rekayasa Perangkat Lunak (RPL)',
      period: '2022-2025',
      achievements: ['Vendor Lomba Expo (2024)', 'Inventory Logic', 'Adaptasi cepat sistem teknologi outlet modern']
    }
  ]
};

export const PROFESSIONAL_EXPERIENCE = [
  {
    id: '3',
    code: 'PRO-01',
    title: 'Application Developer - Vocakey',
    category: 'PROJECT DELIVERY',
    date: '2024-2025',
    description: 'Mengembangkan aplikasi prototipe Vocakey dari tahap riset hingga implementasi. Fokus pada integrasi backend, debugging, dan deployment terstruktur menggunakan Laravel dan Python.',
    technologies: ['Laravel', 'Python', 'Postman', 'Railway'],
    url: 'https://portfolio-alikmakanmie.vercel.app/',
    status: 'ACTIVE' as const
  },
  {
    id: '4',
    code: 'PRO-02',
    title: 'Backend Developer Intern - Weclic',
    category: 'INTERNSHIP',
    date: '2025',
    description: 'Bergabung sebagai Backend Developer Intern di Weclic. Bertanggung jawab dalam pengembangan API, integrasi sistem, dan debugging untuk mendukung platform utama perusahaan.',
    technologies: ['Laravel', 'Postman', 'API Integration', 'Git'],
    url: 'https://portfolio-alikmakanmie.vercel.app/',
    status: 'ARCHIVED' as const
  },
  {
    id: '5',
    code: 'PRO-03',
    title: 'Web Developer - Mini Coding Academy',
    category: 'CONTRACT',
    date: '2025',
    description: 'Mengembangkan dan memelihara website untuk Mini Coding Academy. Fokus pada implementasi frontend dan backend menggunakan Laravel serta deployment terstruktur.',
    technologies: ['Laravel', 'JavaScript', 'CSS', 'Deployment'],
    url: 'https://portfolio-alikmakanmie.vercel.app/',
    status: 'ARCHIVED' as const
  },
  {
    id: '6',
    code: 'PRO-04',
    title: 'Freelance Video Creator',
    category: 'TECHNICAL PRODUCTION',
    date: '2024-2026',
    description: 'Freelance Video Creator untuk Kementerian Pendidikan. Memproduksi konten video edukatif menggunakan After Effects, mencakup perencanaan, editing, dan rendering untuk platform pembelajaran.',
    technologies: ['After Effects', 'Canva', 'Video Production'],
    url: 'https://portfolio-alikmakanmie.vercel.app/',
    status: 'ACTIVE' as const
  },
  {
    id: '7',
    code: 'PRO-05',
    title: 'WhatsApp Automation Bot',
    category: 'INDEPENDENT WORK',
    date: 'ONGOING',
    description: 'Mengembangkan bot otomatisasi WhatsApp berbasis Python untuk keperluan bisnis dan komunikasi terjadwal. Mencakup integrasi API, handling session, dan deployment.',
    technologies: ['Python', 'API Integration', 'Automation'],
    url: 'https://portfolio-alikmakanmie.vercel.app/',
    status: 'DEVELOPMENT' as const
  },
  {
    id: '8',
    code: 'PRO-06',
    title: 'Mobile OS Customization & Debugging',
    category: 'SYSTEM ENGINEERING',
    date: 'ONGOING',
    description: 'Melakukan kustomisasi dan debugging sistem operasi Android menggunakan ADB dan custom recovery. Termasuk performance tuning kernel, troubleshooting bug sistem, dan integrasi Android di Windows melalui WSA.',
    technologies: ['ADB', 'Custom Recovery', 'WSA', 'Kernel Tuning'],
    url: 'https://portfolio-alikmakanmie.vercel.app/',
    status: 'DEVELOPMENT' as const
  },
  {
    id: '10',
    code: 'PRO-08',
    title: 'Vendor Lomba Expo 2024',
    category: 'EVENT PARTICIPATION',
    date: '2024',
    description: 'Berpartisipasi sebagai vendor pada Lomba Expo 2024 yang diselenggarakan oleh sekolah. Mempresentasikan solusi teknologi yang dikembangkan dan mendapatkan pengalaman dalam presentasi produk IT.',
    technologies: ['Public Speaking', 'IT Logic', 'Presentation'],
    url: 'https://portfolio-alikmakanmie.vercel.app/',
    status: 'ARCHIVED' as const
  }
];

export const CONTACT_LOCATION = {
  address: 'Jl. Raya Janti Gg. Ketapang No.180, Gowok, Yogyakarta',
  mapsQuery: 'Jl. Raya Janti Gg. Ketapang No.180, Gowok, Yogyakarta',
  mapsEmbedUrl: 'https://maps.google.com/maps?q=Jl.%20Raya%20Janti%20Gg.%20Ketapang%20No.180%2C%20Gowok%2C%20Yogyakarta&z=16&output=embed',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.%20Raya%20Janti%20Gg.%20Ketapang%20No.180%2C%20Gowok%2C%20Yogyakarta'
};
