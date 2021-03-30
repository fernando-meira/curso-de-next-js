import Head from 'next/head';

interface ISEOProps {
  title: string;
  image?: string;
  description?: string;
  sholdIndexPage?: boolean;
  sholdExcludeTitleSuffix?: boolean;
}

export default function SEO({
  title,
  image,
  description,
  sholdIndexPage = true,
  sholdExcludeTitleSuffix = false
}: ISEOProps) {
  const pageTitle = `${title} ${!sholdExcludeTitleSuffix ? "| DevCommerce" : ""}`;

  return (
    <Head>
      <title>{pageTitle}</title>


      { description && <meta name="description" content={description} />}
      {!sholdIndexPage && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  )
}