import "@radix-ui/themes/styles.css"
import "./globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import {Theme} from "@radix-ui/themes"
import Navbar from "./Navbar"

const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Simple issue tracker",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Navbar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  )
}
