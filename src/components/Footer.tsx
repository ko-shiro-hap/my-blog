import Link from "next/link";

const Footer = () => {
  return (
    <footer className='py-10 px-5 text-center'>
      <ul className='flex gap-20 py-10 border-t justify-center'>
        <Link href='#'>
          <li>ホーム</li>
        </Link>
        <Link href='#'>
          <li>記事一覧</li>
        </Link>
        <Link href='#'>
          <li>カテゴリー・タグ</li>
        </Link>
        <Link href='#'>
          <li>お問い合わせ</li>
        </Link>
      </ul>
      <small className='text-sm text-gray-400'>&copy; 2023 KOSHIRO IINO</small>
    </footer>
  )
};

export default Footer;
