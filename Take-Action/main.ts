// Định nghĩa kiểu dữ liệu cho một đối tượng Person
type person = {
    name: string;
    age: number;
    email?: string; // Thuộc tính tùy chọn
};

// Khai báo một đối tượng sử dụng kiểu dữ liệu Person
const persons: person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Truy cập các thuộc tính của đối tượng
console.log(`Name: ${persons.name}`);
console.log(`Age: ${persons.age}`);
console.log(`Email: ${persons.email || "N/A"}`); // Sử dụng 