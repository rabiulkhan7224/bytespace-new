import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// Setup Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Setup Satoshi from Local Files
const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace",
  description: "ByteSpace — modern software, built for teams.",
  icons: "/logo.png",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        poppins.variable,
        satoshi.variable,
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
