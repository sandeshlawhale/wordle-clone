import React from "react";

export default function AboutWordle() {
  return (
    <div className="about-container">
      <h1>Wordle Clone</h1>
      <p className="about-info">
        Wordle is a web-based word game created and developed by Welsh software
        engineer Josh Wardle. Players have six attempts to guess a five-letter
        word, with feedback given for each guess in the form of colored tiles
        indicating when letters match or occupy the correct position. The
        mechanics are similar to the 1955 pen-and-paper game Jotto and the
        television game show franchise Lingo. Wordle has a single daily
        solution, with all players attempting to guess the same word.
      </p>
      <h1>Rule</h1>
      <p className="about-info">
        Everytime, a five-letter word is chosen which players aim to guess
        within six tries. After every guess, each letter is marked as either
        green, yellow or gray: green indicates that letter is correct and in the
        correct position, yellow means it is in the answer but not in the right
        position, while gray indicates it is not in the answer at all. Multiple
        instances of the same letter in a guess, such as the "o"s in "robot",
        will be colored green or yellow only if the letter also appears multiple
        times in the answer; otherwise, excess repeating letters will be colored
        gray.
      </p>
      <h1>Purpose of the Clone</h1>
      <h5>Learning React:</h5>
      <p>
        The main goal was to enhance proficiency in React, one of the most
        popular JavaScript libraries for building user interfaces. Through the
        development of this Wordle clone, I aimed to reinforce my understanding
        of React's core concepts, state management, and component architecture.
      </p>
      <h5>Improving Coding Skills:</h5>
      <p>
        The project provided an opportunity to sharpen coding skills, including
        problem-solving, algorithmic thinking, and efficient debugging.
        Overcoming challenges during the development process contributed
        significantly to my growth as a developer.
      </p>
      <h5>Exploring UI/UX Design</h5>
      <p>
        Designing an engaging and user-friendly interface for the Wordle clone
        allowed me to explore principles of UI/UX design. Choices in color
        schemes, layout, and interactivity were made with the intention of
        creating an enjoyable and aesthetically pleasing user experience.
      </p>
      <h5>Contributing to the Developers Community:</h5>
      <p>
        Sharing this Wordle clone with the developer community serves as a
        contribution to the open-source ethos. I hope it can be a helpful
        resource for others learning React or looking for inspiration in game
        development.
      </p>
    </div>
  );
}
