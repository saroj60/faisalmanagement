import React from 'react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://faisalnepal.com.np';

const SEO = ({
    title,
    description = "Govt. Authorized Manpower Agency in Nepal (Lic. No. 1289/074/75). Connecting skilled and professional talent from Nepal with leading employers in Kuwait, UAE, Qatar, Saudi Arabia & Malaysia.",
    keywords = "Faisal Management, Manpower Agency Nepal, Overseas Recruitment Kathmandu, Foreign Employment Nepal, Kuwait Manpower, Gulf Jobs Nepal",
    canonicalPath = '',
    image = `${DOMAIN}/favicon.png`,
    type = 'website',
    schema = null
}) => {
    const fullTitle = title 
        ? `${title} | Faisal Management`
        : 'Faisal Management | Premier Manpower Recruitment Agency in Nepal';
    
    const canonicalUrl = `${DOMAIN}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Faisal Management" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Optional Specific Page Schema (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
