import { House, SquareMenu, ShoppingCart, Heart, ShoppingBag, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "@/store/auth-slice";
import { LogOut } from "lucide-react";
import CartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCart } from "@/store/shop/cart-slice";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import logo from "../../assets/img/logo.png";

function HeaderRight() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.ShopingCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openCartSheet, setOpenCartSheet] = useState(false);

  function handleLogout() {
    dispatch(LogoutUser());
  }

  useEffect(() => {
    dispatch(fetchCart(user?.id));
  }, [dispatch]);

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button className="bg-black" onClick={() => setOpenCartSheet(true)} variant="outline" size="icon">
          <ShoppingCart className="h-6 w-6 my-8 bg-slate-100" />
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
  const navigate = useNavigate();

  const categoryOptionMap = [
    { id: "lehenga", label: "Lehenga" },
    { id: "garara", label: "Garara" },
    { id: "sharara", label: "Sharara" },
    { id: "weddingSuit", label: "Wedding Suit" },
    { id: "cottonSuit", label: "Cotton Suit" },
    { id: "woollenSuit", label: "Woollen Suit" },
    { id: "readymateSuit", label: "Ready Mate Suit" },
    { id: "jaipuriSuit", label: "Jaipuri Suit" },
    { id: "chunriSuit", label: "Chunri Suit" }
  ];

  const categoryunStitchedMap = [
    { id: "cottonFabric", label: "Cotton Fabric" },
    { id: "silkFabric", label: "Silk Fabric" },
    { id: "chanderiSilkFabric", label: "Chanderi Silk Fabric" },
    { id: "organzaFabric", label: "Organza Fabric" },
    { id: "net", label: "Net" },
    { id: "cambricCottonFabric", label: "Cambric Cotton Fabric" }
  ];

  function handleNavigate(getCurrentItem, section) {
    sessionStorage.removeItem('filters');
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };
    sessionStorage.setItem('filters', JSON.stringify(currentFilter));
    navigate(`/shop/list`);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#ffecd1]">
      <div className="container flex h-16 items-center justify-between px-4">
        <img src={logo} alt="logo" className="w-[100px] object-cover" />
        <Link to='/shop/home' className="flex items-center">
          <span className="text-xl font-bold">THE LAWN COLLECTION</span>
        </Link>

        <div className="flex w-full max-w-sm items-center space-x-2 px-4">
          <Input type="search" placeholder="Search..." className="w-full" />
          <Button variant="default" size="icon" className="shrink-0">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="about" className="flex items-center space-x-1">
            <span className="text-sm">About</span>
          </Link>
          <Link to="profile" className="text-sm">
            My account
          </Link>
          <HeaderRight className='p-2' />
        </nav>
      </div>

      <div className="container flex border-t justify-center items-center">
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
                          onClick={() => handleNavigate(item, 'category')}
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
                          onClick={() => handleNavigate(item, 'category')}
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
  );
}

export default ShopingHeader;