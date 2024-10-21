interface LanguageLevelProps {
  language: string;
  level: number; // Level from 1 to 5
}

const LanguageLevel = ({ language, level }: LanguageLevelProps) => {
  return (
    <div className="flex items-center space-x-2 max-w-[10.4rem]">
      {/* Language Name */}
      <span className="text-lg font-mono text-white flex-grow">{language}</span>

      {/* Circle indicators for language level */}
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, index) => (
          <div
            key={index}
            className={`w-[14px] h-[14px] rounded-full border float-end ${
              index < level ? "bg-slate-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LanguageLevel;
