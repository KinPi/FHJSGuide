function bark (name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    }
    else {
        console.log(name + " says woof woof");
    }
}

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);



function makeTea (cups, tea) {
    console.log ("Brewing " + cups + " cups of " + tea);
}
makeTea(3);
makeTea(3, "Earl Grey", "hey ma!", 42);
