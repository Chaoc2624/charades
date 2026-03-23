export interface CategoryContent {
  howToPlay: string
  tips: string[]
}

// Category-specific How-to guide + Tips (unique per category per language)
const categoryContent: Record<string, Record<string, CategoryContent>> = {
  en: {
    nouns: {
      howToPlay: 'Noun charades is all about acting out everyday objects, places, and things. When you draw a noun card, think about how you interact with that object in daily life. For "camera," mime holding one up and snapping a photo. For "umbrella," pretend to open it and hold it over your head. The beauty of noun charades is that most words have a clear, physical representation. Start by showing the size and shape of the object, then demonstrate how it\'s used. If it\'s a compound word, break it into parts — for "sunglasses," show the sun (point up and shade eyes) then glasses (mime putting them on). Nouns are the perfect starting category for beginners!',
      tips: [
        'Show the shape first — Use your hands to outline the object before showing its use',
        'Mime the action — Act out how you use the object (drinking from a cup, typing on a keyboard)',
        'Use size clues — Indicate if the object is big or small with hand spacing',
        'Think context — Where do you see this object? Act out the setting first',
      ],
    },
    verbs: {
      howToPlay: 'Verb charades is the most physical category — you literally perform the action! When acting out verbs, the key is exaggeration. Don\'t just walk; march with high knees. Don\'t just eat; mime taking enormous bites. Verbs often have the advantage of being immediately recognizable if you commit to the performance. For multi-syllable verbs, try acting out related simpler actions first to build context. "Celebrating" could start with jumping and clapping, while "discovering" might begin with searching motions and then showing surprise. Remember, your whole body is your tool — use facial expressions, arm movements, and even your legs!',
      tips: [
        'Go big — The more exaggerated the movement, the easier it is to guess',
        'Use repetition — Repeat the action several times so teammates have time to process',
        'Add context — Before the verb, quickly show WHO is doing the action',
        'Face your audience — Make sure your team can see your full body movements',
      ],
    },
    adjectives: {
      howToPlay: 'Adjective charades is the most creative category — you\'re describing a quality, not an object or action! The trick is to demonstrate the adjective by applying it to something familiar. For "heavy," pretend to pick up an incredibly heavy box and struggle. For "sparkly," wiggle your fingers with jazz hands and point to imaginary glitter. For "tall," reach up high on your tiptoes and keep stretching. Abstract adjectives like "mysterious" require more creativity — try a detective-like sneaking motion with raised eyebrows. Pair facial expressions with body language to really sell the feeling!',
      tips: [
        'Contrast helps — Show the opposite first, then the word. For "tiny," show big, then shrink',
        'Use facial expressions — Adjectives often describe feelings that show on your face',
        'Apply it to an object — Make an imaginary thing that has this quality',
        'Exaggerate the quality — If it\'s "slow," move in extreme slow motion',
      ],
    },
    animals: {
      howToPlay: 'Animal charades is a crowd favorite! The secret to nailing animal charades is to capture the ONE most distinctive feature of the animal. Every animal has a signature move: elephants have their trunk (swing your arm), penguins waddle (arms at sides, take tiny steps), monkeys scratch and jump, cats curl up and lick their paws. Start with the animal\'s movement pattern — how does it walk? Does it fly, swim, hop, or slither? Then add details like size (crouch for small animals, stand tall for giraffes). For less obvious animals, you can show where they live (water? jungle? arctic?) as an extra clue.',
      tips: [
        'Lead with the signature move — Trunk for elephant, hop for kangaroo, waddle for penguin',
        'Show the size — Crouch low for mice, stretch tall for giraffes',
        'Mimic eating style — Pecking for birds, gnawing for rodents, tearing for lions',
        'Show the habitat — Mime swimming for fish, flying for birds, climbing for monkeys',
      ],
    },
    food: {
      howToPlay: 'Food charades combines eating gestures with cooking actions! The best strategy is to show how the food is eaten — everyone recognizes the motion of eating a slice of pizza, twirling spaghetti on a fork, or licking an ice cream cone. For less obvious foods, demonstrate the preparation process: kneading dough for bread, chopping for a salad, rolling for sushi. If the food has a distinctive shape, draw it in the air with your fingers. Don\'t forget about reactions — showing the temperature (blowing on hot soup, brain freeze from ice cream) adds fun clues!',
      tips: [
        'Show how you eat it — The eating gesture is usually the most recognizable clue',
        'Mime the prep — Chopping, stirring, flipping, and rolling are universal cooking gestures',
        'Indicate temperature — Blow to show it\'s hot, shiver to show it\'s cold',
        'Show the shape — Use hands to outline round pizza, long baguette, etc.',
      ],
    },
    occupations: {
      howToPlay: 'Occupation charades is about capturing the iconic action of a profession. Every job has a tool or gesture that defines it: doctors use stethoscopes, firefighters aim hoses, teachers write on boards, chefs cook and taste. Start with the most recognizable tool or action, then add daily routine details. For "astronaut," mime floating in zero gravity, then pretend to put on a helmet. For "photographer," hold up an imaginary camera, adjust the lens, and snap photos. If the job involves uniforms, show putting one on. The more specific your gestures, the faster your team will guess!',
      tips: [
        'Use the iconic tool — Stethoscope for doctor, hose for firefighter, whisk for chef',
        'Show the workplace — Point to where the job happens (hospital, school, kitchen)',
        'Act the daily routine — Show what this person does every day from morning to night',
        'Mime the uniform — Put on a hat, badge, apron, or helmet to signal the profession',
      ],
    },
    movies: {
      howToPlay: 'Movie charades is one of the most popular categories at game night! The trick is to break the movie title into actable parts. For one-word titles like "Jaws," mime the most iconic scene — a shark attack. For longer titles like "Star Wars," act out "star" (point to the sky) then "wars" (fighting). Most people know the standard movie gesture: mime cranking an old film camera. Use that first to signal it\'s a movie, then act out the title. If it\'s a sequel, hold up fingers for the number. Animated movies are often easier because they have iconic characters with big movements — Frozen\'s Let It Go pose, for example.',
      tips: [
        'Signal "movie" first — Crank an imaginary old-fashioned movie camera to show it\'s a film',
        'Act iconic scenes — Every famous movie has a memorable moment everyone knows',
        'Break the title — Split multi-word titles and act each word separately',
        'Use character moves — Mimic the main character\'s most famous gesture or pose',
      ],
    },
    'tv-shows': {
      howToPlay: 'TV show charades works like movie charades but with one extra signal — make a rectangle with your fingers to indicate "TV" before acting. TV shows often have recurring actions or catchphrases (without saying them!) that make them recognizable. For "Friends," the classic couch scene or the "we were on a break" gesture. For animated shows like "SpongeBob," the characters themselves are distinctive enough. Reality shows can be acted out by miming the competition — cooking for MasterChef, singing for The Voice. If the show has a theme song with a famous dance, mime that dance!',
      tips: [
        'Signal "TV" — Make a rectangle shape with your hands to indicate it\'s a show',
        'Use theme song moves — Many shows have iconic opening sequences or dances',
        'Act the format — Cooking show? Sing show? Use the competition format as a clue',
        'Focus on the main character — Act out what the main character is known for',
      ],
    },
    celebrities: {
      howToPlay: 'Celebrity charades is all about capturing what makes someone instantly recognizable. Every famous person has a signature move, look, or activity. Michael Jackson has the moonwalk, Elvis has the hip shake, Charlie Chaplin has the waddle with the cane. For athletes, mime their sport first, then their signature celebration or playing style — Usain Bolt\'s victory pose, for example. For musicians, pretend to play their instrument or mime their most famous performance. The key is to think "what ONE thing does everyone associate with this person?" and commit to it fully.',
      tips: [
        'Signature moves — Every celebrity has one iconic gesture everyone recognizes',
        'Sport first, then style — For athletes, show the sport then their unique playing way',
        'Instrument clues — For musicians, mime their instrument or famous performance',
        'Era and style — Show the time period or fashion style they\'re associated with',
      ],
    },
    sports: {
      howToPlay: 'Sports charades is wonderfully physical! Each sport has a unique set of movements that make it instantly recognizable. The key is to mime the core playing action — swinging a bat for baseball, kicking for football, throwing punches for boxing. For equipment-based sports, start by showing the equipment: hold an imaginary racket for tennis, draw back a bow for archery, grip handlebars for cycling. Team sports can be shown by pointing to imaginary teammates. For less common sports like fencing or archery, the unique stance and movements are your best clues. Always exaggerate the movements for clarity!',
      tips: [
        'Core action — Show the main movement first: kick, swing, throw, or hit',
        'Equipment matters — Mime holding the key equipment: racket, bat, ball, bow',
        'Show the field — Indicate the playing environment: water, ice, court, field',
        'Add celebrations — Score a goal and celebrate to give extra context clues',
      ],
    },
    places: {
      howToPlay: 'Places charades requires you to transport your audience to a location through mime! For landmarks, show their distinctive shape — the Eiffel Tower\'s pointed top with your arms, a pyramid\'s triangle shape. For everyday places like a supermarket, mime the activity you do there — pushing a cart, scanning items. Natural places are great for full-body acting: for "beach" mime swimming and sunbathing, for "volcano" show an explosion from a mountain top. The best strategy is to combine the place\'s visual shape with the activity people do there. For famous buildings, show the size and scale first, then a distinguishing feature.',
      tips: [
        'Shape first — Draw the building or landmark\'s outline with your hands and body',
        'Activity clues — Show what people DO at this place: shop, swim, hike, pray',
        'Temperature hints — Shiver for cold places, fan yourself for hot ones',
        'Show the journey — Mime how you get there: fly for far places, drive for near ones',
      ],
    },
  },
  de: {
    nouns: {
      howToPlay: 'Substantiv-Scharade dreht sich darum, alltägliche Gegenstände, Orte und Dinge darzustellen. Wenn Sie ein Substantiv ziehen, denken Sie daran, wie Sie mit dem Gegenstand im Alltag umgehen. Für "Kamera" mimen Sie das Fotografieren, für "Regenschirm" das Aufspannen. Das Schöne an Substantiven ist, dass die meisten Wörter eine klare physische Darstellung haben. Beginnen Sie mit Größe und Form, dann zeigen Sie die Verwendung.',
      tips: [
        'Zeigen Sie die Form — Die Hände benutzen, um das Objekt zu umreißen',
        'Aktion mimen — So tun, wie Sie den Gegenstand benutzen',
        'Größe anzeigen — Groß oder klein durch Handabstand anzeigen',
        'Kontext zeigen — Wo sieht man den Gegenstand? Die Umgebung darstellen',
      ],
    },
    verbs: {
      howToPlay: 'Verb-Scharade ist die körperlichste Kategorie — Sie führen die Aktion tatsächlich aus! Der Schlüssel ist Übertreibung. Gehen Sie nicht nur, marschieren Sie mit hohen Knien. Die Verben haben den Vorteil, sofort erkennbar zu sein, wenn man sich der Aufführung voll hingibt.',
      tips: [
        'Groß machen — Je übertriebener, desto einfacher zu erraten',
        'Wiederholen — Die Aktion mehrmals wiederholen',
        'Kontext hinzufügen — Zeigen Sie WER die Aktion ausführt',
        'Zum Publikum gewandt — Stellen Sie sicher, dass Ihr Team alles sehen kann',
      ],
    },
    adjectives: {
      howToPlay: 'Adjektiv-Scharade ist die kreativste Kategorie — Sie beschreiben eine Eigenschaft! Der Trick ist, das Adjektiv auf etwas Bekanntes anzuwenden. Für "schwer" so tun, als würde man eine extrem schwere Kiste heben. Für "glitzernd" die Finger wackeln und auf imaginären Glitzer zeigen.',
      tips: [
        'Kontraste helfen — Erst das Gegenteil zeigen, dann das Wort',
        'Gesichtsausdrücke nutzen — Adjektive zeigen sich oft im Gesicht',
        'Auf ein Objekt anwenden — Einen Gegenstand mit dieser Eigenschaft erschaffen',
        'Eigenschaft übertreiben — Wenn "langsam", in extremer Zeitlupe bewegen',
      ],
    },
    animals: {
      howToPlay: 'Tier-Scharade ist ein Publikumsliebling! Das Geheimnis ist, das EINE markanteste Merkmal des Tieres einzufangen. Jedes Tier hat eine Signalbewegung: Elefanten den Rüssel, Pinguine watscheln, Affen kratzen und springen. Beginnen Sie mit dem Bewegungsmuster des Tieres.',
      tips: [
        'Mit der Signalbewegung beginnen — Rüssel für Elefant, Hüpfen für Känguru',
        'Größe zeigen — Klein für Mäuse, groß für Giraffen',
        'Fressverhalten imitieren — Picken für Vögel, Nagen für Nager',
        'Lebensraum zeigen — Schwimmen für Fische, Fliegen für Vögel',
      ],
    },
    food: {
      howToPlay: 'Essen-Scharade verbindet Essgesten mit Kochaktionen! Die beste Strategie ist zu zeigen, wie das Essen gegessen wird — jeder erkennt die Bewegung, ein Stück Pizza zu essen oder Spaghetti auf eine Gabel zu drehen. Für weniger offensichtliche Speisen zeigen Sie die Zubereitung.',
      tips: [
        'Zeigen, wie man es isst — Die Essgeste ist der erkennbarste Hinweis',
        'Zubereitung mimen — Schneiden, Rühren, Wenden, Rollen',
        'Temperatur anzeigen — Pusten für heiß, Zittern für kalt',
        'Form zeigen — Hände für runde Pizza, langes Baguette nutzen',
      ],
    },
    occupations: {
      howToPlay: 'Berufe-Scharade erfasst die ikonische Aktion eines Berufs. Jeder Job hat ein Werkzeug, das ihn definiert: Ärzte benutzen Stethoskope, Feuerwehrleute zielen mit Schläuchen, Lehrer schreiben an die Tafel. Beginnen Sie mit dem erkennbarsten Werkzeug oder der erkennbarsten Aktion.',
      tips: [
        'Das ikonische Werkzeug nutzen — Stethoskop für Arzt, Schlauch für Feuerwehrmann',
        'Arbeitsplatz zeigen — Wo der Job stattfindet',
        'Tagesroutine spielen — Was diese Person jeden Tag tut',
        'Uniform mimen — Hut, Abzeichen, Schürze aufsetzen',
      ],
    },
  },
  fr: {
    nouns: {
      howToPlay: 'Les charades de noms consistent à mimer des objets, des lieux et des choses du quotidien. Quand vous tirez un nom, pensez à comment vous interagissez avec cet objet dans la vie. Pour "appareil photo," mimez prendre une photo. Pour "parapluie," mimez l\'ouvrir au-dessus de votre tête.',
      tips: [
        'Montrez la forme — Utilisez vos mains pour dessiner l\'objet',
        'Mimez l\'utilisation — Comment utilise-t-on cet objet ?',
        'Indiquez la taille — Grand ou petit avec l\'espacement des mains',
        'Montrez le contexte — Où voit-on cet objet ?',
      ],
    },
    verbs: {
      howToPlay: 'Les charades de verbes sont la catégorie la plus physique — vous exécutez l\'action ! La clé est l\'exagération. Ne marchez pas simplement, marchez avec les genoux hauts. Engagez tout votre corps pour rendre l\'action reconnaissable.',
      tips: ['Exagérez — Plus c\'est grand, mieux c\'est', 'Répétez — Refaites l\'action plusieurs fois', 'Ajoutez du contexte — Montrez QUI fait l\'action', 'Face au public — Assurez-vous que votre équipe voit tout'],
    },
    adjectives: {
      howToPlay: 'Les charades d\'adjectifs sont la catégorie la plus créative — vous décrivez une qualité ! L\'astuce est de démontrer l\'adjectif en l\'appliquant à quelque chose de familier. Pour "lourd," faites semblant de soulever une boîte et luttez.',
      tips: ['Les contrastes aident — Montrez d\'abord l\'opposé', 'Expressions faciales — Les adjectifs se montrent sur le visage', 'Appliquez à un objet — Créez un objet imaginaire avec cette qualité', 'Exagérez la qualité — Si c\'est "lent," bougez au ralenti'],
    },
    animals: {
      howToPlay: 'Les charades d\'animaux sont un favori du public ! Le secret est de capturer le trait le plus distinctif de l\'animal. Chaque animal a un mouvement signature : les éléphants avec leur trompe, les pingouins qui se dandinent.',
      tips: ['Mouvement signature — Trompe pour éléphant, sauts pour kangourou', 'Montrez la taille — Petit pour souris, grand pour girafe', 'Imitez l\'alimentation — Picorer pour oiseaux, ronger pour rongeurs', 'Montrez l\'habitat — Nager pour poissons, voler pour oiseaux'],
    },
    food: {
      howToPlay: 'Les charades de nourriture combinent les gestes de manger et de cuisiner ! La meilleure stratégie est de montrer comment la nourriture est mangée — tout le monde reconnaît le mouvement de manger une part de pizza ou de tourner des spaghetti.',
      tips: ['Montrez comment on mange — Le geste le plus reconnaissable', 'Mimez la préparation — Couper, mélanger, retourner', 'Indiquez la température — Souffler pour chaud, frissonner pour froid', 'Montrez la forme — Rond pour pizza, long pour baguette'],
    },
    occupations: {
      howToPlay: 'Les charades de métiers capturent l\'action iconique d\'une profession. Chaque métier a un outil qui le définit : les médecins utilisent des stéthoscopes, les pompiers visent avec des tuyaux, les professeurs écrivent au tableau.',
      tips: ['L\'outil iconique — Stéthoscope pour médecin, tuyau pour pompier', 'Montrez le lieu de travail — Hôpital, école, cuisine', 'Jouez la routine quotidienne — Ce que cette personne fait chaque jour', 'Mimez l\'uniforme — Chapeau, badge, tablier'],
    },
  },
  es: {
    nouns: {
      howToPlay: 'Las charadas de sustantivos consisten en actuar objetos, lugares y cosas cotidianas. Cuando sacas un sustantivo, piensa en cómo interactúas con ese objeto en la vida diaria. Para "cámara," finge tomar una foto. Para "paraguas," mima abrirlo sobre tu cabeza.',
      tips: ['Muestra la forma — Usa tus manos para delinear el objeto', 'Mima la acción — ¿Cómo se usa el objeto?', 'Indica el tamaño — Grande o pequeño con el espacio entre manos', 'Muestra el contexto — ¿Dónde se ve este objeto?'],
    },
    verbs: {
      howToPlay: 'Las charadas de verbos son la categoría más física — ¡literalmente realizas la acción! La clave es la exageración. No solo camines; marcha con las rodillas altas.',
      tips: ['Exagera — Cuanto más grande, mejor', 'Repite — Haz la acción varias veces', 'Añade contexto — Muestra QUIÉN hace la acción', 'Mira al público — Asegúrate de que tu equipo ve todo'],
    },
    adjectives: {
      howToPlay: 'Las charadas de adjetivos son la categoría más creativa — ¡describes una cualidad! El truco es demostrar el adjetivo aplicándolo a algo familiar.',
      tips: ['Los contrastes ayudan — Muestra lo opuesto primero', 'Expresiones faciales — Los adjetivos se muestran en la cara', 'Aplica a un objeto — Crea un objeto imaginario con esa cualidad', 'Exagera la cualidad — Si es "lento," muévete en cámara lenta'],
    },
    animals: {
      howToPlay: 'Las charadas de animales son las favoritas del público. El secreto es capturar el rasgo más distintivo del animal. Cada animal tiene un movimiento característico.',
      tips: ['Movimiento característico — Trompa para elefante, saltos para canguro', 'Muestra el tamaño — Pequeño para ratones, grande para jirafas', 'Imita la alimentación — Picoteo para aves, roer para roedores', 'Muestra el hábitat — Nadar para peces, volar para aves'],
    },
    food: {
      howToPlay: 'Las charadas de comida combinan gestos de comer con acciones de cocinar. La mejor estrategia es mostrar cómo se come la comida — todos reconocen comer un trozo de pizza.',
      tips: ['Muestra cómo se come — El gesto más reconocible', 'Mima la preparación — Cortar, mezclar, voltear', 'Indica la temperatura — Soplar para caliente, temblar para frío', 'Muestra la forma — Redondo para pizza, largo para baguette'],
    },
    occupations: {
      howToPlay: 'Las charadas de profesiones capturan la acción icónica de una profesión. Cada trabajo tiene una herramienta que lo define: los doctores usan estetoscopios, los bomberos apuntan mangueras.',
      tips: ['La herramienta icónica — Estetoscopio para doctor, manguera para bombero', 'Muestra el lugar de trabajo — Hospital, escuela, cocina', 'Actúa la rutina diaria — Lo que esta persona hace cada día', 'Mima el uniforme — Sombrero, placa, delantal'],
    },
  },
  it: {
    nouns: {
      howToPlay: 'La sciarada di sostantivi consiste nel mimare oggetti, luoghi e cose di tutti i giorni. Quando peschi un sostantivo, pensa a come interagisci con quell\'oggetto. Per "fotocamera," mima scattare una foto. Per "ombrello," mima aprirlo sopra la testa.',
      tips: ['Mostra la forma — Usa le mani per delineare l\'oggetto', 'Mima l\'utilizzo — Come si usa l\'oggetto?', 'Indica la dimensione — Grande o piccolo con lo spazio tra le mani', 'Mostra il contesto — Dove si vede questo oggetto?'],
    },
    verbs: { howToPlay: 'La sciarada di verbi è la categoria più fisica — esegui letteralmente l\'azione! La chiave è l\'esagerazione. Non camminare semplicemente; marcia con le ginocchia alte.', tips: ['Esagera — Più grande è il movimento, meglio è', 'Ripeti — Rifai l\'azione più volte', 'Aggiungi contesto — Mostra CHI fa l\'azione', 'Guarda il pubblico — Il team deve vedere tutto'] },
    adjectives: { howToPlay: 'La sciarada di aggettivi è la categoria più creativa — descrivi una qualità! Il trucco è dimostrare l\'aggettivo applicandolo a qualcosa di familiare.', tips: ['I contrasti aiutano — Mostra prima l\'opposto', 'Espressioni facciali — Gli aggettivi si mostrano sul viso', 'Applicalo a un oggetto — Crea un oggetto immaginario con questa qualità', 'Esagera la qualità — Se è "lento," muoviti al rallentatore'] },
    animals: { howToPlay: 'La sciarada di animali è la preferita dal pubblico! Il segreto è catturare il tratto più distintivo dell\'animale.', tips: ['Movimento distintivo — Proboscide per elefante, salti per canguro', 'Mostra la dimensione — Piccolo per topi, grande per giraffe', 'Imita l\'alimentazione — Beccare per uccelli, rosicchiare per roditori', 'Mostra l\'habitat — Nuotare per pesci, volare per uccelli'] },
    food: { howToPlay: 'La sciarada di cibo combina gesti del mangiare con azioni del cucinare. Mostra come si mangia il cibo — tutti riconoscono mangiare una fetta di pizza.', tips: ['Mostra come si mangia — Il gesto più riconoscibile', 'Mima la preparazione — Tagliare, mescolare, girare', 'Indica la temperatura — Soffiare per caldo, tremare per freddo', 'Mostra la forma — Rotondo per pizza, lungo per baguette'] },
    occupations: { howToPlay: 'La sciarada di professioni cattura l\'azione iconica di una professione. Ogni lavoro ha uno strumento che lo definisce.', tips: ['Lo strumento iconico — Stetoscopio per dottore, manichetta per pompiere', 'Mostra il posto di lavoro — Ospedale, scuola, cucina', 'Recita la routine quotidiana — Cosa fa questa persona ogni giorno', 'Mima l\'uniforme — Cappello, distintivo, grembiule'] },
  },
  ja: {
    nouns: {
      howToPlay: '名詞のジェスチャーゲームは、日常的な物や場所を演じることです。名詞を引いたら、日常でその物をどう使うか考えましょう。「カメラ」なら写真を撮る動作、「傘」なら開く動作。名詞の良いところは、ほとんどの言葉に明確な物理的表現があることです。',
      tips: ['形を見せる — 手で物の輪郭を描く', '使い方を演じる — その物をどう使うか', 'サイズを示す — 手の間隔で大小を表現', '文脈を示す — その物はどこにある？'],
    },
    verbs: { howToPlay: '動詞のジェスチャーゲームは最も体を使うカテゴリー — 実際に動作を行います！鍵は誇張です。ただ歩くのではなく、膝を高く上げて行進しましょう。', tips: ['大きく — 誇張するほど当てやすい', '繰り返す — 何度も動作を繰り返す', '文脈を加える — 誰がその動作をするか示す', '観客に向かって — チームが全て見えるように'] },
    adjectives: { howToPlay: '形容詞のジェスチャーゲームは最もクリエイティブ — 性質を表現します！コツは、馴染みのあるものに形容詞を適用すること。「重い」なら重い箱を持ち上げて苦戦する演技を。', tips: ['対比を使う — 先に反対を見せてから本番', '表情を使う — 形容詞は顔に出る', '物に適用する — その性質を持つ想像上の物を作る', '性質を誇張する — 「遅い」ならスローモーション'] },
    animals: { howToPlay: '動物のジェスチャーゲームは最も人気！秘訣は動物の最も特徴的な1つの特徴を捉えること。各動物にはシグネチャームーブがあります。', tips: ['シグネチャームーブから — ゾウは鼻、カンガルーはジャンプ', 'サイズを示す — ネズミは小さく、キリンは大きく', '食べ方を真似 — 鳥はつつく、齧歯類はかじる', '生息地を示す — 魚は泳ぐ、鳥は飛ぶ'] },
    food: { howToPlay: '食べ物のジェスチャーは食べるジェスチャーと調理動作を組み合わせます！食べ方を見せるのが最良の戦略 — ピザを食べるやスパゲッティを巻く動作は誰もが認識します。', tips: ['食べ方を示す — 最も認識しやすい手がかり', '調理を演じる — 切る、混ぜる、ひっくり返す', '温度を示す — 熱いなら吹く、冷たいなら震える', '形を示す — ピザは丸く、バゲットは長く'] },
    occupations: { howToPlay: '職業のジェスチャーは職業の象徴的な動作を捉えます。各仕事にはそれを定義する道具や動作があります。', tips: ['象徴的な道具を使う — 医者は聴診器、消防士はホース', '職場を示す — 病院、学校、キッチン', '日課を演じる — この人が毎日何をするか', '制服を演じる — 帽子、バッジ、エプロン'] },
  },
  ko: {
    nouns: {
      howToPlay: '명사 제스처 게임은 일상적인 물건, 장소, 사물을 연기하는 것입니다. 명사를 뽑으면, 일상에서 그 물건을 어떻게 사용하는지 생각하세요. "카메라"는 사진 찍는 동작, "우산"은 펴는 동작.',
      tips: ['형태를 보여주기 — 손으로 물건의 윤곽을 그리기', '사용법 연기 — 물건을 어떻게 사용하는지', '크기 표시 — 손 간격으로 크고 작음 표현', '맥락 보여주기 — 이 물건은 어디에 있는지'],
    },
    verbs: { howToPlay: '동사 제스처 게임은 가장 신체적인 카테고리 — 실제로 행동을 합니다! 핵심은 과장입니다.', tips: ['크게 — 과장할수록 맞추기 쉽다', '반복 — 여러 번 동작 반복', '맥락 추가 — 누가 행동하는지 보여주기', '관객을 향해 — 팀이 모든 것을 볼 수 있게'] },
    adjectives: { howToPlay: '형용사 제스처 게임은 가장 창의적인 카테고리 — 성질을 설명합니다! 비결은 친숙한 것에 형용사를 적용하는 것입니다.', tips: ['대비 활용 — 반대를 먼저 보여주기', '표정 활용 — 형용사는 얼굴에 나타남', '물건에 적용 — 그 성질을 가진 상상의 물건 만들기', '성질 과장 — "느린"이면 극단적 슬로모션'] },
    animals: { howToPlay: '동물 제스처 게임은 가장 인기 있습니다! 비결은 동물의 가장 특징적인 한 가지를 포착하는 것입니다.', tips: ['시그니처 동작부터 — 코끼리는 코, 캥거루는 점프', '크기 표시 — 쥐는 작게, 기린은 크게', '먹는 방식 모방 — 새는 쪼기, 설치류는 갉기', '서식지 표시 — 물고기는 수영, 새는 날기'] },
    food: { howToPlay: '음식 제스처 게임은 먹는 동작과 요리 동작을 결합합니다! 먹는 방법을 보여주는 것이 최고의 전략입니다.', tips: ['먹는 방법 보여주기 — 가장 알아보기 쉬운 단서', '조리법 연기 — 자르기, 섞기, 뒤집기', '온도 표시 — 뜨거우면 불기, 차가우면 떨기', '형태 보여주기 — 피자는 둥글게, 바게트는 길게'] },
    occupations: { howToPlay: '직업 제스처 게임은 직업의 상징적 행동을 포착합니다. 각 직업에는 그것을 정의하는 도구가 있습니다.', tips: ['상징적 도구 사용 — 의사는 청진기, 소방관은 호스', '직장 보여주기 — 병원, 학교, 주방', '일과 연기 — 이 사람이 매일 하는 일', '유니폼 연기 — 모자, 배지, 앞치마'] },
  },
  'zh-tw': {
    nouns: {
      howToPlay: '名詞比手畫腳就是表演日常物品、場所和事物。抽到名詞時，想想你在日常生活中如何使用這個物品。「相機」就模擬拍照，「雨傘」就模擬撐開。名詞的好處是大多數詞都有清晰的實體表現。',
      tips: ['展示形狀 — 用手勾勒物品輪廓', '模擬使用方式 — 如何使用這個物品？', '標示大小 — 用手距表示大或小', '展示情境 — 這個物品通常在哪裡出現？'],
    },
    verbs: { howToPlay: '動詞比手畫腳是最需要體力的類別 — 你要實際做出動作！關鍵是誇張。不要只是走，要高抬膝蓋行進。', tips: ['誇張 — 動作越大越容易猜', '重複 — 多次重複動作', '增加情境 — 展示誰在做這個動作', '面向觀眾 — 確保隊友看得到'] },
    adjectives: { howToPlay: '形容詞比手畫腳是最有創意的類別 — 你在描述一種特質！訣竅是將形容詞應用到熟悉的事物上。', tips: ['對比有幫助 — 先展示反義詞', '表情 — 形容詞常常表現在臉上', '應用到物品 — 創造一個有這種特質的想像物品', '誇大特質 — 如果是「慢」就用極慢動作'] },
    animals: { howToPlay: '動物比手畫腳是最受歡迎的！秘訣是捕捉動物最獨特的一個特徵。每種動物都有招牌動作。', tips: ['從招牌動作開始 — 大象是鼻子，袋鼠是跳躍', '展示大小 — 老鼠蹲低，長頸鹿站高', '模仿進食方式 — 鳥類啄食，嚙齒類啃咬', '展示棲息地 — 魚游泳，鳥飛翔'] },
    food: { howToPlay: '食物比手畫腳結合吃的手勢和烹飪動作！展示怎麼吃是最佳策略 — 大家都認得吃披薩片、捲義大利麵的動作。', tips: ['展示怎麼吃 — 最容易辨認的線索', '模擬烹飪 — 切、攪、翻、捲', '標示溫度 — 熱的就吹，冷的就發抖', '展示形狀 — 披薩是圓的，法棍是長的'] },
    occupations: { howToPlay: '職業比手畫腳捕捉職業的標誌性動作。每個工作都有定義它的工具或手勢。', tips: ['標誌性工具 — 醫生用聽診器，消防員用水管', '展示工作場所 — 醫院、學校、廚房', '演繹日常工作 — 這個人每天做什麼', '模擬制服 — 帽子、徽章、圍裙'] },
  },
}

export function getCategoryContent(lang: string, category: string): CategoryContent | undefined {
  const langData = categoryContent[lang] || categoryContent.en
  return langData[category]
}
