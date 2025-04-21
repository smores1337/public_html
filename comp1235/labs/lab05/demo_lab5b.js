// JSON

console.log('Hello, World!')

const my_obj = {
  username: "benz-gbc",
  last_active_time: "2025-02-06 10:00",
  playlists: ["Rap", "OPM", "R&B"]
}

console.log(my_obj)

// JSON 
const my_obj_json = JSON.stringify(my_obj);
console.log(my_obj_json)


// Converting JSON to Object

const my_obj_json2 = '{\n' +
' "username": "benz-gbc",\n' +
' "last-active-time": "2025-02-06 10:00",\n' +
' "playlists": ["Rap", "OPM", "R&B"]\n' +
'}'
console.log(my_obj_json2)

const my_obj2 = JSON.parse(my_obj_json2)
console.log(my_obj2)