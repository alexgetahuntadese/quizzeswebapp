
import { Chapter } from '../types';

export const physicsChapters: Chapter[] = [
  {
    id: 'mechanics',
    name: 'Mechanics',
    description: 'Motion, forces, and energy',
    questions: [
      // Easy Questions
      {
        id: 'mech_1',
        question: 'What is the SI unit of force?',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correct: 'Newton',
        explanation: 'The Newton (N) is the SI unit of force, defined as kg⋅m/s².',
        difficulty: 'easy'
      },
      {
        id: 'mech_2',
        question: 'What is the formula for acceleration?',
        options: ['a = v/t', 'a = Δv/Δt', 'a = d/t', 'a = F/v'],
        correct: 'a = Δv/Δt',
        explanation: 'Acceleration is the change in velocity over time.',
        difficulty: 'easy'
      },
      {
        id: 'mech_3',
        question: 'What is Newton\'s first law also known as?',
        options: ['Law of inertia', 'Law of acceleration', 'Law of action-reaction', 'Law of gravity'],
        correct: 'Law of inertia',
        explanation: 'Newton\'s first law states that an object at rest stays at rest, and an object in motion stays in motion.',
        difficulty: 'easy'
      },
      {
        id: 'mech_4',
        question: 'What is the acceleration due to gravity on Earth?',
        options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '9.6 m/s²'],
        correct: '9.8 m/s²',
        explanation: 'The standard acceleration due to gravity on Earth is approximately 9.8 m/s².',
        difficulty: 'easy'
      },
      {
        id: 'mech_5',
        question: 'What type of quantity is velocity?',
        options: ['Scalar', 'Vector', 'Neither', 'Both'],
        correct: 'Vector',
        explanation: 'Velocity has both magnitude and direction, making it a vector quantity.',
        difficulty: 'easy'
      },
      {
        id: 'mech_6',
        question: 'What is the formula for kinetic energy?',
        options: ['KE = mv', 'KE = ½mv²', 'KE = mgh', 'KE = mv²'],
        correct: 'KE = ½mv²',
        explanation: 'Kinetic energy is half the product of mass and velocity squared.',
        difficulty: 'easy'
      },
      {
        id: 'mech_7',
        question: 'What happens to an object in free fall (ignoring air resistance)?',
        options: ['It accelerates downward', 'It moves at constant velocity', 'It accelerates upward', 'It stops moving'],
        correct: 'It accelerates downward',
        explanation: 'Objects in free fall accelerate downward due to gravity.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'mech_8',
        question: 'A car accelerates from 0 to 60 m/s in 10 seconds. What is its acceleration?',
        options: ['6 m/s²', '60 m/s²', '10 m/s²', '600 m/s²'],
        correct: '6 m/s²',
        explanation: 'a = Δv/Δt = (60 - 0)/10 = 6 m/s²',
        difficulty: 'medium'
      },
      {
        id: 'mech_9',
        question: 'What is the momentum of a 50 kg object moving at 20 m/s?',
        options: ['1000 kg⋅m/s', '70 kg⋅m/s', '30 kg⋅m/s', '2.5 kg⋅m/s'],
        correct: '1000 kg⋅m/s',
        explanation: 'p = mv = 50 kg × 20 m/s = 1000 kg⋅m/s',
        difficulty: 'medium'
      },
      {
        id: 'mech_10',
        question: 'If you double the velocity of an object, by what factor does its kinetic energy change?',
        options: ['2', '4', '8', '16'],
        correct: '4',
        explanation: 'KE = ½mv². If v doubles, KE increases by a factor of 2² = 4.',
        difficulty: 'medium'
      },
      {
        id: 'mech_11',
        question: 'What is the period of a simple pendulum with length 1 m on Earth?',
        options: ['2.0 s', '1.0 s', 'π s', '2π s'],
        correct: '2.0 s',
        explanation: 'T = 2π√(L/g) = 2π√(1/9.8) ≈ 2.0 s',
        difficulty: 'medium'
      },
      {
        id: 'mech_12',
        question: 'What is the centripetal acceleration of an object moving in a circle of radius 5 m at 10 m/s?',
        options: ['2 m/s²', '20 m/s²', '50 m/s²', '200 m/s²'],
        correct: '20 m/s²',
        explanation: 'ac = v²/r = 10²/5 = 100/5 = 20 m/s²',
        difficulty: 'medium'
      },
      {
        id: 'mech_13',
        question: 'According to Newton\'s third law, if object A exerts a force on object B, then:',
        options: ['B exerts an equal and opposite force on A', 'B exerts a greater force on A', 'B exerts no force on A', 'B exerts a smaller force on A'],
        correct: 'B exerts an equal and opposite force on A',
        explanation: 'Newton\'s third law states that for every action, there is an equal and opposite reaction.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'mech_14',
        question: 'A projectile is launched at 45° with initial velocity 50 m/s. What is its maximum height?',
        options: ['31.9 m', '63.8 m', '127.6 m', '15.9 m'],
        correct: '31.9 m',
        explanation: 'h = (v₀sin θ)²/(2g) = (50×sin45°)²/(2×9.8) = (35.36)²/(19.6) ≈ 31.9 m',
        difficulty: 'hard'
      },
      {
        id: 'mech_15',
        question: 'Two objects collide elastically. Object 1 (m₁ = 2 kg, v₁ = 3 m/s) hits object 2 (m₂ = 4 kg, v₂ = 0). What is v₁ after collision?',
        options: ['-1 m/s', '1 m/s', '2 m/s', '0 m/s'],
        correct: '-1 m/s',
        explanation: 'For elastic collision: v₁f = ((m₁-m₂)/(m₁+m₂))v₁i = ((2-4)/(2+4))×3 = -1 m/s',
        difficulty: 'hard'
      },
      {
        id: 'mech_16',
        question: 'What is the escape velocity from Earth\'s surface?',
        options: ['7.9 km/s', '11.2 km/s', '15.7 km/s', '9.8 km/s'],
        correct: '11.2 km/s',
        explanation: 'Escape velocity ve = √(2GM/R) ≈ 11.2 km/s for Earth.',
        difficulty: 'hard'
      },
      {
        id: 'mech_17',
        question: 'A satellite orbits Earth at height h = R (R = Earth radius). What is its orbital period compared to a surface satellite?',
        options: ['2√2 times longer', '√2 times longer', '2 times longer', '4 times longer'],
        correct: '2√2 times longer',
        explanation: 'T ∝ r^(3/2). At height h = R, r = 2R, so T₂/T₁ = (2R/R)^(3/2) = 2^(3/2) = 2√2.',
        difficulty: 'hard'
      },
      {
        id: 'mech_18',
        question: 'What is the reduced mass of a system with masses m₁ = 3 kg and m₂ = 6 kg?',
        options: ['2 kg', '3 kg', '4.5 kg', '9 kg'],
        correct: '2 kg',
        explanation: 'μ = m₁m₂/(m₁+m₂) = (3×6)/(3+6) = 18/9 = 2 kg',
        difficulty: 'hard'
      },
      {
        id: 'mech_19',
        question: 'A uniform rod of length L rotates about its end. What is its moment of inertia?',
        options: ['ML²/12', 'ML²/3', 'ML²/2', 'ML²'],
        correct: 'ML²/3',
        explanation: 'For a rod rotating about its end: I = ∫₀ᴸ (M/L)x² dx = (M/L)[x³/3]₀ᴸ = ML²/3',
        difficulty: 'hard'
      },
      {
        id: 'mech_20',
        question: 'What is the coefficient of restitution for a perfectly inelastic collision?',
        options: ['0', '1', '0.5', '-1'],
        correct: '0',
        explanation: 'In a perfectly inelastic collision, objects stick together, so e = 0.',
        difficulty: 'hard'
      }
    ]
  }
];
