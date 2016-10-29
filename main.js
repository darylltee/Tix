const electron = require('electron');
const menubar = require('menubar');

const { Tray, BrowserWindow, app } = electron;

mb.on('ready', function()
{
    console.log("Test");
});
