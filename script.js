//1. Select and print all married person. (filter)
//2. Print database sorted by age ASC. (min->max) (sort)
//3. Calculate average age. (reduce)
//4. Print statistic by country.
//{'Israel':3, ...}
//5#. Print married person sorted ASC by name, not married DESC by age and average age of married person.
//6. Remove user by position.


    const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

//Task 1

const married = database.filter(function CheckIsMarried(database){
    return database.isMarried === true;
});
console.log(married);



//Task 2
const sortForAge =function(a,b){
    if(a.age > b.age) return 1;
    if(a.age == b.age) return 0;
    if(a.age < b.age) return -1;
}
console.log(database.sort(sortForAge));

//Task 3
const resReduce = database.reduce(
    function(accumulator,totalAge){
        return accumulator + totalAge.age;
    }, 0
);

console.log(resReduce);

const country = database.reduce(function (acc, value) {

    acc[value.country] = (acc[value.country] || 0) + 1

    return acc;

}, {})

console.log(country);



