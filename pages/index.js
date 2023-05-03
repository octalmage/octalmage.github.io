import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';

export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://vjy.me/preview.jpg'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
      <div style={{ position: 'fixed', bottom: '15px', right: '15px' }}>
        <a title="View on IPFS" href="https://octalma-ge.ipns.dweb.link">
          <img alt="IPFS" style={{ width: '50px' }} src="https://upload.wikimedia.org/wikipedia/commons/1/18/Ipfs-logo-1024-ice-text.png" />
        </a>
      </div>
    </>
  )
}

