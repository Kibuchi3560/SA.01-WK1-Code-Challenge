//Speed detector

function speedDetector(speed = 85){
    //delared variable speedlimit
    let speedlimit = 70 ;
    //Use of condiional if and else to make decisions
    if (speed <= speedlimit) {
        console.log("Ok");
    }
    else{
        let demeritpoint = ((speed - speedlimit) / 5);
        console.log(demeritpoint);
// use of greater than for comparison for if whether i is greater than 12 demeritpoints
    if (demeritpoint > 12 ) {
        console.log("Lisence suspended")
    }
    }
}
speedDetector(); //call of function speed detector