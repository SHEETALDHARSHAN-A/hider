export interface Screenshot {
  id: string
  path: string
  timestamp: number
  thumbnail: string // Base64 thumbnail
}

export interface Solution {
  initial_thoughts: string[]
  thought_steps: string[]
  description: string
  code: string
}

export interface AptitudeSolution {
  answer: string
  explanation_steps: string[]
  reasoning: string
  category: string
}

export interface ProblemInfo {
  problem_statement: string
  constraints?: string
  example_input?: string
  example_output?: string
  options?: string[]
  correct_answer?: string
  category?: string
  difficulty?: string
  explanation?: string
  question_type: 'coding' | 'aptitude'
}
