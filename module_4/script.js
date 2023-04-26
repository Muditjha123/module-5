(function () {
var name = ["John","Yakoov","Crish","Jack","Dorshan","jony","Harry"];

    for(var i=0;i<name.legth;i++){
        var firstname=name[i].charAt(0).toLowerCase();
        if(firstname=='j'){
           console.log(goodBye(name[i]));
        }else{
           console.log(hello(name[i]));
        }
    }
})();
