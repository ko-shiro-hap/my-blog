import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCubes, faMagnifyingGlass, faTag} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className='fixed top-0 right-0 p-5 w-1/5 h-screen bg-main border-l border-secondary text-secondary text-right leading-relaxed'>
      <h2 className='text-2xl font-bold'>CODE<br/>GARAGE</h2>
      <ul className='py-10'>
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
      <div className='w-full border-b border-secondary'>
        <input type="text" className='bg-transparent text-sm text-secondary focus:outline-none' placeholder='カテゴリー・タグ検索' />
        <FontAwesomeIcon icon={faMagnifyingGlass} className='inline-block pl-2 h-4' />
      </div>
      <div className='pt-10'>
      <h3 className='inline-block font-medium'>カテゴリー</h3>
      <FontAwesomeIcon icon={faCubes} className='inline-block pl-2 h-4' />
        <ul className='flex gap-2 pt-2 justify-end flex-wrap text-main'>
          <li className='px-4 bg-category rounded-2xl text-sm'>PHP</li>
          <li className='px-4 bg-category rounded-2xl text-sm'>Docker</li>
        </ul>
      </div>
      <div className='pt-5'>
        <h3 className='inline-block font-medium'>タグ</h3>
      <FontAwesomeIcon icon={faTag} className='inline-block pl-2 h-4' />
        <ul className='flex gap-2 pt-2 justify-end flex-wrap text-main'>
          <li className='px-4 bg-gray-400 rounded text-sm'>Web</li>
          <li className='px-4 bg-gray-400 rounded text-sm'>インフラ</li>
        </ul>
      </div>
    </nav>
  )
};

export default Sidebar;
