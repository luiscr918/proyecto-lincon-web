import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <style>{`
        .perspective-container {
            perspective: 1000px;
        }
        .floating-box {
            transform-style: preserve-3d;
            animation: float 6s ease-in-out infinite;
        }
        .floating-box .front {
            transform: translateZ(20px);
        }
        .floating-box .back {
            transform: translateZ(-20px) rotateY(180deg);
        }
        .floating-box .right {
            transform: rotateY(90deg) translateZ(20px);
        }
        .floating-box .left {
            transform: rotateY(-90deg) translateZ(20px);
        }
        .floating-box .top {
            transform: rotateX(90deg) translateZ(20px);
        }
        .floating-box .bottom {
            transform: rotateX(-90deg) translateZ(20px);
        }
        @keyframes float {
            0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
            50% { transform: translateY(-20px) rotateX(5deg) rotateY(5deg); }
            100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
        }
        .glow {
            text-shadow: 0 0 10px rgba(59, 130, 246, 0.7);
        }
        @keyframes particle {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.3; }
            100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
      `}</style>

      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4 relative">
        <div className="perspective-container">
          <div className="floating-box relative w-64 h-64 md:w-80 md:h-80">
            {/* 3D Cube Faces */}
            <div className="front absolute w-full h-full bg-gray-800 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center p-4 shadow-lg">
              <div className="text-9xl font-bold text-blue-400 mb-2 glow">
                404
              </div>
              <div className="text-xl font-semibold text-blue-200">
                Página no encontrada
              </div>
              <p className="text-gray-400 text-center mt-4">
                La página que buscas no existe o ha sido movida.
              </p>
              <Link
                to="/"
                className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-medium transition-all transform hover:scale-105"
              >
                Ir al inicio
              </Link>
            </div>

            <div className="back absolute w-full h-full bg-gray-800 border-2 border-blue-400 rounded-lg"></div>
            <div className="right absolute w-10 h-full bg-blue-600/50 left-full origin-left rounded-r-lg"></div>
            <div className="left absolute w-10 h-full bg-blue-600/50 right-full origin-right rounded-l-lg"></div>
            <div className="top absolute w-full h-10 bg-blue-600/30 bottom-full origin-bottom rounded-t-lg"></div>
            <div className="bottom absolute w-full h-10 bg-blue-600/30 top-full origin-top rounded-b-lg"></div>
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              top: "20%",
              left: "15%",
              animation: "particle 8s linear infinite",
            }}
          ></div>
          <div
            className="absolute w-3 h-3 bg-blue-500 rounded-full opacity-20"
            style={{
              top: "60%",
              left: "25%",
              animation: "particle 10s linear infinite 2s",
            }}
          ></div>
          <div
            className="absolute w-2 h-2 bg-blue-300 rounded-full opacity-25"
            style={{
              top: "30%",
              left: "80%",
              animation: "particle 12s linear infinite 1s",
            }}
          ></div>
          <div
            className="absolute w-4 h-4 bg-blue-400 rounded-full opacity-15"
            style={{
              top: "80%",
              left: "70%",
              animation: "particle 9s linear infinite 3s",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};
