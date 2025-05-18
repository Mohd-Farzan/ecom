import { Button } from "@/components/ui/button"
import image1 from "../assets/img/image1.jpg"
import image2 from "../assets/img/image2.jpg"
import image3 from "../assets/img/image3.jpg"

export function HeroSection() {
  return (
    <div className="bg-zinc-600 p-4">
      {/* Mobile layout (stacked) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {/* Center content first on mobile */}
        <div className="flex flex-col items-center justify-center text-center px-4 py-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            WEDDING
            <span className="block font-serif italic">Suit</span>
          </h1>
          <Button className="mt-4 bg-red-600 px-6 py-5 text-base font-semibold hover:bg-red-700">SHOP NOW</Button>
        </div>

        {/* Main featured image */}
        <div className="flex items-center justify-center">
          <img
            src={image3 || "/placeholder.svg"}
            alt="Featured wedding dress"
            className="h-auto w-full max-h-[350px] object-contain"
          />
        </div>

        {/* Side images in a horizontal row on mobile */}
        <div className="grid grid-cols-2 gap-3">
          <div className="overflow-hidden rounded-lg">
            <img
              src={image2 || "/placeholder.svg"}
              alt="Wedding dress collection"
              className="h-[180px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={image1 || "/placeholder.svg"}
              alt="Formal wear collection"
              className="h-[180px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Tablet layout (2 columns) */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-4 lg:hidden">
        <div className="flex flex-col space-y-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src={image2 || "/placeholder.svg"}
              alt="Wedding dress collection"
              className="h-[220px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={image1 || "/placeholder.svg"}
              alt="Formal wear collection"
              className="h-[220px] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center mb-4">
            <img
              src={image3 || "/placeholder.svg"}
              alt="Featured wedding dress"
              className="h-auto max-h-[300px] w-auto object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center text-center p-4">
            <h1 className="mb-4 text-5xl font-bold tracking-tight">
              WEDDING
              <span className="block font-serif italic">Suit</span>
            </h1>
            <Button className="mt-4 bg-red-600 px-7 py-5 text-lg font-semibold hover:bg-red-700">SHOP NOW</Button>
          </div>
        </div>
      </div>

      {/* Desktop layout (original 3 columns) */}
      <div className="hidden lg:grid lg:grid-cols-[300px_1fr_400px] lg:gap-4">
        <div className="flex flex-col space-y-4">
          <div className="overflow-hidden rounded-lg ml-4">
            <img
              src={image2 || "/placeholder.svg"}
              alt="Wedding dress collection"
              width={300}
              height={400}
              className="h-[250px] w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg ml-4">
            <img
              src={image1 || "/placeholder.svg"}
              alt="Formal wear collection"
              width={300}
              height={400}
              className="h-[250px] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={image3 || "/placeholder.svg"}
            alt="Featured wedding dress"
            width={600}
            height={800}
            className="h-full max-h-[500px] w-auto object-contain"
          />
        </div>

        <div className="flex flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-4 text-6xl font-bold tracking-tight">
            WEDDING
            <span className="block font-serif italic">Suit</span>
          </h1>
          <Button className="mt-8 bg-red-600 px-8 py-6 text-lg font-semibold hover:bg-red-700">SHOP NOW</Button>
        </div>
      </div>
    </div>
  )
}
