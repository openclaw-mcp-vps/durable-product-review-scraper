import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DurableReview – Aggregate Buy-It-For-Life Product Reviews",
  description: "Scrapes and aggregates reviews for durable products from Amazon, Reddit, and specialized forums. Get longevity scores to make smarter, sustainable purchases."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3a501409-b871-4a60-85c8-b525b6eca774"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
