const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteries = (batterybatches) => {
    return batterybatches.reduce((acc, elem) => { return acc + elem })
}

const totalBatteries = batteries(batteryBatches)