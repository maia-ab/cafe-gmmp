import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const lora = Lora({ subsets: ["latin"] });
 

export const metadata = {
  title: "Café Gmmp",
  description: "Café de especialidad en la provincia de Buenos Aires",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${lora.className} bg-beige`} >
      <Header />
        {children}
      <Footer />
        </body>
    </html>
  );
}
