//DOM MANIPULATION VISUAL NOVEL GAME

//When we click start
//write "once upon a time" into our story div

//beginning
document.querySelector(".start-btn").addEventListener("click", function() {
    // 1. Write the intro to our story
    document.querySelector(".story").innerHTML = "<p>On a boat, you meet an elf that can lead to you to somewhere cool. He will give you two choices.</p><br><p class='warning'>[Warning] It's a do or die. You better do it right.</p><br><h3 class='doordie'>What Should You Do?</h3>"
    // 2. Remove start buttons
    document.querySelector(".start-btn").classList.add("invisible");
    // 3. Show our next buttons
    document.querySelector(".adventure-btn").classList.remove("invisible");
    document.querySelector(".school-btn").classList.remove("invisible");
    document.querySelector(".story").classList.remove("invisible");
    // 4. Show the elf
    document.querySelector(".elf").classList.remove("invisible");
    // 5. Sound
    startSound.play();
} );

//You click "go to school"
document.querySelector(".school-btn").addEventListener("click", function() {
    // LOSE SOUND
    loseSound.play();
    // 1. Write the intro to our story
    document.querySelector(".story").innerHTML = "<p class='lose'>Game Over</p><br><p class='school'>You are eaten by a sea monster.</p> <br><img class='monster' src='images/seamonster.png'>";
    // 2. Remove start, school, and adventure buttons
    document.querySelector(".start-btn").classList.add("invisible");
    document.querySelector(".school-btn").classList.add("invisible");
    document.querySelector(".adventure-btn").classList.add("invisible");
    document.querySelector(".land-btn").classList.add("invisible");
    document.querySelector(".sea-btn").classList.add("invisible");
    // 3. Remove elf
    document.querySelector(".elf").classList.add("invisible");
} );

// You click "go on an adventrue"
document.querySelector(".adventure-btn").addEventListener("click", function() {
    // WIN SOUND
    winSound.play();
    //story
    document.querySelector(".story").innerHTML = "<p>Congratulations! You just made the correct decision. Now we have two different paths of adventure.</p><br><h3 class='doordie'>Which one would you choose?</h3>"
    //remove buttons and elf
    document.querySelector(".start-btn").classList.add("invisible");
    document.querySelector(".adventure-btn").classList.add("invisible");
    document.querySelector(".school-btn").classList.add("invisible");
    document.querySelector(".elf").classList.add("invisible");
    //Show two options of adventure
    document.querySelector(".land-btn").classList.remove("invisible");
    document.querySelector(".sea-btn").classList.remove("invisible");
} );

// You click "land"
document.querySelector(".land-btn").addEventListener("click", function() {
    //Land sound
    landSound.play();
    //Change bg
    document.querySelector(".container").classList.add("jungle-bg");
    document.querySelector(".title").classList.add("title-white");
    //story
    document.querySelector(".story").innerHTML = "<p>Now you enter the jungle. Look around and be familiar with the environment.</p><br><h3 class='doordie'>Move on when you are ready.</h3>"
    //remove buttons and elf
    document.querySelector(".start-btn").classList.add("invisible");
    document.querySelector(".adventure-btn").classList.add("invisible");
    document.querySelector(".school-btn").classList.add("invisible");
    document.querySelector(".elf").classList.add("invisible");
    document.querySelector(".land-btn").classList.add("invisible");
    document.querySelector(".sea-btn").classList.add("invisible");
    //move on
    document.querySelector(".move-on-btn").classList.remove("invisible");
});

// You click "move on" in jungle
document.querySelector(".move-on-btn").addEventListener("click", function() {
    // roar sound and tiger sound
    // roarSound.play();
    tigerSound.play();
    // tiger background
    document.querySelector(".container").classList.add("tiger-bg");
    document.querySelector(".title").classList.add("title-white");

    // story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Roar!</h3><br><p>A tiger appears, and it is coming for you.</p>"
    //remove buttons and elf
    document.querySelector(".start-btn").classList.add("invisible");
    document.querySelector(".adventure-btn").classList.add("invisible");
    document.querySelector(".school-btn").classList.add("invisible");
    document.querySelector(".elf").classList.add("invisible");
    document.querySelector(".land-btn").classList.add("invisible");
    document.querySelector(".sea-btn").classList.add("invisible");
    document.querySelector(".move-on-btn").classList.add("invisible");
    document.querySelector(".run-btn").classList.remove("invisible");
    document.querySelector(".backaway-btn").classList.remove("invisible");
    document.querySelector(".playdead-btn").classList.remove("invisible");
    document.querySelector(".climbtree-btn").classList.remove("invisible");

});

