document.addEventListener("DOMContentLoaded", () => {
  const tasks = [
    {
      group: "1. Fundamental",
      items: ["HTML", "CSS", "SCSS", "JavaScript"],
    },
    {
      group: "2. Front End Modern",
      items: ["Bootstrap", "TypeScript", "Git", "NPM"],
    },
    {
      group: "3. React JS & Ekosistem",
      items: [
        "React JS",
        "Tutorial React JS Pemula",
        "React JS untuk yang tak paham JS",
        "Tutorial React by UNPAS",
        "React JS 19 !!",
      ],
    },
    {
      group: "4. Data & State Management",
      items: ["React Query", "Redux", "RTK Query"],
    },
    {
      group: "5. UI Enhancement & Libraries",
      items: [
        "Tailwind CSS",
        "Framer Motion",
        "Important Libraries",
        "Various Libraries",
      ],
    },
    {
      group: "6. Build Portfolio",
      items: ["Percantik Tampilan LinkedIn", "Website Portofolio", "Upload Project ke GitHub"],
    },
  ];

  const todoList = document.getElementById("todo-list");
  const progressBar = document.getElementById("progress-bar");

  let totalTasks = 0;
  let completedTasks = 0;

  let savedStatus = JSON.parse(localStorage.getItem("taskStatus")) || {};

  tasks.forEach((taskGroup, groupIndex) => {
    const groupDiv = document.createElement("div");
    groupDiv.classList.add("task-group");

    const groupTitle = document.createElement("h3");
    groupTitle.textContent = taskGroup.group;
    groupDiv.appendChild(groupTitle);

    taskGroup.items.forEach((item, itemIndex) => {
      totalTasks++;
      const taskKey = `task-${groupIndex}-${itemIndex}`;
      const isChecked = savedStatus[taskKey] || false;
      if (isChecked) completedTasks++;

      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = isChecked;
      checkbox.id = taskKey;

      checkbox.addEventListener("change", () => {
        savedStatus[taskKey] = checkbox.checked;
        localStorage.setItem("taskStatus", JSON.stringify(savedStatus));
        checkbox.checked ? completedTasks++ : completedTasks--;
        updateProgress();
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(item));
      groupDiv.appendChild(label);
    });

    todoList.appendChild(groupDiv);
  });

  function updateProgress() {
    const percent = Math.round((completedTasks / totalTasks) * 100);
    progressBar.style.width = `${percent}%`;
    progressBar.textContent = `${percent}%`;
  }

  updateProgress();
});
