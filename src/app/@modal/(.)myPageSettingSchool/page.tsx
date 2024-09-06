import { MyPageSettingSchool } from '@/app/modal/_components/myPageSettingSchool/myPageSettingSchool';
import { Modal } from '@/app/modal/modal';

export default function Page() {
  return (
    <Modal title="소속학교 변경">
      <MyPageSettingSchool />
    </Modal>
  );
}
