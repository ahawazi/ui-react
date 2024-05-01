import Header from "@/components/layout/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
