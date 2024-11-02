import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ibm = localFont({
  src: "./fonts/IBMPlexSerif-Regular.woff",
  variable: "--font-ibm",
});
const inter = localFont({
  src: "./fonts/Inter-VariableFontopszwght.woff",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ClickCash",
  description: "ClickCash is a digital modern banking platform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
