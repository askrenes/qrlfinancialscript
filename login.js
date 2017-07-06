function activate_login() {
  var login = $("#login_box");
  if (login.find('button[type="submit"]').length) {
    //dim background
    if ($("#login_active_bg").length) {
      $("#login_active_bg").addClass("login_active");
    } else {
      $("body").prepend("<div id='login_active_bg' class='login_active' onclick='deactivate_login();'></div>")
    }
    //move login
    $("#login_box").addClass("login_active");  
    $("#login_box form").prepend("<div id='login_heading' class='login-heading'><h4>Partner Log In</h4><span class='login-close' onclick='deactivate_login();'>&times;</span></div>");
    $("#login_user_name").focus();
  } else {
    window.location = "home";
  }
}
function deactivate_login() {
  $("#login_active_bg").remove();
  $("#login_box").removeClass("login_active"); 
  $("#login_heading").remove();
}