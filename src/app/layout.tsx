import type { Metadata } from "next";
import "../styles/global.scss";
import Header from "@/components/header/Header";
import Script from "next/script";
import { Footer } from "@/components/footer/Footer";
import { WindSong, Rajdhani, Gruppo } from "next/font/google";

const windSong = WindSong({ weight: ["400", "500"], subsets: ["latin"] });
const gruppo = Gruppo({ weight: "400", subsets: ["latin"] });
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "William Mauroux",
  description: "Portfolio de William Mauroux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-C5VL2ZPKPV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C5VL2ZPKPV');
            `,
          }}
        />
      </head>
      <body
        className={` ${rajdhani.className} ${windSong.className}  ${gruppo.className} `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
