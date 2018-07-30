What will be your reaction if you discover that your smartphone doesn't have any chronometer application pre-installed? Maybe go to the application store and get the first free that matchs your expectations. I agree with that but I did't know why I tell myself: "Whooooo it would be a so nice try for a usefull Qt/Android app to program right now!" and so I did it :)

## Setup QtCreator and Android SDK

I will not entered in details for this part it's very easy to setup a working Qt Creator environment ready for desktop and Android. To summarize you will need: Qt, Android SQK + NDK, ANT. Qt team made a very good job so everything is ready to setup once you have downloaded everything.

## User interface designer

Let's go to work and we start with the best part: the user interface! I will do it using QtWidget because my QML (recommended for mobile development) is very limited and I used to work with QtWidget before.

![image_1](./images/chrono_designer.png)

The view will be composed of 5 parts:

The background: with a black to dark blue gradient
The menu with actions: available on android devices using action button (if available)
The chrono label: will display the current chronometer value (see bellow for size scaling tips)
The start button: start/stop the chrono
The reset button: set the chrono to 0 and stop it
I use some style sheets to make it look nice. The start button will toggle green to red and the text label from START to STOP when user press it. As explained before the chrono label size is very small, it's because it's not possible from the designer to make it fill all the container (the label itself filld it but the font inside not).
## Screen scaling tips
As we are targeting multiple devices with different screen size, I need a generic solution to change the chrono label size. My solution (that you can see in the source code in MainWindow.c) is to override QMainWindow showEvent and resizeEveent. Once I have these events I force the chrono label pixel font size to be width of the label (the label itself fills the width and the height of the container) divide by 4 (this value works well). ShowEvent will init the right size when application start, resizeEvent will be if the screen rotates even if in my case the orientation is locked on portait.

## Internal logic
We have two push buttons and once is checkable (to manage the Start/Stop with the same button). In order to manage the chrono I use a QTimer and connect its timeout signal to a slot named tick. The period of the QTimer is 50 milliseconds. As my chrono only displays 2 digits after the second the minimal period could be 10 but it consumes lot of CPU even during the desktop tests (up to 10%). With 50 ms timeout I'm between 1 and 2% of CPU without reducing user experience a lot. The tick slot increases a member value named ticks of type qint64, then I use a QDateFormat to transform the qlong64 into a date then into a formatted string "mm:ss:zzz". Only the left part of the string (8 characters) is sent to a display method which updates the chrono label text. The reset button sets the qint64 to 0 and stop the QTimer object easy :p

## Desktop test and validation of behavior

![image_1](./images/chrono_desktop.png)

In order to validate the UI and the behavior I have first compiled the project to target desktop (XUbuntu 15.10 in my case) even now you can see the advantage of using Qt, same code, same view for desktop and mobile device ;) You can see the menu which will not appear on mobile devices but the actions inside will be available using the actions button of your smartphone if available. I have done a small about using a MessageBox and an Exit action.

## Mobile devices deployment

![image_1](./images/chrono_devices.png)

Now we want to deploy the application on my android devices. On Windows you need to install all USB drivers for each constructors, on Linux you need to allow them by adding a rules. Once it's done QTCreator will show you the list of availables devices. Select one and deploy! Oh wait where are the Qt libraries? In fact you have 3 solutions to deploy them. First package everything inside the APK file which make it very large in size. Second is to deploy libraries in temp folder nice for debuging but it will not work for release. Last is to use Ministro service a nice program to install on your device which auto download required QT libraries and shared them with all applications on your device that require Qt adn manage also differents versions. I use the ministro solution here.

![image_1](./images/chrono_running.png)

From left to right: Android 2.3.x, Android 4.4.x, Android 4.1.x

## Next evolutions
The first would be to scale the Start and Reset buttons font size using the same logic that chrono label because the font size is fixed to 20pts.
