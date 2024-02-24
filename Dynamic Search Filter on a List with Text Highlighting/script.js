const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  ];

let booksDIV = document.querySelector("#books");


for (let i = 0; i < books.length; ++i) {
    booksDIV.innerHTML += `<div class="display-books" id = "${books[i].id}"><h4>${books[i].title}</h4><br><p>Author: ${books[i].author}</p></div>`
}

let search = document.querySelector("#search-input");

search.addEventListener("input", function() {
    for (let i = 0; i < books.length; ++i) {
        if (!books[i].title.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) {
            document.querySelector(`#\\3${books[i].id} `).style.display = "none";
        } else {
            document.querySelector(`#\\3${books[i].id} `).style.display = "block";
            document.querySelector(`#\\3${books[i].id} `).style.backgroundColor = "red";
        }
        if (search.value === '') {
            document.querySelector(`#\\3${books[i].id} `).style.backgroundColor = "transparent";
        }
    }
})