
import { Chapter } from '../types';

export const biologyChapters: Chapter[] = [
  {
    id: 'cell_biology',
    name: 'Cell Biology',
    description: 'Cell structure and cellular processes',
    questions: [
      // Easy Questions
      {
        id: 'cell_1',
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
        correct: 'Mitochondria',
        explanation: 'Mitochondria produce ATP through cellular respiration, earning the nickname "powerhouse of the cell".',
        difficulty: 'easy'
      },
      {
        id: 'cell_2',
        question: 'Which organelle controls the cell\'s activities?',
        options: ['Mitochondria', 'Nucleus', 'Cytoplasm', 'Cell membrane'],
        correct: 'Nucleus',
        explanation: 'The nucleus contains DNA and controls cellular activities.',
        difficulty: 'easy'
      },
      {
        id: 'cell_3',
        question: 'What is the basic unit of life?',
        options: ['Tissue', 'Organ', 'Cell', 'Organism'],
        correct: 'Cell',
        explanation: 'The cell is considered the basic structural and functional unit of life.',
        difficulty: 'easy'
      },
      {
        id: 'cell_4',
        question: 'Which structure is found in plant cells but not animal cells?',
        options: ['Nucleus', 'Cell wall', 'Mitochondria', 'Ribosome'],
        correct: 'Cell wall',
        explanation: 'Plant cells have a rigid cell wall made of cellulose, which animal cells lack.',
        difficulty: 'easy'
      },
      {
        id: 'cell_5',
        question: 'What is the function of ribosomes?',
        options: ['Energy production', 'Protein synthesis', 'Waste removal', 'DNA storage'],
        correct: 'Protein synthesis',
        explanation: 'Ribosomes are the sites of protein synthesis in cells.',
        difficulty: 'easy'
      },
      {
        id: 'cell_6',
        question: 'What surrounds and protects the cell?',
        options: ['Cell wall', 'Cell membrane', 'Cytoplasm', 'Nuclear envelope'],
        correct: 'Cell membrane',
        explanation: 'The cell membrane (plasma membrane) surrounds all cells and controls what enters and exits.',
        difficulty: 'easy'
      },
      {
        id: 'cell_7',
        question: 'Where does photosynthesis occur in plant cells?',
        options: ['Mitochondria', 'Nucleus', 'Chloroplasts', 'Vacuole'],
        correct: 'Chloroplasts',
        explanation: 'Chloroplasts contain chlorophyll and are the sites of photosynthesis.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'cell_8',
        question: 'What is the difference between prokaryotic and eukaryotic cells?',
        options: ['Size only', 'Presence of nucleus', 'Number of chromosomes', 'Type of ribosomes'],
        correct: 'Presence of nucleus',
        explanation: 'Eukaryotic cells have a membrane-bound nucleus, while prokaryotic cells do not.',
        difficulty: 'medium'
      },
      {
        id: 'cell_9',
        question: 'Which organelle is responsible for modifying and packaging proteins?',
        options: ['Endoplasmic reticulum', 'Golgi apparatus', 'Lysosome', 'Peroxisome'],
        correct: 'Golgi apparatus',
        explanation: 'The Golgi apparatus modifies, packages, and ships proteins from the ER.',
        difficulty: 'medium'
      },
      {
        id: 'cell_10',
        question: 'What is the function of lysosomes?',
        options: ['Protein synthesis', 'Energy production', 'Digestion and waste removal', 'DNA replication'],
        correct: 'Digestion and waste removal',
        explanation: 'Lysosomes contain digestive enzymes and break down waste materials.',
        difficulty: 'medium'
      },
      {
        id: 'cell_11',
        question: 'What is the fluid that fills the cell called?',
        options: ['Plasma', 'Cytoplasm', 'Nucleoplasm', 'Protoplasm'],
        correct: 'Cytoplasm',
        explanation: 'Cytoplasm is the gel-like substance that fills the cell and suspends organelles.',
        difficulty: 'medium'
      },
      {
        id: 'cell_12',
        question: 'Which type of ER has ribosomes attached?',
        options: ['Smooth ER', 'Rough ER', 'Both types', 'Neither type'],
        correct: 'Rough ER',
        explanation: 'Rough ER has ribosomes attached to its surface, giving it a "rough" appearance.',
        difficulty: 'medium'
      },
      {
        id: 'cell_13',
        question: 'What maintains the shape of a plant cell?',
        options: ['Cell membrane', 'Cytoskeleton', 'Cell wall', 'Vacuole'],
        correct: 'Cell wall',
        explanation: 'The rigid cell wall provides structural support and maintains cell shape.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'cell_14',
        question: 'Which protein is responsible for active transport across membranes?',
        options: ['Channel proteins', 'Carrier proteins', 'ATP synthase', 'All of the above'],
        correct: 'Carrier proteins',
        explanation: 'Carrier proteins use energy (ATP) to transport substances against concentration gradients.',
        difficulty: 'hard'
      },
      {
        id: 'cell_15',
        question: 'What is the approximate size of a typical prokaryotic cell?',
        options: ['0.1-1 μm', '1-10 μm', '10-100 μm', '100-1000 μm'],
        correct: '1-10 μm',
        explanation: 'Prokaryotic cells are typically 1-10 micrometers in diameter.',
        difficulty: 'hard'
      },
      {
        id: 'cell_16',
        question: 'Which organelle contains its own DNA and ribosomes?',
        options: ['Golgi apparatus', 'Lysosome', 'Mitochondria', 'Peroxisome'],
        correct: 'Mitochondria',
        explanation: 'Mitochondria have their own circular DNA and 70S ribosomes, supporting endosymbiotic theory.',
        difficulty: 'hard'
      },
      {
        id: 'cell_17',
        question: 'What is the function of the nucleolus?',
        options: ['DNA storage', 'Ribosome assembly', 'Protein synthesis', 'Energy production'],
        correct: 'Ribosome assembly',
        explanation: 'The nucleolus is where ribosomal RNA is synthesized and ribosome subunits are assembled.',
        difficulty: 'hard'
      },
      {
        id: 'cell_18',
        question: 'Which structure connects adjacent plant cells?',
        options: ['Gap junctions', 'Tight junctions', 'Plasmodesmata', 'Desmosomes'],
        correct: 'Plasmodesmata',
        explanation: 'Plasmodesmata are channels through cell walls that connect plant cells.',
        difficulty: 'hard'
      },
      {
        id: 'cell_19',
        question: 'What is the primary function of peroxisomes?',
        options: ['Protein synthesis', 'Lipid metabolism', 'DNA repair', 'Cell division'],
        correct: 'Lipid metabolism',
        explanation: 'Peroxisomes break down fatty acids and detoxify harmful substances.',
        difficulty: 'hard'
      },
      {
        id: 'cell_20',
        question: 'Which cytoskeletal element is involved in chromosome movement during mitosis?',
        options: ['Microfilaments', 'Intermediate filaments', 'Microtubules', 'All of the above'],
        correct: 'Microtubules',
        explanation: 'Microtubules form the spindle apparatus that moves chromosomes during cell division.',
        difficulty: 'hard'
      }
    ]
  }
];
