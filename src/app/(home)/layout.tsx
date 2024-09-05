import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Toast from "../../components/toast";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "E-Librery | Book Sharing Platform",
    template: "%s | E-Library Book Sharing Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
