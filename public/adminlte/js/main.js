/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <support@almsaeedstudio.com>
 * @version 2.3.2
 * @license MIT <http://opensource.org/licenses/MIT>
 */
function _init(){"use strict";$.AdminLTE.layout={activate:function(){var a=this;a.fix(),a.fixSidebar(),$(window,".wrapper").resize(function(){a.fix(),a.fixSidebar()})},fix:function(){var a=$(".main-header").outerHeight()+$(".main-footer").outerHeight(),b=$(window).height(),c=$(".sidebar").height();if($("body").hasClass("fixed"))$(".content-wrapper, .right-side").css("min-height",b-$(".main-footer").outerHeight());else{var d;b>=c?($(".content-wrapper, .right-side").css("min-height",b-a),d=b-a):($(".content-wrapper, .right-side").css("min-height",c),d=c);var e=$($.AdminLTE.options.controlSidebarOptions.selector);"undefined"!=typeof e&&e.height()>d&&$(".content-wrapper, .right-side").css("min-height",e.height())}},fixSidebar:function(){return $("body").hasClass("fixed")?("undefined"==typeof $.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),void($.AdminLTE.options.sidebarSlimScroll&&"undefined"!=typeof $.fn.slimScroll&&($(".sidebar").slimScroll({destroy:!0}).height("auto"),$(".sidebar").slimscroll({height:$(window).height()-$(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})))):void("undefined"!=typeof $.fn.slimScroll&&$(".sidebar").slimScroll({destroy:!0}).height("auto"))}},$.AdminLTE.pushMenu={activate:function(a){var b=$.AdminLTE.options.screenSizes;$(document).on("click",a,function(a){a.preventDefault(),$(window).width()>b.sm-1?$("body").hasClass("sidebar-collapse")?$("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):$("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").hasClass("sidebar-open")?$("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").addClass("sidebar-open").trigger("expanded.pushMenu")}),$(".content-wrapper").click(function(){$(window).width()<=b.sm-1&&$("body").hasClass("sidebar-open")&&$("body").removeClass("sidebar-open")}),($.AdminLTE.options.sidebarExpandOnHover||$("body").hasClass("fixed")&&$("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var a=this,b=$.AdminLTE.options.screenSizes.sm-1;$(".main-sidebar").hover(function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-collapse")&&$(window).width()>b&&a.expand()},function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-expanded-on-hover")&&$(window).width()>b&&a.collapse()})},expand:function(){$("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){$("body").hasClass("sidebar-expanded-on-hover")&&$("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},$.AdminLTE.tree=function(a){var b=this,c=$.AdminLTE.options.animationSpeed;$(a).on("click","li a",function(a){var d=$(this),e=d.next();if(e.is(".treeview-menu")&&e.is(":visible")&&!$("body").hasClass("sidebar-collapse"))e.slideUp(c,function(){e.removeClass("menu-open")}),e.parent("li").removeClass("active");else if(e.is(".treeview-menu")&&!e.is(":visible")){var f=d.parents("ul").first(),g=f.find("ul:visible").slideUp(c);g.removeClass("menu-open");var h=d.parent("li");e.slideDown(c,function(){e.addClass("menu-open"),f.find("li.active").removeClass("active"),h.addClass("active"),b.layout.fix()})}e.is(".treeview-menu")&&a.preventDefault()})},$.AdminLTE.controlSidebar={activate:function(){var a=this,b=$.AdminLTE.options.controlSidebarOptions,c=$(b.selector),d=$(b.toggleBtnSelector);d.on("click",function(d){d.preventDefault(),c.hasClass("control-sidebar-open")||$("body").hasClass("control-sidebar-open")?a.close(c,b.slide):a.open(c,b.slide)});var e=$(".control-sidebar-bg");a._fix(e),$("body").hasClass("fixed")?a._fixForFixed(c):$(".content-wrapper, .right-side").height()<c.height()&&a._fixForContent(c)},open:function(a,b){b?a.addClass("control-sidebar-open"):$("body").addClass("control-sidebar-open")},close:function(a,b){b?a.removeClass("control-sidebar-open"):$("body").removeClass("control-sidebar-open")},_fix:function(a){var b=this;$("body").hasClass("layout-boxed")?(a.css("position","absolute"),a.height($(".wrapper").height()),$(window).resize(function(){b._fix(a)})):a.css({position:"fixed",height:"auto"})},_fixForFixed:function(a){a.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(a){$(".content-wrapper, .right-side").css("min-height",a.height())}},$.AdminLTE.boxWidget={selectors:$.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:$.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:$.AdminLTE.options.animationSpeed,activate:function(a){var b=this;a||(a=document),$(a).on("click",b.selectors.collapse,function(a){a.preventDefault(),b.collapse($(this))}),$(a).on("click",b.selectors.remove,function(a){a.preventDefault(),b.remove($(this))})},collapse:function(a){var b=this,c=a.parents(".box").first(),d=c.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");c.hasClass("collapsed-box")?(a.children(":first").removeClass(b.icons.open).addClass(b.icons.collapse),d.slideDown(b.animationSpeed,function(){c.removeClass("collapsed-box")})):(a.children(":first").removeClass(b.icons.collapse).addClass(b.icons.open),d.slideUp(b.animationSpeed,function(){c.addClass("collapsed-box")}))},remove:function(a){var b=a.parents(".box").first();b.slideUp(this.animationSpeed)}}}if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");$.AdminLTE={},$.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:500,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!0,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},$(function(){"use strict";$("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&$.extend(!0,$.AdminLTE.options,AdminLTEOptions);var a=$.AdminLTE.options;_init(),$.AdminLTE.layout.activate(),$.AdminLTE.tree(".sidebar"),a.enableControlSidebar&&$.AdminLTE.controlSidebar.activate(),a.navbarMenuSlimscroll&&"undefined"!=typeof $.fn.slimscroll&&$(".navbar .menu").slimscroll({height:a.navbarMenuHeight,alwaysVisible:!1,size:a.navbarMenuSlimscrollWidth}).css("width","100%"),a.sidebarPushMenu&&$.AdminLTE.pushMenu.activate(a.sidebarToggleSelector),a.enableBSToppltip&&$("body").tooltip({selector:a.BSTooltipSelector}),a.enableBoxWidget&&$.AdminLTE.boxWidget.activate(),a.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),a.directChat.enable&&$(document).on("click",a.directChat.contactToggleSelector,function(){var a=$(this).parents(".direct-chat").first();a.toggleClass("direct-chat-contacts-open")}),$('.btn-group[data-toggle="btn-toggle"]').each(function(){var a=$(this);$(this).find(".btn").on("click",function(b){a.find(".btn.active").removeClass("active"),$(this).addClass("active"),b.preventDefault()})})}),function(a){"use strict";a.fn.boxRefresh=function(b){function c(a){a.append(f),e.onLoadStart.call(a)}function d(a){a.find(f).remove(),e.onLoadDone.call(a)}var e=a.extend({trigger:".refresh-btn",source:"",onLoadStart:function(a){return a},onLoadDone:function(a){return a}},b),f=a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');return this.each(function(){if(""===e.source)return void(window.console&&window.console.log("Please specify a source first - boxRefresh()"));var b=a(this),f=b.find(e.trigger).first();f.on("click",function(a){a.preventDefault(),c(b),b.find(".box-body").load(e.source,function(){d(b)})})})}}(jQuery),function(a){"use strict";a.fn.activateBox=function(){a.AdminLTE.boxWidget.activate(this)},a.fn.toggleBox=function(){var b=a(a.AdminLTE.boxWidget.selectors.collapse,this);a.AdminLTE.boxWidget.collapse(b)},a.fn.removeBox=function(){var b=a(a.AdminLTE.boxWidget.selectors.remove,this);a.AdminLTE.boxWidget.remove(b)}}(jQuery),function(a){"use strict";a.fn.todolist=function(b){var c=a.extend({onCheck:function(a){return a},onUncheck:function(a){return a}},b);return this.each(function(){"undefined"!=typeof a.fn.iCheck?(a("input",this).on("ifChecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onCheck.call(b)}),a("input",this).on("ifUnchecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onUncheck.call(b)})):a("input",this).on("change",function(){var b=a(this).parents("li").first();b.toggleClass("done"),a("input",b).is(":checked")?c.onCheck.call(b):c.onUncheck.call(b)})})}}(jQuery);
/*!
 * Bootstrap Confirmation v1.0.5
 * https://github.com/tavicu/bs-confirmation
 */
+function(a){"use strict";var b=!1,c=function(c,d){var e=this;this.init("confirmation",c,d),a(c).on("show.bs.confirmation",function(b){e.options.onShow(b,this),a(this).addClass("open");var c=e.options,d=c.all_selector;c.singleton&&a(d).not(e.$element).each(function(){a(this).hasClass("open")&&a(this).confirmation("hide")})}),a(c).on("hide.bs.confirmation",function(b){e.options.onHide(b,this),a(this).removeClass("open")}),a(c).on("shown.bs.confirmation",function(c){var d=e.options;d.all_selector;e.isPopout()&&(b||(b=a("body").on("click",function(c){e.$element.is(c.target)||e.$element.has(c.target).length||a(".popover").has(c.target).length||(e.hide(),e.inState.click=!1,a("body").unbind(c),b=!1)})))}),d.selector?a(c).on("click.bs.confirmation",d.selector,function(a){a.preventDefault()}):a(c).on("click.bs.confirmation",function(a){a.preventDefault()})};if(!a.fn.popover||!a.fn.tooltip)throw new Error("Confirmation requires popover.js and tooltip.js");c.VERSION="1.0.5",c.DEFAULTS=a.extend({},a.fn.popover.Constructor.DEFAULTS,{placement:"right",title:"Are you sure?",btnOkClass:"btn btn-sm btn-danger",btnOkLabel:"Delete",btnOkIcon:"glyphicon glyphicon-ok",btnCancelClass:"btn btn-sm btn-default",btnCancelLabel:"Cancel",btnCancelIcon:"glyphicon glyphicon-remove",href:"#",target:"_self",singleton:!0,popout:!0,onShow:function(a,b){},onHide:function(a,b){},onConfirm:function(a,b){},onCancel:function(a,b){},template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"><a data-apply="confirmation">Yes</a><a data-dismiss="confirmation">No</a></div></div>'}),c.prototype=a.extend({},a.fn.popover.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var b=this,c=this.tip(),d=this.getTitle(),e=c.find('[data-apply="confirmation"]'),f=c.find('[data-dismiss="confirmation"]'),g=this.options;e.addClass(this.getBtnOkClass()).html(this.getBtnOkLabel()).prepend(a("<i></i>").addClass(this.getBtnOkIcon())," ").attr("href",this.getHref()).attr("target",this.getTarget()).off("click").on("click",function(a){g.onConfirm(a,b.$element),"submit"==b.$element.attr("type")&&b.$element.closest("form:first").submit(),b.hide(),b.inState.click=!1}),f.addClass(this.getBtnCancelClass()).html(this.getBtnCancelLabel()).prepend(a("<i></i>").addClass(this.getBtnCancelIcon())," ").off("click").on("click",function(a){g.onCancel(a,b.$element),b.hide(),b.inState.click=!1}),c.find(".popover-title")[this.options.html?"html":"text"](d),c.removeClass("fade top bottom left right in"),c.find(".popover-title").html()||c.find(".popover-title").hide()},c.prototype.getBtnOkClass=function(){var a=this.$element,b=this.options;return a.attr("data-btnOkClass")||("function"==typeof b.btnOkClass?b.btnOkClass.call(this,a[0]):b.btnOkClass)},c.prototype.getBtnOkLabel=function(){var a=this.$element,b=this.options;return a.attr("data-btnOkLabel")||("function"==typeof b.btnOkLabel?b.btnOkLabel.call(this,a[0]):b.btnOkLabel)},c.prototype.getBtnOkIcon=function(){var a=this.$element,b=this.options;return a.attr("data-btnOkIcon")||("function"==typeof b.btnOkIcon?b.btnOkIcon.call(this,a[0]):b.btnOkIcon)},c.prototype.getBtnCancelClass=function(){var a=this.$element,b=this.options;return a.attr("data-btnCancelClass")||("function"==typeof b.btnCancelClass?b.btnCancelClass.call(this,a[0]):b.btnCancelClass)},c.prototype.getBtnCancelLabel=function(){var a=this.$element,b=this.options;return a.attr("data-btnCancelLabel")||("function"==typeof b.btnCancelLabel?b.btnCancelLabel.call(this,a[0]):b.btnCancelLabel)},c.prototype.getBtnCancelIcon=function(){var a=this.$element,b=this.options;return a.attr("data-btnCancelIcon")||("function"==typeof b.btnCancelIcon?b.btnCancelIcon.call(this,a[0]):b.btnCancelIcon)},c.prototype.getHref=function(){var a=this.$element,b=this.options;return a.attr("data-href")||("function"==typeof b.href?b.href.call(this,a[0]):b.href)},c.prototype.getTarget=function(){var a=this.$element,b=this.options;return a.attr("data-target")||("function"==typeof b.target?b.target.call(this,a[0]):b.target)},c.prototype.isPopout=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-popout")||("function"==typeof c.popout?c.popout.call(this,b[0]):c.popout),"false"==a&&(a=!1),a};var d=a.fn.confirmation;a.fn.confirmation=function(b){var d=this;return this.each(function(){var e=a(this),f=e.data("bs.confirmation"),g="object"==typeof b&&b;g=g||{},g.all_selector=d.selector,(f||"destroy"!=b)&&(f||e.data("bs.confirmation",f=new c(this,g)),"string"==typeof b&&f[b]())})},a.fn.confirmation.Constructor=c,a.fn.confirmation.noConflict=function(){return a.fn.confirmation=d,this}}(jQuery);
$(function () {

    $('.sidebar-menu li a[href="' + location.href + '"]')
        .addClass('active')
        .closest('li').addClass('active')
        .closest("ul")
        .css('display', 'block')
        .closest('li')
        .addClass('active');

    if ($('ckeditor').length > 1) {
        CKEDITOR.replace('ckeditor');
    }

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
});

$('body').confirmation({
    singleton: true,
    selector: '[data-toggle="confirmation"]',
    onConfirm: function(event, element){
        event.preventDefault();
        $(element).append(function () {
            var methodForm = "\n";
            var url = $(this).is("[data-href]") ? $(this).data('href') : $(this).attr('href');
            methodForm += "<form action='" + url + "' method='POST' style='display:none'>\n";
            methodForm += "<input type='hidden' name='_method' value='" + $(this).data('method') + "'>\n";
            methodForm += "<input type='hidden' name='_token' value='" + $('meta[name=csrf-token]').attr('content') + "'>\n";
            methodForm += "</form>\n";
            return methodForm;
        }).find('form').submit();
    }
});

//# sourceMappingURL=main.js.map
