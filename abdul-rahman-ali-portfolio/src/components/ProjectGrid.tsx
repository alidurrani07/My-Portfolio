import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, Target, Compass, Cpu, GitBranch, Gamepad2, Sparkles } from 'lucide-react';
import { PROJECTS } from '../data';

interface FeatureItem {
  id: string;
  title: string;
  icon: any;
  tagline: string;
  description: string;
  bullets: string[];
  stats: { name: string; value: string }[];
  codeSnippet: string;
}

const PROJECT_FEATURES: Record<string, FeatureItem[]> = {
  'proj-1': [
    {
      id: 'locomotion',
      title: 'Locomotion & Controller',
      icon: Compass,
      tagline: 'Precision 3D Third-Person Movement',
      description: 'Engineered a highly responsive third-person locomotion system combining physics-based collision resolution with smooth state-machine transitions.',
      bullets: [
        'Developed custom camera states using Cinemachine for dynamic aiming offset and standard orbit.',
        'Implemented fluid dual-axis movement with smooth interpolation and directional dampening.',
        'Designed custom collision checks to handle dynamic slopes, steps, and fast obstacle resolution.'
      ],
      stats: [
        { name: 'Walk Speed', value: '6 m/s' },
        { name: 'Camera Orbit', value: '360° Free' },
        { name: 'Aiming Blend', value: '250ms Interpolation' }
      ],
      codeSnippet: `// Locomotion state blending
float targetAngle = Mathf.Atan2(direction.x, direction.z) * Mathf.Rad2Deg + cameraRef.eulerAngles.y;
float angle = Mathf.SmoothDampAngle(transform.eulerAngles.y, targetAngle, ref turnSmoothVelocity, turnSmoothTime);
transform.rotation = Quaternion.Euler(0f, angle, 0f);`
    },
    {
      id: 'ai',
      title: 'Pathfinding Enemy AI',
      icon: Cpu,
      tagline: 'Intelligent Sensory Pathfinding System',
      description: 'Programmed smart enemy behaviors using finite state machines, visual frustum sensory checking, and Unity AI Navigation mesh agents.',
      bullets: [
        'Built custom vision cone field-of-view sensory detection that respects physical obstacles.',
        'Programmed multi-layered patrolling routes with randomized waiting periods and search parameters.',
        'Engineered smart target engagement: AI moves into firing ranges, covers, and reacts to player sounds.'
      ],
      stats: [
        { name: 'Sensing FOV', value: '110 Degrees' },
        { name: 'Decision Interval', value: '0.1s Tick Rate' },
        { name: 'Max AI Nav Path', value: '50m Grid' }
      ],
      codeSnippet: `// Sensory check loop
Vector3 dirToTarget = (player.position - transform.position).normalized;
if (Vector3.Angle(transform.forward, dirToTarget) < viewAngle / 2) {
    float dist = Vector3.Distance(transform.position, player.position);
    if (!Physics.Raycast(transform.position, dirToTarget, dist, obstacleMask)) {
        bHasActiveTarget = true; // Player detected
    }
}`
    },
    {
      id: 'combat',
      title: 'Combat & Weapon System',
      icon: Target,
      tagline: 'Raycast Shooting and High-Fidelity Feedback',
      description: 'Created a highly responsive weapons module supporting firing rates, projectile physics, dynamic impact particle systems, and raycast hit detection.',
      bullets: [
        'Engineered instant raycast hit-registration combined with bullet tracers for realistic feedback.',
        'Developed custom bullet spread curves that expand dynamically during sustained automatic fire.',
        'Integrated dynamic camera recoil and screen-shake profiles based on weapon weight and calibre.'
      ],
      stats: [
        { name: 'Hit Registration', value: 'Instant Raycast' },
        { name: 'Max Range', value: '150 meters' },
        { name: 'Spread Index', value: '0.1° to 3.5°' }
      ],
      codeSnippet: `// High-velocity projectile simulation
if (Physics.Raycast(bulletOrigin.position, bulletDir, out RaycastHit hit, maxRange, targetMask)) {
    IDamageable damageable = hit.collider.GetComponent<IDamageable>();
    damageable?.TakeDamage(weaponDamage, hit.point, hit.normal);
    SpawnImpactEffect(hit.point, hit.normal);
}`
    },
    {
      id: 'architecture',
      title: 'Optimized Architecture',
      icon: GitBranch,
      tagline: 'Robust Software Design Patterns',
      description: 'Organized and decoupled complex game systems using scalable design patterns, minimizing CPU allocations and ensuring smooth 60fps performance.',
      bullets: [
        'Designed custom generic Object Pools for high-frequency projectile models and impact particle systems.',
        'Decoupled game events (e.g. death, scores, UI updates) using standard C# Delegates and Events.',
        'Optimized garbage collection impact by avoiding frequent heap allocations inside high-frequency Update cycles.'
      ],
      stats: [
        { name: 'GC Allocations', value: '0B in Main Loop' },
        { name: 'Pool Buffer Size', value: '100 Active Items' },
        { name: 'Target Performance', value: '60+ FPS Locked' }
      ],
      codeSnippet: `// Generic High-Performance Object Pool
public T RetrieveFromPool() {
    for (int i = 0; i < pooledItems.Count; i++) {
        if (!pooledItems[i].gameObject.activeInHierarchy) {
            pooledItems[i].gameObject.SetActive(true);
            return pooledItems[i];
        }
    }
    return CreateNewInstance(); // Safe overflow expansion
}`
    }
  ],
  'proj-2': [
    {
      id: 'procedural',
      title: 'Procedural Tile Spawner',
      icon: Layers,
      tagline: 'Dynamic Obstacle Generation System',
      description: 'Built a robust grid generation algorithm that instantiates, coordinates, and recycles level obstacle tiles ahead of the player.',
      bullets: [
        'Developed procedural road tiles with seamless boundary matching logic.',
        'Implemented object-pooling to avoid high memory usage and frame stutter during dynamic spawning.',
        'Created a modular difficulty scaling manager that raises speed and obstacle density over time.'
      ],
      stats: [
        { name: 'Spawn Rate', value: '0.5s Interval' },
        { name: 'Tile Buffer', value: '15 Tiles' },
        { name: 'Memory Overhead', value: '<5MB Runtime' }
      ],
      codeSnippet: `// Procedural tile generation
Vector3 spawnPos = new Vector3(0, 0, nextSpawnZ);
GameObject tile = GetPooledTile();
tile.transform.position = spawnPos;
nextSpawnZ += tileLength;`
    },
    {
      id: 'shaders',
      title: 'Custom Shader FX',
      icon: Sparkles,
      tagline: 'Neon Cyberpunk Visuals',
      description: 'Authored custom vertex and fragment shaders using Unity Shader Graph to create beautiful glowing holographic materials.',
      bullets: [
        'Designed custom glowing outline effects with dynamic pulse frequency.',
        'Implemented screen-space glitch effects triggered upon taking damage.',
        'Developed scrolling neon textures to simulate retro-futuristic city streets.'
      ],
      stats: [
        { name: 'Draw Calls', value: 'Minimized GPU' },
        { name: 'Shader Model', value: 'HLSL Custom' },
        { name: 'Pass Count', value: 'Single Pass' }
      ],
      codeSnippet: `// Glitch screen effect trigger
float glitchValue = Mathf.Sin(Time.time * frequency) * amplitude;
material.SetFloat("_GlitchStrength", glitchValue);`
    }
  ]
};

