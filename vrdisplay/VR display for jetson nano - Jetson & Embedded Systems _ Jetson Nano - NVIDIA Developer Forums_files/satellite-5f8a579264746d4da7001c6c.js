_satellite.pushAsyncScript(function(event, target, $variables){
  try{
if(typeof s!=='undefined'){if(s.eVar45!==_satellite.getVar("pageName")){
s.pageName=_satellite.getVar("pageName");
s.server=_satellite.getVar("hostName");
s.pageURL=_satellite.getVar("fullURL"); 
s.eVar2=_satellite.getVar("fullURL");  
s.prop2="D=v2"
s.eVar1="D=pageName";
s.prop1="D=v1";
s.events='event1';
  s.eVar10=s.prop10='';
  s.eVar29=s.prop29='';
  s.eVar30=s.prop30='';
if(document.getElementsByClassName('modules-core-components-ProfileMenu-___profile-menu__user___o9p3I').length==1)
{
s.eVar5='logged-in';
s.prop5='D=v5';
 // if(s.pageName.indexOf('dashboard')>-1){console.log(_setFlagVal);if(_setFlagVal){s.events='event1,event5';_setFlagVal=false;}}
}else{s.eVar5='guest';}
  
  
var aa_url=window.location.href;
var ls_aa_url=localStorage.getItem('aa_event_url');
   const aa_event = localStorage.getItem('aa_event');
  if(aa_event!='triggered' || aa_url!=ls_aa_url){
    localStorage.setItem('aa_event_url', aa_url);    
		s.t();
   	localStorage.setItem('aa_event', 'triggered');
  }
  else{
    return false;
		localStorage.setItem('aa_event', '');
  }


  
  
  
}}
}catch(e){}
});
