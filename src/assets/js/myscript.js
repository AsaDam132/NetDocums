// // function myFunction() {
// //   // Declare variables
// //   var input, filter, ul, li, a, i, txtValue;
// //   input = document.getElementById("myInput");
// //   filter = input.value.toUpperCase();
// //   ul = document.getElementById("myUL");
// //   li = ul.getElementsByTagName("li");

// //   // Loop through all list items, and hide those who don't match the search query
// //   for (i = 0; i < li.length; i++) {
// //     a = li[i].getElementsByTagName("a")[0];
// //     txtValue = a.textContent || a.innerText;
// //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
// //       li[i].style.display = "";
// //     } else {
// //       li[i].style.display = "none";
// //     }
// //   }
// // }

// let data = [
//   {
//     label: "api key",
//     url: "https://google.com",
//   },
//   {
//     label: "shalaye",
//     url: "https://google.com",
//   },
// ];
// let dataFile = [];

// const inputHandle = document.querySelector("input");
// const ulClassName = document.querySelector(".dropdown-content");
// const searchWrapper = document.querySelector(".searchInput");

// inputHandle.onkeyup = (e) => {
//   let userData = e.target.value;
//   let emptyData = [];

//   if (userData) {
//     // console.log(data)
//     emptyData = data.filter((allData) => {
//       return allData.label
//         .toLocaleLowerCase()
//         .startsWith(userData.toLocaleLowerCase());
//     });
//     emptyData = emptyData.map((allData) => {
//       return (dataFile =
//         "<li>" + `<a href=${allData.url}>` + allData.label + `</a>` + "</li>");
//     });

//     console.log(emptyData);
//     searchWrapper.classList.add("active")
//   } else {
//   }

//   showSuggestions(emptyData);
// };

// function showSuggestions(list) {
//   let listData;
//   if (!list.length) {
//   } else {
//     listData = list.join("");
//   }

//   ulClassName.innerHTML = listData;
// }

// function myStyle() {
//   let myInputChange = document.getElementById("myInput");
//   let dropdown = document.getElementById("myUL");
//   let inputfield = document.querySelector("input").value;

//   if (myInputChange) {
//     if (inputfield.trim() === "") {
//       console.log(dropdown.style.display);
//       // alert("working")
//       dropdown.style.display = "none";
//     } else {
//       dropdown.style.display = "block";
//     }
//   } else {
//     dropdown.style.display = "none";
//   }
// }

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
// const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

let emptyArray = [];


// if user press any key and release
inputBox.onkeyup = (e) => {
  let userData = e.target.value; //user enetered data
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
      return data.label
        .toLocaleLowerCase()
        .startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // passing return data inside li tag
      return (data =
        "<li>" + `<a href=${data.url}>` + data.label + `</a>` + "</li>");
    });
    searchWrapper.classList.add("active"); //show autocomplete box

    showSuggestions();
    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      //adding onclick attribute in all li tag
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchWrapper.classList.remove("active"); //hide autocomplete box
  }
};

function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;
  searchWrapper.classList.remove("active");
}

function showSuggestions() {
  let listData;

  if (!emptyArray.length) {
    if (emptyArray.length > 0) {
      userValue = inputBox.value;
      listData = `<li>${userValue}</li>`;
    } else {
      listData = `<li>Not Found</li>`;
    }
  } else {
    listData = emptyArray.join("");
  }

  console.log(typeof listData)
  suggBox.innerHTML = listData;
}
