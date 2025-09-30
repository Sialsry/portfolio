import { useState } from 'react';
import { motion } from 'framer-motion';

const GUIGIMProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const guigimImages = [
    { src: "/images/1.gif", alt: "GUIGIM 플레이리스트 데모" },
    { src: "/images/2.gif", alt: "GUIGIM 음원 스트리밍 데모" },
    { src: "/images/3.gif", alt: "GUIGIM 마이페이지 데모" },
    { src: "/images/4.gif", alt: "GUIGIM 실시간 채팅 데모" },
    { src: "/images/5.gif", alt: "GUIGIM 추가 기능 데모" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % guigimImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + guigimImages.length) % guigimImages.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex flex-col justify-center">
      {/* Project Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-700 rounded-full mb-8 text-sm font-medium"
        >
          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
          MUSIC STREAMING
        </motion.div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          GUIGIM musics
        </h1>
        
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-slate-600 text-sm font-medium flex items-center space-x-2">
              2025-04-02 ~ 2025-04-16 ( 14일 )
            </span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
          <span className="text-slate-600 text-sm font-medium flex items-center space-x-2">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 2c-2.761 0-5 2.239-5 5h10c0-2.761-2.239-5-5-5z" />
            </svg>
            직무 - 프론트엔드 & 백엔드
          </span>
        </div>
        
        
        <p className="text-xl sm:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
          음원 스트리밍 플랫폼으로, 회원 이용자는 자신만의 플레이리스트를 생성하고 <br />
          <span className="text-slate-900 font-semibold"> 실시간으로 송출하여 다른 이용자들과 함께 감상하고 소통</span>할 수 있습니다.
        </p>
      </motion.div>

      {/* Demo Images Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-20"
      >
        <div className="relative group">
          {/* Image Slider */}
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200">
            <div className="aspect-video relative overflow-hidden">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {guigimImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 backdrop-blur-sm border border-slate-200"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 backdrop-blur-sm border border-slate-200"
            >
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {guigimImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'w-8 h-3 bg-slate-600 rounded-full' 
                    : 'w-3 h-3 bg-slate-300 hover:bg-slate-400 rounded-full hover:scale-125'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-16">
        {/* Left Column - Tech Stack & Links */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="xl:col-span-1 space-y-8"
        >
          {/* Tech Stack */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">기술 스택</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'EJS', 'axios', 'Express.js', 'JWT', 'MySQL', 'Sequelize', 'JavaScript', 'HTML 5', 'CSS 3'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm rounded-lg font-medium border border-slate-200 hover:bg-slate-100 transition-colors duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

                {/* Project Links */}
                <div className="space-y-3">
                  <a href="https://react01.shop" target="_blank" rel="noopener noreferrer"
                     className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 font-medium text-sm border border-slate-200">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    프로젝트 바로 가기
                  </a>
                  <a href="https://github.com/Sialsry/music-sharing?tab=readme-ov-file" target="_blank" rel="noopener noreferrer"
                     className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 font-medium text-sm border border-slate-200">
                    <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Repository
                  </a>
                </div>

        </motion.div>

        {/* Right Column - Project Details */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="xl:col-span-3 space-y-12"
        >
          {/* My Role */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center mb-8">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">맡은 역할</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-start">
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">마이페이지 UI 설계 및 기능 구현</h4>
                    <p className="text-slate-600 text-sm">
                      <li>유저 정보 수정</li>
                      <li>플레이리스트 생성 및 조회</li>
                      <li>사용자 행위에 대한 피드백을 toast 메세지로 제공</li>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                <div className="flex items-start">
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">플레이리스트 상세 팝업 UI 설계 및 기능 구현</h4>
                    <p className="text-slate-600 text-sm">
                      <li>플레이리스트 재생</li>
                      <li>팝업 내에서 음원 검색을 통한 새로운 수록곡 추가</li>
                      <li>수록곡 및 플레이리스트 삭제</li>
                      <li>플레이리스트로 스트리밍 시작</li>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Issues & Solutions with Hover Effect */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 group cursor-pointer min-h-[400px] flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="relative">
                    {/* Glow Border Animation - Red for Issues */}
                    <div className="absolute inset-0 w-10 h-10 rounded-lg border-2 border-red-400 opacity-0 animate-[glow_3s_ease-in-out_infinite] group-hover:hidden"></div>
                    
                    {/* Glow Border Animation - Green for Solutions */}
                    <div className="absolute inset-0 w-10 h-10 rounded-lg border-2 border-green-400 opacity-0 animate-[glow-green_3s_ease-in-out_infinite] hidden group-hover:block"></div>
                    
                    {/* Icon Container */}
                    <div className="relative w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-100 transition-colors duration-300">
                      {/* Issue Icon */}
                      <svg className="w-5 h-5 text-red-600 group-hover:hidden transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      {/* Solution Icon */}
                      <svg className="w-5 h-5 text-green-600 hidden group-hover:block transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-green-600 transition-colors duration-300">
                    <span className="group-hover:hidden">이슈</span>
                    <span className="hidden group-hover:inline">해결방안</span>
                  </h3>
                </div>
                
                {/* Hover Hint */}
                <div className="flex items-center space-x-2 text-slate-500 text-sm group-hover:hidden">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span className="font-medium">호버하여 해결방안 보기</span>
                </div>
              </div>
              
              {/* Content Container with Fixed Height */}
              <div className="flex-1 relative overflow-hidden">
                {/* Issues Content */}
                <div className="space-y-4 group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-300 absolute inset-0">
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h4 className="font-semibold text-slate-900 mb-2">데이터 교환 형식 미정의</h4>
                    <p className="text-slate-600 text-sm">팀원 간 프론트엔드와 백엔드 간의 데이터 교환 형식을 사전에 명확히 정의하지 않아 변경사항이 있을 때 양쪽 모두 코드를 수정해야 하는 상황이 발생</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-red-500">
                    <h4 className="font-semibold text-slate-900 mb-2">정적 파일 경로 차이</h4>
                    <p className="text-slate-600 text-sm">개발 환경과 배포 환경에서 정적 파일 경로 차이로 인한 리소스 로드 실패 발생</p>
                  </div>
                </div>

                {/* Solutions Content */}
                <div className="space-y-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 absolute inset-0">
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="font-semibold text-slate-900 mb-2">API 명세 문서화</h4>
                    <p className="text-slate-600 text-sm">초기에 API 명세를 문서화하고 공유하여 팀원 간 비효율적인 코드 수정이 일어나지 않도록 방지</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-green-500">
                    <h4 className="font-semibold text-slate-900 mb-2">경로 기준 정립</h4>
                    <p className="text-slate-600 text-sm">배포 환경에서 사용되는 파일 구조와 URL 매핑 관계에 대해 찾아보고, 상대 / 절대 경로를 사용하는 기준을 정립</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Tasks */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">향후 과제</h3>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-slate-900 mb-2">인증 로직 도입</h4>
                  <p className="text-slate-600 text-sm">플랫폼 회원이 아니더라도 음악 재생이 가능한 현재 구조에서는 문제가 발생할 수 있기 때문에 플랫폼에 로그인한 상태에서만 음원에 접근 가능하도록 변경</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-slate-900 mb-2">메타데이터 제공</h4>
                  <p className="text-slate-600 text-sm">사용자에게 음원의 가사 등을 포함한 더 상세한 메타데이터를 제공</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GUIGIMProject;


