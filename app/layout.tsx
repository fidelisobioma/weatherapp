import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";

const bricolage = localFont({
  src: [
    {
      path: "../public/fonts/Bricolage_Grotesque/static/BricolageGrotesque-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bricolage",
  display: "swap",
});

const dmsans = localFont({
  src: [
    {
      path: "../public/fonts/DM_Sans/static/DMSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/DM_Sans/static/DMSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/DM_Sans/static/DMSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/DM_Sans/static/DMSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/DM_Sans/static/DMSans-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-dmsans",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Weather Now",
  description: "Weather forcast",
};
// const DM_Sans{}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} ${dmsans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
