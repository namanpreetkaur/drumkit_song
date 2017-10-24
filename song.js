var currentSongNumber = 1;
var willLoop = 0;
var willShuffle = 0; // will use this soon
//OBJETS: these r spcl containers and we put inside objects anything like array strings and no. also
var songs = [{                  //here we declare array of objcets and square braces are for array and curly braces for objects
        'name': 'Badri Ki Dulhania (Title Track)', 
        'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
       'fileName': 'song1.mp3',
       'image':'Badrinath-Ki-Dulhania.jpg'
    },
    {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'song2.mp3',
         'image':'humma.jpg'
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'song3.mp3',
         'image':'nashe.jpg'
    },
    {
        'name': 'The Breakup Song',
        'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'song4.mp3',
         'image':'breakup.jpg'
    }];

 function toggleSong()    //togglesong is a function.We use fn where we use same code many tym so where we want same code we  just call function not write whole code again eg:coffee maker or washingmachine  
		{
			var song = document.querySelector('audio');
				if (song.paused == true)
					{
						console.log('Playing');
						$('.play-icon').removeClass('fa-play').addClass('fa-pause');
						song.play();
					} 
				else
					{
						console.log('Pausing');
						$('.play-icon').removeClass('fa-pause').addClass('fa-play');
						song.pause();
					}
		}
		function changeCurrentSongDetails(songObj) //for adding image
		{
   			 $('.current-song-image').attr('src','img/' + songObj.image)  //here .attr is attribute and + mean concatenate ie it combined these two lines
   			 $('.current-song-name').text(songObj.name)
   			 $('.current-song-album').text(songObj.album)
		}
   /* for(var i=0; i<fileNames.length; i++)
    {
    	addSongNameClickEvent(fileNames[i],i+1)
    }*/





    function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}
    function addSongNameClickEvent(songObj,position)                //fn name explain what fn do  . it is looping of fn
		{
			var songName = songObj.fileName; // New Variable 
			var id='#song' + position;
			$(id).click(function() 
			{
    			var audio=document.querySelector('audio');  //it is work as rewind fn if we play same song then it confirm that same song is played
    			var currentSong=audio.src;   //we r putting current song in a var called currentSong
    			//if(currentSong.search (fileNames[0]) != -1)
    			if(currentSong.search (songName) != -1)
    			//if(audio.src == fileNames[0])    //same song always play never pause 
    		 //as we declare event as songName so we replace filename[0] by songname
					{
						console.log("if statement executing");
						toggleSong();
					}
				else {
						console.log("else statement executing");
						//audio.src = fileNames[0];
						audio.src = songName;
						toggleSong();
						changeCurrentSongDetails(songObj); // image Function Call
					}
    		//audio.play();
   			//console.log(audio.paused);   //it display value true or false in console 				
   		    //toggleSong();
  			});
     	}
        /*addSongNameClickEvent(fileNames[0],1); /// now for replacing this we use for loop
        addSongNameClickEvent(fileNames[1],2);
        addSongNameClickEvent(fileNames[2],3);
        addSongNameClickEvent(fileNames[3],4);*/     
        /* $('#song2').click(function()
            {
                var audio=document.querySelector('audio');
                audio.src=fileNames[1];
                //toggleSong();
                if(audio.src == fileNames[1])
                    {
                        toggleSong();
                    }
                else {
                        audio.src = fileNames[1];
                        togglesonudio=document.querySelector('audio');
                audio.src=fileNames[2];5
                //toggleSong();
                if(audio.src == fileNames[2])
                    {
                        toggleSong();
                    }
                else {
                        audio.src = fileNames[2];
                        toggleSong();
                    }
            });
        $('#song4').click(function()
            {
                var audio=document.querySelector('audio');
                audio.src=fileNames[3];
                //toggleSong();
                if(audio.src == fileNames[3])
                    {
                        toggleSong();
                    }
                else {
                        audio.src = fileNames[3];
                        toggleSong();
                    }
           }); */
        
        // $('.welcome-screen button').on('click', function() {
        // var name = $('#name-input').val();
        // if (name.length > 2) {
        //     var message = "Welcome, " + name;
        //     $('.main .user-name').text(message);
        //     $('.welcome-screen').addClass('hidden');   //for move to welcome to main page
        //     $('.main').removeClass('hidden');
        // } else {
        //     $('#name-input').addClass('error');
        // }
        // });

    
  //   function Validation() {
  //       var email = document.loginform.input-wrapper.email.value;
  //       var pswrd = document.loginform.password.value;
  //       // var email = "Test@acadview.com"; 
  //       // var password = "JavascriptRocks";
  //       if ((email == username) && (pswrd == password)) {
  //           //return true;
  //            $('.welcome-screen').addClass('hidden');   //for move to welcome to main page
  //            $('.main').removeClass('hidden');
  //       }
  //       else {
  //           alert ("Login was unsuccessful, please check your username and password");
  //           return false;
  //       }
  // }

   function check(form) { /*function to check userid & password*/
                /*the following code checkes whether the entered userid and password are matching*/
                if(form.userid.value == "test@acadview.com" && form.pswrd.value == "javascriptrocks") {
                    $('.welcome-screen').addClass('hidden');   //for move to welcome to main page
                    $('.main').removeClass('hidden');/*opens the target page while Id & password matches*/
                }
                else {
                    alert("Error Password or Username")/*displays error message*/
                }
            }
        

    $('.fa-repeat').on('click',function() {
    $('.fa-repeat').toggleClass('disabled')
    willLoop = 1 - willLoop;
});
    $('.fa-random').on('click',function() {
    $('.fa-random').toggleClass('disabled')
    willShuffle = 1 - willShuffle;
});
		$('.play-icon').on('click', function() 
			{              //instead of below too much large code we use fn
                    /*var song = document.querySelector('audio');
                        if (song.paused == true)                          //here we play and pause the song by click
                            {
                                    console.log('Playing');
                                    $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                                    song.play();
                            } 
                        else
                            {
                                    console.log('Pausing');
                                    $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                                    song.pause();
                            }*/
				toggleSong();      //we call function i.e togglesong here
			});
		//$('body').on('keypress', function(event) 
		//	{
          //   if (event.keyCode == 32) 
			//		{                     //here we play & pause the song by spacebar
                    /*var song = document.querySelector('audio');
                    if (song.paused == true) {
                        console.log('Playing');
                        $('.play-icon').removeClass('fa-play').addClass('fa-pause');
                        song.play();
                    } else {
                        console.log('Pausing');
                        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                        song.pause();
                    }*/
			//			toggleSong();      //we call function i.e togglesong here
			//	}
           // });
           $('body').on('keypress',function(event) {
    var target = event.target;  //Save the target of the event in a variable The target is the place where the event took place
    	if (event.keyCode == 32 && target.tagName !='INPUT')   //This condition first checks if the spacebar key is pressed Then it checks if the place where the event occurred had an input tag or not
    		{
      		  toggleSong();
   			}
		});

    function fancyTimeFormat(time)               //it is used to display time in secands . by using this swe can also represent time in min or hrs
		{   
    // Hours, minutes and seconds
		var hrs = ~~(time / 3600);
		var mins = ~~((time % 3600) / 60);                 
		var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";
		if (hrs > 0) 
			{
				ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
			}
				ret += "" + mins + ":" + (secs < 10 ? "0" : "");
				ret += "" + secs;
				return ret;
			}

	function updatecurrentTime() 
			{
                var song=document.querySelector("audio")       //var=VARIABLE
                                     // console.log(song.currentTime);
                                     // console.log(song.duration);
                var currentTime=Math.floor(song.currentTime);     //this code show time on the start and end of the line but in decimal now we add math.floor and it help in removing the decimal
                currentTime=fancyTimeFormat(currentTime);       //
                var duration=Math.floor(song.duration);
                duration=fancyTimeFormat(duration);             //
                $('.time-elapsed').text(currentTime);
                $('.song-duration').text(duration);
                                 }
           /* window.onload=function() {
                setTimeout(function() {        //we wnt song playing duration after 1 sec but setTimeout give tym only in starting so this is not useful and now we introduce bhen of set timeout i.e setinterval
                    updatecurrentTime();
                },5000);
            } */

     /*var songName1= 'Badri Ki Dulhania (Title Track)';  //here give song name and then below diclare for display
     var songName2= 'Humma Song';   //if we have 200 songs or more than 200 then it is difficult to understand so we are now using ARRAYS
     var songName3= 'Nashe Si Chad Gyi';
     var songName4= 'The Breakup Song';  */ 
        //here we use array .In array we declare all things in one variable. if we dont put commas ie , in between so ith consider as one song   
     //Array: array always ends with terminator i.e ; . and always put in square braces i.e[] . numbering always start with 0 . [0,1,2,3]-> it is called as indexing. indexing for different nos is done in single commas
   // 
     /*window.onload=function() {
     				        		$('#song1').text(songlist[0]);     //here 0,1,2,3 is song no. we can  call any song by calling thier no. or use songlist.length[0];
     								$('#song2').text(songlist[1]);
     								$('#song3').text(songlist[2]);
     								$('#song4').text(songlist[3]);   
                                    updatecurrentTime(); //now it continuously show results never stop     
                                    setInterval(function() //it give song duration after 1 sec but it is in decimals and it show tym then stop for one mint and again do same work it is very slow so before executing set interval we write update cmnd
                                            {    
                                              updatecurrentTime();
                                            },1000);
                              } */
//window.onload = function() { 


	$('audio').on('ended',function() {
    var audio = document.querySelector('audio');
    if(currentSongNumber < 4) {
        var nextSongObj = songs[currentSongNumber];
        audio.src = nextSongObj.fileName; // Change Soure
        toggleSong(); // Play Next Song
        changeCurrentSongDetails(nextSongObj); // Update Image
        currentSongNumber = currentSongNumber + 1; // Change State
    }
    else {
        $('.play-icon').removeClass('fa-pause').addClass('fa-play');
        audio.currentTime = 0;
    }
})
$(document).ready(function() {  //The benefit of using $(document).ready is that you can have many of these in your JS file, but only one of window.onload
    
    changeCurrentSongDetails(songs[0]);
    for(var i =0; i < songs.length;i++) 
    {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj, i+1);
    }
        updatecurrentTime(); //now it continuously show results never stop     
        setInterval(function() //it give song duration after 1 sec but it is in decimals and it show tym then stop for one mint and again do same work it is very slow so before executing set interval we write update cmnd
        {    
            updatecurrentTime();
        },1000);
                                    //$('#songs').DataTable(); //initialization for datatables
    $('#songs').DataTable({ //passing of args in datatable 
        paging: false
    });
});



















