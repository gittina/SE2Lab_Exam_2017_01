//list of participants
//list of objects
var menu = [
    {
		ID: 1,
		name: "Margherita", 
		price: 9.5,
		ingriedentsList: ["pomodoro","mozzarella", "basilico", "olio"]
	},
    {
		ID: 2,
		name: "Quattro Stagioni", 
		price: 8,
		ingriedentsList: ["pomodoro","mozzarella", "funghi","asparagi","carciofini", "prosciutto cotto", "olive nere", "uovo sodo" ]
	},
	{
		ID: 3,
		name: "Funghi", 
		price: 17.5,
		ingriedentsList: ["pomodoro","mozzarella", "funghi champignon", "prezzemolo", "olio"]
	},
    {
		ID: 4,
		name: "Boscaiola", 
		price: 19.5,
		ingriedentsList: ["pomodoro","mozzarella", "funghi champignon", "salsiccia"]
	}
];

/**
 * @brief This function search for a pizza, given his ID
 * @param StringID
 */
var searchPizzaID = function searchPizzaID(ID)
{
    for (i=0; i < menu.length; i++)
	{
		if (menu[i].ID == ID)
		{
			return menu[i];
		}
	}
    //if reach this point return null
    return null;
}

/*
 * @brief This function search for a pizza, given his Name
 * @param StringID
 */
var searchPizzaName = function searchPizzaName(name)
{
    for (i=0; i < menu.length; i++)
	{
		if (menu[i].name == name)
		{
			return menu[i];
		}
    }
    
    //if reach this point return null
    return null;
    
}

/**
 * @brief getter of the list of user
 * @return the list of user
 */
var getMenu = function getMenu(){
    return menu;
}

/**
 * @brief This function delete for a pizza, given his ID
 * @param StringID
 * @return treu if the pizza is deleted, false if the studet does not exist
 */
var deletePizzaID = function deletePizzaID(ID)
{
	var position = null;
	
    //search for the position
    for (i=0; i < menu.length; i++)
	{
            if (menu[i].ID == ID)
                {
					position = i;
                }
        }
	
    //if is not found return null
	if (position == null)
    	return null;
	else
	{
		return menu.splice(position, 1)[0];
	}
}

/**
 * @brief This function delete for a pizza, given his ID
 * @param StringID
 * @return treu if the pizza is deleted, false if the studet does not exist
 */
var deletePizzaName = function deletePizzaName(name)
{
	var position = null;
	
    //search for the position
    for (i=0; i < menu.length; i++)
	{
            if (menu[i].name == name)
                {
					position = i;
                }
        }
	
    //if is not found return null
	if (position == null)
    	return null;
	else
	{
		return menu.splice(position, 1)[0];
	}
}

var insertPizza = function insertPizza(pizza)
{
	if (searchPizzaID(pizza.ID)==null)
	{
		menu.push(pizza);
		return true;
	}
	else
		return false;
}


//INSERIRE CODICE QUI SOTTO

var updatePizzasByPrice = function updatePizzasByPrice(price, increment, lower)
{
    var pizze=[];
    
    if(lower=='true'){
        console.log("true");
        for (i=0; i<menu.length; i++){
            if (menu[i].price>price){
                var p=menu[i];
                console.log("prezzo prima= "+p.price);
                p.price=p.price+increment;
				pizze.push(p);
                console.log("prezzo dopo= "+pizze[0].price);
                
            }
        }
    }else{
        console.log("false");
        for (i=0; i<menu.length; i++){
            if (menu[i].price<price){
                var p=menu[i];
                p.price=p.price+increment;
				pizze.push(p);
            }
        }
    }
    
    return pizze;
    
}

//export functions
exports.searchPizzaID = searchPizzaID; 
exports.searchPizzaName = searchPizzaName; 
exports.deletePizzaID = deletePizzaID; 
exports.deletePizzaName = deletePizzaName; 
exports.insertPizza = insertPizza; 
exports.getMenu = getMenu; 
exports.updatePizzasByPrice = updatePizzasByPrice;