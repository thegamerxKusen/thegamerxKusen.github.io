var inventory = []

function select_item(item){
    const show_item_div= document.getElementById("selected_item");
    show_item_div.innerHTML = ""
    const title=document.createElement("h1")
    title.textContent = item.name
    const desc=document.createElement("h2")
    desc.textContent = item.desc
    
    show_item_div.appendChild(title)
    show_item_div.appendChild(desc)
    if(item.damage){
        const damage=document.createElement("h2")
        damage.textContent ="Damage : "+item.damage
        show_item_div.appendChild(damage)
    }
    if(item.can_consume==true){
        const consume=document.createElement("button")
        consume.textContent = "Consume"
        consume.setAttribute("class","consume_button")
        consume.setAttribute('onclick',"use_item("+item.const_name+")")
        show_item_div.appendChild(consume)
    }
    if(item.can_equip){
        const equip=document.createElement("button")
        equip.textContent="Equip"
        equip.setAttribute("class","consume_button")
        equip.addEventListener("click",function(){
            equi(item)
        });
        show_item_div.appendChild(equip)
    }
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
function addItem(item){
    inventory.push(item)
    sendMessage(item.name+" obtained!")
    updateInventory();
}
function removeItem(item){
    var index = inventory.indexOf(item);
    if (index > -1) {
        inventory.splice(index, 1);
    }
    updateInventory();
}

// Initialize inventory display
updateInventory();




function use_item(item){
    // Assuming all items are stored in an object like this:
    if (!item) {
        console.log("Item not found!");
        return;
    }

    if (!item.can_consume) {
        console.log("Item can't be consumed");
        return;
    }

    item.consume(); // Calls the consume function of the item
    removeItem(item); // Removes the item from inventory
    document.getElementById("selected_item").innerHTML = ""
}