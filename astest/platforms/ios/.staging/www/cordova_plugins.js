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
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "uk.co.ilee.nativetransitions": "0.1.3",
    "com.mymee.cordova.plugins.ios-tab-bar": "1.0.0",
    "com.phonegap.plugins.mapkit": "0.9.3"
}
// BOTTOM OF METADATA
});