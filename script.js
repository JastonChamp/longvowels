"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------
  // Full Passage Data for All Grammar Types
  // -------------------------
  const passages = {
    prepositions: [
      {
        text: "Sally placed her bag ___(1)___ the table. She looked ___(2)___ the window and saw a bird. The bird was perched ___(3)___ the fence. Her cat hid ___(4)___ a chair. Sally walked ___(5)___ the door quietly.",
        wordBox: ["in", "on", "under", "by", "through", "around", "towards"],
        answers: ["on", "through", "by", "under", "towards"],
        clueWords: [["bag"], ["window"], ["fence"], ["chair"], ["door"]],
        hints: [
          "Which preposition correctly shows the bag’s position relative to the table?",
          "How is Sally looking out of the window?",
          "Which preposition best describes the bird’s position on the fence?",
          "Where is the cat hiding?",
          "Which direction does Sally move?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "Tom sat ___(1)___ the sofa and watched TV. His mom was cooking ___(2)___ the kitchen. The dog slept ___(3)___ the rug. Tom’s sister played ___(4)___ the garden. Later, they ate dinner ___(5)___ the table.",
        wordBox: ["on", "in", "under", "by", "around", "at", "near"],
        answers: ["on", "in", "on", "in", "at"],
        clueWords: [["sofa"], ["kitchen"], ["rug"], ["garden"], ["table"]],
        hints: [
          "Which preposition shows Tom’s position on the sofa?",
          "Where is his mom cooking?",
          "Where is the dog sleeping?",
          "Where does his sister play?",
          "Where do they eat dinner?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The ball rolled ___(1)___ the hill and stopped ___(2)___ a tree. A squirrel ran ___(3)___ the tree and hid ___(4)___ the branches. The children played ___(5)___ the park all day.",
        wordBox: ["down", "up", "under", "by", "around", "near", "between"],
        answers: ["down", "by", "up", "in", "in"],
        clueWords: [["hill"], ["tree"], ["squirrel"], ["branches"], ["park"]],
        hints: [
          "Which word shows the ball’s direction down the hill?",
          "Where did the ball stop relative to the tree?",
          "How did the squirrel move along the tree?",
          "Where did the squirrel hide?",
          "Where did the children play?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The teacher stood ___(1)___ the classroom. She wrote ___(2)___ the whiteboard. The students sat ___(3)___ their desks. A poster hung ___(4)___ the wall. The clock was ___(5)___ the door.",
        wordBox: ["in", "on", "under", "by", "near", "above", "below"],
        answers: ["in", "on", "at", "on", "above"],
        clueWords: [["teacher"], ["whiteboard"], ["desks"], ["poster"], ["door"]],
        hints: [
          "Where is the teacher located?",
          "Where does she write?",
          "How do the students sit relative to their desks?",
          "Where is the poster hung?",
          "Where is the clock in relation to the door?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The fish swam ___(1)___ the pond. A frog jumped ___(2)___ a lily pad. The ducks floated ___(3)___ the water. A boy stood ___(4)___ the bridge and watched. His friend sat ___(5)___ the grass nearby.",
        wordBox: ["in", "on", "under", "by", "around", "near", "between"],
        answers: ["in", "on", "on", "on", "on"],
        clueWords: [["fish"], ["lily pad"], ["ducks"], ["bridge"], ["grass"]],
        hints: [
          "Where does the fish swim?",
          "Where did the frog jump?",
          "Where do the ducks float?",
          "Where does the boy stand?",
          "Where does his friend sit?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The kite flew ___(1)___ the sky. The boy held the string ___(2)___ his hands. The wind blew ___(3)___ the trees. The kite soared ___(4)___ the clouds. His sister cheered ___(5)___ the ground.",
        wordBox: ["in", "on", "under", "by", "through", "above", "below"],
        answers: ["in", "in", "through", "above", "on"],
        clueWords: [["kite"], ["string"], ["wind"], ["clouds"], ["ground"]],
        hints: [
          "Which preposition describes the kite’s position in the sky?",
          "How does the boy hold the string?",
          "How does the wind move through the trees?",
          "Where does the kite soar relative to the clouds?",
          "Where is his sister when she cheers?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The book is ___(1)___ the shelf. A pen rolled ___(2)___ the desk. The bag is ___(3)___ the chair. The teacher walked ___(4)___ the room. A picture hangs ___(5)___ the wall.",
        wordBox: ["on", "under", "by", "around", "near", "above", "below"],
        answers: ["on", "under", "under", "around", "above"],
        clueWords: [["book"], ["pen"], ["bag"], ["teacher"], ["picture"]],
        hints: [
          "Which preposition shows where the book is?",
          "Where did the pen roll?",
          "Where is the bag located relative to the chair?",
          "How does the teacher move in the room?",
          "Where is the picture hung?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The bus stopped ___(1)___ the bus stop. People waited ___(2)___ the shelter. The driver sat ___(3)___ the wheel. A girl looked ___(4)___ her phone. The bus moved ___(5)___ the road.",
        wordBox: ["at", "in", "on", "under", "by", "near", "along"],
        answers: ["at", "in", "at", "at", "along"],
        clueWords: [["bus"], ["shelter"], ["driver"], ["girl"], ["road"]],
        hints: [
          "Which preposition indicates where the bus stopped?",
          "Where did people wait?",
          "Where did the driver sit?",
          "Where did the girl look?",
          "How did the bus move?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The monkey climbed ___(1)___ the tree. It swung ___(2)___ the branches. A bird flew ___(3)___ its nest. The zookeeper stood ___(4)___ the cage. The children watched ___(5)___ the fence.",
        wordBox: ["up", "on", "under", "by", "around", "near", "to"],
        answers: ["up", "on", "to", "by", "near"],
        clueWords: [["monkey"], ["branches"], ["bird"], ["zookeeper"], ["fence"]],
        hints: [
          "Which preposition shows the direction of the monkey’s climb?",
          "How did the monkey swing along the branches?",
          "Where did the bird fly relative to its nest?",
          "Where did the zookeeper stand?",
          "Where did the children watch?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The plate is ___(1)___ the table. A spoon fell ___(2)___ the floor. The soup is ___(3)___ the bowl. Mother cooked ___(4)___ the stove. We ate ___(5)___ the dining room.",
        wordBox: ["on", "under", "in", "by", "around", "near", "at"],
        answers: ["on", "on", "in", "by", "in"],
        clueWords: [["plate"], ["spoon"], ["soup"], ["stove"], ["dining room"]],
        hints: [
          "Where is the plate located?",
          "Where did the spoon fall?",
          "Where is the soup?",
          "Where did Mother cook?",
          "Where did we eat?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The boy ran ___(1)___ the playground. He jumped ___(2)___ a bench. His friends waited ___(3)___ the slide. The ball rolled ___(4)___ the sandpit. They played ___(5)___ the sun set.",
        wordBox: ["in", "on", "under", "by", "around", "near", "until"],
        answers: ["in", "on", "by", "into", "until"],
        clueWords: [["boy"], ["bench"], ["slide"], ["ball"], ["sun"]],
        hints: [
          "Which preposition shows where the boy ran?",
          "How did he jump relative to the bench?",
          "Where did his friends wait?",
          "How did the ball roll?",
          "Until when did they play?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The rain fell ___(1)___ the roof. The cat slept ___(2)___ the mat. A puddle formed ___(3)___ the house. The girl stood ___(4)___ an umbrella. The dog ran ___(5)___ the rain.",
        wordBox: ["on", "under", "by", "around", "near", "through", "in"],
        answers: ["on", "on", "near", "under", "through"],
        clueWords: [["rain"], ["cat"], ["puddle"], ["umbrella"], ["dog"]],
        hints: [
          "Where does the rain fall?",
          "Where does the cat sleep?",
          "Where is the puddle formed?",
          "Where does the girl stand?",
          "How does the dog run relative to the rain?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The flag is ___(1)___ the pole. The wind blew ___(2)___ the school. The students stood ___(3)___ the field. A bell rang ___(4)___ the building. They walked ___(5)___ their classrooms.",
        wordBox: ["on", "in", "under", "by", "around", "near", "to"],
        answers: ["on", "around", "on", "in", "to"],
        clueWords: [["flag"], ["wind"], ["students"], ["bell"], ["classrooms"]],
        hints: [
          "Where is the flag located?",
          "How did the wind blow?",
          "Where did the students stand?",
          "Where did the bell ring?",
          "Which direction did they walk?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The boat floated ___(1)___ the river. A fish swam ___(2)___ the water. The man fished ___(3)___ the bank. A bird flew ___(4)___ the boat. The net was ___(5)___ the deck.",
        wordBox: ["on", "in", "under", "by", "around", "near", "above"],
        answers: ["on", "in", "by", "above", "on"],
        clueWords: [["boat"], ["fish"], ["bank"], ["bird"], ["net"]],
        hints: [
          "Which preposition best describes where the boat floats?",
          "Where does the fish swim?",
          "Where does the man fish?",
          "Where did the bird fly relative to the boat?",
          "Where is the net placed?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The plane flew ___(1)___ the clouds. The pilot sat ___(2)___ the cockpit. Passengers looked ___(3)___ the windows. The luggage was ___(4)___ the seats. The airport was ___(5)___ the city.",
        wordBox: ["in", "on", "under", "by", "through", "near", "below"],
        answers: ["through", "in", "through", "under", "near"],
        clueWords: [["plane"], ["pilot"], ["passengers"], ["luggage"], ["airport"]],
        hints: [
          "Which word shows how the plane moved through the clouds?",
          "Where does the pilot sit?",
          "How do passengers look out?",
          "Where is the luggage located?",
          "Where is the airport in relation to the city?"
        ],
        hint: "Remember to use the objects around you as clues."
      }
    ],
    conjunctions: [
      {
        text: "Tom wanted to go outside ___(1)___ it was raining. He waited ___(2)___ the rain stopped ___(3)___ then ran to the park. He could play ___(4)___ read a book, ___(5)___ he chose to play.",
        wordBox: ["but", "and", "or", "until", "because", "so", "although"],
        answers: ["but", "until", "and", "or", "so"],
        clueWords: [["outside"], ["rain"], ["park"], ["play"], ["chose"]],
        hints: [
          "Which conjunction shows contrast in the sentence?",
          "How long did he wait?",
          "What happened after the rain stopped?",
          "What are his two options?",
          "Which conjunction shows the result of his choice?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "I like apples ___(1)___ bananas. My sister likes oranges ___(2)___ grapes. We both like strawberries ___(3)___ they are sweet. Sometimes we eat fruit ___(4)___ breakfast ___(5)___ for a snack.",
        wordBox: ["and", "but", "or", "because", "so", "although", "after"],
        answers: ["and", "and", "because", "for", "or"],
        clueWords: [["apples"], ["oranges"], ["strawberries"], ["breakfast"], ["snack"]],
        hints: [
          "Which conjunction adds ideas?",
          "Which conjunction is used again to add similar ideas?",
          "Which word gives the reason for liking strawberries?",
          "When is fruit eaten?",
          "What choice is given for a snack?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The dog barked loudly ___(1)___ the cat meowed softly. They were hungry ___(2)___ they wanted food. The owner fed them ___(3)___ they stopped making noise. Later, the dog slept ___(4)___ the cat played. They are friends ___(5)___ they sometimes fight.",
        wordBox: ["and", "but", "or", "because", "so", "although", "after"],
        answers: ["and", "so", "and", "while", "although"],
        clueWords: [["dog"], ["hungry"], ["fed"], ["cat"], ["fight"]],
        hints: [
          "Which conjunction connects the two actions of the dog and the cat?",
          "Why did they behave in that way?",
          "What connects the feeding event?",
          "How are the two activities (sleeping and playing) related?",
          "Which word shows the unexpected contrast?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "I can go to the park ___(1)___ stay home. If I go to the park, I will play ___(2)___ my friends. If I stay home, I will read ___(3)___ watch TV. I think I will go ___(4)___ it is sunny. My mom said I can go ___(5)___ I finish my homework.",
        wordBox: ["or", "and", "but", "because", "so", "if", "unless"],
        answers: ["or", "with", "or", "because", "if"],
        clueWords: [["park"], ["play"], ["read"], ["sunny"], ["homework"]],
        hints: [
          "Which word indicates a choice between two options?",
          "Who will you play with?",
          "What is the alternative activity?",
          "What reason is given for going out?",
          "What condition must be met to go out?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The children were tired ___(1)___ they kept playing. They wanted to win ___(2)___ they tried hard. The coach cheered ___(3)___ they scored a goal. After the game, they were happy ___(4)___ exhausted. They celebrated ___(5)___ they went home.",
        wordBox: ["but", "and", "or", "because", "so", "although", "after"],
        answers: ["but", "so", "when", "but", "before"],
        clueWords: [["children"], ["win"], ["cheered"], ["happy"], ["home"]],
        hints: [
          "Which conjunction shows the contrast between tiredness and action?",
          "What is the result of trying hard?",
          "When did the coach cheer?",
          "What juxtaposition is presented after the game?",
          "What is the sequence before going home?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The sky was dark ___(1)___ it might rain. I took an umbrella ___(2)___ I didn’t want to get wet. It started raining ___(3)___ I reached the bus stop. I waited there ___(4)___ the rain stopped. I was glad ___(5)___ I stayed dry.",
        wordBox: ["but", "and", "or", "because", "so", "until", "after"],
        answers: ["and", "because", "when", "until", "because"],
        clueWords: [["sky"], ["umbrella"], ["raining"], ["bus stop"], ["dry"]],
        hints: [
          "Which word links the dark sky with the possibility of rain?",
          "Why did I take an umbrella?",
          "When did it start raining?",
          "How long did I wait?",
          "Why was I glad?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "I wanted to eat rice ___(1)___ noodles. My brother chose noodles ___(2)___ he likes them more. We ate together ___(3)___ we shared the food. It was spicy ___(4)___ tasty. We drank water ___(5)___ we finished.",
        wordBox: ["or", "and", "but", "because", "so", "although", "after"],
        answers: ["or", "because", "and", "but", "after"],
        clueWords: [["rice"], ["noodles"], ["together"], ["spicy"], ["water"]],
        hints: [
          "Which word indicates a choice between rice and noodles?",
          "Why did my brother choose noodles?",
          "What did we do together?",
          "How are the flavors contrasted?",
          "What did we drink after eating?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The room was messy ___(1)___ we cleaned it. We worked fast ___(2)___ we wanted to play. Mom helped us ___(3)___ we finished quickly. We were tired ___(4)___ happy. We rested ___(5)___ everything was done.",
        wordBox: ["but", "and", "or", "because", "so", "after", "although"],
        answers: ["so", "because", "and", "but", "after"],
        clueWords: [["room"], ["fast"], ["mom"], ["tired"], ["done"]],
        hints: [
          "What word shows the effect of the messy room?",
          "Why did we work fast?",
          "Who helped us?",
          "How are the feelings contrasted?",
          "When did we rest?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "I can draw ___(1)___ paint today. I like painting ___(2)___ it is fun. I draw well ___(3)___ I need practice with paint. I will try both ___(4)___ I have time. My sister will join me ___(5)___ she likes art too.",
        wordBox: ["or", "and", "but", "because", "so", "if", "although"],
        answers: ["or", "because", "but", "because", "because"],
        clueWords: [["draw"], ["painting"], ["practice"], ["time"], ["sister"]],
        hints: [
          "Which word shows a choice between drawing and painting?",
          "Why do I like painting?",
          "What is the contrast in my drawing skills?",
          "Under what condition will I try both?",
          "Why will my sister join me?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The movie was long ___(1)___ exciting. We watched it ___(2)___ we ate popcorn. It ended late ___(3)___ we stayed awake. We were sleepy ___(4)___ happy. We talked about it ___(5)___ we went to bed.",
        wordBox: ["but", "and", "or", "because", "so", "after", "although"],
        answers: ["but", "while", "but", "but", "before"],
        clueWords: [["movie"], ["popcorn"], ["late"], ["sleepy"], ["bed"]],
        hints: [
          "Which conjunction contrasts the movie's length and excitement?",
          "How were we multitasking while watching?",
          "What does the late ending imply?",
          "How are our feelings mixed?",
          "When did we talk about it?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "I wanted to swim ___(1)___ the pool was closed. I went to the park ___(2)___ I played there. It was hot ___(3)___ I brought water. I stayed ___(4)___ the sun set. I had fun ___(5)___ I was tired.",
        wordBox: ["but", "and", "or", "because", "so", "until", "although"],
        answers: ["but", "and", "so", "until", "although"],
        clueWords: [["swim"], ["park"], ["hot"], ["sun"], ["tired"]],
        hints: [
          "Which word shows a contrast when the pool is closed?",
          "Where did I go instead?",
          "What result did the weather have on my actions?",
          "Until when did I stay?",
          "How did I feel at the end?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The cake was sweet ___(1)___ delicious. I wanted more ___(2)___ I was full. My friend ate some ___(3)___ she liked it too. We saved some ___(4)___ later. We smiled ___(5)___ we enjoyed it.",
        wordBox: ["and", "but", "or", "because", "so", "for", "after"],
        answers: ["and", "but", "because", "for", "because"],
        clueWords: [["cake"], ["full"], ["friend"], ["saved"], ["smiled"]],
        hints: [
          "Which conjunction adds information?",
          "What contrast is shown by wanting more while being full?",
          "Why did my friend choose to eat some?",
          "What does saving some later imply?",
          "How do we express our enjoyment?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The bell rang ___(1)___ we went to class. We studied math ___(2)___ science. I like math ___(3)___ it is easy. Science is fun ___(4)___ challenging. We worked hard ___(5)___ we wanted good grades.",
        wordBox: ["and", "but", "or", "because", "so", "although", "after"],
        answers: ["and", "and", "because", "but", "because"],
        clueWords: [["bell"], ["math"], ["easy"], ["challenging"], ["grades"]],
        hints: [
          "Which word connects the events at the start?",
          "What subjects did we study?",
          "Why do I like math?",
          "How is science presented as a challenge?",
          "What motivates us to work hard?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "I can read a book ___(1)___ play a game. I chose a book ___(2)___ I like stories. It was quiet ___(3)___ I could focus. My brother played ___(4)___ I read. We had fun ___(5)___ we did different things.",
        wordBox: ["or", "and", "but", "because", "so", "while", "although"],
        answers: ["or", "because", "so", "while", "although"],
        clueWords: [["book"], ["stories"], ["quiet"], ["brother"], ["fun"]],
        hints: [
          "Which word indicates a choice between two activities?",
          "What is the reason I chose a book?",
          "What effect does a quiet environment have?",
          "What did my brother do while I read?",
          "How do we describe our overall experience?"
        ],
        hint: "Remember to use the objects around you as clues."
      }
    ],
    subjectVerbAgreement: [
      {
        text: "The dog ___(1)___ loudly every morning. The cats ___(2)___ quietly in the garden. Each child ___(3)___ a toy. The team ___(4)___ hard to win. Many birds ___(5)___ in the sky.",
        wordBox: ["bark", "barks", "sleep", "sleeps", "has", "have", "work", "works", "fly", "flies"],
        answers: ["barks", "sleep", "has", "works", "fly"],
        clueWords: [["dog"], ["cats"], ["child"], ["team"], ["birds"]],
        hints: [
          "Which verb form matches the singular 'dog'?",
          "Which form is used with plural 'cats'?",
          "What verb form does 'each child' require?",
          "How should the team be treated?",
          "What form should be used for 'birds'?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "My friend ___(1)___ to school every day. The students ___(2)___ their homework. Each teacher ___(3)___ a classroom. The books ___(4)___ on the shelf. The bird ___(5)___ in the tree.",
        wordBox: ["walk", "walks", "do", "does", "have", "has", "are", "is", "sing", "sings"],
        answers: ["walks", "do", "has", "are", "sings"],
        clueWords: [["friend"], ["students"], ["teacher"], ["books"], ["bird"]],
        hints: [
          "Which verb form fits 'my friend'?",
          "What do plural students do with homework?",
          "Which form is needed for 'each teacher'?",
          "How are the books arranged?",
          "What verb form agrees with 'the bird'?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The flowers ___(1)___ beautifully in the garden. Each flower ___(2)___ a different color. The bees ___(3)___ around the flowers. The gardener ___(4)___ the plants every day. Many insects ___(5)___ in the garden.",
        wordBox: ["bloom", "blooms", "have", "has", "buzz", "buzzes", "water", "waters", "live", "lives"],
        answers: ["bloom", "has", "buzz", "waters", "live"],
        clueWords: [["flowers"], ["flower"], ["bees"], ["gardener"], ["insects"]],
        hints: [
          "Which verb form is used with plural 'flowers'?",
          "Which form fits the singular 'flower'?",
          "What verb is used for plural 'bees'?",
          "Which form is required for 'the gardener'?",
          "How do we treat the plural 'insects'?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The car ___(1)___ fast on the road. The drivers ___(2)___ carefully. Each passenger ___(3)___ a seatbelt. The buses ___(4)___ slowly in traffic. The motorcycle ___(5)___ loudly.",
        wordBox: ["go", "goes", "drive", "drives", "wear", "wears", "move", "moves", "roar", "roars"],
        answers: ["goes", "drive", "wears", "move", "roars"],
        clueWords: [["car"], ["drivers"], ["passenger"], ["buses"], ["motorcycle"]],
        hints: [
          "Which verb agrees with the singular 'car'?",
          "What verb form is used for plural 'drivers'?",
          "What is required for each passenger?",
          "How should 'buses' be treated?",
          "What verb form fits the singular 'motorcycle'?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The baby ___(1)___ in the crib. The parents ___(2)___ the baby. Each toy ___(3)___ a different sound. The children ___(4)___ with the toys. The dog ___(5)___ the children play.",
        wordBox: ["sleep", "sleeps", "watch", "watches", "make", "makes", "play", "plays", "watch", "watches"],
        answers: ["sleeps", "watch", "makes", "play", "watches"],
        clueWords: [["baby"], ["parents"], ["toy"], ["children"], ["dog"]],
        hints: [
          "Which form fits 'the baby'?",
          "What do parents do?",
          "How does 'each toy' behave?",
          "What do the children do?",
          "Which verb form agrees with 'the dog'?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The kite ___(1)___ high in the sky. The children ___(2)___ the kite. Each boy ___(3)___ a turn. The clouds ___(4)___ across the sky. The wind ___(5)___ strongly.",
        wordBox: ["fly", "flies", "hold", "holds", "take", "takes", "move", "moves", "blow", "blows"],
        answers: ["flies", "hold", "takes", "move", "blows"],
        clueWords: [["kite"], ["children"], ["boy"], ["clouds"], ["wind"]],
        hints: [
          "Which verb form shows the kite’s motion?",
          "What do the children do with the kite?",
          "What does each boy do?",
          "How do the clouds move?",
          "What verb best describes the wind?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The teacher ___(1)___ the class every day. The students ___(2)___ quietly. Each desk ___(3)___ a book. The pencils ___(4)___ on the table. The bell ___(5)___ at noon.",
        wordBox: ["teach", "teaches", "sit", "sits", "have", "has", "are", "is", "ring", "rings"],
        answers: ["teaches", "sit", "has", "are", "rings"],
        clueWords: [["teacher"], ["students"], ["desk"], ["pencils"], ["bell"]],
        hints: [
          "Which verb fits the singular 'teacher'?",
          "What do the students do?",
          "How is each desk treated?",
          "What is the state of the pencils?",
          "What happens with the bell?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The fish ___(1)___ in the tank. The children ___(2)___ the fish. Each fish ___(3)___ a bright color. The bubbles ___(4)___ to the top. The cat ___(5)___ the tank closely.",
        wordBox: ["swim", "swims", "watch", "watches", "have", "has", "rise", "rises", "look", "looks"],
        answers: ["swims", "watch", "has", "rise", "looks"],
        clueWords: [["fish"], ["children"], ["fish"], ["bubbles"], ["cat"]],
        hints: [
          "Which verb form is needed for the fish?",
          "What do the children do?",
          "How does 'each fish' behave?",
          "What happens with the bubbles?",
          "How is the cat positioned?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The sun ___(1)___ in the morning. The birds ___(2)___ in the trees. Each cloud ___(3)___ a shape. The leaves ___(4)___ in the wind. The dog ___(5)___ in the yard.",
        wordBox: ["rise", "rises", "sing", "sings", "have", "has", "move", "moves", "play", "plays"],
        answers: ["rises", "sing", "has", "move", "plays"],
        clueWords: [["sun"], ["birds"], ["cloud"], ["leaves"], ["dog"]],
        hints: [
          "Which verb form fits 'the sun'?",
          "What do the birds do?",
          "What shape does each cloud form?",
          "How do the leaves behave in the wind?",
          "What does the dog do in the yard?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The clock ___(1)___ every hour. The hands ___(2)___ around the face. Each minute ___(3)___ slowly. The children ___(4)___ for recess. The teacher ___(5)___ the time.",
        wordBox: ["tick", "ticks", "move", "moves", "pass", "passes", "wait", "waits", "check", "checks"],
        answers: ["ticks", "move", "passes", "wait", "checks"],
        clueWords: [["clock"], ["hands"], ["minute"], ["children"], ["teacher"]],
        hints: [
          "Which verb describes the clock’s sound?",
          "How do the hands move?",
          "What happens each minute?",
          "What do the children do?",
          "What does the teacher do with the time?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The bus ___(1)___ at the stop. The passengers ___(2)___ quietly. Each driver ___(3)___ a route. The wheels ___(4)___ on the road. The horn ___(5)___ loudly.",
        wordBox: ["stop", "stops", "wait", "waits", "have", "has", "roll", "rolls", "sound", "sounds"],
        answers: ["stops", "wait", "has", "roll", "sounds"],
        clueWords: [["bus"], ["passengers"], ["driver"], ["wheels"], ["horn"]],
        hints: [
          "Which word shows where the bus stops?",
          "How do the passengers behave?",
          "What does each driver do?",
          "What happens with the wheels?",
          "How does the horn sound?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The cake ___(1)___ delicious. The children ___(2)___ the cake. Each slice ___(3)___ a cherry. The plates ___(4)___ on the table. The party ___(5)___ at six.",
        wordBox: ["taste", "tastes", "eat", "eats", "have", "has", "are", "is", "start", "starts"],
        answers: ["tastes", "eat", "has", "are", "starts"],
        clueWords: [["cake"], ["children"], ["slice"], ["plates"], ["party"]],
        hints: [
          "Which verb describes the cake’s taste?",
          "What do the children do with the cake?",
          "How is each slice characterized?",
          "What is the state of the plates?",
          "When does the party start?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The rain ___(1)___ heavily. The umbrellas ___(2)___ the people dry. Each drop ___(3)___ on the ground. The clouds ___(4)___ dark. The wind ___(5)___ the trees.",
        wordBox: ["fall", "falls", "keep", "keeps", "land", "lands", "look", "looks", "move", "moves"],
        answers: ["falls", "keep", "lands", "look", "moves"],
        clueWords: [["rain"], ["umbrellas"], ["drop"], ["clouds"], ["wind"]],
        hints: [
          "Which verb shows the rain's action?",
          "What do the umbrellas do?",
          "What happens to each drop?",
          "How are the clouds described?",
          "How does the wind interact with the trees?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The monkey ___(1)___ in the tree. The bananas ___(2)___ on the branch. Each leaf ___(3)___ green. The birds ___(4)___ nearby. The zookeeper ___(5)___ the animals.",
        wordBox: ["climb", "climbs", "hang", "hangs", "is", "are", "fly", "flies", "feed", "feeds"],
        answers: ["climbs", "hang", "is", "fly", "feeds"],
        clueWords: [["monkey"], ["bananas"], ["leaf"], ["birds"], ["zookeeper"]],
        hints: [
          "Which word describes the monkey’s action?",
          "What happens to the bananas on the branch?",
          "How does each leaf behave?",
          "What do the birds do?",
          "What does the zookeeper do?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The phone ___(1)___ loudly. The children ___(2)___ the sound. Each button ___(3)___ a light. The messages ___(4)___ on the screen. The teacher ___(5)___ the phone off.",
        wordBox: ["ring", "rings", "hear", "hears", "have", "has", "appear", "appears", "turn", "turns"],
        answers: ["rings", "hear", "has", "appear", "turns"],
        clueWords: [["phone"], ["children"], ["button"], ["messages"], ["teacher"]],
        hints: [
          "Which word shows how the phone sounds?",
          "What do the children do?",
          "What happens with each button?",
          "How do the messages appear?",
          "What does the teacher do?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The star ___(1)___ in the sky. The planets ___(2)___ around the sun. Each moon ___(3)___ a shadow. The clouds ___(4)___ away. The night ___(5)___ quiet.",
        wordBox: ["shine", "shines", "move", "moves", "cast", "casts", "float", "floats", "is", "are"],
        answers: ["shines", "move", "casts", "float", "is"],
        clueWords: [["star"], ["planets"], ["moon"], ["clouds"], ["night"]],
        hints: [
          "Which verb form is needed for 'the star'?",
          "How do the planets move?",
          "What does each moon do?",
          "How do the clouds behave?",
          "How is the night described?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The boat ___(1)___ on the water. The waves ___(2)___ high. Each sailor ___(3)___ a job. The fish ___(4)___ below. The wind ___(5)___ the sails.",
        wordBox: ["float", "floats", "rise", "rises", "have", "has", "swim", "swims", "push", "pushes"],
        answers: ["floats", "rise", "has", "swim", "pushes"],
        clueWords: [["boat"], ["waves"], ["sailor"], ["fish"], ["wind"]],
        hints: [
          "Which word describes the boat’s position on the water?",
          "How high do the waves get?",
          "What does each sailor do?",
          "How do the fish behave?",
          "What is the wind doing to the sails?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The lion ___(1)___ in the cage. The visitors ___(2)___ the lion. Each child ___(3)___ a camera. The monkeys ___(4)___ in the trees. The zookeeper ___(5)___ the gate.",
        wordBox: ["roar", "roars", "watch", "watches", "hold", "holds", "climb", "climbs", "open", "opens"],
        answers: ["roars", "watch", "holds", "climb", "opens"],
        clueWords: [["lion"], ["visitors"], ["child"], ["monkeys"], ["zookeeper"]],
        hints: [
          "Which verb shows how the lion makes its sound?",
          "What do the visitors do?",
          "What is expected from each child?",
          "How do the monkeys behave?",
          "What does the zookeeper do with the gate?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The MRT ___(1)___ fast. The doors ___(2)___ at each stop. Each passenger ___(3)___ a ticket. The seats ___(4)___ full. The driver ___(5)___ the train.",
        wordBox: ["move", "moves", "open", "opens", "have", "has", "are", "is", "control", "controls"],
        answers: ["moves", "open", "has", "are", "controls"],
        clueWords: [["MRT"], ["doors"], ["passenger"], ["seats"], ["driver"]],
        hints: [
          "Which verb form fits the singular 'MRT'?",
          "What happens to the doors?",
          "What does each passenger do?",
          "How are the seats described?",
          "What does the driver do?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The hawker ___(1)___ the food. The customers ___(2)___ at the tables. Each plate ___(3)___ rice. The fans ___(4)___ above. The queue ___(5)___ long.",
        wordBox: ["cook", "cooks", "sit", "sits", "have", "has", "spin", "spins", "grow", "grows"],
        answers: ["cooks", "sit", "has", "spin", "grows"],
        clueWords: [["hawker"], ["customers"], ["plate"], ["fans"], ["queue"]],
        hints: [
          "Which verb shows what the hawker does?",
          "What do the customers do?",
          "How is each plate described?",
          "What do the fans do?",
          "How long is the queue?"
        ],
        hint: "Remember to use the objects around you as clues."
      }
    ],
    pronouns: [
      {
        text: "Mary lost ___(1)___ book yesterday. She asked John if ___(2)___ had seen it. He said that ___(3)___ didn’t know where it was. ___(4)___ both looked for it. Later, ___(5)___ found it under the desk.",
        wordBox: ["she", "her", "he", "him", "they", "them", "it"],
        answers: ["her", "he", "he", "they", "she"],
        clueWords: [["Mary"], ["John"], ["book"], ["both"], ["desk"]],
        hints: [
          "Which pronoun replaces Mary’s book?",
          "Who did Mary ask?",
          "Who wasn’t sure where it was?",
          "Who looked for the book?",
          "Where was the book eventually found?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The cat chased ___(1)___ tail. ___(2)___ was very playful. The dog watched ___(3)___ and barked. ___(4)___ both ran around the yard. Later, ___(5)___ rested under the tree.",
        wordBox: ["it", "its", "he", "him", "they", "them", "she"],
        answers: ["its", "It", "it", "They", "they"],
        clueWords: [["cat"], ["tail"], ["dog"], ["both"], ["tree"]],
        hints: [
          "Which pronoun shows possession for the cat?",
          "What is the cat’s tail like?",
          "What did the dog do?",
          "Who ran around?",
          "Where did they rest?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "Tom and Jerry are friends. ___(1)___ play together every day. ___(2)___ share their toys. Sometimes, ___(3)___ argue, but ___(4)___ always make up. ___(5)___ are best friends.",
        wordBox: ["They", "He", "She", "It", "We", "You", "Them"],
        answers: ["They", "They", "they", "they", "They"],
        clueWords: [["Tom"], ["Jerry"], ["toys"], ["argue"], ["friends"]],
        hints: [
          "Which pronoun refers to Tom and Jerry?",
          "What do they do together?",
          "What happens sometimes between them?",
          "What is their resolution?",
          "How are they described as friends?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The teacher gave ___(1)___ a test. ___(2)___ was difficult, but ___(3)___ all tried their best. After the test, ___(4)___ graded the papers. ___(5)___ were proud of their work.",
        wordBox: ["us", "it", "they", "she", "he", "them", "we"],
        answers: ["us", "It", "they", "she", "They"],
        clueWords: [["teacher"], ["test"], ["tried"], ["graded"], ["proud"]],
        hints: [
          "Who did the teacher give the test to?",
          "How was the test described?",
          "What did everyone do?",
          "Who graded the papers?",
          "How did they feel about their work?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The bird built ___(1)___ nest in the tree. ___(2)___ laid eggs in ___(3)___ nest. The chicks hatched and ___(4)___ chirped loudly. The mother bird fed ___(5)___ worms.",
        wordBox: ["it", "its", "she", "her", "they", "them", "he"],
        answers: ["its", "She", "her", "they", "them"],
        clueWords: [["bird"], ["nest"], ["eggs"], ["chicks"], ["worms"]],
        hints: [
          "Which pronoun shows possession for the bird’s nest?",
          "Who laid the eggs?",
          "Whose nest is it?",
          "How did the chicks behave?",
          "What did the mother bird feed them?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The boy dropped ___(1)___ pencil. ___(2)___ picked it up quickly. The girl next to ___(3)___ smiled. ___(4)___ both laughed about it. Later, ___(5)___ gave her a new pencil.",
        wordBox: ["he", "him", "his", "she", "her", "they", "them"],
        answers: ["his", "He", "him", "They", "he"],
        clueWords: [["boy"], ["pencil"], ["girl"], ["laughed"], ["new"]],
        hints: [
          "Which pronoun shows ownership of the pencil?",
          "Who picked it up?",
          "Who smiled?",
          "What did they do together?",
          "Who gave a new pencil?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The dog wagged ___(1)___ tail. ___(2)___ ran to the park. The children played with ___(3)___ . ___(4)___ all had fun together. The dog licked ___(5)___ hands.",
        wordBox: ["it", "its", "he", "him", "they", "them", "us"],
        answers: ["its", "It", "it", "They", "their"],
        clueWords: [["dog"], ["park"], ["children"], ["fun"], ["hands"]],
        hints: [
          "Which pronoun shows possession for the tail?",
          "What did it do?",
          "What did the children do?",
          "How did everyone have fun?",
          "What did the dog do to the hands?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "My sister and I went shopping. ___(1)___ bought new shoes. ___(2)___ tried them on. The shopkeeper helped ___(3)___ . ___(4)___ thanked him. ___(5)___ was very kind.",
        wordBox: ["we", "us", "she", "her", "he", "him", "they"],
        answers: ["We", "We", "us", "We", "He"],
        clueWords: [["sister"], ["shoes"], ["shopkeeper"], ["tried"], ["kind"]],
        hints: [
          "Who bought new shoes?",
          "Who tried the shoes on?",
          "Who helped?",
          "Who thanked the shopkeeper?",
          "How was the shopkeeper described?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The teacher called ___(1)___ to the front. ___(2)___ asked John a question. ___(3)___ answered correctly. The class clapped for ___(4)___ . ___(5)___ smiled proudly.",
        wordBox: ["he", "him", "she", "her", "they", "them", "us"],
        answers: ["him", "She", "he", "him", "He"],
        clueWords: [["called"], ["John"], ["answered"], ["clapped"], ["smiled"]],
        hints: [
          "Who was called to the front?",
          "Who asked the question?",
          "Who answered?",
          "For whom did the class clap?",
          "Who smiled proudly?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The kite flew high. ___(1)___ caught the wind. The boy held ___(2)___ string. His sister watched ___(3)___ . ___(4)___ both cheered loudly. ___(5)___ waved at them.",
        wordBox: ["it", "its", "he", "him", "she", "her", "they"],
        answers: ["It", "its", "it", "They", "she"],
        clueWords: [["kite"], ["wind"], ["string"], ["cheered"], ["waved"]],
        hints: [
          "Which word indicates what caught the wind?",
          "What does the boy hold?",
          "Who is being watched?",
          "What did both do?",
          "Who waved?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The baby dropped ___(1)___ toy. ___(2)___ cried loudly. The mother picked ___(3)___ up. ___(4)___ hugged her tightly. ___(5)___ smiled at them.",
        wordBox: ["it", "its", "he", "him", "she", "her", "they"],
        answers: ["its", "He", "him", "She", "they"],
        clueWords: [["baby"], ["toy"], ["mother"], ["hugged"], ["smiled"]],
        hints: [
          "Which pronoun shows possession for the toy?",
          "Who cried?",
          "Who picked it up?",
          "Who hugged tightly?",
          "Who smiled?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The team won the game. ___(1)___ celebrated together. The coach praised ___(2)___ . ___(3)___ all cheered loudly. The trophy was for ___(4)___ . ___(5)___ held it high.",
        wordBox: ["they", "them", "he", "him", "we", "us", "it"],
        answers: ["They", "them", "They", "them", "They"],
        clueWords: [["team"], ["celebrated"], ["coach"], ["trophy"], ["held"]],
        hints: [
          "Which pronoun represents the team?",
          "What did they do together?",
          "Who did the coach praise?",
          "For whom was the trophy?",
          "Who held it high?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The flower lost ___(1)___ petals. ___(2)___ fell to the ground. The girl picked ___(3)___ up. ___(4)___ showed it to her friend. ___(5)___ liked the color.",
        wordBox: ["it", "its", "she", "her", "they", "them", "he"],
        answers: ["its", "They", "them", "She", "he"],
        clueWords: [["flower"], ["petals"], ["girl"], ["showed"], ["color"]],
        hints: [
          "Which pronoun shows the flower’s petals?",
          "What happened to the petals?",
          "Who picked them up?",
          "Who showed them?",
          "Who liked the color?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The bus stopped for ___(1)___ . ___(2)___ got on quickly. The driver waved at ___(3)___ . ___(4)___ all sat down. ___(5)___ started the bus again.",
        wordBox: ["we", "us", "they", "them", "he", "him", "it"],
        answers: ["us", "We", "us", "We", "He"],
        clueWords: [["bus"], ["stopped"], ["driver"], ["sat"], ["started"]],
        hints: [
          "Which pronoun indicates who the bus stopped for?",
          "Who got on quickly?",
          "Who did the driver wave at?",
          "Who sat down?",
          "Who started the bus again?"
        ],
        hint: "Remember to use the objects around you as clues."
      },
      {
        text: "The monkey stole ___(1)___ banana. ___(2)___ ate it fast. The zookeeper chased ___(3)___ . ___(4)___ laughed at the monkey. ___(5)___ was funny.",
        wordBox: ["it", "its", "he", "him", "they", "them", "us"],
        answers: ["its", "It", "it", "They", "It"],
        clueWords: [["monkey"], ["banana"], ["zookeeper"], ["laughed"], ["funny"]],
        hints: [
          "Which pronoun shows possession for the banana?",
          "Who ate it?",
          "Who did the zookeeper chase?",
          "Who laughed?",
          "What was funny?"
        ],
        hint: "Remember to use the objects around you as clues."
      }
    ]
    // Add adjectivesAdverbs and tenses here if you provide them later...
  };

  // Global game state
  let currentGrammarType = "prepositions";
  let currentPassageIndex = 0;
  let score = 0;
  let stars = 0;
  let hintUsage = {};
  let selectedWord = null;
  let timeLeft = 60;
  let timerInterval = null;
  let challengeMode = true;

  // DOM Elements
  const grammarSelect = document.getElementById("grammar-type");
  const passageText = document.getElementById("passage-text");
  const wordBox = document.getElementById("word-box");
  const feedbackDisplay = document.getElementById("feedback");
  const nextPassageButton = document.getElementById("next-btn");
  const prevPassageButton = document.getElementById("prev-btn");
  const hintButton = document.getElementById("hint-btn");
  const clearButton = document.getElementById("clear-btn");
  const progressDisplay = document.getElementById("progress");
  const scoreDisplay = document.getElementById("score");
  const starsDisplay = document.getElementById("lives"); // Repurposed as stars
  const progressBar = document.getElementById("progress-bar");
  const highlightCluesButton = document.getElementById("highlight-clues-btn");
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const fullscreenBtn = document.getElementById("fullscreen-btn");
  const speakPassageBtn = document.getElementById("speak-passage-btn");

  // Timer Display with Progress Bar
  const timerContainer = document.createElement("div");
  timerContainer.id = "timer-container";
  timerContainer.innerHTML = `<div id="timer-bar" style="width: 100%;"></div>`;
  document.querySelector(".status-bar").appendChild(timerContainer);
  const timerBar = document.getElementById("timer-bar");

  // Speech Synthesis Setup
  const synth = window.speechSynthesis;
  let voices = [];
  let ukFemaleVoice = null;

  function loadVoices() {
    voices = synth.getVoices();
    ukFemaleVoice = voices.find(voice =>
      voice.lang === "en-GB" && 
      (voice.name.includes("Female") || voice.name.includes("Google UK English Female") || voice.name === "Samantha" || voice.name === "Kate")
    ) || voices.find(voice => voice.lang === "en-GB");
  }
  loadVoices();
  synth.onvoiceschanged = loadVoices;

  function speak(text) {
    if (synth.speaking) synth.cancel();
    if (!voices.length) {
      feedbackDisplay.textContent = "Speech unavailable.";
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    if (ukFemaleVoice) utterance.voice = ukFemaleVoice;
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    synth.speak(utterance);
  }

  // Onboarding
  if (!localStorage.getItem("hasSeenTutorial")) {
    alert("Welcome to Grammar Cloze Adventure! Drag or tap a word to fill in each blank. Use the menu for hints and controls!");
    localStorage.setItem("hasSeenTutorial", "true");
    speak("Welcome to Grammar Cloze Adventure! Drag or tap a word to fill in each blank.");
  }

  // Utility Functions
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function updateStatus() {
    scoreDisplay.textContent = `⭐ Score: ${score}`;
    starsDisplay.textContent = `⭐ Stars: ${stars}`;
    progressDisplay.textContent = `📖 Progress: ${currentPassageIndex + 1} / ${passages[currentGrammarType].length}`;
    progressBar.style.width = `${((currentPassageIndex + 1) / passages[currentGrammarType].length) * 100}%`;
    if (challengeMode) {
      timerBar.style.width = `${(timeLeft / 60) * 100}%`;
      timerBar.style.backgroundColor = timeLeft > 30 ? "green" : timeLeft > 10 ? "orange" : "red";
    } else {
      timerBar.style.width = "0%";
    }
  }

  function startTimer() {
    if (!challengeMode) return;
    clearInterval(timerInterval);
    timeLeft = 60;
    timerInterval = setInterval(() => {
      timeLeft--;
      updateStatus();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        feedbackDisplay.textContent = "Time's up! Moving to next passage.";
        speak("Time's up! Moving to next passage.");
        setTimeout(() => nextPassageButton.click(), 1000);
      }
    }, 1000);
  }

  function displayPassage() {
    clearInterval(timerInterval);
    hintUsage = {};
    const passage = passages[currentGrammarType]?.[currentPassageIndex];
    if (!passage) {
      passageText.innerHTML = "<p>Error: Passage not found.</p>";
      feedbackDisplay.textContent = "Error: Passage not found.";
      return;
    }
    if (!passage.text || !Array.isArray(passage.wordBox) || !Array.isArray(passage.answers)) {
      passageText.innerHTML = "<p>Error: Invalid passage data.</p>";
      feedbackDisplay.textContent = "Error: Missing passage text, word bank, or answers.";
      return;
    }
    const blanks = passage.text.match(/___\(\d+\)___/g) || [];
    if (passage.answers.length !== blanks.length) {
      feedbackDisplay.textContent = "Warning: Number of answers doesn’t match number of blanks.";
    }
    let passageHTML = passage.text;
    if (passage.clueWords) {
      passage.clueWords.forEach((clues, index) => {
        const blankNum = index + 1;
        clues.forEach(clue => {
          const regex = new RegExp(`\\b${clue}\\b`, "gi");
          passageHTML = passageHTML.replace(regex, `<span class="keyword keyword-${blankNum}" title="Clue for blank ${blankNum}">${clue}</span>`);
        });
      });
    }
    passageHTML = passageHTML.replace(/___\((\d+)\)___/g, (_, num) => {
      return `<span class="blank" data-blank="${num}" tabindex="0">_<button class="hint-for-blank" aria-label="Hint for blank ${num}" title="Hint">💡</button></span>`;
    });
    passageText.innerHTML = passageHTML;

    wordBox.innerHTML = shuffle(passage.wordBox)
      .map(word => `<div class="word" draggable="true" tabindex="0">${word}</div>`)
      .join("");

    document.querySelectorAll(".blank").forEach(blank => {
      blank.addEventListener("dragover", handleDragOver);
      blank.addEventListener("dragleave", handleDragLeave);
      blank.addEventListener("drop", handleDrop);
      blank.addEventListener("click", () => {
        if (selectedWord && !blank.classList.contains("filled")) {
          placeWord(blank, selectedWord.textContent);
          selectedWord.remove();
          selectedWord = null;
          updateStatus();
        }
      });
    });

    document.querySelectorAll(".word").forEach(word => {
      word.addEventListener("dragstart", handleDragStart);
      word.addEventListener("dragend", handleDragEnd);
      word.addEventListener("click", () => {
        selectedWord = word;
        document.querySelectorAll(".word").forEach(w => w.classList.remove("selected"));
        word.classList.add("selected");
      });
    });

    document.querySelectorAll(".hint-for-blank").forEach(button => {
      button.addEventListener("click", function () {
        const blankNum = this.parentElement.getAttribute("data-blank");
        const hintIndex = parseInt(blankNum) - 1;
        if (passage.hints && passage.hints[hintIndex]) {
          feedbackDisplay.textContent = passage.hints[hintIndex];
          feedbackDisplay.style.color = "blue";
          speak(passage.hints[hintIndex]);
          if (!hintUsage[blankNum] && challengeMode) {
            hintUsage[blankNum] = true;
            score = Math.max(0, score - 5);
            feedbackDisplay.textContent += " (-5 points for hint)";
            updateStatus();
          }
        }
        document.querySelectorAll(".keyword").forEach(el => el.classList.remove("highlighted"));
        document.querySelectorAll(`.keyword-${blankNum}`).forEach(el => el.classList.add("highlighted"));
        setTimeout(() => {
          document.querySelectorAll(".keyword").forEach(el => el.classList.remove("highlighted"));
        }, 3000);
      });
    });

    if (challengeMode) startTimer();
    updateStatus();
  }

  // Drag-and-Drop Handlers
  let draggedItem = null;
  function handleDragStart(e) {
    draggedItem = e.target;
    e.dataTransfer.setData("text/plain", e.target.textContent);
    e.target.classList.add("dragging");
  }
  function handleDragEnd(e) {
    e.target.classList.remove("dragging");
    draggedItem = null;
  }
  function handleDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add("drag-over");
  }
  function handleDragLeave(e) {
    e.currentTarget.classList.remove("drag-over");
  }
  function handleDrop(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("drag-over");
    const droppedWord = e.dataTransfer.getData("text/plain");
    if (e.currentTarget.classList.contains("blank") && !e.currentTarget.classList.contains("filled")) {
      placeWord(e.currentTarget, droppedWord);
      document.querySelectorAll(".word").forEach(word => {
        if (word.textContent === droppedWord) word.remove();
      });
      updateStatus();
    }
  }

  function placeWord(blank, word) {
    blank.textContent = word;
    blank.classList.add("filled");
    checkAnswer(blank);
  }

  function checkAnswer(blank) {
    const blankId = parseInt(blank.getAttribute("data-blank"));
    const userAnswer = blank.textContent.trim().toLowerCase();
    const correctAnswer = passages[currentGrammarType][currentPassageIndex].answers[blankId - 1].toLowerCase();
    if (userAnswer === correctAnswer) {
      blank.classList.add("correct");
      score += 10;
      stars += 1;
      feedbackDisplay.textContent = "Correct! Great job!";
      feedbackDisplay.style.color = "green";
      speak("Correct! Great job!");
    } else {
      blank.classList.add("incorrect");
      feedbackDisplay.textContent = "Incorrect! Try again.";
      feedbackDisplay.style.color = "red";
      speak("Incorrect! Try again.");
    }
    updateStatus();
  }

  // Menu and Fullscreen Controls
  menuBtn.addEventListener("click", () => {
    const isHidden = menu.classList.toggle("hidden");
    menu.setAttribute("aria-hidden", isHidden);
  });

  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.body.classList.add("fullscreen");
      fullscreenBtn.textContent = "↙";
    } else {
      document.exitFullscreen();
      document.body.classList.remove("fullscreen");
      fullscreenBtn.textContent = "⤢";
    }
  });

  // Add Challenge Mode Toggle to Menu
  menu.innerHTML += '<button id="toggle-challenge" tabindex="0" aria-label="Toggle Challenge Mode">Toggle Challenge</button>';
  document.getElementById("toggle-challenge").addEventListener("click", () => {
    challengeMode = !challengeMode;
    if (challengeMode) {
      startTimer();
      feedbackDisplay.textContent = "Challenge Mode ON";
    } else {
      clearInterval(timerInterval);
      timerBar.style.width = "0%";
      feedbackDisplay.textContent = "Challenge Mode OFF";
    }
    speak(`Challenge Mode ${challengeMode ? "ON" : "OFF"}`);
  });

  // Game Controls
  grammarSelect.addEventListener("change", () => {
    currentGrammarType = grammarSelect.value;
    currentPassageIndex = 0;
    displayPassage();
    updateStatus();
  });

  nextPassageButton.addEventListener("click", () => {
    const blanks = document.querySelectorAll(".blank");
    let allFilled = true;
    blanks.forEach(blank => {
      if (!blank.classList.contains("filled")) allFilled = false;
    });
    if (allFilled) {
      const passage = passages[currentGrammarType][currentPassageIndex];
      let reviewText = "Review:\n";
      passage.answers.forEach((ans, i) => {
        reviewText += `Blank ${i + 1}: "${ans}" - ${passage.hints[i]}\n`;
      });
      alert(reviewText);
      speak("Here’s your review!");
      if (challengeMode) {
        if (Object.keys(hintUsage).length === 0) {
          score += 20;
          feedbackDisplay.innerHTML = 'Correct! Bonus: <span class="bonus">+20!</span>';
          speak("Bonus! 20 extra points for no hints.");
        }
        if (timeLeft > 30) {
          score += 10;
          feedbackDisplay.innerHTML += ' <span class="bonus">+10!</span>';
          speak("Plus 10 extra points for quick completion.");
        }
      }
    }
    clearInterval(timerInterval);
    currentPassageIndex++;
    if (currentPassageIndex >= passages[currentGrammarType].length) {
      feedbackDisplay.textContent = "Game Over! Final Score: " + score;
      speak("Game Over! Your final score is " + score);
      return;
    }
    displayPassage();
    updateStatus();
    menu.classList.add("hidden");
  });

  prevPassageButton.addEventListener("click", () => {
    if (currentPassageIndex > 0) {
      currentPassageIndex--;
      clearInterval(timerInterval);
      displayPassage();
      updateStatus();
    }
    menu.classList.add("hidden");
  });

  clearButton.addEventListener("click", () => {
    hintUsage = {};
    selectedWord = null;
    clearInterval(timerInterval);
    displayPassage();
    menu.classList.add("hidden");
  });

  hintButton.addEventListener("click", () => {
    const passage = passages[currentGrammarType][currentPassageIndex];
    if (passage.hint) {
      feedbackDisplay.textContent = passage.hint;
      feedbackDisplay.style.color = "blue";
      speak(passage.hint);
    }
    menu.classList.add("hidden");
  });

  speakPassageBtn.addEventListener("click", () => {
    const passage = passages[currentGrammarType][currentPassageIndex];
    if (passage.text) {
      const textToSpeak = passage.text.replace(/___\(\d+\)___/g, "blank");
      speak(textToSpeak);
    }
    menu.classList.add("hidden");
  });

  // Initialize Game
  displayPassage();
  updateStatus();
});
