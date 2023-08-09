import Brands from "@/components/Brands"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Testimonials from "@/components/Testimonials"
import Video from "@/components/Video"
import Carousel from "@/components/carousel"
import Navbar from "@/components/navbar"


export default function Home() {
  return (
    <main className="overflow-hidden">
    <Carousel />
    <Features />
    <Video />
    <Brands />
    <Testimonials />
    <Footer />
    
    </main>
  )
}
