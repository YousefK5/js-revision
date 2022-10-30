// Ex.1

function lessZero(num) {
    if(num<=0) {
        return true;
    }
    return false;
}

// console.log(lessZero(-100));

// Ex.2

function nextInt(num) {
    return num+1;
}

// Ex.3

function containNumber(arr){
    return arr.filter(el=> /\d/.test(el));
}

// console.log(containNumber(['ahm1ed','khaled','sa1ed','yousef']));

// Ex.4

function evenOdd(num) {
    if(num==1) {
        return 'odd';
    }
    else if (num==0) {
        return 'even';
    }
    else {
        return evenOdd(num-2);
    }
}

// console.log(evenOdd(2));

// Ex.5

function charSwap(str , ch1 , ch2) {
    let newStr=[...str].map(element => {
        if(element==ch1) {
            return ch2;
        }
        else if(element==ch2){
            return ch1;
        }
        else {
            return element;
        }
    });
    return newStr.join('');
}

// console.log(charSwap("aaddeee","a","d"));

// Ex.6 

let newSeries = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
];

let seriesForEach = [];
newSeries.forEach(e=>{
    seriesForEach.push({"id" : e.id , "title" : e.title});
});

// console.log(seriesForEach);

// Ex.9

let seriesMap = newSeries.map(e=> {
    return {"id" : e.id , "title" : e.title} 
});

// console.log(seriesMap);

// Ex.10

let seriesFilter = newSeries.filter(e=>{
    return e.rating < 5.0;
});

// console.log(seriesFilter);

// Ex.11

let arrayOfString = ["Java", "JavaScript", "Python", "C++", "PHP"];

var employee = {
    firstName: 'Rawan',
    info: {
        hasCar: true,
        hasPet: true,
        printAddress: function(){
            return this.data.address;
        },
        data: {
            address: "Zarqa"
        }
    },
}

console.log(employee.info.printAddress());