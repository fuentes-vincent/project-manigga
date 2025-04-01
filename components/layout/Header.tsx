"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme/ThemeToggle"

export function Header() {
  return (
    <>
  {/* <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"> */}
      {/* <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2 pl-4">
            <span className="font-bold">Manigga</span>
          </Link>
        </div>
       
      </div> */}
       <div className="flex flex-1 items-right justify-end space-x-2">
        
        <div className="flex items-right pr-4">
            <ThemeToggle />
          </div>
        </div>
    {/* </header> */}
    </>
  
  )
} 