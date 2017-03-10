$(function($, config) {
    $.fn.GridPanel = {
        defaultConfig: {
            tableId: '',
            fields: [],
            url: '',
        },
        method: {
            init: function(config) {
                $.extends(true, defaultConfig, config);
                createTable();
            },
            createThead: function() {
                // 
                var table = $("#" + $.fn.GridPanel.defaultConfig.tableId);
                if (fields.length > 0) {
                    table.html();
                    var thead = $("<thead/>");
                    thead.append(createTr());
                    fields.each(function() {
                        thead.append("<th width=" + this.width + ">" + this.field + "</th>");
                    });
                    table.append(thead);
                } else {

                }

            },
            createTr: function() {
                return $("<tr/>");
            },
            createTd: function(width, text) {
                return $("<td " + width + "></td>");
            }
        },
    }
})($);