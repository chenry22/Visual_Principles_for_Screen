var characters = [
    ["Bill McNitt", "Screen Director", "I don't give a damn if <span class='kay-gonda'>you</span> break your neck, but <span class='kay-gonda'>you</span>'ll get pneumonia in the middle of my next picture!"],
    ["Clair Peemoller", "Scenario Writer", "Honestly, I don't understand what they all see in <span class='kay-gonda'>her</span>, anyway!"],
    ["Sol Salzer", "Associate Producer", "Twenty thousand a week we offer <span class='kay-gonda'>her</span> and <span class='kay-gonda'>she</span> asks is it worth doing!"],
    ["Anthony Farrow", "President of the Farrow Film Studios", "The greatest star of the screen! The dream woman of the world! They worship <span class='kay-gonda'>her</span>, millions of them."],
    ["Frederica Sayers", "", " I do not hate <span class='kay-gonda'>her</span> at all."],
    ["Mick Watts", "Press Agent", "It's useless to yell “<span class='kay-gonda'>Kay Gonda</span>” and to think that all your sins are washed away."],
    ["George S. Perkins", "Assistant Manager of the Daffodil Canning Co.", "There's something in me that knows of a life I've never lived, the kind of life no one has ever lived, but should."],
    ["Mrs. Perkins", "George Perkins' Wife", "That will be the end of everything you've ever held dear. And in exchange for what?"],
    ["Mrs. Shly", "Mrs. Perkins' Mother", "Have you gone plumb outta your mind?"],
    ["<span class='kay-gonda'>Kay Gonda</span>", "", "Of what account are dreams?"],
    ["Chuck Fink", "Sociologist", "We all dream of the perfect being that man could be. But no one has ever seen it. <span class='kay-gonda'>You</span> have."],
    ["Fanny Fink", "Chuck Fink's Wife", "Think of your duty to millions of your brothers. Millions to one."],
    ["Dwight Langley", "Artst", "<span class='kay-gonda'>Kay Gonda</span> is the symbol of all the beauty I bring to the world, a beauty we can never reach."],
    ["Claude Ignatius Hix", "Evangelist", "<span class='kay-gonda'>You</span> cannot escape from your crime. Then do not try to run from it. Give up. Surrender. Confess."],
    ["Sister Essie Twomey", "Evangelist", "To make a long story short, I'll give you five hundred bucks and you can move your junk out."],
    ["Count Dietrich von Esterhazy", "", "Perhaps <span class='kay-gonda'>you</span> have taken a life in order to save another."],
    ["Lalo Jans", "", "Oh, don't be a melodramatic fool!"],
    ["Johnnie Dawes", "", "<span class='kay-gonda'>You</span> are looking at something <span class='kay-gonda'>you</span> will never see again— a man who is perfectly happy!"]
];

