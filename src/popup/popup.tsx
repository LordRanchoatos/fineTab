import React from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/tailwind.css';

const Test = () => {
  return (
    <div>
      <h1 className="text-5xl  bg-green-500">Hello world</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid
        accusamus sint omnis reprehenderit quia quos minima voluptates suscipit
        nulla eveniet sapiente placeat sed, maiores blanditiis dignissimos
        assumenda nobis enim?
      </p>
      {/* <img src="/image" alt="sample image"/> */} //optimised image
      importation with webpack
    </div>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Test />);
