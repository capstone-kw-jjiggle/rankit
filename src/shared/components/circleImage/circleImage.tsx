import Image from 'next/image';
import { divStyle, imageStyle } from './circleImage.css';

interface CircleImageProps {
  src: string;
  variant?: 'sm' | 'lg';
}

const CircleImage = ({ src, variant = 'sm' }: CircleImageProps) => {
  return (
    <div className={divStyle[variant]}>
      <Image
        src={src}
        width={460}
        height={460}
        alt="프로필 이미지"
        className={imageStyle}
      />
    </div>
  );
};

export default CircleImage;
