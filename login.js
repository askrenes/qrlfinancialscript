$(document).ready(function() {
  $("#login_box form input").attr("onfocus", "activate_login();$('#login_user_name').focus();")
  $("#login_box button[type='submit']").after("<a href='passwordhelp' class='pw_help glyphicon glyphicon-question-sign'></a>");
  //$("#login_box form").append("<a href='passwordhelp' class='pw_help'>Forgot password?</a>")
});
function activate_login() {
  var login = $("#login_box");  
  if (login.find('button[type="submit"]').length) {
    //login is available
    if ($("#login_box.login_active").length) {
      //login is already active; do nothing
    } else {
      //configure the login animation
      //dim background
      $("body").prepend("<div id='login_active_bg' class='login_active' onclick='deactivate_login();'></div>")
      //move login
      $("#login_box").addClass("login_active");  
      //$("#login_box form").prepend("<div id='login_heading' class='login-heading'><h4>Partner Log In</h4><span class='login-close' onclick='deactivate_login();'>&times;</span></div>");          
    }    
  } else {
    //user is logged in; forward them to partner home
    window.location = "home";
  }
}
function deactivate_login() {
  //remove animated login elements
  $("#login_active_bg").remove();
  $("#login_box").removeClass("login_active"); 
  //$("#login_heading").remove();
}
