import "./globals.css";
import "./bootstrap.min.css";
import "./style.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatter App",
  description: "Chatter Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ backgroundColor: "rgb(0, 136, 255)" }}>
        <div className="container-sm text-center">
          <header className="row">
            <div className="col">Chatter</div>
          </header>
          {children}
        </div>
        <script src="/assets/js/bootstrap.min.js"></script>
      </body>
    </html>
  );
}
