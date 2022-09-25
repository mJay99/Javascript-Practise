
let duplicateObjects = [
  
  {
    "id": 0,
    "name": "jayesh mali",
    "work": "Unilogic",
    "email": "adam.carter@unilogic.com",
    "dob": "1978",
    "address": "83 Warner Street",
    "city": "Boston",
    "optedin": true
  },
  {
    "id": 1,
    "name": "bhushan mahajan",
    "work": "Connic",
    "email": "leanne.brier@connic.org",
    "dob": "1987",
    "address": "9 Coleman Avenue",
    "city": "Toronto",
    "optedin": false
  },
  {
    "id": 2,
    "name": "jayesh mali",
    "work": "Connic",
    "email": "leanne.brier@connic.org",
    "dob": "1987",
    "address": "9 Coleman Avenue",
    "city": "Toronto",
    "optedin": false
  },
  {
    "id": 3,
    "name": "mayur patkar",
    "work": "Connic",
    "email": "leanne.brier@connic.org",
    "dob": "1987",
    "address": "9 Coleman Avenue",
    "city": "Toronto",
    "optedin": false
  }
]

var uniqueObjects = function(duplicates,key=""){
  let filterBy = "";
  filterBy = key ? key : "id";
  console.log([...duplicates.reduce((map,item)=>map.set(item[filterBy],item),new Map()).values()])
}

uniqueObjects(duplicateObjects,"city");