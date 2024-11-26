import type { Metadata } from "next";
import "../styles/global.scss";
import Header from "@/components/header/Header";
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
