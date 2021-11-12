// Пример сортировки
// -----------------------------------
//  interface Emp {  
//    id: number;  
//    name: string;  
//  } 
//var emps: Emp[] = [  
//  { id: "5", name: "Kiran" },  
//  { id: "1", name: "Frank" },  
//  { id: "2", name: "Tom" },  
//  { id: "51", name: "Abc" }  
// ]
//var compareName = function (emp1: Emp, emp2: Emp) {  
//  if (emp1.name > emp2.name) { return -1; }  
//  if (emp1.name < emp2.name) {return 1; }  
//  return 0;  
//} 
//var sortedArray = emps.sort(compareName);   
//console.log(sortedArray );
// -----------------------------------  
//interface Place {
//  image: string,
//  name: string,
//  description: string,
//  remoteness: number,
//  bookedDates: number[],
//  price: number            
//}
//const objectInArray: Place[] = Object.entries(arrayPlaces)
//let objectInArray: Place[] = []          
//const objectInArray = Object.entries(arrayPlaces)
//console.log('До сортировки:', objectInArray);
//const compareName = function (emp1: Place, emp2: Place) {  
//  if (emp1.price > emp2.price) { return -1; }  
//  if (emp1.price < emp2.price) {return 1; }  
//  return 0;  
//} 
//const sortedArray = objectInArray.sort(compareName);   
//console.log('Отсортированный:', sortedArray);
//var emps: Emp[] = [  
//  { id: "5", name: "Kiran" },  
//  { id: "1", name: "Frank" },  
//  { id: "2", name: "Tom" },  
//  { id: "51", name: "Abc" }  
// ]
//
//const comparePlace = function(emp1: objectInArray, emp2: objectInArray) {  
//  if (emp1.price > emp2.price) { return -1; }  
//  if (emp1.price < emp2.price) {return 1; }  
//  return 0;            
//} 
//console.log('Сортировка');
////console.log(arrayPlaces); 
//let sortedArray = []
//sortedArray = objectInArray.sort(comparePlace);
//console.log(sortedArray);  