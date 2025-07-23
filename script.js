function mincost(arr)
{ 
//write your code here
// return the min cost
	
    let ropeLengths=[...arr]
    let Minimumcost=0;
    while(ropeLengths.length>1){
        ropeLengths.sort((a,b)=>{return a-b});
        let first = ropeLengths.shift(0)
        let second = ropeLengths.shift(1)
        let cost =first+second
        Minimumcost+=cost
        ropeLengths.push(cost)
    }
    return Minimumcost;
  
}

module.exports=mincost;
