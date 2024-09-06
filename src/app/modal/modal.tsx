'use client';

import { useRouter } from 'next/navigation';
import ArrowBack from '@/shared/assets/svg/arrow_back.svg';
import {
  modalStyle,
  contentStyle,
  divHeaderStyle,
  headerStyle,
} from './modal.css';

export function Modal({
  children,
  title = '설정',
}: {
  children: React.ReactNode;
  title?: string;
}) {
  const router = useRouter();

  return (
    <div className={modalStyle}>
      <div className={contentStyle}>
        <div className={divHeaderStyle}>
          <ArrowBack
            onClick={() => {
              router.back();
            }}
          />
          <h1 className={headerStyle}>{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
