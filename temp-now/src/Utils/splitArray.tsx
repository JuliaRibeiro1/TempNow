
function splitArray(array : number[]) : number[][] {
  const shares = array.length / 24
  const splitArr = []
  for (let i = 0; i < array.length; i += shares) {
    const parte = array.slice(i, i + shares);
    splitArr.push(parte);
  }

  return splitArr;
  
}

export default splitArray