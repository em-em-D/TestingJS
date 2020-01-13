export default function analyze(arr){
    
    function calculateAvg(arr){
        const total = arr.reduce((acc, num) => acc + num, 0);
        return total / arr.length
      }
    return {
      average: calculateAvg(arr),
      min: Math.min(...arr),
      max: Math.max(...arr),
      length: arr.length
    }
  
}