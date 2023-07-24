// Function to handle the data filtering based on the selected category
function filterItems(category) {
  const imageItems = document.querySelectorAll(".image-item");

  imageItems.forEach((item) => {
    const itemCategory = item.getAttribute("data-category");

    if (category === "all" || itemCategory === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Function to show all items initially
function showAllItems() {
  const imageItems = document.querySelectorAll(".image-item");

  imageItems.forEach((item) => {
    item.style.display = "block";
  });
}

// Function to attach event listeners to the filter buttons
function attachFilterListeners() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const category = button.getAttribute("data-filter");
      filterItems(category);
    });
  });
}

// Function to initialize the filtering functionality
function initFiltering() {
  showAllItems(); // Show all items initially
  attachFilterListeners();
}

// Call the initialization function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initFiltering();
});
