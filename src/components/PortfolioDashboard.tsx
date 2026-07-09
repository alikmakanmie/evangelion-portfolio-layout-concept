import { useState } from 'react';
import { CONTACT_LOCATION, PROFESSIONAL_EXPERIENCE, CORE_SKILLS, TOOLS, EDUCATION } from '../data';
import { Terminal, Shield, Cpu, Compass, ChevronRight, Zap, Mail, Github, Linkedin, Briefcase, FileCode, MapPin } from 'lucide-react';

interface PortfolioDashboardProps {
  parallaxStrength: number;
  setParallaxStrength: (val: number) => void;
  rotationSpeed: number;
  setRotationSpeed: (val: number) => void;
  themeColor: 'unit-00' | 'unit-01' | 'unit-02';
  setThemeColor: (val: 'unit-00' | 'unit-01' | 'unit-02') => void;
}

export default function PortfolioDashboard({
  parallaxStrength,
  setParallaxStrength,
  rotationSpeed,
  setRotationSpeed,
  themeColor,
  setThemeColor,
}: PortfolioDashboardProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'skills' | 'contact'>('profile');
  const [selectedProject, setSelectedProject] = useState<typeof PROFESSIONAL_EXPERIENCE[0] | null>(PROFESSIONAL_EXPERIENCE[0]);

  const handleProjectSelect = (proj: typeof PROFESSIONAL_EXPERIENCE[0]) => {
    setSelectedProject(proj);
    // Play tactical click sound
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

  const activeThemeClass = themeColor === 'unit-00' ? 'text-[#e61a27] border-[#e61a27] bg-[#e61a27]/10' :
                           themeColor === 'unit-01' ? 'text-[#a73bf5] border-[#a73bf5] bg-[#a73bf5]/10' :
                           'text-[#ff4f00] border-[#ff4f00] bg-[#ff4f00]/10';
                           
  const activeAccentColor = themeColor === 'unit-00' ? '#e61a27' :
                            themeColor === 'unit-01' ? '#a73bf5' : '#ff4f00';

  return (
    <div className="flex flex-col h-full w-full bg-black/40 border border-[#2d2e38] rounded-lg overflow-hidden backdrop-blur-sm">
      {/* Top Tabs */}
      <div className="flex border-b border-[#2d2e38] bg-black/20 overflow-x-auto hide-scrollbar">
        <button
          onClick={() => setActiveTab('profile')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider border-r border-[#2d2e38] transition-all whitespace-nowrap ${
            activeTab === 'profile'
              ? activeThemeClass + ' font-bold border-b-2'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Shield className="w-4.5 h-4.5" />
          I. DATA PERSONEL
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider border-r border-[#2d2e38] transition-all whitespace-nowrap ${
            activeTab === 'projects'
              ? activeThemeClass + ' font-bold border-b-2'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Briefcase className="w-4.5 h-4.5" />
          II. ARSIP PROYEK
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider border-r border-[#2d2e38] transition-all whitespace-nowrap ${
            activeTab === 'skills'
              ? activeThemeClass + ' font-bold border-b-2'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Cpu className="w-4.5 h-4.5" />
          III. SPESIFIKASI TEKNIS
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`flex items-center gap-1.5 px-4 py-3 text-xs font-mono tracking-wider transition-all whitespace-nowrap ${
            activeTab === 'contact'
              ? activeThemeClass + ' font-bold border-b-2'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Compass className="w-4.5 h-4.5" />
          IV. KANAL KOMUNIKASI
        </button>
      </div>

      {/* Main Tab Panel */}
      <div className="flex-1 p-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 240px)', minHeight: '380px' }}>
        
        {/* ======================================= */}
        {/* TAB 1: PROFILE / ABOUT                  */}
        {/* ======================================= */}
        {activeTab === 'profile' && (
          <div className="space-y-4 animate-fadeIn">
            <div className={`bg-opacity-5 border-l-4 p-3 rounded-r flex flex-col gap-1`} style={{ borderColor: activeAccentColor, backgroundColor: `${activeAccentColor}1A` }}>
              <h3 className="font-display font-bold text-sm text-white uppercase">Identifikasi Personel NERV</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Klasifikasi: PENGEMBANG PERANGKAT LUNAK TINGKAT 1. Akses keamanan diberikan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-1 border border-[#2d2e38] rounded p-3 bg-black/20 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none z-10" />
                <div className="w-full aspect-square bg-gray-900 border border-gray-800 flex items-center justify-center z-0 relative">
                  {/* Placeholder Avatar */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-50" />
                  <Terminal className="w-12 h-12 text-gray-600 animate-pulse" />
                </div>
                <div className="w-full mt-3 z-20">
                  <div className="text-xs font-mono text-gray-500 uppercase tracking-widest text-center">STATUS: ONLINE</div>
                </div>
              </div>
              
              <div className="md:col-span-2 space-y-3">
                <div className="p-3 bg-black/40 border border-[#2d2e38] rounded">
                  <div className="font-mono text-[9px] text-gray-500 mb-1">NAMA_SANDI:</div>
                  <div className="font-display font-bold text-xl text-white tracking-widest">ZALIKHA W RAMADHAN</div>
                  <div className={`font-mono text-[10px] mt-1`} style={{ color: activeAccentColor }}>IT_SUPPORT_WEB_APP_DEVELOPER</div>
                </div>
                
                <div className="p-3 bg-black/40 border border-[#2d2e38] rounded">
                  <div className="font-mono text-[9px] text-gray-500 mb-1">RINGKASAN_OPERASIONAL:</div>
                  <p className="text-gray-300 text-xs leading-relaxed font-mono text-justify">
                    Profesional IT berlatar Rekayasa Perangkat Lunak dengan fokus pada pengembangan web, backend API, Linux/Android customization, dan IT Support.
                    <br/><br/>
                    Pencapaian: Backend Developer Intern di Weclic, Web Developer di Mini Coding Academy, Freelance Video Creator Kementerian Pendidikan, Vendor Lomba Expo 2024, dan proyek Vocakey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 2: PROJECTS                         */}
        {/* ======================================= */}
        {activeTab === 'projects' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Project navigation list */}
              <div className="md:col-span-5 space-y-2">
                <span className="font-mono text-[9px] text-gray-500 block mb-1">PILIH_ARSIP_PROYEK:</span>
                {PROFESSIONAL_EXPERIENCE.map((proj) => {
                  const isCurrent = selectedProject?.id === proj.id;
                  return (
                    <button
                      key={proj.id}
                      onClick={() => handleProjectSelect(proj)}
                      className={`w-full text-left p-2.5 rounded border transition-all flex items-center justify-between ${
                        isCurrent
                          ? activeThemeClass + ' shadow-lg'
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
                          <span className="font-mono text-[9px]" style={{ color: isCurrent ? activeAccentColor : '#9ca3af' }}>{proj.code}</span>
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
                      <span className="font-mono text-[10px] bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded uppercase border border-gray-700">
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
                          <span key={tech} className="font-mono text-[9px] bg-black/60 text-gray-300 py-0.5 px-2 rounded border border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-3">
                      <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-white font-mono text-[10px] py-1.5 px-3 rounded transition-colors">
                        <FileCode className="w-3.5 h-3.5" />
                        BUKA_PORTFOLIO
                      </a>
                      <a href={selectedProject.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 text-white font-mono text-[10px] py-1.5 px-3 rounded transition-colors">
                        <Compass className="w-3.5 h-3.5" />
                        LIHAT_DETAIL
                      </a>
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
        {/* TAB 3: SKILLS & SETTINGS                */}
        {/* ======================================= */}
        {activeTab === 'skills' && (
          <div className="space-y-4 animate-fadeIn">
            {/* Tech Stack */}
            <div className="p-3 bg-black/40 border border-[#2d2e38] rounded">
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#00f0ff]" />
                Modul Kompetensi Inti
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Laravel', 'Python / Flask', 'Git / GitLab', 'Postman', 'Railway', 'Linux / Android', 'Figma / Canva', 'After Effects'].map(skill => (
                  <div key={skill} className="bg-black/60 border border-gray-800 p-2 rounded flex flex-col items-center justify-center gap-1">
                    <div className="w-full bg-gray-900 h-1 rounded overflow-hidden">
                      <div className="h-full bg-[#00f0ff]" style={{ width: `${Math.floor(Math.random() * 30 + 70)}%` }} />
                    </div>
                    <span className="font-mono text-[10px] text-gray-400 mt-1">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Interactive Control Panel */}
            <div className="p-3 bg-black/30 border border-dashed border-gray-800 rounded-md">
              <h3 className="font-display font-bold text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#e61a27]" />
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
                </div>

                {/* Theme Selection */}
                <div className="space-y-1.5 md:col-span-2">
                  <span className="font-mono text-[10px] text-gray-400 block">WARNA AKSEN ANTARMUKA (EVANGELION UNITS):</span>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setThemeColor('unit-00')}
                      className={`py-1.5 px-2 text-[10px] font-mono border rounded uppercase transition-all ${
                        themeColor === 'unit-00'
                          ? 'border-[#e61a27] bg-[#e61a27]/15 text-white shadow-[0_0_10px_rgba(230,26,39,0.3)]'
                          : 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
                      }`}
                    >
                      Unit-00 (Rei Red)
                    </button>
                    <button
                      onClick={() => setThemeColor('unit-01')}
                      className={`py-1.5 px-2 text-[10px] font-mono border rounded uppercase transition-all ${
                        themeColor === 'unit-01'
                          ? 'border-[#a73bf5] bg-[#a73bf5]/15 text-white shadow-[0_0_10px_rgba(167,59,245,0.3)]'
                          : 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
                      }`}
                    >
                      Unit-01 (Shinji Purple)
                    </button>
                    <button
                      onClick={() => setThemeColor('unit-02')}
                      className={`py-1.5 px-2 text-[10px] font-mono border rounded uppercase transition-all ${
                        themeColor === 'unit-02'
                          ? 'border-[#ff4f00] bg-[#ff4f00]/15 text-white shadow-[0_0_10px_rgba(255,79,0,0.3)]'
                          : 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
                      }`}
                    >
                      Unit-02 (Asuka Orange)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================= */}
        {/* TAB 4: CONTACT                          */}
        {/* ======================================= */}
        {activeTab === 'contact' && (
          <div className="space-y-4 animate-fadeIn flex flex-col h-full justify-center pb-8">
            <div className="text-center space-y-2 mb-6">
              <h2 className="font-display font-black text-2xl text-white tracking-widest uppercase">Kanal Transmisi Aman</h2>
              <p className="font-mono text-xs text-gray-400">Siap menerima sinyal masuk untuk kolaborasi taktis.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto w-full">
              <a href="mailto:zaelikha@gmail.com" className="flex flex-col items-center justify-center p-6 bg-black/40 border border-[#2d2e38] hover:border-[#e61a27] rounded transition-all group">
                <Mail className="w-8 h-8 text-gray-500 group-hover:text-[#e61a27] mb-3 transition-colors" />
                <span className="font-display font-bold text-white tracking-wider">EMAIL</span>
                <span className="font-mono text-[9px] text-gray-500 mt-1">TRANSMISI LANGSUNG</span>
              </a>
              
              <a href="https://github.com/alikmakanmie" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-black/40 border border-[#2d2e38] hover:border-[#a73bf5] rounded transition-all group">
                <Github className="w-8 h-8 text-gray-500 group-hover:text-[#a73bf5] mb-3 transition-colors" />
                <span className="font-display font-bold text-white tracking-wider">GITHUB</span>
                <span className="font-mono text-[9px] text-gray-500 mt-1">ARSIP KODE SUMBER</span>
              </a>
              
              <a href="https://www.linkedin.com/in/zalikha-w-ramadhan-985015330" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6 bg-black/40 border border-[#2d2e38] hover:border-[#00f0ff] rounded transition-all group">
                <Linkedin className="w-8 h-8 text-gray-500 group-hover:text-[#00f0ff] mb-3 transition-colors" />
                <span className="font-display font-bold text-white tracking-wider">LINKEDIN</span>
                <span className="font-mono text-[9px] text-gray-500 mt-1">PROFIL PROFESIONAL</span>
              </a>
            </div>

            <div className="w-full max-w-3xl mx-auto bg-black/40 border border-[#2d2e38] rounded overflow-hidden">
              <div className="flex items-center justify-between gap-3 border-b border-[#2d2e38] px-4 py-3 text-[9px] font-mono text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>MINI MAP</span>
                </div>
                <a
                  href={CONTACT_LOCATION.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00f0ff] hover:text-white transition-colors"
                >
                  BUKA_LOKASI
                </a>
              </div>
              <iframe
                title="Mini map lokasi"
                src={CONTACT_LOCATION.mapsEmbedUrl}
                loading="lazy"
                className="h-56 w-full border-0 grayscale-[0.15] contrast-110"
              />
              <div className="px-4 py-3 border-t border-[#2d2e38] text-left">
                <div className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">ADDRESS_FILE:</div>
                <p className="mt-1 text-xs text-gray-300 font-mono leading-relaxed">
                  {CONTACT_LOCATION.address}
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="inline-block px-4 py-2 bg-red-950/30 border border-red-900/50 rounded font-mono text-[10px] text-red-400">
                <span className="animate-pulse mr-2">●</span> MENUNGGU SINKRONISASI TINGKAT LANJUT...
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
