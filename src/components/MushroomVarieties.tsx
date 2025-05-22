
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const mushroomVarieties = [
  {
    name: "Oyster Mushrooms",
    scientificName: "Pleurotus ostreatus",
    description: "One of the most widely cultivated mushrooms, known for its oyster-shaped cap and versatility in cuisine.",
    difficulty: "Beginner",
    substrates: ["Straw", "Hardwood", "Coffee Grounds"],
    image: "🍄", // Placeholder for now
  },
  {
    name: "Shiitake",
    scientificName: "Lentinula edodes",
    description: "Popular in Asian cuisine, with rich umami flavor and medicinal properties. Traditionally grown on hardwood logs.",
    difficulty: "Intermediate",
    substrates: ["Hardwood", "Supplemented Sawdust"],
    image: "🍄", // Placeholder for now
  },
  {
    name: "Lion's Mane",
    scientificName: "Hericium erinaceus",
    description: "Unique mushroom with cascading white spines, known for potential cognitive benefits and seafood-like taste.",
    difficulty: "Intermediate",
    substrates: ["Hardwood", "Master's Mix"],
    image: "🍄", // Placeholder for now
  },
  {
    name: "King Oyster",
    scientificName: "Pleurotus eryngii",
    description: "Prized for its thick stem and meaty texture, often used as a meat substitute in vegetarian cooking.",
    difficulty: "Intermediate",
    substrates: ["Hardwood", "Master's Mix"],
    image: "🍄", // Placeholder for now
  },
  {
    name: "Reishi",
    scientificName: "Ganoderma lucidum",
    description: "A medicinal mushroom used in traditional Eastern medicine, known for its glossy reddish-brown fruiting body.",
    difficulty: "Advanced",
    substrates: ["Hardwood", "Supplemented Sawdust"],
    image: "🍄", // Placeholder for now
  },
  {
    name: "Enoki",
    scientificName: "Flammulina velutipes",
    description: "Long, thin white mushrooms popular in East Asian cuisine, with a mild flavor and crunchy texture.",
    difficulty: "Advanced",
    substrates: ["Hardwood", "Sawdust"],
    image: "🍄", // Placeholder for now
  }
];

const difficultyColors: Record<string, string> = {
  "Beginner": "bg-green-100 text-green-800",
  "Intermediate": "bg-yellow-100 text-yellow-800",
  "Advanced": "bg-red-100 text-red-800"
};

const MushroomVarieties = () => {
  return (
    <section id="varieties" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mushroom-800">Popular Mushroom Varieties</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore these common mushroom species that are perfect for home cultivation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mushroomVarieties.map((mushroom) => (
            <Card key={mushroom.name} className="overflow-hidden border-mushroom-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-forest-100 to-mushroom-100 h-40 flex items-center justify-center">
                <span className="text-7xl">{mushroom.image}</span>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-mushroom-800">{mushroom.name}</CardTitle>
                <CardDescription className="italic">{mushroom.scientificName}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{mushroom.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500">Difficulty:</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[mushroom.difficulty]}`}>
                    {mushroom.difficulty}
                  </span>
                </div>
              </CardContent>
              
              <CardFooter className="bg-gray-50 border-t border-mushroom-100">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Recommended Substrates:</p>
                  <div className="flex flex-wrap gap-2">
                    {mushroom.substrates.map((substrate) => (
                      <span 
                        key={substrate} 
                        className="text-xs bg-white px-2 py-1 rounded-full border border-mushroom-200 text-mushroom-700"
                      >
                        {substrate}
                      </span>
                    ))}
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MushroomVarieties;
