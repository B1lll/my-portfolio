import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Works } from './sections/Works';
import { Experience } from './sections/Experience';
import { Honors } from './sections/Honors';
import { Skills } from './sections/Skills';
import { Footer } from './sections/Footer';
import { ProjectDetail } from './pages/ProjectDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <Works />
      <Experience />
      <Honors />
      <Skills />
      <Footer />
    </>
  );
}

function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');

  const handleLanguageChange = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <Router>
      {/* 确保最外层容器有 relative 属性 */}
      <div className="bg-black min-h-screen relative text-white">
        <CustomCursor />
        
        {/* 新增：左下角固定位置的中英文切换按钮 */}
        <button 
          onClick={handleLanguageChange}
          className="fixed bottom-8 left-8 z-50 px-5 py-2.5 rounded-full 
                     bg-white/5 border border-white/10 backdrop-blur-md
                     text-xs font-bold tracking-widest text-white/80 
                     hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 
                     transition-all duration-300 shadow-2xl uppercase"
        >
          {language === 'en' ? '中文' : 'English'}
        </button>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Navigation 
                  language={language} 
                  onLanguageChange={handleLanguageChange} 
                />
                <HomePage />
              </>
            } 
          />
          <Route 
            path="/project/:slug" 
            element={
              <ProjectDetail 
                language={language} 
                onLanguageChange={handleLanguageChange} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;