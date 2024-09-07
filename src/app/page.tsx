// Todo: 추후에 서버 컴포넌트 클라이언트 컴포넌트 분리
import Link from 'next/link';
import { ReactElement } from 'react';
import Button from '@/shared/components/button/button';
import Input from '@/shared/components/input/input';
import { inputStyle } from '@/shared/components/input/input.css';
import RankBoard from '@/shared/components/rankBoard/rankBoard';
import ArrowDownIcon from '@/shared/assets/svg/arrow_down.svg';
import GraduationCapIcon from '@/shared/assets/svg/graduationCap.svg';
import MapIcon from '@/shared/assets/svg/map.svg';
import {
  bottomDivStyle,
  bottomParagraphStyle,
  buttonDivStyle,
  container,
  heading2Style,
  headingStyle,
  IconStyle,
  inputDivStyle,
  tierButtonStyle,
  tierDivStyle,
  topDivContentStyle,
  topDivPragraphStyle,
  topDivSpanStyle,
  topDivStyle,
  topParagraphStyle,
} from './home.css';

export default function Home() {
  return (
    <div className={container}>
      <div className={topDivStyle}>
        <div className={topDivContentStyle}>
          <h1 className={headingStyle}>
            우리학교, 우리지역의
            <br />
            개발 실력을 겨루어보자
          </h1>

          <div className={buttonDivStyle}>
            <Link href={'/school'}>
              <Button Icon={<GraduationCapIcon />}>학교 순위</Button>
            </Link>

            <Link href={'/region'}>
              <Button Icon={<MapIcon />}>지역 순위</Button>
            </Link>
          </div>

          <p className={topDivPragraphStyle}>
            rank<span className={topDivSpanStyle}>i</span>t에서 다른 개발자들을
            만나보세요 !
          </p>

          <div className={inputDivStyle}>
            <Input variant="search" placeholder="github 아이디 검색" />
          </div>

          <ArrowDownIcon className={IconStyle} />
        </div>
      </div>

      <div className={bottomDivStyle}>
        <div>
          <h2 className={heading2Style}>유저 랭킹</h2>
          <p className={topParagraphStyle}>
            level별
            <br />
            개발자들의 랭킹을
            <br />
            확인해보세요
          </p>

          <p className={bottomParagraphStyle}>
            rankit에서 분석한
            <br />
            깃허브 점수를
            <br />
            보여드려요
          </p>
        </div>

        <div>
          <div className={tierDivStyle}>
            <button className={tierButtonStyle}>1 tier</button>
            <button className={tierButtonStyle}>2 tier</button>
            <button className={tierButtonStyle}>3 tier</button>
            <button className={tierButtonStyle}>4 tier</button>
            <button className={tierButtonStyle}>5 tier</button>
            <button className={tierButtonStyle}>6 tier</button>
          </div>
          <RankBoard title="아이디" variant="img" />
        </div>
      </div>
    </div>
  );
}
