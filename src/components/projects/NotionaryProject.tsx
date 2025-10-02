import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NotionaryProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [currentImageRatio, setCurrentImageRatio] = useState<number | null>(null); // height / width
  const computedHeight = currentImageRatio && containerWidth
    ? Math.round(containerWidth * currentImageRatio)
    : null;
  
  const notionaryImages = [
    { src: "/images/not-1.gif", alt: "Notionary 워크스페이스 데모" },
    { src: "/images/not-2.gif", alt: "Notionary 커뮤니티 데모" },
    { src: "/images/not-3.gif", alt: "Notionary OAuth 로그인 데모" },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % notionaryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + notionaryImages.length) % notionaryImages.length);
  };

  // Measure container width for dynamic height calculation
  useEffect(() => {
    const measure = () => {
      if (sliderRef.current) {
        setContainerWidth(sliderRef.current.offsetWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Set ratio when current image loads
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    if (index !== currentImageIndex) return;
    const img = e.currentTarget;
    if (img.naturalWidth && img.naturalHeight) {
      setCurrentImageRatio(img.naturalHeight / img.naturalWidth);
    }
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
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
          COMMUNITY PLATFORM
        </motion.div>
        
        <div className="mb-6">
          <img src="/images/notionary.png" alt="Notionary" className="w-80 h-24 mx-auto mb-4" />
        </div>
        
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            <span className="text-slate-600 text-sm font-medium flex items-center space-x-2">
              2025-05-16 ~ 2025-06-01 ( 15일 )

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
          '노션'의 워크스페이스 기능에서 착안하여 <span className="text-slate-900 font-semibold">개인이 자유롭게 사용하는 문서 작성 툴</span>과 <br />
           이용자 간 질의응답을 나눌 수 있는 <span className="text-slate-900 font-semibold">커뮤니티 플랫폼</span>을 통합한 웹 서비스입니다.
        </p>
      </motion.div>

      {/* Top Section: Slider (3/4) + Tech & Links (1/4) */}
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-12 mb-20">
        {/* Left: Image Slider 3/4 with dynamic aspect ratio */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative group xl:col-span-3"
        >
          <div ref={sliderRef} className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200">
            <div className="relative overflow-hidden" style={{ height: computedHeight ? `${computedHeight}px` : undefined }}>
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {notionaryImages.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                      onLoad={(e) => handleImageLoad(e, index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Navigation Arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 backdrop-blur-sm border border-slate-200"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-105 backdrop-blur-sm border border-slate-200"
            >
              <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center mt-4 space-x-3">
            {notionaryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'w-8 h-2.5 bg-slate-600 rounded-full' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 rounded-full hover:scale-125'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Right: Tech Stack & Links 1/4 */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8 xl:col-span-1"
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
              {['React', 'Redux', 'React Query', 'Node.js', 'MySQL', 'Sequelize', 'JWT/OAuth2', 'Styled-components', 'Express.js', 'axios', 'JavaScript'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm rounded-lg font-medium border border-slate-200 hover:bg-slate-100 transition-colors duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

                {/* Project Links */}
                <div className="space-y-3">
                  <a href="https://notionarys.store" target="_blank" rel="noopener noreferrer"
                     className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 font-medium text-sm border border-slate-200">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    프로젝트 바로 가기
                  </a>
            
            <a href="https://github.com/Sialsry/Notionary_Backend" target="_blank" rel="noopener noreferrer" 
               className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 font-medium text-sm border border-slate-200">
              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub (frontend)
            </a>
            <a href="https://github.com/Sialsry/Notionary_Backend" target="_blank" rel="noopener noreferrer" 
               className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 font-medium text-sm border border-slate-200">
              <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub (Backend)
            </a>
          </div>

        </motion.div>
      </div>

      {/* Unified Details Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
      >
        {/* 맡은 역할 */}
        <div>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">맡은 역할</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <h4 className="font-semibold text-slate-900 mb-3">회원가입 / 로그인 페이지 풀스택 개발</h4>
              <ul className="text-slate-700 text-sm list-disc list-inside space-y-1">
                <li>회원가입 시 사용자 입력의 유효성 검사를 위한 정규식 도입</li>
                <li>OAuth2 기반 간편 로그인</li>
                <li>JWT 인증 시스템 구축</li>
                <li>올바르지 않은 입력에 대한 에러 메시지 처리</li>
              </ul>
            </div>
            <div className="rounded-xl p-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <h4 className="font-semibold text-slate-900 mb-3">마이페이지 풀스택 개발</h4>
              <ul className="text-slate-700 text-sm list-disc list-inside space-y-1">
                <li>UI 설계 및 toast 메시지 처리</li>
                <li>나의 활동 내역 조회 : 작성한 게시글, 댓글 작성 게시글, 좋아요 한 게시글</li>
                <li>나의 활동 내역 관리 : 게시글 상세 조회, 게시글 및 댓글 수정/삭제</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-200"></div>

        {/* 이슈 및 해결과정 */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">이슈 및 해결과정</h3>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200"></div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m0 0l-3 3m3-3l-3-3" />
                  </svg>
                </div>
              </div>
              {/* Issue */}
              <div className="rounded-xl p-6 border border-red-200 bg-red-50/50">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-red-100 text-red-700 mr-2">1</span>
                  <h4 className="font-semibold text-slate-900">JWT 토큰 검증 미들웨어 문제</h4>
                </div>
                <p className="text-slate-700 text-sm">인증이 필요한 라우트와 그렇지 않은 라우트 간의 미들웨어 적용 차이로 인한 문제 발생</p>
              </div>
              {/* Solution */}
              <div className="rounded-xl p-6 border border-green-200 bg-green-50/50">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-green-100 text-green-700 mr-2">1</span>
                  <h4 className="font-semibold text-slate-900">미들웨어 분리 및 try-catch 구조</h4>
                </div>
                <p className="text-slate-700 text-sm">필수 인증과 선택적 인증을 구분하는 미들웨어 함수로 분리하고, try-catch 구조를 사용하여 검증 실패 시 적절한 fallback이 이루어지도록 처리</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-200"></div>

        {/* 향후 과제 */}
        <div>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900">향후 과제</h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-xl p-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <h4 className="font-semibold text-slate-900 mb-2">워크스페이스 파일 저장</h4>
              <p className="text-slate-700 text-sm">워크스페이스를 하나의 txt 파일 혹은 html 파일의 형태로 통째로 저장하여, 워크스페이스를 공유할 때 기존의 형태와 양식이 더 잘 보존된 형태로 유지되도록 개선</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotionaryProject;


