// ============================================================
// BLOCK 6 BOSS CHALLENGE — Interactive Todo List
// ============================================================
// CONCEPTS: querySelector, addEventListener, createElement,
//           appendChild, remove, classList, textContent,
//           localStorage (BONUS), dynamic DOM building
// ============================================================

// --- Select DOM elements ---
const taskInput  = document.querySelector("#taskInput");
const addBtn     = document.querySelector("#addBtn");
const taskList   = document.querySelector("#taskList");
const taskCount  = document.querySelector("#taskCount");
const clearAllBtn = document.querySelector("#clearAllBtn");
const footer     = document.querySelector("#footer");

// ============================================================
// CORE FUNCTIONS
// ============================================================

// Create and append a new task <li> element
const addTask = (text) => {
  const trimmedText = text.trim();

  if (trimmedText === "") {
    taskInput.style.borderColor = "#e74c3c";
    setTimeout(() => taskInput.style.borderColor = "", 800);
    return;
  }

  // Build the task item element
  const li = document.createElement("li");
  li.classList.add("task-item");

  // Task text span
  const taskSpan = document.createElement("span");
  taskSpan.classList.add("task-text");
  taskSpan.textContent = trimmedText;

  // Done button
  const doneBtn = document.createElement("button");
  doneBtn.classList.add("done-btn");
  doneBtn.textContent = "✅ Done";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
    const isDone = li.classList.contains("done");
    doneBtn.textContent = isDone ? "↩️ Undo" : "✅ Done";
    updateCount();
    saveToLocalStorage();
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "🗑️ Delete";
  deleteBtn.addEventListener("click", () => {
    // Animate out before removing
    li.style.transition = "opacity 0.2s, transform 0.2s";
    li.style.opacity = "0";
    li.style.transform = "translateX(20px)";
    setTimeout(() => {
      li.remove();
      updateCount();
      saveToLocalStorage();
    }, 200);
  });

  // Assemble the task item
  li.appendChild(taskSpan);
  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);

  // Add to the list
  taskList.appendChild(li);

  // Clear the input and refocus
  taskInput.value = "";
  taskInput.focus();

  updateCount();
  saveToLocalStorage();
};

// Update the "X tasks remaining" counter
const updateCount = () => {
  const allTasks   = taskList.querySelectorAll(".task-item");
  const doneTasks  = taskList.querySelectorAll(".task-item.done");
  const remaining  = allTasks.length - doneTasks.length;

  if (allTasks.length === 0) {
    taskCount.textContent = "No tasks yet — add one above!";
    footer.style.display = "none";

    // Show empty state message
    if (!taskList.querySelector(".empty-msg")) {
      const msg = document.createElement("p");
      msg.classList.add("empty-msg");
      msg.textContent = "🎉 All clear! Nothing to do.";
      taskList.appendChild(msg);
    }
  } else {
    // Remove empty state if tasks exist
    const emptyMsg = taskList.querySelector(".empty-msg");
    if (emptyMsg) emptyMsg.remove();

    taskCount.textContent =
      remaining === 0
        ? "All tasks done! 🎉"
        : `${remaining} task${remaining !== 1 ? "s" : ""} remaining`;

    footer.style.display = "block";
  }
};

// ============================================================
// BONUS: localStorage — Tasks survive page refresh!
// ============================================================

const saveToLocalStorage = () => {
  const tasks = [];
  taskList.querySelectorAll(".task-item").forEach(item => {
    tasks.push({
      text: item.querySelector(".task-text").textContent,
      done: item.classList.contains("done")
    });
  });
  localStorage.setItem("jsTasks", JSON.stringify(tasks));
};

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem("jsTasks");
  if (!saved) return;

  const tasks = JSON.parse(saved);
  tasks.forEach(task => {
    addTask(task.text);
    if (task.done) {
      // Mark last added item as done
      const lastItem = taskList.lastElementChild;
      if (lastItem) {
        lastItem.classList.add("done");
        const doneBtn = lastItem.querySelector(".done-btn");
        if (doneBtn) doneBtn.textContent = "↩️ Undo";
      }
    }
  });
};

// ============================================================
// EVENT LISTENERS
// ============================================================

// Add button click
addBtn.addEventListener("click", () => addTask(taskInput.value));

// Press Enter in the input field
taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addTask(taskInput.value);
});

// Clear All button
clearAllBtn.addEventListener("click", () => {
  if (confirm("Delete all tasks? This cannot be undone.")) {
    taskList.innerHTML = "";
    updateCount();
    localStorage.removeItem("jsTasks");
  }
});

// ============================================================
// INITIALISE — Load saved tasks on page load
// ============================================================
loadFromLocalStorage();
updateCount();

// ✅ What to try next:
//   - Add a filter: Show All / Active / Completed tabs
//   - Add drag-and-drop to reorder tasks
//   - Add due dates with a date input
