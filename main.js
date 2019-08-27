
const pet = { //pet object
    name : "Butterball",
    species : "Feline",
    nicknames : ["fatty","bb","butters"],
    age : 7,
    
    
    moew : function() {
    window.alert("moew.");
    
    },
    
    sleep : function() {
    window.close();
    },
    
    eat : function(thing) {
    window.alert("Eating "+ thing);
    },
    
    favoritetoys : ["straw","brush"],
    
    play : function(toy) {
    
    if (toy.includes("cat")) { //check if favorite toy
    
    this.favoritetoys.push(toy);
    
    }
    
    },
    
    }
    
    //cat object checking
    pet.moew();
    
    pet.eat("fish");
    
    pet.sleep();
    
    
    
    const restaurant = { // restaurant segment
        name: "Bob's Burgers",
        placeOrder: function (meal) {
        this.orders.push(meal); // all added code bellow
        },
        orders : [],
        getOrders : function () {
        return this.orders
        }
    }
    
    
    
    const chickenComboMeal = { //chicken meal
    sandwichType : "chicken",
    fries : true,
    drinksize: "large",
    
    
    }
    
    const Meal = {	// regular meal
    sandwichType : "regular",
    fries : true,
    drinksize: "medium",
    
    
    }
    
    // Place an order
    restaurant.placeOrder(chickenComboMeal)
    
    // Invoke the function to return the list of all orders
    restaurant.getOrders()
    
    // Output all orders to the console using console.table()
    
    console.log(pet);
    
    console.table(restaurant.getOrders());
    
    