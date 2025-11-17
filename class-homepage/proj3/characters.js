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
    ["<span class='kay-gonda'>Kay Gonda</span>", "", "If all of you who look at me on the screen hear the things I say and worship me for them—where do I hear them? Where can I hear them, so that I might go on?"],
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
        ["<b>MISS SAYERS</b>: [Brushing her aside] Abominable discipline in your studio, Farrow! That's no way to run the place. [MISS DRAKE slips out, closing the door] Five reporters pounced on me at the gate and trailed me to your office. I suppose it will all appear in the evening papers, the color of my underwear included.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: Where's <span class='kay-gonda'>Kay Gonda</span>? I must see her. At once.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: My brother was a fool. [Sits down] I've always known he'd end up like this.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: I did not come here to answer questions. In fact, I did not come here to speak to you at all. I came to find <span class='kay-gonda'>Miss Gonda</span>. It is most urgent.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: I have not asked you to talk. In fact, I haven't the slightest interest in anything you may say. I want to see <span class='kay-gonda'>Miss Gonda</span>. It is to <span class='kay-gonda'>her</span> own advantage. To yours also, I suppose.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: Most unfortunate, if <span class='kay-gonda'>she</span> is. Highly ill advised. Highly.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: [Rising] I have always been told that picture people had abominable manners. Most regrettable. Please tell <span class='kay-gonda'>Miss Gonda</span> that I have tried. I shall not be responsible for the consequences now.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: I have never approved of motion pictures. Never saw one. The pastime of morons.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: I thought <span class='kay-gonda'>she</span> was a rather charming young woman. A bit anemic. A vitamin deficiency in her diet, no doubt. [Turning to him suddenly] Was <span class='kay-gonda'>she</span> happy? I don't think <span class='kay-gonda'>she</span> was", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: I do not hate her at all.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: Either you are a fool or you don't know where <span class='kay-gonda'>she</span> is yourself. Regrettable, in either case. I wish you a good day.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: [Haughtily] I have told them nothing.", "PROLOGUE"],
        ["<b>MISS SAYERS</b>: My good man, this is getting to be preposterous!", "ACT 2. SCENE 4."],
        ["<b>MISS SAYERS</b>: Look here, I must get to the bottom of this thing. It will go too far and . . .", "ACT 2. SCENE 4."],
        ["<b>MISS SAYERS</b>: <span class='kay-gonda'>Miss Gonda</span>, this is the first sigh of relief I’ve breathed in two days! I never thought the time should come when I’d be so glad to see you! . . . <span class='kay-gonda'>You</span> must understand that I could not foresee the astounding turn of events. It was most kind of <span class='kay-gonda'>you</span> to go into hiding, but, really, <span class='kay-gonda'>you</span> did not have to hide from me.", "ACT 2. SCENE 4."],
        ["<b>MISS SAYERS</b>: When <span class='kay-gonda'>you</span> heard those preposterous rumors accusing <span class='kay-gonda'>you</span> of his murder, <span class='kay-gonda'>you</span> should have come to me at once! When I asked <span class='kay-gonda'>you</span>, at the house that night, not to disclose to anyone the manner of my brother’s death, I had no way of knowing what suspicions would arise. I tried my best to get in touch with <span class='kay-gonda'>you</span>. Please believe me that I did not start those rumors.", "ACT 2. SCENE 4."],
        ["<b>MISS SAYERS</b>: There is just one question I would like to ask <span class='kay-gonda'>you</span>. It baffles me completely. I thought perhaps <span class='kay-gonda'>you</span> may know something about it. [Points at the newspaper] This. That incredible story . . . that boy I’ve never heard of, killing himself . . . that insane confession. . . . What does it mean? . . . I can explain it only as the act of a crank, an abnormal mind . . .", "ACT 2. SCENE 4."],
        ["<b>MISS SAYERS</b>: [Turning at the door] I wish <span class='kay-gonda'>you</span> luck with whatever it is <span class='kay-gonda'>you’re</span> doing. <span class='kay-gonda'>You</span> have been most courteous in this unfortunate matter. Allow me to thank <span class='kay-gonda'>you</span>.", "ACT 2. SCENE 4."]
    ],
    [ // Watts
        [ "<b>MICK WATTS</b>: [Tearing himself loose from them] Miss <i>Sayers</i>?! [Reels ferociously toward her] What did you tell them?", "PROLOGUE" ],
        ["<b>MICK WATTS</b>: Well, keep your mouth shut! Keep your mouth shut!", "PROLOGUE"],
        ["<b>MICK WATTS</b>: [In a dull monotone] I don’t know a thing. Save your liquor. Go to hell.", "PROLOGUE"],
        ["<b>MICK WATTS</b>: I’m talking about nothing—and that goes for everything.", "PROLOGUE"],
        ["<b>MICK WATTS</b>: I don’t know a thing about <span class='kay-gonda'>Kay Gonda</span>. Never heard of her. . . . <span class='kay-gonda'>Kay Gonda</span>. It’s a funny name, isn’t it? I went to confession once, long ago—and they talked about the redemption of all sins. It’s useless to yell “<span class='kay-gonda'>Kay Gonda</span>” and to think that all your sins are washed away. Just pay two bits in the balcony—and come out pure as snow.", "PROLOGUE"],
        ["<b>MICK WATTS</b>: I’m not hungry. I stopped being hungry many years ago. But <span class='kay-gonda'>she</span> is.", "PROLOGUE"],
        ["<b>MICK WATTS</b>: You don’t understand? <span class='kay-gonda'>She</span> doesn’t, either. Only it’s no use. It’s no use trying to unravel, because if you try, you end up with more dirt on your hands than you care to wipe off. There are not enough towels in the world to wipe it off. Not enough towels. That’s the trouble.", "PROLOGUE"],
        ["<b>MICK WATTS</b>: [His voice emotionless] Do you think I’d want to stay with the lousy bunch of you if it weren’t for <span class='kay-gonda'>her</span>?", "PROLOGUE"],
        ["<b>MICK WATTS</b>: [Without looking at anyone] A great quest. The quest of the hopeless. Why do we hope? Why do we seek it, when we’d be luckier if we didn’t think that it could exist? Why does <span class='kay-gonda'>she</span>? Why does <span class='kay-gonda'>she</span> have to be hurt? [Whirls suddenly upon the others with ferocious hatred] Goddamn you all! [Rushes out, slamming the door]", "PROLOGUE"],
        ["<b>MICK WATTS</b>: [Continuing a discourse that has obviously been going on for some time, speaking in an even, expressionless monotone, his manner earnest, confidential] . . . and so the king called them all before his throne and he said: “I’m weary and sick of it. I am tired of my kingdom where not a single man is worth ruling. I am tired of my lusterless crown, for it does not reflect a single flame of glory anywhere in my land.” . . .<br><br>You see, he was a very foolish king. Some scream it, like he did, and squash their damn brains out against a wall. Others stagger on, like a dog chasing a shadow, knowing damn well that there is no shadow to chase, but still going on, their hearts empty and their paws bleeding. . . .<br><br>So the king said to them on his deathbed—oh, this was another time; he was on his deathbed this time—he said: “It is the end, but I am still hoping. There is no end. Ever shall I go on hoping . . . ever . . . ever.” [Looks suddenly at the BUTLER, as if noticing him for the first time, and asks in an entirely different voice, pointing at him:] What the hell are you doing here?", "ACT 2. SCENE 4."],
        ["<b>MICK WATTS</b>: I realize everything that you realize, and then some. And I’m telling you there’s nothing to be done. Don’t bother her now.", "ACT 2. SCENE 4."],
        ["<b>MICK WATTS</b>: Bewildering? Hell, it’s monstrous! You don’t know the half of it! . . . [Catching himself, adds flatly] I don’t, either.", "ACT 2. SCENE 4."],
        ["<b>MICK WATTS</b>: I hope <span class='kay-gonda'>you’ve</span> had a good time! I hope <span class='kay-gonda'>you’ve</span> enjoyed it! But I’m through! . . . I’m through! God, I wish I could quit! . . . Why do I serve <span class='kay-gonda'>you</span> like a dog and will go on serving you like a dog for the rest of my days? Why can’t I resist any crazy whim of <span class='kay-gonda'>yours</span>? Why did I have to go and spread rumors about a murder <span class='kay-gonda'>you</span> never committed? Just because <span class='kay-gonda'>you</span> wanted to find out something? Well, have <span class='kay-gonda'>you</span> found it out?", "ACT 2. SCENE 4."],
        ["<b>MICK WATTS</b>: But <span class='kay-gonda'>you</span> are a murderess, <span class='kay-gonda'>Kay Gonda</span>! <span class='kay-gonda'>You</span> killed that boy! . . . The poor fool thought that he had to save <span class='kay-gonda'>your</span> life!", "ACT 2. SCENE 4."],
        ["<b>MICK WATTS</b>: But don’t <span class='kay-gonda'>you</span> realize what <span class='kay-gonda'>you’ve</span> done?", "ACT 2. SCENE 4."]
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
        ["KAY GONDA: Don’t you understand? I am in danger. I have to hide. Please let me stay here for the night.", "ACT 1. SCENE 3."],
        ["KAY GONDA: [Stepping up to him, in full light] Dwight Langley! Look at me! Look at all these pictures of me that you’ve painted! Don’t you know me? You’ve lived with me in your hours of work, your best hours. Were you lying in those hours?", "ACT 1. SCENE 3."],
        ["KAY GONDA: Of what account is an art that preaches things it does not want to exist?", "ACT 1. SCENE 3."],
        ["KAY GONDA: You can throw me out, if you wish. You can call the police, if you prefer. Only do so now.", "ACT 2. SCENE 1."],
        ["KAY GONDA: Yes. A heavy burden. And I wonder how much longer I will be able to carry it.", "ACT 2. SCENE 1."],
        ["KAY GONDA: [Slowly] If I confess, they will take my life.", "ACT 2. SCENE 1."],
        ["KAY GONDA: Then we are on earth only in order to suffer?", "ACT 2. SCENE 1."],
        ["KAY GONDA: How can I help but want it here, on earth? . . . Why is it not perfect? Because it cannot be? Or because we do not want it to be?", "ACT 2. SCENE 1."],
        ["KAY GONDA: [Her voice soft and low] And after you and I have made our sacrifice, what will be left on this earth?", "ACT 2. SCENE 1."],
        ["KAY GONDA: You said you would not tell me how glad you were to see me. Don’t tell me. I do not want to hear it. I have heard it too often. I have never believed it. And I do not think I shall come to believe it <i>tonight</i>.", "ACT 2. SCENE 2."],
        ["KAY GONDA: [Breaking down, suddenly eager and trusting] I saw a man once, when I was very young. He stood on a rock, high in the mountains. His arms were spread out and his body bent backward, and I could see him as an arc against the sky. He stood still and tense, like a string trembling to a note of ecstasy no man had ever heard. . . . I have never known who he was. I knew only that this was what life should be. . . . [Her voice trails off]<br><br>[In a changed voice] And I came home, and my mother was serving supper, and she was happy because the roast had a thick gravy. And she gave a prayer of thanks to God for it. . . . [Jumps up, whirls to him suddenly, angrily] Don’t listen to me! Don’t look at me like that! . . . I’ve tried to renounce it. I thought I must close my eyes and bear anything and learn to live like the others. To make me as they were. To make me forget. I bore it. All of it. But I can’t forget the man on the rock. I can’t!", "ACT 2. SCENE 2."],
        ["KAY GONDA: [Eagerly] You understand? I’m not alone? . . . Oh, God! I can’t be alone! [Suddenly quiet] Why did you give it up?", "ACT 2. SCENE 2."],
        ["KAY GONDA: You have not asked me whether I want to go. . . [Smiles softly; then:] I want to tell you.", "ACT 2. SCENE 2."],
        ["KAY GONDA: I’ll learn everything we’ll need. We’ll start from scratch, from the beginning of the world—our world.", "ACT 2. SCENE 2."],
        ["KAY GONDA: [Smiling softly] I’m terribly afraid. I have never been happy before.", "ACT 2. SCENE 2."],
        ["KAY GONDA: We’ll have no neighbors . . . nowhere . . . not for miles around. . . . No one will look at me . . . No one will pay to look at me. . . .", "ACT 2. SCENE 2."],
        ["KAY GONDA: [She approaches him suddenly, takes his face in her hands and raises it] What’s the matter, Johnnie? . . . You must not be so glad to see me.", "ACT 2. SCENE 3."],
        ["KAY GONDA: [She walks away from him, falls wearily down on the cot. She looks at him and smiles; a smile that is not gay, not friendly] People say I am a great star, Johnnie. They say I have everything one can wish for.", "ACT 2. SCENE 3."],
        ["KAY GONDA: I am a very bad woman, Johnnie. Everything you’ve heard about me is true. Everything—and more. I came to tell you that you must not think of me what you said in your letter.", "ACT 2. SCENE 3."],
        ["KAY GONDA: [With a harsh little laugh] You’re a fool! I’m not afraid of you. . . . Do you know that I get twenty thousand dollars a week? . . . Do you know that I have fifty pairs of shoes and three butlers? . . . Do you know that my pictures are shown in every town on earth?", "ACT 2. SCENE 3."],
        ["KAY GONDA: [Furiously] Stop looking at me like that! . . . Do you know that people pay millions to see me? I don’t need your approval! I have plenty of worshipers! I mean a great deal to them!", "ACT 2. SCENE 3."],
        ["KAY GONDA: [She looks at him, laughs harshly, speaks in a new voice, strange to her, an unnaturally common voice] Look, Johnnie, let’s stop kidding each other. I’ll tell you something. I’ve killed a man. It’s dangerous, hiding a murderess. Why don’t you throw me out? [He sits looking at her silently] No? That one won’t work? Well, then, look at me. I’m the most beautiful woman you’ve ever seen. Don’t you want to sleep with me? Why don’t you? Right now. I won’t struggle. [He does not move] Not that? But listen: do you know that there’s a reward on my head? Why don’t you call the police and turn me over to them? You’d be set for life.", "ACT 2. SCENE 3."],
        ["KAY GONDA: [Raising her head] Johnnie. If all of you who look at me on the screen hear the things I say and worship me for them—where do I hear them? Where can I hear them, so that I might go on? I want to see real, living, and in the hours of my own days, that glory I create as an illusion! I want it real! I want to know that there is someone, somewhere, who wants it, too! Or else what is the use of seeing it, and working, and burning oneself for an impossible vision? A spirit, too, needs fuel. It can run dry.", "ACT 2. SCENE 3."],
        ["KAY GONDA: What do you dream of?", "ACT 2. SCENE 3."],
        ["KAY GONDA: Of what account is life?", "ACT 2. SCENE 3."],
        ["KAY GONDA: There was a great man once who said: “I love those that know not how to live today.”", "ACT 2. SCENE 3."],
        ["KAY GONDA: Don’t say that. I need you. I’m here. I’ll never let you go.", "ACT 2. SCENE 3."],
        ["KAY GONDA: Take me away from here. Anywhere you wish.", "ACT 2. SCENE 3."],
        ["KAY GONDA: Johnnie! You don’t know what you’re doing! Wait, my dearest! Put that gun down. . . I’ll tell you everything! You don’t know! I’m safe!", "ACT 2. SCENE 3."],
        ["KAY GONDA: I was not hiding from anyone.", "ACT 2. SCENE 4."],
        ["KAY GONDA: Well, Mick, seventy-five million, six hundred thousand people hate me. They hate me in their hearts for the things they see in me, the things they have betrayed. I mean nothing to them, except a reproach. . . . But there are three hundred and twelve others— perhaps only the twelve. There are a few who want the highest possible and will take nothing less and will not live on any other terms. . . . It is with them that I am signing a contract tomorrow. We can’t give up the earth to all those others.", "ACT 2. SCENE 4."],
        ["KAY GONDA: He wanted to die that I may live. He did just that.", "ACT 2. SCENE 4."],
        ["KAY GONDA: [Slowly, looking past him] That, Mick, was the kindest thing I have ever done."]
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
    [ // Langley
        ["Dear <span class='kay-gonda'>Miss Gonda</span>,<br><br> I am an unknown artist. But I know to what heights I shall rise, for I carry a sacred banner which cannot fail—and which is you. I have painted nothing that was not you. You stand as a goddess on every canvas I’ve done. I have never seen you in person. I do not need to. I can draw your face with my eyes closed. For my spirit is but a mirror of yours. Someday you shall hear men speak of me. Until then, this is only a first tribute from your devoted priest. . .", "ACT 1. SCENE 3."],
        ["LANGLEY: Don’t try to understand. . . An artist <i>tells</i>. He does not <i>explain</i>.", "ACT 1. SCENE 3."],
        ["LANGLEY: [Furiously] Shut up, all of you! She didn’t do it! I won’t have you discussing her in my house!", "ACT 1. SCENE 3."],
        ["LANGLEY: [Climbs up on a chair, stands a little unsteadily, speaks with a kind of tortured sincerity] The bitterest moment of an artist’s life is the moment of his triumph. The artist is but a bugle calling to a battle no one wants to fight. The world does not see and does not want to see. The artist begs men to throw the doors of their lives open to grandeur and beauty, but those doors will remain closed forever . . . forever . . . [Is about to add something, but drops his hand in a gesture of hopelessness and ends in a tone of quiet sadness] . . . forever. . . . [Applause.]", "ACT 1. SCENE 3."],
        ["LANGLEY: Oh, leave me alone! No one’s going to tell me what to do from now on!", "ACT 1. SCENE 3."],
        ["LANGLEY: I’m sick and tired of people who can’t outgrow their possessiveness! You know the hypocritical trick—the chains of gratitude!", "ACT 1. SCENE 3."],
        ["LANGLEY: Yes! Right here and now! I want them all to hear! [To the guests] So you think I can’t get along without her? I’ll show you! I’m through! [To EUNICE] Do you hear that? I’m through! [EUNICE stands motionless] I’m free! I’m going to rise in the world! I’m going places none of you ever dreamt of! I’m ready to meet the only woman I’ve ever wanted—Kay Gonda! I’ve waited all these years for the day when I would meet her! That’s all I’ve lived for! And no one’s going to stand in my way!", "ACT 1. SCENE 3."],
        ["LANGLEY: [Looks her over contemptuously, his hands in his pockets, grinning] Well, you do look like <span class='kay-gonda'>Kay Gonda</span>. So does her stand-in. So do dozens of extra girls in Hollywood. What is it you’re after? I can’t get you into pictures, my girl. I’m not even the kind to promise you a screen test. Drop the racket. Who are <span class='kay-gonda'>you</span>?", "ACT 1. SCENE 3."],
        ["LANGLEY: Why would <span class='kay-gonda'>Kay Gonda</span> pick my house to hide in of all places? [<span class='kay-gonda'>She</span> starts to open her handbag, but closes it again and says nothing] How do I know you’re <span class='kay-gonda'>Kay Gonda</span>? Have you any proof?", "ACT 1. SCENE 3."],
        ["LANGLEY: Kindly leave my art out of it. My art has nothing to do with your life or mine.", "ACT 1. SCENE 3."],
        ["LANGLEY: [Solemnly] Listen. <span class='kay-gonda'>Kay Gonda</span> is the symbol of all the beauty I bring to the world, a beauty we can never reach. We can only sing of <span class='kay-gonda'>her</span>, who is the unattainable. That is the mission of the artist. We can only strive, but never succeed. Attempt, but never achieve. That is our tragedy, but our hopelessness is our glory.", "ACT 1. SCENE 3."]
    ],
    [ // Hix
        ["Dear <span class='kay-gonda'>Miss Gonda</span>,<br><br>Some may call this letter a sacrilege. But as I write it, I do not feel like a sinner. For when I look at you on the screen, it seems to me that we are working for the same cause, you and I. This may surprise you, for I am only a humble Evangelist. But when I speak to men about the sacred meaning of life, I feel that you hold the same Truth which my words struggle in vain to disclose. We are traveling different roads, Miss Gonda, but we are bound to the same destination.", "ACT 2. SCENE 1."],
        ["HIX: . . . but even in the blackest one of us, there is a spark of the sublime, a single drop in the desert of every barren soul. And all the suffering of men, all the twisted agonies of their lives, come from their treason to that hidden flame. All commit the treason, and none can escape the payment.", "ACT 2. SCENE 1"],
        ["HIX: Sister Twomey, these are the first words of truth I have ever heard emerging from your mouth.", "ACT 2. SCENE 1."],
        ["HIX: [Beside himself] You had the infernal presumption to suppose that the Temple of Eternal Truth was for sale?", "ACT 2. SCENE 1."],
        ["HIX: [Drawing himself up] There come moments in a man’s life when he is sorely pressed to remember the lesson of charity to all. I have no wish to insult you. But I have always considered you a tool of the Devil. My temple has stood in this neighborhood for . . .", "ACT 2. SCENE 1."],
        ["HIX: <i>Five hundred dollars for the Temple of Eternal Truth?</i>", "ACT 2. SCENE 1."],
        ["HIX: Never, in twenty years, have I shown the door to anyone in this temple. But I am doing it now. [He points to the door]", "ACT 2. SCENE 1"],
        ["HIX: <span class='kay-gonda'>You</span> are seeking shelter? . . . [Walks to the open door, closes it, and locks it] This door has not been closed for twenty years. It shall be closed tonight. [He returns to <span class='kay-gonda'>her</span> and silently hands <span class='kay-gonda'>her</span> the key] . . . The door will not be opened, until you wish to open it.", "ACT 2. SCENE 1."],
        ["HIX: [He stands before her, austerely erect and solemn] <span class='kay-gonda'>You</span> have taken a heavy burden upon <span class='kay-gonda'>your</span> shoulders.", "ACT 2. SCENE 1."],
        ["HIX: <span class='kay-gonda'>You</span> may hide from the men who threaten you. But of what importance is that?", "ACT 2. SCENE 1."],
        ["HIX: I want to save <span class='kay-gonda'>you</span>. But not from the police. From yourself. [She looks at him for a long moment, a fixed, steady glance, and does not answer] <span class='kay-gonda'>You</span> have committed a mortal sin. <span class='kay-gonda'>You</span> have killed a human being. [Points to the room] Can this place—or any place—give you protection from that?", "ACT 2. SCENE 1."],
        ["HIX: <span class='kay-gonda'>You</span> cannot escape from your crime. Then do not try to run from it. Give up. Surrender. Confess.", "ACT 2. SCENE 1."],
        ["HIX: If <span class='kay-gonda'>you</span> don’t, <span class='kay-gonda'>you</span> will lose your life— the eternal life of your soul.", "ACT 2. SCENE 1."],
        ["HIX: The joys of this earth are paid for by damnation in the Kingdom of Heaven. But if we choose to suffer, we are rewarded with eternal happiness.", "ACT 2. SCENE 1."],
        ["HIX: The greater the suffering, the greater our virtue. [Her head drops slowly] <span class='kay-gonda'>You</span> have a sublime chance before <span class='kay-gonda'>you</span>. Accept, of your own will, the worst that can be done to <span class='kay-gonda'>you</span>. The infamy, the degradation, the prison cell, the scaffold. Then your punishment will become your glory.", "ACT 2. SCENE 1"],
        ["HIX: If you know that a life of supreme beauty is possible—how can you help but want to enter it?", "ACT 2. SCENE 1."],
        ["HIX: This world is of no consequence. Whatever beauty it offers us is here only that we may sacrifice it— for the greater beauty beyond. [She is not looking at him. He stands watching her for a moment; then, his voice low with emotion:] <span class='kay-gonda'>You</span> don’t know how lovely <span class='kay-gonda'>you</span> are at this moment. [She raises her head] <span class='kay-gonda'>You</span> don’t know the hours I’ve spent watching <span class='kay-gonda'>you</span> across the infinite distance of a screen. I would give my life to keep <span class='kay-gonda'>you</span> here in safety. I would let myself be torn to shreds, rather than see <span class='kay-gonda'>you</span> hurt. Yet I am asking <span class='kay-gonda'>you</span> to open this door and walk out to martyrdom. That is my chance of sacrifice. I am giving up the greatest thing that ever came to me.", "ACT 2. SCENE 1."],
        ["HIX: Our example. It will light the way for all the miserable souls who flounder in helpless depravity. They, too, will learn to renounce. <span class='kay-gonda'>Your</span> fame is great. The story of <span class='kay-gonda'>your</span> conversion will be heard the world over. <span class='kay-gonda'>You</span> will redeem the scrubby wretches who come to this temple and all the wretches in all the slums.", "ACT 2. SCENE 1."],
    ],
    [ // Twomey
        ["ESSIE TWOMEY: I heard you way from the street— it’s a blessed voice you have, though you don’t control your belly tones properly— and I didn’t want to intrude. I just slipped in. . .<br><br>Go ahead with the rehearsal. It’s an inspiring sermon you have there, a peach of a sermon. Though a bit on the old-fashioned side. Not modern enough, Brother Hix. That’s not the way I do it.", "ACT 2. SCENE 1"],
        ["ESSIE TWOMEY: It’s like this, brother: there’s no room in this neighborhood for you and me both. . . The poor dear souls in these parts are heavily laden, indeed. They cannot support two temples. Why, the mangy bums haven’t got enough to feed the fleas on a dog!", "ACT 2. SCENE 1."],
        ["ESSIE TWOMEY: Now, now, Brother Hix, let’s be modern. That’s no way to talk business. Just look at the facts. You’re washed up here, brother. . . What kind of a draw do you get? Thirty or fifty heads on a big night. Look at me. Two thousand souls every evening, seeking the glory of God! <i>Two thousand</i> noses, actual count! I’m putting on a Midnight Service tonight—“The Night Life of the Angels”—and I’m expecting three thousand.", "ACT 2. SCENE 1."],
        ["ESSIE TWOMEY: I know. For twenty years. But times change, brother. You haven’t got what it takes anymore. You’re still in the horse-and-buggy age—praise the Lord!", "ACT 2. SCENE 1."],
        ["ESSIE TWOMEY: Look at what you were just rehearsing here. That’ll put ’em to sleep. Verily. You can’t hand out that line anymore. Now take my last sermon —“The Service Station of the Spirit.” There’s a lesson for you, brother! I had a whole service station built—[Rises, walks to pulpit]—right there, behind my pulpit. Tall pumps, glass and gold, labeled PURITY, PRAYER, PRAYER WITH FAITH SUPER-MIXTURE. And young boys in white uniforms—good-lookers, every one of ’em!—with gold wings, and caps inscribed CREED OIL, INC. Clever, eh?", "ACT 2. SCENE 1"],
        ["ESSIE TWOMEY: [Coming down] Well, brother, to make a long story short, I’ll give you five hundred bucks and you can move your junk out.", "ACT 2. SCENE 1."],
        ["ESSIE TWOMEY: Well, what’s the matter with five hundred dollars? It’s a lot of money. You can buy a good secondhand car for five hundred dollars.", "ACT 2. SCENE 1."]
    ],
    [ // Esterhazy
        ["Dear Miss Gonda, I have had everything men ask of life. I have seen it all, and I feel as if I were leaving a third-rate show on a disreputable side street. If I do not bother to die, it is only because my life has all the emptiness of the grave and my death would have no change to offer me. It may happen, any day now, and nobody—not even the one writing these lines—will know the difference.<br><br>But before it happens, I want to raise what is left of my soul in a last salute to you, you who are that which the world should have been. Morituri te salutamus.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [Stands looking at her silently. Then, with a faint smile of something like sudden decision, he reaches into his pocket and calmly hands her a checkbook] I think you might as well see it. . . See what’s left . . . at some bank.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: I have no other money. You’re holding there all that’s left.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [Calmly] I’ve known it. For the last two years. But a fortune does not vanish without a few last convulsions. There has always been something to sell, to pawn, to borrow on. Always someone to borrow from. But not this time. This time, it’s done.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [Shrugging] How do I know? Where did all the rest of it go, those other things, inside, that you start life with? Fifteen years is a long time. When they threw me out of Austria, I had millions in my pocket, but the rest—the rest, I think, was gone already.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: I think it’s curious. . . . The first Count Dietrich von Esterhazy died fighting under the walls of Jerusalem. The second died on the ramparts of his castle, defying a nation. The last one wrote a bad check in a gambling casino with chromium and poor ventilation. . . . It’s curious.<br><br>What a peculiar thing it is—a leaking soul. You go through your days and it slips away from you, drop by drop. With each step. Like a hole in your pocket and coins dropping out, bright little coins, bright and shining, never to be found again.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [Softly] You know, I think I’m glad it happened like this. A few hours ago I had problems, a thick web of problems I was much too weary to untangle. Now I’m free. Free at one useless stroke I did not intend striking.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: I would not be frightened if I still cared.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: My dear, you really didn’t think you were . . . the only one?", "ACT 2. SCENE 2."],
        ["ESTERHAZY: I said, if I’m here to call— tomorrow.", "ACT 2. SCENE 2."],

        ["ESTERHAZY: It was a brilliant idea. Your coming here to hide. . . It could have occurred only to you. Because you’re the only one capable of the exquisite sensitiveness to recognize the only sincere letter I’ve ever written in my life.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [Studying her openly, speaking casually, matter-of-factly] You look taller than you do on the screen—and less real. Your hair is blonder than I thought. Your voice about a tone higher. It is a pity that the camera does not photograph the shade of your lipstick. [In a different voice, warm and natural] And now that I’ve done my duty as a fan reacting, sit down and let’s forget the unusual circumstances.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: Looking at her] No, I won’t tell you how glad I am to see you here. I never speak of the things that mean much to me. The occasions have been too rare. I’ve lost the habit.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: Do you know that it is really I who must thank you? Not only for coming, but for coming tonight of all nights. . . Perhaps you have taken a life in order to save another. [Pause] A long time ago— no, isn’t that strange?— it was only a few minutes ago— I was ready to kill myself. Don’t look at me like that. It isn’t frightening. But what did become frightening was that feeling of utter indifference, even to death, even to my own indifference. And then you came. . . . I think I could hate you for coming.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [With sudden fire, the first, unexpected emotion] I don’t want to be proud of myself again. I had given it up. Yet now I am. Just because I see you here. Just because a thing has happened which is like nothing I thought possible on earth.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: It’s an incurable disease, you know—to have faith in the better spirit of man. I’d like to tell you to renounce it. To destroy in yourself all hunger for anything above the dry rot that others live by. But I can’t. Because you will never be able to do it. It’s your curse. And mine.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [Sitting down on the arm of a chair, speaking softly, lightly] You know, when I was a boy—a very young boy—I thought my life would be a thing immense and shining. I wanted to kneel to my own future. . . . [Shrugs] One gets over that. . . <br><br>Always. But never completely.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [Shrugging] Why does anyone give it up? Because it never comes. What did I get instead? Racing boats, and horses, and cards, and women—all those blind alleys—the pleasures of the moment. All the things I never wanted. . . There was nothing else to take. But if it came, if one had a chance, a last chance . . .", "ACT 2. SCENE 2."],
        ["ESTERHAZY: We’re escaping together. We’re outside the law—both of us. I have something worth fighting for now. My ancestors would envy me if they could see me. For my Holy Grail is of this earth. It is real, alive, possible. Only they would not understand. It is our secret. Yours and mine.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: We’ll build a house somewhere in the jungle. It will be curious to start chopping trees down—that’s another experience I’ve missed. I’ll learn it. And you’ll have to learn to cook.", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [His voice low] I shall allow no one to look at you. . . . In the morning, you will swim in the sea . . . alone . . . in the green water . . . with the first sun rays on your body. . . . [He rises, bends over her, whispers] And then I’ll carry you up to the house . . . up the rocks . . . in my arms . . . [He seizes her and kisses her violently. She responds. He raises his head and chuckles with a sound of cynical intimacy] That’s all we’re really after, you and I, aren’t we? Why pretend?", "ACT 2. SCENE 2."],
        ["ESTERHAZY: Why pretend that we’re important? We’re no better than the others. [Tries to kiss her again]", "ACT 2. SCENE 2."],
        ["ESTERHAZY: [Laughing harshly] Where? You have no place to go! [She stares at him, wide-eyed, incredulous] After all, what difference does it make, whether it’s now or later? Why should we take it so seriously? [She whirls toward the door. He seizes her. She screams, a muffled scream, stopped by his hand on her mouth] Keep still! You can’t call for help! . . . It’s a death sentence—or this. . . . [She starts laughing hysterically] Keep still! . . . Why should I care what you’ll think of me afterwards? . . . Why should I care about tomorrow?", "ACT 2. SCENE 2."]
    ],
    [ // Jans
        ["LALO: [Looking at a clock on the table beside her, lazily] Only two o’clock. . . . Really, we didn’t have to leave so early, darling. . . . [ESTERHAZY does not answer. He does not seem to hear. There is no hostility in his attitude, but a profound indifference and a strange tension. He walks to the window and stands looking out thoughtfully, unconscious of LALO’s presence. She yawns, lighting a cigarette] I think I’ll go home. . . . [No answer] I said, I think I’ll go home. . . . [Coquettishly] Unless, of course, you insist. . . .<br><br>[No answer. She shrugs and settles down more comfortably. She speaks lazily, watching the smoke of her cigarette] You know, Rikki, we’ll just have to go to Agua Caliente. And this time I’ll put it all on Black Rajah. It’s a cinch. . . . [No answer] By the way, Rikki, my chauffeur’s wages were due yesterday. . . .", "ACT 2. SCENE 2."],
        ["LALO: You know I’ve always had the damnedest luck at roulette. And if we hadn’t left so early, I’m sure I’d have won it back.", "ACT 2. SCENE 2."],
        ["LALO: And anyway, what’s one thousand and seventy something?", "ACT 2. SCENE 2."],
        ["LALO: But . . . but you’re crazy! Things like that don’t happen like . . . like that! One sees . . . in advance . . . One knows.", "ACT 2. SCENE 2."],
        ["LALO: Stop grinning like that! Do you think it’s funny?", "ACT 2. SCENE 2."],
        ["LALO: To hell with that! What’s to become of me? You’re not going to stand there like a damn fool and let things . . .", "ACT 2. SCENE 2."],
        ["LALO: Don’t you care at all?", "ACT 2. SCENE 2."],
        ["LALO: But good God! What about the payments on my new Cadillac? And those pearls I charged to you? And . . ", "ACT 2. SCENE 2."],
        ["LALO: [Looks at him, her eyes blazing. Is on the point of screaming something. Laughs suddenly instead, a dry insulting laughter] Do you think I care— <i>now</i>? Do you think I’m going to cry over a worthless . . .", "ACT 2. SCENE 2."],
        ["LALO: Oh, don’t be a melodramatic fool!", "ACT 2. SCENE 2."]
    ],
    [ // Dawes
        ["Dear Miss Gonda,<br><br>This letter is addressed to you, but I am writing it to myself. I am writing and thinking that I am speaking to a woman who is the only justification for the existence of this earth, and who has the courage to want to be. A woman who does not assume a glory of greatness for a few hours, then return to the children-dinner-friends- football-and-God reality. A woman who seeks that glory in her every minute and her every step. A woman in whom life is not a curse, nor a bargain, but a hymn.<br><br>I want nothing except to know that such a woman exists. So I have written this, even though you may not bother to read it, or reading it, may not understand. I do not know what you are. I am writing to what you could have been.", "ACT 2. SCENE 3."],
        ["JOHNNIE: Yes. I am very much afraid. Always. I don’t know what to say to them. But I’m not afraid— now.", "ACT 2. SCENE 3."],
        ["JOHNNIE: You came to tell me that everything I said in my letter was true. Everything—and more.", "ACT 2. SCENE 3."],
        ["JOHNNIE: You mean nothing at all to them. You know it.", "ACT 2. SCENE 3."],
        ["JOHNNIE: The only thing I could ask you, you have given to me already.", "ACT 2. SCENE 3."],
        ["JOHNNIE: [He rises, leads her to the cot, makes her sit down, stands before her] I want to tell you only this: there are a few on earth who see you and understand. These few give life its meaning. The rest—well, the rest are what you see they are. You have a duty. To live. Just to remain on earth. To let them know you do and can exist. To fight, even a fight without hope. We can’t give up the earth to all those others.", "ACT 2. SCENE 3."],
        ["JOHNNIE: [Astonished] I? . . . I’m— nothing.", "ACT 2. SCENE 3."],
        ["JOHNNIE: I’ve had a home and parents somewhere. I don’t remember much about them . . . I don’t remember much about anything that’s ever happened to me. There’s not a day worth remembering.", "ACT 2. SCENE 3."],
        ["JOHNNIE: Of what account are dreams?", "ACT 2. SCENE 3."],
        ["JOHNNIE: [Quietly] I think I am a person who should never have been born. This is not a complaint. I am not afraid and I am not sorry. But I have often wanted to die. I have no desire to change the world—nor to take any part in it, as it is. I’ve never had the weapons which you have. I’ve never even found the desire to find weapons. I’d like to go, calmly and willingly.<br><br>There has always been something holding me here. Something that had to come to me before I went. I want to know one living moment of that which is mine, not theirs. Not their dismal little pleasures. One moment of ecstasy, utter and absolute, a moment that must not be survived. . . . They’ve never given me a life. I’ve always hoped I would choose my death.", "ACT 2. SCENE 3."],
        ["JOHNNIE: Mrs. Monaghan, listen carefully. Go downstairs to your phone. Call the police. Tell them to come here at once. Tell them that <i>Kay Gonda</i> is here. You understand? Kay Gonda. Now hurry.", "ACT 2. SCENE 3."],
        ["JOHNNIE: [Quietly] We have about three minutes left. I am thinking now that nothing has happened to us and nothing will happen. The world stopped a minute ago and in three minutes it will go on again. But this—this pause is ours. You’re here. I look at you. I’ve seen your eyes—and all the truth that man has ever sought. [Her head falls down on her arms] There are no other men on earth right now. Just you and I. There’s nothing but a world in which you live.<br><br>To breathe for once that air, to move in it, to hear my own voice on waves that touch no ugliness, no pain . . . I’ve never known gratitude. But now, of all the words I’d like to say to you, I’ll say just three: I thank you. When you leave, remember I have thanked you. Remember—no matter what may happen in this room. . . . [She buries her head in her arms. He stands silently, his head thrown back, his eyes closed]", "ACT 2. SCENE 3."],
        ["JOHNNIE: Sit down. Take a pencil and paper. [The POLICEMAN looks at the CAPTAIN, who nods, baffled. The POLICEMAN obeys] Now write this: [Dictates slowly, his voice precise, emotionless]<br><br>I, John Dawes, confess that on the night of May third, willfully and with premeditation, I killed Granton Sayers of Santa Barbara, California. [KAY GONDA takes a deep breath, which is almost a gasp] I have been absent from my home for the last three nights, as my landlady, Mrs. Sheila Monaghan, can testify. She can further testify that I was dismissed from my job at the Alhambra Hotel on May third.<br><br>[KAY GONDA starts laughing suddenly. It is the lightest, happiest laughter in the world] I had worked for Granton Sayers a year ago, at the Greendale Golf Club of Santa Barbara. Being jobless and broke, I went to Granton Sayers on the evening of May third, determined to extort money from him through blackmail, under threat of divulging certain information I possessed. He refused my demands even at the point of a gun. I shot him. I disposed of the gun by throwing it into the ocean on my way back from Santa Barbara. I was alone in committing this crime. No other person was or is to be implicated. <br><br>[Adds] Have you got it all? Give it to me. [The POLICEMAN hands the confession to him. JOHNNIE signs it]", "ACT 2. SCENE 3."],
        ["JOHNNIE: I have told you all I’m going to tell. . . You know all you have to know. You know enough not to implicate Miss Gonda. You have my confession. . . It will stand— even if I do not choose to prove it. Particularly if I am not here to prove it.", "ACT 2. SCENE 3."],
        ["JOHNNIE: I know you’re safe. You will be. Step back. Don’t be afraid. I won’t hurt anyone. [She obeys] I want you all to look at me. Years from now you can tell your grandchildren about it. You are looking at something you will never see again and they will never see— a man who is perfectly happy! [Points the gun at himself, fires, falls]", "ACT 2. SCENE 3."]
    ]
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