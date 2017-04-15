import Layout from '../components/MyLayout.js'

export default function Post({ url }) {
  return (
    <Layout>
      <h1>{url.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  )
}
