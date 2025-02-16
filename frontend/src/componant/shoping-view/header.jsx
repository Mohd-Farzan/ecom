import { House, SquareMenu, ShoppingCart, LogOut } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categoryOptionMap, categoryunStitchedMap } from "@/config";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "@/store/auth-slice";
import CartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCart } from "@/store/shop/cart-slice";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

// function HeaderRight() {
//   const { user } = useSelector((state) => state.auth);
//   const { cartItems } = useSelector((state) => state.ShopingCart);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [openCartSheet, setOpenCartSheet] = useState(false);

//   function handleLogout() {
//     dispatch(LogoutUser());
//   }

//   useEffect(() => {
//     if (user?.id) {
//       dispatch(fetchCart(user.id));
//     }
//   }, [dispatch, user?.id]);

//   return (
//     <div className="flex lg:items-center lg:flex-row flex-col gap-4">
//       <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
//         <Button
//           className="bg-black"
//           onClick={() => setOpenCartSheet(true)}
//           variant="outline"
//           size="icon"
//         >
//           <ShoppingCart className="h-6 w-6 my-8 bg-slate-100" />
//           <span className="sr-only">Add to Cart</span>
//         </Button>
//         <CartWrapper
//           setOpenCartSheet={setOpenCartSheet}
//           cartItems={cartItems?.items?.length > 0 ? cartItems.items : []}
//         />
//       </Sheet>

//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Avatar className="bg-slate-200">
//             <AvatarFallback className="bg-zinc-800 text-white font-extrabold">
//               {user?.userName ? user.userName[0].toUpperCase() : "U"}
//             </AvatarFallback>
//           </Avatar>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent>
//           <DropdownMenuItem onClick={() => navigate("/shop/account")}>
//             Account
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={() => navigate("/shop/settings")}>
//             Settings
//           </DropdownMenuItem>
//           <DropdownMenuItem onClick={handleLogout}>
//             <LogOut className="mr-2 h-4 w-4" />
//             Logout
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// }

function ShopingHeader() {
  const navigate = useNavigate();

  function handleNavigate(category, type) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      category !== "home"
        ? {
            category: [category]
          }
        : null;
    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    navigate(`/shop/${type}/${category}`);
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/home">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              HOME
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Stitched Categories */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>STITCHED</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {Object.entries(categoryOptionMap).map(([key, label]) => (
                <li key={key}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={`/shop/stitched/${key}`}
                      onClick={() => handleNavigate(key, "stitched")}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {label}
                      </div>
                    </Link>
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
              {Object.entries(categoryunStitchedMap).map(([key, label]) => (
                <li key={key}>
                  <NavigationMenuLink asChild>
                    <Link
                      to={`/shop/unstiched/${key}`}
                      onClick={() => handleNavigate(key, "unstiched")}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">
                        {label}
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/enquiry">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ENQUIRY
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default ShopingHeader;
