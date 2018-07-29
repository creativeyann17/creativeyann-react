Something disturbing for people not familiar with JAVA is to run JAR files. Most of the times a BAT file (under window) is provided to run it. I wrote a C program which based on a configuration file (INI like format) execute the JAR for you. This program works under Windows and Linux. In case JAVA isn't available on your machine it will inform you using an message in a dialog box. A minimal version can also be indicated. Program and VM parameters are also supported.

## Configuration example
\[PROGRAM\]  
BIN=lib/prg.jar  
ARGS=-server  

\[JAVA\]  
PATH=java  
VERSION=1.5.0  
ARGS=-Dsun.java2d.opengl=false -Dsun.java2d.d3d=false  
