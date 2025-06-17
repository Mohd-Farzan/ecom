"use client"

import { ShoppingCart, Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useDispatch, useSelector } from "react-redux"
import { LogoutUser } from "@/store/auth-slice"
import { LogOut } from "lucide-react"
import CartWrapper from "./cart-wrapper"
import { useEffect, useState } from "react"
import { fetchCart } from "@/store/shop/cart-slice"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import logo from "../../assets/img/logo.png"

function HeaderRight() {
  const { user } = useSelector((state) => state.auth)
  const { cartItems } = useSelector((state) => state.ShopingCart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [openCartSheet, setOpenCartSheet] = useState(false)

  function handleLogout() {
    dispatch(LogoutUser())
  }

  useEffect(() => {
    dispatch(fetchCart(user?.id))
  }, [dispatch])

    return (
    <div className="flex lg:items-center gap-2 lg:flex-row flex-col md:gap-4">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button className="relative bg-black p-0 h-9 w-9" onClick={() => setOpenCartSheet(true)} variant="outline" size="icon">
          <ShoppingCart className="h-5 w-5 text-white" />
          <span className="sr-only">Add to Cart</span>
        </Button>
        <CartWrapper setOpenCartSheet={setOpenCartSheet} cartItems={cartItems && cartItems.items && cartItems.items.length > 0 ? cartItems.items : []} />
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-slate-200">
            <AvatarFallback className="bg-zinc-800 text-white font-extrabold">
              {user?.userName ? user.userName[0].toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => navigate('/shop/account')}>Account</DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/shop/settings')}>Settings</DropdownMenuItem>
          <DropdownMenuItem onClick={() => { handleLogout() }}> <LogOut />Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShopingHeader() {
  const navigate = useNavigate()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const categoryOptionMap = [
    { id: "lehenga", label: "Lehenga" },
    { id: "garara", label: "Garara" },
    { id: "sharara", label: "Sharara" },
    { id: "weddingSuit", label: "Wedding Suit" },
    { id: "cottonSuit", label: "Cotton Suit" },
    { id: "woollenSuit", label: "Woollen Suit" },
    { id: "readymateSuit", label: "Ready Mate Suit" },
    { id: "jaipuriSuit", label: "Jaipuri Suit" },
    { id: "chunriSuit", label: "Chunri Suit" },
  ]

  const categoryunStitchedMap = [
    { id: "cottonFabric", label: "Cotton Fabric" },
    { id: "silkFabric", label: "Silk Fabric" },
    { id: "chanderiSilkFabric", label: "Chanderi Silk Fabric" },
    { id: "organzaFabric", label: "Organza Fabric" },
    { id: "net", label: "Net" },
    { id: "cambricCottonFabric", label: "Cambric Cotton Fabric" },
  ]

  function handleNavigate(getCurrentItem, section) {
    sessionStorage.removeItem("filters")
    const currentFilter = {
      [section]: [getCurrentItem.id],
    }
    sessionStorage.setItem("filters", JSON.stringify(currentFilter))
    navigate(`/shop/list`)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#ffecd1]">
      {/* Top header section */}
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={logo || "/placeholder.svg"} alt="logo" className="w-[60px] md:w-[100px] object-cover mt-2" />
          <Link to="/shop/home" className="hidden md:flex items-center">
            <span className="text-sm md:text-xl font-bold">THE LAWN COLLECTION</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Search bar - hidden on mobile unless toggled */}
        <div
          className={`${isSearchOpen ? "flex absolute top-16 left-0 right-0 p-2 bg-[#ffecd1] z-50" : "hidden"} md:flex w-full max-w-sm items-center space-x-2 px-4`}
        >
          <Input type="search" placeholder="Search..." className="w-full" />
          <Button variant="default" size="icon" className="shrink-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="about" className="flex items-center space-x-1">
            <span className="text-sm">About</span>
          </Link>
          <Link to="profile" className="text-sm">
            My account
          </Link>
        </nav>

        {/* Mobile search toggle and cart/profile */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <HeaderRight />
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="p-4 space-y-4">
            <Link to="/shop/home" className="block py-2 font-medium">
              HOME
            </Link>

            <div className="py-2">
              <div className="font-medium mb-2">STITCHED</div>
              <div className="pl-4 grid grid-cols-2 gap-2">
                {categoryOptionMap.map((item) => (
                  <div key={item.id} onClick={() => handleNavigate(item, "category")} className="py-1 text-sm">
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="py-2">
              <div className="font-medium mb-2">UNSTITCHED</div>
              <div className="pl-4 grid grid-cols-2 gap-2">
                {categoryunStitchedMap.map((item) => (
                  <div key={item.id} onClick={() => handleNavigate(item, "category")} className="py-1 text-sm">
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            <Link to="enquiry" className="block py-2 font-medium">
              ENQUIRY
            </Link>

            <div className="pt-2 border-t">
              <Link to="about" className="block py-2 text-sm">
                About
              </Link>
              <Link to="profile" className="block py-2 text-sm">
                My account
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop category navigation */}
      <div className="hidden md:flex container border-t justify-center items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center justify-center space-x-8 py-2">
            <NavigationMenuItem>
              <Link to="/shop/home" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>HOME</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Stitched Categories */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>STITCHED</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {(categoryOptionMap || []).map((item) => (
                    <li key={item.id}>
                      <NavigationMenuLink asChild>
                        <div
                          onClick={() => handleNavigate(item, "category")}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {item.label}
                        </div>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Unstitched Categories */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>UNSTITCHED</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {(categoryunStitchedMap || []).map((item) => (
                    <li key={item.id}>
                      <NavigationMenuLink asChild>
                        <div
                          onClick={() => handleNavigate(item, "category")}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          {item.label}
                        </div>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="enquiry" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>ENQUIRY</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

export default ShopingHeader
