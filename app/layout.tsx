import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";

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
    <html lang="en">
      <body
        className={`${poppins.variable} bg-[linear-gradient(to_bottom,_#9405fa_0%,_#000_9%)]  bg-opacity-10 antialiased`}
      >
        <div className="h-70 bg-black/50">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
