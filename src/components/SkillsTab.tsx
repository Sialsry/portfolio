import { motion } from 'framer-motion';
import { useState } from 'react';

const SkillsTab = () => {
  const [flippedSkill, setFlippedSkill] = useState<string | null>(null);

  const skillLevels = [
    {
      level: "편해요",
      skills: ["HTML 5", "CSS 3", "JavaScript", "Node.js", "PostgresQL", "MySQL", "Drizzle", "Solidity", "Hardhat", "Remix", "Ethers.js", "Express"]
    },
    {
      level: "어느정도 사용할 수 있어요",
      skills: ["TypeScript", "JWT/OAuth2", "React", "Sequelize", "Git", "Nest.js", "Notion"]
    },
    {
      level: "사용해봤어요",
      skills: ["Postman", "AWS", "Axios", "Vercel", "EJS", "Tailwind CSS"]
    },
  ];

  const getSkillImage = (skill: string) => {
    const skillImages: { [key: string]: string } = {
      "HTML 5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "CSS 3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "Node.js": "https://nodejs.org/static/images/logo.svg",
      "PostgresQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      "Drizzle": "https://avatars.githubusercontent.com/u/108468352?v=4",
      "Solidity": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
      "Hardhat": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4i1wWF516fnkizp1WSDG5rnG8GfkQAVoVQ&s",
      "Remix": "https://repository-images.githubusercontent.com/59065830/b62be480-45d2-11ea-9989-803db0f9c44d",
      "Ethers.js": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjxZfounPD_SncT5aqxRLROPQ144f3jc_bPA&s",
      "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "Ethereum": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ethereum/ethereum-original.svg",
      "Blockchain": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitcoin/bitcoin-original.svg",
      "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "JWT/OAuth2": "https://jwt.io/img/pic_logo.svg",
      "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Sequelize": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
      "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "Nest.js": "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
      "Notion": "https://www.notion.so/images/logo-ios.png",
      "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      "AWS": "https://standing-o.github.io/assets/img/for_post/20240114-1.png",
      "Axios": "https://doogle.link/wp-content/uploads/2019/03/axios.jpg",
      "Vercel": "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      "Foundry": "https://book.getfoundry.sh/img/logo.svg",
      "EJS": "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FmxQej%2FbtrBvYsxMIT%2FAAAAAAAAAAAAAAAAAAAAAJQdEvauNsyEgoIcU3N1eKBTVyMif3xlyiKaFAQWl2oR%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1759244399%26allow_ip%3D%26allow_referer%3D%26signature%3D5gDjLjyPMlvXE2CnOLeUe%252Brl0Xg%253D",
      "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    };
    return skillImages[skill] || null;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex flex-col justify-center">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          기술 스택
        </h2>
        
      </motion.div>

      {/* Skills Grid */}
      <div className="space-y-8">
        {skillLevels.map((level, levelIndex) => (
          <motion.div
            key={level.level}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: levelIndex * 0.2 }}
            className="bg-white rounded-lg p-6 border border-gray-200"
          >
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {level.level}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {level.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: levelIndex * 0.2 + skillIndex * 0.05 
                  }}
                  className="relative h-20 cursor-pointer"
                  onMouseEnter={() => setFlippedSkill(skill)}
                  onMouseLeave={() => setFlippedSkill(null)}
                >
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{ 
                      rotateY: flippedSkill === skill ? 180 : 0 
                    }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front side - Skill image */}
                    <div className="absolute inset-0 w-full h-full bg-gray-100 rounded-lg flex items-center justify-center backface-hidden">
                      {getSkillImage(skill) && (
                        <img 
                          src={getSkillImage(skill) || ''} 
                          alt={skill}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                    </div>
                    
                    {/* Back side - Skill name */}
                    <div 
                      className="absolute inset-0 w-full h-full bg-gray-200 rounded-lg flex items-center justify-center backface-hidden"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <div className="font-semibold text-sm text-gray-700 text-center">
                        {skill}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsTab;
