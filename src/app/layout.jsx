import { Cairo } from "next/font/google";
import TopNavbar from "@c/organisms/TopNavbar";
import "./globals.css";
import AppProvider from "@/providers/AppProvider";
import Global from "@/providers/Global";
import { Suspense } from "react";
import Loading from "./loading";

const cairoMain = Cairo({
  variable: "--font-cairo-main",
  subsets: ["arabic", "latin", "latin-ext"],
  weight: ["200", "400", "600", "800"],
});

export const metadata = {
  title: process.env.APP_TITLE,
  description: "This is our first NextJS Project",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      className={`${cairoMain.variable} h-full antialiased bg-amber-400 border`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <AppProvider>
          <Suspense fallback={<Loading />}>
            <TopNavbar />
            {children}
            <Global />
          </Suspense>
        </AppProvider>
      </body>
    </html>
  );
}
