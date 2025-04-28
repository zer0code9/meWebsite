import localFont from "next/font/local";
import "./globals.css";
import "./scss.css";
import "@/components/website.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "{ zer0code }",
  description: "A portofolio website for zer0code",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="w-full m-0 flex flex-col items-center justify-center">
            <body className={ `${geistSans.variable} ${geistMono.variable} antialiased w-full md:w-[50%] text-primary-foreground bg-background` }>
                { children }
            </body>
        </html>
    );
}
