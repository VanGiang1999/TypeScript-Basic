// Khai báo một đối tượng sử dụng kiểu dữ liệu Person
var person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
// Truy cập các thuộc tính của đối tượng
console.log("Name: ".concat(person.name));
console.log("Age: ".concat(person.age));
console.log("Email: ".concat(person.email || "N/A")); // Sử dụng 
