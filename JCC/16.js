const mapData = new Map();
mapData["name"] = "Test";
mapData.set("subject", "Javascript");
mapData.set("subject2", "React");

console.log(mapData);
console.log(mapData.has("name"));
console.log(mapData.has("subject"));
console.log(mapData.size);
