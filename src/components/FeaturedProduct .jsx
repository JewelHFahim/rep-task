import { BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const FeaturedProduct = () => {

  const FeaturedProducts = [
    {
      id: 1,
      image:
        "https://www.cloud.ryanscomputers.com/cdn/products/small/dynabook-toshiba-satellite-pro-c40-g-11i-intel-11663225340.webp",
      productName: "Dynabook (Toshiba) Satellite Pro",
      category: "Laptop",
      price: 45000,
      status: "Stock",
      rating: 4.5,
    },
    {
      id: 2,
      image:
        "https://www.cloud.ryanscomputers.com/cdn/products/medium/bundle-with-pc-intel-12th-gen-alder-lake-core-11641704468.webp",
      productName: "Intel 12th Gen Alder Lake Core i3 12100F",
      category: "Processor",
      price: 11000,
      status: "Stock",
      rating: 4,
    },
    {
      id: 3,
      image:
        "https://www.cloud.ryanscomputers.com/cdn/products/medium/asus-vp247hae-236-inch-fhd-hdmi-vga-eye-care-11663820310.webp",
      productName: "Asus VP247HAE 23.6 inch ",
      category: "Monitor",
      price: 18200,
      status: "Stock",
      rating: 4.5,
    },
    {
      id: 4,
      image:
        "https://www.cloud.ryanscomputers.com/cdn/products/medium/ocpc-xtl-200-128gb-25-inch-sataiii-ssd-11690624235.webp",
      productName: "OCPC XTL-200 128GB 2.5",
      category: "SSD",
      price: 1250,
      status: "Stock",
      rating: 5,
    },
    {
      id: 5,
      image:
        "https://www.cloud.ryanscomputers.com/cdn/products/medium/gskill-ripjaws-v-4gb-ddr4-2400-bus-red-heatsink-21545711305.webp",
      productName: "G.Skill Ripjaws V 4GB DDR4 2400MHz",
      category: "RAM",
      price: 1750,
      status: "Stock",
      rating: 5,
    },
    {
      id: 6,
      image:
        "https://www.cloud.ryanscomputers.com/cdn/products/medium/gigabyte-h470-aorus-pro-ax-ddr4-10th-gen-intel-11595659447.webp",
      productName: "Gigabyte H470 AORUS PRO AX 10th Gen",
      category: "Motherboard",
      price: 12500,
      status: "Stock",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 px-[6%] text-gray-600 dark:text-gray-100 pb-12">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
            Feature Products
          </h1>

          <p className="max-w-lg mx-auto mt-4">
            Find an Affordable And Suitable Gadgets For Yourself Here at Rapid
            PC Builder, we have the best deal for you. We provide top brands
            with excellent performance rates at the most reasonable pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
          {FeaturedProducts.map((data) => (
            <div key={data.id}>
              <Link to="/shop">
                <div className="z-10 object-cover w-full rounded-md h-96">
                  <img src={data.image} alt="" className="w-full h-full" />
                </div>

                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                  <p className="text-xl font-medium">{(data.productName).slice(0,20)}</p>

                  <p className="mt-3 text-sm md:text-sm">
                    Category: {data.category}
                  </p>

                  <p className="mt-3 text-sm md:text-sm">
                    Price: {data.price} Tk
                  </p>

                  <p className="mt-3 text-sm text-blue-500 flex items-center gap-1">
                    Rating: {data.rating}
                    <BsFillStarFill />
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
