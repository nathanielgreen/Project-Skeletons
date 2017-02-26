console.log("viewSwitcher.js working");

// String truncater
newTrunc = function(id) {
  return id.split("").splice(7, 9).join("");
};

// Visible Section Switcher
switchSection = function(section) {

  // set Variables
  var sectionArr = ["div1", "div2", "div3"];
  var index = sectionArr.indexOf(section);
  
  // Remove Clicked Section From Array
  sectionArr.splice(index, 1);

  // Show Clicked Section
    eval(section).style.visibility = "visible";
    eval(section).style.opacity = 1;

  // Hide All Other Sections
  sectionArr.forEach(function(element){
    eval(element).style.visibility = "hidden";
    eval(element).style.opacity = 0;
  });
};

// jQuery Click Events
$(".button").click(function() {
  console.log(" clicked");
  switchSection(newTrunc(this.id.toString()));
});

$(".button-home").click(function() {
  switchSection(newTrunc(this.className.toString()));
});
