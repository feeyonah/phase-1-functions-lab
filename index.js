// Code your solution in this file!
function distanceFromHqInBlocks(travel){
    return travel -42;
    
    }
    const block= distanceFromHqInBlocks(43);
    console.log(block);
function distanceFromHqInFeet(travel){
const block= distanceFromHqInBlocks(travel);
return block*264;




}
const distance=distanceFromHqInFeet(43);

console.log(distance);
function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start);
    return distance * 264;
  }
  
  console.log(distanceTravelledInFeet(34, 45));
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "Cannot calculate fare for rides over 2500 feet";
    }
  }
  
  console.log(calculatesFarePrice(34, 45));
  console.log(calculatesFarePrice(34, 200));
  console.log(calculatesFarePrice(34, 2100));
  console.log(calculatesFarePrice(34, 3000));

  function distanceFromHqInBlocks(travel) {
    return Math.abs(travel - 42);
  }
  
  function distanceFromHqInFeet(travel) {
    const blocks = distanceFromHqInBlocks(travel);
    return blocks * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(destination - start) * 264;
    if (distance > 2500) {
      return 'Ride distance exceeds maximum limit.';
    }
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
      return 'Ride distance exceeds maximum limit.';
    }
    
    return fare;
  }
  
  console.log(calculatesFarePrice(34, 2800));
  function distanceFromHqInBlocks(travel) {
    return Math.abs(travel - 42);
  }
  
  function distanceFromHqInFeet(travel) {
    const blocks = distanceFromHqInBlocks(travel);
    return blocks * 264;
  }
  
  console.log(distanceFromHqInFeet(43));
  

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
      return 'Cannot calculate fare for rides over 2500 feet';
    }
    
    return fare;
  }
  
  console.log(calculatesFarePrice(34, 2800));
  

  
  