import Header from "@/components/layout/header";
import "./globals.css";
import Footer from "@/components/footer/footer";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="rtl">
        <body className="min-h-screen">
        <Header/>
        <div>
            {children}
        </div>
        {/*<Footer/>*/}
        </body>
        </html>
    );
}
