// pages/index.js
import Head from 'next/head';
import UpvoteSection from '../components/UpvoteSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Product Hunt Upvote Section</title>
        <meta name="description" content="A copy of the Product Hunt upvote section using Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UpvoteSection />
      </main>
    </div>
  );
}


