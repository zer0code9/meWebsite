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
        <html lang="en">
            <body className={ `${geistSans.variable} ${geistMono.variable} antialiased` }>
                { children }
            </body>
        </html>
    );
}
