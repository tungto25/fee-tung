// Danh sách học sinh mẫu
let students = [
    { name: "Trần Văn A", age: 16, class: 10, math: 75, english: 58, science: 85 },
    { name: "Nguyễn Thị B", age: 15, class: 9, math: 60, english: 62, science: 91 },
    { name: "Lê Văn C", age: 17, class: 11, math: 88, english: 92, science: 87 },
    { name: "Trương Anh D", age: 14, class: 9, math: 55, english: 59, science: 78 },
    { name: "Tạ Minh E", age: 15, class: 10, math: 95, english: 61, science: 82 },
];
// 1.Viết một hàm tìm học sinh có tổng điểm cao nhất(math + english + science).
function question1() {
    var total = students[0];
    for (i = 1; i < students.length; i++) {
        if ((students[0].math + students[0].english + students[0].science) < (students[i].math + students[i].english + students[i].science)) {
            total = students[i];
        }
    };
    console.log(total);
}
// question1();
// 2.Lọc danh sách học sinh có điểm tiếng Anh dưới 60 và môn Khoa học trên 80.
function question2() {
    var a = students.filter(e => e.english < 60 && e.science > 80);
    console.log(a);
}
// question2();
// 3.Tính điểm trung bình từng môn học(math, english, science) của toàn bộ học sinh.
function question3() {
    var totalMath = 0;
    var totalEnglish = 0;
    var totalScience = 0;
    for (i = 0; i < students.length; i++) {
        totalMath += students[i].math;
        totalEnglish += students[i].english;
        totalScience += students[i].science
    };
    var avgMath = totalMath / students.length;
    var avgEnglish = totalEnglish / students.length;
    var avgScience = totalScience / students.length;
    console.log(avgMath, avgEnglish, avgScience);
}
// question3();
// 4.Sắp xếp danh sách học sinh theo thứ tự giảm dần của điểm tiếng Anh.
function question4() {
    var a = students.sort((a, b) => a.english - b.english);
    console.log(a);

}
// question4();
// 5.Thêm thuộc tính pass(true / false) nếu điểm trung bình >= 60.
function question5() {
    var a = students.map(e => {
        var avg = (e.english + e.math + e.science) / 3;
        e.pass = avg >= 60 ? "true" : "false";
        return e;
    });
    console.log(a);

}
// question5();
// 6.Lọc danh sách học sinh có điểm trung bình nằm trong khoảng từ 70 đến 85.
function question6() {
    var a = students.filter(e => (e.english + e.math + e.science) / 3 > 70 && (e.english + e.math + e.science) / 3 < 85)
    console.log(a);

}
// question6();
// 7.Tính số lượng học sinh theo từng mức xếp hạng(Xuất sắc, Giỏi, Trung bình, Yếu).
function question7() {
    var xuatsac = 0;
    var gioi = 0;
    var trungbinh = 0;
    var yeu = 0;
    for (i = 0; i < students.length; i++) {
        var avg = (students[i].math + students[i].english + students[i].science) / 3;
        if (avg >= 90) {
            xuatsac++;
        } else if (avg >= 80) {
            gioi++
        } else if (avg >= 60) {
            trungbinh++;
        } else { yeu++ };
    };
    console.log("Xuất sắc" + " " + xuatsac);
    console.log("Giỏi" + " " + gioi);
    console.log("Trung bình" + " " + trungbinh);
    console.log("Yếu" + " " + yeu);
}
// question7();

// 8.Kiểm tra xem có học sinh nào bị điểm liệt(môn bất kỳ dưới 30) không.
function question8() {
    var a = students.some(e => e.english < 30 || e.math < 30 || e.science < 30);
    console.log(a);

}
// question8();
// 9.Tìm tất cả học sinh có tên bắt đầu bằng chữ "T" và học lớp 10.
function question9() {
    var a = students.filter(e => e.name.charAt(0) == "T" && e.class == "10");
    console.log(a);

}
// question9();
// 10.Tìm học sinh có điểm tiếng Anh cao nhất trong lớp 11.
function question10() {
    var max = students[0];
    for (i = 1; i < students.length; i++) {
        if (max.english < students[i].english && students[i].class == "11") {
            max = students[i];
        }
    };
    console.log(max);

}
// question10();
// 11.Chuyển toàn bộ tên học sinh sang dạng viết thường.
function question11() {
    var a = students.map(e => {
        e.name = e.name.toLocaleLowerCase();
        return e;
    });
    console.log(a);

}
// question11();
// 12.Tạo một danh sách mới gồm các học sinh lớn hơn 15 tuổi và có điểm trung bình > 70.
function question12() {
    var a = students.filter(e => e.age > 15 && ((e.english + e.math + e.science) / 3) > 70);
    console.log(a);

}
// question12();
// 13.Tính tổng số học sinh có điểm Khoa học từ 90 trở lên.
function question13() {
    var total = 0;
    for (i = 0; i < students.length; i++) {
        if (students[i].science > 90) {
            total++;
        }
    };
    console.log(total);

}
question13()
// 14.Tạo một bảng xếp hạng học sinh theo điểm trung bình(từ cao xuống thấp).


// 15.Viết một hàm kiểm tra xem có học sinh nào có tên gồm 3 từ không.


// 16.Tìm các học sinh có tên chứa ký tự "a" nhiều hơn 2 lần.


// 17.Đổi tên tất cả học sinh lớp 9 sang dạng in hoa toàn bộ.


// 18.Thêm 3 học sinh mới với thông tin đầy đủ vào danh sách.


// 19.Lọc danh sách học sinh có tất cả điểm >= 50 và tuổi <= 15.
