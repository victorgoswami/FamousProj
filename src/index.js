'use strict';

// Famous dependencies
var DOMElement = require('famous/dom-renderables/DOMElement');
var FamousEngine = require('famous/core/FamousEngine');
var Transform = require('famous/core/Transform');
var Surface  = require('famous/core/Surface');
var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var Surface = require('famous/core/Surface');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var InputSurface = require('famous/surfaces/InputSurface');
    var SubmitInputSurface = require('famous/surfaces/SubmitInputSurface');
    var FormContainerSurface = require('famous/surfaces/FormContainerSurface');
    var ScrollView = require('famous/views/Scrollview');
    var Timer = require('famous/utilities/Timer');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');


// Boilerplate code to make your life easier
FamousEngine.init();

// Initialize with a scene; then, add a 'node' to the scene root
var logo = FamousEngine.createScene().addChild();

// Create an [image] DOM element providing the logo 'node' with the 'src' path
new DOMElement(logo, { tagName: 'img' })
    .setAttribute('src', './images/famous_logo.png');

// Chainable API
logo
    // Set size mode to 'absolute' to use absolute pixel values: (width 250px, height 250px)
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(250, 250)
    // Center the 'node' to the parent (the screen, in this instance)
    .setAlign(0.5, 0.5)
    // Set the translational origin to the center of the 'node'
    .setMountPoint(0.5, 0.5)
    // Set the rotational origin to the center of the 'node'
    .setOrigin(0.5, 0.5);

// Add a spinner component to the logo 'node' that is called, every frame
var spinner = logo.addComponent({
    onUpdate: function(time) {
        logo.setRotation(0, time / 1000, 0);
        logo.requestUpdateOnNextTick(spinner);
    }
});

// Let the magic begin...
logo.requestUpdate(spinner);
