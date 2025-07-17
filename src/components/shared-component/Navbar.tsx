"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, ShoppingCart, Menu, Clover } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Shop", href: "/shop", current: false },
  { name: "About us", href: "/about", current: false },
  { name: "Blog", href: "/blog", current: false },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const cartItemCount = 1 // This would come from your cart state

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Clover className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">Fresh Harvests</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${item.current ? "text-green-600" : "text-gray-700"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Favorites, Cart, Sign in */}
          <div className="flex items-center space-x-4">
            {/* Favorites */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-green-600"
            >
              <Heart className="h-4 w-4" />
              <span className="text-sm">Favorites</span>
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative flex items-center space-x-1 text-gray-700 hover:text-green-600"
            >
              <div className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </div>
              <span className="text-sm hidden sm:inline">Cart</span>
            </Button>

            {/* Sign in */}
            <Button
              variant="outline"
              size="sm"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
            >
              Sign in
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-4 mt-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-base font-medium transition-colors hover:text-green-600 ${item.current ? "text-green-600" : "text-gray-700"
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="pt-4 border-t">
                      <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-green-600">
                        <Heart className="h-4 w-4 mr-2" />
                        Favorites
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
