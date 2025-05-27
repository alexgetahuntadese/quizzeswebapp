
import { Chapter } from '../types';

export const englishChapters: Chapter[] = [
  {
    id: 'grammar',
    name: 'Grammar',
    description: 'Parts of speech, sentence structure, and grammar rules',
    questions: [
      // Easy Questions
      {
        id: 'gram_1',
        question: 'What is a noun?',
        options: ['An action word', 'A describing word', 'A person, place, or thing', 'A connecting word'],
        correct: 'A person, place, or thing',
        explanation: 'A noun is a word that names a person, place, thing, or idea.',
        difficulty: 'easy'
      },
      {
        id: 'gram_2',
        question: 'Which word is a verb in this sentence: "The dog runs quickly"?',
        options: ['dog', 'runs', 'quickly', 'the'],
        correct: 'runs',
        explanation: 'A verb expresses action or state of being. "Runs" shows action.',
        difficulty: 'easy'
      },
      {
        id: 'gram_3',
        question: 'What is an adjective?',
        options: ['A word that describes a noun', 'A word that shows action', 'A word that connects ideas', 'A word that replaces a noun'],
        correct: 'A word that describes a noun',
        explanation: 'An adjective modifies or describes a noun or pronoun.',
        difficulty: 'easy'
      },
      {
        id: 'gram_4',
        question: 'Which sentence is grammatically correct?',
        options: ['She don\'t like apples', 'She doesn\'t like apples', 'She not like apples', 'She no like apples'],
        correct: 'She doesn\'t like apples',
        explanation: 'In third person singular, we use "doesn\'t" not "don\'t".',
        difficulty: 'easy'
      },
      {
        id: 'gram_5',
        question: 'What is the plural of "child"?',
        options: ['childs', 'childes', 'children', 'childern'],
        correct: 'children',
        explanation: 'Child has an irregular plural form: children.',
        difficulty: 'easy'
      },
      {
        id: 'gram_6',
        question: 'Which is a proper noun?',
        options: ['city', 'dog', 'London', 'book'],
        correct: 'London',
        explanation: 'Proper nouns name specific people, places, or things and are capitalized.',
        difficulty: 'easy'
      },
      {
        id: 'gram_7',
        question: 'What type of word is "quickly" in "She runs quickly"?',
        options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        correct: 'Adverb',
        explanation: 'Adverbs modify verbs, adjectives, or other adverbs. "Quickly" modifies "runs".',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'gram_8',
        question: 'Which sentence uses the correct past tense?',
        options: ['I goed to the store', 'I went to the store', 'I go to the store', 'I going to the store'],
        correct: 'I went to the store',
        explanation: 'The past tense of "go" is "went", not "goed".',
        difficulty: 'medium'
      },
      {
        id: 'gram_9',
        question: 'What is the subject in this sentence: "The tall building downtown collapsed"?',
        options: ['tall', 'building', 'downtown', 'collapsed'],
        correct: 'building',
        explanation: 'The subject is what the sentence is about. "Building" is the main noun performing the action.',
        difficulty: 'medium'
      },
      {
        id: 'gram_10',
        question: 'Which sentence shows correct subject-verb agreement?',
        options: ['The students is ready', 'The student are ready', 'The students are ready', 'The student were ready'],
        correct: 'The students are ready',
        explanation: 'Plural subjects require plural verbs. "Students" (plural) takes "are".',
        difficulty: 'medium'
      },
      {
        id: 'gram_11',
        question: 'What is a compound sentence?',
        options: ['A sentence with one subject', 'A sentence with two independent clauses', 'A sentence with one verb', 'A sentence with adjectives'],
        correct: 'A sentence with two independent clauses',
        explanation: 'A compound sentence contains two or more independent clauses joined by a conjunction.',
        difficulty: 'medium'
      },
      {
        id: 'gram_12',
        question: 'Which word is a preposition?',
        options: ['run', 'beautiful', 'under', 'happy'],
        correct: 'under',
        explanation: 'Prepositions show relationships between nouns/pronouns and other words.',
        difficulty: 'medium'
      },
      {
        id: 'gram_13',
        question: 'What is the correct possessive form of "James"?',
        options: ['James\'', 'James\'s', 'Jame\'s', 'James\'es'],
        correct: 'James\'s',
        explanation: 'For singular nouns ending in s, add \'s to form the possessive.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'gram_14',
        question: 'Which sentence contains a dangling modifier?',
        options: ['Running quickly, John caught the bus', 'Running quickly, the bus was caught by John', 'John, running quickly, caught the bus', 'John caught the bus while running quickly'],
        correct: 'Running quickly, the bus was caught by John',
        explanation: 'A dangling modifier occurs when the modifying phrase doesn\'t clearly relate to the subject.',
        difficulty: 'hard'
      },
      {
        id: 'gram_15',
        question: 'What is the mood of this sentence: "If I were rich, I would travel"?',
        options: ['Indicative', 'Imperative', 'Subjunctive', 'Interrogative'],
        correct: 'Subjunctive',
        explanation: 'The subjunctive mood expresses hypothetical or contrary-to-fact situations.',
        difficulty: 'hard'
      },
      {
        id: 'gram_16',
        question: 'Which sentence uses correct parallel structure?',
        options: ['I like swimming, running, and to bike', 'I like swimming, running, and biking', 'I like to swim, running, and biking', 'I like swim, run, and bike'],
        correct: 'I like swimming, running, and biking',
        explanation: 'Parallel structure requires similar grammatical forms in a series.',
        difficulty: 'hard'
      },
      {
        id: 'gram_17',
        question: 'What type of clause is "that she forgot" in "The fact that she forgot surprised me"?',
        options: ['Independent clause', 'Adjective clause', 'Adverb clause', 'Noun clause'],
        correct: 'Noun clause',
        explanation: 'The clause functions as a noun, serving as an appositive to "fact".',
        difficulty: 'hard'
      },
      {
        id: 'gram_18',
        question: 'Which sentence correctly uses the semicolon?',
        options: ['I went to the store; and bought milk', 'I went to the store; I bought milk', 'I went; to the store and bought milk', 'I went to the store and; bought milk'],
        correct: 'I went to the store; I bought milk',
        explanation: 'Semicolons connect two independent clauses that are closely related.',
        difficulty: 'hard'
      },
      {
        id: 'gram_19',
        question: 'What is the function of "whom" in "The person whom I met was kind"?',
        options: ['Subject', 'Direct object', 'Indirect object', 'Predicate nominative'],
        correct: 'Direct object',
        explanation: '"Whom" is the object of the verb "met" in the relative clause.',
        difficulty: 'hard'
      },
      {
        id: 'gram_20',
        question: 'Which sentence demonstrates correct use of the conditional perfect?',
        options: ['If I would have known, I would come', 'If I had known, I would have come', 'If I would know, I would have come', 'If I have known, I would come'],
        correct: 'If I had known, I would have come',
        explanation: 'Conditional perfect uses "had + past participle" in the if-clause and "would have + past participle" in the main clause.',
        difficulty: 'hard'
      }
    ]
  }
];
