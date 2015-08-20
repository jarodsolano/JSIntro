/**
 * Created by jsolano on 8/3/2015.
 */
"use strict"

//function Knight (name, regiment) {
//    this.name = name;
//    this.regiment = regiment;
//    switch (regiment) {
//        case 1:
//            this.weapon = "Broadsword";
//            break;
//        case 2:
//            this.weapon = "Claymore";
//            break;
//        case 3:
//            this.weapon = "Longsword";
//            break;
//        case 5:
//            this.weapon = "War Hammer";
//            break;
//        case 6:
//            this.weapon = "Battle Axe";
//            break
//        case 4:
//        case 7:
//        case 8:
//            this.weapon = "Morning Star";
//            break;
//        default:
//            alert(name + " has an incorrect regiment, Master Armourer!\n\nNo weapon assigned!");
//    }
//}

//var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker"];
//var firstRegimentKnights = [];
//var secondRegimentNewbs = ["Jenner Pond", "Tar Backstrand", "Cromer Treen", "Stim Lancetip", "Vorn Sharpeye", "Rack Leaflets", "Bruck Valleyhome", "Arden Follower"];
//var secondRegimentKnights = [];
//
//console.time("Total completion time");
//
//for (var i = 0, x = firstRegimentNewbs.length; i < x; i++){
//    firstRegimentKnights.push(new Knight(firstRegimentNewbs[i], 1));
//}
//
//for (var i = 0, x = secondRegimentNewbs.length; i < x; i++){
//    secondRegimentKnights.push(new Knight(secondRegimentNewbs[i], 1));
//}
//
//console.timeEnd("Total completion time");
//
//for (var i = 0, x = firstRegimentKnights.length; i < x; i++){
//    console.log(firstRegimentKnights[i].name);
//}
//
//for (var i = 0, x = secondRegimentKnights.length; i < x; i++){
//    console.log(secondRegimentKnights[i].name);
//}
//
//function SpeedTest(testImplement, testParams, repetitions){
//    this.testImplement = testImplement;
//    this.testParams = testParams;
//    this.repetitions = repetitions || 10000;
//}
//
//SpeedTest.prototype = {
//    startTest: function(){
//        var beginTime, endTime, sumTimes = 0;
//        for (var i = 0, x = this.repetitions; i < x; i++){
//            beginTime = +new Date();
//            this.testImplement(this.testParams);
//            endTime = +new Date();
//            sumTimes += endTime - beginTime;
//        }
//        this.average = sumTimes / this.repetitions;
//        return console.log("Average execution across " +  this.repetitions + ": " + this.average);
//    }
//}
//
//
//var firstRegimentNewbs = ["Grimble Horsehead", "Jark Winterborn", "Bunder Ropefist", "Ernst Breadbaker"];
//var firstRegimentKnights = [];
//var listForTests = [firstRegimentNewbs, firstRegimentKnights];
//
//var BP = function(listOfParams){
//    for (var i = 0, x = listOfParams[0].length; i < x; i++) {
//        listOfParams[1].push(new Knight(listOfParams[0][i], 1));
//    }
//    return listOfParams[1];
//}
//
//var BPtest = new SpeedTest(BP, listForTests, 1000000);
////BPtest.startTest();
//console.log(BP(listForTests));

//function testJasmine(a) {
//    return a * 2;
//}
//
//function countEntries (KnightResponses, value) {
//    var count = 0, x = KnightResponses.length;
//    for(var i = 0; i < x; i++) {
//        if (KnightResponses[i] === value){
//            count++;
//        }
//    }
//    return count;
//}
//
//function LeatherArmor (bodyStyle, numBuckles, numSpaulders){
//    this.bodyStyle = bodyStyle;
//    this.numBuckles = numBuckles;
//    this.numSpaulders = numSpaulders
//}
//
//
//function ChainMail (metal, linkDiameter, hasHood, skirtLength) {
//    this.metal = metal;
//    this.linkDiameter = linkDiameter;
//    this.hasHood = hasHood;
//    this.skirtLength = skirtLength;
//}



//var fields = ["Jason Millhouse", "1", "12", true, true, false];
//console.log(countEntries(fields, true));

