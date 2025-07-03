"use client"

import Link from "next/link"
import {usePathname} from "next/navigation"
import React from "react"
import {FaWrench} from "react-icons/fa"
import {FiMoon, FiSun} from "react-icons/fi"

function Navbar() {
  const [darkMode, setDarkMode] = React.useState(false)

  React.useEffect(() => {
    // Apply dark mode based on state after hydration
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev)
  }
  const currentPath = usePathname()

  const links = [
    {name: "Dashboard", href: "/"},
    {name: "Issues", href: "/issues"},
  ]

  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-lg">
          <FaWrench />
        </Link>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  currentPath === link.href ? "font-bold text-zinc-800" : ""
                } text-zinc-500 hover:text-zinc-800 hover:font-bold dark:text-zinc-100 dark:hover:text-zinc-300  transition-colors`}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-md text-xl text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme">
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  )
}

export default Navbar
