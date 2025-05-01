import "./globals.css";

export const metadata = {
  title: "{ zer0code }",
  description: "A portofolio website for zer0code",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="w-full m-0 flex flex-col items-center justify-center">
            <body className={ `antialiased w-full md:w-[50%] text-primary-foreground bg-background` }>
                { children }
            </body>
        </html>
    );
}
