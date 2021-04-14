import React from 'react';
import QuestionsSectionItem from './QuestionsSectionItem';
import questions from '../data';

const QuestionsSection = () => {
  return (
    <section className='info'>
      {questions.map((question) => (
        <QuestionsSectionItem key={question.id} question={question} />
      ))}
    </section>
  );
};

export default QuestionsSection;
