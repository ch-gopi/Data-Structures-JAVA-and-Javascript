
After spending an hour or more trying to solve the problem, we give up and quickly rush into the solution. This can be a huge barrier in our preparation, since it prevents us from developing our creativity and thinking process.

So, here is what you can do instead ⭐:
Whenever you're unable to solve a problem even after devoting a tremendous amount of time, instead of looking at the solution, set the problem aside for a day.

When you re-attempt this problem the next day with a fresh mind, you’ll be able to think of alternative approaches also. You’ll also find that, giving this break to our mind, helps us identify new approaches which we weren’t able to figure out earlier.
[try to understand problem,write question on paper,visualise it in your head,run through a few i/p,o/p examples,think and write your solution on paper,After u think ur sol'n will work run it (follow good coding practices)]
That said, even with consistent efforts, progress may be slow, and problems may take hours to solve. But don't let that happen to you!
#
What will you typically need to implement yourself in the programming assignments if you program in C++, Java or Python?

Just the solution of the problem.
#
Your program in C, C++ or Java thinks that the product of numbers 
50000
50000 and 
50000
50000 is equal to 
−
1794967296
−1794967296. What is the most probable reason?

Integer overflow.
#

Which tests should you perform before submitting a solution to the programming assignment?


Test on the examples from the problem statement. Then make a few other small tests, solve them manually and check that your program outputs the correct answer. Generate a big input and launch your program to check that it works fast enough and doesn't consume too much memory. Test for corner cases: smallest allowed values and largest allowed values of all input parameters, equal numbers in the input, very long strings, etc. Then make a stress test. After all these tests passed, submit the solution.

#

Where does the input data come from when you implement a stress test?


You generate valid input data as a part of the stress test implementation.


#
If you submit a solution of a programming assignment, but it does not pass some of the tests, what feedback will you get from the system?


If it is one of the first few tests, you will see the input data, the answer of your program and the correct answer. Otherwise, you will only see either that the answer of your program is wrong or that your program is too slow or that your program uses too much memory.


You will also learn what was the problem: did your program output a wrong answer, or did it work too long, or did it consume too much memory. For the first few tests, you will also see the input data, the output of your program and the correct answer.
#

DRY principle
The DRY (don't repeat yourself) principle is a best practice in software development that recommends software engineers to do something once, and only once. The concept, which is often credited to Andrew Hunt  and David Thomas, authors of "The Pragmatic Programmer," is the tongue-in-cheek opposite of the WET principle, which stands for "write everything twice."

According to the DRY principle, every discrete chunk of knowledge should have one, unambiguous, authoritative representation within a system. The goal of the DRY principle is to lower technical debt by eliminating redundancies in process and logic whenever possible.

Redundancies in process

To prevent redundancies in processes (actions required to achieve a result), followers of the DRY principle seek to ensure that there is only one way to complete a particular process. Automating the steps wherever possible also reduces redundancy, as well as the number of actions required to complete a task.

Redundancies in logic

To prevent redundancies in logic (code), followers of the DRY principle use abstraction to minimize repetition. Abstraction is the process of removing characteristics until only the most essential characteristics remain.

An important goal of the DRY principle is to improve the maintainability of code during all phases of its lifecycle. When the DRY principle is followed, for example, a software developer should be able to change code in one place, and have the change automatically applied to every instance of the code in question.  
#
DRY is a fundamental principle of software development that promotes code reuse and modularization. The principle states that "every piece of knowledge or logic should have a single, unambiguous representation within a system". In other words, you should never repeat yourself in your code. 
Here are some other DRY principles: 
Single Responsibility Principle: Each function or method should only do one job
Dependency Inversion Principle: High-level modules should not depend on low-level modules for implementation, instead should rely on their abstraction
Interface Segregation Principle: Keep your interfaces as small as possible
Open-Closed design principle: Classes or objects and methods should be open for extension, but closed for modifications
Separation of concerns: A programmer should not write the program as one single block, instead the code should be broken into chunks, such that each component is able to complete a simple distinct job
DRY is not only about code. You shouldn't repeat the knowledge of your business domain in anything related to your project.
