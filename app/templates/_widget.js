define([<% if(widgetsInTemplate) { %>
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',
    'dijit/_WidgetsInTemplateMixin',<% } else { %>
    'dijit/_TemplatedMixin',
    'dijit/_WidgetBase',<%}%>

    'dojo/_base/declare',
    'dojo/text!<%=path%>templates/<%=widgetName%>.html'
], function (<% if(widgetsInTemplate) { %>
    _TemplatedMixin,
    _WidgetBase,
    _WidgetsInTemplateMixin,
<% } else { %>
    _TemplatedMixin,
    _WidgetBase,
<%}%>
    declare,
    template
) {<% if(widgetsInTemplate) { %>
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {<% } else { %>
    return declare([_WidgetBase, _TemplatedMixin], {<%}%>
        // description:
        //      <%= description %>
        templateString: template,
        baseClass: '<%= cssClass %>',<% if(widgetsInTemplate) { %>
        widgetsInTemplate: true,<% }%>

        // Properties to be sent into constructor

        postCreate: function () {
            // summary:
            //      Overrides method of same name in dijit._Widget.
            console.info('<%= consoleLog %>::postCreate', arguments);

            this.setupConnections();

            this.inherited(arguments);
        },
        setupConnections: function () {
            // summary:
            //      wire events, and such
            console.info('<%= consoleLog %>::setupConnections', arguments);
        }
    });
});