var quotes = [
    [ // McNitt
        [ "<b>McNITT</b>: I've always expected something like this from <span class='kay-gonda'>Gonda</span>!", "PROLOGUE"],
        [ "<b>McNITT</b>: Yesterday morning, it was. I drove up to her beach home and there <span class='kay-gonda'>she</span> was, out at sea, tearing through the rocks in a motorboat till I thought I'd have heart failure watching it.", "PROLOGUE" ],
        [ "<b>McNITT</b>: Try and stop her! So <span class='kay-gonda'>she</span> climbs up to the road, finally, wet all over.\"You'll get killed someday,\" I say to <span class='kay-gonda'>her</span>, and <span class='kay-gonda'>she</span> looks straight at me and <span class='kay-gonda'>she</span> says, \"That won't make any difference to me,\" <span class='kay-gonda'>she</span> says, \"nor to anyone else anywhere.\"", "PROLOGUE"],
        [ "<b>McNITT</b>: \"Listen,\" I said, \"I don't give a damn if you break your neck, but you'll get pneumonia in the middle of my next picture!\" <span class='kay-gonda'>She</span> looks at me in that damnable way of <span class='kay-gonda'>hers</span> and <span class='kay-gonda'>she</span> says, \"Maybe there won't be any next picture.\" And <span class='kay-gonda'>she</span> walks straight back to the house and <span class='kay-gonda'>her</span> damn flunky wouldn't let me in!", "PROLOGUE"],
        [ "<b>McNITT</b>: <span class='kay-gonda'>She</span> did— damn the slut! I never wanted to direct <span class='kay-gonda'>her</span>, anyway. I . . .", "PROLOGUE" ],
        ["<b>McNITT</b>: I don't give a damn myself! I'd much rather direct Joan Tudor anyway.", "PROLOGUE"],
        ["<b>McNITT</b>: If you let me punch the bastard just once, he’ll talk all right.", "PROLOGUE"],
        ["<b>McNITT</b>: Jesus, it beats me what they all see in that bitch!", "PROLOGUE"]
    ],
    [ // Peemoller
        [ "<b>CLAIRE</b>: I see absolutely no sense in behaving like this. We can talk about something else, can't we?", "PROLOGUE" ],
        [ "<b>CLAIRE</b>: <i>[With unconvincing lightness]</i> I saw the rushes of Love Nest yesterday. It's a smash, but a smash! You should see Eric in that scene where he kills the old man and . . . <i>[A sudden jerk from the others. She stops short]</i> Oh, I see. I beg your pardon. <i>[Silence. She resumes uneasily]</i> Well, I'll tell you about my new car. The gorgeous thing is so chic! It's simply dripping, but dripping with chromium! I was doing eighty yesterday and not a bump! They say this new Sayers Gas is . . . <i>[There is a stunned, involuntary gasp from the others. She looks at two tense faces]</i> Well, what on earth is the matter?", "PROLOGUE" ],
        [ "<b>CLAIRE</b>: It's preposterous! <i>But</i> preposterous!", "PROLOGUE" ],
        [ "<b>CLAIRE</b>: But it's all over town! Hints, whispers, questions. If I could see any point in it, I'd say someone was spreading it intentionally.", "PROLOGUE" ],
        [ "<b>CLAIRE</b>: When has <span class='kay-gonda'>she</span> ever told anyone anything?", "PROLOGUE" ],
        [ "<b>CLAIRE</b>: Down-to-earthiness, that's what <span class='kay-gonda'>she</span> lacks. You know. No finer feelings. But none! No sense of human brotherhood. Honestly, I don't understand what they all see in <span class='kay-gonda'>her</span>, anyway!", "PROLOGUE" ],
        [ "<b>CLAIRE</b>: I don't know why <span class='kay-gonda'>she</span> draws them like that. <span class='kay-gonda'>She</span>'s completely heartless. I went down to <span class='kay-gonda'>her</span> house yesterday afternoon—to discuss<span class='kay-gonda'> her</span> next script. And what's the use? <span class='kay-gonda'>She</span> wouldn't let me put in a baby or a dog, as I wanted to. Dogs have such human appeal. You know, we're all brothers under the skin, and . . .", "PROLOGUE" ],
        ["<b>CLAIRE</b>: <span class='kay-gonda'>She</span> got up and left me flat, saying <span class='kay-gonda'>she</span> had to dress. “I'm going to Santa Barbara tonight,” <span class='kay-gonda'>she</span> said. Then <span class='kay-gonda'>she</span> added, “I do not like missions of charity.”", "PROLOGUE"],
        ["<b>CLAIRE</b>: What does <span class='kay-gonda'>she</span> mean by anything? So then I just couldn't resist it, but couldn't! I said, “<span class='kay-gonda'>Miss Gonda</span>, do you really think you're so much better than everybody else?” And what did <span class='kay-gonda'>she</span> have the nerve to answer? “Yes,” <span class='kay-gonda'>she</span> said, “I do. I wish I didn't have to.”", "PROLOGUE"],
        ["<b>CLAIRE</b>: A pose, Mr. Salzer, just a pose. <span class='kay-gonda'>She</span>'s said that after every picture.", "PROLOGUE"],
        ["<b>CLAIRE</b>: That's the kind of trash <span class='kay-gonda'>she</span> gathers around her. But the rest of us aren't good enough for <span class='kay-gonda'>her</span>! Well, if <span class='kay-gonda'>she</span>'s got herself into a mess now—I'm glad. Yes, glad! I don't see why we should all worry ourselves sick over it.", "PROLOGUE"],
        ["<b>CLAIRE</b>: And I'd just as soon write for Sally Sweeney. She's such a sweet kid. And . . .", "PROLOGUE"],
        ["<b>CLAIRE</b>: [Tugging at FARROW’s sleeve] Tony, you won’t tell <span class='kay-gonda'>her</span> what I said, will you, Tony? I’ve always been <span class='kay-gonda'>her</span> best friend! I’ll do anything to please <span class='kay-gonda'>her</span>! I’ve always . . ", "PROLOGUE"]
    ],
    [ // Salzer
        [ "<b>SALZER</b>: <i>[Eagerly]</i> There's Tony! He'll tell us! He must know something!", "PROLOGUE" ],
        [ "<b>SALZER</b>: Well, that's that. You, too. And I thought you knew something!", "PROLOGUE"],
        [ "<b>SALZER</b>: Calm he wants at a time like this!", "PROLOGUE" ],
        [ "<b>SALZER</b>: <i>Us</i> the papers should avoid!", "PROLOGUE" ],
        [ "<b>SALZER</b>: God! I wish we'd never signed <span class='kay-gonda'>her</span>! A headache we should have ever since <span class='kay-gonda'>she</span> came on the lot!", "PROLOGUE" ],
        [ "<b>SALZER</b>: Where did we find <span class='kay-gonda'>her</span>? In the gutter we found <span class='kay-gonda'>her</span>! In the gutter in Vienna! What do we get for our pains? Gratitude we get?", "PROLOGUE" ],
        ["<b>SALZER</b>: Maybe <span class='kay-gonda'>she</span>'s changed <span class='kay-gonda'>her</span> mind again, and quit for good.", "PROLOGUE"],
        ["<b>SALZER</b>: Yeah? You should laugh if you had to crawl after <span class='kay-gonda'>her</span> on your knees like we've done for two months. “I'm through,” <span class='kay-gonda'>she</span> says. “Does it really mean anything?” Five million net per each picture—does it mean anything! “Is it really worth doing?” Ha! Twenty thousand a week we offer <span class='kay-gonda'>her</span> and <span class='kay-gonda'>she</span> asks is it worth doing!", "PROLOGUE"],
        ["<b>SALZER</b>: —and here’s what he was handing out for a press release! [Straightens out a slip of paper he has crumpled in his hand, reads:] “<span class='kay-gonda'>Kay Gonda</span> does not cook her own meals or knit her own underwear. <span class='kay-gonda'>She</span> does not play golf, adopt babies, or endow hospitals for homeless horses. <span class='kay-gonda'>She</span> is not kind to her dear old mother— <span class='kay-gonda'>she</span> has no dear old mother. <span class='kay-gonda'>She</span> is not just like you and me. <span class='kay-gonda'>She</span> never was like you and me. <span class='kay-gonda'>She</span>’s like nothing you bastards ever dreamt of!”", "PROLOGUE"],
        ["<b>SALZER</b>: [Impatiently] Look here, Watts, you must know something. You’d better play ball with us. Remember, you’ve been fired from every newspaper on both coasts— so that if anything should happen to <span class='kay-gonda'>Gonda</span>, you won’t have a job here unless you help us now and . . .", "PROLOGUE"]
    ],
    [ // Farrow
        ["<b>FARROW</b>: No panic, please. There is no occasion for panic. I have called you here in order to formulate our policy in this emergency, coolly and calmly and . . . <i>[The interoffice communicator on his desk buzzes sharply. He leaps forward, his great calm forgotten, clicks the switch, speaks anxiously]</i> Yes? . . . You did? Santa Barbara? . . . Give it to me! . . . <i>What?!</i><br><br>Miss Sayers won't speak to <i>me</i>?! . . . She can't be out—it's an evasion! Did you tell them it was Anthony Farrow? Of the Farrow Films? . . . Are you sure you made it clear? <i>President</i> of the Farrow Films? . . . <i>[His voice falling dejectedly]</i> I see. . . . When did Miss Sayers leave? . . . It's an evasion. Try again in half an hour. . . . And try again to get the chief of police.", "PROLOGUE" ],
        [ "<b>FARROW</b>: Let us be systematic. We cannot face a crisis without a system. Let us have discipline, calm. Am I understood? . . . <i>[Breaks in two a pencil he has been playing with nervously]</i> <i>Calm!</i>", "PROLOGUE"],
        [ "<b>FARROW</b>: Let us . . . <i>[The intercom buzzes. He leaps to it]</i> Yes? . . . Fine! Put him on! . . . <i>[Very jovially]</i> Hel-lo, Chief! How are you? I . . . <i>[Sharply]</i> What do you mean you have nothing to say? This is <i>Anthony Farrow</i> speaking! . . . Well, it usually <i>does</i> make a difference. Hell . . . I mean, Chief, there's only one question I have to ask you, and I think I'm entitled to an answer. Have there or have there not been any charges filed in Santa Barbara? <i>[Through his teeth]</i> Very well. . . . Thank you. <i>[Switches off, trying to control himself]</i>", "PROLOGUE" ],
        ["<b>FARROW</b>: <i>[Hopelessly]</i> No one will talk. <i>[Turns to the intercom again]</i> Miss Drake? . . . Have you tried <span class='kay-gonda'>Miss Gonda</span>'s home once more? . . . Have you tried all <span class='kay-gonda'>her</span> friends? . . . I know <span class='kay-gonda'>she</span> hasn't any, but try them anyway! <i>[Is about to switch off, then adds]</i> And get Mick Watts, if you can find the bast—if you can find him. If anyone knows, <i>he</i> knows!", "PROLOGUE" ],
        [ "<b>FARROW</b>: Personally, I do not believe the story for a minute. However, I want all the information you can give me. I take it that none of you has seen <span class='kay-gonda'>Miss Gonda</span> since yesterday?", "PROLOGUE" ],
        [ "<b>FARROW</b>: <i>[Clicking the switch]</i> Yes? . . . Who? Who is Goldstein and Goldstein? . . . <i>[Exploding]</i> Tell them to go to hell! . . . Wait! Tell them <span class='kay-gonda'>Miss Gonda</span> does not need any attorneys! Tell them you don't know what on earth made them think <span class='kay-gonda'>she</span> did! <i>[Switches off furiously]</i>", "PROLOGUE" ],
        ["<b>FARROW</b>: You know, I have an idea that <span class='kay-gonda'>she</span> will come here at five. It would be just like <span class='kay-gonda'>her</span>. <span class='kay-gonda'>She</span> is so utterly unpredictable. We cannot judge <span class='kay-gonda'>her</span> actions by the usual standards. With <span class='kay-gonda'>her</span>— anything is possible.", "PROLOGUE"],
        ["<b>FARROW</b>: Miss Sayers, let us get this clear. I have been trying to get in touch with you since early this morning. You must know who started these rumors. And you must realize how utterly preposterous it is. <span class='kay-gonda'>Miss Gonda</span> happens to have dinner with your brother last night. He is found dead, this morning, with a bullet through him. . . . Most unfortunate and I do sympathize, believe me, but is this ground enough for a suspicion of murder against a lady of <span class='kay-gonda'>Miss Gonda</span>'s standing? Merely the fact that <span class='kay-gonda'>she</span> happened to be the last one seen with him?", "PROLOGUE"],
        ["<b>FARROW</b>: Did <span class='kay-gonda'>she</span> . . . did <span class='kay-gonda'>she</span> really do it?", "PROLOGUE"],
        ["<b>FARROW</b>: Look here, I'll offer you a bargain. You tell me everything and I'll take you to <span class='kay-gonda'>Miss Gonda</span>. Not otherwise.", "PROLOGUE"],
        ["<b>FARROW</b>: <i>[Rushing after her]</i> Wait! Miss Sayers! Wait a moment! <i>[She turns to him]</i> I'm so sorry! Please forgive me! I'm . . . I'm quite upset, as you can well understand. I beg of you, Miss Sayers, consider what it means! The greatest star of the screen! The dream woman of the world! They worship <span class='kay-gonda'>her</span>, millions of them. It's practically a cult.", "PROLOGUE"],
        ["<b>FARROW</b>: You wouldn't say that if you read <span class='kay-gonda'>her</span> fan mail. Do you think it comes from shopgirls and schoolkids, like the usual kind of trash? No. Not <span class='kay-gonda'>Kay Gonda</span>'s mail. From college professors and authors and judges and ministers! Everybody! Dirt farmers and international names! It's extraordinary! I've never seen anything like it in my whole career. <br><br>I don't know what <span class='kay-gonda'>she</span> does to them all—but <span class='kay-gonda'>she</span> does something. <span class='kay-gonda'>She</span>'s not a movie star to them—<span class='kay-gonda'>she</span>'s a goddess. <i>[Correcting himself hastily]</i> Oh, forgive me. I understand how you must feel about <span class='kay-gonda'>her</span>. Of course, you and I know that <span class='kay-gonda'>Miss Gonda</span> is not exactly above reproach. <span class='kay-gonda'>She</span> is, in fact, a very objectionable person who . . .", "PROLOGUE"],
        ["<b>FARROW</b>: That, Miss Sayers, is a question I've been asking myself for years. <span class='kay-gonda'>She</span>'s a strange woman.", "PROLOGUE"],
        ["<b>FARROW</b>: Smile, all of you! Smile! Don’t let <span class='kay-gonda'>her</span> think that we thought for a minute that <span class='kay-gonda'>she</span> . . .", "PROLOGUE"]
    ],
    [ // Miss Sayers
        ["MISS SAYERS: [Brushing her aside] Abominable discipline in your studio, Farrow! That's no way to run the place. [MISS DRAKE slips out, closing the door] Five reporters pounced on me at the gate and trailed me to your office. I suppose it will all appear in the evening papers, the color of my underwear included.", "PROLOGUE"],
        ["MISS SAYERS: Where's <span class='kay-gonda'>Kay Gonda</span>? I must see her. At once.", "PROLOGUE"],
        ["MISS SAYERS: My brother was a fool. [Sits down] I've always known he'd end up like this.", "PROLOGUE"],
        ["MISS SAYERS: I did not come here to answer questions. In fact, I did not come here to speak to you at all. I came to find <span class='kay-gonda'>Miss Gonda</span>. It is most urgent.", "PROLOGUE"],
        ["MISS SAYERS: I have not asked you to talk. In fact, I haven't the slightest interest in anything you may say. I want to see <span class='kay-gonda'>Miss Gonda</span>. It is to <span class='kay-gonda'>her</span> own advantage. To yours also, I suppose.", "PROLOGUE"],
        ["MISS SAYERS: Most unfortunate, if <span class='kay-gonda'>she</span> is. Highly ill advised. Highly.", "PROLOGUE"],
        ["MISS SAYERS: [Rising] I have always been told that picture people had abominable manners. Most regrettable. Please tell <span class='kay-gonda'>Miss Gonda</span> that I have tried. I shall not be responsible for the consequences now.", "PROLOGUE"],
        ["MISS SAYERS: I have never approved of motion pictures. Never saw one. The pastime of morons.", "PROLOGUE"],
        ["MISS SAYERS: I thought <span class='kay-gonda'>she</span> was a rather charming young woman. A bit anemic. A vitamin deficiency in her diet, no doubt. [Turning to him suddenly] Was <span class='kay-gonda'>she</span> happy? I don't think <span class='kay-gonda'>she</span> was", "PROLOGUE"],
        ["MISS SAYERS: I do not hate her at all.", "PROLOGUE"],
        ["MISS SAYERS: Either you are a fool or you don't know where <span class='kay-gonda'>she</span> is yourself. Regrettable, in either case. I wish you a good day.", "PROLOGUE"],
        ["MISS SAYERS: [Haughtily] I have told them nothing.", "PROLOGUE"],
    ],
    [ // Watts
        [ "MICK WATTS: [Tearing himself loose from them] Miss <i>Sayers</i>?! [Reels ferociously toward her] What did you tell them?", "PROLOGUE" ],
        ["MICK WATTS: Well, keep your mouth shut! Keep your mouth shut!", "PROLOGUE"],
        ["MICK WATTS: [In a dull monotone] I don’t know a thing. Save your liquor. Go to hell.", "PROLOGUE"],
        ["MICK WATTS: I’m talking about nothing—and that goes for everything.", "PROLOGUE"],
        ["MICK WATTS: I don’t know a thing about <span class='kay-gonda'>Kay Gonda</span>. Never heard of her. . . . <span class='kay-gonda'>Kay Gonda</span>. It’s a funny name, isn’t it? I went to confession once, long ago—and they talked about the redemption of all sins. It’s useless to yell “<span class='kay-gonda'>Kay Gonda</span>” and to think that all your sins are washed away. Just pay two bits in the balcony—and come out pure as snow.", "PROLOGUE"],
        ["MICK WATTS: I’m not hungry. I stopped being hungry many years ago. But <span class='kay-gonda'>she</span> is.", "PROLOGUE"],
        ["MICK WATTS: You don’t understand? <span class='kay-gonda'>She</span> doesn’t, either. Only it’s no use. It’s no use trying to unravel, because if you try, you end up with more dirt on your hands than you care to wipe off. There are not enough towels in the world to wipe it off. Not enough towels. That’s the trouble.", "PROLOGUE"],
        ["MICK WATTS: [His voice emotionless] Do you think I’d want to stay with the lousy bunch of you if it weren’t for <span class='kay-gonda'>her</span>?", "PROLOGUE"],
        ["MICK WATTS: [Without looking at anyone] A great quest. The quest of the hopeless. Why do we hope? Why do we seek it, when we’d be luckier if we didn’t think that it could exist? Why does <span class='kay-gonda'>she</span>? Why does <span class='kay-gonda'>she</span> have to be hurt? [Whirls suddenly upon the others with ferocious hatred] Goddamn you all! [Rushes out, slamming the door]", "PROLOGUE"]
    ],
    [ // Perkins
        ["Dear <span class='kay-gonda'>Miss Gonda</span>, <br><br>I am not a regular movie fan, but I have never missed a picture of yours. There is something about you which I can’t give a name to, something I had and lost, but I feel as if you’re keeping it for me, for all of us. I had it long ago, when I was very young. You know how it is: when you’re very young, there’s something ahead of you, so big that you’re afraid of it, but you wait for it and you’re so happy waiting. Then the years pass and it never comes. And then you find, one day, that you’re not waiting any longer. It seems foolish, because you didn’t even know what it was you were waiting for. I look at myself and I don’t know. But when I look at you—I do. <br><br>And if ever, by some miracle, you were to enter my life, I’d drop everything, and follow you, and gladly lay down my life for you, because, you see, I’m still a human being.", "ACT 1. SCENE 1."],
        ["PERKINS: You don’t understand. I’ve been made <i>Assistant Manager</i>—[Looks for the effect on her face, finds none, adds lamely]—of the Daffodil Canning Company.", "PROLOGUE"],
        ["PERKINS: [Softly] Rosie, it’s twenty years I’ve waited for it. It’s a long time, twenty years. One gets sort of tired. But now we can take it easy . . . light . . . [With sudden eagerness] . . . you know, <i>light</i> . . . [Coming down to earth, apologetically] . . . easy, I mean.", "ACT 1. SCENE 1."],
        ["PERKINS: I was sort of planning . . . I’ve been thinking of it for a long time, nights, you know . . . making plans . . . <br><br>I was thinking . . . if we’re very careful, we could take a vacation maybe . . . in a year or two . . . and go to Europe, you know, like Switzerland or Italy . . . [Looks at her hopefully, sees no reaction, adds] . . . It’s where they have mountains, you know. And lakes. And snow high up on the peaks. And sunsets.", "ACT 1. SCENE 1"],
        ["PERKINS: Look, you don’t understand. I don’t want anything that we need. I want something I don’t need at all.", "ACT 1. SCENE 1."],
        ["PERKINS: It’s not today, Rosie. It’s for a long, long time back. . . . But I’m set with the firm now. I can take good care of you and the children. But the rest— Rosie, I can’t throw it away for good.", "ACT 1. SCENE 1"],
        ["PERKINS: Rosie, it’s not that I don’t like what I’ve got. I like it fine. Only . . . Well, it’s like this bathrobe of mine. I’m glad I have it, it’s warm and comfortable, and I like it, just the same as I like the rest of it. Just like that. And no more. There should be more. . . <br><br>A man can’t live his whole life for a bathrobe. Or for things that he feels the same way about. Things that do nothing to him—inside, I mean. There should be something that he’s afraid of —afraid and happy. Like going to church—only not in a church. Something he can look up to. Something—high, Rosie . . . that’s it, <i>high</i>.", "ACT 1. SCENE 1."],
        [ "PERKINS: Oh, I know I can’t explain it! All I ask is, don’t let’s have that baby, Rosie. That would be the end of it all for me. I’ll be an old man, if I give those things up. I don’t want to be old. Not yet. God, not yet! Just leave me a few years, Rosie!", "ACT 1. SCENE 1."],
        ["PERKINS: I . . . <span class='kay-gonda'>Miss Gonda</span>, you’ll excuse me, please, you know it’s enough to make a fellow . . . I mean, if I don’t seem to make sense or . . . I mean, if you need help, you can stay here the rest of your life, <span class='kay-gonda'>Miss Gonda</span>.", "ACT 1. SCENE 1."],
        ["PERKINS: <span class='kay-gonda'>You</span> mean . . . they’re really after <span class='kay-gonda'>you</span>?", "ACT 1. SCENE 1."],
        ["PERKINS: I don’t care. [She smiles slowly. He points to the room helplessly] Just make yourself at home. <span class='kay-gonda'>You</span> can sleep right here, on the davenport, and I’ll stay outside and watch to see that no one . . .", "ACT 1. SCENE 1."],
        ["PERKINS: [Resolutely] Don’t worry about that. No one will find <span class='kay-gonda'>you</span> here. Not that I’m afraid for myself. Suppose they learn I helped <span class='kay-gonda'>you</span>? Who wouldn’t? Who’d hold that against me? Why should they?", "ACT 1. SCENE 1."],
        ["PERKINS: <span class='kay-gonda'>Miss Gonda</span>, I . . . I cry when I come home after seeing a picture of yours. I just lock myself in the bathroom and I cry, every time. I don’t know why.", "ACT 1. SCENE 1."],
        ["PERKINS: <span class='kay-gonda'>You</span> must forgive me if I said anything fresh, <span class='kay-gonda'>you</span> know, or personal. . . <br><br>I . . . I didn’t mean to complain, <span class='kay-gonda'>Miss Gonda</span>, only . . . I guess I’ve missed something along the way. I don’t know what it is, but I know I’ve missed it. Only I don’t know why. . . <br><br> You see, I’m not unhappy at all. In fact, I’m a very happy man— as happiness goes. Only there’s something in me that knows of a life I’ve never lived, the kind of life no one has ever lived, but should. . . <br><br> Who can? Who ever gets a chance at the . . . the very best possible to him? We all bargain. We take the second best. That’s all there is to be had. But the . . . the God in us, it knows the other . . . the very best . . . which never comes.", "ACT 1. SCENE 1."],
        ["PERKINS: [Fiercely] Look, I know this: let them come, the cops, let them come now and try to get <span class='kay-gonda'>you</span>. Let them tear this house down. I built it—took me fifteen years to pay for it. Let them tear it down, before I let them take <span class='kay-gonda'>you</span>. Let them come, whoever it is that’s after you . . .", "ACT 1. SCENE 1."],
        ["PERKINS: <span class='kay-gonda'>Miss Gonda</span>, may I present—my wife? Dovey, this is <span class='kay-gonda'>Miss Gonda</span>, <span class='kay-gonda'>Miss Kay Gonda</span>! [ <span class='small-caps kay-gonda'>KAY GONDA</span> inclines her head, but MRS. PERKINS remains motionless, staring at her. PERKINS says desperately: ] Don’t you understand? <span class='kay-gonda'>Miss Gonda</span>’s in trouble, you know, you’ve heard about it, the papers said . . . [He stops. MRS. PERKINS shows no reaction. Silence.]", "ACT 1. SCENE 1."],
        ["PERKINS: [Looks desperately for a word, a glance from <span class='small-caps kay-gonda'>KAY GONDA</span>. He wants her to decide. But <span class='small-caps kay-gonda'>KAY GONDA</span> stands motionless, as if the scene did not concern her at all. Only her eyes are watching him. He speaks to her, his voice a desperate plea] What will happen when people learn about this?", "ACT 1. SCENE 1."],
        ["PERKINS: [Repeats softly, dazedly, as if from far away] . . . in a dark, lonely street where your friends will be passing by and looking straight past you . . . and you’ll want to scream . . . [He stares at <span class='kay-gonda'>KAY GONDA</span>, his eyes wide. She does not move]", "ACT 1. SCENE 1."],
        ["PERKINS: [Looking at his wife] I’m sorry, <span class='kay-gonda'>Miss Gonda</span>, but under the circumstances . . .", "ACT 1. SCENE 1."]
    ],
    [ // Mrs. Perkins
        ["MRS. PERKINS: I would like it very much. Not that I have any hopes of ever being.", "ACT 1. SCENE 1."],
        ["MRS. PERKINS: And here I was waiting for you. I had something to tell you, a nice surprise for you, and . . .", "ACT 1. SCENE 1"],
        ["MRS. PERKINS: You were always a great one for making up ways of wasting good money, George Perkins. And me slaving and skimping and saving every little penny. Swans, indeed! Well, before you go thinking of any swans, you’d better get us a new Frigidaire, that’s all I’ve got to say.", "ACT 1. SCENE 1"],
        ["MRS. PERKINS: So that’s how you feel about your duties! There’s nothing holier than to raise a family. There’s no better blessing. Haven’t I spent my life making a home for you? Don’t you have everything every decent man struggles for? What else do you want?", "ACT 1. SCENE 1."],
        ["MRS. PERKINS: [ To <span class='small-caps kay-gonda'>KAY GONDA</span>, her voice unnaturally emotionless ] Why did you come here?", "ACT 1. SCENE 1."],
        ["MRS. PERKINS: [Slowly] Listen to me, George Perkins: either <span class='kay-gonda'>she</span> goes out of the house this minute, or else I go.", "ACT 1. SCENE 1."],
        ["MRS. PERKINS: I don’t want to know. I don’t want to know why my husband should bring such a thing upon me. A fancy woman or a murderess, or both. I’ve been a faithful wife to you, George. I’ve given you the best years of my life. I’ve borne your children. . . <br><br>Think of what will happen to you. Shielding a murderess. Think of the children. [He doesn’t answer] And your job, too. You just got that promotion. We were going to get new drapes for the living room. The green ones. You always wanted them.", "ACT 1. SCENE 1."],
        ["MRS. PERKINS: That will be the end of everything you’ve ever held dear. And in exchange for what? Back roads and dark alleys, fleeing by night, hunted and cornered, and forsaken by the whole wide world! . . . [He does not answer or turn to her. He is staring at <span class='small-caps kay-gonda'>KAY GONDA</span> with a new kind of understanding] Think of the children, George. . . . [He does not move] We’ve been pretty happy together, haven’t we, George? Fifteen years. . . .", "ACT 1. SCENE 1."]
    ],
    [ // Mrs. Shly
        ["MRS. SHLY: [Dryly] Well, we’ve waited for it long enough.", "ACT 1. SCENE 1."],
        ["MRS. SHLY: All I gotta say is it’s a fine way to start off on your promotion, coming home at such an hour, keeping us waiting with dinner and . . .", "ACT 1. SCENE 1" ],
        ["MRS. SHLY: Oh, we ate all right, don’t you worry! Never seen a man that cared two hoops about his family, not two hoops!", "ACT 1. SCENE 1"],
        ["MRS. SHLY: That, my boy, is nothing to brag about!", "ACT 1. SCENE 1."],
        ["MRS. SHLY: Have you gone plumb outta your mind? Are you thinking of . . . of . . .", "ACT 1. SCENE 1."],
        ["MRS. SHLY: [Ferociously] D’you know who you’re talking to? It’s my daughter you’re talking to, not a street woman! To come right out with a thing like that . . . to his own wife . . . to his own . . .", "ACT 1. SCENE 1"],
        ["MRS. SHLY: So? So that’s it? So I’m making trouble? So I’m a burden to you, am I? Well, I’m glad you came out with it, Mr. Perkins! And here I’ve been, poor fool that I am, slaving in this house like if it was my own! That’s the gratitude I get. Well, I won’t stand for it another minute. Not one minute. [Rushes out Left, slamming the door]", "ACT 1. SCENE 1"]
    ],
    [ // Kay Gonda
        ["[ KAY GONDA stands on the threshold. She wears an exquisitely plain black suit, very modern, austerely severe; a black hat, black shoes, stockings, bag, and gloves. The sole and startling contrast to her clothes is the pale, luminous gold of her hair and the whiteness of her face. It is a strange face with eyes that make one uncomfortable. She is tall and very slender. Her movements are slow, her steps light, soundless. There is a feeling of unreality about her, the feeling of a being that does not belong on this earth. She looks more like a ghost than a woman ] <br><br>KAY GONDA: Please keep quiet. And let me in.", "ACT 1. SCENE 1."],
        ["KAY GONDA: I have to hide. For the night. It is dangerous. Can you let me stay here?", "ACT 1. SCENE 1."],
        ["KAY GONDA: I read your letter. And I thought that no one would look for me here. And I thought you would want to help me.", "ACT 1. SCENE 1."],
        ["KAY GONDA: It will be dangerous for you, if they find me here.", "ACT 1. SCENE 1."],
        ["KAY GONDA: It will be hard to lose your job and to find yourself in the street. In a dark, lonely street, where you’ll see your friends passing by and looking past you, as if you did not exist. Where you will want to scream and tell them of the great things you know, but no one will hear and no one will answer. It will be hard, won’t it?", "ACT 1. SCENE 1."],
        ["KAY GONDA: Because they hate me. And they hate all those who take my side.", "ACT 1. SCENE 1."],
        ["KAY GONDA: If you mean Granton Sayers . . . No, I do not want to speak about Granton Sayers. Forget that. But I am still a murderess. You see, I came here and, perhaps, I will destroy your life—everything that has been your life for forty-three years.", "ACT 1. SCENE 1."],
        ["KAY GONDA: I told you I am a murderess. I kill so many things in people. I kill the things they live by. But they come to see me because I am the only one who makes them realize that they want those things to be killed. Or they think they do. And it’s their whole pride, that they think and say they do.", "ACT 1. SCENE 1."],
        ["KAY GONDA: I could not stand it any longer. There are times when one can’t stand it any longer.", "ACT 1. SCENE 1."],
        ["KAY GONDA: I like to think that I mean something to people.", "ACT 1. SCENE 1."],
        ["KAY GONDA: And . . . the God in you, you really want it?", "ACT 1. SCENE 1."],
        ["KAY GONDA: [Calmly] I understand.<br><br><div class='block'><i>[ She puts on her hat, picks up her bag and gloves. Her movements are light, unhurried. She walks to the door Center. When she passes MRS. PERKINS, she stops to say calmly: ]</i></div><br>I’m sorry. I had the wrong address.", "ACT 1. SCENE 1."],
        ["KAY GONDA: [Looking at him] I am wanted for murder.", "ACT 1. SCENE 2."],
        ["KAY GONDA: There are many things I’ve always wanted to be asked.", "ACT 1. SCENE 2."],
        ["KAY GONDA: Am I? Well, perhaps I am. I hate humanity. . . There are some men with a purpose in life. Not many, but there are. And there are also some with a purpose—and with integrity. These are very rare. I like them.", "ACT 1. SCENE 2"],
        ["KAY GONDA: [Without looking at him] One can do it just so long. One can keep going on one’s own power, and wring dry every drop of hope—but then one has to find help. One has to find an answering voice, an answering hymn, an echo. I am very grateful to you.", "ACT 1. SCENE 2."],
        ["KAY GONDA: [Looking at FINK intently] And that which means to you . . . you will not betray it?", "ACT 1. SCENE 2."],
    ],
    [ // Chuck Fink
        ["Dear Miss Gonda,<br><br>The determinism of duty has conditioned me to pursue the relief of my fellow men’s suffering. I see daily before me the wrecks and victims of an outrageous social system. But I gain courage for my cause when I look at you on the screen and realize of what greatness the human race is capable. Your art is a symbol of the hidden potentiality which I see in my derelict brothers. None of them chose to be what he is. None of us ever chooses the bleak, hopeless life he is forced to lead. But in our ability to recognize you and bow to you lies the hope of mankind.", "ACT 1. SCENE 2."],
        ["FINK: It’s outrageous! I won’t allow it! We have some rights . . .", "ACT 1. SCENE 2."],
        ["FINK: My dear, why waste one’s emotional reserves in blaming oneself for what is the irrevocable result of an inadequate social system?", "ACT 1. SCENE 2"],
        ["FINK: Would you like to see me pandering to the middle-class rabble, like thecribbling lackeys of capitalism? You’re weakening, Fanny. You’re turning petty bourgeois.", "ACT 1. SCENE 2."],
        ["FINK: [Softly] I know, dear. You’re tired. You’re frightened. I can’t blame you. But, you see, in our work one must give up everything. All thought of personal gain or comfort. I’ve done it. I have no private ego left. All I want is that millions of men hear the name of Chuck Fink and come to regard it as that of their leader!", "ACT 1. SCENE 2."],
        ["FINK: [Nodding frantically] Yes. Chuck Fink. In person. . . . But you . . . you’re Kay Gonda, aren’t you?", "ACT 1. SCENE 2."],
        ["FINK: [Quite recovering himself] But of course! My letter. I knew you’d notice it among the thousands. Pretty good, wasn’t it? . . . <br><br>[Laughing] What a glorious coincidence! I had no idea when I wrote it, that . . . But how wonderfully things work out!", "ACT 1. SCENE 2."],
        ["FINK: Oh, don’t worry about that. We don’t mind. We’re broad-minded.", "ACT 1. SCENE 2."],
        ["FINK: I’ve dreamt of a chance to talk to you like this. There are so many things I’ve always wanted to ask you.", "ACT 1. SCENE 2"],
        ["FINK: What an opportunity for social good! I’ve always believed that you were a great humanitarian.", "ACT 1. SCENE 2."],
        ["FINK: Oh, God, so much! . . . [Suddenly earnest] No. Nothing. [KAY GONDA looks at him closely, with a faint smile. He adds, suddenly simple, sincere for the first time:] Your work . . . one shouldn’t talk about it. I can’t. [Adds] I’ve never looked upon you as a movie star. No one does. It’s not like looking at Joan Tudor or Sally Sweeney, or the rest of them. And it’s not the trashy stories you make—you’ll excuse me, but they are trash. It’s something else. . . The way you move, and the sound of your voice, and your eyes. Your eyes.", "ACT 1. SCENE 2."],
        ["FINK: We all dream of the perfect being that man could be. But no one has ever seen it. You have. And you’re showing it to us. As if you knew a great secret, lost by the world, a great secret and a great hope. Man washed clean. Man at his highest possibility.", "ACT 1. SCENE 2."],
        ["FINK: In our drab lives, we have to grasp at any ray of light, anywhere, even in the movies. Why not in the movies, the great narcotic of mankind? You’ve done more for the damned than any philanthropist ever could. How do you do it?", "ACT 1. SCENE 2."],
        ["FINK: They’ll get you out of here over my dead body.", "ACT 1. SCENE 2."],
        ["FINK: One doesn’t betray the best in one’s soul.", "ACT 1. SCENE 2."],
        ["FINK: Good night, Miss Gonda. Don’t worry. We’ll stand by you.", "ACT 1. SCENE 2."],
        ["FINK: Fanny . . . Think they’d—hand over five thousand?", "ACT 1. SCENE 2."]

    ],
    [ // Fanny Fink
        ["FANNY: We tried to stop the night shift from going in. . .<br><br> Bud Miller started it by cracking a scab’s skull. But the damn Cossacks were prepared. Biff just sprung us out on bail. Got a cigarette? [She finds one and lights it; she smokes nervously, continuously throughout the scene] Trial next week. They don’t think the scab will recover. It looks like a long vacation in the cooler for yours truly. [Bitterly] You don’t mind, do you, sweetheart? It will be a nice, quiet rest for you here without me.", "ACT 1. SCENE 2."],
        ["FANNY: Sure. Rights. C.O.D. rights. Not worth a damn without cash. And where will you get that?", "ACT 1. SCENE 2."],
        ["FANNY: I’m going to pack. [Starts gathering things, hardly looking at them, and flinging them into the cartons with ferocious hatred] Shall we move to the Ambassador or the Beverly-Sunset, darling? [He does not answer. She flings a book into the carton] The Beverly-Sunset would be nice, I think. . . . <br><br>We shall need a suite of seven rooms—do you think we could manage in seven rooms? [He does not move. She flings a pile of underwear into the carton] Oh, yes, and a private swimming pool. [Flings a coffeepot into the carton viciously] And a two-car garage! For the Rolls-Royce! [Flings a vase down; it misses the carton and shatters against a chair leg. She screams suddenly hysterically] Goddamn them! Why do some people have all of that!", "ACT 1. SCENE 2."],
        ["FANNY: The heroics is all very well, but I’m so damn sick of standing up to make speeches about global problems and worrying all the time whether the comrades can see the runs in my stockings!", "ACT 1. SCENE 2."],
        ["FANNY: It’s no use fooling yourself. There’s a name for people like us. At least, for one of us, I’m sure. Know it? Does your brilliant vocabulary include it? Failure’s the word.", "ACT 1. SCENE 2."],
        ["FANNY: You might pretend to be worried— just out of decency.", "ACT 1. SCENE 2."],
        ["FANNY: [Furiously] Who’s turning petty bourgeois? I’ve done more than you’ll ever hope to do! I don’t go running with manuscripts to third-rate publishers. I’ve had an article printed in <i>The Nation</i>! Yes, in <i>The Nation</i>!", "ACT 1. SCENE 2."],
        ["FANNY: [Suddenly eager] It’s as if you were not a human being at all, not the kind we see around us.", "ACT 1. SCENE 2."],
        ["FANNY: When I look at you on the screen, it makes me feel guilty, but it also makes me feel young, new and proud. Somehow, I want to raise my arms like this. . . . [Raises her arms over her head in a triumphant, ecstatic gesture; then, embarrassed:] You must forgive us. We’re being perfectly childish.", "ACT 1. SCENE 2."],
        ["FANNY: It’s a murder that she’s committed. . . It’s a millionaire that she’s killed. . . I suppose his family would like to know where she is. . . I was thinking that if his family were told where she’s hiding, they’d be glad to pay a reward. . . Five thousand dollars, probably.", "ACT 1. SCENE 2."],
        ["FANNY: It’s jail for me, Chuck. Months, maybe years in jail. . . And for the others, too. Bud, and Pinky, and Mary, and the rest. Your friends. Your comrades. You need them. The cause needs them. Twelve of our vanguard.<br><br>With five thousand, we’d get the best lawyer from New York. He’d beat the case. . . . And we wouldn’t have to move out of here. We wouldn’t have to worry. You could continue your great work. . . . Think of all the poor and helpless who need you. . . . Think of twelve human beings you’re sending to jail . . . twelve to one, Chuck. . . . Think of your duty to millions of your brothers. Millions to one.", "ACT 1. SCENE 2."]
    ],
    [
        ["Dear Miss Gonda,<br><br> I am an unknown artist. But I know to what heights I shall rise, for I carry a sacred banner which cannot fail—and which is you. I have painted nothing that was not you. You stand as a goddess on every canvas I’ve done. I have never seen you in person. I do not need to. I can draw your face with my eyes closed. For my spirit is but a mirror of yours. Someday you shall hear men speak of me. Until then, this is only a first tribute from your devoted priest. . .", "ACT 1. SCENE 3."]

    ], // Langley
    [], // Hix
    [], // Twomey
    [], // Esterhazy
    [], // Jans
    [] // Dawes
];

