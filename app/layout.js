import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: "readerzinho",
  description: "Leitor de quadrinhos e documentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
