export default function SchemaMarkup() {
  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Ecomedica Centro Medico - Ecografias y Rayos X Teusaquillo",
    alternateName: "Ecomedica Centro Medico",
    description:
      "Centro de diagnóstico por imagen con tecnología de vanguardia en Teusaquillo, Bogotá. Ecografías, rayos X digitales y salud ocupacional con resultados en 15 minutos.",
    url: "https://ecomedica.co",
    telephone: "+573115212600",
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
      latitude: 4.6228039,
      longitude: -74.0698246,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
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
      "https://www.google.com/maps/place/Ecomedica+Centro+M%C3%A9dico+IPS+-+Ecograf%C3%ADas+y+Rayos+X+Teusaquillo/@4.6228039,-74.0698246,17z",
      "https://www.facebook.com/ecomedica",
      "https://www.instagram.com/ecomedica",
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.ecomedica.co/#business",
    name: "Ecomedica Centro Médico IPS - Ecografías y Rayos X Teusaquillo",
    description:
      "Centro de diagnóstico médico en Teusaquillo, Bogotá. Ecografías de alta claridad, rayos X digitales y laboratorio clínico con tecnología avanzada.",
    url: "https://www.ecomedica.co",
    telephone: "+573115212600",
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
      latitude: 4.6228039,
      longitude: -74.0698246,
    },
    hasMap: "https://maps.google.com/?cid=6652494957640244593",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 4.6228039,
        longitude: -74.0698246,
      },
      geoRadius: "7000",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Se necesita orden médica para realizarse una ecografía en Ecomédica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, en Ecomédica atendemos pacientes particulares sin necesidad de orden médica previa. Puedes agendar tu turno prioritario directamente.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tardan en entregar los resultados de ecografías y rayos X?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Contamos con un circuito express: entregamos su informe oficial firmado por médicos especialistas en 15 minutos después de finalizar el examen.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es el costo de una ecografía particular en Bogotá?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestros estudios ecográficos y radiológicos particulares inician desde $90.000 COP con tecnología de alta gama diagnóstica 2D, 3D, 4D y HD.",
        },
      },
      {
        "@type": "Question",
        name: "¿Dónde está ubicado el Centro Médico Ecomédica y cuál es el horario de atención?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Estamos ubicados en la Calle 34 # 14 - 33, Teusaquillo, Bogotá D.C. Atendemos de lunes a sábado de 7:00 a.m. a 7:00 p.m.",
        },
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
