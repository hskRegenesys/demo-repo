import React, { useState, useEffect } from "react";

interface TyperProps {
  dataText: string[];
}

const TYPING_SPEED = 150;
const DELETING_SPEED = 30;

const AnimatedText: React.FC<TyperProps> = ({ dataText }) => {
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [loopNum, setLoopNum] = useState<number>(0);
  const [typingSpeed, setTypingSpeed] = useState<number>(TYPING_SPEED);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];

      setText((prevText) =>
        isDeleting
          ? fullText.substring(0, prevText.length - 1)
          : fullText.substring(0, prevText.length + 1)
      );

      setTypingSpeed(isDeleting ? DELETING_SPEED : TYPING_SPEED);

      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 0);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
      }
    };

    timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, dataText]);

  return <p className="animi-text">{`${text}|`}</p>;
};

export default AnimatedText;
