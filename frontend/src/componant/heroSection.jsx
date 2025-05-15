import { Button } from "@/components/ui/button"
import image1 from '../assets/img/image1.jpg'
import image2 from '../assets/img/image2.jpg'
import image3 from '../assets/img/image3.jpg'
export function HeroSection() {
  return (
    <div className="grid grid-cols-[300px_1fr_400px] gap-4 bg-zinc-600 p-4">
      <div className="flex flex-col space-y-4">
        <div className="overflow-hidden rounded-lg ml-4">
          <img
            src={image2}
            alt="Wedding dress collection"
            width={300}
            height={400}
            className="h-[250px] w-full object-cover"
          />
        </div>
        <div className="overflow-hidden rounded-lg ml-4">
          <img
            src={image1}
            alt="Formal wear collection"
            width={300}
            height={400}
            className="h-[250px] w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <img
          src={image3}
          alt="Featured wedding dress"
          width={600}
          height={800}
          className="h-full max-h-[500px] w-auto object-contain"
        />
      </div>

      <div className="flex flex-col items-center justify-center  p-8 text-center">
        <h1 className="mb-4 text-6xl font-bold tracking-tight">
          WEDDING
          <span className="block font-serif italic">Suit</span>
        </h1>
        <Button className="mt-8 bg-red-600 px-8 py-6 text-lg font-semibold hover:bg-red-700">SHOP NOW</Button>
      </div>
    </div>
  )
}

