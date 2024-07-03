import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SearchResults = () => {
  const [filters, setFilters] = useState({
    priceRange: "",
    starRating: "",
    amenities: "",
  });

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookNow = (id) => {
    // Handle book now logic here
  };

  return (
    <div className="space-y-8">
      <section className="search-filters">
        <h2 className="text-3xl font-bold mb-4">Search Filters</h2>
        <div className="flex space-x-4">
          <Input
            placeholder="Price Range"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
          />
          <Input
            placeholder="Star Rating"
            name="starRating"
            value={filters.starRating}
            onChange={handleFilterChange}
          />
          <Input
            placeholder="Amenities"
            name="amenities"
            value={filters.amenities}
            onChange={handleFilterChange}
          />
        </div>
      </section>

      <section className="search-results">
        <h2 className="text-3xl font-bold mb-4">Search Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add search results here */}
          <Card>
            <CardHeader>
              <CardTitle>Sample Travel Option</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Description of the travel option.</p>
              <p>Price: $1000</p>
              <Button onClick={() => handleBookNow(1)}>Book Now</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default SearchResults;