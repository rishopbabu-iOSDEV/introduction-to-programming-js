// ============================================================
// TASK 2.2 — Day Planner
// BLOCK 2: The Decision Dungeon
// ============================================================
// CONCEPTS: switch statement, break, default, toLowerCase()
// ============================================================

// Get the day from the user
// .toLowerCase() + .trim() makes "  Monday  " → "monday"
const day = prompt("📅 What day is it today?\n(Monday, Tuesday, Wednesday...)").toLowerCase().trim();

let activity;
let emoji;

switch (day) {
  case "monday":
    activity = "Start strong! Attend all your classes and review last week's notes.";
    emoji = "📚";
    break;

  case "tuesday":
    activity = "Deep work day! Pick one hard subject and focus on it for 2 hours.";
    emoji = "🎯";
    break;

  case "wednesday":
    activity = "Mid-week check-in! Go to the gym or take a walk. Clear your head.";
    emoji = "💪";
    break;

  case "thursday":
    activity = "Almost there! Start preparing any assignments due this week.";
    emoji = "✍️";
    break;

  case "friday":
    activity = "Weekend's coming! Finish pending work, then plan something fun tonight.";
    emoji = "🎬";
    break;

  case "saturday":
    activity = "Rest and recharge! Pursue a hobby or spend time with friends.";
    emoji = "😎";
    break;

  case "sunday":
    activity = "Prep for the week! Quick review of Monday's material + set your goals.";
    emoji = "🗺️";
    break;

  default:
    activity = `"${day}" doesn't look like a valid day. Try typing Monday, Tuesday, etc.`;
    emoji = "🤔";
}

const message = `${emoji} ${day.charAt(0).toUpperCase() + day.slice(1)} Plan:\n${activity}`;
alert(message);
console.log(message);

// ✅ What to try next:
//   - Add a motivational quote for each day
//   - Use the ternary operator to also say "Weekday 📖" or "Weekend 🎉"
