import Link from 'next/link';
import Logo from '@/shared/assets/svg/logo_sm.svg';
import Profile from '@/shared/assets/svg/profile.svg';
import CircleImage from '../../circleImage/circleImage';
import { contentStyle, headerStyle, navStyle } from './header.css';

const Header = () => {
  return (
    <header className={headerStyle}>
      <div className={contentStyle}>
        <Link href="/">
          <Logo />
        </Link>
        <nav className={navStyle}>
          <Link href="/school">school rank</Link>
          <Link href="/region">regional rank</Link>
          <Link href="/board">board</Link>
          <Link href="/about">about</Link>
        </nav>
        <Link href={`/user/${1}`}>
          <CircleImage
            src={'https://avatars.githubusercontent.com/u/127329855?v=4'}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
