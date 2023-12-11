import "./globals.css";
import { cx } from "@/src/utils";
import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  varible: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  varible: "--font-mr",
});

export const metadata = {
  title: "JMzBlog",
  description: "Let's Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          (cx(inter.variable, manrope.variable),
          "font-mr bg-light dark:bg-bark")
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
