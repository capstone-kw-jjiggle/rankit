import { Input, RankBoard } from '@rankit/ui/index';
import {
  boardStyle,
  bottomDivStyle,
  container,
  heading1Style,
  heading2Style,
  paragraphStyle,
} from './schoolPage.css';

const SchoolPage = () => {
  return (
    <div className={container}>
      <div className={bottomDivStyle}>
        <h1 className={heading1Style}>유저 랭킹</h1>

        <h2 className={heading2Style}>
          대학교의
          <br />
          개발 능력 순위를
          <br />
          알아보아요.
        </h2>

        <p className={paragraphStyle}>
          rankit에서
          <br />
          분석한 깃허브 점수를
          <br />
          보여드려요(가제)
        </p>

        <Input device="mobile" variant="search" placeholder="대학교 검색" />

        <RankBoard device="mobile" className={boardStyle} />
      </div>
    </div>
  );
};

export default SchoolPage;
