import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart, faTag} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Articles = () => {
  return (
    <>
      <section className='flex flex-wrap p-5'>
        <article className='w-1/2 p-5'>
          <ul className='flex gap-2 pb-2'>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>PHP</li>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>Docker</li>
          </ul>
          <h2 className='pb-5 font-bold text-xl'>[PHP]Docker環境でPDOを使用する方法</h2>
          <Image src="/images/php-thumbnail.png" alt="thumbnail of article" width={1000} height={1000} className='w-full' />
          <div className='flex pt-1 justify-between'>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faClock} className='h-4 text-gray-400' />
              <span className='text-gray-500'>2022-01-09</span>
            </div>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faHeart} className='h-4 text-gray-400' />
              <span>88</span>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faTag} className='h-4 text-main' />
            <ul className='flex gap-2 pl-1 text-gray-500 text-sm underline'>
              <li>Web</li>
              <li>インフラ</li>
            </ul>
          </div>
        </article>

        <article className='w-1/2 p-5'>
          <ul className='flex gap-2 pb-2'>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>PHP</li>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>Docker</li>
          </ul>
          <h2 className='pb-5 font-bold text-xl'>[PHP]Docker環境でPDOを使用する方法</h2>
          <Image src="/images/php-thumbnail.png" alt="thumbnail of article" width={1000} height={1000} className='w-full' />
          <div className='flex pt-1 justify-between'>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faClock} className='h-4 text-gray-400' />
              <span className='text-gray-500'>2022-01-09</span>
            </div>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faHeart} className='h-4 text-gray-400' />
              <span>88</span>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faTag} className='h-4 text-main' />
            <ul className='flex gap-2 pl-1 text-gray-500 text-sm underline'>
              <li>Web</li>
              <li>インフラ</li>
            </ul>
          </div>
        </article>

        <article className='w-1/2 p-5'>
          <ul className='flex gap-2 pb-2'>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>PHP</li>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>Docker</li>
          </ul>
          <h2 className='pb-5 font-bold text-xl'>[PHP]Docker環境でPDOを使用する方法</h2>
          <Image src="/images/php-thumbnail.png" alt="thumbnail of article" width={1000} height={1000} className='w-full' />
          <div className='flex pt-1 justify-between'>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faClock} className='h-4 text-gray-400' />
              <span className='text-gray-500'>2022-01-09</span>
            </div>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faHeart} className='h-4 text-gray-400' />
              <span>88</span>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faTag} className='h-4 text-main' />
            <ul className='flex gap-2 pl-1 text-gray-500 text-sm underline'>
              <li>Web</li>
              <li>インフラ</li>
            </ul>
          </div>
        </article>

        <article className='w-1/2 p-5'>
          <ul className='flex gap-2 pb-2'>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>PHP</li>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>Docker</li>
          </ul>
          <h2 className='pb-5 font-bold text-xl'>[PHP]Docker環境でPDOを使用する方法</h2>
          <Image src="/images/php-thumbnail.png" alt="thumbnail of article" width={1000} height={1000} className='w-full' />
          <div className='flex pt-1 justify-between'>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faClock} className='h-4 text-gray-400' />
              <span className='text-gray-500'>2022-01-09</span>
            </div>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faHeart} className='h-4 text-gray-400' />
              <span>88</span>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faTag} className='h-4 text-main' />
            <ul className='flex gap-2 pl-1 text-gray-500 text-sm underline'>
              <li>Web</li>
              <li>インフラ</li>
            </ul>
          </div>
        </article>

        <article className='w-1/2 p-5'>
          <ul className='flex gap-2 pb-2'>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>PHP</li>
            <li className='py-0 px-4 bg-category rounded-2xl text-sm'>Docker</li>
          </ul>
          <h2 className='pb-5 font-bold text-xl'>[PHP]Docker環境でPDOを使用する方法</h2>
          <Image src="/images/php-thumbnail.png" alt="thumbnail of article" width={1000} height={1000} className='w-full' />
          <div className='flex pt-1 justify-between'>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faClock} className='h-4 text-gray-400' />
              <span className='text-gray-500'>2022-01-09</span>
            </div>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faHeart} className='h-4 text-gray-400' />
              <span>88</span>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faTag} className='h-4 text-main' />
            <ul className='flex gap-2 pl-1 text-gray-500 text-sm underline'>
              <li>Web</li>
              <li>インフラ</li>
            </ul>
          </div>
        </article>

        <article className='w-1/2 p-5'>
          <ul className='flex gap-2 pb-2'>
            <li className='px-4 bg-category rounded-2xl text-sm'>PHP</li>
            <li className='px-4 bg-category rounded-2xl text-sm'>Docker</li>
          </ul>
          <h2 className='pb-5 font-bold text-xl'>[PHP]Docker環境でPDOを使用する方法</h2>
          <Image src="/images/php-thumbnail.png" alt="thumbnail of article" width={1000} height={1000} className='w-full' />
          <div className='flex pt-1 justify-between'>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faClock} className='h-4 text-gray-400' />
              <span className='text-gray-500'>2022-01-09</span>
            </div>
            <div className='flex gap-1 items-center'>
              <FontAwesomeIcon icon={faHeart} className='h-4 text-gray-400' />
              <span>88</span>
            </div>
          </div>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faTag} className='h-4 text-main' />
            <ul className='flex gap-2 pl-1 text-gray-500 text-sm underline'>
              <li>Web</li>
              <li>インフラ</li>
            </ul>
          </div>
        </article>
      </section>
    </>
  )
}

export default Articles;
