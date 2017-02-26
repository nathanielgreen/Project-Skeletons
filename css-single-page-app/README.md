# CSS Single Page App

This is a skeleton for creating different full-page views and switching between
them, without a page refresh or navigating to a new page. 

This is meant to emulate the single page app style of websites built in
front-end frameworks like Angular or React.

## Using it

The default settings use the script `viewSwitcher.js` which contains the function
`switchSection(section)`, as well as jQuery Click events for triggering the view
switcher.

This folder contains a default setup containing 3 divs to switch between.

## How it works

It essentially just switches the `visibility` and `opacity` CSS values when moving
to a different view.

The `switchSection` function is triggered by the jQuery click event on any
element with `button` as its class.

The jQuery click event passes the id as a string arguement (in this example, the 
string is truncated as every button for view switching is labelled with the id
`button-divX`).

The `switchSection` function then splices that chosen view id from the section
array (manually population) and iterates over it, setting all remaining view
ids to `visibility: hidden` and `opacity:0`, leaving only the chosen view with
`visibility: visible` and `opacity: 1`.


