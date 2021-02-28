url = 'https://api.thecatapi.com/v1/breeds?api_key=781a668-b792-44f3-bb5f-5703c905c24d';

fetch(url)
 .then(function(response) {
   return response.json();
 }).then(function(json) {
   let results = "";
   console.log(json);

   let index = Math.floor(Math.random() * 60);

   console.log(json[index].name)
   console.log(json[index].origin)

   results += '<h2 style=\'text-align:center;margin: 10px auto;\'>' + json[index].name + '</h2>';
   results += '<img src=\"' + json[index].image.url + '\" class = \"cat-image\" style=\'margin: 15px auto;\'>'
   results += '<p>The origin of ' + json[0].name + ' is ' + json[index].origin + '!</h2>';
   results += '<p>' + json[index].description + '</p>';


   document.getElementById("results").innerHTML = results;


 });

 document.getElementById("breedSubmit").addEventListener("click", function(event) {
   event.preventDefault();
   const value = document.getElementById("breedInput").value;
   const url2 = "https://api.thecatapi.com/v1/breeds/search?q=" + value;
   console.log(url2);

   fetch(url2)
     .then(function(response) {
       return response.json();
     }).then(function(json) {
       let results = "";
       console.log(json);

       results += '<p>The closest result is ' + json[0].name + '. </p>';
       results += '<p>Description: ' + json[0].description + '</p>';
       results += '<p>Origin: ' + json[0].origin + '</p>';
       results += '<p>Alternate names: ' + json[0].alt_names + '</p>';

       document.getElementById("breed-results").innerHTML = results;
     });
   if (value === "")
     return;
   console.log(value);
 });

url3 = 'https://api.thecatapi.com/v1/images/search?size=small&limit=4';
fetch(url3)
 .then(function(response) {
   return response.json();
 }).then(function(json) {
   let results = "";
   console.log(json);
   console.log(json[0].url)

   for (let i = 0; i < 4; i++){
     console.log(i);
     results += '<img src=\'' + json[i].url + '\' class=\'random-cat-pics\'>';
   }


   document.getElementById("random-cats-container").innerHTML = results;


 });
