import { Brand } from "@/types/brand";
import Image from "next/image";
import SectionTitle from "@/Common/SectionTitle";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Toyota",
    href: "https://www.toyotabharat.com/",
    image: '/brands/Toyota_Logo_2005.svg',
  },
  {
    id: 2,
    name: "Bosch",
    href: "https://www.bosch.in/",
    image: "/brands/bosch-logo-simple.svg",
  },
  {
    id: 3,
    name: "Ashok Leyland",
    href: "https://www.ashokleyland.com",
    image: "/brands/Ashok-Leyland.svg",
  },
  {
    id: 4,
    name: "TVS",
    href: "https://www.tvsmotor.com/",
    image: '/brands/TVS_Motor_Company-Logo.wine.svg',
  },

];

const Brands = () => {
  return (
    <section className="pt-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center">Our Clients</h2>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-xl text-center">and many more...</p>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  const logoClass = name === "Ashok Leyland" ? "h-20" : "h-10";

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className={`relative ${logoClass} w-full opacity-80 transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100`}
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
