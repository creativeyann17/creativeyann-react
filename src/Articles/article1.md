# OpenMP(C), ForkJoin(JAVA) and Disruptor(JAVA) prime number finders
This is one of the most interesting concurrent pack of programs I have done. The goal remains the same: find prime numbers in an input array. The difference is the way it's done. This times no manual self-made concurrent process but real use of specialized libraries or framework in C and JAVA.

## OpenMP (Open Multi-Processing)
First program, developed in C uses OpenMP which is wonderful. First I have followed an Intel tutorial on Youtube about it and how to use it. Second I used my XUbuntu netbook and go coding...The result was more than expected, how easy it's to transform a simple loop working with an array into parallel instructions and the way to shared variables between threads. You will find in download part the source code, script to compile and generate the concurrent and the iterative version (same code, compilation flags change).

## ForkJoin
Such as the C version I was looking for way to manage concurrency in JAVA. The solution comes with JAVA 7 and the ForkJoin framework. It can be seen as a method call structure which perform dichotomy of an input array into smallest arrays as many times threads allocated to the treatment are available. You will find in download part the source code and in commentary the solution to have a ForkJoin which return a value instead of managing manually one to count prime numbers.

## Disruptor (High Performance Inter-Thread Messaging Library)
This library was part of my results to find a concurrent mechanism in JAVA. The logic is different from ForkJoin, the Disruptor is like an infinite ring where one or several sources insert data (in live) and during the same time consumers pop out and perform a treatment. The logic of concurrency is done based of the number of consumer threads. This mechanism is interesting,for me, if you have a no blocking model to compute. You will find in download part the source code.

[GitHub](https://github.com/creativeyann17/Prime_C_JAVA)