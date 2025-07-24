
import { Link } from "react-router-dom";
import { categories } from "@/lib/data";

const CategoryShowcase = () => {
  // Editable category data with your uploaded product images
  const editableCategories = {
    // 'solar-panels': {
    //   name: 'Solar Panels',
    //   image: '/lovable-uploads/e085099a-b837-435b-8a52-89b306e20b71.png'
    // },
    // 'inverters': {
    //   name: 'Inverters',
    //   image: '/lovable-uploads/7e58e5fc-4127-4fb6-97e2-2b8f365a0b52.png'
    // },
    // 'batteries': {
    //   name: 'Batteries',
    //   image: '/lovable-uploads/ba836844-7b4f-4bac-be3a-ebb3a72e5cd5.png'
    // },
    // 'controllers': {
    //   name: 'Controllers',
    //   image: '/lovable-uploads/719557bc-b267-4269-837b-0a5b243cdad9.png'
    // },
    // 'cables-connectors': {
    //   name: 'Cables & Connectors',
    //   image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    // },
    'solar-generators': {
      name: 'EcoFlow Power Stations',
      image: '/lovable-uploads/82799ce0-3e35-4a65-b09b-7f9df83a5c31.png'
    },
    'solar-chargers': {
      name: 'Electric Mobility',
      image: 'Images/slides/Mobility 1.webp'
    }
  };

  // Create display categories array including our custom ones
  const displayCategories = [
    // { id: 'solar-panels', name: 'Solar Panels', slug: 'solar-panels' },
    // { id: 'inverters', name: 'Inverters', slug: 'inverters' },
    // { id: 'batteries', name: 'Batteries', slug: 'batteries' },
    // { id: 'controllers', name: 'Controllers', slug: 'controllers' },
    //{ id: 'cables-connectors', name: 'Cables & Connectors', slug: 'cables-connectors' },
    { id: 'solar-generators', name: 'EcoFlow Power Stations', slug: 'solar-generators' },
    { id: 'solar-chargers', name: 'Electric Mobility', slug: 'solar-chargers' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-12">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCategories.map(category => {
            const editableCategory = editableCategories[category.slug];
            return (
              <Link key={category.id} to={`/mobility`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 relative h-48">
                  <div className="absolute inset-0">
                    <img 
                      src={editableCategory?.image || editableCategories['batteries'].image} 
                      alt={editableCategory?.name || category.name} 
                      className="w-full h-full object-contain bg-white p-4" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="font-semibold text-white text-lg group-hover:text-green-300 transition-colors duration-300">
                      {editableCategory?.name || category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
