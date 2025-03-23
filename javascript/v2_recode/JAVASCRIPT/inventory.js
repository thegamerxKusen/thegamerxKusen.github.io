let inventory= [training_dagger]

function refresh_inventory() {
    const inventoryDiv = document.getElementById("inventory-container")
    // Clear previous display
    inventoryDiv.innerHTML = "";

    // Display each item in inventory
    for(let item of inventory){
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item-div");
        itemDiv.innerHTML=`<img src="${item.icon}" alt="${item.name}" draggable="false"></img>`
        itemDiv.addEventListener("click",()=>{
            //itemDiv.setAttribute('onclick',"select_item("+item.const_name+")")
            item.selectItem()
        })
        //add tooltip
        add_tooltip(itemDiv,item.name)
        
        inventoryDiv.appendChild(itemDiv);
    }
}