import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge Academy",
  description: "Aprenda tecnologia com aulas, exercícios, projetos e desafios integradores em português.",
  icons: {
    icon: "/learn/icon.svg",
    shortcut: "/learn/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
