
import "../styles/botonStyles.css";


const BotonFlotante = () => {
    return (
        <>
            <div className="group fixed bottom-0 right-0 p-8 w-50 h-35">
                <div className="text-white shadow-xl flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute animacion">
                    <div className="absolute top-0 right-0 w-4 h-4 bg-red-600 rounded-full border-2 border-white animate-ping z-50"></div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 z-10">
                        <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95.3 57.21 131.3-12.25 50.38-54.06 95.63-54.5 96a8.017 8.017 0 0 0 5.875 13.75c66.38 0 116.1-31.12 141.2-51.88 32.19 11.38 68.13 17.88 106.2 17.88 141.4 0 256-93.13 256-208S397.4 32 256 32z" />
                    </svg>
                </div>
                <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16   flex  p-2 hover:p-3 bg-green-300 scale-100 hover:bg-green-400 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8">
                        <path d="M16.001 3.2c-7.073 0-12.8 5.727-12.8 12.8 0 2.337.648 4.619 1.875 6.601L3.2 28.8l6.457-1.846c1.872 1.088 4.002 1.662 6.344 1.662 7.073 0 12.8-5.727 12.8-12.8s-5.727-12.8-12.8-12.8zM16 26.4c-1.948 0-3.848-.523-5.497-1.512l-.394-.234-3.832 1.095 1.104-3.729-.256-.403c-1.101-1.734-1.683-3.742-1.683-5.617 0-6.003 4.897-10.9 10.9-10.9s10.9 4.897 10.9 10.9S22.003 26.4 16 26.4zm5.588-7.743c-.306-.153-1.811-.89-2.094-.99-.282-.102-.487-.153-.692.153-.204.306-.793.99-.971 1.194-.178.204-.357.229-.663.077-.306-.153-1.293-.476-2.46-1.515-.909-.809-1.523-1.808-1.7-2.114-.178-.306-.02-.472.133-.624.136-.136.306-.357.459-.535.153-.178.204-.306.306-.51.102-.204.051-.382-.026-.535-.077-.153-.692-1.667-.949-2.285-.25-.602-.505-.521-.692-.531l-.591-.01c-.204 0-.535.077-.816.382s-1.071 1.046-1.071 2.55 1.096 2.958 1.247 3.165c.153.204 2.161 3.296 5.237 4.624.732.316 1.303.505 1.748.646.735.233 1.404.2 1.931.122.589-.088 1.811-.739 2.068-1.455.255-.714.255-1.326.178-1.455-.077-.127-.28-.204-.586-.357z" />
                    </svg>

                </div>
                <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2 hover:p-3 bg-blue-300 hover:bg-blue-400  text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512" className="w-8 h-7 ">
                        <path d="M279.14 288l14.22-92.66h-88.91V141.09c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S293.8 0 259.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H89.09V288h49.18v224h100.2V288z" />
                    </svg>
                </div>
                <div className="absolute rounded-full transition-all duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex p-2 hover:p-3 bg-[#3d3838] hover:bg-[#151211] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                        <path d="M448,209.9v95.5c-35.2-1.4-69.1-11.6-98.5-29.5v114.1c0,61.7-50,111.7-111.7,111.7S126,451.7,126,390S176,278.3,237.7,278.3c5.7,0,11.3,0.4,16.7,1.3v80.2c-5.3-1.5-10.9-2.2-16.7-2.2c-31.6,0-57.2,25.7-57.2,57.2s25.7,57.2,57.2,57.2s57.2-25.7,57.2-57.2V0h84.6c1.5,62.5,52.1,112.9,114.1,114.5v95.4c-34.9-0.9-69-10.2-98.5-27.4V209.9z" />
                    </svg>
                </div>


            </div>
        </>

    )
}

export default BotonFlotante;