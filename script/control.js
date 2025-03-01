
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
