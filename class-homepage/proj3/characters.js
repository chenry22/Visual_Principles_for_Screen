var characters = [
    ["Bill McNitt", "Screen Director", ""],
    ["Clair Peemoller", "Scenario Writer", "It's preposterous! <i>But</i> preposterous!"],
    ["Sol Salzer", "Associate Producer", "Calm he wants at a time like this!"],
    ["Anthony Farrow", "President of the Farrow Film Studios", ""],
    ["Frederica Sayers", "", ""],
    ["Mick Watts", "Press Agent", ""],
    ["George S. Perkins", "Assistant Manager of the Daffodil Canning Co.", ""],
    ["Mrs. Perkins", "George Perkins' Wife", ""],
    ["Mrs. Shly", "Mrs. Perkins' Mother", ""],
    ["<span class='kay-gonda'>Kay Gonda</span>", "", ""],
    ["Chuck Fink", "Sociologist", ""],
    ["Fanny Fink", "Chuck Fink's Wife", ""],
    ["Dwight Langley", "Artst", ""],
    ["Eunice Hammond", "", ""],
    ["Claude Ignatius Hix", "Evangelist", ""],
    ["Sister Essie Twomey", "Evangelist", ""],
    ["Count Dietrich von Esterhazy", "", ""],
    ["Lalo Jans", "", ""],
    ["Mrs. Monaghan", "Landlady", ""],
    ["Johnnie Dawes", "", ""]
];

