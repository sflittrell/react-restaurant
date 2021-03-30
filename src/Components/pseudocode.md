# React Restaurant

Objects:

    App/Menu: // the entire menu page

        Data:
            Menu: [
                name: Breakfast, amount: 10, price: 10, 15, data: [// info from the API call]
                name: Lunch, amount: 10, price: 10, 15, data: [// info from the API call]
                name: Appetizers, amount: 6, price: 10, 15, data: [// info from the API call]
                name: Dinner, amount: 12, price: 10, 15, data: [// info from the API call]
                name: Desserts, amount: 5, price: 10, 15, data: [// info from the API call]
                name: Drinks, amount: 6, price: 10, 15, data: [// info from the API call]
            ]
        Functions:
            API Call (meal type 1 - breakfast)
            API Call (meal type 3 - lunch)
            API Call (meal type 6 - appetizers)
            API Call (meal type 5 - dinner)
            API Call (meal type 7 - desserts)
            API Call (meal type 8 - drinks)

    Header:

        Render/HTML
            Nav Bar - contains a tab for each section that links to anchors, taking user to that section; should be sticky 
            Restaurant Name / Hero Image
            Address and Phone #
            

    Section: // individual section of the menu that contains a specific meal type

        

        Render/HTML:
            Section Title - meal type
            Items - the number of each item depends on the meal item

    Item: // an individual food item 

        Functions:
        function randomNumber(X, Y) - create a random num between X and Y where X and Y are determined by meal type price

            function randomNum(min, max) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min);
}

        Render/HTML
            Name - the name of the meal
            Description - lorem ipsum 
            Price - a random number whose value is based on the meal type