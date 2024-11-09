'use client';

import React, { useEffect, useRef, useState } from 'react';
import Input from '@/shared/components/input/input';
import { usePostGuestBook } from '@/shared/apis/board/queries';
import { getAuthHeader } from '@/shared/utils/auth';
import Board from './_components/board';
import {
  containerStyle,
  headingStyle,
  leftDivStyle,
  paragraphStyle,
  rightDivStyle,
} from './boardPage.css';

const BoardPage = () => {
  const [내용, set내용] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { mutate, isPending } = usePostGuestBook();

  const handle내용변경 = (e: React.ChangeEvent<HTMLInputElement>) => {
    set내용(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!isPending && 내용.length > 0) {
        console.log('보낸다');
        mutate(내용, { onSuccess: () => set내용('') });
      }
    }
  };

  useEffect(() => {
    setIsLoggedIn(!!getAuthHeader());
  }, []);

  return (
    <div className={containerStyle}>
      <div className={leftDivStyle}>
        <h1 className={headingStyle}>
          고지를
          <br />
          선점하기 위해
          <br />
          싸워라.
        </h1>
        <p className={paragraphStyle}>
          rankit에서
          <br />
          분석한 깃허브 점수를
          <br />
          보여드려요(가제)
        </p>
      </div>

      <div className={rightDivStyle}>
        {isLoggedIn ? (
          <Input
            value={내용}
            onChange={handle내용변경}
            onKeyPress={handleKeyPress}
            placeholder="enter을 입력해서 등록합니다. (최대  60byte)"
          />
        ) : (
          <Input isDiv divValue="로그인 후 이용가능한 서비스입니다." />
        )}
        <Board />
      </div>
    </div>
  );
};

export default BoardPage;
