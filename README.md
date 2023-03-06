# I-Common
Increase your code reusability!

## What is it?
It's free software available from _SAtelier_ that provides a solution for the HTML code reuse, requiring only a `.html` file and a `.js` file.

## How does it work?

The _i-common_ was created to make HTML Reusable in as many HTML pages as you want.

Throughout the `i-common.js` importation in the HTML file, you can add the code you want to reuse as many times as you want and in as many HTML files as you need.

## How do I use this?

### Step 1:
#### Clone or download the repository **i-common**.
- In the i-common repository, the `i-common.js` file and a folder with i-common use examples will be available.
- Cut or copy the `i-common.js` file to the same folder where the HTML you'll be using it.

![i-common2](https://user-images.githubusercontent.com/106931747/223005326-27c825bc-35a2-48d3-9331-893d74fc9707.PNG)

### Step 2:
#### Open the HTML file that you’ll be using.

![i-common3](https://user-images.githubusercontent.com/106931747/223005359-dd224738-c157-4763-b327-e3fc8a246676.PNG)

### Step 3:
#### Create a `<div>` where you want to place the reusable code.
- Add to this `<div>` the id `ar:ic-target`;

```<div id="ar:ic-target"></div>```

![i-common4](https://user-images.githubusercontent.com/106931747/223005377-11020acd-d014-432e-b044-e1289523b8d6.PNG)

### Step 4:
#### Import the `i-common.js` file into the HTML that you’ll be using.

```<script src="i-common.js" id="ar:ic-config" data-ar:ic-sec="example"></script>```

![i-common5](https://user-images.githubusercontent.com/106931747/223005420-a6419ede-55ab-435a-9345-08c3f93632c0.PNG)

## How to Set The HTML That You'll Be Reusing

1. Open the `i-common.js` file and go to `// 'Global' Sections` (line 9);
2. You can follow the section example (`sections.example`) and create an object with your HTML code;

![i-common1](https://user-images.githubusercontent.com/106931747/222996809-80d5f740-15ff-4350-8340-107d4b3126f7.PNG)

## **REMEMBER**
- Create an object inside the object `sections`;
- Each code line needs to be wrapped in simple quotes(' ');
- Each code line needs to end with _plus sign_ (+);
- At the end of the HTML code don't forget to put the _semicolon_ (;);

## How to Use The Script File Import

Example:

```<script src="i-common.js" id="ar:ic-config" data-ar:ic-sec="example"></script>```

1. Set the path to the `i-common.js` file; 

2. Set the id `ar:ic-config` to the script file;

3. Set the `data-ar:ic-sec` attribute to which HTML section _(the object that you created in the section at the i-common.js)_ you want to use.

4. _There it goes!_ The reusable HTML will be placed in the `<div>` you seated with the id `ar:ic-target`.

### EXTRA!

>### If I Have More Than One Element To Reuse with _I-Common_?

No worries. If you have more than one reusable HTML section to place, you can set in the `data-ar:ic-sec` attribute where the section will be placed using the _more than sign_ (>).

See the example below:

>#### If I have a `<header>` and a `<footer>` to reuse on more than one page?

Create two `<div>` tags. One with the id `ar:ic-target` and the second where you want to place the other section's reusable code.

Import the script and use the id `ar:ic-config` to the script element.

At the `data-ar:ic-sec` attribute passes the sections separating them with ‘,’ and use the ‘>’ to indicate where you want, the second `<div>` id.

Example:

![i-common6](https://user-images.githubusercontent.com/106931747/223005635-8af5f742-ebae-4abe-8b11-61f1dc2c8a19.PNG)

# HAPPY REUSING!

## Keywords

reusable code, low code tool, code reuse, reusable GitHub actions, reusable, code, reuse code, reusable components, code reusability, custom reusable widgets, reusable element, reusable workflows, reusable components using javascript, reusable workflows inputs, custom low code, reusable workflows example
