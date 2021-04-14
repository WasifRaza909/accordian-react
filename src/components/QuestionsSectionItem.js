import { IoIosAdd, IoIosRemove } from 'react-icons/io';

import React, { useState } from 'react';

const QuestionsSectionItem = ({ question }) => {
  const [addInfo, setAddInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{question.title}</h4>
        <button className='btn' onClick={() => setAddInfo(!addInfo)}>
          {!addInfo ? <IoIosAdd /> : <IoIosRemove />}
        </button>
      </header>
      <p>{addInfo && question.info}</p>
    </article>
  );
};

export default QuestionsSectionItem;
