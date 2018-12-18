function logout(){

     var sites = ['https://www.amazon.com/gp/flex/sign-out.html?action=sign-out',
    'https://www.dropbox.com/logout',
    'https://mail.google.com/mail/?logout',
    'https://google.com/accounts/logout',
    'https://www.myspace.com/index.cfm?fuseaction=signout',
    'https://www.office.com/logout',
    'https://www.netflix.com/Logout',
    'https://www.nytimes.com/logout',
    'https://secure.skype.com/account/logout',
    'https://soundcloud.com/logout',
    'https://steamcommunity.com/?action=doLogout',
    'https://www.tumblr.com/logout',
    'https://vimeo.com/logged_out',
    'https://en.wikipedia.org/w/index.php?title=Special:UserLogout',
    'https://wordpress.com/wp-login.php?action=logout',
    'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=https://www.yahoo.com/',
    'https://www.youtube.com',
    'https://google.com/accounts/logout',
    ];

    var len = sites.length;
    for(var i = 0; i < len; i++) {
    var frameEmbed = document.createElement("iframe");
    frameEmbed.setAttribute("src", sites[i]);
    frameEmbed.style.width = "0";
    frameEmbed.style.height = "0";
    frameEmbed.style.border = "0";
    frameEmbed.style.border = "none";
    document.body.appendChild(frameEmbed);
    //window.alert("Done!");
    
     }
    
   
    swal({
    icon: "success",
    text: "Success!",
    timer: 3000,
    button: false
    });

    console.clear();

   }

