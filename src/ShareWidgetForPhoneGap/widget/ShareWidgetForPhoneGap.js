define([
    "dojo/_base/declare",
    "ShareWidgetForPhoneGap/lib/AbstractPhoneGapWidget/widget"
], function(declare, AbstractPhoneGapWidget) {
    "use strict";

    return declare("ShareWidgetForPhoneGap.widget.ShareWidgetForPhoneGap", [AbstractPhoneGapWidget], {

        // Set in modeler
        messageAttr: "",
        linkAttr: "",
        subjectAttr: "",

        // Overwriting Abstract widget
        phoneGapPluginName: "socialsharing",
        pluginNotFoundError: "Unable to detect Phonegap/Social sharing functionality.",

        _onClickAction: function() {
            var msg = this._obj.get(this.messageAttr),
                subject = null,
                link = null;

            if (this.subjectAttr) {
                subject = this._obj.get(this.subjectAttr);
            }
            if (this.linkAttr) {
                link = this._obj.get(this.linkAttr);
            }

            window.plugins.socialsharing.share(msg, subject, null, link);
        }
    });
});

// Compatibility with older mendix versions.
require(["ShareWidgetForPhoneGap/widget/ShareWidgetForPhoneGap"]);
