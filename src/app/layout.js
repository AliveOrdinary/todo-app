import "./globals.css";
import { Providers } from "./providers";
export const metadata = {
  title: "ToDo App | Frontend Mentor",
  description: "Made by AliveOrdinary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
