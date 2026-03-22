import { Question } from "@/types/Question";

export const questionsByWeek: { [week: string]: Question[] } = {
  /**week0: [
    {
      question: "What is Psychology?",
      options: ["A Science subject", "Is objective perception", "An art of living", "A thought process", "A study of cognitive processes & behavior"],
      answer: "A study of cognitive processes & behavior"
    },
    {
      question: "A broad field of study that explores a variety of questions about thoughts, feelings and actions is ______?",
      options: ["Society", "Globalization", "Psychology", "Social Science", "Human Development"],
      answer: "Psychology"
    },
    {
      question: "A systematic assessment that provides information on political views, consumer buying habits, and many other topics is called ______?",
      options: ["Standardized test", "Projects", "Experiments", "Survey", "Psychological tests"],
      answer: "Survey"
    },
    {
      question: "The word Psyche means ______?",
      options: ["Body or physique", "Mind or soul", "Science & spirituality", "Mental health", "Neuropsychology"],
      answer: "Mind or soul"
    },
    {
      question: "Who established psychology laboratory in Germany?",
      options: ["B.F. Skinner", "J. Thorndike", "Sigmund Freud", "David Kolb", "Wilhelm Wundt"],
      answer: "Wilhelm Wundt"
    },
    {
      question: 'To help people to function effectively and fulfill their own unique potential is the aim of ______?',
      options: ["Humanistic psychology", "Social Psychiatry", "Philosophy", "Development studies", "Sustainable development"],
      answer: "Humanistic psychology"
    },
    {
      question: "Behaviorists use a learning process to change abnormal behavior is called ______?",
      options: ["Rationalism", "Experiential intervention", "Gestalt mechanism", "Hypotheses verification", "Conditioning"],
      answer: "Conditioning"
    },
    {
      question: "The study of changes in behavior during life time is called ______?",
      options: ["Behaviorism", "Individual difference", "Developmental Psychology", "Maturational theory", "Genetics or Heredity"],
      answer: "Developmental Psychology"
    },
    {
      question: "The study of differences and similarities in the behavior of animals of different species is called ______?",
      options: ["Sociology", "Social work", "Rehabilitation studies", "Comparative Psychology", "Cultural Psychology"],
      answer: "Comparative Psychology"
    }
],
week1: [
  {
    question: "Which of the following is true regarding learning in psychology?",
    options: ["The psychology of learning focuses on how people learn and how they interact with the environments in which they have not learnt", "Learning does not involve any changes in the organism", "Learning is a relatively temporary change in behavior", "none of the given"],
    answer: "none of the given"
  },
  {
    question: "In order to say that learning has occurred, a/an ___ must occur during the lifetime of the organism.",
    options: ["hidden change in behavior", "small change in personality", "visible change in emotions", "observable change in behavior"],
    answer: "observable change in behavior"
  },
  {
    question: "Learning changes the ___ through the process of continuous interactions between the learner and the external environment.",
    options: ["physical structure of the brain", "chemical structure of neurons", "physical structure of the heart", "chemical structure of the spinal cord"],
    answer: "physical structure of the brain"
  },
  {
    question: "Watson, one of the first psychologists to study learning and behavior, is known for the ____.",
    options: ["Little Albert experiment", "Little John experiment", "Little Robert experiment", "Little Johnny experiment"],
    answer: "Little Albert experiment"
  },
  {
    question: "Which of the following is not explored and described by the psychology of learning?",
    options: ["principles of motivation", "principles of forgetting", "principles of genetic disorders", "principles of memory", "principles of retention"],
    answer: "principles of genetic disorders"
  },
  {
    question: "The state of ___ may be valuable at the start of a learning experience.",
    options: ["conscious incompetence", "unconscious incompetence", "conscious over-competence", "unconscious over-competence"],
    answer: "conscious incompetence"
  },
  {
    question: "___ is the decrease in the response that an organism gives to a stimulus to which it is exposed in numerous trials or occasions.",
    options: ["Habituation", "Sensitization", "Forgetting", "Meaningful learning"],
    answer: "Habituation"
  },
  {
    question: "Cooperative learning is shaped by three crucial elements. Which of the following is one of them?",
    options: ["formation of heterogeneous groups", "positive interdependence", "individual responsibility", "all of the given"],
    answer: "all of the given"
  },
  {
    question: "Which of the following psychologists is an important contributor to the concept of observational learning?",
    options: ["Watson", "Dewey", "Bruner", "Bandura"],
    answer: "Bandura"
  },
  {
    question: "Which of the following is not considered a pioneer of the behaviorism school of thought in psychology?",
    options: ["Watson", "Skinner", "Freud", "Pavlov"],
    answer: "Freud"
  }
],
week2: [
  {
    question: "___ is known as the father of modern psychology.",
    options: ["A. Sigmund Freud", "B. Wilhelm Wundt", "C. John Watson", "D. Lev Vygotsky"],
    answer: "B. Wilhelm Wundt"
  },
  {
    question: "Cognitivists objected to behaviorists because they felt that behaviorists ignored the important role of ___.",
    options: ["A. genetics", "B. emotions", "C. thinking", "D. stimulus reaction"],
    answer: "C. thinking"
  },
  {
    question: "___ is viewed as the mainstream for all research on learning designs.",
    options: ["A. Psychoanalysis", "B. Positive psychology", "C. Cognitivism", "D. Evolutionary psychology"],
    answer: "C. Cognitivism"
  },
  {
    question: "___ is a perspective in psychology focusing on the belief that human consciousness cannot be broken down into its elements and is based on the concept of a ‘whole’.",
    options: ["A. Cognitivism", "B. Behaviorism", "C. Gestalt psychology", "D. Positive psychology"],
    answer: "C. Gestalt psychology"
  },
  {
    question: "Theory of multiple intelligences is given by ___.",
    options: ["A. Howard Gardner", "B. Edward C. Tolman", "C. German Gestalt", "D. Robert J. Sternberg"],
    answer: "A. Howard Gardner"
  },
  {
    question: "The general intelligence factor, also known as g, is what intelligence tests typically measure and refers only to ___.",
    options: ["A. academic", "B. practical", "C. linguistic", "D. kinesthetic"],
    answer: "A. academic"
  },
  {
    question: "Cognitive evaluation for planning, attention, simultaneous, and successive processing of individuals can be done through CAS based on PASS theory. CAS here stands for ___.",
    options: ["A. Cognitive Achievement System", "B. Cognitive Ability System", "C. Cognitive Appraisal System", "D. Cognitive Assessment System"],
    answer: "D. Cognitive Assessment System"
  },
  {
    question: "BBL is a new science that shapes the learning process and is an approach that is based on the structure and function of the human brain. BBL stands for ___.",
    options: ["A. Biological based learning", "B. Brain based learning", "C. Biological battery learning", "D. Brain biology learning"],
    answer: "B. Brain based learning"
  },
  {
    question: "Gagne’s Conditions of Learning is also known as ___ Events of Instruction.",
    options: ["A. nine", "B. five", "C. ten", "D. seven"],
    answer: "A. nine"
  },
  {
    question: "Which of the following is not a type of constructivism?",
    options: ["A. biological", "B. cognitive", "C. social", "D. radical"],
    answer: "A. biological"
  }
],
week3: [
  {
    question: "Which of the following is not one of the three major processes involved in memory?",
    options: ["encoding", "retrieval", "storage", "imagination"],
    answer: "imagination"
  },
  {
    question: "___ refers to changing information into a usable form.",
    options: ["Storage", "Recall", "Encoding", "Recollection", "Forgetting"],
    answer: "Encoding"
  },
  {
    question: "___ refers to a range of mental processes relating to the acquisition, storage, manipulation and retrieval of information.",
    options: ["Cognition", "Construction", "Encoding", "Thinking"],
    answer: "Cognition"
  },
  {
    question: "Which of the following is a challenge faced by people with social cognition deficits?",
    options: ["talking too much to people", "responding too well to people", "difficulty in reading facial expressions", "difficulty in getting good academic scores"],
    answer: "difficulty in reading facial expressions"
  },
  {
    question: "Which of the following is not true about the assumptions underlying the Information Processing View of Learning?",
    options: ["Information processing is analogous to computer processing", "The human information processing system is interactive", "There is no limit on how much information can be processed at each stage", "Information is processed in steps"],
    answer: "There is no limit on how much information can be processed at each stage"
  },
  {
    question: "___ prevents the quick disappearance of information from short term memory.",
    options: ["Rehearsal", "Encoding", "Retrieval", "None of the given"],
    answer: "Rehearsal"
  },
  {
    question: "The Multicomponent Model of Working Memory is largely attributed to the work by ___",
    options: ["Atkinson & Shiffrin", "Baddeley", "Piaget", "Craik & Lockhart"],
    answer: "Baddeley"
  },
  {
    question: "___ memory refers to the events that can be reported from a person’s life.",
    options: ["Episodic", "Semantic", "Procedural", "None of the given"],
    answer: "Episodic"
  },
  {
    question: "The memory capacity depends on which of the following?",
    options: ["complexity of the synapses", "spatial and temporal correlations between memories", "specific way memories are retrieved", "all of the given"],
    answer: "all of the given"
  },
  {
    question: "Which of the following is not one of the three measurable dimensions of cognitive load?",
    options: ["mental effort", "mental load", "physical effort", "performance"],
    answer: "physical effort"
  }
],
week4: [
  {
    question: "The three main types of thinking in psychology include the following except ___.",
    options: ["symbolic", "creative", "divergent", "convergent"],
    answer: "convergent"
  },
  {
    question: "Young children engaging in imaginative play often engage in ___ thinking.",
    options: ["creative", "divergent", "symbolic", "convergent"],
    answer: "symbolic"
  },
  {
    question: "Which of the following is a way in which we think?",
    options: ["in verbal symbols", "in mathematical symbols", "in gestures and movements", "all of the given"],
    answer: "all of the given"
  },
  {
    question: "People experience the ___ experience when they find the solution to a problem suddenly that had been in their mind for hours or days, late.",
    options: ["‘’oh no’’", "‘’wow’’", "“aha”", "none of the given"],
    answer: "“aha”"
  },
  {
    question: "___ knowledge refers to knowledge of terminology and specific details.",
    options: ["factual", "conceptual", "procedural", "metacognitive"],
    answer: "factual"
  },
  {
    question: "Which of the following is not true about metacognition?",
    options: ["allows people to be dependent on others for their learning", "often referred to as “thinking about thinking”", "is crucial for efficient independent learning because it fosters self-reflection", "is a regulatory system that helps a person understand and control his or her own cognitive performance"],
    answer: "allows people to be dependent on others for their learning"
  },
  {
    question: "Which of the following is not an effective way to develop reflective thinking?",
    options: ["asking questions", "self-questioning", "negotiated learning", "avoiding reflective discussions"],
    answer: "avoiding reflective discussions"
  },
  {
    question: "Which of the following is not true about creative thinking?",
    options: ["It is the ability to consider something in a new way", "It is not a skill anybody can develop", "It is the process of nurturing our imagination", "It is all about developing innovative solutions to problems."],
    answer: "It is not a skill anybody can develop"
  },
  {
    question: "The ___ stage of the creative thinking process refers to the ‘’eureka’’ moment.",
    options: ["insight", "incubation", "evaluation", "preparation", "elaboration"],
    answer: "insight"
  },
  {
    question: "In a concept map, two nodes connected with a labeled arrow are called a ___.",
    options: ["preposition", "nodal link", "schema", "proposition"],
    answer: "proposition"
  }
],

week5: [
  {
    question: "Which of the following is not a causal factor for extrinsic motivation?",
    options: ["rewards", "social pressure", "curiosity", "financial gain", "punishment"],
    answer: "curiosity"
  },
  {
    question: "___ refers to realizing the value of developing a skill/behavior.",
    options: ["Amotivation", "Identified regulation", "Introjected regulation", "Motivational learning"],
    answer: "Identified regulation"
  },
  {
    question: "Drive theory is a psychological concept that attempts to explain why and how people behave in the ways they do. It is given by ___.",
    options: ["Murray", "Hull", "Atkinson", "Zajonc"],
    answer: "Hull"
  },
  {
    question: "___ theory suggests that people are motivated to take action in order to receive a reward and is based on the idea of operant conditioning.",
    options: ["Incentive", "Arousal", "Goal setting", "None of the given"],
    answer: "Incentive"
  },
  {
    question: "The Yerkes Dodson law gives ___ relationship between arousal and performance.",
    options: ["inverted U shaped", "linear", "no", "parabolic"],
    answer: "inverted U shaped"
  },
  {
    question: "The expectancy theory is based on the assumption that ___.",
    options: ["our behavior is based on making a conscious choice from a set of possible alternative behaviors", "individuals are motivated to seek out stimulation when they have low levels of arousal, but will become bored and unmotivated when they become too highly aroused", "biological needs produce unpleasant states of arousal which people seek to reduce", "none of the given"],
    answer: "our behavior is based on making a conscious choice from a set of possible alternative behaviors"
  },
  {
    question: "Valence, or the perceived value of reward, would have ___ value if one wants to avoid that reward.",
    options: ["one", "zero", "positive", "negative"],
    answer: "negative"
  },
  {
    question: "Which of the following is not true about Maslow’s need hierarchy?",
    options: ["Needs lower down in the hierarchy must be satisfied before individuals can attend to higher needs", "Safety needs lie at the bottom of the pyramid", "Deficiency needs are concerned with basic survival", "Growth needs are more psychological needs", "Motivation is seen as being not just concerned with tension reduction and survival but also with human growth and development"],
    answer: "Safety needs lie at the bottom of the pyramid"
  },
  {
    question: "Self-Determination Theory differentiates between ___ and ___ motivation types.",
    options: ["autonomous and controlled", "autonomous and intrinsic", "controlled and extrinsic", "introjected and extrinsic", "introjected and intrinsic"],
    answer: "autonomous and controlled"
  },
  {
    question: "In achievement motivation, the motive to avoid failure often consists of ___.",
    options: ["worries about the consequences of failing", "self-criticism", "accelerated heart rate", "all of the given"],
    answer: "all of the given"
  }
],

week6: [
  {
    question: "Daniel Goleman’s work in emotional intelligence (EI) has outlined ___ main areas of this intelligence.",
    options: ["three", "four", "five", "six"],
    answer: "five"
  },
  {
    question: "Which of the following statements is not true?",
    options: ["Experts even suggested that emotional intelligence/ EQ, is more important than IQ/academic intelligence", "An individual with high EI is not only aware of what emotions they are feeling but can put words to their feelings", "Studies show that EI does not impact aspects of one’s life like academic performance", "Peter Salovey and John Mayer were the first to develop a psychological theory of emotional intelligence."],
    answer: "Studies show that EI does not impact aspects of one’s life like academic performance"
  },
  {
    question: "___ refers to how tuned to the emotions of others a person is.",
    options: ["Empathy", "Motivation", "Emotional literacy", "Self regulation"],
    answer: "Empathy"
  },
  {
    question: "The following are advantages of developing emotional intelligence, except ___.",
    options: ["Being able to accept criticism and responsibility", "Knowing why we do the things we do", "Being able to say no when we need to", "Being able to hide our feelings from others"],
    answer: "Being able to hide our feelings from others"
  },
  {
    question: "The Pyramid of Emotional Intelligence is also known as the ___ layer model.",
    options: ["nine", "five", "seven", "eleven"],
    answer: "nine"
  },
  {
    question: "EI can be developed at any stage of life through self-effort & training.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "When someone engages in___, they can regulate their emotions to ensure that others feel more comfortable.",
    options: ["emotional exhaustion", "emotional literacy", "empathy", "emotional labor"],
    answer: "emotional labor"
  },
  {
    question: "The management of emotions is ___.",
    options: ["a private act", "influenced by cultural and social norms", "done by actively shaping and directing feelings", "all of the given"],
    answer: "all of the given"
  },
  {
    question: "___ is seen when workers change their outward emotional expressions but do not attempt to feel the emotions that they are displaying.",
    options: ["deep acting", "emotional contagion", "surface acting", "emotional literacy"],
    answer: "surface acting"
  },
  {
    question: "The concept of emotional contagion can be linked to biological basis of ___.",
    options: ["emotional neurons", "mirror neurons", "contagious neurons", "None of the given"],
    answer: "mirror neurons"
  }
],
week7: [
  {
    question: "___ defined learning as ‘a change in human disposition or capacity that persists over a period of time and is not simply ascribable to processes of growth.",
    options: ["Bloom", "Dewey", "Gagne", "Kolb"],
    answer: "Gagne"
  },
  {
    question: "The principles of contiguity (how close in time two events must be for a bond to be formed) and reinforcement (any means of increasing the likelihood that an event will be repeated) are central to explaining the learning process in the ___ orientation to learning.",
    options: ["Cognitive", "Humanistic", "Social and social-constructivist", "Behaviorist"],
    answer: "Behaviorist"
  },
  {
    question: "Which of the following is not true about humanistic orientations to learning?",
    options: ["It has a quality of personal involvement", "It is self-initiated", "It is pervasive", "The locus of evaluation resides definitely outside the learner"],
    answer: "The locus of evaluation resides definitely outside the learner"
  },
  {
    question: "The concept of situated learning is studied under which school of thought of learning theories?",
    options: ["behaviorist", "cognitive", "humanistic", "social"],
    answer: "social"
  },
  {
    question: "Which of the following is not one of the individual variable factors affecting learning?",
    options: ["ergonomics", "interest", "endurance", "ego", "perception"],
    answer: "ergonomics"
  },
  {
    question: "___ learners prefer maps, graphs, diagrams and charts to learn.",
    options: ["Visual", "Solitary", "Kinesthetic", "Auditory"],
    answer: "Visual"
  },
  {
    question: "___ learners search for connections, causes, patterns, and results in their learning.",
    options: ["linguistic", "kinesthetic", "visual", "logical"],
    answer: "logical"
  },
  {
    question: "Effective instruction is ___.",
    options: ["interactive, generative and dynamic", "designed to accommodate student learning needs and styles", "guided by general pedagogical approaches", "eclectic", "all of the given"],
    answer: "all of the given"
  },
  {
    question: "___ role of the trainer consists of transmitting information about a subject to the audience.",
    options: ["expert", "instructor", "facilitator", "co-learner"],
    answer: "expert"
  },
  {
    question: "Which of the following is not a component of the ADDIE model?",
    options: ["analysis", "integration", "development", "evaluation"],
    answer: "integration"
  }
],

week8: [
  {
    question: "The word ‘pedagogy’ has been derived from the Greek word “pedagogue” which stands for___.",
    options: ["the science of learning", "the art of observing", "the art of teaching children", "none of the given"],
    answer: "the art of teaching children"
  },
  {
    question: "Which of the following statements is not true about pedagogy?",
    options: ["It assists both students and teachers in gaining an in-depth understanding of fundamental material.", "It is about suppressing responses from learners", "It enhances the student-teacher relationship", "It enables teachers to influence student learning with an intention to capture the attention of students"],
    answer: "It is about suppressing responses from learners"
  },
  {
    question: "Which of the following is not a pedagogical approach in teaching?",
    options: ["reflective", "collective", "collaborative", "integrative"],
    answer: "collective"
  },
  {
    question: "___ is a form of active learning that starts by posing questions, problems or scenarios rather than simply presenting established facts or portraying a smooth path to knowledge.",
    options: ["constructivist learning", "passive learning", "inquiry-based learning", "metalearning"],
    answer: "inquiry-based learning"
  },
  {
    question: "Which of the following is a primary role of the instructor in experiential learning?",
    options: ["posing problems", "providing solutions", "blurring boundaries", "none of the given"],
    answer: "posing problems"
  },
  {
    question: "The ‘’what is important?” stage of the experiential learning process refers to the ___ stage.",
    options: ["processing", "generalizing", "application", "reflecting"],
    answer: "processing"
  },
  {
    question: "The ___ learning style as given by Kolb suggests that these individuals prefer to look at things from multiple perspectives and prefer to watch rather than do.",
    options: ["Assimilating", "Accommodating", "Converging", "Diverging"],
    answer: "Diverging"
  },
  {
    question: "The following factors influence preferred learning styles except___",
    options: ["career choice", "personality", "educational specialization", "genes"],
    answer: "genes"
  },
  {
    question: "Integrative learning often involves three steps. Which of the following is not one of them?",
    options: ["collaboration", "integrative enquiry", "application and transfer", "reflection"],
    answer: "collaboration"
  },
  {
    question: "In transformative learning, ___ includes a student’s habit of the mind, as well as a personal point of view.",
    options: ["intentional content", "frame of reference", "frame of context", "none of the given"],
    answer: "frame of reference"
  }
],

week9: [
  {
    question: "E-learning implies ___ learning.",
    options: ["mentor assisted", "teacher enhanced", "computer enhanced", "electricity enhanced"],
    answer: "computer enhanced"
  },
  {
    question: "___ type of e-learning is highly interactive, which includes graphics, video, audio and games too.",
    options: ["text driven", "simulation", "interactive", "none of the given"],
    answer: "simulation"
  },
  {
    question: "Which of the following is not true about e-learning?",
    options: ["one can have access to the content any number of times", "it helps in developing new policies", "it saves time for the students, they don’t need to travel to the institution", "it is targeted to cater to the needs of students specifically"],
    answer: "it is targeted to cater to the needs of students specifically"
  },
  {
    question: "As learning depends on the learner’s prior experience, and no two learners will have the same experiences, new information will be dealt with in different ways by different learners. This statement means that learning is ___.",
    options: ["goal-oriented", "dependent on self-awareness", "social", "idiosyncratic"],
    answer: "idiosyncratic"
  },
  {
    question: "Which of the following is a way of facilitating the social dimension to learning?",
    options: ["e-mails", "online discussions", "virtual communities", "all of the given"],
    answer: "all of the given"
  },
  {
    question: "We can say that when we're good at something after practice, it's usually because ___",
    options: ["our brain has become automated", "our brain has released better chemicals", "our brain has made stronger connections with this information", "our brain has prioritized this information over others"],
    answer: "our brain has made stronger connections with this information"
  },
  {
    question: "Learners may multitask when engaging in an online course, which could be resulting in ___.",
    options: ["hyperfocus", "better retrieval", "shorter attention spans", "None of the given"],
    answer: "shorter attention spans"
  },
  {
    question: "The cognitive load theory suggests that when we overload our___, we are unable to acquire and process new information.",
    options: ["sensory memory", "encoding", "retrieval", "working memory"],
    answer: "working memory"
  },
  {
    question: "There are five critical aspects of psychology which are needed to guarantee the implementation of successful eLearning. Which of the following is not one of them?",
    options: ["evolution", "self-discipline", "stress", "emotion"],
    answer: "evolution"
  },
  {
    question: "___ is a learning tool, because the explicit navigation of the topic and association types might enable meaningful learning and it helps to reduce the cognitive loads caused by E-learning content and constant attention.",
    options: ["topic map", "schema", "prototype", "instructional map"],
    answer: "topic map"
  }
],
week10: [
  {
    question: "The Readiness Model for New Normal in Education designed by many educational institutions caters to the following components except ___.",
    options: ["parent readiness", "learner readiness", "society readiness", "teacher readiness"],
    answer: "society readiness"
  },
  {
    question: "In 2018, Global Education and Skills Forum noted that the ‘future’ teacher would need some skills to thrive in the 21st century. Which of the following is not one of them?",
    options: ["Being a facilitator", "Internal focus", "Strong social skills", "Data analysis"],
    answer: "Internal focus"
  },
  {
    question: "Which of the following impacts student learning?",
    options: ["Their perception about their intelligence and ability", "Prior knowledge", "Their context", "All of the given"],
    answer: "All of the given"
  },
  {
    question: "Which of the following statements is not true?",
    options: ["Techniques linked to self-control contribute to more effective learning if taught and applied correctly", "Student creativity can be encouraged.", "Clear, explanatory and timely feedback to students is important for learning", "Students tend to enjoy learning and have better outcomes when their motivation is more extrinsic than intrinsic"],
    answer: "Students tend to enjoy learning and have better outcomes when their motivation is more extrinsic than intrinsic"
  },
  {
    question: "Both formative and summative assessment are important and useful, provided they are applied and interpreted appropriately.",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Individual differences are the unique ways each human being differs from another. It can be handled through using different techniques. Which of the following is not one of them?",
    options: ["observation", "sociograms", "rating scales", "ignorance"],
    answer: "ignorance"
  },
  {
    question: "Clapping is an example of ___ reward.",
    options: ["tangible", "financial", "social", "none of the given"],
    answer: "social"
  },
  {
    question: "___ is the process of judging the value or worth of an individual's achievements or characteristics.",
    options: ["Goal-setting", "Classroom conduct", "Formation", "Evaluation"],
    answer: "Evaluation"
  },
  {
    question: "___ refers to the frequent, interactive assessment of student progress to identify learning needs and shape teaching.",
    options: ["Formative assessment", "Summative assessment", "Collective assessment", "None of the given"],
    answer: "Formative assessment"
  },
  {
    question: "‘’That is an intelligent response, well done’’ is an example of a ___ level feedback.",
    options: ["Task-level", "Process-level", "Facilitator-level", "Personal-level"],
    answer: "Personal-level"
  }
],

week11: [
  {
    question: "___ refers to a complex set of mental abilities underlying social stimulus perception, processing, interpretation, and response.",
    options: ["social schema", "emotional cognition", "social cognition", "emotional schema"],
    answer: "social cognition"
  },
  {
    question: "Piaget’s conception of ___ views information inconsistent with an individual’s cognitive structures as an initiator for assimilation and accommodation processes.",
    options: ["assimilation and accommodation schema", "cognitive determinism", "reciprocal dynamism", "cognitive conflict"],
    answer: "cognitive conflict"
  },
  {
    question: "During the earliest stages of development, children see the world from their own perspective and struggle to think about how other people may view the world. This highlights that initially, children are ___.",
    options: ["egocentric", "idiosyncratic", "egoistic", "egomaniac"],
    answer: "egocentric"
  },
  {
    question: "Which of the following is false regarding social cognition?",
    options: ["It develops in childhood and adolescence", "When looking at a social situation, any two people may have wildly different interpretations.", "It includes complex abilities like theory of mind", "There are no cultural differences in social cognition"],
    answer: "There are no cultural differences in social cognition"
  },
  {
    question: "Social processes influence how information is selected, organized, integrated, and retrieved. This highlights the ___ hypothesis.",
    options: ["social cue", "cognitive influence", "schema influence", "social mediation"],
    answer: "cognitive influence"
  },
  {
    question: "The social cognitive theory is developed by ___.",
    options: ["Watson", "Piaget", "Bandura", "Freud"],
    answer: "Bandura"
  },
  {
    question: "___ refers to the internal or external responses to a person's behavior that affect the likelihood of continuing or discontinuing the behavior.",
    options: ["modeling", "schemas", "awards", "reinforcements"],
    answer: "reinforcements"
  },
  {
    question: "Observational learning occurs through the sequence of ___ number of processes. One of those is attentional processes.",
    options: ["four", "five", "six", "seven"],
    answer: "four"
  },
  {
    question: "The ___ model of observational learning involves an actual individual demonstrating or acting out a behavior.",
    options: ["live", "symbolic", "verbal instructional", "contextual"],
    answer: "live"
  },
  {
    question: "___ suggests that our behavior, personal factors, and environmental factors all influence each other.",
    options: ["environmental dynamism", "reciprocal determinism", "collective determinism", "reciprocal dynamism"],
    answer: "reciprocal determinism"
  }
],
week12: [
  {
    question: "Sustainable development is ___.",
    options: ["unidimensional", "bidimensional", "multidimensional", "none of the given"],
    answer: "multidimensional"
  },
  {
    question: "Revenue generation and resource use are components of ___.",
    options: ["environmental sustainability", "social sustainability", "financial sustainability", "economic sustainability"],
    answer: "economic sustainability"
  },
  {
    question: "___ as a practice is defined as solving social problems using market-based methods and can create both economic and social value.",
    options: ["social entrepreneurship", "economic entrepreneurship", "social marketing", "social economics"],
    answer: "social entrepreneurship"
  },
  {
    question: "In the context of sustainability, HESI highlights the role of ___ in building a better world for current and future generations.",
    options: ["Financial stability", "Higher education", "Climate change", "Natural resources"],
    answer: "Higher education"
  },
  {
    question: "The following are the outcome targets of SDG 4, except ___.",
    options: ["Relevant skills for decent work", "Gender equality and inclusion", "Privatization of institutes", "Universal youth literacy"],
    answer: "Privatization of institutes"
  },
  {
    question: "One of the means to implement SDG 4 is exponentially increasing the number of scholarships available to developing contexts.",
    options: ["False", "True"],
    answer: "True"
  },
  {
    question: "Successful implementation of ESD requires a shift in focus from ___.",
    options: ["feeling to thinking", "learning to teaching", "teaching to feeling", "teaching to learning"],
    answer: "teaching to learning"
  },
  {
    question: "___ refers to the ability to understand and evaluate multiple possible futures to deal with risks and changes.",
    options: ["anticipatory competency", "collaboration competency", "normative competency", "systems thinking competency"],
    answer: "anticipatory competency"
  },
  {
    question: "Fostering competencies requires integration of three interrelated dimensions of learning as described by UNESCO. Which of the following is not one of them?",
    options: ["biological learning", "cognitive learning", "behavioral learning", "social and emotional learning"],
    answer: "biological learning"
  },
  {
    question: "GAP in the context of Education for Sustainable Development stands for ___.",
    options: ["General Activity Priority", "Global Action Programme", "Global Achievement Programme", "General Awareness Programme"],
    answer: "Global Action Programme"
  }
],**/
  week1: [
  {
    "question": "Which one of the following is not the theory of emotion?",
    "options": ["James-Lange Theory", "Cannon-Bard theory", "Schachter and Singer theory", "Coding theory"],
    "answer": "Coding theory"
  },
  {
    "question": "Wisdom deals with important or difficult matters of life and the human condition.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "William Stern gave the concept of",
    "options": ["EQ", "CAS", "IQ", "Both EQ and IQ"],
    "answer": "IQ"
  },
  {
    "question": "In the full form of 'CAS', 'S' stands for",
    "options": ["Successive", "System", "Simultaneous", "Social"],
    "answer": "System"
  },
  {
    "question": "Robert Sternberg gave the _________ process model",
    "options": ["Triarchic", "Bi-factor", "Multifactor", "Two-factor"],
    "answer": "Triarchic"
  },
  {
    "question": "Processing is pragmatic intelligence",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "Wisdom is expressed in terms of care, concern and commitment",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "'Arithmetic facts' is an example of",
    "options": ["Crystallized Intelligence", "Broad Visual Perception", "Broad retrieval ability", "Fluid Intelligence"],
    "answer": "Crystallized Intelligence"
  },
  {
    "question": "The ability to think on the spot and solve novel problems is Crystallized Intelligence",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "Baltes and Straudinger describe the four characteristics of wisdom in __________",
    "options": ["1990", "2000", "1993", "1880"],
    "answer": "1993"
  },
  {
    "question": "________intelligence is the factual knowledge about the world",
    "options": ["Crystallized", "Fluid", "Emotional", "Social"],
    "answer": "Crystallized"
  },
  {
    "question": "We can practice creativity to reach at a stage of wisdom",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Sacrifice is the highest level of _______",
    "options": ["Wisdom", "Criticism", "Neurosis", "Apathy"],
    "answer": "Wisdom"
  },
  {
    "question": "The concept of emotional intelligence was popularized in mainstream society by",
    "options": ["Paul Ekman", "Howard Gardner", "Daniel Goleman", "John Mayer"],
    "answer": "Daniel Goleman"
  },
  {
    "question": "__________ specialized in measuring psychological characteristics for intelligence and personality.",
    "options": ["Psychometricians", "Pediatricians", "Neurologists", "Cardiologist"],
    "answer": "Psychometricians"
  }
],
week2: [
  {
    "question": "_________ refers to the stability of test score",
    "options": ["Reliability", "Validity", "Norm", "Score"],
    "answer": "Reliability"
  },
  {
    "question": "________ is a standard score by the help of which we compare individual scores on a particular test",
    "options": ["Reliability", "Validity", "Norm", "Apathy"],
    "answer": "Norm"
  },
  {
    "question": "__________ is known as the first measure of emotional intelligence",
    "options": ["ECI", "EQI", "MSCEIT", "BEIS"],
    "answer": "EQI"
  },
  {
    "question": "____________ is the ability to identify and understand the interrelationship between emotions, thoughts and behaviour",
    "options": ["Emotional understanding", "Emotional management", "Apathy", "Neurosis"],
    "answer": "Emotional understanding"
  },
  {
    "question": "_________ is the ability to experience and express emotions in self and others appropriately",
    "options": ["IQ", "Emotions", "Interpersonal conflict", "Emotional intelligence"],
    "answer": "Emotional intelligence"
  },
  {
    "question": "Successive processing is a mental activity by which a person integrates stimuli in a specific serial order.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "CAS test is developed by",
    "options": ["DAS and Naglieri", "Sternberg", "Daniel Goleman", "Martin Seligman"],
    "answer": "DAS and Naglieri"
  },
  {
    "question": "A culture fair or culture reduced test is a test that would make minimal use of language and not ask for any specific facts.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "According to Luria, the third functional unit of the brain is responsible for",
    "options": ["Planning", "Attention", "Information Processing", "Information retrieval"],
    "answer": "Planning"
  },
  {
    "question": "WISC III can be used to assess infant intelligence",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "A test may be called reliable if it measures what it is intended to measure",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "Mayer and Salovey defined EI in terms of ____________ major components",
    "options": ["Two", "Three", "Six", "Four"],
    "answer": "Four"
  },
  {
    "question": "Stanford-Binet’s Test is a set of:",
    "options": ["Code-graded items", "Aptitude-graded items", "Age-graded items", "Sociocultural items"],
    "answer": "Age-graded items"
  },
  {
    "question": "_____ intelligence refers to the ability to notice and make distinctions among the moods, temperaments, motivations and intentions of other people and potentially to act on this knowledge.",
    "options": ["Intrapersonal", "Bodily-Kinesthetic", "Interpersonal", "Existential"],
    "answer": "Interpersonal"
  },
  {
    "question": "Binet and Simon created the first intelligence test.",
    "options": ["True", "False"],
    "answer": "True"
  }
],
week3: [
  {
    "question": "Which one of the following is not a characteristic of a person with low EI?",
    "options": ["Blind ambition", "Realistic goals", "Relentless striving", "Need to seem perfect"],
    "answer": "Realistic goals"
  },
  {
    "question": "Person with __________ EI can easily make acquaintances and friends",
    "options": ["Low", "High", "Neutral", "Very low"],
    "answer": "High"
  },
  {
    "question": "___________ is more scientific in nature",
    "options": ["Projective test", "Psychometric test", "Clinical interview", "Behavioural assessment"],
    "answer": "Psychometric test"
  },
  {
    "question": "Reality testing is associated with Bar-On Theory of Emotional Intelligence",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Projective test is ___________",
    "options": ["Subjective", "Objective", "Numerical", "Quantitative"],
    "answer": "Subjective"
  },
  {
    "question": "Person with high EI knows how to make _____ emotions to last when they experience it",
    "options": ["Positive", "Negative", "Sad", "Fearful"],
    "answer": "Positive"
  },
  {
    "question": "A little anxiety helps us focus the mind; too much can paralyze it",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "_________ take less time and is cost effective",
    "options": ["Projective Test", "Psychometric test", "Behavioural Assessment", "Clinical Interview"],
    "answer": "Psychometric test"
  },
  {
    "question": "“TAT” is a",
    "options": ["Discourse Analysis", "Psychometric Test", "Projective test", "Aptitude Test"],
    "answer": "Projective test"
  },
  {
    "question": "In corporate world IQ gets you___________",
    "options": ["Hired", "Meditated", "Neurosis", "All of these"],
    "answer": "Hired"
  },
  {
    "question": "“EQ-i” is based on",
    "options": ["Ability-based model of Mayer and Salovey", "Goleman’s Model", "Bar-On’s Model", "Cooper and Sawaf’s Model"],
    "answer": "Bar-On’s Model"
  },
  {
    "question": "“IRI” stands for",
    "options": ["Intrapersonal Receptivity Index", "Interpersonal Receptivity Index", "Interpersonal Reactivity Index", "Intrapersonal Response Index"],
    "answer": "Interpersonal Reactivity Index"
  },
  {
    "question": "Emotional literacy helps a person to develop a sound emotional vocabulary to recognize and understand the emotions in oneself and others.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "EI scale was developed by R.K.Pradhan in 2006",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "SRT is a Psychometric Test",
    "options": ["True", "False"],
    "answer": "False"
  }
],
week4: [
  {
    "question": "AQ stands for",
    "options": ["Apathy Quotient", "Attraction Quotient", "Adversity Quotient", "Application Quotient"],
    "answer": "Adversity Quotient"
  },
  {
    "question": "According to research, EQ contributes to what percentage of a person's success in life?",
    "options": ["30%", "70%", "90%", "80%"],
    "answer": "80%"
  },
  {
    "question": "EI/EQ distinguishes the best from the rest",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "If a person is good at resilience, he is likely to deal effectively with the difficult situations of life.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Resilience refers to ___________",
    "options": ["The ability to avoid stress and adversity", "Thriving upon stress and quickly recovering from adversity", "Experiencing denial", "Suppressing emotions to handle stress effectively"],
    "answer": "Thriving upon stress and quickly recovering from adversity"
  },
  {
    "question": "If you have a good number of people around you during the time of your stress, it indicates your interpersonal communication is _________",
    "options": ["Very Bad", "Worst", "Can’t Say", "Good"],
    "answer": "Good"
  },
  {
    "question": "A person who holds always a positive outlook in life they always think that challenges are ________",
    "options": ["Trouble", "Opportunities", "Hindrance", "Learning obstacles"],
    "answer": "Opportunities"
  },
  {
    "question": "_______ means ability to think something new that never exist before.",
    "options": ["Neurosis", "Neutral", "Creativity", "Apathy"],
    "answer": "Creativity"
  },
  {
    "question": "People having ________ always have patience, composure, confident and always think from various grounds to generate multiple solutions or options to solve their problems.",
    "options": ["Positive outlook", "Trouble", "Apathy", "Neuropathy"],
    "answer": "Positive outlook"
  },
  {
    "question": "EQ develops continuously throughout life, whereas IQ declines after a certain age.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Integrity means acting openly, honestly and consistently.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "________ is the hopefulness that life will be brighter in the future.",
    "options": ["Optimism", "Apathy", "Bipolar", "Unipolar"],
    "answer": "Optimism"
  },
  {
    "question": "Listening to one’s inner voice is known as ________.",
    "options": ["Intuition", "Inspiration", "Apathy", "Honesty"],
    "answer": "Intuition"
  },
  {
    "question": "IQ is componential in nature.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "______ is the ability to turn negative opinions, thoughts or ideas into positive ones.",
    "options": ["Apathy", "Creativity", "Constructive discontent", "Intentionality"],
    "answer": "Constructive discontent"
  }
],
week5: [
  {
    "question": "__________ is displaying only concerns about others",
    "options": ["Allopathy", "Sympathy", "Apathy", "Hatred"],
    "answer": "Sympathy"
  },
  {
    "question": "Quantitative assessment is number based and qualitative assessment is in terms of _______",
    "options": ["Words, art forms", "Derivation forms", "Data points, statistical methods", "Artificial forms"],
    "answer": "Words, art forms"
  },
  {
    "question": "_________learner has a deep understanding of oneself and respects the complex identities, histories, and cultures of others.",
    "options": ["Competent", "Empowered", "Informed", "Responsible"],
    "answer": "Responsible"
  },
  {
    "question": "Deficient emotional skills may be the reason more than half of marriage ends in divorce.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "EBI First year Initiative is a",
    "options": ["Quantitative Assessment", "Qualitative Assessment", "Both Quantitative and Qualitative Assessment", "None of these"],
    "answer": "Quantitative Assessment"
  },
  {
    "question": "Who understands the human imagination, expression, and the products of many cultures?",
    "options": ["Empowered Learner", "Informed Learner", "Responsible Learner", "None of these"],
    "answer": "Informed Learner"
  },
  {
    "question": "Which of the following is a major component of Bar-On’s Theory of emotional intelligence?",
    "options": ["Knowing one’s emotion", "Recognizing emotions in others", "Understanding and analysing emotions", "Stress management"],
    "answer": "Stress management"
  },
  {
    "question": "There is a direct association between emotional intelligence and self-actualization need",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "“Social Responsibility” comes under __________ in the EQ-i.",
    "options": ["Personal and interpersonal effectiveness", "Effective Relationship", "Interpersonal Scales", "Self-Awareness"],
    "answer": "Interpersonal Scales"
  },
  {
    "question": "______measure student writing and presentations by self, peers, and others",
    "options": ["E-Port", "Student Narratives", "The Bull’s Eye", "Rubrics"],
    "answer": "Rubrics"
  },
  {
    "question": "Emotional intelligence is positively related to neuroticism.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "___ leader always assimilates diverse ideas from different people.",
    "options": ["Impulsive", "Emotionally intelligent", "Apathetic", "Close-minded"],
    "answer": "Emotionally intelligent"
  },
  {
    "question": "Emotional intelligence creates awareness about displaying ___ towards others.",
    "options": ["Apathy", "Hostility", "Empathy", "Aggressiveness"],
    "answer": "Empathy"
  },
  {
    "question": "Emotionally intelligent leaders can transform a negative situation into a positive one by understanding ____ needs of their people.",
    "options": ["Financial", "Physical", "Social", "Emotional"],
    "answer": "Emotional"
  },
  {
    "question": "EQ skills and competencies are non-cognitive abilities.",
    "options": ["True", "False"],
    "answer": "True"
  }
],
week6: [
  {
    "question": "Alexithymia has been positively correlated with maladaptive coping",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Individuals with higher levels of emotional intelligence may struggle to maintain an effective work-life balance.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "_____ is the ability to control impulses and moods.",
    "options": ["Empathy", "Self-regulation", "Social skills", "Motivation"],
    "answer": "Self-regulation"
  },
  {
    "question": "___________focused on returning to its neglected mission of empowering normal individuals to become stronger and more productive.",
    "options": ["Positive psychology", "Cognitive psychology", "Clinical psychology", "Industrial psychology"],
    "answer": "Positive psychology"
  },
  {
    "question": "Low EI has a positive relationship with anxiety and depressive disorders.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Who is known as the Father of Positive Psychology?",
    "options": ["Martin Seligman", "Daniel Goleman", "John D. Mayer", "Peter Salovey"],
    "answer": "Martin Seligman"
  },
  {
    "question": "According to Seligman, which one of the following is not an important route to happiness",
    "options": ["Pleasant life", "Good life", "Meaningful life", "Luxurious life"],
    "answer": "Luxurious life"
  },
  {
    "question": "_______ is a psychology that is interested in simply what works rather than what does not. Or ‘what is right with the person? Rather than ‘what is wrong?",
    "options": ["Positive psychology", "Cognitive psychology", "Clinical psychology", "Industrial psychology"],
    "answer": "Positive psychology"
  },
  {
    "question": "Which of the following is not a dimension of Wong’s emotional intelligence scale?",
    "options": ["Appraisal and expression of emotion in self", "Appraisal and recognition of emotions in others", "Regulation of emotions in self", "Building relationships with others"],
    "answer": "Building relationships with others"
  },
  {
    "question": "“Knowing your signature strength and recreating your life to use those strengths to have more flow in life” illustrates",
    "options": ["Good Life", "Pleasant Life", "Meaningful life", "Adventurous life"],
    "answer": "Good Life"
  },
  {
    "question": "According to research, optimism enhances the survival capacity of cancer patients, and people who are living with heart diseases or AIDS",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "“Creativity and excellence” are examples of _____",
    "options": ["Positive Trait", "Positive Emotions", "Positive Institution", "None of these"],
    "answer": "Positive Trait"
  },
  {
    "question": "The theory of ______ says that as we grow, we develop the ability to focus more on the positives around us rather than on the negatives.",
    "options": ["Emotion Regulation", "Socioemotional Selectivity", "Attachment", "Emotional Intelligence"],
    "answer": "Socioemotional Selectivity"
  },
  {
    "question": "Direct reading classes on personality development, value education, is a common method for enhancing EI",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Who proposed the Sustainable Happiness Model?",
    "options": ["Martin Seligman", "Daniel Kahneman", "Ed Diener", "Sonja Lyubomirsky, Kennon M. Sheldon & David Schkade"],
    "answer": "Sonja Lyubomirsky, Kennon M. Sheldon & David Schkade"
  }
],
week7: [
  {
    "question": "According to research intentional activity contributes __________ of happiness.",
    "options": ["50%", "30%", "40%", "45%"],
    "answer": "40%"
  },
  {
    "question": "Leader roles are well defined, whereas manager roles are beyond the boundary",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "Emotional intelligence is not about being emotional, it is about being __________ with your emotions",
    "options": ["Smart", "Indifferent", "Reckless", "Distant"],
    "answer": "Smart"
  },
  {
    "question": "Having a positive attitude towards life is a ___________ skill to enhance one’s emotional intelligent",
    "options": ["Cognitive", "Behavioural", "Physical", "Mechanical"],
    "answer": "Cognitive"
  },
  {
    "question": "Which of the following statements is not true for emotional intelligence?",
    "options": ["Emotional intelligence is about being honest.", "Emotional intelligence is about being aware of your feelings and those of others.", "Emotional intelligence is about being smart with your emotions", "Emotional intelligence is about being nice all the time."],
    "answer": "Emotional intelligence is about being nice all the time."
  },
  {
    "question": "Leaders always believe in short-term achievement",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "All managers are at least leaders, but all leaders are not managers",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Developing realistic expectations is a ____ skill to enhances one’s emotional intelligent",
    "options": ["Cognitive", "Behavioural", "Physical", "Mechanical"],
    "answer": "Cognitive"
  },
  {
    "question": "Leadership relies more on __________ power according to kotter, 1990.",
    "options": ["Coding", "Coercive", "Personal", "Negative"],
    "answer": "Personal"
  },
  {
    "question": "Life satisfaction is Eudaimonic well-being",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "Emotional intelligence is about being impulsive all the time",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "Which of the following is not an emotional skill of emotional intelligence?",
    "options": ["Expressing, identifying and labelling feelings", "Managing feelings and impulses", "Delaying gratification and reducing stress", "Developing unrealistic expectations"],
    "answer": "Developing unrealistic expectations"
  },
  {
    "question": "Nurturant task Leadership is a leadership __________",
    "options": ["Trait", "Style", "Situation", "None of These"],
    "answer": "Style"
  },
  {
    "question": "Love, work and play is a life enhancement strategy",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Which of the following is not a component of Ryff’s Psychological Wellbeing model?",
    "options": ["Autonomy", "Personal growth", "Self-acceptance", "Apathy"],
    "answer": "Apathy"
  }
],
week8: [
  {
    "question": "___________ culture is called our language, beliefs, values etc.",
    "options": ["Non-materialistic", "Materialistic", "Economic", "Technological"],
    "answer": "Non-materialistic"
  },
  {
    "question": "Monitor and attempt to make better hidden attitudes before they are expressed through your behaviours is a way to reduce the impact of stereotyping",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "_________ is not a characteristic of cultural competence.",
    "options": ["Valuing the differences/similarities between persons and groups", "Making the knowledge of a culture a part of oneself", "Ignoring one’s strengths and capabilities", "Recognizing the importance of a person’s life context"],
    "answer": "Ignoring one’s strengths and capabilities"
  },
  {
    "question": "________ is not a key element of culturally competent organizations",
    "options": ["Value diversity", "Acquire and institutionalize cultural knowledge", "Practicing discrimination", "Manage the dynamics of difference"],
    "answer": "Practicing discrimination"
  },
  {
    "question": "A process of learning that leads to an ability to effectively respond to the challenges and opportunities posed by the presence of cultural diversity in a defined social system is known as?",
    "options": ["Cultural Incapacity", "Cultural Competence", "Cultural Destructiveness", "Cultural Incompetence"],
    "answer": "Cultural Competence"
  },
  {
    "question": "Materialistic Culture is _______",
    "options": ["Tangible", "Non-tangible", "Neurotic", "Irrational"],
    "answer": "Tangible"
  },
  {
    "question": "Making a conscious decision to be egalitarian, which may lead one to widen one’s circle of friends and knowledge of other groups, is a way to increase the strength of stereotyping",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "question": "Which of the following is not a primary approach to cross-cultural education?",
    "options": ["Address Attitudes", "Increase Knowledge", "Develop Skills", "Disregard Awareness"],
    "answer": "Disregard Awareness"
  },
  {
    "question": "“Rules dictating how universal emotional expressions should be modified according to specific social situations” is known as?",
    "options": ["Social Conventions", "Cultural Norms", "Emotional Etiquette", "Cultural Display Rules"],
    "answer": "Cultural Display Rules"
  },
  {
    "question": "Which of the following is not a type of cultural quotient (CQ)?",
    "options": ["Motivational CQ", "Behavioural CQ", "Metacognitive CQ", "Wellbeing CQ"],
    "answer": "Wellbeing CQ"
  },
  {
    "question": "Culture is the transfer of knowledge, language, and values from one generation to another.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Cultural ethos is enduring in nature",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "Which of the following is at the bottom of the cultural iceberg?",
    "options": ["Health Status", "Marital Status", "Gender", "Religion"],
    "answer": "Health Status"
  },
  {
    "question": "Cultural differences exist in the frequencies of antecedents that bring about an emotion.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "question": "“The physical aspects that members of a society can make, use and share” is known as?",
    "options": ["Non-material culture", "Symbol", "Material culture", "Norms"],
    "answer": "Material culture"
  }
],
};
