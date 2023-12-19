import React from 'react';

type Props = {
    question: string;
    answer: string[];
    callback: any;
    userAns: string;
    q_number: number;
    total_questions: number;
}

const q_card: React.FC<Props> = ({question, answer, callback, userAns, q_number, total_questions}) => (
    <div>
        <p>Question Number: {q_number} / {total_questions}</p>
    </div>
);

export default q_card;