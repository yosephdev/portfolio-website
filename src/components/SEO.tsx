import { Helmet } from 'react-helmet-async';
import { config } from '../config/environment';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'profile';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
}

const SEO: React.FC<SEOProps> = ({
    title = 'Yoseph Berhane - Full Stack Developer & AI Enthusiast',
    description = 'Full Stack Developer specializing in Python, Django, React, and AI-powered web applications. Building innovative solutions with modern technologies.',
    keywords = ['Full Stack Developer', 'Python', 'Django', 'React', 'AI', 'Machine Learning', 'Web Development'],
    image = `${config.siteUrl}/og-image.jpg`,
    url = config.siteUrl,
    type = 'website',
    publishedTime,
    modifiedTime,
    author = 'Yoseph Berhane',
    tags = []
}) => {
    const fullTitle = title.includes('Yoseph Berhane') ? title : `${title} | Yoseph Berhane`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="author" content={author} />
            <link rel="canonical" href={url} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Yoseph Berhane" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:creator" content="@yosephbet" />

            {/* Article specific */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}
            {type === 'article' && tags.map(tag => (
                <meta key={tag} property="article:tag" content={tag} />
            ))}

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta httpEquiv="Content-Language" content="en" />
        </Helmet>
    );
};

export default SEO;