// Click Run
document.querySelector(".run-btn").addEventListener("click", function() {
    // LOSE SOUND
    loseSound.play();
    tigerSound.play();
    // 1. Write the intro to our story
    document.querySelector(".story").innerHTML = "<p class='lose'>Game Over</p><br><p class='school'>Tigers are able to reach the speed of 49–65 km/h (30–40 mph). It catches you.</p> <br><img class='monster' src='images/tigerrun.jpg'>";
    // 2. Remove start, school, and adventure buttons
    document.querySelector(".run-btn").classList.add("invisible");
    document.querySelector(".backaway-btn").classList.add("invisible");
    document.querySelector(".playdead-btn").classList.add("invisible");
    document.querySelector(".climbtree-btn").classList.add("invisible");
    // 3. Remove elf
    document.querySelector(".elf").classList.add("invisible");
} );

// Click play dead
document.querySelector(".playdead-btn").addEventListener("click", function() {
    // LOSE SOUND
    loseSound.play();
    tigerSound.play();
    // 1. Story
    document.querySelector(".story").innerHTML = "<p class='lose'>Game Over</p><br><p class='school'>What a meal! The tiger is so lucky to find a prey.</p> <br><img class='monster' src='images/tigereat.jpg'>";
    // 2. Remove choice buttons
    document.querySelector(".run-btn").classList.add("invisible");
    document.querySelector(".backaway-btn").classList.add("invisible");
    document.querySelector(".playdead-btn").classList.add("invisible");
    document.querySelector(".climbtree-btn").classList.add("invisible");
} );

// Click back away
document.querySelector(".backaway-btn").addEventListener("click", function() {
    // 1. WIN SOUND
    winSound.play();
    // 2. Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Correct Choice!</h3><br><p>As you slowly back away, the tiger somehow loses interest and walks away.</p>";
    // 3. Remove choice buttons
    document.querySelector(".run-btn").classList.add("invisible");
    document.querySelector(".backaway-btn").classList.add("invisible");
    document.querySelector(".playdead-btn").classList.add("invisible");
    document.querySelector(".climbtree-btn").classList.add("invisible");
    // 4. Continue
    document.querySelector(".continue-btn").classList.remove("invisible");
} );

// Click climb tree
document.querySelector(".climbtree-btn").addEventListener("click", function() {
    // 1. WIN SOUND
    winSound.play();
    // 2. Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Lucky you!</h3><br><p>This tiger happens to be not agile enough, so it gives up.</p>";
    // 3. Remove choice buttons
    document.querySelector(".run-btn").classList.add("invisible");
    document.querySelector(".backaway-btn").classList.add("invisible");
    document.querySelector(".playdead-btn").classList.add("invisible");
    document.querySelector(".climbtree-btn").classList.add("invisible");
    // 4. Continue
    document.querySelector(".continue-btn").classList.remove("invisible");
} );

// Click continue
document.querySelector(".continue-btn").addEventListener("click", function() {
    // 1. Background Change
    document.querySelector(".container").classList.add("end-bg");
    // 2. Story
    document.querySelector(".story").innerHTML = "<p>After some walking, you see the light at the end of the forest.</p>"
    // 3. Continue
    document.querySelector(".keep-btn").classList.remove("invisible");
    document.querySelector(".continue-btn").classList.add("invisible");
} );

// Click keep walking after forest end
document.querySelector(".keep-btn").addEventListener("click", function() {
    // 1. Background Change
    document.querySelector(".container").classList.add("savanna-bg");
    document.querySelector(".title").classList.remove("title-white");
    document.querySelector(".smallwords").classList.add("smallwords-black");
    // 2. Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Wow! You are on a savanna.</h3>"
    // 3. Continue
    document.querySelector(".cool-btn").classList.remove("invisible");
    document.querySelector(".keep-btn").classList.add("invisible");
} );

// Click Cool
document.querySelector(".cool-btn").addEventListener("click", function() {
    // 1. Background Change
    document.querySelector(".container").classList.add("savanna-animal-bg");
    document.querySelector(".title").classList.add("title-white");
    document.querySelector(".smallwords").classList.remove("smallwords-black");
    // 2. Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Look! There are so many animal.</h3>"
    // 3. Continue
    document.querySelector(".cool-btn").classList.add("invisible");
    document.querySelector(".wow-btn").classList.remove("invisible");
    // 4. Animal Sound
    elephantSound.play();
} );

