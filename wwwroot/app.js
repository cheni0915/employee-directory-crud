const apiUrl = "/employees";

const form = document.getElementById("employee-form");
const employeeIdInput = document.getElementById("employee-id");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const emailInput = document.getElementById("email");
const salaryInput = document.getElementById("salary");

const formTitle = document.getElementById("form-title");
const submitBtn = document.getElementById("submit-btn");
const cancelBtn = document.getElementById("cancel-btn");
const reloadBtn = document.getElementById("reload-btn");
const employeeList = document.getElementById("employee-list");
const message = document.getElementById("message");

let employees = [];

document.addEventListener("DOMContentLoaded", () => {
    loadEmployees();
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const employeeData = {
        name: nameInput.value.trim(),
        department: departmentInput.value.trim(),
        email: emailInput.value.trim(),
        salary: Number(salaryInput.value)
    };

    try {
        if (employeeIdInput.value) {
            await updateEmployee(employeeIdInput.value, employeeData);
            showMessage("員工資料修改成功", "success");
        } else {
            await createEmployee(employeeData);
            showMessage("員工新增成功", "success");
        }

        resetForm();
        loadEmployees();
    } catch (error) {
        showMessage(error.message, "error");
    }
});

cancelBtn.addEventListener("click", () => {
    resetForm();
});

reloadBtn.addEventListener("click", () => {
    loadEmployees();
});

async function loadEmployees() {
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("無法取得員工資料");
        }

        employees = await response.json();
        renderEmployees(employees);
    } catch (error) {
        showMessage(error.message, "error");
    }
}

function renderEmployees(data) {
    if (!data.length) {
        employeeList.innerHTML = `
            <tr>
                <td colspan="6" class="empty">尚無資料</td>
            </tr>
        `;
        return;
    }

    employeeList.innerHTML = data.map(employee => `
        <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.email}</td>
            <td>${employee.salary}</td>
            <td>
                <button type="button" class="action-btn edit-btn" onclick="editEmployee(${employee.id})">編輯</button>
                <button type="button" class="action-btn delete-btn" onclick="deleteEmployee(${employee.id})">刪除</button>
            </td>
        </tr>
    `).join("");
}

async function createEmployee(employeeData) {
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeData)
    });

    if (!response.ok) {
        throw new Error("新增員工失敗");
    }

    return await response.json();
}

async function updateEmployee(id, employeeData) {
    const response = await fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeData)
    });

    if (!response.ok) {
        throw new Error("修改員工失敗");
    }

    return await response.json();
}

async function deleteEmployee(id) {
    const confirmed = confirm("確定要刪除這位員工嗎？");
    if (!confirmed) return;

    try {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("刪除員工失敗");
        }

        showMessage("員工刪除成功", "success");
        loadEmployees();

        if (employeeIdInput.value === String(id)) {
            resetForm();
        }
    } catch (error) {
        showMessage(error.message, "error");
    }
}

function editEmployee(id) {
    const employee = employees.find(item => item.id === id);

    if (!employee) {
        showMessage("找不到該員工資料", "error");
        return;
    }

    employeeIdInput.value = employee.id;
    nameInput.value = employee.name;
    departmentInput.value = employee.department;
    emailInput.value = employee.email;
    salaryInput.value = employee.salary;

    formTitle.textContent = "編輯員工";
    submitBtn.textContent = "更新員工";
    cancelBtn.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function resetForm() {
    form.reset();
    employeeIdInput.value = "";
    formTitle.textContent = "新增員工";
    submitBtn.textContent = "新增員工";
    cancelBtn.classList.add("hidden");
}

function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;

    setTimeout(() => {
        message.textContent = "";
        message.className = "message";
    }, 3000);
}