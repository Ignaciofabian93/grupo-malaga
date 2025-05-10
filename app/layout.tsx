import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Grupo Málaga",
  description: "Corretaje de Propiedades en Chile",
  keywords:
    "Grupo Málaga, propiedades, corretaje, departamentos, casas, viviendas, asesoría, viviendas en chile, corredora de propiedades, grupomalaga.cl, www.grupomalaga.cl",
  authors: [
    {
      name: "Grupo Málaga",
      url: "https://www.grupomalaga.cl",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Grupo Málaga",
    description: "Corretaje de Propiedades en Chile",
    images: ["https://grupomalaga.cl/images/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <meta
        property="og:image"
        content="https://www.grupomalaga.cl/images/favicon.png"
      ></meta>
      <meta property="og:site_name" content="grupomalaga.cl"></meta>
      <meta property="og:title" content="Grupo Málaga"></meta>
      <meta
        property="og:description"
        content="Corretaje de Propiedades en Chile"
      />
      <meta property="og:url" content="https://www.grupomalaga.cl/"></meta>

      <meta
        property="twitter:image"
        content="https://www.grupomalaga.cl/images/favicon.png"
      ></meta>
      <meta property="twitter:card" content="Grupo Málaga"></meta>
      <meta
        property="twitter:title"
        content="Grupo Málaga - Corretaje de Propiedades en Chile"
      ></meta>
      <meta
        property="twitter:description"
        content="Corretaje de Propiedades en Chile"
      ></meta>

      <link rel="icon" href="/favicon.png" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
      <body className={`${roboto.variable} antialiased`}>
        <ToastContainer
          position="top-center"
          theme="light"
          autoClose={2000}
          icon={undefined}
        />

        {children}
      </body>
    </html>
  );
}
