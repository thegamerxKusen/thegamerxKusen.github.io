const inventory = [iron_dagger]

function addItem(item) {
    // Add item to inventory array
    inventory.push(item);
    // Refresh inventory display
    updateInventory();
}

function updateInventory() {
    const inventoryDiv = document.getElementById("inventory");
    
    // Clear previous display
    inventoryDiv.innerHTML = "";

    // Display each item in inventory
    inventory.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.textContent = item.name;
        inventoryDiv.appendChild(itemDiv);
    });
}

// Initialize inventory display
updateInventory();