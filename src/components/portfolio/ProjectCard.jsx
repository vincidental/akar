import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Expand } from 'lucide-react';
import DeviceMockup3D from './DeviceMockup3D';

export default function ProjectCard({ project, index, onOpen }) {
  const [hovered, setHovered] = useState(false);

  const tagStyles = {
    green: 'bg-green-500/15 text-green-400 border-green-500/25',
    purple: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/8 hover:border-white/16 transition-all duration-500 cursor-pointer"
      onClick={() => project.screenshots?.length && onOpen(project)}
      style={{
        boxShadow: hovered
          ? `0 0 60px ${project.accentColor}18, 0 24px 48px rgba(0,0,0,0.5)`
          : '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      {/* 3D Mockup Viewport */}
      <div className="relative h-72 md:h-80 bg-[#0d0d0d] overflow-hidden">
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f0f0f] to-transparent z-10 pointer-events-none" />

        {/* Accent glow behind device */}
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${project.accentColor}40 0%, transparent 70%)`,
            opacity: hovered ? 0.35 : 0.15,
          }}
        />

        <DeviceMockup3D
          screenshotUrl={project.screenshotUrl}
          accentColor={project.accentColor}
          isActive={hovered}
        />

        {/* Explore overlay hint */}
        {project.screenshots?.length > 0 && (
          <div className={`absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/60 border border-white/15 backdrop-blur-sm text-[11px] font-medium text-white/70 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <Expand className="w-3 h-3" />
            Explore
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Tags row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest border ${tagStyles[project.tagColor]}`}
          >
            {project.tag}
          </span>
          <span className="text-[11px] text-white/30 font-medium">{project.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/45 leading-relaxed mb-5">{project.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.metrics.map((m, i) => (
            <div key={i} className="bg-white/4 rounded-xl p-2.5 text-center border border-white/6">
              <p
                className="text-sm font-bold mb-0.5"
                style={{ color: project.accentColor }}
              >
                {m.value}
              </p>
              <p className="text-[10px] text-white/35 uppercase tracking-wide">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Tech tags + Link */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 bg-white/6 border border-white/8 rounded-full text-[10px] text-white/40"
              >
                {t}
              </span>
            ))}
          </div>
          {project.screenshots?.length > 0 ? (
            <button
              onClick={(e) => { e.stopPropagation(); onOpen(project); }}
              className="flex items-center gap-1 text-xs font-medium text-white/40 hover:text-white transition-colors duration-200 group/link"
            >
              Explore project
              <Expand className="w-3 h-3" />
            </button>
          ) : (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs font-medium text-white/40 hover:text-white transition-colors duration-200 group/link"
            >
              View live
              <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}