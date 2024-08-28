function union(arr1,arr2)
{
   console.log([...new Set(arr1.concat(arr2))]);

}
union([1,2,3,4], [2,3,4,6]);
