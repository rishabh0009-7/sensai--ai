import Header from "@/components/ui/Header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <title>Sansei-AI</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={` ${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Header */}
            <Header />

            {/* Main Content - Grow to push the footer down */}
            <main className="min-h-screen">{children}</main>

            {/* Footer */}
            <footer className="bg-muted/50 py-12">
              <div className="con```tainer mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Rishabh</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
