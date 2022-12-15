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
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><img class="w-20" id="imagen${data[d].id}" src="" alt=""></td>
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
    image.src = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
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
        image.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed991cf4-7c8c-4530-b6ba-a3abf3ab2eae/ddy76r7-0da8b48d-a7e7-4464-a433-a51bd214598c.png/v1/fill/w_1280,h_696,strp/power_rangers_mystic_force_logo_by_joshuat1306_ddy76r7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njk2IiwicGF0aCI6IlwvZlwvZWQ5OTFjZjQtN2M4Yy00NTMwLWI2YmEtYTNhYmYzYWIyZWFlXC9kZHk3NnI3LTBkYThiNDhkLWE3ZTctNDQ2NC1hNDMzLWE1MWJkMjE0NTk4Yy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.AhbzzW6sq2KDQ2S2sDCexWOiL8FJn11fxwiMiVPCFc4"
      }
      else if (data[d].grupo == "2"){
        image.src = "https://static.wikia.nocookie.net/logopedia/images/c/ca/Saban%C2%B4s_Power_Rangers_Wild_Force_Logo.png"
      }
      else if (data[d].grupo == 3){
        image.src = "https://www.pngitem.com/pimgs/m/522-5223937_dino-charge-logo-v2-by-joeshiba-on-deviantart.png"
      }
    }
  }
})
}