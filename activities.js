console.log("activities.js started running");
const activities = [
console.log("activities.js is running, total activities:", activities.length);

  // ----- Age 0-1 years -----
  {
    name: "Tummy Time Play",
    age: ["0-1"],
    interests: ["sensory"],
    time: "5-10",
    season: ["all"],
    supervision: "adult",
    description: "Place the baby on their tummy with colorful toys in front to encourage lifting the head.",
    skillsAchieved: {
      fineMotor: "Strengthens early hand and finger movement by reaching for toys.",
      grossMotor: "Develops neck and back muscles by lifting the head.",
      speech: "Encourages cooing and babbling when parent interacts.",
      cognitive: "Promotes visual tracking of objects.",
      socioEmotional: "Builds bonding through face-to-face interaction.",
      emotional: "Boosts comfort and sense of security with caregiver."
    }
  },
  {
    name: "High Contrast Card Show",
    age: ["0-1"],
    interests: ["sensory"],
    time: "5-10",
    season: ["all"],
    supervision: "adult",
    description: "Show high-contrast black and white cards to your baby.",
    skillsAchieved: {
      fineMotor: "Stimulates hand movement when baby tries to touch cards.",
      grossMotor: "Improves head turning and visual engagement.",
      speech: "Encourages early sounds when responding to visual stimuli.",
      cognitive: "Enhances visual focus and recognition.",
      socioEmotional: "Fosters trust and curiosity.",
      emotional: "Develops comfort exploring new visuals."
    }
  },
  {
    name: "Rattle Shake Game",
    age: ["0-1"],
    interests: ["music", "sensory"],
    time: "5-10",
    season: ["all"],
    supervision: "adult",
    description: "Use rattles to engage the baby's attention and encourage reaching.",
    skillsAchieved: {
      fineMotor: "Improves grasp reflex and early grip strength.",
      grossMotor: "Encourages arm and hand movement.",
      speech: "Introduces sound imitation and early vocalization.",
      cognitive: "Teaches cause-effect as rattle makes noise.",
      socioEmotional: "Strengthens parent-baby interaction.",
      emotional: "Stimulates joy and responsiveness."
    }
  },
  {
    name: "Soft Ball Roll",
    age: ["0-1"],
    interests: ["sensory", "outdoor"],
    time: "5-10",
    season: ["all"],
    supervision: "adult",
    description: "Roll a soft ball gently toward your baby to encourage reaching and tracking.",
    skillsAchieved: {
      fineMotor: "Promotes reaching and grasping skills.",
      grossMotor: "Strengthens upper body and hand coordination.",
      speech: "Encourages babbling with playful interaction.",
      cognitive: "Teaches movement and object awareness.",
      socioEmotional: "Builds trust during shared play.",
      emotional: "Increases delight through interaction."
    }
  },
  {
    name: "Peek-a-Boo",
    age: ["0-1"],
    interests: ["pretend"],
    time: "5-10",
    season: ["all"],
    supervision: "adult",
    description: "Hide your face behind hands or a scarf and reveal with excitement.",
    skillsAchieved: {
      fineMotor: "Encourages hand use when baby imitates gesture.",
      grossMotor: "Promotes head turning and focus.",
      speech: "Reinforces early vocal play like cooing.",
      cognitive: "Teaches object permanence.",
      socioEmotional: "Creates joy and laughter.",
      emotional: "Strengthens caregiver bond."
    }
  },

  // ----- Age 1-2 years -----
  {
    name: "Shape Sorter Play",
    age: ["1-2"],
    interests: ["puzzles", "building"],
    time: "5-10",
    season: ["all"],
    supervision: "independent",
    description: "Encourage your child to match and insert shapes into the correct slots.",
    skillsAchieved: {
      fineMotor: "Improves hand-eye coordination and grip control.",
      grossMotor: "Enhances sitting balance while playing.",
      speech: "Teaches names of shapes.",
      cognitive: "Introduces problem-solving and matching skills.",
      socioEmotional: "Boosts confidence after successful matches.",
      emotional: "Increases satisfaction through play."
    }
  },
  {
    name: "Stacking Blocks",
    age: ["1-2"],
    interests: ["building"],
    time: "5-10",
    season: ["all"],
    supervision: "independent",
    description: "Provide soft or wooden blocks for stacking towers.",
    skillsAchieved: {
      fineMotor: "Strengthens pincer grip and precision.",
      grossMotor: "Enhances posture control.",
      speech: "Promotes naming of colors or sizes.",
      cognitive: "Teaches spatial relationships and planning.",
      socioEmotional: "Encourages patience and focus.",
      emotional: "Provides a sense of achievement."
    }
  },
  {
    name: "Push and Pull Toy Play",
    age: ["1-2"],
    interests: ["outdoor", "sensory"],
    time: "15-30",
    season: ["all"],
    supervision: "guided",
    description: "Let the child push or pull simple toys on wheels.",
    skillsAchieved: {
      fineMotor: "Improves grip and directional control.",
      grossMotor: "Encourages walking and balance.",
      speech: "Introduces simple commands like 'push' and 'pull'.",
      cognitive: "Enhances cause-effect understanding.",
      socioEmotional: "Develops independence.",
      emotional: "Increases enjoyment of movement."
    }
  },
  {
    name: "Water Play with Cups",
    age: ["1-2"],
    interests: ["sensory"],
    time: "15-30",
    season: ["summer"],
    supervision: "adult",
    description: "Fill cups with water for pouring and splashing fun.",
    skillsAchieved: {
      fineMotor: "Enhances scooping and pouring control.",
      grossMotor: "Promotes balance while sitting or standing.",
      speech: "Encourages words like 'full', 'empty', and 'pour'.",
      cognitive: "Develops early measurement concepts.",
      socioEmotional: "Creates joyful sensory exploration.",
      emotional: "Improves sensory regulation."
    }
  },
  {
    name: "Animal Sound Imitation",
    age: ["1-2"],
    interests: ["music", "pretend"],
    time: "5-10",
    season: ["all"],
    supervision: "guided",
    description: "Make animal sounds and encourage your child to imitate.",
    skillsAchieved: {
      fineMotor: "Minimal involvement (focuses on vocal skills).",
      grossMotor: "Encourages body gestures like flapping arms.",
      speech: "Builds sound imitation and vocabulary.",
      cognitive: "Promotes auditory memory.",
      socioEmotional: "Fosters laughter and bonding.",
      emotional: "Encourages playful expression."
    }
  },

  // ----- Age 2-4 years -----
  {
    name: "Clay Animal Making",
    age: ["2-4"],
    interests: ["arts", "sensory"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Help your child create simple shapes or animals using clay.",
    skillsAchieved: {
      fineMotor: "Improves finger dexterity and rolling skills.",
      grossMotor: "Enhances posture during seated tasks.",
      speech: "Encourages naming objects and colors.",
      cognitive: "Promotes creativity and 3D visualization.",
      socioEmotional: "Boosts confidence when creating something new.",
      emotional: "Improves focus and calmness."
    }
  },
  {
    name: "Sorting Colors Game",
    age: ["2-4"],
    interests: ["puzzles", "sensory"],
    time: "5-10",
    season: ["all"],
    supervision: "independent",
    description: "Ask the child to sort colored blocks into matching baskets.",
    skillsAchieved: {
      fineMotor: "Strengthens grip and picking skills.",
      grossMotor: "Encourages movement if blocks are scattered.",
      speech: "Teaches color names.",
      cognitive: "Enhances classification skills.",
      socioEmotional: "Improves patience and task completion.",
      emotional: "Creates excitement when colors match."
    }
  },
  {
    name: "Dance Freeze Game",
    age: ["2-4"],
    interests: ["music", "outdoor"],
    time: "15-30",
    season: ["all"],
    supervision: "guided",
    description: "Play music and pause randomly, asking the child to freeze in place.",
    skillsAchieved: {
      fineMotor: "Encourages small hand gestures while dancing.",
      grossMotor: "Improves body balance and motor coordination.",
      speech: "Encourages listening to commands.",
      cognitive: "Teaches response control.",
      socioEmotional: "Creates group fun and laughter.",
      emotional: "Develops impulse control."
    }
  },
  {
    name: "Play Kitchen",
    age: ["2-4"],
    interests: ["pretend"],
    time: "15-30",
    season: ["all"],
    supervision: "adult",
    description: "Provide utensils and play food for pretend cooking.",
    skillsAchieved: {
      fineMotor: "Enhances pouring and spoon control.",
      grossMotor: "Encourages standing balance and coordination.",
      speech: "Teaches food names and action words.",
      cognitive: "Improves pretend planning and sequencing.",
      socioEmotional: "Encourages role-play and social interaction.",
      emotional: "Builds creativity."
    }
  },
  {
    name: "Pillow Obstacle Crawl",
    age: ["2-4"],
    interests: ["outdoor", "sports"],
    time: "15-30",
    season: ["all"],
    supervision: "guided",
    description: "Set up pillows or cushions to crawl under and over safely.",
    skillsAchieved: {
      fineMotor: "Uses hands to support crawling.",
      grossMotor: "Improves crawling coordination and muscle strength.",
      speech: "Encourages following instructions.",
      cognitive: "Builds spatial awareness.",
      socioEmotional: "Encourages confidence through physical play.",
      emotional: "Promotes joy and accomplishment."
    }
  },

  // ----- Age 5-7 years -----
  {
    name: "Story Card Sequencing",
    age: ["5-7"],
    interests: ["puzzles", "pretend"],
    time: "15-30",
    season: ["all"],
    supervision: "independent",
    description: "Arrange picture cards to tell a logical story.",
    skillsAchieved: {
      fineMotor: "Flipping and arranging cards improves finger skills.",
      grossMotor: "Encourages stable sitting posture.",
      speech: "Boosts narrative and sentence formation.",
      cognitive: "Teaches sequencing and logic.",
      socioEmotional: "Improves confidence through storytelling.",
      emotional: "Encourages imagination."
    }
  },
  {
    name: "Treasure Hunt",
    age: ["5-7"],
    interests: ["outdoor", "puzzles"],
    time: "30-60",
    season: ["all"],
    supervision: "adult",
    description: "Hide small objects and give children clues to find them.",
    skillsAchieved: {
      fineMotor: "Picking objects improves hand dexterity.",
      grossMotor: "Enhances running, bending, and coordination.",
      speech: "Improves comprehension and direction following.",
      cognitive: "Promotes problem-solving and thinking.",
      socioEmotional: "Encourages teamwork.",
      emotional: "Builds excitement and confidence."
    }
  },
  {
    name: "Shadow Puppet Show",
    age: ["5-7"],
    interests: ["pretend", "arts"],
    time: "15-30",
    season: ["all"],
    supervision: "guided",
    description: "Use a torch and paper cutouts to create a shadow play.",
    skillsAchieved: {
      fineMotor: "Manipulating cutouts improves grip.",
      grossMotor: "Encourages standing and hand movement.",
      speech: "Boosts storytelling and voice modulation.",
      cognitive: "Develops creative thinking.",
      socioEmotional: "Encourages expressive play.",
      emotional: "Builds confidence performing for others."
    }
  },
  {
    name: "Paper Boat Racing",
    age: ["5-7"],
    interests: ["arts", "outdoor"],
    time: "15-30",
    season: ["monsoon"],
    supervision: "guided",
    description: "Make and race paper boats in a tub or puddle.",
    skillsAchieved: {
      fineMotor: "Folding paper improves precision.",
      grossMotor: "Encourages movement and excitement.",
      speech: "Promotes communication about steps.",
      cognitive: "Enhances cause-effect understanding.",
      socioEmotional: "Encourages fun teamwork.",
      emotional: "Fosters joy in creativity."
    }
  },
  {
    name: "Festival Rangoli",
    age: ["5-7"],
    interests: ["arts"],
    time: "30-60",
    season: ["diwali"],
    supervision: "adult",
    description: "Create a simple rangoli using colored powders or flowers.",
    skillsAchieved: {
      fineMotor: "Strengthens pincer grip for detailed design.",
      grossMotor: "Encourages bending and sitting balance.",
      speech: "Introduces cultural terms and colors.",
      cognitive: "Promotes symmetry and design thinking.",
      socioEmotional: "Connects children with traditions.",
      emotional: "Fosters pride in cultural work."
    }
  }
];
// Continuing 5-7 years
activities.push(
  {
    name: "DIY Bird Feeder",
    age: ["5-7"],
    interests: ["nature", "arts"],
    time: "30-60",
    season: ["winter", "summer"],
    supervision: "guided",
    description: "Make a bird feeder using recycled materials and hang it outside.",
    skillsAchieved: {
      fineMotor: "Cutting and tying improves hand control.",
      grossMotor: "Encourages reaching and outdoor exploration.",
      speech: "Learn names of birds and seeds.",
      cognitive: "Teaches recycling and care for nature.",
      socioEmotional: "Fosters empathy towards animals.",
      emotional: "Increases joy watching birds eat."
    }
  },
  {
    name: "Charades Kids Edition",
    age: ["5-7"],
    interests: ["pretend"],
    time: "15-30",
    season: ["all"],
    supervision: "guided",
    description: "Act out simple objects or animals for others to guess.",
    skillsAchieved: {
      fineMotor: "Uses expressive gestures.",
      grossMotor: "Encourages large body movements.",
      speech: "Boosts vocabulary by guessing words.",
      cognitive: "Promotes thinking and fast association.",
      socioEmotional: "Encourages group participation.",
      emotional: "Builds confidence through acting."
    }
  },
  {
    name: "DIY Kite Craft",
    age: ["5-7"],
    interests: ["arts", "outdoor"],
    time: "30-60",
    season: ["pongal"],
    supervision: "adult",
    description: "Create and fly simple kites using sticks, paper, and string.",
    skillsAchieved: {
      fineMotor: "Improves cutting and gluing precision.",
      grossMotor: "Encourages running while flying kite.",
      speech: "Introduces terms like tail, string, wind.",
      cognitive: "Enhances understanding of wind and balance.",
      socioEmotional: "Encourages teamwork when flying.",
      emotional: "Fosters excitement and outdoor fun."
    }
  },
  {
    name: "Mini Gardening",
    age: ["5-7"],
    interests: ["nature", "sensory"],
    time: "30-60",
    season: ["summer", "monsoon"],
    supervision: "adult",
    description: "Plant seeds in small pots and water them daily.",
    skillsAchieved: {
      fineMotor: "Scooping soil and planting seeds builds coordination.",
      grossMotor: "Encourages lifting and carrying small pots.",
      speech: "Teaches plant names and growth stages.",
      cognitive: "Promotes observation and patience.",
      socioEmotional: "Develops responsibility caring for plants.",
      emotional: "Provides joy when plants sprout."
    }
  },
  {
    name: "DIY Friendship Bands",
    age: ["5-7"],
    interests: ["arts"],
    time: "15-30",
    season: ["raksha"],
    supervision: "guided",
    description: "Use threads and beads to make friendship or Raksha Bandhan bands.",
    skillsAchieved: {
      fineMotor: "Weaving and tying builds finger dexterity.",
      grossMotor: "Enhances focus while working with hands.",
      speech: "Teaches color and bead vocabulary.",
      cognitive: "Encourages pattern-making.",
      socioEmotional: "Strengthens bonds by giving to friends.",
      emotional: "Creates pride in handmade gifts."
    }
  },

  // ----- Age 8-10 years -----
  {
    name: "Cooking Without Fire",
    age: ["8-10"],
    interests: ["pretend", "arts"],
    time: "30-60",
    season: ["all"],
    supervision: "adult",
    description: "Prepare simple no-fire recipes like fruit salad.",
    skillsAchieved: {
      fineMotor: "Cutting soft fruits improves control.",
      grossMotor: "Involves standing and arranging ingredients.",
      speech: "Teaches food names and recipe steps.",
      cognitive: "Encourages following instructions.",
      socioEmotional: "Boosts sharing and serving skills.",
      emotional: "Creates pride in making food."
    }
  },
  {
    name: "Science Volcano Experiment",
    age: ["8-10"],
    interests: ["puzzles", "sensory"],
    time: "30-60",
    season: ["all"],
    supervision: "adult",
    description: "Create a baking soda and vinegar volcano.",
    skillsAchieved: {
      fineMotor: "Scooping ingredients improves control.",
      grossMotor: "Encourages steady hands and setup.",
      speech: "Explains scientific terms like eruption.",
      cognitive: "Promotes curiosity and observation.",
      socioEmotional: "Encourages teamwork if done with friends.",
      emotional: "Builds excitement in discovery."
    }
  },
  {
    name: "DIY Newspaper Bag",
    age: ["8-10"],
    interests: ["arts", "puzzles"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Fold and glue newspapers to make eco-friendly bags.",
    skillsAchieved: {
      fineMotor: "Improves folding and gluing precision.",
      grossMotor: "Promotes coordination while measuring.",
      speech: "Teaches terms like fold, crease, glue.",
      cognitive: "Encourages planning and accuracy.",
      socioEmotional: "Fosters eco-consciousness.",
      emotional: "Creates satisfaction in making useful items."
    }
  },
  {
    name: "Map Treasure Hunt",
    age: ["8-10"],
    interests: ["outdoor", "puzzles"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Draw a map and hide treasures for kids to find.",
    skillsAchieved: {
      fineMotor: "Drawing maps builds precision.",
      grossMotor: "Encourages running and exploring.",
      speech: "Teaches directional vocabulary.",
      cognitive: "Improves problem-solving.",
      socioEmotional: "Promotes teamwork and sharing.",
      emotional: "Excitement of discovery builds confidence."
    }
  },
  {
    name: "Festival Craft Lantern",
    age: ["8-10"],
    interests: ["arts"],
    time: "30-60",
    season: ["diwali", "christmas"],
    supervision: "adult",
    description: "Create decorative lanterns using craft paper.",
    skillsAchieved: {
      fineMotor: "Cutting and folding paper improves control.",
      grossMotor: "Involves careful handling of craft materials.",
      speech: "Learn decorative vocabulary.",
      cognitive: "Enhances planning and design thinking.",
      socioEmotional: "Connects kids with cultural themes.",
      emotional: "Pride in seeing their creation lit up."
    }
  },
  {
    name: "Memory Card Game",
    age: ["8-10"],
    interests: ["puzzles"],
    time: "15-30",
    season: ["all"],
    supervision: "independent",
    description: "Play a memory game by flipping cards and matching pairs.",
    skillsAchieved: {
      fineMotor: "Flipping cards improves finger skills.",
      grossMotor: "Encourages steady movements.",
      speech: "Promotes describing card images.",
      cognitive: "Enhances memory and concentration.",
      socioEmotional: "Encourages friendly competition.",
      emotional: "Builds patience and satisfaction when winning."
    }
  },
  {
    name: "Outdoor Relay Race",
    age: ["8-10"],
    interests: ["outdoor", "sports"],
    time: "30-60",
    season: ["summer", "winter"],
    supervision: "adult",
    description: "Organize a fun relay race with friends or family.",
    skillsAchieved: {
      fineMotor: "Carrying baton requires grip control.",
      grossMotor: "Develops running, speed, and coordination.",
      speech: "Improves giving and following instructions.",
      cognitive: "Teaches rules and strategy.",
      socioEmotional: "Promotes teamwork.",
      emotional: "Encourages confidence and enjoyment."
    }
  },
  {
    name: "Origami Art",
    age: ["8-10"],
    interests: ["arts"],
    time: "30-60",
    season: ["all"],
    supervision: "independent",
    description: "Create animals or flowers using origami paper.",
    skillsAchieved: {
      fineMotor: "Folding improves precision and dexterity.",
      grossMotor: "Enhances sitting focus and posture.",
      speech: "Introduces shape and step terms.",
      cognitive: "Encourages spatial thinking.",
      socioEmotional: "Fosters patience and attention.",
      emotional: "Pride in creative results."
    }
  },
  {
    name: "Build Your Own Puzzle",
    age: ["8-10"],
    interests: ["puzzles", "arts"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Draw a picture, cut it into pieces, and solve it as a puzzle.",
    skillsAchieved: {
      fineMotor: "Cutting and placing improves hand coordination.",
      grossMotor: "Encourages focus and movement around pieces.",
      speech: "Teaches problem-solving terms.",
      cognitive: "Boosts logical thinking.",
      socioEmotional: "Promotes creative teamwork.",
      emotional: "Builds self-confidence."
    }
  }
);
activities.push(
  // ---- Seasonal and Festival Themes (All Ages) ----
  {
    name: "Holi Color Sorting",
    age: ["2-4", "5-7"],
    interests: ["sensory", "arts"],
    time: "15-30",
    season: ["holi"],
    supervision: "adult",
    description: "Sort colored powders or safe colored rice into bowls.",
    skillsAchieved: {
      fineMotor: "Scooping and sorting improves hand control.",
      grossMotor: "Encourages careful movements while pouring.",
      speech: "Introduces color vocabulary.",
      cognitive: "Enhances classification skills.",
      socioEmotional: "Connects with cultural celebrations.",
      emotional: "Creates joy exploring colors."
    }
  },
  {
    name: "Diwali Candle Decoration",
    age: ["5-7", "8-10"],
    interests: ["arts"],
    time: "30-60",
    season: ["diwali"],
    supervision: "adult",
    description: "Decorate candles with beads and glitter for Diwali.",
    skillsAchieved: {
      fineMotor: "Sticking beads improves finger dexterity.",
      grossMotor: "Involves stable posture while decorating.",
      speech: "Teaches festival vocabulary.",
      cognitive: "Encourages creative design.",
      socioEmotional: "Connects with family traditions.",
      emotional: "Builds pride in festive preparation."
    }
  },
  {
    name: "Pongal Pot Painting",
    age: ["5-7", "8-10"],
    interests: ["arts", "nature"],
    time: "30-60",
    season: ["pongal"],
    supervision: "adult",
    description: "Paint clay pots with bright colors for Pongal decoration.",
    skillsAchieved: {
      fineMotor: "Brush strokes refine hand control.",
      grossMotor: "Encourages stable hand movements.",
      speech: "Introduces cultural motifs.",
      cognitive: "Promotes creativity.",
      socioEmotional: "Connects with family traditions.",
      emotional: "Encourages cultural pride."
    }
  },
  {
    name: "Christmas Ornament Craft",
    age: ["5-7", "8-10"],
    interests: ["arts", "puzzles"],
    time: "30-60",
    season: ["christmas"],
    supervision: "adult",
    description: "Make ornaments using paper, beads, or recycled items.",
    skillsAchieved: {
      fineMotor: "Cutting and tying improves precision.",
      grossMotor: "Enhances careful hand movements.",
      speech: "Teaches holiday vocabulary.",
      cognitive: "Encourages design planning.",
      socioEmotional: "Fosters giving and sharing spirit.",
      emotional: "Brings joy and excitement."
    }
  },
  {
    name: "Independence Day Flag Craft",
    age: ["5-7", "8-10"],
    interests: ["arts"],
    time: "15-30",
    season: ["independence"],
    supervision: "guided",
    description: "Create a small Indian flag with paper and colors.",
    skillsAchieved: {
      fineMotor: "Drawing and coloring improve control.",
      grossMotor: "Encourages stable posture.",
      speech: "Teaches national symbols.",
      cognitive: "Develops knowledge of history.",
      socioEmotional: "Instills pride for the nation.",
      emotional: "Promotes cultural connection."
    }
  },

  // ---- Summer Activities ----
  {
    name: "Ice Cube Painting",
    age: ["2-4", "5-7"],
    interests: ["sensory", "arts"],
    time: "15-30",
    season: ["summer"],
    supervision: "guided",
    description: "Use colored ice cubes to paint on paper.",
    skillsAchieved: {
      fineMotor: "Holding ice strengthens grip.",
      grossMotor: "Promotes coordination of hands.",
      speech: "Encourages descriptive words like cold, melt.",
      cognitive: "Teaches states of matter.",
      socioEmotional: "Brings excitement with new textures.",
      emotional: "Boosts creativity."
    }
  },
  {
    name: "DIY Lemonade Stand",
    age: ["5-7", "8-10"],
    interests: ["pretend", "sensory"],
    time: "30-60",
    season: ["summer"],
    supervision: "adult",
    description: "Make lemonade and set up a pretend stand.",
    skillsAchieved: {
      fineMotor: "Squeezing lemons improves strength.",
      grossMotor: "Encourages standing and mixing.",
      speech: "Boosts conversational skills.",
      cognitive: "Teaches basic math (measuring ingredients).",
      socioEmotional: "Promotes confidence in interaction.",
      emotional: "Builds pride in serving others."
    }
  },
  {
    name: "Paper Fan Craft",
    age: ["5-7", "8-10"],
    interests: ["arts"],
    time: "15-30",
    season: ["summer"],
    supervision: "guided",
    description: "Make decorative paper fans to beat the heat.",
    skillsAchieved: {
      fineMotor: "Folding and gluing refine precision.",
      grossMotor: "Encourages careful hand control.",
      speech: "Teaches folding terms.",
      cognitive: "Develops planning skills.",
      socioEmotional: "Builds sense of accomplishment.",
      emotional: "Joy of creating something useful."
    }
  },
  {
    name: "Outdoor Splash Game",
    age: ["2-4", "5-7"],
    interests: ["outdoor", "sensory"],
    time: "15-30",
    season: ["summer"],
    supervision: "adult",
    description: "Play with sprinklers or buckets of water outside.",
    skillsAchieved: {
      fineMotor: "Pouring and splashing strengthen hand use.",
      grossMotor: "Encourages running and movement.",
      speech: "Teaches water-related words.",
      cognitive: "Introduces cause-effect concepts.",
      socioEmotional: "Promotes group fun.",
      emotional: "Relieves heat stress."
    }
  },

  // ---- Monsoon Activities ----
  {
    name: "Paper Boat Floating",
    age: ["2-4", "5-7"],
    interests: ["arts", "outdoor"],
    time: "15-30",
    season: ["monsoon"],
    supervision: "guided",
    description: "Make paper boats and float them in puddles or tubs.",
    skillsAchieved: {
      fineMotor: "Folding paper improves hand-eye coordination.",
      grossMotor: "Encourages bending and placing boats.",
      speech: "Teaches water and shape words.",
      cognitive: "Enhances cause-effect understanding.",
      socioEmotional: "Promotes outdoor exploration.",
      emotional: "Brings excitement in rain."
    }
  },
  {
    name: "Rain Sound Dance",
    age: ["2-4", "5-7"],
    interests: ["music", "sensory"],
    time: "5-10",
    season: ["monsoon"],
    supervision: "adult",
    description: "Dance to the sound of rain or drums imitating rain.",
    skillsAchieved: {
      fineMotor: "Clapping and tapping improve rhythm.",
      grossMotor: "Encourages jumping and body movement.",
      speech: "Builds rhythm words and songs.",
      cognitive: "Develops auditory memory.",
      socioEmotional: "Promotes group joy.",
      emotional: "Releases energy."
    }
  },
  {
    name: "Nature Walk in Rain Gear",
    age: ["5-7", "8-10"],
    interests: ["nature", "outdoor"],
    time: "30-60",
    season: ["monsoon"],
    supervision: "adult",
    description: "Go on a walk wearing raincoats and boots, observing nature.",
    skillsAchieved: {
      fineMotor: "Collecting leaves enhances hand skills.",
      grossMotor: "Encourages walking and balance on wet surfaces.",
      speech: "Promotes descriptive language.",
      cognitive: "Teaches observation of nature.",
      socioEmotional: "Improves family bonding.",
      emotional: "Creates joy in exploration."
    }
  },

  // ---- Winter Activities ----
  {
    name: "Hot Chocolate Making",
    age: ["5-7", "8-10"],
    interests: ["pretend", "arts"],
    time: "30-60",
    season: ["winter"],
    supervision: "adult",
    description: "Make simple hot chocolate together.",
    skillsAchieved: {
      fineMotor: "Stirring builds coordination.",
      grossMotor: "Encourages standing balance.",
      speech: "Introduces cooking terms.",
      cognitive: "Enhances step-by-step planning.",
      socioEmotional: "Promotes family togetherness.",
      emotional: "Comforting and joyful activity."
    }
  },
  {
    name: "Winter Scarf Weaving",
    age: ["8-10"],
    interests: ["arts", "sensory"],
    time: "30-60",
    season: ["winter"],
    supervision: "guided",
    description: "Weave or braid a small scarf using fabric strips.",
    skillsAchieved: {
      fineMotor: "Braiding strengthens finger movement.",
      grossMotor: "Promotes careful hand coordination.",
      speech: "Teaches weaving-related words.",
      cognitive: "Encourages pattern creation.",
      socioEmotional: "Develops patience.",
      emotional: "Fosters pride in a handmade scarf."
    }
  },
  {
    name: "Indoor Blanket Fort",
    age: ["2-4", "5-7"],
    interests: ["pretend"],
    time: "15-30",
    season: ["winter"],
    supervision: "guided",
    description: "Build a cozy fort with blankets and pillows.",
    skillsAchieved: {
      fineMotor: "Tucking and arranging blankets improves grip.",
      grossMotor: "Enhances crawling and coordination.",
      speech: "Promotes role play and talking.",
      cognitive: "Teaches problem-solving.",
      socioEmotional: "Creates shared family time.",
      emotional: "Gives a sense of security."
    }
  },
  {
    name: "Snowflake Paper Art",
    age: ["5-7", "8-10"],
    interests: ["arts"],
    time: "15-30",
    season: ["winter"],
    supervision: "independent",
    description: "Cut and fold paper to make snowflake designs.",
    skillsAchieved: {
      fineMotor: "Cutting small shapes improves dexterity.",
      grossMotor: "Encourages careful posture.",
      speech: "Teaches design vocabulary.",
      cognitive: "Promotes symmetry understanding.",
      socioEmotional: "Encourages sharing decorations.",
      emotional: "Brings pride in craft."
    }
  }
);
activities.push(
  // ---- Advanced 8-10 years ----
  {
    name: "DIY Clay Diorama",
    age: ["8-10"],
    interests: ["arts", "sensory"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Build a miniature scene (like a park or village) using clay.",
    skillsAchieved: {
      fineMotor: "Shaping clay refines hand precision.",
      grossMotor: "Encourages seated balance and posture.",
      speech: "Promotes descriptive storytelling.",
      cognitive: "Enhances planning and visualization.",
      socioEmotional: "Encourages teamwork if done in a group.",
      emotional: "Creates pride in detailed creations."
    }
  },
  {
    name: "DIY Solar Oven",
    age: ["8-10"],
    interests: ["puzzles", "science"],
    time: "60-120",
    season: ["summer"],
    supervision: "adult",
    description: "Build a simple solar oven with a shoebox, foil, and plastic wrap.",
    skillsAchieved: {
      fineMotor: "Cutting and arranging materials improves precision.",
      grossMotor: "Involves setup and handling.",
      speech: "Teaches science terms like reflection and heat.",
      cognitive: "Develops problem-solving and innovation.",
      socioEmotional: "Encourages collaboration.",
      emotional: "Creates joy when cooking with the sun."
    }
  },
  {
    name: "Recycle Art Challenge",
    age: ["8-10"],
    interests: ["arts"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Create crafts from used bottles or newspapers.",
    skillsAchieved: {
      fineMotor: "Cutting and gluing develop fine precision.",
      grossMotor: "Encourages safe tool handling.",
      speech: "Boosts eco-related vocabulary.",
      cognitive: "Teaches resourcefulness.",
      socioEmotional: "Promotes environmental awareness.",
      emotional: "Builds satisfaction in reuse."
    }
  },
  {
    name: "Drama Skit",
    age: ["8-10"],
    interests: ["pretend"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Act out a short story or create your own skit.",
    skillsAchieved: {
      fineMotor: "Handling props builds coordination.",
      grossMotor: "Encourages expressive body movement.",
      speech: "Improves dialogue delivery and voice control.",
      cognitive: "Promotes sequencing and planning.",
      socioEmotional: "Fosters confidence and teamwork.",
      emotional: "Encourages self-expression."
    }
  },
  {
    name: "DIY Wind Chimes",
    age: ["8-10"],
    interests: ["arts", "nature"],
    time: "30-60",
    season: ["summer", "monsoon"],
    supervision: "guided",
    description: "Make wind chimes using shells, beads, or old keys.",
    skillsAchieved: {
      fineMotor: "Stringing beads refines finger dexterity.",
      grossMotor: "Encourages precise hanging and tying.",
      speech: "Teaches sound-related vocabulary.",
      cognitive: "Promotes creativity and design.",
      socioEmotional: "Connects to nature through sound.",
      emotional: "Brings joy listening to the finished product."
    }
  },
  {
    name: "Science Balloon Rocket",
    age: ["8-10"],
    interests: ["puzzles", "science"],
    time: "15-30",
    season: ["all"],
    supervision: "adult",
    description: "Make a balloon rocket using a straw, string, and tape.",
    skillsAchieved: {
      fineMotor: "Taping and tying improve coordination.",
      grossMotor: "Encourages setup and handling.",
      speech: "Explains propulsion concepts.",
      cognitive: "Promotes curiosity and experimentation.",
      socioEmotional: "Encourages shared excitement.",
      emotional: "Creates awe at results."
    }
  },
  {
    name: "Yoga Storytime",
    age: ["5-7", "8-10"],
    interests: ["outdoor", "pretend"],
    time: "15-30",
    season: ["all"],
    supervision: "guided",
    description: "Combine yoga poses with storytelling.",
    skillsAchieved: {
      fineMotor: "Hands balance during poses.",
      grossMotor: "Improves flexibility and body control.",
      speech: "Boosts storytelling and creative thinking.",
      cognitive: "Enhances focus and listening.",
      socioEmotional: "Promotes calm group participation.",
      emotional: "Improves relaxation."
    }
  },
  {
    name: "DIY Board Game",
    age: ["8-10"],
    interests: ["puzzles", "arts"],
    time: "60-120",
    season: ["all"],
    supervision: "independent",
    description: "Design and play your own board game with friends.",
    skillsAchieved: {
      fineMotor: "Drawing and cutting pieces improve precision.",
      grossMotor: "Encourages posture control.",
      speech: "Develops rule explanation skills.",
      cognitive: "Boosts problem-solving and strategy.",
      socioEmotional: "Fosters creativity and teamwork.",
      emotional: "Pride in creating a playable game."
    }
  },
  {
    name: "Puzzle Relay",
    age: ["5-7", "8-10"],
    interests: ["puzzles", "outdoor"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Solve puzzle pieces spread across a room in a race.",
    skillsAchieved: {
      fineMotor: "Picking up pieces improves hand precision.",
      grossMotor: "Encourages running and bending.",
      speech: "Improves verbal communication.",
      cognitive: "Enhances memory and logic.",
      socioEmotional: "Encourages healthy competition.",
      emotional: "Creates excitement and energy."
    }
  },
  {
    name: "Outdoor Chalk Art",
    age: ["2-4", "5-7"],
    interests: ["arts", "outdoor"],
    time: "30-60",
    season: ["summer", "winter"],
    supervision: "guided",
    description: "Draw colorful designs on pavements with chalk.",
    skillsAchieved: {
      fineMotor: "Drawing enhances finger control.",
      grossMotor: "Encourages stretching and body movement.",
      speech: "Teaches color and shape vocabulary.",
      cognitive: "Promotes spatial awareness.",
      socioEmotional: "Encourages shared creativity.",
      emotional: "Brings joy seeing their artwork."
    }
  },

  // ---- Mixed Age Activities ----
  {
    name: "Shadow Drawing",
    age: ["5-7", "8-10"],
    interests: ["arts", "outdoor"],
    time: "15-30",
    season: ["summer"],
    supervision: "guided",
    description: "Trace the shadow of toys or leaves on paper.",
    skillsAchieved: {
      fineMotor: "Tracing strengthens control.",
      grossMotor: "Encourages steady posture.",
      speech: "Introduces shape-related vocabulary.",
      cognitive: "Teaches cause-effect of sunlight.",
      socioEmotional: "Boosts interest in observation.",
      emotional: "Fun and creative outdoor activity."
    }
  },
  {
    name: "DIY Comic Strip",
    age: ["8-10"],
    interests: ["arts", "puzzles"],
    time: "60-120",
    season: ["all"],
    supervision: "independent",
    description: "Create a comic strip with characters and dialogues.",
    skillsAchieved: {
      fineMotor: "Drawing and writing improve hand precision.",
      grossMotor: "Encourages stable posture.",
      speech: "Enhances dialogue creation.",
      cognitive: "Promotes sequential story thinking.",
      socioEmotional: "Encourages creative self-expression.",
      emotional: "Provides a sense of accomplishment."
    }
  },
  {
    name: "DIY Photo Frame",
    age: ["5-7", "8-10"],
    interests: ["arts"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Make a photo frame using cardboard and decorations.",
    skillsAchieved: {
      fineMotor: "Cutting and gluing refine motor control.",
      grossMotor: "Encourages careful posture.",
      speech: "Teaches decoration terms.",
      cognitive: "Boosts creative thinking.",
      socioEmotional: "Promotes gifting and sharing.",
      emotional: "Fosters pride in handmade items."
    }
  },
  {
    name: "Outdoor Hopscotch",
    age: ["2-4", "5-7"],
    interests: ["outdoor", "sports"],
    time: "15-30",
    season: ["summer", "winter"],
    supervision: "guided",
    description: "Play hopscotch using chalk or mats.",
    skillsAchieved: {
      fineMotor: "Minimal — focus on gross motor.",
      grossMotor: "Improves jumping and balance.",
      speech: "Teaches counting.",
      cognitive: "Promotes rule-following.",
      socioEmotional: "Encourages group fun.",
      emotional: "Develops energy release and joy."
    }
  },
  {
    name: "Balloon Volleyball",
    age: ["5-7", "8-10"],
    interests: ["sports", "outdoor"],
    time: "15-30",
    season: ["all"],
    supervision: "guided",
    description: "Use a balloon to play a safe version of volleyball indoors.",
    skillsAchieved: {
      fineMotor: "Hand-eye coordination improves.",
      grossMotor: "Encourages running and jumping.",
      speech: "Boosts communication with teammates.",
      cognitive: "Enhances reaction time.",
      socioEmotional: "Encourages teamwork.",
      emotional: "Fun and high-energy play."
    }
  },
  {
    name: "Nature Art Collage",
    age: ["5-7", "8-10"],
    interests: ["arts", "nature"],
    time: "30-60",
    season: ["monsoon", "winter"],
    supervision: "guided",
    description: "Collect leaves, twigs, and flowers to make a collage.",
    skillsAchieved: {
      fineMotor: "Gluing natural items refines motor skills.",
      grossMotor: "Encourages outdoor exploration.",
      speech: "Promotes describing textures.",
      cognitive: "Teaches design and composition.",
      socioEmotional: "Encourages bonding with nature.",
      emotional: "Creates joy with natural beauty."
    }
  },
  {
    name: "Simple Science Rain Gauge",
    age: ["8-10"],
    interests: ["science", "puzzles"],
    time: "30-60",
    season: ["monsoon"],
    supervision: "adult",
    description: "Make a rain gauge with a plastic bottle to measure rainfall.",
    skillsAchieved: {
      fineMotor: "Cutting and marking improves control.",
      grossMotor: "Encourages setup tasks.",
      speech: "Teaches measurement terms.",
      cognitive: "Enhances observation and data recording.",
      socioEmotional: "Promotes curiosity and environmental awareness.",
      emotional: "Excitement in tracking results."
    }
  }
);
activities.push(
  // ---- Final Activities for Variety ----
  {
    name: "Finger Painting Fun",
    age: ["1-2", "2-4"],
    interests: ["arts", "sensory"],
    time: "15-30",
    season: ["all"],
    supervision: "adult",
    description: "Let kids paint using their fingers on large sheets of paper.",
    skillsAchieved: {
      fineMotor: "Strengthens finger muscles and control.",
      grossMotor: "Encourages arm movement.",
      speech: "Promotes color naming and talking about shapes.",
      cognitive: "Enhances creativity and pattern recognition.",
      socioEmotional: "Encourages freedom of expression.",
      emotional: "Joyful and calming sensory experience."
    }
  },
  {
    name: "Kitchen Role Play",
    age: ["2-4", "5-7"],
    interests: ["pretend"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Pretend cooking with toy utensils or safe kitchen items.",
    skillsAchieved: {
      fineMotor: "Improves pouring and stirring skills.",
      grossMotor: "Encourages standing balance.",
      speech: "Teaches cooking vocabulary.",
      cognitive: "Boosts sequencing (first add, then stir).",
      socioEmotional: "Encourages teamwork and sharing.",
      emotional: "Fun and engaging pretend play."
    }
  },
  {
    name: "Sandpit Construction",
    age: ["2-4", "5-7"],
    interests: ["outdoor", "building"],
    time: "30-60",
    season: ["summer", "monsoon"],
    supervision: "adult",
    description: "Build shapes or structures using sand and molds.",
    skillsAchieved: {
      fineMotor: "Scooping and shaping strengthen control.",
      grossMotor: "Encourages whole-arm coordination.",
      speech: "Teaches shape and structure terms.",
      cognitive: "Enhances creativity and planning.",
      socioEmotional: "Encourages cooperative play.",
      emotional: "Brings joy in tactile exploration."
    }
  },
  {
    name: "Indoor Scavenger Hunt",
    age: ["5-7", "8-10"],
    interests: ["puzzles"],
    time: "30-60",
    season: ["all"],
    supervision: "guided",
    description: "Hide household objects for kids to find based on clues.",
    skillsAchieved: {
      fineMotor: "Picking up objects builds dexterity.",
      grossMotor: "Encourages moving around the house.",
      speech: "Boosts understanding of descriptive clues.",
      cognitive: "Enhances memory and logical thinking.",
      socioEmotional: "Promotes teamwork and excitement.",
      emotional: "Creates thrill and fun indoors."
    }
  },
  {
    name: "Musical Chair Twist",
    age: ["5-7", "8-10"],
    interests: ["music", "outdoor"],
    time: "15-30",
    season: ["all"],
    supervision: "guided",
    description: "Play musical chairs with fun variations like dance moves.",
    skillsAchieved: {
      fineMotor: "Clapping and tapping enhance rhythm.",
      grossMotor: "Encourages running and balance.",
      speech: "Promotes listening and response skills.",
      cognitive: "Develops quick decision-making.",
      socioEmotional: "Fosters group play and bonding.",
      emotional: "High-energy fun activity."
    }
  },
  {
    name: "DIY Bookmark Craft",
    age: ["5-7", "8-10"],
    interests: ["arts"],
    time: "15-30",
    season: ["all"],
    supervision: "independent",
    description: "Make bookmarks with paper, ribbons, or colors.",
    skillsAchieved: {
      fineMotor: "Cutting and coloring refine control.",
      grossMotor: "Encourages careful posture.",
      speech: "Teaches decorative words.",
      cognitive: "Promotes design creativity.",
      socioEmotional: "Boosts gifting and sharing habits.",
      emotional: "Pride in finished bookmarks."
    }
  },
  {
    name: "Balloon Painting",
    age: ["2-4", "5-7"],
    interests: ["arts", "sensory"],
    time: "15-30",
    season: ["all"],
    supervision: "adult",
    description: "Dip balloons in paint to create patterns.",
    skillsAchieved: {
      fineMotor: "Holding balloons strengthens grip.",
      grossMotor: "Encourages arm movement.",
      speech: "Teaches shape and color terms.",
      cognitive: "Explores cause-effect of pressure.",
      socioEmotional: "Fosters joy in mess-free creativity.",
      emotional: "Stimulates sensory curiosity."
    }
  },
  {
    name: "Math Dice Game",
    age: ["5-7", "8-10"],
    interests: ["puzzles"],
    time: "15-30",
    season: ["all"],
    supervision: "independent",
    description: "Roll dice and create math challenges with the numbers.",
    skillsAchieved: {
      fineMotor: "Rolling and picking dice enhance control.",
      grossMotor: "Minimal gross motor involvement.",
      speech: "Encourages number vocabulary.",
      cognitive: "Promotes arithmetic thinking.",
      socioEmotional: "Encourages self-competition.",
      emotional: "Builds confidence solving problems."
    }
  },
  {
    name: "Story Dice",
    age: ["5-7", "8-10"],
    interests: ["puzzles", "pretend"],
    time: "15-30",
    season: ["all"],
    supervision: "independent",
    description: "Roll picture dice and create a story with the images.",
    skillsAchieved: {
      fineMotor: "Handling dice improves hand control.",
      grossMotor: "Encourages focus on sitting posture.",
      speech: "Enhances storytelling.",
      cognitive: "Boosts imagination and sequencing.",
      socioEmotional: "Promotes creative group sharing.",
      emotional: "Encourages expression and laughter."
    }
  }
);

// ---- Filtering Logic with Closest Matches ----
function filterActivities() {
  const age = document.getElementById('age').value;
  const interest = document.getElementById('interests').value;
  const time = document.getElementById('time').value;
  const season = document.getElementById('season').value;
  const supervision = document.getElementById('supervision').value;

  // 1. Exact matches
  let filtered = activities.filter(activity =>
    (age === '' || activity.age.includes(age)) &&
    (interest === '' || activity.interests.includes(interest)) &&
    (time === '' || activity.time === time) &&
    (season === '' || activity.season.includes(season)) &&
    (supervision === '' || activity.supervision === supervision)
  );

  const noResultsMsg = document.getElementById('no-results');

  // 2. Closest matches if no exact match
  if (filtered.length === 0) {
    noResultsMsg.style.display = 'block';
    noResultsMsg.innerText = "No exact matches found. Showing closest matches for your selection.";
    filtered = activities.filter(activity =>
      (age === '' || activity.age.includes(age)) &&
      (interest === '' || activity.interests.includes(interest))
    );
  } else {
    noResultsMsg.style.display = 'none';
  }

  // 3. If still no matches
  if (filtered.length === 0) {
    noResultsMsg.style.display = 'block';
    noResultsMsg.innerText = "No activities found. Try changing filters.";
  }

  currentPage = 0;
  displayActivities(filtered.sort(() => Math.random() - 0.5)); // Shuffle results
}
function displayActivities(list) {
  const container = document.getElementById('activities-list');
  container.innerHTML = ""; // Clear old content

  if (list.length === 0) {
    container.innerHTML = "<p>No activities available.</p>";
    return;
  }

  list.forEach(activity => {
    const card = document.createElement('div');
    card.className = "activity-card";
    card.innerHTML = `
      <h3>${activity.name}</h3>
      <p>${activity.description}</p>
      <p><strong>Age:</strong> ${activity.age.join(", ")}</p>
      <p><strong>Skills:</strong> ${activity.skillsAchieved.fineMotor}, ${activity.skillsAchieved.cognitive}</p>
    `;
    container.appendChild(card);
  });
}

// Display & pagination functions remain unchanged
document.addEventListener('DOMContentLoaded', () => {
  displayActivities(activities); // Show all activities initially
  document.getElementById('filter-btn').addEventListener('click', filterActivities);
});

