import Features from "@/components/Features"
import Video from "@/components/Video"
import Carousel from "@/components/carousel"
import Navbar from "@/components/navbar"


export default function Home() {
  return (
    <main className="overflow-hidden">
    <Carousel />
    <Features />
    <Video />
    
    </main>
  )
}
