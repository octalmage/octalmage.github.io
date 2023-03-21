import { NextSeo } from 'next-seo';
import seoData from '../next-seo.config';

export default function Seo({ page }) {
    const { title, excerpt, slug, coverImage } = page;
    return (
        <>
            <NextSeo
                title={title}
                titleTemplate={seoData.openGraph.title}
                defaultTitle={seoData.openGraph.title}
                description={seoData.openGraph.description}
                canonical={seoData.openGraph.url}
                openGraph={{
                    type: 'website',
                    url: `${seoData.openGraph.url}`,
                    title: `${title}`,
                    description: `${seoData.openGraph.description}`,
                    locale: 'en_EN',
                    images: [],
                    site_name: 'vjy.me',
                }}
                twitter={{
                    handle: '@octalmage',
                    cardType: 'summary_large_image',
                }}
                additionalMetaTags={[{
                    name: 'keywords',
                    content: `${seoData.openGraph.keywords}`
                },
                {
                    httpEquiv: 'x-ua-compatible',
                    content: 'IE=edge; chrome=1'
                }]}
                robotsProps={{
                    nosnippet: false,
                    notranslate: true,
                    noimageindex: false,
                    noarchive: false,
                    notranslate: false,
                    maxSnippet: -1,
                    maxImagePreview: 'large',
                    maxVideoPreview: -1,
                }}
            />
        </>
    );
}