import { motion } from 'framer-motion';
import { processSteps } from '../../data/processSteps';

const Process = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
        >
          Our Proven Process
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          A structured approach to delivering exceptional results
        </motion.p>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
      >
        {processSteps.map((step, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-cyan-400/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10" />
            
            <div className="text-cyan-400 text-5xl mb-4">{step.icon}</div>
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
            <p className="text-gray-300 leading-relaxed">{step.description}</p>
            
            <div className="absolute -bottom-4 -right-4 text-8xl opacity-5 text-cyan-400">
              {step.number}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/20 to-purple-900/20 p-8 rounded-2xl border border-cyan-500/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-slate-800 p-4 rounded-xl">
            <div className="text-5xl">🚀</div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Average Project Timeline</h3>
            <div className="flex gap-6">
              <div>
                <div className="text-cyan-400 text-3xl font-bold">2-4</div>
                <div className="text-gray-400">Weeks Discovery</div>
              </div>
              <div>
                <div className="text-cyan-400 text-3xl font-bold">4-12</div>
                <div className="text-gray-400">Weeks Build</div>
              </div>
              <div>
                <div className="text-cyan-400 text-3xl font-bold">∞</div>
                <div className="text-gray-400">Ongoing Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
