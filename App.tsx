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

function HomePage({ language }: { language: 'en' | 'zh' }) {
  return (
    <>
      <Hero language={language} />
      <Works language={language} />
      <Experience language={language} />
      <Honors language={language} />
      <Skills language={language} />
      <Footer language={language} />
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
      <div className="bg-black min-h-screen relative text-white">
        <CustomCursor />
        
        {/* 左下角固定位置的中英文切换按钮 */}
        <button 
          onClick={handleLanguageChange}
          className="fixed bottom-6 left-6 z-50 px-4 py-2 rounded-full 
                     bg-white/5 border border-white/10 backdrop-blur-md
                     text-xs font-bold tracking-widest text-white/70 
                     hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 
                     transition-all duration-300 shadow-lg uppercase"
        >
          {language === 'en' ? '中文' : 'EN'}
        </button>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {/* 这里的 Navigation 已经不带参数了，解决 TS 报错 */}
                <Navigation />
                <HomePage language={language} />
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