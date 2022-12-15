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
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">${data[d].nombre}</td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><div class="w-16 h-12"><img id="imagen${data[d].id}" src="" alt=""></div></td>
    <td class="grid justify-items-stretch whitespace-nowrap px-3 py-4"><button onclick="changeImage(${data[d].id})" type="button" class="justify-self-end rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm">Sortear</button></td>
    </tr>
    `;
  }
  placeholder.innerHTML = out;
}

// change image src on click of a button
function changeImage(id) {
  var image = document.getElementById('imagen'+id);
  if (image.src.match("")) {
    image.src = "https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif"
    setTimeout(function(){grupo(image, id)}, 2000);
  }
}

function grupo(image, id){
  fetch('http://127.0.0.1:1000/data')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  for (let d in data){
    if (data[d].id == id){
      console.log (data[d].grupo)
      if (data[d].grupo == "1"){
        image.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/311cf017-3c0d-467c-bce6-5fd427c47c92/de9tt6p-3839abd4-605f-42a4-b26a-f5c415e59df4.png"
      }
      else if (data[d].grupo == "2"){
        image.src = "https://static.wikia.nocookie.net/logopedia/images/c/ca/Saban%C2%B4s_Power_Rangers_Wild_Force_Logo.png"
      }
      else if (data[d].grupo == 3){
        image.src = "https://static.wikia.nocookie.net/logopedia/images/c/ca/Saban%C2%B4s_Power_Rangers_Wild_Force_Logo.png"
      }
    }
  }
})
}