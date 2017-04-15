import Layout from '../components/MyLayout.js'
import Link from 'next/link';

function PostLink({ title }) {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
}

const titles = [
  'Hello Next.js',
  'Learn Next.js is awesome',
  'Deploy apps with Zeit',
];

export default function Index() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        {titles.map((title, i) => <PostLink key={`post-${i}`} title={title} />)}
      </ul>
    </Layout>
  );
}
