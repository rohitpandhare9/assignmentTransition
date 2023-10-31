        
        var c =  [          "https://cdn.wallpapersafari.com/7/54/v7t0ST.jpg",
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2021/06/the-final-part-of-la-casa-de-papel-will-be-divided-into-two-volumes-to-be-released-on-september-3-and-december-3-001-1.jpg",
        "https://www.bollywoodhungama.com/wp-content/uploads/2021/06/Money-Heist-season-5-first-look-images-show-explosive-chaos-in-Bank-of-Spain.jpg",

        "https://media.vanityfair.com/photos/62a8ff0b731d180355f1012f/3:2/w_1998,h_1332,c_limit/vf-622-korean-money-heist.jpg",

        "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUTeN3QHU_6vhC7UKGKo1PeLcrBGMWz-XxeR6tmSTAu6AV5E9pdbaclTTRXTAYsU0rejeeLvG-2FpFKHHhIFCbRWCaqWH9rTTo6p.jpg?r=2ac",

      

        "https://www.telltalesonline.com/wp-content/uploads/2021/06/stranger-things-facts.jpg",

         "https://hips.hearstapps.com/hmg-prod/images/strangerthings-strangerthings4-1-00-51-29-19-1654535671.jpg",

         "https://www.koimoi.com/wp-content/new-galleries/2020/10/stranger-things-season-4-shoot-resumes-netflix-teases-with-creepy-behind-the-scenes-photo-001.jpg",

         "https://resizing.flixster.com/qyPNnGrKiBZImIcXjIGpkCpw7lI=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNTk2MTJlMzItM2NmOS00Y2Y4LWI2ZjYtNTU2OTY3ZjUzYTFmLmpwZw=="

       ]
      var index = 0;
      setTimeout(function(){
          const c = document.getElementById("b");
          c.remove();
      },2500)
      setInterval(function(){
               
        let obj = document.getElementById("imgdiv");
        console.log(obj)
        
        obj.style.backgroundImage = `url(${c[index]})`;
            if(index == c.length - 1){
                
                index = 0 ;
            }else{
                index++;
            }
    
    },3000)