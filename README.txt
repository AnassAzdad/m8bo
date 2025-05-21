Murder Mystery Prototype - Uitleg

Wat dit is:
------------
Dit is een werkend prototype van een interactief murder mystery spel zonder VR.
Het spel werkt volledig offline via HTML en JavaScript en maakt gebruik van localStorage om een willekeurige moordenaar per gebruiker te kiezen.

Wat zit erin:
-------------
1. index.html
   - Startpagina van het spel
   - Random dader wordt gekozen (A, B of C)
   - Speler krijgt instructies om QR-clues te zoeken

2. clue1.html / clue2.html / clue3.html
   - Elke clue toont andere informatie afhankelijk van wie de dader is
   - In te laden via QR-codes of handmatig openen

3. result.html
   - Speler kiest wie volgens hem/haar de moordenaar is

4. correct.html / wrong.html
   - Feedbackpagina's na het maken van een keuze

Hoe te gebruiken:
-----------------
1. Open index.html in een browser
2. Gebruik de linkjes of QR-codes om naar clue1.html, clue2.html en clue3.html te gaan
3. Ga naar result.html en kies een verdachte
4. Je krijgt feedback of je het goed had of niet

Let op:
-------
- Alles werkt lokaal, geen server nodig
- De gekozen moordenaar blijft hetzelfde per browser sessie
- Je kunt het aanpassen via een teksteditor (zoals VS Code)

Gemaakt door: Anass, Robin & Efe (Software Developers)
