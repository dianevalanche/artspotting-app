cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/uk.co.ilee.nativetransitions/www/nativetransitions.js",
        "id": "uk.co.ilee.nativetransitions.NativeTransitions",
        "clobbers": [
            "nativetransitions"
        ]
    },
    {
        "file": "plugins/com.mymee.cordova.plugins.ios-tab-bar/www/tab-bar.js",
        "id": "com.mymee.cordova.plugins.ios-tab-bar.TabBar",
        "clobbers": [
            "window.TabBar"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.mapkit/www/MapKit.js",
        "id": "com.phonegap.plugins.mapkit.mapkit",
        "clobbers": [
            "plugin.mapKit"
        ]
    },
    {
        "file": "plugins/me.apla.cordova.nativecontrols/www/nativecontrols.js",
        "id": "me.apla.cordova.nativecontrols.nativecontrols",
        "clobbers": [
            "nativecontrols"
        ]
    },
    {
        "file": "plugins/com.photokandy.nativecontrols/www/PKNativeControls.js",
        "id": "com.photokandy.nativecontrols.PKNativeControls",
        "clobbers": [
            "window.nativeControls"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/console-via-logger.js",
        "id": "org.apache.cordova.console.console",
        "clobbers": [
            "console"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.console/www/logger.js",
        "id": "org.apache.cordova.console.logger",
        "clobbers": [
            "cordova.logger"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "uk.co.ilee.nativetransitions": "0.1.3",
    "com.mymee.cordova.plugins.ios-tab-bar": "1.0.0",
    "com.phonegap.plugins.mapkit": "0.9.3",
    "me.apla.cordova.nativecontrols": "0.1.5",
    "com.photokandy.nativecontrols": "1.0.1",
    "org.apache.cordova.console": "0.2.7"
}
// BOTTOM OF METADATA
});