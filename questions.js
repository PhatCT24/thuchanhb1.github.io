// questions.js
const questions = [
    // Nhóm 1: Đúng / Sai
    { type: "true_false", text: "Trái đất quay quanh mặt trời?", name: "q1" },
    { type: "true_false", text: "Cao Tiến Phát đẹp trai nhất thế giới?", name: "q2" },
    { type: "true_false", text: "Con người có thể sống mà không cần oxy?", name: "q3" },
    { type: "true_false", text: "Cá có thể bay?", name: "q4" },
    { type: "true_false", text: "Mặt trăng có ánh sáng riêng?", name: "q5" },
    { type: "true_false", text: "Băng tan khi nhiệt độ tăng?", name: "q6" },
    { type: "true_false", text: "Trái đất hình vuông?", name: "q7" },
    { type: "true_false", text: "Nước biển có màu xanh do phản xạ ánh sáng?", name: "q8" },
    { type: "true_false", text: "Máy bay có thể bay ngược thời gian?", name: "q9" },
    { type: "true_false", text: "Con người có thể nhìn thấy tia hồng ngoại?", name: "q10" },

    // Nhóm 2: Chọn 1 đáp án
    { type: "multiple_choice", text: "Thủ đô của Việt Nam là?", name: "q11", options: ["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ"] },
    { type: "multiple_choice", text: "Thành phần chính của không khí là?", name: "q12", options: ["Oxy", "Nitơ", "CO2", "Hidro"] },
    { type: "multiple_choice", text: "Sông nào dài nhất thế giới?", name: "q13", options: ["Amazon", "Mississippi", "Nile", "Mekong"] },
    { type: "multiple_choice", text: "Ngôn ngữ lập trình nào phổ biến nhất?", name: "q14", options: ["Python", "Java", "C++", "Ruby"] },
    { type: "multiple_choice", text: "Hành tinh lớn nhất trong hệ mặt trời?", name: "q15", options: ["Sao Kim", "Sao Thổ", "Sao Mộc", "Sao Hỏa"] },
    { type: "multiple_choice", text: "Kim loại nào dẫn điện tốt nhất?", name: "q16", options: ["Sắt", "Nhôm", "Đồng", "Bạc"] },
    { type: "multiple_choice", text: "Ai là tác giả của 'Truyện Kiều'?", name: "q17", options: ["Nguyễn Du", "Nguyễn Trãi", "Hồ Xuân Hương", "Bà Huyện Thanh Quan"] },
    { type: "multiple_choice", text: "Nước nào có diện tích lớn nhất thế giới?", name: "q18", options: ["Mỹ", "Trung Quốc", "Nga", "Canada"] },
    { type: "multiple_choice", text: "Tốc độ ánh sáng là bao nhiêu?", name: "q19", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"] },
    { type: "multiple_choice", text: "Loài vật nào ngủ nhiều nhất?", name: "q20", options: ["Mèo", "Dơi", "Chó", "Ngựa"] },

    // Nhóm 3: Chọn nhiều đáp án
    { type: "checkbox", text: "Chọn các động vật có vú?", name: "q21", options: ["Chó", "Mèo", "Rắn", "Cá"] },
    { type: "checkbox", text: "Chọn các màu cơ bản?", name: "q22", options: ["Đỏ", "Xanh dương", "Xanh lá", "Vàng"] },
    { type: "checkbox", text: "Những môn thể thao dưới nước?", name: "q23", options: ["Bơi lội", "Lặn biển", "Chạy bộ", "Bóng rổ"] },
    { type: "checkbox", text: "Các quốc gia thuộc châu Á?", name: "q24", options: ["Việt Nam", "Trung Quốc", "Brazil", "Nhật Bản"] },
    { type: "checkbox", text: "Những ngôn ngữ lập trình phổ biến?", name: "q25", options: ["Java", "Python", "HTML", "CSS"] },
    { type: "checkbox", text: "Các hành tinh trong hệ mặt trời?", name: "q26", options: ["Sao Hỏa", "Sao Kim", "Mặt Trời", "Mặt Trăng"] },
    { type: "checkbox", text: "Những món ăn Việt Nam?", name: "q27", options: ["Phở", "Pizza", "Bánh mì", "Taco"] },
    { type: "checkbox", text: "Các nước có nền kinh tế lớn?", name: "q28", options: ["Mỹ", "Ấn Độ", "Nga", "Nam Phi"] },
    { type: "checkbox", text: "Những thiết bị điện tử?", name: "q29", options: ["Điện thoại", "Laptop", "Bàn", "Tivi"] },
    { type: "checkbox", text: "Những ngôn ngữ chính thức của Liên Hợp Quốc?", name: "q30", options: ["Tiếng Anh", "Tiếng Pháp", "Tiếng Đức", "Tiếng Trung"] },

    // Nhóm 4: Tự luận
    { type: "text", text: "Hãy mô tả một ngày của bạn?", name: "q31" },
    { type: "text", text: "Bạn thích môn học nào nhất và tại sao?", name: "q32" },
    { type: "text", text: "Hãy kể về một kỷ niệm đáng nhớ của bạn?", name: "q33" },
    { type: "text", text: "Bạn muốn du lịch ở đâu nhất?", name: "q34" },
    { type: "text", text: "Hãy mô tả sở thích của bạn?", name: "q35" },
    { type: "text", text: "Bạn có thói quen nào tốt?", name: "q36" },
    { type: "text", text: "Mục tiêu của bạn trong 5 năm tới là gì?", name: "q37" },
    { type: "text", text: "Hãy kể tên một cuốn sách bạn yêu thích và lý do?", name: "q38" },
    { type: "text", text: "Điều gì làm bạn cảm thấy hạnh phúc?", name: "q39" },
    { type: "text", text: "Bạn có lời khuyên nào cho bản thân không?", name: "q40" }
];
