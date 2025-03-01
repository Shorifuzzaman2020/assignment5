
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}
document.getElementById('theme-button').addEventListener('click', function () {
    document.getElementById('body').style.backgroundColor = getRandomHexColor();
});
function displayDateTime() {
    let myDate = new Date();
    let dayName = myDate.toLocaleDateString('en-US', { weekday: 'short' });
    let formattedDate = myDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    document.querySelector("#datetime .day").innerText = dayName;
    document.querySelector("#datetime .date").innerText = formattedDate;
}
function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; 
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    return timeString;
}

window.onload = displayDateTime;
document.getElementById('button-1').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully');
    document.getElementById('button-1').disabled=true;
    const countTask=document.getElementById('count-task').innerText;
    const updateValue=countTask-1;
    const completedValue=document.getElementById('completed-value').innerText;
    const currentCompletedValue=parseInt(completedValue)+1;
    document.getElementById('button-1').style.backgroundColor='gray';
    document.getElementById('count-task').innerText=updateValue;
    document.getElementById('completed-value').innerText=currentCompletedValue;
    const fixButton=document.getElementById('fix-button').innerText;
    const p=document.createElement('p');
    const time=updateClock();
    p.innerHTML=`
    <p class="bg-[#F4F7FF] rounded-lg p-2 my-3">You have complete the task ${fixButton} at ${time}</p>
    `
    const container=document.getElementById('updated-property');
    container.appendChild(p);
    return updateValue,currentCompletedValue;
})
document.getElementById('button-2').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully');
    document.getElementById('button-2').disabled=true;
    const countTask=document.getElementById('count-task').innerText;
    const updateValue=countTask-1;
    const completedValue=document.getElementById('completed-value').innerText;
    const currentCompletedValue=parseInt(completedValue)+1;
    document.getElementById('button-2').style.backgroundColor='gray';
    document.getElementById('count-task').innerText=updateValue;
    document.getElementById('completed-value').innerText=currentCompletedValue;
    const fixButton=document.getElementById('dark-mode').innerText;
    const p=document.createElement('p');
    const time=updateClock();
    p.innerHTML=`
    <p class="bg-[#F4F7FF] rounded-lg p-2 my-3">You have complete the task ${fixButton} at ${time}</p>
    `
    const container=document.getElementById('updated-property');
    container.appendChild(p);
    return updateValue,currentCompletedValue;
})
document.getElementById('button-3').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully');
    document.getElementById('button-3').disabled=true;
    const countTask=document.getElementById('count-task').innerText;
    const updateValue=countTask-1;
    const completedValue=document.getElementById('completed-value').innerText;
    const currentCompletedValue=parseInt(completedValue)+1;
    document.getElementById('button-3').style.backgroundColor='gray';
    document.getElementById('count-task').innerText=updateValue;
    document.getElementById('completed-value').innerText=currentCompletedValue;
    const fixButton=document.getElementById('optimize-page').innerText;
    const p=document.createElement('p');
    const time=updateClock();
    p.innerHTML=`
    <p class="bg-[#F4F7FF] rounded-lg p-2 my-3">You have complete the task ${fixButton} at ${time}</p>
    `
    const container=document.getElementById('updated-property');
    container.appendChild(p);
    return updateValue,currentCompletedValue;
})
document.getElementById('button-4').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully');
    document.getElementById('button-4').disabled=true;
    const countTask=document.getElementById('count-task').innerText;
    const updateValue=countTask-1;
    const completedValue=document.getElementById('completed-value').innerText;
    const currentCompletedValue=parseInt(completedValue)+1;
    document.getElementById('button-4').style.backgroundColor='gray';
    document.getElementById('count-task').innerText=updateValue;
    document.getElementById('completed-value').innerText=currentCompletedValue;
    const fixButton=document.getElementById('add-emoji').innerText;
    const p=document.createElement('p');
    const time=updateClock();
    p.innerHTML=`
    <p class="bg-[#F4F7FF] rounded-lg p-2 my-3">You have complete the task ${fixButton} at ${time}</p>
    `
    const container=document.getElementById('updated-property');
    container.appendChild(p);
    return updateValue,currentCompletedValue;
})
document.getElementById('button-5').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully');
    document.getElementById('button-5').disabled=true;
    const countTask=document.getElementById('count-task').innerText;
    const updateValue=countTask-1;
    const completedValue=document.getElementById('completed-value').innerText;
    const currentCompletedValue=parseInt(completedValue)+1;
    document.getElementById('button-5').style.backgroundColor='gray';
    document.getElementById('count-task').innerText=updateValue;
    document.getElementById('completed-value').innerText=currentCompletedValue;
    const fixButton=document.getElementById('openai').innerText;
    const p=document.createElement('p');
    const time=updateClock();
    p.innerHTML=`
    <p class="bg-[#F4F7FF] rounded-lg p-2 my-3">You have complete the task ${fixButton} at ${time}</p>
    `
    const container=document.getElementById('updated-property');
    container.appendChild(p);
    return updateValue,currentCompletedValue;
})
document.getElementById('button-6').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board Updated Successfully');
    alert('Congrates!! You have completed all the current task.')
    document.getElementById('button-6').disabled=true;
    const countTask=document.getElementById('count-task').innerText;
    const updateValue=countTask-1;
    const completedValue=document.getElementById('completed-value').innerText;
    const currentCompletedValue=parseInt(completedValue)+1;
    document.getElementById('button-6').style.backgroundColor='gray';
    document.getElementById('count-task').innerText=updateValue;
    document.getElementById('completed-value').innerText=currentCompletedValue;
    const fixButton=document.getElementById('job-search').innerText;
    let p=document.createElement('p');
    const time=updateClock();
    p.innerHTML=`
    <p class="bg-[#F4F7FF] rounded-lg p-2 my-3">You have complete the task ${fixButton} at ${time}</p>
    `
    const container=document.getElementById('updated-property');
    container.appendChild(p);
    return updateValue,currentCompletedValue;
})
document.getElementById('clear-history').addEventListener('click',function(event){
    event.preventDefault();
    let parentElement=document.getElementById('updated-property');
    parentElement.innerHTML='';
    
})
document.getElementById('go-to-blog').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href='./blog.html';
})


