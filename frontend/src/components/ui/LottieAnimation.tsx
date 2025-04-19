
'use client';

import { Player } from '@lottiefiles/react-lottie-player';

interface LottieAnimationProps {
  src: string;
  height?: string | number;
  width?: string | number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ src, height = '64px', width = '64px' }) => {
  return (
    <Player
      autoplay
      loop
      src={src}
      style={{ height, width }}
    />
  );
};

export default LottieAnimation;