//function assignKnightsArmor (knights, armorAvail) {
//    var x = knights.length;
//    //console.log("Knights Available: :" + x);
//    var y = armorAvail.length;
//    //console.log("Number of Armor Available: " + y);
//    for (var i = 0; i < x; i++){
//        for (var j = 0; j < y; j++) {
//            if( armorAvail[j] instanceof ChainMail){
//                knights[i].armor = armorAvail.splice(j, 1)[0];
//                y--;
//                //console.log(knights[i]);
//                //console.log(y);
//                break;
//            }
//        }
//    }
//}
//
//function Armor (location){
//    this.location = location;
//}
//
//Armor.prototype = {
//    putOn: function(){
//        alert("Your armor is on.");
//    }
//}
//LeatherArmor.prototype = Object.create(Armor.prototype);
//ChainMail.prototype = Object.create(Armor.prototype);

//var kingsMail = new ChainMail("gold", 2, true, 36);
//console.log(kingsMail instanceof Armor);
//
//var armorList = [];
//var newbs = [];
//
//armorList.push(new LeatherArmor("Large", 10, 2));
//armorList.push(new LeatherArmor("Small", 6, 2));
//armorList.push(new ChainMail("Bronze", "2 cm", true, "22 cm"));
//armorList.push(new ChainMail("Bronze", "4 cm", true, "24 cm"));
//console.log(armorList);
//
//newbs.push(new Knight("Arch Greymane", 1));
//newbs.push(new Knight("Tar Backstrand", 2));
//
//console.log(newbs);
//
//assignKnightsArmor(newbs, armorList);
//
//console.log(testJasmine(2));

//try {
//    var list = "Empty string";
//    var newHallOfFame = ["Dask Frostring", "Render Tallborn"];
//
//    if (list === undefined){
//        throw new ReferenceError();
//    }
//    if ((list instanceof Array) === false){
//        throw new TypeError();
//    }
//    list = list.concat(newHallOfFame);
//} catch (error) {
//    if (error instanceof ReferenceError){
//        alert(error + "\n" +
//            "The HoF roster does not exist as \"list\"!\n" +
//            "Check for relocation in master document.");
//    }
//    if (error instanceof TypeError) {
//        alert(error + "\n" +
//            "Alas, \"list\" exists, but is no longer an Array.\n" +
//            "Check for a disastrous overwrite");
//    }
//} finally {
//    console.log("list is a " + typeof(list) + list);
//
//}
//var id = "myHeader",
//    update = "This is different.",
//    existing = "Hello World!";

//function changeInnerHTMLByIdOrExisting(id, update, existing) {
//    try {
//        var newElement = undefined;
//        document.getElementById(id).innerHTML = update;
//        console.log(document.getElementById(id));
//    } catch (error) {
//        try {
//            console.log("Could not find ID, looking for TagName");
//            var elements = document.getElementsByTagName('*');
//            for (var i = 0, x = elements.length; i < x; i++) {
//                if (elements[i].innerHTML === existing) {
//                    elements[i].innerHTML = update;
//                    id = elements[i].id;
//                    console.log(elements[i]);
//                    console.log(id);
//                    break;
//                }
//                if (i === (x - 1)) {
//                    throw new Error();
//                }
//            }
//        } catch (error2) {
//            console.log("Successful Error2 Catch");
//            alert(error2.message + "\nCreating new text node.");
//            newElement = document.createTextNode(update);
//            console.log(newElement);
//        }
//    } finally {
//        if (newElement !== undefined) {
//            console.log("Returning new text node...");
//            return newElement;
//        } else {
//            console.log("Modified element \"" + (id || existing) +
//                        "\" with inner HTML \"" + update + ".");
//        }
//    }
//}

var castle = {
    soldiers: 865,
    capacity: 3000,
    keep: {
        soldiers: 19,
        capacity: 40,
        drawbridge: {
            soldiers: 8,
            capacity: 20,
            open: function(){
                console.log("rrrBang!");
            },
            close: function(){
              console.log("yunClack!");
            }
        }
    }
};

var reinforcements = 12,
    o = castle.keep.drawbridge;
if(o.capacity >= o.soldiers + reinforcements) {
    o.open();
    o.soldiers += reinforcements;
    console.log("Drawbridge soldiers: " + o.soldiers);
    o.close();
} else {
    console.log("Reinforcements would require split unit.");
}