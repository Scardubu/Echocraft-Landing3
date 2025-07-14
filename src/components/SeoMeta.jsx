// components/SeoMeta.jsx
import { Helmet } from 'react-helmet';

export default function SeoMeta() {
  return (
    <Helmet>
      <title>Echocraft | Intelligent Systems Architecture</title>
      <meta name="description" content="AI-driven analytics, blockchain solutions, and automated workflows for your tech stack" />
      <meta property="og:image" content="/og-image.jpg" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Echocraft",
          url: "https://echocraft.example.com"
        })}
      </script>
    </Helmet>
  );
}
