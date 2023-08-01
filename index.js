function distanceFromHqInBlocks(travel) {
  return Math.abs(travel - 42);
}

function distanceFromHqInFeet(travel) {
  const blocks = distanceFromHqInBlocks(travel);
  return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
  const distance = Math.abs(destination - start) * 264;
  return distance;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;
  
  if (distance <= 400) {
    fare = 0;
  } else if (distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    fare = 25;
  } else {
    fare = 'cannot travel that far';
  }
  
  return fare;
}

module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};

  
  