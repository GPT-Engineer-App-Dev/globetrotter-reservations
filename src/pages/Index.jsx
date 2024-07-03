import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Index = () => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [travelers, setTravelers] = useState("");

  const handleSearch = () => {
    // Handle search logic here
  };

  return (
    <div className="space-y-8">
      <section className="hero bg-cover bg-center h-96 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Trip</h1>
          <div className="flex space-x-4">
            <Input
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Input
              placeholder="Dates"
              value={dates}
              onChange={(e) => setDates(e.target.value)}
            />
            <Input
              placeholder="Travelers"
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </section>

      <section className="popular-destinations">
        <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add popular destinations here */}
        </div>
      </section>

      <section className="special-offers">
        <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add special offers here */}
        </div>
      </section>

      <section className="testimonials">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add testimonials here */}
        </div>
      </section>

      <section className="call-to-action text-center">
        <Button size="lg">Book Your Travel Now</Button>
      </section>
    </div>
  );
};

export default Index;