// Click Wow
document.querySelector(".wow-btn").addEventListener("click", function() {
    // 1. Background Change
    document.querySelector(".container").classList.add("lioncub-bg");
    document.querySelector(".title").classList.add("title-none");
    document.querySelector(".smallwords").classList.add("smallwords-none");
    // 2. Story
    document.querySelector(".story").innerHTML = "<p>Lion cubs are approaching you.</p><h3 class='doordie'>Should you play with them?</h3>"
    // 3. Should or shouldn't
    document.querySelector(".should-btn").classList.remove("invisible");
    document.querySelector(".shouldnot-btn").classList.remove("invisible");
    document.querySelector(".wow-btn").classList.add("invisible");
} );

// Click Should
document.querySelector(".should-btn").addEventListener("click", function() {
    // 1. Background Change
    document.querySelector(".container").classList.add("lionpride-bg");
    document.querySelector(".title").classList.remove("title-none");
    document.querySelector(".smallwords").classList.remove("smallwords-none");
    // 2. Story
    document.querySelector(".story").innerHTML = "<p>A pride of lions is behind you. They say if you don’t help them find a solution to the conflict between hyenas and lions, you will be their lunch.</p><br><h3 class='doordie'>What Would You Do?</h3>"
    // 3. Choices
    document.querySelector(".runaway-btn").classList.remove("invisible");
    document.querySelector(".findsol-btn").classList.remove("invisible");
    document.querySelector(".should-btn").classList.add("invisible");
    document.querySelector(".shouldnot-btn").classList.add("invisible");
    // 4. Lion roar
    lionSound.play();
})

