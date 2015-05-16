describe("Test de l'ajout d'une tâche",function(){
	
	var getElementFromRepeater = function(repeater, line, column) {
        return element(by.repeater(repeater).row(line).column('{{'+ column + '}}'));
    };

    var getTextInRepeater = function(repeater, line, column) {
        return getElementFromRepeater(repeater, line, column).getText();
    };


	it("on verifie que l'on est bien sur la bonne url",function(){
		browser.driver.manage().window().maximize();   
    	browser.get(browser.baseUrl);
    	browser.waitForAngular();
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);    
	});

	describe("on ajoute une tâche",function(){
		it("il y a donc 1 tache dans la liste",function(){
			element(by.model('currentTask')).sendKeys('Hello World !');
	 		element(by.id('button-add-ask')).click(); 
	 		var taches = element.all(by.repeater('task in listOfTasks'));
            expect(taches.count()).toEqual(1);
        //    expect(getTextInRepeater('task in listOfTasks', 0, 'taskText')).toBe("Hello World !");
		});

		it("le texte faisant le décompte des taches est affiché",function(){
			expect(element(by.id('textTaskCount')).isDisplayed()).toBeTruthy();
			expect(element(by.id('textTaskCount')).getText()).toEqual("You have done 0 of your 1 task.");
		});
	});
    
    describe("on ajoute encore une tâche",function(){
		it("il y a donc 2 tache dans la liste",function(){
			element(by.model('currentTask')).sendKeys('This is a test');
	 		element(by.id('button-add-ask')).click(); 
	 		var taches = element.all(by.repeater('task in listOfTasks'));
            expect(taches.count()).toEqual(2);
         //   expect(getTextInRepeater('task in listOfTasks', 0, 'checkbox')).toBe("Hello World !");
		//	expect(getTextInRepeater('task in listOfTasks', 1, 'checkbox')).toBe("This is a test");
		});

		it("le texte faisant le décompte des taches est affiché",function(){
			expect(element(by.id('textTaskCount')).isDisplayed()).toBeTruthy();
			expect(element(by.id('textTaskCount')).getText()).toEqual("You have done 0 of your 2 tasks.");
		});
	});
    
});