export default function ProjectGrid() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const project = PROJECTS[activeProjectIndex] || PROJECTS[0];
  const features = PROJECT_FEATURES[project.id] || PROJECT_FEATURES['proj-1'];
  
  const [activeFeature, setActiveFeature] = useState(features[0]?.id || 'locomotion');

  const handleProjectChange = (idx: number) => {
    setActiveProjectIndex(idx);
    const nextProj = PROJECTS[idx] || PROJECTS[0];
    const nextFeatures = PROJECT_FEATURES[nextProj.id] || PROJECT_FEATURES['proj-1'];
    setActiveFeature(nextFeatures[0]?.id || 'locomotion');
  };

  // Find active feature data or fallback
  const activeFeatureData = features.find((f) => f.id === activeFeature) || features[0];
  const ActiveIcon = activeFeatureData.icon;

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full glow-blob-3 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-xs font-mono font-semibold tracking-wider text-accent-hover uppercase"
          >
            <Gamepad2 className="w-3.5 h-3.5" />
            Flagship Projects Showcase
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white"
          >
            Interactive <span className="gradient-text-blue-accent">Gameplay Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-sans text-base md:text-lg text-text-secondary font-light"
          >
            Explore the gameplay systems, modular designs, and core C# architecture built for each of my interactive game projects.
          </motion.p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {PROJECTS.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => handleProjectChange(idx)}
              className={`px-5 py-3 rounded-xl font-display font-bold text-xs sm:text-sm border cursor-pointer transition-all duration-300 flex items-center gap-2 ${
                activeProjectIndex === idx
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary border-transparent text-white shadow-[0_4px_15px_rgba(37,99,235,0.3)] scale-[1.02]'
                  : 'glass-panel border-white/5 text-text-muted hover:text-white hover:border-white/10'
              }`}
            >
              <Gamepad2 className="w-4 h-4 text-accent-secondary" />
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Flagship Game Card Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* LEFT COLUMN: Visual & Project Core Metas (5 Cols) */}
          <motion.div
            key={`left-${activeProjectIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Main Game Card Visual */}
            <div className="group relative rounded-[24px] overflow-hidden glass-panel border border-white/5 hover:border-accent-primary/30 shadow-premium hover-glow transition-all duration-500 flex flex-col h-full">
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-secondary border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/95 via-transparent to-transparent opacity-90 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-xl bg-bg-primary/80 backdrop-blur-md border border-white/10 font-mono text-xs font-semibold text-accent-hover uppercase tracking-wider shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" /> Gameplay Showcase
                </span>
              </div>

              {/* Game Metadata Description */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-extrabold text-xl md:text-2xl text-white">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono font-medium text-text-muted border border-white/10 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      Unity 3D
                    </span>
                  </div>
                  <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 font-mono text-xs text-text-muted hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub & Links */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display font-bold text-sm text-accent-hover hover:text-white transition-colors group/link cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Source</span>
                    <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Systems & Blueprint Console (7 Cols) */}
          <motion.div
            key={`right-${activeProjectIndex}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-6 h-full"
          >
            {/* Feature Selectors */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {features.map((feat) => {
                const FeatIcon = feat.icon;
                const isSelected = activeFeature === feat.id;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveFeature(feat.id)}
                    className={`p-3 md:p-4 rounded-2xl flex-1 min-w-[120px] flex flex-col items-center justify-center text-center gap-2 border cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? 'bg-accent-primary/10 border-accent-primary/50 text-accent-hover shadow-[0_4px_20px_rgba(37,99,235,0.15)]'
                        : 'glass-panel border-white/5 hover:border-white/10 text-text-muted hover:text-white'
                    }`}
                  >
                    <FeatIcon className={`w-5 h-5 ${isSelected ? 'text-accent-hover animate-pulse' : 'text-text-muted'}`} />
                    <span className="font-display font-bold text-xs md:text-sm tracking-tight leading-tight">
                      {feat.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Console */}
            <div className="glass-panel border border-white/5 rounded-[24px] p-6 md:p-8 flex flex-col justify-between flex-grow gap-8 min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 flex-grow flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between border-b border-white/5 pb-4">
                      <div className="space-y-1">
                        <div className="text-[10px] font-mono font-bold tracking-wider text-accent-hover uppercase flex items-center gap-1.5">
                          <ActiveIcon className="w-3.5 h-3.5" />
                          Core System Architecture
                        </div>
                        <h4 className="font-display font-extrabold text-xl md:text-2xl text-white">
                          {activeFeatureData.title}
                        </h4>
                      </div>
                      <span className="text-xs font-mono font-medium text-text-muted bg-white/5 border border-white/5 px-2.5 py-1 rounded-xl">
                        {activeFeatureData.tagline}
                      </span>
                    </div>

                    {/* Description Text */}
                    <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed font-light">
                      {activeFeatureData.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5">
                      {activeFeatureData.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-text-muted font-light leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mt-1.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Code Block / Blueprint Highlight */}
                  <div className="space-y-4 pt-6 border-t border-white/5">
                    <div className="text-[10px] font-mono font-bold text-text-muted uppercase tracking-wider flex items-center justify-between">
                      <span>C# Implementation Fragment</span>
                      <span className="text-accent-secondary">Unity API compatible</span>
                    </div>
                    <pre className="p-4 rounded-xl bg-bg-secondary/60 border border-white/5 text-[11px] font-mono text-accent-hover overflow-x-auto leading-relaxed shadow-inner">
                      <code>{activeFeatureData.codeSnippet}</code>
                    </pre>
                  </div>

                  {/* System Diagnostics Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {activeFeatureData.stats.map((stat, i) => (
                      <div key={i} className="glass-panel border border-white/5 rounded-xl p-3 text-center space-y-1">
                        <div className="text-[9px] font-mono text-text-muted uppercase tracking-wider">{stat.name}</div>
                        <div className="text-xs md:text-sm font-display font-extrabold text-white">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