var quotes = [
    [ // McNitt
        [ "McNITT: I’ve always expected something like this from Gonda!", "PROLOGUE"],
        [ "McNITT: Yesterday morning, it was. I drove up to her beach home and there <span class='kay-gonda'>she</span> was, out at sea, tearing through the rocks in a motorboat till I thought I’d have heart failure watching it.", "PROLOGUE" ],
        [ "McNITT: Try and stop her! So <span class='kay-gonda'>she</span> climbs up to the road, finally, wet all over.\"You’ll get killed someday,\" I say to <span class='kay-gonda'>her</span>, and <span class='kay-gonda'>she</span> looks straight at me and <span class='kay-gonda'>she</span> says, \"That won’t make any difference to me,\" <span class='kay-gonda'>she</span> says, \"nor to anyone else anywhere.\"", "PROLOGUE"],
        [ "McNITT: \"Listen,\" I said, \"I don’t give a damn if you break your neck, but you’ll get pneumonia in the middle of my next picture!\" <span class='kay-gonda'>She</span> looks at me in that damnable way of <span class='kay-gonda'>hers</span> and <span class='kay-gonda'>she</span> says, \"Maybe there won’t be any next picture.\" And <span class='kay-gonda'>she</span> walks straight back to the house and <span class='kay-gonda'>her</span> damn flunky wouldn’t let me in!", "PROLOGUE"],
        [ "McNITT: <span class='kay-gonda'>She</span> did— damn the slut! I never wanted to direct <span class='kay-gonda'>her</span>, anyway. I . . .", "PROLOGUE" ],
        ["McNITT: I don’t give a damn myself! I’d much rather direct Joan Tudor anyway.", "PROLOGUE"]
    ],
    [ // Peemoller
        [ "CLAIRE: I see absolutely no sense in behaving like this. We can talk about something else, can't we?", "PROLOGUE" ],
        [ "CLAIRE: <i>[With unconvincing lightness]</i> I saw the rushes of Love Nest yesterday. It’s a smash, but a smash! You should see Eric in that scene where he kills the old man and . . . <i>[A sudden jerk from the others. She stops short]</i> Oh, I see. I beg your pardon. <i>[Silence. She resumes uneasily]</i> Well, I’ll tell you about my new car. The gorgeous thing is so chic! It’s simply dripping, but dripping with chromium! I was doing eighty yesterday and not a bump! They say this new Sayers Gas is . . . <i>[There is a stunned, involuntary gasp from the others. She looks at two tense faces]</i> Well, what on earth is the matter?", "PROLOGUE" ],
        [ "CLAIRE: It’s preposterous! <i>But</i> preposterous!", "PROLOGUE" ],
        [ "CLAIRE: But it’s all over town! Hints, whispers, questions. If I could see any point in it, I’d say someone was spreading it intentionally.", "PROLOGUE" ],
        [ "CLAIRE: When has <span class='kay-gonda'>she</span> ever told anyone anything?", "PROLOGUE" ],
        [ "CLAIRE: Down-to-earthiness, that’s what <span class='kay-gonda'>she</span> lacks. You know. No finer feelings. But none! No sense of human brotherhood. Honestly, I don’t understand what they all see in <span class='kay-gonda'>her</span>, anyway!", "PROLOGUE" ],
        [ "CLAIRE: I don’t know why <span class='kay-gonda'>she</span> draws them like that. <span class='kay-gonda'>She</span>’s completely heartless. I went down to <span class='kay-gonda'>her</span> house yesterday afternoon—to discuss<span class='kay-gonda'> her</span> next script. And what’s the use? <span class='kay-gonda'>She</span> wouldn’t let me put in a baby or a dog, as I wanted to. Dogs have such human appeal. You know, we’re all brothers under the skin, and . . .", "PROLOGUE" ],
        ["CLAIRE: <span class='kay-gonda'>She</span> got up and left me flat, saying <span class='kay-gonda'>she</span> had to dress. “I’m going to Santa Barbara tonight,” <span class='kay-gonda'>she</span> said. Then <span class='kay-gonda'>she</span> added, “I do not like missions of charity.”", "PROLOGUE"],
        ["CLAIRE: What does <span class='kay-gonda'>she</span> mean by anything? So then I just couldn’t resist it, but couldn’t! I said, “<span class='kay-gonda'>Miss Gonda</span>, do you really think you’re so much better than everybody else?” And what did <span class='kay-gonda'>she</span> have the nerve to answer? “Yes,” <span class='kay-gonda'>she</span> said, “I do. I wish I didn’t have to.”", "PROLOGUE"],
        ["CLAIRE: A pose, Mr. Salzer, just a pose. <span class='kay-gonda'>She</span>’s said that after every picture.", "PROLOGUE"],
        ["CLAIRE: That’s the kind of trash <span class='kay-gonda'>she</span> gathers around her. But the rest of us aren’t good enough for <span class='kay-gonda'>her</span>! Well, if <span class='kay-gonda'>she</span>’s got herself into a mess now—I’m glad. Yes, glad! I don’t see why we should all worry ourselves sick over it.", "PROLOGUE"],
        ["CLAIRE: And I’d just as soon write for Sally Sweeney. She’s such a sweet kid. And . . .", "PROLOGUE"],
    ],
    [ // Salzer
        [ "SALZER: <i>[Eagerly]</i> There’s Tony! He’ll tell us! He must know something!", "PROLOGUE" ],
        [ "SALZER: Well, that’s that. You, too. And I thought you knew something!", "PROLOGUE"],
        [ "SALZER: Calm he wants at a time like this!", "PROLOGUE" ],
        [ "SALZER: <i>Us</i> the papers should avoid!", "PROLOGUE" ],
        [ "SALZER: God! I wish we’d never signed <span class='kay-gonda'>her</span>! A headache we should have ever since <span class='kay-gonda'>she</span> came on the lot!", "PROLOGUE" ],
        [ "SALZER: Where did we find <span class='kay-gonda'>her</span>? In the gutter we found <span class='kay-gonda'>her</span>! In the gutter in Vienna! What do we get for our pains? Gratitude we get?", "PROLOGUE" ],
        ["SALZER: Maybe <span class='kay-gonda'>she</span>’s changed <span class='kay-gonda'>her</span> mind again, and quit for good.", "PROLOGUE"],
        ["SALZER: Yeah? You should laugh if you had to crawl after <span class='kay-gonda'>her</span> on your knees like we’ve done for two months. “I’m through,” <span class='kay-gonda'>she</span> says. “Does it really mean anything?” Five million net per each picture—does it mean anything! “Is it really worth doing?” Ha! Twenty thousand a week we offer <span class='kay-gonda'>her</span> and <span class='kay-gonda'>she</span> asks is it worth doing!", "PROLOGUE"],
    ],
    [ // Farrow
        ["FARROW: No panic, please. There is no occasion for panic. I have called you here in order to formulate our policy in this emergency, coolly and calmly and . . . [The interoffice communicator on his desk buzzes sharply. He leaps forward, his great calm forgotten, clicks the switch, speaks anxiously] Yes? . . . You did? Santa Barbara? . . . Give it to me! . . . <i>What?!</i> Miss Sayers won’t speak to <i>me</i>?! . . . She can’t be out—it’s an evasion! Did you tell them it was Anthony Farrow? Of the Farrow Films? . . . Are you sure you made it clear? <i>President</i> of the Farrow Films? . . . [His voice falling dejectedly] I see. . . . When did Miss Sayers leave? . . . It’s an evasion. Try again in half an hour. . . . And try again to get the chief of police.", "PROLOGUE" ],
        [ "FARROW: Let us be systematic. We cannot face a crisis without a system. Let us have discipline, calm. Am I understood? . . . [Breaks in two a pencil he has been playing with nervously] <i>Calm!</i>", "PROLOGUE"],
        [ "FARROW: Let us . . . [The intercom buzzes. He leaps to it] Yes? . . . Fine! Put him on! . . . [Very jovially] Hel-lo, Chief! How are you? I . . . [Sharply] What do you mean you have nothing to say? This is <i>Anthony Farrow</i> speaking! . . . Well, it usually <i>does</i> make a difference. Hell . . . I mean, Chief, there’s only one question I have to ask you, and I think I’m entitled to an answer. Have there or have there not been any charges filed in Santa Barbara? [Through his teeth] Very well. . . . Thank you. [Switches off, trying to control himself]", "PROLOGUE" ],
        ["FARROW: [Hopelessly] No one will talk. [Turns to the intercom again] Miss Drake? . . . Have you tried <span class='kay-gonda'>Miss Gonda</span>’s home once more? . . . Have you tried all <span class='kay-gonda'>her</span> friends? . . . I know <span class='kay-gonda'>she</span> hasn’t any, but try them anyway! [Is about to switch off, then adds] And get Mick Watts, if you can find the bast—if you can find him. If anyone knows, <i>he</i> knows!", "PROLOGUE" ],
        [ "FARROW: Personally, I do not believe the story for a minute. However, I want all the information you can give me. I take it that none of you has seen <span class='kay-gonda'>Miss Gonda</span> since yesterday?", "PROLOGUE" ],
        [ "FARROW: [Clicking the switch] Yes? . . . Who? Who is Goldstein and Goldstein? . . . [Exploding] Tell them to go to hell! . . . Wait! Tell them <span class='kay-gonda'>Miss Gonda</span> does not need any attorneys! Tell them you don’t know what on earth made them think <span class='kay-gonda'>she</span> did! [Switches off furiously]", "PROLOGUE" ],
        ["FARROW: Well, Granton Sayers—you know Granton Sayers. A reckless fool. Fifty million dollars, three years ago. Today—who knows? Perhaps, fifty thousand. Perhaps, fifty cents. But cut-crystal swimming pools and Greek temples in his garden. . . And <span class='kay-gonda'>Kay Gonda</span>. An expensive little plaything or artwork, depending on how you want to look at it. <span class='kay-gonda'>Kay Gonda</span>, that is, two years ago. Not today. I know that <span class='kay-gonda'>she</span> had not seen Sayers for over a year, previous to that dinner in Santa Barbara last night.", "PROLOGUE"],
        ["FARROW: You know, I have an idea that <span class='kay-gonda'>she</span> will come here at five. It would be just like <span class='kay-gonda'>her</span>. <span class='kay-gonda'>She</span> is so utterly unpredictable. We cannot judge <span class='kay-gonda'>her</span> actions by the usual standards. With <span class='kay-gonda'>her</span>— anything is possible.", "PROLOGUE"],
        ["FARROW: Miss Sayers, let us get this clear. I have been trying to get in touch with you since early this morning. You must know who started these rumors. And you must realize how utterly preposterous it is. <span class='kay-gonda'>Miss Gonda</span> happens to have dinner with your brother last night. He is found dead, this morning, with a bullet through him. . . . Most unfortunate and I do sympathize, believe me, but is this ground enough for a suspicion of murder against a lady of <span class='kay-gonda'>Miss Gonda</span>’s standing? Merely the fact that <span class='kay-gonda'>she</span> happened to be the last one seen with him?", "PROLOGUE"],
        ["FARROW: Did <span class='kay-gonda'>she</span> . . . did <span class='kay-gonda'>she</span> really do it?", "PROLOGUE"],

    ],
    [ // Miss Sayers
        ["MISS SAYERS: [Brushing her aside] Abominable discipline in your studio, Farrow! That’s no way to run the place. [MISS DRAKE slips out, closing the door] Five reporters pounced on me at the gate and trailed me to your office. I suppose it will all appear in the evening papers, the color of my underwear included.", "PROLOGUE"],
        ["MISS SAYERS: Where’s <span class='kay-gonda'>Kay Gonda</span>? I must see her. At once.", "PROLOGUE"],
        ["MISS SAYERS: My brother was a fool. [Sits down] I’ve always known he’d end up like this.", "PROLOGUE"],
        ["MISS SAYERS: I did not come here to answer questions. In fact, I did not come here to speak to you at all. I came to find <span class='kay-gonda'>Miss Gonda</span>. It is most urgent.", "PROLOGUE"],
    ],
    [], // Watts
    [], // Perkins
    [], // Mrs. Perkins
    [], // Mrs. Shly
    [], //Gonda
    [], // Fink
    [], // Mrs. Fink
    [], // Langley
    [], // Hammond
    [], // Hix
    [], // Twomey
    [], // Esterhazy
    [], // Jans
    [], // Mrs. Monaghan
    [] // Dawes
];

