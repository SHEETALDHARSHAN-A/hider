export interface SolutionResponseData {
  code: string;
  thoughts: string[];
  time_complexity: string;
  space_complexity: string;
}

export interface AptitudeSolutionData {
  answer: string;
  explanation_steps: string[];
  reasoning: string;
  category: string;
}

export interface Solution {
  initial_thoughts: string[]
  thought_steps: string[]
  description: string
  code: string
}

export interface SolutionsResponse {
  [key: string]: Solution
}

export interface ProblemStatementData {
  problem_statement: string
  input_format: {
    description: string
    parameters: any[]
  }
  output_format: {
    description: string
    type: string
    subtype: string
  }
  complexity: {
    time: string
    space: string
  }
  test_cases: any[]
  validation_type: string
  difficulty: string
  question_type: 'coding' | 'aptitude'
}

export interface AptitudeProblemData {
  problem_statement: string
  options?: string[]
  correct_answer: string
  category: string
  difficulty: string
  explanation: string
  question_type: 'aptitude'
}
