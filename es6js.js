//==============es6 features=======//
//class and inheritance//

class character{
    constructor(name){ //called when new object is gets created
        this.name=name;
    }

    sayMyName(){
        return "hi my name is "+this.name;
    }

}

class series extends character{
    constructor(characterName,seriesName){
        super(characterName);   //super refers to parent class constructor
        this.seriesName=seriesName;
    }
    details(){
        return this.sayMyName()+" and i am character from "+this.seriesName+" tv series";
    }
}

class movies extends character{
    constructor(characterName,movieName){
        super(characterName);   //super refers to parent class constructor
        this.movieName=movieName;
    }
    details(){
        return this.sayMyName()+" and i am character from "+this.movieName+" movie";
    }
}

chandler=new series("chandler","friends"); //creating a new object of class
console.log(chandler.details());

jonSnow=new series("jon snow","game of thrones");
console.log(jonSnow.details()+" ");

herryPotter=new movies("harry potter","harry potter");
console.log(herryPotter.details());



//=============aero function=====================//
aerofun=()=>console.log("this is an aero function");
aerofun();

aerofun2=(var1)=>{
    console.log("this is aero function "+var1);
}

aerofun2("an argument");

//==========var,let,const==========================/
//var is function scope
//let and scope is block scope
for(var v=1;v<5;v++){
    console.log(v);
}
console.log("outside "+v);

for(let v2=1;v2<5;v2++){
    console.log(v2);
}
// console.log("outside "+v2);  <======this will generate error

const CONSTVAR=100;
// CONSTVAR=1000;  <=====this will generate error because const var's value can not be changed
