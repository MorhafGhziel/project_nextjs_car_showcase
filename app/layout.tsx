import type { Metadata } from "next"; // Importing the Metadata type for defining page metadata
import "./globals.css"; // Importing global styles
import Footer from "@/components/Footer"; // Importing the Footer component
import Navbar from "@/components/Navbar"; // Importing the Navbar component

// Define metadata for the entire application
export const metadata: Metadata = {
  title: "Car Hub", // The title of the app
  description: "Discover the best cars in the world.", // A brief description of the app
};

// RootLayout component: This serves as the main layout for your application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Define the type of `children` as React nodes (components, elements, etc.)
}>) {
  return (
    <html lang="en">
      {" "}
      {/* Specify the language of the document */}
      <body className="relative">
        {" "}
        {/* Apply a relative class for layout positioning */}
        {/* Render the Navbar at the top of the page */}
        <Navbar />
        {/* Render the content passed as children */}
        {children}
        {/* Render the Footer at the bottom of the page */}
        <Footer />
      </body>
    </html>
  );
}
