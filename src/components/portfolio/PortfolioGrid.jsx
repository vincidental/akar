import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from './projectData';

const filters = ['All', 'Client Work', 'Template'];

export default function PortfolioGrid() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.tag === active);

  return (
    <section className="pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-14"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? 'bg-white text-[#0a0a0a]'
                  : 'bg-white/6 text-white/50 border border-white/10 hover:border-white/20 hover:text-white/70'
              }`}
            >
              {f}
              {f !== 'All' && (
                <span className="ml-1.5 text-xs opacity-60">
                  ({projects.filter((p) => p.tag === f).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}