function loadCharacters() {
    var grid = document.getElementById("characters")
    for (var i = 0; i < characters.length; i++) {
        var c = characters[i];
        var characterDiv = document.createElement("div");
        characterDiv.classList.add("character-block")

        var img = document.createElement("img");
        img.src = "imgs/cast/" + String(c[0]).toLowerCase().replaceAll(" ", "-") + ".png";
        if (c[0].indexOf(">") > 0) {
            img.src = "imgs/cast/kay-gonda.png";
        }
        img.alt = c[0];
        characterDiv.appendChild(img);

        var name = document.createElement("h2");
        name.innerHTML = c[0]; 

        characterDiv.appendChild(name);
        if (c[1] != "") {
            var role = document.createElement("h3");
            role.innerHTML = c[1];
            characterDiv.appendChild(role);
        }
        var quote = document.createElement("h4");
        quote.innerHTML = '"' + c[2] + '"';
        characterDiv.appendChild(quote);

        // wrapper to allow for dynamic divider
        var wrapper = document.createElement("div");
        var imgDivider = document.createElement("img");
        imgDivider.src = "imgs/cast-div.png";
        imgDivider.classList = "div";

        wrapper.appendChild(characterDiv);
        wrapper.appendChild(imgDivider);

        const char = c[0];
        wrapper.addEventListener('click', function () {
            window.location.href = window.location.pathname+"?character=" + char.toLowerCase().replaceAll(" ", "-");
        }, false);
        grid.appendChild(wrapper);
    }
}

