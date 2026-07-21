import type { Metadata } from "next";
import { Alegreya, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin", "greek"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Δικηγορικό Γραφείο Παπαδόπουλος | Αστικό Δίκαιο",
  description:
    "Δικηγορικό Γραφείο Παπαδόπουλος — εξειδίκευση σε Αστικό, Ενοχικό και Κληρονομικό Δίκαιο, καθώς και Δίκαιο Ακινήτων στην Αθήνα.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${alegreya.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
