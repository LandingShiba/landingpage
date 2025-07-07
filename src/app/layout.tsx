import type { ReactNode } from "react";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root level,
// a layout file is required, even if it's just passing through its children.
export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body className={`${roboto.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
