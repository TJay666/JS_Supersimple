const todo = document.querySelector(".todo"); // 選取 class 為 .todo 的元素
const list = document.querySelector(".list"); // 選取 class 為 .list 的元素
const add = document.querySelector(".btn-add"); // 選取 class 為 .btn-add 的元素

function addTask() {
    if (todo.value.trim() === "") { // 檢查輸入框是否為空
        todo.placeholder = "Add a task..."; // 設置 placeholder
        todo.classList.add("empty-input"); // 添加 class

        const resetPlaceholder = () => {
            todo.placeholder = "TODO"; // 重置 placeholder
            todo.classList.remove("empty-input"); // 移除 class
            todo.removeEventListener("input", resetPlaceholder); // 移除事件監聽器
        };

        todo.addEventListener("input", resetPlaceholder); // 添加事件監聽器
        return;
    }

    const task = document.createElement("li"); // 創建 li 元素
    task.innerHTML = `
        <div class="task-content">
            <input type="checkbox" class="check">
            <button class="btn-follow">▶️</button>
            <label>${todo.value}</label>
            <button class="btn-del">🗑️</button>
        </div>
    `; // 設置 li 元素的 HTML 內容

    const btnDelete = task.querySelector(".btn-del"); // 選取 class 為 .btn-del 的元素
    const check = task.querySelector(".check"); // 選取 class 為 .check 的元素
    const btnFollow = task.querySelector(".btn-follow"); // 選取 class 為 .btn-follow 的元素

    btnDelete.addEventListener("click", function () {
        task.remove(); // 刪除任務
    });

    check.addEventListener("change", function () {
        if (check.checked) { // 檢查是否勾選
            task.style.textDecoration = "line-through"; // 設置刪除線
            task.style.color = "gray"; // 設置顏色
            list.append(task); // 將任務移到列表底部
        } else {
            task.style.textDecoration = "none"; // 移除刪除線
            task.style.color = "black"; // 設置顏色
            list.prepend(task); // 將任務移到列表頂部
        }
    });

    btnFollow.addEventListener("click", function () {
        if (btnFollow.textContent === "▶️") { // 檢查按鈕文字
            btnFollow.textContent = "🔽"; // 更改按鈕文字
            let subTaskInput = task.querySelector(".sub-task-input"); // 選取 class 為 .sub-task-input 的元素
            let subTasksList = task.querySelector(".sub-tasks"); // 選取 class 為 .sub-tasks 的元素

            if (!subTaskInput) { // 檢查是否存在子任務輸入框
                subTaskInput = document.createElement("input"); // 創建 input 元素
                subTaskInput.type = "text"; // 設置 input 類型
                subTaskInput.placeholder = "Enter sub-task"; // 設置 placeholder
                subTaskInput.className = "sub-task-input"; // 設置 class
                task.appendChild(subTaskInput); // 添加到任務中

                subTasksList = document.createElement("div"); // 創建 div 元素
                subTasksList.className = "sub-tasks"; // 設置 class
                task.appendChild(subTasksList); // 添加到任務中

                subTaskInput.addEventListener("keyup", function (event) {
                    if (event.key === "Enter" && subTaskInput.value !== "") { // 檢查是否按下 Enter 鍵
                        const subTask = document.createElement("div"); // 創建 div 元素
                        subTask.className = "task-content"; // 設置 class
                        subTask.innerHTML = `
                            <input type="checkbox" class="check">
                            <label>${subTaskInput.value}</label>
                            <button class="btn-del">🗑️</button>
                        `; // 設置 div 元素的 HTML 內容

                        const subBtnDelete = subTask.querySelector(".btn-del"); // 選取 class 為 .btn-del 的元素
                        const subCheck = subTask.querySelector(".check"); // 選取 class 為 .check 的元素

                        subBtnDelete.addEventListener("click", function () {
                            subTask.remove(); // 刪除子任務
                        });

                        subCheck.addEventListener("change", function () {
                            if (subCheck.checked) { // 檢查是否勾選
                                subTask.style.textDecoration = "line-through"; // 設置刪除線
                                subTask.style.color = "gray"; // 設置顏色
                            } else {
                                subTask.style.textDecoration = "none"; // 移除刪除線
                                subTask.style.color = "black"; // 設置顏色
                            }
                        });

                        subTasksList.appendChild(subTask); // 添加子任務到列表
                        subTaskInput.value = ""; // 清空輸入框
                    }
                });

                subTaskInput.addEventListener("blur", function () {
                    if (subTaskInput.value !== "") { // 檢查輸入框是否為空
                        const subTask = document.createElement("div"); // 創建 div 元素
                        subTask.className = "task-content"; // 設置 class
                        subTask.innerHTML = `
                            <input type="checkbox" class="check">
                            <label>${subTaskInput.value}</label>
                            <button class="btn-del">🗑️</button>
                        `; // 設置 div 元素的 HTML 內容

                        const subBtnDelete = subTask.querySelector(".btn-del"); // 選取 class 為 .btn-del 的元素
                        const subCheck = subTask.querySelector(".check"); // 選取 class 為 .check 的元素

                        subBtnDelete.addEventListener("click", function () {
                            subTask.remove(); // 刪除子任務
                        });

                        subCheck.addEventListener("change", function () {
                            if (subCheck.checked) { // 檢查是否勾選
                                subTask.style.textDecoration = "line-through"; // 設置刪除線
                                subTask.style.color = "gray"; // 設置顏色
                            } else {
                                subTask.style.textDecoration = "none"; // 移除刪除線
                                subTask.style.color = "black"; // 設置顏色
                            }
                        });

                        subTasksList.appendChild(subTask); // 添加子任務到列表
                        subTaskInput.value = ""; // 清空輸入框
                    }
                });
            } else {
                subTaskInput.style.display = "block"; // 顯示子任務輸入框
                subTasksList.style.display = "block"; // 顯示子任務列表
            }
        } else {
            btnFollow.textContent = "▶️"; // 更改按鈕文字
            const subTaskInput = task.querySelector(".sub-task-input"); // 選取 class 為 .sub-task-input 的元素
            const subTasks = task.querySelector(".sub-tasks"); // 選取 class 為 .sub-tasks 的元素
            if (subTaskInput) {
                subTaskInput.style.display = "none"; // 隱藏子任務輸入框
            }
            if (subTasks) {
                subTasks.style.display = "none"; // 隱藏子任務列表
            }
        }
    });

    list.append(task); // 添加任務到列表
    todo.value = ""; // 清空輸入框
}

todo.addEventListener("keyup", function (event) {
    if (event.key === "Enter") { // 檢查是否按下 Enter 鍵
        addTask(); // 添加任務
    }
});

add.addEventListener("click", addTask); // 添加點擊事件監聽器