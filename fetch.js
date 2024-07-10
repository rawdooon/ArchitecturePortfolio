//fetch('https://jsonplaceholder.typicode.com/posts?userId=1')  
//  .then((response) => response.json())  
//  .then((json) => {
//    const excerpts = document.getElementById("excerpts");
//    excerpts.textContent = json;
//    console.log(json);
//  })
//fetch('https://dummyjson.com/posts?limit=10&skip=0&select=title,reactions,userId')
//      .then((res) => res.json())
//      .then(res => {
//       console.log(res);
//      //let divs = document.querySelectorAll("p");
//      let output = '<div id="excerpts"></div>';
//      //console.log(divs);
//      //let n = divs.length;
//      for(row in res){
//        console.log(row.body)
//      }
//      res.forEach(function(thePost){
//        console.log(thePost.title);
//        console.log(thePost.body);
//        //divs[i].textContent = thePost.title;
//        output += `<h3 id="title">${thePost.title}</h3>
//                   <p id="body">${thePost.body}</p>`;
//        //if (i==3){`<br> <br>`}
//      });
      
      
//    document.getElementById("excerpts").innerHTML = output;
//});
//fetch('https://dummyjson.com/posts?limit=10&skip=10&select=title,reactions,userId')
//    .then(response => response.json())
//    .then(json => {
//      for(row in json){
//        let divs = document.querySelectorAll("p");
//        let output = '<div id="excerpts"></div>';
//        output += `<h3 id="title">${json}</h3>`;
//        document.getElementById("excerpts").innerHTML = output;
//      }
//    });


//async function getposts(){

//  const response = await fetch(`https://dummyjson.com/posts?limit=10&skip=0&select=title,reactions,userId`);
//  const data = await response.json();
//  console.log(data);
//  data.forEach(post => {
//    posts.innerHTML += `
//      <h3 id="title">${post.title}</h3>
//    `;
//  });
  

//}
//getposts();

//posts.innerHTML += `
//    <h3 id="title">${data[post].tags}</h3>
//  `;

//pages.onclick = function(page, start, limit){
//  page = document.getElementById("currentpage");
//  start = page * limit
//  getData();
//}

const jsonposts = document.getElementById("excerpts");
const postpage = document.getElementById("postpage");
let pages = document.getElementById("pages");

//const current = 0;
//let n = 10;
let limit = 10;
//let start = 0;

async function getData() {
  jsonposts.innerHTML = "";
  try {
    const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${start}&select=title,body`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    for(const item in json){
      json[item].forEach(post => {
        jsonposts.innerHTML += `
          <h3 id="title">${post.title}</h3> 
          <p id="body">${post.body.slice(0, 50) + "..."}</p>
          <a href="post.html">
            <button onclick="showpost(${post.id})" id="readmore">Read more</button>
          </a>
        `;
        
      });
    }
  } catch (error) {
    console.error(error.message);
 }
 
}

pages.onclick = function(page) {
  if(event.target.id == "page1"){
    page = 1;
    start = (page - 1) * limit; 
    getData();
  }
  if(event.target.id == "page2"){
    page = 2;
    start = (page - 1) * limit; 
    getData();
  }
  if(event.target.id == "page3"){
    page = 3;
    start = (page - 1) * limit; 
    getData();
  }
  if(event.target.id == "page4"){
    page = 4;
    start = (page - 1) * limit; 
    getData();
  }
  if(event.target.id == "page5"){
    page = 5;
    start = (page - 1) * limit; 
    getData();
  }
}


function showdata(page){
  const pages = document.getElementById("pages");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
      
  start = (page - 1) * limit;
  getData(); 

}
showdata(1);

async function getpost() {
  postpage.innerHTML = "";
  try {
    const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${start}&select=title,body`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
    for(const item in json){
      json[item].forEach(post => {
        postpage.innerHTML += `
          <h3 id="title">${post.title}</h3> 
          <p id="body">${post.body}</p>  
        `;
        console.log(postpage.innerHTML);
      });
    }
  } catch (error) {
    console.error(error.message);
 }
}

function showpost(post){
  postpage.innerHTML = "";
  limit = 1;
  start = post - 1;
  getpost();
}


  
