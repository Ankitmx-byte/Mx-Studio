import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScrollProvider } from "@/components/animations/SmoothScrollProvider";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mx Studio | Create Beyond Limits",
    template: "%s | Mx Studio",
  },
  description:
    "Your Entire Creative Workflow, Powered by AI. Premium creative workspace for video editing, photo enhancement, audio production, and ad generation.",
  keywords: [
    "AI Video Studio",
    "Professional Video Editor",
    "AI Photo Studio",
    "AI Ad Studio",
    "Audio Studio",
    "Creative Workspace",
    "Mx Studio",
  ],
};

export const viewport: Viewport = {
  themeColor: "#090812",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-[#090812] font-sans text-white antialiased selection:bg-[#F13DBB]/30 selection:text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
            <Toaster position="bottom-right" richColors />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
