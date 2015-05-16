exports.config = {


        seleniumAddress: 'http://localhost:4444/wd/hub',
        framework: 'jasmine',
        baseUrl: 'http://localhost:8000/app/index.html',
        capabilities: {
                'browserName': 'firefox'
        },
        // list of files / patterns to load in the browser
        specs:[
                'test/e2e/ajouterTache.e2e.spec.js', 
                'test/e2e/realiserTache.e2e.spec.js',
                'test/e2e/supprimerTache.e2e.spec.js'
                
        ]
};
