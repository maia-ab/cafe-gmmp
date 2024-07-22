import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const lora = Lora({ subsets: ["latin"] });
 

export const metadata = {
  title: "Cafe Gmmp",
  description: "Cafe de especialidad en la provincia de Buenos Aires",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-beige`} >
      <Header />
        {children}
      <Footer />
        </body>
    </html>
  );
}
