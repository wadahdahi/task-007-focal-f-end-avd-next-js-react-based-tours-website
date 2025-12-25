import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// LOCAL FONTS

export const openSans = localFont({
  variable: "--font-open-sans",
  display: "swap",
  src: [
    {
      path: "../public/font/OpenSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/OpenSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/OpenSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/OpenSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const podcast = localFont({
  variable: "--font-podcast",
  display: "swap",
  src: [
    {
      path: "../public/font/Podcast.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

// LOCAL FONTS ENDS

export const metadata = {
  title: "Tours to Tuscany",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${podcast.variable}`}>
      <body className="flex flex-col w-full h-full">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
