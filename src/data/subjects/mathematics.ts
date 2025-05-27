
import { Chapter } from '../types';

export const mathematicsChapters: 
Chapter[] = [
{
  id: 'functions',
  name: 'Functions',
  description: 'Understanding mathematical functions and their properties',
  questions: [
    {
      id: 'func_1',
      question: 'What is the domain of f(x) = 1/x?',
      options: ['All real numbers', 'All real numbers except 0', 'Only positive numbers', 'Only negative numbers'],
      correct: 'All real numbers except 0',
      explanation: 'Division by zero is undefined, so x cannot equal 0.',
      difficulty: 'easy'
    },
    {
      id: 'func_2',
      question: 'What is f(3) if f(x) = x² + 2?',
      options: ['5', '9', '11', '7'],
      correct: '11',
      explanation: 'Substitute x = 3: f(3) = 3² + 2 = 9 + 2 = 11.',
      difficulty: 'easy'
    },
    {
      id: 'func_3',
      question: 'Which of the following is not a function?',
      options: ['y = x²', 'y = √x', 'x = y²', 'y = 2x + 3'],
      correct: 'x = y²',
      explanation: 'x = y² fails the vertical line test, so it is not a function.',
      difficulty: 'easy'
    },
    {
      id: 'func_4',
      question: 'What is the range of f(x) = x²?',
      options: ['All real numbers', 'x ≥ 0', 'x > 0', 'x ≤ 0'],
      correct: 'x ≥ 0',
      explanation: 'The square of any real number is non-negative.',
      difficulty: 'easy'
    },
    {
      id: 'func_5',
      question: 'Which of the following is the inverse of f(x) = 2x + 1?',
      options: ['f⁻¹(x) = (x - 1)/2', 'f⁻¹(x) = 2x - 1', 'f⁻¹(x) = x + 1', 'f⁻¹(x) = (x + 1)/2'],
      correct: 'f⁻¹(x) = (x - 1)/2',
      explanation: 'To find the inverse, solve y = 2x + 1 for x.',
      difficulty: 'easy'
    },
    {
      id: 'func_6',
      question: 'If f(x) = x - 3 and g(x) = x², what is (f ∘ g)(2)?',
      options: ['1', '4', '2', '0'],
      correct: '-1',
      explanation: 'g(2) = 4; then f(4) = 4 - 3 = 1.',
      difficulty: 'easy'
    },
    {
      id: 'func_7',
      question: 'Which function is linear?',
      options: ['f(x) = 2x', 'f(x) = x²', 'f(x) = 1/x', 'f(x) = √x'],
      correct: 'f(x) = 2x',
      explanation: 'A linear function has the form f(x) = mx + b.',
      difficulty: 'easy'
    },
    {
      id: 'func_8',
      question: 'What is the value of f(0) if f(x) = 5x + 7?',
      options: ['7', '5', '0', '-7'],
      correct: '7',
      explanation: 'f(0) = 5×0 + 7 = 7.',
      difficulty: 'easy'
    },
    {
      id: 'func_9',
      question: 'What type of function is f(x) = |x|?',
      options: ['Linear', 'Quadratic', 'Absolute value', 'Exponential'],
      correct: 'Absolute value',
      explanation: 'The function has a "V" shape and represents absolute value.',
      difficulty: 'easy'
    },
    {
      id: 'func_10',
      question: 'What is the image of x = 2 under f(x) = 3x - 1?',
      options: ['5', '6', '7', '4'],
      correct: '5',
      explanation: 'f(2) = 3×2 - 1 = 6 - 1 = 5.',
      difficulty: 'easy'
},




      // Medium Questions
      {
        id: 'func_8',
        question: 'If f(x) = x² - 4x + 3, what are the zeros of the function?',
        options: ['x = 1, x = 3', 'x = -1, x = -3', 'x = 2, x = 4', 'x = 0, x = 3'],
        correct: 'x = 1, x = 3',
        explanation: 'Setting f(x) = 0: x² - 4x + 3 = 0, which factors to (x-1)(x-3) = 0.',
        difficulty: 'medium'
      },
      {
        id: 'func_9',
        question: 'What is the inverse of f(x) = 2x + 6?',
        options: ['f⁻¹(x) = (x - 6)/2', 'f⁻¹(x) = (x + 6)/2', 'f⁻¹(x) = 2x - 6', 'f⁻¹(x) = x/2 - 3'],
        correct: 'f⁻¹(x) = (x - 6)/2',
        explanation: 'To find the inverse: y = 2x + 6, solve for x: x = (y - 6)/2, so f⁻¹(x) = (x - 6)/2.',
        difficulty: 'medium'
      },
      {
        id: 'func_10',
        question: 'If f(x) = x² and g(x) = x + 1, what is (f ∘ g)(x)?',
        options: ['x² + 1', '(x + 1)²', 'x² + x + 1', 'x³ + x²'],
        correct: '(x + 1)²',
        explanation: '(f ∘ g)(x) = f(g(x)) = f(x + 1) = (x + 1)²',
        difficulty: 'medium'
      },
      {
        id: 'func_11',
        question: 'What is the vertex of the parabola f(x) = x² - 6x + 8?',
        options: ['(3, -1)', '(-3, 1)', '(3, 1)', '(-3, -1)'],
        correct: '(3, -1)',
        explanation: 'For f(x) = ax² + bx + c, vertex x = -b/(2a) = 6/2 = 3. f(3) = 9 - 18 + 8 = -1.',
        difficulty: 'medium'
      },
      {
        id: 'func_12',
        question: 'Which function represents a vertical shift of f(x) = x² up by 3 units?',
        options: ['f(x) = (x + 3)²', 'f(x) = x² + 3', 'f(x) = 3x²', 'f(x) = (x - 3)²'],
        correct: 'f(x) = x² + 3',
        explanation: 'Adding a constant to a function shifts it vertically.',
        difficulty: 'medium'
      },
      {
        id: 'func_13',
        question: 'If f(x) = |x - 2|, what is f(-1)?',
        options: ['1', '3', '-1', '-3'],
        correct: '3',
        explanation: 'f(-1) = |-1 - 2| = |-3| = 3',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'func_14',
        question: 'Find the domain of f(x) = √(x² - 9).',
        options: ['x ≥ 3', 'x ≤ -3 or x ≥ 3', '-3 ≤ x ≤ 3', 'All real numbers'],
        correct: 'x ≤ -3 or x ≥ 3',
        explanation: 'For the square root to be defined, x² - 9 ≥ 0, which means x² ≥ 9, so x ≤ -3 or x ≥ 3.',
        difficulty: 'hard'
      },
      {
        id: 'func_15',
        question: 'If f(x) = (x² - 1)/(x - 1), what is lim(x→1) f(x)?',
        options: ['1', '2', '0', 'Undefined'],
        correct: '2',
        explanation: 'Factor: f(x) = (x-1)(x+1)/(x-1) = x+1 for x≠1. So lim(x→1) f(x) = 1+1 = 2.',
        difficulty: 'hard'
      },
      {
        id: 'func_16',
        question: 'What is the period of f(x) = sin(2x)?',
        options: ['π', '2π', 'π/2', '4π'],
        correct: 'π',
        explanation: 'For sin(kx), the period is 2π/k. Here k = 2, so period = 2π/2 = π.',
        difficulty: 'hard'
      },
      {
        id: 'func_17',
        question: 'If f(x) = e^x and g(x) = ln(x), what is (f ∘ g)(x)?',
        options: ['x', 'e^(ln(x))', 'ln(e^x)', 'e^x + ln(x)'],
        correct: 'x',
        explanation: '(f ∘ g)(x) = f(g(x)) = f(ln(x)) = e^(ln(x)) = x for x > 0.',
        difficulty: 'hard'
      },
      {
        id: 'func_18',
        question: 'Find the range of f(x) = 1/(x² + 1).',
        options: ['(0, 1]', '[0, 1]', '(0, 1)', '[1, ∞)'],
        correct: '(0, 1]',
        explanation: 'Since x² + 1 ≥ 1 for all real x, we have 0 < 1/(x² + 1) ≤ 1.',
        difficulty: 'hard'
      },
      {
        id: 'func_19',
        question: 'What is the horizontal asymptote of f(x) = (3x² + 2)/(x² - 1)?',
        options: ['y = 0', 'y = 1', 'y = 3', 'y = -1'],
        correct: 'y = 3',
        explanation: 'For rational functions where degrees are equal, the horizontal asymptote is the ratio of leading coefficients: 3/1 = 3.',
        difficulty: 'hard'
      },
      {
        id: 'func_20',
        question: 'If f(x) = x³ - 3x, find the critical points.',
        options: ['x = 0', 'x = ±1', 'x = ±√3', 'x = ±3'],
        correct: 'x = ±1',
        explanation: "f'(x) = 3x² - 3 = 0, so 3x² = 3, x² = 1, x = ±1.",
        difficulty: 'hard'
  },
  {
    id: 'calculus',
    name: 'Calculus',
    description: 'Limits, derivatives, and integrals',
    questions: [
      // Easy Questions
      {
        id: 'calc_1',
        question: 'What is the derivative of f(x) = x²?',
        options: ['x', '2x', 'x²', '2'],
        correct: '2x',
        explanation: 'Using the power rule: d/dx(x²) = 2x¹ = 2x',
        difficulty: 'easy'
      },
      {
        id: 'calc_2',
        question: 'What is the derivative of f(x) = 5x?',
        options: ['5', '5x', 'x', '0'],
        correct: '5',
        explanation: 'The derivative of a linear function ax is simply a.',
        difficulty: 'easy'
      },
      {
        id: 'calc_3',
        question: 'What is ∫3dx?',
        options: ['3', '3x', '3x + C', 'x + C'],
        correct: '3x + C',
        explanation: 'The integral of a constant k is kx + C.',
        difficulty: 'easy'
      },
      {
        id: 'calc_4',
        question: 'What is lim(x→2) (x + 1)?',
        options: ['2', '3', '1', '0'],
        correct: '3',
        explanation: 'For continuous functions, the limit equals the function value: 2 + 1 = 3.',
        difficulty: 'easy'
      },
      {
        id: 'calc_5',
        question: 'What is the derivative of f(x) = 7?',
        options: ['7', '0', '7x', '1'],
        correct: '0',
        explanation: 'The derivative of any constant is 0.',
        difficulty: 'easy'
      },
      {
        id: 'calc_6',
        question: 'What is ∫x dx?',
        options: ['x', 'x²/2 + C', 'x² + C', '1'],
        correct: 'x²/2 + C',
        explanation: 'Using the power rule for integration: ∫x¹dx = x²/2 + C.',
        difficulty: 'easy'
      },
      {
        id: 'calc_7',
        question: 'What is the derivative of f(x) = x³?',
        options: ['3x²', 'x²', '3x', 'x³'],
        correct: '3x²',
        explanation: 'Using the power rule: d/dx(x³) = 3x².',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'calc_8',
        question: 'What is the derivative of f(x) = sin(x)?',
        options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
        correct: 'cos(x)',
        explanation: 'The derivative of sin(x) is cos(x).',
        difficulty: 'medium'
      },
      {
        id: 'calc_9',
        question: 'Using the chain rule, what is the derivative of f(x) = (2x + 1)³?',
        options: ['3(2x + 1)²', '6(2x + 1)²', '(2x + 1)²', '6(2x + 1)'],
        correct: '6(2x + 1)²',
        explanation: 'Chain rule: f\'(x) = 3(2x + 1)² · 2 = 6(2x + 1)².',
        difficulty: 'medium'
      },
      {
        id: 'calc_10',
        question: 'What is ∫(2x + 3)dx?',
        options: ['x² + 3x + C', '2x² + 3x + C', 'x² + 3 + C', '2 + C'],
        correct: 'x² + 3x + C',
        explanation: '∫(2x + 3)dx = ∫2x dx + ∫3 dx = x² + 3x + C.',
        difficulty: 'medium'
      },
      {
        id: 'calc_11',
        question: 'What is lim(x→0) (sin(x)/x)?',
        options: ['0', '1', '∞', 'Undefined'],
        correct: '1',
        explanation: 'This is a standard limit: lim(x→0) (sin(x)/x) = 1.',
        difficulty: 'medium'
      },
      {
        id: 'calc_12',
        question: 'Find the critical points of f(x) = x² - 4x + 3.',
        options: ['x = 2', 'x = 4', 'x = 1', 'x = 3'],
        correct: 'x = 2',
        explanation: 'f\'(x) = 2x - 4 = 0, so x = 2.',
        difficulty: 'medium'
      },
      {
        id: 'calc_13',
        question: 'What is the derivative of f(x) = e^x?',
        options: ['e^x', 'xe^(x-1)', '1', 'e'],
        correct: 'e^x',
        explanation: 'The derivative of e^x is e^x itself.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'calc_14',
        question: 'What is the derivative of f(x) = ln(x²)?',
        options: ['1/x²', '2/x', '2x', '1/x'],
        correct: '2/x',
        explanation: 'Using chain rule: f\'(x) = (1/x²) · 2x = 2/x.',
        difficulty: 'hard'
      },
      {
        id: 'calc_15',
        question: 'Evaluate ∫₀¹ x² dx.',
        options: ['1/3', '1/2', '1', '2/3'],
        correct: '1/3',
        explanation: '∫₀¹ x² dx = [x³/3]₀¹ = 1³/3 - 0³/3 = 1/3.',
        difficulty: 'hard'
      },
      {
        id: 'calc_16',
        question: 'What is lim(x→∞) (1 + 1/x)^x?',
        options: ['1', 'e', '∞', '0'],
        correct: 'e',
        explanation: 'This is the definition of e: lim(x→∞) (1 + 1/x)^x = e.',
        difficulty: 'hard'
      },
      {
        id: 'calc_17',
        question: 'Find the area under y = x² from x = 0 to x = 2.',
        options: ['4/3', '8/3', '4', '2'],
        correct: '8/3',
        explanation: '∫₀² x² dx = [x³/3]₀² = 8/3 - 0 = 8/3.',
        difficulty: 'hard'
      },
      {
        id: 'calc_18',
        question: 'What is the second derivative of f(x) = x⁴?',
        options: ['4x³', '12x²', '24x', '4x'],
        correct: '12x²',
        explanation: 'f\'(x) = 4x³, f\'\'(x) = 12x².',
        difficulty: 'hard'
      },
      {
        id: 'calc_19',
        question: 'Using L\'Hôpital\'s rule, what is lim(x→0) (e^x - 1)/x?',
        options: ['0', '1', 'e', '∞'],
        correct: '1',
        explanation: 'Applying L\'Hôpital\'s rule: lim(x→0) e^x/1 = e⁰/1 = 1.',
        difficulty: 'hard'
      },
      {
        id: 'calc_20',
        question: 'What is ∫e^(2x) dx?',
        options: ['e^(2x) + C', '(1/2)e^(2x) + C', '2e^(2x) + C', 'e^(2x)/2x + C'],
        correct: '(1/2)e^(2x) + C',
        explanation: 'Using substitution: ∫e^(2x) dx = (1/2)e^(2x) + C.',
        difficulty: 'hard'
      }
    ]
  }
];
