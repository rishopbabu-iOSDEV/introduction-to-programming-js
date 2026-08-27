// ============================================================
// BLOCK 6 BOSS CHALLENGE — Interactive Todo List
// ============================================================
// CONCEPTS: querySelector, addEventListener, createElement,
//           appendChild, remove, classList, textContent,
//           localStorage (BONUS)
// ============================================================
// The HTML/CSS are ready. Build the behaviour in JavaScript.
// Elements available: #taskInput, #addBtn, #taskList,
//                     #taskCount, #clearAllBtn, #footer
// ============================================================

// TODO 1: Select the DOM elements listed above.


// TODO 2: addTask(text)
//         - ignore empty input (trim first)
//         - create an <li> containing the task text, a Done button, and a Delete button
//         - Done toggles a "done" class; Delete removes the <li>
//         - append the <li> to #taskList, then clear the input
//         - call updateCount() afterwards


// TODO 3: updateCount()
//         - count remaining (not-done) tasks and update #taskCount
//         - show an empty-state message when there are no tasks


// TODO 4: Wire up events:
//         - click on #addBtn adds the task
//         - pressing Enter in #taskInput adds the task
//         - #clearAllBtn clears every task (confirm first)


// TODO 5 (bonus): Persist tasks with localStorage so they survive a refresh.


// ✅ What to try next:
//   - Add filter tabs: All / Active / Completed
//   - Add drag-and-drop reordering
//   - Add due dates with a date input
