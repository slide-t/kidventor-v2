import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { StudentProvider } from "@/context/StudentContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kidventor.edu.ng"),

  title: {
    default: "KidVentor | Learn Digital Skills Through Adventure",
    template: "%s | KidVentor",
  },

  description:
    "Africa's leading digital technology and coding learning platform for children, teenagers, parents, schools, and beginners.",

  applicationName: "KidVentor",

  authors: [
    {
      name: "KidVentor Team",
    },
  ],

  creator: "KidVentor",

  publisher: "KidVentor",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "KidVentor",
    description: "Africa's Digital Technology Learning Platform",
    url: "https://kidventor.edu.ng",
    siteName: "KidVentor",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KidVentor",
    description: "Africa's Digital Technology Learning Platform",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth antialiased"
    >
      <body
  className={`${poppins.className} min-h-screen bg-[#050816] text-white`}
>
  <StudentProvider>
    {children}
  </StudentProvider>
</body>
    </html>
  );
}