import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    {
      name: "EcoFlow",
      logo: "Images/Partners/Eco flow.jpg",
    },
    {
      name: "ZIJAZO",
      logo: "Images/Partners/Zijazo.jpg",
    },
    {
      name: "Generator Plus",
      logo: "/lovable-uploads/7e58e5fc-4127-4fb6-97e2-2b8f365a0b52.png",
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-green-600 mb-2">Our Partners</h2>
          <p className="text-gray-600 text-sm">
            We work with top brands to deliver sustainable energy solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-none w-32 h-32 flex items-center justify-center">
              <CardContent className="flex flex-col items-center justify-center p-2">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-12 w-auto object-contain mb-2"
                />
                <p className="text-xs text-center font-medium text-gray-800">{partner.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
