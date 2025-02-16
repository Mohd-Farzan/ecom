"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { useDispatch, useSelector } from "react-redux"
import {  Heart, ShoppingBag, User, LogOut, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import { shopingHeaderMenuItems } from "@/config"
import { LogoutUser } from "@/store/auth-slice"
import { fetchCart } from "@/store/shop/cart-slice"
import CartWrapper from "./cart-wrapper"
import { Link } from "react-router-dom"

function MenuItems() {
  const router = useRouter()

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters")
    const currentFilter =
      getCurrentMenuItem.id !== "home"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null
    sessionStorage.setItem("filters", JSON.stringify(currentFilter))
    router.push(getCurrentMenuItem.path)
  }

  return (
    <nav className="flex items-center gap-6">
      {shopingHeaderMenuItems.map((menuItem) => (
        <button
          key={menuItem.id}
          onClick={() => handleNavigate(menuItem)}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {menuItem.label}
        </button>
      ))}
    </nav>
  )
}

function HeaderRight() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { user } = useSelector((state) => state.auth)
  const { cartItems } = useSelector((state) => state.ShopingCart)
  const [openCartSheet, setOpenCartSheet] = useState(false)

  function handleLogout() {
    dispatch(LogoutUser())
  }

  useEffect(() => {
    dispatch(fetchCart(user?.id))
  }, [dispatch, user?.id])

  return (
    <div className="flex items-center gap-4">
      <Link href="/wishlist" className="flex items-center gap-2 text-sm font-medium">
        <span className="hidden md:inline">My Favourite</span>
        <Heart className="h-5 w-5" />
        <span className="hidden md:inline">Wishlist</span>
      </Link>

      <Sheet open={openCartSheet} onOpenChange={setOpenCartSheet}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-red-600 text-[10px] font-bold text-white">
              {cartItems?.items?.length || 0}
            </span>
          </Button>
        </SheetTrigger>
        <CartWrapper setOpenCartSheet={setOpenCartSheet} cartItems={cartItems?.items || []} />
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {user?.userName ? user.userName[0].toUpperCase() : "U"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => router.push("/shop/account")}>
            <User className="mr-2 h-4 w-4" />
            <span>Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/shop/settings")}>
            <User className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export function ShoppingHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#FFE4C4]">
      <div className="container flex h-16 items-center gap-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(83)-EEHE0dPhniyUloDrl3erabCBszfTwh.png"
            alt="AL-HARAAM Logo"
            width={140}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        <div className="flex flex-1 items-center gap-2 md:gap-4">
          <form className="flex-1 md:max-w-2xl">
            <div className="relative">
              <Input type="search" placeholder="Search..." className="w-full bg-white pr-8" />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full rounded-l-none bg-black hover:bg-black/90"
              >
                {/* <Search className="h-4 w-4 text-white" /> */}
                <span className="sr-only">Search</span>
              </Button>
            </div>
          </form>
        </div>

        <div className="hidden md:block">
          <MenuItems />
        </div>

        <HeaderRight />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <MenuItems />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

