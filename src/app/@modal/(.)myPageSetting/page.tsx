import { MyPageSetting } from '@/app/modal/_components/myPageSetting/myPageSetting';
import { Modal } from '@/app/modal/modal';

export default function Page() {
  return (
    <Modal title="설정">
      <MyPageSetting userSchool="광운대학교" userRegion="경기도" />
    </Modal>
  );
}
