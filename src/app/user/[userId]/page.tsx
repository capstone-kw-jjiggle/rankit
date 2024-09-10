import Button from '@/shared/components/button/button';
import {
  bottomDivStyle,
  buttonDivStyle,
  containerStyle,
  middleDivStyle,
  sharedDivStyle,
  topDivStyle,
  topSectionStyle,
} from './UserPage.css';
import Introduction from './_components/introduction/introduction';
import Profile from './_components/profile/profile';

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
        <div className={sharedDivStyle}></div>
      </div>

      <div className={bottomDivStyle}>
        <div className={sharedDivStyle}></div>
      </div>
    </div>
  );
};

export default UserPage;
