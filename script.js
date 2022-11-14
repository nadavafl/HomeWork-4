function pizza(){
    let y = prompt('Would you like toppings? press Y-yes or N-no');
        if (y=='y'){
            let olive = prompt('Olives? y/n');
                if (olive=='y'){
                    alert('You choosed Olives');
                } else {
                alert ('Press ok for next topping');
                }
        }
        if (y=='y'){
            let mushroom = prompt('Mushrooms? y/n');
                if (mushroom=='y'){
                    alert('You choosed Mushrooms');
                } else {
                alert ('Press ok for next topping');
                }
        }
        if (y=='y'){
            let hot = prompt('Hot pepper? y/n');
                if (hot=='y'){
                    alert('You choosed Hot pepper');
                } else {
                alert ('No more toppings');
                }               
        } else {
            alert('You choosed pizza margarita');
        }
}

function burger(){
    let yes = prompt('Would you like toppings? press Y-yes or N-no');
        if (yes=='y'){
            let lettes = prompt('Lettes? y/n');
                if (lettes=='y'){
                    alert('You choosed Lettes');
                } else {
                alert ('Press ok for next topping');
                }
        }
        if (yes=='y'){
            let tomatto = prompt('Tommatos? y/n');
                if (tomatto=='y'){
                    alert('You choosed Tommatos');
                } else {
                alert ('Press ok for next topping');
                }
        }
        if (yes=='y'){
            let pickel = prompt('Pickels? y/n');
                if (pickel=='y'){
                    alert('You choosed Pickels');
                } else {
                alert ('Press ok for next topping');
                }
        }
        if (yes=='y'){
            let extraBurger = prompt('Extra Burger? y/n');
                if (extraBurger=='y'){
                    alert('You choosed Extra Burger');
                } else {
                alert ('No more toppings');
                }                
        } else  {
            alert('You choosed Burger without toppings');
        }
}