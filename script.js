// Calendar
document.addEventListener('DOMContentLoaded', () => {
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      dateClick: (info) => {
        const title = prompt('Event Title:');
        if (title) {
          fetch('/api/events', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, start: info.dateStr })
          });
        }
      },
      events: '/api/events'
    });
    calendar.render();
  });
  
  // Tasks
  async function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim()) {
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: taskInput.value })
      });
      taskInput.value = '';
      loadTasks();
    }
  }
  
  async function loadTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = tasks.map(task => `<li>${task.description}</li>`).join('');
  }
  
  loadTasks(); // Load tasks on startup