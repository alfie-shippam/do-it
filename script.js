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
            removeIcon.setAttribute("width", "10px");
            removeIcon.setAttribute("height", "10px");
            removeIcon.setAttribute("viewBox", "0 0 490 490");
            removeIcon.innerHTML = `
<polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
                                   489.292,457.678 277.331,245.004 489.292,32.337 "/>
                               
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

    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
