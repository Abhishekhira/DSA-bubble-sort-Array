console.log('this program  is based on sorting array')
let arr=[45,65,78,89,56,45]
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
       if (arr[j]>arr[j+1]) {
        let temp=arr[j]
       arr[j]=arr[j+1]
       arr[j+1]=temp
       }
    }
    
}
console.log(arr)