function loadCharacters() {
    var grid = document.getElementById("characters")
    for (var i = 0; i < characters.length; i++) {
        var c = characters[i];
        var characterDiv = document.createElement("div");
        characterDiv.classList.add("character-block")

        var img = document.createElement("img");
        if (c[0].includes(">")) {
            img.src = "imgs/cast/kay-gonda.png";
        } else {
            img.src = "imgs/cast/" + String(c[0]).toLowerCase().replaceAll(" ", "-") + ".png";
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
        if (name === characters[i][0].toLowerCase().replaceAll(" ", "-") || (name === "kay-gonda" && i === 9)) {
            let list = document.createElement('div');
            list.classList = 'quote-list';
            
            let header = document.createElement('div');
            header.classList = "quote-header";
            let prevButton = document.createElement('button');
            prevButton.innerHTML = characters[(i + characters.length - 1) % characters.length][0];
            const charPrev = prevButton.textContent;
            prevButton.onclick = (function (e) {
                e.preventDefault();
                window.location.href = window.location.pathname+"?character=" + charPrev.toLowerCase().replaceAll(" ", "-");
            })
            prevButton.innerHTML = "< " + prevButton.innerHTML;

            let nextButton = document.createElement('button');
            nextButton.innerHTML = characters[(i + 1) % characters.length][0];
            const charNext = nextButton.textContent;
            nextButton.onclick = (function (e) {
                e.preventDefault();
                window.location.href = window.location.pathname+"?character=" + charNext.toLowerCase().replaceAll(" ", "-");
            });
            nextButton.innerHTML += " >";
            
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