import { Player } from "@lordicon/react";
import { useEffect, useRef } from "react";
import instagramIconAnimated from "../assets/icons/instagramIconAnimated.json";
import facebookIconAnimated from "../assets/icons/facebookIconAnimated.json";
import tiktokIconAnimated from "../assets/icons/tiktokIconAnimated.json";
interface Props{
  modalHome?:boolean;
}
export const FloatingSocialBar = ({modalHome=false}:Props) => {
  //tendremos 3 redes sociales facebook,instagram  tik tok
  const instagramplayerRef = useRef<Player>(null);
  const tiktokPlayerRef = useRef<Player>(null);
  const facebookPlayerRef = useRef<Player>(null);

  useEffect(() => {
    instagramplayerRef.current?.playFromBeginning();
    tiktokPlayerRef.current?.playFromBeginning();
    facebookPlayerRef.current?.playFromBeginning();
  }, [modalHome]);

  return (
    <>
      <div className="fixed right-5 top-1/2 -translate-y-1/2 flex flex-col gap-3  rounded-md p-2"
      style={{backgroundColor:'#223555'}}
      >
        <a
          href="https://www.facebook.com/profile.php?id=61579113354202"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 xs:w-10 xs:h-10   rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Player icon={facebookIconAnimated} ref={facebookPlayerRef} />
        </a>

        <a
          href="https://www.tiktok.com/@ue.lincoln.larrea?_t=ZM-8yV64yVcboM&_r=1"
          target="_blank"
          className="flex items-center justify-center w-12 h-12 xs:w-10 xs:h-10   rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Player icon={tiktokIconAnimated} ref={tiktokPlayerRef} />
        </a>

        <a
          href="https://www.instagram.com/lincoln_larrea?igsh=Z29hdXhubHNrODV0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 xs:w-10 xs:h-10 bg-gradient-to-r   rounded-full shadow-lg transition-transform hover:scale-110"
        >
          <Player icon={instagramIconAnimated} ref={instagramplayerRef} />
        </a>
      </div>
    </>
  );
};
