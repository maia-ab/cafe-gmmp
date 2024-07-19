import { Lora } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const lora = Lora({ subsets: ["latin"] });
 

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
