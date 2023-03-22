import React from 'react'

interface ButtonProps {
  text: string;
  message: string;
};

const Button = ({ text, message }: ButtonProps) => {
  const handler = () => {
    alert(message)
  };

  return (
    <button onClick={handler} className="p-4 bg-orangered text-black">
      {text}
    </button>
  )
}

export default Button