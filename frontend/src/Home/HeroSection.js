import React from 'react';
import '../App.css';
import './HeroSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Spotlight Modules
      </h1>
      <Carousel>
        <div>
          <div className='module-name'>
            CS1010 {`\n`}
            Programming Methodology {`\n`}
            <h1>
              This module introduces the fundamental concepts of problem solving by computing and programming using an imperative programming language. It is the first and foremost introductory course to computing. Topics covered include computational thinking and computational problem solving, designing and specifying an algorithm, basic problem formulation and problem solving approaches, program development, coding, testing and debugging, fundamental programming constructs (variables, types, expressions, assignments, functions, control structures, etc.), fundamental data structures (arrays, strings, composite data types), basic sorting, and recursion.
            </h1>
          </div>
        </div>
        <div>
                  <div className='module-name'>
            CS2100 {`\n`}
            Computer Organisation
            <h1>
              The objective of this module is to familiarise students with the fundamentals of computing devices. Through this module students will understand the basics of data representation, and how the various parts of a computer work, separately and with each other. This allows students to understand the issues in computing devices, and how these issues affect the implementation of solutions. Topics covered include data representation systems, combinational and sequential circuit design techniques, assembly language, processor execution cycles, pipelining, memory hierarchy and input/output systems.
            </h1>
          </div>
        </div>
        <div>
          <div className='module-name'>
            CS2040C {`\n`}
            Data Structures and Algorithms
            <h1>
              This module introduces students to the design and implementation of fundamental data structures and algorithms. The module covers basic data structures (linked lists, stacks, queues, hash tables, binary heaps, trees, and graphs), searching and sorting algorithms, basic analysis of algorithms, and basic object-oriented programming concepts.
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroSection;
