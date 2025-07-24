import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose weights you need
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Brainly - Your Second Brain",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`antialiased bg-[#333348]`}>{children}</body>
    </html>
  );
}
