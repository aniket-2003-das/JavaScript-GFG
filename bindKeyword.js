var geeks = {
    name : "ABC",
    printFunc: function(){
       console.log(this.name);}
}
   
       

var printFunc2= geeks.printFunc;
printFunc2();
    


//using bind() 
var printFunc3= geeks.printFunc.bind(geeks);
printFunc3(); // bind() takes the object "geeks" as parameter//
