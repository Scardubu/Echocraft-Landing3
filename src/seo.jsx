import { Helmet } from 'react-helmet';

const SEO = () => (
  <Helmet>
    <title>Echocraft | Intelligent Systems Architecture</title>
    <meta name="description" content="AI-driven analytics, blockchain solutions, and automated workflows for your tech stack" />
    <meta name="keywords" content="AI, blockchain, DevOps, data automation, smart contracts" />
    
    {/* Open Graph */}
    <meta property="og:title" content="Echocraft | Intelligent Systems Architecture" />
    <meta property="og:description" content="Transform your tech stack with AI-powered solutions" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://echocraft.example.com" />
    <meta property="og:image" content="https://echocraft.example.com/og-image.jpg" />
    
    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Echocraft | Intelligent Systems Architecture" />
    <meta name="twitter:description" content="Building the future of automated tech infrastructure" />
    <meta name="twitter:image" content="https://echocraft.example.com/twitter-card.jpg" />
    
    {/* Schema.org */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Echocraft",
        "url": "https://echocraft.example.com",
        "logo": "https://echocraft.example.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+234-902-316-4665",
          "contactType": "Customer service"
        }
      })}
    </script>
  </Helmet>
);

export default SEO;
