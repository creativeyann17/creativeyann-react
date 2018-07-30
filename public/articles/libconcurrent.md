The concurrent library is my implementation of a QtConcurrent equivalent in C. It's very easy to use and portable on every Posix compliant system.

## Requirement for the library
* Posix Thread implementation
* Multi-core processor (recommended)

## Benchmark 1
The released package includes a benchmark example, here is the test configuration:

* Hardware: Atom 1.8Ghz (4 Cores) 3.2GB RAM
* Software: Xubuntu 64Bits, libconcurrent.a + TestIteractif/Concurrent compiled in 32Bits

The Test program is simple, find prime numbers in an input array, saved them and display the count of prime elements found at program end (the default input array size is 1 Million elements), results:

![bench_1](./images/bench1.png)

First the both tests display the same count of prime numbers :) second the Concurrent version is 3 times more efficient and consumes 100% of the CPU instead of 25% (because of my 4 cores). About RAM consumption I have noticed 1.1MB for both tests.

## Benchmark 2
Under Windows with a more powerfull processor. I used a Cygwin environment for Posix compliance.

* Hardware: Intel i5 2.8Ghz (4 Cores) 8GB RAM
* Software: Windows 7 64Bits, libconcurrent.a + TestIteractif/Concurrent compiled in 32Bits

![bench_2](./images/bench2.png)

Both results confirm concept is efficient.
