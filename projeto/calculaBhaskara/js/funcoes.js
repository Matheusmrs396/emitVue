export {calculaDelta, calculaBhaskara}

function calculaDelta(a,b,c){
    return (b*b) - 4*a*c; 
}

function calculaBhaskara(a,b,delta){
    let x = (-b + Math.sqrt(delta))/ (2*a);
    let x2 = (-b - Math.sqrt(delta))/ (2*a);
    return {x,x2};
}