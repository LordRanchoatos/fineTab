import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/tailwind.css';

interface Quote {
  quote: string;
  author: string;
  category: string;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomGradient() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  return `linear-gradient(to right, ${color1}, ${color2})`;
}

function Newtab() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [background, setBackground] = useState<string>(getRandomGradient());

  useEffect(() => {
    chrome.storage.local.get(['quote'], (result) => {
      setQuote(result.quote);
    });

    setBackground(getRandomGradient());
  }, []);

  return (
    <div
      className="font-quote flex flex-col text-center justify-center items-center w-screen h-screen"
      style={{ background: background }}
    >
      <h3 className="quote text-white font-quote font-semibold text-4xl">
        {quote ? `"${quote.quote}"` : 'Loading...'}
      </h3>
      <p className="author font-3xl font-bold">
        {quote ? `– ${quote.author}` : ''}
      </p>
    </div>
  );
}

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(<Newtab />);
