import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Спільна вікі всесвіту",
  description: "База знань і матеріалів",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}