document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById("task-input");
    const button = document.getElementById("add");
    const taskList = document.getElementById("task-list");

    function addTask() {
        if (input.value.trim() !== '') {
            let newTask = document.createElement('li');
            newTask.classList.add('task');

            let removeButton = document.createElement('span');
            removeButton.classList.add('remove-task');

            let removeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            removeIcon.setAttribute("width", "15px");
            removeIcon.setAttribute("height", "15px");
            removeIcon.setAttribute("viewBox", "0 0 32 32");
            removeIcon.innerHTML = `
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Icon-Set-Filled" fill="#000000">
                        <path d="M13.657,21.24 C14.048,21.63 14.048,22.27 13.657,22.66 C13.267,23.05 12.633,23.05 12.242,22.66 L8.006,18.42 L3.74,22.69 C3.346,23.08 2.708,23.08 2.314,22.69 C1.921,22.29 1.921,21.65 2.314,21.26 L6.58,16.99 L2.344,12.76 C1.953,12.37 1.953,11.73 2.344,11.34 C2.733,10.95 3.367,10.95 3.758,11.34 L7.994,15.58 L12.292,11.28 C12.686,10.89 13.323,10.89 13.717,11.28 C14.11,11.68 14.11,12.31 13.717,12.71 L9.42,17.01 L13.657,21.24 L13.657,21.24 Z M8,1 C16.837,1 24,8.16 24,17 C24,25.84 16.837,33 8,33 C-0.837,33 -8,25.84 -8,17 C-8,8.16 -0.837,1 8,1 L8,1 Z" id="cross-circle">
                        </path>
                    </g>
                </g>
            `;
            removeButton.appendChild(removeIcon);
            removeButton.addEventListener('click', removeTask);

            let taskText = document.createElement('span');
            taskText.innerText = input.value;
            taskText.classList.add('task-text');

            let completeButton = document.createElement('span');
            completeButton.classList.add('complete-task');

            let completeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            completeIcon.setAttribute("width", "15px");
            completeIcon.setAttribute("height", "15px");
            completeIcon.setAttribute("viewBox", "0 0 32 32");
            completeIcon.classList.add('checkmark');
            completeIcon.innerHTML = `
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Icon-Set-Filled" fill="#000000" transform="translate(-102.000000, -1141.000000)">
                        <path d="M124.393,1151.43 C124.393,1151.43 117.335,1163.73 117.213,1163.84 C116.81,1164.22 116.177,1164.2 115.8,1163.8 L111.228,1159.58 C110.85,1159.18 110.871,1158.54 111.274,1158.17 C111.677,1157.79 112.31,1157.81 112.688,1158.21 L116.266,1161.51 L122.661,1150.43 C122.937,1149.96 123.548,1149.79 124.027,1150.07 C124.505,1150.34 124.669,1150.96 124.393,1151.43 L124.393,1151.43 Z M118,1141 C109.164,1141 102,1148.16 102,1157 C102,1165.84 109.164,1173 118,1173 C126.836,1173 134,1165.84 134,1157 C134,1148.16 126.836,1141 118,1141 L118,1141 Z" id="checkmark-circle">
                        </path>
                    </g>
                </g>
            `;
            completeButton.appendChild(completeIcon);
            completeButton.addEventListener('click', completeTask);

            newTask.appendChild(completeButton);
            newTask.appendChild(taskText);
            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);

            input.value = '';
        } else {
            alert('Please enter a task');
        }
    }

    function completeTask(e) {
        let task = e.target.closest('.task');
        if (task) {
            task.classList.toggle('checked');
        }
    }

    function removeTask(e) {
        let task = e.target.closest('.task');
        if (task) {
            task.remove();
        }
    }

    button.addEventListener('click', addTask);
});
