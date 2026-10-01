import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState([])
  const [search, setSearch] = useState("")
  useEffect(()=>{
    const fetchProduct = async()=>{
      const res = await fetch('https://dummyjson.com/products?select=thumbnail,title,price')
      const data = await res.json()
      setProduct(data.products)
    }
    fetchProduct()
  }, [])
  const filterProducts = product.filter((p)=> p.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <>
      <h1 className="text-4xl text-center text-blue -600 my-4 font-bold">
        Product List 
      </h1>
      <div className="flex justify-center items-center">
        <input type="text" placeholder="Search by title..." onChange={(e)=>setSearch(e.target.value)} className="w-[50%] p-3 border-1 rounded-md border-gray-300 mb-8 "/>
      </div>
      <div className="max-w-6xl grid grid-cols-4  gap-3 mx-auto">
        {
          filterProducts.map((p)=>(
            <div key={p.id} className="border-1 rounded-md bg-white border-gray-300 h-68 w-70 hover:border-2 hover:border-red-700 transition-all hover:scale-105 duration-300">
              <img src={p.thumbnail} alt="" className="object-contain w-full h-[75%]" />
              <h2 className="px-2 font-semibold mb-2">{p.title}</h2>
              <p className="px-2 mb-2 text-sm">${p.price}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default App;
