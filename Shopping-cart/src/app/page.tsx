"use client";

import Pagination from "@/components/Pagination";
import { ProductList } from "@/components/ProductList";
import { SelectDropdown } from "@/components/SelectDropdown";
import { useDebounce } from "@/hooks/useDebounce";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const options = [
  {
    id: "lowToHigh",
    label: "Low to High",
  },
  {
    id: "highToLow",
    label: "High to Low",
  },
];

export default function Home() {
  const itemPerpage = 8;
  const [productData, setProductData] = useState<any[]>([]);
  const [sortedOrder, setSortedOrder] = useState<string>("");
  const [productSearch, setProductSearch] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageStartIndex = itemPerpage * (page - 1);
  const pageEndIndex = pageStartIndex + itemPerpage;
  const router = useRouter();

  const { debounceSearch } = useDebounce(productSearch, 300);
  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=100`);
      const data = await response.json();
      setProductData(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [debounceSearch]);

  const handleSearch = (event: any) => {
    const searchValue = event.target.value;
    setProductSearch(searchValue);
    setPage(1);
  };

  const handleSort = (currentId: string) => {
    setSortedOrder(currentId);
    setOpen(false);
  };

  const filteredProducts = productData.filter((item) =>
    debounceSearch.length >= 3
      ? item.title.toLowerCase().includes(debounceSearch.toLowerCase())
      : true
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortedOrder) {
      case "lowToHigh":
        return a.price - b.price;
      case "highToLow":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="Home">
      {/* header section */}
      <header className="grid grid-cols-[auto_1fr_auto] gap-10 items-center px-2 py-3 bg-amber-400">
        {/* Left section */}
        <div className="flex items-center gap-5 px-4 py-2">
          <div className="p-2 rounded-full bg-indigo-600 cursor-pointer">
            <ShoppingBag className="text-white w-6 h-6" />
          </div>
          <h2 className="text-3xl text-indigo-600 font-semibold cursor-pointer">
            Shop Now
          </h2>
        </div>
        {/* middle section */}
        <div className="flex justify-center w-full">
          <input
            type="text"
            placeholder="Search Product..."
            value={productSearch}
            onChange={handleSearch}
            className="w-full border border-indigo-600 rounded px-2 py-1 outline-none focus:ring-1 focus:ring-indigo-600"
          />
        </div>

        {/* Right section */}
        <div className="flex justify-end gap-8 mr-5">
          <div className="">
            <SelectDropdown
              options={options}
              handleSort={handleSort}
              setOpen={setOpen}
              open={open}
            />
          </div>
          <div
            onClick={() => router.push("/cart")}
            className="p-2 rounded-full bg-indigo-600 cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </div>
        </div>
      </header>

      <ProductList
        productData={sortedProducts}
        pageStartIndex={pageStartIndex}
        pageEndIndex={pageEndIndex}
      />
      <Pagination
        productData={sortedProducts}
        itemPerpage={itemPerpage}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}
