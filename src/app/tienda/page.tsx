import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Peanut Butter Sugar Free',
    price: '₡5,040.00',
    image: '/images/4839625724-640w.png',
    category: 'Mantequillas',
  },
  {
    id: 2,
    name: 'Almond Butter Protein',
    price: '₡8,925.00',
    image: '/images/4839663755-640w.png',
    category: 'Mantequillas',
  },
  {
    id: 3,
    name: 'Choco Nut Butter',
    price: '₡7,245.00',
    image: '/images/c5e2fd13b5928e4fac7aebc2d80fe140-640w.png',
    category: 'Mantequillas',
  },
  {
    id: 4,
    name: 'Pancake and Waffle Mix',
    price: '₡2,600.00',
    image: '/images/fb33a7b2fe2c99ac52fca83182b6d115-640w.png',
    category: 'Mezclas',
  },
  {
    id: 5,
    name: 'Chia Seeds',
    price: '₡2,660.00',
    image: '/images/Untitled-b014d76b-640w.png',
    category: 'Mezclas',
  },
  {
    id: 6,
    name: 'Pita Chips Parmesano',
    price: '₡4,400.00',
    image: '/images/d37e998ca2d228b226f3d0d05ed49091-640w.png',
    category: 'Salty Snacks',
  },
  {
    id: 7,
    name: 'Tortilla Chips',
    price: '₡3,200.00',
    image: '/images/d37e998ca2d228b226f3d0d05ed49091-2d3c32c0-640w.png',
    category: 'Salty Snacks',
  },
  {
    id: 8,
    name: 'Almond Sugar Free',
    price: '₡8,500.00',
    image: '/images/Almond-Sugar-Free-NB-265g_01-640w.png',
    category: 'Mantequillas',
  },
];

export default function Tienda() {
  return (
    <main className="pt-20">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#f5c964] py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333] mb-4">
            TIENDA
          </h1>
          <p className="text-lg text-[#333]">
            Encuentra todos nuestros productos naturales y saludables
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="text-center group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm text-[#f5c964] font-medium">{product.category}</span>
                <h3 className="text-lg font-medium text-[#333] mb-2">{product.name}</h3>
                <p className="text-[#666] mb-4">{product.price}</p>
                <button className="btn-primary w-full">
                  Agregar al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
