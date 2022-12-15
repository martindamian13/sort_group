fetch('http://127.0.0.1:1000/data')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  appendData(data);
})
.catch(function (err) {
  console.log(err);
});


function appendData(data) {
  let placeholder = document.querySelector('#data-output');
  let out = '';
  for (let d in data){
    out += `
    <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">${data[d].name}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><img id="imagen" src="https://static.vecteezy.com/system/resources/previews/007/126/739/original/question-mark-icon-free-vector.jpg" alt="grupo" class="w-9 h-9"></td>
    <td class="grid justify-items-stretch whitespace-nowrap px-3 py-4"><button type="button" class="justify-self-end rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm">Sortear</button></td>
    </tr>
    `;
  }
  placeholder.innerHTML = out;
}



const bnt = document.querySelector('imagen');

img.addEventListener('click', () => {
    img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Floading-gifs&psig=AOvVaw1K4Z_rwxTVEeaJAnRS8FJw&ust=1671164465749000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIDrofTi-vsCFQAAAAAdAAAAABAE';
});

