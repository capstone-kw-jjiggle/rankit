import ImsiImg from '@/shared/assets/svg/imsiImg.svg';
import Tier1 from '@/shared/assets/svg/tier_img/tier1.svg';
import Tier2 from '@/shared/assets/svg/tier_img/tier2.svg';
import Tier3 from '@/shared/assets/svg/tier_img/tier3.svg';
import Tier4 from '@/shared/assets/svg/tier_img/tier4.svg';
import Tier5 from '@/shared/assets/svg/tier_img/tier5.svg';
import Tier6 from '@/shared/assets/svg/tier_img/tier6.svg';
import {
  divStyle,
  sectionStyle,
  headingStyle,
  paragraphStyle,
  rightDivStyle,
  titleStyle,
  tierImgDivStyle,
} from './aboutPage.css';

const AboutPage = () => {
  return (
    <div className={divStyle}>
      <section className={sectionStyle}>
        <div>
          <h1 className={headingStyle}>
            깃허브
            <br /> 중요한건 아는데 <br />
            동기가 필요할 때
          </h1>
        </div>

        <div className={rightDivStyle}>
          <p className={paragraphStyle}>
            rankit을 통해 우리 학교의, 우리 지역의
            <br /> 명예를 걸고 싸워 보세요.
            <br /> 다른 유저들과 경쟁하면서
            <br /> 코딩의 동기를 찾으세요.
          </p>
        </div>
      </section>

      <section className={sectionStyle}>
        <div>
          <p className={titleStyle}>유저랭킹</p>
          <h1 className={headingStyle}>
            tier별
            <br /> 개발자들의 랭킹을 <br />
            확인해보세요
          </h1>
          <div className={tierImgDivStyle}>
            <Tier1 />
            <Tier2 />
            <Tier3 />
            <Tier4 />
            <Tier5 />
            <Tier6 />
          </div>
        </div>
      </section>

      <section className={sectionStyle}>
        <div>
          <p className={paragraphStyle}>
            깃허브 로그인으로
            <br /> 간단하게 계산되는 <br />
            정보
          </p>
        </div>

        <div>
          <ImsiImg />
        </div>

        <div className={rightDivStyle}>
          <p className={paragraphStyle}>
            나와 비슷한
            <br /> 유저들의 추천받고 <br />
            그들의 작업물을 확인하자
          </p>
        </div>
      </section>

      <section className={sectionStyle}>
        <div>
          <p className={titleStyle}>학교랭킹</p>
          <h1 className={headingStyle}>
            tier별
            <br /> 개발자들의 랭킹을 <br />
            확인해보세요
          </h1>
          <ImsiImg />
        </div>

        <div className={rightDivStyle}>
          <ImsiImg />
          <p className={titleStyle}>지역랭킹</p>
          <h1 className={headingStyle}>
            tier별
            <br /> 개발자들의 랭킹을 <br />
            확인해보세요
          </h1>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
