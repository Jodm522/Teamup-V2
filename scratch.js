const date = "2020-05-22T07:00:00.000Z"
const month = date.slice(5,7)
const day = date.slice(8,10)
const year = date.slice(0,4)
const time = date.slice(11,16)


console.log(month+" "+day+" "+ year+" "+ time)
