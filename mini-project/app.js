// ดึง element จากหน้า HTML มาใช้งาน
const input = document.getElementById('todo-input');       // ช่องกรอกข้อความ
const addBtn = document.getElementById('add-btn');         // ปุ่มเพิ่มรายการ
const list = document.getElementById('todo-list');         // พื้นที่แสดงรายการที่ต้องทำ
const remainingCount = document.getElementById('remaining-count'); // แสดงจำนวนที่ยังไม่เสร็จ

// ถ้ามีข้อมูลรายการใน localStorage แล้ว ให้นำมาใช้ ไม่งั้นเริ่มต้นด้วย array ว่าง
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// ฟังก์ชันบันทึกรายการลง localStorage
function saveToStorage() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// ฟังก์ชันนับรายการที่ยังไม่เสร็จ และแสดงผล
function updateRemaining() {
  const remaining = todos.filter(todo => !todo.completed).length;
  remainingCount.textContent = remaining; // เปลี่ยนข้อความในหน้าเว็บ
}

// ฟังก์ชันแสดงรายการทั้งหมดบนหน้าเว็บ
function renderTodos() {
  list.innerHTML = ''; // เคลียร์รายการเก่าออกก่อน

  // วนลูปทุกรายการใน todos
  todos.forEach((todo, index) => {
    const li = document.createElement('li');   // สร้าง <li> ขึ้นมา
    li.className = 'todo-item';                // ใส่คลาสเพื่อจัดรูปแบบ

    if (todo.completed) {
      li.classList.add('completed');           // ถ้าทำเสร็จแล้วให้ใส่ class 'completed'
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';                // กล่องเช็ค
    checkbox.checked = todo.completed;         // ติ๊กไว้ถ้าเคยทำเสร็จ
    checkbox.onchange = () => {                // ถ้าคลิกเปลี่ยนสถานะ
      todos[index].completed = !todos[index].completed;
      saveToStorage();                         // บันทึกใหม่
      renderTodos();                           // แสดงผลใหม่
    };

    const span = document.createElement('span');
    span.textContent = todo.text;              // ใส่ข้อความรายการ

    const delBtn = document.createElement('button');
    delBtn.textContent = '✕';                  // ปุ่มลบ
    delBtn.onclick = () => {
      todos.splice(index, 1);                  // ลบรายการออกจาก array
      saveToStorage();
      renderTodos();
    };

    // นำทั้งหมดมารวมใน <li>
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    // เพิ่ม <li> เข้าไปใน <ul>
    list.appendChild(li);
  });

  // อัปเดตจำนวนที่ยังไม่เสร็จ
  updateRemaining();
}

// เมื่อคลิกปุ่ม "ADD"
addBtn.onclick = () => {
  const text = input.value.trim();     // เอาข้อความจากช่องกรอก
  if (text) {
    todos.push({ text: text, completed: false });  // เพิ่มเข้า array
    input.value = '';                   // ล้างช่องกรอก
    saveToStorage();                    // บันทึก
    renderTodos();                      // แสดงรายการใหม่
  }
};

// ถ้ากดปุ่ม Enter ให้ทำเหมือนคลิกปุ่ม "ADD"
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});

// แสดงรายการทันทีเมื่อโหลดหน้าเว็บ
renderTodos();