function loadCharacter(name) {
    for (var i = 0; i < characters.length; i++) {
        if (name === characters[i][0].toLowerCase().replaceAll(" ", "-")) {
            let list = document.createElement('div');
            list.classList = 'quote-list';
            
            let header = document.createElement('div');
            header.classList = "quote-header";
            let prevButton = document.createElement('button');
            let nextButton = document.createElement('button');
            
            let nameDiv = document.createElement('div');
            nameDiv.classList = "character-title";
            let fullName = document.createElement('h1');
            fullName.innerHTML = characters[i][0]
            let role = document.createElement('h2');
            role.innerHTML = characters[i][1];
            let back = document.createElement("a");
            back.innerText = "Back to Index";
            back.href = "characters.html";
            nameDiv.appendChild(fullName);
            nameDiv.appendChild(role);
            nameDiv.appendChild(back);

            header.appendChild(prevButton);
            header.appendChild(nameDiv);
            header.appendChild(nextButton);

            list.appendChild(header);

            for (var j = 0; j < quotes[i].length; j++){
                let quote = quotes[i][j];
                let quoteDiv = document.createElement("div");
                quoteDiv.classList = "quote"
                let text = document.createElement('p');
                let section = document.createElement('h3');
                text.innerHTML = quote[0];
                section.innerText = quote[1];
                quoteDiv.appendChild(text);
                quoteDiv.appendChild(section)
                list.appendChild(quoteDiv);
            }

            document.getElementById("character-data").appendChild(list);
            document.getElementsByClassName("content")[0].classList.add("hidden-character");
            document.getElementById("character-data").classList.remove("hidden-character");
            return;
        }
    }
}

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    loadCharacters();
    // document.getElementById("prev-page").addEventListener('click', (e) => {
    //     previousPage();
    // }); 
    // document.getElementById("next-page").addEventListener('click', (e) => {
    //     nextPage();
    // }); 

    let params = new URLSearchParams(document.location.search);
    let character = params.get("character");
    if (character != null) {
        loadCharacter(character);
    }
});