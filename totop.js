/*-----------------------    
* jQuery Plugin: Scroll to Top    
* by Craig Wilson, Ph.Creative (http://www.ph-creative.com)    
*    
* Copyright (c) 2009 Ph.Creative Ltd.    
* Description: Adds an unobtrusive &quot;Scroll to Top&quot; link to your page with smooth scrolling.    
* For usage instructions and version updates to go http://blog.ph-creative.com/post/jquery-plugin-scroll-to-top.aspx    
*    
* Version: 1.0, 12/03/2009    
-----------------------*/
$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr(&quot;href&quot;);if($(window).scrollTop()!=&quot;0&quot;){$(this).fadeIn(&quot;slow&quot;)}var   scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()==&quot;0&quot;){$(scrollDiv).fadeOut(&quot;slow&quot;)}else{$(scrollDiv).fadeIn(&quot;slow&quot;)}});$(this).click(function(){$(&quot;html,  body&quot;).animate({scrollTop:0},&quot;slow&quot;)})}});
  $(function() {  
                $(&quot;#toTop&quot;).scrollToTop();    
            });    
