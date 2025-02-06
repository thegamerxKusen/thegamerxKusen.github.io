var inventory = [iron_dagger,iron_spear,iron_hidden_weapon,iron_sword]

function select_item(item){
    const show_item_div= document.getElementById("selected_item");
    show_item_div.innerHTML = ""
    const title=document.createElement("h1")
    title.textContent = item.name
    const desc=document.createElement("h2")
    desc.textContent = item.desc
    const damage=document.createElement("h2")
    damage.textContent ="Damage : "+item.damage
    show_item_div.appendChild(title)
    show_item_div.appendChild(desc)
    show_item_div.appendChild(damage)
}
function updateInventory() {
    const inventoryDiv = document.getElementById("inventory");
    
    // Clear previous display
    inventoryDiv.innerHTML = "";

    // Display each item in inventory
    inventory.forEach((item, index) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.setAttribute('onclick',"select_item("+item.const_name+")")
        const icon = document.createElement("img")
        icon.setAttribute('src', item.icon);
        icon.setAttribute('alt',item.name)
        inventoryDiv.appendChild(itemDiv);
        itemDiv.appendChild(icon)
    });
}


// Initialize inventory display
updateInventory();