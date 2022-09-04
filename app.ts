 function max( a1:number   , b1:number   , c1?:number   , d1?:number   ):number{
    if ( c1 && d1 )
    {
        var great:number = a1
        if( b1 > a1 && b1 > c1 && b1 > d1 )
        great = b1
        if( c1 > a1 && c1 > b1 && c1>d1 )
        great = c1
        if( d1 > a1 && d1 > b1 && d1>c1 )
        great = d1
    }
    else if (c1){
        var great:number = a1
        if( b1 > a1 && b1 > c1 )
        great = b1
        if( c1 > a1 && c1 > b1 )
        great = c1
    }
    else if (d1){
        var great:number = a1
        if( b1 > a1 && b1 > d1 )
        great = b1
        if( d1 > a1 && d1 > b1 )
        great = d1
    }
    else{
        var great:number = a1
        if( b1 > a1)
        great = b1
    }
    return great
    
}
var a:string|null=prompt("Enter the first number")
var a1:number=Number(a)
var b:string|null=prompt("Enter the second number")
var b1:number=Number(b)
var c:string|null=prompt("Enter the third number")
var c1:number=Number(c)
var d:string|null=prompt("Enter the fourth number")
var d1:number=Number(d)
var maximum:number = max(a1,b1,c1,d1)
console.log(`The maximum value is ${maximum}`);
// 2nd program
function evenodd(n2:number):string{
    if(n2%2==0)
    return "number is even"
    else
    return "number is odd"
}
var n1:string|null = prompt("Enter a number to check its nature")
var n2:number = Number(n1)
var verify:string = evenodd(n2)
console.log(verify);

