import Link from "next/link";

const ArticleLinks = () => {
  return (
    <div className='flex text-center font-medium'>
      <Link href="#" className='p-4 w-1/2 text-xl text-main'>
          <p>おすすめ記事</p>
      </Link>
      <Link href="#" className='p-4 w-1/2 bg-main text-xl text-secondary'>
          <p>新着記事</p>
      </Link>
    </div>
  )
};

export default ArticleLinks;
