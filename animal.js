var animal = {
  eat:function(){
    console.log('eat');
  },
  talk:function(noise){
    console.log(noise);
  },
  defecate:true
}

var pig = Object.create(animal);
pig.tail = "curly";
pig.likesMud = true;

var potBelly = Object.create(pig);
  potBelly.size = "tiny";
  potBelly.tailTwist = function(){
    console.log("oink, I can twist my tail");
}

var kingsley = Object.create(potBelly);
kingsley.owners = ["Sam", "Petr"];
var oinkles = Object.create(potBelly);
oinkles.owners = ["Tom Cruise"];

//step 1:
  // run pig.talk(), passing in "oink"
  // use pig.talk to have it say something else
  // use the console log  to test it

//take a look at the code above. Notice how we use Object.create to make a new animal. 
//Use object.create to create a new animal that is an anteater
//give it the two properties "likesAnts," equal to a boolean
//and "fur," equal to an array of all the colors an anteater is

//create a couple of instances of an anteater, like we're doing with oinkles and kingsley. Have them talk, like we're doing with the pig, passing in the
//noise that anteaters make. Finally, give them a couple of new properties, whatever you guys feel like. 

