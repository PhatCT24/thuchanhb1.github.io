document.addEventListener("DOMContentLoaded", function(){
    const quizContainer = document.getElementById("quiz-container");

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
                questionDiv.innerHTML += `
                    <label><input type="radio" name="q${q.id}" value="${option}"> ${option}</label>
                `;
            });
        } 
        else if (q.type === "checkbox") {
            q.options.forEach(option => {
                questionDiv.innerHTML += `
                    <label><input type="checkbox" name="q${q.id}" value="${option}"> ${option}</label>
                `;
            });
        } 
        else if (q.type === "text") {
            questionDiv.innerHTML += `
                <textarea name="q${q.id}" rows="3" placeholder="Nhập câu trả lời của bạn..."></textarea>
            `;
        }

        // Thêm câu hỏi vào giao diện
        quizContainer.appendChild(questionDiv);
    });
});
