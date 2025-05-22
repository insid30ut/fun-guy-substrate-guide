
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator } from "lucide-react";

const SubstrateCalculator = () => {
  const [substrateType, setSubstrateType] = useState('cvg');
  const [primaryWeight, setPrimaryWeight] = useState(1.0); // in kg (primary ingredient weight)
  const [numBatches, setNumBatches] = useState(1);
  const [result, setResult] = useState<Record<string, number>>({});
  const [isCalculated, setIsCalculated] = useState(false);
  
  // Formula mappings for different substrate types (ratios based on primary ingredient)
  const substrateFormulas = {
    cvg: { // Based on coir weight
      coir: 1.0, // reference value (1 kg coir = 1 kg coir)
      vermiculite: 0.64, // ratio to coir weight
      gypsum: 0.09, // ratio to coir weight
      water: 2727, // grams of water per kg of coir
    },
    masters: { // Based on hardwood weight
      hardwood: 1.0, // reference value (1 kg hardwood = 1 kg hardwood)
      soyhulls: 1.0, // ratio to hardwood weight (1:1 ratio)
      water: 3600, // grams of water per kg of hardwood
    },
    straw: { // Based on straw weight
      straw: 1.0, // reference value (1 kg straw = 1 kg straw)
      gypsum: 0.0625, // ratio to straw weight
      water: 2500, // grams of water per kg of straw
    },
  };

  // Get the primary ingredient based on substrate type
  const getPrimaryIngredient = (type: string): string => {
    switch(type) {
      case 'cvg':
        return 'coir';
      case 'masters':
        return 'hardwood';
      case 'straw':
        return 'straw';
      default:
        return 'coir';
    }
  };

  const handleCalculate = () => {
    const primaryIngredient = getPrimaryIngredient(substrateType);
    const formula = substrateFormulas[substrateType as keyof typeof substrateFormulas];
    
    const calculatedResult: Record<string, number> = {};
    
    Object.entries(formula).forEach(([ingredient, ratio]) => {
      calculatedResult[ingredient] = +(primaryWeight * ratio * numBatches).toFixed(2);
    });
    
    // Calculate estimated total substrate weight
    const totalWeight = Object.values(calculatedResult).reduce((acc, val) => {
      // Don't include water in the dry weight calculation
      if (val !== calculatedResult.water) {
        return acc + val;
      }
      return acc;
    }, 0);
    
    calculatedResult.totalWeight = +totalWeight.toFixed(2);
    
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
    totalWeight: 'Total Dry Weight'
  };
  
  const ingredientUnits: Record<string, string> = {
    coir: 'kg',
    vermiculite: 'kg',
    gypsum: 'kg',
    water: 'g',
    hardwood: 'kg',
    soyhulls: 'kg',
    straw: 'kg',
    totalWeight: 'kg'
  };

  // Get primary ingredient label based on substrate type
  const getPrimaryIngredientLabel = () => {
    const primaryIngredient = getPrimaryIngredient(substrateType);
    return ingredientLabels[primaryIngredient];
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-gradient-to-b from-background to-mushroom-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mushroom-800">Substrate Calculator</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Calculate the perfect substrate mix for your mushroom growing needs.
            Simply select your substrate type and input your primary ingredient weight.
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
                Select your substrate type and enter your primary ingredient details
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
                  <Label htmlFor="primaryWeight">{getPrimaryIngredientLabel()} Weight (kg)</Label>
                  <Input
                    id="primaryWeight"
                    type="number"
                    value={primaryWeight}
                    onChange={(e) => setPrimaryWeight(Number(e.target.value))}
                    min="0.1"
                    step="0.1"
                    className="border-mushroom-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numBatches">Number of Batches</Label>
                  <Input
                    id="numBatches"
                    type="number"
                    value={numBatches}
                    onChange={(e) => setNumBatches(Number(e.target.value))}
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
                      {Object.entries(result).map(([ingredient, amount]) => {
                        // Skip displaying the totalWeight in the ingredients list
                        if (ingredient === 'totalWeight') return null;
                        
                        return (
                          <li key={ingredient} className="flex justify-between">
                            <span className="text-mushroom-700">{ingredientLabels[ingredient]}:</span>
                            <span className="font-medium text-forest-700">
                              {amount} {ingredientUnits[ingredient]}
                            </span>
                          </li>
                        );
                      })}
                      <li className="pt-2 border-t border-mushroom-200 flex justify-between">
                        <span className="text-mushroom-700">Total Substrate Weight:</span>
                        <span className="font-medium text-forest-800">
                          {result.totalWeight} kg
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
