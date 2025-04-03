import "./globals.css";


export const metadata = {
  title: "Investment Bank of Africa",
  description: "Investment Bank of Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
