
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Trophy, User, Clock } from 'lucide-react';
import SubjectCard from '@/components/SubjectCard';
import ChapterList from '@/components/ChapterList';
import DifficultySelector from '@/components/DifficultySelector';
import QuizInterface from '@/components/QuizInterface';
import ScoreBoard from '@/components/ScoreBoard';
import { getTotalQuestionsBySubject, getChaptersBySubject } from '@/data/questions';

const Index = () => {
  const [currentView, setCurrentView] = useState('home'); // home, chapters, difficulty, quiz, results
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [userScore, setUserScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [chapterName, setChapterName] = useState('');

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Functions, Calculus & Analytic Geometry',
      icon: '📐',
      color: 'bg-blue-500',
      questions: getTotalQuestionsBySubject('mathematics')
    },
    {
      id: 'physics',
      name: 'Physics',
      description: 'Mechanics, Electricity & Modern Physics',
      icon: '⚡',
      color: 'bg-purple-500',
      questions: getTotalQuestionsBySubject('physics')
    },
    {
      id: 'chemistry',
      name: 'Chemistry',
      description: 'Atomic Structure, Bonding & Reactions',
      icon: '🧪',
      color: 'bg-green-500',
      questions: getTotalQuestionsBySubject('chemistry')
    },
    {
      id: 'biology',
      name: 'Biology',
      description: 'Cell Biology, Genetics & Physiology',
      icon: '🧬',
      color: 'bg-emerald-500',
      questions: getTotalQuestionsBySubject('biology')
    },
    {
      id: 'english',
      name: 'English',
      description: 'Grammar, Literature & Vocabulary',
      icon: '📚',
      color: 'bg-red-500',
      questions: getTotalQuestionsBySubject('english')
    },
    {
      id: 'history',
      name: 'Ethiopian History',
      description: 'Ancient, Medieval & Modern Ethiopia',
      icon: '🏛️',
      color: 'bg-yellow-500',
      questions: getTotalQuestionsBySubject('history')
    }
  ];

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setCurrentView('chapters');
  };

  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);
    setCurrentView('difficulty');
  };

  const handleDifficultySelect = (difficulty: 'easy' | 'medium' | 'hard') => {
    setSelectedDifficulty(difficulty);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (score: number, total: number, chapterName: string, difficulty: string) => {
    setUserScore(score);
    setTotalQuestions(total);
    setChapterName(chapterName);
    setCurrentView('results');
  };

  const handleReturnHome = () => {
    setCurrentView('home');
    setSelectedSubject('');
    setSelectedChapter('');
    setSelectedDifficulty('easy');
    setUserScore(0);
    setTotalQuestions(0);
    setChapterName('');
  };

  const handleBackToChapters = () => {
    setCurrentView('chapters');
    setSelectedChapter('');
    setSelectedDifficulty('easy');
    setUserScore(0);
    setTotalQuestions(0);
    setChapterName('');
  };

  const handleBackToDifficulty = () => {
    setCurrentView('difficulty');
    setSelectedDifficulty('easy');
  };

  if (currentView === 'quiz') {
    return (
      <QuizInterface 
        subject={selectedSubject}
        chapterId={selectedChapter}
        difficulty={selectedDifficulty}
        onComplete={handleQuizComplete}
        onBack={handleBackToDifficulty}
      />
    );
  }

  if (currentView === 'results') {
    const currentSubject = subjects.find(s => s.id === selectedSubject);
    return (
      <ScoreBoard 
        score={userScore}
        total={totalQuestions}
        subject={selectedSubject}
        chapterName={chapterName}
        onReturnHome={handleReturnHome}
        onRetakeQuiz={() => setCurrentView('difficulty')}
        onBackToChapters={handleBackToChapters}
      />
    );
  }

  if (currentView === 'difficulty') {
    const currentSubject = subjects.find(s => s.id === selectedSubject);
    const chapters = getChaptersBySubject(selectedSubject);
    const currentChapter = chapters.find(ch => ch.id === selectedChapter);
    
    return (
      <DifficultySelector 
        subject={selectedSubject}
        subjectName={currentSubject?.name || ''}
        chapterId={selectedChapter}
        chapterName={currentChapter?.name || ''}
        onBack={handleBackToChapters}
        onDifficultySelect={handleDifficultySelect}
      />
    );
  }

  if (currentView === 'chapters') {
    const currentSubject = subjects.find(s => s.id === selectedSubject);
    return (
      <ChapterList 
        subject={selectedSubject}
        subjectName={currentSubject?.name || ''}
        onBack={handleReturnHome}
        onChapterSelect={handleChapterSelect}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b-4 border-gradient-to-r from-green-500 via-yellow-500 to-red-500">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🇪🇹</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">EthioQuiz</h1>
                <p className="text-sm text-gray-600">Grade 12 Chapter-by-Chapter Preparation</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>Student</span>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Master Every Chapter, One Quiz at a Time
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Study systematically with our chapter-based quiz system. Each subject is organized into focused chapters 
            to help you master one topic at a time for your Ethiopian Grade 12 examinations.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <BookOpen className="w-12 h-12 text-blue-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">{subjects.length}</h3>
              <p className="text-gray-600">Subjects Available</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">20+</h3>
              <p className="text-gray-600">Chapters to Master</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Clock className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-gray-800">Focused</h3>
              <p className="text-gray-600">Chapter-based Learning</p>
            </CardContent>
          </Card>
        </div>

        {/* Subject Selection */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Choose Your Subject
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onSelect={handleSubjectSelect}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200">
          <p className="text-gray-600">
            Study chapter by chapter for better understanding and retention! 📚
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
