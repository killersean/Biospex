$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function () {
        $("#collapse"+this.id).removeClass("fa-folder").addClass("fa-folder-open");
        $("#"+this.id).load("/projects/"+this.id+"/expeditions");
        $(this).closest('tr').show();
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $("#collapse"+this.id).removeClass("fa-folder-open").addClass("fa-folder");
        $( "#expeditions"+this.id).html('');
        $(this).closest('tr').hide();
    });

    $(".table-sort").tablesorter({
        // this will apply the bootstrap theme if "uitheme" widget is included
        // the widgetOptions.uitheme is no longer required to be set
        theme : "bootstrap",

        widthFixed: false,

        headerTemplate : '{content} {icon}', // new in v2.7. Needed to add the bootstrap icon!

        // widget code contained in the jquery.tablesorter.widgets.js file
        // use the zebra stripe widget if you plan on hiding any rows (filter widget)
        widgets : [ "uitheme", "zebra" ],

        widgetOptions : {
            // using the default zebra striping class name, so it actually isn't included in the theme variable above
            // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
            zebra : ["even", "odd"],
            // reset filters button
            filter_reset : ".reset",
            // extra css class name (string or array) added to the filter element (input or select)
            filter_cssFilter: "form-control",
        }
    });

    $('#add_target').on('click', function() {
        if ($('div.target:first').is(":hidden") ) {
            $('div.target:first').show();
        } else {
            $('div.target:last').after($('div.target:last').clone()
                .find(':input')
                .each(function(){
                    this.name = this.name.replace(/\[(\d+)\]/, function(str,p1){
                        return '[' + (parseInt(p1,10)+1) + ']';
                    });
                })
                .end());
        }
        $('#targetCount').val($("div.target:visible").length);
    });
    $('#remove_target').click(function() {
        if ($('div.target').length == 1) {
            $('div.target').hide();
        } else {
            $('div.target:last').remove();
        }
        $('#targetCount').val($("div.target:visible").length);
    });

    $( "#form-data" ).validate({
        rules: {
            dwc: {
                required: true,
                extension: "zip"
            }
        }
    });
    $( "#form-recordset" ).validate({
        rules: {
            recordset: {
                required: true
            }
        }
    });
    $( "#form-data-url" ).validate({
        rules: {
            "data-url": {
                required: true
            }
        }
    });
    $( "#form-trans" ).validate({
        rules: {
            transcription: {
                required: true,
                extension: "csv"
            }
        }
    });

    $("#userGroup").change(function(){
        this.value == 'new' ? $("#groupInput").show() : $("#groupInput").hide();
    });
    if ($("#userGroup").length > 0){
        $("#userGroup").val() == 'new' ? $("#groupInput").show() : $("#groupInput").hide();
    }

    $('#selectall').click(function(event) {  //on click
        if(this.checked) { // check select status
            $('.checkbox-all').each(function() { //loop through each checkbox
                this.checked = true;  //select all checkboxes with class "checkbox1"
            });
        }else{
            $('.checkbox-all').each(function() { //loop through each checkbox
                this.checked = false; //deselect all checkboxes with class "checkbox1"
            });
        }
    });

    /*
     $('input[name="user"]').change(function(){
     $('input[class="userperm"]:checkbox').prop('checked', this.checked);
     });
     $('input[name="group"]').change(function(){
     $('input[class="groupperm"]:checkbox').prop('checked', this.checked);
     });
     $('input[name="project"]').change(function(){
     $('input[class="projectperm"]:checkbox').prop('checked', this.checked);
     });
     $('input[name="navigation"]').change(function(){
     $('input[class="navigationperm"]:checkbox').prop('checked', this.checked);
     });
     $('input[name="permission"]').change(function(){
     $('input[class="permissionperm"]:checkbox').prop('checked', this.checked);
     });
     */
});

$(function(){
    $('[data-method]').not(".disabled").append(function(){
            var methodForm = "\n"
            methodForm += "<form action='"+$(this).attr('href')+"' method='POST' style='display:none'>\n"
            methodForm += " <input type='hidden' name='_method' value='"+$(this).attr('data-method')+"'>\n"
            if ($(this).attr('data-token'))
            {
                methodForm +="<input type='hidden' name='_token' value='"+$(this).attr('data-token')+"'>\n"
            }
            methodForm += "</form>\n"
            return methodForm
        })
        .removeAttr('href')
        .attr('onclick',' if ($(this).hasClass(\'action_confirm\')) { if(confirm("Are you sure you want to do this?")) { $(this).find("form").submit(); } } else { $(this).find("form").submit(); }');
});