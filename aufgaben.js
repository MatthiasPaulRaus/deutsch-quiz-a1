const aufgaben = [
    {
        "question": "Hallo! Ich heiße Noah. Und wie heißen Sie?",
        "option1": "Sie heißt Clara Berger.",
        "option2": "Ich heiße Clara Berger.",
        "option3": "Du heißt Clara Berger.",
        "answer": "2"
    }, {
        "question": "Guten Tag! Ich bin Frau Müller. Und wie heißen Sie?",
        "option1": "Ich bin Clara.",
        "option2": "Ich bin Blanco.",
        "option3": "Ich heiße Clara Blanco.",
        "answer": "3"
    }, {
        "question": "Ich komme aus Deutschland. Woher kommst du?",
        "option1": "Ich komme aus Italien.",
        "option2": "Du kommst aus Spanien.",
        "option3": "Wir kommen aus Spanien.",
        "answer": "1"
    }, {
        "question": "Ich wohne in München. Wo wohnen Sie?",
        "option1": "Sie wohnen in München.",
        "option2": "Du wohnst in München.",
        "option3": "Ich wohne auch in München.",
        "answer": "3"
    },  {
        "question": "Wir wohnen in Hamburg. Und wo wohnt ihr?",
        "option1": "Wir wohnen in München.",
        "option2": "Sie wohnen in Berlin.",
        "option3": "Ihr wohnt in Hamburg.",
        "answer": "1"
    }, {
        "question": "Frau Bianco, wer ist das?",
        "option1": "Das ist mein Auto.",
        "option2": "Hm, das ist eine Katze.",
        "option3": "Das ist meine Schwester Olga.",
        "answer": "3"
    }, {
        "question": "Wie viel kostet das Fahrrad?",
        "option1": "Er kostet 59 Euro.",
        "option2": "Der kostet 59 Euro.",
        "option3": "Es kostet 159 Euro.",
        "answer": "3"
    }, {
        "question": "Wie heißt das auf Deutsch?",
        "option1": "Sie ist eine Uhr.",
        "option2": "Das ist eine Uhr.",
        "option3": "Das ist keine Uhr.",
        "answer": "2"
    }, {
        "question": "Wie viele Handys haben Sie?",
        "option1": "Er hat drei Handys.",
        "option2": "Ich habe zwei Handys.",
        "option3": "Ich habe moderne Handys.",
        "answer": "2"
    }, {
        "question": "Wie finden Sie das Bild?",
        "option1": "Ich finde sie nicht schön.",
        "option2": "Wow, das gefällt mir sehr gut.",
        "option3": "Ich finde es nicht praktisch.",
        "answer": "2"
    }, {
        "question": "Können Sie tanzen?",
        "option1": "Nein, wir wollen nicht tanzen.",
        "option2": "Ja, sehr gern.",
        "option3": "Ja, ich kann sehr gut tanzen.",
        "answer": "3"
    }, {
        "question": "Was machen Sie in Ihrer Freizeit?",
        "option1": "Sie haben keine Freizeit.",
        "option2": "Ich gehe gern Joggen.",
        "option3": "Ich habe viel Freizeit.",
        "answer": "2"
    }, {
        "question": "Wann ist das Wochenende?",
        "option1": "Am Samstag und Sonntag.",
        "option2": "Am Montag und Dienstag.",
        "option3": "Am Donnerstag und Freitag.",
        "answer": "1"
    }, {
        "question": "Wann stehen Sie morgens auf?",
        "option1": "Wir stehen nicht früh auf.",
        "option2": "Sie muss um acht aufstehen.",
        "option3": "Ich stehe um acht auf.",
        "answer": "3"
    }, {
        "question": "Wie spät ist es?",
        "option1": "Es ist fünfzehn vor halb sechs.",
        "option2": "Es ist fünfzehn.",
        "option3": "Es ist Viertel vor fünf.",
        "answer": "3"
    },  {
        "question": "Wann frühstückst du?",
        "option1": "Hm, ich frühstücke von acht bis halb neun.",
        "option2": "Von 12 bis 13 Uhr.",
        "option3": "Ich trinke einen Tee.",
        "answer": "1"
    }, {
        "question": "Gibt es einen Bus zum Stadion?",
        "option1": "Ja, es gibt ein Stadion.",
        "option2": "Es gibt kein Stadion.",
        "option3": "Ja, es gibt einen direkten Bus vom Bahnhof zum Stadion.",
        "answer": "3"
    }, {
        "question": "Können Sie mich morgen anrufen?",
        "option1": "Ich telefoniere am Nachmittag.",
        "option2": "Ja, ich rufe Sie am Nachmittag an.",
        "option3": "Ich habe Ihr Handy nicht.",
        "answer": "2"
    }, {
        "question": "Was haben Sie gestern Abend gemacht?",
        "option1": "Wir haben um vier eingekauft.",
        "option2": "Ich habe mein Arbeitszimmer aufgeräumt.",
        "option3": "Ich muss aufräumen.",
        "answer": "2"
    }, {
        "question": "Was habt ihr am Sonntag gemacht?",
        "option1": "Ich habe am Freitag ein Konzert besucht.",
        "option2": "Am Sonntag möchte ich Sport machen.",
        "option3": "Wir haben eine Freundin besucht.",
        "answer": "3"
    }, {
        "question": "Wie haben Sie Ihren Geburtstag gefeiert?",
        "option1": "Ich will eine Party machen.",
        "option2": "Ich habe meine Freunde eingeladen.",
        "option3": "Na, ich habe viele Sachen geschenkt.",
        "answer": "2"
    }, {
        "question": "Entschuldigung, wo ist denn hier der Bahnhof?",
        "option1": "Geht er weiter?",
        "option2": "Sie sehen ihn nicht.",
        "option3": "Gehen Sie hier rechts und dann geradeaus.",
        "answer": "3"
    },  {
        "question": "Wann können wir uns treffen?",
        "option1": "Um halb acht können wir uns treffen.",
        "option2": "Sie treffen sich am Montag vor dem Museum.",
        "option3": "Sie haben keine Zeit.",
        "answer": "1"
    }, {
        "question": "Wo waren Sie denn im Urlaub?",
        "option1": "Sie hatten keinen Urlaub.",
        "option2": "Wir waren zwei Wochen in Italien.",
        "option3": "Wir haben eine Pause gemacht.",
        "answer": "2"
    }, {
        "question": "He, wie findest du meine Hose?",
        "option1": "Die gefällt mir sehr gut.",
        "option2": "Sie gefallen uns gut.",
        "option3": "Das gefällt mir nicht.",
        "answer": "1"
    }, {
        "question": "Ich trage gern T-Shirts. Und Sie?",
        "option1": "Sie tragen auch gern T-Shirts.",
        "option2": "Wir tragen Hemden.",
        "option3": "Ich trage am liebsten Pullover.",
        "answer": "3"
    },  {
        "question": "Wann ist Ihr Geburtstag?",
        "option1": "Am vierzehnten August.",
        "option2": "Ich werde vierzig.",
        "option3": "Vierzig Jahre alt.",
        "answer": "1"
    }, {
        "question": "Was hat Ihnen am besten gefallen?",
        "option1": "Das Zentrum hat sehr gefallen.",
        "option2": "Uns gefällt der große Sportplatz.",
        "option3": "Am besten fanden wir die Restaurants.",
        "answer": "3"
    }, {
        "question": "Warum sind Sie gestern nicht gekommen?",
        "option1": "Ich hatte keine Lust auszugehen.",
        "option2": "Ich wollte kommen.",
        "option3": "Wir waren gestern nicht im Kino.",	
        "answer": "1"
    }, {
        "question": "Können wir den Termin noch verschieben?",
        "option1": "Nein, wir haben keinen Termin.",
        "option2": "Ja, wir können ihn auf nächste Woche verschieben.",
        "option3": "Nein, Sie verschieben nichts mehr.",
        "answer": "2"
    } 
    ];
    
