import Image from 'next/image';
import Button from '@/shared/components/button/button';
import {
  bottomDivStyle,
  buttonDivStyle,
  containerStyle,
  middleContentDivStyle,
  middleDivStyle,
  sharedDivStyle,
  topDivStyle,
  topSectionStyle,
} from './UserPage.css';
import Box from './_components/box/box';
import Contributions from './_components/contributions/contributions';
import Introduction from './_components/introduction/introduction';
import Profile from './_components/profile/profile';
import ProgressBar from './_components/progressBar/progressBar';

const UserPage = () => {
  return (
    <div className={containerStyle}>
      <div className={topDivStyle}>
        <div className={sharedDivStyle}>
          <section className={topSectionStyle}>
            <Profile />
            <Introduction />
          </section>

          <div className={buttonDivStyle}>
            <Button container="sm" color="secondary">
              수정
            </Button>
            <Button container="sm" color="secondary">
              설정
            </Button>
          </div>
        </div>
      </div>

      <div className={middleDivStyle}>
        <div className={sharedDivStyle}>
          <ProgressBar width={50} currentTier={1} nextTier={2} />

          <div className={middleContentDivStyle}>
            <Box title="rank" content="12등" subContent="유저간 순위" />
            <Box title="school" content="1등" subContent="광운대학교" />
            <Box title="region" content="1등" subContent="경기도" />
            <Box title="Language" content="Javascript" />
          </div>

          <Contributions userName="suwonthugger" />
        </div>
      </div>

      <div className={bottomDivStyle}>
        <div className={sharedDivStyle}></div>
      </div>
    </div>
  );
};

export default UserPage;
