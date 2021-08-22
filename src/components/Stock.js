import React from 'react'

//hooks, e.g., useState, only work in react functions, not classes
export default function Stock(data) {
    //const obj = data.item.inventory.map(itm => itm.image);
    return (
        <div>
            { JSON.stringify(data) }
        </div>
    )
}

/* obj.data.item.inventory.map(elem => {
                   return <li>{elem}</li>
                    })

<img className="stock_img" src={data.inventory.image} alt={name} />

 const frag = document.createDocumentFragment();
        for(let i in this.state.item.inventory){
            //console.log(this.state.item.inventory[i].image)
            let fig = document.createElement("figcure");
            let img = document.createElement("img");
            let cap = document.createElement("figcaption");
            img.setAttribute("src", this.state.item.inventory[i].image);
            img.setAttribute("alt", this.state.item.inventory[i].name);
            img.setAttribute("class", "stock_img");
            cap.setAttribute("class", "fig_cap");
            cap.innerHTML = this.state.item.inventory[i].price;
            fig.appendChild(img);
            fig.appendChild(cap);
            frag.appendChild(fig);
        }
        document.querySelector(".inner_div").appendChild(frag);
            }))
*/ 