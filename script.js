document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('themeButton').addEventListener('click', function(){
     const r = Math.floor(Math.random()*256);
     const g = Math.floor(Math.random()*256);
     const b = Math.floor(Math.random()*256);

     document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    })
})

let remainingTask = 6;
let completedTasks = 23;

function updateTaskcount(){
    document.getElementById('remaining-tasks').innerText = remainingTask;

    const completedTaskLabel = document.getElementById('completed-tasks');
    completedTaskLabel.innerText = completedTasks;
}

function markAsCompleted(taskname, button){
    button.disabled = true;
    button.classList.add('opacity-50')

    remainingTask--;
    completedTasks++;
    updateTaskcount();

    const currentTime = new Date().toLocaleTimeString();
    alert("You have completed the task"+ taskname+"at"+ currentTime);

    const activityLog = document.getElementById('activity-log');
    const logmessage = document.createElement('p');
    logmessage.innerText = "You have Completed The Task " + taskname + " at " + currentTime;
    activityLog.appendChild(logmessage);

   logmessage.classList.add(
      'bg-gray-200',   
        'p-2',           
        'rounded-md',    
        'my-1',          
        'text-sm',       
        'text-gray-700' 
   )



    if (remainingTask === 0) {
        setTimeout(function() {
            alert("Congratulations! You've completed all tasks.");
        }, 100); 
    }

}



function clearhistory(){
    document.getElementById('activity-log').innerHTML = ' ';
}

const taskbutton = document.querySelectorAll('.task-completed');
taskbutton.forEach((button, index) => {
    const taskNames = [
      'Fix mobile button Issue', 
      'Add dark mode', 
      'Optimize Home page', 
      'Add new emoji 🤲', 
      'Integrate openAI API',
      'Improve job searching'
    ];

    button.addEventListener('click', function() {
        markAsCompleted(taskNames[index], button);
      });
    });

    document.getElementById('clear-history').addEventListener('click', clearhistory);

function updateDate(){
  const date   = new Date();
  const option = {weekday: "short", month: "short", day:'numeric', year: "numeric"};
  const formattedDate = date.toLocaleDateString('en-US', option);
  document.getElementById('current-date').innerText = formattedDate;
}
updateDate();