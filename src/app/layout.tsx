import "./globals.css";
import styles from "./styles/layout.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
// import Bootmobile from "./components/bootnavmobile";
import Firstsec from "./components/firstsec";

import Sidebarmobile from "./components/sidebarmobile";
import Mobilesecnav from "./components/mobilesecnav";
import Footer from "./components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Copper Electronics And Hardwares",
  description:
    "We sell Electronic fixtures, Construction Materials and Camera System installments, ",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className={styles.paren}>
          <Navbar />
          <Firstsec />

          <Sidebarmobile />
          {/* <Bootmobile /> */}
          <Mobilesecnav />

          {children}
          <Footer />
        </section>
      </body>
    </html>
  );
}
