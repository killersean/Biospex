$(document).ready(function() {

    $('.collapse').on('shown.bs.collapse', function () {
        var groupId = $(this).attr('title');
        $("#collapse"+this.id).removeClass("glyphicon-folder-close").addClass("glyphicon-folder-open");
        $("#"+this.id).load("/groups/"+groupId+"/projects/"+this.id+"/expeditions");
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $("#collapse"+this.id).removeClass("glyphicon-folder-open").addClass("glyphicon-folder-close");
        $( "#expeditions"+this.id).html('');
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

    $( "#formAddData" ).validate({
        rules: {
            file: {
                required: true,
                extension: "zip"
            }
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

/*
$(function () {
    $("#list").jqGrid({
        url: "example.php",
        datatype: "json",
        mtype: "GET",
        colNames: ["Inv No", "Date", "Amount", "Tax", "Total", "Notes"],
        colModel: [
            { name: "col 1", width: 55 },
            { name: "col 2", width: 90 },
            { name: "col 3", width: 80, align: "right" },
            { name: "col 4", width: 80, align: "right" },
            { name: "col 5", width: 80, align: "right" },
            { name: "col 6", width: 150, sortable: false }
        ],
        pager: "#pager",
        rowNum: 10,
        rowList: [10, 20, 30],
        sortname: "invid",
        sortorder: "desc",
        viewrecords: true,
        gridview: true,
        autoencode: true
    });
});
 */