import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">FANJUN WEI</h3>
            <p className="mt-2 text-white/50">Design Engineering Student</p>
            <p className="text-white/50">Imperial College London</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="mailto:fanjun.wei22@imperial.ac.uk"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                         text-white/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                         text-white/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center
                         text-white/50 hover:bg-purple-500/20 hover:text-purple-400 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} Fanjun Wei. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
