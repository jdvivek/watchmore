
//For Desktop Working fine
//Make a Global Object 


try
{

window.jwcplyr=null;
 
	
	
	 //check Untill It's Blank
	var playerInterval= setInterval(function(){ 
		
			window.jwcplyr=CGetPlayer();
			if(window.jwcplyr!==null)
			{	
				
				clearInterval(playerInterval);	
				CStartPlayerWork(window.jwcplyr);
			}

	 }, 1000);	 
	 

 
 //Register Player Event
 function CStartPlayerWork(playerInstance)
 {
	 playerInstance.once('play', function() {
	
		
			var resumeTime=CGetSeekTime();
			if(resumeTime!=="0")
			{
				
				playerInstance.seek(resumeTime);
			}
			return;
		 
	});

  playerInstance.on('time', function(e) {
	  
	  if(Math.floor(e.position)>3)
	  {
	  localStorage.setItem(window.location.href, `${Math.floor(e.position)}:${playerInstance.getDuration()}`);
	  }
	 
	  
	});
	 
 }
 
 //Get Time From Local Storage
 function CGetSeekTime()
 {
		
		  var resumeMovieVideoData = localStorage.getItem(window.location.href);
		  if (!resumeMovieVideoData) {
			   return "0";
		  }
		  else
		  {
			  var [ resumeAt, duration ] = resumeMovieVideoData.split(':');
			  if (resumeAt < duration) {
				
				return  resumeAt;
			  }
			  else
			  {
				return "0";  
			  }
		 }
 }
 
 //Get Player
function CGetPlayer()
{
	
	try
	{
	if(window.jwplayer!==undefined)
	{
		return window.jwplayer();	
	}
	else if(document.getElementsByTagName('iframe').length>0&&document.getElementsByTagName('iframe')[0].contentWindow.jwplayer!==undefined)
	{
		return  document.getElementsByTagName('iframe')[0].contentWindow.jwplayer();
	}
	else{
		return null;
	}
	}
	catch(ex)
	{
		console.log(ex);
		return null;
	}
	
}

}
catch(ex)
{
	alert(ex);
	
}




