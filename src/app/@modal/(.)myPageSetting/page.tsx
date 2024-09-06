import { MyPageSetting } from '@/app/modal/_components/myPageSetting';
import { Modal } from '@/app/modal/modal';

export default function Page() {
  return (
    <Modal title="설정">
      <MyPageSetting />
    </Modal>
  );
}
