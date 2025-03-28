class POPUP_MENUE{
    /**
     * 
     * @param {string} title 
     * @param {HTMLElement} content 
     * @param {string} id 
     */
    constructor(title,content,id){
        this.title=title
        this.content=content
        this.id=id
        
    }
    open_pop_up(){
        document.querySelector("#body").innerHTML=`
        <div id="${this.id}-menu" class="popup">
            <div class="popup-content">
                <div class="popup-header underlined">
                    <h1 id="${this.id}-title" class="popup-header-content">${this.title}</h1>
                    <button onclick="this.close_pop_up()" class="popup-header-content">Close</button>
                </div>
                
                <div id="${this.id}-content" class="scrollable-box">
                
                </div>
                
            </div>
        </div>
    `
    document.querySelector("#"+this.id+"-content").innerHTML=this.content.innerHTML
    }
    close_pop_up(){

    }
}
    

function test_open_menue(){
    document.getElementById("shop-menu").classList.remove("hidden");
    hide_element(document.getElementsByClassName("main-game")[0])
}

const dialogue_menue = new POPUP_MENUE("Dialogue",document.createElement("div"),"dialogue")

