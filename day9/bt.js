const students = [
    { id: 1, name: "nguyen Van An", age: 15, grade: "10", scores: { math: 85, english: 78, science: 92 } },
    { id: 2, name: "Tran Thi Binh", age: 16, grade: "11", scores: { math: 90, english: 88, science: 84 } },
    { id: 3, name: "Le Van Cuong", age: 14, grade: "9", scores: { math: 72, english: 65, science: 70 } },
    { id: 4, name: "Hoang Thi Dao", age: 15, grade: "10", scores: { math: 95, english: 92, science: 98 } },
    { id: 5, name: "Phan Van Em", age: 17, grade: "12", scores: { math: 67, english: 55, science: 60 } },
    { id: 6, name: "Vo Thi Hoa", age: 15, grade: "10", scores: { math: 78, english: 85, science: 80 } },
    { id: 7, name: "Dang Van Hieu", age: 16, grade: "11", scores: { math: 88, english: 75, science: 90 } },
    { id: 8, name: "Ngo Thi Lan", age: 14, grade: "9", scores: { math: 65, english: 60, science: 58 } },
    { id: 9, name: "Pham Van Minh", age: 17, grade: "12", scores: { math: 92, english: 85, science: 91 } },
    { id: 10, name: "Tran Thi Ngoc", age: 15, grade: "10", scores: { math: 81, english: 79, science: 85 } }
];

// Viết một hàm tìm học sinh có điểm toán cao nhất trong danh sách.
function question1() {
    var max = students[0];
    for (i = 1; i < students.length; i++) {
        if (max.scores.math < students[i].scores.math) {
            max = students[i];
        }
    }
    console.log(max);
}
// question1();
// Lọc danh sách học sinh thuộc lớp "10".
function question2() {
    var a = students.filter(e => e.grade == 10);
    console.log(a);
}
// question2();
// Tính điểm trung bình của mỗi học sinh dựa trên các môn học và thêm thuộc tính average vào từng đối tượng học sinh.
function question3() {
    var b = students.map(e => {
        var avg = (e.scores.math + e.scores.english + e.scores.science) / 3;
        e.average = avg;
        return e;
    });
    console.log(b);
}
// question3();
// Sắp xếp danh sách học sinh theo thứ tự tăng dần của tuổi.
function question4() {
    var c = students.sort((a, b) => a.age - b.age)
    console.log(c);
}
// question4()
// Lọc danh sách học sinh có điểm trung bình lớn hơn 80.
function question5() {
    var c = students.filter(e => ((e.scores.math + e.scores.english + e.scores.science) / 3) > 80);
    console.log(c);
}
// question5();
// Thêm thuộc tính rank cho mỗi học sinh dựa vào điểm trung bình:
// Điểm trung bình >= 90: "Xuất sắc"
// Điểm trung bình từ 75 - 89: "Giỏi"
// Điểm trung bình từ 50 - 74: "Trung bình"
// Điểm trung bình < 50: "Yếu".
function question6() {
    var b = students.map(e => {
        var avg = (e.scores.math + e.scores.english + e.scores.science) / 3;
        var rank = "";
        if (avg >= 90) {
            rank = "Xuất sắc";
        } else if (avg >= 75 && avg <= 89) {
            rank = "Giỏi";
        } else if (avg >= 50 && avg <= 74) {
            rank = "Trung bình";
        } else {
            rank = "Yếu";
        }
        e.average = avg;
        e.rank = rank;
        return e;
    });
    console.log(b);
}
// question6();
//7.Tính số lượng học sinh trong mỗi lớp(grade).

//8.Kiểm tra xem có học sinh nào có điểm môn bất kỳ < 40 không.
function question7() {
    var d = students.some(e => e.scores < 40);
    console.log(d);
}
// question7();
//9.Lọc danh sách học sinh có điểm >= 80 ở tất cả các môn học.
function question8() {
    var e = students.filter(e => e.scores.math > 80 && e.scores.english > 80 && e.scores.science > 80);
    console.log(e);
}
// question8();
//10.Chia học sinh thành các nhóm dựa vào điểm Toán:
// Nhóm 1: >= 90
// Nhóm 2: Từ 75 - 89
// Nhóm 3: < 75
function question9() {
    var a = students.map(e => {
        if (e.scores.math >= 90) {
            e.group = "Nhóm 1"
        } else if (e.scores.math >= 75 && e.scores.math <= 89) {
            e.group = "Nhóm 2"
        } else { e.group = "Nhóm 3" }
        return e;
    });
    console.log(a);
}
// question9();
// 11. Cập nhật tên học sinh trong danh sách sao cho mỗi tên đều được viết hoa chữ cái đầu.
function question10() {
    var q = students.map(e => {
        e.name = e.name.charAt(0).toLocaleUpperCase() + e.name.slice(1);
        return e;
    });
    console.log(q);
}
// question10();
// 12. Xóa các học sinh có tuổi nhỏ hơn 14 khỏi danh sách.
function question11() {
    var f = students.map(e => {
        if (e.age < 14) {
            e.age = e.slice(1)
        }
        return e;
    });
}
// question11();
// 13. Lọc danh sách các học sinh có tên chứa chữ "An".
function question12() {
    var w = students.filter(e => e.name.includes("An"))
    console.log(w);
}
// question12();
// 14. Tính tổng điểm Toán, Anh và Khoa học của tất cả học sinh trong danh sách.

// 15. Tạo một mảng mới chỉ chứa id của các học sinh.

// 16. Viết hàm để xáo trộn thứ tự ngẫu nhiên các học sinh trong danh sách.

// 17 .Tìm học sinh có tuổi nhỏ nhất trong danh sách.

// 18. Thêm một đối tượng học sinh mới vào danh sách.
// students.push(
//     { id: 11, name: "Tran linh", age: 16, grade: "11", scores: { math: 89, english: 74, science: 81 } }
// );
//  console.log(students);

// 19. Kiểm tra xem có học sinh nào thuộc lớp "12" không.
function question13() {
    var a = students.some(e => e.grade = "12")
    console.log(a);

}
// question13();
// 20. Cập nhật điểm tiếng Anh của học sinh có id = 4 thành 95.
function question14() {
    var a = students.map(e => {
        if (e.id === 4) {
            e.scores.english = 95;
        };
        return e;
    });
    console.log(a);

}
// question14();
// 21. Xóa học sinh có id = 2 khỏi danh sách.
function question15() {
    var a = students.filter(e => e.id != 2)
    console.log(a);
}
// question15();
// 22. Cập nhật tên của học sinh có id = 3 thành "Le Van Cuong Updated".
function question16() {
    var b = students.map(e => {
        if (e.id === 3) {
            e.name = "Le Van Cuong Updated";
        }
        return e;
    });
    console.log(b);
}
question16();
