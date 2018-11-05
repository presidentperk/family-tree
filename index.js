var Aiden = [];
var Tim = [];
var Shelly = [];
var James = [];
var Grandma = [];
var family = [Aiden, Tim, Shelly, James, Grandma];
family.lastName = "Perkins";
Aiden.firstName = "Aiden";
Tim.firstName = "Tim";
Shelly.firstName = "Shelly";
James.firstName = "James";
Grandma.firstName = "Dace";
Aiden.favSong = "Otherside";
Tim.favSong = "IDK";
Shelly.favSong = "Random Song";
James.favSong = "Other Song";
Grandma.favSong = "One more song";
for (var i = 0; i<family.length; i++){
    document.write(family[i].firstName+"'s favorite song is "+ family[i].favSong+"<br>");
}
function showUpdate(person){
    person.favShow = "Better Call Saul";
}
for (var i = 0; i<family.length; i++){
    showUpdate(family[i]);
    console.log(family[i].firstName+"'s new favorite show is "+family[i].favShow);
}