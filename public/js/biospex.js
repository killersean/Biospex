/*!
 * Bootstrap-select v1.6.3 (http://silviomoreto.github.io/bootstrap-select)
 *
 * Copyright 2013-2015 bootstrap-select
 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE)
 */
!function(a){"use strict";function b(b){var c=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return a.each(c,function(){b=b.replace(this.re,this.ch)}),b}function c(a){var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c="(?:"+Object.keys(b).join("|")+")",d=new RegExp(c),e=new RegExp(c,"g"),f=null==a?"":""+a;return d.test(f)?f.replace(e,function(a){return b[a]}):f}function d(b,c){var d=arguments,f=b,g=c;[].shift.apply(d);var h,i=this.each(function(){var b=a(this);if(b.is("select")){var c=b.data("selectpicker"),i="object"==typeof f&&f;if(c){if(i)for(var j in i)i.hasOwnProperty(j)&&(c.options[j]=i[j])}else{var k=a.extend({},e.DEFAULTS,a.fn.selectpicker.defaults||{},b.data(),i);b.data("selectpicker",c=new e(this,k,g))}"string"==typeof f&&(h=c[f]instanceof Function?c[f].apply(c,d):c.options[f])}});return"undefined"!=typeof h?h:i}String.prototype.includes||!function(){var a={}.toString,b=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),c="".indexOf,d=function(b){if(null==this)throw TypeError();var d=String(this);if(b&&"[object RegExp]"==a.call(b))throw TypeError();var e=d.length,f=String(b),g=f.length,h=arguments.length>1?arguments[1]:void 0,i=h?Number(h):0;i!=i&&(i=0);var j=Math.min(Math.max(i,0),e);return g+j>e?!1:-1!=c.call(d,f,i)};b?b(String.prototype,"includes",{value:d,configurable:!0,writable:!0}):String.prototype.includes=d}(),String.prototype.startsWith||!function(){var a=function(){try{var a={},b=Object.defineProperty,c=b(a,a,a)&&b}catch(d){}return c}(),b={}.toString,c=function(a){if(null==this)throw TypeError();var c=String(this);if(a&&"[object RegExp]"==b.call(a))throw TypeError();var d=c.length,e=String(a),f=e.length,g=arguments.length>1?arguments[1]:void 0,h=g?Number(g):0;h!=h&&(h=0);var i=Math.min(Math.max(h,0),d);if(f+i>d)return!1;for(var j=-1;++j<f;)if(c.charCodeAt(i+j)!=e.charCodeAt(j))return!1;return!0};a?a(String.prototype,"startsWith",{value:c,configurable:!0,writable:!0}):String.prototype.startsWith=c}(),a.expr[":"].icontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.includes(d[3].toUpperCase())},a.expr[":"].ibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())},a.expr[":"].aicontains=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.includes(f,d[3])},a.expr[":"].aibegins=function(b,c,d){var e=a(b),f=(e.data("tokens")||e.data("normalizedText")||e.text()).toUpperCase();return f.startsWith(d[3].toUpperCase())};var e=function(b,c,d){d&&(d.stopPropagation(),d.preventDefault()),this.$element=a(b),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=c,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=e.prototype.val,this.render=e.prototype.render,this.refresh=e.prototype.refresh,this.setStyle=e.prototype.setStyle,this.selectAll=e.prototype.selectAll,this.deselectAll=e.prototype.deselectAll,this.destroy=e.prototype.remove,this.remove=e.prototype.remove,this.show=e.prototype.show,this.hide=e.prototype.hide,this.init()};e.VERSION="1.6.3",e.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(a){return 1==a?"{0} item selected":"{0} items selected"},maxOptionsText:function(a,b){return[1==a?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==b?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1},e.prototype={constructor:e,init:function(){var b=this,c=this.$element.attr("id");this.$element.hide(),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement),this.$menu=this.$newElement.children(".dropdown-menu"),this.$button=this.$newElement.children("button"),this.$searchbox=this.$newElement.find("input"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof c&&(this.$button.attr("data-id",c),a('label[for="'+c+'"]').click(function(a){a.preventDefault(),b.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.liHeight(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile()},createDropdown:function(){var b=this.multiple?" show-tick":"",d=this.$element.parent().hasClass("input-group")?" input-group-btn":"",e=this.autofocus?" autofocus":"",f=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",g=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+c(this.options.liveSearchPlaceholder)+'"')+"></div>":"",h=this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",i=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",j='<div class="btn-group bootstrap-select'+b+d+'"><button type="button" class="btn dropdown-toggle form-control selectpicker" data-toggle="dropdown"'+e+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+f+g+h+'<ul class="dropdown-menu inner selectpicker" role="menu"></ul>'+i+"</div></div>";return a(j)},createView:function(){var a=this.createDropdown(),b=this.createLi();return a.find("ul").append(b),a},reloadLi:function(){this.destroyLi();var a=this.createLi();this.$menu.find("ul").append(a)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var d=this,e=[],f=0,g=function(a,b,c,d){return"<li"+("undefined"!=typeof c&""!==c?' class="'+c+'"':"")+("undefined"!=typeof b&null!==b?' data-original-index="'+b+'"':"")+("undefined"!=typeof d&null!==d?'data-optgroup="'+d+'"':"")+">"+a+"</li>"},h=function(a,e,f,g){return'<a tabindex="0"'+("undefined"!=typeof e?' class="'+e+'"':"")+("undefined"!=typeof f?' style="'+f+'"':"")+' data-normalized-text="'+b(c(a))+'"'+("undefined"!=typeof g||null!==g?' data-tokens="'+g+'"':"")+">"+a+'<span class="'+d.options.iconBase+" "+d.options.tickIcon+' check-mark"></span></a>'};return this.$element.find("option").each(function(b){var c=a(this),i=c.attr("class")||"",j=c.attr("style"),k=c.data("content")?c.data("content"):c.html(),l=c.data("tokens")?c.data("tokens"):null,m="undefined"!=typeof c.data("subtext")?'<small class="text-muted">'+c.data("subtext")+"</small>":"",n="undefined"!=typeof c.data("icon")?'<span class="'+d.options.iconBase+" "+c.data("icon")+'"></span> ':"",o=c.is(":disabled")||c.parent().is(":disabled");if(""!==n&&o&&(n="<span>"+n+"</span>"),c.data("content")||(k=n+'<span class="text">'+k+m+"</span>"),!d.options.hideDisabled||!o)if(c.parent().is("optgroup")&&c.data("divider")!==!0){if(0===c.index()){f+=1;var p=c.parent().attr("label"),q="undefined"!=typeof c.parent().data("subtext")?'<small class="text-muted">'+c.parent().data("subtext")+"</small>":"",r=c.parent().data("icon")?'<span class="'+d.options.iconBase+" "+c.parent().data("icon")+'"></span> ':"";p=r+'<span class="text">'+p+q+"</span>",0!==b&&e.length>0&&e.push(g("",null,"divider")),e.push(g(p,null,"dropdown-header",f))}e.push(g(h(k,"opt "+i,j,l),b,"",f))}else e.push(c.data("divider")===!0?g("",b,"divider"):c.data("hidden")===!0?g(h(k,i,j,l),b,"hidden is-hidden"):g(h(k,i,j,l),b))}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),a(e.join(""))},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(b){var c=this;b!==!1&&this.$element.find("option").each(function(b){c.setDisabled(b,a(this).is(":disabled")||a(this).parent().is(":disabled")),c.setSelected(b,a(this).is(":selected"))}),this.tabIndex();var d=this.options.hideDisabled?":not([disabled])":"",e=this.$element.find("option:selected"+d).map(function(){var b,d=a(this),e=d.data("icon")&&c.options.showIcon?'<i class="'+c.options.iconBase+" "+d.data("icon")+'"></i> ':"";return b=c.options.showSubtext&&d.attr("data-subtext")&&!c.multiple?' <small class="text-muted">'+d.data("subtext")+"</small>":"","undefined"!=typeof d.attr("title")?d.attr("title"):d.data("content")&&c.options.showContent?d.data("content"):e+d.html()+b}).toArray(),f=this.multiple?e.join(this.options.multipleSeparator):e[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var g=this.options.selectedTextFormat.split(">");if(g.length>1&&e.length>g[1]||1==g.length&&e.length>=2){d=this.options.hideDisabled?", [disabled]":"";var h=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+d).length,i="function"==typeof this.options.countSelectedText?this.options.countSelectedText(e.length,h):this.options.countSelectedText;f=i.replace("{0}",e.length.toString()).replace("{1}",h.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(f=this.options.title),f||(f="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",a.trim(f.replace(/<[^>]*>?/g,""))),this.$newElement.find(".filter-option").html(f)},setStyle:function(a,b){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|validate\[.*\]/gi,""));var c=a?a:this.options.style;"add"==b?this.$button.addClass(c):"remove"==b?this.$button.removeClass(c):(this.$button.removeClass(this.options.style),this.$button.addClass(c))},liHeight:function(){if(this.options.size!==!1){var a=this.$menu.parent().clone().children(".dropdown-toggle").prop("autofocus",!1).end().appendTo("body"),b=a.addClass("open").children(".dropdown-menu"),c=b.find("li").not(".divider").not(".dropdown-header").filter(":visible").children("a").outerHeight(),d=this.options.header?b.find(".popover-title").outerHeight():0,e=this.options.liveSearch?b.find(".bs-searchbox").outerHeight():0,f=this.options.actionsBox?b.find(".bs-actionsbox").outerHeight():0,g=this.multiple?b.find(".bs-donebutton").outerHeight():0;a.remove(),this.$newElement.data("liHeight",c).data("headerHeight",d).data("searchHeight",e).data("actionsHeight",f).data("doneButtonHeight",g)}},setSize:function(){this.findLis();var b,c,d,e=this,f=this.$menu,g=f.find(".inner"),h=this.$newElement.outerHeight(),i=this.$newElement.data("liHeight"),j=this.$newElement.data("headerHeight"),k=this.$newElement.data("searchHeight"),l=this.$newElement.data("actionsHeight"),m=this.$newElement.data("doneButtonHeight"),n=this.$lis.filter(".divider").outerHeight(!0),o=parseInt(f.css("padding-top"))+parseInt(f.css("padding-bottom"))+parseInt(f.css("border-top-width"))+parseInt(f.css("border-bottom-width")),p=this.options.hideDisabled?", .disabled":"",q=a(window),r=o+parseInt(f.css("margin-top"))+parseInt(f.css("margin-bottom"))+2,s=function(){c=e.$newElement.offset().top-q.scrollTop(),d=q.height()-c-h};if(s(),this.options.header&&f.css("padding-top",0),"auto"==this.options.size){var t=function(){var a,h=e.$lis.not(".hidden");s(),b=d-r,e.options.dropupAuto&&e.$newElement.toggleClass("dropup",c>d&&b-r<f.height()),e.$newElement.hasClass("dropup")&&(b=c-r),a=h.length+h.filter(".dropdown-header").length>3?3*i+r-2:0,f.css({"max-height":b+"px",overflow:"hidden","min-height":a+j+k+l+m+"px"}),g.css({"max-height":b-j-k-l-m-o+"px","overflow-y":"auto","min-height":Math.max(a-o,0)+"px"})};t(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",t),q.off("resize.getSize").on("resize.getSize",t),q.off("scroll.getSize").on("scroll.getSize",t)}else if(this.options.size&&"auto"!=this.options.size&&f.find("li"+p).length>this.options.size){var u=this.$lis.not(".divider"+p).children().slice(0,this.options.size).last().parent().index(),v=this.$lis.slice(0,u+1).filter(".divider").length;b=i*this.options.size+v*n+o,e.options.dropupAuto&&this.$newElement.toggleClass("dropup",c>d&&b<f.height()),f.css({"max-height":b+j+k+l+m+"px",overflow:"hidden"}),g.css({"max-height":b-o+"px","overflow-y":"auto"})}},setWidth:function(){if("auto"==this.options.width){this.$menu.css("min-width","0");var a=this.$newElement.clone().appendTo("body"),b=a.children(".dropdown-menu").css("width"),c=a.css("width","auto").children("button").css("width");a.remove(),this.$newElement.css("width",Math.max(parseInt(b),parseInt(c))+"px")}else"fit"==this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){var b,c,d=this,e="<div />",f=a(e),g=function(a){f.addClass(a.attr("class").replace(/form-control/gi,"")).toggleClass("dropup",a.hasClass("dropup")),b=a.offset(),c=a.hasClass("dropup")?0:a[0].offsetHeight,f.css({top:b.top+c,left:b.left,width:a[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){d.isDisabled()||(g(a(this)),f.appendTo(d.options.container),f.toggleClass("open",!a(this).hasClass("open")),f.append(d.$menu))}),a(window).resize(function(){g(d.$newElement)}),a(window).on("scroll",function(){g(d.$newElement)}),a("html").on("click",function(b){a(b.target).closest(d.$newElement).length<1&&f.removeClass("open")})},setSelected:function(a,b){this.findLis(),this.$lis.filter('[data-original-index="'+a+'"]').toggleClass("selected",b)},setDisabled:function(a,b){this.findLis(),b?this.$lis.filter('[data-original-index="'+a+'"]').addClass("disabled").find("a").attr("href","#").attr("tabindex",-1):this.$lis.filter('[data-original-index="'+a+'"]').removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var a=this;this.isDisabled()?this.$button.addClass("disabled").attr("tabindex",-1):(this.$button.hasClass("disabled")&&this.$button.removeClass("disabled"),-1==this.$button.attr("tabindex")&&(this.$element.data("tabindex")||this.$button.removeAttr("tabindex"))),this.$button.click(function(){return!a.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},clickListener:function(){var b=this;this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(a){a.stopPropagation()}),this.$newElement.on("click",function(){b.setSize(),b.options.liveSearch||b.multiple||setTimeout(function(){b.$menu.find(".selected a").focus()},10)}),this.$menu.on("click","li a",function(c){var d=a(this),e=d.parent().data("originalIndex"),f=b.$element.val(),g=b.$element.prop("selectedIndex");if(b.multiple&&c.stopPropagation(),c.preventDefault(),!b.isDisabled()&&!d.parent().hasClass("disabled")){var h=b.$element.find("option"),i=h.eq(e),j=i.prop("selected"),k=i.parent("optgroup"),l=b.options.maxOptions,m=k.data("maxOptions")||!1;if(b.multiple){if(i.prop("selected",!j),b.setSelected(e,!j),d.blur(),l!==!1||m!==!1){var n=l<h.filter(":selected").length,o=m<k.find("option:selected").length;if(l&&n||m&&o)if(l&&1==l)h.prop("selected",!1),i.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(e,!0);else if(m&&1==m){k.find("option:selected").prop("selected",!1),i.prop("selected",!0);var p=d.data("optgroup");b.$menu.find(".selected").has('a[data-optgroup="'+p+'"]').removeClass("selected"),b.setSelected(e,!0)}else{var q="function"==typeof b.options.maxOptionsText?b.options.maxOptionsText(l,m):b.options.maxOptionsText,r=q[0].replace("{n}",l),s=q[1].replace("{n}",m),t=a('<div class="notify"></div>');q[2]&&(r=r.replace("{var}",q[2][l>1?0:1]),s=s.replace("{var}",q[2][m>1?0:1])),i.prop("selected",!1),b.$menu.append(t),l&&n&&(t.append(a("<div>"+r+"</div>")),b.$element.trigger("maxReached.bs.select")),m&&o&&(t.append(a("<div>"+s+"</div>")),b.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){b.setSelected(e,!1)},10),t.delay(750).fadeOut(300,function(){a(this).remove()})}}}else h.prop("selected",!1),i.prop("selected",!0),b.$menu.find(".selected").removeClass("selected"),b.setSelected(e,!0);b.multiple?b.options.liveSearch&&b.$searchbox.focus():b.$button.focus(),(f!=b.$element.val()&&b.multiple||g!=b.$element.prop("selectedIndex")&&!b.multiple)&&b.$element.change()}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(a){a.currentTarget==this&&(a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus())}),this.$menu.on("click","li.divider, li.dropdown-header",function(a){a.preventDefault(),a.stopPropagation(),b.options.liveSearch?b.$searchbox.focus():b.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){b.$button.focus()}),this.$searchbox.on("click",function(a){a.stopPropagation()}),this.$menu.on("click",".actions-btn",function(c){b.options.liveSearch?b.$searchbox.focus():b.$button.focus(),c.preventDefault(),c.stopPropagation(),a(this).is(".bs-select-all")?b.selectAll():b.deselectAll(),b.$element.change()}),this.$element.change(function(){b.render(!1)})},liveSearchListener:function(){var d=this,e=a('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){d.$menu.find(".active").removeClass("active"),d.$searchbox.val()&&(d.$searchbox.val(""),d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove()),d.multiple||d.$menu.find(".selected").addClass("active"),setTimeout(function(){d.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(a){a.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(d.$searchbox.val()){var f=d.$lis.not(".is-hidden").removeClass("hidden").find("a");f=f.not(d.options.liveSearchNormalize?":a"+d._searchStyle()+"("+b(d.$searchbox.val())+")":":"+d._searchStyle()+"("+d.$searchbox.val()+")"),f.parent().addClass("hidden"),d.$lis.filter(".dropdown-header").each(function(){var b=a(this),c=b.data("optgroup");0===d.$lis.filter("[data-optgroup="+c+"]").not(b).filter(":visible").length&&b.addClass("hidden")}),d.$menu.find("li").filter(":visible:not(.no-results)").length?e.parent().length&&e.remove():(e.parent().length&&e.remove(),e.html(d.options.noneResultsText.replace("{0}",'"'+c(d.$searchbox.val())+'"')).show(),d.$menu.find("li").last().after(e))}else d.$lis.not(".is-hidden").removeClass("hidden"),e.parent().length&&e.remove();d.$menu.find("li.active").removeClass("active"),d.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(),a(this).focus()})},_searchStyle:function(){var a="icontains";switch(this.options.liveSearchStyle){case"begins":case"startsWith":a="ibegins";break;case"contains":}return a},val:function(a){return"undefined"!=typeof a?(this.$element.val(a),this.render(),this.$element):this.$element.val()},selectAll:function(){this.findLis(),this.$lis.not(".divider").not(".disabled").not(".selected").filter(":visible").find("a").click()},deselectAll:function(){this.findLis(),this.$lis.not(".divider").not(".disabled").filter(".selected").filter(":visible").find("a").click()},keydown:function(c){var d,e,f,g,h,i,j,k,l,m=a(this),n=m.is("input")?m.parent().parent():m.parent(),o=n.data("this"),p={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(o.options.liveSearch&&(n=m.parent().parent()),o.options.container&&(n=o.$menu),d=a("[role=menu] li a",n),l=o.$menu.parent().hasClass("open"),!l&&/([0-9]|[A-z])/.test(String.fromCharCode(c.keyCode))&&(o.options.container?o.$newElement.trigger("click"):(o.setSize(),o.$menu.parent().addClass("open"),l=!0),o.$searchbox.focus()),o.options.liveSearch&&(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&0===o.$menu.find(".active").length&&(c.preventDefault(),o.$menu.parent().removeClass("open"),o.$button.focus()),d=a("[role=menu] li:not(.divider):not(.dropdown-header):visible",n),m.val()||/(38|40)/.test(c.keyCode.toString(10))||0===d.filter(".active").length&&(d=o.$newElement.find("li"),d=d.filter(o.options.liveSearchNormalize?":a"+o._searchStyle()+"("+b(p[c.keyCode])+")":":"+o._searchStyle()+"("+p[c.keyCode]+")"))),d.length){if(/(38|40)/.test(c.keyCode.toString(10)))e=d.index(d.filter(":focus")),g=d.parent(":not(.disabled):visible").first().index(),h=d.parent(":not(.disabled):visible").last().index(),f=d.eq(e).parent().nextAll(":not(.disabled):visible").eq(0).index(),i=d.eq(e).parent().prevAll(":not(.disabled):visible").eq(0).index(),j=d.eq(f).parent().prevAll(":not(.disabled):visible").eq(0).index(),o.options.liveSearch&&(d.each(function(b){a(this).is(":not(.disabled)")&&a(this).data("index",b)}),e=d.index(d.filter(".active")),g=d.filter(":not(.disabled):visible").first().data("index"),h=d.filter(":not(.disabled):visible").last().data("index"),f=d.eq(e).nextAll(":not(.disabled):visible").eq(0).data("index"),i=d.eq(e).prevAll(":not(.disabled):visible").eq(0).data("index"),j=d.eq(f).prevAll(":not(.disabled):visible").eq(0).data("index")),k=m.data("prevIndex"),38==c.keyCode&&(o.options.liveSearch&&(e-=1),e!=j&&e>i&&(e=i),g>e&&(e=g),e==k&&(e=h)),40==c.keyCode&&(o.options.liveSearch&&(e+=1),-1==e&&(e=0),e!=j&&f>e&&(e=f),e>h&&(e=h),e==k&&(e=g)),m.data("prevIndex",e),o.options.liveSearch?(c.preventDefault(),m.is(".dropdown-toggle")||(d.removeClass("active"),d.eq(e).addClass("active").find("a").focus(),m.focus())):d.eq(e).focus();else if(!m.is("input")){var q,r,s=[];d.each(function(){a(this).parent().is(":not(.disabled)")&&a.trim(a(this).text().toLowerCase()).substring(0,1)==p[c.keyCode]&&s.push(a(this).parent().index())}),q=a(document).data("keycount"),q++,a(document).data("keycount",q),r=a.trim(a(":focus").text().toLowerCase()).substring(0,1),r!=p[c.keyCode]?(q=1,a(document).data("keycount",q)):q>=s.length&&(a(document).data("keycount",0),q>s.length&&(q=1)),d.eq(s[q-1]).focus()}if((/(13|32)/.test(c.keyCode.toString(10))||/(^9$)/.test(c.keyCode.toString(10))&&o.options.selectOnTab)&&l){if(/(32)/.test(c.keyCode.toString(10))||c.preventDefault(),o.options.liveSearch)/(32)/.test(c.keyCode.toString(10))||(o.$menu.find(".active a").click(),m.focus());else{var t=a(":focus");t.click(),t.focus(),c.preventDefault()}a(document).data("keycount",0)}(/(^9$|27)/.test(c.keyCode.toString(10))&&l&&(o.multiple||o.options.liveSearch)||/(27)/.test(c.keyCode.toString(10))&&!l)&&(o.$menu.parent().removeClass("open"),o.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement),this.options.container&&this.$menu.hide()},refresh:function(){this.$lis=null,this.reloadLi(),this.render(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()}};var f=a.fn.selectpicker;a.fn.selectpicker=d,a.fn.selectpicker.Constructor=e,a.fn.selectpicker.noConflict=function(){return a.fn.selectpicker=f,this},a(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",e.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bs-searchbox input",function(a){a.stopPropagation()}),a(window).on("load.bs.select.data-api",function(){a(".selectpicker").each(function(){var b=a(this);d.call(b,b.data())})})}(jQuery);
//# sourceMappingURL=bootstrap-select.js.map
/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),e=c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),void 0!==e?e:!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){if(this.length){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||-1!==a.inArray(c.keyCode,d)||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=h&&g.check(e)))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)a[b]&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0]),d in c||!b.objectLength(a(this).rules())?!1:(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);if("function"==typeof f.normalizer){if(i=f.normalizer.call(b,i),"string"!=typeof i)throw new TypeError("The normalizer should return a string value.");delete f.normalizer}for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j instanceof TypeError&&(j.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||d>=e},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||c>=a},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e=a(c).attr("type"),f="Step attribute on input type "+e+" is not supported.",g=["text","number","range"],h=new RegExp("\\b"+e+"\\b"),i=e&&!h.test(g.join());if(i)throw new Error(f);return this.optional(c)||b%d===0},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})});
/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./jquery.validate.min"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){!function(){function b(a){return a.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g,"")}a.validator.addMethod("maxWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length<=d},a.validator.format("Please enter {0} words or less.")),a.validator.addMethod("minWords",function(a,c,d){return this.optional(c)||b(a).match(/\b\w+\b/g).length>=d},a.validator.format("Please enter at least {0} words.")),a.validator.addMethod("rangeWords",function(a,c,d){var e=b(a),f=/\b\w+\b/g;return this.optional(c)||e.match(f).length>=d[0]&&e.match(f).length<=d[1]},a.validator.format("Please enter between {0} and {1} words."))}(),a.validator.addMethod("accept",function(b,c,d){var e,f,g,h="string"==typeof d?d.replace(/\s/g,""):"image/*",i=this.optional(c);if(i)return i;if("file"===a(c).attr("type")&&(h=h.replace(/[\-\[\]\/\{\}\(\)\+\?\.\\\^\$\|]/g,"\\$&").replace(/,/g,"|").replace("/*","/.*"),c.files&&c.files.length))for(g=new RegExp(".?("+h+")$","i"),e=0;e<c.files.length;e++)if(f=c.files[e],!f.type.match(g))return!1;return!0},a.validator.format("Please enter a value with a valid mimetype.")),a.validator.addMethod("alphanumeric",function(a,b){return this.optional(b)||/^\w+$/i.test(a)},"Letters, numbers, and underscores only please"),a.validator.addMethod("bankaccountNL",function(a,b){if(this.optional(b))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a))return!1;var c,d,e,f=a.replace(/ /g,""),g=0,h=f.length;for(c=0;h>c;c++)d=h-c,e=f.substring(c,c+1),g+=d*e;return g%11===0},"Please specify a valid bank account number"),a.validator.addMethod("bankorgiroaccountNL",function(b,c){return this.optional(c)||a.validator.methods.bankaccountNL.call(this,b,c)||a.validator.methods.giroaccountNL.call(this,b,c)},"Please specify a valid bank or giro account number"),a.validator.addMethod("bic",function(a,b){return this.optional(b)||/^([A-Z]{6}[A-Z2-9][A-NP-Z1-9])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a.toUpperCase())},"Please specify a valid BIC code"),a.validator.addMethod("cifES",function(a){"use strict";var b,c,d,e,f,g,h=[];if(a=a.toUpperCase(),!a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"))return!1;for(d=0;9>d;d++)h[d]=parseInt(a.charAt(d),10);for(c=h[2]+h[4]+h[6],e=1;8>e;e+=2)f=(2*h[e]).toString(),g=f.charAt(1),c+=parseInt(f.charAt(0),10)+(""===g?0:parseInt(g,10));return/^[ABCDEFGHJNPQRSUVW]{1}/.test(a)?(c+="",b=10-parseInt(c.charAt(c.length-1),10),a+=b,h[8].toString()===String.fromCharCode(64+b)||h[8].toString()===a.charAt(a.length-1)):!1},"Please specify a valid CIF number."),a.validator.addMethod("cpfBR",function(a){if(a=a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g,""),11!==a.length)return!1;var b,c,d,e,f=0;if(b=parseInt(a.substring(9,10),10),c=parseInt(a.substring(10,11),10),d=function(a,b){var c=10*a%11;return 10!==c&&11!==c||(c=0),c===b},""===a||"00000000000"===a||"11111111111"===a||"22222222222"===a||"33333333333"===a||"44444444444"===a||"55555555555"===a||"66666666666"===a||"77777777777"===a||"88888888888"===a||"99999999999"===a)return!1;for(e=1;9>=e;e++)f+=parseInt(a.substring(e-1,e),10)*(11-e);if(d(f,b)){for(f=0,e=1;10>=e;e++)f+=parseInt(a.substring(e-1,e),10)*(12-e);return d(f,c)}return!1},"Please specify a valid CPF number"),a.validator.addMethod("creditcard",function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--)d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g;return e%10===0},"Please enter a valid credit card number."),a.validator.addMethod("creditcardtypes",function(a,b,c){if(/[^0-9\-]+/.test(a))return!1;a=a.replace(/\D/g,"");var d=0;return c.mastercard&&(d|=1),c.visa&&(d|=2),c.amex&&(d|=4),c.dinersclub&&(d|=8),c.enroute&&(d|=16),c.discover&&(d|=32),c.jcb&&(d|=64),c.unknown&&(d|=128),c.all&&(d=255),1&d&&/^(5[12345])/.test(a)?16===a.length:2&d&&/^(4)/.test(a)?16===a.length:4&d&&/^(3[47])/.test(a)?15===a.length:8&d&&/^(3(0[012345]|[68]))/.test(a)?14===a.length:16&d&&/^(2(014|149))/.test(a)?15===a.length:32&d&&/^(6011)/.test(a)?16===a.length:64&d&&/^(3)/.test(a)?16===a.length:64&d&&/^(2131|1800)/.test(a)?15===a.length:!!(128&d)},"Please enter a valid credit card number."),a.validator.addMethod("currency",function(a,b,c){var d,e="string"==typeof c,f=e?c:c[0],g=e?!0:c[1];return f=f.replace(/,/g,""),f=g?f+"]":f+"]?",d="^["+f+"([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$",d=new RegExp(d),this.optional(b)||d.test(a)},"Please specify a valid currency"),a.validator.addMethod("dateFA",function(a,b){return this.optional(b)||/^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a)},a.validator.messages.date),a.validator.addMethod("dateITA",function(a,b){var c,d,e,f,g,h=!1,i=/^\d{1,2}\/\d{1,2}\/\d{4}$/;return i.test(a)?(c=a.split("/"),d=parseInt(c[0],10),e=parseInt(c[1],10),f=parseInt(c[2],10),g=new Date(Date.UTC(f,e-1,d,12,0,0,0)),h=g.getUTCFullYear()===f&&g.getUTCMonth()===e-1&&g.getUTCDate()===d):h=!1,this.optional(b)||h},a.validator.messages.date),a.validator.addMethod("dateNL",function(a,b){return this.optional(b)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a)},a.validator.messages.date),a.validator.addMethod("extension",function(a,b,c){return c="string"==typeof c?c.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(b)||a.match(new RegExp("\\.("+c+")$","i"))},a.validator.format("Please enter a value with a valid extension.")),a.validator.addMethod("giroaccountNL",function(a,b){return this.optional(b)||/^[0-9]{1,7}$/.test(a)},"Please specify a valid giro account number"),a.validator.addMethod("iban",function(a,b){if(this.optional(b))return!0;var c,d,e,f,g,h,i,j,k,l=a.replace(/ /g,"").toUpperCase(),m="",n=!0,o="",p="";if(c=l.substring(0,2),h={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},g=h[c],"undefined"!=typeof g&&(i=new RegExp("^[A-Z]{2}\\d{2}"+g+"$",""),!i.test(l)))return!1;for(d=l.substring(4,l.length)+l.substring(0,4),j=0;j<d.length;j++)e=d.charAt(j),"0"!==e&&(n=!1),n||(m+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));for(k=0;k<m.length;k++)f=m.charAt(k),p=""+o+f,o=p%97;return 1===o},"Please specify a valid IBAN"),a.validator.addMethod("integer",function(a,b){return this.optional(b)||/^-?\d+$/.test(a)},"A positive or negative non-decimal number please"),a.validator.addMethod("ipv4",function(a,b){return this.optional(b)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a)},"Please enter a valid IP v4 address."),a.validator.addMethod("ipv6",function(a,b){return this.optional(b)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a)},"Please enter a valid IP v6 address."),a.validator.addMethod("lettersonly",function(a,b){return this.optional(b)||/^[a-z]+$/i.test(a)},"Letters only please"),a.validator.addMethod("letterswithbasicpunc",function(a,b){return this.optional(b)||/^[a-z\-.,()'"\s]+$/i.test(a)},"Letters or punctuation only please"),a.validator.addMethod("mobileNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid mobile number"),a.validator.addMethod("mobileUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),a.validator.addMethod("nieES",function(a){"use strict";return a=a.toUpperCase(),a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")?/^[T]{1}/.test(a)?a[8]===/^[T]{1}[A-Z0-9]{8}$/.test(a):/^[XYZ]{1}/.test(a)?a[8]==="TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.replace("X","0").replace("Y","1").replace("Z","2").substring(0,8)%23):!1:!1},"Please specify a valid NIE number."),a.validator.addMethod("nifES",function(a){"use strict";return a=a.toUpperCase(),a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")?/^[0-9]{8}[A-Z]{1}$/.test(a)?"TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8,0)%23)===a.charAt(8):/^[KLM]{1}/.test(a)?a[8]===String.fromCharCode(64):!1:!1},"Please specify a valid NIF number."),jQuery.validator.addMethod("notEqualTo",function(b,c,d){return this.optional(c)||!a.validator.methods.equalTo.call(this,b,c,d)},"Please enter a different value, values must not be the same."),a.validator.addMethod("nowhitespace",function(a,b){return this.optional(b)||/^\S+$/i.test(a)},"No white space please"),a.validator.addMethod("pattern",function(a,b,c){return this.optional(b)?!0:("string"==typeof c&&(c=new RegExp("^(?:"+c+")$")),c.test(a))},"Invalid format."),a.validator.addMethod("phoneNL",function(a,b){return this.optional(b)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a)},"Please specify a valid phone number."),a.validator.addMethod("phoneUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),a.validator.addMethod("phoneUS",function(a,b){return a=a.replace(/\s+/g,""),this.optional(b)||a.length>9&&a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)},"Please specify a valid phone number"),a.validator.addMethod("phonesUK",function(a,b){return a=a.replace(/\(|\)|\s+|-/g,""),this.optional(b)||a.length>9&&a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),a.validator.addMethod("postalCodeCA",function(a,b){return this.optional(b)||/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] *\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeBR",function(a,b){return this.optional(b)||/^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a)},"Informe um CEP válido."),a.validator.addMethod("postalcodeIT",function(a,b){return this.optional(b)||/^\d{5}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postalcodeNL",function(a,b){return this.optional(b)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a)},"Please specify a valid postal code"),a.validator.addMethod("postcodeUK",function(a,b){return this.optional(b)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a)},"Please specify a valid UK postcode"),a.validator.addMethod("require_from_group",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_req_grp")?f.data("valid_req_grp"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length>=d[0];return f.data("valid_req_grp",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),h},a.validator.format("Please fill at least {0} of these fields.")),a.validator.addMethod("skip_or_fill_minimum",function(b,c,d){var e=a(d[1],c.form),f=e.eq(0),g=f.data("valid_skip")?f.data("valid_skip"):a.extend({},this),h=e.filter(function(){return g.elementValue(this)}).length,i=0===h||h>=d[0];return f.data("valid_skip",g),a(c).data("being_validated")||(e.data("being_validated",!0),e.each(function(){g.element(this)}),e.data("being_validated",!1)),i},a.validator.format("Please either skip these fields or fill at least {0} of them.")),a.validator.addMethod("stateUS",function(a,b,c){var d,e="undefined"==typeof c,f=e||"undefined"==typeof c.caseSensitive?!1:c.caseSensitive,g=e||"undefined"==typeof c.includeTerritories?!1:c.includeTerritories,h=e||"undefined"==typeof c.includeMilitary?!1:c.includeMilitary;return d=g||h?g&&h?"^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":g?"^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":"^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$":"^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$",d=f?new RegExp(d):new RegExp(d,"i"),this.optional(b)||d.test(a)},"Please specify a valid state"),a.validator.addMethod("strippedminlength",function(b,c,d){return a(b).text().length>=d},a.validator.format("Please enter at least {0} characters")),a.validator.addMethod("time",function(a,b){return this.optional(b)||/^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a)},"Please enter a valid time, between 00:00 and 23:59"),a.validator.addMethod("time12h",function(a,b){return this.optional(b)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a)},"Please enter a valid time in 12-hour am/pm format"),a.validator.addMethod("url2",function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},a.validator.messages.url),a.validator.addMethod("vinUS",function(a){if(17!==a.length)return!1;var b,c,d,e,f,g,h=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],i=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],j=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],k=0;for(b=0;17>b;b++){if(e=j[b],d=a.slice(b,b+1),8===b&&(g=d),isNaN(d)){for(c=0;c<h.length;c++)if(d.toUpperCase()===h[c]){d=i[c],d*=e,isNaN(g)&&8===c&&(g=h[c]);break}}else d*=e;k+=d}return f=k%11,10===f&&(f="X"),f===g},"The specified vehicle identification number (VIN) is invalid."),a.validator.addMethod("zipcodeUS",function(a,b){return this.optional(b)||/^\d{5}(-\d{4})?$/.test(a)},"The specified US ZIP Code is invalid"),a.validator.addMethod("ziprange",function(a,b){return this.optional(b)||/^90[2-5]\d\{2\}-\d{4}$/.test(a)},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")});
/* jshint forin:true, noarg:true, noempty:true, eqeqeq:true, boss:true, undef:true, curly:true, browser:true, jquery:true */
/*
 * jQuery MultiSelect UI Widget 1.13
 * Copyright (c) 2012 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery 1.4.2+
 *   - jQuery UI 1.8 widget factory
 *
 * Optional:
 *   - jQuery UI effects
 *   - jQuery UI position utility
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
*/
(function($, undefined){

var multiselectID = 0;

$.widget("ech.multiselect", {

	// default options
	options: {
		header: true,
		height: 175,
		minWidth: 225,
		classes: '',
		checkAllText: 'Check all',
		uncheckAllText: 'Uncheck all',
		noneSelectedText: 'Select options',
		selectedText: '# selected',
		selectedList: 0,
		show: null,
		hide: null,
		autoOpen: false,
		multiple: true,
		position: {}
	},

	_create: function(){
		var el = this.element.hide(),
			o = this.options;

		this.speed = $.fx.speeds._default; // default speed for effects
		this._isOpen = false; // assume no

		var
			button = (this.button = $('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>'))
				.addClass('ui-multiselect ui-widget ui-state-default ui-corner-all')
				.addClass( o.classes )
				.attr({ 'title':el.attr('title'), 'aria-haspopup':true, 'tabIndex':el.attr('tabIndex') })
				.insertAfter( el ),

			buttonlabel = (this.buttonlabel = $('<span />'))
				.html( o.noneSelectedText )
				.appendTo( button ),

			menu = (this.menu = $('<div />'))
				.addClass('ui-multiselect-menu ui-widget ui-widget-content ui-corner-all')
				.addClass( o.classes )
				.appendTo( document.body ),

			header = (this.header = $('<div />'))
				.addClass('ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix')
				.appendTo( menu ),

			headerLinkContainer = (this.headerLinkContainer = $('<ul />'))
				.addClass('ui-helper-reset')
				.html(function(){
					if( o.header === true ){
						return '<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>' + o.checkAllText + '</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>' + o.uncheckAllText + '</span></a></li>';
					} else if(typeof o.header === "string"){
						return '<li>' + o.header + '</li>';
					} else {
						return '';
					}
				})
				.append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>')
				.appendTo( header ),

			checkboxContainer = (this.checkboxContainer = $('<ul />'))
				.addClass('ui-multiselect-checkboxes ui-helper-reset')
				.appendTo( menu );

		// perform event bindings
		this._bindEvents();

		// build menu
		this.refresh( true );

		// some addl. logic for single selects
		if( !o.multiple ){
			menu.addClass('ui-multiselect-single');
		}
	},

	_init: function(){
		if( this.options.header === false ){
			this.header.hide();
		}
		if( !this.options.multiple ){
			this.headerLinkContainer.find('.ui-multiselect-all, .ui-multiselect-none').hide();
		}
		if( this.options.autoOpen ){
			this.open();
		}
		if( this.element.is(':disabled') ){
			this.disable();
		}
	},

	refresh: function( init ){
		var el = this.element,
			o = this.options,
			menu = this.menu,
			checkboxContainer = this.checkboxContainer,
			optgroups = [],
			html = "",
			id = el.attr('id') || multiselectID++; // unique ID for the label & option tags

		// build items
		el.find('option').each(function( i ){
			var $this = $(this),
				parent = this.parentNode,
				title = this.innerHTML,
				description = this.title,
				value = this.value,
				inputID = 'ui-multiselect-' + (this.id || id + '-option-' + i),
				isDisabled = this.disabled,
				isSelected = this.selected,
				labelClasses = [ 'ui-corner-all' ],
				liClasses = (isDisabled ? 'ui-multiselect-disabled ' : ' ') + this.className,
				optLabel;

			// is this an optgroup?
			if( parent.tagName === 'OPTGROUP' ){
				optLabel = parent.getAttribute( 'label' );

				// has this optgroup been added already?
				if( $.inArray(optLabel, optgroups) === -1 ){
					html += '<li class="ui-multiselect-optgroup-label ' + parent.className + '"><a href="#">' + optLabel + '</a></li>';
					optgroups.push( optLabel );
				}
			}

			if( isDisabled ){
				labelClasses.push( 'ui-state-disabled' );
			}

			// browsers automatically select the first option
			// by default with single selects
			if( isSelected && !o.multiple ){
				labelClasses.push( 'ui-state-active' );
			}

			html += '<li class="' + liClasses + '">';

			// create the label
			html += '<label for="' + inputID + '" title="' + description + '" class="' + labelClasses.join(' ') + '">';
			html += '<input id="' + inputID + '" name="multiselect_' + id + '" type="' + (o.multiple ? "checkbox" : "radio") + '" value="' + value + '" title="' + title + '"';

			// pre-selected?
			if( isSelected ){
				html += ' checked="checked"';
				html += ' aria-selected="true"';
			}

			// disabled?
			if( isDisabled ){
				html += ' disabled="disabled"';
				html += ' aria-disabled="true"';
			}

			// add the title and close everything off
			html += ' /><span>' + title + '</span></label></li>';
		});

		// insert into the DOM
		checkboxContainer.html( html );

		// cache some moar useful elements
		this.labels = menu.find('label');
		this.inputs = this.labels.children('input');

		// set widths
		this._setButtonWidth();
		this._setMenuWidth();

		// remember default value
		this.button[0].defaultValue = this.update();

		// broadcast refresh event; useful for widgets
		if( !init ){
			this._trigger('refresh');
		}
	},

	// updates the button text. call refresh() to rebuild
	update: function(){
		var o = this.options,
			$inputs = this.inputs,
			$checked = $inputs.filter(':checked'),
			numChecked = $checked.length,
			value;

		if( numChecked === 0 ){
			value = o.noneSelectedText;
		} else {
			if($.isFunction( o.selectedText )){
				value = o.selectedText.call(this, numChecked, $inputs.length, $checked.get());
			} else if( /\d/.test(o.selectedList) && o.selectedList > 0 && numChecked <= o.selectedList){
				value = $checked.map(function(){ return $(this).next().html(); }).get().join(', ');
			} else {
				value = o.selectedText.replace('#', numChecked).replace('#', $inputs.length);
			}
		}

		this.buttonlabel.html( value );
		return value;
	},

	// binds events
	_bindEvents: function(){
		var self = this, button = this.button;

		function clickHandler(){
			self[ self._isOpen ? 'close' : 'open' ]();
			return false;
		}

		// webkit doesn't like it when you click on the span :(
		button
			.find('span')
			.bind('click.multiselect', clickHandler);

		// button events
		button.bind({
			click: clickHandler,
			keypress: function( e ){
				switch(e.which){
					case 27: // esc
					case 38: // up
					case 37: // left
						self.close();
						break;
					case 39: // right
					case 40: // down
						self.open();
						break;
				}
			},
			mouseenter: function(){
				if( !button.hasClass('ui-state-disabled') ){
					$(this).addClass('ui-state-hover');
				}
			},
			mouseleave: function(){
				$(this).removeClass('ui-state-hover');
			},
			focus: function(){
				if( !button.hasClass('ui-state-disabled') ){
					$(this).addClass('ui-state-focus');
				}
			},
			blur: function(){
				$(this).removeClass('ui-state-focus');
			}
		});

		// header links
		this.header
			.delegate('a', 'click.multiselect', function( e ){
				// close link
				if( $(this).hasClass('ui-multiselect-close') ){
					self.close();

				// check all / uncheck all
				} else {
					self[ $(this).hasClass('ui-multiselect-all') ? 'checkAll' : 'uncheckAll' ]();
				}

				e.preventDefault();
			});

		// optgroup label toggle support
		this.menu
			.delegate('li.ui-multiselect-optgroup-label a', 'click.multiselect', function( e ){
				e.preventDefault();

				var $this = $(this),
					$inputs = $this.parent().nextUntil('li.ui-multiselect-optgroup-label').find('input:visible:not(:disabled)'),
					nodes = $inputs.get(),
					label = $this.parent().text();

				// trigger event and bail if the return is false
				if( self._trigger('beforeoptgrouptoggle', e, { inputs:nodes, label:label }) === false ){
					return;
				}

				// toggle inputs
				self._toggleChecked(
					$inputs.filter(':checked').length !== $inputs.length,
					$inputs
				);

				self._trigger('optgrouptoggle', e, {
				    inputs: nodes,
				    label: label,
				    checked: nodes[0].checked
				});
			})
			.delegate('label', 'mouseenter.multiselect', function(){
				if( !$(this).hasClass('ui-state-disabled') ){
					self.labels.removeClass('ui-state-hover');
					$(this).addClass('ui-state-hover').find('input').focus();
				}
			})
			.delegate('label', 'keydown.multiselect', function( e ){
				e.preventDefault();

				switch(e.which){
					case 9: // tab
					case 27: // esc
						self.close();
						break;
					case 38: // up
					case 40: // down
					case 37: // left
					case 39: // right
						self._traverse(e.which, this);
						break;
					case 13: // enter
						$(this).find('input')[0].click();
						break;
				}
			})
			.delegate('input[type="checkbox"], input[type="radio"]', 'click.multiselect', function( e ){
				var $this = $(this),
					val = this.value,
					checked = this.checked,
					tags = self.element.find('option');

				// bail if this input is disabled or the event is cancelled
				if( this.disabled || self._trigger('click', e, { value: val, text: this.title, checked: checked }) === false ){
					e.preventDefault();
					return;
				}

				// make sure the input has focus. otherwise, the esc key
				// won't close the menu after clicking an item.
				$this.focus();

				// toggle aria state
				$this.attr('aria-selected', checked);

				// change state on the original option tags
				tags.each(function(){
					if( this.value === val ){
						this.selected = checked;
					} else if( !self.options.multiple ){
						this.selected = false;
					}
				});

				// some additional single select-specific logic
				if( !self.options.multiple ){
					self.labels.removeClass('ui-state-active');
					$this.closest('label').toggleClass('ui-state-active', checked );

					// close menu
					self.close();
				}

				// fire change on the select box
				self.element.trigger("change");

				// setTimeout is to fix multiselect issue #14 and #47. caused by jQuery issue #3827
				// http://bugs.jquery.com/ticket/3827
				setTimeout($.proxy(self.update, self), 10);
			});

		// close each widget when clicking on any other element/anywhere else on the page
		$(document).bind('mousedown.multiselect', function( e ){
			if(self._isOpen && !$.contains(self.menu[0], e.target) && !$.contains(self.button[0], e.target) && e.target !== self.button[0]){
				self.close();
			}
		});

		// deal with form resets.  the problem here is that buttons aren't
		// restored to their defaultValue prop on form reset, and the reset
		// handler fires before the form is actually reset.  delaying it a bit
		// gives the form inputs time to clear.
		$(this.element[0].form).bind('reset.multiselect', function(){
			setTimeout($.proxy(self.refresh, self), 10);
		});
	},

	// set button width
	_setButtonWidth: function(){
		var width = this.element.outerWidth(),
			o = this.options;

		if( /\d/.test(o.minWidth) && width < o.minWidth){
			width = o.minWidth;
		}

		// set widths
		this.button.width( width );
	},

	// set menu width
	_setMenuWidth: function(){
		var m = this.menu,
			width = this.button.outerWidth()-
				parseInt(m.css('padding-left'),10)-
				parseInt(m.css('padding-right'),10)-
				parseInt(m.css('border-right-width'),10)-
				parseInt(m.css('border-left-width'),10);

		m.width( width || this.button.outerWidth() );
	},

	// move up or down within the menu
	_traverse: function( which, start ){
		var $start = $(start),
			moveToLast = which === 38 || which === 37,

			// select the first li that isn't an optgroup label / disabled
			$next = $start.parent()[moveToLast ? 'prevAll' : 'nextAll']('li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)')[ moveToLast ? 'last' : 'first']();

		// if at the first/last element
		if( !$next.length ){
			var $container = this.menu.find('ul').last();

			// move to the first/last
			this.menu.find('label')[ moveToLast ? 'last' : 'first' ]().trigger('mouseover');

			// set scroll position
			$container.scrollTop( moveToLast ? $container.height() : 0 );

		} else {
			$next.find('label').trigger('mouseover');
		}
	},

	// This is an internal function to toggle the checked property and
	// other related attributes of a checkbox.
	//
	// The context of this function should be a checkbox; do not proxy it.
	_toggleState: function( prop, flag ){
		return function(){
			if( !this.disabled ) {
				this[ prop ] = flag;
			}

			if( flag ){
				this.setAttribute('aria-selected', true);
			} else {
				this.removeAttribute('aria-selected');
			}
		};
	},

	_toggleChecked: function( flag, group ){
		var $inputs = (group && group.length) ?  group : this.inputs,
			self = this;

		// toggle state on inputs
		$inputs.each(this._toggleState('checked', flag));

		// give the first input focus
		$inputs.eq(0).focus();

		// update button text
		this.update();

		// gather an array of the values that actually changed
		var values = $inputs.map(function(){
			return this.value;
		}).get();

		// toggle state on original option tags
		this.element
			.find('option')
			.each(function(){
				if( !this.disabled && $.inArray(this.value, values) > -1 ){
					self._toggleState('selected', flag).call( this );
				}
			});

		// trigger the change event on the select
		if( $inputs.length ) {
			this.element.trigger("change");
		}
	},

	_toggleDisabled: function( flag ){
		this.button
			.attr({ 'disabled':flag, 'aria-disabled':flag })[ flag ? 'addClass' : 'removeClass' ]('ui-state-disabled');

		var inputs = this.menu.find('input');
		var key = "ech-multiselect-disabled";

		if(flag) {
			// remember which elements this widget disabled (not pre-disabled)
			// elements, so that they can be restored if the widget is re-enabled.
			inputs = inputs.filter(':enabled')
				.data(key, true)
		} else {
			inputs = inputs.filter(function() {
				return $.data(this, key) === true;
			}).removeData(key);
		}

		inputs
			.attr({ 'disabled':flag, 'arial-disabled':flag })
			.parent()[ flag ? 'addClass' : 'removeClass' ]('ui-state-disabled');

		this.element
			.attr({ 'disabled':flag, 'aria-disabled':flag });
	},

	// open the menu
	open: function( e ){
		var self = this,
			button = this.button,
			menu = this.menu,
			speed = this.speed,
			o = this.options,
			args = [];

		// bail if the multiselectopen event returns false, this widget is disabled, or is already open
		if( this._trigger('beforeopen') === false || button.hasClass('ui-state-disabled') || this._isOpen ){
			return;
		}

		var $container = menu.find('ul').last(),
			effect = o.show,
			pos = button.offset();

		// figure out opening effects/speeds
		if( $.isArray(o.show) ){
			effect = o.show[0];
			speed = o.show[1] || self.speed;
		}

		// if there's an effect, assume jQuery UI is in use
		// build the arguments to pass to show()
		if( effect ) {
      args = [ effect, speed ];
		}

		// set the scroll of the checkbox container
		$container.scrollTop(0).height(o.height);

		// position and show menu
		if( $.ui.position && !$.isEmptyObject(o.position) ){
			o.position.of = o.position.of || button;

			menu
				.show()
				.position( o.position )
				.hide();

		// if position utility is not available...
		} else {
			menu.css({
				top: pos.top + button.outerHeight(),
				left: pos.left
			});
		}

		// show the menu, maybe with a speed/effect combo
		$.fn.show.apply(menu, args);

		// select the first option
		// triggering both mouseover and mouseover because 1.4.2+ has a bug where triggering mouseover
		// will actually trigger mouseenter.  the mouseenter trigger is there for when it's eventually fixed
		this.labels.eq(0).trigger('mouseover').trigger('mouseenter').find('input').trigger('focus');

		button.addClass('ui-state-active');
		this._isOpen = true;
		this._trigger('open');
	},

	// close the menu
	close: function(){
		if(this._trigger('beforeclose') === false){
			return;
		}

		var o = this.options,
		    effect = o.hide,
		    speed = this.speed,
		    args = [];

		// figure out opening effects/speeds
		if( $.isArray(o.hide) ){
			effect = o.hide[0];
			speed = o.hide[1] || this.speed;
		}

    if( effect ) {
      args = [ effect, speed ];
    }

    $.fn.hide.apply(this.menu, args);
		this.button.removeClass('ui-state-active').trigger('blur').trigger('mouseleave');
		this._isOpen = false;
		this._trigger('close');
	},

	enable: function(){
		this._toggleDisabled(false);
	},

	disable: function(){
		this._toggleDisabled(true);
	},

	checkAll: function( e ){
		this._toggleChecked(true);
		this._trigger('checkAll');
	},

	uncheckAll: function(){
		this._toggleChecked(false);
		this._trigger('uncheckAll');
	},

	getChecked: function(){
		return this.menu.find('input').filter(':checked');
	},

	destroy: function(){
		// remove classes + data
		$.Widget.prototype.destroy.call( this );

		this.button.remove();
		this.menu.remove();
		this.element.show();

		return this;
	},

	isOpen: function(){
		return this._isOpen;
	},

	widget: function(){
		return this.menu;
	},

	getButton: function(){
	  return this.button;
  },

	// react to option changes after initialization
	_setOption: function( key, value ){
		var menu = this.menu;

		switch(key){
			case 'header':
				menu.find('div.ui-multiselect-header')[ value ? 'show' : 'hide' ]();
				break;
			case 'checkAllText':
				menu.find('a.ui-multiselect-all span').eq(-1).text(value);
				break;
			case 'uncheckAllText':
				menu.find('a.ui-multiselect-none span').eq(-1).text(value);
				break;
			case 'height':
				menu.find('ul').last().height( parseInt(value,10) );
				break;
			case 'minWidth':
				this.options[ key ] = parseInt(value,10);
				this._setButtonWidth();
				this._setMenuWidth();
				break;
			case 'selectedText':
			case 'selectedList':
			case 'noneSelectedText':
				this.options[key] = value; // these all needs to update immediately for the update() call
				this.update();
				break;
			case 'classes':
				menu.add(this.button).removeClass(this.options.classes).addClass(value);
				break;
			case 'multiple':
				menu.toggleClass('ui-multiselect-single', !value);
				this.options.multiple = value;
				this.element[0].multiple = value;
				this.refresh();
		}

		$.Widget.prototype._setOption.apply( this, arguments );
	}
});

})(jQuery);

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&"object"==typeof module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){return function(a){"use strict";var b=a.tablesorter={version:"2.26.1",parsers:[],widgets:[],defaults:{theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,resort:!0,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",duplicateSpan:!0,textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,initWidgets:!0,widgetClass:"widget-{name}",widgets:[],widgetOptions:{zebra:["even","odd"]},initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssInfoBlock:"tablesorter-infoOnly",cssNoSort:"tablesorter-noSort",cssIgnoreRow:"tablesorter-ignoreRow",cssIcon:"tablesorter-icon",cssIconNone:"",cssIconAsc:"",cssIconDesc:"",pointerClick:"click",pointerDown:"mousedown",pointerUp:"mouseup",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]},css:{table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",colgroup:"tablesorter-colgroup",header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"},language:{sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",sortDisabled:"sorting is disabled",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"},regex:{templateContent:/\{content\}/g,templateIcon:/\{icon\}/g,templateName:/\{name\}/i,spaces:/\s+/g,nonWord:/\W/g,formElements:/(input|select|button|textarea)/i,chunk:/(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i,comma:/,/g,digitNonUS:/[\s|\.]/g,digitNegativeTest:/^\s*\([.\d]+\)/,digitNegativeReplace:/^\s*\(([.\d]+)\)/,digitTest:/^[\-+(]?\d+[)]?$/,digitReplace:/[,.'"\s]/g},string:{max:1,min:-1,emptymin:1,emptymax:-1,zero:0,none:0,"null":0,top:!0,bottom:!1},keyCodes:{enter:13},dates:{},instanceMethods:{},setup:function(c,d){if(!c||!c.tHead||0===c.tBodies.length||c.hasInitialized===!0)return void(d.debug&&(c.hasInitialized?console.warn("Stopping initialization. Tablesorter has already been initialized"):console.error("Stopping initialization! No table, thead or tbody",c)));var e="",f=a(c),g=a.metadata;c.hasInitialized=!1,c.isProcessing=!0,c.config=d,a.data(c,"tablesorter",d),d.debug&&(console[console.group?"group":"log"]("Initializing tablesorter"),a.data(c,"startoveralltimer",new Date)),d.supportsDataObject=function(a){return a[0]=parseInt(a[0],10),a[0]>1||1===a[0]&&parseInt(a[1],10)>=4}(a.fn.jquery.split(".")),d.emptyTo=d.emptyTo.toLowerCase(),d.stringTo=d.stringTo.toLowerCase(),d.last={sortList:[],clickedIndex:-1},/tablesorter\-/.test(f.attr("class"))||(e=""!==d.theme?" tablesorter-"+d.theme:""),d.table=c,d.$table=f.addClass(b.css.table+" "+d.tableClass+e).attr("role","grid"),d.$headers=f.find(d.selectorHeaders),d.namespace?d.namespace="."+d.namespace.replace(b.regex.nonWord,""):d.namespace=".tablesorter"+Math.random().toString(16).slice(2),d.$table.children().children("tr").attr("role","row"),d.$tbodies=f.children("tbody:not(."+d.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"}),d.$table.children("caption").length&&(e=d.$table.children("caption")[0],e.id||(e.id=d.namespace.slice(1)+"caption"),d.$table.attr("aria-labelledby",e.id)),d.widgetInit={},d.textExtraction=d.$table.attr("data-text-extraction")||d.textExtraction||"basic",b.buildHeaders(d),b.fixColumnWidth(c),b.addWidgetFromClass(c),b.applyWidgetOptions(c),b.setupParsers(d),d.totalRows=0,d.delayInit||b.buildCache(d),b.bindEvents(c,d.$headers,!0),b.bindMethods(d),d.supportsDataObject&&"undefined"!=typeof f.data().sortlist?d.sortList=f.data().sortlist:g&&f.metadata()&&f.metadata().sortlist&&(d.sortList=f.metadata().sortlist),b.applyWidget(c,!0),d.sortList.length>0?b.sortOn(d,d.sortList,{},!d.initWidgets):(b.setHeadersCss(d),d.initWidgets&&b.applyWidget(c,!1)),d.showProcessing&&f.unbind("sortBegin"+d.namespace+" sortEnd"+d.namespace).bind("sortBegin"+d.namespace+" sortEnd"+d.namespace,function(a){clearTimeout(d.timerProcessing),b.isProcessing(c),"sortBegin"===a.type&&(d.timerProcessing=setTimeout(function(){b.isProcessing(c,!0)},500))}),c.hasInitialized=!0,c.isProcessing=!1,d.debug&&(console.log("Overall initialization time: "+b.benchmark(a.data(c,"startoveralltimer"))),d.debug&&console.groupEnd&&console.groupEnd()),f.triggerHandler("tablesorter-initialized",c),"function"==typeof d.initialized&&d.initialized(c)},bindMethods:function(c){var d=c.$table,e=c.namespace,f="sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(e+" ");d.unbind(f.replace(b.regex.spaces," ")).bind("sortReset"+e,function(a,c){a.stopPropagation(),b.sortReset(this.config,c)}).bind("updateAll"+e,function(a,c,d){a.stopPropagation(),b.updateAll(this.config,c,d)}).bind("update"+e+" updateRows"+e,function(a,c,d){a.stopPropagation(),b.update(this.config,c,d)}).bind("updateHeaders"+e,function(a,c){a.stopPropagation(),b.updateHeaders(this.config,c)}).bind("updateCell"+e,function(a,c,d,e){a.stopPropagation(),b.updateCell(this.config,c,d,e)}).bind("addRows"+e,function(a,c,d,e){a.stopPropagation(),b.addRows(this.config,c,d,e)}).bind("updateComplete"+e,function(){this.isUpdating=!1}).bind("sorton"+e,function(a,c,d,e){a.stopPropagation(),b.sortOn(this.config,c,d,e)}).bind("appendCache"+e,function(c,d,e){c.stopPropagation(),b.appendCache(this.config,e),a.isFunction(d)&&d(this)}).bind("updateCache"+e,function(a,c,d){a.stopPropagation(),b.updateCache(this.config,c,d)}).bind("applyWidgetId"+e,function(a,c){a.stopPropagation(),b.applyWidgetId(this,c)}).bind("applyWidgets"+e,function(a,c){a.stopPropagation(),b.applyWidget(this,c)}).bind("refreshWidgets"+e,function(a,c,d){a.stopPropagation(),b.refreshWidgets(this,c,d)}).bind("removeWidget"+e,function(a,c,d){a.stopPropagation(),b.removeWidget(this,c,d)}).bind("destroy"+e,function(a,c,d){a.stopPropagation(),b.destroy(this,c,d)}).bind("resetToLoadState"+e,function(d){d.stopPropagation(),b.removeWidget(this,!0,!1),c=a.extend(!0,b.defaults,c.originalSettings),this.hasInitialized=!1,b.setup(this,c)})},bindEvents:function(c,d,e){c=a(c)[0];var f,g=c.config,h=g.namespace,i=null;e!==!0&&(d.addClass(h.slice(1)+"_extra_headers"),f=a.fn.closest?d.closest("table")[0]:d.parents("table")[0],f&&"TABLE"===f.nodeName&&f!==c&&a(f).addClass(h.slice(1)+"_extra_table")),f=(g.pointerDown+" "+g.pointerUp+" "+g.pointerClick+" sort keyup ").replace(b.regex.spaces," ").split(" ").join(h+" "),d.find(g.selectorSort).add(d.filter(g.selectorSort)).unbind(f).bind(f,function(c,e){var f,h,j,k=a(c.target),l=" "+c.type+" ";if(!(1!==(c.which||c.button)&&!l.match(" "+g.pointerClick+" | sort | keyup ")||" keyup "===l&&c.which!==b.keyCodes.enter||l.match(" "+g.pointerClick+" ")&&"undefined"!=typeof c.which||l.match(" "+g.pointerUp+" ")&&i!==c.target&&e!==!0)){if(l.match(" "+g.pointerDown+" "))return i=c.target,j=k.jquery.split("."),void("1"===j[0]&&j[1]<4&&c.preventDefault());if(i=null,b.regex.formElements.test(c.target.nodeName)||k.hasClass(g.cssNoSort)||k.parents("."+g.cssNoSort).length>0||k.parents("button").length>0)return!g.cancelSelection;g.delayInit&&b.isEmptyObject(g.cache)&&b.buildCache(g),f=a.fn.closest?a(this).closest("th, td"):/TH|TD/.test(this.nodeName)?a(this):a(this).parents("th, td"),j=d.index(f),g.last.clickedIndex=0>j?f.attr("data-column"):j,h=g.$headers[g.last.clickedIndex],h&&!h.sortDisabled&&b.initSort(g,h,c)}}),g.cancelSelection&&d.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})},buildHeaders:function(c){var d,e,f,g;for(c.headerList=[],c.headerContent=[],c.sortVars=[],c.debug&&(f=new Date),c.columns=b.computeColumnIndex(c.$table.children("thead, tfoot").children("tr")),e=c.cssIcon?'<i class="'+(c.cssIcon===b.css.icon?b.css.icon:c.cssIcon+" "+b.css.icon)+'"></i>':"",c.$headers=a(a.map(c.$table.find(c.selectorHeaders),function(d,f){var g,h,i,j,k,l=a(d);if(!l.parent().hasClass(c.cssIgnoreRow))return g=b.getColumnData(c.table,c.headers,f,!0),c.headerContent[f]=l.html(),""===c.headerTemplate||l.find("."+b.css.headerIn).length||(j=c.headerTemplate.replace(b.regex.templateContent,l.html()).replace(b.regex.templateIcon,l.find("."+b.css.icon).length?"":e),c.onRenderTemplate&&(h=c.onRenderTemplate.apply(l,[f,j]),h&&"string"==typeof h&&(j=h)),l.html('<div class="'+b.css.headerIn+'">'+j+"</div>")),c.onRenderHeader&&c.onRenderHeader.apply(l,[f,c,c.$table]),i=parseInt(l.attr("data-column"),10),d.column=i,k=b.getData(l,g,"sortInitialOrder")||c.sortInitialOrder,c.sortVars[i]={count:-1,order:b.getOrder(k)?[1,0,2]:[0,1,2],lockedOrder:!1},k=b.getData(l,g,"lockedOrder")||!1,"undefined"!=typeof k&&k!==!1&&(c.sortVars[i].lockedOrder=!0,c.sortVars[i].order=b.getOrder(k)?[1,1,1]:[0,0,0]),c.headerList[f]=d,l.addClass(b.css.header+" "+c.cssHeader).parent().addClass(b.css.headerRow+" "+c.cssHeaderRow).attr("role","row"),c.tabIndex&&l.attr("tabindex",0),d})),c.$headerIndexed=[],g=0;g<c.columns;g++)b.isEmptyObject(c.sortVars[g])&&(c.sortVars[g]={}),d=c.$headers.filter('[data-column="'+g+'"]'),c.$headerIndexed[g]=d.length?d.not(".sorter-false").length?d.not(".sorter-false").filter(":last"):d.filter(":last"):a();c.$table.find(c.selectorHeaders).attr({scope:"col",role:"columnheader"}),b.updateHeader(c),c.debug&&(console.log("Built headers:"+b.benchmark(f)),console.log(c.$headers))},addInstanceMethods:function(c){a.extend(b.instanceMethods,c)},setupParsers:function(a,c){var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r=a.table,s=0,t={};if(a.$tbodies=a.$table.children("tbody:not(."+a.cssInfoBlock+")"),p="undefined"==typeof c?a.$tbodies:c,q=p.length,0===q)return a.debug?console.warn("Warning: *Empty table!* Not building a parser cache"):"";for(a.debug&&(o=new Date,console[console.group?"group":"log"]("Detecting parsers for each column")),e={extractors:[],parsers:[]};q>s;){if(d=p[s].rows,d.length)for(h=0,g=a.columns,i=0;g>i;i++){if(j=a.$headerIndexed[h],j&&j.length&&(k=b.getColumnData(r,a.headers,h),n=b.getParserById(b.getData(j,k,"extractor")),m=b.getParserById(b.getData(j,k,"sorter")),l="false"===b.getData(j,k,"parser"),a.empties[h]=(b.getData(j,k,"empty")||a.emptyTo||(a.emptyToBottom?"bottom":"top")).toLowerCase(),a.strings[h]=(b.getData(j,k,"string")||a.stringTo||"max").toLowerCase(),l&&(m=b.getParserById("no-parser")),n||(n=!1),m||(m=b.detectParserForColumn(a,d,-1,h)),a.debug&&(t["("+h+") "+j.text()]={parser:m.id,extractor:n?n.id:"none",string:a.strings[h],empty:a.empties[h]}),e.parsers[h]=m,e.extractors[h]=n,f=j[0].colSpan-1,f>0))for(h+=f,g+=f;f+1>0;)e.parsers[h-f]=m,e.extractors[h-f]=n,f--;h++}s+=e.parsers.length?q:1}a.debug&&(b.isEmptyObject(t)?console.warn("  No parsers detected!"):console[console.table?"table":"log"](t),console.log("Completed detecting parsers"+b.benchmark(o)),console.groupEnd&&console.groupEnd()),a.parsers=e.parsers,a.extractors=e.extractors},addParser:function(a){var c,d=b.parsers.length,e=!0;for(c=0;d>c;c++)b.parsers[c].id.toLowerCase()===a.id.toLowerCase()&&(e=!1);e&&(b.parsers[b.parsers.length]=a)},getParserById:function(a){if("false"==a)return!1;var c,d=b.parsers.length;for(c=0;d>c;c++)if(b.parsers[c].id.toLowerCase()===a.toString().toLowerCase())return b.parsers[c];return!1},detectParserForColumn:function(c,d,e,f){for(var g,h,i,j=b.parsers.length,k=!1,l="",m=!0;""===l&&m;)e++,i=d[e],i&&50>e?i.className.indexOf(b.cssIgnoreRow)<0&&(k=d[e].cells[f],l=b.getElementText(c,k,f),h=a(k),c.debug&&console.log("Checking if value was empty on row "+e+", column: "+f+': "'+l+'"')):m=!1;for(;--j>=0;)if(g=b.parsers[j],g&&"text"!==g.id&&g.is&&g.is(l,c.table,k,h))return g;return b.getParserById("text")},getElementText:function(c,d,e){if(!d)return"";var f,g=c.textExtraction||"",h=d.jquery?d:a(d);return"string"==typeof g?"basic"===g&&"undefined"!=typeof(f=h.attr(c.textAttribute))?a.trim(f):a.trim(d.textContent||h.text()):"function"==typeof g?a.trim(g(h[0],c.table,e)):"function"==typeof(f=b.getColumnData(c.table,g,e))?a.trim(f(h[0],c.table,e)):a.trim(h[0].textContent||h.text())},getParsedText:function(a,c,d,e){"undefined"==typeof e&&(e=b.getElementText(a,c,d));var f=""+e,g=a.parsers[d],h=a.extractors[d];return g&&(h&&"function"==typeof h.format&&(e=h.format(e,a.table,c,d)),f="no-parser"===g.id?"":g.format(""+e,a.table,c,d),a.ignoreCase&&"string"==typeof f&&(f=f.toLowerCase())),f},buildCache:function(c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B=c.table,C=c.parsers;if(c.$tbodies=c.$table.children("tbody:not(."+c.cssInfoBlock+")"),l="undefined"==typeof e?c.$tbodies:e,c.cache={},c.totalRows=0,!C)return c.debug?console.warn("Warning: *Empty table!* Not building a cache"):"";for(c.debug&&(q=new Date),c.showProcessing&&b.isProcessing(B,!0),k=0;k<l.length;k++){for(u=[],f=c.cache[k]={normalized:[]},r=l[k]&&l[k].rows.length||0,i=0;r>i;++i)if(s={child:[],raw:[]},m=a(l[k].rows[i]),n=[],m.hasClass(c.cssChildRow)&&0!==i)for(z=f.normalized.length-1,t=f.normalized[z][c.columns],t.$row=t.$row.add(m),m.prev().hasClass(c.cssChildRow)||m.prev().addClass(b.css.cssHasChild),o=m.children("th, td"),z=t.child.length,t.child[z]=[],w=0,y=c.columns,j=0;y>j;j++)p=o[j],p&&(t.child[z][j]=b.getParsedText(c,p,j),v=o[j].colSpan-1,v>0&&(w+=v,y+=v)),w++;else{for(s.$row=m,s.order=i,w=0,y=c.columns,j=0;y>j;++j){if(p=m[0].cells[j],p&&w<c.columns&&(x="undefined"!=typeof C[w],!x&&c.debug&&console.warn("No parser found for row: "+i+", column: "+j+'; cell containing: "'+a(p).text()+'"; does it have a header?'),g=b.getElementText(c,p,w),s.raw[w]=g,h=b.getParsedText(c,p,w,g),n[w]=h,x&&"numeric"===(C[w].type||"").toLowerCase()&&(u[w]=Math.max(Math.abs(h)||0,u[w]||0)),v=p.colSpan-1,v>0)){for(A=0;v>=A;)h=c.duplicateSpan||0===A?g:"string"!=typeof c.textExtraction?b.getElementText(c,p,w+A)||"":"",s.raw[w+A]=h,n[w+A]=h,A++;w+=v,y+=v}w++}n[c.columns]=s,f.normalized[f.normalized.length]=n}f.colMax=u,c.totalRows+=f.normalized.length}if(c.showProcessing&&b.isProcessing(B),c.debug){for(z=Math.min(5,c.cache[0].normalized.length),console[console.group?"group":"log"]("Building cache for "+c.totalRows+" rows (showing "+z+" rows in log)"+b.benchmark(q)),g={},j=0;j<c.columns;j++)for(w=0;z>w;w++)g["row: "+w]||(g["row: "+w]={}),g["row: "+w][c.$headerIndexed[j].text()]=c.cache[0].normalized[w][j];console[console.table?"table":"log"](g),console.groupEnd&&console.groupEnd()}a.isFunction(d)&&d(B)},getColumnText:function(c,d,e,f){c=a(c)[0];var g,h,i,j,k,l,m,n,o,p,q="function"==typeof e,r="all"===d,s={raw:[],parsed:[],$cell:[]},t=c.config;if(!b.isEmptyObject(t)){for(k=t.$tbodies.length,g=0;k>g;g++)for(i=t.cache[g].normalized,l=i.length,h=0;l>h;h++)j=i[h],f&&!j[t.columns].$row.is(f)||(p=!0,n=r?j.slice(0,t.columns):j[d],j=j[t.columns],m=r?j.raw:j.raw[d],o=r?j.$row.children():j.$row.children().eq(d),q&&(p=e({tbodyIndex:g,rowIndex:h,parsed:n,raw:m,$row:j.$row,$cell:o})),p!==!1&&(s.parsed[s.parsed.length]=n,s.raw[s.raw.length]=m,s.$cell[s.$cell.length]=o));return s}t.debug&&console.warn("No cache found - aborting getColumnText function!")},setHeadersCss:function(c){var d,e,f,g=c.sortList,h=g.length,i=b.css.sortNone+" "+c.cssNone,j=[b.css.sortAsc+" "+c.cssAsc,b.css.sortDesc+" "+c.cssDesc],k=[c.cssIconAsc,c.cssIconDesc,c.cssIconNone],l=["ascending","descending"],m=c.$table.find("tfoot tr").children("td, th").add(a(c.namespace+"_extra_headers")).removeClass(j.join(" "));for(c.$headers.removeClass(j.join(" ")).addClass(i).attr("aria-sort","none").find("."+b.css.icon).removeClass(k.join(" ")).addClass(k[2]),e=0;h>e;e++)if(2!==g[e][1]&&(d=c.$headers.filter(function(a){for(var d=!0,e=c.$headers.eq(a),f=parseInt(e.attr("data-column"),10),g=f+c.$headers[a].colSpan;g>f;f++)d=d?d||b.isValueInArray(f,c.sortList)>-1:!1;return d}),d=d.not(".sorter-false").filter('[data-column="'+g[e][0]+'"]'+(1===h?":last":"")),d.length)){for(f=0;f<d.length;f++)d[f].sortDisabled||d.eq(f).removeClass(i).addClass(j[g[e][1]]).attr("aria-sort",l[g[e][1]]).find("."+b.css.icon).removeClass(k[2]).addClass(k[g[e][1]]);m.length&&m.filter('[data-column="'+g[e][0]+'"]').removeClass(i).addClass(j[g[e][1]])}for(h=c.$headers.length,e=0;h>e;e++)b.setColumnAriaLabel(c,c.$headers.eq(e))},setColumnAriaLabel:function(c,d,e){if(d.length){var f=parseInt(d.attr("data-column"),10),g=d.hasClass(b.css.sortAsc)?"sortAsc":d.hasClass(b.css.sortDesc)?"sortDesc":"sortNone",h=a.trim(d.text())+": "+b.language[g];d.hasClass("sorter-false")||e===!1?h+=b.language.sortDisabled:(e=c.sortVars[f].order[(c.sortVars[f].count+1)%(c.sortReset?3:2)],h+=b.language[0===e?"nextAsc":1===e?"nextDesc":"nextNone"]),d.attr("aria-label",h)}},updateHeader:function(a){var c,d,e,f,g=a.table,h=a.$headers.length;for(c=0;h>c;c++)e=a.$headers.eq(c),f=b.getColumnData(g,a.headers,c,!0),d="false"===b.getData(e,f,"sorter")||"false"===b.getData(e,f,"parser"),b.setColumnSort(a,e,d)},setColumnSort:function(a,b,c){var d=a.table.id;b[0].sortDisabled=c,b[c?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+c),a.tabIndex&&(c?b.removeAttr("tabindex"):b.attr("tabindex","0")),d&&(c?b.removeAttr("aria-controls"):b.attr("aria-controls",d))},updateHeaderSortCount:function(c,d){var e,f,g,h,i,j,k,l,m=d||c.sortList,n=m.length;for(c.sortList=[],h=0;n>h;h++)if(k=m[h],e=parseInt(k[0],10),e<c.columns){switch(c.sortVars[e].order||(l=c.sortVars[e].order=b.getOrder(c.sortInitialOrder)?[1,0,2]:[0,1,2],c.sortVars[e].count=0),l=c.sortVars[e].order,f=(""+k[1]).match(/^(1|d|s|o|n)/),f=f?f[0]:""){case"1":case"d":f=1;break;case"s":f=i||0;break;case"o":j=l[(i||0)%(c.sortReset?3:2)],f=0===j?1:1===j?0:2;break;case"n":f=l[++c.sortVars[e].count%(c.sortReset?3:2)];break;default:f=0}i=0===h?f:i,g=[e,parseInt(f,10)||0],c.sortList[c.sortList.length]=g,f=a.inArray(g[1],l),c.sortVars[e].count=f>=0?f:g[1]%(c.sortReset?3:2)}},updateAll:function(a,c,d){var e=a.table;e.isUpdating=!0,b.refreshWidgets(e,!0,!0),b.buildHeaders(a),b.bindEvents(e,a.$headers,!0),b.bindMethods(a),b.commonUpdate(a,c,d)},update:function(a,c,d){var e=a.table;e.isUpdating=!0,b.updateHeader(a),b.commonUpdate(a,c,d)},updateHeaders:function(a,c){a.table.isUpdating=!0,b.buildHeaders(a),b.bindEvents(a.table,a.$headers,!0),b.resortComplete(a,c)},updateCell:function(c,d,e,f){if(b.isEmptyObject(c.cache))return b.updateHeader(c),void b.commonUpdate(c,e,f);c.table.isUpdating=!0,c.$table.find(c.selectorRemove).remove();var g,h,i,j,k,l,m=c.$tbodies,n=a(d),o=m.index(a.fn.closest?n.closest("tbody"):n.parents("tbody").filter(":first")),p=c.cache[o],q=a.fn.closest?n.closest("tr"):n.parents("tr").filter(":first");if(d=n[0],m.length&&o>=0){if(i=m.eq(o).find("tr").index(q),k=p.normalized[i],l=q[0].cells.length,l!==c.columns)for(j=0,g=!1,h=0;l>h;h++)g||q[0].cells[h]===d?g=!0:j+=q[0].cells[h].colSpan;else j=n.index();g=b.getElementText(c,d,j),k[c.columns].raw[j]=g,g=b.getParsedText(c,d,j,g),k[j]=g,k[c.columns].$row=q,"numeric"===(c.parsers[j].type||"").toLowerCase()&&(p.colMax[j]=Math.max(Math.abs(g)||0,p.colMax[j]||0)),g="undefined"!==e?e:c.resort,g!==!1?b.checkResort(c,g,f):b.resortComplete(c,f)}else c.debug&&console.error("updateCell aborted, tbody missing or not within the indicated table"),c.table.isUpdating=!1},addRows:function(c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q,r,s,t="string"==typeof d&&1===c.$tbodies.length&&/<tr/.test(d||""),u=c.table;if(t)d=a(d),c.$tbodies.append(d);else if(!(d&&d instanceof jQuery&&(a.fn.closest?d.closest("table")[0]:d.parents("table")[0])===c.table))return c.debug&&console.error("addRows method requires (1) a jQuery selector reference to rows that have already been added to the table, or (2) row HTML string to be added to a table with only one tbody"),!1;if(u.isUpdating=!0,b.isEmptyObject(c.cache))b.updateHeader(c),b.commonUpdate(c,e,f);else{for(k=d.filter("tr").attr("role","row").length,i=c.$tbodies.index(d.parents("tbody").filter(":first")),c.parsers&&c.parsers.length||b.setupParsers(c),j=0;k>j;j++){for(o=0,m=d[j].cells.length,n=c.cache[i].normalized.length,q=[],p={child:[],raw:[],$row:d.eq(j),order:n},l=0;m>l;l++)r=d[j].cells[l],g=b.getElementText(c,r,o),p.raw[o]=g,h=b.getParsedText(c,r,o,g),q[o]=h,"numeric"===(c.parsers[o].type||"").toLowerCase()&&(c.cache[i].colMax[o]=Math.max(Math.abs(h)||0,c.cache[i].colMax[o]||0)),s=r.colSpan-1,s>0&&(o+=s),o++;q[c.columns]=p,c.cache[i].normalized[n]=q}b.checkResort(c,e,f)}},updateCache:function(a,c,d){a.parsers&&a.parsers.length||b.setupParsers(a,d),b.buildCache(a,c,d)},appendCache:function(a,c){var d,e,f,g,h,i,j,k=a.table,l=a.widgetOptions,m=a.$tbodies,n=[],o=a.cache;if(b.isEmptyObject(o))return a.appender?a.appender(k,n):k.isUpdating?a.$table.triggerHandler("updateComplete",k):"";for(a.debug&&(j=new Date),i=0;i<m.length;i++)if(f=m.eq(i),f.length){for(g=b.processTbody(k,f,!0),d=o[i].normalized,e=d.length,h=0;e>h;h++)n[n.length]=d[h][a.columns].$row,a.appender&&(!a.pager||a.pager.removeRows&&l.pager_removeRows||a.pager.ajax)||g.append(d[h][a.columns].$row);b.processTbody(k,g,!1)}a.appender&&a.appender(k,n),a.debug&&console.log("Rebuilt table"+b.benchmark(j)),c||a.appender||b.applyWidget(k),k.isUpdating&&a.$table.triggerHandler("updateComplete",k)},commonUpdate:function(a,c,d){a.$table.find(a.selectorRemove).remove(),b.setupParsers(a),b.buildCache(a),b.checkResort(a,c,d)},initSort:function(c,d,e){if(c.table.isUpdating)return setTimeout(function(){b.initSort(c,d,e)},50);var f,g,h,i,j,k,l,m=!e[c.sortMultiSortKey],n=c.table,o=c.$headers.length,p=parseInt(a(d).attr("data-column"),10),q=c.sortVars[p].order;if(c.$table.triggerHandler("sortStart",n),c.sortVars[p].count=e[c.sortResetKey]?2:(c.sortVars[p].count+1)%(c.sortReset?3:2),c.sortRestart)for(h=0;o>h;h++)l=c.$headers.eq(h),k=parseInt(l.attr("data-column"),10),p!==k&&(m||l.hasClass(b.css.sortNone))&&(c.sortVars[k].count=-1);if(m){if(c.sortList=[],c.last.sortList=[],null!==c.sortForce)for(f=c.sortForce,g=0;g<f.length;g++)f[g][0]!==p&&(c.sortList[c.sortList.length]=f[g]);if(i=q[c.sortVars[p].count],2>i&&(c.sortList[c.sortList.length]=[p,i],d.colSpan>1))for(g=1;g<d.colSpan;g++)c.sortList[c.sortList.length]=[p+g,i],c.sortVars[p+g].count=a.inArray(i,q)}else if(c.sortList=a.extend([],c.last.sortList),b.isValueInArray(p,c.sortList)>=0)for(g=0;g<c.sortList.length;g++)k=c.sortList[g],k[0]===p&&(k[1]=q[c.sortVars[p].count],2===k[1]&&(c.sortList.splice(g,1),c.sortVars[p].count=-1));else if(i=q[c.sortVars[p].count],2>i&&(c.sortList[c.sortList.length]=[p,i],d.colSpan>1))for(g=1;g<d.colSpan;g++)c.sortList[c.sortList.length]=[p+g,i],c.sortVars[p+g].count=a.inArray(i,q);if(c.last.sortList=a.extend([],c.sortList),c.sortList.length&&c.sortAppend&&(f=a.isArray(c.sortAppend)?c.sortAppend:c.sortAppend[c.sortList[0][0]],!b.isEmptyObject(f)))for(g=0;g<f.length;g++)if(f[g][0]!==p&&b.isValueInArray(f[g][0],c.sortList)<0){if(i=f[g][1],j=(""+i).match(/^(a|d|s|o|n)/))switch(k=c.sortList[0][1],j[0]){case"d":i=1;break;case"s":i=k;break;case"o":i=0===k?1:0;break;case"n":i=(k+1)%(c.sortReset?3:2);break;default:i=0}c.sortList[c.sortList.length]=[f[g][0],i]}c.$table.triggerHandler("sortBegin",n),setTimeout(function(){b.setHeadersCss(c),b.multisort(c),b.appendCache(c),c.$table.triggerHandler("sortBeforeEnd",n),c.$table.triggerHandler("sortEnd",n)},1)},multisort:function(a){var c,d,e,f,g=a.table,h=0,i=a.textSorter||"",j=a.sortList,k=j.length,l=a.$tbodies.length;if(!a.serverSideSorting&&!b.isEmptyObject(a.cache)){for(a.debug&&(d=new Date),c=0;l>c;c++)e=a.cache[c].colMax,f=a.cache[c].normalized,f.sort(function(c,d){var f,l,m,n,o,p,q;for(f=0;k>f;f++){if(m=j[f][0],n=j[f][1],h=0===n,a.sortStable&&c[m]===d[m]&&1===k)return c[a.columns].order-d[a.columns].order;if(l=/n/i.test(b.getSortType(a.parsers,m)),l&&a.strings[m]?(l="boolean"==typeof b.string[a.strings[m]]?(h?1:-1)*(b.string[a.strings[m]]?-1:1):a.strings[m]?b.string[a.strings[m]]||0:0,o=a.numberSorter?a.numberSorter(c[m],d[m],h,e[m],g):b["sortNumeric"+(h?"Asc":"Desc")](c[m],d[m],l,e[m],m,a)):(p=h?c:d,q=h?d:c,o="function"==typeof i?i(p[m],q[m],h,m,g):"object"==typeof i&&i.hasOwnProperty(m)?i[m](p[m],q[m],h,m,g):b["sortNatural"+(h?"Asc":"Desc")](c[m],d[m],m,a)),o)return o}return c[a.columns].order-d[a.columns].order});a.debug&&console.log("Applying sort "+j.toString()+b.benchmark(d))}},resortComplete:function(b,c){b.table.isUpdating&&b.$table.triggerHandler("updateComplete",b.table),a.isFunction(c)&&c(b.table)},checkResort:function(c,d,e){var f=a.isArray(d)?d:c.sortList,g="undefined"==typeof d?c.resort:d;g===!1||c.serverSideSorting||c.table.isProcessing?(b.resortComplete(c,e),b.applyWidget(c.table,!1)):f.length?b.sortOn(c,f,function(){b.resortComplete(c,e)},!0):b.sortReset(c,function(){b.resortComplete(c,e),b.applyWidget(c.table,!1)})},sortOn:function(c,d,e,f){var g=c.table;c.$table.triggerHandler("sortStart",g),b.updateHeaderSortCount(c,d),b.setHeadersCss(c),c.delayInit&&b.isEmptyObject(c.cache)&&b.buildCache(c),c.$table.triggerHandler("sortBegin",g),b.multisort(c),b.appendCache(c,f),c.$table.triggerHandler("sortBeforeEnd",g),c.$table.triggerHandler("sortEnd",g),b.applyWidget(g),a.isFunction(e)&&e(g)},sortReset:function(c,d){c.sortList=[],b.setHeadersCss(c),b.multisort(c),b.appendCache(c),a.isFunction(d)&&d(c.table)},getSortType:function(a,b){return a&&a[b]?a[b].type||"":""},getOrder:function(a){return/^d/i.test(a)||1===a},sortNatural:function(a,c){if(a===c)return 0;var d,e,f,g,h,i,j=b.regex;if(j.hex.test(c)){if(d=parseInt(a.match(j.hex),16),e=parseInt(c.match(j.hex),16),e>d)return-1;if(d>e)return 1}for(d=a.replace(j.chunk,"\\0$1\\0").replace(j.chunks,"").split("\\0"),e=c.replace(j.chunk,"\\0$1\\0").replace(j.chunks,"").split("\\0"),i=Math.max(d.length,e.length),h=0;i>h;h++){if(f=isNaN(d[h])?d[h]||0:parseFloat(d[h])||0,g=isNaN(e[h])?e[h]||0:parseFloat(e[h])||0,isNaN(f)!==isNaN(g))return isNaN(f)?1:-1;if(typeof f!=typeof g&&(f+="",g+=""),g>f)return-1;if(f>g)return 1}return 0},sortNaturalAsc:function(a,c,d,e){if(a===c)return 0;var f=b.string[e.empties[d]||e.emptyTo];return""===a&&0!==f?"boolean"==typeof f?f?-1:1:-f||-1:""===c&&0!==f?"boolean"==typeof f?f?1:-1:f||1:b.sortNatural(a,c)},sortNaturalDesc:function(a,c,d,e){if(a===c)return 0;var f=b.string[e.empties[d]||e.emptyTo];return""===a&&0!==f?"boolean"==typeof f?f?-1:1:f||1:""===c&&0!==f?"boolean"==typeof f?f?1:-1:-f||-1:b.sortNatural(c,a)},sortText:function(a,b){return a>b?1:b>a?-1:0},getTextValue:function(a,b,c){if(c){var d,e=a?a.length:0,f=c+b;for(d=0;e>d;d++)f+=a.charCodeAt(d);return b*f}return 0},sortNumericAsc:function(a,c,d,e,f,g){if(a===c)return 0;var h=b.string[g.empties[f]||g.emptyTo];return""===a&&0!==h?"boolean"==typeof h?h?-1:1:-h||-1:""===c&&0!==h?"boolean"==typeof h?h?1:-1:h||1:(isNaN(a)&&(a=b.getTextValue(a,d,e)),isNaN(c)&&(c=b.getTextValue(c,d,e)),a-c)},sortNumericDesc:function(a,c,d,e,f,g){if(a===c)return 0;var h=b.string[g.empties[f]||g.emptyTo];return""===a&&0!==h?"boolean"==typeof h?h?-1:1:h||1:""===c&&0!==h?"boolean"==typeof h?h?1:-1:-h||-1:(isNaN(a)&&(a=b.getTextValue(a,d,e)),isNaN(c)&&(c=b.getTextValue(c,d,e)),c-a)},sortNumeric:function(a,b){return a-b},addWidget:function(a){a.id&&!b.isEmptyObject(b.getWidgetById(a.id))&&console.warn('"'+a.id+'" widget was loaded more than once!'),b.widgets[b.widgets.length]=a},hasWidget:function(b,c){return b=a(b),b.length&&b[0].config&&b[0].config.widgetInit[c]||!1},getWidgetById:function(a){var c,d,e=b.widgets.length;for(c=0;e>c;c++)if(d=b.widgets[c],d&&d.id&&d.id.toLowerCase()===a.toLowerCase())return d},applyWidgetOptions:function(c){var d,e,f=c.config,g=f.widgets.length;if(g)for(d=0;g>d;d++)e=b.getWidgetById(f.widgets[d]),e&&e.options&&(f.widgetOptions=a.extend(!0,{},e.options,f.widgetOptions))},addWidgetFromClass:function(a){var c,d,e=a.config,f="^"+e.widgetClass.replace(b.regex.templateName,"(\\S+)+")+"$",g=new RegExp(f,"g"),h=(a.className||"").split(b.regex.spaces);if(h.length)for(c=h.length,d=0;c>d;d++)h[d].match(g)&&(e.widgets[e.widgets.length]=h[d].replace(g,"$1"))},applyWidgetId:function(c,d,e){c=a(c)[0];var f,g,h,i=c.config,j=i.widgetOptions,k=b.getWidgetById(d);k&&(h=k.id,f=!1,a.inArray(h,i.widgets)<0&&(i.widgets[i.widgets.length]=h),i.debug&&(g=new Date),!e&&i.widgetInit[h]||(i.widgetInit[h]=!0,c.hasInitialized&&b.applyWidgetOptions(c),"function"==typeof k.init&&(f=!0,i.debug&&console[console.group?"group":"log"]("Initializing "+h+" widget"),k.init(c,k,i,j))),e||"function"!=typeof k.format||(f=!0,i.debug&&console[console.group?"group":"log"]("Updating "+h+" widget"),k.format(c,i,j,!1)),i.debug&&f&&(console.log("Completed "+(e?"initializing ":"applying ")+h+" widget"+b.benchmark(g)),console.groupEnd&&console.groupEnd()))},applyWidget:function(c,d,e){c=a(c)[0];var f,g,h,i,j,k=c.config,l=[];if(d===!1||!c.hasInitialized||!c.isApplyingWidgets&&!c.isUpdating){if(k.debug&&(j=new Date),b.addWidgetFromClass(c),clearTimeout(k.timerReady),k.widgets.length){for(c.isApplyingWidgets=!0,k.widgets=a.grep(k.widgets,function(b,c){return a.inArray(b,k.widgets)===c}),h=k.widgets||[],g=h.length,f=0;g>f;f++)i=b.getWidgetById(h[f]),i&&i.id?(i.priority||(i.priority=10),l[f]=i):k.debug&&console.warn('"'+h[f]+'" widget code does not exist!');for(l.sort(function(a,b){return a.priority<b.priority?-1:a.priority===b.priority?0:1}),g=l.length,k.debug&&console[console.group?"group":"log"]("Start "+(d?"initializing":"applying")+" widgets"),f=0;g>f;f++)i=l[f],i&&i.id&&b.applyWidgetId(c,i.id,d);k.debug&&console.groupEnd&&console.groupEnd(),d||"function"!=typeof e||e(c)}k.timerReady=setTimeout(function(){c.isApplyingWidgets=!1,a.data(c,"lastWidgetApplication",new Date),k.$table.triggerHandler("tablesorter-ready")},10),k.debug&&(i=k.widgets.length,console.log("Completed "+(d===!0?"initializing ":"applying ")+i+" widget"+(1!==i?"s":"")+b.benchmark(j)))}},removeWidget:function(c,d,e){c=a(c)[0];var f,g,h,i,j=c.config;if(d===!0)for(d=[],i=b.widgets.length,h=0;i>h;h++)g=b.widgets[h],g&&g.id&&(d[d.length]=g.id);else d=(a.isArray(d)?d.join(","):d||"").toLowerCase().split(/[\s,]+/);for(i=d.length,f=0;i>f;f++)g=b.getWidgetById(d[f]),h=a.inArray(d[f],j.widgets),h>=0&&e!==!0&&j.widgets.splice(h,1),g&&g.remove&&(j.debug&&console.log((e?"Refreshing":"Removing")+' "'+d[f]+'" widget'),g.remove(c,j,j.widgetOptions,e),j.widgetInit[d[f]]=!1)},refreshWidgets:function(c,d,e){c=a(c)[0];var f,g,h=c.config,i=h.widgets,j=b.widgets,k=j.length,l=[],m=function(b){a(b).triggerHandler("refreshComplete")};for(f=0;k>f;f++)g=j[f],g&&g.id&&(d||a.inArray(g.id,i)<0)&&(l[l.length]=g.id);b.removeWidget(c,l.join(","),!0),e!==!0?(b.applyWidget(c,d||!1,m),d&&b.applyWidget(c,!1,m)):m(c)},benchmark:function(a){return" ( "+((new Date).getTime()-a.getTime())+"ms )"},log:function(){console.log(arguments)},isEmptyObject:function(a){for(var b in a)return!1;return!0},isValueInArray:function(a,b){var c,d=b&&b.length||0;for(c=0;d>c;c++)if(b[c][0]===a)return c;return-1},formatFloat:function(c,d){if("string"!=typeof c||""===c)return c;var e,f=d&&d.config?d.config.usNumberFormat!==!1:"undefined"!=typeof d?d:!0;return c=f?c.replace(b.regex.comma,""):c.replace(b.regex.digitNonUS,"").replace(b.regex.comma,"."),b.regex.digitNegativeTest.test(c)&&(c=c.replace(b.regex.digitNegativeReplace,"-$1")),e=parseFloat(c),isNaN(e)?a.trim(c):e},isDigit:function(a){return isNaN(a)?b.regex.digitTest.test(a.toString().replace(b.regex.digitReplace,"")):""!==a},computeColumnIndex:function(b,c){
var d,e,f,g,h,i,j,k,l,m,n=c&&c.columns||0,o=[],p=new Array(n);for(d=0;d<b.length;d++)for(i=b[d].cells,e=0;e<i.length;e++){for(h=i[e],j=h.parentNode.rowIndex,k=h.rowSpan||1,l=h.colSpan||1,"undefined"==typeof o[j]&&(o[j]=[]),f=0;f<o[j].length+1;f++)if("undefined"==typeof o[j][f]){m=f;break}for(n&&h.cellIndex===m||(h.setAttribute?h.setAttribute("data-column",m):a(h).attr("data-column",m)),f=j;j+k>f;f++)for("undefined"==typeof o[f]&&(o[f]=[]),p=o[f],g=m;m+l>g;g++)p[g]="x"}return p.length},fixColumnWidth:function(c){c=a(c)[0];var d,e,f,g,h,i=c.config,j=i.$table.children("colgroup");if(j.length&&j.hasClass(b.css.colgroup)&&j.remove(),i.widthFixed&&0===i.$table.children("colgroup").length){for(j=a('<colgroup class="'+b.css.colgroup+'">'),d=i.$table.width(),f=i.$tbodies.find("tr:first").children(":visible"),g=f.length,h=0;g>h;h++)e=parseInt(f.eq(h).width()/d*1e3,10)/10+"%",j.append(a("<col>").css("width",e));i.$table.prepend(j)}},getData:function(b,c,d){var e,f,g="",h=a(b);return h.length?(e=a.metadata?h.metadata():!1,f=" "+(h.attr("class")||""),"undefined"!=typeof h.data(d)||"undefined"!=typeof h.data(d.toLowerCase())?g+=h.data(d)||h.data(d.toLowerCase()):e&&"undefined"!=typeof e[d]?g+=e[d]:c&&"undefined"!=typeof c[d]?g+=c[d]:" "!==f&&f.match(" "+d+"-")&&(g=f.match(new RegExp("\\s"+d+"-([\\w-]+)"))[1]||""),a.trim(g)):""},getColumnData:function(b,c,d,e,f){if("undefined"!=typeof c&&null!==c){b=a(b)[0];var g,h,i=b.config,j=f||i.$headers,k=i.$headerIndexed&&i.$headerIndexed[d]||j.filter('[data-column="'+d+'"]:last');if(c[d])return e?c[d]:c[j.index(k)];for(h in c)if("string"==typeof h&&(g=k.filter(h).add(k.find(h)),g.length))return c[h]}},isProcessing:function(c,d,e){c=a(c);var f=c[0].config,g=e||c.find("."+b.css.header);d?("undefined"!=typeof e&&f.sortList.length>0&&(g=g.filter(function(){return this.sortDisabled?!1:b.isValueInArray(parseFloat(a(this).attr("data-column")),f.sortList)>=0})),c.add(g).addClass(b.css.processing+" "+f.cssProcessing)):c.add(g).removeClass(b.css.processing+" "+f.cssProcessing)},processTbody:function(b,c,d){if(b=a(b)[0],d)return b.isProcessing=!0,c.before('<colgroup class="tablesorter-savemyplace"/>'),a.fn.detach?c.detach():c.remove();var e=a(b).find("colgroup.tablesorter-savemyplace");c.insertAfter(e),e.remove(),b.isProcessing=!1},clearTableBody:function(b){a(b)[0].config.$tbodies.children().detach()},characterEquivalents:{a:"áàâãäąå",A:"ÁÀÂÃÄĄÅ",c:"çćč",C:"ÇĆČ",e:"éèêëěę",E:"ÉÈÊËĚĘ",i:"íìİîïı",I:"ÍÌİÎÏ",o:"óòôõöō",O:"ÓÒÔÕÖŌ",ss:"ß",SS:"ẞ",u:"úùûüů",U:"ÚÙÛÜŮ"},replaceAccents:function(a){var c,d="[",e=b.characterEquivalents;if(!b.characterRegex){b.characterRegexArray={};for(c in e)"string"==typeof c&&(d+=e[c],b.characterRegexArray[c]=new RegExp("["+e[c]+"]","g"));b.characterRegex=new RegExp(d+"]")}if(b.characterRegex.test(a))for(c in e)"string"==typeof c&&(a=a.replace(b.characterRegexArray[c],c));return a},restoreHeaders:function(c){var d,e,f=a(c)[0].config,g=f.$table.find(f.selectorHeaders),h=g.length;for(d=0;h>d;d++)e=g.eq(d),e.find("."+b.css.headerIn).length&&e.html(f.headerContent[d])},destroy:function(c,d,e){if(c=a(c)[0],c.hasInitialized){b.removeWidget(c,!0,!1);var f,g=a(c),h=c.config,i=h.debug,j=g.find("thead:first"),k=j.find("tr."+b.css.headerRow).removeClass(b.css.headerRow+" "+h.cssHeaderRow),l=g.find("tfoot:first > tr").children("th, td");d===!1&&a.inArray("uitheme",h.widgets)>=0&&(g.triggerHandler("applyWidgetId",["uitheme"]),g.triggerHandler("applyWidgetId",["zebra"])),j.find("tr").not(k).remove(),f="sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave "+"keypress sortBegin sortEnd resetToLoadState ".split(" ").join(h.namespace+" "),g.removeData("tablesorter").unbind(f.replace(b.regex.spaces," ")),h.$headers.add(l).removeClass([b.css.header,h.cssHeader,h.cssAsc,h.cssDesc,b.css.sortAsc,b.css.sortDesc,b.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true"),k.find(h.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(h.namespace+" ").replace(b.regex.spaces," ")),b.restoreHeaders(c),g.toggleClass(b.css.table+" "+h.tableClass+" tablesorter-"+h.theme,d===!1),c.hasInitialized=!1,delete c.config.cache,"function"==typeof e&&e(c),i&&console.log("tablesorter has been removed")}}};a.fn.tablesorter=function(c){return this.each(function(){var d=this,e=a.extend(!0,{},b.defaults,c,b.instanceMethods);e.originalSettings=c,!d.hasInitialized&&b.buildTable&&"TABLE"!==this.nodeName?b.buildTable(d,e):b.setup(d,e)})},window.console&&window.console.log||(b.logs=[],console={},console.log=console.warn=console.error=console.table=function(){var a=arguments.length>1?arguments:arguments[0];b.logs[b.logs.length]={date:Date.now(),log:a}}),b.addParser({id:"no-parser",is:function(){return!1},format:function(){return""},type:"text"}),b.addParser({id:"text",is:function(){return!0},format:function(c,d){var e=d.config;return c&&(c=a.trim(e.ignoreCase?c.toLocaleLowerCase():c),c=e.sortLocaleCompare?b.replaceAccents(c):c),c},type:"text"}),b.regex.nondigit=/[^\w,. \-()]/g,b.addParser({id:"digit",is:function(a){return b.isDigit(a)},format:function(c,d){var e=b.formatFloat((c||"").replace(b.regex.nondigit,""),d);return c&&"number"==typeof e?e:c?a.trim(c&&d.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"}),b.regex.currencyReplace=/[+\-,. ]/g,b.regex.currencyTest=/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/,b.addParser({id:"currency",is:function(a){return a=(a||"").replace(b.regex.currencyReplace,""),b.regex.currencyTest.test(a)},format:function(c,d){var e=b.formatFloat((c||"").replace(b.regex.nondigit,""),d);return c&&"number"==typeof e?e:c?a.trim(c&&d.config.ignoreCase?c.toLocaleLowerCase():c):c},type:"numeric"}),b.regex.urlProtocolTest=/^(https?|ftp|file):\/\//,b.regex.urlProtocolReplace=/(https?|ftp|file):\/\//,b.addParser({id:"url",is:function(a){return b.regex.urlProtocolTest.test(a)},format:function(c){return c?a.trim(c.replace(b.regex.urlProtocolReplace,"")):c},parsed:!0,type:"text"}),b.regex.dash=/-/g,b.regex.isoDate=/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,b.addParser({id:"isoDate",is:function(a){return b.regex.isoDate.test(a)},format:function(a,c){var d=a?new Date(a.replace(b.regex.dash,"/")):a;return d instanceof Date&&isFinite(d)?d.getTime():a},type:"numeric"}),b.regex.percent=/%/g,b.regex.percentTest=/(\d\s*?%|%\s*?\d)/,b.addParser({id:"percent",is:function(a){return b.regex.percentTest.test(a)&&a.length<15},format:function(a,c){return a?b.formatFloat(a.replace(b.regex.percent,""),c):a},type:"numeric"}),b.addParser({id:"image",is:function(a,b,c,d){return d.find("img").length>0},format:function(b,c,d){return a(d).find("img").attr(c.config.imgAttr||"alt")||b},parsed:!0,type:"text"}),b.regex.dateReplace=/(\S)([AP]M)$/i,b.regex.usLongDateTest1=/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i,b.regex.usLongDateTest2=/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i,b.addParser({id:"usLongDate",is:function(a){return b.regex.usLongDateTest1.test(a)||b.regex.usLongDateTest2.test(a)},format:function(a,c){var d=a?new Date(a.replace(b.regex.dateReplace,"$1 $2")):a;return d instanceof Date&&isFinite(d)?d.getTime():a},type:"numeric"}),b.regex.shortDateTest=/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/,b.regex.shortDateReplace=/[\-.,]/g,b.regex.shortDateXXY=/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,b.regex.shortDateYMD=/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,b.convertFormat=function(a,c){a=(a||"").replace(b.regex.spaces," ").replace(b.regex.shortDateReplace,"/"),"mmddyyyy"===c?a=a.replace(b.regex.shortDateXXY,"$3/$1/$2"):"ddmmyyyy"===c?a=a.replace(b.regex.shortDateXXY,"$3/$2/$1"):"yyyymmdd"===c&&(a=a.replace(b.regex.shortDateYMD,"$1/$2/$3"));var d=new Date(a);return d instanceof Date&&isFinite(d)?d.getTime():""},b.addParser({id:"shortDate",is:function(a){return a=(a||"").replace(b.regex.spaces," ").replace(b.regex.shortDateReplace,"/"),b.regex.shortDateTest.test(a)},format:function(a,c,d,e){if(a){var f=c.config,g=f.$headerIndexed[e],h=g.length&&g.data("dateFormat")||b.getData(g,b.getColumnData(c,f.headers,e),"dateFormat")||f.dateFormat;return g.length&&g.data("dateFormat",h),b.convertFormat(a,h)||a}return a},type:"numeric"}),b.regex.timeTest=/^([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i,b.regex.timeMatch=/([1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i,b.addParser({id:"time",is:function(a){return b.regex.timeTest.test(a)},format:function(a,c){var d,e=(a||"").match(b.regex.timeMatch),f=new Date(a),g=a&&(null!==e?e[0]:"00:00 AM"),h=g?new Date("2000/01/01 "+g.replace(b.regex.dateReplace,"$1 $2")):g;return h instanceof Date&&isFinite(h)?(d=f instanceof Date&&isFinite(f)?f.getTime():0,d?parseFloat(h.getTime()+"."+f.getTime()):h.getTime()):a},type:"numeric"}),b.addParser({id:"metadata",is:function(){return!1},format:function(b,c,d){var e=c.config,f=e.parserMetadataName?e.parserMetadataName:"sortValue";return a(d).metadata()[f]},type:"numeric"}),b.addWidget({id:"zebra",priority:90,format:function(b,c,d){var e,f,g,h,i,j,k,l=new RegExp(c.cssChildRow,"i"),m=c.$tbodies.add(a(c.namespace+"_extra_table").children("tbody:not(."+c.cssInfoBlock+")"));for(i=0;i<m.length;i++)for(g=0,e=m.eq(i).children("tr:visible").not(c.selectorRemove),k=e.length,j=0;k>j;j++)f=e.eq(j),l.test(f[0].className)||g++,h=g%2===0,f.removeClass(d.zebra[h?1:0]).addClass(d.zebra[h?0:1])},remove:function(a,c,d,e){if(!e){var f,g,h=c.$tbodies,i=(d.zebra||["even","odd"]).join(" ");for(f=0;f<h.length;f++)g=b.processTbody(a,h.eq(f),!0),g.children().removeClass(i),b.processTbody(a,g,!1)}}})}(jQuery),a.tablesorter});
/*! tablesorter (FORK) - updated 05-16-2016 (v2.26.1)*/
/* Includes widgets ( storage,uitheme,columns,filter,stickyHeaders,resizable,saveSort ) */
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function($) {

/*! Widget: storage - updated 3/1/2016 (v2.25.5) */
/*global JSON:false */
;(function ($, window, document) {
	'use strict';

	var ts = $.tablesorter || {};
	// *** Store data in local storage, with a cookie fallback ***
	/* IE7 needs JSON library for JSON.stringify - (http://caniuse.com/#search=json)
	   if you need it, then include https://github.com/douglascrockford/JSON-js

	   $.parseJSON is not available is jQuery versions older than 1.4.1, using older
	   versions will only allow storing information for one page at a time

	   // *** Save data (JSON format only) ***
	   // val must be valid JSON... use http://jsonlint.com/ to ensure it is valid
	   var val = { "mywidget" : "data1" }; // valid JSON uses double quotes
	   // $.tablesorter.storage(table, key, val);
	   $.tablesorter.storage(table, 'tablesorter-mywidget', val);

	   // *** Get data: $.tablesorter.storage(table, key); ***
	   v = $.tablesorter.storage(table, 'tablesorter-mywidget');
	   // val may be empty, so also check for your data
	   val = (v && v.hasOwnProperty('mywidget')) ? v.mywidget : '';
	   alert(val); // 'data1' if saved, or '' if not
	*/
	ts.storage = function(table, key, value, options) {
		table = $(table)[0];
		var cookieIndex, cookies, date,
			hasStorage = false,
			values = {},
			c = table.config,
			wo = c && c.widgetOptions,
			storageType = ( options && options.useSessionStorage ) || ( wo && wo.storage_useSessionStorage ) ?
				'sessionStorage' : 'localStorage',
			$table = $(table),
			// id from (1) options ID, (2) table 'data-table-group' attribute, (3) widgetOptions.storage_tableId,
			// (4) table ID, then (5) table index
			id = options && options.id ||
				$table.attr( options && options.group || wo && wo.storage_group || 'data-table-group') ||
				wo && wo.storage_tableId || table.id || $('.tablesorter').index( $table ),
			// url from (1) options url, (2) table 'data-table-page' attribute, (3) widgetOptions.storage_fixedUrl,
			// (4) table.config.fixedUrl (deprecated), then (5) window location path
			url = options && options.url ||
				$table.attr(options && options.page || wo && wo.storage_page || 'data-table-page') ||
				wo && wo.storage_fixedUrl || c && c.fixedUrl || window.location.pathname;
		// https://gist.github.com/paulirish/5558557
		if (storageType in window) {
			try {
				window[storageType].setItem('_tmptest', 'temp');
				hasStorage = true;
				window[storageType].removeItem('_tmptest');
			} catch (error) {
				if (c && c.debug) {
					console.warn( storageType + ' is not supported in this browser' );
				}
			}
		}
		// *** get value ***
		if ($.parseJSON) {
			if (hasStorage) {
				values = $.parseJSON( window[storageType][key] || 'null' ) || {};
			} else {
				// old browser, using cookies
				cookies = document.cookie.split(/[;\s|=]/);
				// add one to get from the key to the value
				cookieIndex = $.inArray(key, cookies) + 1;
				values = (cookieIndex !== 0) ? $.parseJSON(cookies[cookieIndex] || 'null') || {} : {};
			}
		}
		// allow value to be an empty string too
		if (typeof value !== 'undefined' && window.JSON && JSON.hasOwnProperty('stringify')) {
			// add unique identifiers = url pathname > table ID/index on page > data
			if (!values[url]) {
				values[url] = {};
			}
			values[url][id] = value;
			// *** set value ***
			if (hasStorage) {
				window[storageType][key] = JSON.stringify(values);
			} else {
				date = new Date();
				date.setTime(date.getTime() + (31536e+6)); // 365 days
				document.cookie = key + '=' + (JSON.stringify(values)).replace(/\"/g, '\"') + '; expires=' + date.toGMTString() + '; path=/';
			}
		} else {
			return values && values[url] ? values[url][id] : '';
		}
	};

})(jQuery, window, document);

/*! Widget: uitheme - updated 3/26/2015 (v2.21.3) */
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	ts.themes = {
		'bootstrap' : {
			table        : 'table table-bordered table-striped',
			caption      : 'caption',
			// header class names
			header       : 'bootstrap-header', // give the header a gradient background (theme.bootstrap_2.css)
			sortNone     : '',
			sortAsc      : '',
			sortDesc     : '',
			active       : '', // applied when column is sorted
			hover        : '', // custom css required - a defined bootstrap style may not override other classes
			// icon class names
			icons        : '', // add 'icon-white' to make them white; this icon class is added to the <i> in the header
			iconSortNone : 'bootstrap-icon-unsorted', // class name added to icon when column is not sorted
			iconSortAsc  : 'icon-chevron-up glyphicon glyphicon-chevron-up', // class name added to icon when column has ascending sort
			iconSortDesc : 'icon-chevron-down glyphicon glyphicon-chevron-down', // class name added to icon when column has descending sort
			filterRow    : '', // filter row class
			footerRow    : '',
			footerCells  : '',
			even         : '', // even row zebra striping
			odd          : ''  // odd row zebra striping
		},
		'jui' : {
			table        : 'ui-widget ui-widget-content ui-corner-all', // table classes
			caption      : 'ui-widget-content',
			// header class names
			header       : 'ui-widget-header ui-corner-all ui-state-default', // header classes
			sortNone     : '',
			sortAsc      : '',
			sortDesc     : '',
			active       : 'ui-state-active', // applied when column is sorted
			hover        : 'ui-state-hover',  // hover class
			// icon class names
			icons        : 'ui-icon', // icon class added to the <i> in the header
			iconSortNone : 'ui-icon-carat-2-n-s', // class name added to icon when column is not sorted
			iconSortAsc  : 'ui-icon-carat-1-n', // class name added to icon when column has ascending sort
			iconSortDesc : 'ui-icon-carat-1-s', // class name added to icon when column has descending sort
			filterRow    : '',
			footerRow    : '',
			footerCells  : '',
			even         : 'ui-widget-content', // even row zebra striping
			odd          : 'ui-state-default'   // odd row zebra striping
		}
	};

	$.extend(ts.css, {
		wrapper : 'tablesorter-wrapper' // ui theme & resizable
	});

	ts.addWidget({
		id: 'uitheme',
		priority: 10,
		format: function(table, c, wo) {
			var i, hdr, icon, time, $header, $icon, $tfoot, $h, oldtheme, oldremove, oldIconRmv, hasOldTheme,
				themesAll = ts.themes,
				$table = c.$table.add( $( c.namespace + '_extra_table' ) ),
				$headers = c.$headers.add( $( c.namespace + '_extra_headers' ) ),
				theme = c.theme || 'jui',
				themes = themesAll[theme] || {},
				remove = $.trim( [ themes.sortNone, themes.sortDesc, themes.sortAsc, themes.active ].join( ' ' ) ),
				iconRmv = $.trim( [ themes.iconSortNone, themes.iconSortDesc, themes.iconSortAsc ].join( ' ' ) );
			if (c.debug) { time = new Date(); }
			// initialization code - run once
			if (!$table.hasClass('tablesorter-' + theme) || c.theme !== c.appliedTheme || !wo.uitheme_applied) {
				wo.uitheme_applied = true;
				oldtheme = themesAll[c.appliedTheme] || {};
				hasOldTheme = !$.isEmptyObject(oldtheme);
				oldremove =  hasOldTheme ? [ oldtheme.sortNone, oldtheme.sortDesc, oldtheme.sortAsc, oldtheme.active ].join( ' ' ) : '';
				oldIconRmv = hasOldTheme ? [ oldtheme.iconSortNone, oldtheme.iconSortDesc, oldtheme.iconSortAsc ].join( ' ' ) : '';
				if (hasOldTheme) {
					wo.zebra[0] = $.trim( ' ' + wo.zebra[0].replace(' ' + oldtheme.even, '') );
					wo.zebra[1] = $.trim( ' ' + wo.zebra[1].replace(' ' + oldtheme.odd, '') );
					c.$tbodies.children().removeClass( [ oldtheme.even, oldtheme.odd ].join(' ') );
				}
				// update zebra stripes
				if (themes.even) { wo.zebra[0] += ' ' + themes.even; }
				if (themes.odd) { wo.zebra[1] += ' ' + themes.odd; }
				// add caption style
				$table.children('caption')
					.removeClass(oldtheme.caption || '')
					.addClass(themes.caption);
				// add table/footer class names
				$tfoot = $table
					// remove other selected themes
					.removeClass( (c.appliedTheme ? 'tablesorter-' + (c.appliedTheme || '') : '') + ' ' + (oldtheme.table || '') )
					.addClass('tablesorter-' + theme + ' ' + (themes.table || '')) // add theme widget class name
					.children('tfoot');
				c.appliedTheme = c.theme;

				if ($tfoot.length) {
					$tfoot
						// if oldtheme.footerRow or oldtheme.footerCells are undefined, all class names are removed
						.children('tr').removeClass(oldtheme.footerRow || '').addClass(themes.footerRow)
						.children('th, td').removeClass(oldtheme.footerCells || '').addClass(themes.footerCells);
				}
				// update header classes
				$headers
					.removeClass( (hasOldTheme ? [ oldtheme.header, oldtheme.hover, oldremove ].join(' ') : '') || '' )
					.addClass(themes.header)
					.not('.sorter-false')
					.unbind('mouseenter.tsuitheme mouseleave.tsuitheme')
					.bind('mouseenter.tsuitheme mouseleave.tsuitheme', function(event) {
						// toggleClass with switch added in jQuery 1.3
						$(this)[ event.type === 'mouseenter' ? 'addClass' : 'removeClass' ](themes.hover || '');
					});

				$headers.each(function(){
					var $this = $(this);
					if (!$this.find('.' + ts.css.wrapper).length) {
						// Firefox needs this inner div to position the icon & resizer correctly
						$this.wrapInner('<div class="' + ts.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>');
					}
				});
				if (c.cssIcon) {
					// if c.cssIcon is '', then no <i> is added to the header
					$headers
						.find('.' + ts.css.icon)
						.removeClass(hasOldTheme ? [ oldtheme.icons, oldIconRmv ].join(' ') : '')
						.addClass(themes.icons || '');
				}
				if ($table.hasClass('hasFilters')) {
					$table.children('thead').children('.' + ts.css.filterRow)
						.removeClass(hasOldTheme ? oldtheme.filterRow || '' : '')
						.addClass(themes.filterRow || '');
				}
			}
			for (i = 0; i < c.columns; i++) {
				$header = c.$headers
					.add($(c.namespace + '_extra_headers'))
					.not('.sorter-false')
					.filter('[data-column="' + i + '"]');
				$icon = (ts.css.icon) ? $header.find('.' + ts.css.icon) : $();
				$h = $headers.not('.sorter-false').filter('[data-column="' + i + '"]:last');
				if ($h.length) {
					$header.removeClass(remove);
					$icon.removeClass(iconRmv);
					if ($h[0].sortDisabled) {
						// no sort arrows for disabled columns!
						$icon.removeClass(themes.icons || '');
					} else {
						hdr = themes.sortNone;
						icon = themes.iconSortNone;
						if ($h.hasClass(ts.css.sortAsc)) {
							hdr = [ themes.sortAsc, themes.active ].join(' ');
							icon = themes.iconSortAsc;
						} else if ($h.hasClass(ts.css.sortDesc)) {
							hdr = [ themes.sortDesc, themes.active ].join(' ');
							icon = themes.iconSortDesc;
						}
						$header.addClass(hdr);
						$icon.addClass(icon || '');
					}
				}
			}
			if (c.debug) {
				console.log('Applying ' + theme + ' theme' + ts.benchmark(time));
			}
		},
		remove: function(table, c, wo, refreshing) {
			if (!wo.uitheme_applied) { return; }
			var $table = c.$table,
				theme = c.appliedTheme || 'jui',
				themes = ts.themes[ theme ] || ts.themes.jui,
				$headers = $table.children('thead').children(),
				remove = themes.sortNone + ' ' + themes.sortDesc + ' ' + themes.sortAsc,
				iconRmv = themes.iconSortNone + ' ' + themes.iconSortDesc + ' ' + themes.iconSortAsc;
			$table.removeClass('tablesorter-' + theme + ' ' + themes.table);
			wo.uitheme_applied = false;
			if (refreshing) { return; }
			$table.find(ts.css.header).removeClass(themes.header);
			$headers
				.unbind('mouseenter.tsuitheme mouseleave.tsuitheme') // remove hover
				.removeClass(themes.hover + ' ' + remove + ' ' + themes.active)
				.filter('.' + ts.css.filterRow)
				.removeClass(themes.filterRow);
			$headers.find('.' + ts.css.icon).removeClass(themes.icons + ' ' + iconRmv);
		}
	});

})(jQuery);

/*! Widget: columns */
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	ts.addWidget({
		id: 'columns',
		priority: 30,
		options : {
			columns : [ 'primary', 'secondary', 'tertiary' ]
		},
		format: function(table, c, wo) {
			var $tbody, tbodyIndex, $rows, rows, $row, $cells, remove, indx,
			$table = c.$table,
			$tbodies = c.$tbodies,
			sortList = c.sortList,
			len = sortList.length,
			// removed c.widgetColumns support
			css = wo && wo.columns || [ 'primary', 'secondary', 'tertiary' ],
			last = css.length - 1;
			remove = css.join(' ');
			// check if there is a sort (on initialization there may not be one)
			for (tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody(table, $tbodies.eq(tbodyIndex), true); // detach tbody
				$rows = $tbody.children('tr');
				// loop through the visible rows
				$rows.each(function() {
					$row = $(this);
					if (this.style.display !== 'none') {
						// remove all columns class names
						$cells = $row.children().removeClass(remove);
						// add appropriate column class names
						if (sortList && sortList[0]) {
							// primary sort column class
							$cells.eq(sortList[0][0]).addClass(css[0]);
							if (len > 1) {
								for (indx = 1; indx < len; indx++) {
									// secondary, tertiary, etc sort column classes
									$cells.eq(sortList[indx][0]).addClass( css[indx] || css[last] );
								}
							}
						}
					}
				});
				ts.processTbody(table, $tbody, false);
			}
			// add classes to thead and tfoot
			rows = wo.columns_thead !== false ? [ 'thead tr' ] : [];
			if (wo.columns_tfoot !== false) {
				rows.push('tfoot tr');
			}
			if (rows.length) {
				$rows = $table.find( rows.join(',') ).children().removeClass(remove);
				if (len) {
					for (indx = 0; indx < len; indx++) {
						// add primary. secondary, tertiary, etc sort column classes
						$rows.filter('[data-column="' + sortList[indx][0] + '"]').addClass(css[indx] || css[last]);
					}
				}
			}
		},
		remove: function(table, c, wo) {
			var tbodyIndex, $tbody,
				$tbodies = c.$tbodies,
				remove = (wo.columns || [ 'primary', 'secondary', 'tertiary' ]).join(' ');
			c.$headers.removeClass(remove);
			c.$table.children('tfoot').children('tr').children('th, td').removeClass(remove);
			for (tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody(table, $tbodies.eq(tbodyIndex), true); // remove tbody
				$tbody.children('tr').each(function() {
					$(this).children().removeClass(remove);
				});
				ts.processTbody(table, $tbody, false); // restore tbody
			}
		}
	});

})(jQuery);

/*! Widget: filter - updated 4/29/2016 (v2.25.9) *//*
 * Requires tablesorter v2.8+ and jQuery 1.7+
 * by Rob Garrison
 */
;( function ( $ ) {
	'use strict';
	var tsf, tsfRegex,
		ts = $.tablesorter || {},
		tscss = ts.css,
		tskeyCodes = ts.keyCodes;

	$.extend( tscss, {
		filterRow      : 'tablesorter-filter-row',
		filter         : 'tablesorter-filter',
		filterDisabled : 'disabled',
		filterRowHide  : 'hideme'
	});

	$.extend( tskeyCodes, {
		backSpace : 8,
		escape : 27,
		space : 32,
		left : 37,
		down : 40
	});

	ts.addWidget({
		id: 'filter',
		priority: 50,
		options : {
			filter_cellFilter    : '',    // css class name added to the filter cell ( string or array )
			filter_childRows     : false, // if true, filter includes child row content in the search
			filter_childByColumn : false, // ( filter_childRows must be true ) if true = search child rows by column; false = search all child row text grouped
			filter_childWithSibs : true,  // if true, include matching child row siblings
			filter_columnAnyMatch: true,  // if true, allows using '#:{query}' in AnyMatch searches ( column:query )
			filter_columnFilters : true,  // if true, a filter will be added to the top of each table column
			filter_cssFilter     : '',    // css class name added to the filter row & each input in the row ( tablesorter-filter is ALWAYS added )
			filter_defaultAttrib : 'data-value', // data attribute in the header cell that contains the default filter value
			filter_defaultFilter : {},    // add a default column filter type '~{query}' to make fuzzy searches default; '{q1} AND {q2}' to make all searches use a logical AND.
			filter_excludeFilter : {},    // filters to exclude, per column
			filter_external      : '',    // jQuery selector string ( or jQuery object ) of external filters
			filter_filteredRow   : 'filtered', // class added to filtered rows; define in css with "display:none" to hide the filtered-out rows
			filter_formatter     : null,  // add custom filter elements to the filter row
			filter_functions     : null,  // add custom filter functions using this option
			filter_hideEmpty     : true,  // hide filter row when table is empty
			filter_hideFilters   : false, // collapse filter row when mouse leaves the area
			filter_ignoreCase    : true,  // if true, make all searches case-insensitive
			filter_liveSearch    : true,  // if true, search column content while the user types ( with a delay )
			filter_matchType     : { 'input': 'exact', 'select': 'exact' }, // global query settings ('exact' or 'match'); overridden by "filter-match" or "filter-exact" class
			filter_onlyAvail     : 'filter-onlyAvail', // a header with a select dropdown & this class name will only show available ( visible ) options within the drop down
			filter_placeholder   : { search : '', select : '' }, // default placeholder text ( overridden by any header 'data-placeholder' setting )
			filter_reset         : null,  // jQuery selector string of an element used to reset the filters
			filter_resetOnEsc    : true,  // Reset filter input when the user presses escape - normalized across browsers
			filter_saveFilters   : false, // Use the $.tablesorter.storage utility to save the most recent filters
			filter_searchDelay   : 300,   // typing delay in milliseconds before starting a search
			filter_searchFiltered: true,  // allow searching through already filtered rows in special circumstances; will speed up searching in large tables if true
			filter_selectSource  : null,  // include a function to return an array of values to be added to the column filter select
			filter_selectSourceSeparator : '|', // filter_selectSource array text left of the separator is added to the option value, right into the option text
			filter_serversideFiltering : false, // if true, must perform server-side filtering b/c client-side filtering is disabled, but the ui and events will still be used.
			filter_startsWith    : false, // if true, filter start from the beginning of the cell contents
			filter_useParsedData : false  // filter all data using parsed content
		},
		format: function( table, c, wo ) {
			if ( !c.$table.hasClass( 'hasFilters' ) ) {
				tsf.init( table, c, wo );
			}
		},
		remove: function( table, c, wo, refreshing ) {
			var tbodyIndex, $tbody,
				$table = c.$table,
				$tbodies = c.$tbodies,
				events = 'addRows updateCell update updateRows updateComplete appendCache filterReset filterEnd search '
					.split( ' ' ).join( c.namespace + 'filter ' );
			$table
				.removeClass( 'hasFilters' )
				// add filter namespace to all BUT search
				.unbind( events.replace( ts.regex.spaces, ' ' ) )
				// remove the filter row even if refreshing, because the column might have been moved
				.find( '.' + tscss.filterRow ).remove();
			wo.filter_initialized = false;
			if ( refreshing ) { return; }
			for ( tbodyIndex = 0; tbodyIndex < $tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody( table, $tbodies.eq( tbodyIndex ), true ); // remove tbody
				$tbody.children().removeClass( wo.filter_filteredRow ).show();
				ts.processTbody( table, $tbody, false ); // restore tbody
			}
			if ( wo.filter_reset ) {
				$( document ).undelegate( wo.filter_reset, 'click' + c.namespace + 'filter' );
			}
		}
	});

	tsf = ts.filter = {

		// regex used in filter 'check' functions - not for general use and not documented
		regex: {
			regex     : /^\/((?:\\\/|[^\/])+)\/([mig]{0,3})?$/, // regex to test for regex
			child     : /tablesorter-childRow/, // child row class name; this gets updated in the script
			filtered  : /filtered/, // filtered (hidden) row class name; updated in the script
			type      : /undefined|number/, // check type
			exact     : /(^[\"\'=]+)|([\"\'=]+$)/g, // exact match (allow '==')
			operators : /[<>=]/g, // replace operators
			query     : '(q|query)', // replace filter queries
			wild01    : /\?/g, // wild card match 0 or 1
			wild0More : /\*/g, // wild care match 0 or more
			quote     : /\"/g,
			isNeg1    : /(>=?\s*-\d)/,
			isNeg2    : /(<=?\s*\d)/
		},
		// function( c, data ) { }
		// c = table.config
		// data.$row = jQuery object of the row currently being processed
		// data.$cells = jQuery object of all cells within the current row
		// data.filters = array of filters for all columns ( some may be undefined )
		// data.filter = filter for the current column
		// data.iFilter = same as data.filter, except lowercase ( if wo.filter_ignoreCase is true )
		// data.exact = table cell text ( or parsed data if column parser enabled; may be a number & not a string )
		// data.iExact = same as data.exact, except lowercase ( if wo.filter_ignoreCase is true; may be a number & not a string )
		// data.cache = table cell text from cache, so it has been parsed ( & in all lower case if c.ignoreCase is true )
		// data.cacheArray = An array of parsed content from each table cell in the row being processed
		// data.index = column index; table = table element ( DOM )
		// data.parsed = array ( by column ) of boolean values ( from filter_useParsedData or 'filter-parsed' class )
		types: {
			or : function( c, data, vars ) {
				// look for "|", but not if it is inside of a regular expression
				if ( ( tsfRegex.orTest.test( data.iFilter ) || tsfRegex.orSplit.test( data.filter ) ) &&
					// this test for regex has potential to slow down the overall search
					!tsfRegex.regex.test( data.filter ) ) {
					var indx, filterMatched, query, regex,
						// duplicate data but split filter
						data2 = $.extend( {}, data ),
						filter = data.filter.split( tsfRegex.orSplit ),
						iFilter = data.iFilter.split( tsfRegex.orSplit ),
						len = filter.length;
					for ( indx = 0; indx < len; indx++ ) {
						data2.nestedFilters = true;
						data2.filter = '' + ( tsf.parseFilter( c, filter[ indx ], data ) || '' );
						data2.iFilter = '' + ( tsf.parseFilter( c, iFilter[ indx ], data ) || '' );
						query = '(' + ( tsf.parseFilter( c, data2.filter, data ) || '' ) + ')';
						try {
							// use try/catch, because query may not be a valid regex if "|" is contained within a partial regex search,
							// e.g "/(Alex|Aar" -> Uncaught SyntaxError: Invalid regular expression: /(/(Alex)/: Unterminated group
							regex = new RegExp( data.isMatch ? query : '^' + query + '$', c.widgetOptions.filter_ignoreCase ? 'i' : '' );
							// filterMatched = data2.filter === '' && indx > 0 ? true
							// look for an exact match with the 'or' unless the 'filter-match' class is found
							filterMatched = regex.test( data2.exact ) || tsf.processTypes( c, data2, vars );
							if ( filterMatched ) {
								return filterMatched;
							}
						} catch ( error ) {
							return null;
						}
					}
					// may be null from processing types
					return filterMatched || false;
				}
				return null;
			},
			// Look for an AND or && operator ( logical and )
			and : function( c, data, vars ) {
				if ( tsfRegex.andTest.test( data.filter ) ) {
					var indx, filterMatched, result, query, regex,
						// duplicate data but split filter
						data2 = $.extend( {}, data ),
						filter = data.filter.split( tsfRegex.andSplit ),
						iFilter = data.iFilter.split( tsfRegex.andSplit ),
						len = filter.length;
					for ( indx = 0; indx < len; indx++ ) {
						data2.nestedFilters = true;
						data2.filter = '' + ( tsf.parseFilter( c, filter[ indx ], data ) || '' );
						data2.iFilter = '' + ( tsf.parseFilter( c, iFilter[ indx ], data ) || '' );
						query = ( '(' + ( tsf.parseFilter( c, data2.filter, data ) || '' ) + ')' )
							// replace wild cards since /(a*)/i will match anything
							.replace( tsfRegex.wild01, '\\S{1}' ).replace( tsfRegex.wild0More, '\\S*' );
						try {
							// use try/catch just in case RegExp is invalid
							regex = new RegExp( data.isMatch ? query : '^' + query + '$', c.widgetOptions.filter_ignoreCase ? 'i' : '' );
							// look for an exact match with the 'and' unless the 'filter-match' class is found
							result = ( regex.test( data2.exact ) || tsf.processTypes( c, data2, vars ) );
							if ( indx === 0 ) {
								filterMatched = result;
							} else {
								filterMatched = filterMatched && result;
							}
						} catch ( error ) {
							return null;
						}
					}
					// may be null from processing types
					return filterMatched || false;
				}
				return null;
			},
			// Look for regex
			regex: function( c, data ) {
				if ( tsfRegex.regex.test( data.filter ) ) {
					var matches,
						// cache regex per column for optimal speed
						regex = data.filter_regexCache[ data.index ] || tsfRegex.regex.exec( data.filter ),
						isRegex = regex instanceof RegExp;
					try {
						if ( !isRegex ) {
							// force case insensitive search if ignoreCase option set?
							// if ( c.ignoreCase && !regex[2] ) { regex[2] = 'i'; }
							data.filter_regexCache[ data.index ] = regex = new RegExp( regex[1], regex[2] );
						}
						matches = regex.test( data.exact );
					} catch ( error ) {
						matches = false;
					}
					return matches;
				}
				return null;
			},
			// Look for operators >, >=, < or <=
			operators: function( c, data ) {
				// ignore empty strings... because '' < 10 is true
				if ( tsfRegex.operTest.test( data.iFilter ) && data.iExact !== '' ) {
					var cachedValue, result, txt,
						table = c.table,
						parsed = data.parsed[ data.index ],
						query = ts.formatFloat( data.iFilter.replace( tsfRegex.operators, '' ), table ),
						parser = c.parsers[ data.index ] || {},
						savedSearch = query;
					// parse filter value in case we're comparing numbers ( dates )
					if ( parsed || parser.type === 'numeric' ) {
						txt = $.trim( '' + data.iFilter.replace( tsfRegex.operators, '' ) );
						result = tsf.parseFilter( c, txt, data, true );
						query = ( typeof result === 'number' && result !== '' && !isNaN( result ) ) ? result : query;
					}
					// iExact may be numeric - see issue #149;
					// check if cached is defined, because sometimes j goes out of range? ( numeric columns )
					if ( ( parsed || parser.type === 'numeric' ) && !isNaN( query ) &&
						typeof data.cache !== 'undefined' ) {
						cachedValue = data.cache;
					} else {
						txt = isNaN( data.iExact ) ? data.iExact.replace( ts.regex.nondigit, '' ) : data.iExact;
						cachedValue = ts.formatFloat( txt, table );
					}
					if ( tsfRegex.gtTest.test( data.iFilter ) ) {
						result = tsfRegex.gteTest.test( data.iFilter ) ? cachedValue >= query : cachedValue > query;
					} else if ( tsfRegex.ltTest.test( data.iFilter ) ) {
						result = tsfRegex.lteTest.test( data.iFilter ) ? cachedValue <= query : cachedValue < query;
					}
					// keep showing all rows if nothing follows the operator
					if ( !result && savedSearch === '' ) {
						result = true;
					}
					return result;
				}
				return null;
			},
			// Look for a not match
			notMatch: function( c, data ) {
				if ( tsfRegex.notTest.test( data.iFilter ) ) {
					var indx,
						txt = data.iFilter.replace( '!', '' ),
						filter = tsf.parseFilter( c, txt, data ) || '';
					if ( tsfRegex.exact.test( filter ) ) {
						// look for exact not matches - see #628
						filter = filter.replace( tsfRegex.exact, '' );
						return filter === '' ? true : $.trim( filter ) !== data.iExact;
					} else {
						indx = data.iExact.search( $.trim( filter ) );
						return filter === '' ? true : !( c.widgetOptions.filter_startsWith ? indx === 0 : indx >= 0 );
					}
				}
				return null;
			},
			// Look for quotes or equals to get an exact match; ignore type since iExact could be numeric
			exact: function( c, data ) {
				/*jshint eqeqeq:false */
				if ( tsfRegex.exact.test( data.iFilter ) ) {
					var txt = data.iFilter.replace( tsfRegex.exact, '' ),
						filter = tsf.parseFilter( c, txt, data ) || '';
					return data.anyMatch ? $.inArray( filter, data.rowArray ) >= 0 : filter == data.iExact;
				}
				return null;
			},
			// Look for a range ( using ' to ' or ' - ' ) - see issue #166; thanks matzhu!
			range : function( c, data ) {
				if ( tsfRegex.toTest.test( data.iFilter ) ) {
					var result, tmp, range1, range2,
						table = c.table,
						index = data.index,
						parsed = data.parsed[index],
						// make sure the dash is for a range and not indicating a negative number
						query = data.iFilter.split( tsfRegex.toSplit );

					tmp = query[0].replace( ts.regex.nondigit, '' ) || '';
					range1 = ts.formatFloat( tsf.parseFilter( c, tmp, data ), table );
					tmp = query[1].replace( ts.regex.nondigit, '' ) || '';
					range2 = ts.formatFloat( tsf.parseFilter( c, tmp, data ), table );
					// parse filter value in case we're comparing numbers ( dates )
					if ( parsed || c.parsers[ index ].type === 'numeric' ) {
						result = c.parsers[ index ].format( '' + query[0], table, c.$headers.eq( index ), index );
						range1 = ( result !== '' && !isNaN( result ) ) ? result : range1;
						result = c.parsers[ index ].format( '' + query[1], table, c.$headers.eq( index ), index );
						range2 = ( result !== '' && !isNaN( result ) ) ? result : range2;
					}
					if ( ( parsed || c.parsers[ index ].type === 'numeric' ) && !isNaN( range1 ) && !isNaN( range2 ) ) {
						result = data.cache;
					} else {
						tmp = isNaN( data.iExact ) ? data.iExact.replace( ts.regex.nondigit, '' ) : data.iExact;
						result = ts.formatFloat( tmp, table );
					}
					if ( range1 > range2 ) {
						tmp = range1; range1 = range2; range2 = tmp; // swap
					}
					return ( result >= range1 && result <= range2 ) || ( range1 === '' || range2 === '' );
				}
				return null;
			},
			// Look for wild card: ? = single, * = multiple, or | = logical OR
			wild : function( c, data ) {
				if ( tsfRegex.wildOrTest.test( data.iFilter ) ) {
					var query = '' + ( tsf.parseFilter( c, data.iFilter, data ) || '' );
					// look for an exact match with the 'or' unless the 'filter-match' class is found
					if ( !tsfRegex.wildTest.test( query ) && data.nestedFilters ) {
						query = data.isMatch ? query : '^(' + query + ')$';
					}
					// parsing the filter may not work properly when using wildcards =/
					try {
						return new RegExp(
							query.replace( tsfRegex.wild01, '\\S{1}' ).replace( tsfRegex.wild0More, '\\S*' ),
							c.widgetOptions.filter_ignoreCase ? 'i' : ''
						)
						.test( data.exact );
					} catch ( error ) {
						return null;
					}
				}
				return null;
			},
			// fuzzy text search; modified from https://github.com/mattyork/fuzzy ( MIT license )
			fuzzy: function( c, data ) {
				if ( tsfRegex.fuzzyTest.test( data.iFilter ) ) {
					var indx,
						patternIndx = 0,
						len = data.iExact.length,
						txt = data.iFilter.slice( 1 ),
						pattern = tsf.parseFilter( c, txt, data ) || '';
					for ( indx = 0; indx < len; indx++ ) {
						if ( data.iExact[ indx ] === pattern[ patternIndx ] ) {
							patternIndx += 1;
						}
					}
					return patternIndx === pattern.length;
				}
				return null;
			}
		},
		init: function( table ) {
			// filter language options
			ts.language = $.extend( true, {}, {
				to  : 'to',
				or  : 'or',
				and : 'and'
			}, ts.language );

			var options, string, txt, $header, column, val, fxn, noSelect,
				c = table.config,
				wo = c.widgetOptions;
			c.$table.addClass( 'hasFilters' );
			c.lastSearch = [];

			// define timers so using clearTimeout won't cause an undefined error
			wo.filter_searchTimer = null;
			wo.filter_initTimer = null;
			wo.filter_formatterCount = 0;
			wo.filter_formatterInit = [];
			wo.filter_anyColumnSelector = '[data-column="all"],[data-column="any"]';
			wo.filter_multipleColumnSelector = '[data-column*="-"],[data-column*=","]';

			val = '\\{' + tsfRegex.query + '\\}';
			$.extend( tsfRegex, {
				child : new RegExp( c.cssChildRow ),
				filtered : new RegExp( wo.filter_filteredRow ),
				alreadyFiltered : new RegExp( '(\\s+(' + ts.language.or + '|-|' + ts.language.to + ')\\s+)', 'i' ),
				toTest : new RegExp( '\\s+(-|' + ts.language.to + ')\\s+', 'i' ),
				toSplit : new RegExp( '(?:\\s+(?:-|' + ts.language.to + ')\\s+)', 'gi' ),
				andTest : new RegExp( '\\s+(' + ts.language.and + '|&&)\\s+', 'i' ),
				andSplit : new RegExp( '(?:\\s+(?:' + ts.language.and + '|&&)\\s+)', 'gi' ),
				orTest : new RegExp( '(\\||\\s+' + ts.language.or + '\\s+)', 'i' ),
				orSplit : new RegExp( '(?:\\s+(?:' + ts.language.or + ')\\s+|\\|)', 'gi' ),
				iQuery : new RegExp( val, 'i' ),
				igQuery : new RegExp( val, 'ig' ),
				operTest : /^[<>]=?/,
				gtTest  : />/,
				gteTest : />=/,
				ltTest  : /</,
				lteTest : /<=/,
				notTest : /^\!/,
				wildOrTest : /[\?\*\|]/,
				wildTest : /\?\*/,
				fuzzyTest : /^~/,
				exactTest : /[=\"\|!]/
			});

			// don't build filter row if columnFilters is false or all columns are set to 'filter-false'
			// see issue #156
			val = c.$headers.filter( '.filter-false, .parser-false' ).length;
			if ( wo.filter_columnFilters !== false && val !== c.$headers.length ) {
				// build filter row
				tsf.buildRow( table, c, wo );
			}

			txt = 'addRows updateCell update updateRows updateComplete appendCache filterReset ' +
				'filterResetSaved filterEnd search '.split( ' ' ).join( c.namespace + 'filter ' );
			c.$table.bind( txt, function( event, filter ) {
				val = wo.filter_hideEmpty &&
					$.isEmptyObject( c.cache ) &&
					!( c.delayInit && event.type === 'appendCache' );
				// hide filter row using the 'filtered' class name
				c.$table.find( '.' + tscss.filterRow ).toggleClass( wo.filter_filteredRow, val ); // fixes #450
				if ( !/(search|filter)/.test( event.type ) ) {
					event.stopPropagation();
					tsf.buildDefault( table, true );
				}
				if ( event.type === 'filterReset' ) {
					c.$table.find( '.' + tscss.filter ).add( wo.filter_$externalFilters ).val( '' );
					tsf.searching( table, [] );
				} else if ( event.type === 'filterResetSaved' ) {
					ts.storage( table, 'tablesorter-filters', '' );
				} else if ( event.type === 'filterEnd' ) {
					tsf.buildDefault( table, true );
				} else {
					// send false argument to force a new search; otherwise if the filter hasn't changed,
					// it will return
					filter = event.type === 'search' ? filter :
						event.type === 'updateComplete' ? c.$table.data( 'lastSearch' ) : '';
					if ( /(update|add)/.test( event.type ) && event.type !== 'updateComplete' ) {
						// force a new search since content has changed
						c.lastCombinedFilter = null;
						c.lastSearch = [];
					}
					// pass true ( skipFirst ) to prevent the tablesorter.setFilters function from skipping the first
					// input ensures all inputs are updated when a search is triggered on the table
					// $( 'table' ).trigger( 'search', [...] );
					tsf.searching( table, filter, true );
				}
				return false;
			});

			// reset button/link
			if ( wo.filter_reset ) {
				if ( wo.filter_reset instanceof $ ) {
					// reset contains a jQuery object, bind to it
					wo.filter_reset.click( function() {
						c.$table.triggerHandler( 'filterReset' );
					});
				} else if ( $( wo.filter_reset ).length ) {
					// reset is a jQuery selector, use event delegation
					$( document )
						.undelegate( wo.filter_reset, 'click' + c.namespace + 'filter' )
						.delegate( wo.filter_reset, 'click' + c.namespace + 'filter', function() {
							// trigger a reset event, so other functions ( filter_formatter ) know when to reset
							c.$table.triggerHandler( 'filterReset' );
						});
				}
			}
			if ( wo.filter_functions ) {
				for ( column = 0; column < c.columns; column++ ) {
					fxn = ts.getColumnData( table, wo.filter_functions, column );
					if ( fxn ) {
						// remove 'filter-select' from header otherwise the options added here are replaced with
						// all options
						$header = c.$headerIndexed[ column ].removeClass( 'filter-select' );
						// don't build select if 'filter-false' or 'parser-false' set
						noSelect = !( $header.hasClass( 'filter-false' ) || $header.hasClass( 'parser-false' ) );
						options = '';
						if ( fxn === true && noSelect ) {
							tsf.buildSelect( table, column );
						} else if ( typeof fxn === 'object' && noSelect ) {
							// add custom drop down list
							for ( string in fxn ) {
								if ( typeof string === 'string' ) {
									options += options === '' ?
										'<option value="">' +
											( $header.data( 'placeholder' ) ||
												$header.attr( 'data-placeholder' ) ||
												wo.filter_placeholder.select ||
												''
											) +
										'</option>' : '';
									val = string;
									txt = string;
									if ( string.indexOf( wo.filter_selectSourceSeparator ) >= 0 ) {
										val = string.split( wo.filter_selectSourceSeparator );
										txt = val[1];
										val = val[0];
									}
									options += '<option ' +
										( txt === val ? '' : 'data-function-name="' + string + '" ' ) +
										'value="' + val + '">' + txt + '</option>';
								}
							}
							c.$table
								.find( 'thead' )
								.find( 'select.' + tscss.filter + '[data-column="' + column + '"]' )
								.append( options );
							txt = wo.filter_selectSource;
							fxn = typeof txt === 'function' ? true : ts.getColumnData( table, txt, column );
							if ( fxn ) {
								// updating so the extra options are appended
								tsf.buildSelect( c.table, column, '', true, $header.hasClass( wo.filter_onlyAvail ) );
							}
						}
					}
				}
			}
			// not really updating, but if the column has both the 'filter-select' class &
			// filter_functions set to true, it would append the same options twice.
			tsf.buildDefault( table, true );

			tsf.bindSearch( table, c.$table.find( '.' + tscss.filter ), true );
			if ( wo.filter_external ) {
				tsf.bindSearch( table, wo.filter_external );
			}

			if ( wo.filter_hideFilters ) {
				tsf.hideFilters( c );
			}

			// show processing icon
			if ( c.showProcessing ) {
				txt = 'filterStart filterEnd '.split( ' ' ).join( c.namespace + 'filter ' );
				c.$table
					.unbind( txt.replace( ts.regex.spaces, ' ' ) )
					.bind( txt, function( event, columns ) {
					// only add processing to certain columns to all columns
					$header = ( columns ) ?
						c.$table
							.find( '.' + tscss.header )
							.filter( '[data-column]' )
							.filter( function() {
								return columns[ $( this ).data( 'column' ) ] !== '';
							}) : '';
					ts.isProcessing( table, event.type === 'filterStart', columns ? $header : '' );
				});
			}

			// set filtered rows count ( intially unfiltered )
			c.filteredRows = c.totalRows;

			// add default values
			txt = 'tablesorter-initialized pagerBeforeInitialized '.split( ' ' ).join( c.namespace + 'filter ' );
			c.$table
			.unbind( txt.replace( ts.regex.spaces, ' ' ) )
			.bind( txt, function() {
				tsf.completeInit( this );
			});
			// if filter widget is added after pager has initialized; then set filter init flag
			if ( c.pager && c.pager.initialized && !wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterFomatterUpdate' );
				setTimeout( function() {
					tsf.filterInitComplete( c );
				}, 100 );
			} else if ( !wo.filter_initialized ) {
				tsf.completeInit( table );
			}
		},
		completeInit: function( table ) {
			// redefine 'c' & 'wo' so they update properly inside this callback
			var c = table.config,
				wo = c.widgetOptions,
				filters = tsf.setDefaults( table, c, wo ) || [];
			if ( filters.length ) {
				// prevent delayInit from triggering a cache build if filters are empty
				if ( !( c.delayInit && filters.join( '' ) === '' ) ) {
					ts.setFilters( table, filters, true );
				}
			}
			c.$table.triggerHandler( 'filterFomatterUpdate' );
			// trigger init after setTimeout to prevent multiple filterStart/End/Init triggers
			setTimeout( function() {
				if ( !wo.filter_initialized ) {
					tsf.filterInitComplete( c );
				}
			}, 100 );
		},

		// $cell parameter, but not the config, is passed to the filter_formatters,
		// so we have to work with it instead
		formatterUpdated: function( $cell, column ) {
			// prevent error if $cell is undefined - see #1056
			var wo = $cell && $cell.closest( 'table' )[0].config.widgetOptions;
			if ( wo && !wo.filter_initialized ) {
				// add updates by column since this function
				// may be called numerous times before initialization
				wo.filter_formatterInit[ column ] = 1;
			}
		},
		filterInitComplete: function( c ) {
			var indx, len,
				wo = c.widgetOptions,
				count = 0,
				completed = function() {
					wo.filter_initialized = true;
					c.$table.triggerHandler( 'filterInit', c );
					tsf.findRows( c.table, c.$table.data( 'lastSearch' ) || [] );
				};
			if ( $.isEmptyObject( wo.filter_formatter ) ) {
				completed();
			} else {
				len = wo.filter_formatterInit.length;
				for ( indx = 0; indx < len; indx++ ) {
					if ( wo.filter_formatterInit[ indx ] === 1 ) {
						count++;
					}
				}
				clearTimeout( wo.filter_initTimer );
				if ( !wo.filter_initialized && count === wo.filter_formatterCount ) {
					// filter widget initialized
					completed();
				} else if ( !wo.filter_initialized ) {
					// fall back in case a filter_formatter doesn't call
					// $.tablesorter.filter.formatterUpdated( $cell, column ), and the count is off
					wo.filter_initTimer = setTimeout( function() {
						completed();
					}, 500 );
				}
			}
		},
		// encode or decode filters for storage; see #1026
		processFilters: function( filters, encode ) {
			var indx,
				mode = encode ? encodeURIComponent : decodeURIComponent,
				len = filters.length;
			for ( indx = 0; indx < len; indx++ ) {
				if ( filters[ indx ] ) {
					filters[ indx ] = mode( filters[ indx ] );
				}
			}
			return filters;
		},
		setDefaults: function( table, c, wo ) {
			var isArray, saved, indx, col, $filters,
				// get current ( default ) filters
				filters = ts.getFilters( table ) || [];
			if ( wo.filter_saveFilters && ts.storage ) {
				saved = ts.storage( table, 'tablesorter-filters' ) || [];
				isArray = $.isArray( saved );
				// make sure we're not just getting an empty array
				if ( !( isArray && saved.join( '' ) === '' || !isArray ) ) {
					filters = tsf.processFilters( saved );
				}
			}
			// if no filters saved, then check default settings
			if ( filters.join( '' ) === '' ) {
				// allow adding default setting to external filters
				$filters = c.$headers.add( wo.filter_$externalFilters )
					.filter( '[' + wo.filter_defaultAttrib + ']' );
				for ( indx = 0; indx <= c.columns; indx++ ) {
					// include data-column='all' external filters
					col = indx === c.columns ? 'all' : indx;
					filters[ indx ] = $filters
						.filter( '[data-column="' + col + '"]' )
						.attr( wo.filter_defaultAttrib ) || filters[indx] || '';
				}
			}
			c.$table.data( 'lastSearch', filters );
			return filters;
		},
		parseFilter: function( c, filter, data, parsed ) {
			return parsed || data.parsed[ data.index ] ?
				c.parsers[ data.index ].format( filter, c.table, [], data.index ) :
				filter;
		},
		buildRow: function( table, c, wo ) {
			var $filter, col, column, $header, makeSelect, disabled, name, ffxn, tmp,
				// c.columns defined in computeThIndexes()
				cellFilter = wo.filter_cellFilter,
				columns = c.columns,
				arry = $.isArray( cellFilter ),
				buildFilter = '<tr role="row" class="' + tscss.filterRow + ' ' + c.cssIgnoreRow + '">';
			for ( column = 0; column < columns; column++ ) {
				if ( c.$headerIndexed[ column ].length ) {
					// account for entire column set with colspan. See #1047
					tmp = c.$headerIndexed[ column ] && c.$headerIndexed[ column ][0].colSpan || 0;
					if ( tmp > 1 ) {
						buildFilter += '<td data-column="' + column + '-' + ( column + tmp - 1 ) + '" colspan="' + tmp + '"';
					} else {
						buildFilter += '<td data-column="' + column + '"';
					}
					if ( arry ) {
						buildFilter += ( cellFilter[ column ] ? ' class="' + cellFilter[ column ] + '"' : '' );
					} else {
						buildFilter += ( cellFilter !== '' ? ' class="' + cellFilter + '"' : '' );
					}
					buildFilter += '></td>';
				}
			}
			c.$filters = $( buildFilter += '</tr>' )
				.appendTo( c.$table.children( 'thead' ).eq( 0 ) )
				.children( 'td' );
			// build each filter input
			for ( column = 0; column < columns; column++ ) {
				disabled = false;
				// assuming last cell of a column is the main column
				$header = c.$headerIndexed[ column ];
				if ( $header && $header.length ) {
					// $filter = c.$filters.filter( '[data-column="' + column + '"]' );
					$filter = tsf.getColumnElm( c, c.$filters, column );
					ffxn = ts.getColumnData( table, wo.filter_functions, column );
					makeSelect = ( wo.filter_functions && ffxn && typeof ffxn !== 'function' ) ||
						$header.hasClass( 'filter-select' );
					// get data from jQuery data, metadata, headers option or header class name
					col = ts.getColumnData( table, c.headers, column );
					disabled = ts.getData( $header[0], col, 'filter' ) === 'false' ||
						ts.getData( $header[0], col, 'parser' ) === 'false';

					if ( makeSelect ) {
						buildFilter = $( '<select>' ).appendTo( $filter );
					} else {
						ffxn = ts.getColumnData( table, wo.filter_formatter, column );
						if ( ffxn ) {
							wo.filter_formatterCount++;
							buildFilter = ffxn( $filter, column );
							// no element returned, so lets go find it
							if ( buildFilter && buildFilter.length === 0 ) {
								buildFilter = $filter.children( 'input' );
							}
							// element not in DOM, so lets attach it
							if ( buildFilter && ( buildFilter.parent().length === 0 ||
								( buildFilter.parent().length && buildFilter.parent()[0] !== $filter[0] ) ) ) {
								$filter.append( buildFilter );
							}
						} else {
							buildFilter = $( '<input type="search">' ).appendTo( $filter );
						}
						if ( buildFilter ) {
							tmp = $header.data( 'placeholder' ) ||
								$header.attr( 'data-placeholder' ) ||
								wo.filter_placeholder.search || '';
							buildFilter.attr( 'placeholder', tmp );
						}
					}
					if ( buildFilter ) {
						// add filter class name
						name = ( $.isArray( wo.filter_cssFilter ) ?
							( typeof wo.filter_cssFilter[column] !== 'undefined' ? wo.filter_cssFilter[column] || '' : '' ) :
							wo.filter_cssFilter ) || '';
						// copy data-column from table cell (it will include colspan)
						buildFilter.addClass( tscss.filter + ' ' + name ).attr( 'data-column', $filter.attr( 'data-column' ) );
						if ( disabled ) {
							buildFilter.attr( 'placeholder', '' ).addClass( tscss.filterDisabled )[0].disabled = true;
						}
					}
				}
			}
		},
		bindSearch: function( table, $el, internal ) {
			table = $( table )[0];
			$el = $( $el ); // allow passing a selector string
			if ( !$el.length ) { return; }
			var tmp,
				c = table.config,
				wo = c.widgetOptions,
				namespace = c.namespace + 'filter',
				$ext = wo.filter_$externalFilters;
			if ( internal !== true ) {
				// save anyMatch element
				tmp = wo.filter_anyColumnSelector + ',' + wo.filter_multipleColumnSelector;
				wo.filter_$anyMatch = $el.filter( tmp );
				if ( $ext && $ext.length ) {
					wo.filter_$externalFilters = wo.filter_$externalFilters.add( $el );
				} else {
					wo.filter_$externalFilters = $el;
				}
				// update values ( external filters added after table initialization )
				ts.setFilters( table, c.$table.data( 'lastSearch' ) || [], internal === false );
			}
			// unbind events
			tmp = ( 'keypress keyup keydown search change input '.split( ' ' ).join( namespace + ' ' ) );
			$el
			// use data attribute instead of jQuery data since the head is cloned without including
			// the data/binding
			.attr( 'data-lastSearchTime', new Date().getTime() )
			.unbind( tmp.replace( ts.regex.spaces, ' ' ) )
			.bind( 'keydown' + namespace, function( event ) {
				if ( event.which === tskeyCodes.escape && !wo.filter_resetOnEsc ) {
					// prevent keypress event
					return false;
				}
			})
			.bind( 'keyup' + namespace, function( event ) {
				var column = parseInt( $( this ).attr( 'data-column' ), 10 );
				$( this ).attr( 'data-lastSearchTime', new Date().getTime() );
				// emulate what webkit does.... escape clears the filter
				if ( event.which === tskeyCodes.escape ) {
					// make sure to restore the last value on escape
					this.value = wo.filter_resetOnEsc ? '' : c.lastSearch[column];
				// live search
				} else if ( wo.filter_liveSearch === false ) {
					return;
					// don't return if the search value is empty ( all rows need to be revealed )
				} else if ( this.value !== '' && (
					// liveSearch can contain a min value length; ignore arrow and meta keys, but allow backspace
					( typeof wo.filter_liveSearch === 'number' && this.value.length < wo.filter_liveSearch ) ||
					// let return & backspace continue on, but ignore arrows & non-valid characters
					( event.which !== tskeyCodes.enter && event.which !== tskeyCodes.backSpace &&
						( event.which < tskeyCodes.space || ( event.which >= tskeyCodes.left && event.which <= tskeyCodes.down ) ) ) ) ) {
					return;
				}
				// change event = no delay; last true flag tells getFilters to skip newest timed input
				tsf.searching( table, true, true );
			})
			// include change for select - fixes #473
			.bind( 'search change keypress input '.split( ' ' ).join( namespace + ' ' ), function( event ) {
				// don't get cached data, in case data-column changes dynamically
				var column = parseInt( $( this ).attr( 'data-column' ), 10 );
				// don't allow 'change' event to process if the input value is the same - fixes #685
				if ( wo.filter_initialized && ( event.which === tskeyCodes.enter || event.type === 'search' ||
					( event.type === 'change' ) && this.value !== c.lastSearch[column] ) ||
					// only "input" event fires in MS Edge when clicking the "x" to clear the search
					( event.type === 'input' && this.value === '' ) ) {
					event.preventDefault();
					// init search with no delay
					$( this ).attr( 'data-lastSearchTime', new Date().getTime() );
					tsf.searching( table, event.type !== 'keypress', true );
				}
			});
		},
		searching: function( table, filter, skipFirst ) {
			var wo = table.config.widgetOptions;
			clearTimeout( wo.filter_searchTimer );
			if ( typeof filter === 'undefined' || filter === true ) {
				// delay filtering
				wo.filter_searchTimer = setTimeout( function() {
					tsf.checkFilters( table, filter, skipFirst );
				}, wo.filter_liveSearch ? wo.filter_searchDelay : 10 );
			} else {
				// skip delay
				tsf.checkFilters( table, filter, skipFirst );
			}
		},
		checkFilters: function( table, filter, skipFirst ) {
			var c = table.config,
				wo = c.widgetOptions,
				filterArray = $.isArray( filter ),
				filters = ( filterArray ) ? filter : ts.getFilters( table, true ),
				combinedFilters = ( filters || [] ).join( '' ); // combined filter values
			// prevent errors if delay init is set
			if ( $.isEmptyObject( c.cache ) ) {
				// update cache if delayInit set & pager has initialized ( after user initiates a search )
				if ( c.delayInit && ( !c.pager || c.pager && c.pager.initialized ) ) {
					ts.updateCache( c, function() {
						tsf.checkFilters( table, false, skipFirst );
					});
				}
				return;
			}
			// add filter array back into inputs
			if ( filterArray ) {
				ts.setFilters( table, filters, false, skipFirst !== true );
				if ( !wo.filter_initialized ) { c.lastCombinedFilter = ''; }
			}
			if ( wo.filter_hideFilters ) {
				// show/hide filter row as needed
				c.$table
					.find( '.' + tscss.filterRow )
					.triggerHandler( combinedFilters === '' ? 'mouseleave' : 'mouseenter' );
			}
			// return if the last search is the same; but filter === false when updating the search
			// see example-widget-filter.html filter toggle buttons
			if ( c.lastCombinedFilter === combinedFilters && filter !== false ) {
				return;
			} else if ( filter === false ) {
				// force filter refresh
				c.lastCombinedFilter = null;
				c.lastSearch = [];
			}
			// define filter inside it is false
			filters = filters || [];
			// convert filters to strings - see #1070
			filters = Array.prototype.map ?
				filters.map( String ) :
				// for IE8 & older browsers - maybe not the best method
				filters.join( '\ufffd' ).split( '\ufffd' );

			if ( wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterStart', [ filters ] );
			}
			if ( c.showProcessing ) {
				// give it time for the processing icon to kick in
				setTimeout( function() {
					tsf.findRows( table, filters, combinedFilters );
					return false;
				}, 30 );
			} else {
				tsf.findRows( table, filters, combinedFilters );
				return false;
			}
		},
		hideFilters: function( c, $table ) {
			var timer,
				$row = ( $table || c.$table ).find( '.' + tscss.filterRow ).addClass( tscss.filterRowHide );
			$row
				.bind( 'mouseenter mouseleave', function( e ) {
					// save event object - http://bugs.jquery.com/ticket/12140
					var event = e,
						$filterRow = $( this );
					clearTimeout( timer );
					timer = setTimeout( function() {
						if ( /enter|over/.test( event.type ) ) {
							$filterRow.removeClass( tscss.filterRowHide );
						} else {
							// don't hide if input has focus
							// $( ':focus' ) needs jQuery 1.6+
							if ( $( document.activeElement ).closest( 'tr' )[0] !== $filterRow[0] ) {
								// don't hide row if any filter has a value
								if ( c.lastCombinedFilter === '' ) {
									$filterRow.addClass( tscss.filterRowHide );
								}
							}
						}
					}, 200 );
				})
				.find( 'input, select' ).bind( 'focus blur', function( e ) {
					var event = e,
						$row = $( this ).closest( 'tr' );
					clearTimeout( timer );
					timer = setTimeout( function() {
						clearTimeout( timer );
						// don't hide row if any filter has a value
						if ( ts.getFilters( c.$table ).join( '' ) === '' ) {
							$row.toggleClass( tscss.filterRowHide, event.type !== 'focus' );
						}
					}, 200 );
				});
		},
		defaultFilter: function( filter, mask ) {
			if ( filter === '' ) { return filter; }
			var regex = tsfRegex.iQuery,
				maskLen = mask.match( tsfRegex.igQuery ).length,
				query = maskLen > 1 ? $.trim( filter ).split( /\s/ ) : [ $.trim( filter ) ],
				len = query.length - 1,
				indx = 0,
				val = mask;
			if ( len < 1 && maskLen > 1 ) {
				// only one 'word' in query but mask has >1 slots
				query[1] = query[0];
			}
			// replace all {query} with query words...
			// if query = 'Bob', then convert mask from '!{query}' to '!Bob'
			// if query = 'Bob Joe Frank', then convert mask '{q} OR {q}' to 'Bob OR Joe OR Frank'
			while ( regex.test( val ) ) {
				val = val.replace( regex, query[indx++] || '' );
				if ( regex.test( val ) && indx < len && ( query[indx] || '' ) !== '' ) {
					val = mask.replace( regex, val );
				}
			}
			return val;
		},
		getLatestSearch: function( $input ) {
			if ( $input ) {
				return $input.sort( function( a, b ) {
					return $( b ).attr( 'data-lastSearchTime' ) - $( a ).attr( 'data-lastSearchTime' );
				});
			}
			return $input || $();
		},
		findRange: function( c, val, ignoreRanges ) {
			// look for multiple columns '1-3,4-6,8' in data-column
			var temp, ranges, range, start, end, singles, i, indx, len,
				columns = [];
			if ( /^[0-9]+$/.test( val ) ) {
				// always return an array
				return [ parseInt( val, 10 ) ];
			}
			// process column range
			if ( !ignoreRanges && /-/.test( val ) ) {
				ranges = val.match( /(\d+)\s*-\s*(\d+)/g );
				len = ranges ? ranges.length : 0;
				for ( indx = 0; indx < len; indx++ ) {
					range = ranges[indx].split( /\s*-\s*/ );
					start = parseInt( range[0], 10 ) || 0;
					end = parseInt( range[1], 10 ) || ( c.columns - 1 );
					if ( start > end ) {
						temp = start; start = end; end = temp; // swap
					}
					if ( end >= c.columns ) {
						end = c.columns - 1;
					}
					for ( ; start <= end; start++ ) {
						columns[ columns.length ] = start;
					}
					// remove processed range from val
					val = val.replace( ranges[ indx ], '' );
				}
			}
			// process single columns
			if ( !ignoreRanges && /,/.test( val ) ) {
				singles = val.split( /\s*,\s*/ );
				len = singles.length;
				for ( i = 0; i < len; i++ ) {
					if ( singles[ i ] !== '' ) {
						indx = parseInt( singles[ i ], 10 );
						if ( indx < c.columns ) {
							columns[ columns.length ] = indx;
						}
					}
				}
			}
			// return all columns
			if ( !columns.length ) {
				for ( indx = 0; indx < c.columns; indx++ ) {
					columns[ columns.length ] = indx;
				}
			}
			return columns;
		},
		getColumnElm: function( c, $elements, column ) {
			// data-column may contain multiple columns '1-3,5-6,8'
			// replaces: c.$filters.filter( '[data-column="' + column + '"]' );
			return $elements.filter( function() {
				var cols = tsf.findRange( c, $( this ).attr( 'data-column' ) );
				return $.inArray( column, cols ) > -1;
			});
		},
		multipleColumns: function( c, $input ) {
			// look for multiple columns '1-3,4-6,8' in data-column
			var wo = c.widgetOptions,
				// only target 'all' column inputs on initialization
				// & don't target 'all' column inputs if they don't exist
				targets = wo.filter_initialized || !$input.filter( wo.filter_anyColumnSelector ).length,
				val = $.trim( tsf.getLatestSearch( $input ).attr( 'data-column' ) || '' );
			return tsf.findRange( c, val, !targets );
		},
		processTypes: function( c, data, vars ) {
			var ffxn,
				filterMatched = null,
				matches = null;
			for ( ffxn in tsf.types ) {
				if ( $.inArray( ffxn, vars.excludeMatch ) < 0 && matches === null ) {
					matches = tsf.types[ffxn]( c, data, vars );
					if ( matches !== null ) {
						filterMatched = matches;
					}
				}
			}
			return filterMatched;
		},
		matchType: function( c, columnIndex ) {
			var isMatch,
				wo = c.widgetOptions,
				$el = c.$headerIndexed[ columnIndex ];
			// filter-exact > filter-match > filter_matchType for type
			if ( $el.hasClass( 'filter-exact' ) ) {
				isMatch = false;
			} else if ( $el.hasClass( 'filter-match' ) ) {
				isMatch = true;
			} else {
				// filter-select is not applied when filter_functions are used, so look for a select
				if ( wo.filter_columnFilters ) {
					$el = c.$filters
						.find( '.' + tscss.filter )
						.add( wo.filter_$externalFilters )
						.filter( '[data-column="' + columnIndex + '"]' );
				} else if ( wo.filter_$externalFilters ) {
					$el = wo.filter_$externalFilters.filter( '[data-column="' + columnIndex + '"]' );
				}
				isMatch = $el.length ?
					c.widgetOptions.filter_matchType[ ( $el[ 0 ].nodeName || '' ).toLowerCase() ] === 'match' :
					// default to exact, if no inputs found
					false;
			}
			return isMatch;
		},
		processRow: function( c, data, vars ) {
			var result, filterMatched,
				fxn, ffxn, txt,
				wo = c.widgetOptions,
				showRow = true,

				// if wo.filter_$anyMatch data-column attribute is changed dynamically
				// we don't want to do an "anyMatch" search on one column using data
				// for the entire row - see #998
				columnIndex = wo.filter_$anyMatch && wo.filter_$anyMatch.length ?
					// look for multiple columns '1-3,4-6,8'
					tsf.multipleColumns( c, wo.filter_$anyMatch ) :
					[];

			data.$cells = data.$row.children();
			if ( data.anyMatchFlag && columnIndex.length > 1 || data.anyMatchFilter ) {
				data.anyMatch = true;
				data.isMatch = true;
				data.rowArray = data.$cells.map( function( i ) {
					if ( $.inArray( i, columnIndex ) > -1 || data.anyMatchFilter ) {
						if ( data.parsed[ i ] ) {
							txt = data.cacheArray[ i ];
						} else {
							txt = data.rawArray[ i ];
							txt = $.trim( wo.filter_ignoreCase ? txt.toLowerCase() : txt );
							if ( c.sortLocaleCompare ) {
								txt = ts.replaceAccents( txt );
							}
						}
						return txt;
					}
				}).get();
				data.filter = data.anyMatchFilter;
				data.iFilter = data.iAnyMatchFilter;
				data.exact = data.rowArray.join( ' ' );
				data.iExact = wo.filter_ignoreCase ? data.exact.toLowerCase() : data.exact;
				data.cache = data.cacheArray.slice( 0, -1 ).join( ' ' );
				vars.excludeMatch = vars.noAnyMatch;
				filterMatched = tsf.processTypes( c, data, vars );
				if ( filterMatched !== null ) {
					showRow = filterMatched;
				} else {
					if ( wo.filter_startsWith ) {
						showRow = false;
						// data.rowArray may not contain all columns
						columnIndex = Math.min( c.columns, data.rowArray.length );
						while ( !showRow && columnIndex > 0 ) {
							columnIndex--;
							showRow = showRow || data.rowArray[ columnIndex ].indexOf( data.iFilter ) === 0;
						}
					} else {
						showRow = ( data.iExact + data.childRowText ).indexOf( data.iFilter ) >= 0;
					}
				}
				data.anyMatch = false;
				// no other filters to process
				if ( data.filters.join( '' ) === data.filter ) {
					return showRow;
				}
			}

			for ( columnIndex = 0; columnIndex < c.columns; columnIndex++ ) {
				data.filter = data.filters[ columnIndex ];
				data.index = columnIndex;

				// filter types to exclude, per column
				vars.excludeMatch = vars.excludeFilter[ columnIndex ];

				// ignore if filter is empty or disabled
				if ( data.filter ) {
					data.cache = data.cacheArray[ columnIndex ];
					result = data.parsed[ columnIndex ] ? data.cache : data.rawArray[ columnIndex ] || '';
					data.exact = c.sortLocaleCompare ? ts.replaceAccents( result ) : result; // issue #405
					data.iExact = !tsfRegex.type.test( typeof data.exact ) && wo.filter_ignoreCase ?
						data.exact.toLowerCase() : data.exact;
					data.isMatch = tsf.matchType( c, columnIndex );

					result = showRow; // if showRow is true, show that row

					// in case select filter option has a different value vs text 'a - z|A through Z'
					ffxn = wo.filter_columnFilters ?
						c.$filters.add( wo.filter_$externalFilters )
							.filter( '[data-column="' + columnIndex + '"]' )
							.find( 'select option:selected' )
							.attr( 'data-function-name' ) || '' : '';
					// replace accents - see #357
					if ( c.sortLocaleCompare ) {
						data.filter = ts.replaceAccents( data.filter );
					}

					// replace column specific default filters - see #1088
					if ( wo.filter_defaultFilter && tsfRegex.iQuery.test( vars.defaultColFilter[ columnIndex ] ) ) {
						data.filter = tsf.defaultFilter( data.filter, vars.defaultColFilter[ columnIndex ] );
					}

					// data.iFilter = case insensitive ( if wo.filter_ignoreCase is true ),
					// data.filter = case sensitive
					data.iFilter = wo.filter_ignoreCase ? ( data.filter || '' ).toLowerCase() : data.filter;
					fxn = vars.functions[ columnIndex ];
					filterMatched = null;
					if ( fxn ) {
						if ( fxn === true ) {
							// default selector uses exact match unless 'filter-match' class is found
							filterMatched = data.isMatch ?
								// data.iExact may be a number
								( '' + data.iExact ).search( data.iFilter ) >= 0 :
								data.filter === data.exact;
						} else if ( typeof fxn === 'function' ) {
							// filter callback( exact cell content, parser normalized content,
							// filter input value, column index, jQuery row object )
							filterMatched = fxn( data.exact, data.cache, data.filter, columnIndex, data.$row, c, data );
						} else if ( typeof fxn[ ffxn || data.filter ] === 'function' ) {
							// selector option function
							txt = ffxn || data.filter;
							filterMatched =
								fxn[ txt ]( data.exact, data.cache, data.filter, columnIndex, data.$row, c, data );
						}
					}
					if ( filterMatched === null ) {
						// cycle through the different filters
						// filters return a boolean or null if nothing matches
						filterMatched = tsf.processTypes( c, data, vars );
						if ( filterMatched !== null ) {
							result = filterMatched;
						// Look for match, and add child row data for matching
						} else {
							txt = ( data.iExact + data.childRowText ).indexOf( tsf.parseFilter( c, data.iFilter, data ) );
							result = ( ( !wo.filter_startsWith && txt >= 0 ) || ( wo.filter_startsWith && txt === 0 ) );
						}
					} else {
						result = filterMatched;
					}
					showRow = ( result ) ? showRow : false;
				}
			}
			return showRow;
		},
		findRows: function( table, filters, combinedFilters ) {
			if ( table.config.lastCombinedFilter === combinedFilters ||
				!table.config.widgetOptions.filter_initialized ) {
				return;
			}
			var len, norm_rows, rowData, $rows, $row, rowIndex, tbodyIndex, $tbody, columnIndex,
				isChild, childRow, lastSearch, showRow, showParent, time, val, indx,
				notFiltered, searchFiltered, query, injected, res, id, txt,
				storedFilters = $.extend( [], filters ),
				c = table.config,
				wo = c.widgetOptions,
				// data object passed to filters; anyMatch is a flag for the filters
				data = {
					anyMatch: false,
					filters: filters,
					// regex filter type cache
					filter_regexCache : []
				},
				vars = {
					// anyMatch really screws up with these types of filters
					noAnyMatch: [ 'range', 'notMatch',  'operators' ],
					// cache filter variables that use ts.getColumnData in the main loop
					functions : [],
					excludeFilter : [],
					defaultColFilter : [],
					defaultAnyFilter : ts.getColumnData( table, wo.filter_defaultFilter, c.columns, true ) || ''
				};

			// parse columns after formatter, in case the class is added at that point
			data.parsed = [];
			for ( columnIndex = 0; columnIndex < c.columns; columnIndex++ ) {
				data.parsed[ columnIndex ] = wo.filter_useParsedData ||
					// parser has a "parsed" parameter
					( c.parsers && c.parsers[ columnIndex ] && c.parsers[ columnIndex ].parsed ||
					// getData may not return 'parsed' if other 'filter-' class names exist
					// ( e.g. <th class="filter-select filter-parsed"> )
					ts.getData && ts.getData( c.$headerIndexed[ columnIndex ],
						ts.getColumnData( table, c.headers, columnIndex ), 'filter' ) === 'parsed' ||
					c.$headerIndexed[ columnIndex ].hasClass( 'filter-parsed' ) );

				vars.functions[ columnIndex ] =
					ts.getColumnData( table, wo.filter_functions, columnIndex ) ||
					c.$headerIndexed[ columnIndex ].hasClass( 'filter-select' );
				vars.defaultColFilter[ columnIndex ] =
					ts.getColumnData( table, wo.filter_defaultFilter, columnIndex ) || '';
				vars.excludeFilter[ columnIndex ] =
					( ts.getColumnData( table, wo.filter_excludeFilter, columnIndex, true ) || '' ).split( /\s+/ );
			}

			if ( c.debug ) {
				console.log( 'Filter: Starting filter widget search', filters );
				time = new Date();
			}
			// filtered rows count
			c.filteredRows = 0;
			c.totalRows = 0;
			// combindedFilters are undefined on init
			combinedFilters = ( storedFilters || [] ).join( '' );

			for ( tbodyIndex = 0; tbodyIndex < c.$tbodies.length; tbodyIndex++ ) {
				$tbody = ts.processTbody( table, c.$tbodies.eq( tbodyIndex ), true );
				// skip child rows & widget added ( removable ) rows - fixes #448 thanks to @hempel!
				// $rows = $tbody.children( 'tr' ).not( c.selectorRemove );
				columnIndex = c.columns;
				// convert stored rows into a jQuery object
				norm_rows = c.cache[ tbodyIndex ].normalized;
				$rows = $( $.map( norm_rows, function( el ) {
					return el[ columnIndex ].$row.get();
				}) );

				if ( combinedFilters === '' || wo.filter_serversideFiltering ) {
					$rows
						.removeClass( wo.filter_filteredRow )
						.not( '.' + c.cssChildRow )
						.css( 'display', '' );
				} else {
					// filter out child rows
					$rows = $rows.not( '.' + c.cssChildRow );
					len = $rows.length;

					if ( ( wo.filter_$anyMatch && wo.filter_$anyMatch.length ) ||
						typeof filters[c.columns] !== 'undefined' ) {
						data.anyMatchFlag = true;
						data.anyMatchFilter = '' + (
							filters[ c.columns ] ||
							wo.filter_$anyMatch && tsf.getLatestSearch( wo.filter_$anyMatch ).val() ||
							''
						);
						if ( wo.filter_columnAnyMatch ) {
							// specific columns search
							query = data.anyMatchFilter.split( tsfRegex.andSplit );
							injected = false;
							for ( indx = 0; indx < query.length; indx++ ) {
								res = query[ indx ].split( ':' );
								if ( res.length > 1 ) {
									// make the column a one-based index ( non-developers start counting from one :P )
									id = parseInt( res[0], 10 ) - 1;
									if ( id >= 0 && id < c.columns ) { // if id is an integer
										filters[ id ] = res[1];
										query.splice( indx, 1 );
										indx--;
										injected = true;
									}
								}
							}
							if ( injected ) {
								data.anyMatchFilter = query.join( ' && ' );
							}
						}
					}

					// optimize searching only through already filtered rows - see #313
					searchFiltered = wo.filter_searchFiltered;
					lastSearch = c.lastSearch || c.$table.data( 'lastSearch' ) || [];
					if ( searchFiltered ) {
						// cycle through all filters; include last ( columnIndex + 1 = match any column ). Fixes #669
						for ( indx = 0; indx < columnIndex + 1; indx++ ) {
							val = filters[indx] || '';
							// break out of loop if we've already determined not to search filtered rows
							if ( !searchFiltered ) { indx = columnIndex; }
							// search already filtered rows if...
							searchFiltered = searchFiltered && lastSearch.length &&
								// there are no changes from beginning of filter
								val.indexOf( lastSearch[indx] || '' ) === 0 &&
								// if there is NOT a logical 'or', or range ( 'to' or '-' ) in the string
								!tsfRegex.alreadyFiltered.test( val ) &&
								// if we are not doing exact matches, using '|' ( logical or ) or not '!'
								!tsfRegex.exactTest.test( val ) &&
								// don't search only filtered if the value is negative
								// ( '> -10' => '> -100' will ignore hidden rows )
								!( tsfRegex.isNeg1.test( val ) || tsfRegex.isNeg2.test( val ) ) &&
								// if filtering using a select without a 'filter-match' class ( exact match ) - fixes #593
								!( val !== '' && c.$filters && c.$filters.filter( '[data-column="' + indx + '"]' ).find( 'select' ).length &&
									!tsf.matchType( c, indx ) );
						}
					}
					notFiltered = $rows.not( '.' + wo.filter_filteredRow ).length;
					// can't search when all rows are hidden - this happens when looking for exact matches
					if ( searchFiltered && notFiltered === 0 ) { searchFiltered = false; }
					if ( c.debug ) {
						console.log( 'Filter: Searching through ' +
							( searchFiltered && notFiltered < len ? notFiltered : 'all' ) + ' rows' );
					}
					if ( data.anyMatchFlag ) {
						if ( c.sortLocaleCompare ) {
							// replace accents
							data.anyMatchFilter = ts.replaceAccents( data.anyMatchFilter );
						}
						if ( wo.filter_defaultFilter && tsfRegex.iQuery.test( vars.defaultAnyFilter ) ) {
							data.anyMatchFilter = tsf.defaultFilter( data.anyMatchFilter, vars.defaultAnyFilter );
							// clear search filtered flag because default filters are not saved to the last search
							searchFiltered = false;
						}
						// make iAnyMatchFilter lowercase unless both filter widget & core ignoreCase options are true
						// when c.ignoreCase is true, the cache contains all lower case data
						data.iAnyMatchFilter = !( wo.filter_ignoreCase && c.ignoreCase ) ?
							data.anyMatchFilter :
							data.anyMatchFilter.toLowerCase();
					}

					// loop through the rows
					for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {

						txt = $rows[ rowIndex ].className;
						// the first row can never be a child row
						isChild = rowIndex && tsfRegex.child.test( txt );
						// skip child rows & already filtered rows
						if ( isChild || ( searchFiltered && tsfRegex.filtered.test( txt ) ) ) {
							continue;
						}

						data.$row = $rows.eq( rowIndex );
						data.cacheArray = norm_rows[ rowIndex ];
						rowData = data.cacheArray[ c.columns ];
						data.rawArray = rowData.raw;
						data.childRowText = '';

						if ( !wo.filter_childByColumn ) {
							txt = '';
							// child row cached text
							childRow = rowData.child;
							// so, if 'table.config.widgetOptions.filter_childRows' is true and there is
							// a match anywhere in the child row, then it will make the row visible
							// checked here so the option can be changed dynamically
							for ( indx = 0; indx < childRow.length; indx++ ) {
								txt += ' ' + childRow[indx].join( ' ' ) || '';
							}
							data.childRowText = wo.filter_childRows ?
								( wo.filter_ignoreCase ? txt.toLowerCase() : txt ) :
								'';
						}

						showRow = false;
						showParent = tsf.processRow( c, data, vars );
						$row = rowData.$row;

						// don't pass reference to val
						val = showParent ? true : false;
						childRow = rowData.$row.filter( ':gt(0)' );
						if ( wo.filter_childRows && childRow.length ) {
							if ( wo.filter_childByColumn ) {
								if ( !wo.filter_childWithSibs ) {
									// hide all child rows
									childRow.addClass( wo.filter_filteredRow );
									// if only showing resulting child row, only include parent
									$row = $row.eq( 0 );
								}
								// cycle through each child row
								for ( indx = 0; indx < childRow.length; indx++ ) {
									data.$row = childRow.eq( indx );
									data.cacheArray = rowData.child[ indx ];
									data.rawArray = data.cacheArray;
									val = tsf.processRow( c, data, vars );
									// use OR comparison on child rows
									showRow = showRow || val;
									if ( !wo.filter_childWithSibs && val ) {
										childRow.eq( indx ).removeClass( wo.filter_filteredRow );
									}
								}
							}
							// keep parent row match even if no child matches... see #1020
							showRow = showRow || showParent;
						} else {
							showRow = val;
						}
						$row
							.toggleClass( wo.filter_filteredRow, !showRow )[0]
							.display = showRow ? '' : 'none';
					}
				}
				c.filteredRows += $rows.not( '.' + wo.filter_filteredRow ).length;
				c.totalRows += $rows.length;
				ts.processTbody( table, $tbody, false );
			}
			c.lastCombinedFilter = combinedFilters; // save last search
			// don't save 'filters' directly since it may have altered ( AnyMatch column searches )
			c.lastSearch = storedFilters;
			c.$table.data( 'lastSearch', storedFilters );
			if ( wo.filter_saveFilters && ts.storage ) {
				ts.storage( table, 'tablesorter-filters', tsf.processFilters( storedFilters, true ) );
			}
			if ( c.debug ) {
				console.log( 'Completed filter widget search' + ts.benchmark(time) );
			}
			if ( wo.filter_initialized ) {
				c.$table.triggerHandler( 'filterBeforeEnd', c );
				c.$table.triggerHandler( 'filterEnd', c );
			}
			setTimeout( function() {
				ts.applyWidget( c.table ); // make sure zebra widget is applied
			}, 0 );
		},
		getOptionSource: function( table, column, onlyAvail ) {
			table = $( table )[0];
			var c = table.config,
				wo = c.widgetOptions,
				arry = false,
				source = wo.filter_selectSource,
				last = c.$table.data( 'lastSearch' ) || [],
				fxn = typeof source === 'function' ? true : ts.getColumnData( table, source, column );

			if ( onlyAvail && last[column] !== '' ) {
				onlyAvail = false;
			}

			// filter select source option
			if ( fxn === true ) {
				// OVERALL source
				arry = source( table, column, onlyAvail );
			} else if ( fxn instanceof $ || ( $.type( fxn ) === 'string' && fxn.indexOf( '</option>' ) >= 0 ) ) {
				// selectSource is a jQuery object or string of options
				return fxn;
			} else if ( $.isArray( fxn ) ) {
				arry = fxn;
			} else if ( $.type( source ) === 'object' && fxn ) {
				// custom select source function for a SPECIFIC COLUMN
				arry = fxn( table, column, onlyAvail );
			}
			if ( arry === false ) {
				// fall back to original method
				arry = tsf.getOptions( table, column, onlyAvail );
			}

			return tsf.processOptions( table, column, arry );

		},
		processOptions: function( table, column, arry ) {
			if ( !$.isArray( arry ) ) {
				return false;
			}
			table = $( table )[0];
			var cts, txt, indx, len, parsedTxt, str,
				c = table.config,
				validColumn = typeof column !== 'undefined' && column !== null && column >= 0 && column < c.columns,
				parsed = [];
			// get unique elements and sort the list
			// if $.tablesorter.sortText exists ( not in the original tablesorter ),
			// then natural sort the list otherwise use a basic sort
			arry = $.grep( arry, function( value, indx ) {
				if ( value.text ) {
					return true;
				}
				return $.inArray( value, arry ) === indx;
			});
			if ( validColumn && c.$headerIndexed[ column ].hasClass( 'filter-select-nosort' ) ) {
				// unsorted select options
				return arry;
			} else {
				len = arry.length;
				// parse select option values
				for ( indx = 0; indx < len; indx++ ) {
					txt = arry[ indx ];
					// check for object
					str = txt.text ? txt.text : txt;
					// sortNatural breaks if you don't pass it strings
					parsedTxt = ( validColumn && c.parsers && c.parsers.length &&
						c.parsers[ column ].format( str, table, [], column ) || str ).toString();
					parsedTxt = c.widgetOptions.filter_ignoreCase ? parsedTxt.toLowerCase() : parsedTxt;
					// parse array data using set column parser; this DOES NOT pass the original
					// table cell to the parser format function
					if ( txt.text ) {
						txt.parsed = parsedTxt;
						parsed[ parsed.length ] = txt;
					} else {
						parsed[ parsed.length ] = {
							text : txt,
							// check parser length - fixes #934
							parsed : parsedTxt
						};
					}
				}
				// sort parsed select options
				cts = c.textSorter || '';
				parsed.sort( function( a, b ) {
					var x = a.parsed,
						y = b.parsed;
					if ( validColumn && typeof cts === 'function' ) {
						// custom OVERALL text sorter
						return cts( x, y, true, column, table );
					} else if ( validColumn && typeof cts === 'object' && cts.hasOwnProperty( column ) ) {
						// custom text sorter for a SPECIFIC COLUMN
						return cts[column]( x, y, true, column, table );
					} else if ( ts.sortNatural ) {
						// fall back to natural sort
						return ts.sortNatural( x, y );
					}
					// using an older version! do a basic sort
					return true;
				});
				// rebuild arry from sorted parsed data
				arry = [];
				len = parsed.length;
				for ( indx = 0; indx < len; indx++ ) {
					arry[ arry.length ] = parsed[indx];
				}
				return arry;
			}
		},
		getOptions: function( table, column, onlyAvail ) {
			table = $( table )[0];
			var rowIndex, tbodyIndex, len, row, cache, indx, child, childLen,
				c = table.config,
				wo = c.widgetOptions,
				arry = [];
			for ( tbodyIndex = 0; tbodyIndex < c.$tbodies.length; tbodyIndex++ ) {
				cache = c.cache[tbodyIndex];
				len = c.cache[tbodyIndex].normalized.length;
				// loop through the rows
				for ( rowIndex = 0; rowIndex < len; rowIndex++ ) {
					// get cached row from cache.row ( old ) or row data object
					// ( new; last item in normalized array )
					row = cache.row ?
						cache.row[ rowIndex ] :
						cache.normalized[ rowIndex ][ c.columns ].$row[0];
					// check if has class filtered
					if ( onlyAvail && row.className.match( wo.filter_filteredRow ) ) {
						continue;
					}
					// get non-normalized cell content
					if ( wo.filter_useParsedData ||
						c.parsers[column].parsed ||
						c.$headerIndexed[column].hasClass( 'filter-parsed' ) ) {
						arry[ arry.length ] = '' + cache.normalized[ rowIndex ][ column ];
						// child row parsed data
						if ( wo.filter_childRows && wo.filter_childByColumn ) {
							childLen = cache.normalized[ rowIndex ][ c.columns ].$row.length - 1;
							for ( indx = 0; indx < childLen; indx++ ) {
								arry[ arry.length ] = '' + cache.normalized[ rowIndex ][ c.columns ].child[ indx ][ column ];
							}
						}
					} else {
						// get raw cached data instead of content directly from the cells
						arry[ arry.length ] = cache.normalized[ rowIndex ][ c.columns ].raw[ column ];
						// child row unparsed data
						if ( wo.filter_childRows && wo.filter_childByColumn ) {
							childLen = cache.normalized[ rowIndex ][ c.columns ].$row.length;
							for ( indx = 1; indx < childLen; indx++ ) {
								child =  cache.normalized[ rowIndex ][ c.columns ].$row.eq( indx ).children().eq( column );
								arry[ arry.length ] = '' + ts.getElementText( c, child, column );
							}
						}
					}
				}
			}
			return arry;
		},
		buildSelect: function( table, column, arry, updating, onlyAvail ) {
			table = $( table )[0];
			column = parseInt( column, 10 );
			if ( !table.config.cache || $.isEmptyObject( table.config.cache ) ) {
				return;
			}

			var indx, val, txt, t, $filters, $filter, option,
				c = table.config,
				wo = c.widgetOptions,
				node = c.$headerIndexed[ column ],
				// t.data( 'placeholder' ) won't work in jQuery older than 1.4.3
				options = '<option value="">' +
					( node.data( 'placeholder' ) ||
						node.attr( 'data-placeholder' ) ||
						wo.filter_placeholder.select || ''
					) + '</option>',
				// Get curent filter value
				currentValue = c.$table
					.find( 'thead' )
					.find( 'select.' + tscss.filter + '[data-column="' + column + '"]' )
					.val();

			// nothing included in arry ( external source ), so get the options from
			// filter_selectSource or column data
			if ( typeof arry === 'undefined' || arry === '' ) {
				arry = tsf.getOptionSource( table, column, onlyAvail );
			}

			if ( $.isArray( arry ) ) {
				// build option list
				for ( indx = 0; indx < arry.length; indx++ ) {
					option = arry[ indx ];
					if ( option.text ) {
						// OBJECT!! add data-function-name in case the value is set in filter_functions
						option['data-function-name'] = typeof option.value === 'undefined' ? option.text : option.value;

						// support jQuery < v1.8, otherwise the below code could be shortened to
						// options += $( '<option>', option )[ 0 ].outerHTML;
						options += '<option';
						for ( val in option ) {
							if ( option.hasOwnProperty( val ) && val !== 'text' ) {
								options += ' ' + val + '="' + option[ val ] + '"';
							}
						}
						if ( !option.value ) {
							options += ' value="' + option.text + '"';
						}
						options += '>' + option.text + '</option>';
						// above code is needed in jQuery < v1.8

						// make sure we don't turn an object into a string (objects without a "text" property)
					} else if ( '' + option !== '[object Object]' ) {
						txt = option = ( '' + option ).replace( tsfRegex.quote, '&quot;' );
						val = txt;
						// allow including a symbol in the selectSource array
						// 'a-z|A through Z' so that 'a-z' becomes the option value
						// and 'A through Z' becomes the option text
						if ( txt.indexOf( wo.filter_selectSourceSeparator ) >= 0 ) {
							t = txt.split( wo.filter_selectSourceSeparator );
							val = t[0];
							txt = t[1];
						}
						// replace quotes - fixes #242 & ignore empty strings
						// see http://stackoverflow.com/q/14990971/145346
						options += option !== '' ?
							'<option ' +
								( val === txt ? '' : 'data-function-name="' + option + '" ' ) +
								'value="' + val + '">' + txt +
							'</option>' : '';
					}
				}
				// clear arry so it doesn't get appended twice
				arry = [];
			}

			// update all selects in the same column ( clone thead in sticky headers &
			// any external selects ) - fixes 473
			$filters = ( c.$filters ? c.$filters : c.$table.children( 'thead' ) )
				.find( '.' + tscss.filter );
			if ( wo.filter_$externalFilters ) {
				$filters = $filters && $filters.length ?
					$filters.add( wo.filter_$externalFilters ) :
					wo.filter_$externalFilters;
			}
			$filter = $filters.filter( 'select[data-column="' + column + '"]' );

			// make sure there is a select there!
			if ( $filter.length ) {
				$filter[ updating ? 'html' : 'append' ]( options );
				if ( !$.isArray( arry ) ) {
					// append options if arry is provided externally as a string or jQuery object
					// options ( default value ) was already added
					$filter.append( arry ).val( currentValue );
				}
				$filter.val( currentValue );
			}
		},
		buildDefault: function( table, updating ) {
			var columnIndex, $header, noSelect,
				c = table.config,
				wo = c.widgetOptions,
				columns = c.columns;
			// build default select dropdown
			for ( columnIndex = 0; columnIndex < columns; columnIndex++ ) {
				$header = c.$headerIndexed[columnIndex];
				noSelect = !( $header.hasClass( 'filter-false' ) || $header.hasClass( 'parser-false' ) );
				// look for the filter-select class; build/update it if found
				if ( ( $header.hasClass( 'filter-select' ) ||
					ts.getColumnData( table, wo.filter_functions, columnIndex ) === true ) && noSelect ) {
					tsf.buildSelect( table, columnIndex, '', updating, $header.hasClass( wo.filter_onlyAvail ) );
				}
			}
		}
	};

	// filter regex variable
	tsfRegex = tsf.regex;

	ts.getFilters = function( table, getRaw, setFilters, skipFirst ) {
		var i, $filters, $column, cols,
			filters = false,
			c = table ? $( table )[0].config : '',
			wo = c ? c.widgetOptions : '';
		if ( ( getRaw !== true && wo && !wo.filter_columnFilters ) ||
			// setFilters called, but last search is exactly the same as the current
			// fixes issue #733 & #903 where calling update causes the input values to reset
			( $.isArray(setFilters) && setFilters.join('') === c.lastCombinedFilter ) ) {
			return $( table ).data( 'lastSearch' );
		}
		if ( c ) {
			if ( c.$filters ) {
				$filters = c.$filters.find( '.' + tscss.filter );
			}
			if ( wo.filter_$externalFilters ) {
				$filters = $filters && $filters.length ?
					$filters.add( wo.filter_$externalFilters ) :
					wo.filter_$externalFilters;
			}
			if ( $filters && $filters.length ) {
				filters = setFilters || [];
				for ( i = 0; i < c.columns + 1; i++ ) {
					cols = ( i === c.columns ?
						// 'all' columns can now include a range or set of columms ( data-column='0-2,4,6-7' )
						wo.filter_anyColumnSelector + ',' + wo.filter_multipleColumnSelector :
						'[data-column="' + i + '"]' );
					$column = $filters.filter( cols );
					if ( $column.length ) {
						// move the latest search to the first slot in the array
						$column = tsf.getLatestSearch( $column );
						if ( $.isArray( setFilters ) ) {
							// skip first ( latest input ) to maintain cursor position while typing
							if ( skipFirst && $column.length > 1 ) {
								$column = $column.slice( 1 );
							}
							if ( i === c.columns ) {
								// prevent data-column='all' from filling data-column='0,1' ( etc )
								cols = $column.filter( wo.filter_anyColumnSelector );
								$column = cols.length ? cols : $column;
							}
							$column
								.val( setFilters[ i ] )
								// must include a namespace here; but not c.namespace + 'filter'?
								.trigger( 'change' + c.namespace );
						} else {
							filters[i] = $column.val() || '';
							// don't change the first... it will move the cursor
							if ( i === c.columns ) {
								// don't update range columns from 'all' setting
								$column
									.slice( 1 )
									.filter( '[data-column*="' + $column.attr( 'data-column' ) + '"]' )
									.val( filters[ i ] );
							} else {
								$column
									.slice( 1 )
									.val( filters[ i ] );
							}
						}
						// save any match input dynamically
						if ( i === c.columns && $column.length ) {
							wo.filter_$anyMatch = $column;
						}
					}
				}
			}
		}
		if ( filters.length === 0 ) {
			filters = false;
		}
		return filters;
	};

	ts.setFilters = function( table, filter, apply, skipFirst ) {
		var c = table ? $( table )[0].config : '',
			valid = ts.getFilters( table, true, filter, skipFirst );
		// default apply to "true"
		if ( typeof apply === 'undefined' ) {
			apply = true;
		}
		if ( c && apply ) {
			// ensure new set filters are applied, even if the search is the same
			c.lastCombinedFilter = null;
			c.lastSearch = [];
			tsf.searching( c.table, filter, skipFirst );
			c.$table.triggerHandler( 'filterFomatterUpdate' );
		}
		return !!valid;
	};

})( jQuery );

/*! Widget: stickyHeaders - updated 5/1/2016 (v2.26.0) *//*
 * Requires tablesorter v2.8+ and jQuery 1.4.3+
 * by Rob Garrison
 */
;(function ($, window) {
	'use strict';
	var ts = $.tablesorter || {};

	$.extend(ts.css, {
		sticky    : 'tablesorter-stickyHeader', // stickyHeader
		stickyVis : 'tablesorter-sticky-visible',
		stickyHide: 'tablesorter-sticky-hidden',
		stickyWrap: 'tablesorter-sticky-wrapper'
	});

	// Add a resize event to table headers
	ts.addHeaderResizeEvent = function(table, disable, settings) {
		table = $(table)[0]; // make sure we're using a dom element
		if ( !table.config ) { return; }
		var defaults = {
				timer : 250
			},
			options = $.extend({}, defaults, settings),
			c = table.config,
			wo = c.widgetOptions,
			checkSizes = function( triggerEvent ) {
				var index, headers, $header, sizes, width, height,
					len = c.$headers.length;
				wo.resize_flag = true;
				headers = [];
				for ( index = 0; index < len; index++ ) {
					$header = c.$headers.eq( index );
					sizes = $header.data( 'savedSizes' ) || [ 0, 0 ]; // fixes #394
					width = $header[0].offsetWidth;
					height = $header[0].offsetHeight;
					if ( width !== sizes[0] || height !== sizes[1] ) {
						$header.data( 'savedSizes', [ width, height ] );
						headers.push( $header[0] );
					}
				}
				if ( headers.length && triggerEvent !== false ) {
					c.$table.triggerHandler( 'resize', [ headers ] );
				}
				wo.resize_flag = false;
			};
		clearInterval(wo.resize_timer);
		if (disable) {
			wo.resize_flag = false;
			return false;
		}
		checkSizes( false );
		wo.resize_timer = setInterval(function() {
			if (wo.resize_flag) { return; }
			checkSizes();
		}, options.timer);
	};

	// Sticky headers based on this awesome article:
	// http://css-tricks.com/13465-persistent-headers/
	// and https://github.com/jmosbech/StickyTableHeaders by Jonas Mosbech
	// **************************
	ts.addWidget({
		id: 'stickyHeaders',
		priority: 60, // sticky widget must be initialized after the filter widget!
		options: {
			stickyHeaders : '',       // extra class name added to the sticky header row
			stickyHeaders_attachTo : null, // jQuery selector or object to attach sticky header to
			stickyHeaders_xScroll : null, // jQuery selector or object to monitor horizontal scroll position (defaults: xScroll > attachTo > window)
			stickyHeaders_yScroll : null, // jQuery selector or object to monitor vertical scroll position (defaults: yScroll > attachTo > window)
			stickyHeaders_offset : 0, // number or jquery selector targeting the position:fixed element
			stickyHeaders_filteredToTop: true, // scroll table top into view after filtering
			stickyHeaders_cloneId : '-sticky', // added to table ID, if it exists
			stickyHeaders_addResizeEvent : true, // trigger 'resize' event on headers
			stickyHeaders_includeCaption : true, // if false and a caption exist, it won't be included in the sticky header
			stickyHeaders_zIndex : 2 // The zIndex of the stickyHeaders, allows the user to adjust this to their needs
		},
		format: function(table, c, wo) {
			// filter widget doesn't initialize on an empty table. Fixes #449
			if ( c.$table.hasClass('hasStickyHeaders') || ($.inArray('filter', c.widgets) >= 0 && !c.$table.hasClass('hasFilters')) ) {
				return;
			}
			var index, len, $t,
				$table = c.$table,
				// add position: relative to attach element, hopefully it won't cause trouble.
				$attach = $(wo.stickyHeaders_attachTo),
				namespace = c.namespace + 'stickyheaders ',
				// element to watch for the scroll event
				$yScroll = $(wo.stickyHeaders_yScroll || wo.stickyHeaders_attachTo || window),
				$xScroll = $(wo.stickyHeaders_xScroll || wo.stickyHeaders_attachTo || window),
				$thead = $table.children('thead:first'),
				$header = $thead.children('tr').not('.sticky-false').children(),
				$tfoot = $table.children('tfoot'),
				$stickyOffset = isNaN(wo.stickyHeaders_offset) ? $(wo.stickyHeaders_offset) : '',
				stickyOffset = $stickyOffset.length ? $stickyOffset.height() || 0 : parseInt(wo.stickyHeaders_offset, 10) || 0,
				// is this table nested? If so, find parent sticky header wrapper (div, not table)
				$nestedSticky = $table.parent().closest('.' + ts.css.table).hasClass('hasStickyHeaders') ?
					$table.parent().closest('table.tablesorter')[0].config.widgetOptions.$sticky.parent() : [],
				nestedStickyTop = $nestedSticky.length ? $nestedSticky.height() : 0,
				// clone table, then wrap to make sticky header
				$stickyTable = wo.$sticky = $table.clone()
					.addClass('containsStickyHeaders ' + ts.css.sticky + ' ' + wo.stickyHeaders + ' ' + c.namespace.slice(1) + '_extra_table' )
					.wrap('<div class="' + ts.css.stickyWrap + '">'),
				$stickyWrap = $stickyTable.parent()
					.addClass(ts.css.stickyHide)
					.css({
						position   : $attach.length ? 'absolute' : 'fixed',
						padding    : parseInt( $stickyTable.parent().parent().css('padding-left'), 10 ),
						top        : stickyOffset + nestedStickyTop,
						left       : 0,
						visibility : 'hidden',
						zIndex     : wo.stickyHeaders_zIndex || 2
					}),
				$stickyThead = $stickyTable.children('thead:first'),
				$stickyCells,
				laststate = '',
				spacing = 0,
				setWidth = function($orig, $clone){
					var index, width, border, $cell, $this,
						$cells = $orig.filter(':visible'),
						len = $cells.length;
					for ( index = 0; index < len; index++ ) {
						$cell = $clone.filter(':visible').eq(index);
						$this = $cells.eq(index);
						// code from https://github.com/jmosbech/StickyTableHeaders
						if ($this.css('box-sizing') === 'border-box') {
							width = $this.outerWidth();
						} else {
							if ($cell.css('border-collapse') === 'collapse') {
								if (window.getComputedStyle) {
									width = parseFloat( window.getComputedStyle($this[0], null).width );
								} else {
									// ie8 only
									border = parseFloat( $this.css('border-width') );
									width = $this.outerWidth() - parseFloat( $this.css('padding-left') ) - parseFloat( $this.css('padding-right') ) - border;
								}
							} else {
								width = $this.width();
							}
						}
						$cell.css({
							'width': width,
							'min-width': width,
							'max-width': width
						});
					}
				},
				resizeHeader = function() {
					stickyOffset = $stickyOffset.length ? $stickyOffset.height() || 0 : parseInt(wo.stickyHeaders_offset, 10) || 0;
					spacing = 0;
					$stickyWrap.css({
						left : $attach.length ? parseInt($attach.css('padding-left'), 10) || 0 :
								$table.offset().left - parseInt($table.css('margin-left'), 10) - $xScroll.scrollLeft() - spacing,
						width: $table.outerWidth()
					});
					setWidth( $table, $stickyTable );
					setWidth( $header, $stickyCells );
				},
				scrollSticky = function( resizing ) {
					if (!$table.is(':visible')) { return; } // fixes #278
					// Detect nested tables - fixes #724
					nestedStickyTop = $nestedSticky.length ? $nestedSticky.offset().top - $yScroll.scrollTop() + $nestedSticky.height() : 0;
					var offset = $table.offset(),
						yWindow = $.isWindow( $yScroll[0] ), // $.isWindow needs jQuery 1.4.3
						xWindow = $.isWindow( $xScroll[0] ),
						attachTop = $attach.length ?
							( yWindow ? $yScroll.scrollTop() : $yScroll.offset().top ) :
							$yScroll.scrollTop(),
						captionHeight = wo.stickyHeaders_includeCaption ? 0 : $table.children( 'caption' ).height() || 0,
						scrollTop = attachTop + stickyOffset + nestedStickyTop - captionHeight,
						tableHeight = $table.height() - ($stickyWrap.height() + ($tfoot.height() || 0)) - captionHeight,
						isVisible = ( scrollTop > offset.top ) && ( scrollTop < offset.top + tableHeight ) ? 'visible' : 'hidden',
						cssSettings = { visibility : isVisible };
					if ($attach.length) {
						cssSettings.top = yWindow ? scrollTop - $attach.offset().top : $attach.scrollTop();
					}
					if (xWindow) {
						// adjust when scrolling horizontally - fixes issue #143
						cssSettings.left = $table.offset().left - parseInt($table.css('margin-left'), 10) - $xScroll.scrollLeft() - spacing;
					}
					if ($nestedSticky.length) {
						cssSettings.top = ( cssSettings.top || 0 ) + stickyOffset + nestedStickyTop;
					}
					$stickyWrap
						.removeClass( ts.css.stickyVis + ' ' + ts.css.stickyHide )
						.addClass( isVisible === 'visible' ? ts.css.stickyVis : ts.css.stickyHide )
						.css(cssSettings);
					if (isVisible !== laststate || resizing) {
						// make sure the column widths match
						resizeHeader();
						laststate = isVisible;
					}
				};
			// only add a position relative if a position isn't already defined
			if ($attach.length && !$attach.css('position')) {
				$attach.css('position', 'relative');
			}
			// fix clone ID, if it exists - fixes #271
			if ($stickyTable.attr('id')) { $stickyTable[0].id += wo.stickyHeaders_cloneId; }
			// clear out cloned table, except for sticky header
			// include caption & filter row (fixes #126 & #249) - don't remove cells to get correct cell indexing
			$stickyTable.find('thead:gt(0), tr.sticky-false').hide();
			$stickyTable.find('tbody, tfoot').remove();
			$stickyTable.find('caption').toggle(wo.stickyHeaders_includeCaption);
			// issue #172 - find td/th in sticky header
			$stickyCells = $stickyThead.children().children();
			$stickyTable.css({ height:0, width:0, margin: 0 });
			// remove resizable block
			$stickyCells.find('.' + ts.css.resizer).remove();
			// update sticky header class names to match real header after sorting
			$table
				.addClass('hasStickyHeaders')
				.bind('pagerComplete' + namespace, function() {
					resizeHeader();
				});

			ts.bindEvents(table, $stickyThead.children().children('.' + ts.css.header));

			// add stickyheaders AFTER the table. If the table is selected by ID, the original one (first) will be returned.
			$table.after( $stickyWrap );

			// onRenderHeader is defined, we need to do something about it (fixes #641)
			if (c.onRenderHeader) {
				$t = $stickyThead.children('tr').children();
				len = $t.length;
				for ( index = 0; index < len; index++ ) {
					// send second parameter
					c.onRenderHeader.apply( $t.eq( index ), [ index, c, $stickyTable ] );
				}
			}

			// make it sticky!
			$xScroll.add($yScroll)
				.unbind( ('scroll resize '.split(' ').join( namespace )).replace(/\s+/g, ' ') )
				.bind('scroll resize '.split(' ').join( namespace ), function( event ) {
					scrollSticky( event.type === 'resize' );
				});
			c.$table
				.unbind('stickyHeadersUpdate' + namespace)
				.bind('stickyHeadersUpdate' + namespace, function(){
					scrollSticky( true );
				});

			if (wo.stickyHeaders_addResizeEvent) {
				ts.addHeaderResizeEvent(table);
			}

			// look for filter widget
			if ($table.hasClass('hasFilters') && wo.filter_columnFilters) {
				// scroll table into view after filtering, if sticky header is active - #482
				$table.bind('filterEnd' + namespace, function() {
					// $(':focus') needs jQuery 1.6+
					var $td = $(document.activeElement).closest('td'),
						column = $td.parent().children().index($td);
					// only scroll if sticky header is active
					if ($stickyWrap.hasClass(ts.css.stickyVis) && wo.stickyHeaders_filteredToTop) {
						// scroll to original table (not sticky clone)
						window.scrollTo(0, $table.position().top);
						// give same input/select focus; check if c.$filters exists; fixes #594
						if (column >= 0 && c.$filters) {
							c.$filters.eq(column).find('a, select, input').filter(':visible').focus();
						}
					}
				});
				ts.filter.bindSearch( $table, $stickyCells.find('.' + ts.css.filter) );
				// support hideFilters
				if (wo.filter_hideFilters) {
					ts.filter.hideFilters(c, $stickyTable);
				}
			}

			// resize table (Firefox)
			if (wo.stickyHeaders_addResizeEvent) {
				$table.bind('resize' + c.namespace + 'stickyheaders', function() {
					resizeHeader();
				});
			}

			$table.triggerHandler('stickyHeadersInit');

		},
		remove: function(table, c, wo) {
			var namespace = c.namespace + 'stickyheaders ';
			c.$table
				.removeClass('hasStickyHeaders')
				.unbind( ('pagerComplete resize filterEnd stickyHeadersUpdate '.split(' ').join(namespace)).replace(/\s+/g, ' ') )
				.next('.' + ts.css.stickyWrap).remove();
			if (wo.$sticky && wo.$sticky.length) { wo.$sticky.remove(); } // remove cloned table
			$(window)
				.add(wo.stickyHeaders_xScroll)
				.add(wo.stickyHeaders_yScroll)
				.add(wo.stickyHeaders_attachTo)
				.unbind( ('scroll resize '.split(' ').join(namespace)).replace(/\s+/g, ' ') );
			ts.addHeaderResizeEvent(table, true);
		}
	});

})(jQuery, window);

/*! Widget: resizable - updated 11/4/2015 (v2.24.3) */
/*jshint browser:true, jquery:true, unused:false */
;(function ($, window) {
	'use strict';
	var ts = $.tablesorter || {};

	$.extend(ts.css, {
		resizableContainer : 'tablesorter-resizable-container',
		resizableHandle    : 'tablesorter-resizable-handle',
		resizableNoSelect  : 'tablesorter-disableSelection',
		resizableStorage   : 'tablesorter-resizable'
	});

	// Add extra scroller css
	$(function(){
		var s = '<style>' +
			'body.' + ts.css.resizableNoSelect + ' { -ms-user-select: none; -moz-user-select: -moz-none;' +
				'-khtml-user-select: none; -webkit-user-select: none; user-select: none; }' +
			'.' + ts.css.resizableContainer + ' { position: relative; height: 1px; }' +
			// make handle z-index > than stickyHeader z-index, so the handle stays above sticky header
			'.' + ts.css.resizableHandle + ' { position: absolute; display: inline-block; width: 8px;' +
				'top: 1px; cursor: ew-resize; z-index: 3; user-select: none; -moz-user-select: none; }' +
			'</style>';
		$(s).appendTo('body');
	});

	ts.resizable = {
		init : function( c, wo ) {
			if ( c.$table.hasClass( 'hasResizable' ) ) { return; }
			c.$table.addClass( 'hasResizable' );

			var noResize, $header, column, storedSizes, tmp,
				$table = c.$table,
				$parent = $table.parent(),
				marginTop = parseInt( $table.css( 'margin-top' ), 10 ),

			// internal variables
			vars = wo.resizable_vars = {
				useStorage : ts.storage && wo.resizable !== false,
				$wrap : $parent,
				mouseXPosition : 0,
				$target : null,
				$next : null,
				overflow : $parent.css('overflow') === 'auto' ||
					$parent.css('overflow') === 'scroll' ||
					$parent.css('overflow-x') === 'auto' ||
					$parent.css('overflow-x') === 'scroll',
				storedSizes : []
			};

			// set default widths
			ts.resizableReset( c.table, true );

			// now get measurements!
			vars.tableWidth = $table.width();
			// attempt to autodetect
			vars.fullWidth = Math.abs( $parent.width() - vars.tableWidth ) < 20;

			/*
			// Hacky method to determine if table width is set to 'auto'
			// http://stackoverflow.com/a/20892048/145346
			if ( !vars.fullWidth ) {
				tmp = $table.width();
				$header = $table.wrap('<span>').parent(); // temp variable
				storedSizes = parseInt( $table.css( 'margin-left' ), 10 ) || 0;
				$table.css( 'margin-left', storedSizes + 50 );
				vars.tableWidth = $header.width() > tmp ? 'auto' : tmp;
				$table.css( 'margin-left', storedSizes ? storedSizes : '' );
				$header = null;
				$table.unwrap('<span>');
			}
			*/

			if ( vars.useStorage && vars.overflow ) {
				// save table width
				ts.storage( c.table, 'tablesorter-table-original-css-width', vars.tableWidth );
				tmp = ts.storage( c.table, 'tablesorter-table-resized-width' ) || 'auto';
				ts.resizable.setWidth( $table, tmp, true );
			}
			wo.resizable_vars.storedSizes = storedSizes = ( vars.useStorage ?
				ts.storage( c.table, ts.css.resizableStorage ) :
				[] ) || [];
			ts.resizable.setWidths( c, wo, storedSizes );
			ts.resizable.updateStoredSizes( c, wo );

			wo.$resizable_container = $( '<div class="' + ts.css.resizableContainer + '">' )
				.css({ top : marginTop })
				.insertBefore( $table );
			// add container
			for ( column = 0; column < c.columns; column++ ) {
				$header = c.$headerIndexed[ column ];
				tmp = ts.getColumnData( c.table, c.headers, column );
				noResize = ts.getData( $header, tmp, 'resizable' ) === 'false';
				if ( !noResize ) {
					$( '<div class="' + ts.css.resizableHandle + '">' )
						.appendTo( wo.$resizable_container )
						.attr({
							'data-column' : column,
							'unselectable' : 'on'
						})
						.data( 'header', $header )
						.bind( 'selectstart', false );
				}
			}
			ts.resizable.bindings( c, wo );
		},

		updateStoredSizes : function( c, wo ) {
			var column, $header,
				len = c.columns,
				vars = wo.resizable_vars;
			vars.storedSizes = [];
			for ( column = 0; column < len; column++ ) {
				$header = c.$headerIndexed[ column ];
				vars.storedSizes[ column ] = $header.is(':visible') ? $header.width() : 0;
			}
		},

		setWidth : function( $el, width, overflow ) {
			// overflow tables need min & max width set as well
			$el.css({
				'width' : width,
				'min-width' : overflow ? width : '',
				'max-width' : overflow ? width : ''
			});
		},

		setWidths : function( c, wo, storedSizes ) {
			var column, $temp,
				vars = wo.resizable_vars,
				$extra = $( c.namespace + '_extra_headers' ),
				$col = c.$table.children( 'colgroup' ).children( 'col' );
			storedSizes = storedSizes || vars.storedSizes || [];
			// process only if table ID or url match
			if ( storedSizes.length ) {
				for ( column = 0; column < c.columns; column++ ) {
					// set saved resizable widths
					ts.resizable.setWidth( c.$headerIndexed[ column ], storedSizes[ column ], vars.overflow );
					if ( $extra.length ) {
						// stickyHeaders needs to modify min & max width as well
						$temp = $extra.eq( column ).add( $col.eq( column ) );
						ts.resizable.setWidth( $temp, storedSizes[ column ], vars.overflow );
					}
				}
				$temp = $( c.namespace + '_extra_table' );
				if ( $temp.length && !ts.hasWidget( c.table, 'scroller' ) ) {
					ts.resizable.setWidth( $temp, c.$table.outerWidth(), vars.overflow );
				}
			}
		},

		setHandlePosition : function( c, wo ) {
			var startPosition,
				tableHeight = c.$table.height(),
				$handles = wo.$resizable_container.children(),
				handleCenter = Math.floor( $handles.width() / 2 );

			if ( ts.hasWidget( c.table, 'scroller' ) ) {
				tableHeight = 0;
				c.$table.closest( '.' + ts.css.scrollerWrap ).children().each(function(){
					var $this = $(this);
					// center table has a max-height set
					tableHeight += $this.filter('[style*="height"]').length ? $this.height() : $this.children('table').height();
				});
			}
			// subtract out table left position from resizable handles. Fixes #864
			startPosition = c.$table.position().left;
			$handles.each( function() {
				var $this = $(this),
					column = parseInt( $this.attr( 'data-column' ), 10 ),
					columns = c.columns - 1,
					$header = $this.data( 'header' );
				if ( !$header ) { return; } // see #859
				if ( !$header.is(':visible') ) {
					$this.hide();
				} else if ( column < columns || column === columns && wo.resizable_addLastColumn ) {
					$this.css({
						display: 'inline-block',
						height : tableHeight,
						left : $header.position().left - startPosition + $header.outerWidth() - handleCenter
					});
				}
			});
		},

		// prevent text selection while dragging resize bar
		toggleTextSelection : function( c, wo, toggle ) {
			var namespace = c.namespace + 'tsresize';
			wo.resizable_vars.disabled = toggle;
			$( 'body' ).toggleClass( ts.css.resizableNoSelect, toggle );
			if ( toggle ) {
				$( 'body' )
					.attr( 'unselectable', 'on' )
					.bind( 'selectstart' + namespace, false );
			} else {
				$( 'body' )
					.removeAttr( 'unselectable' )
					.unbind( 'selectstart' + namespace );
			}
		},

		bindings : function( c, wo ) {
			var namespace = c.namespace + 'tsresize';
			wo.$resizable_container.children().bind( 'mousedown', function( event ) {
				// save header cell and mouse position
				var column,
					vars = wo.resizable_vars,
					$extras = $( c.namespace + '_extra_headers' ),
					$header = $( event.target ).data( 'header' );

				column = parseInt( $header.attr( 'data-column' ), 10 );
				vars.$target = $header = $header.add( $extras.filter('[data-column="' + column + '"]') );
				vars.target = column;

				// if table is not as wide as it's parent, then resize the table
				vars.$next = event.shiftKey || wo.resizable_targetLast ?
					$header.parent().children().not( '.resizable-false' ).filter( ':last' ) :
					$header.nextAll( ':not(.resizable-false)' ).eq( 0 );

				column = parseInt( vars.$next.attr( 'data-column' ), 10 );
				vars.$next = vars.$next.add( $extras.filter('[data-column="' + column + '"]') );
				vars.next = column;

				vars.mouseXPosition = event.pageX;
				ts.resizable.updateStoredSizes( c, wo );
				ts.resizable.toggleTextSelection(c, wo, true );
			});

			$( document )
				.bind( 'mousemove' + namespace, function( event ) {
					var vars = wo.resizable_vars;
					// ignore mousemove if no mousedown
					if ( !vars.disabled || vars.mouseXPosition === 0 || !vars.$target ) { return; }
					if ( wo.resizable_throttle ) {
						clearTimeout( vars.timer );
						vars.timer = setTimeout( function() {
							ts.resizable.mouseMove( c, wo, event );
						}, isNaN( wo.resizable_throttle ) ? 5 : wo.resizable_throttle );
					} else {
						ts.resizable.mouseMove( c, wo, event );
					}
				})
				.bind( 'mouseup' + namespace, function() {
					if (!wo.resizable_vars.disabled) { return; }
					ts.resizable.toggleTextSelection( c, wo, false );
					ts.resizable.stopResize( c, wo );
					ts.resizable.setHandlePosition( c, wo );
				});

			// resizeEnd event triggered by scroller widget
			$( window ).bind( 'resize' + namespace + ' resizeEnd' + namespace, function() {
				ts.resizable.setHandlePosition( c, wo );
			});

			// right click to reset columns to default widths
			c.$table
				.bind( 'columnUpdate' + namespace, function() {
					ts.resizable.setHandlePosition( c, wo );
				})
				.find( 'thead:first' )
				.add( $( c.namespace + '_extra_table' ).find( 'thead:first' ) )
				.bind( 'contextmenu' + namespace, function() {
					// $.isEmptyObject() needs jQuery 1.4+; allow right click if already reset
					var allowClick = wo.resizable_vars.storedSizes.length === 0;
					ts.resizableReset( c.table );
					ts.resizable.setHandlePosition( c, wo );
					wo.resizable_vars.storedSizes = [];
					return allowClick;
				});

		},

		mouseMove : function( c, wo, event ) {
			if ( wo.resizable_vars.mouseXPosition === 0 || !wo.resizable_vars.$target ) { return; }
			// resize columns
			var column,
				total = 0,
				vars = wo.resizable_vars,
				$next = vars.$next,
				tar = vars.storedSizes[ vars.target ],
				leftEdge = event.pageX - vars.mouseXPosition;
			if ( vars.overflow ) {
				if ( tar + leftEdge > 0 ) {
					vars.storedSizes[ vars.target ] += leftEdge;
					ts.resizable.setWidth( vars.$target, vars.storedSizes[ vars.target ], true );
					// update the entire table width
					for ( column = 0; column < c.columns; column++ ) {
						total += vars.storedSizes[ column ];
					}
					ts.resizable.setWidth( c.$table.add( $( c.namespace + '_extra_table' ) ), total );
				}
				if ( !$next.length ) {
					// if expanding right-most column, scroll the wrapper
					vars.$wrap[0].scrollLeft = c.$table.width();
				}
			} else if ( vars.fullWidth ) {
				vars.storedSizes[ vars.target ] += leftEdge;
				vars.storedSizes[ vars.next ] -= leftEdge;
				ts.resizable.setWidths( c, wo );
			} else {
				vars.storedSizes[ vars.target ] += leftEdge;
				ts.resizable.setWidths( c, wo );
			}
			vars.mouseXPosition = event.pageX;
			// dynamically update sticky header widths
			c.$table.triggerHandler('stickyHeadersUpdate');
		},

		stopResize : function( c, wo ) {
			var vars = wo.resizable_vars;
			ts.resizable.updateStoredSizes( c, wo );
			if ( vars.useStorage ) {
				// save all column widths
				ts.storage( c.table, ts.css.resizableStorage, vars.storedSizes );
				ts.storage( c.table, 'tablesorter-table-resized-width', c.$table.width() );
			}
			vars.mouseXPosition = 0;
			vars.$target = vars.$next = null;
			// will update stickyHeaders, just in case, see #912
			c.$table.triggerHandler('stickyHeadersUpdate');
		}
	};

	// this widget saves the column widths if
	// $.tablesorter.storage function is included
	// **************************
	ts.addWidget({
		id: 'resizable',
		priority: 40,
		options: {
			resizable : true, // save column widths to storage
			resizable_addLastColumn : false,
			resizable_widths : [],
			resizable_throttle : false, // set to true (5ms) or any number 0-10 range
			resizable_targetLast : false,
			resizable_fullWidth : null
		},
		init: function(table, thisWidget, c, wo) {
			ts.resizable.init( c, wo );
		},
		format: function( table, c, wo ) {
			ts.resizable.setHandlePosition( c, wo );
		},
		remove: function( table, c, wo, refreshing ) {
			if (wo.$resizable_container) {
				var namespace = c.namespace + 'tsresize';
				c.$table.add( $( c.namespace + '_extra_table' ) )
					.removeClass('hasResizable')
					.children( 'thead' )
					.unbind( 'contextmenu' + namespace );

				wo.$resizable_container.remove();
				ts.resizable.toggleTextSelection( c, wo, false );
				ts.resizableReset( table, refreshing );
				$( document ).unbind( 'mousemove' + namespace + ' mouseup' + namespace );
			}
		}
	});

	ts.resizableReset = function( table, refreshing ) {
		$( table ).each(function(){
			var index, $t,
				c = this.config,
				wo = c && c.widgetOptions,
				vars = wo.resizable_vars;
			if ( table && c && c.$headerIndexed.length ) {
				// restore the initial table width
				if ( vars.overflow && vars.tableWidth ) {
					ts.resizable.setWidth( c.$table, vars.tableWidth, true );
					if ( vars.useStorage ) {
						ts.storage( table, 'tablesorter-table-resized-width', 'auto' );
					}
				}
				for ( index = 0; index < c.columns; index++ ) {
					$t = c.$headerIndexed[ index ];
					if ( wo.resizable_widths && wo.resizable_widths[ index ] ) {
						ts.resizable.setWidth( $t, wo.resizable_widths[ index ], vars.overflow );
					} else if ( !$t.hasClass( 'resizable-false' ) ) {
						// don't clear the width of any column that is not resizable
						ts.resizable.setWidth( $t, '', vars.overflow );
					}
				}

				// reset stickyHeader widths
				c.$table.triggerHandler( 'stickyHeadersUpdate' );
				if ( ts.storage && !refreshing ) {
					ts.storage( this, ts.css.resizableStorage, {} );
				}
			}
		});
	};

})( jQuery, window );

/*! Widget: saveSort - updated 10/31/2015 (v2.24.0) *//*
* Requires tablesorter v2.16+
* by Rob Garrison
*/
;(function ($) {
	'use strict';
	var ts = $.tablesorter || {};

	// this widget saves the last sort only if the
	// saveSort widget option is true AND the
	// $.tablesorter.storage function is included
	// **************************
	ts.addWidget({
		id: 'saveSort',
		priority: 20,
		options: {
			saveSort : true
		},
		init: function(table, thisWidget, c, wo) {
			// run widget format before all other widgets are applied to the table
			thisWidget.format(table, c, wo, true);
		},
		format: function(table, c, wo, init) {
			var stored, time,
				$table = c.$table,
				saveSort = wo.saveSort !== false, // make saveSort active/inactive; default to true
				sortList = { 'sortList' : c.sortList };
			if (c.debug) {
				time = new Date();
			}
			if ($table.hasClass('hasSaveSort')) {
				if (saveSort && table.hasInitialized && ts.storage) {
					ts.storage( table, 'tablesorter-savesort', sortList );
					if (c.debug) {
						console.log('saveSort widget: Saving last sort: ' + c.sortList + ts.benchmark(time));
					}
				}
			} else {
				// set table sort on initial run of the widget
				$table.addClass('hasSaveSort');
				sortList = '';
				// get data
				if (ts.storage) {
					stored = ts.storage( table, 'tablesorter-savesort' );
					sortList = (stored && stored.hasOwnProperty('sortList') && $.isArray(stored.sortList)) ? stored.sortList : '';
					if (c.debug) {
						console.log('saveSort: Last sort loaded: "' + sortList + '"' + ts.benchmark(time));
					}
					$table.bind('saveSortReset', function(event) {
						event.stopPropagation();
						ts.storage( table, 'tablesorter-savesort', '' );
					});
				}
				// init is true when widget init is run, this will run this widget before all other widgets have initialized
				// this method allows using this widget in the original tablesorter plugin; but then it will run all widgets twice.
				if (init && sortList && sortList.length > 0) {
					c.sortList = sortList;
				} else if (table.hasInitialized && sortList && sortList.length > 0) {
					// update sort change
					ts.sortOn( c, sortList );
				}
			}
		},
		remove: function(table, c) {
			c.$table.removeClass('hasSaveSort');
			// clear storage
			if (ts.storage) { ts.storage( table, 'tablesorter-savesort', '' ); }
		}
	});

})(jQuery);

return $.tablesorter;
}));

(function(){var d;window.AmCharts?d=window.AmCharts:(d={},window.AmCharts=d,d.themes={},d.maps={},d.inheriting={},d.charts=[],d.onReadyArray=[],d.useUTC=!1,d.updateRate=60,d.uid=0,d.lang={},d.translations={},d.mapTranslations={},d.windows={},d.initHandlers=[],d.amString="am",d.pmString="pm");d.Class=function(a){var b=function(){arguments[0]!==d.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(d.inheriting),b.base=a.inherits.prototype,delete a.inherits):
(b.prototype.createEvents=function(){for(var a=0;a<arguments.length;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,c){this.removeListener(a,b,c);a.events[b].push({handler:c,scope:this})},b.prototype.addListener=function(a,b,c){this.removeListener(this,a,b);a&&this.events[a]&&this.events[a].push({handler:b,scope:c})},b.prototype.removeListener=function(a,b,c){if(a&&a.events&&(a=a.events[b]))for(b=a.length-1;0<=b;b--)a[b].handler===c&&a.splice(b,1)},b.prototype.fire=function(a){for(var b=
this.events[a.type],c=0;c<b.length;c++){var d=b[c];d.handler.call(d.scope,a)}});for(var c in a)b.prototype[c]=a[c];return b};d.addChart=function(a){window.requestAnimationFrame?d.animationRequested||(d.animationRequested=!0,window.requestAnimationFrame(d.update)):d.updateInt||(d.updateInt=setInterval(function(){d.update()},Math.round(1E3/d.updateRate)));d.charts.push(a)};d.removeChart=function(a){for(var b=d.charts,c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);0===b.length&&d.updateInt&&(clearInterval(d.updateInt),
d.updateInt=NaN)};d.isModern=!0;d.getIEVersion=function(){var a=0,b,c;"Microsoft Internet Explorer"==navigator.appName&&(b=navigator.userAgent,c=/MSIE ([0-9]{1,}[.0-9]{0,})/,null!==c.exec(b)&&(a=parseFloat(RegExp.$1)));return a};d.applyLang=function(a,b){var c=d.translations;b.dayNames=d.extend({},d.dayNames);b.shortDayNames=d.extend({},d.shortDayNames);b.monthNames=d.extend({},d.monthNames);b.shortMonthNames=d.extend({},d.shortMonthNames);b.amString="am";b.pmString="pm";c&&(c=c[a])&&(d.lang=c,c.monthNames&&
(b.dayNames=d.extend({},c.dayNames),b.shortDayNames=d.extend({},c.shortDayNames),b.monthNames=d.extend({},c.monthNames),b.shortMonthNames=d.extend({},c.shortMonthNames)),c.am&&(b.amString=c.am),c.pm&&(b.pmString=c.pm));d.amString=b.amString;d.pmString=b.amString};d.IEversion=d.getIEVersion();9>d.IEversion&&0<d.IEversion&&(d.isModern=!1,d.isIE=!0);d.dx=0;d.dy=0;if(document.addEventListener||window.opera)d.isNN=!0,d.isIE=!1,d.dx=.5,d.dy=.5;document.attachEvent&&(d.isNN=!1,d.isIE=!0,d.isModern||(d.dx=
0,d.dy=0));window.chrome&&(d.chrome=!0);d.handleMouseUp=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleReleaseOutside&&e.handleReleaseOutside(a)}};d.handleMouseMove=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];e&&e.handleMouseMove&&e.handleMouseMove(a)}};d.handleWheel=function(a){for(var b=d.charts,c=0;c<b.length;c++){var e=b[c];if(e&&e.mouseIsOver){e.mouseWheelScrollEnabled||e.mouseWheelZoomEnabled?e.handleWheel&&e.handleWheel(a):a.stopPropagation&&a.stopPropagation();
break}}};d.resetMouseOver=function(){for(var a=d.charts,b=0;b<a.length;b++){var c=a[b];c&&(c.mouseIsOver=!1)}};d.ready=function(a){d.onReadyArray.push(a)};d.handleLoad=function(){d.isReady=!0;for(var a=d.onReadyArray,b=0;b<a.length;b++){var c=a[b];isNaN(d.processDelay)?c():setTimeout(c,d.processDelay*b)}};d.addInitHandler=function(a,b){d.initHandlers.push({method:a,types:b})};d.callInitHandler=function(a){var b=d.initHandlers;if(d.initHandlers)for(var c=0;c<b.length;c++){var e=b[c];e.types?d.isInArray(e.types,
a.type)&&e.method(a):e.method(a)}};d.getUniqueId=function(){d.uid++;return"AmChartsEl-"+d.uid};d.isNN&&(document.addEventListener("mousemove",d.handleMouseMove),document.addEventListener("mouseup",d.handleMouseUp,!0),window.addEventListener("load",d.handleLoad,!0),window.addEventListener("DOMMouseScroll",d.handleWheel,!0),document.addEventListener("mousewheel",d.handleWheel,!0));d.isIE&&(document.attachEvent("onmousemove",d.handleMouseMove),document.attachEvent("onmouseup",d.handleMouseUp),window.attachEvent("onload",
d.handleLoad),document.attachEvent("onmousewheel",d.handleWheel));d.clear=function(){var a=d.charts;if(a)for(var b=a.length-1;0<=b;b--)a[b].clear();d.updateInt&&clearInterval(d.updateInt);d.charts=[];d.isNN&&(document.removeEventListener("mousemove",d.handleMouseMove,!0),document.removeEventListener("mouseup",d.handleMouseUp,!0),window.removeEventListener("load",d.handleLoad,!0),window.removeEventListener("DOMMouseScroll",d.handleWheel,!0),document.removeEventListener("mousewheel",d.handleWheel,!0));
d.isIE&&(document.detachEvent("onmousemove",d.handleMouseMove),document.detachEvent("onmouseup",d.handleMouseUp),window.detachEvent("onload",d.handleLoad))};d.makeChart=function(a,b,c){var e=b.type,h=b.theme;d.isString(h)&&(h=d.themes[h],b.theme=h);var f;switch(e){case "serial":f=new d.AmSerialChart(h);break;case "xy":f=new d.AmXYChart(h);break;case "pie":f=new d.AmPieChart(h);break;case "radar":f=new d.AmRadarChart(h);break;case "gauge":f=new d.AmAngularGauge(h);break;case "funnel":f=new d.AmFunnelChart(h);
break;case "map":f=new d.AmMap(h);break;case "stock":f=new d.AmStockChart(h);break;case "gantt":f=new d.AmGanttChart(h)}d.extend(f,b);d.isReady?isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c):d.ready(function(){isNaN(c)?f.write(a):setTimeout(function(){d.realWrite(f,a)},c)});return f};d.realWrite=function(a,b){a.write(b)};d.updateCount=0;d.validateAt=Math.round(d.updateRate/10);d.update=function(){var a=d.charts;d.updateCount++;var b=!1;d.updateCount==d.validateAt&&(b=!0,d.updateCount=
0);if(a)for(var c=a.length-1;0<=c;c--)a[c].update&&a[c].update(),b&&(a[c].autoResize?a[c].validateSize&&a[c].validateSize():a[c].premeasure&&a[c].premeasure());window.requestAnimationFrame&&window.requestAnimationFrame(d.update)};d.bezierX=3;d.bezierY=6;"complete"==document.readyState&&d.handleLoad()})();(function(){var d=window.AmCharts;d.toBoolean=function(a,b){if(void 0===a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return!!a}};d.removeFromArray=function(a,b){var c;if(void 0!==b&&void 0!==a)for(c=a.length-1;0<=c;c--)a[c]==b&&a.splice(c,1)};d.getPath=function(){var a=document.getElementsByTagName("script");if(a)for(var b=0;b<a.length;b++){var c=a[b].src;if(-1!==c.search(/\/(amcharts|ammap)\.js/))return c.replace(/\/(amcharts|ammap)\.js.*/,
"/")}};d.normalizeUrl=function(a){return""!==a&&-1===a.search(/\/$/)?a+"/":a};d.isAbsolute=function(a){return 0===a.search(/^http[s]?:|^\//)};d.isInArray=function(a,b){for(var c=0;c<a.length;c++)if(a[c]==b)return!0;return!1};d.getDecimals=function(a){var b=0;isNaN(a)||(a=String(a),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b};d.wordwrap=function(a,b,c,e){var h,f,g,k;a+="";if(1>b)return a;h=-1;for(a=(k=a.split(/\r\n|\n|\r/)).length;++h<a;k[h]+=
g){g=k[h];for(k[h]="";g.length>b;k[h]+=d.trim(g.slice(0,f))+((g=g.slice(f)).length?c:""))f=2==e||(f=g.slice(0,b+1).match(/\S*(\s)?$/))[1]?b:f.input.length-f[0].length||1==e&&b||f.input.length+(f=g.slice(b).match(/^\S*/))[0].length;g=d.trim(g)}return k.join(c)};d.trim=function(a){return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")};d.wrappedText=function(a,b,c,e,h,f,g,k){var l=d.text(a,b,c,e,h,f,g);if(l){var m=l.getBBox();if(m.width>k){var n="\n";d.isModern||(n="<br>");k=Math.floor(k/(m.width/
b.length));2<k&&(k-=2);b=d.wordwrap(b,k,n,!0);l.remove();l=d.text(a,b,c,e,h,f,g)}}return l};d.getStyle=function(a,b){var c="";if(document.defaultView&&document.defaultView.getComputedStyle)try{c=document.defaultView.getComputedStyle(a,"").getPropertyValue(b)}catch(e){}else a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=a.currentStyle[b]);return c};d.removePx=function(a){if(void 0!==a)return Number(a.substring(0,a.length-2))};d.getURL=function(a,b){if(a)if("_self"!=
b&&b)if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else if("_blank"==b)window.open(a);else{var c=document.getElementsByName(b)[0];c?c.src=a:(c=d.windows[b])?c.opener&&!c.opener.closed?c.location.href=a:d.windows[b]=window.open(a):d.windows[b]=window.open(a)}else window.location.href=a};d.ifArray=function(a){return a&&"object"==typeof a&&0<a.length?!0:!1};d.callMethod=function(a,b){var c;for(c=0;c<b.length;c++){var e=b[c];if(e){if(e[a])e[a]();
var d=e.length;if(0<d){var f;for(f=0;f<d;f++){var g=e[f];if(g&&g[a])g[a]()}}}}};d.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};d.toColor=function(a){if(""!==a&&void 0!==a)if(-1!=a.indexOf(",")){a=a.split(",");var b;for(b=0;b<a.length;b++){var c=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+c}}else a=a.substring(a.length-6,a.length),a="#"+a;return a};d.toCoordinate=function(a,b,c){var e;void 0!==a&&(a=String(a),c&&c<b&&(b=c),e=Number(a),-1!=a.indexOf("!")&&
(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};d.fitToBounds=function(a,b,c){a<b&&(a=b);a>c&&(a=c);return a};d.isDefined=function(a){return void 0===a?!1:!0};d.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};d.roundTo=function(a,b){if(0>b)return a;var c=Math.pow(10,b);return Math.round(a*c)/c};d.toFixed=function(a,b){var c=String(Math.round(a*Math.pow(10,b)));if(0<b){var e=c.length;if(e<b){var d;for(d=0;d<b-e;d++)c="0"+c}e=c.substring(0,
c.length-b);""===e&&(e=0);return e+"."+c.substring(c.length-b,c.length)}return String(c)};d.formatDuration=function(a,b,c,e,h,f){var g=d.intervals,k=f.decimalSeparator;if(a>=g[b].contains){var l=a-Math.floor(a/g[b].contains)*g[b].contains;"ss"==b?(l=d.formatNumber(l,f),1==l.split(k)[0].length&&(l="0"+l)):l=d.roundTo(l,f.precision);("mm"==b||"hh"==b)&&10>l&&(l="0"+l);c=l+""+e[b]+""+c;a=Math.floor(a/g[b].contains);b=g[b].nextInterval;return d.formatDuration(a,b,c,e,h,f)}"ss"==b&&(a=d.formatNumber(a,
f),1==a.split(k)[0].length&&(a="0"+a));("mm"==b||"hh"==b)&&10>a&&(a="0"+a);c=a+""+e[b]+""+c;if(g[h].count>g[b].count)for(a=g[b].count;a<g[h].count;a++)b=g[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?c="00"+e[b]+""+c:"DD"==b&&(c="0"+e[b]+""+c);":"==c.charAt(c.length-1)&&(c=c.substring(0,c.length-1));return c};d.formatNumber=function(a,b,c,e,h){a=d.roundTo(a,b.precision);isNaN(c)&&(c=b.precision);var f=b.decimalSeparator;b=b.thousandsSeparator;var g;g=0>a?"-":"";a=Math.abs(a);var k=String(a),l=!1;-1!=
k.indexOf("e")&&(l=!0);0<=c&&!l&&(k=d.toFixed(a,c));var m="";if(l)m=k;else{var k=k.split("."),l=String(k[0]),n;for(n=l.length;0<=n;n-=3)m=n!=l.length?0!==n?l.substring(n-3,n)+b+m:l.substring(n-3,n)+m:l.substring(n-3,n);void 0!==k[1]&&(m=m+f+k[1]);void 0!==c&&0<c&&"0"!=m&&(m=d.addZeroes(m,f,c))}m=g+m;""===g&&!0===e&&0!==a&&(m="+"+m);!0===h&&(m+="%");return m};d.addZeroes=function(a,b,c){a=a.split(b);void 0===a[1]&&0<c&&(a[1]="0");return a[1].length<c?(a[1]+="0",d.addZeroes(a[0]+b+a[1],b,c)):void 0!==
a[1]?a[0]+b+a[1]:a[0]};d.scientificToNormal=function(a){var b;a=String(a).split("e");var c;if("-"==a[1].substr(0,1)){b="0.";for(c=0;c<Math.abs(Number(a[1]))-1;c++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(c=0;c<Math.abs(Number(a[1]))-e;c++)b+="0"}return b};d.toScientific=function(a,b){if(0===a)return"0";var c=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),e=String(e).split(".").join(b);return String(e)+"e"+c};d.randomColor=
function(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6)};d.hitTest=function(a,b,c){var e=!1,h=a.x,f=a.x+a.width,g=a.y,k=a.y+a.height,l=d.isInRectangle;e||(e=l(h,g,b));e||(e=l(h,k,b));e||(e=l(f,g,b));e||(e=l(f,k,b));e||!0===c||(e=d.hitTest(b,a,!0));return e};d.isInRectangle=function(a,b,c){return a>=c.x-5&&a<=c.x+c.width+5&&b>=c.y-5&&b<=c.y+c.height+5?!0:!1};d.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};d.formatValue=function(a,b,c,e,h,f,g,k){if(b){void 0===
h&&(h="");var l;for(l=0;l<c.length;l++){var m=c[l],n=b[m];void 0!==n&&(n=f?d.addPrefix(n,k,g,e):d.formatNumber(n,e),a=a.replace(new RegExp("\\[\\["+h+""+m+"\\]\\]","g"),n))}}return a};d.formatDataContextValue=function(a,b){if(a){var c=a.match(/\[\[.*?\]\]/g),e;for(e=0;e<c.length;e++){var d=c[e],d=d.substr(2,d.length-4);void 0!==b[d]&&(a=a.replace(new RegExp("\\[\\["+d+"\\]\\]","g"),b[d]))}}return a};d.massReplace=function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var e=b[c];void 0===e&&(e="");a=
a.replace(c,e)}return a};d.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};d.addPrefix=function(a,b,c,e,h){var f=d.formatNumber(a,e),g="",k,l,m;if(0===a)return"0";0>a&&(g="-");a=Math.abs(a);if(1<a)for(k=b.length-1;-1<k;k--){if(a>=b[k].number&&(l=a/b[k].number,m=Number(e.precision),1>m&&(m=1),c=d.roundTo(l,m),m=d.formatNumber(c,{precision:-1,decimalSeparator:e.decimalSeparator,thousandsSeparator:e.thousandsSeparator}),!h||l==c)){f=g+""+m+""+b[k].prefix;break}}else for(k=0;k<c.length;k++)if(a<=
c[k].number){l=a/c[k].number;m=Math.abs(Math.floor(Math.log(l)*Math.LOG10E));l=d.roundTo(l,m);f=g+""+l+""+c[k].prefix;break}return f};d.remove=function(a){a&&a.remove()};d.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};d.getObjById=function(a,b){var c,e;for(e=0;e<a.length;e++){var d=a[e];if(d.id==b){c=d;break}}return c};d.applyTheme=function(a,b,c){b||(b=d.theme);b&&b[c]&&d.extend(a,b[c])};d.isString=function(a){return"string"==
typeof a?!0:!1};d.extend=function(a,b,c){var e;a||(a={});for(e in b)c?a.hasOwnProperty(e)||(a[e]=b[e]):a[e]=b[e];return a};d.copyProperties=function(a,b){for(var c in a)a.hasOwnProperty(c)&&"events"!=c&&void 0!==a[c]&&"function"!=typeof a[c]&&"cname"!=c&&(b[c]=a[c])};d.processObject=function(a,b,c,e){if(!1===a instanceof b&&(a=e?d.extend(new b(c),a):d.extend(a,new b(c),!0),a.listeners))for(var h in a.listeners)b=a.listeners[h],a.addListener(b.event,b.method);return a};d.fixNewLines=function(a){var b=
RegExp("\\n","g");a&&(a=a.replace(b,"<br />"));return a};d.fixBrakes=function(a){if(d.isModern){var b=RegExp("<br>","g");a&&(a=a.replace(b,"\n"))}else a=d.fixNewLines(a);return a};d.deleteObject=function(a,b){if(a){if(void 0===b||null===b)b=20;if(0!==b)if("[object Array]"===Object.prototype.toString.call(a))for(var c=0;c<a.length;c++)d.deleteObject(a[c],b-1),a[c]=null;else if(a&&!a.tagName)try{for(c in a)a[c]&&("object"==typeof a[c]&&d.deleteObject(a[c],b-1),"function"!=typeof a[c]&&(a[c]=null))}catch(e){}}};
d.bounce=function(a,b,c,e,d){return(b/=d)<1/2.75?7.5625*e*b*b+c:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+.75)+c:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+.9375)+c:e*(7.5625*(b-=2.625/2.75)*b+.984375)+c};d.easeInOutQuad=function(a,b,c,e,d){b/=d/2;if(1>b)return e/2*b*b+c;b--;return-e/2*(b*(b-2)-1)+c};d.easeInSine=function(a,b,c,e,d){return-e*Math.cos(b/d*(Math.PI/2))+e+c};d.easeOutSine=function(a,b,c,e,d){return e*Math.sin(b/d*(Math.PI/2))+c};d.easeOutElastic=function(a,b,c,e,d){a=1.70158;var f=0,g=e;if(0===
b)return c;if(1==(b/=d))return c+e;f||(f=.3*d);g<Math.abs(e)?(g=e,a=f/4):a=f/(2*Math.PI)*Math.asin(e/g);return g*Math.pow(2,-10*b)*Math.sin(2*(b*d-a)*Math.PI/f)+e+c};d.fixStepE=function(a){a=a.toExponential(0).split("e");var b=Number(a[1]);9==Number(a[0])&&b++;return d.generateNumber(1,b)};d.generateNumber=function(a,b){var c="",e;e=0>b?Math.abs(b)-1:Math.abs(b);var d;for(d=0;d<e;d++)c+="0";return 0>b?Number("0."+c+String(a)):Number(String(a)+c)};d.setCN=function(a,b,c,e){if(a.addClassNames&&b&&(b=
b.node)&&c){var d=b.getAttribute("class");a=a.classNamePrefix+"-";e&&(a="");d?b.setAttribute("class",d+" "+a+c):b.setAttribute("class",a+c)}};d.removeCN=function(a,b,c){b&&(b=b.node)&&c&&(b=b.classList)&&b.remove(a.classNamePrefix+"-"+c)};d.parseDefs=function(a,b){for(var c in a){var e=typeof a[c];if(0<a[c].length&&"object"==e)for(var h=0;h<a[c].length;h++)e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),d.parseDefs(a[c][h],e);else"object"==e?(e=document.createElementNS(d.SVG_NS,c),b.appendChild(e),
d.parseDefs(a[c],e)):b.setAttribute(c,a[c])}}})();(function(){var d=window.AmCharts;d.AxisBase=d.Class({construct:function(a){this.createEvents("clickItem","rollOverItem","rollOutItem");this.titleDY=this.y=this.x=this.dy=this.dx=0;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=0;this.labelsEnabled=!0;this.labelRotation=
0;this.autoGridCount=!0;this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.minHorizontalGap=75;this.minVerticalGap=35;this.titleBold=!0;this.minorGridEnabled=!1;this.minorGridAlpha=.07;this.autoWrap=!1;this.titleAlign="middle";this.labelOffset=0;this.bcn="axis-";this.centerLabels=!1;this.firstDayOfWeek=1;this.centerLabelOnFullPeriod=this.markPeriodChange=this.boldPeriodBeginning=!0;this.periods=[{period:"fff",count:1},{period:"fff",
count:5},{period:"fff",count:10},{period:"fff",count:50},{period:"fff",count:100},{period:"fff",count:500},{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"DD",count:3},{period:"DD",count:4},{period:"DD",count:5},{period:"WW",count:1},
{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"NN:SS.QQQ"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod=
{fff:"ss",ss:"mm",mm:"hh",hh:"DD",DD:"MM",MM:"YYYY"};d.applyTheme(this,a,"AxisBase")},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},init:function(){this.createBalloon()},draw:function(){var a=this.chart;this.prevBY=this.prevBX=NaN;this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();
this.setBalloonBounds();this.labels=[];var b=a.container,c=b.set();a.gridSet.push(c);this.set=c;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=b;this.axisLine=new this.axisRenderer(this);this.autoGridCount?("V"==this.orientation?(a=this.height/this.minVerticalGap,3>a&&(a=3)):a=this.width/this.minHorizontalGap,this.gridCountR=Math.max(a,1)):this.gridCountR=this.gridCount;this.axisWidth=this.axisLine.axisWidth;this.addTitle()},setOrientation:function(a){this.orientation=a?"H":"V"},addTitle:function(){var a=
this.title;this.titleLabel=null;if(a){var b=this.chart,c=this.titleColor;void 0===c&&(c=b.color);var e=this.titleFontSize;isNaN(e)&&(e=b.fontSize+1);a=d.text(b.container,a,c,b.fontFamily,e,this.titleAlign,this.titleBold);d.setCN(b,a,this.bcn+"title");this.titleLabel=a}},positionTitle:function(){var a=this.titleLabel;if(a){var b,c,e=this.labelsSet,h={};0<e.length()?h=e.getBBox():(h.x=0,h.y=0,h.width=this.width,h.height=this.height,d.VML&&(h.y+=this.y,h.x+=this.x));e.push(a);var e=h.x,f=h.y;d.VML&&
(f-=this.y,e-=this.x);var g=h.width,h=h.height,k=this.width,l=this.height,m=0,n=a.getBBox().height/2,q=this.inside,p=this.titleAlign;switch(this.position){case "top":b="left"==p?-1:"right"==p?k:k/2;c=f-10-n;break;case "bottom":b="left"==p?-1:"right"==p?k:k/2;c=f+h+10+n;break;case "left":b=e-10-n;q&&(b-=5);m=-90;c=("left"==p?l+1:"right"==p?-1:l/2)+this.titleDY;break;case "right":b=e+g+10+n,q&&(b+=7),c=("left"==p?l+2:"right"==p?-2:l/2)+this.titleDY,m=-90}this.marginsChanged?(a.translate(b,c),this.tx=
b,this.ty=c):a.translate(this.tx,this.ty);this.marginsChanged=!1;isNaN(this.titleRotation)||(m=this.titleRotation);0!==m&&a.rotate(m)}},pushAxisItem:function(a,b){var c=this,e=a.graphics();0<e.length()&&(b?c.labelsSet.push(e):c.set.push(e));if(e=a.getLabel())this.labelsSet.push(e),e.click(function(b){c.handleMouse(b,a,"clickItem")}).mouseover(function(b){c.handleMouse(b,a,"rollOverItem")}).mouseout(function(b){c.handleMouse(b,a,"rollOutItem")})},handleMouse:function(a,b,c){this.fire({type:c,value:b.value,
serialDataItem:b.serialDataItem,axis:this,target:b.label,chart:this.chart,event:a})},addGuide:function(a){for(var b=this.guides,c=!1,e=b.length,h=0;h<b.length;h++)b[h]==a&&(c=!0,e=h);a=d.processObject(a,d.Guide,this.theme);a.id||(a.id="guideAuto"+e+"_"+(new Date).getTime());c||b.push(a)},removeGuide:function(a){var b=this.guides,c;for(c=0;c<b.length;c++)b[c]==a&&b.splice(c,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b=a.graphics.getBBox(),c=this.x+b.x+b.width/2,b=this.y+
b.y+b.height/2,e=a.fillColor;void 0===e&&(e=a.lineColor);this.chart.showBalloon(a.balloonText,e,!0,c,b)},handleGuideOut:function(){this.chart.hideBalloon()},addEventListeners:function(a,b){var c=this;a.mouseover(function(){c.handleGuideOver(b)});a.touchstart(function(){c.handleGuideOver(b)});a.mouseout(function(){c.handleGuideOut(b)})},getBBox:function(){var a;this.labelsSet&&(a=this.labelsSet.getBBox());a?d.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height}):a={x:0,y:0,width:0,height:0};
return a},destroy:function(){d.remove(this.set);d.remove(this.labelsSet);var a=this.axisLine;a&&d.remove(a.axisSet);d.remove(this.grid0)},chooseMinorFrequency:function(a){for(var b=10;0<b;b--)if(a/b==Math.round(a/b))return a/b},parseDatesDraw:function(){var a,b=this.chart,c=this.showFirstLabel,e=this.showLastLabel,h,f="",g=d.extractPeriod(this.minPeriod),k=d.getPeriodDuration(g.period,g.count),l,m,n,q,p,t=this.firstDayOfWeek,r=this.boldPeriodBeginning;a=this.minorGridEnabled;var w,x=this.gridAlpha,
y,u=this.choosePeriod(0),A=u.period,u=u.count,z=d.getPeriodDuration(A,u);z<k&&(A=g.period,u=g.count,z=k);g=A;"WW"==g&&(g="DD");this.stepWidth=this.getStepWidth(this.timeDifference);var B=Math.ceil(this.timeDifference/z)+5,D=l=d.resetDateToMin(new Date(this.startTime-z),A,u,t).getTime();if(g==A&&1==u&&this.centerLabelOnFullPeriod||this.autoWrap||this.centerLabels)n=z*this.stepWidth,this.autoWrap&&!this.centerLabels&&(n=-n);this.cellWidth=k*this.stepWidth;q=Math.round(l/z);k=-1;q/2==Math.round(q/2)&&
(k=-2,l-=z);q=this.firstTime;var C=0,J=0;a&&1<u&&(w=this.chooseMinorFrequency(u),y=d.getPeriodDuration(A,w),"DD"==A&&(y+=d.getPeriodDuration("hh")),"fff"==A&&(y=1));if(0<this.gridCountR)for(B-5-k>this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),a=k;a<=B;a++){p=q+z*(a+Math.floor((D-q)/z))-C;"DD"==A&&(p+=36E5);p=d.resetDateToMin(new Date(p),A,u,t).getTime();"MM"==A&&(h=(p-l)/z,1.5<=(p-l)/z&&(p=p-(h-1)*z+d.getPeriodDuration("DD",3),p=d.resetDateToMin(new Date(p),
A,1).getTime(),C+=z));h=(p-this.startTime)*this.stepWidth;if("radar"==b.type){if(h=this.axisWidth-h,0>h||h>this.axisWidth)continue}else this.rotate?"date"==this.type&&"middle"==this.gridPosition&&(J=-z*this.stepWidth/2):"date"==this.type&&(h=this.axisWidth-h);f=!1;this.nextPeriod[g]&&(f=this.checkPeriodChange(this.nextPeriod[g],1,p,l,g));l=!1;f&&this.markPeriodChange?(f=this.dateFormatsObject[this.nextPeriod[g]],this.twoLineMode&&(f=this.dateFormatsObject[g]+"\n"+f,f=d.fixBrakes(f)),l=!0):f=this.dateFormatsObject[g];
r||(l=!1);this.currentDateFormat=f;f=d.formatDate(new Date(p),f,b);if(a==k&&!c||a==B&&!e)f=" ";this.labelFunction&&(f=this.labelFunction(f,new Date(p),this,A,u,m).toString());this.boldLabels&&(l=!0);m=new this.axisItemRenderer(this,h,f,!1,n,J,!1,l);this.pushAxisItem(m);m=l=p;if(!isNaN(w))for(h=1;h<u;h+=w)this.gridAlpha=this.minorGridAlpha,f=p+y*h,f=d.resetDateToMin(new Date(f),A,w,t).getTime(),f=new this.axisItemRenderer(this,(f-this.startTime)*this.stepWidth,void 0,void 0,void 0,void 0,void 0,void 0,
void 0,!0),this.pushAxisItem(f);this.gridAlpha=x}},choosePeriod:function(a){var b=d.getPeriodDuration(this.periods[a].period,this.periods[a].count),c=this.periods;return this.timeDifference<b&&0<a?c[a-1]:Math.ceil(this.timeDifference/b)<=this.gridCountR?c[a]:a+1<c.length?this.choosePeriod(a+1):c[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},timeZoom:function(a,b){this.startTime=a;this.endTime=b},minDuration:function(){var a=
d.extractPeriod(this.minPeriod);return d.getPeriodDuration(a.period,a.count)},checkPeriodChange:function(a,b,c,e,h){c=new Date(c);var f=new Date(e),g=this.firstDayOfWeek;e=b;"DD"==a&&(b=1);c=d.resetDateToMin(c,a,b,g).getTime();b=d.resetDateToMin(f,a,b,g).getTime();return"DD"==a&&"hh"!=h&&c-b<d.getPeriodDuration(a,e)-d.getPeriodDuration("hh",1)?!1:c!=b?!0:!1},generateDFObject:function(){this.dateFormatsObject={};var a;for(a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=
b.format}},hideBalloon:function(){this.balloon&&this.balloon.hide&&this.balloon.hide();this.prevBY=this.prevBX=NaN},formatBalloonText:function(a){return a},showBalloon:function(a,b,c,e){var d=this.offset;switch(this.position){case "bottom":b=this.height+d;break;case "top":b=-d;break;case "left":a=-d;break;case "right":a=this.width+d}c||(c=this.currentDateFormat);if("V"==this.orientation){if(0>b||b>this.height)return;if(isNaN(b)){this.hideBalloon();return}b=this.adjustBalloonCoordinate(b,e);e=this.coordinateToValue(b)}else{if(0>
a||a>this.width)return;if(isNaN(a)){this.hideBalloon();return}a=this.adjustBalloonCoordinate(a,e);e=this.coordinateToValue(a)}var f;if(d=this.chart.chartCursor)f=d.index;if(this.balloon&&void 0!==e&&this.balloon.enabled){if(this.balloonTextFunction){if("date"==this.type||!0===this.parseDates)e=new Date(e);e=this.balloonTextFunction(e)}else this.balloonText?e=this.formatBalloonText(this.balloonText,f,c):isNaN(e)||(e=this.formatValue(e,c));if(a!=this.prevBX||b!=this.prevBY)this.balloon.setPosition(a,
b),this.prevBX=a,this.prevBY=b,e&&this.balloon.showBalloon(e)}},adjustBalloonCoordinate:function(a){return a},createBalloon:function(){var a=this.chart,b=a.chartCursor;b&&(b=b.cursorPosition,"mouse"!=b&&(this.stickBalloonToCategory=!0),"start"==b&&(this.stickBalloonToStart=!0),"ValueAxis"==this.cname&&(this.stickBalloonToCategory=!1));this.balloon&&(this.balloon.destroy&&this.balloon.destroy(),d.extend(this.balloon,a.balloon,!0))},setBalloonBounds:function(){var a=this.balloon;if(a){var b=this.chart;
a.cornerRadius=0;a.shadowAlpha=0;a.borderThickness=1;a.borderAlpha=1;a.adjustBorderColor=!1;a.showBullet=!1;this.balloon=a;a.chart=b;a.mainSet=b.plotBalloonsSet;a.pointerWidth=this.tickLength;if(this.parseDates||"date"==this.type)a.pointerWidth=0;a.className=this.id;b="V";"V"==this.orientation&&(b="H");this.stickBalloonToCategory||(a.animationDuration=0);var c,e,d,f,g=this.inside,k=this.width,l=this.height;switch(this.position){case "bottom":c=0;e=k;g?(d=0,f=l):(d=l,f=l+1E3);break;case "top":c=0;
e=k;g?(d=0,f=l):(d=-1E3,f=0);break;case "left":d=0;f=l;g?(c=0,e=k):(c=-1E3,e=0);break;case "right":d=0,f=l,g?(c=0,e=k):(c=k,e=k+1E3)}a.drop||(a.pointerOrientation=b);a.setBounds(c,d,e,f)}}})})();(function(){var d=window.AmCharts;d.ValueAxis=d.Class({inherits:d.AxisBase,construct:function(a){this.cname="ValueAxis";this.createEvents("axisChanged","logarithmicAxisFailed","axisZoomed","axisIntZoomed");d.ValueAxis.base.construct.call(this,a);this.dataChanged=!0;this.stackType="none";this.position="left";this.unitPosition="right";this.includeAllValues=this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};
this.scrollbar=!1;this.baseValue=0;this.radarCategoriesEnabled=!0;this.axisFrequency=1;this.gridType="polygons";this.useScientificNotation=!1;this.axisTitleOffset=10;this.pointPosition="axis";this.minMaxMultiplier=1;this.logGridLimit=2;this.totalTextOffset=this.treatZeroAs=0;this.minPeriod="ss";this.relativeStart=0;this.relativeEnd=1;d.applyTheme(this,a,this.cname)},updateData:function(){0>=this.gridCountR&&(this.gridCountR=1);this.totals=[];this.data=this.chart.chartData;var a=this.chart;"xy"!=a.type&&
(this.stackGraphs("smoothedLine"),this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step"));this.recalculateToPercents&&this.recalculate();this.synchronizationMultiplier&&this.synchronizeWith?(d.isString(this.synchronizeWith)&&(this.synchronizeWith=a.getValueAxisById(this.synchronizeWith)),this.synchronizeWith&&(this.synchronizeWithAxis(this.synchronizeWith),this.foundGraphs=!0)):(this.foundGraphs=!1,this.getMinMax(),0===this.start&&this.end==this.data.length-1&&isNaN(this.minZoom)&&
isNaN(this.maxZoom)&&(this.fullMin=this.min,this.fullMax=this.max,"date"!=this.type&&(isNaN(this.minimum)||(this.fullMin=this.minimum),isNaN(this.maximum)||(this.fullMax=this.maximum)),this.logarithmic&&(this.fullMin=this.logMin,0===this.fullMin&&(this.fullMin=this.treatZeroAs)),"date"==this.type&&(this.minimumDate||(this.fullMin=this.minRR),this.maximumDate||(this.fullMax=this.maxRR))))},draw:function(){d.ValueAxis.base.draw.call(this);var a=this.chart,b=this.set;this.labelRotationR=this.labelRotation;
d.setCN(a,this.set,"value-axis value-axis-"+this.id);d.setCN(a,this.labelsSet,"value-axis value-axis-"+this.id);d.setCN(a,this.axisLine.axisSet,"value-axis value-axis-"+this.id);var c=this.type;"duration"==c&&(this.duration="ss");!0===this.dataChanged&&(this.updateData(),this.dataChanged=!1);"date"==c&&(this.logarithmic=!1,this.min=this.minRR,this.max=this.maxRR,this.reversed=!1,this.getDateMinMax());if(this.logarithmic){var e=this.treatZeroAs,h=this.getExtremes(0,this.data.length-1).min;!isNaN(this.minimum)&&
this.minimum<h&&(h=this.minimum);this.logMin=h;this.minReal<h&&(this.minReal=h);isNaN(this.minReal)&&(this.minReal=h);0<e&&0===h&&(this.minReal=h=e);if(0>=h||0>=this.minimum){this.fire({type:"logarithmicAxisFailed",chart:a});return}}this.grid0=null;var f,g,k=a.dx,l=a.dy,e=!1,h=this.logarithmic;if(isNaN(this.min)||isNaN(this.max)||!this.foundGraphs||Infinity==this.min||-Infinity==this.max)e=!0;else{"date"==this.type&&this.min==this.max&&(this.max+=this.minDuration(),this.min-=this.minDuration());var m=
this.labelFrequency,n=this.showFirstLabel,q=this.showLastLabel,p=1,t=0;this.minCalc=this.min;this.maxCalc=this.max;this.strictMinMax&&(isNaN(this.minimum)||(this.min=this.minimum),isNaN(this.maximum)||(this.max=this.maximum));isNaN(this.minZoom)||(this.minReal=this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);if(this.logarithmic){g=Math.log(this.fullMax)*Math.LOG10E-Math.log(this.fullMin)*Math.LOG10E;var r=Math.log(this.max)/Math.LN10-Math.log(this.fullMin)*Math.LOG10E;this.relativeStart=
(Math.log(this.minReal)/Math.LN10-Math.log(this.fullMin)*Math.LOG10E)/g;this.relativeEnd=r/g}else this.relativeStart=d.fitToBounds((this.min-this.fullMin)/(this.fullMax-this.fullMin),0,1),this.relativeEnd=d.fitToBounds((this.max-this.fullMin)/(this.fullMax-this.fullMin),0,1);var r=Math.round((this.maxCalc-this.minCalc)/this.step)+1,w;!0===h?(w=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E,this.stepWidth=this.axisWidth/w,w>this.logGridLimit&&(r=Math.ceil(Math.log(this.max)*Math.LOG10E)+
1,t=Math.round(Math.log(this.minReal)*Math.LOG10E),r>this.gridCountR&&(p=Math.ceil(r/this.gridCountR)))):this.stepWidth=this.axisWidth/(this.max-this.min);var x=0;1>this.step&&-1<this.step&&(x=d.getDecimals(this.step));this.integersOnly&&(x=0);x>this.maxDecCount&&(x=this.maxDecCount);var y=this.precision;isNaN(y)||(x=y);isNaN(this.maxZoom)&&(this.max=d.roundTo(this.max,this.maxDecCount),this.min=d.roundTo(this.min,this.maxDecCount));g={};g.precision=x;g.decimalSeparator=a.nf.decimalSeparator;g.thousandsSeparator=
a.nf.thousandsSeparator;this.numberFormatter=g;var u;this.exponential=!1;for(g=t;g<r;g+=p){var A=d.roundTo(this.step*g+this.min,x);-1!=String(A).indexOf("e")&&(this.exponential=!0)}this.duration&&(this.maxInterval=d.getMaxInterval(this.max,this.duration));var x=this.step,z,A=this.minorGridAlpha;this.minorGridEnabled&&(z=this.getMinorGridStep(x,this.stepWidth*x));if(this.autoGridCount||0!==this.gridCount)if("date"==c)this.generateDFObject(),this.timeDifference=this.max-this.min,this.maxTime=this.lastTime=
this.max,this.startTime=this.firstTime=this.min,this.parseDatesDraw();else for(r>=this.autoRotateCount&&!isNaN(this.autoRotateAngle)&&(this.labelRotationR=this.autoRotateAngle),c=this.minCalc,h&&(r++,c=this.maxCalc-r*x),this.gridCountReal=r,g=this.startCount=t;g<r;g+=p)if(t=x*g+c,t=d.roundTo(t,this.maxDecCount+1),!this.integersOnly||Math.round(t)==t)if(isNaN(y)||Number(d.toFixed(t,y))==t){if(!0===h)if(w>this.logGridLimit)t=Math.pow(10,g);else if(0>=t&&(t=c+x*g+x/2,0>=t))continue;u=this.formatValue(t,
!1,g);Math.round(g/m)!=g/m&&(u=void 0);if(0===g&&!n||g==r-1&&!q)u=" ";f=this.getCoordinate(t);var B;this.rotate&&this.autoWrap&&(B=this.stepWidth*x-10);u=new this.axisItemRenderer(this,f,u,void 0,B,void 0,void 0,this.boldLabels);this.pushAxisItem(u);if(t==this.baseValue&&"radar"!=a.type){var D,C;u=this.width;var J=this.height;"H"==this.orientation?0<=f&&f<=u+1&&(D=[f,f,f+k],C=[J,0,l]):0<=f&&f<=J+1&&(D=[0,u,u+k],C=[f,f,f+l]);D&&(u=d.fitToBounds(2*this.gridAlpha,0,1),isNaN(this.zeroGridAlpha)||(u=this.zeroGridAlpha),
u=d.line(a.container,D,C,this.gridColor,u,1,this.dashLength),u.translate(this.x,this.y),this.grid0=u,a.axesSet.push(u),u.toBack(),d.setCN(a,u,this.bcn+"zero-grid-"+this.id),d.setCN(a,u,this.bcn+"zero-grid"))}if(!isNaN(z)&&0<A&&g<r-1){u=x/z;h&&(z=x*(g+p)+this.minCalc,z=d.roundTo(z,this.maxDecCount+1),w>this.logGridLimit&&(z=Math.pow(10,g+p)),u=9,z=(z-t)/u);f=this.gridAlpha;this.gridAlpha=this.minorGridAlpha;for(J=1;J<u;J++){var H=this.getCoordinate(t+z*J),H=new this.axisItemRenderer(this,H,"",!1,0,
0,!1,!1,0,!0);this.pushAxisItem(H)}this.gridAlpha=f}}w=this.guides;B=w.length;if(0<B){D=this.fillAlpha;for(g=this.fillAlpha=0;g<B;g++)C=w[g],k=NaN,z=C.above,isNaN(C.toValue)||(k=this.getCoordinate(C.toValue),u=new this.axisItemRenderer(this,k,"",!0,NaN,NaN,C),this.pushAxisItem(u,z)),l=NaN,isNaN(C.value)||(l=this.getCoordinate(C.value),u=new this.axisItemRenderer(this,l,C.label,!0,NaN,(k-l)/2,C),this.pushAxisItem(u,z)),isNaN(k)&&(l-=3,k=l+3),isNaN(k-l)||0>l&&0>k||(k=new this.guideFillRenderer(this,
l,k,C),this.pushAxisItem(k,z),z=k.graphics(),C.graphics=z,C.balloonText&&this.addEventListeners(z,C));this.fillAlpha=D}g=this.baseValue;this.min>this.baseValue&&this.max>this.baseValue&&(g=this.min);this.min<this.baseValue&&this.max<this.baseValue&&(g=this.max);h&&g<this.minReal&&(g=this.minReal);this.baseCoord=this.getCoordinate(g,!0);g={type:"axisChanged",target:this,chart:a};g.min=h?this.minReal:this.min;g.max=this.max;this.fire(g);this.axisCreated=!0}h=this.axisLine.set;g=this.labelsSet;b.translate(this.x,
this.y);g.translate(this.x,this.y);this.positionTitle();"radar"!=a.type&&h.toFront();!this.visible||e?(b.hide(),h.hide(),g.hide()):(b.show(),h.show(),g.show());this.axisY=this.y;this.axisX=this.x},getDateMinMax:function(){this.minimumDate&&(this.minimumDate instanceof Date||(this.minimumDate=d.getDate(this.minimumDate,this.chart.dataDateFormat,"fff")),this.min=this.minimumDate.getTime());this.maximumDate&&(this.maximumDate instanceof Date||(this.maximumDate=d.getDate(this.maximumDate,this.chart.dataDateFormat,
"fff")),this.max=this.maximumDate.getTime())},formatValue:function(a,b,c){var e=this.exponential,h=this.logarithmic,f=this.numberFormatter,g=this.chart;if(f)return!0===this.logarithmic&&(e=-1!=String(a).indexOf("e")?!0:!1),this.useScientificNotation&&(e=!0),this.usePrefixes&&(e=!1),e?(c=-1==String(a).indexOf("e")?a.toExponential(15):String(a),e=c.split("e"),c=Number(e[0]),e=Number(e[1]),c=d.roundTo(c,14),10==c&&(c=1,e+=1),c=c+"e"+e,0===a&&(c="0"),1==a&&(c="1")):(h&&(e=String(a).split("."),e[1]?(f.precision=
e[1].length,0>c&&(f.precision=Math.abs(c)),b&&1<a&&(f.precision=0)):f.precision=-1),c=this.usePrefixes?d.addPrefix(a,g.prefixesOfBigNumbers,g.prefixesOfSmallNumbers,f,!b):d.formatNumber(a,f,f.precision)),this.duration&&(b&&(f.precision=0),c=d.formatDuration(a,this.duration,"",this.durationUnits,this.maxInterval,f)),"date"==this.type&&(c=d.formatDate(new Date(a),this.currentDateFormat,g)),this.recalculateToPercents?c+="%":(b=this.unit)&&(c="left"==this.unitPosition?b+c:c+b),this.labelFunction&&(c=
"date"==this.type?this.labelFunction(c,new Date(a),this).toString():this.labelFunction(a,c,this).toString()),c},getMinorGridStep:function(a,b){var c=[5,4,2];60>b&&c.shift();for(var e=Math.floor(Math.log(Math.abs(a))*Math.LOG10E),d=0;d<c.length;d++){var f=a/c[d],g=Math.floor(Math.log(Math.abs(f))*Math.LOG10E);if(!(1<Math.abs(e-g)))if(1>a){if(g=Math.pow(10,-g)*f,g==Math.round(g))return f}else if(f==Math.round(f))return f}},stackGraphs:function(a){var b=this.stackType;"stacked"==b&&(b="regular");"line"==
b&&(b="none");"100% stacked"==b&&(b="100%");this.stackType=b;var c=[],e=[],h=[],f=[],g,k=this.chart.graphs,l,m,n,q,p,t=this.baseValue,r=!1;if("line"==a||"step"==a||"smoothedLine"==a)r=!0;if(r&&("regular"==b||"100%"==b))for(q=0;q<k.length;q++)n=k[q],n.stackGraph=null,n.hidden||(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(l&&(n.stackGraph=l),l=n));n=this.start-10;l=this.end+10;q=this.data.length-1;n=d.fitToBounds(n,0,q);l=d.fitToBounds(l,0,q);for(p=n;p<=l;p++){var w=0;for(q=
0;q<k.length;q++)if(n=k[q],n.hidden)n.newStack&&(h[p]=NaN,e[p]=NaN);else if(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable)if(m=this.data[p].axes[this.id].graphs[n.id],g=m.values.value,isNaN(g))n.newStack&&(h[p]=NaN,e[p]=NaN);else{var x=d.getDecimals(g);w<x&&(w=x);isNaN(f[p])?f[p]=Math.abs(g):f[p]+=Math.abs(g);f[p]=d.roundTo(f[p],w);x=n.fillToGraph;r&&x&&(x=this.data[p].axes[this.id].graphs[x.id])&&(m.values.open=x.values.value);"regular"==b&&(r&&(isNaN(c[p])?(c[p]=g,m.values.close=
g,m.values.open=this.baseValue):(isNaN(g)?m.values.close=c[p]:m.values.close=g+c[p],m.values.open=c[p],c[p]=m.values.close)),"column"==a&&(n.newStack&&(h[p]=NaN,e[p]=NaN),m.values.close=g,0>g?(m.values.close=g,isNaN(e[p])?m.values.open=t:(m.values.close+=e[p],m.values.open=e[p]),e[p]=m.values.close):(m.values.close=g,isNaN(h[p])?m.values.open=t:(m.values.close+=h[p],m.values.open=h[p]),h[p]=m.values.close)))}}for(p=this.start;p<=this.end;p++)for(q=0;q<k.length;q++)(n=k[q],n.hidden)?n.newStack&&(h[p]=
NaN,e[p]=NaN):(m=n.type,n.chart==this.chart&&n.valueAxis==this&&a==m&&n.stackable&&(m=this.data[p].axes[this.id].graphs[n.id],g=m.values.value,isNaN(g)||(c=g/f[p]*100,m.values.percents=c,m.values.total=f[p],n.newStack&&(h[p]=NaN,e[p]=NaN),"100%"==b&&(isNaN(e[p])&&(e[p]=0),isNaN(h[p])&&(h[p]=0),0>c?(m.values.close=d.fitToBounds(c+e[p],-100,100),m.values.open=e[p],e[p]=m.values.close):(m.values.close=d.fitToBounds(c+h[p],-100,100),m.values.open=h[p],h[p]=m.values.close)))))},recalculate:function(){var a=
this.chart,b=a.graphs,c;for(c=0;c<b.length;c++){var e=b[c];if(e.valueAxis==this){var h="value";if("candlestick"==e.type||"ohlc"==e.type)h="open";var f,g,k=this.end+2,k=d.fitToBounds(this.end+1,0,this.data.length-1),l=this.start;0<l&&l--;var m;g=this.start;e.compareFromStart&&(g=0);if(!isNaN(a.startTime)&&(m=a.categoryAxis)){var n=m.minDuration(),n=new Date(a.startTime+n/2),q=d.resetDateToMin(new Date(a.startTime),m.minPeriod).getTime();d.resetDateToMin(new Date(n),m.minPeriod).getTime()>q&&g++}if(m=
a.recalculateFromDate)m=d.getDate(m,a.dataDateFormat,"fff"),g=a.getClosestIndex(a.chartData,"time",m.getTime(),!0,0,a.chartData.length),k=a.chartData.length-1;for(m=g;m<=k&&(g=this.data[m].axes[this.id].graphs[e.id],f=g.values[h],e.recalculateValue&&(f=g.dataContext[e.valueField+e.recalculateValue]),isNaN(f));m++);this.recBaseValue=f;for(h=l;h<=k;h++){g=this.data[h].axes[this.id].graphs[e.id];g.percents={};var l=g.values,p;for(p in l)g.percents[p]="percents"!=p?l[p]/f*100-100:l[p]}}}},getMinMax:function(){var a=
!1,b=this.chart,c=b.graphs,e;for(e=0;e<c.length;e++){var h=c[e].type;("line"==h||"step"==h||"smoothedLine"==h)&&this.expandMinMax&&(a=!0)}a&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++);"serial"==b.type&&(!0!==b.categoryAxis.parseDates||a||this.end<this.data.length-1&&this.end++);this.includeAllValues&&(this.start=0,this.end=this.data.length-1);a=this.minMaxMultiplier;b=this.getExtremes(this.start,this.end);this.min=b.min;this.max=b.max;this.minRR=this.min;this.maxRR=this.max;
a=(this.max-this.min)*(a-1);this.min-=a;this.max+=a;a=this.guides.length;if(this.includeGuidesInMinMax&&0<a)for(b=0;b<a;b++)c=this.guides[b],c.toValue<this.min&&(this.min=c.toValue),c.value<this.min&&(this.min=c.value),c.toValue>this.max&&(this.max=c.toValue),c.value>this.max&&(this.max=c.value);isNaN(this.minimum)||(this.min=this.minimum);isNaN(this.maximum)||(this.max=this.maximum);"date"==this.type&&this.getDateMinMax();this.min>this.max&&(a=this.max,this.max=this.min,this.min=a);isNaN(this.minZoom)||
(this.min=this.minZoom);isNaN(this.maxZoom)||(this.max=this.maxZoom);this.minCalc=this.min;this.maxCalc=this.max;this.minReal=this.min;this.maxReal=this.max;0===this.min&&0===this.max&&(this.max=9);this.min>this.max&&(this.min=this.max-1);a=this.min;b=this.max;c=this.max-this.min;e=0===c?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;isNaN(this.maximum)&&(this.max=Math.ceil(this.max/e)*e+e);isNaN(this.minimum)&&(this.min=
Math.floor(this.min/e)*e-e);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=0>this.max?0:100);c=this.max-this.min;e=Math.pow(10,Math.floor(Math.log(Math.abs(c))*Math.LOG10E))/10;this.step=Math.ceil(c/this.gridCountR/e)*e;c=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E));c=d.fixStepE(c);e=Math.ceil(this.step/c);5<e&&(e=10);5>=e&&2<e&&(e=5);this.step=Math.ceil(this.step/(c*e))*c*e;isNaN(this.setStep)||(this.step=
this.setStep);1>c?(this.maxDecCount=Math.abs(Math.log(Math.abs(c))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),this.step=d.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0;this.min=this.step*Math.floor(this.min/this.step);this.max=this.step*Math.ceil(this.max/this.step);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);1<this.minReal&&1<this.max-this.minReal&&(this.minReal=Math.floor(this.minReal));c=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*Math.LOG10E));
0===this.min&&(this.minReal=c);0===this.min&&1<this.minReal&&(this.minReal=1);0<this.min&&0<this.minReal-this.step&&(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min);this.logarithmic&&(2<Math.log(b)*Math.LOG10E-Math.log(a)*Math.LOG10E?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E)),this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(b))*Math.LOG10E))):(a=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*
Math.LOG10E))/10<a&&(this.minReal=this.min=10*a)))},getExtremes:function(a,b){var c,e,d;for(d=a;d<=b;d++){var f=this.data[d].axes[this.id].graphs,g;for(g in f)if(f.hasOwnProperty(g)){var k=this.chart.graphsById[g];if(k.includeInMinMax&&(!k.hidden||this.includeHidden)){isNaN(c)&&(c=Infinity);isNaN(e)&&(e=-Infinity);this.foundGraphs=!0;k=f[g].values;this.recalculateToPercents&&(k=f[g].percents);var l;if(this.minMaxField)l=k[this.minMaxField],l<c&&(c=l),l>e&&(e=l);else for(var m in k)k.hasOwnProperty(m)&&
"percents"!=m&&"total"!=m&&"error"!=m&&(l=k[m],l<c&&(c=l),l>e&&(e=l))}}}return{min:c,max:e}},zoomOut:function(a){this.maxZoom=this.minZoom=NaN;this.zoomToRelativeValues(0,1,a)},zoomToRelativeValues:function(a,b,c){if(this.reversed){var e=a;a=1-b;b=1-e}var d=this.fullMax,e=this.fullMin,f=e+(d-e)*a,g=e+(d-e)*b;this.logarithmic&&(d=Math.log(d)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.pow(10,d*a+Math.log(e)*Math.LOG10E),g=Math.pow(10,d*b+Math.log(e)*Math.LOG10E));return this.zoomToValues(f,g,c)},zoomToValues:function(a,
b,c){if(b<a){var e=b;b=a;a=e}var h=this.fullMax,e=this.fullMin;this.relativeStart=(a-e)/(h-e);this.relativeEnd=(b-e)/(h-e);if(this.logarithmic){var h=Math.log(h)*Math.LOG10E-Math.log(e)*Math.LOG10E,f=Math.log(b)/Math.LN10-Math.log(e)*Math.LOG10E;this.relativeStart=(Math.log(a)/Math.LN10-Math.log(e)*Math.LOG10E)/h;this.relativeEnd=f/h}if(this.minZoom!=a||this.maxZoom!=b)return this.minZoom=a,this.maxZoom=b,e={type:"axisZoomed"},e.chart=this.chart,e.valueAxis=this,e.startValue=a,e.endValue=b,e.relativeStart=
this.relativeStart,e.relativeEnd=this.relativeEnd,this.prevStartValue==a&&this.prevEndValue==b||this.fire(e),this.prevStartValue=a,this.prevEndValue=b,c||(a={},d.copyProperties(e,a),a.type="axisIntZoomed",this.fire(a)),0===this.relativeStart&&1==this.relativeEnd&&(this.maxZoom=this.minZoom=NaN),!0},coordinateToValue:function(a){if(isNaN(a))return NaN;var b=this.axisWidth,c=this.stepWidth,e=this.reversed,d=this.rotate,f=this.min,g=this.minReal;return!0===this.logarithmic?Math.pow(10,(d?!0===e?(b-a)/
c:a/c:!0===e?a/c:(b-a)/c)+Math.log(g)*Math.LOG10E):!0===e?d?f-(a-b)/c:a/c+f:d?a/c+f:f-(a-b)/c},getCoordinate:function(a,b){if(isNaN(a))return NaN;var c=this.rotate,e=this.reversed,d=this.axisWidth,f=this.stepWidth,g=this.min,k=this.minReal;!0===this.logarithmic?(0===a&&(a=this.treatZeroAs),g=Math.log(a)*Math.LOG10E-Math.log(k)*Math.LOG10E,c=c?!0===e?d-f*g:f*g:!0===e?f*g:d-f*g):c=!0===e?c?d-f*(a-g):f*(a-g):c?f*(a-g):d-f*(a-g);1E7<Math.abs(c)&&(c=c/Math.abs(c)*1E7);b||(c=Math.round(c));return c},synchronizeWithAxis:function(a){this.synchronizeWith=
a;this.listenTo(this.synchronizeWith,"axisChanged",this.handleSynchronization)},handleSynchronization:function(){if(this.synchronizeWith){d.isString(this.synchronizeWith)&&(this.synchronizeWith=this.chart.getValueAxisById(this.synchronizeWith));var a=this.synchronizeWith,b=a.min,c=a.max,a=a.step,e=this.synchronizationMultiplier;e&&(this.min=b*e,this.max=c*e,this.step=a*e,b=Math.abs(Math.log(Math.abs(Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E))))*Math.LOG10E),this.maxDecCount=
b=Math.round(b),this.draw())}}})})();(function(){var d=window.AmCharts;d.RecAxis=d.Class({construct:function(a){var b=a.chart,c=a.axisThickness,e=a.axisColor,h=a.axisAlpha,f=a.offset,g=a.dx,k=a.dy,l=a.x,m=a.y,n=a.height,q=a.width,p=b.container;"H"==a.orientation?(e=d.line(p,[0,q],[0,0],e,h,c),this.axisWidth=a.width,"bottom"==a.position?(k=c/2+f+n+m-1,c=l):(k=-c/2-f+m+k,c=g+l)):(this.axisWidth=a.height,"right"==a.position?(e=d.line(p,[0,0,-g],[0,n,n-k],e,h,c),k=m+k,c=c/2+f+g+q+l-1):(e=d.line(p,[0,0],[0,n],e,h,c),k=m,c=-c/2-f+l));e.translate(c,
k);c=b.container.set();c.push(e);b.axesSet.push(c);d.setCN(b,e,a.bcn+"line");this.axisSet=c;this.set=e}})})();(function(){var d=window.AmCharts;d.RecItem=d.Class({construct:function(a,b,c,e,h,f,g,k,l,m,n,q){b=Math.round(b);var p=a.chart;this.value=c;void 0==c&&(c="");l||(l=0);void 0==e&&(e=!0);var t=p.fontFamily,r=a.fontSize;void 0==r&&(r=p.fontSize);var w=a.color;void 0==w&&(w=p.color);void 0!==n&&(w=n);var x=a.chart.container,y=x.set();this.set=y;var u=a.axisThickness,A=a.axisColor,z=a.axisAlpha,B=a.tickLength,D=a.gridAlpha,C=a.gridThickness,J=a.gridColor,H=a.dashLength,S=a.fillColor,O=a.fillAlpha,Q=a.labelsEnabled;
n=a.labelRotationR;var ia=a.counter,I=a.inside,Z=a.labelOffset,va=a.dx,ma=a.dy,Oa=a.orientation,ea=a.position,ca=a.previousCoord,X=a.height,za=a.width,da=a.offset,fa,Aa;g?(void 0!==g.id&&(q=p.classNamePrefix+"-guide-"+g.id),Q=!0,isNaN(g.tickLength)||(B=g.tickLength),void 0!=g.lineColor&&(J=g.lineColor),void 0!=g.color&&(w=g.color),isNaN(g.lineAlpha)||(D=g.lineAlpha),isNaN(g.dashLength)||(H=g.dashLength),isNaN(g.lineThickness)||(C=g.lineThickness),!0===g.inside&&(I=!0,0<da&&(da=0)),isNaN(g.labelRotation)||
(n=g.labelRotation),isNaN(g.fontSize)||(r=g.fontSize),g.position&&(ea=g.position),void 0!==g.boldLabel&&(k=g.boldLabel),isNaN(g.labelOffset)||(Z=g.labelOffset)):""===c&&(B=0);m&&!isNaN(a.minorTickLength)&&(B=a.minorTickLength);var ga="start";0<h&&(ga="middle");a.centerLabels&&(ga="middle");var T=n*Math.PI/180,Y,Da,G=0,v=0,na=0,ha=Y=0,Pa=0;"V"==Oa&&(n=0);var ba;Q&&""!==c&&(ba=a.autoWrap&&0===n?d.wrappedText(x,c,w,t,r,ga,k,Math.abs(h),0):d.text(x,c,w,t,r,ga,k),ga=ba.getBBox(),ha=ga.width,Pa=ga.height);
if("H"==Oa){if(0<=b&&b<=za+1&&(0<B&&0<z&&b+l<=za+1&&(fa=d.line(x,[b+l,b+l],[0,B],A,z,C),y.push(fa)),0<D&&(Aa=d.line(x,[b,b+va,b+va],[X,X+ma,ma],J,D,C,H),y.push(Aa))),v=0,G=b,g&&90==n&&I&&(G-=r),!1===e?(ga="start",v="bottom"==ea?I?v+B:v-B:I?v-B:v+B,G+=3,0<h&&(G+=h/2-3,ga="middle"),0<n&&(ga="middle")):ga="middle",1==ia&&0<O&&!g&&!m&&ca<za&&(e=d.fitToBounds(b,0,za),ca=d.fitToBounds(ca,0,za),Y=e-ca,0<Y&&(Da=d.rect(x,Y,a.height,S,O),Da.translate(e-Y+va,ma),y.push(Da))),"bottom"==ea?(v+=X+r/2+da,I?(0<n?
(v=X-ha/2*Math.sin(T)-B-3,G+=ha/2*Math.cos(T)-4+2):0>n?(v=X+ha*Math.sin(T)-B-3+2,G+=-ha*Math.cos(T)-Pa*Math.sin(T)-4):v-=B+r+3+3,v-=Z):(0<n?(v=X+ha/2*Math.sin(T)+B+3,G-=ha/2*Math.cos(T)):0>n?(v=X+B+3-ha/2*Math.sin(T)+2,G+=ha/2*Math.cos(T)):v+=B+u+3+3,v+=Z)):(v+=ma+r/2-da,G+=va,I?(0<n?(v=ha/2*Math.sin(T)+B+3,G-=ha/2*Math.cos(T)):v+=B+3,v+=Z):(0<n?(v=-(ha/2)*Math.sin(T)-B-6,G+=ha/2*Math.cos(T)):v-=B+r+3+u+3,v-=Z)),"bottom"==ea?Y=(I?X-B-1:X+u-1)+da:(na=va,Y=(I?ma:ma-B-u+1)-da),f&&(G+=f),f=G,0<n&&(f+=
ha/2*Math.cos(T)),ba&&(r=0,I&&(r=ha/2*Math.cos(T)),f+r>za+2||0>f))ba.remove(),ba=null}else{0<=b&&b<=X+1&&(0<B&&0<z&&b+l<=X+1&&(fa=d.line(x,[0,B+1],[b+l,b+l],A,z,C),y.push(fa)),0<D&&(Aa=d.line(x,[0,va,za+va],[b,b+ma,b+ma],J,D,C,H),y.push(Aa)));ga="end";if(!0===I&&"left"==ea||!1===I&&"right"==ea)ga="start";v=b-Pa/2+2;1==ia&&0<O&&!g&&!m&&(e=d.fitToBounds(b,0,X),ca=d.fitToBounds(ca,0,X),T=e-ca,Da=d.polygon(x,[0,a.width,a.width,0],[0,0,T,T],S,O),Da.translate(va,e-T+ma),y.push(Da));v+=r/2;"right"==ea?(G+=
va+za+da,v+=ma,I?(f||(v-=r/2+3),G=G-(B+4)-Z):(G+=B+4+u,v-=2,G+=Z)):I?(G+=B+4-da,f||(v-=r/2+3),g&&(G+=va,v+=ma),G+=Z):(G+=-B-u-4-2-da,v-=2,G-=Z);fa&&("right"==ea?(na+=va+da+za-1,Y+=ma,na=I?na-u:na+u):(na-=da,I||(na-=B+u)));f&&(v+=f);I=-3;"right"==ea&&(I+=ma);ba&&(v>X+1||v<I)&&(ba.remove(),ba=null)}fa&&(fa.translate(na,Y),d.setCN(p,fa,a.bcn+"tick"),d.setCN(p,fa,q,!0),g&&d.setCN(p,fa,"guide"));!1===a.visible&&(fa&&fa.remove(),ba&&(ba.remove(),ba=null));ba&&(ba.attr({"text-anchor":ga}),ba.translate(G,
v,NaN,!0),0!==n&&ba.rotate(-n,a.chart.backgroundColor),a.allLabels.push(ba),this.label=ba,d.setCN(p,ba,a.bcn+"label"),d.setCN(p,ba,q,!0),g&&d.setCN(p,ba,"guide"));Aa&&(d.setCN(p,Aa,a.bcn+"grid"),d.setCN(p,Aa,q,!0),g&&d.setCN(p,Aa,"guide"));Da&&(d.setCN(p,Da,a.bcn+"fill"),d.setCN(p,Da,q,!0));m?Aa&&d.setCN(p,Aa,a.bcn+"grid-minor"):(a.counter=0===ia?1:0,a.previousCoord=b);0===this.set.node.childNodes.length&&this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}})})();(function(){var d=window.AmCharts;d.RecFill=d.Class({construct:function(a,b,c,e){var h=a.dx,f=a.dy,g=a.orientation,k=0;if(c<b){var l=b;b=c;c=l}var m=e.fillAlpha;isNaN(m)&&(m=0);var l=a.chart.container,n=e.fillColor;"V"==g?(b=d.fitToBounds(b,0,a.height),c=d.fitToBounds(c,0,a.height)):(b=d.fitToBounds(b,0,a.width),c=d.fitToBounds(c,0,a.width));c-=b;isNaN(c)&&(c=4,k=2,m=0);0>c&&"object"==typeof n&&(n=n.join(",").split(",").reverse());"V"==g?(g=d.rect(l,a.width,c,n,m),g.translate(h,b-k+f)):(g=d.rect(l,
c,a.height,n,m),g.translate(b-k+h,f));d.setCN(a.chart,g,"guide-fill");e.id&&d.setCN(a.chart,g,"guide-fill-"+e.id);this.set=l.set([g])},graphics:function(){return this.set},getLabel:function(){}})})();(function(){var d=window.AmCharts;d.AmChart=d.Class({construct:function(a){this.svgIcons=this.tapToActivate=!0;this.theme=a;this.classNamePrefix="amcharts";this.addClassNames=!1;this.version="3.20.5";d.addChart(this);this.createEvents("buildStarted","dataUpdated","init","rendered","drawn","failed","resized","animationFinished");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=
0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.usePrefixes=!1;this.autoResize=!0;this.autoDisplay=!1;this.addCodeCredits=this.accessible=!0;this.touchStartTime=this.touchClickDuration=0;this.precision=-1;this.percentPrecision=2;this.decimalSeparator=".";this.thousandsSeparator=",";this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;this.timeOuts=[];this.creditsPosition="top-left";var b=document.createElement("div"),
c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.chartDiv=b;b=document.createElement("div");c=b.style;c.overflow="hidden";c.position="relative";c.textAlign="left";this.legendDiv=b;this.titleHeight=0;this.hideBalloonTime=150;this.handDrawScatter=2;this.cssScale=this.handDrawThickness=1;this.cssAngle=0;this.prefixesOfBigNumbers=[{number:1E3,prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},
{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:.001,prefix:"m"}];this.panEventsEnabled=!0;this.product="amcharts";this.animations=[];this.balloon=new d.AmBalloon(this.theme);this.balloon.chart=this;this.processTimeout=0;this.processCount=1E3;this.animatable=[];d.applyTheme(this,
a,"AmChart")},drawChart:function(){0<this.realWidth&&0<this.realHeight&&(this.drawBackground(),this.redrawLabels(),this.drawTitles(),this.brr(),this.renderFix(),this.chartDiv&&(this.boundingRect=this.chartDiv.getBoundingClientRect()))},makeAccessible:function(a,b,c){this.accessible&&a&&(c&&a.setAttr("role",c),a.setAttr("aria-label",b))},drawBackground:function(){d.remove(this.background);var a=this.container,b=this.backgroundColor,c=this.backgroundAlpha,e=this.set;d.isModern||0!==c||(c=.001);var h=
this.updateWidth();this.realWidth=h;var f=this.updateHeight();this.realHeight=f;b=d.polygon(a,[0,h-1,h-1,0],[0,0,f-1,f-1],b,c,1,this.borderColor,this.borderAlpha);d.setCN(this,b,"bg");this.background=b;e.push(b);if(b=this.backgroundImage)a=a.image(b,0,0,h,f),d.setCN(this,b,"bg-image"),this.bgImg=a,e.push(a)},drawTitles:function(a){var b=this.titles;this.titleHeight=0;if(d.ifArray(b)){var c=20,e;for(e=0;e<b.length;e++){var h=b[e],h=d.processObject(h,d.Title,this.theme);if(!1!==h.enabled){var f=h.color;
void 0===f&&(f=this.color);var g=h.size;isNaN(g)&&(g=this.fontSize+2);isNaN(h.alpha);var k=this.marginLeft,l=!0;void 0!==h.bold&&(l=h.bold);f=d.wrappedText(this.container,h.text,f,this.fontFamily,g,"middle",l,this.realWidth-35);f.translate(k+(this.realWidth-this.marginRight-k)/2,c);f.node.style.pointerEvents="none";h.sprite=f;void 0!==h.tabIndex&&f.setAttr("tabindex",h.tabIndex);d.setCN(this,f,"title");h.id&&d.setCN(this,f,"title-"+h.id);f.attr({opacity:h.alpha});c+=f.getBBox().height+5;a?f.remove():
this.freeLabelsSet.push(f)}}this.titleHeight=c-10}},write:function(a){var b=this;if(b.listeners)for(var c=0;c<b.listeners.length;c++){var e=b.listeners[c];b.addListener(e.event,e.method)}b.fire({type:"buildStarted",chart:b});b.afterWriteTO&&clearTimeout(b.afterWriteTO);0<b.processTimeout?b.afterWriteTO=setTimeout(function(){b.afterWrite.call(b,a)},b.processTimeout):b.afterWrite(a)},afterWrite:function(a){if(a="object"!=typeof a?document.getElementById(a):a){for(;a.firstChild;)a.removeChild(a.firstChild);
this.div=a;a.style.overflow="hidden";a.style.textAlign="left";var b=this.chartDiv,c=this.legendDiv,e=this.legend,h=c.style,f=b.style;this.measure();this.previousHeight=this.divRealHeight;this.previousWidth=this.divRealWidth;var g,k=document.createElement("div");g=k.style;g.position="relative";this.containerDiv=k;k.className=this.classNamePrefix+"-main-div";b.className=this.classNamePrefix+"-chart-div";a.appendChild(k);var l=this.exportConfig;l&&d.AmExport&&!this.AmExport&&(this.AmExport=new d.AmExport(this,
l));this.amExport&&d.AmExport&&(this.AmExport=d.extend(this.amExport,new d.AmExport(this),!0));this.AmExport&&this.AmExport.init&&this.AmExport.init();if(e){e=this.addLegend(e,e.divId);if(e.enabled)switch(h.left=null,h.top=null,h.right=null,f.left=null,f.right=null,f.top=null,h.position="relative",f.position="relative",e.position){case "bottom":k.appendChild(b);k.appendChild(c);break;case "top":k.appendChild(c);k.appendChild(b);break;case "absolute":g.width=a.style.width;g.height=a.style.height;h.position=
"absolute";f.position="absolute";void 0!==e.left&&(h.left=e.left+"px");void 0!==e.right&&(h.right=e.right+"px");void 0!==e.top&&(h.top=e.top+"px");void 0!==e.bottom&&(h.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;k.appendChild(b);k.appendChild(c);break;case "right":g.width=a.style.width;g.height=a.style.height;h.position="relative";f.position="absolute";k.appendChild(b);k.appendChild(c);break;case "left":g.width=a.style.width;g.height=a.style.height;h.position="absolute";f.position="relative";
k.appendChild(b);k.appendChild(c);break;case "outside":k.appendChild(b)}else k.appendChild(b);this.prevLegendPosition=e.position}else k.appendChild(b);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);this.initChart()}},createLabelsSet:function(){d.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme);window.AmCharts_path&&(this.path=window.AmCharts_path);
void 0===this.path&&(this.path=d.getPath());void 0===this.path&&(this.path="amcharts/");this.path=d.normalizeUrl(this.path);void 0===this.pathToImages&&(this.pathToImages=this.path+"images/");this.initHC||(d.callInitHandler(this),this.initHC=!0);d.applyLang(this.language,this);var a=this.numberFormatter;a&&(isNaN(a.precision)||(this.precision=a.precision),void 0!==a.thousandsSeparator&&(this.thousandsSeparator=a.thousandsSeparator),void 0!==a.decimalSeparator&&(this.decimalSeparator=a.decimalSeparator));
(a=this.percentFormatter)&&!isNaN(a.precision)&&(this.percentPrecision=a.precision);this.nf={precision:this.precision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.pf={precision:this.percentPrecision,thousandsSeparator:this.thousandsSeparator,decimalSeparator:this.decimalSeparator};this.destroy();(a=this.container)?(a.container.innerHTML="",a.width=this.realWidth,a.height=this.realHeight,a.addDefs(this),this.chartDiv.appendChild(a.container)):a=new d.AmDraw(this.chartDiv,
this.realWidth,this.realHeight,this);this.container=a;this.extension=".png";this.svgIcons&&d.SVG&&(this.extension=".svg");this.checkDisplay();this.checkTransform(this.div);a.chart=this;d.VML||d.SVG?(a.handDrawn=this.handDrawn,a.handDrawScatter=this.handDrawScatter,a.handDrawThickness=this.handDrawThickness,d.remove(this.set),this.set=a.set(),d.remove(this.gridSet),this.gridSet=a.set(),d.remove(this.cursorLineSet),this.cursorLineSet=a.set(),d.remove(this.graphsBehindSet),this.graphsBehindSet=a.set(),
d.remove(this.bulletBehindSet),this.bulletBehindSet=a.set(),d.remove(this.columnSet),this.columnSet=a.set(),d.remove(this.graphsSet),this.graphsSet=a.set(),d.remove(this.trendLinesSet),this.trendLinesSet=a.set(),d.remove(this.axesSet),this.axesSet=a.set(),d.remove(this.cursorSet),this.cursorSet=a.set(),d.remove(this.scrollbarsSet),this.scrollbarsSet=a.set(),d.remove(this.bulletSet),this.bulletSet=a.set(),d.remove(this.freeLabelsSet),this.freeLabelsSet=a.set(),d.remove(this.axesLabelsSet),this.axesLabelsSet=
a.set(),d.remove(this.balloonsSet),this.balloonsSet=a.set(),d.remove(this.plotBalloonsSet),this.plotBalloonsSet=a.set(),d.remove(this.zoomButtonSet),this.zoomButtonSet=a.set(),d.remove(this.zbSet),this.zbSet=null,d.remove(this.linkSet),this.linkSet=a.set()):this.fire({type:"failed",chart:this})},premeasure:function(){var a=this.div;if(a){try{this.boundingRect=this.chartDiv.getBoundingClientRect()}catch(e){}var b=a.offsetWidth,c=a.offsetHeight;a.clientHeight&&(b=a.clientWidth,c=a.clientHeight);if(b!=
this.mw||c!=this.mh)this.mw=b,this.mh=c,this.measure()}},measure:function(){var a=this.div;if(a){var b=this.chartDiv,c=a.offsetWidth,e=a.offsetHeight,h=this.container;a.clientHeight&&(c=a.clientWidth,e=a.clientHeight);var f=d.removePx(d.getStyle(a,"padding-left")),g=d.removePx(d.getStyle(a,"padding-right")),k=d.removePx(d.getStyle(a,"padding-top")),l=d.removePx(d.getStyle(a,"padding-bottom"));isNaN(f)||(c-=f);isNaN(g)||(c-=g);isNaN(k)||(e-=k);isNaN(l)||(e-=l);f=a.style;a=f.width;f=f.height;-1!=a.indexOf("px")&&
(c=d.removePx(a));-1!=f.indexOf("px")&&(e=d.removePx(f));e=Math.round(e);c=Math.round(c);a=Math.round(d.toCoordinate(this.width,c));f=Math.round(d.toCoordinate(this.height,e));(c!=this.previousWidth||e!=this.previousHeight)&&0<a&&0<f&&(b.style.width=a+"px",b.style.height=f+"px",b.style.padding=0,h&&h.setSize(a,f),this.balloon=d.processObject(this.balloon,d.AmBalloon,this.theme));this.balloon.setBounds&&this.balloon.setBounds(2,2,a-2,f);this.balloon.chart=this;this.realWidth=a;this.realHeight=f;this.divRealWidth=
c;this.divRealHeight=e}},checkDisplay:function(){if(this.autoDisplay&&this.container){var a=d.rect(this.container,10,10),b=a.getBBox();0===b.width&&0===b.height&&(this.divRealHeight=this.divRealWidth=this.realHeight=this.realWidth=0,this.previousWidth=this.previousHeight=NaN);a.remove()}},checkTransform:function(a){if(this.autoTransform&&window.getComputedStyle&&a){if(a.style){var b=window.getComputedStyle(a,null);if(b&&(b=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||
b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform"))&&"none"!==b){var c=b.split("(")[1].split(")")[0].split(","),b=c[0],c=c[1],b=Math.sqrt(b*b+c*c);isNaN(b)||(this.cssScale*=b)}}a.parentNode&&this.checkTransform(a.parentNode)}},destroy:function(){this.chartDiv.innerHTML="";this.clearTimeOuts();this.legend&&this.legend.destroy()},clearTimeOuts:function(){var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},
clear:function(a){try{document.removeEventListener("touchstart",this.docfn1,!0),document.removeEventListener("touchend",this.docfn2,!0)}catch(b){}d.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&(this.container.remove(this.chartDiv),this.container.remove(this.legendDiv));a||d.removeChart(this);if(a=this.div)for(;a.firstChild;)a.removeChild(a.firstChild);
this.legend&&this.legend.destroy();this.AmExport&&this.AmExport.clear&&this.AmExport.clear()},setMouseCursor:function(a){"auto"==a&&d.isNN&&(a="default");this.chartDiv.style.cursor=a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();var b;for(b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){var b=this;if(b.container&&!1!==a.enabled){a=d.processObject(a,d.Label,b.theme);var c=a.y,e=a.text,h=a.align,f=a.size,g=a.color,k=a.rotation,
l=a.alpha,m=a.bold,n=d.toCoordinate(a.x,b.realWidth),c=d.toCoordinate(c,b.realHeight);n||(n=0);c||(c=0);void 0===g&&(g=b.color);isNaN(f)&&(f=b.fontSize);h||(h="start");"left"==h&&(h="start");"right"==h&&(h="end");"center"==h&&(h="middle",k?c=b.realHeight-c+c/2:n=b.realWidth/2-n);void 0===l&&(l=1);void 0===k&&(k=0);c+=f/2;e=d.text(b.container,e,g,b.fontFamily,f,h,m,l);e.translate(n,c);void 0!==a.tabIndex&&e.setAttr("tabindex",a.tabIndex);d.setCN(b,e,"label");a.id&&d.setCN(b,e,"label-"+a.id);0!==k&&
e.rotate(k);a.url?(e.setAttr("cursor","pointer"),e.click(function(){d.getURL(a.url,b.urlTarget)})):e.node.style.pointerEvents="none";b.labelsSet.push(e);b.labels.push(e)}},addLabel:function(a,b,c,e,d,f,g,k,l,m){a={x:a,y:b,text:c,align:e,size:d,color:f,alpha:k,rotation:g,bold:l,url:m,enabled:!0};this.container&&this.drawLabel(a);this.allLabels.push(a)},clearLabels:function(){var a=this.labels,b;for(b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=
this.divRealHeight,b=this.legend;if(b){var c=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b){a-=c;if(0>a||isNaN(a))a=0;this.chartDiv.style.height=a+"px"}}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,c=this.legend;if(c){var e=this.legendDiv,d=e.offsetWidth;isNaN(c.width)||(d=c.width);c.ieW&&(d=c.ieW);var f=e.offsetHeight,e=e.style,g=this.chartDiv.style,c=c.position;if("right"==c||"left"==c){a-=d;if(0>a||isNaN(a))a=0;g.width=a+"px";this.balloon.setBounds(2,
2,a-2,this.realHeight);"left"==c?(g.left=d+"px",e.left="0px"):(g.left="0px",e.left=a+"px");b>f&&(e.top=(b-f)/2+"px")}}return a},getTitleHeight:function(){this.drawTitles(!0);return this.titleHeight},addTitle:function(a,b,c,e,d){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:c,alpha:e,bold:d,enabled:!0};this.titles.push(a);return a},handleWheel:function(a){var b=0;a||(a=window.event);a.wheelDelta?b=a.wheelDelta/120:a.detail&&(b=-a.detail/3);b&&this.handleWheelReal(b,a.shiftKey);a.preventDefault&&
a.preventDefault()},handleWheelReal:function(){},handleDocTouchStart:function(){this.hideBalloonReal();this.handleMouseMove();this.tmx=this.mouseX;this.tmy=this.mouseY;this.touchStartTime=(new Date).getTime()},handleDocTouchEnd:function(){-.5<this.tmx&&this.tmx<this.divRealWidth+1&&0<this.tmy&&this.tmy<this.divRealHeight?(this.handleMouseMove(),4>Math.abs(this.mouseX-this.tmx)&&4>Math.abs(this.mouseY-this.tmy)?(this.tapped=!0,this.panRequired&&this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction=
"none",this.chartDiv.style.touchAction="none")):this.mouseIsOver||this.resetTouchStyle()):(this.tapped=!1,this.resetTouchStyle())},resetTouchStyle:function(){this.panEventsEnabled&&this.chartDiv&&(this.chartDiv.style.msTouchAction="auto",this.chartDiv.style.touchAction="auto")},checkTouchDuration:function(a){var b=this,c=(new Date).getTime();if(a)if(a.touches)b.isTouchEvent=!0;else if(!b.isTouchEvent)return!0;if(c-b.touchStartTime>b.touchClickDuration)return!0;setTimeout(function(){b.resetTouchDuration()},
300)},resetTouchDuration:function(){this.isTouchEvent=!1},checkTouchMoved:function(){if(4<Math.abs(this.mouseX-this.tmx)||4<Math.abs(this.mouseY-this.tmy))return!0},addListeners:function(){var a=this,b=a.chartDiv;document.addEventListener?("ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",function(b){a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleMouseMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,
b)},!0),a.docfn1=function(b){a.handleDocTouchStart.call(a,b)},a.docfn2=function(b){a.handleDocTouchEnd.call(a,b)},document.addEventListener("touchstart",a.docfn1,!0),document.addEventListener("touchend",a.docfn2,!0)),b.addEventListener("mousedown",function(b){a.mouseIsOver=!0;a.handleMouseMove.call(a,b);a.handleMouseDown.call(a,b);a.handleDocTouchStart.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,
b)},!0),b.addEventListener("mouseup",function(b){a.handleDocTouchEnd.call(a,b)},!0)):(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){this.skipEvents||(this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,this.fire({type:"dataUpdated",chart:this})),this.chartCreated||(this.chartCreated=!0,this.fire({type:"init",chart:this})),
this.chartRendered||(this.fire({type:"rendered",chart:this}),this.chartRendered=!0),this.fire({type:"drawn",chart:this}));this.skipEvents=!1},validateSize:function(){var a=this;a.premeasure();a.checkDisplay();a.cssScale=1;a.cssAngle=0;a.checkTransform(a.div);if(a.divRealWidth!=a.previousWidth||a.divRealHeight!=a.previousHeight){var b=a.legend;if(0<a.realWidth&&0<a.realHeight){a.sizeChanged=!0;if(b){a.legendInitTO&&clearTimeout(a.legendInitTO);var c=setTimeout(function(){b.invalidateSize()},10);a.timeOuts.push(c);
a.legendInitTO=c}a.marginsUpdated=!1;clearTimeout(a.initTO);c=setTimeout(function(){a.initChart()},10);a.timeOuts.push(c);a.initTO=c}a.renderFix();b&&b.renderFix&&b.renderFix();clearTimeout(a.resizedTO);a.resizedTO=setTimeout(function(){a.fire({type:"resized",chart:a})},10);a.previousHeight=a.divRealHeight;a.previousWidth=a.divRealWidth}},invalidateSize:function(){this.previousHeight=this.previousWidth=NaN;this.invalidateSizeReal()},invalidateSizeReal:function(){var a=this;a.marginsUpdated=!1;clearTimeout(a.validateTO);
var b=setTimeout(function(){a.validateSize()},5);a.timeOuts.push(b);a.validateTO=b},validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(a,b){this.initTO&&clearTimeout(this.initTO);a&&(this.dataChanged=!0,this.marginsUpdated=!1);this.skipEvents=b;this.chartRendered=!1;var c=this.legend;c&&c.position!=this.prevLegendPosition&&(this.previousWidth=this.mw=0,c.invalidateSize&&(c.invalidateSize(),this.validateSize()));this.write(this.div)},
showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;clearTimeout(a.hoverInt);clearTimeout(a.balloonTO);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},a.hideBalloonTime)},cleanChart:function(){},hideBalloonReal:function(){var a=this.balloon;a&&a.hide&&a.hide()},showBalloon:function(a,b,c,e,d){var f=this;clearTimeout(f.balloonTO);clearTimeout(f.hoverInt);f.balloonTO=setTimeout(function(){f.showBalloonReal.call(f,
a,b,c,e,d)},1)},showBalloonReal:function(a,b,c,e,d){this.handleMouseMove();var f=this.balloon;f.enabled&&(f.followCursor(!1),f.changeColor(b),!c||f.fixedPosition?(f.setPosition(e,d),isNaN(e)||isNaN(d)?f.followCursor(!0):f.followCursor(!1)):f.followCursor(!0),a&&f.showBalloon(a))},handleMouseOver:function(){this.outTO&&clearTimeout(this.outTO);d.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){var a=this;d.resetMouseOver();a.outTO&&clearTimeout(a.outTO);a.outTO=setTimeout(function(){a.handleMouseOutReal()},
10)},handleMouseOutReal:function(){this.mouseIsOver=!1},handleMouseMove:function(a){a||(a=window.event);this.mouse2Y=this.mouse2X=NaN;var b,c,e,d;if(a){if(a.touches){var f=a.touches.item(1);f&&this.panEventsEnabled&&this.boundingRect&&(e=f.clientX-this.boundingRect.left,d=f.clientY-this.boundingRect.top);a=a.touches.item(0);if(!a)return}else this.wasTouched=!1;this.boundingRect&&a.clientX&&(b=a.clientX-this.boundingRect.left,c=a.clientY-this.boundingRect.top);isNaN(e)?this.mouseX=b:(this.mouseX=Math.min(b,
e),this.mouse2X=Math.max(b,e));isNaN(d)?this.mouseY=c:(this.mouseY=Math.min(c,d),this.mouse2Y=Math.max(c,d));this.autoTransform&&(this.mouseX/=this.cssScale,this.mouseY/=this.cssScale)}},handleTouchStart:function(a){this.hideBalloonReal();a&&(a.touches&&this.tapToActivate&&!this.tapped||!this.panRequired)||(this.handleMouseMove(a),this.handleMouseDown(a))},handleTouchEnd:function(a){this.wasTouched=!0;this.handleMouseMove(a);d.resetMouseOver();this.handleReleaseOutside(a)},handleReleaseOutside:function(){this.handleDocTouchEnd.call(this)},
handleMouseDown:function(a){d.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&(this.panEventsEnabled?a.preventDefault():a.touches||a.preventDefault())},addLegend:function(a,b){a=d.processObject(a,d.AmLegend,this.theme);a.divId=b;a.ieW=0;var c;c="object"!=typeof b&&b?document.getElementById(b):b;this.legend=a;a.chart=this;c?(a.div=c,a.position="outside",a.autoMargins=!1):a.div=this.legendDiv;return a},removeLegend:function(){this.legend=void 0;this.previousWidth=0;this.legendDiv.innerHTML=
""},handleResize:function(){(d.isPercents(this.width)||d.isPercents(this.height))&&this.invalidateSizeReal();this.renderFix()},renderFix:function(){if(!d.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(d.hasSVG)return this.container},animate:function(a,b,c,e,h,f,g){a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);c={obj:a,frame:0,attribute:b,from:c,to:e,time:h,effect:f,suffix:g};a["an_"+b]=c;this.animations.push(c);return c},setLegendData:function(a){var b=this.legend;b&&
b.setData(a)},stopAnim:function(a){d.removeFromArray(this.animations,a)},updateAnimations:function(){var a;this.container&&this.container.update();if(this.animations)for(a=this.animations.length-1;0<=a;a--){var b=this.animations[a],c=d.updateRate*b.time,e=b.frame+1,h=b.obj,f=b.attribute;if(e<=c){b.frame++;var g=Number(b.from),k=Number(b.to)-g,c=d[b.effect](0,e,g,k,c);0===k?(this.animations.splice(a,1),h.node.style[f]=Number(b.to)+b.suffix):h.node.style[f]=c+b.suffix}else h.node.style[f]=Number(b.to)+
b.suffix,h.animationFinished=!0,this.animations.splice(a,1)}},update:function(){this.updateAnimations();var a=this.animatable;if(0<a.length){for(var b=!0,c=a.length-1;0<=c;c--){var e=a[c];e&&(e.animationFinished?a.splice(c,1):b=!1)}b&&(this.fire({type:"animationFinished",chart:this}),this.animatable=[])}},inIframe:function(){try{return window.self!==window.top}catch(a){return!0}},brr:function(){if(!this.hideCredits){var a="amcharts.com",b=window.location.hostname.split("."),c;2<=b.length&&(c=b[b.length-
2]+"."+b[b.length-1]);this.amLink&&(b=this.amLink.parentNode)&&b.removeChild(this.amLink);b=this.creditsPosition;if(c!=a||!0===this.inIframe()){var a="http://www."+a,e=c=0,d=this.realWidth,f=this.realHeight,g=this.type;if("serial"==g||"xy"==g||"gantt"==g)c=this.marginLeftReal,e=this.marginTopReal,d=c+this.plotAreaWidth,f=e+this.plotAreaHeight;var g=a+"/javascript-charts/",k="JavaScript charts",l="JS chart by amCharts";"ammap"==this.product&&(g=a+"/javascript-maps/",k="Interactive JavaScript maps",
l="JS map by amCharts");a=document.createElement("a");l=document.createTextNode(l);a.setAttribute("href",g);a.setAttribute("title",k);this.urlTarget&&a.setAttribute("target",this.urlTarget);a.appendChild(l);this.chartDiv.appendChild(a);this.amLink=a;g=a.style;g.position="absolute";g.textDecoration="none";g.color=this.color;g.fontFamily=this.fontFamily;g.fontSize="11px";g.opacity=.7;g.display="block";var k=a.offsetWidth,a=a.offsetHeight,l=5+c,m=e+5;"bottom-left"==b&&(l=5+c,m=f-a-3);"bottom-right"==
b&&(l=d-k-5,m=f-a-3);"top-right"==b&&(l=d-k-5,m=e+5);g.left=l+"px";g.top=m+"px"}}}});d.Slice=d.Class({construct:function(){}});d.SerialDataItem=d.Class({construct:function(){}});d.GraphDataItem=d.Class({construct:function(){}});d.Guide=d.Class({construct:function(a){this.cname="Guide";d.applyTheme(this,a,this.cname)}});d.Title=d.Class({construct:function(a){this.cname="Title";d.applyTheme(this,a,this.cname)}});d.Label=d.Class({construct:function(a){this.cname="Label";d.applyTheme(this,a,this.cname)}})})();(function(){var d=window.AmCharts;d.AmGraph=d.Class({construct:function(a){this.cname="AmGraph";this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=4;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;
this.pointPosition="middle";this.depthCount=1;this.includeInMinMax=!0;this.negativeBase=0;this.visibleInLegend=!0;this.showAllValueLabels=!1;this.showBulletsAt=this.showBalloonAt="close";this.lineThickness=1;this.dashLength=0;this.connect=!0;this.lineAlpha=1;this.bullet="none";this.bulletBorderThickness=2;this.bulletBorderAlpha=0;this.bulletAlpha=1;this.bulletSize=8;this.cornerRadiusTop=this.hideBulletsCount=this.bulletOffset=0;this.cursorBulletAlpha=1;this.gradientOrientation="vertical";this.dy=
this.dx=0;this.periodValue="";this.clustered=!0;this.periodSpan=1;this.accessibleLabel="[[title]] [[category]] [[value]]";this.y=this.x=0;this.switchable=!0;this.tcc=this.minDistance=1;this.labelRotation=0;this.labelAnchor="auto";this.labelOffset=3;this.bcn="graph-";this.dateFormat="MMM DD, YYYY";this.noRounding=!0;d.applyTheme(this,a,this.cname)},init:function(){this.createBalloon()},draw:function(){var a=this.chart;a.isRolledOverBullet=!1;var b=a.type;if(a.drawGraphs){isNaN(this.precision)||(this.numberFormatter?
this.numberFormatter.precision=this.precision:this.numberFormatter={precision:this.precision,decimalSeparator:a.decimalSeparator,thousandsSeparator:a.thousandsSeparator});var c=a.container;this.container=c;this.destroy();var e=c.set();this.set=e;e.translate(this.x,this.y);var h=c.set();this.bulletSet=h;h.translate(this.x,this.y);this.behindColumns?(a.graphsBehindSet.push(e),a.bulletBehindSet.push(h)):(a.graphsSet.push(e),a.bulletSet.push(h));var f=this.bulletAxis;d.isString(f)&&(this.bulletAxis=a.getValueAxisById(f));
c=c.set();d.remove(this.columnsSet);this.columnsSet=c;d.setCN(a,e,"graph-"+this.type);d.setCN(a,e,"graph-"+this.id);d.setCN(a,h,"graph-"+this.type);d.setCN(a,h,"graph-"+this.id);this.columnsArray=[];this.ownColumns=[];this.allBullets=[];this.animationArray=[];h=this.labelPosition;h||(f=this.valueAxis.stackType,h="top","column"==this.type&&(a.rotate&&(h="right"),"100%"==f||"regular"==f)&&(h="middle"),this.labelPosition=h);d.ifArray(this.data)&&(a=!1,"xy"==b?this.xAxis.axisCreated&&this.yAxis.axisCreated&&
(a=!0):this.valueAxis.axisCreated&&(a=!0),!this.hidden&&a&&this.createGraph());e.push(c)}},createGraph:function(){var a=this,b=a.chart;a.startAlpha=b.startAlpha;a.seqAn=b.sequencedAnimation;a.baseCoord=a.valueAxis.baseCoord;void 0===a.fillAlphas&&(a.fillAlphas=0);a.bulletColorR=a.bulletColor;void 0===a.bulletColorR&&(a.bulletColorR=a.lineColorR,a.bulletColorNegative=a.negativeLineColor);void 0===a.bulletAlpha&&(a.bulletAlpha=a.lineAlpha);if("step"==c||d.VML)a.noRounding=!1;var c=b.type;"gantt"==c&&
(c="serial");clearTimeout(a.playedTO);if(!isNaN(a.valueAxis.min)&&!isNaN(a.valueAxis.max)){switch(c){case "serial":a.categoryAxis&&(a.createSerialGraph(),"candlestick"==a.type&&1>a.valueAxis.minMaxMultiplier&&a.positiveClip(a.set));break;case "radar":a.createRadarGraph();break;case "xy":a.createXYGraph()}a.playedTO=setTimeout(function(){a.setAnimationPlayed.call(a)},500*a.chart.startDuration)}},setAnimationPlayed:function(){this.animationPlayed=!0},createXYGraph:function(){var a=[],b=[],c=this.xAxis,
e=this.yAxis;this.pmh=e.height;this.pmw=c.width;this.pmy=this.pmx=0;var d;for(d=this.start;d<=this.end;d++){var f=this.data[d].axes[c.id].graphs[this.id],g=f.values,k=g.x,l=g.y,g=c.getCoordinate(k,this.noRounding),m=e.getCoordinate(l,this.noRounding);if(!isNaN(k)&&!isNaN(l)&&(a.push(g),b.push(m),f.x=g,f.y=m,k=this.createBullet(f,g,m,d),l=this.labelText)){var l=this.createLabel(f,l),n=0;k&&(n=k.size);this.positionLabel(f,g,m,l,n)}}this.drawLineGraph(a,b);this.launchAnimation()},createRadarGraph:function(){var a=
this.valueAxis.stackType,b=[],c=[],e=[],d=[],f,g,k,l,m;for(m=this.start;m<=this.end;m++){var n=this.data[m].axes[this.valueAxis.id].graphs[this.id],q,p;"none"==a||"3d"==a?q=n.values.value:(q=n.values.close,p=n.values.open);if(isNaN(q))this.connect||(this.drawLineGraph(b,c,e,d),b=[],c=[],e=[],d=[]);else{var t=this.valueAxis.getCoordinate(q,this.noRounding)-this.height,t=t*this.valueAxis.rMultiplier,r=-360/(this.end-this.start+1)*m;"middle"==this.valueAxis.pointPosition&&(r-=180/(this.end-this.start+
1));q=t*Math.sin(r/180*Math.PI);t*=Math.cos(r/180*Math.PI);b.push(q);c.push(t);if(!isNaN(p)){var w=this.valueAxis.getCoordinate(p,this.noRounding)-this.height,w=w*this.valueAxis.rMultiplier,x=w*Math.sin(r/180*Math.PI),r=w*Math.cos(r/180*Math.PI);e.push(x);d.push(r);isNaN(k)&&(k=x);isNaN(l)&&(l=r)}r=this.createBullet(n,q,t,m);n.x=q;n.y=t;if(x=this.labelText)x=this.createLabel(n,x),w=0,r&&(w=r.size),this.positionLabel(n,q,t,x,w);isNaN(f)&&(f=q);isNaN(g)&&(g=t)}}b.push(f);c.push(g);isNaN(k)||(e.push(k),
d.push(l));this.drawLineGraph(b,c,e,d);this.launchAnimation()},positionLabel:function(a,b,c,e,d){if(e){var f=this.chart,g=this.valueAxis,k="middle",l=!1,m=this.labelPosition,n=e.getBBox(),q=this.chart.rotate,p=a.isNegative,t=this.fontSize;void 0===t&&(t=this.chart.fontSize);c-=n.height/2-t/2-1;void 0!==a.labelIsNegative&&(p=a.labelIsNegative);switch(m){case "right":m=q?p?"left":"right":"right";break;case "top":m=q?"top":p?"bottom":"top";break;case "bottom":m=q?"bottom":p?"top":"bottom";break;case "left":m=
q?p?"right":"left":"left"}var t=a.columnGraphics,r=0,w=0;t&&(r=t.x,w=t.y);var x=this.labelOffset;switch(m){case "right":k="start";b+=d/2+x;break;case "top":c=g.reversed?c+(d/2+n.height/2+x):c-(d/2+n.height/2+x);break;case "bottom":c=g.reversed?c-(d/2+n.height/2+x):c+(d/2+n.height/2+x);break;case "left":k="end";b-=d/2+x;break;case "inside":"column"==this.type&&(l=!0,q?p?(k="end",b=r-3-x):(k="start",b=r+3+x):c=p?w+7+x:w-10-x);break;case "middle":"column"==this.type&&(l=!0,q?b-=(b-r)/2+x-3:c-=(c-w)/
2+x-3)}"auto"!=this.labelAnchor&&(k=this.labelAnchor);e.attr({"text-anchor":k});this.labelRotation&&e.rotate(this.labelRotation);e.translate(b,c);!this.showAllValueLabels&&t&&l&&(n=e.getBBox(),n.height>a.columnHeight||n.width>a.columnWidth)&&(e.remove(),e=null);e&&"radar"!=f.type&&(0>b||b>this.width||0>c||c>this.height)&&(e.remove(),e=null);if(e&&("serial"==f.type||"gantt"==f.type))if(q){if(0>c||c>this.height)e.remove(),e=null}else if(0>b||b>this.width)e.remove(),e=null;e&&this.allBullets.push(e);
return e}},getGradRotation:function(){var a=270;"horizontal"==this.gradientOrientation&&(a=0);return this.gradientRotation=a},createSerialGraph:function(){this.dashLengthSwitched=this.fillColorsSwitched=this.lineColorSwitched=void 0;var a=this.chart,b=this.id,c=this.index,e=this.data,h=this.chart.container,f=this.valueAxis,g=this.type,k=this.columnWidthReal,l=this.showBulletsAt;isNaN(this.columnWidth)||(k=this.columnWidth);isNaN(k)&&(k=.8);var m=this.useNegativeColorIfDown,n=this.width,q=this.height,
p=this.y,t=this.rotate,r=this.columnCount,w=d.toCoordinate(this.cornerRadiusTop,k/2),x=this.connect,y=[],u=[],A,z,B,D,C=this.chart.graphs.length,J,H=this.dx/this.tcc,S=this.dy/this.tcc,O=f.stackType,Q=this.start,ia=this.end,I=this.scrollbar,Z="graph-column-";I&&(Z="scrollbar-graph-column-");var va=this.categoryAxis,ma=this.baseCoord,Oa=this.negativeBase,ea=this.columnIndex,ca=this.lineThickness,X=this.lineAlpha,za=this.lineColorR,da=this.dashLength,fa=this.set,Aa,ga=this.getGradRotation(),T=this.chart.columnSpacing,
Y=va.cellWidth,Da=(Y*k-r)/r;T>Da&&(T=Da);var G,v,na,ha=q,Pa=n,ba=0,tb=0,ub,vb,gb,hb,wb=this.fillColorsR,Qa=this.negativeFillColors,Ja=this.negativeLineColor,Ya=this.fillAlphas,Za=this.negativeFillAlphas;"object"==typeof Ya&&(Ya=Ya[0]);"object"==typeof Za&&(Za=Za[0]);var xb=this.noRounding;"step"==g&&(xb=!1);var ib=f.getCoordinate(f.min);f.logarithmic&&(ib=f.getCoordinate(f.minReal));this.minCoord=ib;this.resetBullet&&(this.bullet="none");if(!(I||"line"!=g&&"smoothedLine"!=g&&"step"!=g||(1==e.length&&
"step"!=g&&"none"==this.bullet&&(this.bullet="round",this.resetBullet=!0),!Qa&&void 0==Ja||m))){var Ua=Oa;Ua>f.max&&(Ua=f.max);Ua<f.min&&(Ua=f.min);f.logarithmic&&(Ua=f.minReal);var Ka=f.getCoordinate(Ua),Lb=f.getCoordinate(f.max);t?(ha=q,Pa=Math.abs(Lb-Ka),ub=q,vb=Math.abs(ib-Ka),hb=tb=0,f.reversed?(ba=0,gb=Ka):(ba=Ka,gb=0)):(Pa=n,ha=Math.abs(Lb-Ka),vb=n,ub=Math.abs(ib-Ka),gb=ba=0,f.reversed?(hb=p,tb=Ka):hb=Ka)}var La=Math.round;this.pmx=La(ba);this.pmy=La(tb);this.pmh=La(ha);this.pmw=La(Pa);this.nmx=
La(gb);this.nmy=La(hb);this.nmh=La(ub);this.nmw=La(vb);d.isModern||(this.nmy=this.nmx=0,this.nmh=this.height);this.clustered||(r=1);k="column"==g?(Y*k-T*(r-1))/r:Y*k;1>k&&(k=1);var Mb=this.fixedColumnWidth;isNaN(Mb)||(k=Mb);var L;if("line"==g||"step"==g||"smoothedLine"==g){if(0<Q){for(L=Q-1;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],na=v.values.value,!isNaN(na)){Q=L;break}if(this.lineColorField)for(L=Q;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.lineColor){this.bulletColorSwitched=this.lineColorSwitched=
v.lineColor;break}if(this.fillColorsField)for(L=Q;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],v.fillColors){this.fillColorsSwitched=v.fillColors;break}if(this.dashLengthField)for(L=Q;-1<L;L--)if(G=e[L],v=G.axes[f.id].graphs[b],!isNaN(v.dashLength)){this.dashLengthSwitched=v.dashLength;break}}if(ia<e.length-1)for(L=ia+1;L<e.length;L++)if(G=e[L],v=G.axes[f.id].graphs[b],na=v.values.value,!isNaN(na)){ia=L;break}}ia<e.length-1&&ia++;var U=[],V=[],Ra=!1;if("line"==g||"step"==g||"smoothedLine"==g)if(this.stackable&&
"regular"==O||"100%"==O||this.fillToGraph)Ra=!0;var Nb=this.noStepRisers,jb=-1E3,kb=-1E3,lb=this.minDistance,Sa=!0,$a=!1;for(L=Q;L<=ia;L++){G=e[L];v=G.axes[f.id].graphs[b];v.index=L;var ab,Ta=NaN;if(m&&void 0==this.openField)for(var yb=L+1;yb<e.length&&(!e[yb]||!(ab=e[L+1].axes[f.id].graphs[b])||!ab.values||(Ta=ab.values.value,isNaN(Ta)));yb++);var R,P,K,aa,ja=NaN,E=NaN,F=NaN,N=NaN,M=NaN,pa=NaN,qa=NaN,ra=NaN,sa=NaN,wa=NaN,Ea=NaN,ka=NaN,la=NaN,W=NaN,zb=NaN,Ab=NaN,ta=NaN,ua=void 0,Ma=wb,Va=Ya,Ha=za,
Ba,xa,Bb=this.proCandlesticks,mb=this.topRadius,Fa=q-1,oa=n-1,bb=this.pattern;void 0!=v.pattern&&(bb=v.pattern);isNaN(v.alpha)||(Va=v.alpha);isNaN(v.dashLength)||(da=v.dashLength);var Ia=v.values;f.recalculateToPercents&&(Ia=v.percents);if(Ia){W=this.stackable&&"none"!=O&&"3d"!=O?Ia.close:Ia.value;if("candlestick"==g||"ohlc"==g)W=Ia.close,Ab=Ia.low,qa=f.getCoordinate(Ab),zb=Ia.high,sa=f.getCoordinate(zb);ta=Ia.open;F=f.getCoordinate(W,xb);isNaN(ta)||(M=f.getCoordinate(ta,xb),m&&"regular"!=O&&"100%"!=
O&&(Ta=ta,ta=M=NaN));m&&(void 0==this.openField?ab&&(ab.isNegative=Ta<W?!0:!1,isNaN(Ta)&&(v.isNegative=!Sa)):v.isNegative=Ta>W?!0:!1);if(!I)switch(this.showBalloonAt){case "close":v.y=F;break;case "open":v.y=M;break;case "high":v.y=sa;break;case "low":v.y=qa}var ja=G.x[va.id],Wa=this.periodSpan-1;"step"!=g||isNaN(G.cellWidth)||(Y=G.cellWidth);var ya=Math.floor(Y/2)+Math.floor(Wa*Y/2),Ga=ya,nb=0;"left"==this.stepDirection&&(nb=(2*Y+Wa*Y)/2,ja-=nb);"center"==this.stepDirection&&(nb=Y/2,ja-=nb);"start"==
this.pointPosition&&(ja-=Y/2+Math.floor(Wa*Y/2),ya=0,Ga=Math.floor(Y)+Math.floor(Wa*Y));"end"==this.pointPosition&&(ja+=Y/2+Math.floor(Wa*Y/2),ya=Math.floor(Y)+Math.floor(Wa*Y),Ga=0);if(Nb){var Cb=this.columnWidth;isNaN(Cb)||(ya*=Cb,Ga*=Cb)}I||(v.x=ja);-1E5>ja&&(ja=-1E5);ja>n+1E5&&(ja=n+1E5);t?(E=F,N=M,M=F=ja,isNaN(ta)&&!this.fillToGraph&&(N=ma),pa=qa,ra=sa):(N=E=ja,isNaN(ta)&&!this.fillToGraph&&(M=ma));if(!Bb&&W<ta||Bb&&W<Aa)v.isNegative=!0,Qa&&(Ma=Qa),Za&&(Va=Za),void 0!=Ja&&(Ha=Ja);$a=!1;isNaN(W)||
(m?W>Ta?(Sa&&($a=!0),Sa=!1):(Sa||($a=!0),Sa=!0):v.isNegative=W<Oa?!0:!1,Aa=W);var Ob=!1;I&&a.chartScrollbar.ignoreCustomColors&&(Ob=!0);Ob||(void 0!=v.color&&(Ma=v.color),v.fillColors&&(Ma=v.fillColors));switch(g){case "line":if(isNaN(W))x||(this.drawLineGraph(y,u,U,V),y=[],u=[],U=[],V=[]);else{if(Math.abs(E-jb)>=lb||Math.abs(F-kb)>=lb)y.push(E),u.push(F),jb=E,kb=F;wa=E;Ea=F;ka=E;la=F;!Ra||isNaN(M)||isNaN(N)||(U.push(N),V.push(M));if($a||void 0!=v.lineColor&&v.lineColor!=this.lineColorSwitched||void 0!=
v.fillColors&&v.fillColors!=this.fillColorsSwitched||!isNaN(v.dashLength))this.drawLineGraph(y,u,U,V),y=[E],u=[F],U=[],V=[],!Ra||isNaN(M)||isNaN(N)||(U.push(N),V.push(M)),m?Sa?(this.lineColorSwitched=za,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Qa):(this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors),this.dashLengthSwitched=v.dashLength;v.gap&&(this.drawLineGraph(y,u,U,V),y=[],u=[],U=[],V=[])}break;case "smoothedLine":if(isNaN(W))x||(this.drawSmoothedGraph(y,
u,U,V),y=[],u=[],U=[],V=[]);else{if(Math.abs(E-jb)>=lb||Math.abs(F-kb)>=lb)y.push(E),u.push(F),jb=E,kb=F;wa=E;Ea=F;ka=E;la=F;!Ra||isNaN(M)||isNaN(N)||(U.push(N),V.push(M));void 0==v.lineColor&&void 0==v.fillColors&&isNaN(v.dashLength)||(this.drawSmoothedGraph(y,u,U,V),y=[E],u=[F],U=[],V=[],!Ra||isNaN(M)||isNaN(N)||(U.push(N),V.push(M)),this.lineColorSwitched=v.lineColor,this.fillColorsSwitched=v.fillColors,this.dashLengthSwitched=v.dashLength);v.gap&&(this.drawSmoothedGraph(y,u,U,V),y=[],u=[],U=[],
V=[])}break;case "step":if(!isNaN(W)){t?(isNaN(A)||(y.push(A),u.push(F-ya)),u.push(F-ya),y.push(E),u.push(F+Ga),y.push(E),!Ra||isNaN(M)||isNaN(N)||(isNaN(B)||(U.push(B),V.push(M-ya)),U.push(N),V.push(M-ya),U.push(N),V.push(M+Ga))):(isNaN(z)||(u.push(z),y.push(E-ya)),y.push(E-ya),u.push(F),y.push(E+Ga),u.push(F),!Ra||isNaN(M)||isNaN(N)||(isNaN(D)||(U.push(N-ya),V.push(D)),U.push(N-ya),V.push(M),U.push(N+Ga),V.push(M)));A=E;z=F;B=N;D=M;wa=E;Ea=F;ka=E;la=F;if($a||void 0!=v.lineColor||void 0!=v.fillColors||
!isNaN(v.dashLength)){var cc=y[y.length-2],dc=u[u.length-2];y.pop();u.pop();this.drawLineGraph(y,u,U,V);y=[cc];u=[dc];t?(u.push(F+Ga),y.push(E)):(y.push(E+Ga),u.push(F));U=[];V=[];this.lineColorSwitched=v.lineColor;this.fillColorsSwitched=v.fillColors;this.dashLengthSwitched=v.dashLength;m&&(Sa?(this.lineColorSwitched=za,this.fillColorsSwitched=wb):(this.lineColorSwitched=Ja,this.fillColorsSwitched=Qa))}if(Nb||v.gap)A=z=NaN,this.drawLineGraph(y,u,U,V),y=[],u=[],U=[],V=[]}else if(!x){if(1>=this.periodSpan||
1<this.periodSpan&&E-A>ya+Ga)A=z=NaN;this.drawLineGraph(y,u,U,V);y=[];u=[];U=[];V=[]}break;case "column":Ba=Ha;void 0!=v.lineColor&&(Ba=v.lineColor);if(!isNaN(W)){m||(v.isNegative=W<Oa?!0:!1);v.isNegative&&(Qa&&(Ma=Qa),void 0!=Ja&&(Ba=Ja));var Pb=f.min,Qb=f.max,ob=ta;isNaN(ob)&&(ob=Oa);if(!(W<Pb&&ob<Pb||W>Qb&&ob>Qb)){var Ca;if(t){"3d"==O?(P=F-(r/2-this.depthCount+1)*(k+T)+T/2+S*ea,R=N+H*ea,Ca=ea):(P=Math.floor(F-(r/2-ea)*(k+T)+T/2),R=N,Ca=0);K=k;wa=E;Ea=P+k/2;ka=E;la=P+k/2;P+K>q+Ca*S&&(K=q-P+Ca*S);
P<Ca*S&&(K+=P,P=Ca*S);aa=E-N;var ec=R;R=d.fitToBounds(R,0,n);aa+=ec-R;aa=d.fitToBounds(aa,-R,n-R+H*ea);v.labelIsNegative=0>aa?!0:!1;0===aa&&1/W===1/-0&&(v.labelIsNegative=!0);isNaN(G.percentWidthValue)||(K=this.height*G.percentWidthValue/100,P=ja-K/2,Ea=P+K/2);K=d.roundTo(K,2);aa=d.roundTo(aa,2);P<q&&0<K&&(ua=new d.Cuboid(h,aa,K,H-a.d3x,S-a.d3y,Ma,Va,ca,Ba,X,ga,w,t,da,bb,mb,Z),v.columnWidth=Math.abs(aa),v.columnHeight=Math.abs(K))}else{"3d"==O?(R=E-(r/2-this.depthCount+1)*(k+T)+T/2+H*ea,P=M+S*ea,
Ca=ea):(R=E-(r/2-ea)*(k+T)+T/2,P=M,Ca=0);K=k;wa=R+k/2;Ea=F;ka=R+k/2;la=F;R+K>n+Ca*H&&(K=n-R+Ca*H);R<Ca*H&&(K+=R-Ca*H,R=Ca*H);aa=F-M;v.labelIsNegative=0<aa?!0:!1;0===aa&&-0===W&&(v.labelIsNegative=!0);var fc=P;P=d.fitToBounds(P,this.dy,q);aa+=fc-P;aa=d.fitToBounds(aa,-P+S*ea,q-P);isNaN(G.percentWidthValue)||(K=this.width*G.percentWidthValue/100,R=ja-K/2,wa=R+K/2);K=d.roundTo(K,2);aa=d.roundTo(aa,2);R<n+ea*H&&0<K&&(this.showOnAxis&&(P-=S/2),ua=new d.Cuboid(h,K,aa,H-a.d3x,S-a.d3y,Ma,Va,ca,Ba,this.lineAlpha,
ga,w,t,da,bb,mb,Z),v.columnHeight=Math.abs(aa),v.columnWidth=Math.abs(K))}}if(ua){xa=ua.set;d.setCN(a,ua.set,"graph-"+this.type);d.setCN(a,ua.set,"graph-"+this.id);v.className&&d.setCN(a,ua.set,v.className,!0);v.columnGraphics=xa;R=d.roundTo(R,2);P=d.roundTo(P,2);xa.translate(R,P);(v.url||this.showHandOnHover)&&xa.setAttr("cursor","pointer");if(!I){"none"==O&&(J=t?(this.end+1-L)*C-c:C*L+c);"3d"==O&&(t?(J=(this.end+1-L)*C-c-1E3*this.depthCount,wa+=H*this.columnIndex,ka+=H*this.columnIndex,v.y+=H*this.columnIndex):
(J=(C-c)*(L+1)+1E3*this.depthCount,Ea+=S*this.columnIndex,la+=S*this.columnIndex,v.y+=S*this.columnIndex));if("regular"==O||"100%"==O)J=t?0<Ia.value?(this.end+1-L)*C+c:(this.end+1-L)*C-c:0<Ia.value?C*L+c:C*L-c;this.columnsArray.push({column:ua,depth:J});v.x=t?P+K/2:R+K/2;this.ownColumns.push(ua);this.animateColumns(ua,L,E,N,F,M);this.addListeners(xa,v);void 0!==this.tabIndex&&xa.setAttr("tabindex",this.tabIndex)}this.columnsSet.push(xa)}}break;case "candlestick":if(!isNaN(ta)&&!isNaN(W)){var Xa,cb;
Ba=Ha;void 0!=v.lineColor&&(Ba=v.lineColor);wa=E;la=Ea=F;ka=E;if(t){"open"==l&&(ka=N);"high"==l&&(ka=ra);"low"==l&&(ka=pa);E=d.fitToBounds(E,0,oa);N=d.fitToBounds(N,0,oa);pa=d.fitToBounds(pa,0,oa);ra=d.fitToBounds(ra,0,oa);if(0===E&&0===N&&0===pa&&0===ra)continue;if(E==oa&&N==oa&&pa==oa&&ra==oa)continue;P=F-k/2;R=N;K=k;P+K>q&&(K=q-P);0>P&&(K+=P,P=0);if(P<q&&0<K){var Db,Eb;W>ta?(Db=[E,ra],Eb=[N,pa]):(Db=[N,ra],Eb=[E,pa]);!isNaN(ra)&&!isNaN(pa)&&F<q&&0<F&&(Xa=d.line(h,Db,[F,F],Ba,X,ca),cb=d.line(h,
Eb,[F,F],Ba,X,ca));aa=E-N;ua=new d.Cuboid(h,aa,K,H,S,Ma,Ya,ca,Ba,X,ga,w,t,da,bb,mb,Z)}}else{"open"==l&&(la=M);"high"==l&&(la=sa);"low"==l&&(la=qa);F=d.fitToBounds(F,0,Fa);M=d.fitToBounds(M,0,Fa);qa=d.fitToBounds(qa,0,Fa);sa=d.fitToBounds(sa,0,Fa);if(0===F&&0===M&&0===qa&&0===sa)continue;if(F==Fa&&M==Fa&&qa==Fa&&sa==Fa)continue;R=E-k/2;P=M+ca/2;K=k;R+K>n&&(K=n-R);0>R&&(K+=R,R=0);aa=F-M;if(R<n&&0<K){Bb&&W>=ta&&(Va=0);var ua=new d.Cuboid(h,K,aa,H,S,Ma,Va,ca,Ba,X,ga,w,t,da,bb,mb,Z),Fb,Gb;W>ta?(Fb=[F,
sa],Gb=[M,qa]):(Fb=[M,sa],Gb=[F,qa]);!isNaN(sa)&&!isNaN(qa)&&E<n&&0<E&&(Xa=d.line(h,[E,E],Fb,Ba,X,ca),cb=d.line(h,[E,E],Gb,Ba,X,ca),d.setCN(a,Xa,this.bcn+"line-high"),v.className&&d.setCN(a,Xa,v.className,!0),d.setCN(a,cb,this.bcn+"line-low"),v.className&&d.setCN(a,cb,v.className,!0))}}ua&&(xa=ua.set,v.columnGraphics=xa,fa.push(xa),xa.translate(R,P-ca/2),(v.url||this.showHandOnHover)&&xa.setAttr("cursor","pointer"),Xa&&(fa.push(Xa),fa.push(cb)),I||(v.x=t?P+K/2:R+K/2,this.animateColumns(ua,L,E,N,F,
M),this.addListeners(xa,v),void 0!==this.tabIndex&&xa.setAttr("tabindex",this.tabIndex)))}break;case "ohlc":if(!(isNaN(ta)||isNaN(zb)||isNaN(Ab)||isNaN(W))){var Rb=h.set();fa.push(Rb);W<ta&&(v.isNegative=!0,void 0!=Ja&&(Ha=Ja));var pb,qb,rb;if(t){la=F;ka=E;"open"==l&&(ka=N);"high"==l&&(ka=ra);"low"==l&&(ka=pa);pa=d.fitToBounds(pa,0,oa);ra=d.fitToBounds(ra,0,oa);if(0===E&&0===N&&0===pa&&0===ra)continue;if(E==oa&&N==oa&&pa==oa&&ra==oa)continue;var Hb=F-k/2,Hb=d.fitToBounds(Hb,0,q),Sb=d.fitToBounds(F,
0,q),Ib=F+k/2,Ib=d.fitToBounds(Ib,0,q);0<=N&&N<=oa&&(qb=d.line(h,[N,N],[Hb,Sb],Ha,X,ca,da));0<F&&F<q&&(pb=d.line(h,[pa,ra],[F,F],Ha,X,ca,da));0<=E&&E<=oa&&(rb=d.line(h,[E,E],[Sb,Ib],Ha,X,ca,da))}else{la=F;"open"==l&&(la=M);"high"==l&&(la=sa);"low"==l&&(la=qa);var ka=E,qa=d.fitToBounds(qa,0,Fa),sa=d.fitToBounds(sa,0,Fa),Jb=E-k/2,Jb=d.fitToBounds(Jb,0,n),Tb=d.fitToBounds(E,0,n),Kb=E+k/2,Kb=d.fitToBounds(Kb,0,n);0<=M&&M<=Fa&&(qb=d.line(h,[Jb,Tb],[M,M],Ha,X,ca,da));0<E&&E<n&&(pb=d.line(h,[E,E],[qa,sa],
Ha,X,ca,da));0<=F&&F<=Fa&&(rb=d.line(h,[Tb,Kb],[F,F],Ha,X,ca,da))}fa.push(qb);fa.push(pb);fa.push(rb);d.setCN(a,qb,this.bcn+"stroke-open");d.setCN(a,rb,this.bcn+"stroke-close");d.setCN(a,pb,this.bcn+"stroke");v.className&&d.setCN(a,Rb,v.className,!0);wa=E;Ea=F}}if(!I&&!isNaN(W)){var Ub=this.hideBulletsCount;if(this.end-this.start<=Ub||0===Ub){var Vb=this.createBullet(v,ka,la,L),Wb=this.labelText;if(Wb&&!isNaN(wa)&&!isNaN(wa)){var gc=this.createLabel(v,Wb),Xb=0;Vb&&(Xb=Vb.size);this.positionLabel(v,
wa,Ea,gc,Xb)}if("regular"==O||"100%"==O){var Yb=f.totalText;if(Yb){var Na=this.createLabel(v,Yb,f.totalTextColor);d.setCN(a,Na,this.bcn+"label-total");this.allBullets.push(Na);if(Na){var Zb=Na.getBBox(),$b=Zb.width,ac=Zb.height,db,eb,sb=f.totalTextOffset,bc=f.totals[L];bc&&bc.remove();var fb=0;"column"!=g&&(fb=this.bulletSize);t?(eb=Ea,db=0>W?E-$b/2-2-fb-sb:E+$b/2+3+fb+sb):(db=wa,eb=0>W?F+ac/2+fb+sb:F-ac/2-3-fb-sb);Na.translate(db,eb);f.totals[L]=Na;t?(0>eb||eb>q)&&Na.remove():(0>db||db>n)&&Na.remove()}}}}}}}this.lastDataItem=
v;if("line"==g||"step"==g||"smoothedLine"==g)"smoothedLine"==g?this.drawSmoothedGraph(y,u,U,V):this.drawLineGraph(y,u,U,V),I||this.launchAnimation();this.bulletsHidden&&this.hideBullets();this.customBulletsHidden&&this.hideCustomBullets()},animateColumns:function(a,b){var c=this,e=c.chart.startDuration;0<e&&!c.animationPlayed&&(c.seqAn?(a.set.hide(),c.animationArray.push(a),e=setTimeout(function(){c.animate.call(c)},e/(c.end-c.start+1)*(b-c.start)*1E3),c.timeOuts.push(e)):c.animate(a),c.chart.animatable.push(a))},
createLabel:function(a,b,c){var e=this.chart,h=a.labelColor;h||(h=this.color);h||(h=e.color);c&&(h=c);c=this.fontSize;void 0===c&&(this.fontSize=c=e.fontSize);var f=this.labelFunction;b=e.formatString(b,a);b=d.cleanFromEmpty(b);f&&(b=f(a,b));if(void 0!==b&&""!==b)return a=d.text(this.container,b,h,e.fontFamily,c),a.node.style.pointerEvents="none",d.setCN(e,a,this.bcn+"label"),this.bulletSet.push(a),a},positiveClip:function(a){a.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,
this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,c,e){var h=this;if(1<a.length){var f=h.noRounding,g=h.set,k=h.chart,l=h.container,m=l.set(),n=l.set();g.push(n);g.push(m);var q=h.lineAlpha,p=h.lineThickness,g=h.fillAlphas,t=h.lineColorR,r=h.negativeLineAlpha;isNaN(r)&&(r=q);var w=h.lineColorSwitched;w&&(t=w);var w=h.fillColorsR,x=h.fillColorsSwitched;x&&(w=x);var y=h.dashLength;(x=h.dashLengthSwitched)&&(y=x);var x=h.negativeLineColor,u=h.negativeFillColors,A=h.negativeFillAlphas,z=h.baseCoord;
0!==h.negativeBase&&(z=h.valueAxis.getCoordinate(h.negativeBase,f),z>h.height&&(z=h.height),0>z&&(z=0));q=d.line(l,a,b,t,q,p,y,!1,!0,f);d.setCN(k,q,h.bcn+"stroke");m.push(q);m.click(function(a){h.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){h.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){h.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){h.chart.handleMouseMove(a)}).touchend(function(a){h.chart.handleTouchEnd(a)});void 0===x||h.useNegativeColorIfDown||(p=d.line(l,
a,b,x,r,p,y,!1,!0,f),d.setCN(k,p,h.bcn+"stroke"),d.setCN(k,p,h.bcn+"stroke-negative"),n.push(p));if(0<g||0<A)if(p=a.join(";").split(";"),r=b.join(";").split(";"),q=k.type,"serial"==q||"radar"==q?0<c.length?(c.reverse(),e.reverse(),p=a.concat(c),r=b.concat(e)):"radar"==q?(r.push(0),p.push(0)):h.rotate?(r.push(r[r.length-1]),p.push(z),r.push(r[0]),p.push(z),r.push(r[0]),p.push(p[0])):(p.push(p[p.length-1]),r.push(z),p.push(p[0]),r.push(z),p.push(a[0]),r.push(r[0])):"xy"==q&&(b=h.fillToAxis)&&(d.isString(b)&&
(b=k.getValueAxisById(b)),"H"==b.orientation?(z="top"==b.position?0:b.height,p.push(p[p.length-1]),r.push(z),p.push(p[0]),r.push(z),p.push(a[0]),r.push(r[0])):(z="left"==b.position?0:b.width,r.push(r[r.length-1]),p.push(z),r.push(r[0]),p.push(z),r.push(r[0]),p.push(p[0]))),a=h.gradientRotation,0<g&&(b=d.polygon(l,p,r,w,g,1,"#000",0,a,f),b.pattern(h.pattern,NaN,k.path),d.setCN(k,b,h.bcn+"fill"),m.push(b)),u||void 0!==x)isNaN(A)&&(A=g),u||(u=x),f=d.polygon(l,p,r,u,A,1,"#000",0,a,f),d.setCN(k,f,h.bcn+
"fill"),d.setCN(k,f,h.bcn+"fill-negative"),f.pattern(h.pattern,NaN,k.path),n.push(f),n.click(function(a){h.handleGraphEvent(a,"clickGraph")}).mouseover(function(a){h.handleGraphEvent(a,"rollOverGraph")}).mouseout(function(a){h.handleGraphEvent(a,"rollOutGraph")}).touchmove(function(a){h.chart.handleMouseMove(a)}).touchend(function(a){h.chart.handleTouchEnd(a)});h.applyMask(n,m)}},applyMask:function(a,b){var c=a.length();"serial"!=this.chart.type||this.scrollbar||(this.positiveClip(b),0<c&&this.negativeClip(a))},
drawSmoothedGraph:function(a,b,c,e){if(1<a.length){var h=this.set,f=this.chart,g=this.container,k=g.set(),l=g.set();h.push(l);h.push(k);var m=this.lineAlpha,n=this.lineThickness,h=this.dashLength,q=this.fillAlphas,p=this.lineColorR,t=this.fillColorsR,r=this.negativeLineColor,w=this.negativeFillColors,x=this.negativeFillAlphas,y=this.baseCoord,u=this.lineColorSwitched;u&&(p=u);(u=this.fillColorsSwitched)&&(t=u);var A=this.negativeLineAlpha;isNaN(A)&&(A=m);u=this.getGradRotation();m=new d.Bezier(g,
a,b,p,m,n,t,0,h,void 0,u);d.setCN(f,m,this.bcn+"stroke");k.push(m.path);void 0!==r&&(n=new d.Bezier(g,a,b,r,A,n,t,0,h,void 0,u),d.setCN(f,n,this.bcn+"stroke"),d.setCN(f,n,this.bcn+"stroke-negative"),l.push(n.path));0<q&&(m=a.join(";").split(";"),p=b.join(";").split(";"),n="",0<c.length?(c.push("M"),e.push("M"),c.reverse(),e.reverse(),m=a.concat(c),p=b.concat(e)):(this.rotate?(n+=" L"+y+","+b[b.length-1],n+=" L"+y+","+b[0]):(n+=" L"+a[a.length-1]+","+y,n+=" L"+a[0]+","+y),n+=" L"+a[0]+","+b[0]),c=
new d.Bezier(g,m,p,NaN,0,0,t,q,h,n,u),d.setCN(f,c,this.bcn+"fill"),c.path.pattern(this.pattern,NaN,f.path),k.push(c.path),w||void 0!==r)&&(x||(x=q),w||(w=r),a=new d.Bezier(g,a,b,NaN,0,0,w,x,h,n,u),a.path.pattern(this.pattern,NaN,f.path),d.setCN(f,a,this.bcn+"fill"),d.setCN(f,a,this.bcn+"fill-negative"),l.push(a.path));this.applyMask(l,k)}},launchAnimation:function(){var a=this,b=a.chart.startDuration;if(0<b&&!a.animationPlayed){var c=a.set,e=a.bulletSet;d.VML||(c.attr({opacity:a.startAlpha}),e.attr({opacity:a.startAlpha}));
c.hide();e.hide();a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},a.index*b*1E3),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,c=this.bulletSet,e=this.x,d=this.y;b.show();c.show();var f=a.startDuration,g=a.startEffect;b&&(this.rotate?(b.translate(-1E3,d),c.translate(-1E3,d)):(b.translate(e,-1E3),c.translate(e,-1E3)),b.animate({opacity:1,translate:e+","+d},f,g),c.animate({opacity:1,translate:e+","+d},f,g),a.animatable.push(b))},animate:function(a){var b=
this.chart,c=this.animationArray;!a&&0<c.length&&(a=c[0],c.shift());c=d[d.getEffect(b.startEffect)];b=b.startDuration;a&&(this.rotate?a.animateWidth(b,c):a.animateHeight(b,c),a.set.show())},legendKeyColor:function(){var a=this.legendColor,b=this.lineAlpha;void 0===a&&(a=this.lineColorR,0===b&&(b=this.fillColorsR)&&(a="object"==typeof b?b[0]:b));return a},legendKeyAlpha:function(){var a=this.legendAlpha;void 0===a&&(a=this.lineAlpha,this.fillAlphas>a&&(a=this.fillAlphas),0===a&&(a=this.bulletAlpha),
0===a&&(a=1));return a},createBullet:function(a,b,c){if(!isNaN(b)&&!isNaN(c)&&("none"!=this.bullet||this.customBullet||a.bullet||a.customBullet)){var e=this.chart,h=this.container,f=this.bulletOffset,g=this.bulletSize;isNaN(a.bulletSize)||(g=a.bulletSize);var k=a.values.value,l=this.maxValue,m=this.minValue,n=this.maxBulletSize,q=this.minBulletSize;isNaN(l)||(isNaN(k)||(g=(k-m)/(l-m)*(n-q)+q),m==l&&(g=n));l=g;this.bulletAxis&&(g=a.values.error,isNaN(g)||(k=g),g=this.bulletAxis.stepWidth*k);g<this.minBulletSize&&
(g=this.minBulletSize);this.rotate?b=a.isNegative?b-f:b+f:c=a.isNegative?c+f:c-f;q=this.bulletColorR;a.lineColor&&(this.bulletColorSwitched=a.lineColor);this.bulletColorSwitched&&(q=this.bulletColorSwitched);a.isNegative&&void 0!==this.bulletColorNegative&&(q=this.bulletColorNegative);void 0!==a.color&&(q=a.color);var p;"xy"==e.type&&this.valueField&&(p=this.pattern,a.pattern&&(p=a.pattern));f=this.bullet;a.bullet&&(f=a.bullet);var k=this.bulletBorderThickness,m=this.bulletBorderColorR,n=this.bulletBorderAlpha,
t=this.bulletAlpha;m||(m=q);this.useLineColorForBulletBorder&&(m=this.lineColorR,a.isNegative&&this.negativeLineColor&&(m=this.negativeLineColor),this.lineColorSwitched&&(m=this.lineColorSwitched));var r=a.alpha;isNaN(r)||(t=r);p=d.bullet(h,f,g,q,t,k,m,n,l,0,p,e.path);l=this.customBullet;a.customBullet&&(l=a.customBullet);l&&(p&&p.remove(),"function"==typeof l?(l=new l,l.chart=e,a.bulletConfig&&(l.availableSpace=c,l.graph=this,l.graphDataItem=a,l.bulletY=c,a.bulletConfig.minCoord=this.minCoord-c,
l.bulletConfig=a.bulletConfig),l.write(h),p&&l.showBullet&&l.set.push(p),a.customBulletGraphics=l.cset,p=l.set):(p=h.set(),l=h.image(l,0,0,g,g),p.push(l),this.centerCustomBullets&&l.translate(-g/2,-g/2)));if(p){(a.url||this.showHandOnHover)&&p.setAttr("cursor","pointer");if("serial"==e.type||"gantt"==e.type)if(-.5>b||b>this.width||c<-g/2||c>this.height)p.remove(),p=null;p&&(this.bulletSet.push(p),p.translate(b,c),this.addListeners(p,a),this.allBullets.push(p));a.bx=b;a.by=c;d.setCN(e,p,this.bcn+"bullet");
a.className&&d.setCN(e,p,a.className,!0)}if(p){p.size=g||0;if(e=this.bulletHitAreaSize)h=d.circle(h,e,"#FFFFFF",.001,0),h.translate(b,c),a.hitBullet=h,this.bulletSet.push(h),this.addListeners(h,a);a.bulletGraphics=p;void 0!==this.tabIndex&&p.setAttr("tabindex",this.tabIndex)}else p={size:0};p.graphDataItem=a;return p}},showBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!1;for(b=0;b<a.length;b++)a[b].show()},hideBullets:function(){var a=this.allBullets,b;this.bulletsHidden=!0;for(b=
0;b<a.length;b++)a[b].hide()},showCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!1;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c.customBulletGraphics&&c.customBulletGraphics.show()}},hideCustomBullets:function(){var a=this.allBullets,b;this.customBulletsHidden=!0;for(b=0;b<a.length;b++){var c=a[b].graphDataItem;c.customBulletGraphics&&c.customBulletGraphics.hide()}},addListeners:function(a,b){var c=this;a.mouseover(function(a){c.handleRollOver(b,a)}).mouseout(function(a){c.handleRollOut(b,
a)}).touchend(function(a){c.handleRollOver(b,a);c.chart.panEventsEnabled&&c.handleClick(b,a)}).touchstart(function(a){c.handleRollOver(b,a)}).click(function(a){c.handleClick(b,a)}).dblclick(function(a){c.handleDoubleClick(b,a)}).contextmenu(function(a){c.handleRightClick(b,a)});var e=c.chart;if(e.accessible&&c.accessibleLabel){var d=e.formatString(c.accessibleLabel,b);e.makeAccessible(a,d)}},handleRollOver:function(a,b){this.handleGraphEvent(b,"rollOverGraph");if(a){var c=this.chart;a.bulletConfig&&
(c.isRolledOverBullet=!0);var e={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);clearTimeout(c.hoverInt);(c=c.chartCursor)&&c.valueBalloonsEnabled||this.showGraphBalloon(a,"V",!0)}},handleRollOut:function(a,b){if(a){var c=this.chart,e={type:"rollOutGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(e);c.fire(e);c.isRolledOverBullet=!1}this.handleGraphEvent(b,"rollOutGraph");c=this.chart;
(c=c.chartCursor)&&c.valueBalloonsEnabled||this.hideBalloon()},handleClick:function(a,b){if(!this.chart.checkTouchMoved()&&this.chart.checkTouchDuration(b)){if(a){var c={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c);d.getURL(a.url,this.urlTarget)}this.handleGraphEvent(b,"clickGraph")}},handleGraphEvent:function(a,b){var c={type:b,graph:this,target:this,chart:this.chart,event:a};this.fire(c);this.chart.fire(c)},handleRightClick:function(a,
b){if(a){var c={type:"rightClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},handleDoubleClick:function(a,b){if(a){var c={type:"doubleClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart,event:b};this.fire(c);this.chart.fire(c)}},zoom:function(a,b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns){var c;for(c=0;c<b.length;c++){var e=
b[c].set;e&&e.setAttr("opacity",a)}}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){d.remove(this.set);d.remove(this.bulletSet);var a=this.timeOuts;if(a){var b;for(b=0;b<a.length;b++)clearTimeout(a[b])}this.timeOuts=[]},createBalloon:function(){var a=this.chart;this.balloon?this.balloon.destroy&&this.balloon.destroy():this.balloon={};var b=this.balloon;d.extend(b,a.balloon,!0);b.chart=a;b.mainSet=a.plotBalloonsSet;b.className=this.id},hideBalloon:function(){var a=this,b=a.chart;b.chartCursor?
b.chartCursor.valueBalloonsEnabled||b.hideBalloon():b.hideBalloon();clearTimeout(a.hoverInt);a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},b.hideBalloonTime)},hideBalloonReal:function(){this.balloon&&this.balloon.hide();this.fixBulletSize()},fixBulletSize:function(){if(d.isModern){var a=this.resizedDItem;if(a){var b=a.bulletGraphics;b&&!b.doNotScale&&(b.translate(a.bx,a.by,1),b.setAttr("fill-opacity",this.bulletAlpha),b.setAttr("stroke-opacity",this.bulletBorderAlpha))}this.resizedDItem=
null}},showGraphBalloon:function(a,b,c,e,h){var f=this.chart,g=this.balloon,k=0,l=0,m=f.chartCursor,n=!0;m?m.valueBalloonsEnabled||(g=f.balloon,k=this.x,l=this.y,n=!1):(g=f.balloon,k=this.x,l=this.y,n=!1);clearTimeout(this.hoverInt);if(f.chartCursor&&(this.currentDataItem=a,"serial"==f.type&&f.isRolledOverBullet&&f.chartCursor.valueBalloonsEnabled)){this.hideBalloonReal();return}this.resizeBullet(a,e,h);if(g&&g.enabled&&this.showBalloon&&!this.hidden){var m=f.formatString(this.balloonText,a,!0),q=
this.balloonFunction;q&&(m=q(a,a.graph));m&&(m=d.cleanFromEmpty(m));m&&""!==m?(e=f.getBalloonColor(this,a),g.drop||(g.pointerOrientation=b),b=a.x,h=a.y,f.rotate&&(b=a.y,h=a.x),b+=k,h+=l,isNaN(b)||isNaN(h)?this.hideBalloonReal():(a=this.width,q=this.height,n&&g.setBounds(k,l,a+k,q+l),g.changeColor(e),g.setPosition(b,h),g.fixPrevious(),g.fixedPosition&&(c=!1),!c&&"radar"!=f.type&&(b<k||b>a+k||h<l-.5||h>q+l)?(g.showBalloon(m),g.hide(0)):(g.followCursor(c),g.showBalloon(m)))):(this.hideBalloonReal(),
g.hide(),this.resizeBullet(a,e,h))}else this.hideBalloonReal()},resizeBullet:function(a,b,c){this.fixBulletSize();if(a&&d.isModern&&(1!=b||!isNaN(c))){var e=a.bulletGraphics;e&&!e.doNotScale&&(e.translate(a.bx,a.by,b),isNaN(c)||(e.setAttr("fill-opacity",c),e.setAttr("stroke-opacity",c)),this.resizedDItem=a)}}})})();(function(){var d=window.AmCharts;d.ChartCursor=d.Class({construct:function(a){this.cname="ChartCursor";this.createEvents("changed","zoomed","onHideCursor","onShowCursor","draw","selected","moved","panning","zoomStarted");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonText="[[category]]";
this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition="middle";this.bulletsEnabled=this.skipZoomDispatch=!1;this.bulletSize=8;this.selectWithoutZooming=this.oneBalloonOnly=!1;this.graphBulletSize=1.7;this.animationDuration=.3;this.zooming=!1;this.adjustment=0;this.avoidBalloonOverlapping=!0;this.leaveCursor=!1;this.leaveAfterTouch=!0;this.valueZoomable=!1;this.balloonPointerOrientation="horizontal";this.hLineEnabled=this.vLineEnabled=!0;this.vZoomEnabled=
this.hZoomEnabled=!1;d.applyTheme(this,a,this.cname)},draw:function(){this.destroy();var a=this.chart;a.panRequired=!0;var b=a.container;this.rotate=a.rotate;this.container=b;this.prevLineHeight=this.prevLineWidth=NaN;b=b.set();b.translate(this.x,this.y);this.set=b;a.cursorSet.push(b);this.createElements();d.isString(this.limitToGraph)&&(this.limitToGraph=d.getObjById(a.graphs,this.limitToGraph),this.fullWidth=!1,this.cursorPosition="middle");this.pointer=this.balloonPointerOrientation.substr(0,1).toUpperCase();
this.isHidden=!1;this.hideLines();this.valueLineAxis||(this.valueLineAxis=a.valueAxes[0])},createElements:function(){var a=this,b=a.chart,c=b.dx,e=b.dy,h=a.width,f=a.height,g,k,l=a.cursorAlpha,m=a.valueLineAlpha;a.rotate?(g=m,k=l):(k=m,g=l);"xy"==b.type&&(k=l,void 0!==m&&(k=m),g=l);a.vvLine=d.line(a.container,[c,0,0],[e,0,f],a.cursorColor,g,1);d.setCN(b,a.vvLine,"cursor-line");d.setCN(b,a.vvLine,"cursor-line-vertical");a.hhLine=d.line(a.container,[0,h,h+c],[0,0,e],a.cursorColor,k,1);d.setCN(b,a.hhLine,
"cursor-line");d.setCN(b,a.hhLine,"cursor-line-horizontal");a.vLine=a.rotate?a.vvLine:a.hhLine;a.set.push(a.vvLine);a.set.push(a.hhLine);a.set.node.style.pointerEvents="none";a.fullLines=a.container.set();b=b.cursorLineSet;b.push(a.fullLines);b.translate(a.x,a.y);b.clipRect(0,0,h,f);void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b)}).focus(function(b){a.showCursor()}).blur(function(b){a.hideCursor()}));a.set.clipRect(0,0,h,f)},handleKeys:function(a){var b=
this.prevIndex,c=this.chart;if(c){var e=c.chartData;e&&(isNaN(b)&&(b=e.length-1),37!=a.keyCode&&40!=a.keyCode||b--,39!=a.keyCode&&38!=a.keyCode||b++,b=d.fitToBounds(b,c.startIndex,c.endIndex),(a=this.chart.chartData[b])&&this.setPosition(a.x.categoryAxis),this.prevIndex=b)}},update:function(){var a=this.chart;if(a){var b=a.mouseX-this.x,c=a.mouseY-this.y;this.mouseX=b;this.mouseY=c;this.mouse2X=a.mouse2X-this.x;this.mouse2Y=a.mouse2Y-this.y;var e;if(a.chartData&&0<a.chartData.length){this.mouseIsOver()?
(this.hideGraphBalloons=!1,this.rolledOver=e=!0,this.updateDrawing(),this.vvLine&&isNaN(this.fx)&&(a.rotate||!this.limitToGraph)&&this.vvLine.translate(b,0),!this.hhLine||!isNaN(this.fy)||a.rotate&&this.limitToGraph||this.hhLine.translate(0,c),isNaN(this.mouse2X)?this.dispatchMovedEvent(b,c):e=!1):this.forceShow||this.hideCursor();if(this.zooming){if(!isNaN(this.mouse2X)){isNaN(this.mouse2X0)||this.dispatchPanEvent();return}if(this.pan){this.dispatchPanEvent();return}(this.hZoomEnabled||this.vZoomEnabled)&&
this.zooming&&this.updateSelection()}e&&this.showCursor()}}},updateDrawing:function(){this.drawing&&this.chart.setMouseCursor("crosshair");this.drawingNow&&(d.remove(this.drawingLine),this.drawingLine=d.line(this.container,[this.drawStartX,this.mouseX],[this.drawStartY,this.mouseY],this.cursorColor,1,1))},fixWidth:function(a){if(this.fullWidth&&this.prevLineWidth!=a){var b=this.vvLine,c=0;b&&(b.remove(),c=b.x);b=this.container.set();b.translate(c,0);c=d.rect(this.container,a,this.height,this.cursorColor,
this.cursorAlpha,0);d.setCN(this.chart,c,"cursor-fill");c.translate(-a/2,0);b.push(c);this.vvLine=b;this.fullLines.push(b);this.prevLineWidth=a}},fixHeight:function(a){if(this.fullWidth&&this.prevLineHeight!=a){var b=this.hhLine,c=0;b&&(b.remove(),c=b.y);b=this.container.set();b.translate(0,c);c=d.rect(this.container,this.width,a,this.cursorColor,this.cursorAlpha);c.translate(0,-a/2);b.push(c);this.fullLines.push(b);this.hhLine=b;this.prevLineHeight=a}},fixVLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineX)){var c=
0,e=this.mouseX;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate||(c="bottom"==d.position?this.height:-this.height),e=a)}this.vvLine.translate(e,c)}else this.prevLineX!=a&&this.vvLine.translate(this.prevLineX,this.prevLineY);this.fx=a;this.prevLineX!=a&&(c=this.animationDuration,this.zooming&&(c=0),this.vvLine.stop(),this.vvLine.animate({translate:a+","+b},c,"easeOutSine"),this.prevLineX=a,this.prevLineY=b)}},fixHLine:function(a,b){if(!isNaN(a)){if(isNaN(this.prevLineY)){var c=
0,e=this.mouseY;if(this.limitToGraph){var d=this.chart.categoryAxis;d&&(this.chart.rotate&&(c="right"==d.position?this.width:-this.width),e=a)}this.hhLine.translate(c,e)}else this.prevLineY!=a&&this.hhLine.translate(this.prevLineX,this.prevLineY);this.fy=a;this.prevLineY!=a&&(c=this.animationDuration,this.zooming&&(c=0),this.hhLine.stop(),this.hhLine.animate({translate:b+","+a},c,"easeOutSine"),this.prevLineY=a,this.prevLineX=b)}},hideCursor:function(a){this.forceShow=!1;this.chart.wasTouched&&this.leaveAfterTouch||
this.isHidden||this.leaveCursor||(this.hideCursorReal(),a?this.chart.handleCursorHide():this.fire({target:this,chart:this.chart,type:"onHideCursor"}),this.chart.setMouseCursor("auto"))},hideCursorReal:function(){this.hideLines();this.isHidden=!0;this.index=this.prevLineY=this.prevLineX=this.mouseY0=this.mouseX0=this.fy=this.fx=NaN},hideLines:function(){this.vvLine&&this.vvLine.hide();this.hhLine&&this.hhLine.hide();this.fullLines&&this.fullLines.hide();this.isHidden=!0;this.chart.handleCursorHide()},
showCursor:function(a){!this.drawing&&this.enabled&&(this.vLineEnabled&&this.vvLine&&this.vvLine.show(),this.hLineEnabled&&this.hhLine&&this.hhLine.show(),this.isHidden=!1,this.updateFullLine(),a||this.fire({target:this,chart:this.chart,type:"onShowCursor"}),this.pan&&this.chart.setMouseCursor("move"))},updateFullLine:function(){this.zooming&&this.fullWidth&&this.selection&&(this.rotate?0<this.selection.height&&this.hhLine.hide():0<this.selection.width&&this.vvLine.hide())},updateSelection:function(){if(!this.pan&&
this.enabled){var a=this.mouseX,b=this.mouseY;isNaN(this.fx)||(a=this.fx);isNaN(this.fy)||(b=this.fy);this.clearSelection();var c=this.mouseX0,e=this.mouseY0,h=this.width,f=this.height,a=d.fitToBounds(a,0,h),b=d.fitToBounds(b,0,f),g;a<c&&(g=a,a=c,c=g);b<e&&(g=b,b=e,e=g);this.hZoomEnabled?h=a-c:c=0;this.vZoomEnabled?f=b-e:e=0;isNaN(this.mouse2X)&&0<Math.abs(h)&&0<Math.abs(f)&&(a=this.chart,b=d.rect(this.container,h,f,this.cursorColor,this.selectionAlpha),d.setCN(a,b,"cursor-selection"),b.width=h,b.height=
f,b.translate(c,e),this.set.push(b),this.selection=b);this.updateFullLine()}},mouseIsOver:function(){var a=this.mouseX,b=this.mouseY;if(this.justReleased)return this.justReleased=!1,!0;if(this.mouseIsDown)return!0;if(!this.chart.mouseIsOver)return this.handleMouseOut(),!1;if(0<a&&a<this.width&&0<b&&b<this.height)return!0;this.handleMouseOut()},fixPosition:function(){this.prevY=this.prevX=NaN},handleMouseDown:function(){this.update();if(this.mouseIsOver())if(this.mouseIsDown=!0,this.mouseX0=this.mouseX,
this.mouseY0=this.mouseY,this.mouse2X0=this.mouse2X,this.mouse2Y0=this.mouse2Y,this.drawing)this.drawStartY=this.mouseY,this.drawStartX=this.mouseX,this.drawingNow=!0;else if(this.dispatchMovedEvent(this.mouseX,this.mouseY),!this.pan&&isNaN(this.mouse2X0)&&(isNaN(this.fx)||(this.mouseX0=this.fx),isNaN(this.fy)||(this.mouseY0=this.fy)),this.hZoomEnabled||this.vZoomEnabled){this.zooming=!0;var a={chart:this.chart,target:this,type:"zoomStarted"};a.x=this.mouseX/this.width;a.y=this.mouseY/this.height;
this.index0=a.index=this.index;this.timestamp0=this.timestamp;this.fire(a)}},registerInitialMouse:function(){},handleReleaseOutside:function(){this.mouseIsDown=!1;if(this.drawingNow){this.drawingNow=!1;d.remove(this.drawingLine);var a=this.drawStartX,b=this.drawStartY,c=this.mouseX,e=this.mouseY,h=this.chart;(2<Math.abs(a-c)||2<Math.abs(b-e))&&this.fire({type:"draw",target:this,chart:h,initialX:a,initialY:b,finalX:c,finalY:e})}this.zooming&&(this.zooming=!1,this.selectWithoutZooming?this.dispatchZoomEvent("selected"):
(this.hZoomEnabled||this.vZoomEnabled)&&this.dispatchZoomEvent("zoomed"),this.rolledOver&&this.dispatchMovedEvent(this.mouseX,this.mouseY));this.mouse2Y0=this.mouse2X0=this.mouseY0=this.mouseX0=NaN},dispatchZoomEvent:function(a){if(!this.pan){var b=this.selection;if(b&&3<Math.abs(b.width)&&3<Math.abs(b.height)){var c=Math.min(this.index,this.index0),e=Math.max(this.index,this.index0),d=c,f=e,g=this.chart,k=g.chartData,l=g.categoryAxis;l&&l.parseDates&&!l.equalSpacing&&(d=k[c]?k[c].time:Math.min(this.timestamp0,
this.timestamp),f=k[e]?g.getEndTime(k[e].time):Math.max(this.timestamp0,this.timestamp));var b={type:a,chart:this.chart,target:this,end:f,start:d,startIndex:c,endIndex:e,selectionHeight:b.height,selectionWidth:b.width,selectionY:b.y,selectionX:b.x},m;this.hZoomEnabled&&4<Math.abs(this.mouseX0-this.mouseX)&&(b.startX=this.mouseX0/this.width,b.endX=this.mouseX/this.width,m=!0);this.vZoomEnabled&&4<Math.abs(this.mouseY0-this.mouseY)&&(b.startY=1-this.mouseY0/this.height,b.endY=1-this.mouseY/this.height,
m=!0);m&&(this.prevY=this.prevX=NaN,this.fire(b),"selected"!=a&&this.clearSelection());this.hideCursor()}}},dispatchMovedEvent:function(a,b,c,e){a=Math.round(a);b=Math.round(b);if(!this.isHidden&&(a!=this.prevX||b!=this.prevY||"changed"==c)){c||(c="moved");var d=this.fx,f=this.fy;isNaN(d)&&(d=a);isNaN(f)&&(f=b);var g=!1;this.zooming&&this.pan&&(g=!0);g={hidden:this.isHidden,type:c,chart:this.chart,target:this,x:a,y:b,finalX:d,finalY:f,zooming:this.zooming,panning:g,mostCloseGraph:this.mostCloseGraph,
index:this.index,skip:e,hideBalloons:this.hideGraphBalloons};this.prevIndex=this.index;this.rotate?(g.position=b,g.finalPosition=f):(g.position=a,g.finalPosition=d);this.prevX=a;this.prevY=b;e?this.chart.handleCursorMove(g):(this.fire(g),"changed"==c&&this.chart.fire(g))}},dispatchPanEvent:function(){if(this.mouseIsDown){var a=d.roundTo((this.mouseX-this.mouseX0)/this.width,3),b=d.roundTo((this.mouseY-this.mouseY0)/this.height,3),c=d.roundTo((this.mouse2X-this.mouse2X0)/this.width,3),e=d.roundTo((this.mouse2Y-
this.mouse2Y0)/this.height,2),h=!1;0!==Math.abs(a)&&0!==Math.abs(b)&&(h=!0);if(this.prevDeltaX==a||this.prevDeltaY==b)h=!1;isNaN(c)||isNaN(e)||(0!==Math.abs(c)&&0!==Math.abs(e)&&(h=!0),this.prevDelta2X!=c&&this.prevDelta2Y!=e)||(h=!1);h&&(this.hideLines(),this.fire({type:"panning",chart:this.chart,target:this,deltaX:a,deltaY:b,delta2X:c,delta2Y:e,index:this.index}),this.prevDeltaX=a,this.prevDeltaY=b,this.prevDelta2X=c,this.prevDelta2Y=e)}},clearSelection:function(){var a=this.selection;a&&(a.width=
0,a.height=0,a.remove())},destroy:function(){this.clear();d.remove(this.selection);this.selection=null;clearTimeout(this.syncTO);d.remove(this.set)},clear:function(){},setTimestamp:function(a){this.timestamp=a},setIndex:function(a,b){a!=this.index&&(this.index=a,b||this.isHidden||this.dispatchMovedEvent(this.mouseX,this.mouseY,"changed"))},handleMouseOut:function(){this.enabled&&this.rolledOver&&(this.leaveCursor||this.setIndex(void 0),this.forceShow=!1,this.hideCursor(),this.rolledOver=!1)},showCursorAt:function(a){var b=
this.chart.categoryAxis;b&&this.setPosition(b.categoryToCoordinate(a))},setPosition:function(a){var b=this.chart,c=b.categoryAxis;if(c){var e,d,f=c.coordinateToValue(a);c.showBalloonAt(f);this.forceShow=!0;c.stickBalloonToCategory?b.rotate?this.fixHLine(a,0):this.fixVLine(a,0):(this.showCursor(),b.rotate?this.hhLine.translate(0,a):this.vvLine.translate(a,0));b.rotate?e=a:d=a;this.dispatchMovedEvent(d,e);b.rotate?(this.vvLine&&this.vvLine.hide(),this.hhLine&&this.hhLine.show()):(this.hhLine&&this.hhLine.hide(),
this.vvLine&&this.vvLine.show());this.updateFullLine();this.isHidden=!1;this.dispatchMovedEvent(d,e,"moved",!0)}},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.drawing=a},syncWithCursor:function(a,b){clearTimeout(this.syncTO);a&&(a.isHidden?this.hideCursor(!0):this.syncWithCursorReal(a,b))},isZooming:function(a){this.zooming=a},syncWithCursorReal:function(a,b){var c=a.vvLine,e=a.hhLine;this.index=a.index;this.forceShow=!0;this.zooming&&this.pan||this.showCursor(!0);this.hideGraphBalloons=
b;this.justReleased=a.justReleased;this.zooming=a.zooming;this.index0=a.index0;this.mouseX0=a.mouseX0;this.mouseY0=a.mouseY0;this.mouse2X0=a.mouse2X0;this.mouse2Y0=a.mouse2Y0;this.timestamp0=a.timestamp0;this.prevDeltaX=a.prevDeltaX;this.prevDeltaY=a.prevDeltaY;this.prevDelta2X=a.prevDelta2X;this.prevDelta2Y=a.prevDelta2Y;this.fx=a.fx;this.fy=a.fy;this.index=a.index;a.zooming&&this.updateSelection();var d=a.mouseX,f=a.mouseY;this.rotate?(d=NaN,this.vvLine&&this.vvLine.hide(),this.hhLine&&e&&(isNaN(a.fy)?
this.hhLine.translate(0,a.mouseY):this.fixHLine(a.fy,0))):(f=NaN,this.hhLine&&this.hhLine.hide(),this.vvLine&&c&&(isNaN(a.fx)?this.vvLine.translate(a.mouseX,0):this.fixVLine(a.fx,0)));this.dispatchMovedEvent(d,f,"moved",!0)}})})();(function(){var d=window.AmCharts;d.SimpleChartScrollbar=d.Class({construct:function(a){this.createEvents("zoomed","zoomStarted","zoomEnded");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconHeight=this.dragIconWidth=35;this.dragIcon="dragIconRoundBig";
this.dragCursorHover="cursor: cursor: grab; cursor:-moz-grab; cursor:-webkit-grab;";this.dragCursorDown="cursor: cursor: grab; cursor:-moz-grabbing; cursor:-webkit-grabbing;";this.enabled=!0;this.percentStart=this.offset=0;this.percentEnd=1;d.applyTheme(this,a,"SimpleChartScrollbar")},getPercents:function(){var a=this.getDBox(),b=a.x,c=a.y,e=a.width,a=a.height;this.rotate?(b=1-c/this.height,c=1-(c+a)/this.height):(c=b/this.width,b=(b+e)/this.width);this.percentStart=c;this.percentEnd=b},draw:function(){var a=
this;a.destroy();if(a.enabled){var b=a.chart.container,c=a.rotate,e=a.chart;e.panRequired=!0;var h=b.set();a.set=h;e.scrollbarsSet.push(h);var f,g;c?(f=a.scrollbarHeight,g=e.plotAreaHeight):(g=a.scrollbarHeight,f=e.plotAreaWidth);a.width=f;if((a.height=g)&&f){var k=d.rect(b,f,g,a.backgroundColor,a.backgroundAlpha,1,a.backgroundColor,a.backgroundAlpha);d.setCN(e,k,"scrollbar-bg");a.bg=k;h.push(k);k=d.rect(b,f,g,"#000",.005);h.push(k);a.invisibleBg=k;k.click(function(){a.handleBgClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()}).touchend(function(){a.handleBgClick()});
k=d.rect(b,f,g,a.selectedBackgroundColor,a.selectedBackgroundAlpha);d.setCN(e,k,"scrollbar-bg-selected");a.selectedBG=k;h.push(k);f=d.rect(b,f,g,"#000",.005);a.dragger=f;h.push(f);f.mousedown(function(b){a.handleDragStart(b)}).mouseup(function(){a.handleDragStop()}).mouseover(function(){a.handleDraggerOver()}).mouseout(function(){a.handleMouseOut()}).touchstart(function(b){a.handleDragStart(b)}).touchend(function(){a.handleDragStop()});g=e.pathToImages;var l,k=a.dragIcon.replace(/\.[a-z]*$/i,"");
c?(l=g+k+"H"+e.extension,g=a.dragIconWidth,c=a.dragIconHeight):(l=g+k+e.extension,c=a.dragIconWidth,g=a.dragIconHeight);k=b.image(l,0,0,c,g);d.setCN(e,k,"scrollbar-grip-left");l=b.image(l,0,0,c,g);d.setCN(e,l,"scrollbar-grip-right");var m=10,n=20;e.panEventsEnabled&&(m=25,n=a.scrollbarHeight);var q=d.rect(b,m,n,"#000",.005),p=d.rect(b,m,n,"#000",.005);p.translate(-(m-c)/2,-(n-g)/2);q.translate(-(m-c)/2,-(n-g)/2);c=b.set([k,p]);b=b.set([l,q]);a.iconLeft=c;h.push(a.iconLeft);a.iconRight=b;h.push(b);
e.makeAccessible(c,a.accessibleLabel);e.makeAccessible(b,a.accessibleLabel);e.makeAccessible(f,a.accessibleLabel);c.setAttr("role","menuitem");b.setAttr("role","menuitem");f.setAttr("role","menuitem");void 0!==a.tabIndex&&(c.setAttr("tabindex",a.tabIndex),c.keyup(function(b){a.handleKeys(b,1,0)}));void 0!==a.tabIndex&&(f.setAttr("tabindex",a.tabIndex),f.keyup(function(b){a.handleKeys(b,1,1)}));void 0!==a.tabIndex&&(b.setAttr("tabindex",a.tabIndex),b.keyup(function(b){a.handleKeys(b,0,1)}));c.mousedown(function(){a.leftDragStart()}).mouseup(function(){a.leftDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.leftDragStart()}).touchend(function(){a.leftDragStop()});
b.mousedown(function(){a.rightDragStart()}).mouseup(function(){a.rightDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.rightDragStart()}).touchend(function(){a.rightDragStop()});d.ifArray(e.chartData)?h.show():h.hide();a.hideDragIcons();a.clipDragger(!1)}h.translate(a.x,a.y);h.node.style.msTouchAction="none";h.node.style.touchAction="none"}},handleKeys:function(a,b,c){this.getPercents();var e=this.percentStart,d=this.percentEnd;if(this.rotate)var f=
d,d=e,e=f;if(37==a.keyCode||40==a.keyCode)e-=.02*b,d-=.02*c;if(39==a.keyCode||38==a.keyCode)e+=.02*b,d+=.02*c;this.rotate&&(a=d,d=e,e=a);isNaN(d)||isNaN(e)||this.percentZoom(e,d,!0)},updateScrollbarSize:function(a,b){if(!isNaN(a)&&!isNaN(b)){a=Math.round(a);b=Math.round(b);var c=this.dragger,e,d,f,g,k;this.rotate?(e=0,d=a,f=this.width+1,g=b-a,c.setAttr("height",b-a),c.setAttr("y",d)):(e=a,d=0,f=b-a,g=this.height+1,k=b-a,c.setAttr("x",e),c.setAttr("width",k));this.clipAndUpdate(e,d,f,g)}},update:function(){var a,
b=!1,c,e,d=this.x,f=this.y,g=this.dragger,k=this.getDBox();if(k){c=k.x+d;e=k.y+f;var l=k.width,k=k.height,m=this.rotate,n=this.chart,q=this.width,p=this.height,t=n.mouseX,r=n.mouseY;a=this.initialMouse;this.forceClip&&this.clipDragger(!0);if(n.mouseIsOver){this.dragging&&(n=this.initialCoord,m?(a=n+(r-a),0>a&&(a=0),n=p-k,a>n&&(a=n),g.setAttr("y",a)):(a=n+(t-a),0>a&&(a=0),n=q-l,a>n&&(a=n),g.setAttr("x",a)),this.clipDragger(!0));if(this.resizingRight){if(m)if(a=r-e,a+e>p+f&&(a=p-e+f),0>a)this.resizingRight=
!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;g.setAttr("height",a)}else if(a=t-c,a+c>q+d&&(a=q-c+d),0>a)this.resizingRight=!1,b=this.resizingLeft=!0;else{if(0===a||isNaN(a))a=.1;g.setAttr("width",a)}this.clipDragger(!0)}if(this.resizingLeft){if(m)if(c=e,e=r,e<f&&(e=f),isNaN(e)&&(e=f),e>p+f&&(e=p+f),a=!0===b?c-e:k+c-e,0>a)this.resizingRight=!0,this.resizingLeft=!1,g.setAttr("y",c+k-f);else{if(0===a||isNaN(a))a=.1;g.setAttr("y",e-f);g.setAttr("height",a)}else if(e=t,e<d&&(e=d),isNaN(e)&&(e=
d),e>q+d&&(e=q+d),a=!0===b?c-e:l+c-e,0>a)this.resizingRight=!0,this.resizingLeft=!1,g.setAttr("x",c+l-d);else{if(0===a||isNaN(a))a=.1;g.setAttr("x",e-d);g.setAttr("width",a)}this.clipDragger(!0)}}}},stopForceClip:function(){this.animating=this.forceClip=!1},clipDragger:function(a){var b=this.getDBox();if(b){var c=b.x,e=b.y,d=b.width,b=b.height,f=!1;if(this.rotate){if(c=0,d=this.width+1,this.clipY!=e||this.clipH!=b)f=!0}else if(e=0,b=this.height+1,this.clipX!=c||this.clipW!=d)f=!0;f&&(this.clipAndUpdate(c,
e,d,b),a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent()))}},maskGraphs:function(){},clipAndUpdate:function(a,b,c,e){this.clipX=a;this.clipY=b;this.clipW=c;this.clipH=e;this.selectedBG.setAttr("width",c);this.selectedBG.setAttr("height",e);this.selectedBG.translate(a,b);this.updateDragIconPositions();this.maskGraphs(a,b,c,e)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),c=b.x,e=b.y,d=b.width,b=b.height;this.getPercents();
this.rotate?(c=e,d=this.height/b):d=this.width/d;this.fire({type:"zoomed",position:c,chart:a,target:this,multiplier:d,relativeStart:this.percentStart,relativeEnd:this.percentEnd})}},updateDragIconPositions:function(){var a=this.getDBox(),b=a.x,c=a.y,e=this.iconLeft,d=this.iconRight,f,g,k=this.scrollbarHeight;this.rotate?(f=this.dragIconWidth,g=this.dragIconHeight,e.translate((k-g)/2,c-f/2),d.translate((k-g)/2,c+a.height-f/2)):(f=this.dragIconHeight,g=this.dragIconWidth,e.translate(b-g/2,(k-f)/2),
d.translate(b-g/2+a.width,(k-f)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){if(!this.resizingLeft&&!this.resizingRight&&!this.dragging){if(this.hideResizeGrips||!this.resizeEnabled)this.iconLeft.hide(),this.iconRight.hide();this.removeCursors()}},removeCursors:function(){this.chart.setMouseCursor("auto")},fireZoomEvent:function(a){this.fire({type:a,chart:this.chart,target:this})},percentZoom:function(a,b,c){a=d.fitToBounds(a,
0,b);b=d.fitToBounds(b,a,1);if(this.dragger&&this.enabled){this.dragger.stop();isNaN(a)&&(a=0);isNaN(b)&&(b=1);var e,h;this.rotate?(e=this.height,b=e-e*b,h=e-e*a):(e=this.width,h=e*b,b=e*a);this.updateScrollbarSize(b,h);this.clipDragger(!1);this.getPercents();c&&this.dispatchScrollbarEvent()}},destroy:function(){this.clear();d.remove(this.set);d.remove(this.iconRight);d.remove(this.iconLeft)},clear:function(){},handleDragStart:function(){if(this.enabled){this.fireZoomEvent("zoomStarted");var a=this.chart;
this.dragger.stop();this.removeCursors();d.isModern&&this.dragger.node.setAttribute("style",this.dragCursorDown);this.dragging=!0;var b=this.getDBox();this.rotate?(this.initialCoord=b.y,this.initialMouse=a.mouseY):(this.initialCoord=b.x,this.initialMouse=a.mouseX)}},handleDragStop:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent());this.dragging=!1;this.mouseIsOver&&this.removeCursors();d.isModern&&this.dragger.node.setAttribute("style",this.dragCursorHover);
this.update();this.fireZoomEvent("zoomEnded")},handleDraggerOver:function(){this.handleMouseOver();d.isModern&&this.dragger.node.setAttribute("style",this.dragCursorHover)},leftDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();this.resizingLeft=!0},leftDragStop:function(){this.resizingLeft&&(this.resizingLeft=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"))},rightDragStart:function(){this.fireZoomEvent("zoomStarted");this.dragger.stop();
this.resizingRight=!0},rightDragStop:function(){this.resizingRight&&(this.resizingRight=!1,this.mouseIsOver||this.removeCursors(),this.updateOnRelease(),this.fireZoomEvent("zoomEnded"))},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.chart.setMouseCursor("ns-resize"):this.chart.setMouseCursor("ew-resize");this.handleMouseOver()},getDBox:function(){if(this.dragger)return this.dragger.getBBox()},handleBgClick:function(){var a=this;if(!a.resizingRight&&!a.resizingLeft){a.zooming=
!0;var b,c,e=a.scrollDuration,h=a.dragger;b=a.getDBox();var f=b.height,g=b.width;c=a.chart;var k=a.y,l=a.x,m=a.rotate;m?(b="y",c=c.mouseY-f/2-k,c=d.fitToBounds(c,0,a.height-f)):(b="x",c=c.mouseX-g/2-l,c=d.fitToBounds(c,0,a.width-g));a.updateOnReleaseOnly?(a.skipEvent=!1,h.setAttr(b,c),a.dispatchScrollbarEvent(),a.clipDragger()):(a.animating=!0,c=Math.round(c),m?h.animate({y:c},e,">"):h.animate({x:c},e,">"),a.forceClip=!0,clearTimeout(a.forceTO),a.forceTO=setTimeout(function(){a.stopForceClip.call(a)},
5E3*e))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.update(),this.skipEvent=!1,this.dispatchScrollbarEvent())},handleReleaseOutside:function(){if(this.set){if(this.resizingLeft||this.resizingRight||this.dragging)this.dragging=this.resizingRight=this.resizingLeft=!1,this.updateOnRelease(),this.removeCursors();this.animating=this.mouseIsOver=!1;this.hideDragIcons();this.update()}},handleMouseOver:function(){this.mouseIsOver=!0;this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=
!1;this.hideDragIcons();this.removeCursors()}})})();(function(){var d=window.AmCharts;d.ChartScrollbar=d.Class({inherits:d.SimpleChartScrollbar,construct:function(a){this.cname="ChartScrollbar";d.ChartScrollbar.base.construct.call(this,a);this.graphLineColor="#BBBBBB";this.graphLineAlpha=0;this.graphFillColor="#BBBBBB";this.graphFillAlpha=1;this.selectedGraphLineColor="#888888";this.selectedGraphLineAlpha=0;this.selectedGraphFillColor="#888888";this.selectedGraphFillAlpha=1;this.gridCount=0;this.gridColor="#FFFFFF";this.gridAlpha=.7;this.skipEvent=
this.autoGridCount=!1;this.color="#FFFFFF";this.scrollbarCreated=!1;this.oppositeAxis=!0;this.accessibleLabel="Zoom chart using cursor arrows";d.applyTheme(this,a,this.cname)},init:function(){var a=this.categoryAxis,b=this.chart,c=this.gridAxis;a||("CategoryAxis"==this.gridAxis.cname?(this.catScrollbar=!0,a=new d.CategoryAxis,a.id="scrollbar"):(a=new d.ValueAxis,a.data=b.chartData,a.id=c.id,a.type=c.type,a.maximumDate=c.maximumDate,a.minimumDate=c.minimumDate,a.minPeriod=c.minPeriod),this.categoryAxis=
a);a.chart=b;var e=b.categoryAxis;e&&(a.firstDayOfWeek=e.firstDayOfWeek);a.dateFormats=c.dateFormats;a.markPeriodChange=c.markPeriodChange;a.boldPeriodBeginning=c.boldPeriodBeginning;a.labelFunction=c.labelFunction;a.axisItemRenderer=d.RecItem;a.axisRenderer=d.RecAxis;a.guideFillRenderer=d.RecFill;a.inside=!0;a.fontSize=this.fontSize;a.tickLength=0;a.axisAlpha=0;d.isString(this.graph)&&(this.graph=d.getObjById(b.graphs,this.graph));(a=this.graph)&&this.catScrollbar&&(c=this.valueAxis,c||(this.valueAxis=
c=new d.ValueAxis,c.visible=!1,c.scrollbar=!0,c.axisItemRenderer=d.RecItem,c.axisRenderer=d.RecAxis,c.guideFillRenderer=d.RecFill,c.labelsEnabled=!1,c.chart=b),b=this.unselectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.unselectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers),b=this.selectedGraph,b||(b=new d.AmGraph,b.scrollbar=!0,this.selectedGraph=b,b.negativeBase=a.negativeBase,b.noStepRisers=a.noStepRisers));this.scrollbarCreated=!0},draw:function(){var a=this;d.ChartScrollbar.base.draw.call(a);
if(a.enabled){a.scrollbarCreated||a.init();var b=a.chart,c=b.chartData,e=a.categoryAxis,h=a.rotate,f=a.x,g=a.y,k=a.width,l=a.height,m=a.gridAxis,n=a.set;e.setOrientation(!h);e.parseDates=m.parseDates;"ValueAxis"==a.categoryAxis.cname&&(e.rotate=!h);e.equalSpacing=m.equalSpacing;e.minPeriod=m.minPeriod;e.startOnAxis=m.startOnAxis;e.width=k-1;e.height=l;e.gridCount=a.gridCount;e.gridColor=a.gridColor;e.gridAlpha=a.gridAlpha;e.color=a.color;e.tickLength=0;e.axisAlpha=0;e.autoGridCount=a.autoGridCount;
e.parseDates&&!e.equalSpacing&&e.timeZoom(b.firstTime,b.lastTime);e.minimum=a.gridAxis.fullMin;e.maximum=a.gridAxis.fullMax;e.strictMinMax=!0;e.zoom(0,c.length-1);if((m=a.graph)&&a.catScrollbar){var q=a.valueAxis,p=m.valueAxis;q.id=p.id;q.rotate=h;q.setOrientation(h);q.width=k;q.height=l;q.dataProvider=c;q.reversed=p.reversed;q.logarithmic=p.logarithmic;q.gridAlpha=0;q.axisAlpha=0;n.push(q.set);h?(q.y=g,q.x=0):(q.x=f,q.y=0);var f=Infinity,g=-Infinity,t;for(t=0;t<c.length;t++){var r=c[t].axes[p.id].graphs[m.id].values,
w;for(w in r)if(r.hasOwnProperty(w)&&"percents"!=w&&"total"!=w){var x=r[w];x<f&&(f=x);x>g&&(g=x)}}Infinity!=f&&(q.minimum=f);-Infinity!=g&&(q.maximum=g+.1*(g-f));f==g&&(--q.minimum,q.maximum+=1);void 0!==a.minimum&&(q.minimum=a.minimum);void 0!==a.maximum&&(q.maximum=a.maximum);q.zoom(0,c.length-1);w=a.unselectedGraph;w.id=m.id;w.bcn="scrollbar-graph-";w.rotate=h;w.chart=b;w.data=c;w.valueAxis=q;w.chart=m.chart;w.categoryAxis=a.categoryAxis;w.periodSpan=m.periodSpan;w.valueField=m.valueField;w.openField=
m.openField;w.closeField=m.closeField;w.highField=m.highField;w.lowField=m.lowField;w.lineAlpha=a.graphLineAlpha;w.lineColorR=a.graphLineColor;w.fillAlphas=a.graphFillAlpha;w.fillColorsR=a.graphFillColor;w.connect=m.connect;w.hidden=m.hidden;w.width=k;w.height=l;w.pointPosition=m.pointPosition;w.stepDirection=m.stepDirection;w.periodSpan=m.periodSpan;p=a.selectedGraph;p.id=m.id;p.bcn=w.bcn+"selected-";p.rotate=h;p.chart=b;p.data=c;p.valueAxis=q;p.chart=m.chart;p.categoryAxis=e;p.periodSpan=m.periodSpan;
p.valueField=m.valueField;p.openField=m.openField;p.closeField=m.closeField;p.highField=m.highField;p.lowField=m.lowField;p.lineAlpha=a.selectedGraphLineAlpha;p.lineColorR=a.selectedGraphLineColor;p.fillAlphas=a.selectedGraphFillAlpha;p.fillColorsR=a.selectedGraphFillColor;p.connect=m.connect;p.hidden=m.hidden;p.width=k;p.height=l;p.pointPosition=m.pointPosition;p.stepDirection=m.stepDirection;p.periodSpan=m.periodSpan;b=a.graphType;b||(b=m.type);w.type=b;p.type=b;c=c.length-1;w.zoom(0,c);p.zoom(0,
c);p.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});w.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});n.push(w.set);n.push(p.set)}n.push(e.set);n.push(e.labelsSet);a.bg.toBack();a.invisibleBg.toFront();a.dragger.toFront();a.iconLeft.toFront();a.iconRight.toFront()}},timeZoom:function(a,b,c){this.startTime=a;this.endTime=b;this.timeDifference=
b-a;this.skipEvent=!d.toBoolean(c);this.zoomScrollbar();this.dispatchScrollbarEvent()},zoom:function(a,b){this.start=a;this.end=b;this.skipEvent=!0;this.zoomScrollbar()},dispatchScrollbarEvent:function(){if(this.categoryAxis&&"ValueAxis"==this.categoryAxis.cname)d.ChartScrollbar.base.dispatchScrollbarEvent.call(this);else if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart.chartData,b,c;b=this.dragger.getBBox();var e=b.x,h=b.y,f=b.width,g=b.height,k=this.chart;this.rotate?(b=h,c=g):(b=e,c=f);
f={type:"zoomed",target:this};f.chart=k;var l=this.categoryAxis,m=this.stepWidth,e=k.minSelectedTime,h=k.maxSelectedTime,g=!1;if(l.parseDates&&!l.equalSpacing){if(a=k.lastTime,k=k.firstTime,l=Math.round(b/m)+k,b=this.dragging?l+this.timeDifference:Math.round((b+c)/m)+k,l>b&&(l=b),0<e&&b-l<e&&(b=Math.round(l+(b-l)/2),g=Math.round(e/2),l=b-g,b+=g,g=!0),0<h&&b-l>h&&(b=Math.round(l+(b-l)/2),g=Math.round(h/2),l=b-g,b+=g,g=!0),b>a&&(b=a),b-e<l&&(l=b-e),l<k&&(l=k),l+e>b&&(b=l+e),l!=this.startTime||b!=this.endTime)this.startTime=
l,this.endTime=b,f.start=l,f.end=b,f.startDate=new Date(l),f.endDate=new Date(b),this.fire(f)}else{l.startOnAxis||(b+=m/2);c-=this.stepWidth/2;var n=l.xToIndex(b),q=l.xToIndex(b+c);if(n!=this.start||this.end!=q)l.startOnAxis&&(this.resizingRight&&n==q&&q++,this.resizingLeft&&n==q&&(0<n?n--:q=1)),this.start=n,this.end=this.dragging?this.start+this.difference:q,f.start=this.start,f.end=this.end,l.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),
this.fire(f)}this.percentStart=n;this.percentEnd=q;g&&this.zoomScrollbar(!0)}},zoomScrollbar:function(a){if((!(this.dragging||this.resizingLeft||this.resizingRight||this.animating)||a)&&this.dragger&&this.enabled){var b;a=this.chart;var c=a.chartData,e=this.categoryAxis;e.parseDates&&!e.equalSpacing?(c=e.stepWidth,e=a.firstTime,a=c*(this.startTime-e),b=c*(this.endTime-e)):(a=c[this.start].x[e.id],b=c[this.end].x[e.id],c=e.stepWidth,e.startOnAxis||(e=c/2,a-=e,b+=e));this.stepWidth=c;this.updateScrollbarSize(a,
b)}},maskGraphs:function(a,b,c,e){var d=this.selectedGraph;d&&d.set.clipRect(a,b,c,e)},handleDragStart:function(){d.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;this.timeDifference=this.endTime-this.startTime;0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){d.ChartScrollbar.base.handleBackgroundClick.call(this);this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&
(this.timeDifference=0))}})})();(function(){var d=window.AmCharts;d.AmBalloon=d.Class({construct:function(a){this.cname="AmBalloon";this.enabled=!0;this.fillColor="#FFFFFF";this.fillAlpha=.8;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=0;this.maxWidth=220;this.horizontalPadding=8;this.verticalPadding=4;this.pointerWidth=6;this.pointerOrientation="V";this.color="#000000";this.adjustBorderColor=!0;this.show=this.follow=this.showBullet=!1;this.bulletSize=3;this.shadowAlpha=.4;this.shadowColor=
"#000000";this.fadeOutDuration=this.animationDuration=.3;this.fixedPosition=!0;this.offsetY=6;this.offsetX=1;this.textAlign="center";this.disableMouseEvents=!0;this.deltaSignX=this.deltaSignY=1;d.isModern||(this.offsetY*=1.5);this.sdy=this.sdx=0;d.applyTheme(this,a,this.cname)},draw:function(){var a=this.pointToX,b=this.pointToY;d.isModern||(this.drop=!1);var c=this.chart;d.VML&&(this.fadeOutDuration=0);this.xAnim&&c.stopAnim(this.xAnim);this.yAnim&&c.stopAnim(this.yAnim);this.sdy=this.sdx=0;if(!isNaN(a)){var e=
this.follow,h=c.container,f=this.set;d.remove(f);this.removeDiv();f=h.set();f.node.style.pointerEvents="none";this.set=f;this.mainSet?(this.mainSet.push(this.set),this.sdx=this.mainSet.x,this.sdy=this.mainSet.y):c.balloonsSet.push(f);if(this.show){var g=this.l,k=this.t,l=this.r,m=this.b,n=this.balloonColor,q=this.fillColor,p=this.borderColor,t=q;void 0!=n&&(this.adjustBorderColor?t=p=n:q=n);var r=this.horizontalPadding,w=this.verticalPadding,x=this.pointerWidth,y=this.pointerOrientation,u=this.cornerRadius,
A=c.fontFamily,z=this.fontSize;void 0==z&&(z=c.fontSize);var n=document.createElement("div"),B=c.classNamePrefix;n.className=B+"-balloon-div";this.className&&(n.className=n.className+" "+B+"-balloon-div-"+this.className);B=n.style;this.disableMouseEvents&&(B.pointerEvents="none");B.position="absolute";var D=this.minWidth,C="";isNaN(D)||(C="min-width:"+(D-2*r)+"px; ");n.innerHTML='<div style="text-align:'+this.textAlign+"; "+C+"max-width:"+this.maxWidth+"px; font-size:"+z+"px; color:"+this.color+"; font-family:"+
A+'">'+this.text+"</div>";c.chartDiv.appendChild(n);this.textDiv=n;var J=n.offsetWidth,H=n.offsetHeight;n.clientHeight&&(J=n.clientWidth,H=n.clientHeight);A=H+2*w;C=J+2*r;!isNaN(D)&&C<D&&(C=D);window.opera&&(A+=2);var S=!1,z=this.offsetY;c.handDrawn&&(z+=c.handDrawScatter+2);"H"!=y?(D=a-C/2,b<k+A+10&&"down"!=y?(S=!0,e&&(b+=z),z=b+x,this.deltaSignY=-1):(e&&(b-=z),z=b-A-x,this.deltaSignY=1)):(2*x>A&&(x=A/2),z=b-A/2,a<g+(l-g)/2?(D=a+x,this.deltaSignX=-1):(D=a-C-x,this.deltaSignX=1));z+A>=m&&(z=m-A);
z<k&&(z=k);D<g&&(D=g);D+C>l&&(D=l-C);var k=z+w,m=D+r,O=this.shadowAlpha,Q=this.shadowColor,r=this.borderThickness,ia=this.bulletSize,I,w=this.fillAlpha,Z=this.borderAlpha;this.showBullet&&(I=d.circle(h,ia,t,w),f.push(I));this.drop?(g=C/1.6,l=0,"V"==y&&(y="down"),"H"==y&&(y="left"),"down"==y&&(D=a+1,z=b-g-g/3),"up"==y&&(l=180,D=a+1,z=b+g+g/3),"left"==y&&(l=270,D=a+g+g/3+2,z=b),"right"==y&&(l=90,D=a-g-g/3+2,z=b),k=z-H/2+1,m=D-J/2-1,q=d.drop(h,g,l,q,w,r,p,Z)):0<u||0===x?(0<O&&(a=d.rect(h,C,A,q,0,r+1,
Q,O,u),d.isModern?a.translate(1,1):a.translate(4,4),f.push(a)),q=d.rect(h,C,A,q,w,r,p,Z,u)):(t=[],u=[],"H"!=y?(g=a-D,g>C-x&&(g=C-x),g<x&&(g=x),t=[0,g-x,a-D,g+x,C,C,0,0],u=S?[0,0,b-z,0,0,A,A,0]:[A,A,b-z,A,A,0,0,A]):(y=b-z,y>A-x&&(y=A-x),y<x&&(y=x),u=[0,y-x,b-z,y+x,A,A,0,0],t=a<g+(l-g)/2?[0,0,D<a?0:a-D,0,0,C,C,0]:[C,C,D+C>a?C:a-D,C,C,0,0,C]),0<O&&(a=d.polygon(h,t,u,q,0,r,Q,O),a.translate(1,1),f.push(a)),q=d.polygon(h,t,u,q,w,r,p,Z));this.bg=q;f.push(q);q.toFront();d.setCN(c,q,"balloon-bg");this.className&&
d.setCN(c,q,"balloon-bg-"+this.className);h=1*this.deltaSignX;m+=this.sdx;k+=this.sdy;B.left=m+"px";B.top=k+"px";f.translate(D-h,z,1,!0);q=q.getBBox();this.bottom=z+A+1;this.yPos=q.y+z;I&&I.translate(this.pointToX-D+h,b-z);b=this.animationDuration;0<this.animationDuration&&!e&&!isNaN(this.prevX)&&(f.translate(this.prevX,this.prevY,NaN,!0),f.animate({translate:D-h+","+z},b,"easeOutSine"),n&&(B.left=this.prevTX+"px",B.top=this.prevTY+"px",this.xAnim=c.animate({node:n},"left",this.prevTX,m,b,"easeOutSine",
"px"),this.yAnim=c.animate({node:n},"top",this.prevTY,k,b,"easeOutSine","px")));this.prevX=D-h;this.prevY=z;this.prevTX=m;this.prevTY=k}}},fixPrevious:function(){this.rPrevX=this.prevX;this.rPrevY=this.prevY;this.rPrevTX=this.prevTX;this.rPrevTY=this.prevTY},restorePrevious:function(){this.prevX=this.rPrevX;this.prevY=this.rPrevY;this.prevTX=this.rPrevTX;this.prevTY=this.rPrevTY},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX-this.offsetX*this.deltaSignX-this.sdx,b=this.chart.mouseY-
this.sdy;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0===this.cornerRadius)this.draw();else{var c=this.set;if(c){var e=c.getBBox(),a=a-e.width/2,d=b-e.height-10;a<this.l&&(a=this.l);a>this.r-e.width&&(a=this.r-e.width);d<this.t&&(d=b+10);c.translate(a,d);b=this.textDiv.style;b.left=a+this.horizontalPadding+"px";b.top=d+this.verticalPadding+"px"}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,b,c,d){this.l=a;this.t=
b;this.r=c;this.b=d;this.destroyTO&&clearTimeout(this.destroyTO)},showBalloon:function(a){if(this.text!=a||this.positionChanged)this.text=a,this.isHiding=!1,this.show=!0,this.destroyTO&&clearTimeout(this.destroyTO),a=this.chart,this.fadeAnim1&&a.stopAnim(this.fadeAnim1),this.fadeAnim2&&a.stopAnim(this.fadeAnim2),this.draw(),this.positionChanged=!1},hide:function(a){var b=this;b.text=void 0;isNaN(a)&&(a=b.fadeOutDuration);var c=b.chart;if(0<a&&!b.isHiding){b.isHiding=!0;b.destroyTO&&clearTimeout(b.destroyTO);
b.destroyTO=setTimeout(function(){b.destroy.call(b)},1E3*a);b.follow=!1;b.show=!1;var d=b.set;d&&(d.setAttr("opacity",b.fillAlpha),b.fadeAnim1=d.animate({opacity:0},a,"easeInSine"));b.textDiv&&(b.fadeAnim2=c.animate({node:b.textDiv},"opacity",1,0,a,"easeInSine",""))}else b.show=!1,b.follow=!1,b.destroy()},setPosition:function(a,b){if(a!=this.pointToX||b!=this.pointToY)this.previousX=this.pointToX,this.previousY=this.pointToY,this.pointToX=a,this.pointToY=b,this.positionChanged=!0},followCursor:function(a){var b=
this;b.follow=a;clearInterval(b.interval);var c=b.chart.mouseX-b.sdx,d=b.chart.mouseY-b.sdy;!isNaN(c)&&a&&(b.pointToX=c-b.offsetX*b.deltaSignX,b.pointToY=d,b.followMouse(),b.interval=setInterval(function(){b.followMouse.call(b)},40))},removeDiv:function(){if(this.textDiv){var a=this.textDiv.parentNode;a&&a.removeChild(this.textDiv)}},destroy:function(){clearInterval(this.interval);d.remove(this.set);this.removeDiv();this.set=null}})})();(function(){var d=window.AmCharts;d.AmCoordinateChart=d.Class({inherits:d.AmChart,construct:function(a){d.AmCoordinateChart.base.construct.call(this,a);this.theme=a;this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem","rightClickGraphItem","clickGraph","rollOverGraph","rollOutGraph");this.startAlpha=1;this.startDuration=0;this.startEffect="elastic";this.sequencedAnimation=!0;this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");
this.balloonDateFormat="MMM DD, YYYY";this.valueAxes=[];this.graphs=[];this.guides=[];this.gridAboveGraphs=!1;d.applyTheme(this,a,"AmCoordinateChart")},initChart:function(){d.AmCoordinateChart.base.initChart.call(this);this.drawGraphs=!0;var a=this.categoryAxis;a&&(this.categoryAxis=d.processObject(a,d.CategoryAxis,this.theme));this.processValueAxes();this.createValueAxes();this.processGraphs();this.processGuides();d.VML&&(this.startAlpha=1);this.setLegendData(this.graphs);this.gridAboveGraphs&&(this.gridSet.toFront(),
this.bulletSet.toFront(),this.balloonsSet.toFront())},createValueAxes:function(){if(0===this.valueAxes.length){var a=new d.ValueAxis;this.addValueAxis(a)}},parseData:function(){this.processValueAxes();this.processGraphs()},parseSerialData:function(a){this.chartData=[];if(a)if(0<this.processTimeout){1>this.processCount&&(this.processCount=1);var b=a.length/this.processCount;this.parseCount=Math.ceil(b)-1;for(var c=0;c<b;c++)this.delayParseSerialData(a,c)}else this.parseCount=0,this.parsePartSerialData(a,
0,a.length,0);else this.onDataUpdated()},delayParseSerialData:function(a,b){var c=this,d=c.processCount;setTimeout(function(){c.parsePartSerialData.call(c,a,b*d,(b+1)*d,b)},c.processTimeout)},parsePartSerialData:function(a,b,c,e){c>a.length&&(c=a.length);var h=this.graphs,f={},g=this.seriesIdField;g||(g=this.categoryField);var k=!1,l,m=this.categoryAxis,n,q,p;m&&(k=m.parseDates,n=m.forceShowField,p=m.classNameField,q=m.labelColorField,l=m.categoryFunction);var t,r,w={},x;k&&(t=d.extractPeriod(m.minPeriod),
r=t.period,t=t.count,x=d.getPeriodDuration(r,t));var y={};this.lookupTable=y;var u,A=this.dataDateFormat,z={};for(u=b;u<c;u++){var B={},D=a[u];b=D[this.categoryField];B.dataContext=D;B.category=l?l(b,D,m):String(b);n&&(B.forceShow=D[n]);p&&(B.className=D[p]);q&&(B.labelColor=D[q]);y[D[g]]=B;if(k&&(m.categoryFunction?b=m.categoryFunction(b,D,m):(!A||b instanceof Date||(b=b.toString()+" |"),b=d.getDate(b,A,m.minPeriod)),b=d.resetDateToMin(b,r,t,m.firstDayOfWeek),B.category=b,B.time=b.getTime(),isNaN(B.time)))continue;
var C=this.valueAxes;B.axes={};B.x={};var J;for(J=0;J<C.length;J++){var H=C[J].id;B.axes[H]={};B.axes[H].graphs={};var S;for(S=0;S<h.length;S++){b=h[S];var O=b.id,Q=1.1;isNaN(b.gapPeriod)||(Q=b.gapPeriod);var ia=b.periodValue;if(b.valueAxis.id==H){B.axes[H].graphs[O]={};var I={};I.index=u;var Z=D;b.dataProvider&&(Z=f);I.values=this.processValues(Z,b,ia);!b.connect&&z&&z[O]&&0<Q&&B.time-w[O]>=x*Q&&(z[O].gap=!0);this.processFields(b,I,Z);I.category=B.category;I.serialDataItem=B;I.graph=b;B.axes[H].graphs[O]=
I;w[O]=B.time;z[O]=I}}}this.chartData[u]=B}if(this.parseCount==e){for(a=0;a<h.length;a++)b=h[a],b.dataProvider&&this.parseGraphData(b);this.dataChanged=!1;this.dispatchDataUpdated=!0;this.onDataUpdated()}},processValues:function(a,b,c){var e={},h,f=!1;"candlestick"!=b.type&&"ohlc"!=b.type||""===c||(f=!0);for(var g="value error open close low high".split(" "),k=0;k<g.length;k++){var l=g[k];"value"!=l&&"error"!=l&&f&&(c=l.charAt(0).toUpperCase()+l.slice(1));var m=a[b[l+"Field"]+c];null!==m&&(h=Number(m),
isNaN(h)||(e[l]=h),"date"==b.valueAxis.type&&void 0!==m&&(h=d.getDate(m,b.chart.dataDateFormat),e[l]=h.getTime()))}return e},parseGraphData:function(a){var b=a.dataProvider,c=a.seriesIdField;c||(c=this.seriesIdField);c||(c=this.categoryField);var d;for(d=0;d<b.length;d++){var h=b[d],f=this.lookupTable[String(h[c])],g=a.valueAxis.id;f&&(g=f.axes[g].graphs[a.id],g.serialDataItem=f,g.values=this.processValues(h,a,a.periodValue),this.processFields(a,g,h))}},addValueAxis:function(a){a.chart=this;this.valueAxes.push(a);
this.validateData()},removeValueAxesAndGraphs:function(){var a=this.valueAxes,b;for(b=a.length-1;-1<b;b--)this.removeValueAxis(a[b])},removeValueAxis:function(a){var b=this.graphs,c;for(c=b.length-1;0<=c;c--){var d=b[c];d&&d.valueAxis==a&&this.removeGraph(d)}b=this.valueAxes;for(c=b.length-1;0<=c;c--)b[c]==a&&b.splice(c,1);this.validateData()},addGraph:function(a){this.graphs.push(a);this.chooseGraphColor(a,this.graphs.length-1);this.validateData()},removeGraph:function(a){var b=this.graphs,c;for(c=
b.length-1;0<=c;c--)b[c]==a&&(b.splice(c,1),a.destroy());this.validateData()},handleValueAxisZoom:function(){},processValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.ValueAxis,this.theme);a[b]=c;c.chart=this;c.init();this.listenTo(c,"axisIntZoomed",this.handleValueAxisZoom);c.id||(c.id="valueAxisAuto"+b+"_"+(new Date).getTime());void 0===c.usePrefixes&&(c.usePrefixes=this.usePrefixes)}},processGuides:function(){var a=this.guides,b=this.categoryAxis;
if(a)for(var c=0;c<a.length;c++){var e=a[c];(void 0!==e.category||void 0!==e.date)&&b&&b.addGuide(e);e.id||(e.id="guideAuto"+c+"_"+(new Date).getTime());var h=e.valueAxis;h?(d.isString(h)&&(h=this.getValueAxisById(h)),h?h.addGuide(e):this.valueAxes[0].addGuide(e)):isNaN(e.value)||this.valueAxes[0].addGuide(e)}},processGraphs:function(){var a=this.graphs,b;this.graphsById={};for(b=0;b<a.length;b++){var c=a[b],c=d.processObject(c,d.AmGraph,this.theme);a[b]=c;this.chooseGraphColor(c,b);c.chart=this;
c.init();d.isString(c.valueAxis)&&(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.id||(c.id="graphAuto"+b+"_"+(new Date).getTime());this.graphsById[c.id]=c}},formatString:function(a,b,c){var e=b.graph,h=e.valueAxis;h.duration&&b.values.value&&(h=d.formatDuration(b.values.value,h.duration,"",h.durationUnits,h.maxInterval,h.numberFormatter),a=a.split("[[value]]").join(h));a=d.massReplace(a,{"[[title]]":e.title,"[[description]]":b.description});a=c?d.fixNewLines(a):
d.fixBrakes(a);return a=d.cleanFromEmpty(a)},getBalloonColor:function(a,b,c){var e=a.lineColor,h=a.balloonColor;c&&(h=e);c=a.fillColorsR;"object"==typeof c?e=c[0]:void 0!==c&&(e=c);b.isNegative&&(c=a.negativeLineColor,a=a.negativeFillColors,"object"==typeof a?c=a[0]:void 0!==a&&(c=a),void 0!==c&&(e=c));void 0!==b.color&&(e=b.color);void 0!==b.lineColor&&(e=b.lineColor);b=b.fillColors;void 0!==b&&(e=b,d.ifArray(b)&&(e=b[0]));void 0===h&&(h=e);return h},getGraphById:function(a){return d.getObjById(this.graphs,
a)},getValueAxisById:function(a){return d.getObjById(this.valueAxes,a)},processFields:function(a,b,c){if(a.itemColors){var e=a.itemColors,h=b.index;b.color=h<e.length?e[h]:d.randomColor()}e="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url labelColor dashLength pattern gap className".split(" ");for(h=0;h<e.length;h++){var f=e[h],g=a[f+"Field"];g&&(g=c[g],d.isDefined(g)&&(b[f]=g))}b.dataContext=c},chooseGraphColor:function(a,b){if(a.lineColor)a.lineColorR=
a.lineColor;else{var c;c=this.colors.length>b?this.colors[b]:a.lineColorR?a.lineColorR:d.randomColor();a.lineColorR=c}a.fillColorsR=a.fillColors?a.fillColors:a.lineColorR;a.bulletBorderColorR=a.bulletBorderColor?a.bulletBorderColor:a.useLineColorForBulletBorder?a.lineColorR:a.bulletColor;a.bulletColorR=a.bulletColor?a.bulletColor:a.lineColorR;if(c=this.patterns)a.pattern=c[b]},handleLegendEvent:function(a){var b=a.type;a=a.dataItem;if(!this.legend.data&&a){var c=a.hidden,d=a.showBalloon;switch(b){case "clickMarker":this.textClickEnabled&&
(d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a));break;case "clickLabel":d?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case "rollOverItem":c||this.highlightGraph(a);break;case "rollOutItem":c||this.unhighlightGraph();break;case "hideItem":this.hideGraph(a);break;case "showItem":this.showGraph(a)}}},highlightGraph:function(a){var b=this.graphs,c,d=.2;this.legend&&(d=this.legend.rollOverGraphAlpha);if(1!=d)for(c=0;c<b.length;c++){var h=b[c];h!=a&&h.changeOpacity(d)}},unhighlightGraph:function(){var a;
this.legend&&(a=this.legend.rollOverGraphAlpha);if(1!=a){a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].changeOpacity(1)}},showGraph:function(a){a.switchable&&(a.hidden=!1,this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),this.chartCreated&&this.initChart())},hideGraph:function(a){a.switchable&&(this.dataChanged=!0,"xy"!=this.type&&(this.marginsUpdated=!1),a.hidden=!0,this.chartCreated&&this.initChart())},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=
!0;this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},resetAnimation:function(){var a=this.graphs;if(a){var b;for(b=0;b<a.length;b++)a[b].animationPlayed=!1}},animateAgain:function(){this.resetAnimation();this.validateNow()}})})();(function(){var d=window.AmCharts;d.TrendLine=d.Class({construct:function(a){this.cname="TrendLine";this.createEvents("click");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.destroy();var b=a.chart,c=b.container,e,h,f,g,k=a.categoryAxis,l=a.initialDate,m=a.initialCategory,n=a.finalDate,q=a.finalCategory,p=a.valueAxis,t=a.valueAxisX,r=a.initialXValue,w=a.finalXValue,x=a.initialValue,y=
a.finalValue,u=p.recalculateToPercents,A=b.dataDateFormat;k&&(l&&(l=d.getDate(l,A,"fff"),a.initialDate=l,e=k.dateToCoordinate(l)),m&&(e=k.categoryToCoordinate(m)),n&&(n=d.getDate(n,A,"fff"),a.finalDate=n,h=k.dateToCoordinate(n)),q&&(h=k.categoryToCoordinate(q)));t&&!u&&(isNaN(r)||(e=t.getCoordinate(r)),isNaN(w)||(h=t.getCoordinate(w)));p&&!u&&(isNaN(x)||(f=p.getCoordinate(x)),isNaN(y)||(g=p.getCoordinate(y)));if(!(isNaN(e)||isNaN(h)||isNaN(f)||isNaN(f))){b.rotate?(k=[f,g],g=[e,h]):(k=[e,h],g=[f,g]);
l=a.lineColor;f=d.line(c,k,g,l,a.lineAlpha,a.lineThickness,a.dashLength);e=k;h=g;q=k[1]-k[0];p=g[1]-g[0];0===q&&(q=.01);0===p&&(p=.01);m=q/Math.abs(q);n=p/Math.abs(p);p=90*Math.PI/180-Math.asin(q/(q*p/Math.abs(q*p)*Math.sqrt(Math.pow(q,2)+Math.pow(p,2))));q=Math.abs(5*Math.cos(p));p=Math.abs(5*Math.sin(p));e.push(k[1]-m*p,k[0]-m*p);h.push(g[1]+n*q,g[0]+n*q);g=d.polygon(c,e,h,l,.005,0);c=c.set([g,f]);c.translate(b.marginLeftReal,b.marginTopReal);b.trendLinesSet.push(c);d.setCN(b,f,"trend-line");d.setCN(b,
f,"trend-line-"+a.id);a.line=f;a.set=c;if(f=a.initialImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[0]+f.offsetX,h[0]+f.offsetY),c.push(f.set);if(f=a.finalImage)f=d.processObject(f,d.Image,a.theme),f.chart=b,f.draw(),f.translate(e[1]+f.offsetX,h[1]+f.offsetY),c.push(f.set);g.mouseup(function(){a.handleLineClick()}).mouseover(function(){a.handleLineOver()}).mouseout(function(){a.handleLineOut()});g.touchend&&g.touchend(function(){a.handleLineClick()});c.clipRect(0,0,b.plotAreaWidth,
b.plotAreaHeight)}},handleLineClick:function(){this.fire({type:"click",trendLine:this,chart:this.chart})},handleLineOver:function(){var a=this.rollOverColor;void 0!==a&&this.line.attr({stroke:a});this.balloonText&&(clearTimeout(this.chart.hoverInt),a=this.line.getBBox(),this.chart.showBalloon(this.balloonText,this.lineColor,!0,this.x+a.x+a.width/2,this.y+a.y+a.height/2))},handleLineOut:function(){this.line.attr({stroke:this.lineColor});this.balloonText&&this.chart.hideBalloon()},destroy:function(){d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.Image=d.Class({construct:function(a){this.cname="Image";this.height=this.width=20;this.rotation=this.offsetY=this.offsetX=0;this.balloonColor=this.color="#000000";this.opacity=1;d.applyTheme(this,a,this.cname)},draw:function(){var a=this;a.set&&a.set.remove();var b=a.chart.container;a.set=b.set();var c,d;a.url?(c=b.image(a.url,0,0,a.width,a.height),d=1):a.svgPath&&(c=b.path(a.svgPath),c.setAttr("fill",a.color),c.setAttr("stroke",a.outlineColor),b=c.getBBox(),d=
Math.min(a.width/b.width,a.height/b.height));c&&(c.setAttr("opacity",a.opacity),a.set.rotate(a.rotation),c.translate(-a.width/2,-a.height/2,d),a.balloonText&&c.mouseover(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}).mouseout(function(){a.chart.hideBalloon()}).touchend(function(){a.chart.hideBalloon()}).touchstart(function(){a.chart.showBalloon(a.balloonText,a.balloonColor,!0)}),a.set.push(c))},translate:function(a,b){this.set&&this.set.translate(a,b)}})})();(function(){var d=window.AmCharts;d.circle=function(a,b,c,e,h,f,g,k,l){0>=b&&(b=.001);if(void 0==h||0===h)h=.01;void 0===f&&(f="#000000");void 0===g&&(g=0);e={fill:c,stroke:f,"fill-opacity":e,"stroke-width":h,"stroke-opacity":g};a=isNaN(l)?a.circle(0,0,b).attr(e):a.ellipse(0,0,b,l).attr(e);k&&a.gradient("radialGradient",[c,d.adjustLuminosity(c,-.6)]);return a};d.text=function(a,b,c,e,h,f,g,k){f||(f="middle");"right"==f&&(f="end");"left"==f&&(f="start");isNaN(k)&&(k=1);void 0!==b&&(b=String(b),d.isIE&&
!d.isModern&&(b=b.replace("&amp;","&"),b=b.replace("&","&amp;")));c={fill:c,"font-family":e,"font-size":h+"px",opacity:k};!0===g&&(c["font-weight"]="bold");c["text-anchor"]=f;return a.text(b,c)};d.polygon=function(a,b,c,e,h,f,g,k,l,m,n){isNaN(f)&&(f=.01);isNaN(k)&&(k=h);var q=e,p=!1;"object"==typeof q&&1<q.length&&(p=!0,q=q[0]);void 0===g&&(g=q);h={fill:q,stroke:g,"fill-opacity":h,"stroke-width":f,"stroke-opacity":k};void 0!==n&&0<n&&(h["stroke-dasharray"]=n);n=d.dx;f=d.dy;a.handDrawn&&(c=d.makeHD(b,
c,a.handDrawScatter),b=c[0],c=c[1]);g=Math.round;m&&(b[t]=d.roundTo(b[t],5),c[t]=d.roundTo(c[t],5),g=Number);k="M"+(g(b[0])+n)+","+(g(c[0])+f);for(var t=1;t<b.length;t++)m&&(b[t]=d.roundTo(b[t],5),c[t]=d.roundTo(c[t],5)),k+=" L"+(g(b[t])+n)+","+(g(c[t])+f);a=a.path(k+" Z").attr(h);p&&a.gradient("linearGradient",e,l);return a};d.rect=function(a,b,c,e,h,f,g,k,l,m,n){if(isNaN(b)||isNaN(c))return a.set();isNaN(f)&&(f=0);void 0===l&&(l=0);void 0===m&&(m=270);isNaN(h)&&(h=0);var q=e,p=!1;"object"==typeof q&&
(q=q[0],p=!0);void 0===g&&(g=q);void 0===k&&(k=h);b=Math.round(b);c=Math.round(c);var t=0,r=0;0>b&&(b=Math.abs(b),t=-b);0>c&&(c=Math.abs(c),r=-c);t+=d.dx;r+=d.dy;h={fill:q,stroke:g,"fill-opacity":h,"stroke-opacity":k};void 0!==n&&0<n&&(h["stroke-dasharray"]=n);a=a.rect(t,r,b,c,l,f).attr(h);p&&a.gradient("linearGradient",e,m);return a};d.bullet=function(a,b,c,e,h,f,g,k,l,m,n,q,p){var t;"circle"==b&&(b="round");switch(b){case "round":t=d.circle(a,c/2,e,h,f,g,k);break;case "square":t=d.polygon(a,[-c/
2,c/2,c/2,-c/2],[c/2,c/2,-c/2,-c/2],e,h,f,g,k,m-180,void 0,p);break;case "rectangle":t=d.polygon(a,[-c,c,c,-c],[c/2,c/2,-c/2,-c/2],e,h,f,g,k,m-180,void 0,p);break;case "diamond":t=d.polygon(a,[-c/2,0,c/2,0],[0,-c/2,0,c/2],e,h,f,g,k);break;case "triangleUp":t=d.triangle(a,c,0,e,h,f,g,k);break;case "triangleDown":t=d.triangle(a,c,180,e,h,f,g,k);break;case "triangleLeft":t=d.triangle(a,c,270,e,h,f,g,k);break;case "triangleRight":t=d.triangle(a,c,90,e,h,f,g,k);break;case "bubble":t=d.circle(a,c/2,e,h,
f,g,k,!0);break;case "line":t=d.line(a,[-c/2,c/2],[0,0],e,h,f,g,k);break;case "yError":t=a.set();t.push(d.line(a,[0,0],[-c/2,c/2],e,h,f));t.push(d.line(a,[-l,l],[-c/2,-c/2],e,h,f));t.push(d.line(a,[-l,l],[c/2,c/2],e,h,f));break;case "xError":t=a.set(),t.push(d.line(a,[-c/2,c/2],[0,0],e,h,f)),t.push(d.line(a,[-c/2,-c/2],[-l,l],e,h,f)),t.push(d.line(a,[c/2,c/2],[-l,l],e,h,f))}t&&t.pattern(n,NaN,q);return t};d.triangle=function(a,b,c,d,h,f,g,k){if(void 0===f||0===f)f=1;void 0===g&&(g="#000");void 0===
k&&(k=0);d={fill:d,stroke:g,"fill-opacity":h,"stroke-width":f,"stroke-opacity":k};b/=2;var l;0===c&&(l=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==c&&(l=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==c&&(l=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==c&&(l=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(l).attr(d)};d.line=function(a,b,c,e,h,f,g,k,l,m,n){if(a.handDrawn&&!n)return d.handDrawnLine(a,b,c,e,h,f,g,k,l,m,n);f={fill:"none","stroke-width":f};void 0!==g&&0<g&&(f["stroke-dasharray"]=
g);isNaN(h)||(f["stroke-opacity"]=h);e&&(f.stroke=e);e=Math.round;m&&(e=Number,b[0]=d.roundTo(b[0],5),c[0]=d.roundTo(c[0],5));m=d.dx;h=d.dy;g="M"+(e(b[0])+m)+","+(e(c[0])+h);for(k=1;k<b.length;k++)b[k]=d.roundTo(b[k],5),c[k]=d.roundTo(c[k],5),g+=" L"+(e(b[k])+m)+","+(e(c[k])+h);if(d.VML)return a.path(g,void 0,!0).attr(f);l&&(g+=" M0,0 L0,0");return a.path(g).attr(f)};d.makeHD=function(a,b,c){for(var d=[],h=[],f=1;f<a.length;f++)for(var g=Number(a[f-1]),k=Number(b[f-1]),l=Number(a[f]),m=Number(b[f]),
n=Math.round(Math.sqrt(Math.pow(l-g,2)+Math.pow(m-k,2))/50)+1,l=(l-g)/n,m=(m-k)/n,q=0;q<=n;q++){var p=k+q*m+Math.random()*c;d.push(g+q*l+Math.random()*c);h.push(p)}return[d,h]};d.handDrawnLine=function(a,b,c,e,h,f,g,k,l,m){var n,q=a.set();for(n=1;n<b.length;n++)for(var p=[b[n-1],b[n]],t=[c[n-1],c[n]],t=d.makeHD(p,t,a.handDrawScatter),p=t[0],t=t[1],r=1;r<p.length;r++)q.push(d.line(a,[p[r-1],p[r]],[t[r-1],t[r]],e,h,f+Math.random()*a.handDrawThickness-a.handDrawThickness/2,g,k,l,m,!0));return q};d.doNothing=
function(a){return a};d.drop=function(a,b,c,d,h,f,g,k){var l=1/180*Math.PI,m=c-20,n=Math.sin(m*l)*b,q=Math.cos(m*l)*b,p=Math.sin((m+40)*l)*b,t=Math.cos((m+40)*l)*b,r=.8*b,w=-b/3,x=b/3;0===c&&(w=-w,x=0);180==c&&(x=0);90==c&&(w=0);270==c&&(w=0,x=-x);c={fill:d,stroke:g,"stroke-width":f,"stroke-opacity":k,"fill-opacity":h};b="M"+n+","+q+" A"+b+","+b+",0,1,1,"+p+","+t+(" A"+r+","+r+",0,0,0,"+(Math.sin((m+20)*l)*b+x)+","+(Math.cos((m+20)*l)*b+w));b+=" A"+r+","+r+",0,0,0,"+n+","+q;return a.path(b,void 0,
void 0,"1000,1000").attr(c)};d.wedge=function(a,b,c,e,h,f,g,k,l,m,n,q,p,t){var r=Math.round;f=r(f);g=r(g);k=r(k);var w=r(g/f*k),x=d.VML,y=359.5+f/100;359.94<y&&(y=359.94);h>=y&&(h=y);var u=1/180*Math.PI,y=b+Math.sin(e*u)*k,A=c-Math.cos(e*u)*w,z=b+Math.sin(e*u)*f,B=c-Math.cos(e*u)*g,D=b+Math.sin((e+h)*u)*f,C=c-Math.cos((e+h)*u)*g,J=b+Math.sin((e+h)*u)*k,u=c-Math.cos((e+h)*u)*w,H={fill:d.adjustLuminosity(m.fill,-.2),"stroke-opacity":0,"fill-opacity":m["fill-opacity"]},S=0;180<Math.abs(h)&&(S=1);e=a.set();
var O;x&&(y=r(10*y),z=r(10*z),D=r(10*D),J=r(10*J),A=r(10*A),B=r(10*B),C=r(10*C),u=r(10*u),b=r(10*b),l=r(10*l),c=r(10*c),f*=10,g*=10,k*=10,w*=10,1>Math.abs(h)&&1>=Math.abs(D-z)&&1>=Math.abs(C-B)&&(O=!0));h="";var Q;q&&(H["fill-opacity"]=0,H["stroke-opacity"]=m["stroke-opacity"]/2,H.stroke=m.stroke);if(0<l){Q=" M"+y+","+(A+l)+" L"+z+","+(B+l);x?(O||(Q+=" A"+(b-f)+","+(l+c-g)+","+(b+f)+","+(l+c+g)+","+z+","+(B+l)+","+D+","+(C+l)),Q+=" L"+J+","+(u+l),0<k&&(O||(Q+=" B"+(b-k)+","+(l+c-w)+","+(b+k)+","+
(l+c+w)+","+J+","+(l+u)+","+y+","+(l+A)))):(Q+=" A"+f+","+g+",0,"+S+",1,"+D+","+(C+l)+" L"+J+","+(u+l),0<k&&(Q+=" A"+k+","+w+",0,"+S+",0,"+y+","+(A+l)));Q+=" Z";var ia=l;x&&(ia/=10);for(var I=0;I<ia;I+=10){var Z=a.path(Q,void 0,void 0,"1000,1000").attr(H);e.push(Z);Z.translate(0,-I)}Q=a.path(" M"+y+","+A+" L"+y+","+(A+l)+" L"+z+","+(B+l)+" L"+z+","+B+" L"+y+","+A+" Z",void 0,void 0,"1000,1000").attr(H);l=a.path(" M"+D+","+C+" L"+D+","+(C+l)+" L"+J+","+(u+l)+" L"+J+","+u+" L"+D+","+C+" Z",void 0,void 0,
"1000,1000").attr(H);e.push(Q);e.push(l)}x?(O||(h=" A"+r(b-f)+","+r(c-g)+","+r(b+f)+","+r(c+g)+","+r(z)+","+r(B)+","+r(D)+","+r(C)),g=" M"+r(y)+","+r(A)+" L"+r(z)+","+r(B)+h+" L"+r(J)+","+r(u)):g=" M"+y+","+A+" L"+z+","+B+(" A"+f+","+g+",0,"+S+",1,"+D+","+C)+" L"+J+","+u;0<k&&(x?O||(g+=" B"+(b-k)+","+(c-w)+","+(b+k)+","+(c+w)+","+J+","+u+","+y+","+A):g+=" A"+k+","+w+",0,"+S+",0,"+y+","+A);a.handDrawn&&(k=d.line(a,[y,z],[A,B],m.stroke,m.thickness*Math.random()*a.handDrawThickness,m["stroke-opacity"]),
e.push(k));a=a.path(g+" Z",void 0,void 0,"1000,1000").attr(m);if(n){k=[];for(w=0;w<n.length;w++)k.push(d.adjustLuminosity(m.fill,n[w]));"radial"!=t||d.isModern||(k=[]);0<k.length&&a.gradient(t+"Gradient",k)}d.isModern&&"radial"==t&&a.grad&&(a.grad.setAttribute("gradientUnits","userSpaceOnUse"),a.grad.setAttribute("r",f),a.grad.setAttribute("cx",b),a.grad.setAttribute("cy",c));a.pattern(q,NaN,p);e.wedge=a;e.push(a);return e};d.rgb2hex=function(a){return(a=a.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&
4===a.length?"#"+("0"+parseInt(a[1],10).toString(16)).slice(-2)+("0"+parseInt(a[2],10).toString(16)).slice(-2)+("0"+parseInt(a[3],10).toString(16)).slice(-2):""};d.adjustLuminosity=function(a,b){a&&-1!=a.indexOf("rgb")&&(a=d.rgb2hex(a));a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));b=b||0;var c="#",e,h;for(h=0;3>h;h++)e=parseInt(a.substr(2*h,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),c+=("00"+
e).substr(e.length);return c}})();(function(){var d=window.AmCharts;d.Bezier=d.Class({construct:function(a,b,c,e,h,f,g,k,l,m,n){var q,p;"object"==typeof g&&1<g.length&&(p=!0,q=g,g=g[0]);"object"==typeof k&&(k=k[0]);0===k&&(g="none");f={fill:g,"fill-opacity":k,"stroke-width":f};void 0!==l&&0<l&&(f["stroke-dasharray"]=l);isNaN(h)||(f["stroke-opacity"]=h);e&&(f.stroke=e);e="M"+Math.round(b[0])+","+Math.round(c[0]);h=[];for(l=0;l<b.length;l++)h.push({x:Number(b[l]),y:Number(c[l])});1<h.length&&(b=this.interpolate(h),e+=this.drawBeziers(b));
m?e+=m:d.VML||(e+="M0,0 L0,0");this.path=a.path(e).attr(f);this.node=this.path.node;p&&this.path.gradient("linearGradient",q,n)},interpolate:function(a){var b=[];b.push({x:a[0].x,y:a[0].y});var c=a[1].x-a[0].x,e=a[1].y-a[0].y,h=d.bezierX,f=d.bezierY;b.push({x:a[0].x+c/h,y:a[0].y+e/f});var g;for(g=1;g<a.length-1;g++){var k=a[g-1],l=a[g],e=a[g+1];isNaN(e.x)&&(e=l);isNaN(l.x)&&(l=k);isNaN(k.x)&&(k=l);c=e.x-l.x;e=e.y-k.y;k=l.x-k.x;k>c&&(k=c);b.push({x:l.x-k/h,y:l.y-e/f});b.push({x:l.x,y:l.y});b.push({x:l.x+
k/h,y:l.y+e/f})}e=a[a.length-1].y-a[a.length-2].y;c=a[a.length-1].x-a[a.length-2].x;b.push({x:a[a.length-1].x-c/h,y:a[a.length-1].y-e/f});b.push({x:a[a.length-1].x,y:a[a.length-1].y});return b},drawBeziers:function(a){var b="",c;for(c=0;c<(a.length-1)/3;c++)b+=this.drawBezierMidpoint(a[3*c],a[3*c+1],a[3*c+2],a[3*c+3]);return b},drawBezierMidpoint:function(a,b,c,d){var h=Math.round,f=this.getPointOnSegment(a,b,.75),g=this.getPointOnSegment(d,c,.75),k=(d.x-a.x)/16,l=(d.y-a.y)/16,m=this.getPointOnSegment(a,
b,.375);a=this.getPointOnSegment(f,g,.375);a.x-=k;a.y-=l;b=this.getPointOnSegment(g,f,.375);b.x+=k;b.y+=l;c=this.getPointOnSegment(d,c,.375);k=this.getMiddle(m,a);f=this.getMiddle(f,g);g=this.getMiddle(b,c);m=" Q"+h(m.x)+","+h(m.y)+","+h(k.x)+","+h(k.y);m+=" Q"+h(a.x)+","+h(a.y)+","+h(f.x)+","+h(f.y);m+=" Q"+h(b.x)+","+h(b.y)+","+h(g.x)+","+h(g.y);return m+=" Q"+h(c.x)+","+h(c.y)+","+h(d.x)+","+h(d.y)},getMiddle:function(a,b){return{x:(a.x+b.x)/2,y:(a.y+b.y)/2}},getPointOnSegment:function(a,b,c){return{x:a.x+
(b.x-a.x)*c,y:a.y+(b.y-a.y)*c}}})})();(function(){var d=window.AmCharts;d.AmDraw=d.Class({construct:function(a,b,c,e){d.SVG_NS="http://www.w3.org/2000/svg";d.SVG_XLINK="http://www.w3.org/1999/xlink";d.hasSVG=!!document.createElementNS&&!!document.createElementNS(d.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>c&&(c=10);this.div=a;this.width=b;this.height=c;this.rBin=document.createElement("div");d.hasSVG?(d.SVG=!0,b=this.createSvgElement("svg"),a.appendChild(b),this.container=b,this.addDefs(e),this.R=new d.SVGRenderer(this)):d.isIE&&d.VMLRenderer&&
(d.VML=!0,d.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),31>document.styleSheets.length?(b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),d.vmlStyleSheet=b):document.styleSheets[0].addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true")),this.container=a,this.R=new d.VMLRenderer(this,e),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(d.SVG_NS,
a)},circle:function(a,b,c,e){var h=new d.AmDObject("circle",this);h.attr({r:c,cx:a,cy:b});this.addToContainer(h.node,e);return h},ellipse:function(a,b,c,e,h){var f=new d.AmDObject("ellipse",this);f.attr({rx:c,ry:e,cx:a,cy:b});this.addToContainer(f.node,h);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,c,e,h,f,g){var k=new d.AmDObject("rect",this);d.VML&&(h=Math.round(100*h/Math.min(c,e)),c+=2*f,e+=2*f,k.bw=f,k.node.style.marginLeft=
-f,k.node.style.marginTop=-f);1>c&&(c=1);1>e&&(e=1);k.attr({x:a,y:b,width:c,height:e,rx:h,ry:h,"stroke-width":f});this.addToContainer(k.node,g);return k},image:function(a,b,c,e,h,f){var g=new d.AmDObject("image",this);g.attr({x:b,y:c,width:e,height:h});this.R.path(g,a);this.addToContainer(g.node,f);return g},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,c){return this.R.text(a,b,c)},path:function(a,b,c,e){var h=new d.AmDObject("path",this);e||(e="100,100");
h.attr({cs:e});c?h.attr({dd:a}):h.attr({d:a});this.addToContainer(h.node,b);return h},set:function(a){return this.R.set(a)},remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},renderFix:function(){var a=this.container,b=a.style;b.top="0px";b.left="0px";try{var c=a.getBoundingClientRect(),d=c.left-Math.round(c.left),h=c.top-Math.round(c.top);d&&(b.left=d+"px");h&&(b.top=h+"px")}catch(f){}},update:function(){this.R.update()},addDefs:function(a){if(d.hasSVG){var b=this.createSvgElement("desc"),
c=this.container;c.setAttribute("version","1.1");c.style.position="absolute";this.setSize(this.width,this.height);if(a.accessibleTitle){var e=this.createSvgElement("title");e.appendChild(document.createTextNode(a.accessibleTitle));c.appendChild(e)}d.rtl&&(c.setAttribute("direction","rtl"),c.style.left="auto",c.style.right="0px");a&&(a.addCodeCredits&&b.appendChild(document.createTextNode("JavaScript chart by amCharts "+a.version)),c.appendChild(b),a.defs&&(b=this.createSvgElement("defs"),c.appendChild(b),
d.parseDefs(a.defs,b),this.defs=b))}}})})();(function(){var d=window.AmCharts;d.AmDObject=d.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,c,d){this.R.clipRect(this,a,b,c,d)},translate:function(a,b,c,d){d||(a=Math.round(a),b=Math.round(b));this.R.move(this,a,b,c);this.x=a;this.y=b;this.scale=
c;this.angle&&this.rotate(this.angle)},rotate:function(a,b){this.R.rotate(this,a,b);this.angle=a},animate:function(a,b,c){for(var e in a)if(a.hasOwnProperty(e)){var h=e,f=a[e];c=d.getEffect(c);this.R.animate(this,h,f,b,c)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var c=a.clipPath;c&&b.appendChild(c);(a=a.grad)&&b.appendChild(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.stop();this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=
a.childNodes.length;)a.removeChild(a.firstChild)},hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;var b=a.parentNode;b&&b.appendChild(a)}},toPrevious:function(){var a=this.node;a&&this.prevNextNode&&(a=a.parentNode)&&a.insertBefore(this.prevNextNode,null)},toBack:function(){var a=this.node;if(a){this.prevNextNode=a.nextSibling;
var b=a.parentNode;if(b){var c=b.firstChild;c&&b.insertBefore(a,c)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchmove:function(a){this.R.addListener(this,
"touchmove",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},keyup:function(a){this.R.addListener(this,"keyup",a);return this},focus:function(a){this.R.addListener(this,"focus",a);return this},blur:function(a){this.R.addListener(this,"blur",a);return this},contextmenu:function(a){this.node.addEventListener?this.node.addEventListener("contextmenu",a,!0):this.R.addListener(this,"contextmenu",
a);return this},stop:function(){d.removeFromArray(this.R.animations,this.an_translate);d.removeFromArray(this.R.animations,this.an_y);d.removeFromArray(this.R.animations,this.an_x)},length:function(){return this.node.childNodes.length},gradient:function(a,b,c){this.R.gradient(this,a,b,c)},pattern:function(a,b,c){a&&this.R.pattern(this,a,b,c)}})})();(function(){var d=window.AmCharts;d.VMLRenderer=d.Class({construct:function(a,b){this.chart=b;this.D=a;this.cNames={circle:"oval",ellipse:"oval",rect:"roundrect",path:"shape"};this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"}},create:function(a,b){var c;if("group"==b)c=document.createElement("div"),a.type="div";else if("text"==b)c=document.createElement("div"),a.type="text";else if("image"==b)c=document.createElement("img"),
a.type="image";else{a.type="shape";a.shapeType=this.cNames[b];c=document.createElement("amvml:"+this.cNames[b]);var d=document.createElement("amvml:stroke");c.appendChild(d);a.stroke=d;var h=document.createElement("amvml:fill");c.appendChild(h);a.fill=h;h.className="amvml";d.className="amvml";c.className="amvml"}c.style.position="absolute";c.style.top=0;c.style.left=0;return c},path:function(a,b){a.node.setAttribute("src",b)},setAttr:function(a,b,c){if(void 0!==c){var e;8===document.documentMode&&
(e=!0);var h=a.node,f=a.type,g=h.style;"r"==b&&(g.width=2*c,g.height=2*c);"oval"==a.shapeType&&("rx"==b&&(g.width=2*c),"ry"==b&&(g.height=2*c));"roundrect"==a.shapeType&&("width"!=b&&"height"!=b||--c);"cursor"==b&&(g.cursor=c);"cx"==b&&(g.left=c-d.removePx(g.width)/2);"cy"==b&&(g.top=c-d.removePx(g.height)/2);var k=this.styleMap[b];"width"==k&&0>c&&(c=0);void 0!==k&&(g[k]=c);"text"==f&&("text-anchor"==b&&(a.anchor=c,k=h.clientWidth,"end"==c&&(g.marginLeft=-k+"px"),"middle"==c&&(g.marginLeft=-(k/2)+
"px",g.textAlign="center"),"start"==c&&(g.marginLeft="0px")),"fill"==b&&(g.color=c),"font-weight"==b&&(g.fontWeight=c));if(g=a.children)for(k=0;k<g.length;k++)g[k].setAttr(b,c);if("shape"==f){"cs"==b&&(h.style.width="100px",h.style.height="100px",h.setAttribute("coordsize",c));"d"==b&&h.setAttribute("path",this.svgPathToVml(c));"dd"==b&&h.setAttribute("path",c);f=a.stroke;a=a.fill;"stroke"==b&&(e?f.color=c:f.setAttribute("color",c));"stroke-width"==b&&(e?f.weight=c:f.setAttribute("weight",c));"stroke-opacity"==
b&&(e?f.opacity=c:f.setAttribute("opacity",c));"stroke-dasharray"==b&&(g="solid",0<c&&3>c&&(g="dot"),3<=c&&6>=c&&(g="dash"),6<c&&(g="longdash"),e?f.dashstyle=g:f.setAttribute("dashstyle",g));if("fill-opacity"==b||"opacity"==b)0===c?e?a.on=!1:a.setAttribute("on",!1):e?a.opacity=c:a.setAttribute("opacity",c);"fill"==b&&(e?a.color=c:a.setAttribute("color",c));"rx"==b&&(e?h.arcSize=c+"%":h.setAttribute("arcsize",c+"%"))}}},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},
text:function(a,b,c){var e=new d.AmDObject("text",this.D),h=e.node;h.style.whiteSpace="pre";h.innerHTML=a;this.D.addToContainer(h,c);this.attr(e,b);return e},getBBox:function(a){return this.getBox(a.node)},getBox:function(a){var b=a.offsetLeft,c=a.offsetTop,d=a.offsetWidth,h=a.offsetHeight,f;if(a.hasChildNodes()){var g,k,l;for(l=0;l<a.childNodes.length;l++){f=this.getBox(a.childNodes[l]);var m=f.x;isNaN(m)||(isNaN(g)?g=m:m<g&&(g=m));var n=f.y;isNaN(n)||(isNaN(k)?k=n:n<k&&(k=n));m=f.width+m;isNaN(m)||
(d=Math.max(d,m));f=f.height+n;isNaN(f)||(h=Math.max(h,f))}0>g&&(b+=g);0>k&&(c+=k)}return{x:b,y:c,width:d,height:h}},setText:function(a,b){var c=a.node;c&&(c.innerHTML=b);this.setAttr(a,"text-anchor",a.anchor)},addListener:function(a,b,c){a.node["on"+b]=c},move:function(a,b,c){var e=a.node,h=e.style;"text"==a.type&&(c-=d.removePx(h.fontSize)/2-1);"oval"==a.shapeType&&(b-=d.removePx(h.width)/2,c-=d.removePx(h.height)/2);a=a.bw;isNaN(a)||(b-=a,c-=a);isNaN(b)||isNaN(c)||(e.style.left=b+"px",e.style.top=
c+"px")},svgPathToVml:function(a){var b=a.split(" ");a="";var c,d=Math.round,h;for(h=0;h<b.length;h++){var f=b[h],g=f.substring(0,1),f=f.substring(1),k=f.split(","),l=d(k[0])+","+d(k[1]);"M"==g&&(a+=" m "+l);"L"==g&&(a+=" l "+l);"Z"==g&&(a+=" x e");if("Q"==g){var m=c.length,n=c[m-1],q=k[0],p=k[1],l=k[2],t=k[3];c=d(c[m-2]/3+2/3*q);n=d(n/3+2/3*p);q=d(2/3*q+l/3);p=d(2/3*p+t/3);a+=" c "+c+","+n+","+q+","+p+","+l+","+t}"A"==g&&(a+=" wa "+f);"B"==g&&(a+=" at "+f);c=k}return a},animate:function(a,b,c,d,
h){var f=a.node,g=this.chart;a.animationFinished=!1;if("translate"==b){b=c.split(",");c=b[1];var k=f.offsetTop;g.animate(a,"left",f.offsetLeft,b[0],d,h,"px");g.animate(a,"top",k,c,d,h,"px")}},clipRect:function(a,b,c,d,h){a=a.node;0===b&&0===c?(a.style.width=d+"px",a.style.height=h+"px",a.style.overflow="hidden"):a.style.clip="rect("+c+"px "+(b+d)+"px "+(c+h)+"px "+b+"px)"},rotate:function(a,b,c){if(0!==Number(b)){var e=a.node;a=e.style;c||(c=this.getBGColor(e.parentNode));a.backgroundColor=c;a.paddingLeft=
1;c=b*Math.PI/180;var h=Math.cos(c),f=Math.sin(c),g=d.removePx(a.left),k=d.removePx(a.top),l=e.offsetWidth,e=e.offsetHeight;b/=Math.abs(b);a.left=g+l/2-l/2*Math.cos(c)-b*e/2*Math.sin(c)+3;a.top=k-b*l/2*Math.sin(c)+b*e/2*Math.sin(c);a.cssText=a.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+h+"', M12='"+-f+"', M21='"+f+"', M22='"+h+"', sizingmethod='auto expand');"}},getBGColor:function(a){var b="#FFFFFF";if(a.style){var c=a.style.backgroundColor;""!==c?b=c:a.parentNode&&(b=this.getBGColor(a.parentNode))}return b},
set:function(a){var b=new d.AmDObject("group",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},gradient:function(a,b,c,d){var h="";"radialGradient"==b&&(b="gradientradial",c.reverse());"linearGradient"==b&&(b="gradient");var f;for(f=0;f<c.length;f++)h+=Math.round(100*f/(c.length-1))+"% "+c[f],f<c.length-1&&(h+=",");a=a.fill;90==d?d=0:270==d?d=180:180==d?d=90:0===d&&(d=270);8===document.documentMode?(a.type=b,a.angle=d):(a.setAttribute("type",b),
a.setAttribute("angle",d));h&&(a.colors.value=h)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);this.D.remove(a.node)},disableSelection:function(a){a.onselectstart=function(){return!1};a.style.cursor="default"},pattern:function(a,b,c,e){c=a.node;a=a.fill;var h="none";b.color&&(h=b.color);c.fillColor=h;b=b.url;d.isAbsolute(b)||(b=e+b);8===document.documentMode?(a.type="tile",a.src=b):(a.setAttribute("type","tile"),a.setAttribute("src",b))},update:function(){}})})();(function(){var d=window.AmCharts;d.SVGRenderer=d.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(d.SVG_NS,b)},attr:function(a,b){for(var c in b)b.hasOwnProperty(c)&&this.setAttr(a,c,b[c])},setAttr:function(a,b,c){void 0!==c&&a.node.setAttribute(b,c)},animate:function(a,b,c,e,h){a.animationFinished=!1;var f=a.node;a["an_"+b]&&d.removeFromArray(this.animations,a["an_"+b]);"translate"==b?(f=(f=f.getAttribute("transform"))?String(f).substring(10,
f.length-1):"0,0",f=f.split(", ").join(" "),f=f.split(" ").join(","),0===f&&(f="0,0")):f=Number(f.getAttribute(b));c={obj:a,frame:0,attribute:b,from:f,to:c,time:e,effect:h};this.animations.push(c);a["an_"+b]=c},update:function(){var a,b=this.animations;for(a=b.length-1;0<=a;a--){var c=b[a],e=c.time*d.updateRate,h=c.frame+1,f=c.obj,g=c.attribute,k,l,m;if(h<=e){c.frame++;if("translate"==g){k=c.from.split(",");g=Number(k[0]);k=Number(k[1]);isNaN(k)&&(k=0);l=c.to.split(",");m=Number(l[0]);l=Number(l[1]);
m=0===m-g?m:Math.round(d[c.effect](0,h,g,m-g,e));c=0===l-k?l:Math.round(d[c.effect](0,h,k,l-k,e));g="transform";if(isNaN(m)||isNaN(c))continue;c="translate("+m+","+c+")"}else l=Number(c.from),k=Number(c.to),m=k-l,c=d[c.effect](0,h,l,m,e),isNaN(c)&&(c=k),0===m&&this.animations.splice(a,1);this.setAttr(f,g,c)}else"translate"==g?(l=c.to.split(","),m=Number(l[0]),l=Number(l[1]),f.translate(m,l)):(k=Number(c.to),this.setAttr(f,g,k)),f.animationFinished=!0,this.animations.splice(a,1)}},getBBox:function(a){if(a=
a.node)try{return a.getBBox()}catch(b){}return{width:0,height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(d.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,c,e,h){var f=a.node,g=a.clipPath;g&&this.D.remove(g);var k=f.parentNode;k&&(f=document.createElementNS(d.SVG_NS,"clipPath"),g=d.getUniqueId(),f.setAttribute("id",g),this.D.rect(b,c,e,h,0,0,f),k.appendChild(f),b="#",d.baseHref&&!d.isIE&&(b=this.removeTarget(window.location.href)+b),this.setAttr(a,"clip-path","url("+b+g+")"),this.clipPathC++,
a.clipPath=f)},text:function(a,b,c){var e=new d.AmDObject("text",this.D);a=String(a).split("\n");var h=d.removePx(b["font-size"]),f;for(f=0;f<a.length;f++){var g=this.create(null,"tspan");g.appendChild(document.createTextNode(a[f]));g.setAttribute("y",(h+2)*f+Math.round(h/2));g.setAttribute("x",0);e.node.appendChild(g)}e.node.setAttribute("y",Math.round(h/2));this.attr(e,b);this.D.addToContainer(e.node,c);return e},setText:function(a,b){var c=a.node;c&&(c.removeChild(c.firstChild),c.appendChild(document.createTextNode(b)))},
move:function(a,b,c,d){isNaN(b)&&(b=0);isNaN(c)&&(c=0);b="translate("+b+","+c+")";d&&(b=b+" scale("+d+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var c=a.node.getAttribute("transform"),d="rotate("+b+")";c&&(d=c+" "+d);this.setAttr(a,"transform",d)},set:function(a){var b=new d.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a){var c;for(c=0;c<a.length;c++)b.push(a[c])}return b},addListener:function(a,b,c){a.node["on"+b]=c},gradient:function(a,b,c,e){var h=a.node,f=a.grad;
f&&this.D.remove(f);b=document.createElementNS(d.SVG_NS,b);f=d.getUniqueId();b.setAttribute("id",f);if(!isNaN(e)){var g=0,k=0,l=0,m=0;90==e?l=100:270==e?m=100:180==e?g=100:0===e&&(k=100);b.setAttribute("x1",g+"%");b.setAttribute("x2",k+"%");b.setAttribute("y1",l+"%");b.setAttribute("y2",m+"%")}for(e=0;e<c.length;e++)g=document.createElementNS(d.SVG_NS,"stop"),k=100*e/(c.length-1),0===e&&(k=0),g.setAttribute("offset",k+"%"),g.setAttribute("stop-color",c[e]),b.appendChild(g);h.parentNode.appendChild(b);
c="#";d.baseHref&&!d.isIE&&(c=this.removeTarget(window.location.href)+c);h.setAttribute("fill","url("+c+f+")");a.grad=b},removeTarget:function(a){return a.split("#")[0]},pattern:function(a,b,c,e){var h=a.node;isNaN(c)&&(c=1);var f=a.patternNode;f&&this.D.remove(f);var f=document.createElementNS(d.SVG_NS,"pattern"),g=d.getUniqueId(),k=b;b.url&&(k=b.url);d.isAbsolute(k)||-1!=k.indexOf("data:image")||(k=e+k);e=Number(b.width);isNaN(e)&&(e=4);var l=Number(b.height);isNaN(l)&&(l=4);e/=c;l/=c;c=b.x;isNaN(c)&&
(c=0);var m=-Math.random()*Number(b.randomX);isNaN(m)||(c=m);m=b.y;isNaN(m)&&(m=0);var n=-Math.random()*Number(b.randomY);isNaN(n)||(m=n);f.setAttribute("id",g);f.setAttribute("width",e);f.setAttribute("height",l);f.setAttribute("patternUnits","userSpaceOnUse");f.setAttribute("xlink:href",k);b.color&&(n=document.createElementNS(d.SVG_NS,"rect"),n.setAttributeNS(null,"height",e),n.setAttributeNS(null,"width",l),n.setAttributeNS(null,"fill",b.color),f.appendChild(n));this.D.image(k,0,0,e,l,f).translate(c,
m);k="#";d.baseHref&&!d.isIE&&(k=this.removeTarget(window.location.href)+k);h.setAttribute("fill","url("+k+g+")");a.patternNode=f;h.parentNode.appendChild(f)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);a.patternNode&&this.D.remove(a.patternNode);this.D.remove(a.node)}})})();(function(){var d=window.AmCharts;d.AmLegend=d.Class({construct:function(a){this.enabled=!0;this.cname="AmLegend";this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","rollOverItem","rollOutItem","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType=
"square";this.markerSize=16;this.markerBorderThickness=this.markerBorderAlpha=1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.accessibleLabel="[[title]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.backgroundColor=
"#FFFFFF";this.backgroundAlpha=0;this.useGraphSettings=!1;this.showEntries=!0;d.applyTheme(this,a,this.cname)},setData:function(a){this.legendData=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];var a=this.legendData;this.enabled&&(d.ifArray(a)||d.ifArray(this.data))&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,c=this.width,e=a.divRealWidth,h=a.divRealHeight,f=this.div,g=this.legendData;this.data&&(g=this.data);isNaN(this.fontSize)&&
(this.fontSize=a.fontSize);this.maxColumnsReal=this.maxColumns;if("right"==b||"left"==b)this.maxColumnsReal=1,this.autoMargins&&(this.marginLeft=this.marginRight=10);else if(this.autoMargins){this.marginRight=a.marginRight;this.marginLeft=a.marginLeft;var k=a.autoMarginOffset;"bottom"==b?(this.marginBottom=k,this.marginTop=0):(this.marginTop=k,this.marginBottom=0)}c=void 0!==c?d.toCoordinate(c,e):"right"!=b&&"left"!=b?a.realWidth:0<this.ieW?this.ieW:a.realWidth;"outside"==b?(c=f.offsetWidth,h=f.offsetHeight,
f.clientHeight&&(c=f.clientWidth,h=f.clientHeight)):(isNaN(c)||(f.style.width=c+"px"),f.className="amChartsLegend "+a.classNamePrefix+"-legend-div");this.divWidth=c;(b=this.container)?(b.container.innerHTML="",f.appendChild(b.container),b.width=c,b.height=h,b.setSize(c,h),b.addDefs(a)):b=new d.AmDraw(f,c,h,a);this.container=b;this.lx=0;this.ly=8;h=this.markerSize;h>this.fontSize&&(this.ly=h/2-1);0<h&&(this.lx+=h+this.markerLabelGap);this.titleWidth=0;if(h=this.title)h=d.text(this.container,h,this.color,
a.fontFamily,this.fontSize,"start",!0),d.setCN(a,h,"legend-title"),h.translate(this.marginLeft,this.marginTop+this.verticalGap+this.ly+1),a=h.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<g.length;a++)this.createEntry(g[a]);for(a=this.index=0;a<g.length;a++)this.createValue(g[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+this.titleWidth,c=this.marginRight,
e=this.marginTop,h=this.marginBottom,f=this.horizontalGap,g=this.div,k=this.divWidth,l=this.maxColumnsReal,m=this.verticalGap,n=this.spacing,q=k-c-b,p=0,t=0,r=this.container;this.set&&this.set.remove();var w=r.set();this.set=w;var x=r.set();w.push(x);var y=this.entries,u,A;for(A=0;A<y.length;A++){u=y[A].getBBox();var z=u.width;z>p&&(p=z);u=u.height;u>t&&(t=u)}var z=t=0,B=f,D=0,C=0;for(A=0;A<y.length;A++){var J=y[A];this.reversedOrder&&(J=y[y.length-A-1]);u=J.getBBox();var H;this.equalWidths?H=z*(p+
n+this.markerLabelGap):(H=B,B=B+u.width+f+n);u.height>C&&(C=u.height);H+u.width>q&&0<A&&0!==z&&(t++,H=z=0,B=H+u.width+f+n,D=D+C+m,C=0);J.translate(H,D);z++;!isNaN(l)&&z>=l&&(z=0,t++,D=D+C+m,B=f,C=0);x.push(J)}u=x.getBBox();l=u.height+2*m-1;"left"==a||"right"==a?(n=u.width+2*f,k=n+b+c,g.style.width=k+"px",this.ieW=k):n=k-b-c-1;c=d.polygon(this.container,[0,n,n,0],[0,0,l,l],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);d.setCN(this.chart,c,"legend-bg");w.push(c);w.translate(b,
e);c.toBack();b=f;if("top"==a||"bottom"==a||"absolute"==a||"outside"==a)"center"==this.align?b=f+(n-u.width)/2:"right"==this.align&&(b=f+n-u.width);x.translate(b,m+1);this.titleHeight>l&&(l=this.titleHeight);a=l+e+h+1;0>a&&(a=0);a>this.chart.divRealHeight&&(g.style.top="0px");g.style.height=Math.round(a)+"px";r.setSize(this.divWidth,a)},createEntry:function(a){if(!1!==a.visibleInLegend&&!a.hideFromLegend){var b=this,c=b.chart,e=a.markerType;a.legendEntryWidth=b.markerSize;e||(e=b.markerType);var h=
a.color,f=a.alpha;a.legendKeyColor&&(h=a.legendKeyColor());a.legendKeyAlpha&&(f=a.legendKeyAlpha());var g;!0===a.hidden&&(g=h=b.markerDisabledColor);var k=a.pattern,l=a.customMarker;l||(l=b.customMarker);var m=b.container,n=b.markerSize,q=0,p=0,t=n/2;if(b.useGraphSettings){e=a.type;b.switchType=void 0;if("line"==e||"step"==e||"smoothedLine"==e||"ohlc"==e)k=m.set(),a.hidden||(h=a.lineColorR,g=a.bulletBorderColorR),q=d.line(m,[0,2*n],[n/2,n/2],h,a.lineAlpha,a.lineThickness,a.dashLength),d.setCN(c,q,
"graph-stroke"),k.push(q),a.bullet&&(a.hidden||(h=a.bulletColorR),q=d.bullet(m,a.bullet,a.bulletSize,h,a.bulletAlpha,a.bulletBorderThickness,g,a.bulletBorderAlpha))&&(d.setCN(c,q,"graph-bullet"),q.translate(n+1,n/2),k.push(q)),t=0,q=n,p=n/3;else{var r;a.getGradRotation&&(r=a.getGradRotation(),0===r&&(r=180));q=a.fillColorsR;!0===a.hidden&&(q=h);if(k=b.createMarker("rectangle",q,a.fillAlphas,a.lineThickness,h,a.lineAlpha,r,k,a.dashLength))t=n,k.translate(t,n/2);q=n}d.setCN(c,k,"graph-"+e);d.setCN(c,
k,"graph-"+a.id)}else if(l)k=m.image(l,0,0,n,n);else{var w;isNaN(b.gradientRotation)||(w=180+b.gradientRotation);(k=b.createMarker(e,h,f,void 0,void 0,void 0,w,k))&&k.translate(n/2,n/2)}d.setCN(c,k,"legend-marker");b.addListeners(k,a);m=m.set([k]);b.switchable&&a.switchable&&m.setAttr("cursor","pointer");void 0!==a.id&&d.setCN(c,m,"legend-item-"+a.id);d.setCN(c,m,a.className,!0);g=b.switchType;var x;g&&"none"!=g&&0<n&&("x"==g?(x=b.createX(),x.translate(n/2,n/2)):x=b.createV(),x.dItem=a,!0!==a.hidden?
"x"==g?x.hide():x.show():"x"!=g&&x.hide(),b.switchable||x.hide(),b.addListeners(x,a),a.legendSwitch=x,m.push(x),d.setCN(c,x,"legend-switch"));g=b.color;a.showBalloon&&b.textClickEnabled&&void 0!==b.selectedColor&&(g=b.selectedColor);b.useMarkerColorForLabels&&(g=h);!0===a.hidden&&(g=b.markerDisabledColor);h=d.massReplace(b.labelText,{"[[title]]":a.title});void 0!==b.tabIndex&&(m.setAttr("tabindex",b.tabIndex),m.setAttr("role","menuitem"),m.keyup(function(c){13==c.keyCode&&b.clickMarker(a,c)}));c.accessible&&
b.accessibleLabel&&(r=d.massReplace(b.accessibleLabel,{"[[title]]":a.title}),c.makeAccessible(m,r));r=b.fontSize;k&&(n<=r&&(n=n/2+b.ly-r/2+(r+2-n)/2-p,k.translate(t,n),x&&x.translate(x.x,n)),a.legendEntryWidth=k.getBBox().width);var y;h&&(h=d.fixBrakes(h),a.legendTextReal=h,y=b.labelWidth,y=isNaN(y)?d.text(b.container,h,g,c.fontFamily,r,"start"):d.wrappedText(b.container,h,g,c.fontFamily,r,"start",!1,y,0),d.setCN(c,y,"legend-label"),y.translate(b.lx+q,b.ly),m.push(y),c=y.getBBox().width,b.maxLabelWidth<
c&&(b.maxLabelWidth=c));b.entries[b.index]=m;a.legendEntry=b.entries[b.index];a.legendMarker=k;a.legendLabel=y;b.index++}},addListeners:function(a,b){var c=this;a&&a.mouseover(function(a){c.rollOverMarker(b,a)}).mouseout(function(a){c.rollOutMarker(b,a)}).click(function(a){c.clickMarker(b,a)})},rollOverMarker:function(a,b){this.switchable&&this.dispatch("rollOverMarker",a,b);this.dispatch("rollOverItem",a,b)},rollOutMarker:function(a,b){this.switchable&&this.dispatch("rollOutMarker",a,b);this.dispatch("rollOutItem",
a,b)},clickMarker:function(a,b){this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b));this.dispatch("clickMarker",a,b)},rollOverLabel:function(a,b){a.hidden||(this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor}),this.dispatch("rollOverItem",a,b))},rollOutLabel:function(a,b){if(!a.hidden){if(this.textClickEnabled&&a.legendLabel){var c=this.color;void 0!==this.selectedColor&&a.showBalloon&&(c=this.selectedColor);this.useMarkerColorForLabels&&
(c=a.lineColor,void 0===c&&(c=a.color));a.legendLabel.attr({fill:c})}this.dispatch("rollOutItem",a,b)}},clickLabel:function(a,b){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a,b):this.switchable&&(!0===a.hidden?this.dispatch("showItem",a,b):this.dispatch("hideItem",a,b))},dispatch:function(a,b,c){a={type:a,dataItem:b,target:this,event:c,chart:this.chart};this.chart&&this.chart.handleLegendEvent(a);this.fire(a)},createValue:function(a){var b=this,c=b.fontSize,e=b.chart;if(!1!==a.visibleInLegend&&
!a.hideFromLegend){var h=b.maxLabelWidth;b.forceWidth&&(h=b.labelWidth);b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&a.legendLabel&&(h=a.legendLabel.getBBox().width);var f=h;if(b.valueText&&0<b.valueWidth){var g=b.color;b.useMarkerColorForValues&&(g=a.color,a.legendKeyColor&&(g=a.legendKeyColor()));!0===a.hidden&&(g=b.markerDisabledColor);var k=b.valueText,h=h+b.lx+b.markerLabelGap+b.valueWidth,l="end";"left"==b.valueAlign&&(h-=b.valueWidth,l="start");g=d.text(b.container,k,g,b.chart.fontFamily,
c,l);d.setCN(e,g,"legend-value");g.translate(h,b.ly);b.entries[b.index].push(g);f+=b.valueWidth+2*b.markerLabelGap;g.dItem=a;b.valueLabels.push(g)}b.index++;e=b.markerSize;e<c+7&&(e=c+7,d.VML&&(e+=3));c=b.container.rect(a.legendEntryWidth,0,f,e,0,0).attr({stroke:"none",fill:"#fff","fill-opacity":.005});c.dItem=a;b.entries[b.index-1].push(c);c.mouseover(function(c){b.rollOverLabel(a,c)}).mouseout(function(c){b.rollOutLabel(a,c)}).click(function(c){b.clickLabel(a,c)})}},createV:function(){var a=this.markerSize;
return d.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/5,a/1.7],this.switchColor)},createX:function(){var a=(this.markerSize-4)/2,b={stroke:this.switchColor,"stroke-width":3},c=this.container,e=d.line(c,[-a,a],[-a,a]).attr(b),a=d.line(c,[-a,a],[a,-a]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,c,e,h,f,g,k,l){var m=this.markerSize,n=this.container;h||(h=this.markerBorderColor);h||(h=b);isNaN(e)&&(e=this.markerBorderThickness);isNaN(f)&&(f=this.markerBorderAlpha);
return d.bullet(n,a,m,b,c,e,h,f,m,g,k,this.chart.path,l)},validateNow:function(){this.invalidateSize()},updateValues:function(){var a=this.valueLabels,b=this.chart,c,e=this.data;if(a)for(c=0;c<a.length;c++){var h=a[c],f=h.dItem,g=" ";if(e)f.value?h.text(f.value):h.text("");else{var k;if(void 0!==f.type){k=f.currentDataItem;var l=this.periodValueText;f.legendPeriodValueText&&(l=f.legendPeriodValueText);k?(g=this.valueText,f.legendValueText&&(g=f.legendValueText),g=b.formatString(g,k)):l&&b.formatPeriodString&&
(l=d.massReplace(l,{"[[title]]":f.title}),g=b.formatPeriodString(l,f))}else g=b.formatString(this.valueText,f);if(l=this.valueFunction){var m=f;k&&(m=k);g=l(m,g)}var n;this.useMarkerColorForLabels&&!k&&f.lastDataItem&&(k=f.lastDataItem);k?n=b.getBalloonColor(f,k):f.legendKeyColor&&(n=f.legendKeyColor());h.text(g);this.useMarkerColorForValues&&h.setAttr("fill",n);if(this.useMarkerColorForLabels){if(h=f.legendMarker)h.setAttr("fill",n),h.setAttr("stroke",n);(f=f.legendLabel)&&f.setAttr("fill",n)}}}},
renderFix:function(){if(!d.VML&&this.enabled){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML="";d.remove(this.set)}})})();(function(){var d=window.AmCharts;d.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var c=b.getMilliseconds(),d=String(c);10>c&&(d="00"+c);10<=c&&100>c&&(d="0"+c);a=a.replace(/fff/g,d)}return a};d.extractPeriod=function(a){var b=d.stripNumbers(a),c=1;b!=a&&(c=Number(a.slice(0,a.indexOf(b))));return{period:b,count:c}};d.getDate=function(a,b,c){return a instanceof Date?d.newDate(a,c):b&&isNaN(a)?d.stringToDate(a,b):new Date(a)};d.daysInMonth=function(a){return(new Date(a.getYear(),a.getMonth()+
1,0)).getDate()};d.newDate=function(a,b){return b&&-1==b.indexOf("fff")?new Date(a):new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds())};d.resetDateToMin=function(a,b,c,e){void 0===e&&(e=1);var h,f,g,k,l,m,n;d.useUTC?(h=a.getUTCFullYear(),f=a.getUTCMonth(),g=a.getUTCDate(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds(),a=a.getUTCDay()):(h=a.getFullYear(),f=a.getMonth(),g=a.getDate(),k=a.getHours(),l=
a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds(),a=a.getDay());switch(b){case "YYYY":h=Math.floor(h/c)*c;f=0;g=1;n=m=l=k=0;break;case "MM":f=Math.floor(f/c)*c;g=1;n=m=l=k=0;break;case "WW":g=a>=e?g-a+e:g-(7+a)+e;n=m=l=k=0;break;case "DD":n=m=l=k=0;break;case "hh":k=Math.floor(k/c)*c;n=m=l=0;break;case "mm":l=Math.floor(l/c)*c;n=m=0;break;case "ss":m=Math.floor(m/c)*c;n=0;break;case "fff":n=Math.floor(n/c)*c}d.useUTC?(a=new Date,a.setUTCFullYear(h,f,g),a.setUTCHours(k,l,m,n)):a=new Date(h,f,g,
k,l,m,n);return a};d.getPeriodDuration=function(a,b){void 0===b&&(b=1);var c;switch(a){case "YYYY":c=316224E5;break;case "MM":c=26784E5;break;case "WW":c=6048E5;break;case "DD":c=864E5;break;case "hh":c=36E5;break;case "mm":c=6E4;break;case "ss":c=1E3;break;case "fff":c=1}return c*b};d.intervals={s:{nextInterval:"ss",contains:1E3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:Infinity,count:3}};
d.getMaxInterval=function(a,b){var c=d.intervals;return a>=c[b].contains?(a=Math.round(a/c[b].contains),b=c[b].nextInterval,d.getMaxInterval(a,b)):"ss"==b?c[b].nextInterval:b};d.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");d.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" ");d.monthNames="January February March April May June July August September October November December".split(" ");d.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
d.getWeekNumber=function(a){a=new Date(a);a.setHours(0,0,0);a.setDate(a.getDate()+4-(a.getDay()||7));var b=new Date(a.getFullYear(),0,1);return Math.ceil(((a-b)/864E5+1)/7)};d.stringToDate=function(a,b){var c={},e=[{pattern:"YYYY",period:"year"},{pattern:"YY",period:"year"},{pattern:"MM",period:"month"},{pattern:"M",period:"month"},{pattern:"DD",period:"date"},{pattern:"D",period:"date"},{pattern:"JJ",period:"hours"},{pattern:"J",period:"hours"},{pattern:"HH",period:"hours"},{pattern:"H",period:"hours"},
{pattern:"KK",period:"hours"},{pattern:"K",period:"hours"},{pattern:"LL",period:"hours"},{pattern:"L",period:"hours"},{pattern:"NN",period:"minutes"},{pattern:"N",period:"minutes"},{pattern:"SS",period:"seconds"},{pattern:"S",period:"seconds"},{pattern:"QQQ",period:"milliseconds"},{pattern:"QQ",period:"milliseconds"},{pattern:"Q",period:"milliseconds"}],h=!0,f=b.indexOf("AA");-1!=f&&(a.substr(f,2),"pm"==a.toLowerCase&&(h=!1));var f=b,g,k,l;for(l=0;l<e.length;l++)k=e[l].period,c[k]=0,"date"==k&&(c[k]=
1);for(l=0;l<e.length;l++)if(g=e[l].pattern,k=e[l].period,-1!=b.indexOf(g)){var m=d.getFromDateString(g,a,f);b=b.replace(g,"");if("KK"==g||"K"==g||"LL"==g||"L"==g)h||(m+=12);c[k]=m}d.useUTC?(e=new Date,e.setUTCFullYear(c.year,c.month,c.date),e.setUTCHours(c.hours,c.minutes,c.seconds,c.milliseconds)):e=new Date(c.year,c.month,c.date,c.hours,c.minutes,c.seconds,c.milliseconds);return e};d.getFromDateString=function(a,b,c){if(void 0!==b)return c=c.indexOf(a),b=String(b),b=b.substr(c,a.length),"0"==b.charAt(0)&&
(b=b.substr(1,b.length-1)),b=Number(b),isNaN(b)&&(b=0),-1!=a.indexOf("M")&&b--,b};d.formatDate=function(a,b,c){c||(c=d);var e,h,f,g,k,l,m,n,q=d.getWeekNumber(a);d.useUTC?(e=a.getUTCFullYear(),h=a.getUTCMonth(),f=a.getUTCDate(),g=a.getUTCDay(),k=a.getUTCHours(),l=a.getUTCMinutes(),m=a.getUTCSeconds(),n=a.getUTCMilliseconds()):(e=a.getFullYear(),h=a.getMonth(),f=a.getDate(),g=a.getDay(),k=a.getHours(),l=a.getMinutes(),m=a.getSeconds(),n=a.getMilliseconds());var p=String(e).substr(2,2),t="0"+g;b=b.replace(/W/g,
q);q=k;24==q&&(q=0);var r=q;10>r&&(r="0"+r);b=b.replace(/JJ/g,r);b=b.replace(/J/g,q);r=k;0===r&&(r=24,-1!=b.indexOf("H")&&(f--,0===f&&(e=new Date(a),e.setDate(e.getDate()-1),h=e.getMonth(),f=e.getDate(),e=e.getFullYear())));a=h+1;9>h&&(a="0"+a);q=f;10>f&&(q="0"+f);var w=r;10>w&&(w="0"+w);b=b.replace(/HH/g,w);b=b.replace(/H/g,r);r=k;11<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/KK/g,w);b=b.replace(/K/g,r);r=k;0===r&&(r=12);12<r&&(r-=12);w=r;10>w&&(w="0"+w);b=b.replace(/LL/g,w);b=b.replace(/L/g,r);
r=l;10>r&&(r="0"+r);b=b.replace(/NN/g,r);b=b.replace(/N/g,l);l=m;10>l&&(l="0"+l);b=b.replace(/SS/g,l);b=b.replace(/S/g,m);m=n;10>m?m="00"+m:100>m&&(m="0"+m);l=n;10>l&&(l="00"+l);b=b.replace(/A/g,"@A@");b=b.replace(/QQQ/g,m);b=b.replace(/QQ/g,l);b=b.replace(/Q/g,n);b=b.replace(/YYYY/g,"@IIII@");b=b.replace(/YY/g,"@II@");b=b.replace(/MMMM/g,"@XXXX@");b=b.replace(/MMM/g,"@XXX@");b=b.replace(/MM/g,"@XX@");b=b.replace(/M/g,"@X@");b=b.replace(/DD/g,"@RR@");b=b.replace(/D/g,"@R@");b=b.replace(/EEEE/g,"@PPPP@");
b=b.replace(/EEE/g,"@PPP@");b=b.replace(/EE/g,"@PP@");b=b.replace(/E/g,"@P@");b=b.replace(/@IIII@/g,e);b=b.replace(/@II@/g,p);b=b.replace(/@XXXX@/g,c.monthNames[h]);b=b.replace(/@XXX@/g,c.shortMonthNames[h]);b=b.replace(/@XX@/g,a);b=b.replace(/@X@/g,h+1);b=b.replace(/@RR@/g,q);b=b.replace(/@R@/g,f);b=b.replace(/@PPPP@/g,c.dayNames[g]);b=b.replace(/@PPP@/g,c.shortDayNames[g]);b=b.replace(/@PP@/g,t);b=b.replace(/@P@/g,g);return b=12>k?b.replace(/@A@/g,c.amString):b.replace(/@A@/g,c.pmString)};d.changeDate=
function(a,b,c,e,h){if(d.useUTC)return d.changeUTCDate(a,b,c,e,h);var f=-1;void 0===e&&(e=!0);void 0===h&&(h=!1);!0===e&&(f=1);switch(b){case "YYYY":a.setFullYear(a.getFullYear()+c*f);e||h||a.setDate(a.getDate()+1);break;case "MM":b=a.getMonth();a.setMonth(a.getMonth()+c*f);a.getMonth()>b+c*f&&a.setDate(a.getDate()-1);e||h||a.setDate(a.getDate()+1);break;case "DD":a.setDate(a.getDate()+c*f);break;case "WW":a.setDate(a.getDate()+c*f*7);break;case "hh":a.setHours(a.getHours()+c*f);break;case "mm":a.setMinutes(a.getMinutes()+
c*f);break;case "ss":a.setSeconds(a.getSeconds()+c*f);break;case "fff":a.setMilliseconds(a.getMilliseconds()+c*f)}return a};d.changeUTCDate=function(a,b,c,d,h){var f=-1;void 0===d&&(d=!0);void 0===h&&(h=!1);!0===d&&(f=1);switch(b){case "YYYY":a.setUTCFullYear(a.getUTCFullYear()+c*f);d||h||a.setUTCDate(a.getUTCDate()+1);break;case "MM":b=a.getUTCMonth();a.setUTCMonth(a.getUTCMonth()+c*f);a.getUTCMonth()>b+c*f&&a.setUTCDate(a.getUTCDate()-1);d||h||a.setUTCDate(a.getUTCDate()+1);break;case "DD":a.setUTCDate(a.getUTCDate()+
c*f);break;case "WW":a.setUTCDate(a.getUTCDate()+c*f*7);break;case "hh":a.setUTCHours(a.getUTCHours()+c*f);break;case "mm":a.setUTCMinutes(a.getUTCMinutes()+c*f);break;case "ss":a.setUTCSeconds(a.getUTCSeconds()+c*f);break;case "fff":a.setUTCMilliseconds(a.getUTCMilliseconds()+c*f)}return a}})();

(function(){var e=window.AmCharts;e.AmRectangularChart=e.Class({inherits:e.AmCoordinateChart,construct:function(a){e.AmRectangularChart.base.construct.call(this,a);this.theme=a;this.createEvents("zoomed","changed");this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20;this.depth3D=this.angle=0;this.plotAreaFillColors="#FFFFFF";this.plotAreaFillAlphas=0;this.plotAreaBorderColor="#000000";this.plotAreaBorderAlpha=0;this.maxZoomFactor=20;this.zoomOutButtonImageSize=19;this.zoomOutButtonImage=
"lens";this.zoomOutText="Show all";this.zoomOutButtonColor="#e5e5e5";this.zoomOutButtonAlpha=0;this.zoomOutButtonRollOverAlpha=1;this.zoomOutButtonPadding=8;this.trendLines=[];this.autoMargins=!0;this.marginsUpdated=!1;this.autoMarginOffset=10;e.applyTheme(this,a,"AmRectangularChart")},initChart:function(){e.AmRectangularChart.base.initChart.call(this);this.updateDxy();!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),this.drawGraphs=!1);this.processScrollbars();this.updateMargins();this.updatePlotArea();
this.updateScrollbars();this.updateTrendLines();this.updateChartCursor();this.updateValueAxes();this.scrollbarOnly||this.updateGraphs()},drawChart:function(){e.AmRectangularChart.base.drawChart.call(this);this.drawPlotArea();if(e.ifArray(this.chartData)){var a=this.chartCursor;a&&a.draw()}},resetMargins:function(){var a={},b;if("xy"==this.type){var c=this.xAxes,d=this.yAxes;for(b=0;b<c.length;b++){var g=c[b];g.ignoreAxisWidth||(g.setOrientation(!0),g.fixAxisPosition(),a[g.position]=!0)}for(b=0;b<
d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(!1),c.fixAxisPosition(),a[c.position]=!0)}else{d=this.valueAxes;for(b=0;b<d.length;b++)c=d[b],c.ignoreAxisWidth||(c.setOrientation(this.rotate),c.fixAxisPosition(),a[c.position]=!0);(b=this.categoryAxis)&&!b.ignoreAxisWidth&&(b.setOrientation(!this.rotate),b.fixAxisPosition(),b.fixAxisPosition(),a[b.position]=!0)}a.left&&(this.marginLeft=0);a.right&&(this.marginRight=0);a.top&&(this.marginTop=0);a.bottom&&(this.marginBottom=0);this.fixMargins=
a},measureMargins:function(){var a=this.valueAxes,b,c=this.autoMarginOffset,d=this.fixMargins,g=this.realWidth,h=this.realHeight,f=c,e=c,k=g;b=h;var m;for(m=0;m<a.length;m++)a[m].handleSynchronization(),b=this.getAxisBounds(a[m],f,k,e,b),f=Math.round(b.l),k=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);if(a=this.categoryAxis)b=this.getAxisBounds(a,f,k,e,b),f=Math.round(b.l),k=Math.round(b.r),e=Math.round(b.t),b=Math.round(b.b);d.left&&f<c&&(this.marginLeft=Math.round(-f+c),!isNaN(this.minMarginLeft)&&
this.marginLeft<this.minMarginLeft&&(this.marginLeft=this.minMarginLeft));d.right&&k>=g-c&&(this.marginRight=Math.round(k-g+c),!isNaN(this.minMarginRight)&&this.marginRight<this.minMarginRight&&(this.marginRight=this.minMarginRight));d.top&&e<c+this.titleHeight&&(this.marginTop=Math.round(this.marginTop-e+c+this.titleHeight),!isNaN(this.minMarginTop)&&this.marginTop<this.minMarginTop&&(this.marginTop=this.minMarginTop));d.bottom&&b>h-c&&(this.marginBottom=Math.round(this.marginBottom+b-h+c),!isNaN(this.minMarginBottom)&&
this.marginBottom<this.minMarginBottom&&(this.marginBottom=this.minMarginBottom));this.initChart()},getAxisBounds:function(a,b,c,d,g){if(!a.ignoreAxisWidth){var h=a.labelsSet,f=a.tickLength;a.inside&&(f=0);if(h)switch(h=a.getBBox(),a.position){case "top":a=h.y;d>a&&(d=a);break;case "bottom":a=h.y+h.height;g<a&&(g=a);break;case "right":a=h.x+h.width+f+3;c<a&&(c=a);break;case "left":a=h.x-f,b>a&&(b=a)}}return{l:b,t:d,r:c,b:g}},drawZoomOutButton:function(){var a=this;if(!a.zbSet){var b=a.container.set();
a.zoomButtonSet.push(b);var c=a.color,d=a.fontSize,g=a.zoomOutButtonImageSize,h=a.zoomOutButtonImage.replace(/\.[a-z]*$/i,""),f=e.lang.zoomOutText||a.zoomOutText,l=a.zoomOutButtonColor,k=a.zoomOutButtonAlpha,m=a.zoomOutButtonFontSize,p=a.zoomOutButtonPadding;isNaN(m)||(d=m);(m=a.zoomOutButtonFontColor)&&(c=m);var m=a.zoomOutButton,n;m&&(m.fontSize&&(d=m.fontSize),m.color&&(c=m.color),m.backgroundColor&&(l=m.backgroundColor),isNaN(m.backgroundAlpha)||(a.zoomOutButtonRollOverAlpha=m.backgroundAlpha));
var r=m=0;void 0!==a.pathToImages&&h&&(n=a.container.image(a.pathToImages+h+a.extension,0,0,g,g),e.setCN(a,n,"zoom-out-image"),b.push(n),n=n.getBBox(),m=n.width+5);void 0!==f&&(c=e.text(a.container,f,c,a.fontFamily,d,"start"),e.setCN(a,c,"zoom-out-label"),d=c.getBBox(),r=n?n.height/2-3:d.height/2,c.translate(m,r),b.push(c));n=b.getBBox();c=1;e.isModern||(c=0);l=e.rect(a.container,n.width+2*p+5,n.height+2*p-2,l,1,1,l,c);l.setAttr("opacity",k);l.translate(-p,-p);e.setCN(a,l,"zoom-out-bg");b.push(l);
l.toBack();a.zbBG=l;n=l.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-n.width+p,a.marginTopReal+p);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();a.clickZB()});for(k=0;k<b.length;k++)b[k].attr({cursor:"pointer"});void 0!==a.zoomOutButtonTabIndex&&(b.setAttr("tabindex",a.zoomOutButtonTabIndex),b.setAttr("role","menuitem"),b.keyup(function(b){13==b.keyCode&&
a.clickZB()}));a.zbSet=b}},rollOverZB:function(){this.rolledOverZB=!0;this.zbBG.setAttr("opacity",this.zoomOutButtonRollOverAlpha)},rollOutZB:function(){this.rolledOverZB=!1;this.zbBG.setAttr("opacity",this.zoomOutButtonAlpha)},clickZB:function(){this.rolledOverZB=!1;this.zoomOut()},zoomOut:function(){this.zoomOutValueAxes()},drawPlotArea:function(){var a=this.dx,b=this.dy,c=this.marginLeftReal,d=this.marginTopReal,g=this.plotAreaWidth-1,h=this.plotAreaHeight-1,f=this.plotAreaFillColors,l=this.plotAreaFillAlphas,
k=this.plotAreaBorderColor,m=this.plotAreaBorderAlpha;"object"==typeof l&&(l=l[0]);f=e.polygon(this.container,[0,g,g,0,0],[0,0,h,h,0],f,l,1,k,m,this.plotAreaGradientAngle);e.setCN(this,f,"plot-area");f.translate(c+a,d+b);this.set.push(f);0!==a&&0!==b&&(f=this.plotAreaFillColors,"object"==typeof f&&(f=f[0]),f=e.adjustLuminosity(f,-.15),g=e.polygon(this.container,[0,a,g+a,g,0],[0,b,b,0,0],f,l,1,k,m),e.setCN(this,g,"plot-area-bottom"),g.translate(c,d+h),this.set.push(g),a=e.polygon(this.container,[0,
0,a,a,0],[0,h,h+b,b,0],f,l,1,k,m),e.setCN(this,a,"plot-area-left"),a.translate(c,d),this.set.push(a));(c=this.bbset)&&this.scrollbarOnly&&c.remove()},updatePlotArea:function(){var a=this.updateWidth(),b=this.updateHeight(),c=this.container;this.realWidth=a;this.realWidth=b;c&&this.container.setSize(a,b);var c=this.marginLeftReal,d=this.marginTopReal,a=a-c-this.marginRightReal-this.dx,b=b-d-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b);
this.plotBalloonsSet.translate(c,d)},updateDxy:function(){this.dx=Math.round(this.depth3D*Math.cos(this.angle*Math.PI/180));this.dy=Math.round(-this.depth3D*Math.sin(this.angle*Math.PI/180));this.d3x=Math.round(this.columnSpacing3D*Math.cos(this.angle*Math.PI/180));this.d3y=Math.round(-this.columnSpacing3D*Math.sin(this.angle*Math.PI/180))},updateMargins:function(){var a=this.getTitleHeight();this.titleHeight=a;this.marginTopReal=this.marginTop-this.dy;this.fixMargins&&!this.fixMargins.top&&(this.marginTopReal+=
a);this.marginBottomReal=this.marginBottom;this.marginLeftReal=this.marginLeft;this.marginRightReal=this.marginRight},updateValueAxes:function(){var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b];this.setAxisRenderers(c);this.updateObjectSize(c)}},setAxisRenderers:function(a){a.axisRenderer=e.RecAxis;a.guideFillRenderer=e.RecFill;a.axisItemRenderer=e.RecItem;a.marginsChanged=!0},updateGraphs:function(){var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.index=b;c.rotate=this.rotate;this.updateObjectSize(c)}},
updateObjectSize:function(a){a.width=this.plotAreaWidth-1;a.height=this.plotAreaHeight-1;a.x=this.marginLeftReal;a.y=this.marginTopReal;a.dx=this.dx;a.dy=this.dy},updateChartCursor:function(){var a=this.chartCursor;a&&(a=e.processObject(a,e.ChartCursor,this.theme),this.updateObjectSize(a),this.addChartCursor(a),a.chart=this)},processScrollbars:function(){var a=this.chartScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),this.addChartScrollbar(a))},updateScrollbars:function(){},removeChartCursor:function(){e.callMethod("destroy",
[this.chartCursor]);this.chartCursor=null},zoomTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b];c.valueAxis.recalculateToPercents?c.set&&c.set.hide():(c.x=this.marginLeftReal,c.y=this.marginTopReal,c.draw())}},handleCursorValueZoom:function(){},addTrendLine:function(a){this.trendLines.push(a)},zoomOutValueAxes:function(){for(var a=this.valueAxes,b=0;b<a.length;b++)a[b].zoomOut()},removeTrendLine:function(a){var b=this.trendLines,c;for(c=b.length-1;0<=c;c--)b[c]==a&&
b.splice(c,1)},adjustMargins:function(a,b){var c=a.position,d=a.scrollbarHeight+a.offset;a.enabled&&("top"==c?b?this.marginLeftReal+=d:this.marginTopReal+=d:b?this.marginRightReal+=d:this.marginBottomReal+=d)},getScrollbarPosition:function(a,b,c){var d="bottom",g="top";a.oppositeAxis||(g=d,d="top");a.position=b?"bottom"==c||"left"==c?d:g:"top"==c||"right"==c?d:g},updateChartScrollbar:function(a,b){if(a){a.rotate=b;var c=this.marginTopReal,d=this.marginLeftReal,g=a.scrollbarHeight,h=this.dx,f=this.dy,
e=a.offset;"top"==a.position?b?(a.y=c,a.x=d-g-e):(a.y=c-g+f-e,a.x=d+h):b?(a.y=c+f,a.x=d+this.plotAreaWidth+h+e):(a.y=c+this.plotAreaHeight+e,a.x=this.marginLeftReal)}},showZB:function(a){var b=this.zbSet;a&&(b=this.zoomOutText,""!==b&&b&&this.drawZoomOutButton());if(b=this.zbSet)this.zoomButtonSet.push(b),a?b.show():b.hide(),this.rollOutZB()},handleReleaseOutside:function(a){e.AmRectangularChart.base.handleReleaseOutside.call(this,a);(a=this.chartCursor)&&a.handleReleaseOutside&&a.handleReleaseOutside()},
handleMouseDown:function(a){e.AmRectangularChart.base.handleMouseDown.call(this,a);var b=this.chartCursor;b&&b.handleMouseDown&&!this.rolledOverZB&&b.handleMouseDown(a)},update:function(){e.AmRectangularChart.base.update.call(this);this.chartCursor&&this.chartCursor.update&&this.chartCursor.update()},handleScrollbarValueZoom:function(a){this.relativeZoomValueAxes(a.target.valueAxes,a.relativeStart,a.relativeEnd);this.zoomAxesAndGraphs()},zoomValueScrollbar:function(a){if(a&&a.enabled){var b=a.valueAxes[0],
c=b.relativeStart,d=b.relativeEnd;b.reversed&&(d=1-c,c=1-b.relativeEnd);a.percentZoom(c,d)}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){var a=this.valueAxes,b;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);a=this.graphs;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);(b=this.chartCursor)&&b.clearSelection();this.zoomTrendLines()}},handleValueAxisZoomReal:function(a,b){var c=a.relativeStart,d=a.relativeEnd;if(c>d)var g=c,c=d,d=g;this.relativeZoomValueAxes(b,c,d);this.updateAfterValueZoom()},
updateAfterValueZoom:function(){this.zoomAxesAndGraphs();this.zoomScrollbar()},relativeZoomValueAxes:function(a,b,c){b=e.fitToBounds(b,0,1);c=e.fitToBounds(c,0,1);if(b>c){var d=b;b=c;c=d}var d=1/this.maxZoomFactor,g=e.getDecimals(d)+4;c-b<d&&(c=b+(c-b)/2,b=c-d/2,c+=d/2);b=e.roundTo(b,g);c=e.roundTo(c,g);d=!1;if(a){for(g=0;g<a.length;g++){var h=a[g].zoomToRelativeValues(b,c,!0);h&&(d=h)}this.showZB()}return d},addChartCursor:function(a){e.callMethod("destroy",[this.chartCursor]);a&&(this.listenTo(a,
"moved",this.handleCursorMove),this.listenTo(a,"zoomed",this.handleCursorZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted),this.listenTo(a,"panning",this.handleCursorPanning),this.listenTo(a,"onHideCursor",this.handleCursorHide));this.chartCursor=a},handleCursorChange:function(){},handleCursorMove:function(a){var b,c=this.valueAxes;for(b=0;b<c.length;b++)a.panning||c[b].showBalloon(a.x,a.y)},handleCursorZoom:function(a){if(this.skipZoomed)this.skipZoomed=!1;else{var b=this.startX0,
c=this.endX0,d=this.endY0,g=this.startY0,h=a.startX,f=a.endX,e=a.startY,k=a.endY;this.startX0=this.endX0=this.startY0=this.endY0=NaN;this.handleCursorZoomReal(b+h*(c-b),b+f*(c-b),g+e*(d-g),g+k*(d-g),a)}},handleCursorHide:function(){var a,b=this.valueAxes;for(a=0;a<b.length;a++)b[a].hideBalloon();b=this.graphs;for(a=0;a<b.length;a++)b[a].hideBalloonReal()}})})();(function(){var e=window.AmCharts;e.AmSerialChart=e.Class({inherits:e.AmRectangularChart,construct:function(a){this.type="serial";e.AmSerialChart.base.construct.call(this,a);this.cname="AmSerialChart";this.theme=a;this.columnSpacing=5;this.columnSpacing3D=0;this.columnWidth=.8;var b=new e.CategoryAxis(a);b.chart=this;this.categoryAxis=b;this.zoomOutOnDataUpdate=!0;this.mouseWheelZoomEnabled=this.mouseWheelScrollEnabled=this.rotate=this.skipZoom=!1;this.minSelectedTime=0;e.applyTheme(this,a,this.cname)},
initChart:function(){e.AmSerialChart.base.initChart.call(this);this.updateCategoryAxis(this.categoryAxis,this.rotate,"categoryAxis");if(this.dataChanged)this.parseData();else this.onDataUpdated();this.drawGraphs=!0},onDataUpdated:function(){var a=this.countColumns(),b=this.chartData,c=this.graphs,d;for(d=0;d<c.length;d++){var g=c[d];g.data=b;g.columnCount=a}0<b.length&&(this.firstTime=this.getStartTime(b[0].time),this.lastTime=this.getEndTime(b[b.length-1].time));this.drawChart();this.autoMargins&&
!this.marginsUpdated?(this.marginsUpdated=!0,this.measureMargins()):this.dispDUpd()},syncGrid:function(){if(this.synchronizeGrid){var a=this.valueAxes,b,c;if(0<a.length){var d=0;for(c=0;c<a.length;c++)b=a[c],d<b.gridCountReal&&(d=b.gridCountReal);var g=!1;for(c=0;c<a.length;c++)if(b=a[c],b.gridCountReal<d){var h=g=(d-b.gridCountReal)/2,f=g;0!==g-Math.round(g)&&(h-=.5,f+=.5);b.minimum=b.min-h*b.step;b.maximum=b.max+f*b.step;b.setStep=b.step;g=!0}g&&this.updateAfterValueZoom();for(c=0;c<a.length;c++)b=
a[c],b.minimum=NaN,b.maximum=NaN,b.setStep=NaN}}},handleWheelReal:function(a,b){if(!this.wheelBusy){var c=this.categoryAxis,d=c.parseDates,g=c.minDuration(),h=1,f=1;this.mouseWheelZoomEnabled?b||(h=-1):b&&(h=-1);var e=this.chartCursor;if(e){var k=e.mouseX,e=e.mouseY;h!=f&&(k=this.rotate?e/this.plotAreaHeight:k/this.plotAreaWidth,h*=k,f*=1-k);k=.05*(this.end-this.start);d&&(k=.05*(this.endTime-this.startTime)/g);1>k&&(k=1);h*=k;f*=k;if(!d||c.equalSpacing)h=Math.round(h),f=Math.round(f)}e=this.chartData.length;
c=this.lastTime;k=this.firstTime;0>a?d?(e=this.endTime-this.startTime,d=this.startTime+h*g,g=this.endTime+f*g,0<f&&0<h&&g>=c&&(g=c,d=c-e),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<h&&this.end>=e-1&&(h=f=0),d=this.start+h,g=this.end+f,this.zoomToIndexes(d,g)):d?(e=this.endTime-this.startTime,d=this.startTime-h*g,g=this.endTime-f*g,0<f&&0<h&&d<=k&&(d=k,g=k+e),this.zoomToDates(new Date(d),new Date(g))):(0<f&&0<h&&1>this.start&&(h=f=0),d=this.start-h,g=this.end-f,this.zoomToIndexes(d,g))}},validateData:function(a){this.marginsUpdated=
!1;this.zoomOutOnDataUpdate&&!a&&(this.endTime=this.end=this.startTime=this.start=NaN);e.AmSerialChart.base.validateData.call(this)},drawChart:function(){if(0<this.realWidth&&0<this.realHeight){e.AmSerialChart.base.drawChart.call(this);var a=this.chartData;if(e.ifArray(a)){var b=this.chartScrollbar;!b||!this.marginsUpdated&&this.autoMargins||b.draw();(b=this.valueScrollbar)&&b.draw();var a=a.length-1,c,b=this.categoryAxis;if(b.parseDates&&!b.equalSpacing){if(b=this.startTime,c=this.endTime,isNaN(b)||
isNaN(c))b=this.firstTime,c=this.lastTime}else if(b=this.start,c=this.end,isNaN(b)||isNaN(c))b=0,c=a;this.endTime=this.startTime=this.end=this.start=void 0;this.zoom(b,c)}}else this.cleanChart()},cleanChart:function(){e.callMethod("destroy",[this.valueAxes,this.graphs,this.categoryAxis,this.chartScrollbar,this.chartCursor,this.valueScrollbar])},updateCategoryAxis:function(a,b,c){a.chart=this;a.id=c;a.rotate=b;a.setOrientation(!this.rotate);a.init();this.setAxisRenderers(a);this.updateObjectSize(a)},
updateValueAxes:function(){e.AmSerialChart.base.updateValueAxes.call(this);var a=this.valueAxes,b;for(b=0;b<a.length;b++){var c=a[b],d=this.rotate;c.rotate=d;c.setOrientation(d);d=this.categoryAxis;if(!d.startOnAxis||d.parseDates)c.expandMinMax=!0}},getStartTime:function(a){var b=this.categoryAxis;return e.resetDateToMin(new Date(a),b.minPeriod,1,b.firstDayOfWeek).getTime()},getEndTime:function(a){var b=e.extractPeriod(this.categoryAxis.minPeriod);return e.changeDate(new Date(a),b.period,b.count,
!0).getTime()-1},updateMargins:function(){e.AmSerialChart.base.updateMargins.call(this);var a=this.chartScrollbar;a&&(this.getScrollbarPosition(a,this.rotate,this.categoryAxis.position),this.adjustMargins(a,this.rotate));if(a=this.valueScrollbar)this.getScrollbarPosition(a,!this.rotate,this.valueAxes[0].position),this.adjustMargins(a,!this.rotate)},updateScrollbars:function(){e.AmSerialChart.base.updateScrollbars.call(this);this.updateChartScrollbar(this.chartScrollbar,this.rotate);this.updateChartScrollbar(this.valueScrollbar,
!this.rotate)},zoom:function(a,b){var c=this.categoryAxis;c.parseDates&&!c.equalSpacing?this.timeZoom(a,b):this.indexZoom(a,b);isNaN(a)&&this.zoomOutValueAxes();(c=this.chartCursor)&&(c.pan||c.hideCursorReal());this.updateLegendValues()},timeZoom:function(a,b){var c=this.maxSelectedTime;isNaN(c)||(b!=this.endTime&&b-a>c&&(a=b-c),a!=this.startTime&&b-a>c&&(b=a+c));var d=this.minSelectedTime;if(0<d&&b-a<d){var g=Math.round(a+(b-a)/2),d=Math.round(d/2);a=g-d;b=g+d}d=this.chartData;g=this.categoryAxis;
if(e.ifArray(d)&&(a!=this.startTime||b!=this.endTime)){var h=g.minDuration(),f=this.firstTime,l=this.lastTime;a||(a=f,isNaN(c)||(a=l-c));b||(b=l);a>l&&(a=l);b<f&&(b=f);a<f&&(a=f);b>l&&(b=l);b<a&&(b=a+h);b-a<h/5&&(b<l?b=a+h/5:a=b-h/5);this.startTime=a;this.endTime=b;c=d.length-1;h=this.getClosestIndex(d,"time",a,!0,0,c);d=this.getClosestIndex(d,"time",b,!1,h,c);g.timeZoom(a,b);g.zoom(h,d);this.start=e.fitToBounds(h,0,c);this.end=e.fitToBounds(d,0,c);this.zoomAxesAndGraphs();this.zoomScrollbar();this.fixCursor();
this.showZB();this.syncGrid();this.updateColumnsDepth();this.dispatchTimeZoomEvent()}},showZB:function(){var a,b=this.categoryAxis;b&&b.parseDates&&!b.equalSpacing&&(this.startTime>this.firstTime&&(a=!0),this.endTime<this.lastTime&&(a=!0));0<this.start&&(a=!0);this.end<this.chartData.length-1&&(a=!0);if(b=this.valueAxes)b=b[0],0!==b.relativeStart&&(a=!0),1!=b.relativeEnd&&(a=!0);e.AmSerialChart.base.showZB.call(this,a)},updateAfterValueZoom:function(){e.AmSerialChart.base.updateAfterValueZoom.call(this);
this.updateColumnsDepth()},indexZoom:function(a,b){var c=this.maxSelectedSeries;isNaN(c)||(b!=this.end&&b-a>c&&(a=b-c),a!=this.start&&b-a>c&&(b=a+c));if(a!=this.start||b!=this.end){var d=this.chartData.length-1;isNaN(a)&&(a=0,isNaN(c)||(a=d-c));isNaN(b)&&(b=d);b<a&&(b=a);b>d&&(b=d);a>d&&(a=d-1);0>a&&(a=0);this.start=a;this.end=b;this.categoryAxis.zoom(a,b);this.zoomAxesAndGraphs();this.zoomScrollbar();this.fixCursor();0!==a||b!=this.chartData.length-1?this.showZB(!0):this.showZB(!1);this.syncGrid();
this.updateColumnsDepth();this.dispatchIndexZoomEvent()}},updateGraphs:function(){e.AmSerialChart.base.updateGraphs.call(this);var a=this.graphs,b;for(b=0;b<a.length;b++){var c=a[b];c.columnWidthReal=this.columnWidth;c.categoryAxis=this.categoryAxis;e.isString(c.fillToGraph)&&(c.fillToGraph=this.graphsById[c.fillToGraph])}},zoomAxesAndGraphs:function(){e.AmSerialChart.base.zoomAxesAndGraphs.call(this);this.updateColumnsDepth()},updateColumnsDepth:function(){if(0!==this.depth3D||0!==this.angle){var a,
b=this.graphs,c;this.columnsArray=[];for(a=0;a<b.length;a++){c=b[a];var d=c.columnsArray;if(d){var g;for(g=0;g<d.length;g++)this.columnsArray.push(d[g])}}this.columnsArray.sort(this.compareDepth);if(0<this.columnsArray.length){b=this.columnsSet;d=this.container.set();this.columnSet.push(d);for(a=0;a<this.columnsArray.length;a++)d.push(this.columnsArray[a].column.set);c&&d.translate(c.x,c.y);this.columnsSet=d;e.remove(b)}}},compareDepth:function(a,b){return a.depth>b.depth?1:-1},zoomScrollbar:function(){var a=
this.chartScrollbar,b=this.categoryAxis;if(a){if(!this.zoomedByScrollbar){var c=a.dragger;c&&c.stop()}this.zoomedByScrollbar=!1;b.parseDates&&!b.equalSpacing?a.timeZoom(this.startTime,this.endTime):a.zoom(this.start,this.end)}this.zoomValueScrollbar(this.valueScrollbar)},updateTrendLines:function(){var a=this.trendLines,b;for(b=0;b<a.length;b++){var c=a[b],c=e.processObject(c,e.TrendLine,this.theme);a[b]=c;c.chart=this;c.id||(c.id="trendLineAuto"+b+"_"+(new Date).getTime());e.isString(c.valueAxis)&&
(c.valueAxis=this.getValueAxisById(c.valueAxis));c.valueAxis||(c.valueAxis=this.valueAxes[0]);c.categoryAxis=this.categoryAxis}},countColumns:function(){var a=0,b=this.valueAxes.length,c=this.graphs.length,d,g,e=!1,f,l;for(l=0;l<b;l++){g=this.valueAxes[l];var k=g.stackType;if("100%"==k||"regular"==k)for(e=!1,f=0;f<c;f++)d=this.graphs[f],d.tcc=1,d.valueAxis==g&&"column"==d.type&&(!e&&d.stackable&&(a++,e=!0),(!d.stackable&&d.clustered||d.newStack)&&a++,d.columnIndex=a-1,d.clustered||(d.columnIndex=
0));if("none"==k||"3d"==k){e=!1;for(f=0;f<c;f++)d=this.graphs[f],d.valueAxis==g&&"column"==d.type&&(d.clustered?(d.tcc=1,d.newStack&&(a=0),d.hidden||(d.columnIndex=a,a++)):d.hidden||(e=!0,d.tcc=1,d.columnIndex=0));e&&0===a&&(a=1)}if("3d"==k){g=1;for(l=0;l<c;l++)d=this.graphs[l],d.newStack&&g++,d.depthCount=g,d.tcc=a;a=g}}return a},parseData:function(){e.AmSerialChart.base.parseData.call(this);this.parseSerialData(this.dataProvider)},getCategoryIndexByValue:function(a){var b=this.chartData,c;for(c=
0;c<b.length;c++)if(b[c].category==a)return c},handleScrollbarZoom:function(a){this.zoomedByScrollbar=!0;this.zoom(a.start,a.end)},dispatchTimeZoomEvent:function(){if(this.drawGraphs&&(this.prevStartTime!=this.startTime||this.prevEndTime!=this.endTime)){var a={type:"zoomed"};a.startDate=new Date(this.startTime);a.endDate=new Date(this.endTime);a.startIndex=this.start;a.endIndex=this.end;this.startIndex=this.start;this.endIndex=this.end;this.startDate=a.startDate;this.endDate=a.endDate;this.prevStartTime=
this.startTime;this.prevEndTime=this.endTime;var b=this.categoryAxis,c=e.extractPeriod(b.minPeriod).period,b=b.dateFormatsObject[c];a.startValue=e.formatDate(a.startDate,b,this);a.endValue=e.formatDate(a.endDate,b,this);a.chart=this;a.target=this;this.fire(a)}},dispatchIndexZoomEvent:function(){if(this.drawGraphs&&(this.prevStartIndex!=this.start||this.prevEndIndex!=this.end)){this.startIndex=this.start;this.endIndex=this.end;var a=this.chartData;if(e.ifArray(a)&&!isNaN(this.start)&&!isNaN(this.end)){var b=
{chart:this,target:this,type:"zoomed"};b.startIndex=this.start;b.endIndex=this.end;b.startValue=a[this.start].category;b.endValue=a[this.end].category;this.categoryAxis.parseDates&&(this.startTime=a[this.start].time,this.endTime=a[this.end].time,b.startDate=new Date(this.startTime),b.endDate=new Date(this.endTime));this.prevStartIndex=this.start;this.prevEndIndex=this.end;this.fire(b)}}},updateLegendValues:function(){this.legend&&this.legend.updateValues()},getClosestIndex:function(a,b,c,d,g,e){0>
g&&(g=0);e>a.length-1&&(e=a.length-1);var f=g+Math.round((e-g)/2),l=a[f][b];return c==l?f:1>=e-g?d?g:Math.abs(a[g][b]-c)<Math.abs(a[e][b]-c)?g:e:c==l?f:c<l?this.getClosestIndex(a,b,c,d,g,f):this.getClosestIndex(a,b,c,d,f,e)},zoomToIndexes:function(a,b){var c=this.chartData;if(c){var d=c.length;0<d&&(0>a&&(a=0),b>d-1&&(b=d-1),d=this.categoryAxis,d.parseDates&&!d.equalSpacing?this.zoom(c[a].time,this.getEndTime(c[b].time)):this.zoom(a,b))}},zoomToDates:function(a,b){var c=this.chartData;if(c)if(this.categoryAxis.equalSpacing){var d=
this.getClosestIndex(c,"time",a.getTime(),!0,0,c.length);b=e.resetDateToMin(b,this.categoryAxis.minPeriod,1);c=this.getClosestIndex(c,"time",b.getTime(),!1,0,c.length);this.zoom(d,c)}else this.zoom(a.getTime(),b.getTime())},zoomToCategoryValues:function(a,b){this.chartData&&this.zoom(this.getCategoryIndexByValue(a),this.getCategoryIndexByValue(b))},formatPeriodString:function(a,b){if(b){var c=["value","open","low","high","close"],d="value open low high close average sum count".split(" "),g=b.valueAxis,
h=this.chartData,f=b.numberFormatter;f||(f=this.nf);for(var l=0;l<c.length;l++){for(var k=c[l],m=0,p=0,n,r,w,y,u,q=0,E=0,v,t,x,B,A,G=this.start;G<=this.end;G++){var D=h[G];if(D){var C=D.axes[g.id].graphs[b.id];if(C){if(C.values){var z=C.values[k],D=D.x.categoryAxis;if(this.rotate){if(0>D||D>C.graph.height)z=NaN}else if(0>D||D>C.graph.width)z=NaN;if(!isNaN(z)){isNaN(n)&&(n=z);r=z;if(isNaN(w)||w>z)w=z;if(isNaN(y)||y<z)y=z;u=e.getDecimals(m);D=e.getDecimals(z);m+=z;m=e.roundTo(m,Math.max(u,D));p++;u=
m/p}}if(C.percents&&(C=C.percents[k],!isNaN(C))){isNaN(v)&&(v=C);t=C;if(isNaN(x)||x>C)x=C;if(isNaN(B)||B<C)B=C;A=e.getDecimals(q);z=e.getDecimals(C);q+=C;q=e.roundTo(q,Math.max(A,z));E++;A=q/E}}}}q={open:v,close:t,high:B,low:x,average:A,sum:q,count:E};a=e.formatValue(a,{open:n,close:r,high:y,low:w,average:u,sum:m,count:p},d,f,k+"\\.",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=e.formatValue(a,q,d,this.pf,"percents\\."+k+"\\.")}}return a=e.cleanFromEmpty(a)},formatString:function(a,
b,c){if(b){var d=b.graph;if(void 0!==a){if(-1!=a.indexOf("[[category]]")){var g=b.serialDataItem.category;if(this.categoryAxis.parseDates){var h=this.balloonDateFormat,f=this.chartCursor;f&&f.categoryBalloonDateFormat&&(h=f.categoryBalloonDateFormat);h=e.formatDate(g,h,this);-1!=h.indexOf("fff")&&(h=e.formatMilliseconds(h,g));g=h}a=a.replace(/\[\[category\]\]/g,String(g))}g=d.numberFormatter;g||(g=this.nf);h=b.graph.valueAxis;(f=h.duration)&&!isNaN(b.values.value)&&(f=e.formatDuration(b.values.value,
f,"",h.durationUnits,h.maxInterval,g),a=a.replace(RegExp("\\[\\[value\\]\\]","g"),f));"date"==h.type&&(h=e.formatDate(new Date(b.values.value),d.dateFormat,this),f=RegExp("\\[\\[value\\]\\]","g"),a=a.replace(f,h),h=e.formatDate(new Date(b.values.open),d.dateFormat,this),f=RegExp("\\[\\[open\\]\\]","g"),a=a.replace(f,h));d="value open low high close total".split(" ");h=this.pf;a=e.formatValue(a,b.percents,d,h,"percents\\.");a=e.formatValue(a,b.values,d,g,"",this.usePrefixes,this.prefixesOfSmallNumbers,
this.prefixesOfBigNumbers);a=e.formatValue(a,b.values,["percents"],h);-1!=a.indexOf("[[")&&(a=e.formatDataContextValue(a,b.dataContext));-1!=a.indexOf("[[")&&b.graph.customData&&(a=e.formatDataContextValue(a,b.graph.customData));a=e.AmSerialChart.base.formatString.call(this,a,b,c)}return a}},updateChartCursor:function(){e.AmSerialChart.base.updateChartCursor.call(this);var a=this.chartCursor,b=this.categoryAxis;if(a){var c=a.categoryBalloonAlpha,d=a.categoryBalloonColor,g=a.color;void 0===d&&(d=a.cursorColor);
var h=a.valueZoomable,f=a.zoomable,l=a.valueLineEnabled;this.rotate?(a.vLineEnabled=l,a.hZoomEnabled=h,a.vZoomEnabled=f):(a.hLineEnabled=l,a.vZoomEnabled=h,a.hZoomEnabled=f);if(a.valueLineBalloonEnabled)for(l=0;l<this.valueAxes.length;l++)h=this.valueAxes[l],(f=h.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,h.balloon=f;else for(f=0;f<this.valueAxes.length;f++)h=this.valueAxes[f],h.balloon&&(h.balloon=null);b&&(b.balloonTextFunction=
a.categoryBalloonFunction,a.categoryLineAxis=b,b.balloonText=a.categoryBalloonText,a.categoryBalloonEnabled&&((f=b.balloon)||(f={}),f=e.extend(f,this.balloon,!0),f.fillColor=d,f.balloonColor=d,f.fillAlpha=c,f.borderColor=d,f.color=g,b.balloon=f),b.balloon&&(b.balloon.enabled=a.categoryBalloonEnabled))}},addChartScrollbar:function(a){e.callMethod("destroy",[this.chartScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarZoom));this.rotate?void 0===a.width&&(a.width=a.scrollbarHeight):
void 0===a.height&&(a.height=a.scrollbarHeight);a.gridAxis=this.categoryAxis;this.chartScrollbar=a},addValueScrollbar:function(a){e.callMethod("destroy",[this.valueScrollbar]);a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarValueZoom),this.listenTo(a,"zoomStarted",this.handleCursorZoomStarted));var b=a.scrollbarHeight;this.rotate?void 0===a.height&&(a.height=b):void 0===a.width&&(a.width=b);a.gridAxis||(a.gridAxis=this.valueAxes[0]);a.valueAxes=this.valueAxes;this.valueScrollbar=a},
removeChartScrollbar:function(){e.callMethod("destroy",[this.chartScrollbar]);this.chartScrollbar=null},removeValueScrollbar:function(){e.callMethod("destroy",[this.valueScrollbar]);this.valueScrollbar=null},handleReleaseOutside:function(a){e.AmSerialChart.base.handleReleaseOutside.call(this,a);e.callMethod("handleReleaseOutside",[this.chartScrollbar,this.valueScrollbar])},update:function(){e.AmSerialChart.base.update.call(this);this.chartScrollbar&&this.chartScrollbar.update&&this.chartScrollbar.update();
this.valueScrollbar&&this.valueScrollbar.update&&this.valueScrollbar.update()},processScrollbars:function(){e.AmSerialChart.base.processScrollbars.call(this);var a=this.valueScrollbar;a&&(a=e.processObject(a,e.ChartScrollbar,this.theme),a.id="valueScrollbar",this.addValueScrollbar(a))},handleValueAxisZoom:function(a){this.handleValueAxisZoomReal(a,this.valueAxes)},zoomOut:function(){e.AmSerialChart.base.zoomOut.call(this);this.zoom();this.syncGrid()},getNextItem:function(a){var b=a.index,c=this.chartData,
d=a.graph;if(b+1<c.length)for(b+=1;b<c.length;b++)if(a=c[b])if(a=a.axes[d.valueAxis.id].graphs[d.id],!isNaN(a.y))return a},handleCursorZoomReal:function(a,b,c,d,e){var h=e.target,f,l;this.rotate?(isNaN(a)||isNaN(b)||this.relativeZoomValueAxes(this.valueAxes,a,b)&&this.updateAfterValueZoom(),h.vZoomEnabled&&(f=e.start,l=e.end)):(isNaN(c)||isNaN(d)||this.relativeZoomValueAxes(this.valueAxes,c,d)&&this.updateAfterValueZoom(),h.hZoomEnabled&&(f=e.start,l=e.end));isNaN(f)||isNaN(l)||(a=this.categoryAxis,
a.parseDates&&!a.equalSpacing?this.zoomToDates(new Date(f),new Date(l)):this.zoomToIndexes(f,l))},handleCursorZoomStarted:function(){var a=this.valueAxes;if(a){var a=a[0],b=a.relativeStart,c=a.relativeEnd;a.reversed&&(b=1-a.relativeEnd,c=1-a.relativeStart);this.rotate?(this.startX0=b,this.endX0=c):(this.startY0=b,this.endY0=c)}this.categoryAxis&&(this.start0=this.start,this.end0=this.end,this.startTime0=this.startTime,this.endTime0=this.endTime)},fixCursor:function(){this.chartCursor&&this.chartCursor.fixPosition();
this.prevCursorItem=null},handleCursorMove:function(a){e.AmSerialChart.base.handleCursorMove.call(this,a);var b=a.target,c=this.categoryAxis;if(a.panning)this.handleCursorHide(a);else if(this.chartData&&!b.isHidden){var d=this.graphs;if(d){var g;g=c.xToIndex(this.rotate?a.y:a.x);if(g=this.chartData[g]){var h,f,l,k;if(b.oneBalloonOnly&&b.valueBalloonsEnabled){var m=Infinity;for(h=0;h<d.length;h++)if(f=d[h],f.balloon.enabled&&f.showBalloon&&!f.hidden){l=f.valueAxis.id;l=g.axes[l].graphs[f.id];l=l.y;
"top"==f.showBalloonAt&&(l=0);"bottom"==f.showBalloonAt&&(l=this.height);var p=b.mouseX,n=b.mouseY;l=this.rotate?Math.abs(p-l):Math.abs(n-l);l<m&&(m=l,k=f)}b.mostCloseGraph=k}if(this.prevCursorItem!=g||k!=this.prevMostCloseGraph){m=[];for(h=0;h<d.length;h++)f=d[h],l=f.valueAxis.id,l=g.axes[l].graphs[f.id],b.showNextAvailable&&isNaN(l.y)&&(l=this.getNextItem(l)),k&&f!=k?(f.showGraphBalloon(l,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.hide(0)):b.valueBalloonsEnabled?(f.balloon.showBullet=
b.bulletsEnabled,f.balloon.bulletSize=b.bulletSize/2,a.hideBalloons||(f.showGraphBalloon(l,b.pointer,!1,b.graphBulletSize,b.graphBulletAlpha),f.balloon.set&&m.push({balloon:f.balloon,y:f.balloon.pointToY}))):(f.currentDataItem=l,f.resizeBullet(l,b.graphBulletSize,b.graphBulletAlpha));b.avoidBalloonOverlapping&&this.arrangeBalloons(m);this.prevCursorItem=g}this.prevMostCloseGraph=k}}c.showBalloon(a.x,a.y,b.categoryBalloonDateFormat,a.skip);this.updateLegendValues()}},handleCursorHide:function(a){e.AmSerialChart.base.handleCursorHide.call(this,
a);a=this.categoryAxis;this.prevCursorItem=null;this.updateLegendValues();a&&a.hideBalloon();a=this.graphs;var b;for(b=0;b<a.length;b++)a[b].currentDataItem=null},handleCursorPanning:function(a){var b=a.target,c,d=a.deltaX,g=a.deltaY,h=a.delta2X,f=a.delta2Y;a=!1;if(this.rotate){isNaN(h)&&(h=d,a=!0);var l=this.endX0;c=this.startX0;var k=l-c,l=l-k*h,m=k;a||(m=0);a=e.fitToBounds(c-k*d,0,1-m)}else isNaN(f)&&(f=g,a=!0),l=this.endY0,c=this.startY0,k=l-c,l+=k*g,m=k,a||(m=0),a=e.fitToBounds(c+k*f,0,1-m);
c=e.fitToBounds(l,m,1);var p;b.valueZoomable&&(p=this.relativeZoomValueAxes(this.valueAxes,a,c));var n;c=this.categoryAxis;this.rotate&&(d=g,h=f);a=!1;isNaN(h)&&(h=d,a=!0);if(b.zoomable&&(0<Math.abs(d)||0<Math.abs(h)))if(c.parseDates&&!c.equalSpacing){if(f=this.startTime0,g=this.endTime0,c=g-f,h*=c,k=this.firstTime,l=this.lastTime,m=c,a||(m=0),a=Math.round(e.fitToBounds(f-c*d,k,l-m)),h=Math.round(e.fitToBounds(g-h,k+m,l)),this.startTime!=a||this.endTime!=h)n={chart:this,target:b,type:"zoomed",start:a,
end:h},this.skipZoomed=!0,b.fire(n),this.zoom(a,h),n=!0}else if(f=this.start0,g=this.end0,c=g-f,d=Math.round(c*d),h=Math.round(c*h),k=this.chartData.length-1,a||(c=0),a=e.fitToBounds(f-d,0,k-c),c=e.fitToBounds(g-h,c,k),this.start!=a||this.end!=c)this.skipZoomed=!0,b.fire({chart:this,target:b,type:"zoomed",start:a,end:c}),this.zoom(a,c),n=!0;!n&&p&&this.updateAfterValueZoom()},arrangeBalloons:function(a){var b=this.plotAreaHeight;a.sort(this.compareY);var c,d,e,h=this.plotAreaWidth,f=a.length;for(c=
0;c<f;c++)d=a[c].balloon,d.setBounds(0,0,h,b),d.restorePrevious(),d.draw(),b=d.yPos-3;a.reverse();for(c=0;c<f;c++){d=a[c].balloon;var b=d.bottom,l=d.bottom-d.yPos;0<c&&b-l<e+3&&(d.setBounds(0,e+3,h,e+l+3),d.restorePrevious(),d.draw());d.set&&d.set.show();e=d.bottom}},compareY:function(a,b){return a.y<b.y?1:-1}})})();(function(){var e=window.AmCharts;e.Cuboid=e.Class({construct:function(a,b,c,d,e,h,f,l,k,m,p,n,r,w,y,u,q){this.set=a.set();this.container=a;this.h=Math.round(c);this.w=Math.round(b);this.dx=d;this.dy=e;this.colors=h;this.alpha=f;this.bwidth=l;this.bcolor=k;this.balpha=m;this.dashLength=w;this.topRadius=u;this.pattern=y;this.rotate=r;this.bcn=q;r?0>b&&0===p&&(p=180):0>c&&270==p&&(p=90);this.gradientRotation=p;0===d&&0===e&&(this.cornerRadius=n);this.draw()},draw:function(){var a=this.set;a.clear();
var b=this.container,c=b.chart,d=this.w,g=this.h,h=this.dx,f=this.dy,l=this.colors,k=this.alpha,m=this.bwidth,p=this.bcolor,n=this.balpha,r=this.gradientRotation,w=this.cornerRadius,y=this.dashLength,u=this.pattern,q=this.topRadius,E=this.bcn,v=l,t=l;"object"==typeof l&&(v=l[0],t=l[l.length-1]);var x,B,A,G,D,C,z,L,M,Q=k;u&&(k=0);var F,H,I,J,K=this.rotate;if(0<Math.abs(h)||0<Math.abs(f))if(isNaN(q))z=t,t=e.adjustLuminosity(v,-.2),t=e.adjustLuminosity(v,-.2),x=e.polygon(b,[0,h,d+h,d,0],[0,f,f,0,0],
t,k,1,p,0,r),0<n&&(M=e.line(b,[0,h,d+h],[0,f,f],p,n,m,y)),B=e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],t,k,1,p,0,r),B.translate(h,f),0<n&&(A=e.line(b,[h,h],[f,f+g],p,n,m,y)),G=e.polygon(b,[0,0,h,h,0],[0,g,g+f,f,0],t,k,1,p,0,r),D=e.polygon(b,[d,d,d+h,d+h,d],[0,g,g+f,f,0],t,k,1,p,0,r),0<n&&(C=e.line(b,[d,d+h,d+h,d],[0,f,g+f,g],p,n,m,y)),t=e.adjustLuminosity(z,.2),z=e.polygon(b,[0,h,d+h,d,0],[g,g+f,g+f,g,g],t,k,1,p,0,r),0<n&&(L=e.line(b,[0,h,d+h],[g,g+f,g+f],p,n,m,y));else{var N,O,P;K?(N=g/2,t=h/2,P=g/2,O=
d+h/2,H=Math.abs(g/2),F=Math.abs(h/2)):(t=d/2,N=f/2,O=d/2,P=g+f/2+1,F=Math.abs(d/2),H=Math.abs(f/2));I=F*q;J=H*q;.1<F&&.1<F&&(x=e.circle(b,F,v,k,m,p,n,!1,H),x.translate(t,N));.1<I&&.1<I&&(z=e.circle(b,I,e.adjustLuminosity(v,.5),k,m,p,n,!1,J),z.translate(O,P))}k=Q;1>Math.abs(g)&&(g=0);1>Math.abs(d)&&(d=0);!isNaN(q)&&(0<Math.abs(h)||0<Math.abs(f))?(l=[v],l={fill:l,stroke:p,"stroke-width":m,"stroke-opacity":n,"fill-opacity":k},K?(k="M0,0 L"+d+","+(g/2-g/2*q),m=" B",0<d&&(m=" A"),e.VML?(k+=m+Math.round(d-
I)+","+Math.round(g/2-J)+","+Math.round(d+I)+","+Math.round(g/2+J)+","+d+",0,"+d+","+g,k=k+(" L0,"+g)+(m+Math.round(-F)+","+Math.round(g/2-H)+","+Math.round(F)+","+Math.round(g/2+H)+",0,"+g+",0,0")):(k+="A"+I+","+J+",0,0,0,"+d+","+(g-g/2*(1-q))+"L0,"+g,k+="A"+F+","+H+",0,0,1,0,0"),F=90):(m=d/2-d/2*q,k="M0,0 L"+m+","+g,e.VML?(k="M0,0 L"+m+","+g,m=" B",0>g&&(m=" A"),k+=m+Math.round(d/2-I)+","+Math.round(g-J)+","+Math.round(d/2+I)+","+Math.round(g+J)+",0,"+g+","+d+","+g,k+=" L"+d+",0",k+=m+Math.round(d/
2+F)+","+Math.round(H)+","+Math.round(d/2-F)+","+Math.round(-H)+","+d+",0,0,0"):(k+="A"+I+","+J+",0,0,0,"+(d-d/2*(1-q))+","+g+"L"+d+",0",k+="A"+F+","+H+",0,0,1,0,0"),F=180),b=b.path(k).attr(l),b.gradient("linearGradient",[v,e.adjustLuminosity(v,-.3),e.adjustLuminosity(v,-.3),v],F),K?b.translate(h/2,0):b.translate(0,f/2)):b=0===g?e.line(b,[0,d],[0,0],p,n,m,y):0===d?e.line(b,[0,0],[0,g],p,n,m,y):0<w?e.rect(b,d,g,l,k,m,p,n,w,r,y):e.polygon(b,[0,0,d,d,0],[0,g,g,0,0],l,k,m,p,n,r,!1,y);d=isNaN(q)?0>g?[x,
M,B,A,G,D,C,z,L,b]:[z,L,B,A,G,D,x,M,C,b]:K?0<d?[x,b,z]:[z,b,x]:0>g?[x,b,z]:[z,b,x];e.setCN(c,b,E+"front");e.setCN(c,B,E+"back");e.setCN(c,z,E+"top");e.setCN(c,x,E+"bottom");e.setCN(c,G,E+"left");e.setCN(c,D,E+"right");for(x=0;x<d.length;x++)if(B=d[x])a.push(B),e.setCN(c,B,E+"element");u&&b.pattern(u,NaN,c.path)},width:function(a){isNaN(a)&&(a=0);this.w=Math.round(a);this.draw()},height:function(a){isNaN(a)&&(a=0);this.h=Math.round(a);this.draw()},animateHeight:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rh=c.h;c.frame=0;c.height(1);setTimeout(function(){c.updateHeight.call(c)},1E3/e.updateRate)},updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateHeight.call(a)}):setTimeout(function(){a.updateHeight.call(a)},1E3/e.updateRate)):(a.height(a.rh),a.animationFinished=!0)},animateWidth:function(a,b){var c=this;c.animationFinished=
!1;c.easing=b;c.totalFrames=a*e.updateRate;c.rw=c.w;c.frame=0;c.width(1);setTimeout(function(){c.updateWidth.call(c)},1E3/e.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b?(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),window.requestAnimationFrame?window.requestAnimationFrame(function(){a.updateWidth.call(a)}):setTimeout(function(){a.updateWidth.call(a)},1E3/e.updateRate)):(a.width(a.rw),a.animationFinished=!0)}})})();(function(){var e=window.AmCharts;e.CategoryAxis=e.Class({inherits:e.AxisBase,construct:function(a){this.cname="CategoryAxis";e.CategoryAxis.base.construct.call(this,a);this.minPeriod="DD";this.equalSpacing=this.parseDates=!1;this.position="bottom";this.startOnAxis=!1;this.gridPosition="middle";this.safeDistance=30;this.stickBalloonToCategory=!1;e.applyTheme(this,a,this.cname)},draw:function(){e.CategoryAxis.base.draw.call(this);this.generateDFObject();var a=this.chart.chartData;this.data=a;this.labelRotationR=
this.labelRotation;this.type=null;if(e.ifArray(a)){var b,c=this.chart;"scrollbar"!=this.id?(e.setCN(c,this.set,"category-axis"),e.setCN(c,this.labelsSet,"category-axis"),e.setCN(c,this.axisLine.axisSet,"category-axis")):this.bcn=this.id+"-";var d=this.start,g=this.labelFrequency,h=0,f=this.end-d+1,l=this.gridCountR,k=this.showFirstLabel,m=this.showLastLabel,p,n="",n=e.extractPeriod(this.minPeriod),r=e.getPeriodDuration(n.period,n.count),w,y,u,q,E=this.rotate;p=this.firstDayOfWeek;var v=this.boldPeriodBeginning;
b=e.resetDateToMin(new Date(a[a.length-1].time+1.05*r),this.minPeriod,1,p).getTime();this.firstTime=c.firstTime;var t;this.endTime>b&&(this.endTime=b);q=this.minorGridEnabled;y=this.gridAlpha;var x=0,B=0;if(this.widthField)for(b=this.start;b<=this.end;b++)if(t=this.data[b]){var A=Number(this.data[b].dataContext[this.widthField]);isNaN(A)||(x+=A,t.widthValue=A)}if(this.parseDates&&!this.equalSpacing)this.lastTime=a[a.length-1].time,this.maxTime=e.resetDateToMin(new Date(this.lastTime+1.05*r),this.minPeriod,
1,p).getTime(),this.timeDifference=this.endTime-this.startTime,this.parseDatesDraw();else if(!this.parseDates){if(this.cellWidth=this.getStepWidth(f),f<l&&(l=f),h+=this.start,this.stepWidth=this.getStepWidth(f),0<l)for(v=Math.floor(f/l),r=this.chooseMinorFrequency(v),f=h,f/2==Math.round(f/2)&&f--,0>f&&(f=0),l=0,this.widthField&&(f=this.start),this.end-f+1>=this.autoRotateCount&&(this.labelRotationR=this.autoRotateAngle),b=f;b<=this.end+2;b++){p=!1;0<=b&&b<this.data.length?(w=this.data[b],n=w.category,
p=w.forceShow):n="";if(q&&!isNaN(r))if(b/r==Math.round(b/r)||p)b/v==Math.round(b/v)||p||(this.gridAlpha=this.minorGridAlpha,n=void 0);else continue;else if(b/v!=Math.round(b/v)&&!p)continue;f=this.getCoordinate(b-h);u=0;"start"==this.gridPosition&&(f-=this.cellWidth/2,u=this.cellWidth/2);p=!0;a=u;"start"==this.tickPosition&&(a=0,p=!1,u=0);if(b==d&&!k||b==this.end&&!m)n=void 0;Math.round(l/g)!=l/g&&(n=void 0);l++;A=this.cellWidth;E&&(A=NaN,this.ignoreAxisWidth||!c.autoMargins)&&(A="right"==this.position?
c.marginRight:c.marginLeft,A-=this.tickLength+10);this.labelFunction&&w&&(n=this.labelFunction(n,w,this));n=e.fixBrakes(n);t=!1;this.boldLabels&&(t=!0);b>this.end&&"start"==this.tickPosition&&(n=" ");this.rotate&&this.inside&&(u-=2);isNaN(w.widthValue)||(w.percentWidthValue=w.widthValue/x*100,A=this.rotate?this.height*w.widthValue/x:this.width*w.widthValue/x,f=B,B+=A,u=A/2);u=new this.axisItemRenderer(this,f,n,p,A,u,void 0,t,a,!1,w.labelColor,w.className);u.serialDataItem=w;this.pushAxisItem(u);this.gridAlpha=
y}}else if(this.parseDates&&this.equalSpacing){h=this.start;this.startTime=this.data[this.start].time;this.endTime=this.data[this.end].time;this.timeDifference=this.endTime-this.startTime;b=this.choosePeriod(0);g=b.period;w=b.count;b=e.getPeriodDuration(g,w);b<r&&(g=n.period,w=n.count,b=r);y=g;"WW"==y&&(y="DD");this.currentDateFormat=this.dateFormatsObject[y];this.stepWidth=this.getStepWidth(f);l=Math.ceil(this.timeDifference/b)+1;n=e.resetDateToMin(new Date(this.startTime-b),g,w,p).getTime();this.cellWidth=
this.getStepWidth(f);f=Math.round(n/b);d=-1;f/2==Math.round(f/2)&&(d=-2,n-=b);f=this.start;f/2==Math.round(f/2)&&f--;0>f&&(f=0);B=this.end+2;B>=this.data.length&&(B=this.data.length);a=!1;a=!k;this.previousPos=-1E3;20<this.labelRotationR&&(this.safeDistance=5);A=f;if(this.data[f].time!=e.resetDateToMin(new Date(this.data[f].time),g,w,p).getTime()){t=0;var G=n;for(b=f;b<B;b++)r=this.data[b].time,this.checkPeriodChange(g,w,r,G)&&(t++,2<=t&&(A=b,b=B),G=r)}q&&1<w&&(r=this.chooseMinorFrequency(w),e.getPeriodDuration(g,
r));if(0<this.gridCountR)for(b=f;b<B;b++)if(r=this.data[b].time,this.checkPeriodChange(g,w,r,n)&&b>=A){f=this.getCoordinate(b-this.start);q=!1;this.nextPeriod[y]&&(q=this.checkPeriodChange(this.nextPeriod[y],1,r,n,y))&&e.resetDateToMin(new Date(r),this.nextPeriod[y],1,p).getTime()!=r&&(q=!1);t=!1;q&&this.markPeriodChange?(q=this.dateFormatsObject[this.nextPeriod[y]],t=!0):q=this.dateFormatsObject[y];n=e.formatDate(new Date(r),q,c);if(b==d&&!k||b==l&&!m)n=" ";a?a=!1:(v||(t=!1),f-this.previousPos>this.safeDistance*
Math.cos(this.labelRotationR*Math.PI/180)&&(this.labelFunction&&(n=this.labelFunction(n,new Date(r),this,g,w,u)),this.boldLabels&&(t=!0),u=new this.axisItemRenderer(this,f,n,void 0,void 0,void 0,void 0,t),q=u.graphics(),this.pushAxisItem(u),q=q.getBBox().width,e.isModern||(q-=f),this.previousPos=f+q));u=n=r}}for(b=k=0;b<this.data.length;b++)if(t=this.data[b])this.parseDates&&!this.equalSpacing?(m=t.time,d=this.cellWidth,"MM"==this.minPeriod&&(d=864E5*e.daysInMonth(new Date(m))*this.stepWidth,t.cellWidth=
d),m=Math.round((m-this.startTime)*this.stepWidth+d/2)):m=this.getCoordinate(b-h),t.x[this.id]=m;if(this.widthField)for(b=this.start;b<=this.end;b++)t=this.data[b],d=t.widthValue,t.percentWidthValue=d/x*100,this.rotate?(m=this.height*d/x/2+k,k=this.height*d/x+k):(m=this.width*d/x/2+k,k=this.width*d/x+k),t.x[this.id]=m;x=this.guides.length;for(b=0;b<x;b++)if(k=this.guides[b],p=v=v=q=d=NaN,m=k.above,k.toCategory&&(v=c.getCategoryIndexByValue(k.toCategory),isNaN(v)||(d=this.getCoordinate(v-h),k.expand&&
(d+=this.cellWidth/2),u=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,k),this.pushAxisItem(u,m))),k.category&&(p=c.getCategoryIndexByValue(k.category),isNaN(p)||(q=this.getCoordinate(p-h),k.expand&&(q-=this.cellWidth/2),v=(d-q)/2,u=new this.axisItemRenderer(this,q,k.label,!0,NaN,v,k),this.pushAxisItem(u,m))),p=c.dataDateFormat,k.toDate&&(!p||k.toDate instanceof Date||(k.toDate=k.toDate.toString()+" |"),k.toDate=e.getDate(k.toDate,p),this.equalSpacing?(v=c.getClosestIndex(this.data,"time",k.toDate.getTime(),
!1,0,this.data.length-1),isNaN(v)||(d=this.getCoordinate(v-h))):d=(k.toDate.getTime()-this.startTime)*this.stepWidth,u=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,k),this.pushAxisItem(u,m)),k.date&&(!p||k.date instanceof Date||(k.date=k.date.toString()+" |"),k.date=e.getDate(k.date,p),this.equalSpacing?(p=c.getClosestIndex(this.data,"time",k.date.getTime(),!1,0,this.data.length-1),isNaN(p)||(q=this.getCoordinate(p-h))):q=(k.date.getTime()-this.startTime)*this.stepWidth,v=(d-q)/2,p=!0,k.toDate&&
(p=!1),u="H"==this.orientation?new this.axisItemRenderer(this,q,k.label,p,2*v,NaN,k):new this.axisItemRenderer(this,q,k.label,!1,NaN,v,k),this.pushAxisItem(u,m)),0<d||0<q){p=!1;if(this.rotate){if(d<this.height||q<this.height)p=!0}else if(d<this.width||q<this.width)p=!0;p&&(d=new this.guideFillRenderer(this,q,d,k),q=d.graphics(),this.pushAxisItem(d,m),k.graphics=q,q.index=b,k.balloonText&&this.addEventListeners(q,k))}if(c=c.chartCursor)E?c.fixHeight(this.cellWidth):(c.fixWidth(this.cellWidth),c.fullWidth&&
this.balloon&&(this.balloon.minWidth=this.cellWidth));this.previousHeight=D}this.axisCreated=!0;this.set.translate(this.x,this.y);this.labelsSet.translate(this.x,this.y);this.labelsSet.show();this.positionTitle();(E=this.axisLine.set)&&E.toFront();var D=this.getBBox().height;2<D-this.previousHeight&&this.autoWrap&&!this.parseDates&&(this.axisCreated=this.chart.marginsUpdated=!1)},xToIndex:function(a){var b=this.data,c=this.chart,d=c.rotate,g=this.stepWidth,h;if(this.parseDates&&!this.equalSpacing)a=
this.startTime+Math.round(a/g)-this.minDuration()/2,h=c.getClosestIndex(b,"time",a,!1,this.start,this.end+1);else if(this.widthField)for(c=Infinity,g=this.start;g<=this.end;g++){var f=this.data[g];f&&(f=Math.abs(f.x[this.id]-a),f<c&&(c=f,h=g))}else this.startOnAxis||(a-=g/2),h=this.start+Math.round(a/g);h=e.fitToBounds(h,0,b.length-1);var l;b[h]&&(l=b[h].x[this.id]);d?l>this.height+1&&h--:l>this.width+1&&h--;0>l&&h++;return h=e.fitToBounds(h,0,b.length-1)},dateToCoordinate:function(a){return this.parseDates&&
!this.equalSpacing?(a.getTime()-this.startTime)*this.stepWidth:this.parseDates&&this.equalSpacing?(a=this.chart.getClosestIndex(this.data,"time",a.getTime(),!1,0,this.data.length-1),this.getCoordinate(a-this.start)):NaN},categoryToCoordinate:function(a){if(this.chart){if(this.parseDates)return this.dateToCoordinate(new Date(a));a=this.chart.getCategoryIndexByValue(a);if(!isNaN(a))return this.getCoordinate(a-this.start)}else return NaN},coordinateToDate:function(a){return this.equalSpacing?(a=this.xToIndex(a),
new Date(this.data[a].time)):new Date(this.startTime+a/this.stepWidth)},coordinateToValue:function(a){a=this.xToIndex(a);if(a=this.data[a])return this.parseDates?a.time:a.category},getCoordinate:function(a){a*=this.stepWidth;this.startOnAxis||(a+=this.stepWidth/2);return Math.round(a)},formatValue:function(a,b){b||(b=this.currentDateFormat);this.parseDates&&(a=e.formatDate(new Date(a),b,this.chart));return a},showBalloonAt:function(a){a=this.parseDates?this.dateToCoordinate(new Date(a)):this.categoryToCoordinate(a);
return this.adjustBalloonCoordinate(a)},formatBalloonText:function(a,b,c){var d="",g="",h=this.chart,f=this.data[b];if(f)if(this.parseDates)d=e.formatDate(f.category,c,h),b=e.changeDate(new Date(f.category),this.minPeriod,1),g=e.formatDate(b,c,h),-1!=d.indexOf("fff")&&(d=e.formatMilliseconds(d,f.category),g=e.formatMilliseconds(g,b));else{var l;this.data[b+1]&&(l=this.data[b+1]);d=e.fixNewLines(f.category);l&&(g=e.fixNewLines(l.category))}a=a.replace(/\[\[category\]\]/g,String(d));return a=a.replace(/\[\[toCategory\]\]/g,
String(g))},adjustBalloonCoordinate:function(a,b){var c=this.xToIndex(a),d=this.chart.chartCursor;if(this.stickBalloonToCategory){var e=this.data[c];e&&(a=e.x[this.id]);this.stickBalloonToStart&&(a-=this.cellWidth/2);var h=0;if(d){var f=d.limitToGraph;if(f){var l=f.valueAxis.id;f.hidden||(h=e.axes[l].graphs[f.id].y)}this.rotate?("left"==this.position?(f&&(h-=d.width),0<h&&(h=0)):0>h&&(h=0),d.fixHLine(a,h)):("top"==this.position?(f&&(h-=d.height),0<h&&(h=0)):0>h&&(h=0),d.fixVLine(a,h))}}d&&!b&&(d.setIndex(c),
this.parseDates&&d.setTimestamp(this.coordinateToDate(a).getTime()));return a}})})();

AmCharts.translations.dataLoader={},AmCharts.addInitHandler(function(a){function e(b,d,g,h){void 0===h&&(h="dataProvider"),g.showCurtain&&l(void 0,g.noStyles),c.remaining++,c.percentLoaded[b]=0,void 0!==g.progress&&"function"==typeof g.progress&&void 0===g._progress&&(g._progress=g.progress,g.progress=function(a){c.percentLoaded[b]=a;var d=0,e=0;for(var f in c.percentLoaded)c.percentLoaded.hasOwnProperty(f)&&(e++,d+=c.percentLoaded[f]);var h=Math.round(d/e*100)/100;g._progress.call(this,h,Math.round(100*a)/100,b)}),AmCharts.loadFile(b,g,function(i){if(!1===i)n(g.error,g,a),k(AmCharts.__("Error loading the file",a.language)+": "+b,!1,g);else{switch(void 0===g.format&&(g.format="json"),g.format=g.format.toLowerCase(),g.format){case"json":if(d[h]=AmCharts.parseJSON(i),!1===d[h])return n(g.error,g,a),k(AmCharts.__("Error parsing JSON file",a.language)+": "+c.url,!1,g),void(d[h]=[]);d[h]=f(d[h],g),n(g.load,g,a);break;case"csv":if(d[h]=AmCharts.parseCSV(i,g),!1===d[h])return n(g.error,g,a),k(AmCharts.__("Error parsing CSV file",a.language)+": "+c.url,!1,g),void(d[h]=[]);d[h]=f(d[h],g),n(g.load,g,a);break;default:return n(g.error,g,a),void k(AmCharts.__("Unsupported data format",a.language)+": "+g.format,!1,g.noStyles)}if(c.remaining--,0===c.remaining&&(n(g.complete,a),g.async))if("map"===a.type)a.validateNow(!0),m();else if("gauge"!==a.type&&a.addListener("dataUpdated",function(b){"stock"!==a.type||g.reloading||void 0===a.periodSelector||a.periodSelector.setDefaultPeriod(),m(),a.events.dataUpdated.pop()}),a.validateData(),"gauge"===a.type&&m(),c.startDuration)if("stock"===a.type){a.panelsSettings.startDuration=c.startDuration;for(var j=0;j<a.panels.length;j++)a.panels[j].startDuration=c.startDuration,a.panels[j].animateAgain()}else a.startDuration=c.startDuration,void 0!==a.animateAgain&&a.animateAgain();g.reload&&(g.timeout&&clearTimeout(g.timeout),g.timeout=setTimeout(e,1e3*g.reload,b,d,g),g.reloading=!0)}})}function f(b,d){if(void 0===d.postProcess||!h(d.postProcess))return b;try{return d.postProcess.call(c,b,d,a)}catch(e){return k(AmCharts.__("Error loading file",a.language)+": "+d.url,!1,d),b}}function g(a){return"object"==typeof a}function h(a){return"function"==typeof a}function i(a){for(var b in d)d.hasOwnProperty(b)&&j(a,b,d[b])}function j(a,b,c){void 0===a[b]&&(a[b]=c)}function k(a,b,c){c.showErrors?l(a,c.noStyles):(m(),console.log(a))}function l(b,d){m(),void 0===b&&(b=AmCharts.__("Loading data...",a.language));var e=document.createElement("div");if(e.setAttribute("id",a.div.id+"-curtain"),e.className="amcharts-dataloader-curtain",!0!==d){e.style.position="absolute",e.style.top=0,e.style.left=0,e.style.width=(void 0!==a.realWidth?a.realWidth:a.divRealWidth)+"px",e.style.height=(void 0!==a.realHeight?a.realHeight:a.divRealHeight)+"px",e.style.textAlign="center",e.style.display="table",e.style.fontSize="20px";try{e.style.background="rgba(255, 255, 255, 0.3)"}catch(f){e.style.background="rgb(255, 255, 255)"}e.innerHTML='<div style="display: table-cell; vertical-align: middle;">'+b+"</div>"}else e.innerHTML=b;a.containerDiv.appendChild(e),c.curtain=e}function m(){try{void 0!==c.curtain&&a.containerDiv.removeChild(c.curtain)}catch(b){}c.curtain=void 0}function n(a,b,d,e){"function"==typeof a&&a.call(c,b,d,e)}void 0!==a.dataLoader&&g(a.dataLoader)||(a.dataLoader={});var b=a.version.split(".");if(!(Number(b[0])<3||3===Number(b[0])&&Number(b[1])<13)){var c=a.dataLoader;c.remaining=0,c.percentLoaded={};var d={async:!0,format:"json",showErrors:!0,showCurtain:!0,noStyles:!1,reload:0,timestamp:!1,delimiter:",",skip:0,skipEmpty:!0,emptyAs:void 0,useColumnNames:!1,init:!1,progress:!1,reverse:!1,reloading:!1,complete:!1,error:!1,numberFields:[],headers:[],chart:a};c.loadData=function(){if("stock"===a.type)setTimeout(function(){0>a.panelsSettings.startDuration&&(c.startDuration=a.panelsSettings.startDuration,a.panelsSettings.startDuration=0);for(var b=0;b<a.dataSets.length;b++){var d=a.dataSets[b];void 0!==d.dataLoader&&void 0!==d.dataLoader.url&&(n(d.dataLoader.init,d.dataLoader,a),d.dataProvider=[],i(d.dataLoader),e(d.dataLoader.url,d,d.dataLoader,"dataProvider")),void 0!==d.eventDataLoader&&void 0!==d.eventDataLoader.url&&(n(d.eventDataLoader.init,d.eventDataLoader,a),d.events=[],i(d.eventDataLoader),e(d.eventDataLoader.url,d,d.eventDataLoader,"stockEvents"))}},100);else{if(n(c.init,c,a),i(c),void 0===c.url)return;void 0!==a.startDuration&&0<a.startDuration&&(c.startDuration=a.startDuration,a.startDuration=0),"gauge"===a.type?(void 0===a.arrows&&(a.arrows=[]),e(c.url,a,c,"arrows")):(void 0===a.dataProvider&&(a.dataProvider="map"===a.type?{}:[]),e(c.url,a,c,"dataProvider"))}},c.loadData()}},["pie","serial","xy","funnel","radar","gauge","gantt","stock","map"]),void 0===AmCharts.__&&(AmCharts.__=function(a,b){return void 0!==b&&void 0!==AmCharts.translations.dataLoader[b]&&void 0!==AmCharts.translations.dataLoader[b][a]?AmCharts.translations.dataLoader[b][a]:a}),AmCharts.loadFile=function(a,b,c){"object"!=typeof b&&(b={}),void 0===b.async&&(b.async=!0);var d;d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");try{d.open("GET",b.timestamp?AmCharts.timestampUrl(a):a,b.async)}catch(e){c.call(this,!1)}if(void 0!==b.headers&&b.headers.length)for(var f=0;f<b.headers.length;f++){var g=b.headers[f];d.setRequestHeader(g.key,g.value)}void 0!==b.progress&&"function"==typeof b.progress&&(d.onprogress=function(a){var c=a.loaded/a.total*100;b.progress.call(this,c)}),d.onreadystatechange=function(){4===d.readyState&&404===d.status?c.call(this,!1):4===d.readyState&&200===d.status&&c.call(this,d.responseText)};try{d.send()}catch(e){c.call(this,!1)}},AmCharts.parseJSON=function(response){try{return void 0!==JSON?JSON.parse(response):eval(response)}catch(e){return!1}},AmCharts.parseCSV=function(a,b){var g,h,c=AmCharts.CSVToArray(a,b.delimiter),d=b.numberFields&&b.numberFields.length>0,e=[],f=[];if(b.useColumnNames){f=c.shift();for(var i=0;i<f.length;i++)g=f[i].replace(/^\s+|\s+$/gm,""),""===g&&(g="col"+i),f[i]=g;0<b.skip&&b.skip--}for(h=0;h<b.skip;h++)c.shift();for(var j;j=b.reverse?c.pop():c.shift();)if(!b.skipEmpty||1!==j.length||""!==j[0]){var k={};for(h=0;h<j.length;h++)g=void 0===f[h]?"col"+h:f[h],k[g]=""===j[h]?b.emptyAs:j[h],d&&-1!==b.numberFields.indexOf(g)&&(k[g]=Number(k[g]));e.push(k)}return e},AmCharts.CSVToArray=function(a,b){b=b||",";for(var c=new RegExp("(\\"+b+'|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\'+b+"\\r\\n]*))","gi"),d=[[]],e=null;e=c.exec(a);){var f=e[1];f.length&&f!==b&&d.push([]);var g;g=e[2]?e[2].replace(new RegExp('""',"g"),'"'):e[3],d[d.length-1].push(g)}return d},AmCharts.timestampUrl=function(a){var b=a.split("?");return 1===b.length?b[1]=(new Date).getTime():b[1]+="&"+(new Date).getTime(),b.join("?")};
AmCharts.addInitHandler(function(n){"use strict";var u,t;if(n.responsive!==undefined&&n.responsive.ready!==!0&&n.responsive.enabled===!0&&(u=n.version.split("."),!(u.length<2)&&!(Number(u[0])<3)&&(Number(u[0])!==3||!(Number(u[1])<13)))){t=n.responsive;t.ready=!0;t.currentRules={};t.overridden=[];var e={pie:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:150,overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:150,overrides:{legend:{enabled:!1}}},{maxWidth:400,overrides:{labelsEnabled:!1}},{maxWidth:100,overrides:{legend:{enabled:!1}}},{maxHeight:350,overrides:{pullOutRadius:0}},{maxHeight:200,overrides:{titles:{enabled:!1},labelsEnabled:!1}},{maxWidth:60,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,radius:"50%",innerRadius:0,balloon:{enabled:!1},legend:{enabled:!1}}},{maxHeight:60,overrides:{marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,radius:"50%",innerRadius:0,balloon:{enabled:!1},legend:{enabled:!1}}}],funnel:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:150,overrides:{legend:{enabled:!1}}},{maxHeight:500,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:500,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:150,overrides:{legend:{enabled:!1}}},{maxWidth:400,overrides:{labelsEnabled:!1,marginLeft:10,marginRight:10,legend:{enabled:!1}}},{maxHeight:350,overrides:{pullOutRadius:0,legend:{enabled:!1}}},{maxHeight:300,overrides:{titles:{enabled:!1}}}],radar:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:150,overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:150,overrides:{legend:{enabled:!1}}},{maxWidth:300,overrides:{labelsEnabled:!1}},{maxWidth:200,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,radius:"50%",titles:{enabled:!1},valueAxes:{labelsEnabled:!1,radarCategoriesEnabled:!1}}},{maxHeight:300,overrides:{labelsEnabled:!1}},{maxHeight:200,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,radius:"50%",titles:{enabled:!1},valueAxes:{radarCategoriesEnabled:!1}}},{maxHeight:100,overrides:{valueAxes:{labelsEnabled:!1}}}],gauge:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:150,overrides:{legend:{enabled:!1}}},{maxHeight:500,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:500,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:150,overrides:{legend:{enabled:!1}}},{maxWidth:200,overrides:{titles:{enabled:!1},allLabels:{enabled:!1},axes:{labelsEnabled:!1}}},{maxHeight:200,overrides:{titles:{enabled:!1},allLabels:{enabled:!1},axes:{labelsEnabled:!1}}}],serial:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:100,overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:100,overrides:{legend:{enabled:!1}}},{maxWidth:350,overrides:{autoMarginOffset:0,graphs:{hideBulletsCount:10}}},{maxWidth:350,rotate:!1,overrides:{marginLeft:10,marginRight:10,valueAxes:{ignoreAxisWidth:!0,inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1},graphs:{bullet:"none"}}},{maxWidth:350,rotate:!0,overrides:{marginLeft:10,marginRight:10,categoryAxis:{ignoreAxisWidth:!0,inside:!0,title:""}}},{maxWidth:200,rotate:!1,overrides:{marginLeft:10,marginRight:10,marginTop:10,marginBottom:10,categoryAxis:{ignoreAxisWidth:!0,labelsEnabled:!1,inside:!0,title:"",guides:{inside:!0}},valueAxes:{ignoreAxisWidth:!0,labelsEnabled:!1,axisAlpha:0,guides:{label:""}},legend:{enabled:!1}}},{maxWidth:200,rotate:!0,overrides:{chartScrollbar:{scrollbarHeight:4,graph:"",resizeEnabled:!1},categoryAxis:{labelsEnabled:!1,axisAlpha:0,guides:{label:""}},legend:{enabled:!1}}},{maxWidth:100,rotate:!1,overrides:{valueAxes:{gridAlpha:0}}},{maxWidth:100,rotate:!0,overrides:{categoryAxis:{gridAlpha:0}}},{maxHeight:300,overrides:{autoMarginOffset:0,graphs:{hideBulletsCount:10}}},{maxHeight:200,rotate:!1,overrides:{marginTop:10,marginBottom:10,categoryAxis:{ignoreAxisWidth:!0,inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1}}},{maxHeight:200,rotate:!0,overrides:{marginTop:10,marginBottom:10,valueAxes:{ignoreAxisWidth:!0,inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1},graphs:{bullet:"none"}}},{maxHeight:150,rotate:!1,overrides:{titles:{enabled:!1},chartScrollbar:{scrollbarHeight:4,graph:"",resizeEnabled:!1},categoryAxis:{labelsEnabled:!1,ignoreAxisWidth:!0,axisAlpha:0,guides:{label:""}}}},{maxHeight:150,rotate:!0,overrides:{titles:{enabled:!1},valueAxes:{labelsEnabled:!1,ignoreAxisWidth:!0,axisAlpha:0,guides:{label:""}}}},{maxHeight:100,rotate:!1,overrides:{valueAxes:{labelsEnabled:!1,ignoreAxisWidth:!0,axisAlpha:0,gridAlpha:0,guides:{label:""}}}},{maxHeight:100,rotate:!0,overrides:{categoryAxis:{labelsEnabled:!1,ignoreAxisWidth:!0,axisAlpha:0,gridAlpha:0,guides:{label:""}}}},{maxWidth:100,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,categoryAxis:{labelsEnabled:!1},valueAxes:{labelsEnabled:!1}}},{maxHeight:100,overrides:{autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,categoryAxis:{labelsEnabled:!1},valueAxes:{labelsEnabled:!1}}}],xy:[{maxWidth:550,legendPosition:"left",overrides:{legend:{enabled:!1}}},{maxWidth:550,legendPosition:"right",overrides:{legend:{enabled:!1}}},{maxWidth:100,overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"top",overrides:{legend:{enabled:!1}}},{maxHeight:350,legendPosition:"bottom",overrides:{legend:{enabled:!1}}},{maxHeight:100,overrides:{legend:{enabled:!1}}},{maxWidth:250,overrides:{autoMarginOffset:0,autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,valueAxes:{inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1},legend:{enabled:!1}}},{maxWidth:150,overrides:{valueyAxes:{labelsEnabled:!1,axisAlpha:0,gridAlpha:0,guides:{label:""}}}},{maxHeight:250,overrides:{autoMarginOffset:0,autoMargins:!1,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,valueAxes:{inside:!0,title:"",showFirstLabel:!1,showLastLabel:!1},legend:{enabled:!1}}},{maxWidth:150,overrides:{valueyAxes:{labelsEnabled:!1,axisAlpha:0,gridAlpha:0,guides:{label:""}}}}],stock:[{maxWidth:500,overrides:{dataSetSelector:{position:"top"},periodSelector:{position:"bottom"}}},{maxWidth:400,overrides:{dataSetSelector:{selectText:"",compareText:""},periodSelector:{periodsText:"",inputFieldsEnabled:!1}}}],map:[{maxWidth:200,overrides:{zoomControl:{zoomControlEnabled:!1},smallMap:{enabled:!1},valueLegend:{enabled:!1},dataProvider:{areas:{descriptionWindowWidth:160,descriptionWindowRight:10,descriptionWindowTop:10},images:{descriptionWindowWidth:160,descriptionWindowRight:10,descriptionWindowTop:10},lines:{descriptionWindowWidth:160,descriptionWindowRight:10,descriptionWindowTop:10}}}},{maxWidth:150,overrides:{dataProvider:{areas:{descriptionWindowWidth:110,descriptionWindowRight:10,descriptionWindowTop:10},images:{descriptionWindowWidth:110,descriptionWindowRight:10,descriptionWindowTop:10},lines:{descriptionWindowWidth:110,descriptionWindowLeft:10,descriptionWindowRight:10}}}},{maxHeight:200,overrides:{zoomControl:{zoomControlEnabled:!1},smallMap:{enabled:!1},valueLegend:{enabled:!1},dataProvider:{areas:{descriptionWindowHeight:160,descriptionWindowRight:10,descriptionWindowTop:10},images:{descriptionWindowHeight:160,descriptionWindowRight:10,descriptionWindowTop:10},lines:{descriptionWindowHeight:160,descriptionWindowRight:10,descriptionWindowTop:10}}}},{maxHeight:150,overrides:{dataProvider:{areas:{descriptionWindowHeight:110,descriptionWindowRight:10,descriptionWindowTop:10},images:{descriptionWindowHeight:110,descriptionWindowRight:10,descriptionWindowTop:10},lines:{descriptionWindowHeight:110,descriptionWindowLeft:10,descriptionWindowRight:10}}}}]},i=function(n){return n===null||n===undefined},o=function(n){return!i(n)&&Object.prototype.toString.call(n)==="[object Array]"},r=function(n){return n!==null&&typeof n=="object"},y=function(n,t){for(var i=0;i<n.length;i++)if(r(n[i])&&n[i].id===t)return n[i];return undefined},h=function(n){var i,t;if(!r(n))return n;if(o(n))return n.slice();i={};for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(i[t]=h(n[t]));return i},c="{F0578839-A214-4E2D-8D1B-44941ECE8332}_",l={},s=function(n,i,r){var u=c+i;u in n||(n[u]=i in n?n[i]:l);n[i]=h(r);t.overridden.push({object:n,property:i})},a=function(n,t){var i=n[c+t];i===l?delete n[t]:n[t]=i},p=function(){while(t.overridden.length>0){var n=t.overridden.pop();a(n.object,n.property)}},w=function(){n.dataChanged=!0;n.type!=="xy"&&(n.marginsUpdated=!1);n.zoomOutOnDataUpdate=!1;n.validateNow(!0);a(n,"zoomOutOnDataUpdate")},f=function(n,t){var h,e,u,p,l,c,w,a,v;if(!i(t))for(h in t)if(Object.prototype.hasOwnProperty.call(t,h)){if(e=n[h],u=t[h],i(e)){s(n,h,u);continue}if(o(e)){if(o(u)){if(e.length>0&&!r(e[0])||u.length>0&&!r(u[0])){s(n,h,u);continue}for(p=!0,l=0;l<u.length;l++)if(i(u[l])||i(u[l].id)){p=!1;break}if(p){for(c=0;c<u.length;c++){if(w=y(e,u[c].id),w===undefined)throw'could not find element to override in "'+h+'" with ID: '+u[c].id;f(w,u[c])}continue}if(u.length<=e.length){for(a=0;a<u.length;a++)f(e[a],u[a]);continue}throw"too many index-based overrides specified for object array property: "+h;}if(r(u)){for(v=0;v<e.length;v++)f(e[v],u);continue}throw"non-object override detected for array property: "+h;}if(r(e)){f(e,u);continue}s(n,h,u)}},v=function(){var s=n.divRealWidth,h=n.divRealHeight,o,u,r,c,e;if(s!==0&&h!==0){for(o=!1,u=0;u<t.rules.length;u++)r=t.rules[u],c=(r.minWidth===undefined||r.minWidth<=s)&&(r.maxWidth===undefined||r.maxWidth>=s)&&(r.minHeight===undefined||r.minHeight<=h)&&(r.maxHeight===undefined||r.maxHeight>=h)&&(r.rotate===undefined||r.rotate===!0&&n.rotate===!0||r.rotate===!1&&(n.rotate===undefined||n.rotate===!1))&&(r.legendPosition===undefined||n.legend!==undefined&&n.legend.position!==undefined&&n.legend.position===r.legendPosition),c?t.currentRules[u]===undefined&&(t.currentRules[u]=!0,o=!0):t.currentRules[u]!==undefined&&(t.currentRules[u]=undefined,o=!0);if(o){p();for(e in t.currentRules)if(Object.prototype.hasOwnProperty.call(t.currentRules,e)&&t.currentRules[e]!==undefined){if(i(t.rules[e]))throw"null or undefined rule in index: "+e;f(n,t.rules[e].overrides)}w()}}};e.gantt=e.serial;o(t.rules)?t.addDefaultRules!==!1&&(t.rules=e[n.type].concat(t.rules)):t.rules=e[n.type];s(n,"zoomOutOnDataUpdate",n.zoomOutOnDataUpdate);n.addListener("resized",v);n.addListener("init",v)}},["pie","serial","xy","funnel","radar","gauge","gantt","stock","map"]);
//# sourceMappingURL=responsive.min.js.map

/**
 * jqGrid English Translation
 * Tony Tomov tony@trirand.com
 * http://trirand.com/blog/ 
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/
/*global jQuery, define */
(function( factory ) {
	"use strict";
	if ( typeof define === "function" && define.amd ) {
		// AMD. Register as an anonymous module.
		define([
			"jquery",
			"../grid.base"
		], factory );
	} else {
		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

$.jgrid = $.jgrid || {};
if(!$.jgrid.hasOwnProperty("regional")) {
	$.jgrid.regional = [];
}
$.jgrid.regional["en"] = {
	defaults : {
		recordtext: "View {0} - {1} of {2}",
		emptyrecords: "No records to view",
		loadtext: "Loading...",
		savetext: "Saving...",
		pgtext : "Page {0} of {1}",
		pgfirst : "First Page",
		pglast : "Last Page",
		pgnext : "Next Page",
		pgprev : "Previous Page",
		pgrecs : "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		// mobile
		pagerCaption : "Grid::Page Settings",
		pageText : "Page:",
		recordPage : "Records per Page",
		nomorerecs : "No more records...",
		scrollPullup: "Pull up to load more...",
		scrollPulldown : "Pull down to refresh...",
		scrollRefresh : "Release to refresh..."
	},
	search : {
		caption: "Search...",
		Find: "Find",
		Reset: "Reset",
		odata: [{ oper:'eq', text:'equal'},{ oper:'ne', text:'not equal'},{ oper:'lt', text:'less'},{ oper:'le', text:'less or equal'},{ oper:'gt', text:'greater'},{ oper:'ge', text:'greater or equal'},{ oper:'bw', text:'begins with'},{ oper:'bn', text:'does not begin with'},{ oper:'in', text:'is in'},{ oper:'ni', text:'is not in'},{ oper:'ew', text:'ends with'},{ oper:'en', text:'does not end with'},{ oper:'cn', text:'contains'},{ oper:'nc', text:'does not contain'},{ oper:'nu', text:'is null'},{ oper:'nn', text:'is not null'}, {oper:'bt', text:'between'}],
		groupOps: [{ op: "AND", text: "all" },{ op: "OR",  text: "any" }],
		operandTitle : "Click to select search operation.",
		resetTitle : "Reset Search Value"
	},
	edit : {
		addCaption: "Add Record",
		editCaption: "Edit Record",
		bSubmit: "Submit",
		bCancel: "Cancel",
		bClose: "Close",
		saveData: "Data has been changed! Save changes?",
		bYes : "Yes",
		bNo : "No",
		bExit : "Cancel",
		msg: {
			required:"Field is required",
			number:"Please, enter valid number",
			minValue:"value must be greater than or equal to ",
			maxValue:"value must be less than or equal to",
			email: "is not a valid e-mail",
			integer: "Please, enter valid integer value",
			date: "Please, enter valid date value",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined : " is not defined!",
			novalue : " return value is required!",
			customarray : "Custom function should return array!",
			customfcheck : "Custom function should be present in case of custom checking!"
			
		}
	},
	view : {
		caption: "View Record",
		bClose: "Close"
	},
	del : {
		caption: "Delete",
		msg: "Delete selected record(s)?",
		bSubmit: "Delete",
		bCancel: "Cancel"
	},
	nav : {
		edittext: "",
		edittitle: "Edit selected row",
		addtext:"",
		addtitle: "Add new row",
		deltext: "",
		deltitle: "Delete selected row",
		searchtext: "",
		searchtitle: "Find records",
		refreshtext: "",
		refreshtitle: "Reload Grid",
		alertcap: "Warning",
		alerttext: "Please, select row",
		viewtext: "",
		viewtitle: "View selected row",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle : "Cancel row editing",
		selectcaption : "Actions..."
	},
	col : {
		caption: "Select columns",
		bSubmit: "Ok",
		bCancel: "Cancel"
	},
	errors : {
		errcap : "Error",
		nourl : "No url is set",
		norecords: "No records to process",
		model : "Length of colNames <> colModel!"
	},
	formatter : {
		integer : {thousandsSeparator: ",", defaultValue: '0'},
		number : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: '0.00'},
		currency : {decimalSeparator:".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix:"", defaultValue: '0.00'},
		date : {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
				"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
			],
			AmPm : ["am","pm","AM","PM"],
			S: function (j) {return j < 11 || j > 13 ? ['st', 'nd', 'rd', 'th'][Math.min((j - 1) % 10, 3)] : 'th';},
			srcformat: 'Y-m-d',
			newformat: 'n/j/Y',
			parseRe : /[#%\\\/:_;.,\t\s-]/,
			masks : {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
				// information about date, time, numbers and currency formats used in different countries
				// one should just convert the information in PHP format
				ISO8601Long:"Y-m-d H:i:s",
				ISO8601Short:"Y-m-d",
				// short date:
				//    n - Numeric representation of a month, without leading zeros
				//    j - Day of the month without leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				// example: 3/1/2012 which means 1 March 2012
				ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
				// long date:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
				// month day:
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
				// short time (without seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
				// long time (with seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
				SortableDateTime: "Y-m-d\\TH:i:s",
				UniversalSortableDateTime: "Y-m-d H:i:sO",
				// month with year
				//    Y - A full numeric representation of a year, 4 digits
				//    F - A full textual representation of a month
				YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
			},
			reformatAfterEdit : false,
			userLocalTime : false
		},
		baseLinkUrl: '',
		showAction: '',
		target: '',
		checkbox : {disabled:true},
		idName : 'id'
	},
	colmenu : {
		sortasc : "Sort Ascending",
		sortdesc : "Sort Descending",
		columns : "Columns",
		filter : "Filter",
		grouping : "Group By",
		ungrouping : "Ungroup",
		searchTitle : "Get items with value that:",
		freeze : "Freeze",
		unfreeze : "Unfreeze",
		reorder : "Move to reorder"
	}
};
}));

/**
*
* @license Guriddo jqGrid JS - v5.0.2 - 2016-03-03
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/

!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function($){"use strict";function _pivotfilter(a,b){var c,d,e,f=[];if(!this||"function"!=typeof a||a instanceof RegExp)throw new TypeError;for(e=this.length,c=0;e>c;c++)if(this.hasOwnProperty(c)&&(d=this[c],a.call(b,d,c,this))){f.push(d);break}return f}$.jgrid=$.jgrid||{},$.jgrid.hasOwnProperty("defaults")||($.jgrid.defaults={}),$.extend($.jgrid,{version:"5.1.0",htmlDecode:function(a){return a&&("&nbsp;"===a||"&#160;"===a||1===a.length&&160===a.charCodeAt(0))?"":a?String(a).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&quot;/g,'"').replace(/&amp;/g,"&"):a},htmlEncode:function(a){return a?String(a).replace(/&/g,"&amp;").replace(/\"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):a},template:function(a){var b,c=$.makeArray(arguments).slice(1),d=c.length;return null==a&&(a=""),a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,e){if(!isNaN(parseInt(e,10)))return c[parseInt(e,10)];for(b=0;d>b;b++)if($.isArray(c[b]))for(var f=c[b],g=f.length;g--;)if(e===f[g].nm)return f[g].v})},msie:"Microsoft Internet Explorer"===navigator.appName,msiever:function(){var a=-1,b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");return null!=c.exec(b)&&(a=parseFloat(RegExp.$1)),a},getCellIndex:function(a){var b=$(a);return b.is("tr")?-1:(b=(b.is("td")||b.is("th")?b:b.closest("td,th"))[0],$.jgrid.msie?$.inArray(b,b.parentNode.cells):b.cellIndex)},stripHtml:function(a){a=String(a);var b=/<("[^"]*"|'[^']*'|[^'">])*>/gi;return a?(a=a.replace(b,""),a&&"&nbsp;"!==a&&"&#160;"!==a?a.replace(/\"/g,"'"):""):a},stripPref:function(a,b){var c=$.type(a);return("string"===c||"number"===c)&&(a=String(a),b=""!==a?String(b).replace(String(a),""):b),b},parse:function(jsonString){var js=jsonString;return"while(1);"===js.substr(0,9)&&(js=js.substr(9)),"/*"===js.substr(0,2)&&(js=js.substr(2,js.length-4)),js||(js="{}"),$.jgrid.useJSON===!0&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(js):eval("("+js+")")},parseDate:function(a,b,c,d){var e,f,g,h=/\\.|[dDjlNSwzWFmMntLoYyaABgGhHisueIOPTZcrU]/g,i=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,j=/[^-+\dA-Z]/g,k=new RegExp("^/Date\\((([-+])?[0-9]+)(([-+])([0-9]{2})([0-9]{2}))?\\)/$"),l="string"==typeof b?b.match(k):null,m=function(a,b){for(a=String(a),b=parseInt(b,10)||2;a.length<b;)a="0"+a;return a},n={m:1,d:1,y:1970,h:0,i:0,s:0,u:0},o=0,p=function(a,b){return 0===a?12===b&&(b=0):12!==b&&(b+=12),b},q=0;if(void 0===d&&(d=$.jgrid.getRegional(this,"formatter.date")),void 0===d.parseRe&&(d.parseRe=/[#%\\\/:_;.,\t\s-]/),d.masks.hasOwnProperty(a)&&(a=d.masks[a]),b&&null!=b)if(isNaN(b-0)||"u"!==String(a).toLowerCase())if(b.constructor===Date)o=b;else if(null!==l)o=new Date(parseInt(l[1],10)),l[3]&&(q=60*Number(l[5])+Number(l[6]),q*="-"===l[4]?1:-1,q-=o.getTimezoneOffset(),o.setTime(Number(Number(o)+60*q*1e3)));else{for("ISO8601Long"===d.srcformat&&"Z"===b.charAt(b.length-1)&&(q-=(new Date).getTimezoneOffset()),b=String(b).replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe),a=a.replace(/\T/g,"#").replace(/\t/,"%").split(d.parseRe),f=0,g=a.length;g>f;f++){switch(a[f]){case"M":e=$.inArray(b[f],d.monthNames),-1!==e&&12>e&&(b[f]=e+1,n.m=b[f]);break;case"F":e=$.inArray(b[f],d.monthNames,12),-1!==e&&e>11&&(b[f]=e+1-12,n.m=b[f]);break;case"n":a[f]="m";break;case"j":a[f]="d";break;case"a":e=$.inArray(b[f],d.AmPm),-1!==e&&2>e&&b[f]===d.AmPm[e]&&(b[f]=e,n.h=p(b[f],n.h));break;case"A":e=$.inArray(b[f],d.AmPm),-1!==e&&e>1&&b[f]===d.AmPm[e]&&(b[f]=e-2,n.h=p(b[f],n.h));break;case"g":n.h=parseInt(b[f],10)}void 0!==b[f]&&(n[a[f].toLowerCase()]=parseInt(b[f],10))}if(n.f&&(n.m=n.f),0===n.m&&0===n.y&&0===n.d)return"&#160;";n.m=parseInt(n.m,10)-1;var r=n.y;r>=70&&99>=r?n.y=1900+n.y:r>=0&&69>=r&&(n.y=2e3+n.y),o=new Date(n.y,n.m,n.d,n.h,n.i,n.s,n.u),q>0&&o.setTime(Number(Number(o)+60*q*1e3))}else o=new Date(1e3*parseFloat(b));else o=new Date(n.y,n.m,n.d,n.h,n.i,n.s,n.u);if(d.userLocalTime&&0===q&&(q-=(new Date).getTimezoneOffset(),q>0&&o.setTime(Number(Number(o)+60*q*1e3))),void 0===c)return o;d.masks.hasOwnProperty(c)?c=d.masks[c]:c||(c="Y-m-d");var s=o.getHours(),t=o.getMinutes(),u=o.getDate(),v=o.getMonth()+1,w=o.getTimezoneOffset(),x=o.getSeconds(),y=o.getMilliseconds(),z=o.getDay(),A=o.getFullYear(),B=(z+6)%7+1,C=(new Date(A,v-1,u)-new Date(A,0,1))/864e5,D={d:m(u),D:d.dayNames[z],j:u,l:d.dayNames[z+7],N:B,S:d.S(u),w:z,z:C,W:5>B?Math.floor((C+B-1)/7)+1:Math.floor((C+B-1)/7)||((new Date(A-1,0,1).getDay()+6)%7<4?53:52),F:d.monthNames[v-1+12],m:m(v),M:d.monthNames[v-1],n:v,t:"?",L:"?",o:"?",Y:A,y:String(A).substring(2),a:12>s?d.AmPm[0]:d.AmPm[1],A:12>s?d.AmPm[2]:d.AmPm[3],B:"?",g:s%12||12,G:s,h:m(s%12||12),H:m(s),i:m(t),s:m(x),u:y,e:"?",I:"?",O:(w>0?"-":"+")+m(100*Math.floor(Math.abs(w)/60)+Math.abs(w)%60,4),P:"?",T:(String(o).match(i)||[""]).pop().replace(j,""),Z:"?",c:"?",r:"?",U:Math.floor(o/1e3)};return c.replace(h,function(a){return D.hasOwnProperty(a)?D[a]:a.substring(1)})},jqID:function(a){return String(a).replace(/[!"#$%&'()*+,.\/:; <=>?@\[\\\]\^`{|}~]/g,"\\$&")},guid:1,uidPref:"jqg",randId:function(a){return(a||$.jgrid.uidPref)+$.jgrid.guid++},getAccessor:function(a,b){var c,d,e,f=[];if("function"==typeof b)return b(a);if(c=a[b],void 0===c)try{if("string"==typeof b&&(f=b.split(".")),e=f.length)for(c=a;c&&e--;)d=f.shift(),c=c[d]}catch(g){}return c},getXmlData:function(a,b,c){var d,e="string"==typeof b?b.match(/^(.*)\[(\w+)\]$/):null;return"function"==typeof b?b(a):e&&e[2]?e[1]?$(e[1],a).attr(e[2]):$(a).attr(e[2]):(d=$(b,a),c?d:d.length>0?$(d).text():void 0)},cellWidth:function(){var a=$("<div class='ui-jqgrid' style='left:10000px'><table class='ui-jqgrid-btable ui-common-table' style='width:5px;'><tr class='jqgrow'><td style='width:5px;display:block;'></td></tr></table></div>"),b=a.appendTo("body").find("td").width();return a.remove(),Math.abs(b-5)>.1},isLocalStorage:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(a){return!1}},getRegional:function(a,b,c){var d;return void 0!==c?c:(a.p&&a.p.regional&&$.jgrid.regional&&(d=$.jgrid.getAccessor($.jgrid.regional[a.p.regional]||{},b)),void 0===d&&(d=$.jgrid.getAccessor($.jgrid,b)),d)},isMobile:function(){try{return/Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent)?!0:!1}catch(a){return!1}},cell_width:!0,ajaxOptions:{},from:function(source){var $t=this,QueryObject=function(d,q){"string"==typeof d&&(d=$.data(d));var self=this,_data=d,_usecase=!0,_trim=!1,_query=q,_stripNum=/[\$,%]/g,_lastCommand=null,_lastField=null,_orDepth=0,_negate=!1,_queuedOperator="",_sorting=[],_useProperties=!0;if("object"!=typeof d||!d.push)throw"data provides is not an array";return d.length>0&&(_useProperties="object"!=typeof d[0]?!1:!0),this._hasData=function(){return null===_data?!1:0===_data.length?!1:!0},this._getStr=function(a){var b=[];return _trim&&b.push("jQuery.trim("),b.push("String("+a+")"),_trim&&b.push(")"),_usecase||b.push(".toLowerCase()"),b.join("")},this._strComp=function(a){return"string"==typeof a?".toString()":""},this._group=function(a,b){return{field:a.toString(),unique:b,items:[]}},this._toStr=function(a){return _trim&&(a=$.trim(a)),a=a.toString().replace(/\\/g,"\\\\").replace(/\"/g,'\\"'),_usecase?a:a.toLowerCase()},this._funcLoop=function(a){var b=[];return $.each(_data,function(c,d){b.push(a(d))}),b},this._append=function(a){var b;for(null===_query?_query="":_query+=""===_queuedOperator?" && ":_queuedOperator,b=0;_orDepth>b;b++)_query+="(";_negate&&(_query+="!"),_query+="("+a+")",_negate=!1,_queuedOperator="",_orDepth=0},this._setCommand=function(a,b){_lastCommand=a,_lastField=b},this._resetNegate=function(){_negate=!1},this._repeatCommand=function(a,b){return null===_lastCommand?self:null!==a&&null!==b?_lastCommand(a,b):null===_lastField?_lastCommand(a):_useProperties?_lastCommand(_lastField,a):_lastCommand(a)},this._equals=function(a,b){return 0===self._compare(a,b,1)},this._compare=function(a,b,c){var d=Object.prototype.toString;return void 0===c&&(c=1),void 0===a&&(a=null),void 0===b&&(b=null),null===a&&null===b?0:null===a&&null!==b?1:null!==a&&null===b?-1:"[object Date]"===d.call(a)&&"[object Date]"===d.call(b)?b>a?-c:a>b?c:0:(_usecase||"number"==typeof a||"number"==typeof b||(a=String(a),b=String(b)),b>a?-c:a>b?c:0)},this._performSort=function(){0!==_sorting.length&&(_data=self._doSort(_data,0))},this._doSort=function(a,b){var c=_sorting[b].by,d=_sorting[b].dir,e=_sorting[b].type,f=_sorting[b].datefmt,g=_sorting[b].sfunc;if(b===_sorting.length-1)return self._getOrder(a,c,d,e,f,g);b++;var h,i,j,k=self._getGroup(a,c,d,e,f),l=[];for(h=0;h<k.length;h++)for(j=self._doSort(k[h].items,b),i=0;i<j.length;i++)l.push(j[i]);return l},this._getOrder=function(a,b,c,d,e,f){var g,h,i,j,k=[],l=[],m="a"===c?1:-1;void 0===d&&(d="text"),j="float"===d||"number"===d||"currency"===d||"numeric"===d?function(a){var b=parseFloat(String(a).replace(_stripNum,""));return isNaN(b)?Number.NEGATIVE_INFINITY:b}:"int"===d||"integer"===d?function(a){return a?parseFloat(String(a).replace(_stripNum,"")):Number.NEGATIVE_INFINITY}:"date"===d||"datetime"===d?function(a){return $.jgrid.parseDate.call($t,e,a).getTime()}:$.isFunction(d)?d:function(a){return a=a?$.trim(String(a)):"",_usecase?a:a.toLowerCase()},$.each(a,function(a,c){h=""!==b?$.jgrid.getAccessor(c,b):c,void 0===h&&(h=""),h=j(h,c),l.push({vSort:h,index:a})}),$.isFunction(f)?l.sort(function(a,b){return a=a.vSort,b=b.vSort,f.call(this,a,b,m)}):l.sort(function(a,b){return a=a.vSort,b=b.vSort,self._compare(a,b,m)}),i=0;for(var n=a.length;n>i;)g=l[i].index,k.push(a[g]),i++;return k},this._getGroup=function(a,b,c,d,e){var f,g=[],h=null,i=null;return $.each(self._getOrder(a,b,c,d,e),function(a,c){f=$.jgrid.getAccessor(c,b),null==f&&(f=""),self._equals(i,f)||(i=f,null!==h&&g.push(h),h=self._group(b,f)),h.items.push(c)}),null!==h&&g.push(h),g},this.ignoreCase=function(){return _usecase=!1,self},this.useCase=function(){return _usecase=!0,self},this.trim=function(){return _trim=!0,self},this.noTrim=function(){return _trim=!1,self},this.execute=function(){var match=_query,results=[];return null===match?self:($.each(_data,function(){eval(match)&&results.push(this)}),_data=results,self)},this.data=function(){return _data},this.select=function(a){if(self._performSort(),!self._hasData())return[];if(self.execute(),$.isFunction(a)){var b=[];return $.each(_data,function(c,d){b.push(a(d))}),b}return _data},this.hasMatch=function(){return self._hasData()?(self.execute(),_data.length>0):!1},this.andNot=function(a,b,c){return _negate=!_negate,self.and(a,b,c)},this.orNot=function(a,b,c){return _negate=!_negate,self.or(a,b,c)},this.not=function(a,b,c){return self.andNot(a,b,c)},this.and=function(a,b,c){return _queuedOperator=" && ",void 0===a?self:self._repeatCommand(a,b,c)},this.or=function(a,b,c){return _queuedOperator=" || ",void 0===a?self:self._repeatCommand(a,b,c)},this.orBegin=function(){return _orDepth++,self},this.orEnd=function(){return null!==_query&&(_query+=")"),self},this.isNot=function(a){return _negate=!_negate,self.is(a)},this.is=function(a){return self._append("this."+a),self._resetNegate(),self},this._compareValues=function(a,b,c,d,e){var f;f=_useProperties?"jQuery.jgrid.getAccessor(this,'"+b+"')":"this",void 0===c&&(c=null);var g=c,h=void 0===e.stype?"text":e.stype;if(null!==c)switch(h){case"int":case"integer":g=isNaN(Number(g))||""===g?"0":g,f="parseInt("+f+",10)",g="parseInt("+g+",10)";break;case"float":case"number":case"numeric":g=String(g).replace(_stripNum,""),g=isNaN(Number(g))||""===g?"0":g,f="parseFloat("+f+")",g="parseFloat("+g+")";break;case"date":case"datetime":g=String($.jgrid.parseDate.call($t,e.srcfmt||"Y-m-d",g).getTime()),f='jQuery.jgrid.parseDate.call(jQuery("#'+$.jgrid.jqID($t.p.id)+'")[0],"'+e.srcfmt+'",'+f+").getTime()";break;default:f=self._getStr(f),g=self._getStr('"'+self._toStr(g)+'"')}return self._append(f+" "+d+" "+g),self._setCommand(a,b),self._resetNegate(),self},this.equals=function(a,b,c){return self._compareValues(self.equals,a,b,"==",c)},this.notEquals=function(a,b,c){return self._compareValues(self.equals,a,b,"!==",c)},this.isNull=function(a,b,c){return self._compareValues(self.equals,a,null,"===",c)},this.greater=function(a,b,c){return self._compareValues(self.greater,a,b,">",c)},this.less=function(a,b,c){return self._compareValues(self.less,a,b,"<",c)},this.greaterOrEquals=function(a,b,c){return self._compareValues(self.greaterOrEquals,a,b,">=",c)},this.lessOrEquals=function(a,b,c){return self._compareValues(self.lessOrEquals,a,b,"<=",c)},this.startsWith=function(a,b){var c=null==b?a:b,d=_trim?$.trim(c.toString()).length:c.toString().length;return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr(0,"+d+") == "+self._getStr('"'+self._toStr(b)+'"')):(null!=b&&(d=_trim?$.trim(b.toString()).length:b.toString().length),self._append(self._getStr("this")+".substr(0,"+d+") == "+self._getStr('"'+self._toStr(a)+'"'))),self._setCommand(self.startsWith,a),self._resetNegate(),self},this.endsWith=function(a,b){var c=null==b?a:b,d=_trim?$.trim(c.toString()).length:c.toString().length;return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".substr("+self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+".length-"+d+","+d+') == "'+self._toStr(b)+'"'):self._append(self._getStr("this")+".substr("+self._getStr("this")+'.length-"'+self._toStr(a)+'".length,"'+self._toStr(a)+'".length) == "'+self._toStr(a)+'"'),self._setCommand(self.endsWith,a),self._resetNegate(),self},this.contains=function(a,b){return _useProperties?self._append(self._getStr("jQuery.jgrid.getAccessor(this,'"+a+"')")+'.indexOf("'+self._toStr(b)+'",0) > -1'):self._append(self._getStr("this")+'.indexOf("'+self._toStr(a)+'",0) > -1'),self._setCommand(self.contains,a),self._resetNegate(),self},this.groupBy=function(a,b,c,d){return self._hasData()?self._getGroup(_data,a,b,c,d):null},this.orderBy=function(a,b,c,d,e){return b=null==b?"a":$.trim(b.toString().toLowerCase()),null==c&&(c="text"),null==d&&(d="Y-m-d"),null==e&&(e=!1),("desc"===b||"descending"===b)&&(b="d"),("asc"===b||"ascending"===b)&&(b="a"),_sorting.push({by:a,dir:b,type:c,datefmt:d,sfunc:e}),self},self};return new QueryObject(source,null)},getMethod:function(a){return this.getAccessor($.fn.jqGrid,a)},extend:function(a){$.extend($.fn.jqGrid,a),this.no_legacy_api||$.fn.extend(a)},clearBeforeUnload:function(a){var b,c=$("#"+$.jgrid.jqID(a))[0];if(c.grid){b=c.grid,$.isFunction(b.emptyRows)&&b.emptyRows.call(c,!0,!0),$(document).unbind("mouseup.jqGrid"+c.p.id),$(b.hDiv).unbind("mousemove"),$(c).unbind();var d,e=b.headers.length,f=["formatCol","sortData","updatepager","refreshIndex","setHeadCheckBox","constructTr","formatter","addXmlData","addJSONData","grid","p"];for(d=0;e>d;d++)b.headers[d].el=null;for(d in b)b.hasOwnProperty(d)&&(b[d]=null);for(d in c.p)c.p.hasOwnProperty(d)&&(c.p[d]=$.isArray(c.p[d])?[]:null);for(e=f.length,d=0;e>d;d++)c.hasOwnProperty(f[d])&&(c[f[d]]=null,delete c[f[d]])}},gridUnload:function(a){if(a){a=$.trim(a),0===a.indexOf("#")&&(a=a.substring(1));var b=$("#"+$.jgrid.jqID(a))[0];if(b.grid){var c={id:$(b).attr("id"),cl:$(b).attr("class")};b.p.pager&&$(b.p.pager).unbind().empty().removeClass("ui-state-default ui-jqgrid-pager ui-corner-bottom");var d=document.createElement("table");d.className=c.cl;var e=$.jgrid.jqID(b.id);$(d).removeClass("ui-jqgrid-btable ui-common-table").insertBefore("#gbox_"+e),1===$(b.p.pager).parents("#gbox_"+e).length&&$(b.p.pager).insertBefore("#gbox_"+e),$.jgrid.clearBeforeUnload(a),$("#gbox_"+e).remove(),$(d).attr({id:c.id}),$("#alertmod_"+$.jgrid.jqID(a)).remove()}}},gridDestroy:function(a){if(a){a=$.trim(a),0===a.indexOf("#")&&(a=a.substring(1));var b=$("#"+$.jgrid.jqID(a))[0];if(b.grid){b.p.pager&&$(b.p.pager).remove();try{$.jgrid.clearBeforeUnload(a),$("#gbox_"+$.jgrid.jqID(a)).remove()}catch(c){}}}},styleUI:{jQueryUI:{common:{disabled:"ui-state-disabled",highlight:"ui-state-highlight",hover:"ui-state-hover",cornerall:"ui-corner-all",cornertop:"ui-corner-top",cornerbottom:"ui-corner-bottom",hidden:"ui-helper-hidden",icon_base:"ui-icon",overlay:"ui-widget-overlay",active:"ui-state-active",error:"ui-state-error",button:"ui-state-default ui-corner-all",content:"ui-widget-content"},base:{entrieBox:"ui-widget ui-widget-content ui-corner-all",viewBox:"",headerTable:"",headerBox:"ui-state-default",rowTable:"",rowBox:"ui-widget-content",footerTable:"",footerBox:"ui-widget-content",headerDiv:"ui-state-default",gridtitleBox:"ui-widget-header ui-corner-top ui-helper-clearfix",customtoolbarBox:"ui-state-default",loadingBox:"ui-state-default ui-state-active",rownumBox:"ui-state-default",scrollBox:"ui-widget-content",multiBox:"cbox",pagerBox:"ui-state-default ui-corner-bottom",pagerTable:"",toppagerBox:"ui-state-default",pgInput:"ui-corner-all",pgSelectBox:"ui-widget-content ui-corner-all",pgButtonBox:"ui-corner-all",icon_first:"ui-icon-seek-first",icon_prev:"ui-icon-seek-prev",icon_next:"ui-icon-seek-next",icon_end:"ui-icon-seek-end",icon_asc:"ui-icon-triangle-1-n",icon_desc:"ui-icon-triangle-1-s",icon_caption_open:"ui-icon-circle-triangle-n",icon_caption_close:"ui-icon-circle-triangle-s"},modal:{modal:"ui-widget ui-widget-content ui-corner-all ui-dialog",header:"ui-widget-header ui-corner-all ui-helper-clearfix",content:"ui-widget-content",resizable:"ui-resizable-handle ui-resizable-se",icon_close:"ui-icon-closethick",icon_resizable:"ui-icon-gripsmall-diagonal-se"},celledit:{inputClass:"ui-widget-content ui-corner-all"},inlinedit:{inputClass:"ui-widget-content ui-corner-all",icon_edit_nav:"ui-icon-pencil",icon_add_nav:"ui-icon-plus",icon_save_nav:"ui-icon-disk",icon_cancel_nav:"ui-icon-cancel"},formedit:{inputClass:"ui-widget-content ui-corner-all",icon_prev:"ui-icon-triangle-1-w",icon_next:"ui-icon-triangle-1-e",icon_save:"ui-icon-disk",icon_close:"ui-icon-close",icon_del:"ui-icon-scissors",icon_cancel:"ui-icon-cancel"},navigator:{icon_edit_nav:"ui-icon-pencil",icon_add_nav:"ui-icon-plus",icon_del_nav:"ui-icon-trash",icon_search_nav:"ui-icon-search",icon_refresh_nav:"ui-icon-refresh",icon_view_nav:"ui-icon-document",icon_newbutton_nav:"ui-icon-newwin"},grouping:{icon_plus:"ui-icon-circlesmall-plus",icon_minus:"ui-icon-circlesmall-minus"},filter:{table_widget:"ui-widget ui-widget-content",srSelect:"ui-widget-content ui-corner-all",srInput:"ui-widget-content ui-corner-all",menu_widget:"ui-widget ui-widget-content ui-corner-all",icon_search:"ui-icon-search",icon_reset:"ui-icon-arrowreturnthick-1-w",icon_query:"ui-icon-comment"},subgrid:{icon_plus:"ui-icon-plus",icon_minus:"ui-icon-minus",icon_open:"ui-icon-carat-1-sw"},treegrid:{icon_plus:"ui-icon-triangle-1-",icon_minus:"ui-icon-triangle-1-s",icon_leaf:"ui-icon-radio-off"},fmatter:{icon_edit:"ui-icon-pencil",icon_add:"ui-icon-plus",icon_save:"ui-icon-disk",icon_cancel:"ui-icon-cancel",icon_del:"ui-icon-trash"},colmenu:{menu_widget:"ui-widget ui-widget-content ui-corner-all",input_checkbox:"ui-widget ui-widget-content",filter_select:"ui-widget-content ui-corner-all",filter_input:"ui-widget-content ui-corner-all",icon_menu:"ui-icon-comment",icon_sort_asc:"ui-icon-arrow-1-n",icon_sort_desc:"ui-icon-arrow-1-s",icon_columns:"ui-icon-extlink",icon_filter:"ui-icon-calculator",icon_group:"ui-icon-grip-solid-horizontal",icon_freeze:"ui-icon-grip-solid-vertical",icon_move:"ui-icon-arrow-4"}},Bootstrap:{common:{disabled:"ui-disabled",highlight:"success",hover:"active",cornerall:"",cornertop:"",cornerbottom:"",hidden:"",icon_base:"glyphicon",overlay:"ui-overlay",active:"active",error:"bg-danger",button:"btn btn-default",content:""},base:{entrieBox:"",viewBox:"table-responsive",headerTable:"table table-bordered",headerBox:"",rowTable:"table table-bordered",rowBox:"",footerTable:"table table-bordered",footerBox:"",headerDiv:"",gridtitleBox:"",customtoolbarBox:"",loadingBox:"row",rownumBox:"active",scrollBox:"",multiBox:"checkbox",pagerBox:"",pagerTable:"table",toppagerBox:"",pgInput:"form-control",pgSelectBox:"form-control",pgButtonBox:"",icon_first:"glyphicon-step-backward",icon_prev:"glyphicon-backward",icon_next:"glyphicon-forward",icon_end:"glyphicon-step-forward",icon_asc:"glyphicon-triangle-top",icon_desc:"glyphicon-triangle-bottom",icon_caption_open:"glyphicon-circle-arrow-up",icon_caption_close:"glyphicon-circle-arrow-down"},modal:{modal:"modal-content",header:"modal-header",title:"modal-title",content:"modal-body",resizable:"ui-resizable-handle ui-resizable-se",icon_close:"glyphicon-remove-circle",icon_resizable:"glyphicon-import"},celledit:{inputClass:"form-control"},inlinedit:{inputClass:"form-control",icon_edit_nav:"glyphicon-edit",icon_add_nav:"glyphicon-plus",icon_save_nav:"glyphicon-save",icon_cancel_nav:"glyphicon-remove-circle"},formedit:{inputClass:"form-control",icon_prev:"glyphicon-step-backward",icon_next:"glyphicon-step-forward",icon_save:"glyphicon-save",icon_close:"glyphicon-remove-circle",icon_del:"glyphicon-trash",icon_cancel:"glyphicon-remove-circle"},navigator:{icon_edit_nav:"glyphicon-edit",icon_add_nav:"glyphicon-plus",icon_del_nav:"glyphicon-trash",icon_search_nav:"glyphicon-search",icon_refresh_nav:"glyphicon-refresh",icon_view_nav:"glyphicon-info-sign",icon_newbutton_nav:"glyphicon-new-window"},grouping:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom"},filter:{table_widget:"table table-condensed",srSelect:"form-control",srInput:"form-control",menu_widget:"",icon_search:"glyphicon-search",icon_reset:"glyphicon-refresh",icon_query:"glyphicon-comment"},subgrid:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom",icon_open:"glyphicon-indent-left"},treegrid:{icon_plus:"glyphicon-triangle-right",icon_minus:"glyphicon-triangle-bottom",icon_leaf:"glyphicon-unchecked"},fmatter:{icon_edit:"glyphicon-edit",icon_add:"glyphicon-plus",icon_save:"glyphicon-save",icon_cancel:"glyphicon-remove-circle",icon_del:"glyphicon-trash"},colmenu:{menu_widget:"",input_checkbox:"",filter_select:"form-control",filter_input:"form-control",icon_menu:"glyphicon-menu-hamburger",icon_sort_asc:"glyphicon-sort-by-alphabet",icon_sort_desc:"glyphicon-sort-by-alphabet-alt",icon_columns:"glyphicon-list-alt",icon_filter:"glyphicon-filter",icon_group:"glyphicon-align-left",icon_freeze:"glyphicon-object-align-horizontal",icon_move:"glyphicon-move"}}}}),$.fn.jqGrid=function(a){if("string"==typeof a){var b=$.jgrid.getMethod(a);if(!b)throw"jqGrid - No such method: "+a;var c=$.makeArray(arguments).slice(1);return b.apply(this,c)}return this.each(function(){if(!this.grid){var b;null!=a&&void 0!==a.data&&(b=a.data,a.data=[]);var c=$.extend(!0,{url:"",height:150,page:1,rowNum:20,rowTotal:null,records:0,pager:"",pgbuttons:!0,pginput:!0,colModel:[],rowList:[],colNames:[],sortorder:"asc",sortname:"",datatype:"xml",mtype:"GET",altRows:!1,selarrrow:[],savedRow:[],shrinkToFit:!0,xmlReader:{},jsonReader:{},subGrid:!1,subGridModel:[],reccount:0,lastpage:0,lastsort:0,selrow:null,beforeSelectRow:null,onSelectRow:null,onSortCol:null,ondblClickRow:null,onRightClickRow:null,onPaging:null,onSelectAll:null,onInitGrid:null,loadComplete:null,gridComplete:null,loadError:null,loadBeforeSend:null,afterInsertRow:null,beforeRequest:null,beforeProcessing:null,onHeaderClick:null,viewrecords:!1,loadonce:!1,multiselect:!1,multikey:!1,editurl:null,search:!1,caption:"",hidegrid:!0,hiddengrid:!1,postData:{},userData:{},treeGrid:!1,treeGridModel:"nested",treeReader:{},treeANode:-1,ExpandColumn:null,tree_root_level:0,prmNames:{page:"page",rows:"rows",sort:"sidx",order:"sord",search:"_search",nd:"nd",id:"id",oper:"oper",editoper:"edit",addoper:"add",deloper:"del",subgridid:"id",npage:null,totalrows:"totalrows"},forceFit:!1,gridstate:"visible",cellEdit:!1,cellsubmit:"remote",nv:0,loadui:"enable",toolbar:[!1,""],scroll:!1,multiboxonly:!1,deselectAfterSort:!0,scrollrows:!1,autowidth:!1,scrollOffset:18,cellLayout:5,subGridWidth:20,multiselectWidth:30,gridview:!0,rownumWidth:35,rownumbers:!1,pagerpos:"center",recordpos:"right",footerrow:!1,userDataOnFooter:!1,hoverrows:!0,altclass:"ui-priority-secondary",viewsortcols:[!1,"vertical",!0],resizeclass:"",autoencode:!1,remapColumns:[],ajaxGridOptions:{},direction:"ltr",toppager:!1,headertitles:!1,scrollTimeout:40,data:[],_index:{},grouping:!1,groupingView:{groupField:[],groupOrder:[],groupText:[],groupColumnShow:[],groupSummary:[],showSummaryOnHide:!1,sortitems:[],sortnames:[],summary:[],summaryval:[],plusicon:"",minusicon:"",displayField:[],groupSummaryPos:[],formatDisplayField:[],_locgr:!1},ignoreCase:!0,cmTemplate:{},idPrefix:"",multiSort:!1,minColWidth:33,scrollPopUp:!1,scrollTopOffset:0,scrollLeftOffset:"100%",storeNavOptions:!1,regional:"en",styleUI:"jQueryUI",responsive:!1,restoreCellonFail:!0,colFilters:{},colMenu:!1},$.jgrid.defaults,a);void 0!==b&&(c.data=b,a.data=b);var d=this,e={headers:[],cols:[],footers:[],dragStart:function(a,b,e){var f=$(this.bDiv).offset().left;this.resizing={idx:a,startX:b.pageX,sOL:b.pageX-f},this.hDiv.style.cursor="col-resize",this.curGbox=$("#rs_m"+$.jgrid.jqID(c.id),"#gbox_"+$.jgrid.jqID(c.id)),this.curGbox.css({display:"block",left:b.pageX-f,top:e[1],height:e[2]}),$(d).triggerHandler("jqGridResizeStart",[b,a]),$.isFunction(c.resizeStart)&&c.resizeStart.call(d,b,a),document.onselectstart=function(){return!1}},dragMove:function(a){if(this.resizing){var b,d,e=a.pageX-this.resizing.startX,f=this.headers[this.resizing.idx],g="ltr"===c.direction?f.width+e:f.width-e;g>33&&(this.curGbox.css({left:this.resizing.sOL+e}),c.forceFit===!0?(b=this.headers[this.resizing.idx+c.nv],d="ltr"===c.direction?b.width-e:b.width+e,d>c.minColWidth&&(f.newWidth=g,b.newWidth=d)):(this.newWidth="ltr"===c.direction?c.tblwidth+e:c.tblwidth-e,f.newWidth=g))}},dragEnd:function(a){if(this.hDiv.style.cursor="default",this.resizing){var b=this.resizing.idx,e=this.headers[b].newWidth||this.headers[b].width;e=parseInt(e,10),this.resizing=!1,$("#rs_m"+$.jgrid.jqID(c.id)).css("display","none"),c.colModel[b].width=e,this.headers[b].width=e,this.headers[b].el.style.width=e+"px",this.cols[b].style.width=e+"px",this.footers.length>0&&(this.footers[b].style.width=e+"px"),c.forceFit===!0?(e=this.headers[b+c.nv].newWidth||this.headers[b+c.nv].width,this.headers[b+c.nv].width=e,this.headers[b+c.nv].el.style.width=e+"px",this.cols[b+c.nv].style.width=e+"px",this.footers.length>0&&(this.footers[b+c.nv].style.width=e+"px"),c.colModel[b+c.nv].width=e):(c.tblwidth=this.newWidth||c.tblwidth,$("table:first",this.bDiv).css("width",c.tblwidth+"px"),$("table:first",this.hDiv).css("width",c.tblwidth+"px"),this.hDiv.scrollLeft=this.bDiv.scrollLeft,c.footerrow&&($("table:first",this.sDiv).css("width",c.tblwidth+"px"),this.sDiv.scrollLeft=this.bDiv.scrollLeft)),a&&($(d).triggerHandler("jqGridResizeStop",[e,b]),$.isFunction(c.resizeStop)&&c.resizeStop.call(d,e,b))}this.curGbox=null,document.onselectstart=function(){return!0}},populateVisible:function(){e.timer&&clearTimeout(e.timer),e.timer=null;var a=$(e.bDiv).height();if(a){var b,f,g=$("table:first",e.bDiv);if(g[0].rows.length)try{b=g[0].rows[1],f=b?$(b).outerHeight()||e.prevRowHeight:e.prevRowHeight}catch(h){f=e.prevRowHeight}if(f){e.prevRowHeight=f;var i,j,k,l=c.rowNum,m=e.scrollTop=e.bDiv.scrollTop,n=Math.round(g.position().top)-m,o=n+g.height(),p=f*l;if(a>o&&0>=n&&(void 0===c.lastpage||(parseInt((o+m+p-1)/p,10)||0)<=c.lastpage)&&(j=parseInt((a-o+p-1)/p,10)||1,o>=0||2>j||c.scroll===!0?(i=(Math.round((o+m)/p)||0)+1,n=-1):n=1),n>0&&(i=(parseInt(m/p,10)||0)+1,j=(parseInt((m+a)/p,10)||0)+2-i,k=!0),j){if(c.lastpage&&(i>c.lastpage||1===c.lastpage||i===c.page&&i===c.lastpage))return;e.hDiv.loading?e.timer=setTimeout(e.populateVisible,c.scrollTimeout):(c.page=i,k&&(e.selectionPreserver(g[0]),e.emptyRows.call(g[0],!1,!1)),e.populate(j)),c.scrollPopUp&&null!=c.lastpage&&($("#scroll_g"+c.id).show().html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",c.pgtext),c.page,c.lastpage)).css({top:c.scrollTopOffset+m*((parseInt(c.height,10)-45)/(parseInt(f,10)*parseInt(c.records,10)))+"px",left:c.scrollLeftOffset}),$(this).mouseout(function(){$("#scroll_g"+c.id).hide()}))}}}},scrollGrid:function(a){if(c.scroll){var b=e.bDiv.scrollTop;void 0===e.scrollTop&&(e.scrollTop=0),b!==e.scrollTop&&(e.scrollTop=b,e.timer&&clearTimeout(e.timer),e.timer=setTimeout(e.populateVisible,c.scrollTimeout))}e.hDiv.scrollLeft=e.bDiv.scrollLeft,c.footerrow&&(e.sDiv.scrollLeft=e.bDiv.scrollLeft),c.frozenColumns&&$(e.fbDiv).scrollTop(e.bDiv.scrollTop),a&&a.stopPropagation()},selectionPreserver:function(a){var b=a.p,c=b.selrow,d=b.selarrrow?$.makeArray(b.selarrrow):null,e=a.grid.bDiv.scrollLeft,f=function(){var g;if(b.selrow=null,b.selarrrow=[],b.multiselect&&d&&d.length>0)for(g=0;g<d.length;g++)d[g]!==c&&$(a).jqGrid("setSelection",d[g],!1,null);c&&$(a).jqGrid("setSelection",c,!1,null),a.grid.bDiv.scrollLeft=e,$(a).unbind(".selectionPreserver",f)};$(a).bind("jqGridGridComplete.selectionPreserver",f)}};if("TABLE"!==this.tagName.toUpperCase()||null==this.id)return void alert("Element is not a table or has no id!");if(void 0!==document.documentMode&&document.documentMode<=5)return void alert("Grid can not be used in this ('quirks') mode!");var f,g,h,i=0;for(g in $.jgrid.regional)$.jgrid.regional.hasOwnProperty(g)&&(0===i&&(f=g),i++);if(1===i&&f!==c.regional&&(c.regional=f),$(this).empty().attr("tabindex","0"),this.p=c,this.p.useProp=!!$.fn.prop,0===this.p.colNames.length)for(i=0;i<this.p.colModel.length;i++)this.p.colNames[i]=this.p.colModel[i].label||this.p.colModel[i].name;if(this.p.colNames.length!==this.p.colModel.length)return void alert($.jgrid.getRegional(this,"errors.model"));var j,k=$.jgrid.getMethod("getStyleUI"),l=d.p.styleUI+".common",m=k(l,"disabled",!0),n=k(l,"highlight",!0),o=k(l,"hover",!0),p=k(l,"cornerall",!0),q=k(l,"icon_base",!0),r=$.jgrid.styleUI[d.p.styleUI||"jQueryUI"].colmenu,s=$.jgrid.msie,t=[],u=[],v=[];l=d.p.styleUI+".base",j=$("<div "+k(l,"viewBox",!1,"ui-jqgrid-view")+" role='grid'></div>"),d.p.direction=$.trim(d.p.direction.toLowerCase()),d.p._ald=!1,-1===$.inArray(d.p.direction,["ltr","rtl"])&&(d.p.direction="ltr"),h=d.p.direction,$(j).insertBefore(this),$(this).appendTo(j);var w=$("<div "+k(l,"entrieBox",!1,"ui-jqgrid")+"></div>");$(w).attr({id:"gbox_"+this.id,dir:h}).insertBefore(j),$(j).attr("id","gview_"+this.id).appendTo(w),$("<div "+k(d.p.styleUI+".common","overlay",!1,"jqgrid-overlay")+" id='lui_"+this.id+"'></div>").insertBefore(j),$("<div "+k(l,"loadingBox",!1,"loading")+" id='load_"+this.id+"'>"+$.jgrid.getRegional(d,"defaults.loadtext",this.p.loadtext)+"</div>").insertBefore(j),$(this).attr({role:"presentation","aria-multiselectable":!!this.p.multiselect,"aria-labelledby":"gbox_"+this.id});var x,y=["shiftKey","altKey","ctrlKey"],z=function(a,b){return a=parseInt(a,10),isNaN(a)?b||0:a},A=function(a,b,c,f,g,h){var i,j,k=d.p.colModel[a],l=k.align,m='style="',n=k.classes,o=k.name,p=[];return l&&(m+="text-align:"+l+";"),k.hidden===!0&&(m+="display:none;"),0===b?m+="width: "+e.headers[a].width+"px;":($.isFunction(k.cellattr)||"string"==typeof k.cellattr&&null!=$.jgrid.cellattr&&$.isFunction($.jgrid.cellattr[k.cellattr]))&&(i=$.isFunction(k.cellattr)?k.cellattr:$.jgrid.cellattr[k.cellattr],j=i.call(d,g,c,f,k,h),j&&"string"==typeof j&&(j=j.replace(/style/i,"style").replace(/title/i,"title"),j.indexOf("title")>-1&&(k.title=!1),j.indexOf("class")>-1&&(n=void 0),p=j.replace(/\-style/g,"-sti").split(/style/),2===p.length?(p[1]=$.trim(p[1].replace(/\-sti/g,"-style").replace("=","")),(0===p[1].indexOf("'")||0===p[1].indexOf('"'))&&(p[1]=p[1].substring(1)),m+=p[1].replace(/'/gi,'"')):m+='"')),p.length||(p[0]="",m+='"'),m+=(void 0!==n?' class="'+n+'"':"")+(k.title&&c?' title="'+$.jgrid.stripHtml(c)+'"':""),m+=' aria-describedby="'+d.p.id+"_"+o+'"',m+p[0]},B=function(a){
return null==a||""===a?"&#160;":d.p.autoencode?$.jgrid.htmlEncode(a):String(a)},C=function(a,b,c,e,f){var g,h=d.p.colModel[c];if(void 0!==h.formatter){a=""!==String(d.p.idPrefix)?$.jgrid.stripPref(d.p.idPrefix,a):a;var i={rowId:a,colModel:h,gid:d.p.id,pos:c,styleUI:d.p.styleUI};g=$.isFunction(h.formatter)?h.formatter.call(d,b,i,e,f):$.fmatter?$.fn.fmatter.call(d,h.formatter,b,i,e,f):B(b)}else g=B(b);return g},D=function(a,b,c,d,e,f){var g,h;return g=C(a,b,c,e,"add"),h=A(c,d,g,e,a,f),'<td role="gridcell" '+h+">"+g+"</td>"},E=function(a,b,c,e,f){var g='<input role="checkbox" type="checkbox" id="jqg_'+d.p.id+"_"+a+'" '+f+' name="jqg_'+d.p.id+"_"+a+'"'+(e?'checked="checked"':"")+"/>",h=A(b,c,"",null,a,!0);return'<td role="gridcell" '+h+">"+g+"</td>"},F=function(a,b,c,d,e){var f=(parseInt(c,10)-1)*parseInt(d,10)+1+b,g=A(a,b,f,null,b,!0);return'<td role="gridcell" '+e+" "+g+">"+f+"</td>"},G=function(a){var b,c,e=[],f=0;for(c=0;c<d.p.colModel.length;c++)b=d.p.colModel[c],"cb"!==b.name&&"subgrid"!==b.name&&"rn"!==b.name&&(e[f]="local"===a?b.name:"xml"===a||"xmlstring"===a?b.xmlmap||b.name:b.jsonmap||b.name,d.p.keyName!==!1&&b.key===!0&&(d.p.keyName=e[f]),f++);return e},H=function(a){var b=d.p.remapColumns;return b&&b.length||(b=$.map(d.p.colModel,function(a,b){return b})),a&&(b=$.map(b,function(b){return a>b?null:b-a})),b},I=function(a,b){var c;this.p.deepempty?$(this.rows).slice(1).remove():(c=this.rows.length>0?this.rows[0]:null,$(this.firstChild).empty().append(c)),a&&this.p.scroll&&($(this.grid.bDiv.firstChild).css({height:"auto"}),$(this.grid.bDiv.firstChild.firstChild).css({height:"0px",display:"none"}),0!==this.grid.bDiv.scrollTop&&(this.grid.bDiv.scrollTop=0)),b===!0&&this.p.treeGrid&&!this.p.loadonce&&(this.p.data=[],this.p._index={})},J=function(){var a,b,c,e,f,g,h,i,j,k,l,m=d.p,n=m.data,o=n.length,p=m.localReader,q=m.colModel,r=p.cell,s=(m.multiselect===!0?1:0)+(m.subGrid===!0?1:0)+(m.rownumbers===!0?1:0),t=m.scroll?$.jgrid.randId():1;if("local"===m.datatype&&p.repeatitems===!0)for(j=H(s),k=G("local"),e=m.keyIndex===!1?$.isFunction(p.id)?p.id.call(d,n):p.id:m.keyIndex,a=0;o>a;a++){for(c=n[a],f=$.jgrid.getAccessor(c,e),void 0===f&&("number"==typeof e&&null!=q[e+s]&&(f=$.jgrid.getAccessor(c,q[e+s].name)),void 0===f&&(f=t+a,r&&(g=$.jgrid.getAccessor(c,r)||c,f=null!=g&&void 0!==g[e]?g[e]:f,g=null))),i={},i[p.id]=f,r&&(c=$.jgrid.getAccessor(c,r)||c),l=$.isArray(c)?j:k,b=0;b<l.length;b++)h=$.jgrid.getAccessor(c,l[b]),i[q[b+s].name]=h;$.extend(!0,n[a],i)}},K=function(){var a,b,c,e=d.p.data.length;for(a=d.p.keyName===!1||d.p.loadonce===!0?d.p.localReader.id:d.p.keyName,d.p._index=[],b=0;e>b;b++)c=$.jgrid.getAccessor(d.p.data[b],a),void 0===c&&(c=String(b+1)),d.p._index[c]=b},L=function(a,b,c,e,f){var g,h="-1",i="",j=b?"display:none;":"",k=$(d).triggerHandler("jqGridRowAttr",[e,f,a]);if("object"!=typeof k&&(k=$.isFunction(d.p.rowattr)?d.p.rowattr.call(d,e,f,a):"string"==typeof d.p.rowattr&&null!=$.jgrid.rowattr&&$.isFunction($.jgrid.rowattr[d.p.rowattr])?$.jgrid.rowattr[d.p.rowattr].call(d,e,f,a):{}),!$.isEmptyObject(k)){k.hasOwnProperty("id")&&(a=k.id,delete k.id),k.hasOwnProperty("tabindex")&&(h=k.tabindex,delete k.tabindex),k.hasOwnProperty("style")&&(j+=k.style,delete k.style),k.hasOwnProperty("class")&&(c+=" "+k["class"],delete k["class"]);try{delete k.role}catch(l){}for(g in k)k.hasOwnProperty(g)&&(i+=" "+g+"="+k[g])}return'<tr role="row" id="'+a+'" tabindex="'+h+'" class="'+c+'"'+(""===j?"":' style="'+j+'"')+i+">"},M=function(a,b,c,e){var f=new Date,g="local"!==d.p.datatype&&d.p.loadonce||"xmlstring"===d.p.datatype,h="_id_",i=d.p.xmlReader,j="local"===d.p.datatype?"local":"xml";if(g&&(d.p.data=[],d.p._index={},d.p.localReader.id=h),d.p.reccount=0,$.isXMLDoc(a)){-1!==d.p.treeANode||d.p.scroll?b=b>1?b:1:(I.call(d,!1,!0),b=1);var m,n,o,p,q,r,s,t,u,v,w=$(d),x=0,y=d.p.multiselect===!0?1:0,A=0,B=d.p.rownumbers===!0?1:0,C=[],J={},K=[],M=d.p.altRows===!0?d.p.altclass:"",N=k(l,"rowBox",!0,"jqgrow ui-row-"+d.p.direction);d.p.subGrid===!0&&(A=1,p=$.jgrid.getMethod("addSubGridCell")),i.repeatitems||(C=G(j)),q=d.p.keyName===!1?$.isFunction(i.id)?i.id.call(d,a):i.id:d.p.keyName,r=-1===String(q).indexOf("[")?C.length?function(a,b){return $(q,a).text()||b}:function(a,b){return $(i.cell,a).eq(q).text()||b}:function(a,b){return a.getAttribute(q.replace(/[\[\]]/g,""))||b},d.p.userData={},d.p.page=z($.jgrid.getXmlData(a,i.page),d.p.page),d.p.lastpage=z($.jgrid.getXmlData(a,i.total),1),d.p.records=z($.jgrid.getXmlData(a,i.records)),$.isFunction(i.userdata)?d.p.userData=i.userdata.call(d,a)||{}:$.jgrid.getXmlData(a,i.userdata,!0).each(function(){d.p.userData[this.getAttribute("name")]=$(this).text()});var O=$.jgrid.getXmlData(a,i.root,!0);O=$.jgrid.getXmlData(O,i.row,!0),O||(O=[]);var P,Q=O.length,R=0,S=[],T=parseInt(d.p.rowNum,10),U=d.p.scroll?$.jgrid.randId():1,V=$("#"+$.jgrid.jqID(d.p.id)+" tbody:first");if(Q>0&&d.p.page<=0&&(d.p.page=1),O&&Q){e&&(T*=e+1);var W,X=$.isFunction(d.p.afterInsertRow),Y=!1,Z=B?k(l,"rownumBox",!1,"jqgrid-rownum"):"",_=y?k(l,"multiBox",!1,"cbox"):"";for(d.p.grouping&&(Y=d.p.groupingView.groupCollapse===!0,W=$.jgrid.getMethod("groupingPrepare"));Q>R;){t=O[R],u=r(t,U+R),u=d.p.idPrefix+u,P=0===b?0:b+1,v=N+((P+R)%2===1?" "+M:"");var aa=K.length;if(K.push(""),B&&K.push(F(0,R,d.p.page,d.p.rowNum,Z)),y&&K.push(E(u,B,R,!1,_)),A&&K.push(p.call(w,y+B,R+b)),i.repeatitems){s||(s=H(y+A+B));var ba=$.jgrid.getXmlData(t,i.cell,!0);$.each(s,function(a){var c=ba[this];return c?(o=c.textContent||c.text,J[d.p.colModel[a+y+A+B].name]=o,void K.push(D(u,o,a+y+A+B,R+b,t,J))):!1})}else for(m=0;m<C.length;m++)o=$.jgrid.getXmlData(t,C[m]),J[d.p.colModel[m+y+A+B].name]=o,K.push(D(u,o,m+y+A+B,R+b,t,J));if(K[aa]=L(u,Y,v,J,t),K.push("</tr>"),d.p.grouping&&(S.push(K),d.p.groupingView._locgr||W.call(w,J,R),K=[]),(g||d.p.treeGrid===!0&&!d.p._ald)&&(J[h]=$.jgrid.stripPref(d.p.idPrefix,u),d.p.data.push(J),d.p._index[J[h]]=d.p.data.length-1),d.p.gridview===!1&&(V.append(K.join("")),w.triggerHandler("jqGridAfterInsertRow",[u,J,t]),X&&d.p.afterInsertRow.call(d,u,J,t),K=[]),J={},x++,R++,x===T)break}}if(d.p.gridview===!0&&(n=d.p.treeANode>-1?d.p.treeANode:0,d.p.grouping?g||(w.jqGrid("groupingRender",S,d.p.colModel.length,d.p.page,T),S=null):d.p.treeGrid===!0&&n>0?$(d.rows[n]).after(K.join("")):(V.append(K.join("")),d.grid.cols=d.rows[0].cells)),d.p.totaltime=new Date-f,K=null,d.p.subGrid===!0)try{w.jqGrid("addSubGrid",y+B)}catch(ca){}if(x>0&&0===d.p.records&&(d.p.records=Q),d.p.treeGrid===!0)try{w.jqGrid("setTreeNode",n+1,x+n+1)}catch(da){}if(d.p.reccount=x,d.p.treeANode=-1,d.p.userDataOnFooter&&w.jqGrid("footerData","set",d.p.userData,!0),g&&(d.p.records=Q,d.p.lastpage=Math.ceil(Q/T)),c||d.updatepager(!1,!0),g){for(;Q>x;){if(t=O[x],u=r(t,x+U),u=d.p.idPrefix+u,i.repeatitems){s||(s=H(y+A+B));var ea=$.jgrid.getXmlData(t,i.cell,!0);$.each(s,function(a){var b=ea[this];return b?(o=b.textContent||b.text,void(J[d.p.colModel[a+y+A+B].name]=o)):!1})}else for(m=0;m<C.length;m++)o=$.jgrid.getXmlData(t,C[m]),J[d.p.colModel[m+y+A+B].name]=o;J[h]=$.jgrid.stripPref(d.p.idPrefix,u),d.p.grouping&&W.call(w,J,x),d.p.data.push(J),d.p._index[J[h]]=d.p.data.length-1,J={},x++}d.p.grouping&&(d.p.groupingView._locgr=!0,w.jqGrid("groupingRender",S,d.p.colModel.length,d.p.page,T),S=null)}}},N=function(a,b,c,e){var f=new Date;if(a){-1!==d.p.treeANode||d.p.scroll?b=b>1?b:1:(I.call(d,!1,!0),b=1);var g,h,i="_id_",j="local"!==d.p.datatype&&d.p.loadonce||"jsonstring"===d.p.datatype;j&&(d.p.data=[],d.p._index={},d.p.localReader.id=i),d.p.reccount=0,"local"===d.p.datatype?(g=d.p.localReader,h="local"):(g=d.p.jsonReader,h="json");var m,o,p,q,r,s,t,u,v,w,x,y,A=$(d),B=0,C=[],J=d.p.multiselect?1:0,K=d.p.subGrid===!0?1:0,M=d.p.rownumbers===!0?1:0,N=H(J+K+M),O=G(h),P={},Q=[],R=d.p.altRows===!0?d.p.altclass:"",S=k(l,"rowBox",!0,"jqgrow ui-row-"+d.p.direction);d.p.page=z($.jgrid.getAccessor(a,g.page),d.p.page),d.p.lastpage=z($.jgrid.getAccessor(a,g.total),1),d.p.records=z($.jgrid.getAccessor(a,g.records)),d.p.userData=$.jgrid.getAccessor(a,g.userdata)||{},K&&(r=$.jgrid.getMethod("addSubGridCell")),v=d.p.keyName===!1?$.isFunction(g.id)?g.id.call(d,a):g.id:d.p.keyName,u=$.jgrid.getAccessor(a,g.root),null==u&&$.isArray(a)&&(u=a),u||(u=[]),t=u.length,o=0,t>0&&d.p.page<=0&&(d.p.page=1);var T,U,V=parseInt(d.p.rowNum,10),W=d.p.scroll?$.jgrid.randId():1,X=!1;e&&(V*=e+1),"local"!==d.p.datatype||d.p.deselectAfterSort||(X=!0);var Y,Z=$.isFunction(d.p.afterInsertRow),_=[],aa=!1,ba=$("#"+$.jgrid.jqID(d.p.id)+" tbody:first"),ca=M?k(l,"rownumBox",!1,"jqgrid-rownum"):"",da=J?k(l,"multiBox",!1,"cbox"):"";for(d.p.grouping&&(aa=d.p.groupingView.groupCollapse===!0,Y=$.jgrid.getMethod("groupingPrepare"));t>o;){if(q=u[o],x=$.jgrid.getAccessor(q,v),void 0===x&&("number"==typeof v&&null!=d.p.colModel[v+J+K+M]&&(x=$.jgrid.getAccessor(q,d.p.colModel[v+J+K+M].name)),void 0===x&&(x=W+o,0===C.length&&g.cell))){var ea=$.jgrid.getAccessor(q,g.cell)||q;x=null!=ea&&void 0!==ea[v]?ea[v]:x,ea=null}x=d.p.idPrefix+x,T=1===b?0:b,y=S+((T+o)%2===1?" "+R:""),X&&(U=d.p.multiselect?-1!==$.inArray(x,d.p.selarrrow):x===d.p.selrow);var fa=Q.length;for(Q.push(""),M&&Q.push(F(0,o,d.p.page,d.p.rowNum,ca)),J&&Q.push(E(x,M,o,U,da)),K&&Q.push(r.call(A,J+M,o+b)),s=O,g.repeatitems&&(g.cell&&(q=$.jgrid.getAccessor(q,g.cell)||q),$.isArray(q)&&(s=N)),p=0;p<s.length;p++)m=$.jgrid.getAccessor(q,s[p]),P[d.p.colModel[p+J+K+M].name]=m,Q.push(D(x,m,p+J+K+M,o+b,q,P));if(y+=U?" "+n:"",Q[fa]=L(x,aa,y,P,q),Q.push("</tr>"),d.p.grouping&&(_.push(Q),d.p.groupingView._locgr||Y.call(A,P,o),Q=[]),(j||d.p.treeGrid===!0&&!d.p._ald)&&(P[i]=$.jgrid.stripPref(d.p.idPrefix,x),d.p.data.push(P),d.p._index[P[i]]=d.p.data.length-1),d.p.gridview===!1&&(ba.append(Q.join("")),A.triggerHandler("jqGridAfterInsertRow",[x,P,q]),Z&&d.p.afterInsertRow.call(d,x,P,q),Q=[]),P={},B++,o++,B===V)break}if(d.p.gridview===!0&&(w=d.p.treeANode>-1?d.p.treeANode:0,d.p.grouping?j||(A.jqGrid("groupingRender",_,d.p.colModel.length,d.p.page,V),_=null):d.p.treeGrid===!0&&w>0?$(d.rows[w]).after(Q.join("")):(ba.append(Q.join("")),d.grid.cols=d.rows[0].cells)),d.p.totaltime=new Date-f,Q=null,d.p.subGrid===!0)try{A.jqGrid("addSubGrid",J+M)}catch(ga){}if(B>0&&0===d.p.records&&(d.p.records=t),d.p.treeGrid===!0)try{A.jqGrid("setTreeNode",w+1,B+w+1)}catch(ha){}if(d.p.reccount=B,d.p.treeANode=-1,d.p.userDataOnFooter&&A.jqGrid("footerData","set",d.p.userData,!0),j&&(d.p.records=t,d.p.lastpage=Math.ceil(t/V)),c||d.updatepager(!1,!0),j){for(;t>B&&u[B];){if(q=u[B],x=$.jgrid.getAccessor(q,v),void 0===x&&("number"==typeof v&&null!=d.p.colModel[v+J+K+M]&&(x=$.jgrid.getAccessor(q,d.p.colModel[v+J+K+M].name)),void 0===x&&(x=W+B,0===C.length&&g.cell))){var ia=$.jgrid.getAccessor(q,g.cell)||q;x=null!=ia&&void 0!==ia[v]?ia[v]:x,ia=null}if(q){for(x=d.p.idPrefix+x,s=O,g.repeatitems&&(g.cell&&(q=$.jgrid.getAccessor(q,g.cell)||q),$.isArray(q)&&(s=N)),p=0;p<s.length;p++)P[d.p.colModel[p+J+K+M].name]=$.jgrid.getAccessor(q,s[p]);P[i]=$.jgrid.stripPref(d.p.idPrefix,x),d.p.grouping&&Y.call(A,P,B),d.p.data.push(P),d.p._index[P[i]]=d.p.data.length-1,P={}}B++}d.p.grouping&&(d.p.groupingView._locgr=!0,A.jqGrid("groupingRender",_,d.p.colModel.length,d.p.page,V),_=null)}}},O=function(){function a(b){var c,e,f,g,h,i,k=0;if(null!=b.groups){for(e=b.groups.length&&"OR"===b.groupOp.toString().toUpperCase(),e&&r.orBegin(),c=0;c<b.groups.length;c++){k>0&&e&&r.or();try{a(b.groups[c])}catch(l){alert(l)}k++}e&&r.orEnd()}if(null!=b.rules)try{for(f=b.rules.length&&"OR"===b.groupOp.toString().toUpperCase(),f&&r.orBegin(),c=0;c<b.rules.length;c++)h=b.rules[c],g=b.groupOp.toString().toUpperCase(),q[h.op]&&h.field&&(k>0&&g&&"OR"===g&&(r=r.or()),i=j[h.field],"date"===i.stype&&i.srcfmt&&i.newfmt&&i.srcfmt!==i.newfmt&&(h.data=$.jgrid.parseDate.call(d,i.newfmt,h.data,i.srcfmt)),r=q[h.op](r,g)(h.field,h.data,j[h.field])),k++;f&&r.orEnd()}catch(m){alert(m)}}var b,c,e,f,g=d.p.multiSort?[]:"",h=[],i=!1,j={},k=[],l=[];if($.isArray(d.p.data)){var m,n,o,p=d.p.grouping?d.p.groupingView:!1;if($.each(d.p.colModel,function(){if(c=this.sorttype||"text",o=this.index||this.name,"date"===c||"datetime"===c?(this.formatter&&"string"==typeof this.formatter&&"date"===this.formatter?(b=this.formatoptions&&this.formatoptions.srcformat?this.formatoptions.srcformat:$.jgrid.getRegional(d,"formatter.date.srcformat"),e=this.formatoptions&&this.formatoptions.newformat?this.formatoptions.newformat:$.jgrid.getRegional(d,"formatter.date.newformat")):b=e=this.datefmt||"Y-m-d",j[o]={stype:c,srcfmt:b,newfmt:e,sfunc:this.sortfunc||null}):j[o]={stype:c,srcfmt:"",newfmt:"",sfunc:this.sortfunc||null},d.p.grouping)for(n=0,m=p.groupField.length;m>n;n++)this.name===p.groupField[n]&&(k[n]=j[o],l[n]=o);d.p.multiSort||i||o!==d.p.sortname||(g=o,i=!0)}),d.p.multiSort&&(g=t,h=u),d.p.treeGrid&&d.p._sort)return void $(d).jqGrid("SortTree",g,d.p.sortorder,j[g].stype||"text",j[g].srcfmt||"");var q={eq:function(a){return a.equals},ne:function(a){return a.notEquals},lt:function(a){return a.less},le:function(a){return a.lessOrEquals},gt:function(a){return a.greater},ge:function(a){return a.greaterOrEquals},cn:function(a){return a.contains},nc:function(a,b){return"OR"===b?a.orNot().contains:a.andNot().contains},bw:function(a){return a.startsWith},bn:function(a,b){return"OR"===b?a.orNot().startsWith:a.andNot().startsWith},en:function(a,b){return"OR"===b?a.orNot().endsWith:a.andNot().endsWith},ew:function(a){return a.endsWith},ni:function(a,b){return"OR"===b?a.orNot().equals:a.andNot().equals},"in":function(a){return a.equals},nu:function(a){return a.isNull},nn:function(a,b){return"OR"===b?a.orNot().isNull:a.andNot().isNull}},r=$.jgrid.from.call(d,d.p.data);if(d.p.ignoreCase&&(r=r.ignoreCase()),d.p.search===!0){var s=d.p.postData.filters;if(s)"string"==typeof s&&(s=$.jgrid.parse(s)),a(s);else try{f=j[d.p.postData.searchField],"date"===f.stype&&f.srcfmt&&f.newfmt&&f.srcfmt!==f.newfmt&&(d.p.postData.searchString=$.jgrid.parseDate.call(d,f.newfmt,d.p.postData.searchString,f.srcfmt)),r=q[d.p.postData.searchOper](r)(d.p.postData.searchField,d.p.postData.searchString,j[d.p.postData.searchField])}catch(v){}}else d.p.treeGrid&&"nested"===d.p.treeGridModel&&r.orderBy(d.p.treeReader.left_field,"asc","integer","",null);if(d.p.treeGrid&&"adjacency"===d.p.treeGridModel&&(m=0,g=null),d.p.grouping)for(n=0;m>n;n++)r.orderBy(l[n],p.groupOrder[n],k[n].stype,k[n].srcfmt);d.p.multiSort?$.each(g,function(a){r.orderBy(this,h[a],j[this].stype,j[this].srcfmt,j[this].sfunc)}):g&&d.p.sortorder&&i&&("DESC"===d.p.sortorder.toUpperCase()?r.orderBy(d.p.sortname,"d",j[g].stype,j[g].srcfmt,j[g].sfunc):r.orderBy(d.p.sortname,"a",j[g].stype,j[g].srcfmt,j[g].sfunc));var w=r.select(),x=parseInt(d.p.rowNum,10),y=w.length,z=parseInt(d.p.page,10),A=Math.ceil(y/x),B={};if((d.p.search||d.p.resetsearch)&&d.p.grouping&&d.p.groupingView._locgr){d.p.groupingView.groups=[];var C,D,E,F=$.jgrid.getMethod("groupingPrepare");if(d.p.footerrow&&d.p.userDataOnFooter){for(D in d.p.userData)d.p.userData.hasOwnProperty(D)&&(d.p.userData[D]=0);E=!0}for(C=0;y>C;C++){if(E)for(D in d.p.userData)d.p.userData.hasOwnProperty(D)&&(d.p.userData[D]+=parseFloat(w[C][D]||0));F.call($(d),w[C],C,x)}}return w=d.p.treeGrid&&d.p.search?$(d).jqGrid("searchTree",w):w.slice((z-1)*x,z*x),r=null,j=null,B[d.p.localReader.total]=A,B[d.p.localReader.page]=z,B[d.p.localReader.records]=y,B[d.p.localReader.root]=w,B[d.p.localReader.userdata]=d.p.userData,w=null,B}},P=function(a,b){var c,e,f,g,h,i,j,n,p="",q=d.p.pager?$.jgrid.jqID(d.p.pager.substr(1)):"",r=q?"_"+q:"",s=d.p.toppager?"_"+d.p.toppager.substr(1):"";if(f=parseInt(d.p.page,10)-1,0>f&&(f=0),f*=parseInt(d.p.rowNum,10),h=f+d.p.reccount,d.p.scroll){var t=$("tbody:first > tr:gt(0)",d.grid.bDiv);f=h-t.length,d.p.reccount=t.length;var u=t.outerHeight()||d.grid.prevRowHeight;if(u){var v=f*u,w=parseInt(d.p.records,10)*u;$(">div:first",d.grid.bDiv).css({height:w}).children("div:first").css({height:v,display:v?"":"none"}),0===d.grid.bDiv.scrollTop&&d.p.page>1&&(d.grid.bDiv.scrollTop=d.p.rowNum*(d.p.page-1)*u)}d.grid.bDiv.scrollLeft=d.grid.hDiv.scrollLeft}if(p=d.p.pager||"",p+=d.p.toppager?p?","+d.p.toppager:d.p.toppager:""){if(j=$.jgrid.getRegional(d,"formatter.integer"),c=z(d.p.page),e=z(d.p.lastpage),$(".selbox",p)[this.p.useProp?"prop":"attr"]("disabled",!1),d.p.pginput===!0&&($("#input"+r).html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input "+k(l,"pgInput",!1,"ui-pg-input")+" type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(q)+"'></span>")),d.p.toppager&&$("#input_t"+s).html($.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input "+k(l,"pgInput",!1,"ui-pg-input")+" type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(q)+"_toppager'></span>")),$(".ui-pg-input",p).val(d.p.page),n=d.p.toppager?"#sp_1"+r+",#sp_1"+r+"_toppager":"#sp_1"+r,$(n).html($.fmatter?$.fmatter.util.NumberFormat(d.p.lastpage,j):d.p.lastpage)),d.p.viewrecords)if(0===d.p.reccount)$(".ui-paging-info",p).html($.jgrid.getRegional(d,"defaults.emptyrecords",d.p.emptyrecords));else{g=f+1,i=d.p.records,$.fmatter&&(g=$.fmatter.util.NumberFormat(g,j),h=$.fmatter.util.NumberFormat(h,j),i=$.fmatter.util.NumberFormat(i,j));var x=$.jgrid.getRegional(d,"defaults.recordtext",d.p.recordtext);$(".ui-paging-info",p).html($.jgrid.template(x,g,h,i))}d.p.pgbuttons===!0&&(0>=c&&(c=e=0),1===c||0===c?($("#first"+r+", #prev"+r).addClass(m).removeClass(o),d.p.toppager&&$("#first_t"+s+", #prev_t"+s).addClass(m).removeClass(o)):($("#first"+r+", #prev"+r).removeClass(m),d.p.toppager&&$("#first_t"+s+", #prev_t"+s).removeClass(m)),c===e||0===c?($("#next"+r+", #last"+r).addClass(m).removeClass(o),d.p.toppager&&$("#next_t"+s+", #last_t"+s).addClass(m).removeClass(o)):($("#next"+r+", #last"+r).removeClass(m),d.p.toppager&&$("#next_t"+s+", #last_t"+s).removeClass(m)))}a===!0&&d.p.rownumbers===!0&&$(">td.jqgrid-rownum",d.rows).each(function(a){$(this).html(f+1+a)}),b&&d.p.jqgdnd&&$(d).jqGrid("gridDnD","updateDnD"),$(d).triggerHandler("jqGridGridComplete"),$.isFunction(d.p.gridComplete)&&d.p.gridComplete.call(d),$(d).triggerHandler("jqGridAfterGridComplete")},Q=function(){d.grid.hDiv.loading=!0,d.p.hiddengrid||$(d).jqGrid("progressBar",{method:"show",loadtype:d.p.loadui,htmlcontent:$.jgrid.getRegional(d,"defaults.loadtext",d.p.loadtext)})},R=function(){d.grid.hDiv.loading=!1,$(d).jqGrid("progressBar",{method:"hide",loadtype:d.p.loadui})},S=function(a){if(!d.grid.hDiv.loading){var b,c,e=d.p.scroll&&a===!1,f={},g=d.p.prmNames;d.p.page<=0&&(d.p.page=Math.min(1,d.p.lastpage)),null!==g.search&&(f[g.search]=d.p.search),null!==g.nd&&(f[g.nd]=(new Date).getTime()),null!==g.rows&&(f[g.rows]=d.p.rowNum),null!==g.page&&(f[g.page]=d.p.page),null!==g.sort&&(f[g.sort]=d.p.sortname),null!==g.order&&(f[g.order]=d.p.sortorder),null!==d.p.rowTotal&&null!==g.totalrows&&(f[g.totalrows]=d.p.rowTotal);var h=$.isFunction(d.p.loadComplete),i=h?d.p.loadComplete:null,j=0;if(a=a||1,a>1?null!==g.npage?(f[g.npage]=a,j=a-1,a=1):i=function(b){d.p.page++,d.grid.hDiv.loading=!1,h&&d.p.loadComplete.call(d,b),S(a-1)}:null!==g.npage&&delete d.p.postData[g.npage],d.p.grouping){$(d).jqGrid("groupingSetup");var k,l=d.p.groupingView,m="";for(k=0;k<l.groupField.length;k++){var n=l.groupField[k];$.each(d.p.colModel,function(a,b){b.name===n&&b.index&&(n=b.index)}),m+=n+" "+l.groupOrder[k]+", "}f[g.sort]=m+f[g.sort]}$.extend(d.p.postData,f);var o=d.p.scroll?d.rows.length-1:1,p=$(d).triggerHandler("jqGridBeforeRequest");if(p===!1||"stop"===p)return;if($.isFunction(d.p.datatype))return void d.p.datatype.call(d,d.p.postData,"load_"+d.p.id,o,a,j);if($.isFunction(d.p.beforeRequest)&&(p=d.p.beforeRequest.call(d),void 0===p&&(p=!0),p===!1))return;switch(b=d.p.datatype.toLowerCase()){case"json":case"jsonp":case"xml":case"script":$.ajax($.extend({url:d.p.url,type:d.p.mtype,dataType:b,data:$.isFunction(d.p.serializeGridData)?d.p.serializeGridData.call(d,d.p.postData):d.p.postData,success:function(c,f,g){return $.isFunction(d.p.beforeProcessing)&&d.p.beforeProcessing.call(d,c,f,g)===!1?void R():("xml"===b?M(c,o,a>1,j):N(c,o,a>1,j),$(d).triggerHandler("jqGridLoadComplete",[c]),i&&i.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),e&&d.grid.populateVisible(),(d.p.loadonce||d.p.treeGrid)&&(d.p.datatype="local"),c=null,void(1===a&&R()))},error:function(b,c,e){$.isFunction(d.p.loadError)&&d.p.loadError.call(d,b,c,e),1===a&&R(),b=null},beforeSend:function(a,b){var c=!0;return $.isFunction(d.p.loadBeforeSend)&&(c=d.p.loadBeforeSend.call(d,a,b)),void 0===c&&(c=!0),c===!1?!1:void Q()}},$.jgrid.ajaxOptions,d.p.ajaxGridOptions));break;case"xmlstring":Q(),c="string"!=typeof d.p.datastr?d.p.datastr:$.parseXML(d.p.datastr),M(c),$(d).triggerHandler("jqGridLoadComplete",[c]),h&&d.p.loadComplete.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),d.p.datatype="local",d.p.datastr=null,R();break;case"jsonstring":Q(),c="string"==typeof d.p.datastr?$.jgrid.parse(d.p.datastr):d.p.datastr,N(c),$(d).triggerHandler("jqGridLoadComplete",[c]),h&&d.p.loadComplete.call(d,c),$(d).triggerHandler("jqGridAfterLoadComplete",[c]),d.p.datatype="local",d.p.datastr=null,R();break;case"local":case"clientside":Q(),d.p.datatype="local",d.p._ald=!0;var q=O();N(q,o,a>1,j),$(d).triggerHandler("jqGridLoadComplete",[q]),i&&i.call(d,q),$(d).triggerHandler("jqGridAfterLoadComplete",[q]),e&&d.grid.populateVisible(),R(),d.p._ald=!1}d.p._sort=!1}},T=function(a){$("#cb_"+$.jgrid.jqID(d.p.id),d.grid.hDiv)[d.p.useProp?"prop":"attr"]("checked",a);var b=d.p.frozenColumns?d.p.id+"_frozen":"";b&&$("#cb_"+$.jgrid.jqID(d.p.id),d.grid.fhDiv)[d.p.useProp?"prop":"attr"]("checked",a)},U=function(a,b){var c,e,f,g,i,j,n,p="<td class='ui-pg-button "+m+"'><span class='ui-separator'></span></td>",r="",s="<table class='ui-pg-table ui-common-table ui-paging-pager'><tbody><tr>",t="",u=function(a,b){var c;return $.isFunction(d.p.onPaging)&&(c=d.p.onPaging.call(d,a,b)),"stop"===c?!1:(d.p.selrow=null,d.p.multiselect&&(d.p.selarrrow=[],T(!1)),d.p.savedRow=[],!0)};if(a=a.substr(1),b+="_"+a,c="pg_"+a,e=a+"_left",f=a+"_center",g=a+"_right",$("#"+$.jgrid.jqID(a)).append("<div id='"+c+"' class='ui-pager-control' role='group'><table "+k(l,"pagerTable",!1,"ui-pg-table ui-common-table ui-pager-table")+"><tbody><tr><td id='"+e+"' align='left'></td><td id='"+f+"' align='center' style='white-space:pre;'></td><td id='"+g+"' align='right'></td></tr></tbody></table></div>").attr("dir","ltr"),d.p.rowList.length>0){t='<td dir="'+h+'">',t+="<select "+k(l,"pgSelectBox",!1,"ui-pg-selbox")+' role="listbox" title="'+($.jgrid.getRegional(d,"defaults.pgrecs",d.p.pgrecs)||"")+'">';var v;for(n=0;n<d.p.rowList.length;n++)v=d.p.rowList[n].toString().split(":"),1===v.length&&(v[1]=v[0]),t+='<option role="option" value="'+v[0]+'"'+(z(d.p.rowNum,0)===z(v[0],0)?' selected="selected"':"")+">"+v[1]+"</option>";t+="</select></td>"}if("rtl"===h&&(s+=t),d.p.pginput===!0&&(r="<td id='input"+b+"' dir='"+h+"'>"+$.jgrid.template($.jgrid.getRegional(d,"defaults.pgtext",d.p.pgtext)||"","<input class='ui-pg-input' type='text' size='2' maxlength='7' value='0' role='textbox'/>","<span id='sp_1_"+$.jgrid.jqID(a)+"'></span>")+"</td>"),d.p.pgbuttons===!0){var w=["first"+b,"prev"+b,"next"+b,"last"+b],x=k(l,"pgButtonBox",!0,"ui-pg-button"),y=[$.jgrid.getRegional(d,"defaults.pgfirst",d.p.pgfirst)||"",$.jgrid.getRegional(d,"defaults.pgprev",d.p.pgprev)||"",$.jgrid.getRegional(d,"defaults.pgnext",d.p.pgnext)||"",$.jgrid.getRegional(d,"defaults.pglast",d.p.pglast)||""];"rtl"===h&&(w.reverse(),y.reverse()),s+="<td id='"+w[0]+"' class='"+x+"' title='"+y[0]+"'><span "+k(l,"icon_first",!1,q)+"></span></td>",s+="<td id='"+w[1]+"' class='"+x+"'  title='"+y[1]+"'><span "+k(l,"icon_prev",!1,q)+"></span></td>",s+=""!==r?p+r+p:"",s+="<td id='"+w[2]+"' class='"+x+"' title='"+y[2]+"'><span "+k(l,"icon_next",!1,q)+"></span></td>",s+="<td id='"+w[3]+"' class='"+x+"' title='"+y[3]+"'><span "+k(l,"icon_end",!1,q)+"></span></td>"}else""!==r&&(s+=r);"ltr"===h&&(s+=t),s+="</tr></tbody></table>",d.p.viewrecords===!0&&$("td#"+a+"_"+d.p.recordpos,"#"+c).append("<div dir='"+h+"' style='text-align:"+d.p.recordpos+"' class='ui-paging-info'></div>"),$("td#"+a+"_"+d.p.pagerpos,"#"+c).append(s),j=$("#gbox_"+$.jgrid.jqID(d.p.id)).css("font-size")||"11px",$("#gbox_"+$.jgrid.jqID(d.p.id)).append("<div id='testpg' "+k(l,"entrieBox",!1,"ui-jqgrid")+" style='font-size:"+j+";visibility:hidden;' ></div>"),i=$(s).clone().appendTo("#testpg").width(),$("#testpg").remove(),i>0&&(""!==r&&(i+=50),$("td#"+a+"_"+d.p.pagerpos,"#"+c).width(i)),d.p._nvtd=[],d.p._nvtd[0]=i?Math.floor((d.p.width-i)/2):Math.floor(d.p.width/3),d.p._nvtd[1]=0,s=null,$(".ui-pg-selbox","#"+c).bind("change",function(){return u("records",this)?(d.p.page=Math.round(d.p.rowNum*(d.p.page-1)/this.value-.5)+1,d.p.rowNum=this.value,d.p.pager&&$(".ui-pg-selbox",d.p.pager).val(this.value),d.p.toppager&&$(".ui-pg-selbox",d.p.toppager).val(this.value),S(),!1):!1}),d.p.pgbuttons===!0&&($(".ui-pg-button","#"+c).hover(function(){$(this).hasClass(m)?this.style.cursor="default":($(this).addClass(o),this.style.cursor="pointer")},function(){$(this).hasClass(m)||($(this).removeClass(o),this.style.cursor="default")}),$("#first"+$.jgrid.jqID(b)+", #prev"+$.jgrid.jqID(b)+", #next"+$.jgrid.jqID(b)+", #last"+$.jgrid.jqID(b)).click(function(){if($(this).hasClass(m))return!1;var a=z(d.p.page,1),c=z(d.p.lastpage,1),e=!1,f=!0,g=!0,h=!0,i=!0;return 0===c||1===c?(f=!1,g=!1,h=!1,i=!1):c>1&&a>=1?1===a?(f=!1,g=!1):a===c&&(h=!1,i=!1):c>1&&0===a&&(h=!1,i=!1,a=c-1),u(this.id.split("_")[0],this)?(this.id==="first"+b&&f&&(d.p.page=1,e=!0),this.id==="prev"+b&&g&&(d.p.page=a-1,e=!0),this.id==="next"+b&&h&&(d.p.page=a+1,e=!0),this.id==="last"+b&&i&&(d.p.page=c,e=!0),e&&S(),!1):!1})),d.p.pginput===!0&&$("#"+c).on("keypress","input.ui-pg-input",function(a){var b=a.charCode||a.keyCode||0;return 13===b?u("user",this)?($(this).val(z($(this).val(),1)),d.p.page=$(this).val()>0?$(this).val():d.p.page,S(),!1):!1:this})},V=function(a,b){var c,e=d.p.colModel,f=d.p.frozenColumns?b:d.grid.headers[a].el,g="";$("span.ui-grid-ico-sort",f).addClass(m),$(f).attr("aria-selected","false"),c=e[a].index||e[a].name,e[a].lso?"asc"===e[a].lso?(e[a].lso+="-desc",g="desc"):"desc"===e[a].lso?(e[a].lso+="-asc",g="asc"):("asc-desc"===e[a].lso||"desc-asc"===e[a].lso)&&(e[a].lso=""):e[a].lso=g=e[a].firstsortorder||"asc",g?($("span.s-ico",f).show(),$("span.ui-icon-"+g,f).removeClass(m),$(f).attr("aria-selected","true")):d.p.viewsortcols[0]||$("span.s-ico",f).hide();var h=t.indexOf(c);-1===h?(t.push(c),u.push(g)):g?u[h]=g:(u.splice(h,1),t.splice(h,1)),d.p.sortorder="",d.p.sortname="";for(var i=0,j=t.length;j>i;i++)i>0&&(d.p.sortname+=", "),d.p.sortname+=t[i],i!==j-1&&(d.p.sortname+=" "+u[i]);d.p.sortorder=u[j-1]},W=function(a,b,c,e,f){if(d.p.colModel[b].sortable&&!(d.p.savedRow.length>0)){if(c||(d.p.lastsort===b&&""!==d.p.sortname?"asc"===d.p.sortorder?d.p.sortorder="desc":"desc"===d.p.sortorder&&(d.p.sortorder="asc"):d.p.sortorder=d.p.colModel[b].firstsortorder||"asc",d.p.page=1),d.p.multiSort)V(b,f);else{if(e){if(d.p.lastsort===b&&d.p.sortorder===e&&!c)return;d.p.sortorder=e}var g,h=d.grid.headers[d.p.lastsort]?d.grid.headers[d.p.lastsort].el:null,i=d.p.frozenColumns?f:d.grid.headers[b].el,j="single"===d.p.viewsortcols[1]?!0:!1;g=$(h).find("span.ui-grid-ico-sort"),g.addClass(m),j&&$(g).css("display","none"),$(h).attr("aria-selected","false"),d.p.frozenColumns&&(g=d.grid.fhDiv.find("span.ui-grid-ico-sort"),g.addClass(m),j&&g.css("display","none"),d.grid.fhDiv.find("th").attr("aria-selected","false")),g=$(i).find("span.ui-icon-"+d.p.sortorder),g.removeClass(m),j&&g.css("display",""),$(i).attr("aria-selected","true"),d.p.viewsortcols[0]||(d.p.lastsort!==b?(d.p.frozenColumns&&d.grid.fhDiv.find("span.s-ico").hide(),$("span.s-ico",h).hide(),$("span.s-ico",i).show()):""===d.p.sortname&&$("span.s-ico",i).show()),a=a.substring(5+d.p.id.length+1),d.p.sortname=d.p.colModel[b].index||a}if("stop"===$(d).triggerHandler("jqGridSortCol",[d.p.sortname,b,d.p.sortorder]))return void(d.p.lastsort=b);if($.isFunction(d.p.onSortCol)&&"stop"===d.p.onSortCol.call(d,d.p.sortname,b,d.p.sortorder))return void(d.p.lastsort=b);if("local"===d.p.datatype?d.p.deselectAfterSort&&$(d).jqGrid("resetSelection"):(d.p.selrow=null,d.p.multiselect&&T(!1),d.p.selarrrow=[],d.p.savedRow=[]),d.p.scroll){var k=d.grid.bDiv.scrollLeft;I.call(d,!0,!1),d.grid.hDiv.scrollLeft=k}d.p.subGrid&&"local"===d.p.datatype&&$("td.sgexpanded","#"+$.jgrid.jqID(d.p.id)).each(function(){$(this).trigger("click")}),d.p._sort=!0,S(),d.p.lastsort=b,d.p.sortname!==a&&b&&(d.p.lastsort=b)}},X=function(){var a,b,c,f,g=0,h=$.jgrid.cell_width?0:z(d.p.cellLayout,0),i=0,j=z(d.p.scrollOffset,0),k=!1,l=0;$.each(d.p.colModel,function(){if(void 0===this.hidden&&(this.hidden=!1),d.p.grouping&&d.p.autowidth){var a=$.inArray(this.name,d.p.groupingView.groupField);a>=0&&d.p.groupingView.groupColumnShow.length>a&&(this.hidden=!d.p.groupingView.groupColumnShow[a])}this.widthOrg=b=z(this.width,0),this.hidden===!1&&(g+=b+h,this.fixed?l+=b+h:i++)}),isNaN(d.p.width)&&(d.p.width=g+(d.p.shrinkToFit!==!1||isNaN(d.p.height)?0:j)),e.width=d.p.width,d.p.tblwidth=g,d.p.shrinkToFit===!1&&d.p.forceFit===!0&&(d.p.forceFit=!1),d.p.shrinkToFit===!0&&i>0&&(c=e.width-h*i-l,isNaN(d.p.height)||(c-=j,k=!0),g=0,$.each(d.p.colModel,function(e){this.hidden!==!1||this.fixed||(b=Math.round(c*this.width/(d.p.tblwidth-h*i-l)),this.width=b,g+=b,a=e)}),f=0,k?e.width-l-(g+h*i)!==j&&(f=e.width-l-(g+h*i)-j):k||1===Math.abs(e.width-l-(g+h*i))||(f=e.width-l-(g+h*i)),d.p.colModel[a].width+=f,d.p.tblwidth=g+f+h*i+l,d.p.tblwidth>d.p.width&&(d.p.colModel[a].width-=d.p.tblwidth-parseInt(d.p.width,10),d.p.tblwidth=d.p.width))},Y=function(a){var b,c=a,e=a;for(b=a+1;b<d.p.colModel.length;b++)if(d.p.colModel[b].hidden!==!0){e=b;break}return e-c},Z=function(a){var b=$(d.grid.headers[a].el),c=[b.position().left+b.outerWidth()];return"rtl"===d.p.direction&&(c[0]=d.p.width-c[0]),c[0]-=d.grid.bDiv.scrollLeft,c.push($(d.grid.hDiv).position().top),c.push($(d.grid.bDiv).offset().top-$(d.grid.hDiv).offset().top+$(d.grid.bDiv).height()),c},_=function(a){var b,c=d.grid.headers,e=$.jgrid.getCellIndex(a);for(b=0;b<c.length;b++)if(a===c[b].el){e=b;break}return e},aa=function(a,b,c){var e,f,g=d.p.colModel,h=g.length,i=[],j=$.jgrid.getRegional(d,"colmenu"),k='<ul id="col_menu" class="ui-search-menu  ui-col-menu modal-content" role="menu" tabindex="0" style="left:'+b+"px;top:"+a+'px;">';for(e=0;h>e;e++){var l=g[e].hidden?"":"checked",m=g[e].name,n=d.p.colNames[e];f="cb"===m||"subgrid"===m||"rn"===m||g[e].hidedlg?"style='display:none'":"",k+="<li "+f+' class="ui-menu-item" role="presentation" draggable="true"><a class="g-menu-item" tabindex="0" role="menuitem" ><table class="ui-common-table" ><tr><td class="menu_icon" title="'+j.reorder+'"><span class="'+q+" "+r.icon_move+' notclick"></span></td><td class="menu_icon"><input class="'+r.input_checkbox+'" type="checkbox" name="'+m+'" '+l+'></td><td class="menu_text">'+n+"</td></tr></table></a></li>",i.push(e)}k+="</ul>",$(c).append(k),$("#col_menu").addClass("ui-menu "+r.menu_widget),$.fn.html5sortable()&&$("#col_menu").html5sortable({handle:"span",forcePlaceholderSize:!0}).bind("sortupdate",function(a,b){for(i.splice(b.startindex,1),i.splice(b.endindex,0,b.startindex),$(d).jqGrid("destroyFrozenColumns"),$(d).jqGrid("remapColumns",i,!0),$(d).jqGrid("setFrozenColumns"),e=0;h>e;e++)i[e]=e}),$("#col_menu > li > a").on("click",function(a){var b;$(a.target).hasClass("notclick")||($(a.target).is(":input")?b=$(a.target).is(":checked"):(b=!$("input",this).is(":checked"),$("input",this).prop("checked",b)),b?($(d).jqGrid("showCol",$("input",this).attr("name")),$(this).parent().attr("draggable","true")):($(d).jqGrid("hideCol",$("input",this).attr("name")),$(this).parent().attr("draggable","false")))}).hover(function(){$(this).addClass(o)},function(){$(this).removeClass(o)})},ba=function(a,b,c,e){var f,g,h,i,j,k=d.p.colModel[a],l="",m="",n="",p="",q="",s="",t=["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],u=["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],v=$.jgrid.getRegional(d,"search"),w=$.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common;
if(k){f=d.p.colFilters&&d.p.colFilters[k.name]?d.p.colFilters[k.name]:!1,f&&!$.isEmptyObject(f)&&(l=f.oper1,m=f.value1,n=f.rule,p=f.oper2,q=f.value2),k.searchoptions||(k.searchoptions={}),g=k.searchoptions.sopt?k.searchoptions.sopt:"text"===k.sorttype?u:t,h=k.searchoptions.operands?k.searchoptions.operands:v.groupOps,j=$("<form></form>");var x="<div>"+$.jgrid.getRegional(d,"colmenu.searchTitle")+"</div>";x+='<div><select id="oper1" class="'+r.filter_select+'">',$.each(v.odata,function(a,b){i=b.oper===l?'selected="selected"':"",-1!==$.inArray(b.oper,g)&&(s+='<option value="'+b.oper+'" '+i+">"+b.text+"</option>")}),x+=s,x+="</select></div>",j.append(x);var y="";k.searchoptions.defaultValue&&(y=$.isFunction(k.searchoptions.defaultValue)?k.searchoptions.defaultValue.call(d):k.searchoptions.defaultValue),m&&(y=m);var z=$.extend(k.searchoptions,{name:k.index||k.name,id:"sval1_"+d.p.idPrefix+k.name,oper:"search"}),A=$.jgrid.createEl.call(d,k.stype,z,y,!1,$.extend({},$.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{}));$(A).addClass(r.filter_input),x=$("<div></div>").append(A),j.append(x),x='<div><select id="operand" class="'+r.filter_select+'">',$.each(h,function(a,b){i=b.op===n?'selected="selected"':"",x+="<option value='"+b.op+"' "+i+">"+b.text+"</option>"}),x+="</select></div>",j.append(x),s="",$.each(v.odata,function(a,b){i=b.oper===p?'selected="selected"':"",-1!==$.inArray(b.oper,g)&&(s+='<option value="'+b.oper+'" '+i+">"+b.text+"</option>")}),x='<div><select id="oper2" class="'+r.filter_select+'">'+s+"</select></div>",j.append(x),y=q?q:"",z=$.extend(k.searchoptions,{name:k.index||k.name,id:"sval2_"+d.p.idPrefix+k.name,oper:"search"}),A=$.jgrid.createEl.call(d,k.stype,z,y,!1,$.extend({},$.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{})),$(A).addClass(r.filter_input),x=$("<div></div>").append(A),j.append(x),x="<div>",x+="<div class='search_buttons'><a tabindex='0' id='bs_reset' class='fm-button "+w.button+" ui-reset'>"+v.Reset+"</a></div>",x+="<div class='search_buttons'><a tabindex='0' id='bs_search' class='fm-button "+w.button+" ui-search'>"+v.Find+"</a></div>",x+="</div>",j.append(x),j=$('<li class="ui-menu-item" role="presentation"></li>').append(j),j=$('<ul id="search_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="left:'+c+"px;top:"+b+'px;"></ul>').append(j),$(e).append(j),$("#search_menu").addClass("ui-menu "+r.menu_widget),$("#bs_reset, #bs_search","#search_menu").hover(function(){$(this).addClass(o)},function(){$(this).removeClass(o)}),$(j).find("#bs_reset").click(function(a){return d.p.colFilters[k.name]={},d.p.postData.filters=ca(),d.p.search=!0,$(d).trigger("reloadGrid"),$("#column_menu").remove(),!1}),$(j).find("#bs_search").click(function(a){return d.p.colFilters[k.name]={oper1:$("#oper1","#search_menu").val(),value1:$("#sval1_"+d.p.idPrefix+k.name,"#search_menu").val(),rule:$("#operand","#search_menu").val(),oper2:$("#oper2","#search_menu").val(),value2:$("#sval2_"+d.p.idPrefix+k.name,"#search_menu").val()},d.p.postData.filters=ca(),d.p.search=!0,$(d).trigger("reloadGrid"),$("#column_menu").remove(),!1})}},ca=function(){var a="AND",b='{"groupOp":"'+a+'","rules":[], "groups" : [',c=0;for(var e in d.p.colFilters)if(d.p.colFilters.hasOwnProperty(e)){var f=d.p.colFilters[e];$.isEmptyObject(f)||(c>0&&(b+=","),b+='{"groupOp": "'+f.rule+'", "rules" : [',b+='{"field":"'+e+'",',b+='"op":"'+f.oper1+'",',f.value1+="",b+='"data":"'+f.value1.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',f.value2&&(b+=',{"field":"'+e+'",',b+='"op":"'+f.oper2+'",',f.value2+="",b+='"data":"'+f.value2.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}'),b+="]}",c++)}return b+="]}"},da=function(a,b){var c=d.p.colModel[a],e=d.p.groupingView;-1!==b?e.groupField.splice(b,1):e.groupField.push(c.name),$(d).jqGrid("groupingGroupBy",e.groupField),d.p.frozenColumns&&($(d).jqGrid("destroyFrozenColumns"),$(d).jqGrid("setFrozenColumns"))},ea=function(a,b){var c,e=[],f=d.p.colModel.length,g=-1,h=d.p.colModel;for(c=0;f>c;c++)h[c].frozen&&(g=c),e.push(c);e.splice(a,1),e.splice(g+(b?1:0),0,a),h[a].frozen=b,$(d).jqGrid("destroyFrozenColumns"),$(d).jqGrid("remapColumns",e,!0),$(d).jqGrid("setFrozenColumns")},fa=function(a,b,c){b=parseInt(b,10),c=parseInt(c,10)+25;var e,f,g=$(".ui-jqgrid-view").css("font-size")||"11px",h='<ul id="column_menu" class="ui-search-menu modal-content column-menu" role="menu" tabindex="0" style="font-size:'+g+";left:"+b+"px;top:"+c+'px;">',i=d.p.colModel[a],j=$.extend({sorting:!0,columns:!0,filtering:!0,seraching:!0,grouping:!0,freeze:!0},i.coloptions),k=$.jgrid.getRegional(d,"colmenu");j.sorting&&(h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="sortasc"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_sort_asc+'"></span></td><td class="menu_text">'+k.sortasc+"</td></tr></table></a></li>",h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="sortdesc"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_sort_desc+'"></span></td><td class="menu_text">'+k.sortdesc+"</td></tr></table></a></li>"),j.columns&&(h+='<li class="ui-menu-item divider" role="separator"></li>',h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="columns"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_columns+'"></span></td><td class="menu_text">'+k.columns+"</td></tr></table></a></li>"),j.filtering&&(h+='<li class="ui-menu-item divider" role="separator"></li>',h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="filtering"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_filter+'"></span></td><td class="menu_text">'+k.filter+" "+(i.label||i.name)+"</td></tr></table></a></li>"),j.grouping&&(e=$.inArray(i.name,d.p.groupingView.groupField),h+='<li class="ui-menu-item divider" role="separator"></li>',h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="grouping"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_group+'"></span></td><td class="menu_text">'+(-1!==e?k.ungrouping:k.grouping+" "+(i.label||i.name))+"</td></tr></table></a></li>"),j.freeze&&(f=i.frozen&&d.p.frozenColumns?!1:!0,h+='<li class="ui-menu-item divider" role="separator"></li>',h+='<li class="ui-menu-item" role="presentation"><a class="g-menu-item" tabindex="0" role="menuitem" value="freeze"><table class="ui-common-table"><tr><td class="menu_icon"><span class="'+q+" "+r.icon_freeze+'"></span></td><td class="menu_text">'+(f?k.freeze+" "+(i.label||i.name):k.unfreeze)+"</td></tr></table></a></li>"),h+="</ul>",$("body").append(h),$("#column_menu").addClass("ui-menu "+r.menu_widget),$("#column_menu > li > a").hover(function(){if($("#col_menu").remove(),$("#search_menu").remove(),"columns"===$(this).attr("value")){var b=$(this).parent().width()+18,c=$(this).parent().offset().top-40;aa(c,b,$(this).parent())}if("filtering"===$(this).attr("value")){var b=$(this).parent().width()+18,c=$(this).parent().offset().top-40;ba(a,c,b,$(this).parent())}$(this).addClass(o)},function(){$(this).removeClass(o)}).click(function(){var b=$(this).attr("value"),c=d.grid.headers[a].el;"sortasc"===b?W("jqgh_"+d.p.id+"_"+i.name,a,!0,"asc",c):"sortdesc"===b?W("jqgh_"+d.p.id+"_"+i.name,a,!0,"desc",c):"grouping"===b?da(a,e):"freeze"===b&&ea(a,f),(-1!==b.indexOf("sort")||"grouping"===b||"freeze"===b)&&$(this).remove()})};for(d.p.colMenu&&$("body").on("click",function(a){$(a.target).closest(".column-menu").length||$("#column_menu").remove()}),this.p.id=this.id,-1===$.inArray(d.p.multikey,y)&&(d.p.multikey=!1),d.p.keyName=!1,i=0;i<d.p.colModel.length;i++)x="string"==typeof d.p.colModel[i].template?null!=$.jgrid.cmTemplate&&"object"==typeof $.jgrid.cmTemplate[d.p.colModel[i].template]?$.jgrid.cmTemplate[d.p.colModel[i].template]:{}:d.p.colModel[i].template,d.p.colModel[i]=$.extend(!0,{},d.p.cmTemplate,x||{},d.p.colModel[i]),d.p.keyName===!1&&d.p.colModel[i].key===!0&&(d.p.keyName=d.p.colModel[i].name);if(d.p.sortorder=d.p.sortorder.toLowerCase(),$.jgrid.cell_width=$.jgrid.cellWidth(),d.p.grouping===!0&&(d.p.scroll=!1,d.p.rownumbers=!1,d.p.treeGrid=!1,d.p.gridview=!0),this.p.treeGrid===!0){try{$(this).jqGrid("setTreeGrid")}catch(ga){}"local"!==d.p.datatype&&(d.p.localReader={id:"_id_"})}if(this.p.subGrid)try{$(d).jqGrid("setSubGrid")}catch(ha){}this.p.multiselect&&(this.p.colNames.unshift("<input role='checkbox' id='cb_"+this.p.id+"' class='cbox' type='checkbox'/>"),this.p.colModel.unshift({name:"cb",width:$.jgrid.cell_width?d.p.multiselectWidth+d.p.cellLayout:d.p.multiselectWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0,frozen:!0})),this.p.rownumbers&&(this.p.colNames.unshift(""),this.p.colModel.unshift({name:"rn",width:d.p.rownumWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,align:"center",fixed:!0,frozen:!0})),d.p.xmlReader=$.extend(!0,{root:"rows",row:"row",page:"rows>page",total:"rows>total",records:"rows>records",repeatitems:!0,cell:"cell",id:"[id]",userdata:"userdata",subgrid:{root:"rows",row:"row",repeatitems:!0,cell:"cell"}},d.p.xmlReader),d.p.jsonReader=$.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!0,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},d.p.jsonReader),d.p.localReader=$.extend(!0,{root:"rows",page:"page",total:"total",records:"records",repeatitems:!1,cell:"cell",id:"id",userdata:"userdata",subgrid:{root:"rows",repeatitems:!0,cell:"cell"}},d.p.localReader),d.p.scroll&&(d.p.pgbuttons=!1,d.p.pginput=!1,d.p.rowList=[]),d.p.data.length&&(J(),K());var ia,ja,ka,la,ma,na,oa,pa,qa,ra="<thead><tr class='ui-jqgrid-labels' role='row'>",sa="",ta="",ua="";if(d.p.shrinkToFit===!0&&d.p.forceFit===!0)for(i=d.p.colModel.length-1;i>=0;i--)if(!d.p.colModel[i].hidden){d.p.colModel[i].resizable=!1;break}if("horizontal"===d.p.viewsortcols[1]?(ta=" ui-i-asc",ua=" ui-i-desc"):"single"===d.p.viewsortcols[1]&&(ta=" ui-single-sort-asc",ua=" ui-single-sort-desc",sa=" style='display:none'",d.p.viewsortcols[0]=!1),ia=s?"class='ui-th-div-ie'":"",pa="<span class='s-ico' style='display:none'>",pa+="<span sort='asc'  class='ui-grid-ico-sort ui-icon-asc"+ta+" ui-sort-"+h+" "+m+" "+q+" "+k(l,"icon_asc",!0)+"'"+sa+"></span>",pa+="<span sort='desc' class='ui-grid-ico-sort ui-icon-desc"+ua+" ui-sort-"+h+" "+m+" "+q+" "+k(l,"icon_desc",!0)+"'"+sa+"></span></span>",d.p.multiSort&&d.p.sortname)for(t=d.p.sortname.split(","),i=0;i<t.length;i++)v=$.trim(t[i]).split(" "),t[i]=$.trim(v[0]),u[i]=v[1]?$.trim(v[1]):d.p.sortorder||"asc";for(i=0;i<this.p.colNames.length;i++){var va=d.p.headertitles?' title="'+$.jgrid.stripHtml(d.p.colNames[i])+'"':"";qa=d.p.colModel[i],qa.hasOwnProperty("colmenu")||(qa.colmenu="rn"===qa.name||"cb"===qa.name||"subgrid"===qa.name?!1:!0),ra+="<th id='"+d.p.id+"_"+qa.name+"' role='columnheader' "+k(l,"headerBox",!1,"ui-th-column ui-th-"+h)+" "+va+">",ja=qa.index||qa.name,ra+="<div class='ui-th-div' id='jqgh_"+d.p.id+"_"+qa.name+"' "+ia+">"+d.p.colNames[i],qa.width?qa.width=parseInt(qa.width,10):qa.width=150,"boolean"!=typeof qa.title&&(qa.title=!0),qa.lso="",ja===d.p.sortname&&(d.p.lastsort=i),d.p.multiSort&&(v=$.inArray(ja,t),-1!==v&&(qa.lso=u[v])),ra+=pa,d.p.colMenu&&qa.colmenu&&(ra+="<a class='colmenu' href='#'><span class='colmenuspan "+q+" "+r.icon_menu+"'></span></a>"),ra+="</div></th>"}if(ra+="</tr></thead>",pa=null,qa=null,$(this).append(ra),$("thead tr:first th",this).hover(function(){$(this).addClass(o)},function(){$(this).removeClass(o)}),this.p.multiselect){var wa,xa=[];$("#cb_"+$.jgrid.jqID(d.p.id),this).bind("click",function(){d.p.selarrrow=[];var a=d.p.frozenColumns===!0?d.p.id+"_frozen":"";this.checked?($(d.rows).each(function(b){b>0&&($(this).hasClass("ui-subgrid")||$(this).hasClass("jqgroup")||$(this).hasClass(m)||$(this).hasClass("jqfoot")||($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id))[d.p.useProp?"prop":"attr"]("checked",!0),$(this).addClass(n).attr("aria-selected","true"),d.p.selarrrow.push(this.id),d.p.selrow=this.id,a&&($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id),d.grid.fbDiv)[d.p.useProp?"prop":"attr"]("checked",!0),$("#"+$.jgrid.jqID(this.id),d.grid.fbDiv).addClass(n))))}),wa=!0,xa=[]):($(d.rows).each(function(b){b>0&&($(this).hasClass("ui-subgrid")||$(this).hasClass("jqgroup")||$(this).hasClass(m)||$(this).hasClass("jqfoot")||($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id))[d.p.useProp?"prop":"attr"]("checked",!1),$(this).removeClass(n).attr("aria-selected","false"),xa.push(this.id),a&&($("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(this.id),d.grid.fbDiv)[d.p.useProp?"prop":"attr"]("checked",!1),$("#"+$.jgrid.jqID(this.id),d.grid.fbDiv).removeClass(n))))}),d.p.selrow=null,wa=!1),$(d).triggerHandler("jqGridSelectAll",[wa?d.p.selarrrow:xa,wa]),$.isFunction(d.p.onSelectAll)&&d.p.onSelectAll.call(d,wa?d.p.selarrrow:xa,wa)})}if(d.p.autowidth===!0){var ya=$(w).innerWidth();d.p.width=ya>0?ya:"nw"}X(),$(w).css("width",e.width+"px").append("<div class='ui-jqgrid-resize-mark' id='rs_m"+d.p.id+"'>&#160;</div>"),d.p.scrollPopUp&&$(w).append("<div "+k(l,"scrollBox",!1,"loading ui-scroll-popup")+" id='scroll_g"+d.p.id+"'></div>"),$(j).css("width",e.width+"px"),ra=$("thead:first",d).get(0);var za="";d.p.footerrow&&(za+="<table role='presentation' style='width:"+d.p.tblwidth+"px' "+k(l,"footerTable",!1,"ui-jqgrid-ftable ui-common-table")+"><tbody><tr role='row' "+k(l,"footerBox",!1,"footrow footrow-"+h)+">");var Aa=$("tr:first",ra),Ba="<tr class='jqgfirstrow' role='row'>";if(d.p.disableClick=!1,$("th",Aa).each(function(a){qa=d.p.colModel[a],ka=qa.width,void 0===qa.resizable&&(qa.resizable=!0),qa.resizable?(la=document.createElement("span"),$(la).html("&#160;").addClass("ui-jqgrid-resize ui-jqgrid-resize-"+h).css("cursor","col-resize"),$(this).addClass(d.p.resizeclass)):la="",$(this).css("width",ka+"px").prepend(la),la=null;var b="";qa.hidden&&($(this).css("display","none"),b="display:none;"),Ba+="<td role='gridcell' style='height:0px;width:"+ka+"px;"+b+"'></td>",e.headers[a]={width:ka,el:this},sa=qa.sortable,"boolean"!=typeof sa&&(qa.sortable=!0,sa=!0);var c=qa.name;"cb"!==c&&"subgrid"!==c&&"rn"!==c&&d.p.viewsortcols[2]&&$(">div",this).addClass("ui-jqgrid-sortable"),sa&&(d.p.multiSort?d.p.viewsortcols[0]?($("div span.s-ico",this).show(),d.p.colModel[a].lso&&$("div span.ui-icon-"+qa.lso,this).removeClass(m).css("display","")):d.p.colModel[a].lso&&($("div span.s-ico",this).show(),$("div span.ui-icon-"+qa.lso,this).removeClass(m).css("display","")):d.p.viewsortcols[0]?($("div span.s-ico",this).show(),a===d.p.lastsort&&$("div span.ui-icon-"+d.p.sortorder,this).removeClass(m).css("display","")):a===d.p.lastsort&&""!==d.p.sortname&&($("div span.s-ico",this).show(),$("div span.ui-icon-"+d.p.sortorder,this).removeClass(m).css("display",""))),d.p.footerrow&&(za+="<td role='gridcell' "+A(a,0,"",null,"",!1)+">&#160;</td>")}).mousedown(function(a){if(1===$(a.target).closest("th>span.ui-jqgrid-resize").length){var b=_(this);return d.p.forceFit===!0&&(d.p.nv=Y(b)),e.dragStart(b,a,Z(b)),!1}}).click(function(a){if(d.p.disableClick)return d.p.disableClick=!1,!1;var b,c,e="th>div.ui-jqgrid-sortable";d.p.viewsortcols[2]||(e="th>div>span>span.ui-grid-ico-sort");var f=$(a.target).closest(e);if(1===f.length){var g;if(d.p.frozenColumns){var h=$(this)[0].id.substring(d.p.id.length+1);$(d.p.colModel).each(function(a){return this.name===h?(g=a,!1):void 0})}else g=_(this);if($(a.target).hasClass("colmenuspan")){null!=$("#column_menu")[0]&&$("#column_menu").remove();var i=$.jgrid.getCellIndex(a.target);if(-1===i)return;var j=$(this).offset(),k=j.left,l=j.top;return fa(i,k,l,f),void a.stopPropagation()}return d.p.viewsortcols[2]||(b=!0,c=f.attr("sort")),null!=g&&W($("div",this)[0].id,g,b,c,this),!1}}),qa=null,d.p.sortable&&$.fn.sortable)try{$(d).jqGrid("sortableColumns",Aa)}catch(Ca){}d.p.footerrow&&(za+="</tr></tbody></table>"),Ba+="</tr>",oa=document.createElement("tbody"),this.appendChild(oa),$(this).addClass(k(l,"rowTable",!0,"ui-jqgrid-btable ui-common-table")).append(Ba),Ba=null;var Da=$("<table "+k(l,"headerTable",!1,"ui-jqgrid-htable ui-common-table")+" style='width:"+d.p.tblwidth+"px' role='presentation' aria-labelledby='gbox_"+this.id+"'></table>").append(ra),Ea=d.p.caption&&d.p.hiddengrid===!0?!0:!1,Fa=$("<div class='ui-jqgrid-hbox"+("rtl"===h?"-rtl":"")+"'></div>");ra=null,e.hDiv=document.createElement("div"),e.hDiv.style.width=e.width+"px",e.hDiv.className=k(l,"headerDiv",!0,"ui-jqgrid-hdiv"),$(e.hDiv).append(Fa),$(Fa).append(Da),Da=null,Ea&&$(e.hDiv).hide(),d.p.pager&&("string"==typeof d.p.pager?"#"!==d.p.pager.substr(0,1)&&(d.p.pager="#"+d.p.pager):d.p.pager="#"+$(d.p.pager).attr("id"),$(d.p.pager).css({width:e.width+"px"}).addClass(k(l,"pagerBox",!0,"ui-jqgrid-pager")).appendTo(w),Ea&&$(d.p.pager).hide(),U(d.p.pager,"")),d.p.cellEdit===!1&&d.p.hoverrows===!0&&$(d).bind("mouseover",function(a){na=$(a.target).closest("tr.jqgrow"),"ui-subgrid"!==$(na).attr("class")&&$(na).addClass(o)}).bind("mouseout",function(a){na=$(a.target).closest("tr.jqgrow"),$(na).removeClass(o)});var Ga,Ha,Ia;$(d).before(e.hDiv).click(function(a){if(ma=a.target,na=$(ma,d.rows).closest("tr.jqgrow"),0===$(na).length||na[0].className.indexOf(m)>-1||($(ma,d).closest("table.ui-jqgrid-btable").attr("id")||"").replace("_frozen","")!==d.id)return this;var b=$(ma).hasClass("cbox"),c=$(d).triggerHandler("jqGridBeforeSelectRow",[na[0].id,a]);if(c=c===!1||"stop"===c?!1:!0,$.isFunction(d.p.beforeSelectRow)){var e=d.p.beforeSelectRow.call(d,na[0].id,a);(e===!1||"stop"===e)&&(c=!1)}if("A"!==ma.tagName&&("INPUT"!==ma.tagName&&"TEXTAREA"!==ma.tagName&&"OPTION"!==ma.tagName&&"SELECT"!==ma.tagName||b))if(Ga=na[0].id,ma=$(ma).closest("tr.jqgrow>td"),ma.length>0&&(Ha=$.jgrid.getCellIndex(ma),Ia=$(ma).closest("td,th").html(),$(d).triggerHandler("jqGridCellSelect",[Ga,Ha,Ia,a]),$.isFunction(d.p.onCellSelect)&&d.p.onCellSelect.call(d,Ga,Ha,Ia,a)),d.p.cellEdit!==!0){if(c)if(d.p.multikey)a[d.p.multikey]?$(d).jqGrid("setSelection",Ga,!0,a):d.p.multiselect&&b&&(b=$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+Ga).is(":checked"),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+Ga)[d.p.useProp?"prop":"attr"]("checked",!b));else if(d.p.multiselect&&d.p.multiboxonly)if(b)$(d).jqGrid("setSelection",Ga,!0,a);else{var f=d.p.frozenColumns?d.p.id+"_frozen":"";$(d.p.selarrrow).each(function(a,b){var c=$(d).jqGrid("getGridRowById",b);c&&$(c).removeClass(n),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b))[d.p.useProp?"prop":"attr"]("checked",!1),f&&($("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(f)).removeClass(n),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(f))[d.p.useProp?"prop":"attr"]("checked",!1))}),d.p.selarrrow=[],$(d).jqGrid("setSelection",Ga,!0,a)}else $(d).jqGrid("setSelection",Ga,!0,a)}else if(d.p.multiselect&&b&&c)$(d).jqGrid("setSelection",Ga,!0,a);else if(ma.length>0)try{$(d).jqGrid("editCell",na[0].rowIndex,Ha,!0)}catch(g){}}).bind("reloadGrid",function(a,b){if(d.p.treeGrid===!0&&(d.p.datatype=d.p.treedatatype),b=b||{},b.current&&d.grid.selectionPreserver(d),"local"===d.p.datatype?($(d).jqGrid("resetSelection"),d.p.data.length&&(J(),K())):d.p.treeGrid||(d.p.selrow=null,d.p.multiselect&&(d.p.selarrrow=[],T(!1)),d.p.savedRow=[]),d.p.scroll&&I.call(d,!0,!1),b.page){var c=b.page;c>d.p.lastpage&&(c=d.p.lastpage),1>c&&(c=1),d.p.page=c,d.grid.prevRowHeight?d.grid.bDiv.scrollTop=(c-1)*d.grid.prevRowHeight*d.p.rowNum:d.grid.bDiv.scrollTop=0}return d.grid.prevRowHeight&&d.p.scroll&&void 0===b.page?(delete d.p.lastpage,d.grid.populateVisible()):d.grid.populate(),d.p.inlineNav===!0&&$(d).jqGrid("showAddEditButtons"),!1}).dblclick(function(a){if(ma=a.target,na=$(ma,d.rows).closest("tr.jqgrow"),0!==$(na).length){Ga=na[0].rowIndex,Ha=$.jgrid.getCellIndex(ma);var b=$(d).triggerHandler("jqGridDblClickRow",[$(na).attr("id"),Ga,Ha,a]);return null!=b?b:$.isFunction(d.p.ondblClickRow)&&(b=d.p.ondblClickRow.call(d,$(na).attr("id"),Ga,Ha,a),null!=b)?b:void 0}}).bind("contextmenu",function(a){if(ma=a.target,na=$(ma,d.rows).closest("tr.jqgrow"),0!==$(na).length){d.p.multiselect||$(d).jqGrid("setSelection",na[0].id,!0,a),Ga=na[0].rowIndex,Ha=$.jgrid.getCellIndex(ma);var b=$(d).triggerHandler("jqGridRightClickRow",[$(na).attr("id"),Ga,Ha,a]);return null!=b?b:$.isFunction(d.p.onRightClickRow)&&(b=d.p.onRightClickRow.call(d,$(na).attr("id"),Ga,Ha,a),null!=b)?b:void 0}}),e.bDiv=document.createElement("div"),s&&"auto"===String(d.p.height).toLowerCase()&&(d.p.height="100%"),$(e.bDiv).append($('<div style="position:relative;"></div>').append("<div></div>").append(this)).addClass("ui-jqgrid-bdiv").css({height:d.p.height+(isNaN(d.p.height)?"":"px"),width:e.width+"px"}).scroll(e.scrollGrid),$("table:first",e.bDiv).css({width:d.p.tblwidth+"px"}),$.support.tbody||2===$("tbody",this).length&&$("tbody:gt(0)",this).remove(),d.p.multikey&&($.jgrid.msie?$(e.bDiv).bind("selectstart",function(){return!1}):$(e.bDiv).bind("mousedown",function(){return!1})),Ea&&$(e.bDiv).hide();var Ja=q+" "+k(l,"icon_caption_open",!0),Ka=q+" "+k(l,"icon_caption_close",!0);e.cDiv=document.createElement("div");var La=d.p.hidegrid===!0?$("<a role='link' class='ui-jqgrid-titlebar-close HeaderButton "+p+"' title='"+($.jgrid.getRegional(d,"defaults.showhide",d.p.showhide)||"")+"' />").hover(function(){La.addClass(o)},function(){La.removeClass(o)}).append("<span class='ui-jqgrid-headlink "+Ja+"'></span>").css("rtl"===h?"left":"right","0px"):"";if($(e.cDiv).append(La).append("<span class='ui-jqgrid-title'>"+d.p.caption+"</span>").addClass("ui-jqgrid-titlebar ui-jqgrid-caption"+("rtl"===h?"-rtl":"")+" "+k(l,"gridtitleBox",!0)),$(e.cDiv).insertBefore(e.hDiv),d.p.toolbar[0]){var Ma=k(l,"customtoolbarBox",!0,"ui-userdata");e.uDiv=document.createElement("div"),"top"===d.p.toolbar[1]?$(e.uDiv).insertBefore(e.hDiv):"bottom"===d.p.toolbar[1]&&$(e.uDiv).insertAfter(e.hDiv),"both"===d.p.toolbar[1]?(e.ubDiv=document.createElement("div"),$(e.uDiv).addClass(Ma+" ui-userdata-top").attr("id","t_"+this.id).insertBefore(e.hDiv).width(e.width),$(e.ubDiv).addClass(Ma+" ui-userdata-bottom").attr("id","tb_"+this.id).insertAfter(e.hDiv).width(e.width),Ea&&$(e.ubDiv).hide()):$(e.uDiv).width(e.width).addClass(Ma+" ui-userdata-top").attr("id","t_"+this.id),Ea&&$(e.uDiv).hide()}if(d.p.toppager&&(d.p.toppager=$.jgrid.jqID(d.p.id)+"_toppager",e.topDiv=$("<div id='"+d.p.toppager+"'></div>")[0],d.p.toppager="#"+d.p.toppager,$(e.topDiv).addClass(k(l,"toppagerBox",!0,"ui-jqgrid-toppager")).width(e.width).insertBefore(e.hDiv),U(d.p.toppager,"_t")),d.p.footerrow&&(e.sDiv=$("<div class='ui-jqgrid-sdiv'></div>")[0],Fa=$("<div class='ui-jqgrid-hbox"+("rtl"===h?"-rtl":"")+"'></div>"),$(e.sDiv).append(Fa).width(e.width).insertAfter(e.hDiv),$(Fa).append(za),e.footers=$(".ui-jqgrid-ftable",e.sDiv)[0].rows[0].cells,d.p.rownumbers&&(e.footers[0].className=k(l,"rownumBox",!0,"jqgrid-rownum")),Ea&&$(e.sDiv).hide()),Fa=null,d.p.caption){var Na=d.p.datatype;d.p.hidegrid===!0&&($(".ui-jqgrid-titlebar-close",e.cDiv).click(function(a){var b,c=$.isFunction(d.p.onHeaderClick),f=".ui-jqgrid-bdiv, .ui-jqgrid-hdiv, .ui-jqgrid-toppager, .ui-jqgrid-pager, .ui-jqgrid-sdiv",g=this;return d.p.toolbar[0]===!0&&("both"===d.p.toolbar[1]&&(f+=", #"+$(e.ubDiv).attr("id")),f+=", #"+$(e.uDiv).attr("id")),b=$(f,"#gview_"+$.jgrid.jqID(d.p.id)).length,"visible"===d.p.gridstate?$(f,"#gbox_"+$.jgrid.jqID(d.p.id)).slideUp("fast",function(){b--,0===b&&($("span",g).removeClass(Ja).addClass(Ka),d.p.gridstate="hidden",$("#gbox_"+$.jgrid.jqID(d.p.id)).hasClass("ui-resizable")&&$(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(d.p.id)).hide(),$(d).triggerHandler("jqGridHeaderClick",[d.p.gridstate,a]),c&&(Ea||d.p.onHeaderClick.call(d,d.p.gridstate,a)))}):"hidden"===d.p.gridstate&&$(f,"#gbox_"+$.jgrid.jqID(d.p.id)).slideDown("fast",function(){b--,0===b&&($("span",g).removeClass(Ka).addClass(Ja),Ea&&(d.p.datatype=Na,S(),Ea=!1),d.p.gridstate="visible",$("#gbox_"+$.jgrid.jqID(d.p.id)).hasClass("ui-resizable")&&$(".ui-resizable-handle","#gbox_"+$.jgrid.jqID(d.p.id)).show(),$(d).triggerHandler("jqGridHeaderClick",[d.p.gridstate,a]),c&&(Ea||d.p.onHeaderClick.call(d,d.p.gridstate,a)))}),!1}),Ea&&(d.p.datatype="local",$(".ui-jqgrid-titlebar-close",e.cDiv).trigger("click")))}else $(e.cDiv).hide(),d.p.toppager||$(e.hDiv).addClass(k(d.p.styleUI+".common","cornertop",!0));if($(e.hDiv).after(e.bDiv).mousemove(function(a){return e.resizing?(e.dragMove(a),!1):void 0}),$(".ui-jqgrid-labels",e.hDiv).bind("selectstart",function(){return!1}),$(document).bind("mouseup.jqGrid"+d.p.id,function(){return e.resizing?(e.dragEnd(!0),!1):!0}),d.formatCol=A,d.sortData=W,d.updatepager=P,d.refreshIndex=K,d.setHeadCheckBox=T,d.constructTr=L,d.formatter=function(a,b,c,d,e){return C(a,b,c,d,e)},$.extend(e,{populate:S,emptyRows:I,beginReq:Q,endReq:R}),this.grid=e,d.addXmlData=function(a){M(a)},d.addJSONData=function(a){N(a)},this.grid.cols=this.rows[0].cells,$(d).triggerHandler("jqGridInitGrid"),$.isFunction(d.p.onInitGrid)&&d.p.onInitGrid.call(d),S(),d.p.hiddengrid=!1,d.p.responsive){var Oa="onorientationchange"in window,Pa=Oa?"orientationchange":"resize";$(window).on(Pa,function(){$(d).jqGrid("resizeGrid")})}}})},$.jgrid.extend({getGridParam:function(a,b){var c,d=this[0];if(d&&d.grid){if(void 0===b&&"string"!=typeof b&&(b="jqGrid"),c=d.p,"jqGrid"!==b)try{c=$(d).data(b)}catch(e){c=d.p}return a?void 0!==c[a]?c[a]:null:c}},setGridParam:function(a,b){return this.each(function(){if(null==b&&(b=!1),this.grid&&"object"==typeof a)if(b===!0){var c=$.extend({},this.p,a);this.p=c}else $.extend(!0,this.p,a)})},getGridRowById:function(a){var b;return this.each(function(){try{for(var c=this.rows.length;c--;)if(a.toString()===this.rows[c].id){b=this.rows[c];break}}catch(d){b=$(this.grid.bDiv).find("#"+$.jgrid.jqID(a))}}),b},getDataIDs:function(){var a,b=[],c=0,d=0;return this.each(function(){if(a=this.rows.length,a&&a>0)for(;a>c;)$(this.rows[c]).hasClass("jqgrow")&&(b[d]=this.rows[c].id,d++),c++}),b},setSelection:function(a,b,c){return this.each(function(){function d(a){var b=$(l.grid.bDiv)[0].clientHeight,c=$(l.grid.bDiv)[0].scrollTop,d=$(l.rows[a]).position().top,e=l.rows[a].clientHeight;d+e>=b+c?$(l.grid.bDiv)[0].scrollTop=d-(b+c)+e+c:b+c>d&&c>d&&($(l.grid.bDiv)[0].scrollTop=d)}var e,f,g,h,i,j,k,l=this,m=$.jgrid.getMethod("getStyleUI"),n=m(l.p.styleUI+".common","highlight",!0),o=m(l.p.styleUI+".common","disabled",!0);void 0!==a&&(b=b===!1?!1:!0,f=$(l).jqGrid("getGridRowById",a),!f||!f.className||f.className.indexOf(o)>-1||(l.p.scrollrows===!0&&(g=$(l).jqGrid("getGridRowById",a).rowIndex,g>=0&&d(g)),l.p.frozenColumns===!0&&(j=l.p.id+"_frozen"),l.p.multiselect?(l.setHeadCheckBox(!1),l.p.selrow=f.id,h=$.inArray(l.p.selrow,l.p.selarrrow),-1===h?("ui-subgrid"!==f.className&&$(f).addClass(n).attr("aria-selected","true"),e=!0,l.p.selarrrow.push(l.p.selrow)):("ui-subgrid"!==f.className&&$(f).removeClass(n).attr("aria-selected","false"),e=!1,l.p.selarrrow.splice(h,1),i=l.p.selarrrow[0],l.p.selrow=void 0===i?null:i),$("#jqg_"+$.jgrid.jqID(l.p.id)+"_"+$.jgrid.jqID(f.id))[l.p.useProp?"prop":"attr"]("checked",e),j&&(-1===h?$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).addClass(n):$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).removeClass(n),$("#jqg_"+$.jgrid.jqID(l.p.id)+"_"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j))[l.p.useProp?"prop":"attr"]("checked",e)),b&&($(l).triggerHandler("jqGridSelectRow",[f.id,e,c]),l.p.onSelectRow&&l.p.onSelectRow.call(l,f.id,e,c))):"ui-subgrid"!==f.className&&(l.p.selrow!==f.id?(k=$(l).jqGrid("getGridRowById",l.p.selrow),k&&$(k).removeClass(n).attr({"aria-selected":"false",tabindex:"-1"}),$(f).addClass(n).attr({"aria-selected":"true",tabindex:"0"}),j&&($("#"+$.jgrid.jqID(l.p.selrow),"#"+$.jgrid.jqID(j)).removeClass(n),$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(j)).addClass(n)),e=!0):e=!1,l.p.selrow=f.id,b&&($(l).triggerHandler("jqGridSelectRow",[f.id,e,c]),l.p.onSelectRow&&l.p.onSelectRow.call(l,f.id,e,c)))))})},resetSelection:function(a){return this.each(function(){var b,c,d=this,e=$.jgrid.getMethod("getStyleUI"),f=e(d.p.styleUI+".common","highlight",!0),g=e(d.p.styleUI+".common","hover",!0);if(d.p.frozenColumns===!0&&(c=d.p.id+"_frozen"),void 0!==a){if(b=a===d.p.selrow?d.p.selrow:a,$("#"+$.jgrid.jqID(d.p.id)+" tbody:first tr#"+$.jgrid.jqID(b)).removeClass(f).attr("aria-selected","false"),c&&$("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c)).removeClass(f),d.p.multiselect){$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(d.p.id))[d.p.useProp?"prop":"attr"]("checked",!1),c&&$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c))[d.p.useProp?"prop":"attr"]("checked",!1),d.setHeadCheckBox(!1);var h=$.inArray($.jgrid.jqID(b),d.p.selarrrow);-1!==h&&d.p.selarrrow.splice(h,1)}d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,b),b=null}else d.p.multiselect?($(d.p.selarrrow).each(function(a,b){$($(d).jqGrid("getGridRowById",b)).removeClass(f).attr("aria-selected","false"),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b))[d.p.useProp?"prop":"attr"]("checked",!1),c&&($("#"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c)).removeClass(f),$("#jqg_"+$.jgrid.jqID(d.p.id)+"_"+$.jgrid.jqID(b),"#"+$.jgrid.jqID(c))[d.p.useProp?"prop":"attr"]("checked",!1)),d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,b)}),d.setHeadCheckBox(!1),d.p.selarrrow=[],d.p.selrow=null):d.p.selrow&&($("#"+$.jgrid.jqID(d.p.id)+" tbody:first tr#"+$.jgrid.jqID(d.p.selrow)).removeClass(f).attr("aria-selected","false"),c&&$("#"+$.jgrid.jqID(d.p.selrow),"#"+$.jgrid.jqID(c)).removeClass(f),d.p.onUnSelectRow&&d.p.onUnSelectRow.call(d,d.p.selrow),d.p.selrow=null);d.p.cellEdit===!0&&parseInt(d.p.iCol,10)>=0&&parseInt(d.p.iRow,10)>=0&&($("td:eq("+d.p.iCol+")",d.rows[d.p.iRow]).removeClass("edit-cell "+f),$(d.rows[d.p.iRow]).removeClass("selected-row "+g)),d.p.savedRow=[]})},getRowData:function(a,b){var c,d,e={},f=!1,g=0;return this.each(function(){var h,i,j=this;if(null==a)f=!0,c=[],d=j.rows.length;else{if(i=$(j).jqGrid("getGridRowById",a),!i)return e;d=2}for(b&&b===!0&&j.p.data.length>0||(b=!1);d>g;)f&&(i=j.rows[g]),$(i).hasClass("jqgrow")&&(b?e=j.p.data[j.p._index[i.id]]:$('td[role="gridcell"]',i).each(function(a){if(h=j.p.colModel[a].name,"cb"!==h&&"subgrid"!==h&&"rn"!==h)if(j.p.treeGrid===!0&&h===j.p.ExpandColumn)e[h]=$.jgrid.htmlDecode($("span:first",this).html());else try{e[h]=$.unformat.call(j,this,{rowId:i.id,colModel:j.p.colModel[a]},a)}catch(b){e[h]=$.jgrid.htmlDecode($(this).html())}}),f&&(c.push(e),e={})),g++}),c||e},delRowData:function(a){var b,c,d,e=!1;return this.each(function(){var f=this;if(b=$(f).jqGrid("getGridRowById",a),!b)return!1;if(f.p.subGrid&&(d=$(b).next(),d.hasClass("ui-subgrid")&&d.remove()),$(b).remove(),f.p.records--,f.p.reccount--,f.updatepager(!0,!1),e=!0,f.p.multiselect&&(c=$.inArray(a,f.p.selarrrow),-1!==c&&f.p.selarrrow.splice(c,1)),f.p.multiselect&&f.p.selarrrow.length>0?f.p.selrow=f.p.selarrrow[f.p.selarrrow.length-1]:f.p.selrow===a&&(f.p.selrow=null),"local"===f.p.datatype){var g=$.jgrid.stripPref(f.p.idPrefix,a),h=f.p._index[g];void 0!==h&&(f.p.data.splice(h,1),f.refreshIndex())}if(f.p.altRows===!0&&e){var i=f.p.altclass;$(f.rows).each(function(a){a%2===1?$(this).addClass(i):$(this).removeClass(i)})}}),e},setRowData:function(a,b,c){var d,e,f=!0;return this.each(function(){if(!this.grid)return!1;var g,h,i=this,j=typeof c,k={};if(h=$(this).jqGrid("getGridRowById",a),!h)return!1;if(b)try{if($(this.p.colModel).each(function(c){d=this.name;var f=$.jgrid.getAccessor(b,d);void 0!==f&&(k[d]=this.formatter&&"string"==typeof this.formatter&&"date"===this.formatter?$.unformat.date.call(i,f,this):f,g=i.formatter(a,k[d],c,b,"edit"),e=this.title?{title:$.jgrid.stripHtml(g)}:{},i.p.treeGrid===!0&&d===i.p.ExpandColumn?$("td[role='gridcell']:eq("+c+") > span:first",h).html(g).attr(e):$("td[role='gridcell']:eq("+c+")",h).html(g).attr(e))}),"local"===i.p.datatype){var l,m=$.jgrid.stripPref(i.p.idPrefix,a),n=i.p._index[m];
if(i.p.treeGrid)for(l in i.p.treeReader)i.p.treeReader.hasOwnProperty(l)&&delete k[i.p.treeReader[l]];void 0!==n&&(i.p.data[n]=$.extend(!0,i.p.data[n],k)),k=null}}catch(o){f=!1}f&&("string"===j?$(h).addClass(c):null!==c&&"object"===j&&$(h).css(c),$(i).triggerHandler("jqGridAfterGridComplete"))}),f},addRowData:function(a,b,c,d){-1===$.inArray(c,["first","last","before","after"])&&(c="last");var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s=!1,t="",u="",v="";return b&&($.isArray(b)?(m=!0,n=a):(b=[b],m=!1),this.each(function(){var w=this,x=b.length;i=w.p.rownumbers===!0?1:0,g=w.p.multiselect===!0?1:0,h=w.p.subGrid===!0?1:0,m||(void 0!==a?a=String(a):(a=$.jgrid.randId(),w.p.keyName!==!1&&(n=w.p.keyName,void 0!==b[0][n]&&(a=b[0][n])))),o=w.p.altclass;var y,z=0,A=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","rowBox",!0,"jqgrow ui-row-"+w.p.direction),B={},C=$.isFunction(w.p.afterInsertRow)?!0:!1;for(i&&(t=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","rownumBox",!1,"jqgrid-rownum")),g&&(u=$(w).jqGrid("getStyleUI",w.p.styleUI+".base","multiBox",!1,"cbox"));x>z;){if(p=b[z],f=[],y=A,m){try{a=p[n],void 0===a&&(a=$.jgrid.randId())}catch(D){a=$.jgrid.randId()}y+=w.p.altRows===!0&&(w.rows.length-1)%2===0?" "+o:""}for(r=a,a=w.p.idPrefix+a,i&&(v=w.formatCol(0,1,"",null,a,!0),f[f.length]='<td role="gridcell" '+t+" "+v+">0</td>"),g&&(l='<input role="checkbox" type="checkbox" id="jqg_'+w.p.id+"_"+a+'" '+u+"/>",v=w.formatCol(i,1,"",null,a,!0),f[f.length]='<td role="gridcell" '+v+">"+l+"</td>"),h&&(f[f.length]=$(w).jqGrid("addSubGridCell",g+i,1)),k=g+h+i;k<w.p.colModel.length;k++)q=w.p.colModel[k],e=q.name,B[e]=p[e],l=w.formatter(a,$.jgrid.getAccessor(p,e),k,p),v=w.formatCol(k,1,l,p,a,B),f[f.length]='<td role="gridcell" '+v+">"+l+"</td>";if(f.unshift(w.constructTr(a,!1,y,B,p)),f[f.length]="</tr>",0===w.rows.length)$("table:first",w.grid.bDiv).append(f.join(""));else switch(c){case"last":$(w.rows[w.rows.length-1]).after(f.join("")),j=w.rows.length-1;break;case"first":$(w.rows[0]).after(f.join("")),j=1;break;case"after":j=$(w).jqGrid("getGridRowById",d),j&&($(w.rows[j.rowIndex+1]).hasClass("ui-subgrid")?$(w.rows[j.rowIndex+1]).after(f):$(j).after(f.join("")),j=j.rowIndex+1);break;case"before":j=$(w).jqGrid("getGridRowById",d),j&&($(j).before(f.join("")),j=j.rowIndex-1)}w.p.subGrid===!0&&$(w).jqGrid("addSubGrid",g+i,j),w.p.records++,w.p.reccount++,$(w).triggerHandler("jqGridAfterInsertRow",[a,p,p]),C&&w.p.afterInsertRow.call(w,a,p,p),z++,"local"===w.p.datatype&&(B[w.p.localReader.id]=r,w.p._index[r]=w.p.data.length,w.p.data.push(B),B={})}w.p.altRows!==!0||m||("last"===c?(w.rows.length-1)%2===0&&$(w.rows[w.rows.length-1]).addClass(o):$(w.rows).each(function(a){a%2===0?$(this).addClass(o):$(this).removeClass(o)})),w.updatepager(!0,!0),s=!0})),s},footerData:function(a,b,c){function d(a){var b;for(b in a)if(a.hasOwnProperty(b))return!1;return!0}var e,f,g=!1,h={};return void 0===a&&(a="get"),"boolean"!=typeof c&&(c=!0),a=a.toLowerCase(),this.each(function(){var i,j=this;return j.grid&&j.p.footerrow?"set"===a&&d(b)?!1:(g=!0,void $(this.p.colModel).each(function(d){e=this.name,"set"===a?void 0!==b[e]&&(i=c?j.formatter("",b[e],d,b,"edit"):b[e],f=this.title?{title:$.jgrid.stripHtml(i)}:{},$("tr.footrow td:eq("+d+")",j.grid.sDiv).html(i).attr(f),g=!0):"get"===a&&(h[e]=$("tr.footrow td:eq("+d+")",j.grid.sDiv).html())})):!1}),"get"===a?h:g},showHideCol:function(a,b){return this.each(function(){var c,d=this,e=!1,f=$.jgrid.cell_width?0:d.p.cellLayout;if(d.grid){"string"==typeof a&&(a=[a]),b="none"!==b?"":"none";var g=""===b?!0:!1,h=d.p.groupHeader&&($.isArray(d.p.groupHeader)||$.isFunction(d.p.groupHeader));if(h&&$(d).jqGrid("destroyGroupHeader",!1),$(this.p.colModel).each(function(h){if(-1!==$.inArray(this.name,a)&&this.hidden===g){if(d.p.frozenColumns===!0&&this.frozen===!0)return!0;$("tr[role=row]",d.grid.hDiv).each(function(){$(this.cells[h]).css("display",b)}),$(d.rows).each(function(){$(this).hasClass("jqgroup")||$(this.cells[h]).css("display",b)}),d.p.footerrow&&$("tr.footrow td:eq("+h+")",d.grid.sDiv).css("display",b),c=parseInt(this.width,10),"none"===b?d.p.tblwidth-=c+f:d.p.tblwidth+=c+f,this.hidden=!g,e=!0,$(d).triggerHandler("jqGridShowHideCol",[g,this.name,h])}}),e===!0&&(d.p.shrinkToFit!==!0||isNaN(d.p.height)||(d.p.tblwidth+=parseInt(d.p.scrollOffset,10)),$(d).jqGrid("setGridWidth",d.p.shrinkToFit===!0?d.p.tblwidth:d.p.width)),h){var i=$.extend([],d.p.groupHeader);d.p.groupHeader=null;for(var j=0;j<i.length;j++)$(d).jqGrid("setGroupHeaders",i[j])}}})},hideCol:function(a){return this.each(function(){$(this).jqGrid("showHideCol",a,"none")})},showCol:function(a){return this.each(function(){$(this).jqGrid("showHideCol",a,"")})},remapColumns:function(a,b,c){function d(b){var c;c=b.length?$.makeArray(b):$.extend({},b),$.each(a,function(a){b[a]=c[this]})}function e(b,c){$(">tr"+(c||""),b).each(function(){var b=this,c=$.makeArray(b.cells);$.each(a,function(){var a=c[this];a&&b.appendChild(a)})})}var f=this.get(0);d(f.p.colModel),d(f.p.colNames),d(f.grid.headers),e($("thead:first",f.grid.hDiv),c&&":not(.ui-jqgrid-labels)"),b&&e($("#"+$.jgrid.jqID(f.p.id)+" tbody:first"),".jqgfirstrow, tr.jqgrow, tr.jqfoot"),f.p.footerrow&&e($("tbody:first",f.grid.sDiv)),f.p.remapColumns&&(f.p.remapColumns.length?d(f.p.remapColumns):f.p.remapColumns=$.makeArray(a)),f.p.lastsort=$.inArray(f.p.lastsort,a),f.p.treeGrid&&(f.p.expColInd=$.inArray(f.p.expColInd,a)),$(f).triggerHandler("jqGridRemapColumns",[a,b,c])},setGridWidth:function(a,b){return this.each(function(){if(this.grid){var c,d,e,f,g=this,h=0,i=$.jgrid.cell_width?0:g.p.cellLayout,j=0,k=!1,l=g.p.scrollOffset,m=0;if("boolean"!=typeof b&&(b=g.p.shrinkToFit),!isNaN(a)){if(a=parseInt(a,10),g.grid.width=g.p.width=a,$("#gbox_"+$.jgrid.jqID(g.p.id)).css("width",a+"px"),$("#gview_"+$.jgrid.jqID(g.p.id)).css("width",a+"px"),$(g.grid.bDiv).css("width",a+"px"),$(g.grid.hDiv).css("width",a+"px"),g.p.pager&&$(g.p.pager).css("width",a+"px"),g.p.toppager&&$(g.p.toppager).css("width",a+"px"),g.p.toolbar[0]===!0&&($(g.grid.uDiv).css("width",a+"px"),"both"===g.p.toolbar[1]&&$(g.grid.ubDiv).css("width",a+"px")),g.p.footerrow&&$(g.grid.sDiv).css("width",a+"px"),b===!1&&g.p.forceFit===!0&&(g.p.forceFit=!1),b===!0){if($.each(g.p.colModel,function(){this.hidden===!1&&(c=this.widthOrg,h+=c+i,this.fixed?m+=c+i:j++)}),0===j)return;g.p.tblwidth=h,e=a-i*j-m,isNaN(g.p.height)||($(g.grid.bDiv)[0].clientHeight<$(g.grid.bDiv)[0].scrollHeight||1===g.rows.length)&&(k=!0,e-=l),h=0;var n=g.grid.cols.length>0;if($.each(g.p.colModel,function(a){if(this.hidden===!1&&!this.fixed){if(c=this.widthOrg,c=Math.round(e*c/(g.p.tblwidth-i*j-m)),0>c)return;this.width=c,h+=c,g.grid.headers[a].width=c,g.grid.headers[a].el.style.width=c+"px",g.p.footerrow&&(g.grid.footers[a].style.width=c+"px"),n&&(g.grid.cols[a].style.width=c+"px"),d=a}}),!d)return;if(f=0,k?a-m-(h+i*j)!==l&&(f=a-m-(h+i*j)-l):1!==Math.abs(a-m-(h+i*j))&&(f=a-m-(h+i*j)),g.p.colModel[d].width+=f,g.p.tblwidth=h+f+i*j+m,g.p.tblwidth>a){var o=g.p.tblwidth-parseInt(a,10);g.p.tblwidth=a,c=g.p.colModel[d].width=g.p.colModel[d].width-o}else c=g.p.colModel[d].width;g.grid.headers[d].width=c,g.grid.headers[d].el.style.width=c+"px",n&&(g.grid.cols[d].style.width=c+"px"),g.p.footerrow&&(g.grid.footers[d].style.width=c+"px")}g.p.tblwidth&&($("table:first",g.grid.bDiv).css("width",g.p.tblwidth+"px"),$("table:first",g.grid.hDiv).css("width",g.p.tblwidth+"px"),g.grid.hDiv.scrollLeft=g.grid.bDiv.scrollLeft,g.p.footerrow&&$("table:first",g.grid.sDiv).css("width",g.p.tblwidth+"px"))}}})},setGridHeight:function(a){return this.each(function(){var b=this;if(b.grid){var c=$(b.grid.bDiv);c.css({height:a+(isNaN(a)?"":"px")}),b.p.frozenColumns===!0&&$("#"+$.jgrid.jqID(b.p.id)+"_frozen").parent().height(c.height()-16),b.p.height=a,b.p.scroll&&b.grid.populateVisible()}})},setCaption:function(a){return this.each(function(){var b=$(this).jqGrid("getStyleUI",this.p.styleUI+".common","cornertop",!0);this.p.caption=a,$(".ui-jqgrid-title, .ui-jqgrid-title-rtl",this.grid.cDiv).html(a),$(this.grid.cDiv).show(),$(this.grid.hDiv).removeClass(b)})},setLabel:function(a,b,c,d){return this.each(function(){var e=this,f=-1;if(e.grid&&void 0!==a&&($(e.p.colModel).each(function(b){return this.name===a?(f=b,!1):void 0}),f>=0)){var g=$("tr.ui-jqgrid-labels th:eq("+f+")",e.grid.hDiv);if(b){var h=$(".s-ico",g);$("[id^=jqgh_]",g).empty().html(b).append(h),e.p.colNames[f]=b}c&&("string"==typeof c?$(g).addClass(c):$(g).css(c)),"object"==typeof d&&$(g).attr(d)}})},setCell:function(a,b,c,d,e,f){return this.each(function(){var g,h,i=this,j=-1;if(i.grid&&(isNaN(b)?$(i.p.colModel).each(function(a){return this.name===b?(j=a,!1):void 0}):j=parseInt(b,10),j>=0)){var k=$(i).jqGrid("getGridRowById",a);if(k){var l=$("td:eq("+j+")",k),m=0,n=[];if(""!==c||f===!0){if(void 0!==k.cells)for(;m<k.cells.length;)n.push(k.cells[m].innerHTML),m++;if(g=i.formatter(a,c,j,n,"edit"),h=i.p.colModel[j].title?{title:$.jgrid.stripHtml(g)}:{},i.p.treeGrid&&$(".tree-wrap",$(l)).length>0?$("span",$(l)).html(g).attr(h):$(l).html(g).attr(h),"local"===i.p.datatype){var o,p=i.p.colModel[j];c=p.formatter&&"string"==typeof p.formatter&&"date"===p.formatter?$.unformat.date.call(i,c,p):c,o=i.p._index[$.jgrid.stripPref(i.p.idPrefix,a)],void 0!==o&&(i.p.data[o][p.name]=c)}}"string"==typeof d?$(l).addClass(d):d&&$(l).css(d),"object"==typeof e&&$(l).attr(e)}}})},getCell:function(a,b){var c=!1;return this.each(function(){var d=this,e=-1;if(d.grid&&(isNaN(b)?$(d.p.colModel).each(function(a){return this.name===b?(e=a,!1):void 0}):e=parseInt(b,10),e>=0)){var f=$(d).jqGrid("getGridRowById",a);if(f)try{c=$.unformat.call(d,$("td:eq("+e+")",f),{rowId:f.id,colModel:d.p.colModel[e]},e)}catch(g){c=$.jgrid.htmlDecode($("td:eq("+e+")",f).html())}}}),c},getCol:function(a,b,c){var d,e,f,g,h=[],i=0;return b="boolean"!=typeof b?!1:b,void 0===c&&(c=!1),this.each(function(){var j=this,k=-1;if(j.grid&&(isNaN(a)?$(j.p.colModel).each(function(b){return this.name===a?(k=b,!1):void 0}):k=parseInt(a,10),k>=0)){var l=j.rows.length,m=0,n=0;if(l&&l>0){for(;l>m;){if($(j.rows[m]).hasClass("jqgrow")){try{d=$.unformat.call(j,$(j.rows[m].cells[k]),{rowId:j.rows[m].id,colModel:j.p.colModel[k]},k)}catch(o){d=$.jgrid.htmlDecode(j.rows[m].cells[k].innerHTML)}c?(g=parseFloat(d),isNaN(g)||(i+=g,void 0===f&&(f=e=g),e=Math.min(e,g),f=Math.max(f,g),n++)):b?h.push({id:j.rows[m].id,value:d}):h.push(d)}m++}if(c)switch(c.toLowerCase()){case"sum":h=i;break;case"avg":h=i/n;break;case"count":h=l-1;break;case"min":h=e;break;case"max":h=f}}}}),h},clearGridData:function(a){return this.each(function(){var b=this;if(b.grid){if("boolean"!=typeof a&&(a=!1),b.p.deepempty)$("#"+$.jgrid.jqID(b.p.id)+" tbody:first tr:gt(0)").remove();else{var c=$("#"+$.jgrid.jqID(b.p.id)+" tbody:first tr:first")[0];$("#"+$.jgrid.jqID(b.p.id)+" tbody:first").empty().append(c)}b.p.footerrow&&a&&$(".ui-jqgrid-ftable td",b.grid.sDiv).html("&#160;"),b.p.selrow=null,b.p.selarrrow=[],b.p.savedRow=[],b.p.records=0,b.p.page=1,b.p.lastpage=0,b.p.reccount=0,b.p.data=[],b.p._index={},b.updatepager(!0,!1)}})},getInd:function(a,b){var c,d=!1;return this.each(function(){c=$(this).jqGrid("getGridRowById",a),c&&(d=b===!0?c:c.rowIndex)}),d},bindKeys:function(a){var b=$.extend({onEnter:null,onSpace:null,onLeftKey:null,onRightKey:null,scrollingRows:!0},a||{});return this.each(function(){var a=this;$("body").is("[role]")||$("body").attr("role","application"),a.p.scrollrows=b.scrollingRows,$(a).keydown(function(c){var d,e,f,g=$(a).find("tr[tabindex=0]")[0],h=a.p.treeReader.expanded_field;if(g)if(f=a.p._index[$.jgrid.stripPref(a.p.idPrefix,g.id)],37===c.keyCode||38===c.keyCode||39===c.keyCode||40===c.keyCode){if(38===c.keyCode){if(e=g.previousSibling,d="",e)if($(e).is(":hidden")){for(;e;)if(e=e.previousSibling,!$(e).is(":hidden")&&$(e).hasClass("jqgrow")){d=e.id;break}}else d=e.id;$(a).jqGrid("setSelection",d,!0,c),c.preventDefault()}if(40===c.keyCode){if(e=g.nextSibling,d="",e)if($(e).is(":hidden")){for(;e;)if(e=e.nextSibling,!$(e).is(":hidden")&&$(e).hasClass("jqgrow")){d=e.id;break}}else d=e.id;$(a).jqGrid("setSelection",d,!0,c),c.preventDefault()}37===c.keyCode&&(a.p.treeGrid&&a.p.data[f][h]&&$(g).find("div.treeclick").trigger("click"),$(a).triggerHandler("jqGridKeyLeft",[a.p.selrow]),$.isFunction(b.onLeftKey)&&b.onLeftKey.call(a,a.p.selrow)),39===c.keyCode&&(a.p.treeGrid&&!a.p.data[f][h]&&$(g).find("div.treeclick").trigger("click"),$(a).triggerHandler("jqGridKeyRight",[a.p.selrow]),$.isFunction(b.onRightKey)&&b.onRightKey.call(a,a.p.selrow))}else 13===c.keyCode?($(a).triggerHandler("jqGridKeyEnter",[a.p.selrow]),$.isFunction(b.onEnter)&&b.onEnter.call(a,a.p.selrow)):32===c.keyCode&&($(a).triggerHandler("jqGridKeySpace",[a.p.selrow]),$.isFunction(b.onSpace)&&b.onSpace.call(a,a.p.selrow))})})},unbindKeys:function(){return this.each(function(){$(this).unbind("keydown")})},getLocalRow:function(a){var b,c=!1;return this.each(function(){void 0!==a&&(b=this.p._index[$.jgrid.stripPref(this.p.idPrefix,a)],b>=0&&(c=this.p.data[b]))}),c},progressBar:function(a){return a=$.extend({htmlcontent:"",method:"hide",loadtype:"disable"},a||{}),this.each(function(){var b,c,d="show"===a.method?!0:!1,e=$("#load_"+$.jgrid.jqID(this.p.id)),f=$(window).scrollTop();switch(""!==a.htmlcontent&&e.html(a.htmlcontent),a.loadtype){case"disable":break;case"enable":e.toggle(d);break;case"block":$("#lui_"+$.jgrid.jqID(this.p.id)).toggle(d),e.toggle(d)}e.is(":visible")&&(b=e.offsetParent(),e.css("top",""),e.offset().top<f&&(c=Math.min(10+f-b.offset().top,b.height()-e.height()),e.css("top",c+"px")))})},getColProp:function(a){var b={},c=this[0];if(!c.grid)return!1;var d,e=c.p.colModel;for(d=0;d<e.length;d++)if(e[d].name===a){b=e[d];break}return b},setColProp:function(a,b){return this.each(function(){if(this.grid&&b){var c,d=this.p.colModel;for(c=0;c<d.length;c++)if(d[c].name===a){$.extend(!0,this.p.colModel[c],b);break}}})},sortGrid:function(a,b,c){return this.each(function(){var d,e=this,f=-1,g=!1;if(e.grid){for(a||(a=e.p.sortname),d=0;d<e.p.colModel.length;d++)if(e.p.colModel[d].index===a||e.p.colModel[d].name===a){f=d,e.p.frozenColumns===!0&&e.p.colModel[d].frozen===!0&&(g=e.grid.fhDiv.find("#"+e.p.id+"_"+a));break}if(-1!==f){var h=e.p.colModel[f].sortable;g||(g=e.grid.headers[f].el),"boolean"!=typeof h&&(h=!0),"boolean"!=typeof b&&(b=!1),h&&e.sortData("jqgh_"+e.p.id+"_"+a,f,b,c,g)}}})},setGridState:function(a){return this.each(function(){if(this.grid){var b=this,c=$(this).jqGrid("getStyleUI",this.p.styleUI+".base","icon_caption_open",!0),d=$(this).jqGrid("getStyleUI",this.p.styleUI+".base","icon_caption_close",!0);"hidden"===a?($(".ui-jqgrid-bdiv, .ui-jqgrid-hdiv","#gview_"+$.jgrid.jqID(b.p.id)).slideUp("fast"),b.p.pager&&$(b.p.pager).slideUp("fast"),b.p.toppager&&$(b.p.toppager).slideUp("fast"),b.p.toolbar[0]===!0&&("both"===b.p.toolbar[1]&&$(b.grid.ubDiv).slideUp("fast"),$(b.grid.uDiv).slideUp("fast")),b.p.footerrow&&$(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID(b.p.id)).slideUp("fast"),$(".ui-jqgrid-headlink",b.grid.cDiv).removeClass(c).addClass(d),b.p.gridstate="hidden"):"visible"===a&&($(".ui-jqgrid-hdiv, .ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID(b.p.id)).slideDown("fast"),b.p.pager&&$(b.p.pager).slideDown("fast"),b.p.toppager&&$(b.p.toppager).slideDown("fast"),b.p.toolbar[0]===!0&&("both"===b.p.toolbar[1]&&$(b.grid.ubDiv).slideDown("fast"),$(b.grid.uDiv).slideDown("fast")),b.p.footerrow&&$(".ui-jqgrid-sdiv","#gbox_"+$.jgrid.jqID(b.p.id)).slideDown("fast"),$(".ui-jqgrid-headlink",b.grid.cDiv).removeClass(d).addClass(c),b.p.gridstate="visible")}})},setFrozenColumns:function(){return this.each(function(){if(this.grid){var a=this,b=a.p.colModel,c=0,d=b.length,e=-1,f=!1,g=$(a).jqGrid("getStyleUI",a.p.styleUI+".base","headerDiv",!0,"ui-jqgrid-hdiv"),h=$(a).jqGrid("getStyleUI",a.p.styleUI+".common","hover",!0);if(a.p.subGrid!==!0&&a.p.treeGrid!==!0&&a.p.cellEdit!==!0&&!a.p.sortable&&!a.p.scroll){for(a.p.rownumbers&&c++,a.p.multiselect&&c++;d>c&&b[c].frozen===!0;)f=!0,e=c,c++;if(e>=0&&f){var i=a.p.caption?$(a.grid.cDiv).outerHeight():0,j=$(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID(a.p.id)).height();a.p.toppager&&(i+=$(a.grid.topDiv).outerHeight()),a.p.toolbar[0]===!0&&"bottom"!==a.p.toolbar[1]&&(i+=$(a.grid.uDiv).outerHeight()),a.grid.fhDiv=$('<div style="position:absolute;'+("rtl"===a.p.direction?"right:0;":"left:0;")+"top:"+i+"px;height:"+j+'px;" class="frozen-div '+g+'"></div>'),a.grid.fbDiv=$('<div style="position:absolute;'+("rtl"===a.p.direction?"right:0;":"left:0;")+"top:"+(parseInt(i,10)+parseInt(j,10)+1)+'px;overflow-y:hidden" class="frozen-bdiv ui-jqgrid-bdiv"></div>'),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fhDiv);var k=$(".ui-jqgrid-htable","#gview_"+$.jgrid.jqID(a.p.id)).clone(!0);if(a.p.groupHeader){$("tr.jqg-first-row-header, tr.jqg-third-row-header",k).each(function(){$("th:gt("+e+")",this).remove()});var l,m,n=-1,o=-1;$("tr.jqg-second-row-header th",k).each(function(){return l=parseInt($(this).attr("colspan"),10),m=parseInt($(this).attr("rowspan"),10),m&&(n++,o++),l&&(n+=l,o++),n===e?(o=e,!1):void 0}),n!==e&&(o=e),$("tr.jqg-second-row-header",k).each(function(){$("th:gt("+o+")",this).remove()})}else $("tr",k).each(function(){$("th:gt("+e+")",this).remove()});if($(k).width(1).css("height","100%"),$(a.grid.fhDiv).append(k).mousemove(function(b){return a.grid.resizing?(a.grid.dragMove(b),!1):void 0}),a.p.footerrow){var p=$(".ui-jqgrid-bdiv","#gview_"+$.jgrid.jqID(a.p.id)).height();a.grid.fsDiv=$('<div style="position:absolute;left:0px;top:'+(parseInt(i,10)+parseInt(j,10)+parseInt(p,10)+1)+'px;" class="frozen-sdiv ui-jqgrid-sdiv"></div>'),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fsDiv);var q=$(".ui-jqgrid-ftable","#gview_"+$.jgrid.jqID(a.p.id)).clone(!0);$("tr",q).each(function(){$("td:gt("+e+")",this).remove()}),$(q).width(1),$(a.grid.fsDiv).append(q)}$(a).bind("jqGridResizeStop.setFrozenColumns",function(b,c,d){var e=$(".ui-jqgrid-htable",a.grid.fhDiv);$("th:eq("+d+")",e).width(c);var f=$(".ui-jqgrid-btable",a.grid.fbDiv);if($("tr:first td:eq("+d+")",f).width(c),a.p.footerrow){var g=$(".ui-jqgrid-ftable",a.grid.fsDiv);$("tr:first td:eq("+d+")",g).width(c)}}),$("#gview_"+$.jgrid.jqID(a.p.id)).append(a.grid.fbDiv),$(a.grid.fbDiv).bind("mousewheel DOMMouseScroll",function(b){var c=$(a.grid.bDiv).scrollTop();b.originalEvent.wheelDelta>0||b.originalEvent.detail<0?$(a.grid.bDiv).scrollTop(c-25):$(a.grid.bDiv).scrollTop(c+25),b.preventDefault()}),a.p.hoverrows===!0&&$("#"+$.jgrid.jqID(a.p.id)).unbind("mouseover").unbind("mouseout"),$(a).bind("jqGridAfterGridComplete.setFrozenColumns",function(){$("#"+$.jgrid.jqID(a.p.id)+"_frozen").remove(),$(a.grid.fbDiv).height($(a.grid.bDiv).height()-16);var b=$("#"+$.jgrid.jqID(a.p.id)).clone(!0);$("tr[role=row]",b).each(function(){$("td[role=gridcell]:gt("+e+")",this).remove()}),$(b).width(1).attr("id",a.p.id+"_frozen"),$(a.grid.fbDiv).append(b),a.p.hoverrows===!0&&($("tr.jqgrow",b).hover(function(){$(this).addClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)).addClass(h)},function(){$(this).removeClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)).removeClass(h)}),$("tr.jqgrow","#"+$.jgrid.jqID(a.p.id)).hover(function(){$(this).addClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)+"_frozen").addClass(h)},function(){$(this).removeClass(h),$("#"+$.jgrid.jqID(this.id),"#"+$.jgrid.jqID(a.p.id)+"_frozen").removeClass(h)})),b=null}),a.grid.hDiv.loading||$(a).triggerHandler("jqGridAfterGridComplete"),a.p.frozenColumns=!0}}}})},destroyFrozenColumns:function(){return this.each(function(){if(this.grid&&this.p.frozenColumns===!0){var a=this,b=$(a).jqGrid("getStyleUI",a.p.styleUI+".common","hover",!0);if($(a.grid.fhDiv).remove(),$(a.grid.fbDiv).remove(),a.grid.fhDiv=null,a.grid.fbDiv=null,a.p.footerrow&&($(a.grid.fsDiv).remove(),a.grid.fsDiv=null),$(this).unbind(".setFrozenColumns"),a.p.hoverrows===!0){var c;$("#"+$.jgrid.jqID(a.p.id)).bind("mouseover",function(a){c=$(a.target).closest("tr.jqgrow"),"ui-subgrid"!==$(c).attr("class")&&$(c).addClass(b)}).bind("mouseout",function(a){c=$(a.target).closest("tr.jqgrow"),$(c).removeClass(b)})}this.p.frozenColumns=!1}})},resizeColumn:function(a,b){return this.each(function(){var c,d,e,f=this.grid,g=this.p,h=g.colModel,i=h.length;if("string"==typeof a){for(c=0;i>c;c++)if(h[c].name===a){a=c;break}}else a=parseInt(a,10);if(b=parseInt(b,10),!("number"!=typeof a||0>a||a>h.length-1||"number"!=typeof b||b<g.minColWidth)){if(g.forceFit)for(g.nv=0,c=a+1;i>c;c++)if(h[c].hidden!==!0){g.nv=c-a;break}if(f.resizing={idx:a},d=b-f.headers[a].width,g.forceFit){if(e=f.headers[a+g.nv].width-d,e<g.minColWidth)return;f.headers[a+g.nv].newWidth=f.headers[a+g.nv].width-d}f.newWidth=g.tblwidth+d,f.headers[a].newWidth=b,f.dragEnd(!1)}})},getStyleUI:function(a,b,c,d){try{var e="",f=a.split("."),g="";switch(c||(e="class=",g='"'),null==d&&(d=""),f.length){case 1:e+=g+d+" "+$.jgrid.styleUI[f[0]][b]+g;break;case 2:e+=g+d+" "+$.jgrid.styleUI[f[0]][f[1]][b]+g}}catch(h){e=""}return $.trim(e)},resizeGrid:function(a){return this.each(function(){var b=this;void 0===a&&(a=500),setTimeout(function(){var a=$(window).width(),c=$("#gbox_"+$.jgrid.jqID(b.p.id)).parent().width(),d=b.p.width;d=a-c>3?c:a,$("#"+$.jgrid.jqID(b.p.id)).jqGrid("setGridWidth",d)},a)})}}),$.jgrid.extend({editCell:function(a,b,c){return this.each(function(){var d,e,f,g,h=this,i=$(this).jqGrid("getStyleUI",h.p.styleUI+".common","highlight",!0),j=$(this).jqGrid("getStyleUI",h.p.styleUI+".common","hover",!0),k=$(this).jqGrid("getStyleUI",h.p.styleUI+".celledit","inputClass",!0);if(h.grid&&h.p.cellEdit===!0){if(b=parseInt(b,10),h.p.selrow=h.rows[a].id,h.p.knv||$(h).jqGrid("GridNav"),h.p.savedRow.length>0){if(c===!0&&a==h.p.iRow&&b==h.p.iCol)return;$(h).jqGrid("saveCell",h.p.savedRow[0].id,h.p.savedRow[0].ic)}else window.setTimeout(function(){$("#"+$.jgrid.jqID(h.p.knv)).attr("tabindex","-1").focus()},1);if(g=h.p.colModel[b],d=g.name,"subgrid"!==d&&"cb"!==d&&"rn"!==d){if(f=$("td:eq("+b+")",h.rows[a]),g.editable!==!0||c!==!0||f.hasClass("not-editable-cell")||$.isFunction(h.p.isCellEditable)&&!h.p.isCellEditable.call(h,d,a,b))parseInt(h.p.iCol,10)>=0&&parseInt(h.p.iRow,10)>=0&&$(h.rows[h.p.iRow]).removeClass("selected-row "+j).find("td:eq("+h.p.iCol+")").removeClass("edit-cell "+i),f.addClass("edit-cell "+i),$(h.rows[a]).addClass("selected-row "+j),e=f.html().replace(/\&#160\;/gi,""),$(h).triggerHandler("jqGridSelectCell",[h.rows[a].id,d,e,a,b]),$.isFunction(h.p.onSelectCell)&&h.p.onSelectCell.call(h,h.rows[a].id,d,e,a,b);else{parseInt(h.p.iCol,10)>=0&&parseInt(h.p.iRow,10)>=0&&$(h.rows[h.p.iRow]).removeClass("selected-row "+j).find("td:eq("+h.p.iCol+")").removeClass("edit-cell "+i),$(f).addClass("edit-cell "+i),$(h.rows[a]).addClass("selected-row "+j);try{e=$.unformat.call(h,f,{rowId:h.rows[a].id,colModel:g},b)}catch(l){e=g.edittype&&"textarea"===g.edittype?$(f).text():$(f).html()}if(h.p.autoencode&&(e=$.jgrid.htmlDecode(e)),g.edittype||(g.edittype="text"),h.p.savedRow.push({id:a,ic:b,name:d,v:e}),("&nbsp;"===e||"&#160;"===e||1===e.length&&160===e.charCodeAt(0))&&(e=""),$.isFunction(h.p.formatCell)){var m=h.p.formatCell.call(h,h.rows[a].id,d,e,a,b);void 0!==m&&(e=m)}$(h).triggerHandler("jqGridBeforeEditCell",[h.rows[a].id,d,e,a,b]),$.isFunction(h.p.beforeEditCell)&&h.p.beforeEditCell.call(h,h.rows[a].id,d,e,a,b);var n=$.extend({},g.editoptions||{},{id:a+"_"+d,name:d,rowId:h.rows[a].id,oper:"edit"}),o=$.jgrid.createEl.call(h,g.edittype,n,e,!0,$.extend({},$.jgrid.ajaxOptions,h.p.ajaxSelectOptions||{}));$.inArray(g.edittype,["text","textarea","password","select"])>-1&&$(o).addClass(k),$(f).html("").append(o).attr("tabindex","0"),$.jgrid.bindEv.call(h,o,n),window.setTimeout(function(){$(o).focus()},1),$("input, select, textarea",f).bind("keydown",function(c){if(27===c.keyCode&&($("input.hasDatepicker",f).length>0?$(".ui-datepicker").is(":hidden")?$(h).jqGrid("restoreCell",a,b):$("input.hasDatepicker",f).datepicker("hide"):$(h).jqGrid("restoreCell",a,b)),13===c.keyCode&&!c.shiftKey)return $(h).jqGrid("saveCell",a,b),!1;if(9===c.keyCode){if(h.grid.hDiv.loading)return!1;c.shiftKey?$(h).jqGrid("prevCell",a,b):$(h).jqGrid("nextCell",a,b)}c.stopPropagation()}),$(h).triggerHandler("jqGridAfterEditCell",[h.rows[a].id,d,e,a,b]),$.isFunction(h.p.afterEditCell)&&h.p.afterEditCell.call(h,h.rows[a].id,d,e,a,b)}h.p.iCol=b,h.p.iRow=a}}})},saveCell:function(a,b){return this.each(function(){var c,d=this,e=$.jgrid.getRegional(this,"errors"),f=$.jgrid.getRegional(this,"edit");if(d.grid&&d.p.cellEdit===!0){if(c=d.p.savedRow.length>=1?0:null,null!==c){var g,h,i=$("td:eq("+b+")",d.rows[a]),j=d.p.colModel[b],k=j.name,l=$.jgrid.jqID(k),m=$(i).offset();switch(j.edittype){case"select":if(j.editoptions.multiple){var n=$("#"+a+"_"+l,d.rows[a]),o=[];g=$(n).val(),g?g.join(","):g="",$("option:selected",n).each(function(a,b){o[a]=$(b).text()}),h=o.join(",")}else g=$("#"+a+"_"+l+" option:selected",d.rows[a]).val(),h=$("#"+a+"_"+l+" option:selected",d.rows[a]).text();j.formatter&&(h=g);break;case"checkbox":var p=["Yes","No"];j.editoptions&&(p=j.editoptions.value.split(":")),g=$("#"+a+"_"+l,d.rows[a]).is(":checked")?p[0]:p[1],h=g;break;case"password":case"text":case"textarea":case"button":g=$("#"+a+"_"+l,d.rows[a]).val(),h=g;break;case"custom":try{if(!j.editoptions||!$.isFunction(j.editoptions.custom_value))throw"e1";if(g=j.editoptions.custom_value.call(d,$(".customelement",i),"get"),void 0===g)throw"e2";h=g}catch(q){"e1"===q?$.jgrid.info_dialog(e.errcap,"function 'custom_value' "+f.msg.nodefined,f.bClose,{styleUI:d.p.styleUI}):"e2"===q?$.jgrid.info_dialog(e.errcap,"function 'custom_value' "+f.msg.novalue,f.bClose,{styleUI:d.p.styleUI}):$.jgrid.info_dialog(e.errcap,q.message,f.bClose,{styleUI:d.p.styleUI})}}if(h!==d.p.savedRow[c].v){var r=$(d).triggerHandler("jqGridBeforeSaveCell",[d.rows[a].id,k,g,a,b]);if(r&&(g=r,h=r),$.isFunction(d.p.beforeSaveCell)){var s=d.p.beforeSaveCell.call(d,d.rows[a].id,k,g,a,b);s&&(g=s,h=s)}var t=$.jgrid.checkValues.call(d,g,b),u=!1;if(t[0]===!0){var v=$(d).triggerHandler("jqGridBeforeSubmitCell",[d.rows[a].id,k,g,a,b])||{};if($.isFunction(d.p.beforeSubmitCell)&&(v=d.p.beforeSubmitCell.call(d,d.rows[a].id,k,g,a,b),v||(v={})),$("input.hasDatepicker",i).length>0&&$("input.hasDatepicker",i).datepicker("hide"),"remote"===d.p.cellsubmit)if(d.p.cellurl){var w={};d.p.autoencode&&(g=$.jgrid.htmlEncode(g)),j.editoptions&&j.editoptions.NullIfEmpty&&""===g&&(g="null",u=!0),w[k]=g;var x,y,z;z=d.p.prmNames,x=z.id,y=z.oper,w[x]=$.jgrid.stripPref(d.p.idPrefix,d.rows[a].id),w[y]=z.editoper,w=$.extend(v,w),$(d).jqGrid("progressBar",{method:"show",loadtype:d.p.loadui,htmlcontent:$.jgrid.getRegional(d,"defaults.savetext")}),d.grid.hDiv.loading=!0,$.ajax($.extend({url:d.p.cellurl,data:$.isFunction(d.p.serializeCellData)?d.p.serializeCellData.call(d,w,k):w,type:"POST",complete:function(c,j){if($(d).jqGrid("progressBar",{method:"hide",loadtype:d.p.loadui}),d.grid.hDiv.loading=!1,"success"===j){var l=$(d).triggerHandler("jqGridAfterSubmitCell",[d,c,w.id,k,g,a,b])||[!0,""];l[0]===!0&&$.isFunction(d.p.afterSubmitCell)&&(l=d.p.afterSubmitCell.call(d,c,w.id,k,g,a,b)),l[0]===!0?(u&&(g=""),$(i).empty(),$(d).jqGrid("setCell",d.rows[a].id,b,h,!1,!1,!0),$(i).addClass("dirty-cell"),$(d.rows[a]).addClass("edited"),$(d).triggerHandler("jqGridAfterSaveCell",[d.rows[a].id,k,g,a,b]),$.isFunction(d.p.afterSaveCell)&&d.p.afterSaveCell.call(d,d.rows[a].id,k,g,a,b),d.p.savedRow.splice(0,1)):($.jgrid.info_dialog(e.errcap,l[1],f.bClose,{styleUI:d.p.styleUI}),d.p.restoreCellonFail&&$(d).jqGrid("restoreCell",a,b))}},error:function(c,g,h){$("#lui_"+$.jgrid.jqID(d.p.id)).hide(),d.grid.hDiv.loading=!1,$(d).triggerHandler("jqGridErrorCell",[c,g,h]),$.isFunction(d.p.errorCell)?d.p.errorCell.call(d,c,g,h):$.jgrid.info_dialog(e.errcap,c.status+" : "+c.statusText+"<br/>"+g,f.bClose,{styleUI:d.p.styleUI}),d.p.restoreCellonFail&&$(d).jqGrid("restoreCell",a,b)}},$.jgrid.ajaxOptions,d.p.ajaxCellOptions||{}))}else try{$.jgrid.info_dialog(e.errcap,e.nourl,f.bClose,{styleUI:d.p.styleUI}),d.p.restoreCellonFail&&$(d).jqGrid("restoreCell",a,b)}catch(q){}"clientArray"===d.p.cellsubmit&&($(i).empty(),$(d).jqGrid("setCell",d.rows[a].id,b,h,!1,!1,!0),$(i).addClass("dirty-cell"),$(d.rows[a]).addClass("edited"),$(d).triggerHandler("jqGridAfterSaveCell",[d.rows[a].id,k,g,a,b]),$.isFunction(d.p.afterSaveCell)&&d.p.afterSaveCell.call(d,d.rows[a].id,k,g,a,b),d.p.savedRow.splice(0,1))}else try{window.setTimeout(function(){$.jgrid.info_dialog(e.errcap,g+" "+t[1],f.bClose,{styleUI:d.p.styleUI,top:m.top+40,left:m.left})},100),$(d).jqGrid("restoreCell",a,b)}catch(q){}}else $(d).jqGrid("restoreCell",a,b)}window.setTimeout(function(){$("#"+$.jgrid.jqID(d.p.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(a,b){return this.each(function(){var c,d=this;if(d.grid&&d.p.cellEdit===!0){if(c=d.p.savedRow.length>=1?0:null,null!==c){var e=$("td:eq("+b+")",d.rows[a]);if($.isFunction($.fn.datepicker))try{$("input.hasDatepicker",e).datepicker("hide")}catch(f){}$(e).empty().attr("tabindex","-1"),$(d).jqGrid("setCell",d.rows[a].id,b,d.p.savedRow[c].v,!1,!1,!0),$(d).triggerHandler("jqGridAfterRestoreCell",[d.rows[a].id,d.p.savedRow[c].v,a,b]),$.isFunction(d.p.afterRestoreCell)&&d.p.afterRestoreCell.call(d,d.rows[a].id,d.p.savedRow[c].v,a,b),d.p.savedRow.splice(0,1)}window.setTimeout(function(){$("#"+d.p.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(a,b){return this.each(function(){var c,d=this,e=!1;if(d.grid&&d.p.cellEdit===!0){for(c=b+1;c<d.p.colModel.length;c++)if(d.p.colModel[c].editable===!0&&(!$.isFunction(d.p.isCellEditable)||d.p.isCellEditable.call(d,d.p.colModel[c].name,a,c))){e=c;break}e!==!1?$(d).jqGrid("editCell",a,e,!0):d.p.savedRow.length>0&&$(d).jqGrid("saveCell",a,b)}})},prevCell:function(a,b){return this.each(function(){var c,d=this,e=!1;if(d.grid&&d.p.cellEdit===!0){for(c=b-1;c>=0;c--)if(d.p.colModel[c].editable===!0&&(!$.isFunction(d.p.isCellEditable)||d.p.isCellEditable.call(d,d.p.colModel[c].name,a,c))){e=c;break}e!==!1?$(d).jqGrid("editCell",a,e,!0):d.p.savedRow.length>0&&$(d).jqGrid("saveCell",a,b)}})},GridNav:function(){return this.each(function(){function a(a,b,d){if("v"===d.substr(0,1)){var e=$(c.grid.bDiv)[0].clientHeight,f=$(c.grid.bDiv)[0].scrollTop,g=c.rows[a].offsetTop+c.rows[a].clientHeight,h=c.rows[a].offsetTop;"vd"===d&&g>=e&&($(c.grid.bDiv)[0].scrollTop=$(c.grid.bDiv)[0].scrollTop+c.rows[a].clientHeight),"vu"===d&&f>h&&($(c.grid.bDiv)[0].scrollTop=$(c.grid.bDiv)[0].scrollTop-c.rows[a].clientHeight)}if("h"===d){var i=$(c.grid.bDiv)[0].clientWidth,j=$(c.grid.bDiv)[0].scrollLeft,k=c.rows[a].cells[b].offsetLeft+c.rows[a].cells[b].clientWidth,l=c.rows[a].cells[b].offsetLeft;k>=i+parseInt(j,10)?$(c.grid.bDiv)[0].scrollLeft=$(c.grid.bDiv)[0].scrollLeft+c.rows[a].cells[b].clientWidth:j>l&&($(c.grid.bDiv)[0].scrollLeft=$(c.grid.bDiv)[0].scrollLeft-c.rows[a].cells[b].clientWidth)}}function b(a,b){var d,e;if("lft"===b)for(d=a+1,e=a;e>=0;e--)if(c.p.colModel[e].hidden!==!0){d=e;break}if("rgt"===b)for(d=a-1,e=a;e<c.p.colModel.length;e++)if(c.p.colModel[e].hidden!==!0){d=e;break}return d}var c=this;if(c.grid&&c.p.cellEdit===!0){c.p.knv=c.p.id+"_kn";var d,e,f=$("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+c.p.knv+"'></div></div>");$(f).insertBefore(c.grid.cDiv),$("#"+c.p.knv).focus().keydown(function(f){switch(e=f.keyCode,"rtl"===c.p.direction&&(37===e?e=39:39===e&&(e=37)),e){case 38:c.p.iRow-1>0&&(a(c.p.iRow-1,c.p.iCol,"vu"),$(c).jqGrid("editCell",c.p.iRow-1,c.p.iCol,!1));break;case 40:c.p.iRow+1<=c.rows.length-1&&(a(c.p.iRow+1,c.p.iCol,"vd"),$(c).jqGrid("editCell",c.p.iRow+1,c.p.iCol,!1));break;case 37:c.p.iCol-1>=0&&(d=b(c.p.iCol-1,"lft"),a(c.p.iRow,d,"h"),$(c).jqGrid("editCell",c.p.iRow,d,!1));break;case 39:c.p.iCol+1<=c.p.colModel.length-1&&(d=b(c.p.iCol+1,"rgt"),a(c.p.iRow,d,"h"),$(c).jqGrid("editCell",c.p.iRow,d,!1));break;case 13:parseInt(c.p.iCol,10)>=0&&parseInt(c.p.iRow,10)>=0&&$(c).jqGrid("editCell",c.p.iRow,c.p.iCol,!0);
break;default:return!0}return!1})}})},getChangedCells:function(a){var b=[];return a||(a="all"),this.each(function(){var c,d=this;d.grid&&d.p.cellEdit===!0&&$(d.rows).each(function(e){var f={};$(this).hasClass("edited")&&($("td",this).each(function(b){if(c=d.p.colModel[b].name,"cb"!==c&&"subgrid"!==c)if("dirty"===a){if($(this).hasClass("dirty-cell"))try{f[c]=$.unformat.call(d,this,{rowId:d.rows[e].id,colModel:d.p.colModel[b]},b)}catch(g){f[c]=$.jgrid.htmlDecode($(this).html())}}else try{f[c]=$.unformat.call(d,this,{rowId:d.rows[e].id,colModel:d.p.colModel[b]},b)}catch(g){f[c]=$.jgrid.htmlDecode($(this).html())}}),f.id=this.id,b.push(f))})}),b}}),$.extend($.jgrid,{showModal:function(a){a.w.show()},closeModal:function(a){a.w.hide().attr("aria-hidden","true"),a.o&&a.o.remove()},hideModal:function(a,b){b=$.extend({jqm:!0,gb:"",removemodal:!1,formprop:!1,form:""},b||{});var c=b.gb&&"string"==typeof b.gb&&"#gbox_"===b.gb.substr(0,6)?$("#"+b.gb.substr(6))[0]:!1;if(b.onClose){var d=c?b.onClose.call(c,a):b.onClose(a);if("boolean"==typeof d&&!d)return}if(b.formprop&&c&&b.form){var e=$(a)[0].style.height,f=$(a)[0].style.width;e.indexOf("px")>-1&&(e=parseFloat(e)),f.indexOf("px")>-1&&(f=parseFloat(f));var g,h;"edit"===b.form?(g="#"+$.jgrid.jqID("FrmGrid_"+b.gb.substr(6)),h="formProp"):"view"===b.form&&(g="#"+$.jgrid.jqID("ViewGrid_"+b.gb.substr(6)),h="viewProp"),$(c).data(h,{top:parseFloat($(a).css("top")),left:parseFloat($(a).css("left")),width:f,height:e,dataheight:$(g).height(),datawidth:$(g).width()})}if($.fn.jqm&&b.jqm===!0)$(a).attr("aria-hidden","true").jqmHide();else{if(""!==b.gb)try{$(".jqgrid-overlay:first",b.gb).hide()}catch(i){}$(a).hide().attr("aria-hidden","true")}b.removemodal&&$(a).remove()},findPos:function(a){var b=0,c=0;if(a.offsetParent)do b+=a.offsetLeft,c+=a.offsetTop;while(a=a.offsetParent);return[b,c]},createModal:function(a,b,c,d,e,f,g){c=$.extend(!0,{},$.jgrid.jqModal||{},c);var h=this,i="rtl"===$(c.gbox).attr("dir")?!0:!1,j=$.jgrid.styleUI[c.styleUI||"jQueryUI"].modal,k=$.jgrid.styleUI[c.styleUI||"jQueryUI"].common,l=document.createElement("div");g=$.extend({},g||{}),l.className="ui-jqdialog "+j.modal,l.id=a.themodal;var m=document.createElement("div");m.className="ui-jqdialog-titlebar "+j.header,m.id=a.modalhead,$(m).append("<span class='ui-jqdialog-title'>"+c.caption+"</span>");var n=$("<a class='ui-jqdialog-titlebar-close "+k.cornerall+"'></a>").hover(function(){n.addClass(k.hover)},function(){n.removeClass(k.hover)}).append("<span class='"+k.icon_base+" "+j.icon_close+"'></span>");$(m).append(n),i?(l.dir="rtl",$(".ui-jqdialog-title",m).css("float","right"),$(".ui-jqdialog-titlebar-close",m).css("left","0.3em")):(l.dir="ltr",$(".ui-jqdialog-title",m).css("float","left"),$(".ui-jqdialog-titlebar-close",m).css("right","0.3em"));var o=document.createElement("div");$(o).addClass("ui-jqdialog-content "+j.content).attr("id",a.modalcontent),$(o).append(b),l.appendChild(o),$(l).prepend(m),f===!0?$("body").append(l):"string"==typeof f?$(f).append(l):$(l).insertBefore(d),$(l).css(g),void 0===c.jqModal&&(c.jqModal=!0);var p={};if($.fn.jqm&&c.jqModal===!0){if(0===c.left&&0===c.top&&c.overlay){var q=[];q=$.jgrid.findPos(e),c.left=q[0]+4,c.top=q[1]+4}p.top=c.top+"px",p.left=c.left}else(0!==c.left||0!==c.top)&&(p.left=c.left,p.top=c.top+"px");if($("a.ui-jqdialog-titlebar-close",m).click(function(){var b=$("#"+$.jgrid.jqID(a.themodal)).data("onClose")||c.onClose,d=$("#"+$.jgrid.jqID(a.themodal)).data("gbox")||c.gbox;return h.hideModal("#"+$.jgrid.jqID(a.themodal),{gb:d,jqm:c.jqModal,onClose:b,removemodal:c.removemodal||!1,formprop:!c.recreateForm||!1,form:c.form||""}),!1}),0!==c.width&&c.width||(c.width=300),0!==c.height&&c.height||(c.height=200),!c.zIndex){var r=$(d).parents("*[role=dialog]").filter(":first").css("z-index");r?c.zIndex=parseInt(r,10)+2:c.zIndex=950}var s=0;if(i&&p.left&&!f&&(s=$(c.gbox).width()-(isNaN(c.width)?0:parseInt(c.width,10))-8,p.left=parseInt(p.left,10)+parseInt(s,10)),p.left&&(p.left+="px"),$(l).css($.extend({width:isNaN(c.width)?"auto":c.width+"px",height:isNaN(c.height)?"auto":c.height+"px",zIndex:c.zIndex,overflow:"hidden"},p)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":a.modalhead,"aria-hidden":"true"}),void 0===c.drag&&(c.drag=!0),void 0===c.resize&&(c.resize=!0),c.drag)if($(m).css("cursor","move"),$.fn.tinyDraggable)$(l).tinyDraggable({handle:"#"+$.jgrid.jqID(m.id)});else try{$(l).draggable({handle:$("#"+$.jgrid.jqID(m.id))})}catch(t){}if(c.resize)if($.fn.jqResize)$(l).append("<div class='jqResize "+j.resizable+" "+k.icon_base+" "+j.icon_resizable+"'></div>"),$("#"+$.jgrid.jqID(a.themodal)).jqResize(".jqResize",a.scrollelm?"#"+$.jgrid.jqID(a.scrollelm):!1);else try{$(l).resizable({handles:"se, sw",alsoResize:a.scrollelm?"#"+$.jgrid.jqID(a.scrollelm):!1})}catch(u){}c.closeOnEscape===!0&&$(l).keydown(function(b){if(27===b.which){var d=$("#"+$.jgrid.jqID(a.themodal)).data("onClose")||c.onClose;h.hideModal("#"+$.jgrid.jqID(a.themodal),{gb:c.gbox,jqm:c.jqModal,onClose:d,removemodal:c.removemodal||!1,formprop:!c.recreateForm||!1,form:c.form||""})}})},viewModal:function(a,b){if(b=$.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:$.jgrid.showModal,onHide:$.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},b||{}),void 0===b.focusField&&(b.focusField=0),"number"==typeof b.focusField&&b.focusField>=0?b.focusField=parseInt(b.focusField,10):"boolean"!=typeof b.focusField||b.focusField?b.focusField=0:b.focusField=!1,$.fn.jqm&&b.jqm===!0)b.jqM?$(a).attr("aria-hidden","false").jqm(b).jqmShow():$(a).attr("aria-hidden","false").jqmShow();else if(""!==b.gbox&&($(".jqgrid-overlay:first",b.gbox).show(),$(a).data("gbox",b.gbox)),$(a).show().attr("aria-hidden","false"),b.focusField>=0)try{$(":input:visible",a)[parseInt(b.focusField,10)].focus()}catch(c){}},info_dialog:function(a,b,c,d){var e={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1e3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};$.extend(!0,e,$.jgrid.jqModal||{},{caption:"<b>"+a+"</b>"},d||{});var f=e.jqModal,g=this,h=$.jgrid.styleUI[e.styleUI||"jQueryUI"].modal,i=$.jgrid.styleUI[e.styleUI||"jQueryUI"].common;$.fn.jqm&&!f&&(f=!1);var j,k="";if(e.buttons.length>0)for(j=0;j<e.buttons.length;j++)void 0===e.buttons[j].id&&(e.buttons[j].id="info_button_"+j),k+="<a id='"+e.buttons[j].id+"' class='fm-button "+i.button+"'>"+e.buttons[j].text+"</a>";var l=isNaN(e.dataheight)?e.dataheight:e.dataheight+"px",m="text-align:"+e.align+";",n="<div id='info_id'>";n+="<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+l+";"+m+"'>"+b+"</div>",n+=c?"<div class='"+h.header+"' style='text-align:"+e.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button "+i.button+"'>"+c+"</a>"+k+"</div>":""!==k?"<div class='"+h.header+"' style='text-align:"+e.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+k+"</div>":"",n+="</div>";try{"false"===$("#info_dialog").attr("aria-hidden")&&$.jgrid.hideModal("#info_dialog",{jqm:f}),$("#info_dialog").remove()}catch(o){}$.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},n,e,"","",!0),k&&$.each(e.buttons,function(a){$("#"+$.jgrid.jqID(this.id),"#info_id").bind("click",function(){return e.buttons[a].onClick.call($("#info_dialog")),!1})}),$("#closedialog","#info_id").click(function(){return g.hideModal("#info_dialog",{jqm:f,onClose:$("#info_dialog").data("onClose")||e.onClose,gb:$("#info_dialog").data("gbox")||e.gbox}),!1}),$(".fm-button","#info_dialog").hover(function(){$(this).addClass(i.hover)},function(){$(this).removeClass(i.hover)}),$.isFunction(e.beforeOpen)&&e.beforeOpen(),$.jgrid.viewModal("#info_dialog",{onHide:function(a){a.w.hide().remove(),a.o&&a.o.remove()},modal:e.modal,jqm:f}),$.isFunction(e.afterOpen)&&e.afterOpen();try{$("#info_dialog").focus()}catch(p){}},bindEv:function(a,b){var c=this;$.isFunction(b.dataInit)&&b.dataInit.call(c,a,b),b.dataEvents&&$.each(b.dataEvents,function(){void 0!==this.data?$(a).bind(this.type,this.data,this.fn):$(a).bind(this.type,this.fn)})},createEl:function(a,b,c,d,e){function f(a,b,c){var d=["dataInit","dataEvents","dataUrl","buildSelect","sopt","searchhidden","defaultValue","attr","custom_element","custom_value","oper"];void 0!==c&&$.isArray(c)&&$.merge(d,c),$.each(b,function(b,c){-1===$.inArray(b,d)&&$(a).attr(b,c)}),b.hasOwnProperty("id")||$(a).attr("id",$.jgrid.randId())}var g="",h=this;switch(a){case"textarea":g=document.createElement("textarea"),d?b.cols||$(g).css({width:"98%"}):b.cols||(b.cols=20),b.rows||(b.rows=2),("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))&&(c=""),g.value=c,f(g,b),$(g).attr({role:"textbox",multiline:"true"});break;case"checkbox":if(g=document.createElement("input"),g.type="checkbox",b.value){var i=b.value.split(":");c===i[0]&&(g.checked=!0,g.defaultChecked=!0),g.value=i[0],$(g).attr("offval",i[1])}else{var j=(c+"").toLowerCase();j.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==j?(g.checked=!0,g.defaultChecked=!0,g.value=c):g.value="on",$(g).attr("offval","off")}f(g,b,["value"]),$(g).attr("role","checkbox");break;case"select":g=document.createElement("select"),g.setAttribute("role","select");var k,l=[];if(b.multiple===!0?(k=!0,g.multiple="multiple",$(g).attr("aria-multiselectable","true")):k=!1,null!=b.dataUrl){var m=null,n=b.postData||e.postData;try{m=b.rowId}catch(o){}h.p&&h.p.idPrefix&&(m=$.jgrid.stripPref(h.p.idPrefix,m)),$.ajax($.extend({url:$.isFunction(b.dataUrl)?b.dataUrl.call(h,m,c,String(b.name)):b.dataUrl,type:"GET",dataType:"html",data:$.isFunction(n)?n.call(h,m,c,String(b.name)):n,context:{elem:g,options:b,vl:c},success:function(a){var b,c=[],d=this.elem,e=this.vl,g=$.extend({},this.options),i=g.multiple===!0,j=g.cacheUrlData===!0,k="",l=$.isFunction(g.buildSelect)?g.buildSelect.call(h,a):a;"string"==typeof l&&(l=$($.trim(l)).html()),l&&($(d).append(l),f(d,g,n?["postData"]:void 0),void 0===g.size&&(g.size=i?3:1),i?(c=e.split(","),c=$.map(c,function(a){return $.trim(a)})):c[0]=$.trim(e),setTimeout(function(){if($("option",d).each(function(a){b=$(this).text(),e=$(this).val()||b,j&&(k+=(0!==a?";":"")+e+":"+b),0===a&&d.multiple&&(this.selected=!1),$(this).attr("role","option"),($.inArray($.trim(b),c)>-1||$.inArray($.trim(e),c)>-1)&&(this.selected="selected")}),j)if("edit"===g.oper)$(h).jqGrid("setColProp",g.name,{editoptions:{buildSelect:null,dataUrl:null,value:k}});else if("search"===g.oper)$(h).jqGrid("setColProp",g.name,{searchoptions:{dataUrl:null,value:k}});else if("filter"===g.oper&&$("#fbox_"+h.p.id)[0].p){var a,f=$("#fbox_"+h.p.id)[0].p.columns;$.each(f,function(b){return a=this.index||this.name,g.name===a?(this.searchoptions.dataUrl=null,this.searchoptions.value=k,!1):void 0})}$(h).triggerHandler("jqGridAddEditAfterSelectUrlComplete",[d])},0))}},e||{}))}else if(b.value){var p;void 0===b.size&&(b.size=k?3:1),k&&(l=c.split(","),l=$.map(l,function(a){return $.trim(a)})),"function"==typeof b.value&&(b.value=b.value());var q,r,s,t,u,v,w=void 0===b.separator?":":b.separator,x=void 0===b.delimiter?";":b.delimiter;if("string"==typeof b.value)for(q=b.value.split(x),p=0;p<q.length;p++)r=q[p].split(w),r.length>2&&(r[1]=$.map(r,function(a,b){return b>0?a:void 0}).join(w)),s=document.createElement("option"),s.setAttribute("role","option"),s.value=r[0],s.innerHTML=r[1],g.appendChild(s),k||$.trim(r[0])!==$.trim(c)&&$.trim(r[1])!==$.trim(c)||(s.selected="selected"),k&&($.inArray($.trim(r[1]),l)>-1||$.inArray($.trim(r[0]),l)>-1)&&(s.selected="selected");else if("[object Array]"===Object.prototype.toString.call(b.value))for(t=b.value,p=0;p<t.length;p++)2===t[p].length&&(u=t[p][0],v=t[p][1],s=document.createElement("option"),s.setAttribute("role","option"),s.value=u,s.innerHTML=v,g.appendChild(s),k||$.trim(u)!==$.trim(c)&&$.trim(v)!==$.trim(c)||(s.selected="selected"),k&&($.inArray($.trim(v),l)>-1||$.inArray($.trim(u),l)>-1)&&(s.selected="selected"));else if("object"==typeof b.value){t=b.value;for(u in t)t.hasOwnProperty(u)&&(s=document.createElement("option"),s.setAttribute("role","option"),s.value=u,s.innerHTML=t[u],g.appendChild(s),k||$.trim(u)!==$.trim(c)&&$.trim(t[u])!==$.trim(c)||(s.selected="selected"),k&&($.inArray($.trim(t[u]),l)>-1||$.inArray($.trim(u),l)>-1)&&(s.selected="selected"))}f(g,b,["value"])}break;case"image":case"file":g=document.createElement("input"),g.type=a,f(g,b);break;case"custom":g=document.createElement("span");try{if(!$.isFunction(b.custom_element))throw"e1";var y=b.custom_element.call(h,c,b);if(!y)throw"e2";y=$(y).addClass("customelement").attr({id:b.id,name:b.name}),$(g).empty().append(y)}catch(o){var z=$.jgrid.getRegional(h,"errors"),A=$.jgrid.getRegional(h,"edit");"e1"===o?$.jgrid.info_dialog(z.errcap,"function 'custom_element' "+A.msg.nodefined,A.bClose,{styleUI:h.p.styleUI}):"e2"===o?$.jgrid.info_dialog(z.errcap,"function 'custom_element' "+A.msg.novalue,A.bClose,{styleUI:h.p.styleUI}):$.jgrid.info_dialog(z.errcap,"string"==typeof o?o:o.message,A.bClose,{styleUI:h.p.styleUI})}break;default:var B;B="button"===a?"button":"textbox",g=document.createElement("input"),g.type=a,g.value=c,f(g,b),"button"!==a&&(d?b.size||$(g).css({width:"96%"}):b.size||(b.size=20)),$(g).attr("role",B)}return g},checkDate:function(a,b){var c,d=function(a){return a%4!==0||a%100===0&&a%400!==0?28:29},e={};if(a=a.toLowerCase(),c=-1!==a.indexOf("/")?"/":-1!==a.indexOf("-")?"-":-1!==a.indexOf(".")?".":"/",a=a.split(c),b=b.split(c),3!==b.length)return!1;var f,g,h=-1,i=-1,j=-1;for(g=0;g<a.length;g++){var k=isNaN(b[g])?0:parseInt(b[g],10);e[a[g]]=k,f=a[g],-1!==f.indexOf("y")&&(h=g),-1!==f.indexOf("m")&&(j=g),-1!==f.indexOf("d")&&(i=g)}f="y"===a[h]||"yyyy"===a[h]?4:"yy"===a[h]?2:-1;var l,m=[0,31,29,31,30,31,30,31,31,30,31,30,31];return-1===h?!1:(l=e[a[h]].toString(),2===f&&1===l.length&&(f=1),l.length!==f||0===e[a[h]]&&"00"!==b[h]?!1:-1===j?!1:(l=e[a[j]].toString(),l.length<1||e[a[j]]<1||e[a[j]]>12?!1:-1===i?!1:(l=e[a[i]].toString(),l.length<1||e[a[i]]<1||e[a[i]]>31||2===e[a[j]]&&e[a[i]]>d(e[a[h]])||e[a[i]]>m[e[a[j]]]?!1:!0)))},isEmpty:function(a){return a.match(/^\s+$/)||""===a?!0:!1},checkTime:function(a){var b,c=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!$.jgrid.isEmpty(a)){if(b=a.match(c),!b)return!1;if(b[3]){if(b[1]<1||b[1]>12)return!1}else if(b[1]>23)return!1;if(b[2]>59)return!1}return!0},checkValues:function(a,b,c,d){var e,f,g,h,i,j,k=this,l=k.p.colModel,m=$.jgrid.getRegional(this,"edit.msg");if(void 0===c)if("string"==typeof b){for(f=0,i=l.length;i>f;f++)if(l[f].name===b){e=l[f].editrules,b=f,null!=l[f].formoptions&&(g=l[f].formoptions.label);break}}else b>=0&&(e=l[b].editrules);else e=c,g=void 0===d?"_":d;if(e){if(g||(g=null!=k.p.colNames?k.p.colNames[b]:l[b].label),e.required===!0&&$.jgrid.isEmpty(a))return[!1,g+": "+m.required,""];var n=e.required===!1?!1:!0;if(e.number===!0&&(n!==!1||!$.jgrid.isEmpty(a))&&isNaN(a))return[!1,g+": "+m.number,""];if(void 0!==e.minValue&&!isNaN(e.minValue)&&parseFloat(a)<parseFloat(e.minValue))return[!1,g+": "+m.minValue+" "+e.minValue,""];if(void 0!==e.maxValue&&!isNaN(e.maxValue)&&parseFloat(a)>parseFloat(e.maxValue))return[!1,g+": "+m.maxValue+" "+e.maxValue,""];var o;if(e.email===!0&&!(n===!1&&$.jgrid.isEmpty(a)||(o=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,o.test(a))))return[!1,g+": "+m.email,""];if(e.integer===!0&&(n!==!1||!$.jgrid.isEmpty(a))){if(isNaN(a))return[!1,g+": "+m.integer,""];if(a%1!==0||-1!==a.indexOf("."))return[!1,g+": "+m.integer,""]}if(e.date===!0&&!(n===!1&&$.jgrid.isEmpty(a)||(l[b].formatoptions&&l[b].formatoptions.newformat?(h=l[b].formatoptions.newformat,j=$.jgrid.getRegional(k,"formatter.date.masks"),j&&j.hasOwnProperty(h)&&(h=j[h])):h=l[b].datefmt||"Y-m-d",$.jgrid.checkDate(h,a))))return[!1,g+": "+m.date+" - "+h,""];if(e.time===!0&&!(n===!1&&$.jgrid.isEmpty(a)||$.jgrid.checkTime(a)))return[!1,g+": "+m.date+" - hh:mm (am/pm)",""];if(e.url===!0&&!(n===!1&&$.jgrid.isEmpty(a)||(o=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,o.test(a))))return[!1,g+": "+m.url,""];if(e.custom===!0&&(n!==!1||!$.jgrid.isEmpty(a))){if($.isFunction(e.custom_func)){var p=e.custom_func.call(k,a,g,b);return $.isArray(p)?p:[!1,m.customarray,""]}return[!1,m.customfcheck,""]}}return[!0,"",""]}}),$.fn.jqFilter=function(a){if("string"==typeof a){var b=$.fn.jqFilter[a];if(!b)throw"jqFilter - No such method: "+a;var c=$.makeArray(arguments).slice(1);return b.apply(this,c)}var d=$.extend(!0,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,uniqueSearchFields:!1,direction:"ltr"},$.jgrid.filter,a||{});return this.each(function(){if(!this.filter){this.p=d,(null===this.p.filter||void 0===this.p.filter)&&(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}),null!=this.p.sortStrategy&&$.isFunction(this.p.sortStrategy)&&this.p.columns.sort(this.p.sortStrategy);var a,b,c=this.p.columns.length,e=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=$.extend(!0,{},this.p.filter),c){for(a=0;c>a;a++)b=this.p.columns[a],b.stype?b.inputtype=b.stype:b.inputtype||(b.inputtype="text"),b.sorttype?b.searchtype=b.sorttype:b.searchtype||(b.searchtype="string"),void 0===b.hidden&&(b.hidden=!1),b.label||(b.label=b.name),b.index&&(b.name=b.index),b.hasOwnProperty("searchoptions")||(b.searchoptions={}),b.hasOwnProperty("searchrules")||(b.searchrules={}),void 0===b.search?b.inlist=!0:b.inlist=b.search;var f=function(){return $("#"+$.jgrid.jqID(d.id))[0]||null},g=f(),h=$.jgrid.styleUI[g.p.styleUI||"jQueryUI"].filter,i=$.jgrid.styleUI[g.p.styleUI||"jQueryUI"].common;this.p.showQuery&&$(this).append("<table class='queryresult "+h.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var j=function(a,b){var c=[!0,""],e=f();if($.isFunction(b.searchrules))c=b.searchrules.call(e,a,b);else if($.jgrid&&$.jgrid.checkValues)try{c=$.jgrid.checkValues.call(e,a,-1,b.searchrules,b.label)}catch(g){}c&&c.length&&c[0]===!1&&(d.error=!c[0],d.errmsg=c[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",$.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):!1},this.reDraw=function(){$("table.group:first",this).remove();var a=this.createTableForGroup(d.filter,null);$(this).append(a),$.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(a,b){var c,e=this,f=$("<table class='group "+h.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),g="left";"rtl"===this.p.direction&&(g="right",f.attr("dir","rtl")),null===b&&f.append("<tr class='error' style='display:none;'><th colspan='5' class='"+i.error+"' align='"+g+"'></th></tr>");var j=$("<tr></tr>");f.append(j);var k=$("<th colspan='5' align='"+g+"'></th>");if(j.append(k),this.p.ruleButtons===!0){var l=$("<select class='opsel "+h.srSelect+"'></select>");k.append(l);var m,n="";for(c=0;c<d.groupOps.length;c++)m=a.groupOp===e.p.groupOps[c].op?" selected='selected'":"",n+="<option value='"+e.p.groupOps[c].op+"'"+m+">"+e.p.groupOps[c].text+"</option>";l.append(n).bind("change",function(){a.groupOp=$(l).val(),e.onchange()})}var o="<span></span>";if(this.p.groupButton&&(o=$("<input type='button' value='+ {}' title='Add subgroup' class='add-group "+i.button+"'/>"),o.bind("click",function(){return void 0===a.groups&&(a.groups=[]),a.groups.push({groupOp:d.groupOps[0].op,rules:[],groups:[]}),e.reDraw(),e.onchange(),!1})),k.append(o),this.p.ruleButtons===!0){var p,q=$("<input type='button' value='+' title='Add rule' class='add-rule ui-add "+i.button+"'/>");q.bind("click",function(){for(void 0===a.rules&&(a.rules=[]),c=0;c<e.p.columns.length;c++){var b=void 0===e.p.columns[c].search?!0:e.p.columns[c].search,d=e.p.columns[c].hidden===!0,f=e.p.columns[c].searchoptions.searchhidden===!0;if(f&&b||b&&!d){p=e.p.columns[c];break}}if(!p)return!1;var g;return g=p.searchoptions.sopt?p.searchoptions.sopt:e.p.sopt?e.p.sopt:-1!==$.inArray(p.searchtype,e.p.strarr)?e.p.stropts:e.p.numopts,a.rules.push({field:p.name,op:g[0],data:""}),e.reDraw(),!1}),k.append(q)}if(null!==b){var r=$("<input type='button' value='-' title='Delete group' class='delete-group "+i.button+"'/>");k.append(r),r.bind("click",function(){for(c=0;c<b.groups.length;c++)if(b.groups[c]===a){b.groups.splice(c,1);break}return e.reDraw(),e.onchange(),!1})}if(void 0!==a.groups)for(c=0;c<a.groups.length;c++){var s=$("<tr></tr>");f.append(s);var t=$("<td class='first'></td>");s.append(t);var u=$("<td colspan='4'></td>");u.append(this.createTableForGroup(a.groups[c],a)),s.append(u)}void 0===a.groupOp&&(a.groupOp=e.p.groupOps[0].op);var v=e.p.ruleButtons&&e.p.uniqueSearchFields;if(v)for(var w=0;w<e.p.columns.length;w++)e.p.columns[w].inlist&&(e.p.columns[w].search=!0);if(void 0!==a.rules)for(c=0;c<a.rules.length;c++)if(f.append(this.createTableRowForRule(a.rules[c],a)),v)for(var x=a.rules[c].field,w=0;w<e.p.columns.length;w++)if(x===e.p.columns[w].name){e.p.columns[w].search=!1;break}return f},this.createTableRowForRule=function(a,b){var c,g,j,k,l,m=this,n=f(),o=$("<tr></tr>"),p="";o.append("<td class='first'></td>");var q=$("<td class='columns'></td>");o.append(q);var r,s=$("<select class='"+h.srSelect+"'></select>"),t=[];q.append(s),s.bind("change",function(){for(a.field=$(s).val(),j=$(this).parents("tr:first"),$(".data",j).empty(),c=0;c<m.p.columns.length;c++)if(m.p.columns[c].name===a.field){k=m.p.columns[c];break}if(k){k.searchoptions.id=$.jgrid.randId(),k.searchoptions.name=a.field,k.searchoptions.oper="filter",e&&"text"===k.inputtype&&(k.searchoptions.size||(k.searchoptions.size=10));var b=$.jgrid.createEl.call(n,k.inputtype,k.searchoptions,"",!0,m.p.ajaxSelectOptions||{},!0);$(b).addClass("input-elm "+h.srInput),g=k.searchoptions.sopt?k.searchoptions.sopt:m.p.sopt?m.p.sopt:-1!==$.inArray(k.searchtype,m.p.strarr)?m.p.stropts:m.p.numopts;var d="",f=0;for(t=[],$.each(m.p.ops,function(){t.push(this.oper)}),c=0;c<g.length;c++)r=$.inArray(g[c],t),-1!==r&&(0===f&&(a.op=m.p.ops[r].oper),d+="<option value='"+m.p.ops[r].oper+"'>"+m.p.ops[r].text+"</option>",f++);if($(".selectopts",j).empty().append(d),$(".selectopts",j)[0].selectedIndex=0,$.jgrid.msie&&$.jgrid.msiever()<9){var i=parseInt($("select.selectopts",j)[0].offsetWidth,10)+1;$(".selectopts",j).width(i),$(".selectopts",j).css("width","auto")}$(".data",j).append(b),$.jgrid.bindEv.call(n,b,k.searchoptions),$(".input-elm",j).bind("change",function(b){var c=b.target;a.data="SPAN"===c.nodeName.toUpperCase()&&k.searchoptions&&$.isFunction(k.searchoptions.custom_value)?k.searchoptions.custom_value.call(n,$(c).children(".customelement:first"),"get"):c.value,m.onchange()}),setTimeout(function(){a.data=$(b).val(),m.onchange()},0)}});var u=0;for(c=0;c<m.p.columns.length;c++){var v=void 0===m.p.columns[c].search?!0:m.p.columns[c].search,w=m.p.columns[c].hidden===!0,x=m.p.columns[c].searchoptions.searchhidden===!0;(x&&v||v&&!w)&&(l="",a.field===m.p.columns[c].name&&(l=" selected='selected'",u=c),p+="<option value='"+m.p.columns[c].name+"'"+l+">"+m.p.columns[c].label+"</option>")}s.append(p);var y=$("<td class='operators'></td>");o.append(y),k=d.columns[u],k.searchoptions.id=$.jgrid.randId(),e&&"text"===k.inputtype&&(k.searchoptions.size||(k.searchoptions.size=10)),k.searchoptions.name=a.field,k.searchoptions.oper="filter";var z=$.jgrid.createEl.call(n,k.inputtype,k.searchoptions,a.data,!0,m.p.ajaxSelectOptions||{},!0);("nu"===a.op||"nn"===a.op)&&($(z).attr("readonly","true"),$(z).attr("disabled","true"));var A=$("<select class='selectopts "+h.srSelect+"'></select>");for(y.append(A),A.bind("change",function(){a.op=$(A).val(),j=$(this).parents("tr:first");var b=$(".input-elm",j)[0];"nu"===a.op||"nn"===a.op?(a.data="","SELECT"!==b.tagName.toUpperCase()&&(b.value=""),b.setAttribute("readonly","true"),b.setAttribute("disabled","true")):("SELECT"===b.tagName.toUpperCase()&&(a.data=b.value),b.removeAttribute("readonly"),b.removeAttribute("disabled")),m.onchange()}),g=k.searchoptions.sopt?k.searchoptions.sopt:m.p.sopt?m.p.sopt:-1!==$.inArray(k.searchtype,m.p.strarr)?m.p.stropts:m.p.numopts,p="",$.each(m.p.ops,function(){t.push(this.oper)}),c=0;c<g.length;c++)r=$.inArray(g[c],t),-1!==r&&(l=a.op===m.p.ops[r].oper?" selected='selected'":"",p+="<option value='"+m.p.ops[r].oper+"'"+l+">"+m.p.ops[r].text+"</option>");A.append(p);var B=$("<td class='data'></td>");o.append(B),B.append(z),$.jgrid.bindEv.call(n,z,k.searchoptions),$(z).addClass("input-elm "+h.srInput).bind("change",function(){a.data="custom"===k.inputtype?k.searchoptions.custom_value.call(n,$(this).children(".customelement:first"),"get"):$(this).val(),m.onchange()});var C=$("<td></td>");if(o.append(C),this.p.ruleButtons===!0){var D=$("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del "+i.button+"'/>");C.append(D),D.bind("click",function(){for(c=0;c<b.rules.length;c++)if(b.rules[c]===a){b.rules.splice(c,1);break}return m.reDraw(),m.onchange(),!1})}return o},this.getStringForGroup=function(a){var b,c="(";if(void 0!==a.groups)for(b=0;b<a.groups.length;b++){c.length>1&&(c+=" "+a.groupOp+" ");try{c+=this.getStringForGroup(a.groups[b])}catch(d){alert(d)}}if(void 0!==a.rules)try{for(b=0;b<a.rules.length;b++)c.length>1&&(c+=" "+a.groupOp+" "),c+=this.getStringForRule(a.rules[b])}catch(e){alert(e)}return c+=")","()"===c?"":c},this.getStringForRule=function(a){var b,c,e,f,g="",h="",i=["int","integer","float","number","currency"];for(b=0;b<this.p.ops.length;b++)if(this.p.ops[b].oper===a.op){g=this.p.operands.hasOwnProperty(a.op)?this.p.operands[a.op]:"",h=this.p.ops[b].oper;break}for(b=0;b<this.p.columns.length;b++)if(this.p.columns[b].name===a.field){c=this.p.columns[b];break}return void 0===c?"":(f=a.data,("bw"===h||"bn"===h)&&(f+="%"),("ew"===h||"en"===h)&&(f="%"+f),("cn"===h||"nc"===h)&&(f="%"+f+"%"),("in"===h||"ni"===h)&&(f=" ("+f+")"),d.errorcheck&&j(a.data,c),e=-1!==$.inArray(c.searchtype,i)||"nn"===h||"nu"===h?a.field+" "+g+" "+f:a.field+" "+g+' "'+f+'"')},this.resetFilter=function(){this.p.filter=$.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){$("th."+i.error,this).html(""),$("tr.error",this).hide()},this.showError=function(){$("th."+i.error,this).html(this.p.errmsg),$("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(d.filter)},this.toString=function(){function a(a){if(c.p.errorcheck){var b,d;for(b=0;b<c.p.columns.length;b++)if(c.p.columns[b].name===a.field){d=c.p.columns[b];break}d&&j(a.data,d)}return a.op+"(item."+a.field+",'"+a.data+"')"}function b(c){var d,e="(";if(void 0!==c.groups)for(d=0;d<c.groups.length;d++)e.length>1&&(e+="OR"===c.groupOp?" || ":" && "),e+=b(c.groups[d]);if(void 0!==c.rules)for(d=0;d<c.rules.length;d++)e.length>1&&(e+="OR"===c.groupOp?" || ":" && "),e+=a(c.rules[d]);return e+=")","()"===e?"":e}var c=this;return b(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},$.extend($.fn.jqFilter,{toSQLString:function(){var a="";return this.each(function(){a=this.toUserFriendlyString()}),a},filterData:function(){var a;return this.each(function(){a=this.p.filter}),a},getParameter:function(a){return void 0!==a&&this.p.hasOwnProperty(a)?this.p[a]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(a){"string"==typeof a&&(a=$.jgrid.parse(a)),this.each(function(){this.p.filter=a,this.reDraw(),this.onchange()})}}),$.jgrid.extend({filterToolbar:function(a){var b=$.jgrid.getRegional(this[0],"search");return a=$.extend({autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,onClearSearchValue:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",splitSelect:",",groupOpSelect:"OR",operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#",bt:"..."}},b,a||{}),this.each(function(){var c=this;if(!c.p.filterToolbar){$(c).data("filterToolbar")||$(c).data("filterToolbar",a),c.p.force_regional&&(a=$.extend(a,b));var d,e,f,g=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].filter,h=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common,i=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].base,j=function(){var b,d,e,f,g={},h=0,i={},j=!1,k=[],l=!1;$.each(c.p.colModel,function(){var m=$("#gs_"+c.p.idPrefix+$.jgrid.jqID(this.name),this.frozen===!0&&c.p.frozenColumns===!0?c.grid.fhDiv:c.grid.hDiv);if(d=this.index||this.name,f=this.searchoptions||{},e=a.searchOperators&&f.searchOperMenu?m.parent().prev().children("a").attr("soper")||a.defaultSearch:f.sopt?f.sopt[0]:"select"===this.stype?"eq":a.defaultSearch,b="custom"===this.stype&&$.isFunction(f.custom_value)&&m.length>0&&"SPAN"===m[0].nodeName.toUpperCase()?f.custom_value.call(c,m.children(".customelement:first"),"get"):m.val(),"select"===this.stype&&f.multiple&&$.isArray(b)&&b.length&&(j=!0,k.push(d),b=1===b.length?b[0]:b),"bt"===e&&(l=!0),b||"nu"===e||"nn"===e)g[d]=b,i[d]=e,h++;else try{delete c.p.postData[d]}catch(n){}});var m=h>0?!0:!1;if(a.stringResult===!0||"local"===c.p.datatype||a.searchOperators===!0){var n='{"groupOp":"'+a.groupOp+'","rules":[',o=0;$.each(g,function(a,b){o>0&&(n+=","),n+='{"field":"'+a+'",',n+='"op":"'+i[a]+'",',b+="",n+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',o++}),n+="]}";var p,q,r,s,t,u,v;if(j&&(p=$.jgrid.parse(n),p.rules&&p.rules.length))for(q=p.rules,r=0;r<q.length;r++)t=q[r],$.inArray(t.filed,k)&&(u=t.data.split(a.splitSelect),u.length>1&&(void 0===p.groups&&(p.groups=[]),v={groupOp:a.groupOpSelect,groups:[],rules:[]},p.groups.push(v),$.each(u,function(a){s=u[a],s&&v.rules.push({data:u[a],op:t.op,field:t.field})}),q.splice(r,1),r--));if(l&&($.isPlainObject(p)||(p=$.jgrid.parse(n)),p.rules&&p.rules.length))for(q=p.rules,r=0;r<q.length;r++)t=q[r],"bt"===t.op&&(u=t.data.split("..."),u.length>1&&(void 0===p.groups&&(p.groups=[]),v={groupOp:"AND",groups:[],rules:[]},p.groups.push(v),$.each(u,function(a){var b=0===a?"ge":"le";s=u[a],s&&v.rules.push({data:u[a],op:b,field:t.field})}),q.splice(r,1),r--));(l||j)&&(n=JSON.stringify(p)),$.extend(c.p.postData,{filters:n}),$.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&delete c.p.postData[b]})}else $.extend(c.p.postData,g);var w;c.p.searchurl&&(w=c.p.url,$(c).jqGrid("setGridParam",{url:c.p.searchurl}));var x="stop"===$(c).triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!x&&$.isFunction(a.beforeSearch)&&(x=a.beforeSearch.call(c)),x||$(c).jqGrid("setGridParam",{search:m}).trigger("reloadGrid",[{
page:1}]),w&&$(c).jqGrid("setGridParam",{url:w}),$(c).triggerHandler("jqGridToolbarAfterSearch"),$.isFunction(a.afterSearch)&&a.afterSearch.call(c)},k=function(b){var d,e={},f=0;b="boolean"!=typeof b?!0:b,$.each(c.p.colModel,function(){var a,b=$("#gs_"+c.p.idPrefix+$.jgrid.jqID(this.name),this.frozen===!0&&c.p.frozenColumns===!0?c.grid.fhDiv:c.grid.hDiv);switch(this.searchoptions&&void 0!==this.searchoptions.defaultValue&&(a=this.searchoptions.defaultValue),d=this.index||this.name,this.stype){case"select":if(b.find("option").each(function(b){return 0===b&&(this.selected=!0),$(this).val()===a?(this.selected=!0,!1):void 0}),void 0!==a)e[d]=a,f++;else try{delete c.p.postData[d]}catch(g){}break;case"text":if(b.val(a||""),void 0!==a)e[d]=a,f++;else try{delete c.p.postData[d]}catch(h){}break;case"custom":$.isFunction(this.searchoptions.custom_value)&&b.length>0&&"SPAN"===b[0].nodeName.toUpperCase()&&this.searchoptions.custom_value.call(c,b.children(".customelement:first"),"set",a||"")}});var g=f>0?!0:!1;if(c.p.resetsearch=!0,a.stringResult===!0||"local"===c.p.datatype){var h='{"groupOp":"'+a.groupOp+'","rules":[',i=0;$.each(e,function(a,b){i>0&&(h+=","),h+='{"field":"'+a+'",',h+='"op":"eq",',b+="",h+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',i++}),h+="]}",$.extend(c.p.postData,{filters:h}),$.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&delete c.p.postData[b]})}else $.extend(c.p.postData,e);var j;c.p.searchurl&&(j=c.p.url,$(c).jqGrid("setGridParam",{url:c.p.searchurl}));var k="stop"===$(c).triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!k&&$.isFunction(a.beforeClear)&&(k=a.beforeClear.call(c)),k||b&&$(c).jqGrid("setGridParam",{search:g}).trigger("reloadGrid",[{page:1}]),j&&$(c).jqGrid("setGridParam",{url:j}),$(c).triggerHandler("jqGridToolbarAfterClear"),$.isFunction(a.afterClear)&&a.afterClear()},l=function(){var a=$("tr.ui-search-toolbar",c.grid.hDiv),b=c.p.frozenColumns===!0?$("tr.ui-search-toolbar",c.grid.fhDiv):!1;"none"===a.css("display")?(a.show(),b&&b.show()):(a.hide(),b&&b.hide())},m=function(b,d,e){$("#sopt_menu").remove(),d=parseInt(d,10),e=parseInt(e,10)+18;for(var f,i,k=$(".ui-jqgrid-view").css("font-size")||"11px",l='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+k+";left:"+d+"px;top:"+e+'px;">',m=$(b).attr("soper"),n=[],o=0,p=$(b).attr("colname"),q=c.p.colModel.length;q>o&&c.p.colModel[o].name!==p;)o++;var r=c.p.colModel[o],s=$.extend({},r.searchoptions);for(s.sopt||(s.sopt=[],s.sopt[0]="select"===r.stype?"eq":a.defaultSearch),$.each(a.odata,function(){n.push(this.oper)}),o=0;o<s.sopt.length;o++)i=$.inArray(s.sopt[o],n),-1!==i&&(f=m===a.odata[i].oper?h.highlight:"",l+='<li class="ui-menu-item '+f+'" role="presentation"><a class="'+h.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+a.odata[i].oper+'" oper="'+a.operands[a.odata[i].oper]+'"><table class="ui-common-table"><tr><td width="25px">'+a.operands[a.odata[i].oper]+"</td><td>"+a.odata[i].text+"</td></tr></table></a></li>");l+="</ul>",$("body").append(l),$("#sopt_menu").addClass("ui-menu "+g.menu_widget),$("#sopt_menu > li > a").hover(function(){$(this).addClass(h.hover)},function(){$(this).removeClass(h.hover)}).click(function(){var d=$(this).attr("value"),e=$(this).attr("oper");if($(c).triggerHandler("jqGridToolbarSelectOper",[d,e,b]),$("#sopt_menu").hide(),$(b).text(e).attr("soper",d),a.autosearch===!0){var f=$(b).parent().next().children()[0];($(f).val()||"nu"===d||"nn"===d)&&j()}})},n=$("<tr class='ui-search-toolbar' role='row'></tr>");a.restoreFromFilters&&(f=c.p.postData.filters,f&&("string"==typeof f&&(f=$.jgrid.parse(f)),e=f.rules.length?f.rules:!1)),$.each(c.p.colModel,function(b){var f,h,k,l,m,o,p,q,r=this,s="",t="=",u=$("<th role='columnheader' class='"+i.headerBox+" ui-th-"+c.p.direction+"' id='gsh_"+c.p.id+"_"+r.name+"' ></th>"),v=$("<div></div>"),w=$("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(this.hidden===!0&&$(u).css("display","none"),this.search=this.search===!1?!1:!0,void 0===this.stype&&(this.stype="text"),f=$.extend({},this.searchoptions||{},{name:r.index||r.name,id:"gs_"+c.p.idPrefix+r.name,oper:"search"}),this.search){if(a.restoreFromFilters&&e){q=!1;for(var x=0;x<e.length;x++)if(e[x].field){var y=r.index||r.name;if(y===e[x].field){q=e[x];break}}}if(a.searchOperators){for(null==f.searchOperMenu&&(f.searchOperMenu=!0),h=f.sopt?f.sopt[0]:"select"===r.stype?"eq":a.defaultSearch,a.restoreFromFilters&&q&&(h=q.op),k=0;k<a.odata.length;k++)if(a.odata[k].oper===h){t=a.operands[h]||"";break}l=null!=f.searchtitle?f.searchtitle:a.operandTitle,s=f.searchOperMenu?"<a title='"+l+"' style='padding-right: 0.5em;' soper='"+h+"' class='soptclass' colname='"+this.name+"'>"+t+"</a>":""}switch($("td:eq(0)",w).attr("colindex",b).append(s),void 0===f.clearSearch&&(f.clearSearch=!0),f.clearSearch?(m=a.resetTitle||"Clear Search Value",$("td:eq(2)",w).append("<a title='"+m+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+a.resetIcon+"</a>")):$("td:eq(2)",w).hide(),this.surl&&(f.dataUrl=this.surl),o="",f.defaultValue&&(o=$.isFunction(f.defaultValue)?f.defaultValue.call(c):f.defaultValue),a.restoreFromFilters&&q&&(o=q.data),p=$.jgrid.createEl.call(c,this.stype,f,o,!1,$.extend({},$.jgrid.ajaxOptions,c.p.ajaxSelectOptions||{})),$(p).addClass(g.srInput),$("td:eq(1)",w).append(p),$(v).append(w),null==f.dataEvents&&(f.dataEvents=[]),this.stype){case"select":a.autosearch===!0&&f.dataEvents.push({type:"change",fn:function(){return j(),!1}});break;case"text":a.autosearch===!0&&(a.searchOnEnter?f.dataEvents.push({type:"keypress",fn:function(a){var b=a.charCode||a.keyCode||0;return 13===b?(j(),!1):this}}):f.dataEvents.push({type:"keydown",fn:function(b){var c=b.which;switch(c){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:d&&clearTimeout(d),d=setTimeout(function(){j()},a.autosearchDelay)}}}))}$.jgrid.bindEv.call(c,p,f)}$(u).append(v),$(n).append(u),a.searchOperators&&""!==s||$("td:eq(0)",w).hide()}),$("table thead",c.grid.hDiv).append(n),a.searchOperators&&($(".soptclass",n).click(function(a){var b=$(this).offset(),c=b.left,d=b.top;m(this,c,d),a.stopPropagation()}),$("body").on("click",function(a){"soptclass"!==a.target.className&&$("#sopt_menu").remove()})),$(".clearsearchclass",n).click(function(){var b,d=$(this).parents("tr:first"),e=parseInt($("td.ui-search-oper",d).attr("colindex"),10),f=$.extend({},c.p.colModel[e].searchoptions||{}),g=f.defaultValue?f.defaultValue:"";"select"===c.p.colModel[e].stype?(b=$("td.ui-search-input select",d),g?b.val(g):b[0].selectedIndex=0):(b=$("td.ui-search-input input",d),b.val(g)),$(c).triggerHandler("jqGridToolbarClearVal",[b[0],e,f,g]),$.isFunction(a.onClearSearchValue)&&a.onClearSearchValue.call(c,b[0],e,f,g),a.autosearch===!0&&j()}),this.p.filterToolbar=!0,this.triggerToolbar=j,this.clearToolbar=k,this.toggleToolbar=l}})},destroyFilterToolbar:function(){return this.each(function(){this.p.filterToolbar&&(this.triggerToolbar=null,this.clearToolbar=null,this.toggleToolbar=null,this.p.filterToolbar=!1,$(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},refreshFilterToolbar:function(a){return a=$.extend(!0,{filters:"",onClearVal:null,onSetVal:null},a||{}),this.each(function(){function b(e){if(e&&e.rules){for(f=e.rules,k=f.length,c=0;k>c;c++)g=f[c],h=$.inArray(g.field,l),-1!==h&&(d=$("#gs_"+i.p.idPrefix+$.jgrid.jqID(j[h].name)),d.length>0&&("select"===j[h].stype?d.find("option[value='"+$.jgrid.jqID(g.data)+"']").prop("selected",!0):"text"===j[h].stype&&d.val(g.data),$.isFunction(a.onSetVal)&&a.onSetVal.call(i,d,j[h].name)));if(e.groups)for(var m=0;m<e.groups.length;m++)b(e.groups[m])}}var c,d,e,f,g,h,i=this,j=i.p.colModel,k=i.p.colModel.length,l=[];if(i.p.filterToolbar){for(c=0;k>c;c++){switch(l.push(j[c].name),d=$("#gs_"+i.p.idPrefix+$.jgrid.jqID(j[c].name)),j[c].stype){case"select":case"text":d.val("")}$.isFunction(a.onClearVal)&&a.onClearVal.call(i,d,j[c].name)}"string"==typeof a.filters&&a.filters.length&&(e=$.jgrid.parse(a.filters)),$.isPlainObject(e)&&b(e)}})},searchGrid:function(a){var b=$.jgrid.getRegional(this[0],"search");return a=$.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,errorcheck:!0,sopt:null,stringResult:void 0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE","in":"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"}},b,a||{}),this.each(function(){function b(b){f=$(c).triggerHandler("jqGridFilterBeforeShow",[b]),void 0===f&&(f=!0),f&&$.isFunction(a.beforeShowSearch)&&(f=a.beforeShowSearch.call(c,b)),f&&($.jgrid.viewModal("#"+$.jgrid.jqID(h.themodal),{gbox:"#gbox_"+$.jgrid.jqID(e),jqm:a.jqModal,modal:a.modal,overlay:a.overlay,toTop:a.toTop}),$(c).triggerHandler("jqGridFilterAfterShow",[b]),$.isFunction(a.afterShowSearch)&&a.afterShowSearch.call(c,b))}var c=this;if(c.grid){var d,e="fbox_"+c.p.id,f=!0,g=!0,h={themodal:"searchmod"+e,modalhead:"searchhd"+e,modalcontent:"searchcnt"+e,scrollelm:e},i=c.p.postData[a.sFilter],j=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].filter,k=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common;if(a.styleUI=c.p.styleUI,"string"==typeof i&&(i=$.jgrid.parse(i)),a.recreateFilter===!0&&$("#"+$.jgrid.jqID(h.themodal)).remove(),void 0!==$("#"+$.jgrid.jqID(h.themodal))[0])b($("#fbox_"+$.jgrid.jqID(c.p.id)));else{var l=$("<div><div id='"+e+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+$.jgrid.jqID(c.p.id)),m="left",n="";"rtl"===c.p.direction&&(m="right",n=" style='text-align:left'",l.attr("dir","rtl"));var o,p,q=$.extend([],c.p.colModel),r="<a id='"+e+"_search' class='fm-button "+k.button+" fm-button-icon-right ui-search'><span class='"+k.icon_base+" "+j.icon_search+"'></span>"+a.Find+"</a>",s="<a id='"+e+"_reset' class='fm-button "+k.button+" fm-button-icon-left ui-reset'><span class='"+k.icon_base+" "+j.icon_reset+"'></span>"+a.Reset+"</a>",t="",u="",v=!1,w=-1;if(a.showQuery&&(t="<a id='"+e+"_query' class='fm-button "+k.button+" fm-button-icon-left'><span class='"+k.icon_base+" "+j.icon_query+"'></span>Query</a>"),a.columns.length?(q=a.columns,w=0,o=q[0].index||q[0].name):$.each(q,function(a,b){if(b.label||(b.label=c.p.colNames[a]),!v){var d=void 0===b.search?!0:b.search,e=b.hidden===!0,f=b.searchoptions&&b.searchoptions.searchhidden===!0;(f&&d||d&&!e)&&(v=!0,o=b.index||b.name,w=a)}}),!i&&o||a.multipleSearch===!1){var x="eq";w>=0&&q[w].searchoptions&&q[w].searchoptions.sopt?x=q[w].searchoptions.sopt[0]:a.sopt&&a.sopt.length&&(x=a.sopt[0]),i={groupOp:"AND",rules:[{field:o,op:x,data:""}]}}v=!1,a.tmplNames&&a.tmplNames.length&&(v=!0,u="<tr><td class='ui-search-label'>"+a.tmplLabel+"</td>",u+="<td><select class='ui-template "+j.srSelect+"'>",u+="<option value='default'>Default</option>",$.each(a.tmplNames,function(a,b){u+="<option value='"+a+"'>"+b+"</option>"}),u+="</select></td></tr>"),p="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+e+"_2'><tbody><tr><td colspan='2'><hr class='"+k.content+"' style='margin:1px'/></td></tr>"+u+"<tr><td class='EditButton' style='text-align:"+m+"'>"+s+"</td><td class='EditButton' "+n+">"+t+r+"</td></tr></tbody></table>",e=$.jgrid.jqID(e),$("#"+e).jqFilter({columns:q,sortStrategy:a.sortStrategy,filter:a.loadDefaults?i:null,showQuery:a.showQuery,errorcheck:a.errorcheck,sopt:a.sopt,groupButton:a.multipleGroup,ruleButtons:a.multipleSearch,uniqueSearchFields:a.uniqueSearchFields,afterRedraw:a.afterRedraw,ops:a.odata,operands:a.operands,ajaxSelectOptions:c.p.ajaxSelectOptions,groupOps:a.groupOps,onChange:function(){this.p.showQuery&&$(".query",this).html(this.toUserFriendlyString()),$.isFunction(a.afterChange)&&a.afterChange.call(c,$("#"+e),a)},direction:c.p.direction,id:c.p.id}),l.append(p),v&&a.tmplFilters&&a.tmplFilters.length&&$(".ui-template",l).bind("change",function(){var b=$(this).val();return"default"===b?$("#"+e).jqFilter("addFilter",i):$("#"+e).jqFilter("addFilter",a.tmplFilters[parseInt(b,10)]),!1}),a.multipleGroup===!0&&(a.multipleSearch=!0),$(c).triggerHandler("jqGridFilterInitialize",[$("#"+e)]),$.isFunction(a.onInitializeSearch)&&a.onInitializeSearch.call(c,$("#"+e)),a.gbox="#gbox_"+e,a.layer?$.jgrid.createModal(h,l,a,"#gview_"+$.jgrid.jqID(c.p.id),$("#gbox_"+$.jgrid.jqID(c.p.id))[0],"#"+$.jgrid.jqID(a.layer),{position:"relative"}):$.jgrid.createModal(h,l,a,"#gview_"+$.jgrid.jqID(c.p.id),$("#gbox_"+$.jgrid.jqID(c.p.id))[0]),(a.searchOnEnter||a.closeOnEscape)&&$("#"+$.jgrid.jqID(h.themodal)).keydown(function(b){var c=$(b.target);return!a.searchOnEnter||13!==b.which||c.hasClass("add-group")||c.hasClass("add-rule")||c.hasClass("delete-group")||c.hasClass("delete-rule")||c.hasClass("fm-button")&&c.is("[id$=_query]")?a.closeOnEscape&&27===b.which?($("#"+$.jgrid.jqID(h.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1):void 0:($("#"+e+"_search").click(),!1)}),t&&$("#"+e+"_query").bind("click",function(){return $(".queryresult",l).toggle(),!1}),void 0===a.stringResult&&(a.stringResult=a.multipleSearch),$("#"+e+"_search").bind("click",function(){var b,f,i={};if(d=$("#"+e),d.find(".input-elm:focus").change(),f=d.jqFilter("filterData"),a.errorcheck&&(d[0].hideError(),a.showQuery||d.jqFilter("toSQLString"),d[0].p.error))return d[0].showError(),!1;if(a.stringResult){try{b=JSON.stringify(f)}catch(j){}"string"==typeof b&&(i[a.sFilter]=b,$.each([a.sField,a.sValue,a.sOper],function(){i[this]=""}))}else a.multipleSearch?(i[a.sFilter]=f,$.each([a.sField,a.sValue,a.sOper],function(){i[this]=""})):(i[a.sField]=f.rules[0].field,i[a.sValue]=f.rules[0].data,i[a.sOper]=f.rules[0].op,i[a.sFilter]="");return c.p.search=!0,$.extend(c.p.postData,i),g=$(c).triggerHandler("jqGridFilterSearch"),void 0===g&&(g=!0),g&&$.isFunction(a.onSearch)&&(g=a.onSearch.call(c,c.p.filters)),g!==!1&&$(c).trigger("reloadGrid",[{page:1}]),a.closeAfterSearch&&$.jgrid.hideModal("#"+$.jgrid.jqID(h.themodal),{gb:"#gbox_"+$.jgrid.jqID(c.p.id),jqm:a.jqModal,onClose:a.onClose}),!1}),$("#"+e+"_reset").bind("click",function(){var b={},d=$("#"+e);return c.p.search=!1,c.p.resetsearch=!0,a.multipleSearch===!1?b[a.sField]=b[a.sValue]=b[a.sOper]="":b[a.sFilter]="",d[0].resetFilter(),v&&$(".ui-template",l).val("default"),$.extend(c.p.postData,b),g=$(c).triggerHandler("jqGridFilterReset"),void 0===g&&(g=!0),g&&$.isFunction(a.onReset)&&(g=a.onReset.call(c)),g!==!1&&$(c).trigger("reloadGrid",[{page:1}]),a.closeAfterReset&&$.jgrid.hideModal("#"+$.jgrid.jqID(h.themodal),{gb:"#gbox_"+$.jgrid.jqID(c.p.id),jqm:a.jqModal,onClose:a.onClose}),!1}),b($("#"+e)),$(".fm-button:not(."+k.disabled+")",l).hover(function(){$(this).addClass(k.hover)},function(){$(this).removeClass(k.hover)})}}})},filterInput:function(a,b){return b=$.extend(!0,{defaultSearch:"cn",groupOp:"OR",searchAll:!1,beforeSearch:null,afterSearch:null},b||{}),this.each(function(){var c=this;if(c.grid){var d,e,f,g='{"groupOp":"'+b.groupOp+'","rules":[',h=0;if(a+="","local"!==!c.p.datatype){$.each(c.p.colModel,function(){d=this.index||this.name,e=this.searchoptions||{},f=b.defaultSearch?b.defaultSearch:e.sopt?e.sopt[0]:b.defaultSearch,this.search=this.search===!1?!1:!0,(this.search||b.searchAll)&&(h>0&&(g+=","),g+='{"field":"'+d+'",',g+='"op":"'+f+'",',g+='"data":"'+a.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',h++)}),g+="]}",$.extend(c.p.postData,{filters:g}),$.each(["searchField","searchString","searchOper"],function(a,b){c.p.postData.hasOwnProperty(b)&&delete c.p.postData[b]});var i="stop"===$(c).triggerHandler("jqGridFilterInputBeforeSearch")?!0:!1;!i&&$.isFunction(b.beforeSearch)&&(i=b.beforeSearch.call(c)),i||$(c).jqGrid("setGridParam",{search:!0}).trigger("reloadGrid",[{page:1}]),$(c).triggerHandler("jqGridFilterInputAfterSearch"),$.isFunction(b.afterSearch)&&b.afterSearch.call(c)}}})}});var rp_ge={};if($.jgrid.extend({editGridRow:function(a,b){var c=$.jgrid.getRegional(this[0],"edit"),d=this[0].p.styleUI,e=$.jgrid.styleUI[d].formedit,f=$.jgrid.styleUI[d].common;return b=$.extend(!0,{top:0,left:0,width:"500",datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:null,mtype:"POST",clearAfterAdd:!0,closeAfterEdit:!1,reloadAfterSubmit:!0,onInitializeForm:null,beforeInitData:null,beforeShowForm:null,afterShowForm:null,beforeSubmit:null,afterSubmit:null,onclickSubmit:null,afterComplete:null,onclickPgButtons:null,afterclickPgButtons:null,editData:{},recreateForm:!1,jqModal:!0,closeOnEscape:!1,addedrow:"first",topinfo:"",bottominfo:"",saveicon:[],closeicon:[],savekey:[!1,13],navkeys:[!1,38,40],checkOnSubmit:!1,checkOnUpdate:!1,_savedData:{},processing:!1,onClose:null,ajaxEditOptions:{},serializeEditData:null,viewPagerButtons:!0,overlayClass:f.overlay,removemodal:!0,form:"edit",template:null,focusField:!0},c,b||{}),rp_ge[$(this)[0].p.id]=b,this.each(function(){function c(){var a,b={};$(y).find(".FormElement").each(function(){var a=$(".customelement",this);if(a.length){var c=a[0],d=$(c).attr("name");$.each(q.p.colModel,function(){if(this.name===d&&this.editoptions&&$.isFunction(this.editoptions.custom_value)){try{if(s[d]=this.editoptions.custom_value.call(q,$("#"+$.jgrid.jqID(d),y),"get"),void 0===s[d])throw"e1"}catch(a){"e1"===a?$.jgrid.info_dialog(E.errcap,"function 'custom_value' "+rp_ge[$(this)[0]].p.msg.novalue,rp_ge[$(this)[0]].p.bClose,{styleUI:rp_ge[$(this)[0]].p.styleUI}):$.jgrid.info_dialog(E.errcap,a.message,rp_ge[$(this)[0]].p.bClose,{styleUI:rp_ge[$(this)[0]].p.styleUI})}return!0}})}else{switch($(this).get(0).type){case"checkbox":if($(this).is(":checked"))s[this.name]=$(this).val();else{var e=$(this).attr("offval");s[this.name]=e}break;case"select-one":s[this.name]=$("option:selected",this).val();break;case"select-multiple":s[this.name]=$(this).val(),s[this.name]?s[this.name]=s[this.name].join(","):s[this.name]="";var f=[];$("option:selected",this).each(function(a,b){f[a]=$(b).text()});break;case"password":case"text":case"textarea":case"button":s[this.name]=$(this).val();break;case"radio":if(b.hasOwnProperty(this.name))return!0;b[this.name]=void 0===$(this).attr("offval")?"off":$(this).attr("offval")}q.p.autoencode&&(s[this.name]=$.jgrid.htmlEncode(s[this.name]))}});for(a in b)if(b.hasOwnProperty(a)){var c=$('input[name="'+a+'"]:checked',y).val();s[a]=void 0!==c?c:b[a],q.p.autoencode&&(s[a]=$.jgrid.htmlEncode(s[a]))}return!0}function d(a,b,c,d){var f,g,h,i,j,k,l,m=0,n=[],o=!1,p="<td class='CaptionTD'>&#160;</td><td class='DataTD'>&#160;</td>",r="";for(l=1;d>=l;l++)r+=p;if("_empty"!==a&&(o=$(b).jqGrid("getInd",a)),$(b.p.colModel).each(function(l){if(f=this.name,g=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,j=g?"style='display:none'":"","cb"!==f&&"subgrid"!==f&&this.editable===!0&&"rn"!==f){if(o===!1)i="";else if(f===b.p.ExpandColumn&&b.p.treeGrid===!0)i=$("td[role='gridcell']:eq("+l+")",b.rows[o]).text();else{try{i=$.unformat.call(b,$("td[role='gridcell']:eq("+l+")",b.rows[o]),{rowId:a,colModel:this},l)}catch(p){i=this.edittype&&"textarea"===this.edittype?$("td[role='gridcell']:eq("+l+")",b.rows[o]).text():$("td[role='gridcell']:eq("+l+")",b.rows[o]).html()}(!i||"&nbsp;"===i||"&#160;"===i||1===i.length&&160===i.charCodeAt(0))&&(i="")}var s=$.extend({},this.editoptions||{},{id:f,name:f,rowId:a,oper:"edit"}),t=$.extend({},{elmprefix:"",elmsuffix:"",rowabove:!1,rowcontent:""},this.formoptions||{}),u=parseInt(t.rowpos,10)||m+1,v=parseInt(2*(parseInt(t.colpos,10)||1),10);if("_empty"===a&&s.defaultValue&&(i=$.isFunction(s.defaultValue)?s.defaultValue.call(q):s.defaultValue),this.edittype||(this.edittype="text"),q.p.autoencode&&(i=$.jgrid.htmlDecode(i)),k=$.jgrid.createEl.call(q,this.edittype,s,i,!1,$.extend({},$.jgrid.ajaxOptions,b.p.ajaxSelectOptions||{})),"select"===this.edittype&&(i=$(k).val(),"select-multiple"===$(k).get(0).type&&i&&(i=i.join(","))),"checkbox"===this.edittype&&(i=$(k).is(":checked")?$(k).val():$(k).attr("offval")),(rp_ge[q.p.id].checkOnSubmit||rp_ge[q.p.id].checkOnUpdate)&&(rp_ge[q.p.id]._savedData[f]=i),$(k).addClass("FormElement"),$.inArray(this.edittype,["text","textarea","password","select"])>-1&&$(k).addClass(e.inputClass),D)$(J).find("#"+f).replaceWith(k);else{if(h=$(c).find("tr[rowpos="+u+"]"),t.rowabove){var x=$("<tr><td class='contentinfo' colspan='"+2*d+"'>"+t.rowcontent+"</td></tr>");$(c).append(x),x[0].rp=u}0===h.length&&(h=$("<tr "+j+" rowpos='"+u+"'></tr>").addClass("FormData").attr("id","tr_"+f),$(h).append(r),$(c).append(h),h[0].rp=u),$("td:eq("+(v-2)+")",h[0]).html("<label for='"+f+"'>"+(void 0===t.label?b.p.colNames[l]:t.label)+"</label>"),$("td:eq("+(v-1)+")",h[0]).append(t.elmprefix).append(k).append(t.elmsuffix)}"custom"===this.edittype&&$.isFunction(s.custom_value)&&s.custom_value.call(q,$("#"+f,w),"set",i),$.jgrid.bindEv.call(q,k,s),n[m]=l,m++}}),m>0){var s;D?(s="<div class='FormData' style='display:none'><input class='FormElement' id='id_g' type='text' name='"+b.p.id+"_id' value='"+a+"'/>",$(J).append(s)):(s=$("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*d-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='"+b.p.id+"_id' value='"+a+"'/></td></tr>"),s[0].rp=m+999,$(c).append(s)),(rp_ge[q.p.id].checkOnSubmit||rp_ge[q.p.id].checkOnUpdate)&&(rp_ge[q.p.id]._savedData[b.p.id+"_id"]=a)}return n}function g(a,b,c){var d,e,f,g,h,i,j=0;(rp_ge[q.p.id].checkOnSubmit||rp_ge[q.p.id].checkOnUpdate)&&(rp_ge[q.p.id]._savedData={},rp_ge[q.p.id]._savedData[b.p.id+"_id"]=a);var k=b.p.colModel;if("_empty"===a)return $(k).each(function(){d=this.name,g=$.extend({},this.editoptions||{}),f=$("#"+$.jgrid.jqID(d),c),f&&f.length&&null!==f[0]&&(h="","custom"===this.edittype&&$.isFunction(g.custom_value)?g.custom_value.call(q,$("#"+d,c),"set",h):g.defaultValue?(h=$.isFunction(g.defaultValue)?g.defaultValue.call(q):g.defaultValue,"checkbox"===f[0].type?(i=h.toLowerCase(),i.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==i?(f[0].checked=!0,f[0].defaultChecked=!0,f[0].value=h):(f[0].checked=!1,f[0].defaultChecked=!1)):f.val(h)):"checkbox"===f[0].type?(f[0].checked=!1,f[0].defaultChecked=!1,h=$(f).attr("offval")):f[0].type&&"select"===f[0].type.substr(0,6)?f[0].selectedIndex=0:f.val(h),(rp_ge[q.p.id].checkOnSubmit===!0||rp_ge[q.p.id].checkOnUpdate)&&(rp_ge[q.p.id]._savedData[d]=h))}),void $("#id_g",c).val(a);var l=$(b).jqGrid("getInd",a,!0);l&&($('td[role="gridcell"]',l).each(function(f){if(d=k[f].name,"cb"!==d&&"subgrid"!==d&&"rn"!==d&&k[f].editable===!0){if(d===b.p.ExpandColumn&&b.p.treeGrid===!0)e=$(this).text();else try{e=$.unformat.call(b,$(this),{rowId:a,colModel:k[f]},f)}catch(g){e="textarea"===k[f].edittype?$(this).text():$(this).html()}switch(q.p.autoencode&&(e=$.jgrid.htmlDecode(e)),(rp_ge[q.p.id].checkOnSubmit===!0||rp_ge[q.p.id].checkOnUpdate)&&(rp_ge[q.p.id]._savedData[d]=e),d=$.jgrid.jqID(d),k[f].edittype){case"password":case"text":case"button":case"image":case"textarea":("&nbsp;"===e||"&#160;"===e||1===e.length&&160===e.charCodeAt(0))&&(e=""),$("#"+d,c).val(e);break;case"select":var h=e.split(",");h=$.map(h,function(a){return $.trim(a)}),$("#"+d+" option",c).each(function(){k[f].editoptions.multiple||$.trim(e)!==$.trim($(this).text())&&h[0]!==$.trim($(this).text())&&h[0]!==$.trim($(this).val())?k[f].editoptions.multiple&&($.inArray($.trim($(this).text()),h)>-1||$.inArray($.trim($(this).val()),h)>-1)?this.selected=!0:this.selected=!1:this.selected=!0}),(rp_ge[q.p.id].checkOnSubmit===!0||rp_ge[q.p.id].checkOnUpdate)&&(e=$("#"+d,c).val(),k[f].editoptions.multiple&&(e=e.join(",")),rp_ge[q.p.id]._savedData[d]=e);break;case"checkbox":if(e=String(e),k[f].editoptions&&k[f].editoptions.value){var i=k[f].editoptions.value.split(":");i[0]===e?$("#"+d,c)[q.p.useProp?"prop":"attr"]({checked:!0,defaultChecked:!0}):$("#"+d,c)[q.p.useProp?"prop":"attr"]({checked:!1,defaultChecked:!1})}else e=e.toLowerCase(),e.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==e?($("#"+d,c)[q.p.useProp?"prop":"attr"]("checked",!0),$("#"+d,c)[q.p.useProp?"prop":"attr"]("defaultChecked",!0)):($("#"+d,c)[q.p.useProp?"prop":"attr"]("checked",!1),$("#"+d,c)[q.p.useProp?"prop":"attr"]("defaultChecked",!1));(rp_ge[q.p.id].checkOnSubmit===!0||rp_ge[q.p.id].checkOnUpdate)&&(e=$("#"+d,c).is(":checked")?$("#"+d,c).val():$("#"+d,c).attr("offval"),rp_ge[q.p.id]._savedData[d]=e);break;case"custom":try{if(!k[f].editoptions||!$.isFunction(k[f].editoptions.custom_value))throw"e1";k[f].editoptions.custom_value.call(q,$("#"+d,c),"set",e)}catch(l){"e1"===l?$.jgrid.info_dialog(E.errcap,"function 'custom_value' "+rp_ge[$(this)[0]].p.msg.nodefined,$.rp_ge[$(this)[0]].p.bClose,{styleUI:rp_ge[$(this)[0]].p.styleUI}):$.jgrid.info_dialog(E.errcap,l.message,$.rp_ge[$(this)[0]].p.bClose,{styleUI:rp_ge[$(this)[0]].p.styleUI})}}j++}}),j>0&&($("#id_g",y).val(a),(rp_ge[q.p.id].checkOnSubmit===!0||rp_ge[q.p.id].checkOnUpdate)&&(rp_ge[q.p.id]._savedData[b.p.id+"_id"]=a)))}function h(){$.each(q.p.colModel,function(a,b){b.editoptions&&b.editoptions.NullIfEmpty===!0&&s.hasOwnProperty(b.name)&&""===s[b.name]&&(s[b.name]="null")})}function i(){var a,c,d,e,i,j,k,l=[!0,"",""],m={},n=q.p.prmNames,o=$(q).triggerHandler("jqGridAddEditBeforeCheckValues",[$(w),u]);o&&"object"==typeof o&&(s=o),$.isFunction(rp_ge[q.p.id].beforeCheckValues)&&(o=rp_ge[q.p.id].beforeCheckValues.call(q,s,$(w),u),o&&"object"==typeof o&&(s=o));for(e in s)if(s.hasOwnProperty(e)&&(l=$.jgrid.checkValues.call(q,s[e],e),l[0]===!1))break;if(h(),l[0]&&(m=$(q).triggerHandler("jqGridAddEditClickSubmit",[rp_ge[q.p.id],s,u]),void 0===m&&$.isFunction(rp_ge[q.p.id].onclickSubmit)&&(m=rp_ge[q.p.id].onclickSubmit.call(q,rp_ge[q.p.id],s,u)||{}),l=$(q).triggerHandler("jqGridAddEditBeforeSubmit",[s,$(w),u]),void 0===l&&(l=[!0,"",""]),l[0]&&$.isFunction(rp_ge[q.p.id].beforeSubmit)&&(l=rp_ge[q.p.id].beforeSubmit.call(q,s,$(w),u))),l[0]&&!rp_ge[q.p.id].processing){if(rp_ge[q.p.id].processing=!0,$("#sData",y+"_2").addClass(f.active),k=rp_ge[q.p.id].url||$(q).jqGrid("getGridParam","editurl"),d=n.oper,c="clientArray"===k?q.p.keyName:n.id,s[d]="_empty"===$.trim(s[q.p.id+"_id"])?n.addoper:n.editoper,s[d]!==n.addoper?s[c]=s[q.p.id+"_id"]:void 0===s[c]&&(s[c]=s[q.p.id+"_id"]),delete s[q.p.id+"_id"],s=$.extend(s,rp_ge[q.p.id].editData,m),q.p.treeGrid===!0){if(s[d]===n.addoper){i=$(q).jqGrid("getGridParam","selrow");var p="adjacency"===q.p.treeGridModel?q.p.treeReader.parent_id_field:"parent_id";s[p]=i}for(j in q.p.treeReader)if(q.p.treeReader.hasOwnProperty(j)){var r=q.p.treeReader[j];if(s.hasOwnProperty(r)){if(s[d]===n.addoper&&"parent_id_field"===j)continue;delete s[r]}}}s[c]=$.jgrid.stripPref(q.p.idPrefix,s[c]);var t=$.extend({url:k,type:rp_ge[q.p.id].mtype,data:$.isFunction(rp_ge[q.p.id].serializeEditData)?rp_ge[q.p.id].serializeEditData.call(q,s):s,complete:function(e,h){var j;if($("#sData",y+"_2").removeClass(f.active),s[c]=q.p.idPrefix+s[c],e.status>=300&&304!==e.status?(l[0]=!1,l[1]=$(q).triggerHandler("jqGridAddEditErrorTextFormat",[e,u]),$.isFunction(rp_ge[q.p.id].errorTextFormat)?l[1]=rp_ge[q.p.id].errorTextFormat.call(q,e,u):l[1]=h+" Status: '"+e.statusText+"'. Error code: "+e.status):(l=$(q).triggerHandler("jqGridAddEditAfterSubmit",[e,s,u]),void 0===l&&(l=[!0,"",""]),l[0]&&$.isFunction(rp_ge[q.p.id].afterSubmit)&&(l=rp_ge[q.p.id].afterSubmit.call(q,e,s,u))),l[0]===!1)$(".FormError",w).html(l[1]),$(".FormError",w).show();else if(q.p.autoencode&&$.each(s,function(a,b){s[a]=$.jgrid.htmlDecode(b)}),s[d]===n.addoper?(l[2]||(l[2]=$.jgrid.randId()),null==s[c]||"_empty"===s[c]?s[c]=l[2]:l[2]=s[c],rp_ge[q.p.id].reloadAfterSubmit?$(q).trigger("reloadGrid"):q.p.treeGrid===!0?$(q).jqGrid("addChildNode",l[2],i,s):$(q).jqGrid("addRowData",l[2],s,b.addedrow),rp_ge[q.p.id].closeAfterAdd?(q.p.treeGrid!==!0&&$(q).jqGrid("setSelection",l[2]),$.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form})):rp_ge[q.p.id].clearAfterAdd&&g("_empty",q,w)):(rp_ge[q.p.id].reloadAfterSubmit?($(q).trigger("reloadGrid"),rp_ge[q.p.id].closeAfterEdit||setTimeout(function(){$(q).jqGrid("setSelection",s[c])},1e3)):q.p.treeGrid===!0?$(q).jqGrid("setTreeRow",s[c],s):$(q).jqGrid("setRowData",s[c],s),rp_ge[q.p.id].closeAfterEdit&&$.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form})),$.isFunction(rp_ge[q.p.id].afterComplete)&&(a=e,setTimeout(function(){$(q).triggerHandler("jqGridAddEditAfterComplete",[a,s,$(w),u]),rp_ge[q.p.id].afterComplete.call(q,a,s,$(w),u),a=null},500)),(rp_ge[q.p.id].checkOnSubmit||rp_ge[q.p.id].checkOnUpdate)&&($(w).data("disabled",!1),"_empty"!==rp_ge[q.p.id]._savedData[q.p.id+"_id"]))for(j in rp_ge[q.p.id]._savedData)rp_ge[q.p.id]._savedData.hasOwnProperty(j)&&s[j]&&(rp_ge[q.p.id]._savedData[j]=s[j]);rp_ge[q.p.id].processing=!1;try{$(":input:visible",w)[0].focus()}catch(k){}}},$.jgrid.ajaxOptions,rp_ge[q.p.id].ajaxEditOptions);if(t.url||rp_ge[q.p.id].useDataProxy||($.isFunction(q.p.dataProxy)?rp_ge[q.p.id].useDataProxy=!0:(l[0]=!1,l[1]+=" "+E.nourl)),l[0])if(rp_ge[q.p.id].useDataProxy){var x=q.p.dataProxy.call(q,t,"set_"+q.p.id);void 0===x&&(x=[!0,""]),x[0]===!1?(l[0]=!1,l[1]=x[1]||"Error deleting the selected row!"):(t.data.oper===n.addoper&&rp_ge[q.p.id].closeAfterAdd&&$.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form}),t.data.oper===n.editoper&&rp_ge[q.p.id].closeAfterEdit&&$.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form}))}else"clientArray"===t.url?(rp_ge[q.p.id].reloadAfterSubmit=!1,s=t.data,t.complete({status:200,statusText:""},"")):$.ajax(t)}l[0]===!1&&($(".FormError",w).html(l[1]),$(".FormError",w).show())}function j(a,b){var c,d=!1;for(c in a)if(a.hasOwnProperty(c)&&a[c]!=b[c]){d=!0;break}return d}function k(){var a=!0;return $(".FormError",w).hide(),rp_ge[q.p.id].checkOnUpdate&&(s={},c(),t=j(s,rp_ge[q.p.id]._savedData),t&&($(w).data("disabled",!0),$(".confirm","#"+z.themodal).show(),a=!1)),a}function l(){var b;if("_empty"!==a&&void 0!==q.p.savedRow&&q.p.savedRow.length>0&&$.isFunction($.fn.jqGrid.restoreRow))for(b=0;b<q.p.savedRow.length;b++)if(q.p.savedRow[b].id===a){$(q).jqGrid("restoreRow",a);break}}function m(a,b){var c=b[1].length-1;0===a?$("#pData",r).addClass(f.disabled):void 0!==b[1][a-1]&&$("#"+$.jgrid.jqID(b[1][a-1])).hasClass(f.disabled)?$("#pData",r).addClass(f.disabled):$("#pData",r).removeClass(f.disabled),a===c?$("#nData",r).addClass(f.disabled):void 0!==b[1][a+1]&&$("#"+$.jgrid.jqID(b[1][a+1])).hasClass(f.disabled)?$("#nData",r).addClass(f.disabled):$("#nData",r).removeClass(f.disabled)}function n(){var a=$(q).jqGrid("getDataIDs"),b=$("#id_g",y).val(),c=$.inArray(b,a);return[c,a]}function o(a){var b="";return"string"==typeof a&&(b=a.replace(/\{([\w\-]+)(?:\:([\w\.]*)(?:\((.*?)?\))?)?\}/g,function(a,b){return'<span id="'+b+'" ></span>'})),b}function p(){if(rp_ge[q.p.id].checkOnSubmit||rp_ge[q.p.id].checkOnUpdate){
var a=[],b={};a=$.map(rp_ge[q.p.id]._savedData,function(a,b){return b}),$(".FormElement",J).each(function(){if(-1===a.indexOf(this.name)){var c=$(this).val(),d=$(this).get(0).type;if("checkbox"===d)$(this).is(":checked")||(c=$(this).attr("offval"));else if("select-multiple"===d)c=c.join(",");else if("radio"===d){if(b.hasOwnProperty(this.name))return!0;b[this.name]=void 0===$(this).attr("offval")?"off":$(this).attr("offval")}rp_ge[q.p.id]._savedData[this.name]=c}});for(var c in b)if(b.hasOwnProperty(c)){var d=$('input[name="'+c+'"]:checked',J).val();rp_ge[q.p.id]._savedData[c]=void 0!==d?d:b[c]}}}var q=this;if(q.grid&&a){var r,s,t,u,v=q.p.id,w="FrmGrid_"+v,x="TblGrid_"+v,y="#"+$.jgrid.jqID(x),z={themodal:"editmod"+v,modalhead:"edithd"+v,modalcontent:"editcnt"+v,scrollelm:w},A=!0,B=1,C=0,D="string"==typeof rp_ge[q.p.id].template&&rp_ge[q.p.id].template.length>0,E=$.jgrid.getRegional(this,"errors");rp_ge[q.p.id].styleUI=q.p.styleUI||"jQueryUI",$.jgrid.isMobile()&&(rp_ge[q.p.id].resize=!1),"new"===a?(a="_empty",u="add",b.caption=rp_ge[q.p.id].addCaption):(b.caption=rp_ge[q.p.id].editCaption,u="edit"),b.recreateForm||$(q).data("formProp")&&$.extend(rp_ge[$(this)[0].p.id],$(q).data("formProp"));var F=!0;b.checkOnUpdate&&b.jqModal&&!b.modal&&(F=!1);var G,H=isNaN(rp_ge[$(this)[0].p.id].dataheight)?rp_ge[$(this)[0].p.id].dataheight:rp_ge[$(this)[0].p.id].dataheight+"px",I=isNaN(rp_ge[$(this)[0].p.id].datawidth)?rp_ge[$(this)[0].p.id].datawidth:rp_ge[$(this)[0].p.id].datawidth+"px",J=$("<form name='FormPost' id='"+w+"' class='FormGrid' onSubmit='return false;' style='width:"+I+";height:"+H+";'></form>").data("disabled",!1);if(D?(G=o(rp_ge[$(this)[0].p.id].template),r=y):(G=$("<table id='"+x+"' class='EditTable ui-common-table'><tbody></tbody></table>"),r=y+"_2"),w="#"+$.jgrid.jqID(w),$(J).append("<div class='FormError "+f.error+"' style='display:none;'></div>"),$(J).append("<div class='tinfo topinfo'>"+rp_ge[q.p.id].topinfo+"</div>"),$(q.p.colModel).each(function(){var a=this.formoptions;B=Math.max(B,a?a.colpos||0:0),C=Math.max(C,a?a.rowpos||0:0)}),$(J).append(G),A=$(q).triggerHandler("jqGridAddEditBeforeInitData",[J,u]),void 0===A&&(A=!0),A&&$.isFunction(rp_ge[q.p.id].beforeInitData)&&(A=rp_ge[q.p.id].beforeInitData.call(q,J,u)),A!==!1){l(),d(a,q,G,B);var K="rtl"===q.p.direction?!0:!1,L=K?"nData":"pData",M=K?"pData":"nData",N="<a id='"+L+"' class='fm-button "+f.button+"'><span class='"+f.icon_base+" "+e.icon_prev+"'></span></a>",O="<a id='"+M+"' class='fm-button "+f.button+"'><span class='"+f.icon_base+" "+e.icon_next+"'></span></a>",P="<a id='sData' class='fm-button "+f.button+"'>"+b.bSubmit+"</a>",Q="<a id='cData' class='fm-button "+f.button+"'>"+b.bCancel+"</a>",R="<table style='height:auto' class='EditTable ui-common-table' id='"+x+"_2'><tbody><tr><td colspan='2'><hr class='"+f.content+"' style='margin:1px'/></td></tr><tr id='Act_Buttons'><td class='navButton'>"+(K?O+N:N+O)+"</td><td class='EditButton'>"+P+Q+"</td></tr>";if(R+="</tbody></table>",C>0){var S=[];$.each($(G)[0].rows,function(a,b){S[a]=b}),S.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0}),$.each(S,function(a,b){$("tbody",G).append(b)})}b.gbox="#gbox_"+$.jgrid.jqID(v);var T=!1;b.closeOnEscape===!0&&(b.closeOnEscape=!1,T=!0);var U;if(D?($(J).find("#pData").replaceWith(N),$(J).find("#nData").replaceWith(O),$(J).find("#sData").replaceWith(P),$(J).find("#cData").replaceWith(Q),U=$("<div id="+x+"></div>").append(J)):U=$("<div></div>").append(J).append(R),$(J).append("<div class='binfo topinfo bottominfo'>"+rp_ge[q.p.id].bottominfo+"</div>"),$.jgrid.createModal(z,U,rp_ge[$(this)[0].p.id],"#gview_"+$.jgrid.jqID(q.p.id),$("#gbox_"+$.jgrid.jqID(q.p.id))[0]),K&&($("#pData, #nData",y+"_2").css("float","right"),$(".EditButton",y+"_2").css("text-align","left")),rp_ge[q.p.id].topinfo&&$(".tinfo",w).show(),rp_ge[q.p.id].bottominfo&&$(".binfo",w).show(),U=null,R=null,$("#"+$.jgrid.jqID(z.themodal)).keydown(function(a){var c=a.target;if($(w).data("disabled")===!0)return!1;if(rp_ge[q.p.id].savekey[0]===!0&&a.which===rp_ge[q.p.id].savekey[1]&&"TEXTAREA"!==c.tagName)return $("#sData",y+"_2").trigger("click"),!1;if(27===a.which)return k()?(T&&$.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:b.gbox,jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form}),!1):!1;if(rp_ge[q.p.id].navkeys[0]===!0){if("_empty"===$("#id_g",y).val())return!0;if(a.which===rp_ge[q.p.id].navkeys[1])return $("#pData",r).trigger("click"),!1;if(a.which===rp_ge[q.p.id].navkeys[2])return $("#nData",r).trigger("click"),!1}}),b.checkOnUpdate&&($("a.ui-jqdialog-titlebar-close span","#"+$.jgrid.jqID(z.themodal)).removeClass("jqmClose"),$("a.ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(z.themodal)).unbind("click").click(function(){return k()?($.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form}),!1):!1})),b.saveicon=$.extend([!0,"left",e.icon_save],b.saveicon),b.closeicon=$.extend([!0,"left",e.icon_close],b.closeicon),b.saveicon[0]===!0&&$("#sData",r).addClass("right"===b.saveicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.saveicon[2]+"'></span>"),b.closeicon[0]===!0&&$("#cData",r).addClass("right"===b.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.closeicon[2]+"'></span>"),rp_ge[q.p.id].checkOnSubmit||rp_ge[q.p.id].checkOnUpdate){P="<a id='sNew' class='fm-button "+f.button+"' style='z-index:1002'>"+b.bYes+"</a>",O="<a id='nNew' class='fm-button "+f.button+"' style='z-index:1002;margin-left:5px'>"+b.bNo+"</a>",Q="<a id='cNew' class='fm-button "+f.button+"' style='z-index:1002;margin-left:5px;'>"+b.bExit+"</a>";var V=b.zIndex||999;V++,$("<div class='"+b.overlayClass+" jqgrid-overlay confirm' style='z-index:"+V+";display:none;'>&#160;</div><div class='confirm ui-jqconfirm "+f.content+"' style='z-index:"+(V+1)+"'>"+b.saveData+"<br/><br/>"+P+O+Q+"</div>").insertAfter(w),$("#sNew","#"+$.jgrid.jqID(z.themodal)).click(function(){return i(),$(w).data("disabled",!1),$(".confirm","#"+$.jgrid.jqID(z.themodal)).hide(),!1}),$("#nNew","#"+$.jgrid.jqID(z.themodal)).click(function(){return $(".confirm","#"+$.jgrid.jqID(z.themodal)).hide(),$(w).data("disabled",!1),setTimeout(function(){$(":input:visible",w)[0].focus()},0),!1}),$("#cNew","#"+$.jgrid.jqID(z.themodal)).click(function(){return $(".confirm","#"+$.jgrid.jqID(z.themodal)).hide(),$(w).data("disabled",!1),$.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form}),!1})}$(q).triggerHandler("jqGridAddEditInitializeForm",[$(w),u]),$.isFunction(rp_ge[q.p.id].onInitializeForm)&&rp_ge[q.p.id].onInitializeForm.call(q,$(w),u),"_empty"!==a&&rp_ge[q.p.id].viewPagerButtons?$("#pData,#nData",r).show():$("#pData,#nData",r).hide(),$(q).triggerHandler("jqGridAddEditBeforeShowForm",[$(w),u]),$.isFunction(rp_ge[q.p.id].beforeShowForm)&&rp_ge[q.p.id].beforeShowForm.call(q,$(w),u),p(),$("#"+$.jgrid.jqID(z.themodal)).data("onClose",rp_ge[q.p.id].onClose),$.jgrid.viewModal("#"+$.jgrid.jqID(z.themodal),{gbox:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,overlay:b.overlay,modal:b.modal,overlayClass:b.overlayClass,focusField:b.focusField,onHide:function(a){var b=$("#editmod"+v)[0].style.height,c=$("#editmod"+v)[0].style.width;b.indexOf("px")>-1&&(b=parseFloat(b)),c.indexOf("px")>-1&&(c=parseFloat(c)),$(q).data("formProp",{top:parseFloat($(a.w).css("top")),left:parseFloat($(a.w).css("left")),width:c,height:b,dataheight:$(w).height(),datawidth:$(w).width()}),a.w.remove(),a.o&&a.o.remove()}}),F||$("."+$.jgrid.jqID(b.overlayClass)).click(function(){return k()?($.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form}),!1):!1}),$(".fm-button","#"+$.jgrid.jqID(z.themodal)).hover(function(){$(this).addClass(f.hover)},function(){$(this).removeClass(f.hover)}),$("#sData",r).click(function(){return s={},$(".FormError",w).hide(),c(),"_empty"===s[q.p.id+"_id"]?i():b.checkOnSubmit===!0?(t=j(s,rp_ge[q.p.id]._savedData),t?($(w).data("disabled",!0),$(".confirm","#"+$.jgrid.jqID(z.themodal)).show()):i()):i(),!1}),$("#cData",r).click(function(){return k()?($.jgrid.hideModal("#"+$.jgrid.jqID(z.themodal),{gb:"#gbox_"+$.jgrid.jqID(v),jqm:b.jqModal,onClose:rp_ge[q.p.id].onClose,removemodal:rp_ge[q.p.id].removemodal,formprop:!rp_ge[q.p.id].recreateForm,form:rp_ge[q.p.id].form}),!1):!1}),$("#nData",r).click(function(){if(!k())return!1;$(".FormError",w).hide();var a=n();if(a[0]=parseInt(a[0],10),-1!==a[0]&&a[1][a[0]+1]){$(q).triggerHandler("jqGridAddEditClickPgButtons",["next",$(w),a[1][a[0]]]);var c;if($.isFunction(b.onclickPgButtons)&&(c=b.onclickPgButtons.call(q,"next",$(w),a[1][a[0]]),void 0!==c&&c===!1))return!1;if($("#"+$.jgrid.jqID(a[1][a[0]+1])).hasClass(f.disabled))return!1;g(a[1][a[0]+1],q,w),$(q).jqGrid("setSelection",a[1][a[0]+1]),$(q).triggerHandler("jqGridAddEditAfterClickPgButtons",["next",$(w),a[1][a[0]]]),$.isFunction(b.afterclickPgButtons)&&b.afterclickPgButtons.call(q,"next",$(w),a[1][a[0]+1]),p(),m(a[0]+1,a)}return!1}),$("#pData",r).click(function(){if(!k())return!1;$(".FormError",w).hide();var a=n();if(-1!==a[0]&&a[1][a[0]-1]){$(q).triggerHandler("jqGridAddEditClickPgButtons",["prev",$(w),a[1][a[0]]]);var c;if($.isFunction(b.onclickPgButtons)&&(c=b.onclickPgButtons.call(q,"prev",$(w),a[1][a[0]]),void 0!==c&&c===!1))return!1;if($("#"+$.jgrid.jqID(a[1][a[0]-1])).hasClass(f.disabled))return!1;g(a[1][a[0]-1],q,w),$(q).jqGrid("setSelection",a[1][a[0]-1]),$(q).triggerHandler("jqGridAddEditAfterClickPgButtons",["prev",$(w),a[1][a[0]]]),$.isFunction(b.afterclickPgButtons)&&b.afterclickPgButtons.call(q,"prev",$(w),a[1][a[0]-1]),p(),m(a[0]-1,a)}return!1}),$(q).triggerHandler("jqGridAddEditAfterShowForm",[$(w),u]),$.isFunction(rp_ge[q.p.id].afterShowForm)&&rp_ge[q.p.id].afterShowForm.call(q,$(w),u);var W=n();m(W[0],W)}}})},viewGridRow:function(a,b){var c=$.jgrid.getRegional(this[0],"view"),d=this[0].p.styleUI,e=$.jgrid.styleUI[d].formedit,f=$.jgrid.styleUI[d].common;return b=$.extend(!0,{top:0,left:0,width:500,datawidth:"auto",height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,jqModal:!0,closeOnEscape:!1,labelswidth:"30%",closeicon:[],navkeys:[!1,38,40],onClose:null,beforeShowForm:null,beforeInitData:null,viewPagerButtons:!0,recreateForm:!1,removemodal:!0,form:"view"},c,b||{}),rp_ge[$(this)[0].p.id]=b,this.each(function(){function c(){(rp_ge[j.p.id].closeOnEscape===!0||rp_ge[j.p.id].navkeys[0]===!0)&&setTimeout(function(){$(".ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(p.modalhead)).attr("tabindex","-1").focus()},0)}function d(a,c,d,e){var g,h,i,j,k,l,m,n,o,p=0,q=[],r=!1,s="<td class='CaptionTD form-view-label "+f.content+"' width='"+b.labelswidth+"'>&#160;</td><td class='DataTD form-view-data ui-helper-reset "+f.content+"'>&#160;</td>",t="",u="<td class='CaptionTD form-view-label "+f.content+"'>&#160;</td><td class='DataTD form-view-data "+f.content+"'>&#160;</td>",v=["integer","number","currency"],w=0,x=0;for(l=1;e>=l;l++)t+=1===l?s:u;if($(c.p.colModel).each(function(){h=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,h||"right"!==this.align||(this.formatter&&-1!==$.inArray(this.formatter,v)?w=Math.max(w,parseInt(this.width,10)):x=Math.max(x,parseInt(this.width,10)))}),m=0!==w?w:0!==x?x:0,r=$(c).jqGrid("getInd",a),$(c.p.colModel).each(function(a){if(g=this.name,n=!1,h=this.editrules&&this.editrules.edithidden===!0?!1:this.hidden===!0?!0:!1,k=h?"style='display:none'":"",o="boolean"!=typeof this.viewable?!0:this.viewable,"cb"!==g&&"subgrid"!==g&&"rn"!==g&&o){j=r===!1?"":g===c.p.ExpandColumn&&c.p.treeGrid===!0?$("td:eq("+a+")",c.rows[r]).text():$("td:eq("+a+")",c.rows[r]).html(),n="right"===this.align&&0!==m?!0:!1;var b=$.extend({},{rowabove:!1,rowcontent:""},this.formoptions||{}),f=parseInt(b.rowpos,10)||p+1,l=parseInt(2*(parseInt(b.colpos,10)||1),10);if(b.rowabove){var s=$("<tr><td class='contentinfo' colspan='"+2*e+"'>"+b.rowcontent+"</td></tr>");$(d).append(s),s[0].rp=f}i=$(d).find("tr[rowpos="+f+"]"),0===i.length&&(i=$("<tr "+k+" rowpos='"+f+"'></tr>").addClass("FormData").attr("id","trv_"+g),$(i).append(t),$(d).append(i),i[0].rp=f),$("td:eq("+(l-2)+")",i[0]).html("<b>"+(void 0===b.label?c.p.colNames[a]:b.label)+"</b>"),$("td:eq("+(l-1)+")",i[0]).append("<span>"+j+"</span>").attr("id","v_"+g),n&&$("td:eq("+(l-1)+") span",i[0]).css({"text-align":"right",width:m+"px"}),q[p]=a,p++}}),p>0){var y=$("<tr class='FormData' style='display:none'><td class='CaptionTD'></td><td colspan='"+(2*e-1)+"' class='DataTD'><input class='FormElement' id='id_g' type='text' name='id' value='"+a+"'/></td></tr>");y[0].rp=p+99,$(d).append(y)}return q}function g(a,b){var c,d,e,f,g=0;f=$(b).jqGrid("getInd",a,!0),f&&($("td",f).each(function(a){c=b.p.colModel[a].name,d=b.p.colModel[a].editrules&&b.p.colModel[a].editrules.edithidden===!0?!1:b.p.colModel[a].hidden===!0?!0:!1,"cb"!==c&&"subgrid"!==c&&"rn"!==c&&(e=c===b.p.ExpandColumn&&b.p.treeGrid===!0?$(this).text():$(this).html(),c=$.jgrid.jqID("v_"+c),$("#"+c+" span","#"+m).html(e),d&&$("#"+c,"#"+m).parents("tr:first").hide(),g++)}),g>0&&$("#id_g","#"+m).val(a))}function h(a,b){var c=b[1].length-1;0===a?$("#pData","#"+m+"_2").addClass(f.disabled):void 0!==b[1][a-1]&&$("#"+$.jgrid.jqID(b[1][a-1])).hasClass(f.disabled)?$("#pData",m+"_2").addClass(f.disabled):$("#pData","#"+m+"_2").removeClass(f.disabled),a===c?$("#nData","#"+m+"_2").addClass(f.disabled):void 0!==b[1][a+1]&&$("#"+$.jgrid.jqID(b[1][a+1])).hasClass(f.disabled)?$("#nData",m+"_2").addClass(f.disabled):$("#nData","#"+m+"_2").removeClass(f.disabled)}function i(){var a=$(j).jqGrid("getDataIDs"),b=$("#id_g","#"+m).val(),c=$.inArray(b,a);return[c,a]}var j=this;if(j.grid&&a){var k=j.p.id,l="ViewGrid_"+$.jgrid.jqID(k),m="ViewTbl_"+$.jgrid.jqID(k),n="ViewGrid_"+k,o="ViewTbl_"+k,p={themodal:"viewmod"+k,modalhead:"viewhd"+k,modalcontent:"viewcnt"+k,scrollelm:l},q=$.isFunction(rp_ge[j.p.id].beforeInitData)?rp_ge[j.p.id].beforeInitData:!1,r=!0,s=1,t=0;rp_ge[j.p.id].styleUI=j.p.styleUI||"jQueryUI",b.recreateForm||$(j).data("viewProp")&&$.extend(rp_ge[$(this)[0].p.id],$(j).data("viewProp"));var u=isNaN(rp_ge[$(this)[0].p.id].dataheight)?rp_ge[$(this)[0].p.id].dataheight:rp_ge[$(this)[0].p.id].dataheight+"px",v=isNaN(rp_ge[$(this)[0].p.id].datawidth)?rp_ge[$(this)[0].p.id].datawidth:rp_ge[$(this)[0].p.id].datawidth+"px",w=$("<form name='FormPost' id='"+n+"' class='FormGrid' style='width:"+v+";height:"+u+";'></form>"),x=$("<table id='"+o+"' class='EditTable ViewTable'><tbody></tbody></table>");if($(j.p.colModel).each(function(){var a=this.formoptions;s=Math.max(s,a?a.colpos||0:0),t=Math.max(t,a?a.rowpos||0:0)}),$(w).append(x),q&&(r=q.call(j,w),void 0===r&&(r=!0)),r!==!1){d(a,j,x,s);var y="rtl"===j.p.direction?!0:!1,z=y?"nData":"pData",A=y?"pData":"nData",B="<a id='"+z+"' class='fm-button "+f.button+"'><span class='"+f.icon_base+" "+e.icon_prev+"'></span></a>",C="<a id='"+A+"' class='fm-button "+f.button+"'><span class='"+f.icon_base+" "+e.icon_next+"'></span></a>",D="<a id='cData' class='fm-button "+f.button+"'>"+b.bClose+"</a>";if(t>0){var E=[];$.each($(x)[0].rows,function(a,b){E[a]=b}),E.sort(function(a,b){return a.rp>b.rp?1:a.rp<b.rp?-1:0}),$.each(E,function(a,b){$("tbody",x).append(b)})}b.gbox="#gbox_"+$.jgrid.jqID(k);var F=$("<div></div>").append(w).append("<table border='0' class='EditTable' id='"+m+"_2'><tbody><tr id='Act_Buttons'><td class='navButton' width='"+b.labelswidth+"'>"+(y?C+B:B+C)+"</td><td class='EditButton'>"+D+"</td></tr></tbody></table>");$.jgrid.createModal(p,F,rp_ge[$(this)[0].p.id],"#gview_"+$.jgrid.jqID(j.p.id),$("#gview_"+$.jgrid.jqID(j.p.id))[0]),y&&($("#pData, #nData","#"+m+"_2").css("float","right"),$(".EditButton","#"+m+"_2").css("text-align","left")),b.viewPagerButtons||$("#pData, #nData","#"+m+"_2").hide(),F=null,$("#"+p.themodal).keydown(function(a){if(27===a.which)return rp_ge[j.p.id].closeOnEscape&&$.jgrid.hideModal("#"+$.jgrid.jqID(p.themodal),{gb:b.gbox,jqm:b.jqModal,onClose:b.onClose,removemodal:rp_ge[j.p.id].removemodal,formprop:!rp_ge[j.p.id].recreateForm,form:rp_ge[j.p.id].form}),!1;if(b.navkeys[0]===!0){if(a.which===b.navkeys[1])return $("#pData","#"+m+"_2").trigger("click"),!1;if(a.which===b.navkeys[2])return $("#nData","#"+m+"_2").trigger("click"),!1}}),b.closeicon=$.extend([!0,"left",e.icon_close],b.closeicon),b.closeicon[0]===!0&&$("#cData","#"+m+"_2").addClass("right"===b.closeicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.closeicon[2]+"'></span>"),$.isFunction(b.beforeShowForm)&&b.beforeShowForm.call(j,$("#"+l)),$.jgrid.viewModal("#"+$.jgrid.jqID(p.themodal),{gbox:"#gbox_"+$.jgrid.jqID(k),jqm:b.jqModal,overlay:b.overlay,modal:b.modal,onHide:function(a){$(j).data("viewProp",{top:parseFloat($(a.w).css("top")),left:parseFloat($(a.w).css("left")),width:$(a.w).width(),height:$(a.w).height(),dataheight:$("#"+l).height(),datawidth:$("#"+l).width()}),a.w.remove(),a.o&&a.o.remove()}}),$(".fm-button:not(."+f.disabled+")","#"+m+"_2").hover(function(){$(this).addClass(f.hover)},function(){$(this).removeClass(f.hover)}),c(),$("#cData","#"+m+"_2").click(function(){return $.jgrid.hideModal("#"+$.jgrid.jqID(p.themodal),{gb:"#gbox_"+$.jgrid.jqID(k),jqm:b.jqModal,onClose:b.onClose,removemodal:rp_ge[j.p.id].removemodal,formprop:!rp_ge[j.p.id].recreateForm,form:rp_ge[j.p.id].form}),!1}),$("#nData","#"+m+"_2").click(function(){$("#FormError","#"+m).hide();var a=i();return a[0]=parseInt(a[0],10),-1!==a[0]&&a[1][a[0]+1]&&($.isFunction(b.onclickPgButtons)&&b.onclickPgButtons.call(j,"next",$("#"+l),a[1][a[0]]),g(a[1][a[0]+1],j),$(j).jqGrid("setSelection",a[1][a[0]+1]),$.isFunction(b.afterclickPgButtons)&&b.afterclickPgButtons.call(j,"next",$("#"+l),a[1][a[0]+1]),h(a[0]+1,a)),c(),!1}),$("#pData","#"+m+"_2").click(function(){$("#FormError","#"+m).hide();var a=i();return-1!==a[0]&&a[1][a[0]-1]&&($.isFunction(b.onclickPgButtons)&&b.onclickPgButtons.call(j,"prev",$("#"+l),a[1][a[0]]),g(a[1][a[0]-1],j),$(j).jqGrid("setSelection",a[1][a[0]-1]),$.isFunction(b.afterclickPgButtons)&&b.afterclickPgButtons.call(j,"prev",$("#"+l),a[1][a[0]-1]),h(a[0]-1,a)),c(),!1});var G=i();h(G[0],G)}}})},delGridRow:function(a,b){var c=$.jgrid.getRegional(this[0],"del"),d=this[0].p.styleUI,e=$.jgrid.styleUI[d].formedit,f=$.jgrid.styleUI[d].common;return b=$.extend(!0,{top:0,left:0,width:240,height:"auto",dataheight:"auto",modal:!1,overlay:30,drag:!0,resize:!0,url:"",mtype:"POST",reloadAfterSubmit:!0,beforeShowForm:null,beforeInitData:null,afterShowForm:null,beforeSubmit:null,onclickSubmit:null,afterSubmit:null,jqModal:!0,closeOnEscape:!1,delData:{},delicon:[],cancelicon:[],onClose:null,ajaxDelOptions:{},processing:!1,serializeDelData:null,useDataProxy:!1},c,b||{}),rp_ge[$(this)[0].p.id]=b,this.each(function(){var c=this;if(c.grid&&a){var d,g,h,i,j=$.isFunction(rp_ge[c.p.id].beforeShowForm),k=$.isFunction(rp_ge[c.p.id].afterShowForm),l=$.isFunction(rp_ge[c.p.id].beforeInitData)?rp_ge[c.p.id].beforeInitData:!1,m=c.p.id,n={},o=!0,p="DelTbl_"+$.jgrid.jqID(m),q="DelTbl_"+m,r={themodal:"delmod"+m,modalhead:"delhd"+m,modalcontent:"delcnt"+m,scrollelm:p};if(rp_ge[c.p.id].styleUI=c.p.styleUI||"jQueryUI",$.isArray(a)&&(a=a.join()),void 0!==$("#"+$.jgrid.jqID(r.themodal))[0]){if(l&&(o=l.call(c,$("#"+p)),void 0===o&&(o=!0)),o===!1)return;$("#DelData>td","#"+p).text(a),$("#DelError","#"+p).hide(),rp_ge[c.p.id].processing===!0&&(rp_ge[c.p.id].processing=!1,$("#dData","#"+p).removeClass(f.active)),j&&rp_ge[c.p.id].beforeShowForm.call(c,$("#"+p)),$.jgrid.viewModal("#"+$.jgrid.jqID(r.themodal),{gbox:"#gbox_"+$.jgrid.jqID(m),jqm:rp_ge[c.p.id].jqModal,jqM:!1,overlay:rp_ge[c.p.id].overlay,modal:rp_ge[c.p.id].modal}),k&&rp_ge[c.p.id].afterShowForm.call(c,$("#"+p))}else{var s=isNaN(rp_ge[c.p.id].dataheight)?rp_ge[c.p.id].dataheight:rp_ge[c.p.id].dataheight+"px",t=isNaN(b.datawidth)?b.datawidth:b.datawidth+"px",u="<div id='"+q+"' class='formdata' style='width:"+t+";overflow:auto;position:relative;height:"+s+";'>";u+="<table class='DelTable'><tbody>",u+="<tr id='DelError' style='display:none'><td class='"+f.error+"'></td></tr>",u+="<tr id='DelData' style='display:none'><td >"+a+"</td></tr>",u+='<tr><td class="delmsg" style="white-space:pre;">'+rp_ge[c.p.id].msg+"</td></tr><tr><td >&#160;</td></tr>",u+="</tbody></table></div>";var v="<a id='dData' class='fm-button "+f.button+"'>"+b.bSubmit+"</a>",w="<a id='eData' class='fm-button "+f.button+"'>"+b.bCancel+"</a>";if(u+="<table class='EditTable ui-common-table' id='"+p+"_2'><tbody><tr><td><hr class='"+f.content+"' style='margin:1px'/></td></tr><tr><td class='DelButton EditButton'>"+v+"&#160;"+w+"</td></tr></tbody></table>",b.gbox="#gbox_"+$.jgrid.jqID(m),$.jgrid.createModal(r,u,rp_ge[c.p.id],"#gview_"+$.jgrid.jqID(c.p.id),$("#gview_"+$.jgrid.jqID(c.p.id))[0]),l&&(o=l.call(c,$(u)),void 0===o&&(o=!0)),o===!1)return;$(".fm-button","#"+p+"_2").hover(function(){$(this).addClass(f.hover)},function(){$(this).removeClass(f.hover)}),b.delicon=$.extend([!0,"left",e.icon_del],rp_ge[c.p.id].delicon),b.cancelicon=$.extend([!0,"left",e.icon_cancel],rp_ge[c.p.id].cancelicon),b.delicon[0]===!0&&$("#dData","#"+p+"_2").addClass("right"===b.delicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.delicon[2]+"'></span>"),b.cancelicon[0]===!0&&$("#eData","#"+p+"_2").addClass("right"===b.cancelicon[1]?"fm-button-icon-right":"fm-button-icon-left").append("<span class='"+f.icon_base+" "+b.cancelicon[2]+"'></span>"),$("#dData","#"+p+"_2").click(function(){var a,e=[!0,""],j=$("#DelData>td","#"+p).text();if(n={},$.isFunction(rp_ge[c.p.id].onclickSubmit)&&(n=rp_ge[c.p.id].onclickSubmit.call(c,rp_ge[c.p.id],j)||{}),$.isFunction(rp_ge[c.p.id].beforeSubmit)&&(e=rp_ge[c.p.id].beforeSubmit.call(c,j)),e[0]&&!rp_ge[c.p.id].processing){if(rp_ge[c.p.id].processing=!0,h=c.p.prmNames,d=$.extend({},rp_ge[c.p.id].delData,n),i=h.oper,d[i]=h.deloper,g=h.id,j=String(j).split(","),!j.length)return!1;for(a in j)j.hasOwnProperty(a)&&(j[a]=$.jgrid.stripPref(c.p.idPrefix,j[a]));d[g]=j.join(),$(this).addClass(f.active);var k=$.extend({url:rp_ge[c.p.id].url||$(c).jqGrid("getGridParam","editurl"),type:rp_ge[c.p.id].mtype,data:$.isFunction(rp_ge[c.p.id].serializeDelData)?rp_ge[c.p.id].serializeDelData.call(c,d):d,complete:function(a,g){var h;if($("#dData","#"+p+"_2").removeClass(f.active),a.status>=300&&304!==a.status?(e[0]=!1,$.isFunction(rp_ge[c.p.id].errorTextFormat)?e[1]=rp_ge[c.p.id].errorTextFormat.call(c,a):e[1]=g+" Status: '"+a.statusText+"'. Error code: "+a.status):$.isFunction(rp_ge[c.p.id].afterSubmit)&&(e=rp_ge[c.p.id].afterSubmit.call(c,a,d)),e[0]===!1)$("#DelError>td","#"+p).html(e[1]),$("#DelError","#"+p).show();else{if(rp_ge[c.p.id].reloadAfterSubmit&&"local"!==c.p.datatype)$(c).trigger("reloadGrid");else{if(c.p.treeGrid===!0)try{$(c).jqGrid("delTreeNode",c.p.idPrefix+j[0])}catch(i){}else for(h=0;h<j.length;h++)$(c).jqGrid("delRowData",c.p.idPrefix+j[h]);c.p.selrow=null,c.p.selarrrow=[]}$.isFunction(rp_ge[c.p.id].afterComplete)&&setTimeout(function(){rp_ge[c.p.id].afterComplete.call(c,a,j)},500)}rp_ge[c.p.id].processing=!1,e[0]&&$.jgrid.hideModal("#"+$.jgrid.jqID(r.themodal),{gb:"#gbox_"+$.jgrid.jqID(m),jqm:b.jqModal,onClose:rp_ge[c.p.id].onClose})}},$.jgrid.ajaxOptions,rp_ge[c.p.id].ajaxDelOptions);if(k.url||rp_ge[c.p.id].useDataProxy||($.isFunction(c.p.dataProxy)?rp_ge[c.p.id].useDataProxy=!0:(e[0]=!1,e[1]+=" "+$.jgrid.getRegional(c,"errors.nourl"))),e[0])if(rp_ge[c.p.id].useDataProxy){var l=c.p.dataProxy.call(c,k,"del_"+c.p.id);void 0===l&&(l=[!0,""]),l[0]===!1?(e[0]=!1,e[1]=l[1]||"Error deleting the selected row!"):$.jgrid.hideModal("#"+$.jgrid.jqID(r.themodal),{gb:"#gbox_"+$.jgrid.jqID(m),jqm:b.jqModal,onClose:rp_ge[c.p.id].onClose})}else"clientArray"===k.url?(d=k.data,k.complete({status:200,statusText:""},"")):$.ajax(k)}return e[0]===!1&&($("#DelError>td","#"+p).html(e[1]),$("#DelError","#"+p).show()),!1}),$("#eData","#"+p+"_2").click(function(){return $.jgrid.hideModal("#"+$.jgrid.jqID(r.themodal),{gb:"#gbox_"+$.jgrid.jqID(m),jqm:rp_ge[c.p.id].jqModal,onClose:rp_ge[c.p.id].onClose}),!1}),j&&rp_ge[c.p.id].beforeShowForm.call(c,$("#"+p)),$.jgrid.viewModal("#"+$.jgrid.jqID(r.themodal),{gbox:"#gbox_"+$.jgrid.jqID(m),jqm:rp_ge[c.p.id].jqModal,overlay:rp_ge[c.p.id].overlay,modal:rp_ge[c.p.id].modal}),k&&rp_ge[c.p.id].afterShowForm.call(c,$("#"+p))}rp_ge[c.p.id].closeOnEscape===!0&&setTimeout(function(){$(".ui-jqdialog-titlebar-close","#"+$.jgrid.jqID(r.modalhead)).attr("tabindex","-1").focus()},0)}})},navGrid:function(a,b,c,d,e,f,g){var h=$.jgrid.getRegional(this[0],"nav"),i=this[0].p.styleUI,j=$.jgrid.styleUI[i].navigator,k=$.jgrid.styleUI[i].common;return b=$.extend({edit:!0,editicon:j.icon_edit_nav,add:!0,addicon:j.icon_add_nav,del:!0,delicon:j.icon_del_nav,search:!0,searchicon:j.icon_search_nav,refresh:!0,refreshicon:j.icon_refresh_nav,refreshstate:"firstpage",view:!1,viewicon:j.icon_view_nav,position:"left",closeOnEscape:!0,beforeRefresh:null,afterRefresh:null,cloneToTop:!1,alertwidth:200,alertheight:"auto",alerttop:null,alertleft:null,alertzIndex:null,dropmenu:!1,navButtonText:""},h,b||{}),this.each(function(){if(!this.p.navGrid){var j,l,m,n={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},o=this;if(o.grid&&"string"==typeof a){$(o).data("navGrid")||$(o).data("navGrid",b),m=$(o).data("navGrid"),o.p.force_regional&&(m=$.extend(m,h)),void 0===$("#"+n.themodal)[0]&&(m.alerttop||m.alertleft||(void 0!==window.innerWidth?(m.alertleft=window.innerWidth,m.alerttop=window.innerHeight):void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!==document.documentElement.clientWidth?(m.alertleft=document.documentElement.clientWidth,m.alerttop=document.documentElement.clientHeight):(m.alertleft=1024,m.alerttop=768),m.alertleft=m.alertleft/2-parseInt(m.alertwidth,10)/2,m.alerttop=m.alerttop/2-25),$.jgrid.createModal(n,"<div>"+m.alerttext+"</div><span tabindex='0'><span tabindex='-1' id='jqg_alrt'></span></span>",{gbox:"#gbox_"+$.jgrid.jqID(o.p.id),jqModal:!0,drag:!0,resize:!0,caption:m.alertcap,top:m.alerttop,left:m.alertleft,width:m.alertwidth,height:m.alertheight,closeOnEscape:m.closeOnEscape,zIndex:m.alertzIndex,styleUI:o.p.styleUI},"#gview_"+$.jgrid.jqID(o.p.id),$("#gbox_"+$.jgrid.jqID(o.p.id))[0],!0));var p,q=1,r=function(){$(this).hasClass(k.disabled)||$(this).addClass(k.hover)},s=function(){$(this).removeClass(k.hover)};for(m.cloneToTop&&o.p.toppager&&(q=2),p=0;q>p;p++){var t,u,v,w=$("<table class='ui-pg-table navtable ui-common-table'><tbody><tr></tr></tbody></table>"),x="<td class='ui-pg-button "+k.disabled+"' style='width:4px;'><span class='ui-separator'></span></td>";0===p?(u=a,v=o.p.id,u===o.p.toppager&&(v+="_top",q=1)):(u=o.p.toppager,v=o.p.id+"_top"),"rtl"===o.p.direction&&$(w).attr("dir","rtl").css("float","right"),d=d||{},m.add&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.addicon+"'></span>"+m.addtext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.addtitle||"",id:d.id||"add_"+v}).click(function(){return $(this).hasClass(k.disabled)||($.isFunction(m.addfunc)?m.addfunc.call(o):$(o).jqGrid("editGridRow","new",d)),!1}).hover(r,s),t=null),c=c||{},m.edit&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.editicon+"'></span>"+m.edittext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.edittitle||"",id:c.id||"edit_"+v}).click(function(){if(!$(this).hasClass(k.disabled)){var a=o.p.selrow;a?$.isFunction(m.editfunc)?m.editfunc.call(o,a):$(o).jqGrid("editGridRow",a,c):($.jgrid.viewModal("#"+n.themodal,{gbox:"#gbox_"+$.jgrid.jqID(o.p.id),jqm:!0}),$("#jqg_alrt").focus())}return!1}).hover(r,s),t=null),g=g||{},m.view&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.viewicon+"'></span>"+m.viewtext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.viewtitle||"",id:g.id||"view_"+v}).click(function(){if(!$(this).hasClass(k.disabled)){var a=o.p.selrow;a?$.isFunction(m.viewfunc)?m.viewfunc.call(o,a):$(o).jqGrid("viewGridRow",a,g):($.jgrid.viewModal("#"+n.themodal,{gbox:"#gbox_"+$.jgrid.jqID(o.p.id),jqm:!0}),$("#jqg_alrt").focus())}return!1}).hover(r,s),t=null),e=e||{},m.del&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.delicon+"'></span>"+m.deltext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.deltitle||"",id:e.id||"del_"+v}).click(function(){if(!$(this).hasClass(k.disabled)){var a;o.p.multiselect?(a=o.p.selarrrow,0===a.length&&(a=null)):a=o.p.selrow,a?$.isFunction(m.delfunc)?m.delfunc.call(o,a):$(o).jqGrid("delGridRow",a,e):($.jgrid.viewModal("#"+n.themodal,{gbox:"#gbox_"+$.jgrid.jqID(o.p.id),jqm:!0}),$("#jqg_alrt").focus())}return!1}).hover(r,s),t=null),(m.add||m.edit||m.del||m.view)&&$("tr",w).append(x),f=f||{},m.search&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.searchicon+"'></span>"+m.searchtext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.searchtitle||"",id:f.id||"search_"+v}).click(function(){return $(this).hasClass(k.disabled)||($.isFunction(m.searchfunc)?m.searchfunc.call(o,f):$(o).jqGrid("searchGrid",f)),!1}).hover(r,s),f.showOnLoad&&f.showOnLoad===!0&&$(t,w).click(),t=null),m.refresh&&(t=$("<td class='ui-pg-button "+k.cornerall+"'></td>"),$(t).append("<div class='ui-pg-div'><span class='"+k.icon_base+" "+m.refreshicon+"'></span>"+m.refreshtext+"</div>"),$("tr",w).append(t),$(t,w).attr({title:m.refreshtitle||"",id:"refresh_"+v}).click(function(){if(!$(this).hasClass(k.disabled)){$.isFunction(m.beforeRefresh)&&m.beforeRefresh.call(o),o.p.search=!1,o.p.resetsearch=!0;try{if("currentfilter"!==m.refreshstate){var a=o.p.id;o.p.postData.filters="";try{$("#fbox_"+$.jgrid.jqID(a)).jqFilter("resetFilter")}catch(b){}$.isFunction(o.clearToolbar)&&o.clearToolbar.call(o,!1)}}catch(c){}switch(m.refreshstate){case"firstpage":$(o).trigger("reloadGrid",[{page:1}]);break;case"current":case"currentfilter":$(o).trigger("reloadGrid",[{current:!0}])}$.isFunction(m.afterRefresh)&&m.afterRefresh.call(o)}return!1}).hover(r,s),t=null),l=$(".ui-jqgrid").css("font-size")||"11px",$("body").append("<div id='testpg2' class='ui-jqgrid "+$.jgrid.styleUI[i].base.entrieBox+"' style='font-size:"+l+";visibility:hidden;' ></div>"),j=$(w).clone().appendTo("#testpg2").width(),$("#testpg2").remove(),o.p._nvtd&&(m.dropmenu?(w=null,$(o).jqGrid("_buildNavMenu",u,v,b,c,d,e,f,g)):j>o.p._nvtd[0]?(o.p.responsive?(w=null,$(o).jqGrid("_buildNavMenu",u,v,b,c,d,e,f,g)):$(u+"_"+m.position,u).append(w).width(j),o.p._nvtd[0]=j):$(u+"_"+m.position,u).append(w),o.p._nvtd[1]=j),o.p.navGrid=!0}o.p.storeNavOptions&&(o.p.navOptions=m,o.p.editOptions=c,o.p.addOptions=d,o.p.delOptions=e,o.p.searchOptions=f,o.p.viewOptions=g,o.p.navButtons=[])}}})},navButtonAdd:function(a,b){var c=this[0].p.styleUI,d=$.jgrid.styleUI[c].navigator;return b=$.extend({caption:"newButton",title:"",buttonicon:d.icon_newbutton_nav,onClickButton:null,position:"last",cursor:"pointer",internal:!1},b||{}),this.each(function(){if(this.grid){"string"==typeof a&&0!==a.indexOf("#")&&(a="#"+$.jgrid.jqID(a));var d=$(".navtable",a)[0],e=this,f=$.jgrid.styleUI[c].common.disabled,g=$.jgrid.styleUI[c].common.hover,h=$.jgrid.styleUI[c].common.cornerall,i=$.jgrid.styleUI[c].common.icon_base;if(e.p.storeNavOptions&&!b.internal&&e.p.navButtons.push([a,b]),d){if(b.id&&void 0!==$("#"+$.jgrid.jqID(b.id),d)[0])return;
var j=$("<td></td>");"NONE"===b.buttonicon.toString().toUpperCase()?$(j).addClass("ui-pg-button "+h).append("<div class='ui-pg-div'>"+b.caption+"</div>"):$(j).addClass("ui-pg-button "+h).append("<div class='ui-pg-div'><span class='"+i+" "+b.buttonicon+"'></span>"+b.caption+"</div>"),b.id&&$(j).attr("id",b.id),"first"===b.position?0===d.rows[0].cells.length?$("tr",d).append(j):$("tr td:eq(0)",d).before(j):$("tr",d).append(j),$(j,d).attr("title",b.title||"").click(function(a){return $(this).hasClass(f)||$.isFunction(b.onClickButton)&&b.onClickButton.call(e,a),!1}).hover(function(){$(this).hasClass(f)||$(this).addClass(g)},function(){$(this).removeClass(g)})}else if(d=$(".dropdownmenu",a)[0]){var k=$(d).val(),l=b.id||$.jgrid.randId(),m=$('<li class="ui-menu-item" role="presentation"><a class="'+h+' g-menu-item" tabindex="0" role="menuitem" id="'+l+'">'+(b.caption||b.title)+"</a></li>");k&&("first"===b.position?$("#"+k).prepend(m):$("#"+k).append(m),$(m).on("click",function(a){return $(this).hasClass(f)||($("#"+k).hide(),$.isFunction(b.onClickButton)&&b.onClickButton.call(e,a)),!1}).find("a").hover(function(){$(this).hasClass(f)||$(this).addClass(g)},function(){$(this).removeClass(g)}))}}})},navSeparatorAdd:function(a,b){var c=this[0].p.styleUI,d=$.jgrid.styleUI[c].common;return b=$.extend({sepclass:"ui-separator",sepcontent:"",position:"last"},b||{}),this.each(function(){if(this.grid){"string"==typeof a&&0!==a.indexOf("#")&&(a="#"+$.jgrid.jqID(a));var c,e,f=$(".navtable",a)[0];this.p.storeNavOptions&&this.p.navButtons.push([a,b]),f?(c="<td class='ui-pg-button "+d.disabled+"' style='width:4px;'><span class='"+b.sepclass+"'></span>"+b.sepcontent+"</td>","first"===b.position?0===f.rows[0].cells.length?$("tr",f).append(c):$("tr td:eq(0)",f).before(c):$("tr",f).append(c)):(f=$(".dropdownmenu",a)[0],c="<li class='ui-menu-item "+d.disabled+"' style='width:100%' role='presentation'><hr class='ui-separator-li'></li>",f&&(e=$(f).val(),e&&("first"===b.position?$("#"+e).prepend(c):$("#"+e).append(c))))}})},_buildNavMenu:function(a,b,c,d,e,f,g,h){return this.each(function(){var i=this,j=$.jgrid.getRegional(i,"nav"),k=i.p.styleUI,l=($.jgrid.styleUI[k].navigator,$.jgrid.styleUI[k].filter),m=$.jgrid.styleUI[k].common,n="form_menu_"+$.jgrid.randId(),o=c.navButtonText?c.navButtonText:j.selectcaption||"Actions",p="<button class='dropdownmenu "+m.button+"' value='"+n+"'>"+o+"</button>";$(a+"_"+c.position,a).append(p);var q={themodal:"alertmod_"+this.p.id,modalhead:"alerthd_"+this.p.id,modalcontent:"alertcnt_"+this.p.id},r=function(){var a,j,k=$(".ui-jqgrid-view").css("font-size")||"11px",o=$('<ul id="'+n+'" class="ui-nav-menu modal-content" role="menu" tabindex="0" style="display:none;font-size:'+k+'"></ul>');c.add&&(e=e||{},a=e.id||"add_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+m.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.addtext||c.addtitle)+"</a></li>").click(function(){return $(this).hasClass(m.disabled)||($.isFunction(c.addfunc)?c.addfunc.call(i):$(i).jqGrid("editGridRow","new",e),$(o).hide()),!1}),$(o).append(j)),c.edit&&(d=d||{},a=d.id||"edit_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+m.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.edittext||c.edittitle)+"</a></li>").click(function(){if(!$(this).hasClass(m.disabled)){var a=i.p.selrow;a?$.isFunction(c.editfunc)?c.editfunc.call(i,a):$(i).jqGrid("editGridRow",a,d):($.jgrid.viewModal("#"+q.themodal,{gbox:"#gbox_"+$.jgrid.jqID(i.p.id),jqm:!0}),$("#jqg_alrt").focus()),$(o).hide()}return!1}),$(o).append(j)),c.view&&(h=h||{},a=h.id||"view_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+m.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.viewtext||c.viewtitle)+"</a></li>").click(function(){if(!$(this).hasClass(m.disabled)){var a=i.p.selrow;a?$.isFunction(c.editfunc)?c.viewfunc.call(i,a):$(i).jqGrid("viewGridRow",a,h):($.jgrid.viewModal("#"+q.themodal,{gbox:"#gbox_"+$.jgrid.jqID(i.p.id),jqm:!0}),$("#jqg_alrt").focus()),$(o).hide()}return!1}),$(o).append(j)),c.del&&(f=f||{},a=f.id||"del_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+m.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.deltext||c.deltitle)+"</a></li>").click(function(){if(!$(this).hasClass(m.disabled)){var a;i.p.multiselect?(a=i.p.selarrrow,0===a.length&&(a=null)):a=i.p.selrow,a?$.isFunction(c.delfunc)?c.delfunc.call(i,a):$(i).jqGrid("delGridRow",a,f):($.jgrid.viewModal("#"+q.themodal,{gbox:"#gbox_"+$.jgrid.jqID(i.p.id),jqm:!0}),$("#jqg_alrt").focus()),$(o).hide()}return!1}),$(o).append(j)),(c.add||c.edit||c.del||c.view)&&$(o).append("<li class='ui-menu-item "+m.disabled+"' style='width:100%' role='presentation'><hr class='ui-separator-li'></li>"),c.search&&(g=g||{},a=g.id||"search_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+m.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.searchtext||c.searchtitle)+"</a></li>").click(function(){return $(this).hasClass(m.disabled)||($.isFunction(c.searchfunc)?c.searchfunc.call(i,g):$(i).jqGrid("searchGrid",g),$(o).hide()),!1}),$(o).append(j),g.showOnLoad&&g.showOnLoad===!0&&$(j).click()),c.refresh&&(a=g.id||"search_"+b,j=$('<li class="ui-menu-item" role="presentation"><a class="'+m.cornerall+' g-menu-item" tabindex="0" role="menuitem" id="'+a+'">'+(c.refreshtext||c.refreshtitle)+"</a></li>").click(function(){if(!$(this).hasClass(m.disabled)){$.isFunction(c.beforeRefresh)&&c.beforeRefresh.call(i),i.p.search=!1,i.p.resetsearch=!0;try{if("currentfilter"!==c.refreshstate){var a=i.p.id;i.p.postData.filters="";try{$("#fbox_"+$.jgrid.jqID(a)).jqFilter("resetFilter")}catch(b){}$.isFunction(i.clearToolbar)&&i.clearToolbar.call(i,!1)}}catch(d){}switch(c.refreshstate){case"firstpage":$(i).trigger("reloadGrid",[{page:1}]);break;case"current":case"currentfilter":$(i).trigger("reloadGrid",[{current:!0}])}$.isFunction(c.afterRefresh)&&c.afterRefresh.call(i),$(o).hide()}return!1}),$(o).append(j)),$(o).hide(),$("body").append(o),$("#"+n).addClass("ui-menu "+l.menu_widget),$("#"+n+" > li > a").hover(function(){$(this).addClass(m.hover)},function(){$(this).removeClass(m.hover)})};r(),$(".dropdownmenu",a+"_"+c.position).on("click",function(a){var b=$(this).offset(),c=b.left,d=parseInt(b.top),e=$(this).val();$("#"+e).show().css({top:d-($("#"+e).height()+10)+"px",left:c+"px"}),a.stopPropagation()}),$("body").on("click",function(a){$(a.target).hasClass("dropdownmenu")||$("#"+n).hide()})})},GridToForm:function(a,b){return this.each(function(){var c,d=this;if(d.grid){var e=$(d).jqGrid("getRowData",a);if(e)for(c in e)e.hasOwnProperty(c)&&($("[name="+$.jgrid.jqID(c)+"]",b).is("input:radio")||$("[name="+$.jgrid.jqID(c)+"]",b).is("input:checkbox")?$("[name="+$.jgrid.jqID(c)+"]",b).each(function(){$(this).val()==e[c]?$(this)[d.p.useProp?"prop":"attr"]("checked",!0):$(this)[d.p.useProp?"prop":"attr"]("checked",!1)}):$("[name="+$.jgrid.jqID(c)+"]",b).val(e[c]))}})},FormToGrid:function(a,b,c,d){return this.each(function(){var e=this;if(e.grid){c||(c="set"),d||(d="first");var f=$(b).serializeArray(),g={};$.each(f,function(a,b){g[b.name]=b.value}),"add"===c?$(e).jqGrid("addRowData",a,g,d):"set"===c&&$(e).jqGrid("setRowData",a,g)}})}}),$.jgrid.extend({groupingSetup:function(){return this.each(function(){var a,b,c,d=this,e=d.p.colModel,f=d.p.groupingView,g=$.jgrid.styleUI[d.p.styleUI||"jQueryUI"].grouping;if(null===f||"object"!=typeof f&&!$.isFunction(f))d.p.grouping=!1;else if(f.plusicon||(f.plusicon=g.icon_plus),f.minusicon||(f.minusicon=g.icon_minus),f.groupField.length){for(void 0===f.visibiltyOnNextGrouping&&(f.visibiltyOnNextGrouping=[]),f.lastvalues=[],f._locgr||(f.groups=[]),f.counters=[],a=0;a<f.groupField.length;a++)f.groupOrder[a]||(f.groupOrder[a]="asc"),f.groupText[a]||(f.groupText[a]="{0}"),"boolean"!=typeof f.groupColumnShow[a]&&(f.groupColumnShow[a]=!0),"boolean"!=typeof f.groupSummary[a]&&(f.groupSummary[a]=!1),f.groupSummaryPos[a]||(f.groupSummaryPos[a]="footer"),f.groupColumnShow[a]===!0?(f.visibiltyOnNextGrouping[a]=!0,$(d).jqGrid("showCol",f.groupField[a])):(f.visibiltyOnNextGrouping[a]=$("#"+$.jgrid.jqID(d.p.id+"_"+f.groupField[a])).is(":visible"),$(d).jqGrid("hideCol",f.groupField[a]));for(f.summary=[],f.hideFirstGroupCol&&$.isArray(f.formatDisplayField)&&!$.isFunction(f.formatDisplayField[0])&&(f.formatDisplayField[0]=function(a){return a}),b=0,c=e.length;c>b;b++)f.hideFirstGroupCol&&(e[b].hidden||f.groupField[0]!==e[b].name||(e[b].formatter=function(){return""})),e[b].summaryType&&(e[b].summaryDivider?f.summary.push({nm:e[b].name,st:e[b].summaryType,v:"",sd:e[b].summaryDivider,vd:"",sr:e[b].summaryRound,srt:e[b].summaryRoundType||"round"}):f.summary.push({nm:e[b].name,st:e[b].summaryType,v:"",sr:e[b].summaryRound,srt:e[b].summaryRoundType||"round"}))}else d.p.grouping=!1})},groupingPrepare:function(a,b){return this.each(function(){var c,d,e,f,g,h=this.p.groupingView,i=this,j=function(){$.isFunction(this.st)?this.v=this.st.call(i,this.v,this.nm,a):(this.v=$(i).jqGrid("groupingCalculations.handler",this.st,this.v,this.nm,this.sr,this.srt,a),"avg"===this.st.toLowerCase()&&this.sd&&(this.vd=$(i).jqGrid("groupingCalculations.handler",this.st,this.vd,this.sd,this.sr,this.srt,a)))},k=h.groupField.length,l=0;for(c=0;k>c;c++)d=h.groupField[c],f=h.displayField[c],e=a[d],g=null==f?null:a[f],null==g&&(g=e),void 0!==e&&(0===b?(h.groups.push({idx:c,dataIndex:d,value:e,displayValue:g,startRow:b,cnt:1,summary:[]}),h.lastvalues[c]=e,h.counters[c]={cnt:1,pos:h.groups.length-1,summary:$.extend(!0,[],h.summary)},$.each(h.counters[c].summary,j),h.groups[h.counters[c].pos].summary=h.counters[c].summary):"object"==typeof e||($.isArray(h.isInTheSameGroup)&&$.isFunction(h.isInTheSameGroup[c])?h.isInTheSameGroup[c].call(i,h.lastvalues[c],e,c,h):h.lastvalues[c]===e)?1===l?(h.groups.push({idx:c,dataIndex:d,value:e,displayValue:g,startRow:b,cnt:1,summary:[]}),h.lastvalues[c]=e,h.counters[c]={cnt:1,pos:h.groups.length-1,summary:$.extend(!0,[],h.summary)},$.each(h.counters[c].summary,j),h.groups[h.counters[c].pos].summary=h.counters[c].summary):(h.counters[c].cnt+=1,h.groups[h.counters[c].pos].cnt=h.counters[c].cnt,$.each(h.counters[c].summary,j),h.groups[h.counters[c].pos].summary=h.counters[c].summary):(h.groups.push({idx:c,dataIndex:d,value:e,displayValue:g,startRow:b,cnt:1,summary:[]}),h.lastvalues[c]=e,l=1,h.counters[c]={cnt:1,pos:h.groups.length-1,summary:$.extend(!0,[],h.summary)},$.each(h.counters[c].summary,j),h.groups[h.counters[c].pos].summary=h.counters[c].summary))}),this},groupingToggle:function(a){return this.each(function(){var b=this,c=b.p.groupingView,d=a.split("_"),e=parseInt(d[d.length-2],10);d.splice(d.length-2,2);var f,g,h=d.join("_"),i=c.minusicon,j=c.plusicon,k=$("#"+$.jgrid.jqID(a)),l=k.length?k[0].nextSibling:null,m=$("#"+$.jgrid.jqID(a)+" span.tree-wrap-"+b.p.direction),n=function(a){var b=$.map(a.split(" "),function(a){return a.substring(0,h.length+1)===h+"_"?parseInt(a.substring(h.length+1),10):void 0});return b.length>0?b[0]:void 0},o=!1,p=!1,q=b.p.frozenColumns?b.p.id+"_frozen":!1,r=q?$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(q)):!1,s=r&&r.length?r[0].nextSibling:null;if(m.hasClass(i)){if(c.showSummaryOnHide){if(l)for(;l&&(f=n(l.className),!(void 0!==f&&e>=f));)$(l).hide(),l=l.nextSibling,q&&($(s).hide(),s=s.nextSibling)}else if(l)for(;l&&(f=n(l.className),!(void 0!==f&&e>=f));)$(l).hide(),l=l.nextSibling,q&&($(s).hide(),s=s.nextSibling);m.removeClass(i).addClass(j),o=!0}else{if(l)for(g=void 0;l;){if(f=n(l.className),void 0===g&&(g=void 0===f),p=$(l).hasClass("ui-subgrid")&&$(l).hasClass("ui-sg-collapsed"),void 0!==f){if(e>=f)break;f===e+1&&(p||($(l).show().find(">td>span.tree-wrap-"+b.p.direction).removeClass(i).addClass(j),q&&$(s).show().find(">td>span.tree-wrap-"+b.p.direction).removeClass(i).addClass(j)))}else g&&(p||($(l).show(),q&&$(s).show()));l=l.nextSibling,q&&(s=s.nextSibling)}m.removeClass(j).addClass(i)}$(b).triggerHandler("jqGridGroupingClickGroup",[a,o]),$.isFunction(b.p.onClickGroup)&&b.p.onClickGroup.call(b,a,o)}),!1},groupingRender:function(a,b,c,d){return this.each(function(){function e(a,b,c){var d,e=!1;if(0===b)e=c[a];else{var f=c[a].idx;if(0===f)e=c[a];else for(d=a;d>=0;d--)if(c[d].idx===f-b){e=c[d];break}}return e}function f(a,c,d,f){var g,h,i=e(a,c,d),k=j.p.colModel,l=i.cnt,m="";for(h=f;b>h;h++){var n="<td "+j.formatCol(h,1,"")+">&#160;</td>",o="{0}";$.each(i.summary,function(){if(this.nm===k[h].name){k[h].summaryTpl&&(o=k[h].summaryTpl),"string"==typeof this.st&&"avg"===this.st.toLowerCase()&&(this.sd&&this.vd?this.v=this.v/this.vd:this.v&&l>0&&(this.v=this.v/l));try{this.groupCount=i.cnt,this.groupIndex=i.dataIndex,this.groupValue=i.value,g=j.formatter("",this.v,h,this)}catch(a){g=this.v}return n="<td "+j.formatCol(h,1,"")+">"+$.jgrid.template(o,g)+"</td>",!1}}),m+=n}return m}var g,h,i,j=this,k=j.p.groupingView,l="",m="",n=k.groupCollapse?k.plusicon:k.minusicon,o=[],p=k.groupField.length,q=$.jgrid.styleUI[j.p.styleUI||"jQueryUI"].common;n=n+" tree-wrap-"+j.p.direction,$.each(j.p.colModel,function(a,b){var c;for(c=0;p>c;c++)if(k.groupField[c]===b.name){o[c]=a;break}});var r,s=0,t=$.makeArray(k.groupSummary);t.reverse(),r=j.p.multiselect?' colspan="2"':"",$.each(k.groups,function(e,u){if(k._locgr&&!(u.startRow+u.cnt>(c-1)*d&&u.startRow<c*d))return!0;s++,h=j.p.id+"ghead_"+u.idx,g=h+"_"+e,m="<span style='cursor:pointer;margin-right:8px;margin-left:5px;' class='"+q.icon_base+" "+n+"' onclick=\"jQuery('#"+$.jgrid.jqID(j.p.id)+"').jqGrid('groupingToggle','"+g+"');return false;\"></span>";try{$.isArray(k.formatDisplayField)&&$.isFunction(k.formatDisplayField[u.idx])?(u.displayValue=k.formatDisplayField[u.idx].call(j,u.displayValue,u.value,j.p.colModel[o[u.idx]],u.idx,k),i=u.displayValue):i=j.formatter(g,u.displayValue,o[u.idx],u.value)}catch(v){i=u.displayValue}var w="";w=$.isFunction(k.groupText[u.idx])?k.groupText[u.idx].call(j,i,u.cnt,u.summary):$.jgrid.template(k.groupText[u.idx],i,u.cnt,u.summary),"string"!=typeof w&&"number"!=typeof w&&(w=i),"header"===k.groupSummaryPos[u.idx]?(l+='<tr id="'+g+'"'+(k.groupCollapse&&u.idx>0?' style="display:none;" ':" ")+'role="row" class= "'+q.content+" jqgroup ui-row-"+j.p.direction+" "+h+'"><td style="padding-left:'+12*u.idx+'px;"'+r+">"+m+w+"</td>",l+=f(e,0,k.groups,k.groupColumnShow[u.idx]===!1?""===r?2:3:""===r?1:2),l+="</tr>"):l+='<tr id="'+g+'"'+(k.groupCollapse&&u.idx>0?' style="display:none;" ':" ")+'role="row" class= "'+q.content+" jqgroup ui-row-"+j.p.direction+" "+h+'"><td style="padding-left:'+12*u.idx+'px;" colspan="'+(k.groupColumnShow[u.idx]===!1?b-1:b)+'">'+m+w+"</td></tr>";var x=p-1===u.idx;if(x){var y,z,A=k.groups[e+1],B=0,C=u.startRow,D=void 0!==A?A.startRow:k.groups[e].startRow+k.groups[e].cnt;for(k._locgr&&(B=(c-1)*d,B>u.startRow&&(C=B)),y=C;D>y&&a[y-B];y++)l+=a[y-B].join("");if("header"!==k.groupSummaryPos[u.idx]){var E;if(void 0!==A){for(E=0;E<k.groupField.length&&A.dataIndex!==k.groupField[E];E++);s=k.groupField.length-E}for(z=0;s>z;z++)if(t[z]){var F="";k.groupCollapse&&!k.showSummaryOnHide&&(F=' style="display:none;"'),l+="<tr"+F+' jqfootlevel="'+(u.idx-z)+'" role="row" class="'+q.content+" jqfoot ui-row-"+j.p.direction+'">',l+=f(e,z,k.groups,0),l+="</tr>"}s=E}}}),$("#"+$.jgrid.jqID(j.p.id)+" tbody:first").append(l),l=null})},groupingGroupBy:function(a,b){return this.each(function(){var c=this;"string"==typeof a&&(a=[a]);var d=c.p.groupingView;c.p.grouping=!0,d._locgr=!1,void 0===d.visibiltyOnNextGrouping&&(d.visibiltyOnNextGrouping=[]);var e;for(e=0;e<d.groupField.length;e++)!d.groupColumnShow[e]&&d.visibiltyOnNextGrouping[e]&&$(c).jqGrid("showCol",d.groupField[e]);for(e=0;e<a.length;e++)d.visibiltyOnNextGrouping[e]=$("#"+$.jgrid.jqID(c.p.id)+"_"+$.jgrid.jqID(a[e])).is(":visible");c.p.groupingView=$.extend(c.p.groupingView,b||{}),d.groupField=a,$(c).trigger("reloadGrid")})},groupingRemove:function(a){return this.each(function(){var b=this;if(void 0===a&&(a=!0),b.p.grouping=!1,a===!0){var c,d=b.p.groupingView;for(c=0;c<d.groupField.length;c++)!d.groupColumnShow[c]&&d.visibiltyOnNextGrouping[c]&&$(b).jqGrid("showCol",d.groupField);$("tr.jqgroup, tr.jqfoot","#"+$.jgrid.jqID(b.p.id)+" tbody:first").remove(),$("tr.jqgrow:hidden","#"+$.jgrid.jqID(b.p.id)+" tbody:first").show()}else $(b).trigger("reloadGrid")})},groupingCalculations:{handler:function(a,b,c,d,e,f){var g={sum:function(){return parseFloat(b||0)+parseFloat(f[c]||0)},min:function(){return""===b?parseFloat(f[c]||0):Math.min(parseFloat(b),parseFloat(f[c]||0))},max:function(){return""===b?parseFloat(f[c]||0):Math.max(parseFloat(b),parseFloat(f[c]||0))},count:function(){return""===b&&(b=0),f.hasOwnProperty(c)?b+1:0},avg:function(){return g.sum()}};if(!g[a])throw"jqGrid Grouping No such method: "+a;var h=g[a]();if(null!=d)if("fixed"===e)h=h.toFixed(d);else{var i=Math.pow(10,d);h=Math.round(h*i)/i}return h}},setGroupHeaders:function(a){return a=$.extend({useColSpanStyle:!1,groupHeaders:[]},a||{}),this.each(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=this,q=0,r=p.p.colModel,s=r.length,t=p.grid.headers,u=$("table.ui-jqgrid-htable",p.grid.hDiv),v=u.children("thead").children("tr.ui-jqgrid-labels:last").addClass("jqg-second-row-header"),w=u.children("thead"),x=u.find(".jqg-first-row-header"),y=$.jgrid.styleUI[p.p.styleUI||"jQueryUI"].base;p.p.groupHeader||(p.p.groupHeader=[]),p.p.groupHeader.push(a),void 0===x[0]?x=$("<tr>",{role:"row","aria-hidden":"true"}).addClass("jqg-first-row-header").css("height","auto"):x.empty();var z,A=function(a,b){var c,d=b.length;for(c=0;d>c;c++)if(b[c].startColumnName===a)return c;return-1};for($(p).prepend(w),d=$("<tr>",{role:"row"}).addClass("ui-jqgrid-labels jqg-third-row-header"),b=0;s>b;b++)if(f=t[b].el,g=$(f),c=r[b],h={height:"0px",width:t[b].width+"px",display:c.hidden?"none":""},$("<th>",{role:"gridcell"}).css(h).addClass("ui-first-th-"+p.p.direction).appendTo(x),f.style.width="",i=A(c.name,a.groupHeaders),i>=0){for(j=a.groupHeaders[i],k=j.numberOfColumns,l=j.titleText,n=j.className||"",m=0,i=0;k>i&&s>b+i;i++)r[b+i].hidden||m++;e=$("<th>").attr({role:"columnheader"}).addClass(y.headerBox+" ui-th-column-header ui-th-"+p.p.direction+" "+n).html(l),m>0&&e.attr("colspan",String(m)),p.p.headertitles&&e.attr("title",e.text()),0===m&&e.hide(),g.before(e),d.append(f),q=k-1}else 0===q?a.useColSpanStyle?g.attr("rowspan","2"):($("<th>",{role:"columnheader"}).addClass(y.headerBox+" ui-th-column-header ui-th-"+p.p.direction).css({display:c.hidden?"none":""}).insertBefore(g),d.append(f)):(d.append(f),q--);o=$(p).children("thead"),o.prepend(x),d.insertAfter(v),u.append(o),a.useColSpanStyle&&(u.find("span.ui-jqgrid-resize").each(function(){var a=$(this).parent();a.is(":visible")&&(this.style.cssText="height: "+a.height()+"px !important; cursor: col-resize;")}),u.find("div.ui-jqgrid-sortable").each(function(){var a=$(this),b=a.parent();b.is(":visible")&&b.is(":has(span.ui-jqgrid-resize)")&&a.css("top",(b.height()-a.outerHeight())/2-4+"px")})),z=o.find("tr.jqg-first-row-header"),$(p).bind("jqGridResizeStop.setGroupHeaders",function(a,b,c){z.find("th").eq(c)[0].style.width=b+"px"})})},destroyGroupHeader:function(a){return void 0===a&&(a=!0),this.each(function(){var b,c,d,e,f,g,h,i=this,j=i.grid,k=$("table.ui-jqgrid-htable thead",j.hDiv),l=i.p.colModel;if(j){for($(this).unbind(".setGroupHeaders"),b=$("<tr>",{role:"row"}).addClass("ui-jqgrid-labels"),e=j.headers,c=0,d=e.length;d>c;c++){h=l[c].hidden?"none":"",f=$(e[c].el).width(e[c].width).css("display",h);try{f.removeAttr("rowSpan")}catch(m){f.attr("rowSpan",1)}b.append(f),g=f.children("span.ui-jqgrid-resize"),g.length>0&&(g[0].style.height=""),f.children("div")[0].style.top=""}$(k).children("tr.ui-jqgrid-labels").remove(),$(k).prepend(b),a===!0&&$(i).jqGrid("setGridParam",{groupHeader:null})}})}}),$.jgrid=$.jgrid||{},$.extend($.jgrid,{saveState:function(a,b){if(b=$.extend({useStorage:!0,storageType:"localStorage",beforeSetItem:null,compression:!1,compressionModule:"LZString",compressionMethod:"compressToUTF16"},b||{}),a){var c,d,e="",f="",g=$("#"+a)[0];if(g.grid){if(d=$(g).data("inlineNav"),d&&g.p.inlineNav&&$(g).jqGrid("setGridParam",{_iN:d}),d=$(g).data("filterToolbar"),d&&g.p.filterToolbar&&$(g).jqGrid("setGridParam",{_fT:d}),e=$(g).jqGrid("jqGridExport",{exptype:"jsonstring",ident:"",root:""}),$(g.grid.bDiv).find(".ui-jqgrid-btable tr:gt(0)").each(function(a,b){f+=b.outerHTML}),$.isFunction(b.beforeSetItem)&&(c=b.beforeSetItem.call(g,e),null!=c&&(e=c)),b.compression&&b.compressionModule)try{c=window[b.compressionModule][b.compressionMethod](e),null!=c&&(e=c,f=window[b.compressionModule][b.compressionMethod](f))}catch(h){}if(b.useStorage&&$.jgrid.isLocalStorage())try{window[b.storageType].setItem("jqGrid"+g.p.id,e),window[b.storageType].setItem("jqGrid"+g.p.id+"_data",f)}catch(h){22===h.code&&alert("Local storage limit is over!")}return e}}},loadState:function(a,b,c){if(c=$.extend({useStorage:!0,storageType:"localStorage",clearAfterLoad:!1,beforeSetGrid:null,afterSetGrid:null,decompression:!1,decompressionModule:"LZString",decompressionMethod:"decompressFromUTF16"},c||{}),a){var d,e,f,g,h,i=$("#"+a)[0];if(c.useStorage)try{b=window[c.storageType].getItem("jqGrid"+i.id),f=window[c.storageType].getItem("jqGrid"+i.id+"_data")}catch(j){}if(b){if(c.decompression&&c.decompressionModule)try{d=window[c.decompressionModule][c.decompressionMethod](b),null!=d&&(b=d,f=window[c.decompressionModule][c.decompressionMethod](f))}catch(j){}if(d=jqGridUtils.parse(b),d&&"object"===$.type(d)){i.grid&&$.jgrid.gridUnload(a),$.isFunction(c.beforeSetGrid)&&(e=c.beforeSetGrid(d),e&&"object"===$.type(e)&&(d=e));var k=function(a){var b;return b=a},l={reccount:d.reccount,records:d.records,lastpage:d.lastpage,shrinkToFit:k(d.shrinkToFit),data:k(d.data),datatype:k(d.datatype),grouping:k(d.grouping)};d.shrinkToFit=!1,d.data=[],d.datatype="local",d.grouping=!1,d.inlineNav&&(g=k(d._iN),d._iN=null,delete d._iN),d.filterToolbar&&(h=k(d._fT),d._fT=null,delete d._fT);var m=$("#"+a).jqGrid(d);if(m.append(f),m.jqGrid("setGridParam",l),d.storeNavOptions&&d.navGrid&&(m[0].p.navGrid=!1,m.jqGrid("navGrid",d.pager,d.navOptions,d.editOptions,d.addOptions,d.delOptions,d.searchOptions,d.viewOptions),d.navButtons&&d.navButtons.length))for(var n=0;n<d.navButtons.length;n++)"sepclass"in d.navButtons[n][1]?m.jqGrid("navSeparatorAdd",d.navButtons[n][0],d.navButtons[n][1]):m.jqGrid("navButtonAdd",d.navButtons[n][0],d.navButtons[n][1]);d.inlineNav&&g&&(m.jqGrid("setGridParam",{inlineNav:!1}),m.jqGrid("inlineNav",d.pager,g)),d.filterToolbar&&h&&(m.jqGrid("setGridParam",{filterToolbar:!1}),h.restoreFromFilters=!0,m.jqGrid("filterToolbar",h)),d.frozenColumns&&m.jqGrid("setFrozenColumns"),m[0].updatepager(!0,!0),$.isFunction(c.afterSetGrid)&&c.afterSetGrid(m),c.clearAfterLoad&&(window[c.storageType].removeItem("jqGrid"+i.id),window[c.storageType].removeItem("jqGrid"+i.id+"_data"))}else alert("can not convert to object")}}},isGridInStorage:function(a,b){var c={storageType:"localStorage"};c=$.extend(c,b||{});var d,e,f;try{e=window[c.storageType].getItem("jqGrid"+a),f=window[c.storageType].getItem("jqGrid"+a+"_data"),d=null!=e&&null!=f&&"string"==typeof e&&"string"==typeof f}catch(g){d=!1}return d},setRegional:function(a,b){var c={storageType:"sessionStorage"};if(c=$.extend(c,b||{}),c.regional){$.jgrid.saveState(a,c),c.beforeSetGrid=function(a){return a.regional=c.regional,a.force_regional=!0,a},$.jgrid.loadState(a,null,c);var d=$("#"+a)[0],e=$(d).jqGrid("getGridParam","colModel"),f=-1,g=$.jgrid.getRegional(d,"nav");$.each(e,function(a){return this.formatter&&"actions"===this.formatter?(f=a,!1):void 0}),-1!==f&&g&&$("#"+a+" tbody tr").each(function(){var a=this.cells[f];$(a).find(".ui-inline-edit").attr("title",g.edittitle),$(a).find(".ui-inline-del").attr("title",g.deltitle),$(a).find(".ui-inline-save").attr("title",g.savetitle),$(a).find(".ui-inline-cancel").attr("title",g.canceltitle)});try{window[c.storageType].removeItem("jqGrid"+d.id),window[c.storageType].removeItem("jqGrid"+d.id+"_data")}catch(h){}}},jqGridImport:function(a,b){b=$.extend({imptype:"xml",impstring:"",impurl:"",mtype:"GET",impData:{},xmlGrid:{config:"root>grid",data:"root>rows"},jsonGrid:{config:"grid",data:"data"},ajaxOptions:{}},b||{});var c=(0===a.indexOf("#")?"":"#")+$.jgrid.jqID(a),d=function(a,b){var d,e,f,g=$(b.xmlGrid.config,a)[0],h=$(b.xmlGrid.data,a)[0];if(jqGridUtils.xmlToJSON){d=jqGridUtils.xmlToJSON(g);for(f in d)d.hasOwnProperty(f)&&(e=d[f]);if(h){var i=d.grid.datatype;d.grid.datatype="xmlstring",d.grid.datastr=a,$(c).jqGrid(e).jqGrid("setGridParam",{datatype:i})}else setTimeout(function(){$(c).jqGrid(e)},0)}else alert("xml2json or parse are not present")},e=function(a,b){if(a&&"string"==typeof a){var d=jqGridUtils.parse(a),e=d[b.jsonGrid.config],f=d[b.jsonGrid.data];if(f){var g=e.datatype;e.datatype="jsonstring",e.datastr=f,$(c).jqGrid(e).jqGrid("setGridParam",{datatype:g})}else $(c).jqGrid(e)}};switch(b.imptype){case"xml":$.ajax($.extend({url:b.impurl,type:b.mtype,data:b.impData,dataType:"xml",complete:function(a,e){"success"===e&&(d(a.responseXML,b),$(c).triggerHandler("jqGridImportComplete",[a,b]),$.isFunction(b.importComplete)&&b.importComplete(a)),a=null}},b.ajaxOptions));break;case"xmlstring":if(b.impstring&&"string"==typeof b.impstring){var f=$.parseXML(b.impstring);f&&(d(f,b),$(c).triggerHandler("jqGridImportComplete",[f,b]),$.isFunction(b.importComplete)&&b.importComplete(f))}break;case"json":$.ajax($.extend({url:b.impurl,type:b.mtype,data:b.impData,dataType:"json",complete:function(a){try{e(a.responseText,b),$(c).triggerHandler("jqGridImportComplete",[a,b]),$.isFunction(b.importComplete)&&b.importComplete(a)}catch(d){}a=null}},b.ajaxOptions));break;case"jsonstring":b.impstring&&"string"==typeof b.impstring&&(e(b.impstring,b),$(c).triggerHandler("jqGridImportComplete",[b.impstring,b]),$.isFunction(b.importComplete)&&b.importComplete(b.impstring))}}}),$.jgrid.extend({jqGridExport:function(a){a=$.extend({exptype:"xmlstring",root:"grid",ident:"	",addOptions:{}},a||{});var b=null;return this.each(function(){if(this.grid){var c,d=$.extend(!0,{},$(this).jqGrid("getGridParam"),a.addOptions);if(d.rownumbers&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.multiselect&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.subGrid&&(d.colNames.splice(0,1),d.colModel.splice(0,1)),d.knv=null,d.treeGrid)for(c in d.treeReader)d.treeReader.hasOwnProperty(c)&&(d.colNames.splice(d.colNames.length-1),d.colModel.splice(d.colModel.length-1));switch(a.exptype){case"xmlstring":b="<"+a.root+">"+jqGridUtils.jsonToXML(d,{xmlDecl:""})+"</"+a.root+">";break;case"jsonstring":b=jqGridUtils.stringify(d),a.root&&(b="{"+a.root+":"+b+"}")}}}),b},excelExport:function(a){return a=$.extend({exptype:"remote",url:null,oper:"oper",tag:"excel",beforeExport:null,exporthidden:!1,exportgrouping:!1,exportOptions:{}},a||{}),this.each(function(){if(this.grid){var b;if("remote"===a.exptype){var c,d=$.extend({},this.p.postData);if(d[a.oper]=a.tag,$.isFunction(a.beforeExport)){var e=a.beforeExport.call(this,d);$.isPlainObject(e)&&(d=e)}if(a.exporthidden){var f,g=this.p.colModel,h=g.length,i=[];for(f=0;h>f;f++)void 0===g[f].hidden&&(g[f].hidden=!1),i.push({name:g[f].name,hidden:g[f].hidden});var j=JSON.stringify(i);"string"==typeof j&&(d.colModel=j)}a.exportgrouping&&(c=JSON.stringify(this.p.groupingView),"string"==typeof c&&(d.groupingView=c));var k=jQuery.param(d);b=-1!==a.url.indexOf("?")?a.url+"&"+k:a.url+"?"+k,window.location=b}}})}}),$.jgrid.inlineEdit=$.jgrid.inlineEdit||{},$.jgrid.extend({editRow:function(a,b,c,d,e,f,g,h,i){var j={},k=$.makeArray(arguments).slice(1);return"object"===$.type(k[0])?j=k[0]:(void 0!==b&&(j.keys=b),$.isFunction(c)&&(j.oneditfunc=c),$.isFunction(d)&&(j.successfunc=d),void 0!==e&&(j.url=e),void 0!==f&&(j.extraparam=f),$.isFunction(g)&&(j.aftersavefunc=g),$.isFunction(h)&&(j.errorfunc=h),$.isFunction(i)&&(j.afterrestorefunc=i)),j=$.extend(!0,{keys:!1,keyevent:"keydown",oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",focusField:!0},$.jgrid.inlineEdit,j),this.each(function(){var b,c,d,e,f,g,h=this,i=0,k=null,l={},m=$(this).jqGrid("getStyleUI",h.p.styleUI+".inlinedit","inputClass",!0);h.grid&&(e=$(h).jqGrid("getInd",a,!0),e!==!1&&(g=$.isFunction(j.beforeEditRow)?j.beforeEditRow.call(h,j,a):void 0,void 0===g&&(g=!0),g&&(d=$(e).attr("editable")||"0","0"!==d||$(e).hasClass("not-editable-row")||(f=h.p.colModel,$('td[role="gridcell"]',e).each(function(d){b=f[d].name;var e=h.p.treeGrid===!0&&b===h.p.ExpandColumn;if(e)c=$("span:first",this).html();else try{c=$.unformat.call(h,this,{rowId:a,colModel:f[d]},d)}catch(g){c=f[d].edittype&&"textarea"===f[d].edittype?$(this).text():$(this).html()}if("cb"!==b&&"subgrid"!==b&&"rn"!==b&&(h.p.autoencode&&(c=$.jgrid.htmlDecode(c)),l[b]=c,f[d].editable===!0)){null===k&&(k=d),e?$("span:first",this).html(""):$(this).html("");var j=$.extend({},f[d].editoptions||{},{id:a+"_"+b,name:b,rowId:a,oper:"edit"});f[d].edittype||(f[d].edittype="text"),("&nbsp;"===c||"&#160;"===c||1===c.length&&160===c.charCodeAt(0))&&(c="");var n=$.jgrid.createEl.call(h,f[d].edittype,j,c,!0,$.extend({},$.jgrid.ajaxOptions,h.p.ajaxSelectOptions||{}));$(n).addClass("editable inline-edit-cell"),$.inArray(f[d].edittype,["text","textarea","password","select"])>-1&&$(n).addClass(m),e?$("span:first",this).append(n):$(this).append(n),$.jgrid.bindEv.call(h,n,j),"select"===f[d].edittype&&void 0!==f[d].editoptions&&f[d].editoptions.multiple===!0&&void 0===f[d].editoptions.dataUrl&&$.jgrid.msie&&$(n).width($(n).width()),i++}}),i>0&&(l.id=a,h.p.savedRow.push(l),$(e).attr("editable","1"),j.focusField&&("number"==typeof j.focusField&&parseInt(j.focusField,10)<=f.length&&(k=j.focusField),setTimeout(function(){var a=$("td:eq("+k+") :input:visible",e).not(":disabled");a.length>0&&a.focus()},0)),j.keys===!0&&$(e).bind(j.keyevent,function(b){if(27===b.keyCode){if($(h).jqGrid("restoreRow",a,j.afterrestorefunc),h.p.inlineNav)try{$(h).jqGrid("showAddEditButtons")}catch(c){}return!1}if(13===b.keyCode){var d=b.target;if("TEXTAREA"===d.tagName)return!0;if($(h).jqGrid("saveRow",a,j)&&h.p.inlineNav)try{$(h).jqGrid("showAddEditButtons")}catch(e){}return!1}}),$(h).triggerHandler("jqGridInlineEditRow",[a,j]),$.isFunction(j.oneditfunc)&&j.oneditfunc.call(h,a))))))})},saveRow:function(a,b,c,d,e,f,g){var h=$.makeArray(arguments).slice(1),i={},j=this[0];"object"===$.type(h[0])?i=h[0]:($.isFunction(b)&&(i.successfunc=b),void 0!==c&&(i.url=c),void 0!==d&&(i.extraparam=d),$.isFunction(e)&&(i.aftersavefunc=e),$.isFunction(f)&&(i.errorfunc=f),$.isFunction(g)&&(i.afterrestorefunc=g)),i=$.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",saveui:"enable",savetext:$.jgrid.getRegional(j,"defaults.savetext")},$.jgrid.inlineEdit,i);var k,l,m,n,o,p=!1,q={},r={},s={},t=!1,u=$.trim($(j).jqGrid("getStyleUI",j.p.styleUI+".common","error",!0));if(!j.grid)return p;if(o=$(j).jqGrid("getInd",a,!0),o===!1)return p;var v=$.jgrid.getRegional(this,"errors"),w=$.jgrid.getRegional(this,"edit"),x=$.isFunction(i.beforeSaveRow)?i.beforeSaveRow.call(j,i,a):void 0;if(void 0===x&&(x=!0),x){if(l=$(o).attr("editable"),i.url=i.url||j.p.editurl,"1"===l){var y;if($('td[role="gridcell"]',o).each(function(a){if(y=j.p.colModel[a],k=y.name,"cb"!==k&&"subgrid"!==k&&y.editable===!0&&"rn"!==k&&!$(this).hasClass("not-editable-cell")){switch(y.edittype){case"checkbox":var b=["Yes","No"];y.editoptions&&(b=y.editoptions.value.split(":")),q[k]=$("input",this).is(":checked")?b[0]:b[1];break;case"text":case"password":case"textarea":case"button":q[k]=$("input, textarea",this).val();break;case"select":if(y.editoptions.multiple){var c=$("select",this),d=[];q[k]=$(c).val(),q[k]?q[k]=q[k].join(","):q[k]="",$("select option:selected",this).each(function(a,b){d[a]=$(b).text()}),r[k]=d.join(",")}else q[k]=$("select option:selected",this).val(),r[k]=$("select option:selected",this).text();
y.formatter&&"select"===y.formatter&&(r={});break;case"custom":try{if(!y.editoptions||!$.isFunction(y.editoptions.custom_value))throw"e1";if(q[k]=y.editoptions.custom_value.call(j,$(".customelement",this),"get"),void 0===q[k])throw"e2"}catch(e){"e1"===e?$.jgrid.info_dialog(v.errcap,"function 'custom_value' "+w.msg.nodefined,w.bClose,{styleUI:j.p.styleUI}):$.jgrid.info_dialog(v.errcap,e.message,w.bClose,{styleUI:j.p.styleUI})}}if(n=$.jgrid.checkValues.call(j,q[k],a),n[0]===!1)return!1;j.p.autoencode&&(q[k]=$.jgrid.htmlEncode(q[k])),"clientArray"!==i.url&&y.editoptions&&y.editoptions.NullIfEmpty===!0&&""===q[k]&&(s[k]="null",t=!0)}}),n[0]===!1){try{var z=$(j).jqGrid("getGridRowById",a),A=$.jgrid.findPos(z);$.jgrid.info_dialog(v.errcap,n[1],w.bClose,{left:A[0],top:A[1]+$(z).outerHeight(),styleUI:j.p.styleUI})}catch(B){alert(n[1])}return p}var C,D=j.p.prmNames,E=a;if(C=j.p.keyName===!1?D.id:j.p.keyName,q){if(q[D.oper]=D.editoper,void 0===q[C]||""===q[C])q[C]=a;else if(o.id!==j.p.idPrefix+q[C]){var F=$.jgrid.stripPref(j.p.idPrefix,a);if(void 0!==j.p._index[F]&&(j.p._index[q[C]]=j.p._index[F],delete j.p._index[F]),a=j.p.idPrefix+q[C],$(o).attr("id",a),j.p.selrow===E&&(j.p.selrow=a),$.isArray(j.p.selarrrow)){var G=$.inArray(E,j.p.selarrrow);G>=0&&(j.p.selarrrow[G]=a)}if(j.p.multiselect){var H="jqg_"+j.p.id+"_"+a;$("input.cbox",o).attr("id",H).attr("name",H)}}void 0===j.p.inlineData&&(j.p.inlineData={}),q=$.extend({},q,j.p.inlineData,i.extraparam)}if("clientArray"===i.url){q=$.extend({},q,r),j.p.autoencode&&$.each(q,function(a,b){q[a]=$.jgrid.htmlDecode(b)});var I,J=$(j).jqGrid("setRowData",a,q);for($(o).attr("editable","0"),I=0;I<j.p.savedRow.length;I++)if(String(j.p.savedRow[I].id)===String(E)){m=I;break}m>=0&&j.p.savedRow.splice(m,1),$(j).triggerHandler("jqGridInlineAfterSaveRow",[a,J,q,i]),$.isFunction(i.aftersavefunc)&&i.aftersavefunc.call(j,a,J,q,i),p=!0,$(o).removeClass("jqgrid-new-row").unbind("keydown")}else $(j).jqGrid("progressBar",{method:"show",loadtype:i.saveui,htmlcontent:i.savetext}),s=$.extend({},q,s),s[C]=$.jgrid.stripPref(j.p.idPrefix,s[C]),$.ajax($.extend({url:i.url,data:$.isFunction(j.p.serializeRowData)?j.p.serializeRowData.call(j,s):s,type:i.mtype,async:!1,complete:function(b,c){if($(j).jqGrid("progressBar",{method:"hide",loadtype:i.saveui,htmlcontent:i.savetext}),"success"===c){var d,e,f=!0;if(d=$(j).triggerHandler("jqGridInlineSuccessSaveRow",[b,a,i]),$.isArray(d)||(d=[!0,s]),d[0]&&$.isFunction(i.successfunc)&&(d=i.successfunc.call(j,b)),$.isArray(d)?(f=d[0],q=d[1]||q):f=d,f===!0){for(j.p.autoencode&&$.each(q,function(a,b){q[a]=$.jgrid.htmlDecode(b)}),t&&$.each(q,function(a){"null"===q[a]&&(q[a]="")}),q=$.extend({},q,r),$(j).jqGrid("setRowData",a,q),$(o).attr("editable","0"),e=0;e<j.p.savedRow.length;e++)if(String(j.p.savedRow[e].id)===String(a)){m=e;break}m>=0&&j.p.savedRow.splice(m,1),$(j).triggerHandler("jqGridInlineAfterSaveRow",[a,b,q,i]),$.isFunction(i.aftersavefunc)&&i.aftersavefunc.call(j,a,b,q,i),p=!0,$(o).removeClass("jqgrid-new-row").unbind("keydown")}else $(j).triggerHandler("jqGridInlineErrorSaveRow",[a,b,c,null,i]),$.isFunction(i.errorfunc)&&i.errorfunc.call(j,a,b,c,null),i.restoreAfterError===!0&&$(j).jqGrid("restoreRow",a,i.afterrestorefunc)}},error:function(b,c,d){if($("#lui_"+$.jgrid.jqID(j.p.id)).hide(),$(j).triggerHandler("jqGridInlineErrorSaveRow",[a,b,c,d,i]),$.isFunction(i.errorfunc))i.errorfunc.call(j,a,b,c,d);else{var e=b.responseText||b.statusText;try{$.jgrid.info_dialog(v.errcap,'<div class="'+u+'">'+e+"</div>",w.bClose,{buttonalign:"right",styleUI:j.p.styleUI})}catch(f){alert(e)}}i.restoreAfterError===!0&&$(j).jqGrid("restoreRow",a,i.afterrestorefunc)}},$.jgrid.ajaxOptions,j.p.ajaxRowOptions||{}))}return p}},restoreRow:function(a,b){var c=$.makeArray(arguments).slice(1),d={};return"object"===$.type(c[0])?d=c[0]:$.isFunction(b)&&(d.afterrestorefunc=b),d=$.extend(!0,{},$.jgrid.inlineEdit,d),this.each(function(){var b,c,e=this,f=-1,g={};if(e.grid&&(b=$(e).jqGrid("getInd",a,!0),b!==!1)){var h=$.isFunction(d.beforeCancelRow)?d.beforeCancelRow.call(e,d,a):void 0;if(void 0===h&&(h=!0),h){for(c=0;c<e.p.savedRow.length;c++)if(String(e.p.savedRow[c].id)===String(a)){f=c;break}if(f>=0){if($.isFunction($.fn.datepicker))try{$("input.hasDatepicker","#"+$.jgrid.jqID(b.id)).datepicker("hide")}catch(i){}$.each(e.p.colModel,function(){this.editable===!0&&e.p.savedRow[f].hasOwnProperty(this.name)&&(g[this.name]=e.p.savedRow[f][this.name])}),$(e).jqGrid("setRowData",a,g),$(b).attr("editable","0").unbind("keydown"),e.p.savedRow.splice(f,1),$("#"+$.jgrid.jqID(a),"#"+$.jgrid.jqID(e.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){$(e).jqGrid("delRowData",a),$(e).jqGrid("showAddEditButtons")},0)}$(e).triggerHandler("jqGridInlineAfterRestoreRow",[a]),$.isFunction(d.afterrestorefunc)&&d.afterrestorefunc.call(e,a)}}})},addRow:function(a){return a=$.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},a||{}),this.each(function(){if(this.grid){var b=this,c=$.isFunction(a.beforeAddRow)?a.beforeAddRow.call(b,a.addRowParams):void 0;if(void 0===c&&(c=!0),c)if(a.rowID=$.isFunction(a.rowID)?a.rowID.call(b,a):null!=a.rowID?a.rowID:$.jgrid.randId(),a.useDefValues===!0&&$(b.p.colModel).each(function(){if(this.editoptions&&this.editoptions.defaultValue){var c=this.editoptions.defaultValue,d=$.isFunction(c)?c.call(b):c;a.initdata[this.name]=d}}),$(b).jqGrid("addRowData",a.rowID,a.initdata,a.position),a.rowID=b.p.idPrefix+a.rowID,$("#"+$.jgrid.jqID(a.rowID),"#"+$.jgrid.jqID(b.p.id)).addClass("jqgrid-new-row"),a.useFormatter)$("#"+$.jgrid.jqID(a.rowID)+" .ui-inline-edit","#"+$.jgrid.jqID(b.p.id)).click();else{var d=b.p.prmNames,e=d.oper;a.addRowParams.extraparam[e]=d.addoper,$(b).jqGrid("editRow",a.rowID,a.addRowParams),$(b).jqGrid("setSelection",a.rowID)}}})},inlineNav:function(a,b){var c=this[0],d=$.jgrid.getRegional(c,"nav"),e=$.jgrid.styleUI[c.p.styleUI].inlinedit;return b=$.extend(!0,{edit:!0,editicon:e.icon_edit_nav,add:!0,addicon:e.icon_add_nav,save:!0,saveicon:e.icon_save_nav,cancel:!0,cancelicon:e.icon_cancel_nav,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0},d,b||{}),this.each(function(){if(this.grid&&!this.p.inlineNav){var e=$.jgrid.jqID(c.p.id),f=$.trim($(c).jqGrid("getStyleUI",c.p.styleUI+".common","disabled",!0));if(c.p.navGrid||$(c).jqGrid("navGrid",a,{refresh:!1,edit:!1,add:!1,del:!1,search:!1,view:!1}),$(c).data("inlineNav")||$(c).data("inlineNav",b),c.p.force_regional&&(b=$.extend(b,d)),c.p.inlineNav=!0,b.addParams.useFormatter===!0){var g,h=c.p.colModel;for(g=0;g<h.length;g++)if(h[g].formatter&&"actions"===h[g].formatter){if(h[g].formatoptions){var i={keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},j=$.extend(i,h[g].formatoptions);b.addParams.addRowParams={keys:j.keys,oneditfunc:j.onEdit,successfunc:j.onSuccess,url:j.url,extraparam:j.extraparam,aftersavefunc:j.afterSave,errorfunc:j.onError,afterrestorefunc:j.afterRestore}}break}}b.add&&$(c).jqGrid("navButtonAdd",a,{caption:b.addtext,title:b.addtitle,buttonicon:b.addicon,id:c.p.id+"_iladd",internal:!0,onClickButton:function(){$(c).jqGrid("addRow",b.addParams),b.addParams.useFormatter||($("#"+e+"_ilsave").removeClass(f),$("#"+e+"_ilcancel").removeClass(f),$("#"+e+"_iladd").addClass(f),$("#"+e+"_iledit").addClass(f))}}),b.edit&&$(c).jqGrid("navButtonAdd",a,{caption:b.edittext,title:b.edittitle,buttonicon:b.editicon,id:c.p.id+"_iledit",internal:!0,onClickButton:function(){var a=$(c).jqGrid("getGridParam","selrow");a?($(c).jqGrid("editRow",a,b.editParams),$("#"+e+"_ilsave").removeClass(f),$("#"+e+"_ilcancel").removeClass(f),$("#"+e+"_iladd").addClass(f),$("#"+e+"_iledit").addClass(f)):($.jgrid.viewModal("#alertmod_"+e,{gbox:"#gbox_"+e,jqm:!0}),$("#jqg_alrt").focus())}}),b.save&&($(c).jqGrid("navButtonAdd",a,{caption:b.savetext||"",title:b.savetitle||"Save row",buttonicon:b.saveicon,id:c.p.id+"_ilsave",internal:!0,onClickButton:function(){var a=c.p.savedRow[0].id;if(a){var d=c.p.prmNames,f=d.oper,g=b.editParams;$("#"+$.jgrid.jqID(a),"#"+e).hasClass("jqgrid-new-row")?(b.addParams.addRowParams.extraparam[f]=d.addoper,g=b.addParams.addRowParams):(b.editParams.extraparam||(b.editParams.extraparam={}),b.editParams.extraparam[f]=d.editoper),$(c).jqGrid("saveRow",a,g)&&$(c).jqGrid("showAddEditButtons")}else $.jgrid.viewModal("#alertmod_"+e,{gbox:"#gbox_"+e,jqm:!0}),$("#jqg_alrt").focus()}}),$("#"+e+"_ilsave").addClass(f)),b.cancel&&($(c).jqGrid("navButtonAdd",a,{caption:b.canceltext||"",title:b.canceltitle||"Cancel row editing",buttonicon:b.cancelicon,id:c.p.id+"_ilcancel",internal:!0,onClickButton:function(){var a=c.p.savedRow[0].id,d=b.editParams;a?($("#"+$.jgrid.jqID(a),"#"+e).hasClass("jqgrid-new-row")&&(d=b.addParams.addRowParams),$(c).jqGrid("restoreRow",a,d),$(c).jqGrid("showAddEditButtons")):($.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+e,jqm:!0}),$("#jqg_alrt").focus())}}),$("#"+e+"_ilcancel").addClass(f)),b.restoreAfterSelect===!0&&$(c).bind("jqGridBeforeSelectRow.inlineNav",function(a,d){c.p.savedRow.length>0&&c.p.inlineNav===!0&&d!==c.p.selrow&&null!==c.p.selrow&&(c.p.selrow===b.addParams.rowID?$(c).jqGrid("delRowData",c.p.selrow):$(c).jqGrid("restoreRow",c.p.selrow,b.editParams),$(c).jqGrid("showAddEditButtons"))})}})},showAddEditButtons:function(){return this.each(function(){if(this.grid){var a=$.jgrid.jqID(this.p.id),b=$.trim($(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0));$("#"+a+"_ilsave").addClass(b),$("#"+a+"_ilcancel").addClass(b),$("#"+a+"_iladd").removeClass(b),$("#"+a+"_iledit").removeClass(b)}})}}),$.jgrid.msie&&8===$.jgrid.msiever()&&($.expr[":"].hidden=function(a){return 0===a.offsetWidth||0===a.offsetHeight||"none"===a.style.display}),$.jgrid._multiselect=!1,$.ui&&$.ui.multiselect){if($.ui.multiselect.prototype._setSelected){var setSelected=$.ui.multiselect.prototype._setSelected;$.ui.multiselect.prototype._setSelected=function(a,b){var c=setSelected.call(this,a,b);if(b&&this.selectedList){var d=this.element;this.selectedList.find("li").each(function(){$(this).data("optionLink")&&$(this).data("optionLink").remove().appendTo(d)})}return c}}$.ui.multiselect.prototype.destroy&&($.ui.multiselect.prototype.destroy=function(){this.element.show(),this.container.remove(),void 0===$.Widget?$.widget.prototype.destroy.apply(this,arguments):$.Widget.prototype.destroy.apply(this,arguments)}),$.jgrid._multiselect=!0}$.jgrid.extend({sortableColumns:function(a){return this.each(function(){function b(){c.p.disableClick=!0}var c=this,d=$.jgrid.jqID(c.p.id),e={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+d+"_cb,#jqgh_"+d+"_rn,#jqgh_"+d+"_subgrid),:hidden)",placeholder:{element:function(a){var b=$(document.createElement(a[0].nodeName)).addClass(a[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0];return b},update:function(a,b){b.height(a.currentItem.innerHeight()-parseInt(a.currentItem.css("paddingTop")||0,10)-parseInt(a.currentItem.css("paddingBottom")||0,10)),b.width(a.currentItem.innerWidth()-parseInt(a.currentItem.css("paddingLeft")||0,10)-parseInt(a.currentItem.css("paddingRight")||0,10))}},update:function(a,b){var d=$(b.item).parent(),e=$(">th",d),f=c.p.colModel,g={},h=c.p.id+"_";$.each(f,function(a){g[this.name]=a});var i=[];e.each(function(){var a=$(">div",this).get(0).id.replace(/^jqgh_/,"").replace(h,"");g.hasOwnProperty(a)&&i.push(g[a])}),$(c).jqGrid("remapColumns",i,!0,!0),$.isFunction(c.p.sortable.update)&&c.p.sortable.update(i),setTimeout(function(){c.p.disableClick=!1},50)}};if(c.p.sortable.options?$.extend(e,c.p.sortable.options):$.isFunction(c.p.sortable)&&(c.p.sortable={update:c.p.sortable}),e.start){var f=e.start;e.start=function(a,c){b(),f.call(this,a,c)}}else e.start=b;c.p.sortable.exclude&&(e.items+=":not("+c.p.sortable.exclude+")");var g=a.sortable(e),h=g.data("sortable")||g.data("uiSortable");null!=h&&(h.data("sortable").floating=!0)})},columnChooser:function(a){function b(a,b,c){var d,e;return b>=0?(d=a.slice(),e=d.splice(b,Math.max(a.length-b,b)),b>a.length&&(b=a.length),d[b]=c,d.concat(e)):a}function c(a,b){a&&("string"==typeof a?$.fn[a]&&$.fn[a].apply(b,$.makeArray(arguments).slice(2)):$.isFunction(a)&&a.apply(b,$.makeArray(arguments).slice(2)))}var d,e,f,g,h,i,j,k=this,l={},m=[],n=k.jqGrid("getGridParam","colModel"),o=k.jqGrid("getGridParam","colNames"),p=function(a){return $.ui.multiselect.prototype&&a.data($.ui.multiselect.prototype.widgetFullName||$.ui.multiselect.prototype.widgetName)||a.data("ui-multiselect")||a.data("multiselect")},q=$.jgrid.getRegional(this[0],"col");if(!$("#colchooser_"+$.jgrid.jqID(k[0].p.id)).length){if(d=$('<div id="colchooser_'+k[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),e=$("select",d),a=$.extend({width:400,height:240,classname:null,done:function(a){a&&k.jqGrid("remapColumns",a,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(a){var b={};return b[a.bSubmit]=function(){a.apply_perm(),a.cleanup(!1)},b[a.bCancel]=function(){a.cleanup(!0)},$.extend(!0,{buttons:b,close:function(){a.cleanup(!0)},modal:a.modal||!1,resizable:a.resizable||!0,width:a.width+70,resize:function(){var a=p(e),b=a.container.closest(".ui-dialog-content");b.length>0&&"object"==typeof b[0].style?b[0].style.width="":b.css("width",""),a.selectedList.height(Math.max(a.selectedContainer.height()-a.selectedActions.outerHeight()-1,1)),a.availableList.height(Math.max(a.availableContainer.height()-a.availableActions.outerHeight()-1,1))}},a.dialog_opts||{})},apply_perm:function(){var c=[];$("option",e).each(function(){$(this).is(":selected")?k.jqGrid("showCol",n[this.value].name):k.jqGrid("hideCol",n[this.value].name)}),$("option[selected]",e).each(function(){c.push(parseInt(this.value,10))}),$.each(c,function(){delete l[n[parseInt(this,10)].name]}),$.each(l,function(){var a=parseInt(this,10);c=b(c,a,a)}),a.done&&a.done.call(k,c),k.jqGrid("setGridWidth",k[0].p.width,k[0].p.shrinkToFit)},cleanup:function(b){c(a.dlog,d,"destroy"),c(a.msel,e,"destroy"),d.remove(),b&&a.done&&a.done.call(k)},msel_opts:{}},q,a||{}),$.ui&&$.ui.multiselect&&$.ui.multiselect.defaults){if(!$.jgrid._multiselect)return void alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");a.msel_opts=$.extend($.ui.multiselect.defaults,a.msel_opts)}a.caption&&d.attr("title",a.caption),a.classname&&(d.addClass(a.classname),e.addClass(a.classname)),a.width&&($(">div",d).css({width:a.width,margin:"0 auto"}),e.css("width",a.width)),a.height&&($(">div",d).css("height",a.height),e.css("height",a.height-10)),e.empty(),$.each(n,function(a){return l[this.name]=a,this.hidedlg?void(this.hidden||m.push(a)):void e.append("<option value='"+a+"' "+(this.hidden?"":"selected='selected'")+">"+$.jgrid.stripHtml(o[a])+"</option>")}),f=$.isFunction(a.dlog_opts)?a.dlog_opts.call(k,a):a.dlog_opts,c(a.dlog,d,f),g=$.isFunction(a.msel_opts)?a.msel_opts.call(k,a):a.msel_opts,c(a.msel,e,g),h=$("#colchooser_"+$.jgrid.jqID(k[0].p.id)),h.css({margin:"auto"}),h.find(">div").css({width:"100%",height:"100%",margin:"auto"}),i=p(e),i.container.css({width:"100%",height:"100%",margin:"auto"}),i.selectedContainer.css({width:100*i.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),i.availableContainer.css({width:100-100*i.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),i.selectedList.css("height","auto"),i.availableList.css("height","auto"),j=Math.max(i.selectedList.height(),i.availableList.height()),j=Math.min(j,$(window).height()),i.selectedList.css("height",j),i.availableList.css("height",j)}},sortableRows:function(a){return this.each(function(){var b=this;b.grid&&(b.p.treeGrid||$.fn.sortable&&(a=$.extend({cursor:"move",axis:"y",items:" > .jqgrow"},a||{}),a.start&&$.isFunction(a.start)?(a._start_=a.start,delete a.start):a._start_=!1,a.update&&$.isFunction(a.update)?(a._update_=a.update,delete a.update):a._update_=!1,a.start=function(c,d){if($(d.item).css("border-width","0"),$("td",d.item).each(function(a){this.style.width=b.grid.cols[a].style.width}),b.p.subGrid){var e=$(d.item).attr("id");try{$(b).jqGrid("collapseSubGridRow",e)}catch(f){}}a._start_&&a._start_.apply(this,[c,d])},a.update=function(c,d){$(d.item).css("border-width",""),b.p.rownumbers===!0&&$("td.jqgrid-rownum",b.rows).each(function(a){$(this).html(a+1+(parseInt(b.p.page,10)-1)*parseInt(b.p.rowNum,10))}),a._update_&&a._update_.apply(this,[c,d])},$("tbody:first",b).sortable(a),$("tbody:first > .jqgrow",b).disableSelection()))})},gridDnD:function(a){return this.each(function(){function b(){var a=$.data(e,"dnd");$("tr.jqgrow:not(.ui-draggable)",e).draggable($.isFunction(a.drag)?a.drag.call($(e),a):a.drag)}var c,d,e=this;if(e.grid&&!e.p.treeGrid&&$.fn.draggable&&$.fn.droppable){var f="<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>";if(void 0===$("#jqgrid_dnd")[0]&&$("body").append(f),"string"==typeof a&&"updateDnD"===a&&e.p.jqgdnd===!0)return void b();if(a=$.extend({drag:function(a){return $.extend({start:function(b,c){var d,f;if(e.p.subGrid){f=$(c.helper).attr("id");try{$(e).jqGrid("collapseSubGridRow",f)}catch(g){}}for(d=0;d<$.data(e,"dnd").connectWith.length;d++)0===$($.data(e,"dnd").connectWith[d]).jqGrid("getGridParam","reccount")&&$($.data(e,"dnd").connectWith[d]).jqGrid("addRowData","jqg_empty_row",{});c.helper.addClass("ui-state-highlight"),$("td",c.helper).each(function(a){this.style.width=e.grid.headers[a].width+"px"}),a.onstart&&$.isFunction(a.onstart)&&a.onstart.call($(e),b,c)},stop:function(b,c){var d,f;for(c.helper.dropped&&!a.dragcopy&&(f=$(c.helper).attr("id"),void 0===f&&(f=$(this).attr("id")),$(e).jqGrid("delRowData",f)),d=0;d<$.data(e,"dnd").connectWith.length;d++)$($.data(e,"dnd").connectWith[d]).jqGrid("delRowData","jqg_empty_row");a.onstop&&$.isFunction(a.onstop)&&a.onstop.call($(e),b,c)}},a.drag_opts||{})},drop:function(a){return $.extend({accept:function(a){if(!$(a).hasClass("jqgrow"))return a;var b=$(a).closest("table.ui-jqgrid-btable");if(b.length>0&&void 0!==$.data(b[0],"dnd")){var c=$.data(b[0],"dnd").connectWith;return-1!==$.inArray("#"+$.jgrid.jqID(this.id),c)?!0:!1}return!1},drop:function(b,c){if($(c.draggable).hasClass("jqgrow")){var d=$(c.draggable).attr("id"),f=c.draggable.parent().parent().jqGrid("getRowData",d);if(!a.dropbyname){var g,h,i=0,j={},k=$("#"+$.jgrid.jqID(this.id)).jqGrid("getGridParam","colModel");try{for(h in f)f.hasOwnProperty(h)&&(g=k[i].name,"cb"!==g&&"rn"!==g&&"subgrid"!==g&&f.hasOwnProperty(h)&&k[i]&&(j[g]=f[h]),i++);f=j}catch(l){}}if(c.helper.dropped=!0,a.beforedrop&&$.isFunction(a.beforedrop)){var m=a.beforedrop.call(this,b,c,f,$("#"+$.jgrid.jqID(e.p.id)),$(this));void 0!==m&&null!==m&&"object"==typeof m&&(f=m)}if(c.helper.dropped){var n;a.autoid&&($.isFunction(a.autoid)?n=a.autoid.call(this,f):(n=Math.ceil(1e3*Math.random()),n=a.autoidprefix+n)),$("#"+$.jgrid.jqID(this.id)).jqGrid("addRowData",n,f,a.droppos)}a.ondrop&&$.isFunction(a.ondrop)&&a.ondrop.call(this,b,c,f)}}},a.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{activeClass:"ui-state-active",hoverClass:"ui-state-hover"},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5e3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},a||{}),a.connectWith)for(a.connectWith=a.connectWith.split(","),a.connectWith=$.map(a.connectWith,function(a){return $.trim(a)}),$.data(e,"dnd",a),0===e.p.reccount||e.p.jqgdnd||b(),e.p.jqgdnd=!0,c=0;c<a.connectWith.length;c++)d=a.connectWith[c],$(d).droppable($.isFunction(a.drop)?a.drop.call($(e),a):a.drop)}})},gridResize:function(opts){return this.each(function(){var $t=this,gID=$.jgrid.jqID($t.p.id),req;if($t.grid&&$.fn.resizable){if(opts=$.extend({},opts||{}),opts.alsoResize?(opts._alsoResize_=opts.alsoResize,delete opts.alsoResize):opts._alsoResize_=!1,opts.stop&&$.isFunction(opts.stop)?(opts._stop_=opts.stop,delete opts.stop):opts._stop_=!1,opts.stop=function(a,b){$($t).jqGrid("setGridParam",{height:$("#gview_"+gID+" .ui-jqgrid-bdiv").height()}),$($t).jqGrid("setGridWidth",b.size.width,opts.shrinkToFit),opts._stop_&&opts._stop_.call($t,a,b),$t.p.caption&&$("#gbox_"+gID).css({height:"auto"}),$t.p.frozenColumns&&(req&&clearTimeout(req),req=setTimeout(function(){req&&clearTimeout(req),$("#"+gID).jqGrid("destroyFrozenColumns"),$("#"+gID).jqGrid("setFrozenColumns")}))},opts._alsoResize_){var optstest="{'#gview_"+gID+" .ui-jqgrid-bdiv':true,'"+opts._alsoResize_+"':true}";opts.alsoResize=eval("("+optstest+")")}else opts.alsoResize=$(".ui-jqgrid-bdiv","#gview_"+gID);delete opts._alsoResize_,$("#gbox_"+gID).resizable(opts)}})}}),$.assocArraySize=function(a){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c},$.jgrid.extend({pivotSetup:function(a,b){var c=[],d=[],e=[],f=[],g=[],h={grouping:!0,groupingView:{groupField:[],groupSummary:[],groupSummaryPos:[]}},i=[],j=$.extend({rowTotals:!1,rowTotalsText:"Total",colTotals:!1,groupSummary:!0,groupSummaryPos:"header",frozenStaticCols:!1},b||{});return this.each(function(){function b(a,b,c){var d;return d=_pivotfilter.call(a,b,c),d.length>0?d[0]:null}function k(a,b){var c,d=0,e=!0;for(c in a)if(a.hasOwnProperty(c)){if(a[c]!=this[d]){e=!1;break}if(d++,d>=this.length)break}return e&&(p=b),e}function l(a,b,c,d,e){var f;switch(a){case"sum":f=parseFloat(b||0)+parseFloat(d[c]||0);break;case"count":(""===b||null==b)&&(b=0),f=d.hasOwnProperty(c)?b+1:0;break;case"min":f=""===b||null==b?parseFloat(d[c]||0):Math.min(parseFloat(b),parseFloat(d[c]||0));break;case"max":f=""===b||null==b?parseFloat(d[c]||0):Math.max(parseFloat(b),parseFloat(d[c]||0));break;case"avg":f=(parseFloat(b||0)*(e-1)+parseFloat(d[c]||0))/e}return f}function m(a,b,c,d){var e,h,i,j,k=b.length,m="",n=[];for($.isArray(c)?(j=c.length,n=c):(j=1,n[0]=c),f=[],g=[],f.root=0,d._count?d._count++:d._count=1,i=0;j>i;i++){var o,p=[];for(e=0;k>e;e++){if(null==c)h=$.trim(b[e].member)+"_"+b[e].aggregator,o=h,n[0]=b[e].label||b[e].aggregator+" "+$.trim(b[e].member);else{o=c[i].replace(/\s+/g,"");try{h=1===k?m+o:m+o+"_"+b[e].aggregator+"_"+String(e)}catch(q){}n[i]=c[i]}h=isNaN(parseInt(h,10))?h:h+" ",d[h]=p[h]=l(b[e].aggregator,d[h],b[e].member,a,d._count)}m+=c[i].replace(/\s+/g,""),f[h]=p,g[h]=n[i]}return d}function n(a){var b,d,e,f,g;for(e in a)if(a.hasOwnProperty(e)){if("object"!=typeof a[e]){if("level"===e){if(void 0===J[a.level]&&(J[a.level]="",a.level>0&&-1===a.text.indexOf("_r_Totals")&&(i[a.level-1]={useColSpanStyle:!1,groupHeaders:[]})),J[a.level]!==a.text&&a.children.length&&-1===a.text.indexOf("_r_Totals")&&a.level>0){i[a.level-1].groupHeaders.push({titleText:a.label,numberOfColumns:0});var h=i[a.level-1].groupHeaders.length-1,k=0===h?L:K;if(a.level-1===(j.rowTotals?1:0)&&h>0){for(var l=0,m=0;h>m;m++)l+=i[a.level-1].groupHeaders[m].numberOfColumns;l&&(k=l+r)}c[k]&&(i[a.level-1].groupHeaders[h].startColumnName=c[k].name,i[a.level-1].groupHeaders[h].numberOfColumns=c.length-k),K=c.length}J[a.level]=a.text}if(a.level===s&&"level"===e&&s>0)if(t>1){var o=1;for(b in a.fields)a.fields.hasOwnProperty(b)&&(1===o&&i[s-1].groupHeaders.push({startColumnName:b,numberOfColumns:1,titleText:a.label||a.text}),o++);i[s-1].groupHeaders[i[s-1].groupHeaders.length-1].numberOfColumns=o-1}else i.splice(s-1,1)}if(null!=a[e]&&"object"==typeof a[e]&&n(a[e]),"level"===e&&a.level>0&&(a.level===(0===s?a.level:s)||-1!==J[a.level].indexOf("_r_Totals"))){d=0;for(b in a.fields)if(a.fields.hasOwnProperty(b)){g={};for(f in j.aggregates[d])if(j.aggregates[d].hasOwnProperty(f))switch(f){case"member":case"label":case"aggregator":break;default:g[f]=j.aggregates[d][f]}t>1?(g.name=b,g.label=j.aggregates[d].label||a.label):(g.name=a.text,g.label="_r_Totals"===a.text?j.rowTotalsText:a.label),c.push(g),d++}}}}var o,p,q,r,s,t,u,v,w=a.length,x=0;if(j.rowTotals&&j.yDimension.length>0){var y=j.yDimension[0].dataName;j.yDimension.splice(0,0,{dataName:y}),j.yDimension[0].converter=function(){return"_r_Totals"}}if(r=$.isArray(j.xDimension)?j.xDimension.length:0,s=j.yDimension.length,t=$.isArray(j.aggregates)?j.aggregates.length:0,0===r||0===t)throw"xDimension or aggregates optiona are not set!";var z;for(q=0;r>q;q++)z={name:j.xDimension[q].dataName,frozen:j.frozenStaticCols},null==j.xDimension[q].isGroupField&&(j.xDimension[q].isGroupField=!0),z=$.extend(!0,z,j.xDimension[q]),c.push(z);for(var A=r-1,B={};w>x;){o=a[x];var C=[],D=[];u={},q=0;do C[q]=$.trim(o[j.xDimension[q].dataName]),u[j.xDimension[q].dataName]=C[q],q++;while(r>q);var E=0;if(p=-1,v=b(d,k,C)){if(p>=0){if(E=0,s>=1){for(E=0;s>E;E++)D[E]=$.trim(o[j.yDimension[E].dataName]),j.yDimension[E].converter&&$.isFunction(j.yDimension[E].converter)&&(D[E]=j.yDimension[E].converter.call(this,D[E],C,D));v=m(o,j.aggregates,D,v)}else 0===s&&(v=m(o,j.aggregates,null,v));d[p]=v}}else{if(E=0,s>=1){for(E=0;s>E;E++)D[E]=$.trim(o[j.yDimension[E].dataName]),j.yDimension[E].converter&&$.isFunction(j.yDimension[E].converter)&&(D[E]=j.yDimension[E].converter.call(this,D[E],C,D));u=m(o,j.aggregates,D,u)}else 0===s&&(u=m(o,j.aggregates,null,u));d.push(u)}var F,G=0,H=null,I=null;for(F in f)if(f.hasOwnProperty(F)){if(0===G)B.children&&void 0!==B.children||(B={text:F,level:0,children:[],label:F}),H=B.children;else{for(I=null,q=0;q<H.length;q++)if(H[q].text===F){I=H[q];break}I?H=I.children:(H.push({children:[],text:F,level:G,fields:f[F],label:g[F]}),H=H[H.length-1].children)}G++}x++}var J=[],K=c.length,L=K;s>0&&(i[s-1]={useColSpanStyle:!1,groupHeaders:[]}),n(B);var M;if(j.colTotals)for(var N=d.length;N--;)for(q=r;q<c.length;q++)M=c[q].name,e[M]?e[M]+=parseFloat(d[N][M]||0):e[M]=parseFloat(d[N][M]||0);if(A>0)for(q=0;A>q;q++)c[q].isGroupField&&(h.groupingView.groupField.push(c[q].name),h.groupingView.groupSummary.push(j.groupSummary),h.groupingView.groupSummaryPos.push(j.groupSummaryPos));else h.grouping=!1;h.sortname=c[A].name,h.groupingView.hideFirstGroupCol=!0}),{colModel:c,rows:d,groupOptions:h,groupHeaders:i,summary:e}},jqPivot:function(a,b,c,d){return this.each(function(){function e(a){var d,e,g,h,i=jQuery(f).jqGrid("pivotSetup",a,b),j=$.assocArraySize(i.summary)>0?!0:!1,k=$.jgrid.from.call(f,i.rows);for(b.ignoreCase&&(k=k.ignoreCase()),d=0;d<i.groupOptions.groupingView.groupField.length;d++)e=b.xDimension[d].sortorder?b.xDimension[d].sortorder:"asc",g=b.xDimension[d].sorttype?b.xDimension[d].sorttype:"text",k.orderBy(i.groupOptions.groupingView.groupField[d],e,g,"",g);h=b.xDimension.length,i.groupOptions.sortname&&h&&(e=b.xDimension[h-1].sortorder?b.xDimension[h-1].sortorder:"asc",g=b.xDimension[h-1].sorttype?b.xDimension[h-1].sorttype:"text",k.orderBy(i.groupOptions.sortname,e,g,"",g)),jQuery(f).jqGrid($.extend(!0,{datastr:$.extend(k.select(),j?{userdata:i.summary}:{}),datatype:"jsonstring",footerrow:j,userDataOnFooter:j,colModel:i.colModel,viewrecords:!0,sortname:b.xDimension[0].dataName},i.groupOptions,c||{}));var l=i.groupHeaders;if(l.length)for(d=0;d<l.length;d++)l[d]&&l[d].groupHeaders.length&&jQuery(f).jqGrid("setGroupHeaders",l[d]);b.frozenStaticCols&&jQuery(f).jqGrid("setFrozenColumns")}var f=this;"string"==typeof a?$.ajax($.extend({url:a,dataType:"json",success:function(a){e($.jgrid.getAccessor(a,d&&d.reader?d.reader:"rows"))}},d||{})):e(a)})}}),$.jgrid.extend({setSubGrid:function(){return this.each(function(){var a,b,c=this,d=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].subgrid,e={plusicon:d.icon_plus,minusicon:d.icon_minus,openicon:d.icon_open,expandOnLoad:!1,delayOnLoad:50,selectOnExpand:!1,selectOnCollapse:!1,reloadOnExpand:!0};if(c.p.subGridOptions=$.extend(e,c.p.subGridOptions||{}),c.p.colNames.unshift(""),c.p.colModel.unshift({name:"subgrid",width:$.jgrid.cell_width?c.p.subGridWidth+c.p.cellLayout:c.p.subGridWidth,sortable:!1,resizable:!1,hidedlg:!0,search:!1,fixed:!0}),a=c.p.subGridModel,a[0])for(a[0].align=$.extend([],a[0].align||[]),b=0;b<a[0].name.length;b++)a[0].align[b]=a[0].align[b]||"left"})},addSubGridCell:function(a,b){var c,d,e,f="";return this.each(function(){f=this.formatCol(a,b),d=this.p.id,c=this.p.subGridOptions.plusicon,e=$.jgrid.styleUI[this.p.styleUI||"jQueryUI"].common}),'<td role="gridcell" aria-describedby="'+d+'_subgrid" class="ui-sgcollapsed sgcollapsed" '+f+"><a style='cursor:pointer;' class='ui-sghref'><span class='"+e.icon_base+" "+c+"'></span></a></td>"},addSubGrid:function(a,b){return this.each(function(){var c=this;if(c.grid){var d,e,f,g,h,i=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].base,j=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common,k=function(a,b,d){var e=$("<td align='"+c.p.subGridModel[0].align[d]+"'></td>").html(b);$(a).append(e)},l=function(a,b){var d,e,f,g=$("<table class='"+i.rowTable+" ui-common-table'><tbody></tbody></table>"),h=$("<tr></tr>");for(e=0;e<c.p.subGridModel[0].name.length;e++)d=$("<th class='"+i.headerBox+" ui-th-subgrid ui-th-column ui-th-"+c.p.direction+"'></th>"),$(d).html(c.p.subGridModel[0].name[e]),$(d).width(c.p.subGridModel[0].width[e]),$(h).append(d);$(g).append(h),a&&(f=c.p.xmlReader.subgrid,$(f.root+" "+f.row,a).each(function(){if(h=$("<tr class='"+j.content+" ui-subtblcell'></tr>"),f.repeatitems===!0)$(f.cell,this).each(function(a){k(h,$(this).text()||"&#160;",a)});else{var a=c.p.subGridModel[0].mapping||c.p.subGridModel[0].name;if(a)for(e=0;e<a.length;e++)k(h,$(a[e],this).text()||"&#160;",e)}$(g).append(h)}));var l=$("table:first",c.grid.bDiv).attr("id")+"_";return $("#"+$.jgrid.jqID(l+b)).append(g),c.grid.hDiv.loading=!1,$("#load_"+$.jgrid.jqID(c.p.id)).hide(),!1},m=function(a,b){var d,e,f,g,h,l,m=$("<table class='"+i.rowTable+" ui-common-table'><tbody></tbody></table>"),n=$("<tr></tr>");for(f=0;f<c.p.subGridModel[0].name.length;f++)d=$("<th class='"+i.headerBox+" ui-th-subgrid ui-th-column ui-th-"+c.p.direction+"'></th>"),$(d).html(c.p.subGridModel[0].name[f]),$(d).width(c.p.subGridModel[0].width[f]),$(n).append(d);if($(m).append(n),a&&(h=c.p.jsonReader.subgrid,e=$.jgrid.getAccessor(a,h.root),void 0!==e))for(f=0;f<e.length;f++){if(g=e[f],n=$("<tr class='"+j.content+" ui-subtblcell'></tr>"),h.repeatitems===!0)for(h.cell&&(g=g[h.cell]),l=0;l<g.length;l++)k(n,g[l]||"&#160;",l);else{var o=c.p.subGridModel[0].mapping||c.p.subGridModel[0].name;if(o.length)for(l=0;l<o.length;l++)k(n,g[o[l]]||"&#160;",l)}$(m).append(n)}var p=$("table:first",c.grid.bDiv).attr("id")+"_";return $("#"+$.jgrid.jqID(p+b)).append(m),c.grid.hDiv.loading=!1,$("#load_"+$.jgrid.jqID(c.p.id)).hide(),!1},n=function(a){var b,d,e,f;if(b=$(a).attr("id"),d={nd_:(new Date).getTime()},d[c.p.prmNames.subgridid]=b,!c.p.subGridModel[0])return!1;if(c.p.subGridModel[0].params)for(f=0;f<c.p.subGridModel[0].params.length;f++)for(e=0;e<c.p.colModel.length;e++)c.p.colModel[e].name===c.p.subGridModel[0].params[f]&&(d[c.p.colModel[e].name]=$("td:eq("+e+")",a).text().replace(/\&#160\;/gi,""));if(!c.grid.hDiv.loading)switch(c.grid.hDiv.loading=!0,$("#load_"+$.jgrid.jqID(c.p.id)).show(),c.p.subgridtype||(c.p.subgridtype=c.p.datatype),$.isFunction(c.p.subgridtype)?c.p.subgridtype.call(c,d):c.p.subgridtype=c.p.subgridtype.toLowerCase(),c.p.subgridtype){case"xml":case"json":$.ajax($.extend({type:c.p.mtype,url:$.isFunction(c.p.subGridUrl)?c.p.subGridUrl.call(c,d):c.p.subGridUrl,dataType:c.p.subgridtype,data:$.isFunction(c.p.serializeSubGridData)?c.p.serializeSubGridData.call(c,d):d,complete:function(a){"xml"===c.p.subgridtype?l(a.responseXML,b):m($.jgrid.parse(a.responseText),b),a=null}},$.jgrid.ajaxOptions,c.p.ajaxSubgridOptions||{}))}return!1},o=0;$.each(c.p.colModel,function(){(this.hidden===!0||"rn"===this.name||"cb"===this.name)&&o++});var p,q=c.rows.length,r=1,s=$.isFunction(c.p.isHasSubGrid);for(void 0!==b&&b>0&&(r=b,q=b+1);q>r;){if($(c.rows[r]).hasClass("jqgrow")){if(c.p.scroll&&$(c.rows[r].cells[a]).unbind("click"),p=null,s)var p=c.p.isHasSubGrid.call(c,c.rows[r].id);p===!1?c.rows[r].cells[a].innerHTML="":$(c.rows[r].cells[a]).bind("click",function(){var b=$(this).parent("tr")[0];if(e=c.p.id,d=b.id,h=$("#"+e+"_"+d+"_expandedContent"),
$(this).hasClass("sgcollapsed")){if(g=$(c).triggerHandler("jqGridSubGridBeforeExpand",[e+"_"+d,d]),g=g===!1||"stop"===g?!1:!0,g&&$.isFunction(c.p.subGridBeforeExpand)&&(g=c.p.subGridBeforeExpand.call(c,e+"_"+d,d)),g===!1)return!1;c.p.subGridOptions.reloadOnExpand===!0||c.p.subGridOptions.reloadOnExpand===!1&&!h.hasClass("ui-subgrid")?(f=a>=1?"<td colspan='"+a+"'>&#160;</td>":"",$(b).after("<tr role='row' id='"+e+"_"+d+"_expandedContent' class='ui-subgrid ui-sg-expanded'>"+f+"<td class='"+j.content+" subgrid-cell'><span class='"+j.icon_base+" "+c.p.subGridOptions.openicon+"'></span></td><td colspan='"+parseInt(c.p.colNames.length-1-o,10)+"' class='"+j.content+" subgrid-data'><div id="+e+"_"+d+" class='tablediv'></div></td></tr>"),$(c).triggerHandler("jqGridSubGridRowExpanded",[e+"_"+d,d]),$.isFunction(c.p.subGridRowExpanded)?c.p.subGridRowExpanded.call(c,e+"_"+d,d):n(b)):h.show().removeClass("ui-sg-collapsed").addClass("ui-sg-expanded"),$(this).html("<a style='cursor:pointer;' class='ui-sghref'><span class='"+j.icon_base+" "+c.p.subGridOptions.minusicon+"'></span></a>").removeClass("sgcollapsed").addClass("sgexpanded"),c.p.subGridOptions.selectOnExpand&&$(c).jqGrid("setSelection",d)}else if($(this).hasClass("sgexpanded")){if(g=$(c).triggerHandler("jqGridSubGridRowColapsed",[e+"_"+d,d]),g=g===!1||"stop"===g?!1:!0,g&&$.isFunction(c.p.subGridRowColapsed)&&(g=c.p.subGridRowColapsed.call(c,e+"_"+d,d)),g===!1)return!1;c.p.subGridOptions.reloadOnExpand===!0?h.remove(".ui-subgrid"):h.hasClass("ui-subgrid")&&h.hide().addClass("ui-sg-collapsed").removeClass("ui-sg-expanded"),$(this).html("<a style='cursor:pointer;' class='ui-sghref'><span class='"+j.icon_base+" "+c.p.subGridOptions.plusicon+"'></span></a>").removeClass("sgexpanded").addClass("sgcollapsed"),c.p.subGridOptions.selectOnCollapse&&$(c).jqGrid("setSelection",d)}return!1})}r++}c.p.subGridOptions.expandOnLoad===!0&&$(c.rows).filter(".jqgrow").each(function(a,b){$(b.cells[0]).click()}),c.subGridXml=function(a,b){l(a,b)},c.subGridJson=function(a,b){m(a,b)}}})},expandSubGridRow:function(a){return this.each(function(){var b=this;if((b.grid||a)&&b.p.subGrid===!0){var c=$(this).jqGrid("getInd",a,!0);if(c){var d=$("td.sgcollapsed",c)[0];d&&$(d).trigger("click")}}})},collapseSubGridRow:function(a){return this.each(function(){var b=this;if((b.grid||a)&&b.p.subGrid===!0){var c=$(this).jqGrid("getInd",a,!0);if(c){var d=$("td.sgexpanded",c)[0];d&&$(d).trigger("click")}}})},toggleSubGridRow:function(a){return this.each(function(){var b=this;if((b.grid||a)&&b.p.subGrid===!0){var c=$(this).jqGrid("getInd",a,!0);if(c){var d=$("td.sgcollapsed",c)[0];d?$(d).trigger("click"):(d=$("td.sgexpanded",c)[0],d&&$(d).trigger("click"))}}})}}),$.jgrid.extend({setTreeNode:function(a,b){return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid)for(var d,e,f,g,h,i,j,k,l=c.p.expColInd,m=c.p.treeReader.expanded_field,n=c.p.treeReader.leaf_field,o=c.p.treeReader.level_field,p=c.p.treeReader.icon_field,q=c.p.treeReader.loaded,r=$.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common;b>a;){var s,t=$.jgrid.stripPref(c.p.idPrefix,c.rows[a].id),u=c.p._index[t];j=c.p.data[u],"nested"===c.p.treeGridModel&&(j[n]||(d=parseInt(j[c.p.treeReader.left_field],10),e=parseInt(j[c.p.treeReader.right_field],10),j[n]=e===d+1?"true":"false",c.rows[a].cells[c.p._treeleafpos].innerHTML=j[n])),f=parseInt(j[o],10),0===c.p.tree_root_level?(g=f+1,h=f):(g=f,h=f-1),i="<div class='tree-wrap tree-wrap-"+c.p.direction+"' style='width:"+18*g+"px;'>",i+="<div style='"+("rtl"===c.p.direction?"right:":"left:")+18*h+"px;' class='"+r.icon_base+" ",void 0!==j[q]&&("true"===j[q]||j[q]===!0?j[q]=!0:j[q]=!1),"true"===j[n]||j[n]===!0?(i+=(void 0!==j[p]&&""!==j[p]?j[p]:c.p.treeIcons.leaf)+" tree-leaf treeclick",j[n]=!0,k="leaf"):(j[n]=!1,k=""),j[m]=("true"===j[m]||j[m]===!0?!0:!1)&&(j[q]||void 0===j[q]),i+=j[m]===!1?j[n]===!0?"'":c.p.treeIcons.plus+" tree-plus treeclick'":j[n]===!0?"'":c.p.treeIcons.minus+" tree-minus treeclick'",i+="></div></div>",$(c.rows[a].cells[l]).wrapInner("<span class='cell-wrapper"+k+"'></span>").prepend(i),f!==parseInt(c.p.tree_root_level,10)&&(s=$(c).jqGrid("isVisibleNode",j),s||$(c.rows[a]).css("display","none")),$(c.rows[a].cells[l]).find("div.treeclick").bind("click",function(a){var b=a.target||a.srcElement,d=$.jgrid.stripPref(c.p.idPrefix,$(b,c.rows).closest("tr.jqgrow")[0].id),e=c.p._index[d];return c.p.data[e][n]||(c.p.data[e][m]?($(c).jqGrid("collapseRow",c.p.data[e]),$(c).jqGrid("collapseNode",c.p.data[e])):($(c).jqGrid("expandRow",c.p.data[e]),$(c).jqGrid("expandNode",c.p.data[e]))),!1}),c.p.ExpandColClick===!0&&$(c.rows[a].cells[l]).find("span.cell-wrapper").css("cursor","pointer").bind("click",function(a){var b=a.target||a.srcElement,d=$.jgrid.stripPref(c.p.idPrefix,$(b,c.rows).closest("tr.jqgrow")[0].id),e=c.p._index[d];return c.p.data[e][n]||(c.p.data[e][m]?($(c).jqGrid("collapseRow",c.p.data[e]),$(c).jqGrid("collapseNode",c.p.data[e])):($(c).jqGrid("expandRow",c.p.data[e]),$(c).jqGrid("expandNode",c.p.data[e]))),$(c).jqGrid("setSelection",d),!1}),a++}})},setTreeGrid:function(){return this.each(function(){var a,b,c,d,e=this,f=0,g=!1,h=[],i=$.jgrid.styleUI[e.p.styleUI||"jQueryUI"].treegrid;if(e.p.treeGrid){e.p.treedatatype||$.extend(e.p,{treedatatype:e.p.datatype}),e.p.loadonce&&(e.p.treedatatype="local"),e.p.subGrid=!1,e.p.altRows=!1,e.p.pgbuttons=!1,e.p.pginput=!1,e.p.gridview=!0,null===e.p.rowTotal&&(e.p.rowNum=1e4),e.p.multiselect=!1,e.p.rowList=[],e.p.expColInd=0,a=i.icon_plus,"jQueryUI"===e.p.styleUI&&(a+="rtl"===e.p.direction?"w":"e"),e.p.treeIcons=$.extend({plus:a,minus:i.icon_minus,leaf:i.icon_leaf},e.p.treeIcons||{}),"nested"===e.p.treeGridModel?e.p.treeReader=$.extend({level_field:"level",left_field:"lft",right_field:"rgt",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},e.p.treeReader):"adjacency"===e.p.treeGridModel&&(e.p.treeReader=$.extend({level_field:"level",parent_id_field:"parent",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},e.p.treeReader));for(c in e.p.colModel)if(e.p.colModel.hasOwnProperty(c)){b=e.p.colModel[c].name,b!==e.p.ExpandColumn||g||(g=!0,e.p.expColInd=f),f++;for(d in e.p.treeReader)e.p.treeReader.hasOwnProperty(d)&&e.p.treeReader[d]===b&&h.push(b)}$.each(e.p.treeReader,function(a,b){b&&-1===$.inArray(b,h)&&("leaf_field"===a&&(e.p._treeleafpos=f),f++,e.p.colNames.push(b),e.p.colModel.push({name:b,width:1,hidden:!0,sortable:!1,resizable:!1,hidedlg:!0,editable:!0,search:!1}))})}})},expandRow:function(a){this.each(function(){var b=this;if(b.grid&&b.p.treeGrid){var c=$(b).jqGrid("getNodeChildren",a),d=b.p.treeReader.expanded_field,e=a[b.p.localReader.id],f=$.isFunction(b.p.beforeExpandTreeGridRow)?b.p.beforeExpandTreeGridRow.call(b,e,a,c):!0;f!==!1&&($(c).each(function(){var a=b.p.idPrefix+$.jgrid.getAccessor(this,b.p.localReader.id);$($(b).jqGrid("getGridRowById",a)).css("display",""),this[d]&&$(b).jqGrid("expandRow",this)}),$.isFunction(b.p.afterExpandTreeGridRow)&&b.p.afterExpandTreeGridRow.call(b,e,a,c))}})},collapseRow:function(a){this.each(function(){var b=this;if(b.grid&&b.p.treeGrid){var c=$(b).jqGrid("getNodeChildren",a),d=b.p.treeReader.expanded_field,e=a[b.p.localReader.id],f=$.isFunction(b.p.beforeCollapseTreeGridRow)?b.p.beforeCollapseTreeGridRow.call(b,e,a,c):!0;f!==!1&&($(c).each(function(){var a=b.p.idPrefix+$.jgrid.getAccessor(this,b.p.localReader.id);$($(b).jqGrid("getGridRowById",a)).css("display","none"),this[d]&&$(b).jqGrid("collapseRow",this)}),$.isFunction(b.p.afterCollapseTreeGridRow)&&b.p.afterCollapseTreeGridRow.call(b,e,a,c))}})},getRootNodes:function(a){var b=[];return this.each(function(){var c,d,e,f=this;if(f.grid&&f.p.treeGrid)switch("boolean"!=typeof a&&(a=!1),e=a?$(f).jqGrid("getRowData",null,!0):f.p.data,f.p.treeGridModel){case"nested":c=f.p.treeReader.level_field,$(e).each(function(){parseInt(this[c],10)===parseInt(f.p.tree_root_level,10)&&(a?b.push(f.p.data[f.p._index[this[f.p.keyName]]]):b.push(this))});break;case"adjacency":d=f.p.treeReader.parent_id_field,$(e).each(function(){(null===this[d]||"null"===String(this[d]).toLowerCase())&&(a?b.push(f.p.data[f.p._index[this[f.p.keyName]]]):b.push(this))})}}),b},getNodeDepth:function(a){var b=null;return this.each(function(){if(this.grid&&this.p.treeGrid){var c=this;switch(c.p.treeGridModel){case"nested":var d=c.p.treeReader.level_field;b=parseInt(a[d],10)-parseInt(c.p.tree_root_level,10);break;case"adjacency":b=$(c).jqGrid("getNodeAncestors",a).length}}}),b},getNodeParent:function(a){var b=null;return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid)switch(c.p.treeGridModel){case"nested":var d=c.p.treeReader.left_field,e=c.p.treeReader.right_field,f=c.p.treeReader.level_field,g=parseInt(a[d],10),h=parseInt(a[e],10),i=parseInt(a[f],10);$(this.p.data).each(function(){return parseInt(this[f],10)===i-1&&parseInt(this[d],10)<g&&parseInt(this[e],10)>h?(b=this,!1):void 0});break;case"adjacency":for(var j=c.p.treeReader.parent_id_field,k=c.p.localReader.id,l=a[k],m=c.p._index[l];m--;)if(c.p.data[m][k]===$.jgrid.stripPref(c.p.idPrefix,a[j])){b=c.p.data[m];break}}}),b},getNodeChildren:function(a,b){var c=[];return this.each(function(){var d=this;if(d.grid&&d.p.treeGrid){var e,f,g=b?this.rows.length:this.p.data.length;switch(d.p.treeGridModel){case"nested":var h=d.p.treeReader.left_field,i=d.p.treeReader.right_field,j=d.p.treeReader.level_field,k=parseInt(a[h],10),l=parseInt(a[i],10),m=parseInt(a[j],10);for(e=0;g>e;e++)f=b?d.p.data[d.p._index[this.rows[e].id]]:d.p.data[e],f&&parseInt(f[j],10)===m+1&&parseInt(f[h],10)>k&&parseInt(f[i],10)<l&&c.push(f);break;case"adjacency":var n=d.p.treeReader.parent_id_field,o=d.p.localReader.id;for(e=0;g>e;e++)f=b?d.p.data[d.p._index[this.rows[e].id]]:d.p.data[e],f&&String(f[n])===$.jgrid.stripPref(d.p.idPrefix,a[o])&&c.push(f)}}}),c},getFullTreeNode:function(a,b){var c=[];return this.each(function(){var d,e=this,f=e.p.treeReader.expanded_field;if(e.grid&&e.p.treeGrid)switch((null==b||"boolean"!=typeof b)&&(b=!1),e.p.treeGridModel){case"nested":var g=e.p.treeReader.left_field,h=e.p.treeReader.right_field,i=e.p.treeReader.level_field,j=parseInt(a[g],10),k=parseInt(a[h],10),l=parseInt(a[i],10);$(this.p.data).each(function(){parseInt(this[i],10)>=l&&parseInt(this[g],10)>=j&&parseInt(this[g],10)<=k&&(b&&(this[f]=!0),c.push(this))});break;case"adjacency":if(a){c.push(a);var m=e.p.treeReader.parent_id_field,n=e.p.localReader.id;$(this.p.data).each(function(a){for(d=c.length,a=0;d>a;a++)if($.jgrid.stripPref(e.p.idPrefix,c[a][n])===this[m]){b&&(this[f]=!0),c.push(this);break}})}}}),c},getNodeAncestors:function(a,b,c){var d=[];return void 0===b&&(b=!1),this.each(function(){if(this.grid&&this.p.treeGrid){c=void 0===c?!1:this.p.treeReader.expanded_field;for(var e=$(this).jqGrid("getNodeParent",a);e;){if(c)try{e[c]=!0}catch(f){}b?d.unshift(e):d.push(e),e=$(this).jqGrid("getNodeParent",e)}}}),d},isVisibleNode:function(a){var b=!0;return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid){var d=$(c).jqGrid("getNodeAncestors",a),e=c.p.treeReader.expanded_field;$(d).each(function(){return b=b&&this[e],b?void 0:!1})}}),b},isNodeLoaded:function(a){var b;return this.each(function(){var c=this;if(c.grid&&c.p.treeGrid){var d=c.p.treeReader.leaf_field,e=c.p.treeReader.loaded;b=void 0!==a?void 0!==a[e]?a[e]:a[d]||$(c).jqGrid("getNodeChildren",a).length>0?!0:!1:!1}}),b},reloadNode:function(a){return this.each(function(){if(this.grid&&this.p.treeGrid){var b=this.p.localReader.id,c=this.p.selrow;$(this).jqGrid("delChildren",a[b]);var d=this.p.treeReader.expanded_field,e=this.p.treeReader.parent_id_field,f=this.p.treeReader.loaded,g=this.p.treeReader.level_field,h=this.p.treeReader.left_field,i=this.p.treeReader.right_field,j=$.jgrid.getAccessor(a,this.p.localReader.id),k=$("#"+j,this.grid.bDiv)[0];a[d]=!0,$("div.treeclick",k).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=k.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?$(this).jqGrid("setGridParam",{postData:{nodeid:j,n_left:a[h],n_right:a[i],n_level:a[g]}}):$(this).jqGrid("setGridParam",{postData:{nodeid:j,parentid:a[e],n_level:a[g]}}),$(this).trigger("reloadGrid"),a[f]=!0,"nested"===this.p.treeGridModel?$(this).jqGrid("setGridParam",{selrow:c,postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):$(this).jqGrid("setGridParam",{selrow:c,postData:{nodeid:"",parentid:"",n_level:""}})}})},expandNode:function(a){return this.each(function(){if(this.grid&&this.p.treeGrid){var b=this.p.treeReader.expanded_field,c=this.p.treeReader.parent_id_field,d=this.p.treeReader.loaded,e=this.p.treeReader.level_field,f=this.p.treeReader.left_field,g=this.p.treeReader.right_field;if(!a[b]){var h=$.jgrid.getAccessor(a,this.p.localReader.id),i=$("#"+this.p.idPrefix+$.jgrid.jqID(h),this.grid.bDiv)[0],j=this.p._index[h],k=$.isFunction(this.p.beforeExpandTreeGridNode)?this.p.beforeExpandTreeGridNode.call(this,h,a):!0;if(k===!1)return;$(this).jqGrid("isNodeLoaded",this.p.data[j])?(a[b]=!0,$("div.treeclick",i).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus")):this.grid.hDiv.loading||(a[b]=!0,$("div.treeclick",i).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=i.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?$(this).jqGrid("setGridParam",{postData:{nodeid:h,n_left:a[f],n_right:a[g],n_level:a[e]}}):$(this).jqGrid("setGridParam",{postData:{nodeid:h,parentid:a[c],n_level:a[e]}}),$(this).trigger("reloadGrid"),a[d]=!0,"nested"===this.p.treeGridModel?$(this).jqGrid("setGridParam",{postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):$(this).jqGrid("setGridParam",{postData:{nodeid:"",parentid:"",n_level:""}})),$.isFunction(this.p.afterExpandTreeGridNode)&&this.p.afterExpandTreeGridNode.call(this,h,a)}}})},collapseNode:function(a){return this.each(function(){if(this.grid&&this.p.treeGrid){var b=this.p.treeReader.expanded_field;if(a[b]){var c=$.jgrid.getAccessor(a,this.p.localReader.id),d=$.isFunction(this.p.beforeCollapseTreeGridNode)?this.p.beforeCollapseTreeGridNode.call(this,c,a):!0,e=$("#"+this.p.idPrefix+$.jgrid.jqID(c),this.grid.bDiv)[0];if(a[b]=!1,d===!1)return;$("div.treeclick",e).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus"),$.isFunction(this.p.afterCollapseTreeGridNode)&&this.p.afterCollapseTreeGridNode.call(this,c,a)}}})},SortTree:function(a,b,c,d){return this.each(function(){if(this.grid&&this.p.treeGrid){var e,f,g,h,i,j=[],k=this,l=$(this).jqGrid("getRootNodes",k.p.search);for(h=$.jgrid.from.call(this,l),h.orderBy(a,b,c,d),i=h.select(),e=0,f=i.length;f>e;e++)g=i[e],j.push(g),$(this).jqGrid("collectChildrenSortTree",j,g,a,b,c,d);$.each(j,function(a){var b=$.jgrid.getAccessor(this,k.p.localReader.id);$("#"+$.jgrid.jqID(k.p.id)+" tbody tr:eq("+a+")").after($("tr#"+$.jgrid.jqID(b),k.grid.bDiv))}),h=null,i=null,j=null}})},searchTree:function(a){var b,c,d,e,f,g,h=a.length||0,i=[],j=[],k=[];return this.each(function(){if(this.grid&&this.p.treeGrid&&h)for(b=this.p.localReader.id;h--;)if(i=$(this).jqGrid("getNodeAncestors",a[h],!0,!0),i.push(a[h]),c=i[0][b],-1===$.inArray(c,j))j.push(c),k=k.concat(i);else for(f=0,d=i.length;d>f;f++){var l=!1;for(g=0,e=k.length;e>g;g++)if(i[f][b]===k[g][b]){l=!0;break}l||k.push(i[f])}}),k},collectChildrenSortTree:function(a,b,c,d,e,f){return this.each(function(){if(this.grid&&this.p.treeGrid){var g,h,i,j,k,l;for(j=$(this).jqGrid("getNodeChildren",b,this.p.search),k=$.jgrid.from.call(this,j),k.orderBy(c,d,e,f),l=k.select(),g=0,h=l.length;h>g;g++)i=l[g],a.push(i),$(this).jqGrid("collectChildrenSortTree",a,i,c,d,e,f)}})},setTreeRow:function(a,b){var c=!1;return this.each(function(){var d=this;d.grid&&d.p.treeGrid&&(c=$(d).jqGrid("setRowData",a,b))}),c},delTreeNode:function(a){return this.each(function(){var b,c,d,e,f,g=this,h=g.p.localReader.id,i=g.p.treeReader.left_field,j=g.p.treeReader.right_field;if(g.grid&&g.p.treeGrid){var k=g.p._index[a];if(void 0!==k){c=parseInt(g.p.data[k][j],10),d=c-parseInt(g.p.data[k][i],10)+1;var l=$(g).jqGrid("getFullTreeNode",g.p.data[k]);if(l.length>0)for(b=0;b<l.length;b++)$(g).jqGrid("delRowData",l[b][h]);if("nested"===g.p.treeGridModel){if(e=$.jgrid.from.call(g,g.p.data).greater(i,c,{stype:"integer"}).select(),e.length)for(f in e)e.hasOwnProperty(f)&&(e[f][i]=parseInt(e[f][i],10)-d);if(e=$.jgrid.from.call(g,g.p.data).greater(j,c,{stype:"integer"}).select(),e.length)for(f in e)e.hasOwnProperty(f)&&(e[f][j]=parseInt(e[f][j],10)-d)}}}})},delChildren:function(a){return this.each(function(){var b,c,d,e,f=this,g=f.p.localReader.id,h=f.p.treeReader.left_field,i=f.p.treeReader.right_field;if(f.grid&&f.p.treeGrid){var j=f.p._index[a];if(void 0!==j){b=parseInt(f.p.data[j][i],10),c=b-parseInt(f.p.data[j][h],10)+1;var k=$(f).jqGrid("getFullTreeNode",f.p.data[j]);if(k.length>0)for(var l=0;l<k.length;l++)k[l][g]!==a&&$(f).jqGrid("delRowData",k[l][g]);if("nested"===f.p.treeGridModel){if(d=$.jgrid.from(f.p.data).greater(h,b,{stype:"integer"}).select(),d.length)for(e in d)d.hasOwnProperty(e)&&(d[e][h]=parseInt(d[e][h],10)-c);if(d=$.jgrid.from(f.p.data).greater(i,b,{stype:"integer"}).select(),d.length)for(e in d)d.hasOwnProperty(e)&&(d[e][i]=parseInt(d[e][i],10)-c)}}}})},addChildNode:function(a,b,c,d){var e=this[0];if(c){var f,g,h,i,j,k,l,m,n=e.p.treeReader.expanded_field,o=e.p.treeReader.leaf_field,p=e.p.treeReader.level_field,q=e.p.treeReader.parent_id_field,r=e.p.treeReader.left_field,s=e.p.treeReader.right_field,t=e.p.treeReader.loaded,u=0,v=b;if(void 0===d&&(d=!1),null==a){if(j=e.p.data.length-1,j>=0)for(;j>=0;)u=Math.max(u,parseInt(e.p.data[j][e.p.localReader.id],10)),j--;a=u+1}var w=$(e).jqGrid("getInd",b);if(l=!1,void 0===b||null===b||""===b)b=null,v=null,f="last",i=e.p.tree_root_level,j=e.p.data.length+1;else{f="after",g=e.p._index[b],h=e.p.data[g],b=h[e.p.localReader.id],i=parseInt(h[p],10)+1;var x=$(e).jqGrid("getFullTreeNode",h);x.length?(j=x[x.length-1][e.p.localReader.id],v=j,j=$(e).jqGrid("getInd",v)+1):j=$(e).jqGrid("getInd",b)+1,h[o]&&(l=!0,h[n]=!0,$(e.rows[w]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(e.p.treeIcons.leaf+" tree-leaf").addClass(e.p.treeIcons.minus+" tree-minus"),e.p.data[g][o]=!1,h[t]=!0)}if(k=j+1,void 0===c[n]&&(c[n]=!1),void 0===c[t]&&(c[t]=!1),c[p]=i,void 0===c[o]&&(c[o]=!0),"adjacency"===e.p.treeGridModel&&(c[q]=b),"nested"===e.p.treeGridModel){var y,z,A;if(null!==b){if(m=parseInt(h[s],10),y=$.jgrid.from.call(e,e.p.data),y=y.greaterOrEquals(s,m,{stype:"integer"}),z=y.select(),z.length)for(A in z)z.hasOwnProperty(A)&&(z[A][r]=z[A][r]>m?parseInt(z[A][r],10)+2:z[A][r],z[A][s]=z[A][s]>=m?parseInt(z[A][s],10)+2:z[A][s]);c[r]=m,c[s]=m+1}else{if(m=parseInt($(e).jqGrid("getCol",s,!1,"max"),10),z=$.jgrid.from.call(e,e.p.data).greater(r,m,{stype:"integer"}).select(),z.length)for(A in z)z.hasOwnProperty(A)&&(z[A][r]=parseInt(z[A][r],10)+2);if(z=$.jgrid.from.call(e,e.p.data).greater(s,m,{stype:"integer"}).select(),z.length)for(A in z)z.hasOwnProperty(A)&&(z[A][s]=parseInt(z[A][s],10)+2);c[r]=m+1,c[s]=m+2}}(null===b||$(e).jqGrid("isNodeLoaded",h)||l)&&($(e).jqGrid("addRowData",a,c,f,v),$(e).jqGrid("setTreeNode",j,k)),h&&!h[n]&&d&&$(e.rows[w]).find("div.treeclick").click()}}}),$.fn.jqDrag=function(a){return i(this,a,"d")},$.fn.jqResize=function(a,b){return i(this,a,"r",b)},$.jqDnR={dnr:{},e:0,drag:function(a){return"d"==M.k?E.css({left:M.X+a.pageX-M.pX,top:M.Y+a.pageY-M.pY}):(E.css({width:Math.max(a.pageX-M.pX+M.W,0),height:Math.max(a.pageY-M.pY+M.H,0)}),M1&&E1.css({width:Math.max(a.pageX-M1.pX+M1.W,0),height:Math.max(a.pageY-M1.pY+M1.H,0)})),!1},stop:function(){$(document).unbind("mousemove",J.drag).unbind("mouseup",J.stop)}};var J=$.jqDnR,M=J.dnr,E=J.e,E1,M1,i=function(a,b,c,d){return a.each(function(){b=b?$(b,a):a,b.bind("mousedown",{e:a,k:c},function(a){var b=a.data,c={};if(E=b.e,E1=d?$(d):!1,"relative"!=E.css("position"))try{E.position(c)}catch(e){}if(M={X:c.left||f("left")||0,Y:c.top||f("top")||0,W:f("width")||E[0].scrollWidth||0,H:f("height")||E[0].scrollHeight||0,pX:a.pageX,pY:a.pageY,k:b.k},M1=E1&&"d"!=b.k?{X:c.left||f1("left")||0,Y:c.top||f1("top")||0,W:E1[0].offsetWidth||f1("width")||0,H:E1[0].offsetHeight||f1("height")||0,pX:a.pageX,pY:a.pageY,k:b.k}:!1,$("input.hasDatepicker",E[0])[0])try{$("input.hasDatepicker",E[0]).datepicker("hide")}catch(g){}return $(document).mousemove($.jqDnR.drag).mouseup($.jqDnR.stop),!1})})},f=function(a){return parseInt(E.css(a),10)||!1},f1=function(a){return parseInt(E1.css(a),10)||!1};$.fn.tinyDraggable=function(a){var b=$.extend({handle:0,exclude:0},a);return this.each(function(){var a,c,d=$(this),e=b.handle?$(b.handle,d):d;e.on({mousedown:function(e){if(!b.exclude||!~$.inArray(e.target,$(b.exclude,d))){e.preventDefault();var f=d.offset();a=e.pageX-f.left,c=e.pageY-f.top,$(document).on("mousemove.drag",function(b){d.offset({top:b.pageY-c,left:b.pageX-a})})}},mouseup:function(a){$(document).off("mousemove.drag")}})})},$.fn.jqm=function(a){var b={overlay:50,closeoverlay:!0,overlayClass:"jqmOverlay",closeClass:"jqmClose",trigger:".jqModal",ajax:F,ajaxText:"",target:F,modal:F,toTop:F,onShow:F,onHide:F,onLoad:F};return this.each(function(){return this._jqm?H[this._jqm].c=$.extend({},H[this._jqm].c,a):(s++,this._jqm=s,H[s]={c:$.extend(b,$.jqm.params,a),a:F,w:$(this).addClass("jqmID"+s),s:s},void(b.trigger&&$(this).jqmAddTrigger(b.trigger)))})},$.fn.jqmAddClose=function(a){return hs(this,a,"jqmHide")},$.fn.jqmAddTrigger=function(a){return hs(this,a,"jqmShow")},$.fn.jqmShow=function(a){return this.each(function(){$.jqm.open(this._jqm,a)})},$.fn.jqmHide=function(a){return this.each(function(){$.jqm.close(this._jqm,a)})},$.jqm={hash:{},open:function(a,b){var c=H[a],d=c.c,f="."+d.closeClass,g=parseInt(c.w.css("z-index"));g=g>0?g:3e3;var h=$("<div></div>").css({height:"100%",width:"100%",position:"fixed",left:0,top:0,"z-index":g-1,opacity:d.overlay/100});if(c.a)return F;if(c.t=b,c.a=!0,c.w.css("z-index",g),d.modal?(A[0]||setTimeout(function(){new L("bind")},1),A.push(a)):d.overlay>0?d.closeoverlay&&c.w.jqmAddClose(h):h=F,c.o=h?h.addClass(d.overlayClass).prependTo("body"):F,d.ajax){var i=d.target||c.w,j=d.ajax;i="string"==typeof i?$(i,c.w):$(i),j="@"===j.substr(0,1)?$(b).attr(j.substring(1)):j,i.html(d.ajaxText).load(j,function(){d.onLoad&&d.onLoad.call(this,c),f&&c.w.jqmAddClose($(f,c.w)),e(c)})}else f&&c.w.jqmAddClose($(f,c.w));return d.toTop&&c.o&&c.w.before('<span id="jqmP'+c.w[0]._jqm+'"></span>').insertAfter(c.o),d.onShow?d.onShow(c):c.w.show(),e(c),F},close:function(a){var b=H[a];return b.a?(b.a=F,A[0]&&(A.pop(),A[0]||new L("unbind")),b.c.toTop&&b.o&&$("#jqmP"+b.w[0]._jqm).after(b.w).remove(),b.c.onHide?b.c.onHide(b):(b.w.hide(),b.o&&b.o.remove()),F):F},params:{}};var s=0,H=$.jqm.hash,A=[],F=!1,e=function(a){void 0===a.c.focusField&&(a.c.focusField=0),a.c.focusField>=0&&f(a)},f=function(a){try{$(":input:visible",a.w)[parseInt(a.c.focusField,10)].focus()}catch(b){}},L=function(a){$(document)[a]("keypress",m)[a]("keydown",m)[a]("mousedown",m)},m=function(a){var b=H[A[A.length-1]],c=!$(a.target).parents(".jqmID"+b.s)[0];return c&&($(".jqmID"+b.s).each(function(){var b=$(this),d=b.offset();return d.top<=a.pageY&&a.pageY<=d.top+b.height()&&d.left<=a.pageX&&a.pageX<=d.left+b.width()?(c=!1,!1):void 0}),f(b)),!c},hs=function(a,b,c){return a.each(function(){var a=this._jqm;$(b).each(function(){this[c]||(this[c]=[],$(this).click(function(){for(var a in{jqmShow:1,jqmHide:1})for(var b in this[a])H[this[a][b]]&&H[this[a][b]].w[a](this);return F})),this[c].push(a)})})};$.fmatter={},$.extend($.fmatter,{isBoolean:function(a){return"boolean"==typeof a},isObject:function(a){return a&&("object"==typeof a||$.isFunction(a))||!1},isString:function(a){return"string"==typeof a},isNumber:function(a){return"number"==typeof a&&isFinite(a)},isValue:function(a){return this.isObject(a)||this.isString(a)||this.isNumber(a)||this.isBoolean(a)},isEmpty:function(a){return!this.isString(a)&&this.isValue(a)?!1:this.isValue(a)?(a=$.trim(a).replace(/\&nbsp\;/gi,"").replace(/\&#160\;/gi,""),""===a):!0}}),$.fn.fmatter=function(a,b,c,d,e){var f=b;c=$.extend({},$.jgrid.getRegional(this,"formatter"),c);try{f=$.fn.fmatter[a].call(this,b,c,d,e)}catch(g){}return f},$.fmatter.util={NumberFormat:function(a,b){if($.fmatter.isNumber(a)||(a*=1),$.fmatter.isNumber(a)){var c,d=0>a,e=String(a),f=b.decimalSeparator||".";if($.fmatter.isNumber(b.decimalPlaces)){var g=b.decimalPlaces,h=Math.pow(10,g);if(e=String(Math.round(a*h)/h),c=e.lastIndexOf("."),g>0)for(0>c?(e+=f,c=e.length-1):"."!==f&&(e=e.replace(".",f));e.length-1-c<g;)e+="0"}if(b.thousandsSeparator){var i=b.thousandsSeparator;c=e.lastIndexOf(f),c=c>-1?c:e.length;var j,k=e.substring(c),l=-1;for(j=c;j>0;j--)l++,l%3===0&&j!==c&&(!d||j>1)&&(k=i+k),k=e.charAt(j-1)+k;e=k}return e=b.prefix?b.prefix+e:e,e=b.suffix?e+b.suffix:e}return a}},$.fn.fmatter.defaultFormat=function(a,b){return $.fmatter.isValue(a)&&""!==a?a:b.defaultValue||"&#160;"},$.fn.fmatter.email=function(a,b){return $.fmatter.isEmpty(a)?$.fn.fmatter.defaultFormat(a,b):'<a href="mailto:'+a+'">'+a+"</a>"},$.fn.fmatter.checkbox=function(a,b){var c,d=$.extend({},b.checkbox);void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=$.extend({},d,b.colModel.formatoptions)),c=d.disabled===!0?'disabled="disabled"':"",($.fmatter.isEmpty(a)||void 0===a)&&(a=$.fn.fmatter.defaultFormat(a,d)),a=String(a),a=(a+"").toLowerCase();var e=a.search(/(false|f|0|no|n|off|undefined)/i)<0?" checked='checked' ":"";return'<input type="checkbox" '+e+' value="'+a+'" offval="no" '+c+"/>"},$.fn.fmatter.link=function(a,b){var c={target:b.target},d="";return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(c=$.extend({},c,b.colModel.formatoptions)),c.target&&(d="target="+c.target),$.fmatter.isEmpty(a)?$.fn.fmatter.defaultFormat(a,b):"<a "+d+' href="'+a+'">'+a+"</a>"},$.fn.fmatter.showlink=function(a,b){var c,d={baseLinkUrl:b.baseLinkUrl,showAction:b.showAction,addParam:b.addParam||"",target:b.target,idName:b.idName},e="";return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(d=$.extend({},d,b.colModel.formatoptions)),d.target&&(e="target="+d.target),c=d.baseLinkUrl+d.showAction+"?"+d.idName+"="+b.rowId+d.addParam,$.fmatter.isString(a)||$.fmatter.isNumber(a)?"<a "+e+' href="'+c+'">'+a+"</a>":$.fn.fmatter.defaultFormat(a,b)},$.fn.fmatter.integer=function(a,b){var c=$.extend({},b.integer);return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(c=$.extend({},c,b.colModel.formatoptions)),$.fmatter.isEmpty(a)?c.defaultValue:$.fmatter.util.NumberFormat(a,c)},$.fn.fmatter.number=function(a,b){var c=$.extend({},b.number);return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(c=$.extend({},c,b.colModel.formatoptions)),$.fmatter.isEmpty(a)?c.defaultValue:$.fmatter.util.NumberFormat(a,c)},$.fn.fmatter.currency=function(a,b){var c=$.extend({},b.currency);return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(c=$.extend({},c,b.colModel.formatoptions)),$.fmatter.isEmpty(a)?c.defaultValue:$.fmatter.util.NumberFormat(a,c)},$.fn.fmatter.date=function(a,b,c,d){var e=$.extend({},b.date);return void 0!==b.colModel&&void 0!==b.colModel.formatoptions&&(e=$.extend({},e,b.colModel.formatoptions)),e.reformatAfterEdit||"edit"!==d?$.fmatter.isEmpty(a)?$.fn.fmatter.defaultFormat(a,b):$.jgrid.parseDate.call(this,e.srcformat,a,e.newformat,e):$.fn.fmatter.defaultFormat(a,b)},$.fn.fmatter.select=function(a,b){a=String(a);var c,d,e=!1,f=[];if(void 0!==b.colModel.formatoptions?(e=b.colModel.formatoptions.value,c=void 0===b.colModel.formatoptions.separator?":":b.colModel.formatoptions.separator,d=void 0===b.colModel.formatoptions.delimiter?";":b.colModel.formatoptions.delimiter):void 0!==b.colModel.editoptions&&(e=b.colModel.editoptions.value,c=void 0===b.colModel.editoptions.separator?":":b.colModel.editoptions.separator,d=void 0===b.colModel.editoptions.delimiter?";":b.colModel.editoptions.delimiter),e){var g,h=(null!=b.colModel.editoptions&&b.colModel.editoptions.multiple===!0)==!0?!0:!1,i=[];if(h&&(i=a.split(","),i=$.map(i,function(a){return $.trim(a)})),$.fmatter.isString(e)){var j,k=e.split(d),l=0;for(j=0;j<k.length;j++)if(g=k[j].split(c),g.length>2&&(g[1]=$.map(g,function(a,b){return b>0?a:void 0}).join(c)),h)$.inArray(g[0],i)>-1&&(f[l]=g[1],l++);else if($.trim(g[0])===$.trim(a)){f[0]=g[1];break}}else $.fmatter.isObject(e)&&(h?f=$.map(i,function(a){return e[a]}):f[0]=e[a]||"")}return a=f.join(", "),""===a?$.fn.fmatter.defaultFormat(a,b):a},$.fn.fmatter.rowactions=function(a){var b=$(this).closest("tr.jqgrow"),c=b.attr("id"),d=$(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),e=$("#"+d),f=e[0],g=f.p,h=g.colModel[$.jgrid.getCellIndex(this)],i=h.frozen?$("tr#"+c+" td:eq("+$.jgrid.getCellIndex(this)+") > div",e):$(this).parent(),j={extraparam:{}},k=function(a,b){$.isFunction(j.afterSave)&&j.afterSave.call(f,a,b),i.find("div.ui-inline-edit,div.ui-inline-del").show(),i.find("div.ui-inline-save,div.ui-inline-cancel").hide()},l=function(a){$.isFunction(j.afterRestore)&&j.afterRestore.call(f,a),i.find("div.ui-inline-edit,div.ui-inline-del").show(),i.find("div.ui-inline-save,div.ui-inline-cancel").hide()};void 0!==h.formatoptions&&(j=$.extend(j,h.formatoptions)),void 0!==g.editOptions&&(j.editOptions=g.editOptions),void 0!==g.delOptions&&(j.delOptions=g.delOptions),b.hasClass("jqgrid-new-row")&&(j.extraparam[g.prmNames.oper]=g.prmNames.addoper);var m={keys:j.keys,oneditfunc:j.onEdit,successfunc:j.onSuccess,url:j.url,extraparam:j.extraparam,aftersavefunc:k,errorfunc:j.onError,afterrestorefunc:l,restoreAfterError:j.restoreAfterError,mtype:j.mtype};switch(a){case"edit":e.jqGrid("editRow",c,m),i.find("div.ui-inline-edit,div.ui-inline-del").hide(),i.find("div.ui-inline-save,div.ui-inline-cancel").show(),e.triggerHandler("jqGridAfterGridComplete");break;case"save":e.jqGrid("saveRow",c,m)&&(i.find("div.ui-inline-edit,div.ui-inline-del").show(),i.find("div.ui-inline-save,div.ui-inline-cancel").hide(),e.triggerHandler("jqGridAfterGridComplete"));break;case"cancel":e.jqGrid("restoreRow",c,l),i.find("div.ui-inline-edit,div.ui-inline-del").show(),i.find("div.ui-inline-save,div.ui-inline-cancel").hide(),e.triggerHandler("jqGridAfterGridComplete");break;case"del":e.jqGrid("delGridRow",c,j.delOptions);break;case"formedit":e.jqGrid("setSelection",c),e.jqGrid("editGridRow",c,j.editOptions)}},$.fn.fmatter.actions=function(a,b){var c,d={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},e=b.rowId,f="",g=$.jgrid.getRegional(this,"nav"),h=$.jgrid.styleUI[b.styleUI||"jQueryUI"].fmatter,i=$.jgrid.styleUI[b.styleUI||"jQueryUI"].common;if(void 0!==b.colModel.formatoptions&&(d=$.extend(d,b.colModel.formatoptions)),void 0===e||$.fmatter.isEmpty(e))return"";var j="onmouseover=jQuery(this).addClass('"+i.hover+"'); onmouseout=jQuery(this).removeClass('"+i.hover+"');  ";return d.editformbutton?(c="id='jEditButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); "+j,f+="<div title='"+g.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+c+"><span class='"+i.icon_base+" "+h.icon_edit+"'></span></div>"):d.editbutton&&(c="id='jEditButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); "+j,f+="<div title='"+g.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+c+"><span class='"+i.icon_base+" "+h.icon_edit+"'></span></div>"),d.delbutton&&(c="id='jDeleteButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); "+j,f+="<div title='"+g.deltitle+"' style='float:left;' class='ui-pg-div ui-inline-del' "+c+"><span class='"+i.icon_base+" "+h.icon_del+"'></span></div>"),c="id='jSaveButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); "+j,f+="<div title='"+g.savetitle+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+c+"><span class='"+i.icon_base+" "+h.icon_save+"'></span></div>",
c="id='jCancelButton_"+e+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); "+j,f+="<div title='"+g.canceltitle+"' style='float:left;display:none;' class='ui-pg-div ui-inline-cancel' "+c+"><span class='"+i.icon_base+" "+h.icon_cancel+"'></span></div>","<div style='margin-left:8px;'>"+f+"</div>"},$.unformat=function(a,b,c,d){var e,f,g=b.colModel.formatter,h=b.colModel.formatoptions||{},i=/([\.\*\_\'\(\)\{\}\+\?\\])/g,j=b.colModel.unformat||$.fn.fmatter[g]&&$.fn.fmatter[g].unformat;if(void 0!==j&&$.isFunction(j))e=j.call(this,$(a).text(),b,a);else if(void 0!==g&&$.fmatter.isString(g)){var k,l=$.jgrid.getRegional(this,"formatter")||{};switch(g){case"integer":h=$.extend({},l.integer,h),f=h.thousandsSeparator.replace(i,"\\$1"),k=new RegExp(f,"g"),e=$(a).text().replace(k,"");break;case"number":h=$.extend({},l.number,h),f=h.thousandsSeparator.replace(i,"\\$1"),k=new RegExp(f,"g"),e=$(a).text().replace(k,"").replace(h.decimalSeparator,".");break;case"currency":h=$.extend({},l.currency,h),f=h.thousandsSeparator.replace(i,"\\$1"),k=new RegExp(f,"g"),e=$(a).text(),h.prefix&&h.prefix.length&&(e=e.substr(h.prefix.length)),h.suffix&&h.suffix.length&&(e=e.substr(0,e.length-h.suffix.length)),e=e.replace(k,"").replace(h.decimalSeparator,".");break;case"checkbox":var m=b.colModel.editoptions?b.colModel.editoptions.value.split(":"):["Yes","No"];e=$("input",a).is(":checked")?m[0]:m[1];break;case"select":e=$.unformat.select(a,b,c,d);break;case"actions":return"";default:e=$(a).text()}}return void 0!==e?e:d===!0?$(a).text():$.jgrid.htmlDecode($(a).html())},$.unformat.select=function(a,b,c,d){var e=[],f=$(a).text();if(d===!0)return f;var g=$.extend({},void 0!==b.colModel.formatoptions?b.colModel.formatoptions:b.colModel.editoptions),h=void 0===g.separator?":":g.separator,i=void 0===g.delimiter?";":g.delimiter;if(g.value){var j,k=g.value,l=g.multiple===!0?!0:!1,m=[];if(l&&(m=f.split(","),m=$.map(m,function(a){return $.trim(a)})),$.fmatter.isString(k)){var n,o=k.split(i),p=0;for(n=0;n<o.length;n++)if(j=o[n].split(h),j.length>2&&(j[1]=$.map(j,function(a,b){return b>0?a:void 0}).join(h)),l)$.inArray($.trim(j[1]),m)>-1&&(e[p]=j[0],p++);else if($.trim(j[1])===$.trim(f)){e[0]=j[0];break}}else($.fmatter.isObject(k)||$.isArray(k))&&(l||(m[0]=f),e=$.map(m,function(a){var b;return $.each(k,function(c,d){return d===a?(b=c,!1):void 0}),void 0!==b?b:void 0}));return e.join(", ")}return f||""},$.unformat.date=function(a,b){var c=$.jgrid.getRegional(this,"formatter.date")||{};return void 0!==b.formatoptions&&(c=$.extend({},c,b.formatoptions)),$.fmatter.isEmpty(a)?$.fn.fmatter.defaultFormat(a,b):$.jgrid.parseDate.call(this,c.newformat,a,c.srcformat,c)};var dragging,placeholders=$();$.fn.html5sortable=function(a){var b=String(a);return a=$.extend({connectWith:!1},a),this.each(function(){if(/^enable|disable|destroy$/.test(b)){var c=$(this).children($(this).data("items")).attr("draggable","enable"===b);return void("destroy"===b&&c.add(this).removeData("connectWith items").off("dragstart.h5s dragend.h5s selectstart.h5s dragover.h5s dragenter.h5s drop.h5s"))}var d,e,c=$(this).children(a.items),f=$("<"+(/^ul|ol$/i.test(this.tagName)?"li":/^tbody$/i.test(this.tagName)?"tr":"div")+' class="sortable-placeholder '+a.placeholderClass+'">').html("&nbsp;");c.find(a.handle).mousedown(function(){d=!0}).mouseup(function(){d=!1}),$(this).data("items",a.items),placeholders=placeholders.add(f),a.connectWith&&$(a.connectWith).add(this).data("connectWith",a.connectWith),c.attr("draggable","true").on("dragstart.h5s",function(b){if(a.handle&&!d)return!1;d=!1;var c=b.originalEvent.dataTransfer;c.effectAllowed="move",c.setData("Text","dummy"),e=(dragging=$(this)).addClass("sortable-dragging").index()}).on("dragend.h5s",function(){dragging&&(dragging.removeClass("sortable-dragging").show(),placeholders.detach(),e!==dragging.index()&&dragging.parent().trigger("sortupdate",{item:dragging,startindex:e,endindex:dragging.index()}),dragging=null)}).not("a[href], img").on("selectstart.h5s",function(){return this.dragDrop&&this.dragDrop(),!1}).end().add([this,f]).on("dragover.h5s dragenter.h5s drop.h5s",function(b){return c.is(dragging)||a.connectWith===$(dragging).parent().data("connectWith")?"drop"===b.type?(b.stopPropagation(),placeholders.filter(":visible").after(dragging),dragging.trigger("dragend.h5s"),!1):(b.preventDefault(),b.originalEvent.dataTransfer.dropEffect="move",c.is(this)?(a.forcePlaceholderSize&&f.height(dragging.outerHeight()),dragging.hide(),$(this)[f.index()<$(this).index()?"after":"before"](f),placeholders.not(f).detach()):placeholders.is(this)||$(this).children(a.items).length||(placeholders.detach(),$(this).append(f)),!1):!0})})},window.jqGridUtils={stringify:function(a){return JSON.stringify(a,function(a,b){return"function"==typeof b?b.toString():b})},parse:function(str){return JSON.parse(str,function(key,value){return"string"==typeof value&&-1!==value.indexOf("function")?eval("("+value+")"):value})},encode:function(a){return String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},jsonToXML:function(a,b){var c=$.extend({xmlDecl:'<?xml version="1.0" encoding="UTF-8" ?>\n',attr_prefix:"-",encode:!0},b||{}),d=this,e=function(a,b){return"#text"===a?c.encode?d.encode(b):b:"function"==typeof b?"<"+a+"><![CDATA["+b+"]]></"+a+">\n":""===b?"<"+a+">__EMPTY_STRING_</"+a+">\n":"<"+a+">"+(c.encode?d.encode(b):b)+"</"+a+">\n"},f=function(a,b){for(var c=[],d=0;d<b.length;d++){var h=b[d];"undefined"==typeof h||null==h?c[c.length]="<"+a+" />":"object"==typeof h&&h.constructor==Array?c[c.length]=f(a,h):"object"==typeof h?c[c.length]=g(a,h):c[c.length]=e(a,h)}return c.length||(c[0]="<"+a+">__EMPTY_ARRAY_</"+a+">\n"),c.join("")},g=function(a,b){var h=[],i=[];for(var j in b)if(b.hasOwnProperty(j)){var k=b[j];j.charAt(0)!==c.attr_prefix?null==k?h[h.length]="<"+j+" />":"object"==typeof k&&k.constructor===Array?h[h.length]=f(j,k):"object"==typeof k?h[h.length]=g(j,k):h[h.length]=e(j,k):i[i.length]=" "+j.substring(1)+'="'+(c.encode?d.encode(k):k)+'"'}var l=i.join(""),m=h.join("");return null==a||(m=h.length>0?m.match(/\n/)?"<"+a+l+">\n"+m+"</"+a+">\n":"<"+a+l+">"+m+"</"+a+">\n":"<"+a+l+" />\n"),m},h=g(null,a);return c.xmlDecl+h},xmlToJSON:function(root,options){var o=$.extend({force_array:[],attr_prefix:"-"},options||{});if(root){var __force_array={};if(o.force_array)for(var i=0;i<o.force_array.length;i++)__force_array[o.force_array[i]]=1;"string"==typeof root&&(root=$.parseXML(root)),root.documentElement&&(root=root.documentElement);var addNode=function(hash,key,cnts,val){if("string"==typeof val)if(-1!==val.indexOf("function"))val=eval("("+val+")");else switch(val){case"__EMPTY_ARRAY_":val=[];break;case"__EMPTY_STRING_":val="";break;case"false":val=!1;break;case"true":val=!0}__force_array[key]?(1===cnts&&(hash[key]=[]),hash[key][hash[key].length]=val):1===cnts?hash[key]=val:2===cnts?hash[key]=[hash[key],val]:hash[key][hash[key].length]=val},parseElement=function(a){if(7!==a.nodeType){if(3===a.nodeType||4===a.nodeType){var b=a.nodeValue.match(/[^\x00-\x20]/);if(null==b)return;return a.nodeValue}var c,d,e,f,g={};if(a.attributes&&a.attributes.length)for(c={},d=0;d<a.attributes.length;d++)e=a.attributes[d].nodeName,"string"==typeof e&&(f=a.attributes[d].nodeValue,f&&(e=o.attr_prefix+e,"undefined"==typeof g[e]&&(g[e]=0),g[e]++,addNode(c,e,g[e],f)));if(a.childNodes&&a.childNodes.length){var h=!0;for(c&&(h=!1),d=0;d<a.childNodes.length&&h;d++){var i=a.childNodes[d].nodeType;3!==i&&4!==i&&(h=!1)}if(h)for(c||(c=""),d=0;d<a.childNodes.length;d++)c+=a.childNodes[d].nodeValue;else for(c||(c={}),d=0;d<a.childNodes.length;d++)e=a.childNodes[d].nodeName,"string"==typeof e&&(f=parseElement(a.childNodes[d]),f&&("undefined"==typeof g[e]&&(g[e]=0),g[e]++,addNode(c,e,g[e],f)))}return c}},json=parseElement(root);if(__force_array[root.nodeName]&&(json=[json]),11!==root.nodeType){var tmp={};tmp[root.nodeName]=json,json=tmp}return json}}}});
//# sourceMappingURL=jquery.jqGrid.min.js.map
AmCharts.makeChart("chartdiv", {
    type: "serial",
    titles: [{
        size: 15,
        text: "Project Total Transcription Activity"
    }],
    path: "/amcharts",
    fontSize: 12,
    marginTop: 10,
    categoryField: 'day',
    categoryAxis: {
        gridAlpha: 0.07,
        axisColor: "#DADADA",
        startOnAxis: true,
        title: "Days elapsed"
    },
    chartCursor: {
        cursorAlpha: 1
    },
    responsive: {enabled: true},
    svgIcons: false,
    chartScrollbar: {
        color: "FFFFFF",
        dragIcon: "dragIconRoundSmall.png"
    },
    valueAxes: [{
        id: "a1",
        stackType: "regular",
        gridAlpha: 0.07,
        position: 'right',
        title: "Number of Transcriptions"
    }, {
        id: 'a2',
        gridAlpha: 0.07,
        stackType: "regular",
        position: "left",
        title: "Number of Transcriptions",
        includeHidden: true
    }],
    "dataLoader": {
        "url": "/project/" + $("#projectId").val() + "/chart",
        "format": "json",
        "showErrors": true,
        "postProcess": function (data, config, chart) {
            var graphs = []
                , hidden_graphs = []
                , collections = []
                , chartData = []
                , current_day;
            //prepare the data for consumption by amcharts
            for (var i = 0; i < data.length; i++) {
                var item = data[i]
                    , collection = item.collection
                    , count = item.count
                    , day = item.day
                    , obj;
                if (collection != "" && typeof(collection) != 'undefined'){
                    if (collections.indexOf(collection) === -1 && collection != "") collections.push(collection);
                    if (current_day != day && typeof(day) != "undefined") {
                        if (obj) chartData.push(obj);
                        obj = {};
                        current_day = day;
                        obj["day"] = day;
                    }
                    if (typeof(count) != 'undefined'){
                        obj[collection] = count;
                    }
                    if (i+1 == data.length) {
                        chartData.push(obj)
                    } //make sure we push last item if it's there
                }
            }
            /////////////////////////////////////
            //create a graph for each collection
            /////////////////////////////////////
            for (var i = 0; i < collections.length; i++) {
                var col = collections[i];
                if (col != "") {
                    graphs.push({
                        valueAxis: "a1",
                        type: "line",
                        title: col,
                        lineAlpha: 0,
                        valueField: col,
                        fillAlphas: 0.6,
                        balloonText: "[[title]] - [[value]] out of [[total]] total"
                    })
                    hidden_graphs.push({
                        valueAxis: "a2",
                        type: "line",
                        title: col,
                        hidden: false,
                        visibleInLegend: false,
                        categoryBalloonAlpha: 0,
                        //cursorAlpha: 0,
                        lineAlpha: 0,
                        lineColor: '',
                        valueField: col,
                        fillAlphas: 0,
                        balloonText: ""
                    })
                }
            }
            chart.graphs = graphs.concat(hidden_graphs);
            //////////////////////////////////////////
            // if any of the data is missing a collection, set
            // that collections count to zero
            //////////////////////////////////////////
            for (var i = 0; i < chartData.length; i++) {
                var data = chartData[i];
                collections.forEach(function (col) {
                    if (!data.hasOwnProperty(col)) {
                        data[col] = 0
                    }
                })
            }
            return chartData;
        }
    },
    legend: {
        maxColumns: 1,
        position: "bottom",
        labelText: "[[title]]",
        valueText: "[[value]] transcriptions of [[total]] total in [[category]] day(s)",
        valueWidth: 100,
        valueAlign: "left",
        equalWidths: true,
        periodValueText: "Total: [[value.high]]"
    }
});
$(document).ready(function() {

    $('.toggle').on('click', function () {
        if ($(this).hasClass('fa-folder')) {
            $(this).removeClass("fa-folder").addClass("fa-folder-open");
            var curRow = $(this).closest('tr');
            var newRow = '<tr class="ajax-rows"><td></td><td colspan="4"><span id="row'+this.id+'"></span></td></tr>';
            curRow.after(newRow);
            $("#row"+this.id).load("/projects/"+this.id+"/expeditions");
        } else {
            $(this).removeClass("fa-folder-open").addClass("fa-folder");
            $(this).closest('tr').next('tr').remove();
        }
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

    $(".table-sort").bind("sortStart",function() {
        $('.ajax-rows').remove();
        $('.toggle').removeClass("fa-folder-open").addClass("fa-folder");
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
    
    $('#processes').click(function() {
        $('#processModal')
            .prop('class', 'modal fade') // revert to default
            .addClass('left');
        $('#processModal').modal('show');
    });

    $('a.noClick').click(function(event){
        $.get( "/poll");
        event.preventDefault();
    });
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

$.jgrid.defaults.width = 780;
$.jgrid.defaults.responsive = true;
$.jgrid.defaults.styleUI = 'Bootstrap';
$.jgrid.cellattr = $.jgrid.cellattr || {};
$.extend($.jgrid.cellattr, {
    addDataAttr: function (rowId, cellVal, rawObject, cm, rdata) {
        return 'data-toggle="modal" data-target="#jqGridModal"';
    }
});

var Grid = {};

$(function () {
    if ($("#jqGridModal").length > 0) {
        'use strict';
        Grid.loadSate = false;
        Grid.id = $(".jgrid").prop('id');
        Grid.obj = $("#" + Grid.id);
        Grid.project = $("#projectId").val();
        Grid.subjectCountHtmlObj = $('#subjectCountHtml');
        Grid.subjectCountObj = $('#subjectCount');
        Grid.subjectIdsObj = $('#subjectIds');
        Grid.subjectIds = Grid.subjectIdsObj.length > 0 ?
            (Grid.subjectIdsObj.val().length == 0 ? [] : Grid.subjectIdsObj.val().split(',')) : '';
        $.ajax({
            type: "GET",
            url: "/projects/" + Grid.project + "/grids/load",
            dataType: "json",
            success: jqBuildGrid()
        });
    }
});

function jqBuildGrid() {

    return function (result) {
        var cm = result.colModel;
        mapFormatter(cm);
        var url = $('#url').val();
        Grid.obj.jqGrid({
            jsonReader: {
                repeatitems: false,
                root: "rows",
                page: "page",
                total: "total",
                records: "records",
                cell: "",
                id: "_id"
            },
            url: url,
            mtype: "GET",
            datatype: "json",
            page: 1,
            colNames: result.colNames,
            colModel: cm,
            rowNum: 10,
            gridview: true,
            rowList: [10, 20, 50, 100, 500, 1000],
            multiSort: true,
            sortable: true,
            sortorder: 'asc',
            mulitpleSearch: true,
            multiselect: true,
            multiboxonly: true,
            viewrecords: true,
            shrinkToFit: true,
            autowidth: true,
            storeNavOptions: true,
            height: '100%',
            pager: "#pager",
            beforeSelectRow: function (id, event) {
                return handleCellSelect(id, event);
            },
            onSelectRow: function (id, isSelected) {
                if (switchCbColumn()) return;

                updateIdsOfSelectedRows(id, isSelected);
            },
            onSelectAll: function (rowIds, isSelected) {
                if (switchCbColumn()) return;

                var i, count, id;
                for (i = 0, count = rowIds.length; i < count; i++) {
                    id = rowIds[i];
                    updateIdsOfSelectedRows(id, isSelected);
                }
            },
            loadComplete: function () {
                setPreviewLinks();

                if(switchCbColumn() || Grid.loadSate) return;

                setMultipleSelect();
            }

        }).navGrid("#pager", {
                search: true, // show search button on the toolbar
                add: false,
                edit: false,
                del: false,
                refresh: true,
                closeOnEscape: true,
                closeAfterSearch: true,
                overlay: true
            },
            {}, // edit options
            {}, // add options
            {}, // delete options
            {
                width: 600,
                multipleSearch: true,
                recreateFilter: true
            } // search options - define multiple search
        ).navButtonAdd('#pager', {
            caption: '',
            buttonicon: "glyphicon glyphicon-list",
            title: "Choose columns",
            onClickButton: function () {
                Grid.obj.jqGrid('columnChooser', {
                    classname: "columnChooser",
                    modal: true,
                    width: 500,
                    done: function (perm) {
                        if (perm) {
                            this.jqGrid("remapColumns", perm, true);
                        }
                    }
                });
            }
        }).navButtonAdd('#pager', {
            caption: '',
            buttonicon: "glyphicon glyphicon-remove",
            title: "Clear saved grid's settings",
            onClickButton: function () {
                localStorage.clear();
                window.location.reload();
            }
        });

        $('#savestate').click(function (event) {
            event.preventDefault();
            $.jgrid.saveState(Grid.id);
        });

        $('#loadstate').click(function (event) {
            event.preventDefault();
            Grid.loadSate = true;
            $.jgrid.loadState(Grid.id);
            setMultipleSelect();
        });
    };
}

/**
 * Switch checkbox column
 * Must re-declare grid id object for loadState
 * @returns {boolean}
 */
function switchCbColumn() {
    if ($("#showCb").val() == 0) {
        $('#' + Grid.id).jqGrid('hideCol', 'cb');
        return true;
    }

    return false;
}

/**
 * Handle select event for preview cells
 * @param id
 * @param event
 * @returns {boolean}
 */
function handleCellSelect(id, event){
    if (event.target.className == 'ocrPreview') {
        $('#model-body').html($(event.target).text());
        return false;
    }

    if(event.target.className == 'thumbPreview') {
        return false;
    }

    return true;
}

/**
 * Map formatter
 * @param column
 */
function mapFormatter(column) {
    var functionsMapping = {
        "imagePreview": function (cellValue, opts, rowObjects) {
            var url = encodeURIComponent(cellValue);
            return '<a href="' + cellValue + '" target="_new">View Image</a>&nbsp;&nbsp;'
                + '<a href="/images/preview?url=' + url + '" class="thumb-view">View Thumb</a>&nbsp;&nbsp;'
                + '<a href="' + cellValue + '" class="url-view">View Url</a>';
        }
    };

    for (var i = 0; i < column.length; i++) {
        var col = column[i];
        if (col.hasOwnProperty("formatter") &&
            functionsMapping.hasOwnProperty(col.formatter)) {
            col.formatter = functionsMapping[col.formatter];
        }
    }
}

/**
 * Set selected rows
 * Must re-declare grid object for loadState and handle it
 * differently due to ids not being
 */
function setMultipleSelect() {
    var $grid = $('#' + Grid.id);
    var ids = $grid.jqGrid('getDataIDs');
    for (var x = 0; x < ids.length; x++) {
        if ( ! Grid.loadSate) {
            var index = $.inArray(ids[x], Grid.subjectIds);
            if (index >= 0) {
                var row = $grid.jqGrid('getRowData', ids[x]);
                if (row.expedition_ids == "Yes") {
                    $grid.setSelection(ids[x]);
                }
            }
        } else {
            if ($('#' + ids[x]).hasClass("success")) {
                $('#' + ids[x] + ' input[type=checkbox]').prop('checked', true);
                updateIdsOfSelectedRows(ids[x], true);
            }
        }
    }
    Grid.loadSate = false;
}

/**
 * Update ids for selected rows
 * @param id
 * @param isSelected
 */
function updateIdsOfSelectedRows(id, isSelected) {
    var index = $.inArray(id, Grid.subjectIds);
    if (!isSelected && index >= 0) {
        Grid.subjectIds = $.grep(Grid.subjectIds, function (val) {
            return val != id;
        });
    } else if (index < 0) {
        Grid.subjectIds.push(id);
    }
    Grid.subjectIdsObj.val(Grid.subjectIds);
    if (Grid.subjectIds.length > 1000) {
        $('#max').addClass('red');
    }
    Grid.subjectCountHtmlObj.html(Grid.subjectIds.length);
    Grid.subjectCountObj.val(Grid.subjectIds.length);
}

/**
 * Set preview links
 * Must re-declare grid object id for loadState
 */
function setPreviewLinks() {
    $('#' + Grid.id).on("click", 'a.thumb-view', function (event) {
        event.preventDefault();
        $.ajax({
                url: $(event.target).attr('href'),
                beforeSend: function (xhr) {
                    $('.loading').show();
                }
            })
            .done(function (data) {
                $('#model-body').html(data);
                $('.loading').hide();
                $('#jqGridModal').modal('show');
            });
    }).on("click", 'a.url-view', function (event) {
        event.preventDefault();
        $('#model-body').html($(event.target).attr('href'));
        $('#jqGridModal').modal('show');
    });
}

//# sourceMappingURL=biospex.js.map
