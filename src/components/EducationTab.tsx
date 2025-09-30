import { motion } from 'framer-motion';

const EducationTab = () => {
  const educationData = [
    {
      period: "2021.02 ~ 2025.01",
      institution: "경희대학교",
      degree: "사회학 전공",
      status: "completed"
    },
    {
      period: "2025.01 ~ 2025.09",
      institution: "경일게임IT아카데미",
      degree: "블록체인 기반 웹 풀스택 개발자 부트캠프 12기",
      description: "블록체인 기술과 웹 개발의 기초부터 심화까지 체계적으로 학습하며, 실제 프로젝트를 통한 실무 경험을 쌓았습니다.",
      status: "completed"
    },
    {
      period: "2025.09 ~ 현재",
      institution: "Blockchain Valley",
      degree: "블록체인 학회 개발팀 8기",
      description: "현재 블록체인 기술의 최신 트렌드를 학습하고, 개발팀 활동을 통해 협업 능력과 기술적 역량을 향상시키고 있습니다.",
      status: "ongoing"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex flex-col justify-center">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          교육사항
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-green-200"></div>
        
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex items-start"
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 shadow-lg ${
                  item.status === 'ongoing' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-white' 
                    : 'bg-gradient-to-r from-gray-400 to-gray-500 border-white'
                }`}>
                  {item.status === 'ongoing' && (
                    <div className="w-full h-full rounded-full bg-white animate-pulse"></div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pl-6 sm:pl-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                        {item.institution}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-3">{item.degree}</p>
                    </div>
                    <div className="mt-3 lg:mt-0 lg:ml-4">
                      <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                        item.status === 'ongoing'
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200'
                          : 'bg-gray-100 text-gray-700 border border-gray-200'
                      }`}>
                        {item.period}
                      </span>
                    </div>
                  </div>
                  
                  {item.description && (
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {item.description}
                    </p>
                  )}

                  {/* Status Indicator */}
                  <div className="mt-4 flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      item.status === 'ongoing' ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-sm text-gray-500 font-medium">
                      {item.status === 'ongoing' ? '진행 중' : '완료'}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTab;
