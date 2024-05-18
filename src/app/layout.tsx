import Header from "@/components/layout/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className="min-h-screen">
        {/*<Header />*/}
        <div className="h-36 w-screen bg-neutral-400">

        </div>
        {children}
      </body>
    </html>
  );
}
