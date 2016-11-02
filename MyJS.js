   var menu='<ul id=tafrit1 class=menu>' +
   '<li class="home" style="width : 198px ; display : inline-block"><a href="index.html" >דף הבית</a>' +
   '<li ><a href="books.html" >על הספרים</a>' +
	'<ul class=submenu >' +
		'<li><a href="books.html" >כללי</a>' +
		'<li><a href="prologue.html">פרולוג לסדרה</a>' +
	'</ul>' +
   '<li ><a href="characters.html" >על הדמויות</a>' +
	'<ul  class=submenu >' +
		'<li ><a href="characters.html" >כללי</a>' +
		'<li ><a href="kutallo.html">קוטאלו</a>' +
		'<li><a href="sapiente.html">ספיינטה</a>' +
		'<li><a href="orulla.html">אורולה</a>' +
		'<li><a href="largon.html">לארגון</a>' +
		'<li ><a href="feiron.html">פיירון</a>' +
		'<li><a href="tyron.html">טיירון</a>' +
		'<li><a href="salintar.html">סאלינטר</a>' +
		'<li><a href="gramir.html">גראמיר</a>' +

	'</ul>' +
  '<li><a href="world.html">על העולם</a>' +
  '<ul  class=submenu >' +
 	'<li style="margin-bottom : 5px"><a href="world.html">כללי</a>' +
	'<li><a href="rothmeereen.html">Rothmeereen והארצות הצעירות</a>' +
	'<li><a href="rothereese.html">Rothereese הארצות הוותיקות</a>' +
	'<li><a href="magic.html">הקסם וצבעיו</a>' +
	'<li><a href="gods.html">על האלים</a>' +
  '</ul>' +

 '<li><a href="galleries.html">גלריות</a>' +
	'<ul class=submenu>'+
		'<li style="margin-bottom : 5px"><a href="galleries.html">כללי</a>' +
		'<li><a href="characterphotos.html">תמונות הדמויות</a>'+
		'<li><a href="otherphotos.html">תמונות נוספות</a>'+
	'</ul>'+
  '<li ><a href="about.html" >על הסופר</a>' +
	'<ul class=submenu>'+
		'<li><a href="about.html">מי אני</a>' +
		'<li><a href="writing.html">על כתיבת הספר</a>' +
	'</ul>'+
 '<li class="cont"style="border-left : none"><a href="contact.html" >צור קשר</a>' +
 '</ul>'

 
 
 function mark() {
	page=window.location.href ;// page url
	var obj=document.getElementById("tafrit1") ;
	var elements = obj.getElementsByTagName("a");// Array of links  main & secodary

	for (i=elements.length-1;  i> 0 ; i--) {
	var kuku=page.indexOf(elements[i].href) ;
	if (kuku >= 0 ) break ; }  //
	elements[i].className = 'current';

	var objli=elements[i].parentNode.parentNode ;
	if  (objli.id=="tafrit1"){elements[i].parentNode.className='current';return }
	document.getElementById("side").innerHTML=objli.innerHTML ;
	objli.parentNode.className = 'current';
}

 function formValidation(){
		var NameLocal=document.getElementById("Name") ; 
		NameLocal.setCustomValidity("");
		if (NameLocal.value=="") 
		{ 
			NameLocal.setCustomValidity("אנא הכנס את שמך") ; 
			return false ;
		} 
		
		 var emailLocal=document.getElementById("email") ;
		 emailLocal.setCustomValidity("");		
		 if (emailLocal.value=="") 
		 { 
			 emailLocal.setCustomValidity("אנא הכנס כתובת מייל") ; 
			 return false ;
		 }
		 emailLocal.setCustomValidity("");	
		 if (emailLocal.value.indexOf("@")==-1) 
		 { 
			 emailLocal.setCustomValidity("אנא הכנס כתובת מייל תקנית") ; 
			 return false ;
		 }	
		
		 var NameLocal3=document.getElementById("ReasonToContact") ; 
		 NameLocal3.setCustomValidity("");		
		 if (NameLocal3.value=="") 
		 { 
			 NameLocal3.setCustomValidity("אנא מלא את פנייתך.") ; 
			 return false ;
		 }
		document.myForm.submit(); 
 }