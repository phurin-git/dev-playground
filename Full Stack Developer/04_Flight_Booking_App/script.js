const nameOnPass = "Phurin Nararat";
const nameOnId = "Mr.Phurin Nararat";
const nameMatch = nameOnPass == nameOnId;
const length = 75;
const doesLengthPass = length < 30;
const height = 180;
const doesHeightPass = height < 55;
const isHandBaggageEligible = doesLengthPass && doesHeightPass;
const flightDes = "US";
const returnFrom = "JP";
const isRoundTrip = flightDes == returnFrom;
const bookings = 1;
const totalCapacity = 25;
const isFlightAvailable = bookings < totalCapacity;
console.log("Passenger Name: " + nameOnPass);
console.log("ID confirmed? " + nameMatch);
console.log("Is Hand Baggage Eliginle? " + isHandBaggageEligible);
console.log("Round Trip Check? " + isRoundTrip);
console.log("Are seats available? " + isFlightAvailable);
document.querySelector("#name").innerHTML = nameOnPass;
document.querySelector("#id").innerHTML = nameMatch;
document.querySelector("#bag").innerHTML = isHandBaggageEligible;
document.querySelector("#des").innerHTML = isRoundTrip;
document.querySelector("#seat").innerHTML = isFlightAvailable;