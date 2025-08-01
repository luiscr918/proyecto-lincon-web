import { motion } from "framer-motion";

interface AcademicLevelCardProps {
  id?: string;
  title: string;
  ageOrCourseInfo: string;
  description: string;
  features: string[];
  imageUrl: string;
  altText: string;
  cardBgClass: string;
  buttonColorClass: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
} as const;

const AcademicLevelCard = ({
  title,
  id,
  ageOrCourseInfo,
  description,
  features,
  imageUrl,
  altText,
  cardBgClass,
  buttonColorClass,
}: AcademicLevelCardProps) => {
  const handleDownloadPDF = () => {
    window.open('https://drive.google.com/file/d/1UEFR0MZJsVRsyIZUAf6-TBaXTzsfeKtO/view?usp=drivesdk', '_blank');
  };

  return (
    <motion.div
      id={id}
      className={`relative ${cardBgClass} rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition-shadow duration-300 hover:shadow-2xl hover:shadow-blue-400/30`}
      variants={cardVariants}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-full h-56 overflow-hidden">
        <motion.img
          src={imageUrl}
          alt={altText}
          className="object-cover w-full h-full"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="flex flex-col items-center text-gray-800 p-6 flex-grow">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 leading-tight">
          {title}
        </h2>
        <p className="text-lg font-bold mb-4 opacity-90">{ageOrCourseInfo}</p>
        <p className="text-base sm:text-lg font-light mb-5 leading-relaxed text-center">
          {description}
        </p>

        <ul className="text-base text-left w-full space-y-2 mb-6 px-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-900 mr-2 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0 flex flex-col gap-3 w-full">
        <motion.button
          onClick={handleDownloadPDF}
          className={`w-full bg-white bg-opacity-90 hover:bg-opacity-100 ${buttonColorClass} font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out flex items-center justify-center`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zM4 16h12V4H4v12zm5-6a1 1 0 10-2 0v3a1 1 0 102 0V10z"
              clipRule="evenodd"
              fillRule="evenodd"
            ></path>
            <path d="M10 11l-3-3h6l-3 3z"></path>
          </svg>
          Oferta Académica PDF
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AcademicLevelCard;
