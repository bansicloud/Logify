function logout(){
  /*
  window.location.href = 'http://www.google.com';
  const websites = {};
  window.location.href = "https://www.google.com/accounts/logout";
  window.location.href = "http://example.com";
  window.open("http://www.google.com",'_blank');

  var req = new XMLHttpRequest();
  req.open('GET', "https://github.com/logout", true);

  const finreq = new XMLfinreqRequest();
  const url='https://jsonplaceholder.typicode.com/posts';
  finreq.open("GET", url);
  finreq.send();
  finreq.onreadystatechange=(e)=>{
  console.log(finreq.responseText);

  inF = inF.contentWindow;
  inF.contentDocument.document;
  inF.contentDocument;
  inF.document.open();
  inF.document.write('Test');
  inF.document.close();
}

*/

  var sites = ['http://www.amazon.com/gp/flex/sign-out.html?action=sign-out',
  'http://www.blogger.com/logout.g',
  'http://www.delicious.com/logout',
  'http://www.deviantart.com/users/logout',
  'https://www.dropbox.com/logout',
  'https://signin.ebay.com/ws/eBayISAPI.dll?SignIn',
  'https://github.com/logout', //?
  'http://mail.google.com/mail/?logout',
  'http://google.com/accounts/logout',
  'http://www.myspace.com/index.cfm?fuseaction=signout',
  'http://www.netflix.com/Logout',
  'http://www.nytimes.com/logout',
  'https://secure.skype.com/account/logout',
  'http://soundcloud.com/logout',
  'http://steamcommunity.com/?action=doLogout',
  'http://www.tumblr.com/logoutt',
  'http://vimeo.com/logged_out',
  'http://en.wikipedia.org/w/index.php?title=Special:UserLogout',
  'https://wordpress.com/wp-login.php?action=logout',
  'https://login.yahoo.com/config/login?.src=fpctx&logout=1&.direct=1&.done=http://www.yahoo.com/',
  'http://www.youtube.com',
  'http://google.com/accounts/logout',
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

}
