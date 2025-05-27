
import { Chapter } from '../types';

export const historyChapters: Chapter[] = [
  {
    id: 'ancient_ethiopia',
    name: 'Ancient Ethiopia',
    description: 'Early Ethiopian civilizations and kingdoms',
    questions: [
      // Easy Questions
      {
        id: 'anc_1',
        question: 'What was the ancient name for Ethiopia?',
        options: ['Nubia', 'Abyssinia', 'Kush', 'Axum'],
        correct: 'Abyssinia',
        explanation: 'Ethiopia was historically known as Abyssinia, derived from the Arabic term.',
        difficulty: 'easy'
      },
      {
        id: 'anc_2',
        question: 'Which ancient Ethiopian kingdom was famous for its obelisks?',
        options: ['Zagwe', 'Solomonic', 'Axum', 'Gondar'],
        correct: 'Axum',
        explanation: 'The Kingdom of Axum is renowned for its giant obelisks, some still standing today.',
        difficulty: 'easy'
      },
      {
        id: 'anc_3',
        question: 'What religion was introduced to Ethiopia in the 4th century?',
        options: ['Islam', 'Judaism', 'Christianity', 'Buddhism'],
        correct: 'Christianity',
        explanation: 'Christianity was introduced to Ethiopia in the 4th century CE during King Ezana\'s reign.',
        difficulty: 'easy'
      },
      {
        id: 'anc_4',
        question: 'Which city is considered the spiritual center of Ethiopian Orthodox Christianity?',
        options: ['Axum', 'Lalibela', 'Gondar', 'Addis Ababa'],
        correct: 'Lalibela',
        explanation: 'Lalibela is famous for its rock-hewn churches and is a major pilgrimage site.',
        difficulty: 'easy'
      },
      {
        id: 'anc_5',
        question: 'What script is used to write Amharic and other Ethiopian languages?',
        options: ['Latin', 'Arabic', 'Ge\'ez', 'Cyrillic'],
        correct: 'Ge\'ez',
        explanation: 'The Ge\'ez script, also called Fidel, is used for several Ethiopian languages.',
        difficulty: 'easy'
      },
      {
        id: 'anc_6',
        question: 'Which Queen is associated with the legend of the Queen of Sheba?',
        options: ['Queen Yodit', 'Queen Makeda', 'Queen Zara Yaqob', 'Queen Eleni'],
        correct: 'Queen Makeda',
        explanation: 'Queen Makeda is traditionally identified with the biblical Queen of Sheba.',
        difficulty: 'easy'
      },
      {
        id: 'anc_7',
        question: 'What was the primary trade item that made Axum wealthy?',
        options: ['Gold', 'Salt', 'Ivory', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Axum\'s wealth came from trading gold, salt, ivory, and other goods.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'anc_8',
        question: 'Which ruler is credited with converting the Kingdom of Axum to Christianity?',
        options: ['King Kaleb', 'King Ezana', 'King Lalibela', 'King Zara Yaqob'],
        correct: 'King Ezana',
        explanation: 'King Ezana converted to Christianity around 330 CE and made it the official religion.',
        difficulty: 'medium'
      },
      {
        id: 'anc_9',
        question: 'What period followed the decline of the Axumite Kingdom?',
        options: ['Solomonic Period', 'Zagwe Dynasty', 'Portuguese Period', 'Islamic Period'],
        correct: 'Zagwe Dynasty',
        explanation: 'The Zagwe Dynasty ruled from approximately 1137 to 1270 CE.',
        difficulty: 'medium'
      },
      {
        id: 'anc_10',
        question: 'Which ancient Ethiopian text is considered one of the world\'s oldest?',
        options: ['Kebra Nagast', 'Book of Enoch', 'Fetha Nagast', 'Ge\'ez Bible'],
        correct: 'Book of Enoch',
        explanation: 'The Ethiopian Book of Enoch is one of the oldest religious texts, preserved in Ge\'ez.',
        difficulty: 'medium'
      },
      {
        id: 'anc_11',
        question: 'What was the capital of the Zagwe Dynasty?',
        options: ['Axum', 'Roha (Lalibela)', 'Gondar', 'Ankober'],
        correct: 'Roha (Lalibela)',
        explanation: 'The Zagwe capital was Roha, later renamed Lalibela after King Lalibela.',
        difficulty: 'medium'
      },
      {
        id: 'anc_12',
        question: 'Which ancient Ethiopian kingdom controlled trade routes to the Red Sea?',
        options: ['D\'mt', 'Axum', 'Zagwe', 'Both A and B'],
        correct: 'Both A and B',
        explanation: 'Both D\'mt and Axum controlled important Red Sea trade routes.',
        difficulty: 'medium'
      },
      {
        id: 'anc_13',
        question: 'What architectural feature distinguishes Lalibela\'s churches?',
        options: ['They are built on hills', 'They are carved from rock', 'They have golden domes', 'They are made of wood'],
        correct: 'They are carved from rock',
        explanation: 'Lalibela\'s churches are famous for being hewn directly from solid rock.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'anc_14',
        question: 'Which inscription is the most important source for early Axumite history?',
        options: ['RIE 185', 'RIE 270', 'The Ezana Stone', 'The Adulis Inscription'],
        correct: 'The Ezana Stone',
        explanation: 'The Ezana Stone inscription provides crucial information about King Ezana\'s reign and conversion.',
        difficulty: 'hard'
      },
      {
        id: 'anc_15',
        question: 'What was the relationship between the kingdoms of Axum and Himyar?',
        options: ['Allies', 'Enemies', 'Tributaries', 'Trading partners'],
        correct: 'Enemies',
        explanation: 'Axum and Himyar (in Yemen) were often in conflict over trade route control.',
        difficulty: 'hard'
      },
      {
        id: 'anc_16',
        question: 'Which foreign power first established diplomatic relations with Ethiopia?',
        options: ['Rome', 'Byzantium', 'Persia', 'Portugal'],
        correct: 'Byzantium',
        explanation: 'Byzantium established early diplomatic relations with the Axumite Kingdom.',
        difficulty: 'hard'
      },
      {
        id: 'anc_17',
        question: 'What caused the decline of the Axumite Kingdom?',
        options: ['Climate change', 'Islamic expansion', 'Economic factors', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Multiple factors including climate change, Islamic expansion, and economic decline led to Axum\'s fall.',
        difficulty: 'hard'
      },
      {
        id: 'anc_18',
        question: 'Which ancient Ethiopian city was known as the \'Athens of Africa\'?',
        options: ['Axum', 'Gondar', 'Harar', 'Lalibela'],
        correct: 'Gondar',
        explanation: 'Gondar was called the \'Athens of Africa\' for its learning centers and architecture.',
        difficulty: 'hard'
      },
      {
        id: 'anc_19',
        question: 'What was the significance of the Ark of the Covenant in Ethiopian tradition?',
        options: ['Symbol of power', 'Religious relic', 'Trade item', 'Legitimacy source'],
        correct: 'Legitimacy source',
        explanation: 'Ethiopian tradition claims the Ark of the Covenant legitimizes the Solomonic dynasty.',
        difficulty: 'hard'
      },
      {
        id: 'anc_20',
        question: 'Which ancient pre-Axumite kingdom is considered Ethiopia\'s first major civilization?',
        options: ['D\'mt', 'Punt', 'Kush', 'Sheba'],
        correct: 'D\'mt',
        explanation: 'The Kingdom of D\'mt (c. 980-400 BCE) is considered the first major Ethiopian civilization.',
        difficulty: 'hard'
      }
    ]
  }
];
