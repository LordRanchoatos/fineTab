import React from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/tailwind.css';

const Test = () => {
  return (
    <div>
      <h1 className="text-5xl  bg-green-500">Option Page</h1>
      <p>
        <ul>
          <li>option1</li>
          <li>option2</li>
          <li>option3</li>
        </ul>
      </p>
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Test />);
