{"title":"Determining the frequency (hertz) of the monitor online","description":"A program for determining the installed hertz of a monitor online.","content":"## Check monitor hertz\r\nThis program helps to determine the hertz or maximum number of frames per second of the monitor, as well as the smoothness of browser animations on this monitor.\r\n\r\nFor comparison, animations of the following frequencies (Hz) are used: 15, 30, 60, 75, 90, 120, 144.\r\n\r\nAnimations work through `CSS`, so they consume a minimum amount of system resources.\r\n\r\nThe maximum number of frames per second is determined every second based on the results of calling the browser's `requestAnimationFrame` method."}