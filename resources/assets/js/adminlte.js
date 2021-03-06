$(function () {
    $('.sidebar-menu li a[href="' + location.href + '"]')
        .addClass('active')
        .closest('li').addClass('active')
        .closest("ul")
        .css('display', 'block')
        .closest('li')
        .addClass('active');

    $('.textarea').wysihtml5();

    $(".source li").draggable({
        addClasses: false,
        appendTo: "body",
        helper: "clone"
    });

    $(".target").droppable({
        addClasses: false,
        activeClass: "listActive",
        accept: ":not(.ui-sortable-helper)",
        drop: function(event, ui) {
            $(this).find(".placeholder").remove();
            var link = $("<a href='#' class='dismiss'>x</a>");
            var id = ui.draggable.attr('id');
            var list = $('<li id="'+ id +'"></li>').text(ui.draggable.text());
            $(list).append(link);
            $(list).appendTo(this);
        }
    }).sortable({
        items: "li:not(.placeholder)",
        sort: function() {
            $(this).removeClass("listActive");
        }
    }).on("click", ".dismiss", function(event) {
        event.preventDefault();
        $(this).parent().remove();
    });

    $('#workflow').submit(function(){
        if ($('ul.target').children().length < 1) {
            $('#workflow').append($('<input>').attr({'type':'hidden','name':'actors[0][id]'}).val(''));

        } else {
            $('ul.target').children().each(function (i) {
                var id = $(this).attr('id');
                $('#workflow').append($('<input>').attr({'type': 'hidden', 'name': 'actors[' + i + '][id]'}).val(id));
            });
        }
    });

    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        checkboxClass: 'icheckbox_minimal-blue',
        radioClass: 'iradio_minimal-blue'
    });

    $('.edit-in-place').editable({
        error: function (response, newValue) {
            if (response.status === 500) {
                return 'Service unavailable. Please try later.';
            } else {
                var obj = $.parseJSON(response.responseText); //  response.responseText;
                return obj.name;
            }
        }
    });

    $('.editable').editable().on('hidden', function (e, reason) {
        var locale = $(this).data('locale');
        if (reason === 'save') {
            $(this).removeClass('status-0').addClass('status-1');
        }
    });

    $('.group-select').on('change', function () {
        var group = $(this).val();
        var url = $(this).find(':selected').data('route')
        if (group) {
            window.location.href = url + '/' + $(this).val();
        } else {
            window.location.href = url;
        }
    });

    $("a.delete-key").click(function (event) {
        event.preventDefault();
        var row = $(this).closest('tr');
        var url = $(this).attr('href');
        var id = row.attr('id');
        $.post(url, {id: id}, function () {
            row.remove();
        });
    });

    $('.form-import').on('ajax:success', function (e, data) {
        $('div.success-import strong.counter').text(data.counter);
        $('div.success-import').slideDown();
    });

    $('.form-find').on('ajax:success', function (e, data) {
        $('div.success-find strong.counter').text(data.counter);
        $('div.success-find').slideDown();
    });

    $('.form-publish').on('ajax:success', function (e, data) {
        $('div.success-publish').slideDown();
    });

    //Helper function to keep table row from collapsing when being sorted
    var fixHelperModified = function(e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();
        $helper.children().each(function(index)
        {
            $(this).width($originals.eq(index).width())
        });
        return $helper;
    };

    //Make diagnosis table sortable
    $("#resources tbody").sortable({
        helper: fixHelperModified,
        stop: function(event,ui) {renumber_table('#resources')}
    }).disableSelection();

    $("#ocrCheckAll").change(function () {
        $("input:checkbox").prop('checked', $(this).prop("checked"));
    });

    $(".users-ajax").select2({
        tags: true,
        ajax: {
            url: "/admin/users/search",
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    q: params.term
                };
            },
            processResults: function (data, params) {
                // parse the results into the format expected by Select2
                // since we are using custom formatting functions we do not need to
                // alter the remote JSON data, except to indicate that infinite
                // scrolling can be used
                return {
                    results: data.results,
                    pagination: data.pagination
                };
            },
            cache: true
        },
        escapeMarkup: function (markup) { return markup; }, // let our custom formatter work
        minimumInputLength: 1,
        //templateResult: formatRepo, // omitted for brevity, see the source of this page
        //templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
    });

    $(".add-more").click(function(){
        var html = $(".copy").html();
        $(".after-add-more").after(html);
    });

    $("body").on("click",".remove",function(){
        $(this).parents(".control-group").remove();
    });


});

//Renumber table rows
function renumber_table(tableID) {
    $(tableID + " tr").each(function() {
        id = this.id;
        count = $(this).parent().children().index($(this)) + 1;
        $(this).find('.order').html(count);
        if (id != '') {
            $.post('resources/'+id+'/order/'+count, {id: id, order: count}, function () {
                $(this).prop('id', count);
            });
        }
    });
}
