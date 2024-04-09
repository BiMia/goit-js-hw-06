const list = document.querySelector("#categories");
const listItem = document.querySelectorAll(".item");

console.log("Number of categories:", listItem.length);

listItem.forEach((item) => {
    const category = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("li").length;
    console.log("Category:", category);
    console.log("Elements:", elements);
});