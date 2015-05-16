describe("Test de la réalisation des taches",function(){

	var getElementFromRepeater = function(repeater, line, column) {
        return element(by.repeater(repeater).row(line).column('{{'+ column + '}}'));
    };

    var getTextInRepeater = function(repeater, line, column) {
        return getElementFromRepeater(repeater, line, column).getText();
    };

	it("on verifie juste l'url et le nombre de taches",function(){
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl);   
       	var taches = element.all(by.repeater('task in listOfTasks'));
        expect(taches.count()).toEqual(2);
	});

	describe("on traite la premiere tâche",function(){
		it("on clique sur la checkbox de la premiere tâche",function(){
			element(by.id('checkbox0')).click();	
		});

		it("la premiere tâche est moins visible",function(){
			expect(element(by.id('tache0')).getAttribute('class')).toContain('task-done');						
		});
		it("le texte en haut est correct",function(){
			expect(element(by.id('textTaskCount')).isDisplayed()).toBeTruthy();
			expect(element(by.id('textTaskCount')).getText()).toEqual("You have done 1 of your 2 tasks.");	
		});
	});

	describe("on traite la seconde tâche",function(){
		it("on clique sur la checkbox de la seconde tâche",function(){
			element(by.id('checkbox1')).click();	
		});

		it("la seconde tâche est moins visible",function(){
			expect(element(by.id('tache1')).getAttribute('class')).toContain('task-done');						
		});
		it("le texte en haut est correct et est en vert",function(){
			expect(element(by.id('textTaskCount')).isDisplayed()).toBeTruthy();
			expect(element(by.id('textTaskCount')).getText()).toEqual("You have done 2 of your 2 tasks.");	
			expect(element(by.id('textTaskCount')).getAttribute('class')).toContain('done-task');		
		});
	});
});