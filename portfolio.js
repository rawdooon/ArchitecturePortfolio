const menu = document.querySelector(".menu");
const dropdown = document.querySelector(".dropdown");
 

menu.addEventListener("click", event => {
    if(dropdown.style.display === "none"){
        dropdown.style.display = "block";
        menu.textContent = "Hide"
    }
    else{
        dropdown.style.display = "none";
        menu.textContent = "Menu";
    }
})

function fetchJSONData() {
    fetch("./skills.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            const skills = document.getElementById("skills");
            console.log(skills);
            skills.textContent = data;
        })
            
        .catch((error) => 
            console.error("Unable to fetch data:", error));
            
}
fetchJSONData();

// filter projects by technology used.

let input = document.getElementById("search");
let table = document.getElementById("projectstable");
let rows = table.getElementsByTagName("tr");
let noMatchMessage = document.getElementById("error");

input.addEventListener('input', function () {
    let filter = input
        .value
        .toLowerCase();
    let matchFound = false;

    for (let i = 1; i < rows.length; i++) {
        let row = rows[i];
        let cells = row
            .getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < cells.length; j++) {
            let cell = cells[j];
            if (cell.textContent.toLowerCase().indexOf(filter) > -1) {
                found = true;
                matchFound = true;
                break;
            }
        }

        if (found) {
            row.style.display = '';
        } 
        else {
            row.style.display = 'none';
        }
    }

    if (!matchFound) {
        noMatchMessage.style.display = 'block';
    } 
    else {
        noMatchMessage.style.display = 'none';
    }
});

// sort table by name and technology.

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("projectstable");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  // sort table data by date.
function convertDate(d) {
    console.log(d);
    var p = d.split("/");
    return +(p[2]+p[1]+p[0]);
}
  
function sortByDate() {
    var tbody = document.querySelector("#projectstable tbody");
    // get trs as array for ease of use
    var rows = [].slice.call(tbody.querySelectorAll(".date"));
    console.log(rows);
    
    rows.sort((a,b) => {
      return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
    });
    
    rows.forEach(function(v) {
      tbody.appendChild(v); // note that .appendChild() *moves* elements
      console.log(v)
    });
}
  
document.getElementById("mybtn").addEventListener("click", sortByDate());