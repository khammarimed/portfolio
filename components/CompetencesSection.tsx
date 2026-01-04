'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment, Line } from '@react-three/drei';
import ArmatureVar from './ArmatureVar';

const CompetencesSection = () => {
  return (
    <section id="competences" className="relative min-h-screen bg-black text-blue-100 px-6 lg:px-12 py-20 overflow-hidden">
      
      {/* BACKGROUND DECORATION: Grille laser & Ligne de scan */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0044ff 1px, transparent 1px), linear-gradient(90deg, #0044ff 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-scanline pointer-events-none" />

      <div className="container mx-auto relative z-10">
        
        {/* TITRE STYLE INTERFACE RÉSEAU */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter uppercase italic">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
              System_Skills.exe
            </span>
          </h2>
          <div className="h-1 w-32 bg-blue-500 mx-auto mt-2 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
          <p className="font-mono text-xs mt-2 text-blue-400/60 uppercase tracking-[0.3em]">Neural Interface Terminal v2.0</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN: MODULES TECHNIQUES */}
          <div className="space-y-8">
            <h3 className="flex items-center gap-3 font-mono text-xl font-bold text-cyan-400">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
              Core_Capabilities
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Languages', value: 'Java, Python, PHP, JS, TS, C#, C' },
                { title: 'Backend_Core', value: 'ASP.NET Core, Django, Express, JEE' },
                { title: 'Frontend_Eng', value: 'React, Next.js, Tailwind, HTML/CSS' },
                { title: 'Mobile_OS', value: 'Flutter, Android Java' },
                { title: 'Data_Matrix', value: 'SQL Server, MySQL, MongoDB' },
                { title: 'Protocols', value: 'Git, Scrum, REST API, UML' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-blue-950/20 backdrop-blur-md border-l-2 border-blue-500/50 p-5 
                             hover:bg-blue-900/40 transition-all duration-300 border-r border-t border-b border-blue-500/10"
                >
                  {/* Petit coin déco type HUD */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <h4 className="font-mono text-[10px] text-blue-400 mb-1 tracking-widest uppercase">
                    {`[ module_${item.title.toLowerCase()} ]`}
                  </h4>
                  <p className="text-gray-100 font-semibold text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* SOFT SKILLS STYLE "CHIPS" FUTURISTES */}
            <div className="pt-6">
              <h3 className="font-mono text-sm mb-4 text-purple-400 uppercase tracking-widest">Behavioral_Parameters</h3>
              <div className="flex flex-wrap gap-2">
                {['Communication', 'Teamwork', 'Adaptability', 'Time_Mgmt', 'Logic_Solving'].map((skill) => (
                  <span key={skill} className="px-3 py-1 text-[11px] font-mono border border-purple-500/40 bg-purple-500/10 text-purple-300 rounded-sm hover:bg-purple-500/30 cursor-crosshair transition-colors">
                    {`> ${skill}`}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: THE 3D AVATAR CONTAINER */}
          <div className="relative group">
            {/* Décoration HUD autour du Canvas */}
            <div className="absolute -inset-4 border border-blue-500/20 rounded-xl pointer-events-none" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500" />
            
            <div className="h-[550px] rounded-lg overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-white/5 relative shadow-2xl shadow-blue-500/20">
              
              {/* Overlay d'informations de scan */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-cyan-400/70 space-y-1">
                <p>SCANNING SUBJECT...</p>
                <p>LAT: 48.8566 | LONG: 2.3522</p>
                <p className="animate-pulse">STATUS: OPTIMIZED</p>
              </div>

              <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 1.4, 4.5]} fov={45} />
                <ambientLight intensity={0.4} />
                <pointLight position={[2, 2, 2]} intensity={1.5} color="#00f2ff" />
                <pointLight position={[-2, -1, -2]} intensity={1} color="#7000ff" />
                <Environment preset="night" />

                <Suspense fallback={null}>
                  <group scale={1.2} position={[0, -1, 0]}>
                     <ArmatureVar /> {/* Ton composant Avatar */}
                  </group>
                </Suspense>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              </Canvas>

              {/* Barre de progression style "Loading DNA" */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="flex justify-between text-[10px] font-mono text-blue-400 mb-1">
                  <span>BIOMETRIC_SYNC</span>
                  <span>100%</span>
                </div>
                <div className="h-1 w-full bg-blue-900/50">
                  <div className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" style={{ width: '100%' }} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION LANGUES: STYLE DATACENTER */}
        <div className="mt-32">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-blue-500" />
            <h3 className="font-mono text-2xl uppercase tracking-tighter text-blue-400">Linguistic_Modules</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-blue-500" />
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              { lang: 'Arabic', level: 'Native_OS', code: 'AR' },
              { lang: 'French', level: 'Fluent_V5', code: 'FR' },
              { lang: 'English', level: 'Inter_V2', code: 'EN' },
            ].map((item, index) => (
              <div key={index} className="group flex items-center gap-4 p-4 border border-white/5 hover:border-blue-500/40 transition-all">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-blue-500/20 group-hover:border-cyan-400 rotate-45 transition-transform">
                  <span className="text-xl font-black text-cyan-400 -rotate-45">{item.code}</span>
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider">{item.lang}</h4>
                  <p className="font-mono text-xs text-blue-400/70">{item.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetencesSection;