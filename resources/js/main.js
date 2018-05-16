// const test = document.getElementById('add').onclick = function(){
// 	console.log('test');
// }


// User clicked ont he add button
// If there any text the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function(){
	var value = document.getElementById('item').value;
	console.log(value);
});

