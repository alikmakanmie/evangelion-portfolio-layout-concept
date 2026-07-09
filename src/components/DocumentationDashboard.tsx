import { useState } from 'react';
import { ASSET_LIST, METHOD_ISOLATION, INTERACTION_SPECS, PROFESSIONAL_EXPERIENCE } from '../data';
import { Shield, Hammer, Compass, Terminal, Cpu, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

interface DocumentationDashboardProps {
  parallaxStrength: number;
  setParallaxStrength: (val: number) => void;
  rotationSpeed: number;
  setRotationSpeed: (val: number) => void;
  themeColor: 'unit-00' | 'unit-01' | 'unit-02';
  setThemeColor: (val: 'unit-00' | 'unit-01' | 'unit-02') => void;
  isGridVisible: boolean;
  setIsGridVisible: (val: boolean) => void;
  isKanjiVisible: boolean;
  setIsKanjiVisible: (val: boolean) => void;
  activeHotspot: string | null;
  setActiveHotspot: (id: string | null) => void;
}

export default function DocumentationDashboard({
  parallaxStrength,
  setParallaxStrength,
  rotationSpeed,
  setRotationSpeed,
  themeColor,
  setThemeColor,
  isGridVisible,
  setIsGridVisible,
  isKanjiVisible,
  setIsKanjiVisible,
  activeHotspot,
  setActiveHotspot,
}: DocumentationDashboardProps) {
  const [activeTab, setActiveTab] = useState<'assets' | 'isolation' | 'math' | 'demo' | 'code'>('assets');
  const [selectedProject, setSelectedProject] = useState<typeof PROFESSIONAL_EXPERIENCE[0] | null>(PROFESSIONAL_EXPERIENCE[0]);

  const handleProjectSelect = (proj: typeof PROFESSIONAL_EXPERIENCE[0]) => {
    setSelectedProject(proj);
    // Play cool sound
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.frequency.setValueAtTime(1200, ctx.currentTime);
        gain.gain.setValueAtTime(0.05, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      }
    } catch (_) {}
  };

  return (
    <div className="flex flex-col h-full w-full bg-black/40 border border-[#2d2e38] rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Top Tabs */}
      <div className="flex border-b border-[#2d2e38] bg-black/20 overflow-x-auto">
        <button
          onClick={() => setActiveTab('assets')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider border-r border-[#2d2e38] transition-all whitespace-nowrap ${
            activeTab === 'assets'
              ? 'bg-[#e61a27]/10 text-white font-bold border-b-2 border-b-[#e61a27]'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Shield className="w-4.5 h-4.5" />
          I. ANALISIS ASET
        </button>
        <button
          onClick={() => setActiveTab('isolation')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider border-r border-[#2d2e38] transition-all whitespace-nowrap ${
            activeTab === 'isolation'
              ? 'bg-[#e61a27]/10 text-white font-bold border-b-2 border-b-[#e61a27]'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Hammer className="w-4.5 h-4.5" />
          II. STRATEGI ISOLASI
        </button>
        <button
          onClick={() => setActiveTab('math')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider border-r border-[#2d2e38] transition-all whitespace-nowrap ${
            activeTab === 'math'
              ? 'bg-[#e61a27]/10 text-white font-bold border-b-2 border-b-[#e61a27]'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Compass className="w-4.5 h-4.5" />
          III. INTERAKSI & KONTROL
        </button>
        <button
          onClick={() => setActiveTab('demo')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider border-r border-[#2d2e38] transition-all whitespace-nowrap ${
            activeTab === 'demo'
              ? 'bg-[#e61a27]/10 text-white font-bold border-b-2 border-b-[#e61a27]'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Terminal className="w-4.5 h-4.5" />
          IV. DEMO LAYOUT PORTOFOLIO
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
            activeTab === 'code'
              ? 'bg-[#e61a27]/10 text-white font-bold border-b-2 border-b-[#e61a27]'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Zap className="w-4.5 h-4.5 text-[#00f0ff]" />
          V. KODE MANDIRI (HTML/CSS/JS)
        </button>
      </div>

      {/* Main Tab Panel */}
      <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)', minHeight: '380px' }}>
        
        {/* ======================================= */}
        {/* TAB 1: ASSETS ANALYSIS                  */}
        {/* ======================================= */}
        {activeTab === 'assets' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-[#e61a27]/5 border-l-4 border-[#e61a27] p-3 rounded-r">
              <h3 className="font-display font-bold text-sm text-white mb-1 uppercase">Daftar Komponen Visual Utama</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Berikut adalah identifikasi mendetail mengenai aset-aset utama pada poster Evangelion yang dikonversi menjadi elemen interaktif web. Klik atau sentuh hotspot berkedip di kanvas kiri untuk menyorot elemen tersebut secara langsung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ASSET_LIST.map((asset) => {
                const isSelected = activeHotspot === asset.id;
                return (
                  <div
                    key={asset.id}
                    onClick={() => setActiveHotspot(asset.id === activeHotspot ? null : asset.id)}
                    className={`p-3 rounded border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-[#e61a27]/10 border-[#e61a27] shadow-lg'
                        : 'bg-black/20 border-[#2d2e38] hover:border-gray-700 hover:bg-black/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-display font-bold text-xs text-white uppercase tracking-tight">
                        {asset.name}
                      </span>
                      <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-[#e61a27] text-white' : 'bg-gray-800 text-gray-400'
                      }`}>
                        {asset.id.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-400 text-[11px] leading-relaxed mb-2">
                      <span className="text-[#e61a27] font-semibold">Poster:</span> {asset.originalDescription}
                    </p>
                    <div className="border-t border-dashed border-gray-800/60 pt-2">
                      <p className="text-gray-300 text-[11px] leading-relaxed">
                        <span className="text-emerald-400 font-semibold">Web UI:</span> {asset.webImplementation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 2: IMAGE ISOLATION STRATEGY         */}
        {/* ======================================= */}
        {activeTab === 'isolation' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-[#00f0ff]/5 border-l-4 border-[#00f0ff] p-3 rounded-r">
              <h3 className="font-display font-bold text-sm text-white mb-1 uppercase">
                {METHOD_ISOLATION.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Bagian krusial dari implementasi web modern yang interaktif adalah mengisolasi patung dada utama Rei Ayanami dari detail jaring latar belakang agar dapat melayang secara transparan. Berikut adalah strategi terbaik untuk memotongnya:
              </p>
            </div>

            <div className="space-y-3">
              {METHOD_ISOLATION.steps.map((step) => (
                <div key={step.step} className="flex gap-3 p-3 bg-black/20 border border-[#2d2e38] rounded hover:border-gray-800 transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#e61a27] to-red-900 text-white font-mono font-bold flex items-center justify-center text-sm shadow-md">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-black/50 border border-emerald-500/20 rounded-md">
              <div className="flex gap-2 items-center text-emerald-400 font-display font-bold text-xs uppercase mb-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Tips Ekstra untuk Pengembang Web (Tailwind Hacks)
              </div>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Ketika memotong siluet rambut di Photoshop, gunakan <strong>"Color Range" masking</strong> pada saluran warna merah dan biru karena kontras rambut Rei sangat kuat. Di kode CSS, jika Anda ingin agar gambar memiliki bayangan mengikuti lekukan siluet transparan (bukan kotak file), gunakan properti filter Tailwind <code>filter drop-shadow-[...]</code>, bukan <code>box-shadow</code> biasa.
              </p>
            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 3: INTERACTIVE CONTROLS & MATH      */}
        {/* ======================================= */}
        {activeTab === 'math' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Live Interactive Control Panel */}
            <div className="p-3 bg-black/30 border border-dashed border-gray-800 rounded-md">
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#e61a27]" />
                Pusat Kontrol Fisika & Tema (Simulasi Web)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Parallax Strength Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between font-mono text-[10px] text-gray-400">
                    <span>KEKUATAN PARALLAX MOUSE:</span>
                    <span className="text-[#00f0ff]">{parallaxStrength.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="0.1"
                    value={parallaxStrength}
                    onChange={(e) => setParallaxStrength(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#e61a27]"
                  />
                  <p className="text-[9px] text-gray-500 leading-none">Menentukan seberapa jauh elemen bergeser mengikuti kursor.</p>
                </div>

                {/* Globe Rotation Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between font-mono text-[10px] text-gray-400">
                    <span>ROTASI GLOBE KAWAT (3D):</span>
                    <span className="text-[#00f0ff]">{rotationSpeed === 0 ? 'PAUSED' : `${(rotationSpeed * 1000).toFixed(1)} rad/s`}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="0.02"
                    step="0.001"
                    value={rotationSpeed}
                    onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                    className="w-full h-1.5 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#00f0ff]"
                  />
                  <p className="text-[9px] text-gray-500 leading-none">Mengontrol rotasi jaring teknik latar belakang.</p>
                </div>

                {/* Theme Selection */}
                <div className="space-y-1.5">
                  <span className="font-mono text-[10px] text-gray-400 block">WARNA AKSEN ANTARMUKA (EVANGELION UNITS):</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      onClick={() => setThemeColor('unit-00')}
                      className={`py-1 px-1.5 text-[9px] font-mono border rounded uppercase transition-all ${
                        themeColor === 'unit-00'
                          ? 'border-[#e61a27] bg-[#e61a27]/15 text-white'
                          : 'border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      Unit-00 (Rei Red)
                    </button>
                    <button
                      onClick={() => setThemeColor('unit-01')}
                      className={`py-1 px-1.5 text-[9px] font-mono border rounded uppercase transition-all ${
                        themeColor === 'unit-01'
                          ? 'border-[#a73bf5] bg-[#a73bf5]/15 text-white'
                          : 'border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      Unit-01 (Shinji Purple)
                    </button>
                    <button
                      onClick={() => setThemeColor('unit-02')}
                      className={`py-1 px-1.5 text-[9px] font-mono border rounded uppercase transition-all ${
                        themeColor === 'unit-02'
                          ? 'border-[#ff4f00] bg-[#ff4f00]/15 text-white'
                          : 'border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      Unit-02 (Asuka Orange)
                    </button>
                  </div>
                </div>

                {/* Toggles */}
                <div className="space-y-1.5 flex flex-col justify-end">
                  <span className="font-mono text-[10px] text-gray-400 block mb-1">VISIBILITAS ELEMEN POSTER:</span>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-300">
                      <input
                        type="checkbox"
                        checked={isGridVisible}
                        onChange={(e) => setIsGridVisible(e.target.checked)}
                        className="rounded border-gray-800 bg-gray-900 text-[#e61a27] focus:ring-0"
                      />
                      Grid Teknis
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-gray-300">
                      <input
                        type="checkbox"
                        checked={isKanjiVisible}
                        onChange={(e) => setIsKanjiVisible(e.target.checked)}
                        className="rounded border-gray-800 bg-gray-900 text-[#e61a27] focus:ring-0"
                      />
                      Teks Jepang/Kanji
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Math specifications explanation */}
            <div className="bg-[#e61a27]/5 border border-[#e61a27]/20 p-3.5 rounded-md space-y-2.5">
              <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                {INTERACTION_SPECS.title}
              </h4>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Di bawah ini adalah penjelasan logis bagaimana interaksi interaktif kursor mouse bekerja pada elemen-elemen situs web ini:
              </p>
              
              <div className="space-y-2 pt-1">
                {INTERACTION_SPECS.details.map((detail, idx) => (
                  <div key={idx} className="p-2.5 bg-black/40 rounded border border-gray-800/60">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display font-bold text-[11px] text-[#00f0ff] uppercase">{detail.feature}</span>
                      <code className="font-mono text-[9px] bg-gray-900 px-1 py-0.5 rounded text-gray-400 border border-gray-800">{detail.math}</code>
                    </div>
                    <p className="text-gray-400 text-[10px] leading-relaxed">{detail.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 4: PORTFOLIO SHOWCASE DEMO           */}
        {/* ======================================= */}
        {activeTab === 'demo' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-[#e61a27]/5 border-l-4 border-[#e61a27] p-3 rounded-r">
              <h3 className="font-display font-bold text-sm text-white mb-1 uppercase">Implementasi Layout Pada Halaman Portofolio</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Bagaimana desain poster Evangelion yang dramatis ini diaplikasikan pada portofolio rekayasa web sesungguhnya? Di bawah ini adalah visualisasi navigasi proyek militer NERV yang terintegrasi langsung dengan struktur desain HUD poster.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Project navigation list */}
              <div className="md:col-span-5 space-y-2">
                <span className="font-mono text-[9px] text-gray-500 block mb-1">SELECT_TACTICAL_INTELLIGENCE:</span>
                {PROFESSIONAL_EXPERIENCE.map((proj) => {
                  const isCurrent = selectedProject?.id === proj.id;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => handleProjectSelect(proj)}
                      className={`w-full text-left p-2.5 rounded border transition-all flex items-center justify-between ${
                        isCurrent
                          ? 'bg-[#e61a27]/10 border-[#e61a27] shadow-lg'
                          : 'bg-black/20 border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div className="truncate">
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            proj.status === 'ACTIVE' 
                              ? 'bg-emerald-500' 
                              : proj.status === 'DEVELOPMENT' 
                                ? 'bg-yellow-500 animate-pulse' 
                                : 'bg-gray-500'
                          }`} />
                          <span className="font-mono text-[9px] text-[#e61a27]">{proj.code}</span>
                        </div>
                        <div className="font-display font-bold text-white text-[11px] truncate mt-0.5">{proj.title}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    </button>
                  );
                })}
              </div>

              {/* Selected Project specs display */}
              <div className="md:col-span-7 bg-black/40 border border-gray-800 p-3.5 rounded-md flex flex-col justify-between">
                {selectedProject ? (
                  <div className="space-y-3">
                    <div className="flex justify-between items-start border-b border-gray-800 pb-2">
                      <div>
                        <div className="font-mono text-[9px] text-[#00f0ff] tracking-widest uppercase">
                          ■ FILE: {selectedProject.code}
                        </div>
                        <h4 className="font-display font-bold text-sm text-white uppercase mt-0.5">
                          {selectedProject.title}
                        </h4>
                      </div>
                      <span className="font-mono text-[10px] bg-red-950/40 text-red-400 border border-red-900/40 px-1.5 py-0.5 rounded uppercase">
                        {selectedProject.category}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-mono text-[9px] text-gray-500 block">DEKRIPSI LAPORAN KERJA:</span>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-mono text-[9px] text-gray-500 block">SPESIFIKASI INFRASTRUKTUR TEKNOLOGI:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="font-mono text-[9px] bg-gray-800/80 text-gray-300 py-0.5 px-2 rounded border border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-800 pt-3 mt-4 text-[10px] font-mono">
                      <div className="text-gray-500">
                        DATE_STAMP: <span className="text-gray-300">{selectedProject.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                        SYSTEM_STATUS_ONLINE
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-gray-500 text-xs font-mono">
                    SILAKAN PILIH BERKAS PROYEK UNTUK DIANALISIS
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 5: INTEGRATED STANDALONE CODE      */}
        {/* ======================================= */}
        {activeTab === 'code' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-[#00f0ff]/5 border-l-4 border-[#00f0ff] p-3 rounded-r flex flex-col gap-1">
              <h3 className="font-display font-bold text-sm text-white uppercase">Kode Integrasi Mandiri (HTML, CSS, JS)</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Di bawah ini adalah kode lengkap, siap pakai, dan terintegrasi penuh untuk mengimplementasikan portofolio interaktif bertema Evangelion ini dalam satu file tunggal (Single File App) menggunakan HTML5, CSS murni, dan Vanilla JavaScript:
              </p>
            </div>

            {/* Explanatory blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
              <div className="p-2 bg-black/30 border border-gray-800 rounded">
                <span className="font-mono text-[9px] text-[#e61a27] block mb-0.5">1. STRUKTUR HTML:</span>
                <p className="text-gray-400 text-[10px] leading-relaxed">Menggunakan CSS Grid 3D dengan lapisan z-index bertumpuk: latar belakang jaring, angka "00", potret Rei melayang, dan teks stensil taktis.</p>
              </div>
              <div className="p-2 bg-black/30 border border-gray-800 rounded">
                <span className="font-mono text-[9px] text-[#00f0ff] block mb-0.5">2. TRANSFORMASI PARALLAX:</span>
                <p className="text-gray-400 text-[10px] leading-relaxed">Menggunakan event listener <code>mousemove</code> pada window untuk mendeteksi koordinat X/Y, lalu mentransformasikannya dengan faktor redaman agar responsif dan aman.</p>
              </div>
              <div className="p-2 bg-black/30 border border-gray-800 rounded">
                <span className="font-mono text-[9px] text-emerald-400 block mb-0.5">3. PENGAMAN TEPI SCREEN:</span>
                <p className="text-gray-400 text-[10px] leading-relaxed">Faktor sensitivitas kecil (misal 0.05 untuk Rei, 0.02 untuk grid) dikombinasikan dengan pembatas transisi halus CSS (<code>transition: transform 0.1s ease-out</code>).</p>
              </div>
            </div>

            {/* Code display with Copy Button */}
            <div className="relative">
              <div className="absolute right-3 top-3 z-20 flex gap-2">
                <button
                  onClick={() => {
                    const codeText = document.getElementById('standalone-code-content')?.textContent;
                    if (codeText) {
                      navigator.clipboard.writeText(codeText);
                      alert('Kode integrasi berhasil disalin ke clipboard!');
                    }
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10px] py-1 px-2.5 rounded shadow-lg transition-all uppercase font-bold"
                >
                  SALIN KODE [HTML/CSS/JS]
                </button>
              </div>

              <pre 
                id="standalone-code-content"
                className="p-4 bg-gray-950 rounded-lg text-gray-300 font-mono text-[10px] overflow-x-auto leading-relaxed border border-gray-800 max-h-[350px] overflow-y-auto block whitespace-pre"
              >{`<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Evangelion Portfolio - Rei Ayanami</title>
  <style>
    /* 1. RESET & SETTING UTAMA */
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      background-color: #0d0e12;
      color: #e2e8f0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      perspective: 1000px; /* Efek 3D */
    }

    /* 2. LAYOUT KANVAS POSTER UTAMA */
    .poster-container {
      position: relative;
      width: 90%;
      max-width: 800px;
      height: 480px;
      background-color: #0f111a;
      border: 1px solid #2d2e38;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
    }

    /* 3. PARALLAX LAYERS (Tumpukan Absolute) */
    .parallax-layer {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      /* Animasi transisi agar pergerakan mouse-move sangat halus */
      transition: transform 0.1s ease-out;
    }

    /* LAYER 1: Jaring Teknis Latar Belakang (Grid) */
    .layer-grid {
      background-image: 
        radial-gradient(rgba(0, 240, 255, 0.15) 1.5px, transparent 1.5px),
        linear-gradient(to right, rgba(45, 46, 56, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(45, 46, 56, 0.1) 1px, transparent 1px);
      background-size: 24px 24px, 48px 48px, 48px 48px;
      z-index: 1;
    }

    /* LAYER 2: Teks Raksasa "00" & Kanji */
    .layer-bg-text {
      z-index: 2;
    }

    .big-decal-00 {
      position: absolute;
      left: 30px;
      top: 30px;
      font-size: 150px;
      font-weight: 900;
      line-height: 1;
      color: transparent;
      -webkit-text-stroke: 2px rgba(230, 26, 39, 0.3);
      user-select: none;
    }

    .warning-kanji {
      position: absolute;
      right: 30px;
      top: 30px;
      background-color: #e61a27;
      color: white;
      font-size: 11px;
      font-weight: 900;
      padding: 3px 8px;
      border-radius: 3px;
      letter-spacing: 2px;
    }

    /* LAYER 3: Rei Ayanami Sentral (Foreground Utama) */
    .layer-character {
      z-index: 3;
      pointer-events: auto; /* Memungkinkan interaksi mouse langsung */
    }

    .character-portrait {
      height: 85%;
      width: auto;
      object-fit: contain;
      filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.8));
      transition: filter 0.3s ease;
    }

    /* Beri efek glow saat Rei disorot */
    .character-portrait:hover {
      filter: drop-shadow(0 0 20px rgba(0, 240, 255, 0.4)) brightness(1.05);
      cursor: pointer;
    }

    /* LAYER 4: HUD & Label Taktis Melayang */
    .layer-hud {
      z-index: 4;
    }

    .eva-unit-title {
      position: absolute;
      left: 30px;
      top: 200px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      background-color: rgba(0, 0, 0, 0.6);
      padding: 6px 14px;
      border-radius: 4px;
    }

    .eva-unit-title h2 {
      font-size: 24px;
      font-weight: 800;
      color: #00f0ff;
      text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
      letter-spacing: 2px;
    }

    .char-name-label {
      position: absolute;
      right: 30px;
      bottom: 40px;
      text-align: right;
    }

    .char-name-label h3 {
      font-size: 20px;
      font-weight: 800;
      color: white;
      border-right: 3px solid #e61a27;
      padding-right: 8px;
    }

    .char-name-label p {
      font-size: 10px;
      color: #00f0ff;
      letter-spacing: 3px;
      margin-top: 4px;
    }

    /* 4. KURSOR TARGET TAKTIS CUSTOM */
    .tactical-cursor {
      position: absolute;
      width: 40px;
      height: 40px;
      border: 1px solid rgba(0, 240, 255, 0.4);
      border-radius: 50%;
      pointer-events: none;
      transform: translate(-50%, -50%);
      z-index: 999;
      display: none; /* Aktif via JS */
    }

    .tactical-cursor::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 4px;
      height: 4px;
      background-color: #00f0ff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
</head>
<body>

  <!-- KURSOR CUSTOM -->
  <div class="tactical-cursor" id="customCursor"></div>

  <!-- CONTAINER POSTER UTAMA -->
  <div class="poster-container" id="posterBox">
    
    <!-- LAYER 1: JARING TEKNIS LATAR BELAKANG -->
    <div class="parallax-layer layer-grid" data-speed="0.05"></div>

    <!-- LAYER 2: TEKS DECAL "00" & KANJI -->
    <div class="parallax-layer layer-bg-text" data-speed="0.1">
      <div class="big-decal-00">00</div>
      <div class="warning-kanji">警告_WARNING</div>
    </div>

    <!-- LAYER 3: SILUET REI AYANAMI (FOREGROUND) -->
    <div class="parallax-layer layer-character" data-speed="0.25">
      <!-- Catatan: Untuk demo produksi, silakan ganti src dengan file "rei_bust.png" hasil potongan Anda -->
      <img 
        src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop" 
        alt="Rei Ayanami Bust" 
        class="character-portrait"
      >
    </div>

    <!-- LAYER 4: ELEMEN HUD & LABEL TAKTIS -->
    <div class="parallax-layer layer-hud" data-speed="0.18">
      <div class="eva-unit-title">
        <h2>EVA UNIT</h2>
      </div>
      <div class="char-name-label">
        <h3>REI AYANAMI</h3>
        <p>綾波レイ_FIRST_CHILD</p>
      </div>
    </div>

  </div>

  <script>
    const posterBox = document.getElementById('posterBox');
    const layers = document.querySelectorAll('.parallax-layer');
    const customCursor = document.getElementById('customCursor');

    // 1. EVENT DETEKSI KURSOR CUSTOM
    document.addEventListener('mousemove', (e) => {
      customCursor.style.display = 'block';
      customCursor.style.left = e.clientX + 'px';
      customCursor.style.top = e.clientY + 'px';
    });

    // 2. LOGIKA UTAMA PARALLAX (MOUSEMOVE)
    posterBox.addEventListener('mousemove', (e) => {
      // Dapatkan dimensi kotak penampung poster
      const rect = posterBox.getBoundingClientRect();
      
      // Hitung koordinat mouse relatif terhadap pusat kotak poster (-0.5 s/d 0.5)
      const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
      const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

      // Geser setiap layer sesuai dengan koefisien kecepatan uniknya
      layers.forEach(layer => {
        const speed = parseFloat(layer.getAttribute('data-speed')) || 0.1;
        
        // Batas pergerakan maksimum (misal maks 40px)
        const maxMove = 40;
        const translateX = mouseX * speed * maxMove * 3;
        const translateY = mouseY * speed * maxMove * 3;
        
        // Rotasi tipis 3D pada sumbu Y untuk efek kedalaman nyata
        const rotateY = mouseX * speed * 15;
        const rotateX = -mouseY * speed * 15;

        // Terapkan transformasi CSS 3D
        layer.style.transform = \`translate3d(\${translateX}px, \${translateY}px, 0) rotateY(\${rotateY}deg) rotateX(\${rotateX}deg)\`;
      });
    });

    // 3. LOGIKA MERESET POSISI (MOUSE LEAVE)
    posterBox.addEventListener('mouseleave', () => {
      layers.forEach(layer => {
        // Kembalikan ke posisi awal secara halus
        layer.style.transform = 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)';
      });
    });
  </script>
</body>
</html>`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
