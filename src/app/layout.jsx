import Header from "./components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
// import { Inter } from "next/font/google";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata = {
  title: "Courses",
  description: "Courses App",
  keywords: "game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
