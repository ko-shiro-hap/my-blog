import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart, faTag} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='flex h-full'>

        <div className='w-4/5'>
          <main>
            <section className='w-full h-144 bg-hero-image bg-cover'>
              <span className='absolute block inset-0 w-4/5 h-144 bg-black opacity-40'></span>
              <div className='absolute top-20 left-5'>
                <h1 className='text-6xl text-secondary font-bold'>CODE<br/>GARAGE</h1>
              </div>
            </section>

            <section>
              <div className='flex text-center font-medium'>
                <div className='p-4 w-1/2 text-xl text-main'>
                  <p>おすすめ記事</p>
                </div>
                <div className='p-4 w-1/2 bg-main text-xl text-secondary'>
                  <p>新着記事</p>
                </div>
              </div>

              <div className='flex flex-wrap p-5'>
                <article className='w-1/2 p-5'>
                  <ul className='flex gap-2 pb-2'>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>PHP</li>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>Docker</li>
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
                    <ul className='flex gap-2 pl-1 text-gray-500 underline'>
                      <li>
                        <span>Web</span>
                      </li>
                      <li>
                        <span>インフラ</span>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className='w-1/2 p-5'>
                  <ul className='flex gap-2 pb-2'>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>PHP</li>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>Docker</li>
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
                    <ul className='flex gap-2 pl-1 text-gray-500 underline'>
                      <li>
                        <span>Web</span>
                      </li>
                      <li>
                        <span>インフラ</span>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className='w-1/2 p-5'>
                  <ul className='flex gap-2 pb-2'>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>PHP</li>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>Docker</li>
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
                    <ul className='flex gap-2 pl-1 text-gray-500 underline'>
                      <li>
                        <span>Web</span>
                      </li>
                      <li>
                        <span>インフラ</span>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className='w-1/2 p-5'>
                  <ul className='flex gap-2 pb-2'>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>PHP</li>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>Docker</li>
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
                    <ul className='flex gap-2 pl-1 text-gray-500 underline'>
                      <li>
                        <span>Web</span>
                      </li>
                      <li>
                        <span>インフラ</span>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className='w-1/2 p-5'>
                  <ul className='flex gap-2 pb-2'>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>PHP</li>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>Docker</li>
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
                    <ul className='flex gap-2 pl-1 text-gray-500 underline'>
                      <li>
                        <span>Web</span>
                      </li>
                      <li>
                        <span>インフラ</span>
                      </li>
                    </ul>
                  </div>
                </article>

                <article className='w-1/2 p-5'>
                  <ul className='flex gap-2 pb-2'>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>PHP</li>
                    <li className='py-0 px-4 bg-category rounded-2xl font-sm'>Docker</li>
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
                    <ul className='flex gap-2 pl-1 text-gray-500 underline'>
                      <li>
                        <span>Web</span>
                      </li>
                      <li>
                        <span>インフラ</span>
                      </li>
                    </ul>
                  </div>
                </article>

              </div>
            </section>
              <div className='text-center pb'>
            <Link href='#'>
              <p className='inline-block py-5 px-20 bg-main font-xl font-medium text-center text-secondary rounded-xl'>記事一覧へ</p>
            </Link>
              </div>

          </main>

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
            <span className='text-sm text-gray-400'>&copy; 2023 KOSHIRO IINO</span>
          </footer>
        </div>


        <nav className='w-1/5 bg-main border-l border-secondary'>

        </nav>
      </div>
      {/* <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main> */}
    </>
  )
}
