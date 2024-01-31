import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout-container.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Tracker App",
  description: "Movie Tracker App by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <Header />
          <div className="movieTMB-layout">{children}</div>
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