// Click Shouldn't
document.querySelector(".shouldnot-btn").addEventListener("click", function() {
    // Remove solutions
    document.querySelector(".should-btn").classList.add("invisible");
    document.querySelector(".shouldnot-btn").classList.add("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<p>Great! You are safe from the savanna.</p>"
    // Background Change
    document.querySelector(".container").classList.add("savanna-safe-bg");
    // Sound
    winSound.play();
    // Proceed
    document.querySelector(".proceed-btn").classList.remove("invisible");
})

// Click Runaway
document.querySelector(".runaway-btn").addEventListener("click", function() {
    // 1. Lose Sound
    loseSound.play();
    // 2. Story
    document.querySelector(".story").innerHTML = "<h3 class='lose'>What a Wonderful Lunch!</h3><br><p>Lions can run 80 KPH (50 MPH). You can’t outrun them.</p><br><img class='monster' src='images/lioneat.jpg'>"
    // 3. Remove btn
    document.querySelector(".runaway-btn").classList.add("invisible");
    document.querySelector(".findsol-btn").classList.add("invisible");
})

// Click Findsol
document.querySelector(".findsol-btn").addEventListener("click", function() {
    // Remove btns and add choices
    document.querySelector(".runaway-btn").classList.add("invisible");
    document.querySelector(".findsol-btn").classList.add("invisible");
    document.querySelector(".prey-btn").classList.remove("invisible");
    document.querySelector(".teleport-btn").classList.remove("invisible");
    // Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Hyenas are approaching! So your solution is:</h3>"
    // Hyena Sound
    hyenaSound.play();
    // Background Change
    document.querySelector(".container").classList.add("hyena-bg");
    document.querySelector(".title").classList.remove("title-white");
    document.querySelector(".smallwords").classList.add("smallwords-black");
})

// Click Solution 1
document.querySelector(".prey-btn").addEventListener("click", function() {
    // Remove solutions
    document.querySelector(".prey-btn").classList.add("invisible");
    document.querySelector(".teleport-btn").classList.add("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<p>Great! You are safe from the savanna.</p>"
    // Background Change
    document.querySelector(".container").classList.add("savanna-safe-bg");
    // Sound
    winSound.play();
    // Proceed
    document.querySelector(".proceed-btn").classList.remove("invisible");
})
// Click Solution 2
document.querySelector(".teleport-btn").addEventListener("click", function() {
    // Remove solutions
    document.querySelector(".prey-btn").classList.add("invisible");
    document.querySelector(".teleport-btn").classList.add("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<p>Great! You are safe from the savanna.</p>"
    // Background Change
    document.querySelector(".container").classList.add("savanna-safe-bg");
    // Sound
    winSound.play();
    // Proceed
    document.querySelector(".proceed-btn").classList.remove("invisible");
})

// Click Proceed
document.querySelector(".proceed-btn").addEventListener("click", function() {
    // Go
    document.querySelector(".proceed-btn").classList.add("invisible");
    document.querySelector(".go-btn").classList.remove("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Welcome to the last stop: Mountains</h3>"
    // Background Change
    document.querySelector(".container").classList.add("mount-bg");
})

// Click Go
document.querySelector(".go-btn").addEventListener("click", function() {
    // Go
    document.querySelector(".go-btn").classList.add("invisible");
    document.querySelector(".fin1-btn").classList.remove("invisible");
    document.querySelector(".fin2-btn").classList.remove("invisible");
    document.querySelector(".fin3-btn").classList.remove("invisible");
    document.querySelector(".fin4-btn").classList.remove("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<h3>Your final challenge:</h3><br><h3>From left to right, top to bottom, which is which?</h3><img class='monster' src='images/llama.jpg'>"
    
})

// Click fin1
document.querySelector(".fin1-btn").addEventListener("click", function() {
    // Choices Gone
    document.querySelector(".fin1-btn").classList.add("invisible");
    document.querySelector(".fin2-btn").classList.add("invisible");
    document.querySelector(".fin3-btn").classList.add("invisible");
    document.querySelector(".fin4-btn").classList.add("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Congratulations</h3><br><p>With the witness of God's messenger Andean condor, you officially complete the adventure. Have a nice day!</p><<img class='monster' src='images/condor.jpg'>"
    // Oh Yeah
    yeahSound.play();
})

//Click fin2
document.querySelector(".fin2-btn").addEventListener("click", function() {
    // Choices Gone
    document.querySelector(".fin1-btn").classList.add("invisible");
    document.querySelector(".fin2-btn").classList.add("invisible");
    document.querySelector(".fin3-btn").classList.add("invisible");
    document.querySelector(".fin4-btn").classList.add("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Spit!</h3><br><p>Adios.</p><<img class='monster' src='images/spit.jpg'>"
    // Oh Yeah
    loseSound.play();
})

//Click fin3
document.querySelector(".fin3-btn").addEventListener("click", function() {
    // Choices Gone
    document.querySelector(".fin1-btn").classList.add("invisible");
    document.querySelector(".fin2-btn").classList.add("invisible");
    document.querySelector(".fin3-btn").classList.add("invisible");
    document.querySelector(".fin4-btn").classList.add("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Spit!</h3><br><p>Adios.</p><<img class='monster' src='images/spit.jpg'>"
    // Oh Yeah
    loseSound.play();
})

//Click fin4
document.querySelector(".fin4-btn").addEventListener("click", function() {
    // Choices Gone
    document.querySelector(".fin1-btn").classList.add("invisible");
    document.querySelector(".fin2-btn").classList.add("invisible");
    document.querySelector(".fin3-btn").classList.add("invisible");
    document.querySelector(".fin4-btn").classList.add("invisible");
    // Story 
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Spit!</h3><br><p>Adios.</p><img class='monster' src='images/spit.jpg'>"
    // Oh Yeah
    loseSound.play();
})
//Finish Land

// You click "sea"
document.querySelector(".sea-btn").addEventListener("click", function() {
    // Water Splash Sound
    diveSound.play();
    // Background Change
    document.querySelector(".container").classList.add("ocean-bg");
    // Story
    document.querySelector(".story").innerHTML = "<p>You are “under the sea”. Swim around.</p>"
    // Buttons
    document.querySelector(".swim-btn").classList.remove("invisible");
    document.querySelector(".land-btn").classList.add("invisible");
    document.querySelector(".sea-btn").classList.add("invisible");
})

// You click "swim"
document.querySelector(".swim-btn").addEventListener("click", function() {
    // Sea Lion Sound
    sealionSound.play();
    // Background Change
    document.querySelector(".container").classList.add("sealion-bg");
    document.querySelector(".title").classList.add("title-white");
    // Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Why Are Sea Lions Panicking?</h3>"
    // Buttons
    document.querySelector(".swim-btn").classList.add("invisible");
    document.querySelector(".figure-btn").classList.remove("invisible");
})

// You click "figure it out"
document.querySelector(".figure-btn").addEventListener("click", function() {
    // Background Change
    document.querySelector(".container").classList.add("greatwhite-bg");
    // Story
    document.querySelector(".story").innerHTML = "<p class='doordie'>Oh no! There is a great white shark.</p><br><img class='monster' src='images/shark.jpg'>"
    // Buttons
    document.querySelector(".figure-btn").classList.add("invisible");
    document.querySelector(".fastswim-btn").classList.remove("invisible");
    document.querySelector(".hit-btn").classList.remove("invisible");
    document.querySelector(".summon-btn").classList.remove("invisible");
    document.querySelector(".board-btn").classList.remove("invisible");

})

// You click "Swim Fast"
document.querySelector(".fastswim-btn").addEventListener("click", function() {
    // Lose
    loseSound.play();
    // Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Bye</h3><br><p class='school'>Great white sharks have a swimming speed of 40 KPH (25 MPH). You can’t swim that fast.</p><br><img class='monster' src='images/fast.jpg'>"
    // Buttons
    document.querySelector(".fastswim-btn").classList.add("invisible");
    document.querySelector(".hit-btn").classList.add("invisible");
    document.querySelector(".summon-btn").classList.add("invisible");
    document.querySelector(".board-btn").classList.add("invisible");
})

// You click "Surfing Board
document.querySelector(".board-btn").addEventListener("click", function() {
    // Lose
    loseSound.play();
    // Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Yummy!</h3><br><p class='school'>You on the board look like a sea lion, which lures the shark even more.</p><br><img class='monster' src='images/board.gif'>"
    // Buttons
    document.querySelector(".fastswim-btn").classList.add("invisible");
    document.querySelector(".hit-btn").classList.add("invisible");
    document.querySelector(".summon-btn").classList.add("invisible");
    document.querySelector(".board-btn").classList.add("invisible");
})

// You click "Hit"
document.querySelector(".hit-btn").addEventListener("click", function() {
    // Punch Sound
    punchSound.play();
    // Story
    document.querySelector(".story").innerHTML = "<h3 class='doordie'>Bang!</h3><br><p class='school'>Get the hell out! You punch the shark away.</p><br><img class='monster' src='images/punch.jpg'>"
    // Buttons
    document.querySelector(".fastswim-btn").classList.add("invisible");
    document.querySelector(".hit-btn").classList.add("invisible");
    document.querySelector(".summon-btn").classList.add("invisible");
    document.querySelector(".board-btn").classList.add("invisible");
    document.querySelector(".continue-sea-btn").classList.remove("invisible");
})

// You click "Summon Killer Whale"
document.querySelector(".summon-btn").addEventListener("click", function() {
    // Punch Sound
    punchSound.play();
    // Background Change
    document.querySelector(".container").classList.add("killerwhale-bg");
    // Story
    document.querySelector(".story").innerHTML = "<p class='school'>With the help of the killer while, you are safe right now.</p><br><img class='monster' src='images/orca.jpg'>"
    // Buttons
    document.querySelector(".fastswim-btn").classList.add("invisible");
    document.querySelector(".hit-btn").classList.add("invisible");
    document.querySelector(".summon-btn").classList.add("invisible");
    document.querySelector(".board-btn").classList.add("invisible");
    document.querySelector(".continue-sea-btn").classList.remove("invisible");
})

// You click "continue"
document.querySelector(".continue-sea-btn").addEventListener("click", function () {
    // Buttons
    document.querySelector(".continue-sea-btn").classList.add("invisible");
    document.querySelector(".up-btn").classList.remove("invisible");
    document.querySelector(".down-btn").classList.remove("invisible");
    // Background Change
    document.querySelector(".container").classList.add("sea-bg");
    // Story 
    document.querySelector(".story").innerHTML = "<p class='school'>The weather is awesome.</p><br><p class='school'>Enjoy the sunlight that shines into the sea, and get ready for the next expedition.</p>"
    // Sound
    waveSound.play();
})


//functions are simply a lsit of commands to do
//declare a variable for your sound object
//new means creating a copy of the premade Audio object in Javascript
// In the brackets, weite down where your audio file is
var startSound = new Audio("sound/start.ogg");
var loseSound = new Audio("sound/gg.mp3");
var winSound = new Audio("sound/congrats.wav");
var landSound = new Audio("sound/land.wav");
var tigerSound = new Audio("sound/tiger.mp3");
var elephantSound = new Audio("sound/elephant.wav");
var lionSound = new Audio("sound/lion.flac");
var hyenaSound = new Audio("sound/hyena.wav");
var yeahSound = new Audio("sound/yeah.mp3");
var diveSound = new Audio("sound/dive.mp3");
var sealionSound = new Audio("sound/sealion.mp3");
var punchSound = new Audio("sound/punch.mp3");
var waveSound = new Audio("sound/wave.mp3");

// to call your audio file, type the name of it followed by .play()
loseSound.play();