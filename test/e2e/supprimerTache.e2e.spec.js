describe("Test de la suppression des tâches",function(){

	it("on verifie l'url",function(){
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);
	});

	describe("on supprime la première tâche",function(){
		it("on clique sur la croix de la première tâche",function(){
			element(by.id('deleteTask0')).click();	
		});

		it("il ne reste qu'une tache",function(){
			var taches = element.all(by.repeater('task in listOfTasks'));
            expect(taches.count()).toEqual(1);
		});

		it("le texte en haut a changé",function(){
			expect(element(by.id('textTaskCount')).isDisplayed()).toBeTruthy();
			expect(element(by.id('textTaskCount')).getText()).toEqual("You have done 1 of your 1 task.");
		});

	});

	describe("on supprime la seconde tâche",function(){
		it("on clique sur la croix de la seconde tâche",function(){
			element(by.id('deleteTask0')).click();	
		});

		it("il ne reste aucune tâche",function(){
			var taches = element.all(by.repeater('task in listOfTasks'));
            expect(taches.count()).toEqual(0);     
		});

		it("il n'y a plus de texte en haut",function(){
			expect(element(by.id('textTaskCount')).isDisplayed()).toBeFalsy();
		});
	});

});