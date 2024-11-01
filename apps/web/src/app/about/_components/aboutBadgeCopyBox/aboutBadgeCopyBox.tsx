'use client';

import CustomAlertDialog from '@/shared/components/alertDialog/AlertDialog';
import { divStyle } from './aboutBadgeCopyBox.css';

const AboutBadgeCopyBox = ({ badgeLink }: { badgeLink: string }) => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}
  };

  return (
    <>
      <div className={divStyle}>
        <p>{badgeLink}</p>
        <CustomAlertDialog
          att="noti"
          variant="textBtn"
          color="blue"
          title="복사 완료"
          description={[
            '탈퇴를 진행합니다.',
            <br key="br" />,
            '모든 정보가 삭제됩니다.',
          ]}
          cancelText="취소"
          confirmText="확인"
          triggerText="copy"
          onConfirm={() => handleCopyClipBoard(badgeLink)}
        />
      </div>
    </>
  );
};

export default AboutBadgeCopyBox;
