// Vendor
/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/
;if("document" in self&&!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false;do{r=t[s]+"";var q=g(this,r);if(q!==-1){this.splice(q,1);o=true}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}return !o};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))};

// Generated by CoffeeScript 1.9.3
(function(){var e;e=function(){function e(e,t){var n,r;this.options={target:"instafeed",get:"popular",resolution:"thumbnail",sortBy:"none",links:!0,mock:!1,useHttp:!1};if(typeof e=="object")for(n in e)r=e[n],this.options[n]=r;this.context=t!=null?t:this,this.unique=this._genKey()}return e.prototype.hasNext=function(){return typeof this.context.nextUrl=="string"&&this.context.nextUrl.length>0},e.prototype.next=function(){return this.hasNext()?this.run(this.context.nextUrl):!1},e.prototype.run=function(t){var n,r,i;if(typeof this.options.clientId!="string"&&typeof this.options.accessToken!="string")throw new Error("Missing clientId or accessToken.");if(typeof this.options.accessToken!="string"&&typeof this.options.clientId!="string")throw new Error("Missing clientId or accessToken.");return this.options.before!=null&&typeof this.options.before=="function"&&this.options.before.call(this),typeof document!="undefined"&&document!==null&&(i=document.createElement("script"),i.id="instafeed-fetcher",i.src=t||this._buildUrl(),n=document.getElementsByTagName("head"),n[0].appendChild(i),r="instafeedCache"+this.unique,window[r]=new e(this.options,this),window[r].unique=this.unique),!0},e.prototype.parse=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D;if(typeof e!="object"){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"Invalid JSON data"),!1;throw new Error("Invalid JSON response")}if(e.meta.code!==200){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,e.meta.error_message),!1;throw new Error("Error from Instagram: "+e.meta.error_message)}if(e.data.length===0){if(this.options.error!=null&&typeof this.options.error=="function")return this.options.error.call(this,"No images were returned from Instagram"),!1;throw new Error("No images were returned from Instagram")}this.options.success!=null&&typeof this.options.success=="function"&&this.options.success.call(this,e),this.context.nextUrl="",e.pagination!=null&&(this.context.nextUrl=e.pagination.next_url);if(this.options.sortBy!=="none"){this.options.sortBy==="random"?M=["","random"]:M=this.options.sortBy.split("-"),O=M[0]==="least"?!0:!1;switch(M[1]){case"random":e.data.sort(function(){return.5-Math.random()});break;case"recent":e.data=this._sortBy(e.data,"created_time",O);break;case"liked":e.data=this._sortBy(e.data,"likes.count",O);break;case"commented":e.data=this._sortBy(e.data,"comments.count",O);break;default:throw new Error("Invalid option for sortBy: '"+this.options.sortBy+"'.")}}if(typeof document!="undefined"&&document!==null&&this.options.mock===!1){m=e.data,A=parseInt(this.options.limit,10),this.options.limit!=null&&m.length>A&&(m=m.slice(0,A)),u=document.createDocumentFragment(),this.options.filter!=null&&typeof this.options.filter=="function"&&(m=this._filter(m,this.options.filter));if(this.options.template!=null&&typeof this.options.template=="string"){f="",d="",w="",D=document.createElement("div");for(c=0,N=m.length;c<N;c++){h=m[c],p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);E=p.width,y=p.height,b="square",E>y&&(b="landscape"),E<y&&(b="portrait"),v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),d=this._makeTemplate(this.options.template,{model:h,id:h.id,link:h.link,type:h.type,image:v,width:E,height:y,orientation:b,caption:this._getObjectProperty(h,"caption.text"),likes:h.likes.count,comments:h.comments.count,location:this._getObjectProperty(h,"location.name")}),f+=d}D.innerHTML=f,i=[],r=0,n=D.childNodes.length;while(r<n)i.push(D.childNodes[r]),r+=1;for(x=0,C=i.length;x<C;x++)L=i[x],u.appendChild(L)}else for(T=0,k=m.length;T<k;T++){h=m[T],g=document.createElement("img"),p=h.images[this.options.resolution];if(typeof p!="object")throw o="No image found for resolution: "+this.options.resolution+".",new Error(o);v=p.url,l=window.location.protocol.indexOf("http")>=0,l&&!this.options.useHttp&&(v=v.replace(/https?:\/\//,"//")),g.src=v,this.options.links===!0?(t=document.createElement("a"),t.href=h.link,t.appendChild(g),u.appendChild(t)):u.appendChild(g)}_=this.options.target,typeof _=="string"&&(_=document.getElementById(_));if(_==null)throw o='No element with id="'+this.options.target+'" on page.',new Error(o);_.appendChild(u),a=document.getElementsByTagName("head")[0],a.removeChild(document.getElementById("instafeed-fetcher")),S="instafeedCache"+this.unique,window[S]=void 0;try{delete window[S]}catch(P){s=P}}return this.options.after!=null&&typeof this.options.after=="function"&&this.options.after.call(this),!0},e.prototype._buildUrl=function(){var e,t,n;e="https://api.instagram.com/v1";switch(this.options.get){case"popular":t="media/popular";break;case"tagged":if(!this.options.tagName)throw new Error("No tag name specified. Use the 'tagName' option.");t="tags/"+this.options.tagName+"/media/recent";break;case"location":if(!this.options.locationId)throw new Error("No location specified. Use the 'locationId' option.");t="locations/"+this.options.locationId+"/media/recent";break;case"user":if(!this.options.userId)throw new Error("No user specified. Use the 'userId' option.");t="users/"+this.options.userId+"/media/recent";break;default:throw new Error("Invalid option for get: '"+this.options.get+"'.")}return n=e+"/"+t,this.options.accessToken!=null?n+="?access_token="+this.options.accessToken:n+="?client_id="+this.options.clientId,this.options.limit!=null&&(n+="&count="+this.options.limit),n+="&callback=instafeedCache"+this.unique+".parse",n},e.prototype._genKey=function(){var e;return e=function(){return((1+Math.random())*65536|0).toString(16).substring(1)},""+e()+e()+e()+e()},e.prototype._makeTemplate=function(e,t){var n,r,i,s,o;r=/(?:\{{2})([\w\[\]\.]+)(?:\}{2})/,n=e;while(r.test(n))s=n.match(r)[1],o=(i=this._getObjectProperty(t,s))!=null?i:"",n=n.replace(r,function(){return""+o});return n},e.prototype._getObjectProperty=function(e,t){var n,r;t=t.replace(/\[(\w+)\]/g,".$1"),r=t.split(".");while(r.length){n=r.shift();if(!(e!=null&&n in e))return null;e=e[n]}return e},e.prototype._sortBy=function(e,t,n){var r;return r=function(e,r){var i,s;return i=this._getObjectProperty(e,t),s=this._getObjectProperty(r,t),n?i>s?1:-1:i<s?1:-1},e.sort(r.bind(this)),e},e.prototype._filter=function(e,t){var n,r,i,s,o;n=[],r=function(e){if(t(e))return n.push(e)};for(i=0,o=e.length;i<o;i++)s=e[i],r(s);return n},e}(),function(e,t){return typeof define=="function"&&define.amd?define([],t):typeof module=="object"&&module.exports?module.exports=t():e.Instafeed=t()}(this,function(){return e})}).call(this);
/*********************************************************************
*  #### Twitter Post Fetcher v15.0.1 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(C,p){"function"===typeof define&&define.amd?define([],p):"object"===typeof exports?module.exports=p():p()})(this,function(){function C(a){if(null===r){for(var g=a.length,c=0,k=document.getElementById(D),f="<ul>";c<g;)f+="<li>"+a[c]+"</li>",c++;k.innerHTML=f+"</ul>"}else r(a)}function p(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,c){return c}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function E(a){a=a.getElementsByTagName("a");
for(var g=a.length-1;0<=g;g--)a[g].setAttribute("target","_blank")}function l(a,g){for(var c=[],k=new RegExp("(^| )"+g+"( |$)"),f=a.getElementsByTagName("*"),h=0,b=f.length;h<b;h++)k.test(f[h].className)&&c.push(f[h]);return c}function F(a){if(void 0!==a&&0<=a.innerHTML.indexOf("data-srcset"))return a=a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(a).split('"')[1]}var D="",g=20,G=!0,v=[],x=!1,y=!0,w=!0,z=null,A=!0,B=!0,r=null,H=!0,I=!1,t=!0,J=!0,K=!1,m=null,L={fetch:function(a){void 0===
a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);void 0===a.dataOnly&&
(a.dataOnly=!1);if(x)v.push(a);else{x=!0;D=a.domId;g=a.maxTweets;G=a.enableLinks;w=a.showUser;y=a.showTime;B=a.showRetweet;z=a.dateFunction;r=a.customCallback;H=a.showInteraction;I=a.showImages;t=a.linksInNewWindow;J=a.showPermalinks;K=a.dataOnly;var l=document.getElementsByTagName("head")[0];null!==m&&l.removeChild(m);m=document.createElement("script");m.type="text/javascript";m.src="https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+
Math.random();l.appendChild(m)}},callback:function(a){function m(a){var b=a.getElementsByTagName("img")[0];b.src=b.getAttribute("data-src-2x");return a}var c=document.createElement("div");c.innerHTML=a.body;"undefined"===typeof c.getElementsByClassName&&(A=!1);a=[];var k=[],f=[],h=[],b=[],q=[],n=[],e=0;if(A)for(c=c.getElementsByClassName("timeline-Tweet");e<c.length;){0<c[e].getElementsByClassName("timeline-Tweet-retweetCredit").length?b.push(!0):b.push(!1);if(!b[e]||b[e]&&B)a.push(c[e].getElementsByClassName("timeline-Tweet-text")[0]),
q.push(c[e].getAttribute("data-tweet-id")),k.push(m(c[e].getElementsByClassName("timeline-Tweet-author")[0])),f.push(c[e].getElementsByClassName("dt-updated")[0]),n.push(c[e].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==c[e].getElementsByClassName("timeline-Tweet-media")[0]?h.push(c[e].getElementsByClassName("timeline-Tweet-media")[0]):h.push(void 0);e++}else for(c=l(c,"timeline-Tweet");e<c.length;){0<l(c[e],"timeline-Tweet-retweetCredit").length?b.push(!0):b.push(!1);if(!b[e]||
b[e]&&B)a.push(l(c[e],"timeline-Tweet-text")[0]),q.push(c[e].getAttribute("data-tweet-id")),k.push(m(l(c[e],"timeline-Tweet-author")[0])),f.push(l(c[e],"dt-updated")[0]),n.push(l(c[e],"timeline-Tweet-timestamp")[0]),void 0!==l(c[e],"timeline-Tweet-media")[0]?h.push(l(c[e],"timeline-Tweet-media")[0]):h.push(void 0);e++}a.length>g&&(a.splice(g,a.length-g),k.splice(g,k.length-g),f.splice(g,f.length-g),b.splice(g,b.length-g),h.splice(g,h.length-g),n.splice(g,n.length-g));var c=[],e=a.length,d=0;if(K)for(;d<
e;)c.push({tweet:a[d].innerHTML,author:k[d].innerHTML,time:f[d].textContent,image:F(h[d]),rt:b[d],tid:q[d],permalinkURL:void 0===n[d]?"":n[d].href}),d++;else for(;d<e;){if("string"!==typeof z){var b=f[d].getAttribute("datetime"),u=new Date(f[d].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=z(u,b);f[d].setAttribute("aria-label",b);if(a[d].textContent)if(A)f[d].textContent=b;else{var u=document.createElement("p"),r=document.createTextNode(b);u.appendChild(r);u.setAttribute("aria-label",
b);f[d]=u}else f[d].textContent=b}b="";G?(t&&(E(a[d]),w&&E(k[d])),w&&(b+='<div class="user">'+p(k[d].innerHTML)+"</div>"),b+='<p class="tweet">'+p(a[d].innerHTML)+"</p>",y&&(b=J?b+('<p class="timePosted"><a href="'+n[d]+'">'+f[d].getAttribute("aria-label")+"</a></p>"):b+('<p class="timePosted">'+f[d].getAttribute("aria-label")+"</p>"))):(w&&(b+='<p class="user">'+k[d].textContent+"</p>"),b+='<p class="tweet">'+a[d].textContent+"</p>",y&&(b+='<p class="timePosted">'+f[d].textContent+"</p>"));H&&(b+=
'<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+q[d]+'" class="twitter_reply_icon"'+(t?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+q[d]+'" class="twitter_retweet_icon"'+(t?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+q[d]+'" class="twitter_fav_icon"'+(t?' target="_blank">':">")+"Favorite</a></p>");I&&void 0!==h[d]&&(b+='<div class="media"><img src="'+F(h[d])+'" alt="Image from tweet" /></div>');
c.push(b);d++}C(c);x=!1;0<v.length&&(L.fetch(v[0]),v.splice(0,1))}};return window.twitterFetcher=L});


// SILK Modules
function halfway(parameters) {

  document.addEventListener('scroll', calculateHalfway, false);

  var windowHeight = window.innerHeight;
  var elements = document.querySelectorAll(parameters.element);
  var elementHitBoxes = [];
  var scrollTimeout;

  if(parameters.anchors) {

    var anchorSet = document.createElement('div');
    anchorSet.classList.add('pager', 'anchor-set');

    for(var i = 0; i < elements.length; i++) {

      var anchor = document.createElement('a');
      var anchorLabel = document.createElement('span');
      var elementLabel = elements[i].getAttribute('id');

      anchor.classList.add('anchor-set__point');
      anchor.setAttribute('href', '#' + elementLabel);
      anchor.addEventListener('click', offsetWindow, false);

      elementLabel = elementLabel.replace(/-/g, ' ');

      anchorLabel.innerHTML = elementLabel;
      anchorLabel.classList.add('anchor-set__label');

      anchor.appendChild(anchorLabel);

      anchorSet.appendChild(anchor);

    }

    elements[0].parentNode.appendChild(anchorSet);
    anchorSet.children[0].classList.add('indicate-halfway');

  }

  function offsetWindow(event) {

    sectionTarget = event.currentTarget.getAttribute('href');
    sectionTarget = sectionTarget.replace('#', '');
    sectionTarget = document.getElementById(sectionTarget);
    sectionTarget = sectionTarget.getBoundingClientRect();

    window.scrollBy(0, sectionTarget.top - parameters.offset);

    event.preventDefault();

  }

  function calculateHalfway() {

    for(var i = 0; i < elements.length; i++) {

      elementHitBoxes[i] = elements[i].getBoundingClientRect();

      if(elementHitBoxes[i].top <= windowHeight / 2 && elementHitBoxes[i].bottom >= windowHeight / 2) {

        if(!(elements[i].classList.contains('element-halfway'))) {
          elements[i].classList.add('element-halfway');
          document.body.classList.add('halfway-lock');
          scrollTimeout = window.setTimeout(unlockScroll, 400);
        }

        if(parameters.anchors) {
          anchorSet.children[i].classList.add('indicate-halfway');
        }

      } else {

        elements[i].classList.remove('element-halfway');

        if(parameters.anchors) {
          anchorSet.children[i].classList.remove('indicate-halfway');
        }

      }

    }

  }

  function unlockScroll() {

    document.body.classList.remove('halfway-lock');

  }

}

function harmonica(parameters) {

  var container = document.querySelector(parameters.container);
  var headings = document.querySelectorAll(parameters.container + ' ' + parameters.header);
  var currentNote;

  if(document.body.contains(container)) {

    for (var i = 0; i < headings.length; i++) {
      var openSymbolBottle = document.createElement('span');
      openSymbolBottle.classList.add('silk-harmonica__bottle');

      var openSymbolBubble = document.createElement('span');
      openSymbolBubble.classList.add('silk-harmonica__bubble');
      openSymbolBottle.appendChild(openSymbolBubble);

      var openSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      openSymbol.classList.add('silk-harmonica__symbol', 'symbol', 'symbol-plus');
      openSymbol.innerHTML = '<use xlink:href="#plus"></use>';
      openSymbolBubble.appendChild(openSymbol);
      headings[i].appendChild(openSymbolBottle);

      var closeSymbolBottle = document.createElement('span');
      closeSymbolBottle.classList.add('silk-harmonica__bottle');

      var closeSymbolBubble = document.createElement('span');
      closeSymbolBubble.classList.add('silk-harmonica__bubble');
      closeSymbolBottle.appendChild(closeSymbolBubble);

      var closeSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      closeSymbol.classList.add('silk-harmonica__symbol', 'symbol', 'symbol-minus');
      closeSymbol.innerHTML = '<use xlink:href="#minus"></use>';
      closeSymbolBubble.appendChild(closeSymbol);
      headings[i].appendChild(closeSymbolBottle);

      headings[i].addEventListener('click', toggleNote, false);
    }

    headings[0].click();

  }

  function clearClasses() {

    for (var i = 0; i < headings.length; i++) {
      headings[i].classList.remove('active');
    }

  }

  function assignClasses(currentNote) {

    currentNote.classList.add('active');

  }

  function toggleNote(event) {

    currentNote = event.currentTarget;

    if(currentNote.parentNode.classList.contains('silk-harmonica--condensed')) {

      currentNote.classList.toggle('active');

    } else {

      clearClasses(currentNote);
      assignClasses(currentNote);

    }

  }

}

function silkModal() {

  var modals = document.querySelectorAll('.silk-modal');
  var openTriggers = document.querySelectorAll('.silk-modal__trigger');
  var closeTriggers = document.querySelectorAll('.silk-modal__trigger--close');
  var videoBottles = document.querySelectorAll('.silk-modal__bottle');
  var videos = document.querySelectorAll('.silk-modal__bottle iframe');

  for(var i = 0; i < openTriggers.length; i++) {

    openTriggers[i].addEventListener('click', openModal, false);
    closeTriggers[i].addEventListener('click', closeModal, false);

  }

  function openModal() {

    document.body.classList.add('modal-triggered');
    event.currentTarget.parentNode.classList.add('event-triggered');

  }

  function closeModal() {

    document.body.classList.remove('modal-triggered');

    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove('event-triggered');
      videoBottles[i].removeChild(videos[i]);
      videoBottles[i].appendChild(videos[i]);
    }

  }

}

function silkNav() {

  var drawerTrigger = document.querySelector('.drawer__trigger');
  drawerTrigger.addEventListener('click', triggerDrawer, false);

  function triggerDrawer() {

    document.body.classList.toggle('visible-drawer');

  }

  var nav = document.querySelector('.silk-nav');
  var revertTrigger = document.querySelector('.silk-nav__trigger--revert');
  var reverseTrigger = document.querySelector('.silk-nav__trigger--reverse');
  var nestedNavs = document.querySelectorAll('.silk-nav li ul');
  var history = [];

  revertTrigger.addEventListener('click', startOver, false);
  reverseTrigger.addEventListener('click', goBack, false);

  for (var i = 0; i < nestedNavs.length; i++) {
    var tierTitle = nestedNavs[i].previousSibling.previousSibling;
    var tierTitleClone = document.createElement('a');
    tierTitleClone.setAttribute('href', tierTitle.getAttribute('href'));
    tierTitleClone.innerHTML = tierTitle.innerHTML;
    nestedNavs[i].insertBefore(tierTitleClone, nestedNavs[i].firstChild);

    var advanceTrigger = document.createElement('button');
    advanceTrigger.setAttribute('aria-hidden', 'true');
    advanceTrigger.classList.add('silk-nav__trigger', 'silk-nav__trigger--advance');
    advanceTrigger.innerHTML = '<svg class="symbol symbol-chevron-right"><use xlink:href="#chevron-right"></use></svg>';
    advanceTrigger.addEventListener('click', goForward, false);

    nestedNavs[i].parentNode.insertBefore(advanceTrigger, nestedNavs[i]);
  }

  function startOver() {

    nav.classList.remove('silk-nav--active');

    for (var i = 0; i < nestedNavs.length; i++) {
      nestedNavs[i].classList.remove('silk-nav__nest--active')
    }

    history = [];

  }

  function goBack() {

    history[history.length - 1].nextSibling.classList.remove('silk-nav__nest--active');
    history.pop();

    if(history.length == 0) {
      startOver();
    }

  }

  function goForward() {

    if(!(nav.classList.contains('silk-nav--active'))) {
      nav.classList.add('silk-nav--active');
    }

    event.currentTarget.nextSibling.classList.add('silk-nav__nest--active');

    history.push(event.currentTarget);

  }

}

function swift(parameters) {

  var container = document.querySelector(parameters.container);
  var elements = document.querySelectorAll(parameters.container + ' ' + parameters.elements);

  if(container.length) {

    var controller = document.createElement('div');
    controller.classList.add('swift-controls');
    container.appendChild(controller);

    var prev = document.createElement('button');
    prev.addEventListener('click', previousSlide, false);
    prev.classList.add('swift-control', 'swift-prev');
    prev.innerHTML = '<svg class="symbol symbol-' + parameters.prevSymbol + '"><use xlink:href="#' + parameters.prevSymbol + '"></use></svg>';
    controller.appendChild(prev);

    var next = document.createElement('button');
    next.addEventListener('click', nextSlide, false);
    next.classList.add('swift-control', 'swift-next');
    next.innerHTML = '<svg class="symbol symbol-' + parameters.nextSymbol + '"><use xlink:href="#' + parameters.nextSymbol + '"></use></svg>';
    controller.appendChild(next);

    var currentSlide = 1;

    var pager = document.createElement('div');
    pager.classList.add('swift-pager');
    container.appendChild(pager);

    var pages = [];

    for (var i = 0; i < elements.length; i++) {

      pages.push(document.createElement('span'));

      pager.appendChild(pages[i]);

      pages[i].addEventListener('click', slide.bind(null, i), false);

    }

    pages[currentSlide].click();

  }

  function clearClasses() {

    for (var i = 0; i < elements.length; i++) {
      pages[i].classList.remove('active');
      elements[i].classList.remove('active');
    }

  }

  function assignClasses(index) {

    pages[index].classList.add('active');
    elements[index].classList.add('active');

  }

  function slide(index) {

    clearClasses();
    assignClasses(index);

  }

  function previousSlide() {

    if(currentSlide === 0) {
      currentSlide = elements.length;
    }

    currentSlide = currentSlide - 1;

    slide(currentSlide);

  }

  function nextSlide() {

    if (currentSlide == elements.length - 1) {
      currentSlide = -1;
    }

    currentSlide = currentSlide + 1;

    slide(currentSlide);

  }

}

function triggerParent(parameters) {

  var triggers = document.querySelectorAll(parameters.trigger);

  if(document.body.contains(triggers[0])) {

    for(var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', toggleParentClass, false);
    }

    function toggleParentClass(event) {

      event.currentTarget.parentNode.classList.toggle('event-triggered');

    }

  }

}

