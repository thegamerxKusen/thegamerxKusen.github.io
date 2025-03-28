class POPUP_MENUE{
    /**
     * 
     * @param {string} title 
     * @param {HTMLElement} content 
     * @param {string} id 
     */
    constructor(title,id,content = document.createElement("div")){
        this.title=title
        this.content=content
        this.id=id
        
    }
    open_pop_up(){
        console.log(this)
        document.querySelector("#body").innerHTML+=`
        <div id="${this.id}-menu" class="popup">
            <div class="popup-content">
                <div class="popup-header underlined">
                    <h1 id="${this.id}-title" class="popup-header-content">${this.title}</h1>
                    <button id="popup-close" class="popup-header-content">Close</button>
                </div>
                
                <div id="${this.id}-content" class="scrollable-box">
                
                </div>
                
            </div>
        </div>
    `
    document.querySelector("#popup-close").addEventListener("click",()=>{
        this.close_pop_up()
    })
    const main_game = document.getElementsByClassName("main-game")[0]
    hide_element(main_game)
    let this_content_element = document.querySelector("#"+this.id+"-content")
    console.log(this_content_element)
    this.change_content(this.content)
    }
    close_pop_up(){
        const main_game = document.getElementsByClassName("main-game")[0]
        document.querySelector("#"+this.id+"-menu").remove()
        show_element(main_game,"grid")
        refresh_place()
        refresh_stat()
        refresh_inventory()
    }
    /**
     * 
     * @param {HTMLElement} element 
     */
    change_content(element){
        document.querySelector("#"+this.id+"-content").innerHTML=''
        document.querySelector("#"+this.id+"-content").appendChild(element)
        
    }
}
    



const dialogue_menue = new POPUP_MENUE("Dialogue","dialogue",document.createElement("div"))

