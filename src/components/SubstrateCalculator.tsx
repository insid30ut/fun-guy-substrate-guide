
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";

const SubstrateCalculator = () => {
  const [substrateType, setSubstrateType] = useState('cvg');
  const [blockSize, setBlockSize] = useState(2.3); // in kg (approximately 5 lbs converted)
  const [numBlocks, setNumBlocks] = useState(1);
  const [result, setResult] = useState<Record<string, number>>({});
  const [isCalculated, setIsCalculated] = useState(false);
  
  // Formula mappings for different substrate types (amounts per kg)
  const substrateFormulas = {
    cvg: { // Coir, Vermiculite, Gypsum
      coir: 0.55, // kg per kg of substrate
      vermiculite: 0.35, // kg per kg of substrate
      gypsum: 0.05, // kg per kg of substrate
      water: 1500, // grams per kg of substrate (converted from 1.5 quarts = ~1500g per kg)
    },
    masters: { // Masters Mix - Soy hulls and Hardwood
      hardwood: 0.5, // kg per kg of substrate
      soyhulls: 0.5, // kg per kg of substrate
      water: 1800, // grams per kg of substrate
    },
    straw: { // Straw
      straw: 0.8, // kg per kg of substrate
      gypsum: 0.05, // kg per kg of substrate
      water: 2000, // grams per kg of substrate
    },
  };

  const handleCalculate = () => {
    const totalWeight = blockSize * numBlocks;
    const formula = substrateFormulas[substrateType as keyof typeof substrateFormulas];
    
    const calculatedResult: Record<string, number> = {};
    
    Object.entries(formula).forEach(([ingredient, ratio]) => {
      calculatedResult[ingredient] = +(totalWeight * ratio).toFixed(2);
    });
    
    setResult(calculatedResult);
    setIsCalculated(true);
  };

  const ingredientLabels: Record<string, string> = {
    coir: 'Coconut Coir',
    vermiculite: 'Vermiculite',
    gypsum: 'Gypsum',
    water: 'Water',
    hardwood: 'Hardwood Pellets',
    soyhulls: 'Soy Hulls',
    straw: 'Wheat Straw',
  };
  
  const ingredientUnits: Record<string, string> = {
    coir: 'kg',
    vermiculite: 'kg',
    gypsum: 'kg',
    water: 'g',
    hardwood: 'kg',
    soyhulls: 'kg',
    straw: 'kg',
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gradient-to-b from-background to-mushroom-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mushroom-800">Substrate Calculator</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate the perfect substrate mix for your mushroom growing needs.
            Simply select your substrate type and input your block specifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto calculator-container">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calculator className="h-6 w-6 text-forest-600" />
                <CardTitle className="text-2xl text-forest-800">Substrate Mix Calculator</CardTitle>
              </div>
              <CardDescription>
                Select your substrate type and enter your block details
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="cvg" className="w-full" onValueChange={(value) => setSubstrateType(value)}>
                <TabsList className="grid grid-cols-3 mb-6">
                  <TabsTrigger value="cvg">CVG Mix</TabsTrigger>
                  <TabsTrigger value="masters">Master's Mix</TabsTrigger>
                  <TabsTrigger value="straw">Straw</TabsTrigger>
                </TabsList>
                
                <TabsContent value="cvg" className="space-y-4">
                  <p className="text-sm text-gray-600">
                    CVG (Coir, Vermiculite, Gypsum) is ideal for growing oyster mushrooms, shiitake, and more.
                  </p>
                </TabsContent>
                
                <TabsContent value="masters" className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Master's Mix (Hardwood and Soy Hulls) is excellent for many gourmet varieties.
                  </p>
                </TabsContent>
                
                <TabsContent value="straw" className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Straw is commonly used for oyster mushrooms and other fast colonizers.
                  </p>
                </TabsContent>
              </Tabs>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="blockSize">Block Size (kg)</Label>
                  <Input
                    id="blockSize"
                    type="number"
                    value={blockSize}
                    onChange={(e) => setBlockSize(Number(e.target.value))}
                    min="0.1"
                    step="0.1"
                    className="border-mushroom-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numBlocks">Number of Blocks</Label>
                  <Input
                    id="numBlocks"
                    type="number"
                    value={numBlocks}
                    onChange={(e) => setNumBlocks(Number(e.target.value))}
                    min="1"
                    className="border-mushroom-200"
                  />
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="flex-col">
              <Button 
                className="bg-forest-500 hover:bg-forest-600 w-full py-6 text-lg"
                onClick={handleCalculate}
              >
                Calculate Ingredients
              </Button>
              
              {isCalculated && (
                <div className="mt-8 w-full">
                  <h3 className="text-lg font-semibold text-mushroom-800 mb-4">Required Ingredients:</h3>
                  <div className="bg-mushroom-50 p-4 rounded-lg border border-mushroom-200">
                    <ul className="space-y-3">
                      {Object.entries(result).map(([ingredient, amount]) => (
                        <li key={ingredient} className="flex justify-between">
                          <span className="text-mushroom-700">{ingredientLabels[ingredient]}:</span>
                          <span className="font-medium text-forest-700">
                            {amount} {ingredientUnits[ingredient]}
                          </span>
                        </li>
                      ))}
                      <li className="pt-2 border-t border-mushroom-200 flex justify-between">
                        <span className="text-mushroom-700">Total Substrate Weight:</span>
                        <span className="font-medium text-forest-800">
                          {blockSize * numBlocks} kg
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SubstrateCalculator;
