export const SITE_URL = "https://findreamssolutions.com";
export const SITE_NAME = "Findreams Solutions";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images.png`,
  email: "findreamssolutions@gmail.com",
  telephone: "+91-9738812375",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tumakuru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  sameAs: [],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  url: `${SITE_URL}${path}`,
  areaServed: { "@type": "Country", name: "India" },
});