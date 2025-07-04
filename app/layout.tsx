import "@radix-ui/themes/styles.css"
import "./theme-config.css"
import "./globals.css"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import {Theme, ThemePanel} from "@radix-ui/themes"
import Navbar from "./Navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Simple issue tracker",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Theme accentColor="violet" grayColor="slate">
          <Navbar />
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  )
}
