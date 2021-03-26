# React Restaurant

Objects:

    App/Menu: // the entire menu page

        Data:
            Menu: [
                name: Breakfast, amount: 10, price: 10, 15, data: []
                name: Lunch, amount: 10, price: 10, 15, data: []
                name: Appetizers, amount: 6, price: 10, 15, data: []
                name: Dinner, amount: 12, price: 10, 15, data: []
                name: Desserts, amount: 5, price: 10, 15, data: []
                name: Drinks, amount: 6, price: 10, 15, data: []
            ]

            API Call (meal type 1)
            API Call (meal type 3)
            API Call (meal type 6)
            API Call (meal type 5)
            API Call (meal type 7)
            API Call (meal type 8)

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

        function randomNumber(X, Y)
            create a random between X and Y where X and Y are determined by meal type

            function randomIntFromInterval(min, max) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min);
}

        Render/HTML
            Name - the name of the meal
            Description - lorem ipsum 
            Price - a random number whose value is based on the meal type