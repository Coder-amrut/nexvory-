import React, { useEffect, useRef, useState } from 'react';
import { SceneEngine } from './SceneEngine';
import { AlertTriangle, Activity } from 'lucide-react';

interface ThreeBackgroundProps {
  activeComponent?: 'software' | 'ai' | 'cloud' | 'security' | null;
  performanceMode?: 'ultra' | 'efficient';
  onEngineReady?: (engine: SceneEngine) => void;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  activeComponent = null,
  performanceMode = 'ultra',
  onEngineReady,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const engineRef = useRef<SceneEngine | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(12);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulated smooth initialization sequence
    const interval = setInterval(() => {
      setLoadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 22) + 12;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    try {
      const engine = new SceneEngine({
        canvas: canvasRef.current,
        onLoaded: () => {
          setTimeout(() => setLoading(false), 300);
        },
        onError: (err) => {
          console.error('WebGL Initialization Error:', err);
          setError('WebGL context unavailable or hardware acceleration disabled.');
          setLoading(false);
        },
      });

      engineRef.current = engine;
      if (onEngineReady) onEngineReady(engine);

      const handleScroll = () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? window.scrollY / docHeight : 0;
        engine.setScrollProgress(progress);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        engine.destroy();
        engineRef.current = null;
      };
    } catch (e) {
      console.error('ThreeJS Init Error:', e);
      setError('WebGL graphics acceleration could not be initialized.');
      setLoading(false);
    }
  }, [onEngineReady]);

  // Sync active component hover/click from Section 04
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setActiveComponent(activeComponent);
    }
  }, [activeComponent]);

  // Sync performance mode
  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setPerformanceMode(performanceMode);
    }
  }, [performanceMode]);

  return (
    <>
      {/* Fixed 3D Canvas */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        style={{ perspective: '1000px' }}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ width: '100vw', height: '100vh' }}
        />
        
        {/* Subtle Vignette & Technical Overlays */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 50%, transparent 40%, rgba(8, 9, 12, 0.75) 90%, #08090C 100%)'
          }}
        />
      </div>

      {/* WebGL Fallback if device has no 3D support */}
      {error && (
        <div className="fixed bottom-6 right-6 z-50 p-4 max-w-sm glass-panel border border-red-500/40 text-red-200 text-xs flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
          <div>
            <div className="font-mono font-bold text-white mb-1">3D ACCELERATION FALLBACK</div>
            <p className="text-slate-400 leading-relaxed">{error} The full editorial interface remains fully accessible.</p>
          </div>
        </div>
      )}

      {/* Elegant Initial Loading Sequence Overlay */}
      {loading && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#08090C] transition-opacity duration-700 pointer-events-none"
          style={{ opacity: loadProgress >= 100 ? 0 : 1 }}
        >
          <div className="w-64 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-cyan-400">
              <Activity className="w-4 h-4 animate-spin text-cyan" />
              <span>INITIALIZING DIGITAL INTELLIGENCE</span>
            </div>

            {/* Geometric loading bar */}
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden border border-white/10">
              <div 
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-150"
                style={{ width: `${Math.min(100, loadProgress)}%` }}
              />
            </div>

            <div className="w-full flex justify-between font-mono text-[10px] text-slate-500 tracking-wider">
              <span>ABC // KERNEL 4.19</span>
              <span>{Math.min(100, loadProgress)}%</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
