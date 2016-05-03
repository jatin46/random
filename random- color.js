$(document).ready(function(){
function getRandomColor() {
return '#' + Math.random().toString(16).slice(2, 8);
};
$('body').css('background',getRandomColor());
});