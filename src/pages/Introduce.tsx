import { motion } from 'framer-motion';
import AboutTab from '../components/AboutTab.tsx';
import SkillsTab from '../components/SkillsTab.tsx';
import MPSProject from '../components/projects/MPSProject';
import NotionaryProject from '../components/projects/NotionaryProject';
import GUIGIMProject from '../components/projects/GUIGIMProject';

const Introduce = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="w-full">
          <AboutTab />
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-purple-50 to-green-50"
      >
        <div className="w-full">
          <SkillsTab />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100"
      >
        <div className="w-full">
          <MPSProject />
        </div>
      </motion.section>

      {/* Notionary Project Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen flex items-center justify-center py-20 bg-white"
      >
        <div className="w-full">
          <NotionaryProject />
        </div>
      </motion.section>

      {/* GUIGIM Project Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-slate-50 to-white"
      >
        <div className="w-full">
          <GUIGIMProject />
        </div>
      </motion.section>
    </div>
  );
};

export default Introduce;
