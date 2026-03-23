export interface FAQItem {
  question: string
  answer: string
}

const faqData: Record<string, FAQItem[]> = {
  en: [
    {
      question: 'What is charades?',
      answer: 'Charades is a classic party game where players act out a word or phrase without speaking, while other players try to guess what it is. It\'s a fun, interactive game that has been enjoyed for centuries and works great for all ages.',
    },
    {
      question: 'How many players do you need for charades?',
      answer: 'Charades can be played with as few as 4 players, but it works best with 6 to 12 players. You\'ll want to split into two teams of at least 2 people each. The more players, the more fun and competitive the game becomes!',
    },
    {
      question: 'What are the basic rules of charades?',
      answer: 'The basic rules are simple: one player draws a word or phrase, then acts it out silently using only gestures and body movements. No speaking, pointing at objects, or mouthing words is allowed. The other players on their team try to guess the word within a time limit, usually 1-2 minutes.',
    },
    {
      question: 'How do I use this online charades generator?',
      answer: 'Simply visit the game page, select your preferred category (nouns, verbs, animals, etc.) and audience (kids, adults, or all ages). Press the button to reveal a random word, then act it out for your friends to guess. Press "Next" to get a new word anytime.',
    },
    {
      question: 'Can kids play charades?',
      answer: 'Absolutely! Charades is one of the best games for kids. Our generator includes a special "Kids" mode with simpler, age-appropriate words like animals, toys, and basic actions. It helps children develop creativity, communication skills, and confidence.',
    },
    {
      question: 'What categories of words are available?',
      answer: 'We offer six word categories: Nouns (everyday objects and things), Verbs (actions and movements), Adjectives (descriptions and qualities), Animals (creatures big and small), Food (dishes and ingredients), and Occupations (jobs and professions). Each category is available in 8 languages.',
    },
    {
      question: 'Is charades available in other languages?',
      answer: 'Yes! Our charades generator supports 8 languages: English, German, French, Spanish, Italian, Japanese, Korean, and Traditional Chinese. Each language has its own curated word list with culturally relevant vocabulary.',
    },
    {
      question: 'What are some tips for acting out charades?',
      answer: 'Here are some top tips: 1) Break compound words into syllables and act each one. 2) Use common gestures like showing the number of words with fingers. 3) Start with broad concepts and get more specific. 4) Use exaggerated movements to make actions clearer. 5) Practice makes perfect — the more you play, the better you get!',
    },
  ],
  de: [
    {
      question: 'Was ist Scharade?',
      answer: 'Scharade ist ein klassisches Partyspiel, bei dem Spieler ein Wort oder eine Phrase pantomimisch darstellen, ohne zu sprechen, während andere Spieler versuchen zu erraten, was es ist. Es ist ein lustiges, interaktives Spiel, das seit Jahrhunderten beliebt ist.',
    },
    {
      question: 'Wie viele Spieler braucht man für Scharade?',
      answer: 'Scharade kann mit mindestens 4 Spielern gespielt werden, funktioniert aber am besten mit 6 bis 12. Teilt euch in zwei Teams mit mindestens 2 Personen auf. Je mehr Spieler, desto lustiger wird es!',
    },
    {
      question: 'Was sind die Grundregeln von Scharade?',
      answer: 'Die Grundregeln sind einfach: Ein Spieler zieht ein Wort und stellt es stumm mit Gesten dar. Sprechen, auf Gegenstände zeigen oder Wörter mit den Lippen formen ist nicht erlaubt. Das Team versucht, das Wort innerhalb von 1-2 Minuten zu erraten.',
    },
    {
      question: 'Können Kinder Scharade spielen?',
      answer: 'Auf jeden Fall! Unser Generator enthält einen speziellen Kindermodus mit einfacheren, altersgerechten Wörtern wie Tiere, Spielzeug und einfache Aktionen.',
    },
    {
      question: 'Welche Wortkategorien gibt es?',
      answer: 'Wir bieten sechs Kategorien: Substantive, Verben, Adjektive, Tiere, Essen und Berufe. Jede Kategorie ist in 8 Sprachen verfügbar.',
    },
    {
      question: 'Ist Scharade in anderen Sprachen verfügbar?',
      answer: 'Ja! Unser Generator unterstützt 8 Sprachen: Englisch, Deutsch, Französisch, Spanisch, Italienisch, Japanisch, Koreanisch und Traditionelles Chinesisch.',
    },
  ],
  fr: [
    {
      question: 'Qu\'est-ce que les charades ?',
      answer: 'Les charades sont un jeu de société classique où les joueurs miment un mot ou une phrase sans parler, tandis que les autres joueurs essaient de deviner. C\'est un jeu amusant et interactif apprécié depuis des siècles.',
    },
    {
      question: 'Combien de joueurs faut-il pour les charades ?',
      answer: 'Les charades peuvent se jouer à partir de 4 joueurs, mais c\'est mieux avec 6 à 12 joueurs. Divisez-vous en deux équipes d\'au moins 2 personnes chacune.',
    },
    {
      question: 'Quelles sont les règles de base des charades ?',
      answer: 'Les règles sont simples : un joueur tire un mot et le mime silencieusement. Parler, pointer des objets ou articuler des mots est interdit. L\'équipe doit deviner le mot en 1-2 minutes.',
    },
    {
      question: 'Les enfants peuvent-ils jouer aux charades ?',
      answer: 'Absolument ! Notre générateur inclut un mode enfants avec des mots simples et adaptés à leur âge comme les animaux, les jouets et les actions simples.',
    },
    {
      question: 'Quelles catégories de mots sont disponibles ?',
      answer: 'Nous proposons six catégories : Noms, Verbes, Adjectifs, Animaux, Nourriture et Métiers. Chaque catégorie est disponible en 8 langues.',
    },
    {
      question: 'Les charades sont-elles disponibles en d\'autres langues ?',
      answer: 'Oui ! Notre générateur supporte 8 langues : anglais, allemand, français, espagnol, italien, japonais, coréen et chinois traditionnel.',
    },
  ],
  es: [
    {
      question: '¿Qué son las charadas?',
      answer: 'Las charadas son un juego de fiesta clásico donde los jugadores actúan una palabra o frase sin hablar, mientras los demás intentan adivinar. Es un juego divertido e interactivo que se ha disfrutado durante siglos.',
    },
    {
      question: '¿Cuántos jugadores se necesitan?',
      answer: 'Las charadas se pueden jugar con al menos 4 jugadores, pero funciona mejor con 6 a 12. Divídanse en dos equipos de al menos 2 personas cada uno.',
    },
    {
      question: '¿Cuáles son las reglas básicas?',
      answer: 'Las reglas son simples: un jugador saca una palabra y la actúa en silencio. No se permite hablar, señalar objetos ni mover los labios. El equipo debe adivinar la palabra en 1-2 minutos.',
    },
    {
      question: '¿Los niños pueden jugar charadas?',
      answer: '¡Por supuesto! Nuestro generador incluye un modo para niños con palabras más simples y apropiadas para su edad.',
    },
    {
      question: '¿Qué categorías de palabras hay disponibles?',
      answer: 'Ofrecemos seis categorías: Sustantivos, Verbos, Adjetivos, Animales, Comida y Profesiones. Cada categoría está disponible en 8 idiomas.',
    },
    {
      question: '¿Las charadas están disponibles en otros idiomas?',
      answer: '¡Sí! Nuestro generador soporta 8 idiomas: inglés, alemán, francés, español, italiano, japonés, coreano y chino tradicional.',
    },
  ],
  it: [
    {
      question: 'Cos\'è la sciarada?',
      answer: 'La sciarada è un classico gioco di società dove i giocatori mimano una parola o frase senza parlare, mentre gli altri cercano di indovinare. È un gioco divertente e interattivo amato da secoli.',
    },
    {
      question: 'Quanti giocatori servono?',
      answer: 'La sciarada si può giocare con minimo 4 giocatori, ma funziona meglio con 6-12. Dividetevi in due squadre di almeno 2 persone ciascuna.',
    },
    {
      question: 'Quali sono le regole base?',
      answer: 'Le regole sono semplici: un giocatore pesca una parola e la mima in silenzio. Non è permesso parlare, indicare oggetti o muovere le labbra. La squadra deve indovinare entro 1-2 minuti.',
    },
    {
      question: 'I bambini possono giocare?',
      answer: 'Assolutamente! Il nostro generatore include una modalità bambini con parole semplici e adatte alla loro età.',
    },
    {
      question: 'Quali categorie sono disponibili?',
      answer: 'Offriamo sei categorie: Sostantivi, Verbi, Aggettivi, Animali, Cibo e Professioni. Ogni categoria è disponibile in 8 lingue.',
    },
  ],
  ja: [
    {
      question: 'ジェスチャーゲームとは？',
      answer: 'ジェスチャーゲームは、プレイヤーが言葉を話さずに単語やフレーズを演じ、他のプレイヤーがそれを当てるパーティーゲームです。何世紀にもわたって愛されてきた楽しいゲームです。',
    },
    {
      question: '何人で遊べますか？',
      answer: '最低4人から遊べますが、6〜12人が最適です。2チームに分かれて遊びましょう。',
    },
    {
      question: '基本ルールは？',
      answer: 'ルールはシンプルです：1人が単語を引き、声を出さずにジェスチャーで表現します。話す、物を指す、口で単語を形作ることは禁止です。チームは1〜2分以内に当てます。',
    },
    {
      question: '子供も遊べますか？',
      answer: 'もちろん！動物やおもちゃなど、年齢に適したシンプルな単語のキッズモードがあります。',
    },
    {
      question: 'どんなカテゴリーがありますか？',
      answer: '名詞、動詞、形容詞、動物、食べ物、職業の6カテゴリーがあり、各カテゴリーは8言語で利用できます。',
    },
  ],
  ko: [
    {
      question: '제스처 게임이란?',
      answer: '제스처 게임은 플레이어가 말하지 않고 단어나 문구를 연기하면 다른 플레이어가 맞추는 파티 게임입니다. 수세기 동안 사랑받아온 재미있는 게임입니다.',
    },
    {
      question: '몇 명이 필요한가요?',
      answer: '최소 4명부터 가능하지만 6~12명이 가장 좋습니다. 2팀으로 나누어 플레이하세요.',
    },
    {
      question: '기본 규칙은?',
      answer: '규칙은 간단합니다: 한 명이 단어를 뽑고 말하지 않고 몸짓으로 표현합니다. 말하기, 물건 가리키기, 입모양 만들기는 금지입니다. 팀은 1~2분 내에 맞춰야 합니다.',
    },
    {
      question: '어린이도 할 수 있나요?',
      answer: '물론입니다! 동물, 장난감 등 연령에 적합한 단어가 포함된 어린이 모드가 있습니다.',
    },
    {
      question: '어떤 카테고리가 있나요?',
      answer: '명사, 동사, 형용사, 동물, 음식, 직업 6가지 카테고리가 있으며, 각 카테고리는 8개 언어로 이용 가능합니다.',
    },
  ],
  'zh-tw': [
    {
      question: '什麼是比手畫腳？',
      answer: '比手畫腳是一個經典的派對遊戲，玩家不說話，只用動作表演一個詞語或短語，讓其他玩家猜測。這是一個有趣的互動遊戲，深受各年齡層喜愛。',
    },
    {
      question: '需要幾個人玩？',
      answer: '最少4人即可，但6至12人最為理想。分成兩隊，每隊至少2人。',
    },
    {
      question: '基本規則是什麼？',
      answer: '規則很簡單：一位玩家抽取詞語，用肢體動作無聲地表演。不能說話、不能指向物品、不能用嘴型。隊友需在1-2分鐘內猜出答案。',
    },
    {
      question: '兒童可以玩嗎？',
      answer: '當然可以！我們的生成器包含兒童模式，提供簡單、適齡的詞語，如動物、玩具和基本動作。',
    },
    {
      question: '有哪些詞語分類？',
      answer: '我們提供六種分類：名詞、動詞、形容詞、動物、食物和職業。每種分類都有8種語言版本。',
    },
    {
      question: '支援其他語言嗎？',
      answer: '支援！我們的生成器支援8種語言：英語、德語、法語、西班牙語、義大利語、日語、韓語和繁體中文。',
    },
  ],
}

