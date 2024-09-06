import { MyPageSettingRegion } from '@/app/modal/_components/myPageSettingRegion/myPageSettingRegion';
import { Modal } from '@/app/modal/modal';

export default function Page() {
  return (
    <Modal title="소속지역 변경">
      <MyPageSettingRegion />
    </Modal>
  );
}
