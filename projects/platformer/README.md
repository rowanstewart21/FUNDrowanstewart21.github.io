# Platformer

### An intro to video game programming featuring Halle in a configurable platformer

 **Table of Contents**
 
- [Installation](#installation)
- [Objective](#objective)
    - [Where to Code](#where-to-code)
    - [Requirements and Grading](#requirements-and-grading)
- [Functions](#functions)
- [Lesson Steps](#lesson-steps)
    - [TODO 1: Platforms](#todo-1-platforms)
    - [TODO 2: Cannons](#todo-2-cannons)
    - [TODO 3: Collectables](#todo-3-collectables)
    - [TODO 4: Make your level challenging](#todo-4-make-your-level-challenging)

# Installation

### installing Platformer with `os install`
NOTE: If you receive an error that says, `os install command not found` the opspark CLI is not installed. To install it, enter the command `npm install -g opspark` in your bash terminal. 

* Make sure your github account is linked to Greenlight
* Open your first website workspace
* go to your bash terminal (located at the bottom of the IDE workspace) and type in the command **os install**. Hit enter.
* If prompted, login with your github credentials
* Use your arrow keys to highlight your course and hit enter. hit enter again to confirm.
* Use your arrow keys to highlight platformer and hit enter. hit enter again to confirm.
* open up the index.html file and press Run at the top of your workspace. You will be editing this file.

# Objective

The goal is to design one level of a platformer game using the functions defined in the `js/factory` folder. You will call these functions in the corresponding files located in the `js/init` folder to create the platforms, add cannons, and collectables that Halle must collect.

It's up to you to design a level that is challenging but doable. Consider <a href="http://phaser.io/examples/v2/category/tweens" target="_blank">tweening</a> platforms, cannons, and collectables for an additional challenge.

## Where to Code?

Open up 3 files:

1. `js/init/platform.js`: Follow the instructions outlined in the file to design all required platforms for the game level.
2. `js/init/cannon.js`: Follow the instructions outlined in the file to design all required cannons for the game level.
3. `js/init/collectable.js`: Follow the instructions outlined in the file to design all required collectables for the game level.

You see instructions on **where to write your code** - keep your code in between the areas **ALL YOUR CODE GOES BELOW HERE** and **ALL YOUR CODE GOES ABOVE HERE**. This will help you make less errors. For example:

```
////////////////////////////////////////////////////////////////////////
// ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

createCollectable(type.steve, 200, 170, 6, 0.7);

// ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////
```

Code a little, **save your work** (Command / Ctrl + s), switch back to the tab running your game and **refresh the page** (Command / Ctrl + r) to see your work!

Have fun!

## Requirements and Grading
1. 30% : You must create at least 3 cannons in different locations. 
2. 30% : You must have at least 3 collectables of different types.
3. 30% : You must include at least 5 platforms 
4. 10% : Your game must be playable!

<hr> 


## Functions

Functions are predefined blocks of code that can accept input, perform an action, and can return a value. They can be reused many times to perform that action on command.

A **Function Declaration** determines what data the function accepts, what operations are performed, and what value is returned. 

Here is an example of a Function Declaration called `createCannon`:

```javascript
function createCannon(x, y, scaleX, scaleY, immovable) {
    var platform = game.platforms.create(x, y, 'platform');
    platform.scale.setTo(scaleX || 1, scaleY || 1);
    platform.body.immovable = immovable || true;
    return platform;
}
```

This Function accepts 5 pieces of input data: `(x, y, scaleX, scaleY, immovable)`, called **Parameters**. The Function uses that data to create a platform which is returned by the Function. 

Function Declaration simply define how a function operates - it does not execute the code until a **Function Call** is made.

Here is an example of a function call to the `createCannon` function:

```javascript
createCannon(400, 200, 1, 2, true);
```

A function call can be made by providing the same headline as the function definition but with actual data values, or **Arguments**, in the place of the parameters. 

Calling the Function tells the computer to jump into the Function Declaration and execute each line written in the `{ Code Block }` replacing each Parameter with an Argument.

This Function call will create a platform with an (x,y) location of `(400, 200)` with an X-Scale-Factor of `1`, ad Y-Scale-Factor of `2`, and the immovable property set to `true`. 

# Lesson Steps

## Run the program
Open the `index.html` file and follow the instructions below to run your program:
- **Cloud9**: at the top of your window, click the **Preview** button. Then, in the top right corner of the preview window, click **Pop Out Into New Window**
- **Codenvy**: right click on the `index.html` file in your file system and click **Preview**

## TODO 1: Platforms

GOAL: Add as many platforms necessary to make your level challenging.

Find and open the file `js/init/platform.js` and use the the `createPlatform()` Function to create platforms for the level. 

`createPlatform()` takes these arguments: 

```javascript      
/*
createPlatform(x, y, scaleX, scaleY);
 
x: The x coordineate for the platform.
y: The y coordineate for the platform.
scaleX: OPTIONAL The scale factor on the x-axis, this value will stretch the platform in width.
scaleY: OPTIONAL The scale factor on the y-axis, this value will stretch the platform in height.
*/
 ```

Here is an example function call:

```javascript
createPlatform(400, 460);           // normal platform
createPlatform(300, 200, 0.3)       // small horizontal platform (30% the normal width)
createPlatform(500, 500, 0.3, 10)   // tall vertical wall (30% the normal width and 10x the height)
```

<hr> 

## TODO 2: Collectables

GOAL: Add as many collectables as necessary (at least 3) to make your level challenging.

Find and open the file `js/init/collectable.js` and use the `createCollectable()` Function to create collectables for the level. 

`createCollectable()` takes these arguments:

```javascript
/*
createCollectable(type, x, y, gravity, bounce);

type: The type of the collectable. 
x: The x coordineate for the collectable.
y: The y coordineate for the collectable.
gravity: OPTIONAL The gravitational pull on the collectable.
bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
*/
```

Here is an example function call:

```javascript
createCollectable(type.steve, 200, 170, 6, 0.7);
```

Below are the following `types` available:

```javascript
type.db         // worth 10 points
type.max        // worth 20 points
type.steve      // worth 30 points
type.grace      // worth 40 points
type.kennedi    // worth 50 points
```

<hr> 

## TODO 3: Cannons

GOAL: Add as many cannons as necessary (at least 3) to make your level challenging. 

Find and open the file `js/init/cannon.js` and use the `createCannon` Function to create cannons for the level. The `createCannon` Function takes these arguments:

```javascript
/*
createCannon(type, position, delay);

type: The type of cannon to be made. This can be one of the following Strings: "top", "bottom", "left", or "right"
position: The position coordinate for the cannon along the wall it is placed.
delay: OPTIONAL The number of milliseconds to wait before firing the first projectile

*/
```

Here is an example function call:

```javascript
createCannon("top", 450);
```
<hr> 

## TODO 4: Make your level challenging!

Now that you have platforms, cannons, and collectables make your game unique and challenging! In order to get full credit your project must be playable!

###


<hr>

Pushing your work back to GitHub

After you've designed your level, run (cut and paste) the four commands below:

1. Change directories into your github folder. The result should look something like this: `cd "hallebot.github.io"` (the github username of the user in this example is `hallebot`). Once your command looks similar to this, press enter to move on to the next command:

        cd "replace this with your github repository folder"

2. Add all your changes to a changeset:
    
        git add -A
    
3. Commit your changeset:
    
        git commit -m"create awesome platformer game"
    
4. Push your changeset to your GitHub forked repository:
    
        git push
    

Great work! Pat yourselve on the back and show off your game!

Remember that when you come back to IDE, the webserver might have stopped, so to restart it, you must open the `index.html` file and press the green **Run** button. (See step 4 in the Setup section, above).
