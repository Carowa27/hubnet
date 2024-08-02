import type { Metadata } from "next";
import "./globals.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import StyledComponentsRegistry from "@/libs/registry";

export const metadata: Metadata = {
  title: "Hubnet",
  description: "lorem ipsum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
