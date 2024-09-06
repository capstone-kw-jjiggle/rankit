import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/myPageSetting">Open modal</Link>
      <Link href="/myPageSettingSchool">Open modal</Link>
      <h2>홈페이지</h2>
    </div>
  );
}
