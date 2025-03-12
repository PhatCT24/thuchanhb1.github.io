document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit"); // Lấy nút submit

    // Tạo danh sách câu hỏi
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        // Hiển thị tiêu đề câu hỏi
        const questionTitle = document.createElement("p");
        questionTitle.textContent = `${index + 1}. ${q.text}`;
        questionDiv.appendChild(questionTitle);


        // Xử lý từng loại câu hỏi
        if (q.type === "true_false") {
            questionDiv.innerHTML += `
                <label><input type="radio" name="q${q.id}" value="true"> Đúng</label>
                <label><input type="radio" name="q${q.id}" value="false"> Sai</label>
            `;
        } 
        else if (q.type === "multiple_choice") {
            q.options.forEach(option => {
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = `q${q.id}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(` ${option}`));
                questionDiv.appendChild(label);
            });
        } 
        else if (q.type === "checkbox") {
            q.options.forEach(option => {
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "checkbox";
                input.name = `q${q.id}`;
                input.value = option;
                label.appendChild(input);
                label.appendChild(document.createTextNode(` ${option}`));
                questionDiv.appendChild(label);
            });
        } 
        else if (q.type === "text") {
            const textarea = document.createElement("textarea");
            textarea.name = `q${q.id}`;
            textarea.rows = 3;
            textarea.placeholder = "Nhập câu trả lời của bạn...";
            questionDiv.appendChild(textarea);
        }

        // Thêm câu hỏi vào giao diện
        quizContainer.appendChild(questionDiv);
    });

    // Xử lý sự kiện khi bấm nút submit
    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn form reload lại trang

        // Vô hiệu hóa tất cả các ô nhập để giữ nguyên lựa chọn
        document.querySelectorAll("input, textarea").forEach(input => {
            input.disabled = true;
        });
    });
});