export default function SchemaMarkup() {
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Ecomédica Centro Médico - Ecografías y Rayos X Teusaquillo",
    alternateName: "Ecomédica IPS",
    description:
      "Centro de diagnóstico por imagen con tecnología de vanguardia en Teusaquillo, Bogotá. Ecografías, rayos X digitales y salud ocupacional con resultados en 30 minutos.",
    url: "https://ecomedica.co",
    telephone: "+573245134768",
    email: "info@ecomedica.co",
    image: "https://ecomedica.co/logo.png",
    logo: "https://ecomedica.co/logo.png",
    priceRange: "$$",
    currenciesAccepted: "COP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 34 # 14 - 33",
      addressLocality: "Teusaquillo",
      addressRegion: "Bogotá D.C.",
      postalCode: "111311",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.6225,
      longitude: -74.0708,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "13:00",
      },
    ],
    medicalSpecialty: [
      {
        "@type": "MedicalSpecialty",
        name: "Diagnostic Radiology",
      },
    ],
    availableService: [
      {
        "@type": "MedicalTest",
        name: "Ecografía Obstétrica",
        description: "Ecografía obstétrica con equipos de alta resolución de última generación",
      },
      {
        "@type": "MedicalTest",
        name: "Ecografía Doppler",
        description: "Ecografía Doppler vascular y fetal con tecnología de alta resolución",
      },
      {
        "@type": "MedicalTest",
        name: "Rayos X Digital",
        description: "Radiografía digital con mínima exposición y resultados inmediatos",
      },
      {
        "@type": "MedicalTest",
        name: "Exámenes de Ingreso Laboral",
        description: "Circuito express de exámenes ocupacionales para empresas",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "48",
      bestRating: "5",
    },
    sameAs: [
      "https://www.facebook.com/ecomedica",
      "https://www.instagram.com/ecomedica",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ecomedica.co/#business",
    name: "Ecomédica Centro Médico",
    description:
      "Centro de diagnóstico médico en Teusaquillo, Bogotá. Ecografías de alta claridad, rayos X digitales y laboratorio clínico con tecnología avanzada.",
    url: "https://ecomedica.co",
    telephone: "+573245134768",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 34 # 14 - 33",
      addressLocality: "Teusaquillo",
      addressRegion: "Bogotá D.C.",
      postalCode: "111311",
      addressCountry: "CO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 4.6225,
      longitude: -74.0708,
    },
    hasMap: "https://maps.google.com/?cid=ECOMEDICA_CID",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 4.6225,
        longitude: -74.0708,
      },
      geoRadius: "7000",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalClinicSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
