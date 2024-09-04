import ImsiImg from '@/shared/assets/svg/imsiImg.svg';
import Tier1 from '@/shared/assets/svg/tier_img/tier1.svg';
import Tier2 from '@/shared/assets/svg/tier_img/tier2.svg';
import Tier3 from '@/shared/assets/svg/tier_img/tier3.svg';
import Tier4 from '@/shared/assets/svg/tier_img/tier4.svg';
import Tier5 from '@/shared/assets/svg/tier_img/tier5.svg';
import Tier6 from '@/shared/assets/svg/tier_img/tier6.svg';
import {
  divStyle,
  divMainContentStyle,
  divSubContentStyle,
  imgStyle,
  userPositionStyle,
  userTierStyle,
  userNameStyle,
  userCommentStyle,
  divUserCommentStyle,
} from './aboutDeveloper.css';

const AboutDeveloper = ({
  userPosition,
  userName,
  userComment,
  userTier, // 새로운 prop 추가
}: {
  userPosition: string;
  userName: string;
  userComment: string;
  userTier: number; // 1부터 6까지의 숫자
}) => {
  // 티어에 따른 컴포넌트 선택
  const TierComponent =
    [Tier1, Tier2, Tier3, Tier4, Tier5, Tier6][userTier - 1] || Tier1;

  return (
    <div className={divStyle}>
      <ImsiImg className={imgStyle} />
      <div className={divMainContentStyle}>
        <p className={userPositionStyle}>{userPosition}</p>
        <div className={divSubContentStyle}>
          <TierComponent className={userTierStyle} />
          <p className={userNameStyle}>{userName}</p>
        </div>

        <div className={divUserCommentStyle}>
          <p className={userCommentStyle}>{userComment}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDeveloper;
