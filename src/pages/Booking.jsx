import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Booking = () => {
  const [travelDetails, setTravelDetails] = useState({
    destination: "Sample Destination",
    dates: "Sample Dates",
    price: "$1000",
  });

  const [travelerInfo, setTravelerInfo] = useState({
    name: "",
    email: "",
    paymentInfo: "",
  });

  const handleInputChange = (e) => {
    setTravelerInfo({
      ...travelerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmBooking = () => {
    // Handle booking confirmation logic here
  };

  return (
    <div className="space-y-8">
      <section className="travel-details">
        <h2 className="text-3xl font-bold mb-4">Travel Details</h2>
        <Card>
          <CardHeader>
            <CardTitle>{travelDetails.destination}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Dates: {travelDetails.dates}</p>
            <p>Price: {travelDetails.price}</p>
          </CardContent>
        </Card>
      </section>

      <section className="traveler-info">
        <h2 className="text-3xl font-bold mb-4">Traveler Information</h2>
        <div className="space-y-4">
          <Input
            placeholder="Name"
            name="name"
            value={travelerInfo.name}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Email"
            name="email"
            value={travelerInfo.email}
            onChange={handleInputChange}
          />
          <Input
            placeholder="Payment Information"
            name="paymentInfo"
            value={travelerInfo.paymentInfo}
            onChange={handleInputChange}
          />
        </div>
      </section>

      <section className="summary-confirmation text-center">
        <Button size="lg" onClick={handleConfirmBooking}>
          Confirm Booking
        </Button>
      </section>
    </div>
  );
};

export default Booking;