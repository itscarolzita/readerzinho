import "./globals.css";

export const metadata = {
  title: "Readerzito",
  description: "Leitor de quadrinhos e documentos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}