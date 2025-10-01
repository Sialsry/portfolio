import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const MPSProject = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [currentImageRatio, setCurrentImageRatio] = useState<number | null>(null); // height / width
  const computedHeight = currentImageRatio && containerWidth
    ? Math.round(containerWidth * currentImageRatio)
    : null;
  
  const mpsImages = [
    { src: "/images/mps-1.png", alt: "MPS 프로젝트 스크린샷 1" },
    { src: "/images/mps-2.png", alt: "MPS 프로젝트 스크린샷 2" },
    { src: "/images/mps-3.png", alt: "MPS 프로젝트 스크린샷 3" },
    { src: "/images/mps-4.png", alt: "MPS 프로젝트 스크린샷 4" }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mpsImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mpsImages.length) % mpsImages.length);
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
          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
          BLOCKCHAIN PROJECT
        </motion.div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
          MPS Project
        </h1>
        
        <div className="flex items-center justify-center space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-slate-600 text-sm font-medium">2025-08-02 ~ 2025-09-16 ( 1.5개월 )</span>
          </div>
          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
          <span className="text-slate-600 text-sm font-medium flex items-center space-x-2">
            <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 2c-2.761 0-5 2.239-5 5h10c0-2.761-2.239-5-5-5z" />
            </svg>
            직무 - 블록체인 & 백엔드
          </span>
        </div>
        
        <p className="text-xl sm:text-2xl text-slate-600 max-w-5xl mx-auto leading-relaxed font-light">
        <span className="text-slate-900 font-semibold">음원 사용 내역을 블록체인에 기록</span>하여 투명한 정산 관리가 가능하며, <br />
          <span className="text-slate-900 font-semibold"> 특정 유료 음원 사용에 대한 리워드</span>를 지급합니다.
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
                {mpsImages.map((image, index) => (
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
            {mpsImages.map((_, index) => (
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
              {['Node.js', 'Nest.js', 'TypeScript', 'Solidity', 'PostgresQL', 'Drizzle', 'AWS', 'Vercel'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm rounded-lg font-medium border border-slate-200 hover:bg-slate-100 transition-colors duration-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

                {/* Project Links */}
                <div className="space-y-3">
                  <a href="https://admin.klk1.store/admin" target="_blank" rel="noopener noreferrer"
                     className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 font-medium text-sm border border-slate-200">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Admin 페이지
                  </a>
                  <a href="https://client.klk1.store" target="_blank" rel="noopener noreferrer"
                     className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 font-medium text-sm border border-slate-200">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Client 페이지
                  </a>
                  <a href="https://github.com/Sialsry/MPS-project" target="_blank" rel="noopener noreferrer"
                     className="w-full bg-slate-100 text-slate-700 px-6 py-3 rounded-lg flex items-center justify-center hover:bg-slate-200 transition-colors duration-200 font-medium text-sm border border-slate-200">
                    <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Repository
                  </a>
                </div>

        </motion.div>

        {/* Right Column - Project Details removed in favor of unified section */}
      </div>

      {/* Unified Details Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
      >
        {/* 맡은 역할 (팀장) */}
        <div>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mr-4">
              <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-slate-900">맡은 역할 (팀장)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <h4 className="font-semibold text-slate-900 mb-3">스마트컨트랙트 작성</h4>
              <ul className="text-slate-700 text-sm list-disc list-inside space-y-1">
                <li>회원가입 시 스마트 계정 생성</li>
                <li>이벤트 기반 음원 사용 내역 배치 기록</li>
                <li>기록 시 유효한 리워드 코드 내역을 합산하여 기업 별 토큰 전송</li>
              </ul>
            </div>
            <div className="rounded-xl p-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <h4 className="font-semibold text-slate-900 mb-3"> 음원 사용 시의 백엔드 로직 설계</h4>
              <ul className="text-slate-700 text-sm list-disc list-inside space-y-1">
                <li>음원 재생 및 가사 다운로드 API 설계 / 구현</li>
                <li>음원 사용 시 권한, 리워드 발생 여부, 유효재생 여부 검증을 거친 뒤 DB 저장</li>
              </ul>
            </div>
            <div className="rounded-xl p-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <h4 className="font-semibold text-slate-900 mb-3">유효재생 판단 알고리즘 구현</h4>
              <ul className="text-slate-700 text-sm list-disc list-inside space-y-1">
                <li>a. 음원의 재생 요청을 받았을 때 음원 데이터를 나눠서 전송</li>
                <li>b. 전송이 모두 이루어진 경우 유효재생으로 처리</li>
                <li>c. 유효재생까지 걸리는 시간이 음원 전체 재생 길이의 절반이 되도록 구현</li>
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
            {/* Pair 1 */}
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
                  <h4 className="font-semibold text-slate-900">유효재생 기준 설계 문제</h4>
                </div>
                <p className="text-slate-700 text-sm">개발 진행 초기에 '60초 재생'을 음원의 유효재생 기준으로 설계하려 하였으나, 해당 방법으로는 클라이언트 측에서 별도로 재생 시간을 측정하여 재 요청을 해야 하는 문제 발생</p>
              </div>
              {/* Solution */}
              <div className="rounded-xl p-6 border border-green-200 bg-green-50/50">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-green-100 text-green-700 mr-2">1</span>
                  <h4 className="font-semibold text-slate-900">HTTP Range 요청 도입</h4>
                </div>
                <p className="text-slate-700 text-sm">재생 내역 조작의 위험성, 중복 요청시의 명확한 세션 관리, 엔드포인트 사용의 편리함 등을 고려하여 음원 재생의 요청-응답 구조를 HTTP Range 요청을 사용하는 방식을 도입</p>
              </div>
            </div>

            {/* Pair 2 */}
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
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-red-100 text-red-700 mr-2">2</span>
                  <h4 className="font-semibold text-slate-900">타임존 차이 문제</h4>
                </div>
                <p className="text-slate-700 text-sm">로컬과 배포 환경에서서의 타임존이 달라 데이터베이스에 기록되는 시간에 차이가 나는 문제 발생</p>
              </div>
              {/* Solution */}
              <div className="rounded-xl p-6 border border-green-200 bg-green-50/50">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full bg-green-100 text-green-700 mr-2">2</span>
                  <h4 className="font-semibold text-slate-900">클라이언트 시간 변환</h4>
                </div>
                <p className="text-slate-700 text-sm">기존에 작동되던 다중 데이터 조회와 통계 계산 로직들의 호환성을 고려하여 기록된 시간을 프론트엔드 측에서 한국 시간에 맞게 변환, +9시간을 적용한 클라이언트 시간으로 표현</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <h4 className="font-semibold text-slate-900 mb-2">ZK-proof 기반 롤업 도입</h4>
              <p className="text-slate-700 text-sm">블록체인의 본질적 구조에서 비롯되는 오라클 문제를 보완하기 위해 기존 구조에서 오프체인의 데이터를 ZK-proof 기반 롤업으로 배치 처리하여 트랜잭션 효율성을 높이면서도 더욱 신뢰할 수 있는 web3 서비스로 고도화</p>
            </div>
            <div className="rounded-xl p-6 border border-slate-200 bg-gradient-to-b from-white to-slate-50">
              <h4 className="font-semibold text-slate-900 mb-2">API 키 관리 시스템 고도화</h4>
              <p className="text-slate-700 text-sm">테이블 분리 및 키 활성/비활성화 ,rate-limit ,사용량 ,만료일 등 기능 구현</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MPSProject;


