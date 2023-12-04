
function ceilArray(array : number[]) : number[]{

const share:  number[] = []

    array.map(number => {
      share.push(Math.ceil(number))

    }
  
  )
  console.log(share)
  return share;
}

export default ceilArray