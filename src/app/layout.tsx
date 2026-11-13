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
    "Premium AI-powered creative workspace for video, photo, audio, and ad production.",
  keywords: [
    "AI Video Studio",
    "Video Editor",
    "AI Photo Studio",
    "AI Ad Studio",
    "Audio Studio",
    "Creative Workspace",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen bg-[#090812] text-white antialiased">
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