export function getFAQs(lang: string): FAQItem[] {
  return faqData[lang] || faqData.en
}

// ─── Category-specific FAQ (unique per category, no duplication) ───

const categoryFAQData: Record<string, Record<string, FAQItem[]>> = {
  en: {
    nouns: [
      { question: 'What are noun charades?', answer: 'Noun charades focus on acting out objects, places, and things. Players mime everyday items like cameras, umbrellas, or guitars without using any words. Nouns are great for beginners because they represent concrete, visible objects that are easier to act out.' },
      { question: 'How do you act out an object in charades?', answer: 'To act out an object, mime how you would use it or show its shape with your hands. For example, for "guitar" you would pretend to strum strings, for "umbrella" you would mime opening one over your head. Focus on the most recognizable action associated with the object.' },
      { question: 'What are the easiest nouns to act out?', answer: 'The easiest nouns are ones with clear physical actions: Telephone (hold hand to ear), Camera (pretend to take a photo), Mirror (pretend to look at your reflection), and Bicycle (pedaling motion). Start with these if you are new to charades!' },
    ],
    verbs: [
      { question: 'What are verb charades?', answer: 'Verb charades challenge players to act out actions and movements. Words like dancing, swimming, cooking, and climbing must be demonstrated through physical movement. Verbs are often the most entertaining category because they require full-body acting.' },
      { question: 'How do you act out an action word?', answer: 'Simply perform the action! For "swimming" do the breaststroke motion, for "cooking" pretend to stir a pot, for "dancing" bust a move. The key is to make your movements big and exaggerated so your team can easily recognize the action.' },
      { question: 'What are some challenging verbs to act out?', answer: 'Abstract verbs like "negotiating," "meditating," and "commuting" are more difficult because they don\'t have obvious physical movements. Try breaking them into simpler gestures — for "meditating," sit cross-legged and close your eyes with hands on knees.' },
    ],
    adjectives: [
      { question: 'How do you act out an adjective in charades?', answer: 'Acting out adjectives requires creativity! Show the quality through exaggerated body language. For "enormous" spread your arms wide, for "freezing" shiver and hug yourself, for "sparkly" wiggle your fingers like glitter. Use facial expressions to convey the feeling.' },
      { question: 'Are adjectives harder than nouns in charades?', answer: 'Yes, adjectives are generally more challenging because they describe qualities rather than concrete objects. However, physical adjectives like "slippery," "freezing," and "enormous" are quite actable. Abstract ones like "sophisticated" or "melancholic" require more creative interpretation.' },
      { question: 'What adjectives work best for kids?', answer: 'Kid-friendly adjectives include "fluffy" (pet a soft imaginary animal), "squishy" (squeeze something soft), and "wiggly" (wiggle your whole body). These are physical and fun to act out, making them perfect for younger players.' },
    ],
    animals: [
      { question: 'How do you act out animals in charades?', answer: 'Mimic the animal\'s most recognizable behavior! For an elephant, swing your arm like a trunk. For a penguin, waddle with arms at your sides. For a kangaroo, hop around with your hands in front. Focus on the movement or sound (without making actual sounds) that makes the animal unique.' },
      { question: 'What are the easiest animals to act out?', answer: 'The easiest animals have very distinctive movements: Elephant (trunk swing), Penguin (waddle), Kangaroo (hopping), Butterfly (flapping arms gracefully), and Dolphin (jumping motion with hands together). Most people can guess these within seconds.' },
      { question: 'Can you make animal sounds in charades?', answer: 'No! In traditional charades, you cannot make any sounds at all, including animal noises. You must rely entirely on physical movement and gestures. This is what makes animals fun — you have to capture the essence of the animal through movement alone.' },
    ],
    food: [
      { question: 'How do you act out food in charades?', answer: 'Show how you eat or prepare the food! For "pizza" mime throwing dough and eating a slice, for "spaghetti" twirl an imaginary fork, for "ice cream" pretend to lick a cone. You can also show the shape or size of the food with your hands.' },
      { question: 'What food words are best for charades?', answer: 'Foods with distinctive eating actions work best: Pizza (eating a slice), Spaghetti (twirling fork), Ice Cream (licking a cone), Hamburger (holding and biting a big burger), and Watermelon (eating a large slice). These have clear, universal gestures.' },
      { question: 'How do you act out cooking in food charades?', answer: 'For cooking-related food words, mime the preparation process. For "pancake" pretend to flip one in a pan, for "sushi" show rolling and cutting motions. Pair eating gestures with cooking motions to give your team more clues.' },
    ],
    occupations: [
      { question: 'How do you act out jobs in charades?', answer: 'Mime the most iconic action of the profession! For "doctor" pretend to use a stethoscope, for "firefighter" aim an imaginary hose, for "chef" stir a pot and taste the food. Focus on the tool or action most strongly associated with the job.' },
      { question: 'What occupations are easiest to act out?', answer: 'Jobs with clear physical tools or actions are easiest: Firefighter (aim hose), Doctor (stethoscope), Chef (cooking), Astronaut (floating in zero gravity), Teacher (writing on a board), and Magician (pulling a rabbit from a hat).' },
      { question: 'How do you act out abstract professions?', answer: 'For abstract jobs like "accountant" or "diplomat," focus on related actions: for accountant, mime typing numbers and looking stressed at papers. For therapist, sit opposite someone and nod thoughtfully. Combining multiple related gestures helps convey less physical professions.' },
    ],
  },
  de: {
    nouns: [
      { question: 'Was sind Substantiv-Scharade?', answer: 'Substantiv-Scharade konzentriert sich auf das Darstellen von Gegenständen, Orten und Dingen. Spieler mimen alltägliche Objekte wie Kameras, Regenschirme oder Gitarren. Substantive sind toll für Anfänger, da sie konkrete, sichtbare Objekte darstellen.' },
      { question: 'Wie stellt man einen Gegenstand dar?', answer: 'Mimen Sie, wie Sie den Gegenstand benutzen würden, oder zeigen Sie seine Form mit den Händen. Für "Gitarre" tun Sie so, als würden Sie Saiten zupfen, für "Regenschirm" mimen Sie das Öffnen über dem Kopf.' },
      { question: 'Was sind die einfachsten Substantive?', answer: 'Die einfachsten Substantive haben eindeutige Aktionen: Telefon (Hand ans Ohr), Kamera (Foto machen), Spiegel (sich betrachten), und Fahrrad (Tretbewegung).' },
    ],
    verbs: [
      { question: 'Was sind Verb-Scharade?', answer: 'Verb-Scharade fordern Spieler heraus, Aktionen und Bewegungen darzustellen. Wörter wie Tanzen, Schwimmen, Kochen müssen durch Körperbewegung gezeigt werden.' },
      { question: 'Wie stellt man ein Verb dar?', answer: 'Führen Sie die Aktion einfach aus! Für "Schwimmen" machen Sie Schwimmbewegungen, für "Kochen" rühren Sie einen imaginären Topf um.' },
      { question: 'Welche Verben sind schwer?', answer: 'Abstrakte Verben wie "Verhandeln" oder "Meditieren" sind schwieriger, da sie keine offensichtlichen Bewegungen haben. Versuchen Sie, sie in einfachere Gesten aufzuteilen.' },
    ],
    adjectives: [
      { question: 'Wie stellt man Adjektive dar?', answer: 'Zeigen Sie die Eigenschaft durch übertriebene Körpersprache. Für "riesig" breiten Sie die Arme aus, für "eiskalt" zittern Sie und umarmen sich selbst.' },
      { question: 'Sind Adjektive schwerer als Substantive?', answer: 'Ja, Adjektive sind schwieriger, da sie Eigenschaften statt konkreter Objekte beschreiben. Physische Adjektive wie "rutschig" oder "eiskalt" sind jedoch gut darstellbar.' },
      { question: 'Welche Adjektive eignen sich für Kinder?', answer: 'Kinderfreundliche Adjektive: "flauschig" (weiches Tier streicheln), "glitzernd" (Finger wackeln). Diese sind physisch und machen Spaß.' },
    ],
    animals: [
      { question: 'Wie stellt man Tiere dar?', answer: 'Ahmen Sie das auffälligste Verhalten des Tieres nach! Für Elefant den Arm als Rüssel schwingen, für Pinguin watscheln, für Känguru hüpfen.' },
      { question: 'Welche Tiere sind am einfachsten?', answer: 'Tiere mit markanten Bewegungen: Elefant (Rüssel), Pinguin (Watscheln), Känguru (Hüpfen), Schmetterling (Flügelschlag), Delfin (Sprungbewegung).' },
      { question: 'Darf man Tiergeräusche machen?', answer: 'Nein! Bei Scharade darf man keinerlei Geräusche machen, auch keine Tierlaute. Man muss sich ganz auf Körperbewegungen verlassen.' },
    ],
    food: [
      { question: 'Wie stellt man Essen dar?', answer: 'Zeigen Sie, wie man das Essen isst! Für "Pizza" mimen Sie das Essen eines Stücks, für "Spaghetti" drehen Sie eine imaginäre Gabel.' },
      { question: 'Welche Essenswörter eignen sich?', answer: 'Essen mit eindeutigen Essaktionen: Pizza (Stück essen), Spaghetti (Gabel drehen), Eiscreme (Eis lecken), Pfannkuchen (Wende in der Pfanne).' },
      { question: 'Wie zeigt man Kochen?', answer: 'Mimen Sie den Zubereitungsprozess: Für "Pfannkuchen" so tun, als würde man einen in der Pfanne wenden.' },
    ],
    occupations: [
      { question: 'Wie stellt man Berufe dar?', answer: 'Mimen Sie die ikonischste Aktion des Berufs! Für "Arzt" ein Stethoskop benutzen, für "Feuerwehrmann" einen Schlauch halten, für "Koch" umrühren und kosten.' },
      { question: 'Welche Berufe sind am einfachsten?', answer: 'Berufe mit klaren Aktionen: Feuerwehrmann (Schlauch), Arzt (Stethoskop), Koch (Kochen), Astronaut (Schwerelosigkeit), Lehrer (an die Tafel schreiben).' },
      { question: 'Wie zeigt man abstrakte Berufe?', answer: 'Für abstrakte Berufe wie "Buchhalter" mimen Sie das Tippen von Zahlen. Mehrere zusammenhängende Gesten helfen.' },
    ],
  },
  fr: {
    nouns: [
      { question: 'Comment mimer un objet aux charades ?', answer: 'Mimez l\'utilisation de l\'objet ou montrez sa forme. Pour "guitare" faites semblant de gratter les cordes, pour "parapluie" mimez l\'ouverture au-dessus de votre tête.' },
      { question: 'Quels sont les noms les plus faciles ?', answer: 'Les noms avec des actions claires : Téléphone (main à l\'oreille), Appareil photo (prendre une photo), Miroir (se regarder), Vélo (pédaler).' },
      { question: 'Les noms sont-ils bons pour les débutants ?', answer: 'Oui ! Les noms représentent des objets concrets et visibles, ce qui les rend plus faciles à mimer pour les débutants.' },
    ],
    verbs: [
      { question: 'Comment mimer un verbe ?', answer: 'Effectuez simplement l\'action ! Pour "nager" faites des mouvements de brasse, pour "cuisiner" remuez un pot imaginaire, pour "danser" dansez !' },
      { question: 'Les verbes sont-ils amusants ?', answer: 'Les verbes sont souvent la catégorie la plus divertissante car ils nécessitent une expression corporelle complète et beaucoup d\'énergie.' },
      { question: 'Quels verbes sont difficiles ?', answer: 'Les verbes abstraits comme "méditer" ou "négocier" sont plus difficiles. Essayez de les décomposer en gestes simples.' },
    ],
    adjectives: [
      { question: 'Comment mimer un adjectif ?', answer: 'Montrez la qualité par un langage corporel exagéré. Pour "énorme" écartez les bras, pour "glacial" frissonnez et serrez-vous.' },
      { question: 'Les adjectifs sont-ils plus durs ?', answer: 'Oui, les adjectifs sont plus abstraits. Mais les adjectifs physiques comme "glissant" ou "glacial" restent très mimables.' },
      { question: 'Quels adjectifs pour les enfants ?', answer: 'Pour les enfants, choisissez des adjectifs physiques et amusants qui permettent des mouvements exagérés.' },
    ],
    animals: [
      { question: 'Comment mimer un animal ?', answer: 'Imitez le comportement le plus reconnaissable ! Pour un éléphant, balancez votre bras comme une trompe. Pour un pingouin, dandinez-vous.' },
      { question: 'Quels animaux sont les plus faciles ?', answer: 'Les animaux avec des mouvements distinctifs : Éléphant (trompe), Pingouin (dandinement), Kangourou (sauts), Papillon (battement d\'ailes).' },
      { question: 'Peut-on faire des bruits d\'animaux ?', answer: 'Non ! Aux charades, aucun son n\'est autorisé. Vous devez vous fier uniquement aux mouvements physiques.' },
    ],
    food: [
      { question: 'Comment mimer la nourriture ?', answer: 'Montrez comment on mange ! Pour "pizza" mimez manger une part, pour "spaghetti" tournez une fourchette imaginaire.' },
      { question: 'Quels aliments fonctionnent le mieux ?', answer: 'Les aliments avec des gestes distinctifs : Pizza, Spaghetti, Glace (lécher un cornet), Crêpe (retourner dans la poêle).' },
      { question: 'Comment montrer la cuisine ?', answer: 'Mimez le processus de préparation : retourner, couper, mélanger, goûter.' },
    ],
    occupations: [
      { question: 'Comment mimer un métier ?', answer: 'Mimez l\'action la plus iconique ! Pour "médecin" utilisez un stéthoscope, pour "pompier" visez avec un tuyau.' },
      { question: 'Quels métiers sont faciles ?', answer: 'Pompier (tuyau), Médecin (stéthoscope), Cuisinier (cuisine), Astronaute (apesanteur), Professeur (écrire au tableau).' },
      { question: 'Comment mimer des métiers abstraits ?', answer: 'Pour les métiers abstraits, combinez plusieurs gestes liés à l\'activité principale du métier.' },
    ],
  },
  es: {
    nouns: [
      { question: '¿Cómo actuar sustantivos en charadas?', answer: 'Mima cómo usarías el objeto o muestra su forma. Para "guitarra" finge rasguear cuerdas, para "paraguas" mima abrirlo sobre tu cabeza.' },
      { question: '¿Cuáles son los sustantivos más fáciles?', answer: 'Sustantivos con acciones claras: Teléfono (mano al oído), Cámara (tomar foto), Espejo (mirarse), Bicicleta (pedalear).' },
      { question: '¿Los sustantivos son buenos para principiantes?', answer: '¡Sí! Los sustantivos representan objetos concretos y visibles, haciéndolos más fáciles de actuar.' },
    ],
    verbs: [
      { question: '¿Cómo actuar verbos?', answer: '¡Simplemente realiza la acción! Para "nadar" haz movimientos de natación, para "cocinar" revuelve una olla imaginaria.' },
      { question: '¿Los verbos son divertidos?', answer: 'Los verbos son la categoría más entretenida porque requieren expresión corporal completa.' },
      { question: '¿Qué verbos son difíciles?', answer: 'Verbos abstractos como "negociar" o "meditar" son más difíciles. Descompónlos en gestos simples.' },
    ],
    adjectives: [
      { question: '¿Cómo actuar adjetivos?', answer: 'Muestra la cualidad con lenguaje corporal exagerado. Para "enorme" extiende los brazos, para "helado" tiembla y abrázate.' },
      { question: '¿Los adjetivos son más difíciles?', answer: 'Sí, son más abstractos. Pero adjetivos físicos como "resbaladizo" o "helado" son bastante actuables.' },
      { question: '¿Qué adjetivos para niños?', answer: 'Para niños, elige adjetivos físicos y divertidos que permitan movimientos exagerados.' },
    ],
    animals: [
      { question: '¿Cómo actuar animales?', answer: '¡Imita el comportamiento más reconocible! Para elefante, balancea tu brazo como trompa. Para pingüino, camina como patito.' },
      { question: '¿Qué animales son más fáciles?', answer: 'Animales con movimientos distintivos: Elefante (trompa), Pingüino (caminar), Canguro (saltar), Mariposa (aleteo).' },
      { question: '¿Se pueden hacer sonidos de animales?', answer: '¡No! En charadas no se permite ningún sonido. Debes usar únicamente movimientos físicos.' },
    ],
    food: [
      { question: '¿Cómo actuar comida?', answer: '¡Muestra cómo se come! Para "pizza" mima comer una rebanada, para "espagueti" gira un tenedor imaginario.' },
      { question: '¿Qué alimentos funcionan mejor?', answer: 'Alimentos con gestos distintivos: Pizza, Espagueti, Helado (lamer un cono), Sandía (comer una rodaja grande).' },
      { question: '¿Cómo mostrar cocinar?', answer: 'Mima el proceso de preparación: voltear, cortar, mezclar, probar.' },
    ],
    occupations: [
      { question: '¿Cómo actuar profesiones?', answer: '¡Mima la acción más icónica! Para "doctor" usa un estetoscopio, para "bombero" apunta una manguera imaginaria.' },
      { question: '¿Qué profesiones son fáciles?', answer: 'Bombero (manguera), Doctor (estetoscopio), Chef (cocinar), Astronauta (gravedad cero), Profesor (escribir en pizarra).' },
      { question: '¿Cómo actuar profesiones abstractas?', answer: 'Para profesiones abstractas, combina varios gestos relacionados con la actividad principal.' },
    ],
  },
  it: {
    nouns: [
      { question: 'Come mimare un sostantivo?', answer: 'Mima come useresti l\'oggetto o mostra la sua forma. Per "chitarra" fai finta di suonare, per "ombrello" mima l\'apertura sopra la testa.' },
      { question: 'Quali sostantivi sono i più facili?', answer: 'Sostantivi con azioni chiare: Telefono (mano all\'orecchio), Fotocamera (scattare foto), Specchio (guardarsi), Bicicletta (pedalare).' },
      { question: 'I sostantivi sono adatti ai principianti?', answer: 'Sì! I sostantivi rappresentano oggetti concreti e visibili, rendendoli più facili da mimare.' },
    ],
    verbs: [
      { question: 'Come mimare un verbo?', answer: 'Esegui semplicemente l\'azione! Per "nuotare" fai movimenti di nuoto, per "cucinare" mescola una pentola immaginaria.' },
      { question: 'I verbi sono divertenti?', answer: 'I verbi sono spesso la categoria più divertente perché richiedono un\'espressione corporea completa.' },
      { question: 'Quali verbi sono difficili?', answer: 'Verbi astratti come "meditare" sono più difficili. Prova a scomporli in gesti semplici.' },
    ],
    adjectives: [
      { question: 'Come mimare un aggettivo?', answer: 'Mostra la qualità con un linguaggio corporeo esagerato. Per "enorme" allarga le braccia, per "gelido" trema e abbracciati.' },
      { question: 'Gli aggettivi sono più difficili?', answer: 'Sì, sono più astratti. Ma aggettivi fisici come "scivoloso" o "gelido" sono abbastanza mimabili.' },
      { question: 'Quali aggettivi per i bambini?', answer: 'Per i bambini, scegli aggettivi fisici e divertenti che permettano movimenti esagerati.' },
    ],
    animals: [
      { question: 'Come mimare gli animali?', answer: 'Imita il comportamento più riconoscibile! Per l\'elefante, dondola il braccio come una proboscide. Per il pinguino, cammina dondolando.' },
      { question: 'Quali animali sono più facili?', answer: 'Animali con movimenti distintivi: Elefante (proboscide), Pinguino (dondolio), Canguro (salti), Farfalla (ali).' },
      { question: 'Si possono fare versi di animali?', answer: 'No! Nella sciarada non è permesso alcun suono. Devi affidarti solo ai movimenti fisici.' },
    ],
    food: [
      { question: 'Come mimare il cibo?', answer: 'Mostra come si mangia! Per "pizza" mima mangiare una fetta, per "spaghetti" arrotola una forchetta immaginaria.' },
      { question: 'Quali cibi funzionano meglio?', answer: 'Cibi con gesti distintivi: Pizza (mangiare una fetta), Spaghetti (arrotolare), Gelato (leccare un cono).' },
      { question: 'Come mostrare la cucina?', answer: 'Mima il processo di preparazione: girare, tagliare, mescolare, assaggiare.' },
    ],
    occupations: [
      { question: 'Come mimare le professioni?', answer: 'Mima l\'azione più iconica! Per "dottore" usa uno stetoscopio, per "vigile del fuoco" punta una manichetta.' },
      { question: 'Quali professioni sono facili?', answer: 'Vigile del fuoco, Dottore, Cuoco, Astronauta, Insegnante — tutti hanno azioni chiare.' },
      { question: 'Come mimare professioni astratte?', answer: 'Per professioni astratte, combina più gesti legati all\'attività principale della professione.' },
    ],
  },
  ja: {
    nouns: [
      { question: '名詞のジェスチャーゲームのコツは？', answer: '物の使い方を演じましょう！「ギター」なら弦をかき鳴らす動作、「傘」なら開く動作。日常的な物は具体的で表現しやすいです。' },
      { question: '簡単な名詞は？', answer: '動作が明確な名詞：電話（耳に手を当てる）、カメラ（写真を撮る）、鏡（自分を見る）、自転車（ペダルを漕ぐ）。' },
      { question: '名詞は初心者向き？', answer: 'はい！名詞は具体的で目に見える物を表すため、初心者にとって最も演じやすいカテゴリーです。' },
    ],
    verbs: [
      { question: '動詞のジェスチャーのコツは？', answer: 'その動作を実際にやりましょう！「泳ぐ」なら泳ぐ動作、「料理する」なら鍋をかき混ぜる動作を大げさに。' },
      { question: '動詞カテゴリーの楽しさは？', answer: '動詞は全身を使った演技が必要なため、最も盛り上がるカテゴリーの一つです。' },
      { question: '難しい動詞は？', answer: '「瞑想する」のような抽象的な動詞は難しいです。座って目を閉じ手を膝に置くなど、シンプルなジェスチャーに分解しましょう。' },
    ],
    adjectives: [
      { question: '形容詞をどう表現する？', answer: '大げさなボディランゲージで！「巨大な」は両腕を広げ、「凍える」は震えて自分を抱きしめる。表情も活用しましょう。' },
      { question: '形容詞は名詞より難しい？', answer: 'はい、形容詞は性質を表すため抽象的です。ただし「滑りやすい」「凍える」のような物理的な形容詞は演じやすいです。' },
      { question: '子供向けの形容詞は？', answer: '「ふわふわ」（柔らかい動物を撫でる）、「キラキラ」（指をキラキラ動かす）がおすすめです。' },
    ],
    animals: [
      { question: '動物をどう表現する？', answer: '最も特徴的な動きを真似しましょう！ゾウは腕を鼻のように振り、ペンギンはよちよち歩き、カンガルーはジャンプ。' },
      { question: '簡単な動物は？', answer: '特徴的な動きのある動物：ゾウ（鼻）、ペンギン（よちよち歩き）、カンガルー（ジャンプ）、蝶（羽ばたき）。' },
      { question: '動物の声を出してもいい？', answer: 'いいえ！ジェスチャーゲームでは一切の声を出すことが禁止です。体の動きだけで表現しましょう。' },
    ],
    food: [
      { question: '食べ物をどう表現する？', answer: '食べ方を見せましょう！「ピザ」はスライスを食べる動作、「スパゲッティ」はフォークを回す動作。' },
      { question: '表現しやすい食べ物は？', answer: '食べる動作が特徴的な食べ物：ピザ、スパゲッティ、アイスクリーム（コーンを舐める）、スイカ（大きな切れを食べる）。' },
      { question: '料理をどう表現する？', answer: '調理の動作を真似：ひっくり返す、切る、混ぜる、味見する。' },
    ],
    occupations: [
      { question: '職業をどう表現する？', answer: '最も象徴的な動作を！「医者」は聴診器、「消防士」はホースを向ける、「シェフ」は料理する。' },
      { question: '簡単な職業は？', answer: '消防士、医者、シェフ、宇宙飛行士、先生 — 全て明確な動作があります。' },
      { question: '抽象的な職業をどう表現する？', answer: '複数の関連するジェスチャーを組み合わせて、その職業の主な活動を表現しましょう。' },
    ],
  },
  ko: {
    nouns: [
      { question: '명사 제스처 게임 팁은?', answer: '물건의 사용법을 연기하세요! "기타"는 줄을 튕기는 동작, "우산"은 여는 동작. 구체적인 물건은 표현하기 쉽습니다.' },
      { question: '가장 쉬운 명사는?', answer: '행동이 명확한 명사: 전화기(귀에 손 대기), 카메라(사진 찍기), 거울(자신 보기), 자전거(페달 밟기).' },
      { question: '명사는 초보자에게 적합한가요?', answer: '네! 명사는 구체적이고 눈에 보이는 물건을 나타내므로 초보자에게 가장 연기하기 쉬운 카테고리입니다.' },
    ],
    verbs: [
      { question: '동사를 어떻게 연기하나요?', answer: '행동을 직접 하세요! "수영하다"는 수영 동작, "요리하다"는 냄비 젓는 동작을 크게 해보세요.' },
      { question: '동사 카테고리는 재미있나요?', answer: '동사는 전신을 사용한 연기가 필요해서 가장 재미있는 카테고리 중 하나입니다.' },
      { question: '어려운 동사는?', answer: '"명상하다" 같은 추상적 동사가 어렵습니다. 앉아서 눈을 감는 등 간단한 동작으로 분해해보세요.' },
    ],
    adjectives: [
      { question: '형용사를 어떻게 연기하나요?', answer: '과장된 몸짓으로! "거대한"은 양팔을 넓게, "얼어붙은"은 떨며 자신을 안으세요. 표정도 활용하세요.' },
      { question: '형용사는 명사보다 어렵나요?', answer: '네, 형용사는 추상적입니다. 하지만 "미끄러운", "얼어붙은" 같은 물리적 형용사는 연기 가능합니다.' },
      { question: '어린이 형용사는?', answer: '"보들보들" (부드러운 동물 쓰다듬기), "반짝반짝" (손가락 반짝이기)이 좋습니다.' },
    ],
    animals: [
      { question: '동물을 어떻게 연기하나요?', answer: '가장 특징적인 움직임을 따라하세요! 코끼리는 팔을 코처럼, 펭귄은 뒤뚱걸기, 캥거루는 점프.' },
      { question: '가장 쉬운 동물은?', answer: '특징적 움직임의 동물: 코끼리(코), 펭귄(뒤뚱), 캥거루(점프), 나비(날갯짓).' },
      { question: '동물 소리를 내도 되나요?', answer: '아니요! 제스처 게임에서는 어떤 소리도 낼 수 없습니다. 몸의 움직임만 사용하세요.' },
    ],
    food: [
      { question: '음식을 어떻게 연기하나요?', answer: '먹는 방법을 보여주세요! "피자"는 조각 먹기, "스파게티"는 포크 돌리기.' },
      { question: '어떤 음식이 좋나요?', answer: '먹는 동작이 특징적인 음식: 피자, 스파게티, 아이스크림(콘 핥기), 수박(큰 조각 먹기).' },
      { question: '요리를 어떻게 보여주나요?', answer: '조리 과정을 따라하세요: 뒤집기, 자르기, 섞기, 맛보기.' },
    ],
    occupations: [
      { question: '직업을 어떻게 연기하나요?', answer: '가장 상징적인 동작을! "의사"는 청진기, "소방관"은 호스 쏘기, "요리사"는 요리하기.' },
      { question: '쉬운 직업은?', answer: '소방관, 의사, 요리사, 우주비행사, 선생님 — 모두 명확한 동작이 있습니다.' },
      { question: '추상적 직업은?', answer: '여러 관련 동작을 조합하여 그 직업의 주요 활동을 보여주세요.' },
    ],
  },
  'zh-tw': {
    nouns: [
      { question: '如何表演名詞？', answer: '模擬物品的使用方式！「吉他」就假裝彈弦，「雨傘」就模擬撐開。日常物品具體可見，容易表演。' },
      { question: '最簡單的名詞是？', answer: '有明確動作的名詞：電話（手放耳邊）、相機（拍照）、鏡子（照自己）、腳踏車（踩踏板）。' },
      { question: '名詞適合初學者嗎？', answer: '是的！名詞代表具體可見的物品，對初學者來說最容易表演。' },
    ],
    verbs: [
      { question: '如何表演動詞？', answer: '直接做出動作！「游泳」做游泳姿勢，「煮飯」假裝攪拌鍋子。動作要誇張讓隊友容易猜。' },
      { question: '動詞類有趣嗎？', answer: '動詞是最有趣的類別之一，因為需要用全身來演繹，充滿活力和笑點。' },
      { question: '哪些動詞比較難？', answer: '「冥想」等抽象動詞較難。嘗試拆解成簡單動作，例如盤腿坐下閉眼。' },
    ],
    adjectives: [
      { question: '如何表演形容詞？', answer: '用誇張的肢體語言！「巨大的」張開雙臂，「冰冷的」發抖並擁抱自己。善用表情輔助。' },
      { question: '形容詞比名詞難嗎？', answer: '是的，形容詞較抽象。但「滑溜的」、「冰冷的」等身體感受的形容詞還是很好表演的。' },
      { question: '適合兒童的形容詞？', answer: '「毛茸茸」（撫摸柔軟的動物）、「閃亮的」（手指搖動做閃爍狀）很適合小朋友。' },
    ],
    animals: [
      { question: '如何表演動物？', answer: '模仿最明顯的特徵！大象甩手臂當鼻子、企鵝搖搖擺擺走路、袋鼠跳躍。' },
      { question: '最簡單的動物？', answer: '有特徵動作的動物：大象（鼻子）、企鵝（搖擺走路）、袋鼠（跳躍）、蝴蝶（振翅）。' },
      { question: '可以發出動物叫聲嗎？', answer: '不可以！比手畫腳中不允許發出任何聲音。只能用肢體動作表達。' },
    ],
    food: [
      { question: '如何表演食物？', answer: '展示吃的方式！「披薩」做吃一片的動作，「義大利麵」旋轉叉子。' },
      { question: '哪些食物最好表演？', answer: '有特徵吃法的食物：披薩、義大利麵、冰淇淋（舔甜筒）、西瓜（吃一大片）。' },
      { question: '如何表演烹飪？', answer: '模擬烹飪過程：翻轉、切割、攪拌、品嚐。' },
    ],
    occupations: [
      { question: '如何表演職業？', answer: '模擬最具代表性的動作！「醫生」用聽診器，「消防員」瞄準水管，「廚師」做菜。' },
      { question: '哪些職業最簡單？', answer: '消防員、醫生、廚師、太空人、老師 — 都有明確的代表動作。' },
      { question: '如何表演抽象職業？', answer: '組合多個相關動作來表達該職業的主要活動。' },
    ],
  },
}

export function getCategoryFAQs(lang: string, category: string): FAQItem[] {
  const langData = categoryFAQData[lang] || categoryFAQData.en
  return langData[category] || []
}

