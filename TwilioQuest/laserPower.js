function calculatePower(powerSettings) {
    let totalPower = 0;
  
    powerSettings.forEach(power => {
        totalPower += power * 2
    });

    return totalPower;
  }

const laserPower = calculatePower([1, 3, 8]);
console.log("Required laser power is " + laserPower);