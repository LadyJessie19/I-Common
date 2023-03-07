# I-Common
Increase your code reusability!

## What is it?
It's a free software available from _SAtelier_ that provides a solution for the html code reuse, requiring only a `.html` file and a `.js` file.

## How does it works?

The i-common was created to make HTML Reusable in as many HTML pages as you want.

Throughout the `i-common.js` importation in the HTML file, you can add the code you want to reuse as many times as you want and in many HTML files you need.

## How do I use this?

### Step 1:
#### Clone or download the repository **i-common**.
- In the repository it will have the i-common.js file and a folder with i-common using examples.
- Cut or copy the i-common.js file to the same folder where the HTML you'll be using is.

![i-common2]

### Step 2:
#### Open the HTML file that you’ll be using.

![i-common3]

### Step 3:
#### Create a `<div>` where you want to place the reusable code.
- Add to this `<div>` the id `ar:ic-target`

```<div id="ar:ic-target"></div>```

![i-common4]

### Step 4:
#### Import the `i-common.js` file into the html that you’ll be using.

## How to Set The HTML That You'll Be Reusing

1. Open the `i-common.js` file and go to `// 'Global' Sections` (line 9);
2. You can follow the section example (`sections.example`) and put your HTML code;

![i-common1](https://user-images.githubusercontent.com/106931747/222996809-80d5f740-15ff-4350-8340-107d4b3126f7.PNG)

## **REMEMBER**
- Create an object inside the object `sections`;
- Each code line needs to be wrapped in simple quotes(' ');
- Each code line needs to end with _plus sign_ (+);
- At the end of the HTML code don't forget to put the _semicolon_ (;);

## How to Use The Script File Import:

Example:

```<script src="i-common.js" id="ar:ic-config" data-ar:ic-sec="example"></script>```

1. Set the path to the `i-common.js` file; 

2. Set the id `ar:ic-config` to the script file;

3. Set the `data-ar:ic-sec` attribute with which html section _(the object that you created in the section at the i-common.js)_ you want to use.

3. _There it goes!_ The reusable HTML will be placed in the `<div>` you seated with the id `ar:ic-target`.

### EXTRA!

>### If I Have More Than One Element To Reuse with _I-Common_?

No worries. If you have more than one reusable HTML section to place, you can set in the `data-ar:ic-sec` attribute where the section will be placed using the _more than sign_ (‘>’).

See the example below:

>#### If I have a `<header>` and a `<footer>` to reuse on more than one page.

Create two `<div>` tags. One with the id that will be passed to the `data-ar:ic-target` attribute and the second where you want to place the other section's reusable code.

Import the script and use the id `ar:ic-config` to the script element.

At the `data-ar:ic-sec` attribute pass the sections separating them with ‘,’ and use the ‘>’ to indicate where you want, the second `<div>` id.

# HAPPY REUSING!

## Keywords

reusable code, low code tool, code reuse, reusable GitHub actions, reusable, code, reuse code, reusable components, code reusability, custom reusable widgets, reusable element, reusable workflows, reusable components using javascript, reusable workflows inputs, custom low code, reusable workflows example