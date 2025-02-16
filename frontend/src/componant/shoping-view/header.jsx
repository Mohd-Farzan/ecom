import { House, SquareMenu, ShoppingCart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categoryOptionMap, categoryunStitchedMap, shopingHeaderMenuItems } from "@/config";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Ensure DropdownMenuContent is imported
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "@/store/auth-slice";
import {LogOut } from "lucide-react"
import CartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCart } from "@/store/shop/cart-slice";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

function HeaderRight() {
  const { user } = useSelector((state) => state.auth);
  const{cartItems}=useSelector((state)=>state.ShopingCart)
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const[openCartSheet,setOpenCartSheet]=useState(false);

  function handleLogout(){
    dispatch(LogoutUser())
  }
  useEffect(()=>{
    dispatch(fetchCart(user?.id))
    
  },[dispatch])
  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4 ">
      <Sheet open={openCartSheet} onOpenChange={()=>setOpenCartSheet(false)}>
      <Button className='bg-black ' onClick={()=>setOpenCartSheet(true)}variant='outline' size='icon'>
        <ShoppingCart  className="h-6 w-6 my-8 bg-slate-100" />
        <span className="sr-only ">Add to Cart</span>
      </Button>
      <CartWrapper setOpenCartSheet={setOpenCartSheet} cartItems={cartItems && cartItems.items && cartItems.items.length > 0? cartItems.items:[]}/>
      </Sheet>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className='bg-slate-200'>
            <AvatarFallback className='bg-zinc-800 text-white font-extrabold'>
              {user?.userName ? user.userName[0].toUpperCase() : 'U'}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* Add dropdown menu items here */}
          <DropdownMenuItem onClick={()=>navigate('/shop/account')}>Account</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>navigate('/shop/settings')}>Settings</DropdownMenuItem>
          <DropdownMenuItem onClick={()=>{handleLogout()}}> <LogOut/>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ShopingHeader(){
  const navigate=useNavigate();
  function handleNavigate(getCurrentMenuITem){
    sessionStorage.removeItem('filters');
    const currentFilter=getCurrentMenuITem.id!=='home'?{
      category:[getCurrentMenuITem.id]
    }:null
    sessionStorage.setItem('filters', JSON.stringify(currentFilter))
    navigate(getCurrentMenuITem.path)
  }
  return (
    // <header className="w-full border-b bg-[#edaf82]">
    //   <div className="flex h-16 items-center justify-between px-4 md:px-6">
    //     <Link to='/shop/home' className="flex items-center gap-2">
    //       <House className="h-6 w-6" />
    //       <span>Home</span>
    //     </Link>
    //     <Sheet>
    //       <SheetTrigger asChild>
    //         <Button variant="outline" size='icon' className='lg:hidden'>
    //           <SquareMenu className='h-6 w-6' />
    //           <span className="sr-only">Toggle header menu</span>
    //         </Button>
    //       </SheetTrigger>
    //       <SheetContent side='right' className='w-full max-w-xs'> {/* Corrected mx-w-xs to max-w-xs */}
    //         <MenuItems />
    //         <HeaderRight/>
    //       </SheetContent>
    //     </Sheet>
    //     <div className="hidden lg:block">
    //       <MenuItems />
    //     </div>
    //       <div className="hidden lg:block">
    //         <HeaderRight />
    //       </div>
  
    //   </div>
    // </header>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/home" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>HOME</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>STITCHED</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {categoryOptionMap.map((item) => (
                <li key={item.path}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div onClick={()=>handleNavigate(item)} className="text-sm font-medium leading-none">{item.label}</div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>UNSTITCHED</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {categoryunStitchedMap.map((item) => (
                <li key={item.path}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div onClick={()=>handleNavigate(item)} className="text-sm font-medium leading-none">{item.label}</div>
                      
                    </Link>
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
  );
}

export default ShopingHeader;
