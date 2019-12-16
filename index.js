var testHeading = document.getElementById("testHeading")
var boxTemplate = $('[data-template]').html();
var selectedUser = ""
var urlPfx = ""
/*
firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    document.getElementById("user_div").style.display = "inline-block"
    document.getElementById("navigation_bar").style.display = "inline-block"
    document.getElementById("login_div").style.display = "none"
    document.getElementById("login_div_logo").style.display = "none"

    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email
      document.getElementById("nav_user").innerHTML = "Logged in as : " + email_id  
    }

  } else {
    document.getElementById("user_div").style.display = "none"
    document.getElementById("navigation_bar").style.display = "none"
    document.getElementById("login_div").style.display = "block"
    document.getElementById("login_div_logo").style.display = "flex"
  }
});

function login(){
  var userEmail = document.getElementById("email_field").value
  var userPass = document.getElementById("password_field").value

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    var errorCode = error.code
    var errorMessage = error.message
    window.alert("Error : " + errorMessage)
  })
}
 
function logout(){
  $('#user_div').empty()
  firebase.auth().signOut();
  document.getElementById("password_field").value = "";
}
*/
function removeDiv(divName){
  $('#'+divName).css('-webkit-animation', 'slide-fade-out 0.4s');
  $('#'+divName).bind('webkitAnimationEnd',function(){
    $('#'+divName).remove();
  });  
}

function getUsers() {
  var db = firebase.database()
  var count = 0

  htmlDivUserList = boxTemplate
  htmlDivUserList = htmlDivUserList.replace(/-div_id-/g, "div_user_list")
  .replace(/-div_class-/g, "div_content_box div_slide_right")
  .replace(/-title-/g, "User List")

  db.ref().once('value', function(snap) {
    htmlDivUser = ""
    snap.forEach(function(childSnap) {
      count = count + 1
      var btnId = "btn_view" + count.toString()
      
      htmlDivUser += '<div class="div_user_row" style="padding-top: 5px">' + 
      '<button id = ' + btnId + '>View</button>' + 
      childSnap.key + '</div>'
    })
    htmlDivUserList = htmlDivUserList.replace(/-box_content-/g, htmlDivUser)
    $('#user_div').empty()
    $('#user_div').append(htmlDivUserList)
    
    //add onclick
    for(let i=0; i<=count; i++){
      $('#' + "btn_view" + i).click(getRecords)
    }
  })
}

function getIntroTab(){
  htmlDivIntro = boxTemplate
  htmlDivIntro = htmlDivIntro.replace(/-div_id-/g, "div_intro")
  .replace(/-div_class-/g, "div_content_box div_slide_down")
  .replace(/-title-/g, "Introduction")

  contentIntro = '<img id="img_nav_logo" src="resource/sample_notepad.png">' + 
                  "<div>It is often necessary to protect important notes in order to prevent them from being accessed by others, " + 
                  "but text editors that offer encryption features are sometimes too complex for users who just want a secure " +  
                  "Notepad alternative. Crypto Notepad stands out through its relatively simple design, as it looks very similar " + 
                  "to the standard Windows Notepad. It offers a few extra features, such as encryption and a customizable UI, " + 
                  "but it remains lightweight and very easy to use.</div>";

  htmlDivIntro = htmlDivIntro.replace(/-box_content-/g, contentIntro)
  $('#div_intro').remove()
  $('#user_div').append(htmlDivIntro)
}

function getDownloadTab(){
  htmlDivDown = boxTemplate
  htmlDivDown = htmlDivDown.replace(/-div_id-/g, "div_download")
  .replace(/-div_class-/g, "div_content_box div_slide_down")
  .replace(/-title-/g, "Download")


  contentDownload = '<div class="div_content_outer">' + 
                      '<div class="div_content_main">' +
                        '-content_main-' + 
                      '</div>' + 
                      '<div class="div_content_sub">' +
                        '-content_sub-' + 
                      '</div>' + 
                    '</div>';
  htmlDivDown = htmlDivDown.replace(/-box_content-/g, contentDownload)

  contentMain = '<a id="download_windows" href="https://github.com/LeeDongGeon1996/Crypto-Notepad/releases/tag/1.0" class="download">\
                      <svg height="700px" width="700px" viewBox="0 0 512 499.81" version="1.1" id="windows">\
                        <path d="M0,67.048l207.238-27.137v197.803H0V67.048z M207.238,459.904L0,432.762V262.096h207.238V459.904z M512,\
                        0v237.714H231.619  v-201L512,0z M512,499.81l-280.381-36.714v-201H512V499.81z"></path>\
                      </svg>\
                      <span>Windows</span>\
                    </a>\
                    <a id="download_linux" href="#" class="download">\
                      <svg height="700px" width="700px" viewBox="0 0 1000 1000" version="1.1" id="linux">\
                        <path d="M369.954 229.402q-6.138 .558 -8.649 5.859t-4.743 5.301q-2.79 .558 -2.79 -2.79 0 \
                        -6.696 10.602 -8.37h5.58zm48.546 7.812q-2.232 .558 -6.417 -3.627t-9.765 -2.511q13.392 \
                        -6.138 17.856 1.116 1.674 3.348 -1.674 5.022zm-195.858 238.266q-2.232 -.558 -3.348 1.674t-2.511 \
                        6.975 -3.069 7.533 -5.58 7.254q-3.906 5.58 -.558 6.696 2.232 .558 6.975 -3.906t6.975 -10.044q.558 \
                        -1.674 1.116 -3.906t1.116 -3.348 .837 -2.511 .279 -2.232v-1.674t-.558 -1.395 -1.674 \
                        -1.116zm477.09 200.322q0 -10.044 -30.69 -23.436 2.232 -8.37 4.185 -15.345t2.79 -14.508 1.674 \
                        -11.997 .279 -12.555 -.558 -10.881 -1.953 -12.276 -2.232 -11.439 -2.79 -13.95 -3.069 -14.787q-5.58 \
                        -26.784 -26.226 -57.474t-40.176 -41.85q13.392 11.16 31.806 46.314 48.546 90.396 30.132 \
                        155.124 -6.138 22.32 -27.9 23.436 -17.298 2.232 -21.483 -10.323t-4.464 -46.593 -6.417 \
                        -59.706q-5.022 -21.762 -10.881 -38.502t-10.881 -25.389 -8.649 -13.671 -7.254 -8.37 -4.185 \
                        -3.906q-7.812 -34.596 -17.298 -57.474t-16.461 -31.248 -13.113 -18.414 -8.37 -22.32q-2.232 \
                        -11.718 3.348 -29.853t2.511 -27.621 -24.831 -13.95q-8.37 -1.674 -24.831 -10.044t-19.809 \
                        -8.928q-4.464 -.558 -6.138 -14.508t4.464 -28.458 20.088 -15.066q20.646 -1.674 28.458 \
                        16.74t2.232 32.364q-6.138 10.602 -1.116 14.787t16.74 .279q7.254 -2.232 7.254 \
                        -20.088v-20.646q-2.79 -16.74 -7.533 -27.9t-11.718 -17.019 -13.113 -8.37 -15.066 -4.185q-59.706 \
                        4.464 -49.662 74.772 0 8.37 -.558 8.37 -5.022 -5.022 -16.461 -5.859t-18.414 .279 -8.649 -2.79q.558 \
                        -31.806 -8.928 -50.22t-25.11 -18.972q-15.066 -.558 -23.157 15.345t-9.207 33.201q-.558 8.37 1.953 \
                        20.646t7.254 20.925 8.649 7.533q5.58 -1.674 8.928 -7.812 2.232 -5.022 -3.906 -4.464 -3.906 0 \
                        -8.649 -8.091t-5.301 -18.693q-.558 -12.276 5.022 -20.646t18.972 -7.812q9.486 0 15.066 \
                        11.718t5.301 21.762 -.837 12.276q-12.276 8.37 -17.298 16.182 -4.464 6.696 -15.345 13.113t-11.439 \
                        6.975q-7.254 7.812 -8.649 15.066t4.185 10.044q7.812 4.464 13.95 10.881t8.928 10.602 10.323 7.254 \
                        19.809 3.627q26.226 1.116 56.916 -8.37 1.116 -.558 12.834 -3.906t19.251 -5.859 16.461 -7.254 \
                        11.718 -9.765q5.022 -7.812 11.16 -4.464 2.79 1.674 3.627 4.743t-1.674 6.696 -9.207 5.301q-11.16 \
                        3.348 -31.527 11.997t-25.389 10.881q-24.552 10.602 -39.06 12.834 -13.95 2.79 -44.082 -1.116 \
                        -5.58 -1.116 -5.022 1.116t9.486 10.602q13.95 12.834 37.386 12.276 9.486 -.558 20.088 -3.906t20.088 \
                        -7.812 18.693 -9.765 16.74 -9.486 13.671 -6.696 9.765 -1.395 4.743 6.138q0 1.116 -.558 \
                        2.511t-2.232 2.79 -3.348 2.511 -4.743 2.79 -5.022 2.511 -5.58 2.79 -5.301 2.511q-15.624 \
                        7.812 -37.665 24.552t-37.107 23.994 -27.342 .558q-11.718 -6.138 -35.154 -40.734 -12.276 \
                        -17.298 -13.95 -12.276 -.558 1.674 -.558 5.58 0 13.95 -8.37 31.527t-16.461 30.969 -11.718 \
                        32.364 6.417 35.154q-12.834 3.348 -34.875 50.22t-26.505 78.678q-1.116 10.044 -.837 38.502t-3.069 \
                        32.922q-4.464 13.392 -16.182 1.674 -17.856 -17.298 -20.088 -52.452 -1.116 -15.624 2.232 \
                        -31.248 2.232 -10.602 -.558 -10.044l-2.232 2.79q-20.088 36.27 5.58 92.628 2.79 6.696 13.95 \
                        15.624t13.392 11.16q11.16 12.834 58.032 50.499t51.894 42.687q8.928 8.37 9.765 21.204t-7.812 \
                        23.994 -25.389 12.834q4.464 8.37 16.182 24.831t15.624 30.132 3.906 39.339q25.668 -13.392 3.906 \
                        -51.336 -2.232 -4.464 -5.859 -8.928t-5.301 -6.696 -1.116 -3.348q1.674 -2.79 7.254 -5.301t11.16 \
                        1.395q25.668 29.016 92.628 20.088 74.214 -8.37 98.766 -48.546 12.834 -21.204 18.972 -16.74 6.696 \
                        3.348 5.58 29.016 -.558 13.95 -12.834 51.336 -5.022 12.834 -3.348 20.925t13.392 8.649q1.674 \
                        -10.602 8.091 -42.966t7.533 -50.22q1.116 -11.718 -3.627 -41.013t-4.185 -54.126 12.834 \
                        -39.339q8.37 -10.044 28.458 -10.044 .558 -20.646 19.251 -29.574t40.455 -5.859 33.48 \
                        12.555zm-350.424 -461.466q1.674 -9.486 -1.395 -16.74t-6.417 -8.37q-5.022 -1.116 -5.022 \
                        3.906 1.116 2.79 2.79 3.348 5.58 0 3.906 8.37 -1.674 11.16 4.464 11.16 1.674 0 1.674 \
                        -1.674zm233.802 109.926q-1.116 -4.464 -3.627 -6.417t-7.254 -2.79 -8.091 -3.069q-2.79 \
                        -1.674 -5.301 -4.464t-3.906 -4.464 -3.069 -3.627 -2.232 -2.232 -2.232 .837q-7.812 8.928 \
                        3.906 24.273t21.762 17.577q5.022 .558 8.091 -4.464t1.953 -11.16zm-99.324 -118.854q0 -6.138 \
                        -2.79 -10.881t-6.138 -6.975 -5.022 -1.674q-7.812 .558 -3.906 3.906l2.232 1.116q7.812 2.232 \
                        10.044 17.298 0 1.674 4.464 -1.116zm30.132 -130.014q0 -1.116 -1.395 -2.79t-5.022 -3.906 \
                        -5.301 -3.348q-8.37 -8.37 -13.392 -8.37 -5.022 .558 -6.417 4.185t-.558 7.254 -.279 \
                        6.975q-.558 2.232 -3.348 5.859t-3.348 5.022 1.674 4.743q2.232 1.674 4.464 0t6.138 -5.022 \
                        8.37 -5.022q.558 -.558 5.022 -.558t8.37 -1.116 5.022 -3.906zm315.27 748.278q11.16 6.696 \
                        17.298 13.671t6.696 13.392 -1.395 12.555 -8.649 12.276 -13.113 10.881 -16.74 10.323 -17.577 \
                        9.207 -17.856 8.649 -15.066 7.254q-21.204 10.602 -47.709 31.248t-42.129 35.712q-9.486 \
                        8.928 -37.944 10.881t-49.662 -8.091q-10.044 -5.022 -16.461 -13.113t-9.207 -14.229 -12.276 \
                        -10.881 -26.226 -5.301q-24.552 -.558 -72.54 -.558 -10.602 0 -31.806 .837t-32.364 \
                        1.395q-24.552 .558 -44.361 8.37t-29.853 16.74 -24.273 15.903 -29.853 6.417q-16.182 -.558 \
                        -61.938 -17.298t-81.468 -23.994q-10.602 -2.232 -28.458 -5.301t-27.9 -5.022 -22.041 -5.301 \
                        -18.693 -8.091 -9.486 -10.881q-5.58 -12.834 3.906 -37.107t10.044 -30.411q.558 -8.928 -2.232 \
                        -22.32t-5.58 -23.715 -2.511 -20.367 5.859 -15.066q7.812 -6.696 31.806 -7.812t33.48 \
                        -6.696q16.74 -10.044 23.436 -19.53t6.696 -28.458q11.718 40.734 -17.856 59.148 -17.856 \
                        11.16 -46.314 8.37 -18.972 -1.674 -23.994 5.58 -7.254 8.37 2.79 31.806 1.116 3.348 4.464 \
                        10.044t4.743 10.044 2.511 9.486 .558 12.276q0 8.37 -9.486 27.342t-7.812 26.784q1.674 9.486 \
                        20.646 14.508 11.16 3.348 47.151 10.323t55.521 11.439q13.392 3.348 41.292 12.276t46.035 \
                        12.834 30.969 2.232q23.994 -3.348 35.991 -15.624t12.834 -26.784 -4.185 -32.643 -10.602 \
                        -29.016 -11.16 -20.367q-67.518 -106.02 -94.302 -135.036 -37.944 -41.292 -63.054 -22.32 \
                        -6.138 5.022 -8.37 -8.37 -1.674 -8.928 -1.116 -21.204 .558 -16.182 5.58 -29.016t13.392 \
                        -26.226 12.276 -23.436q4.464 -11.718 14.787 -40.176t16.461 -43.524 16.74 -34.038 21.762 \
                        -30.132q61.38 -79.794 69.192 -108.81 -6.696 -62.496 -8.928 -172.98 -1.116 -50.22 13.392 \
                        -84.537t59.148 -58.311q21.762 -11.718 58.032 -11.718 29.574 -.558 59.148 7.533t49.662 \
                        23.157q31.806 23.436 51.057 67.797t16.461 82.305q-2.79 53.01 16.74 119.412 18.972 63.054 \
                        74.214 121.644 30.69 32.922 55.521 90.954t33.201 106.578q4.464 27.342 2.79 47.151t-6.696 \
                        30.969 -11.16 12.276q-5.58 1.116 -13.113 10.602t-15.066 19.809 -22.599 18.693 -34.038 \
                        7.812q-10.044 -.558 -17.577 -2.79t-12.555 -7.533 -7.533 -8.649 -6.417 -11.439 -5.022 \
                        -10.881q-12.276 -20.646 -22.878 -16.74t-15.624 27.342 3.906 54.126q11.16 39.06 .558 108.81 \
                        -5.58 36.27 10.044 56.079t40.734 18.414 47.43 -19.809q32.922 -27.342 49.941 -37.107t57.753 \
                        -23.715q29.574 -10.044 42.966 -20.367t10.323 -19.251 -13.95 -15.903 -28.737 -13.113q-18.414 \
                        -6.138 -27.621 -26.784t-8.37 -40.455 8.649 -26.505q.558 17.298 4.464 31.527t8.091 22.599 11.439 \
                        15.903 11.718 10.602 11.997 7.254 9.207 5.301z"></path>\
                      </svg>\
                      <span>Linux</span>\
                    </a>';
  htmlDivDown = htmlDivDown.replace(/-content_main-/g, contentMain)

  contentSub = '<div> <h2 id="download_tab_sub_title">Download and Protect your data!<h2> </div>' + 
                '<div id="download_tab_sub_text">' +
                 '<h3> Crypto-Notepad 2.0 </h3>' +
                 '<div id="dowload_tab_sub_text_detail">' + 
                  '<ul class="download_detail">' + 
                     '<li>Release Date : 11 Nov 2019</li>' + 
                     '<li>Requirement : The program requires Java Runtime Environment(JRE) 1.8. You can download JRE1.8 ' + 
                     '<a href="https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html">here</a>.</li>' + 
                  '</ul>' + 
                  '</div>' + 
                '</div>';
                
  htmlDivDown = htmlDivDown.replace(/-content_sub-/g, contentSub)
  


  $('#div_intro').remove()
  $('#div_download').remove()
  $('#user_div').append(htmlDivDown)

  console.log('show download tab')
}

function getContactTab(){
  console.log('sjow contact tab')
}

function getRecords() {
  console.log("getRecrds")
  var user = ($(this).parent().text().replace("View", "")) + "/"
  urlPfx = ""
  urlPfx = user
  selectedUser = urlPfx

  console.log(urlPfx)
  var count = 0
  var db = firebase.database()

  htmlDivRecords = boxTemplate
  htmlDivRecords = htmlDivRecords.replace(/-div_id-/g, "div_data_list")
  .replace(/-div_class-/g, "div_content_box div_slide_right")
  .replace(/-title-/g, "Records")

  db.ref("/" + user).once('value', function(snap) {
    htmlDivRecord = ""
    snap.forEach(function(childSnap) {
      count = count + 1
      var btnId = "btn_detail" + count.toString()
      if(childSnap.key != "storageRef"){ 
        htmlDivRecord += '<div class="div_user_row" style="padding-top: 5px">' + 
        '<button id = ' + btnId + '>Details</button>' +
      childSnap.key.replace('@', "  ") + '</div>'
      }
    })
    htmlDivRecords = htmlDivRecords.replace(/-box_content-/g, htmlDivRecord)
    $('#div_show_data').remove()
    $('#div_data_list').remove()
    $('#user_div').append(htmlDivRecords)
    
    //add onclick
    for(let i=0; i<=count; i++){
      $('#' + "btn_detail" + i).click(showDetails)
    }
  })
}

function showDetails() {

  var date = ($(this).parent().text().replace("Details", "").replace("  ","@")) + "/"
  urlPfx = selectedUser
  urlPfx = urlPfx + date;
  console.log(urlPfx)
  //This should be done in this order.
  createDiv();
  updateDetailsTable()
  //----------------------------------

  createCharts()
  updateCharts()

  createMap()
  updateMap()

  getDBList()
}

function updateDetailsTable() {
  updateTableRow("/1_User Info/1_Name", "detail_name")
  updateTableRow("/1_User Info/2_Start time", "detail_start_time",
    function(x){return formatDate(x, "yyyy-MM-dd hh:mm:ss")})
  updateTableRow("/1_User Info/3_Time Trained", "detail_duration_trained",
    function(x){return formatDate(x, "mm:ss")})

  updateTableRow("/2_Training Configuration/1_Activity", "detail_activity")
  updateTableRow("/2_Training Configuration/2_Duration", "detail_duration",
    function(x){return formatDate(x, "mm:ss")})
  updateTableRow("/2_Training Configuration/3_Task", "detail_cognitive_task", null,
    function(){updateElement();})
  updateTableRow("/2_Training Configuration/4_Difficulty Level", "detail_task_difficulty")

  updateTableRow("/3_Cognitive Performance/1_Stimulus", "detail_stimulus")
  updateTableRow("/3_Cognitive Performance/2_Nogo", "detail_nogo")
  updateTableRow("/3_Cognitive Performance/3_Responses", "detail_responses")
  updateTableRow("/3_Cognitive Performance/4_Hits", "detail_hits")
  updateTableRow("/3_Cognitive Performance/5_Lapses", "detail_lapses")
  updateTableRow("/3_Cognitive Performance/6_Accuracy", "detail_accuracy",
    function(x){return parseFloat(x).toFixed(1)+"%"})
  updateTableRow("/3_Cognitive Performance/7_Average Response Time", "detail_avg_response_time",
    function(x){return x+"ms"})

  updateTableRow("/4_Physical Performance/1_Distance", "detail_distance",
    function(x){return parseFloat(x).toFixed(3)+"km"})
  updateTableRow("/4_Physical Performance/2_Average Speed", "detail_avg_speed",
    function(x){return parseFloat(x).toFixed(3)+"km/h"})
  updateTableRow("/4_Physical Performance/3_Average Pace", "detail_avg_pace",
    function(x){return parseFloat(x).toFixed(3)+"min/km"})
}

function updateTableRow(att, id, processFunc=null, callback=null) {
  var db = firebase.database()
  db.ref(urlPfx + att).once('value', function(snap) {
    var data = ((processFunc != null) ? processFunc(snap.val()) : snap.val());
    document.getElementById(id).innerHTML = data;
    if(callback != null) { callback(); }
  })
}

function updateElement(){
  var task = (document.getElementById("detail_cognitive_task")).innerHTML;
  if(task != "GO/NO-GO"){
    
    //Hide table cell showing go/no-go count
    document.getElementById("detail_nogo").style.display = "none";
    document.getElementById("no_go_title").style.display = "none";
  }
  if(task == "Visual"){
    document.getElementById("table_physical_performance").style.display = "none";
    document.getElementById("div_training_route").style.display = "none";
    document.getElementById("div_speed_graph").style.display = "none";
  }
}


function createDiv() {
  $('#div_show_data').remove()
  htmlDivDetails = boxTemplate
  htmlDivDetails = htmlDivDetails.replace(/-div_id-/g, "div_show_data")
  .replace(/-div_class-/g, "div_content_box div_slide_right")
  .replace(/-title-/g, "Details")
  .replace(/-div_content_id-/g, "div_content_details")
  htmlDivDetail = '<table border="1">' +
    '<tr>' + 
      '<th colspan="3" align="center">General info</th>' +
    '</tr>' + 
      
    '<tr>' + 
      '<th>User</th>' +
      '<th>Start time</th>' + 
      '<th>Duration trained(mm:ss)</th>' + 
    '</tr>' + 

    '<tr>' +
      '<td id = "detail_name"></td>' +
      '<td id = "detail_start_time"></td>' +
      '<td id = "detail_duration_trained"></td>' +
    '</tr>' +

  '</table border="1">' +

  '<table border="1">' +
    '<tr>' + 
      '<th colspan="4" align="center">Training configuration</th>' +
    '</tr>' + 

    '<tr>' + 
      '<th>Activity</th>' +
      '<th>Duration(mm:ss)</th>' + 
      '<th>Cognitive task</th>' + 
      '<th>Task difficulty</th>' + 
    '</tr>' + 

    '<tr>' +
      '<td id = "detail_activity"></td>' +
      '<td id = "detail_duration"></td>' +
      '<td id = "detail_cognitive_task"></td>' +
      '<td id = "detail_task_difficulty"></td>' +
    '</tr>' +

  '</table>' +

  '<table border="1">' +
    '<tr>' + 
      '<th colspan="7" align="center">Cognitive performance</th>' +
    '</tr>' + 

    '<tr>' + 
      '<th>Stimulus</th>' +
      '<th id="no_go_title">No-go</th>' +
      '<th>Responses</th>' + 
      '<th>Hits</th>' + 
      '<th>Lapses</th>' + 
      '<th>Accuracy</th>' + 
      '<th>Average response time</th>' + 
    '</tr>' + 

    '<tr>' +
      '<td id = "detail_stimulus"></td>' +
      '<td id = "detail_nogo"></td>' +
      '<td id = "detail_responses"></td>' +
      '<td id = "detail_hits"></td>' +
      '<td id = "detail_lapses"></td>' +
      '<td id = "detail_accuracy"></td>' +
      '<td id = "detail_avg_response_time"></td>' +
    '</tr>' +

  '</table>' +

  '<table id="table_physical_performance" border="1">' +
    '<tr>' + 
      '<th colspan="3" align="center">Physical performance</th>' +
    '</tr>' + 
    '<tr>' + 
      '<th>Distance</th>' +
      '<th>Average speed</th>' + 
      '<th>Average pace</th>' + 
    '</tr>' + 

    '<tr>' +
      '<td id = "detail_distance"></td>' +
      '<td id = "detail_avg_speed"></td>' +
      '<td id = "detail_avg_pace"></td>' +
    '</tr>' +

  '</table>' + 

  '<hr>' +

  '<br><br>' +

    //for speed graph
    '<div id="div_speed_graph" class="div_content_detail_element">' + 

      '<table id="table_speed_graph" border="1">' +
       '<tr>' + 
         '<th colspan="3" align="center">Speed Graph</th>' +
       '</tr>' + 
      '</table>' +
      
      '<canvas id="myChart" style="width: 100% !important;height: 100% !important;"></canvas>' +  
    
    '</div>' + 
    
    //for response time graph
    '<div id="div_response_graph" class="div_content_detail_element">' + 

      '<table id="table_response_graph" border="1">' +
       '<tr>' + 
         '<th colspan="3" align="center">Response Time Graph</th>' +
       '</tr>' + 
      '</table>' +
      
      '<canvas id="myChart2" style="width: 100% !important;height: 100% !important;"></canvas>' +  
    
    '</div>' +

    //for training route map
    '<div id="div_training_route" class="div_content_detail_element">' + 

      '<table id="table_training_route" border="1">' +
       '<tr>' + 
         '<th colspan="3" align="center">Training Route</th>' +
       '</tr>' + 
      '</table>' +
      
      '<div id="map" style="width: 100% !important; height: 100% !important;"> </div>' +  
    '</div>';
  
    htmlDivDetails = htmlDivDetails.replace(/-box_content-/g, htmlDivDetail)
    $('#user_div').append(htmlDivDetails)
}

var speedChart;
var responseTimeChart;
function updateCharts(){
  updateChartsValue(speedChart, "/4_Physical Performance/4_Speed List", "/4_Physical Performance/5_Location Update Time List", true)
  updateChartsValue(responseTimeChart, "/5_Stimulus Record/3_Responses Time List", "/5_Stimulus Record/2_Responses Mili List")
}

function updateChartsValue(chart, yAtt, xAtt, isIntervalData=false){
  var db = firebase.database();
  var dataVal = [];
  var x_axis = [];

  //Get data for y-axis from DB. (= Y value)
  var getYAxisData = function(){
    return new Promise(function(resolve){
      db.ref(urlPfx + yAtt).once('value', function(snap){
        
        //Apply to the config of chart.
        snap.forEach((childSnap)=>{
          dataVal.push(parseFloat(childSnap.val()).toFixed(3));
        });
        chart.data.datasets[0].data = dataVal;
        resolve();
      })});
  };

  //Get data for x-axis from DB.
  var getXAxisData = function(){
    return new Promise(function(resolve){
      if(typeof xAtt !== "undefined"){
        db.ref(urlPfx + xAtt).once('value', function(snap){

          //Apply to the config of chart.
          snap.forEach((childSnap)=>{
            x_axis.push(childSnap.val());
          });

          if(isIntervalData && x_axis.length > 0){x_axis.shift();}

          var startTime = x_axis[0];
          x_axis = x_axis.map(x=>x-startTime);

          chart.data.labels = x_axis;
          resolve();
        });
      } else {
        for(let i=0;i<dataVal.length;i++) {
          x_axis.push(i);
          chart.data.labels = x_axis;
        }
        resolve();
      }
    })
  };

  getYAxisData()
  .then(()=>{return getXAxisData()})
  .then(()=>{
    if((typeof xAtt !== "undefined")&&(dataVal.length != x_axis.length)){
      //TO-DO
      console.log("The number of x-data does not match y-data.")
      //console.log("# of" + yAtt + " : " + dataVal.length + "\n# of " + xAtt + " : " + x_axis.length);
    }
    chart.update();
  });

}

var routeMap;
function createMap(){
  routeMap = L.map(document.getElementById('map'), {
    //center: {lat:-34.397, lng:150.644},
    zoom: 13,
    zoomSnap: 1
  });

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZG9uZ2dlb25sZWUiLCJhIjoiY2pzbHl2NTl2MGgxejQ5bmRvb25meGR3ayJ9.TVZQjqtGYHH2AzjasBBe4A'
  }).addTo(routeMap);

}

function updateMap(){
  updateRoute("6_Location/1_Latitude List", "6_Location/2_Longitude List", "4_Physical Performance/4_Speed List", routeMap);
}

function updateRoute(latAtt, lngAtt, speedAtt, map){
  var db = firebase.database();
  var latList = [];
  var lngList = [];
  
  //Get latitude, longitude data from DB.
  count = 1;
  var getLatData = function(){
    return new Promise(function(resolve){
      db.ref(urlPfx + latAtt).once('value', function(snap){
        snap.forEach((childSnap)=>{latList.push(parseFloat(childSnap.val()))});
        resolve();
      })});
  }
  var getLngData = function(){
    return new Promise(function(resolve){
      db.ref(urlPfx + lngAtt).once('value', function(snap){
        snap.forEach((childSnap)=>{lngList.push(parseFloat(childSnap.val()))});
        resolve();
      })});
  }

  getLatData()
  .then(()=>{return getLngData()})
  .then(function(){
    //Make route array of 'LatLng'
    var routePoint = [];
    for(var i = 0; i < latList.length; i++){
      routePoint.push({lat:latList[i], lng:lngList[i]});
    }
    if(routePoint.length < 1) { return; }
    
    var startPoint = routePoint[0];
    var startIcon = L.divIcon({
      className: 'my-div-icon',
      html:"START"});
    var startMarker = L.marker(startPoint, {
      title: 'START Point',
      icon: startIcon
      //label: {text: 'S', color: '#FFFFFF'}
    });
    startMarker.addTo(map);
  
    var endPoint = routePoint[routePoint.length-1];
    
    var endIcon = L.divIcon({
      className: 'my-div-icon',
      html:"END"
    });
    var endMarker = L.marker(endPoint, {
      title: 'END Point',
      icon: endIcon
      //label: {text: 'D', color: '#FFFFFF'}
    });
    endMarker.addTo(map);
  
    var sectionCnt = 0;
    db.ref(urlPfx + speedAtt).once('value', function(snap){
      snap.forEach((childSnap)=>{
        drawPolyline(map, routePoint[sectionCnt], routePoint[sectionCnt+1], childSnap.val());
        sectionCnt++;
      })
    })

    //Adjust the view of the map appropriately.
    bounds = L.latLngBounds();
    routePoint.forEach((point)=>{bounds.extend(point)})
    map.fitBounds(bounds);      
    map.panInsideBounds(bounds);    
  })
}

function drawPolyline(map, start, end, speed){

  var color;
  if(speed > 0 && speed <=2){color = '#FFDECC'}
  else if(speed > 2 && speed <=4){color = '#FEC2AF'}
  else if(speed > 4 && speed <=6){color = '#F69E8C'}
  else if(speed > 6 && speed <=8){color = '#F17E6D'}
  else if(speed > 8 && speed <=10){color = '#ED6150'}
  else if(speed > 10 && speed <=12){color = '#D8473B'}
  else if(speed > 12 && speed <=14){color = '#C22D2A'}
  else if(speed > 14 && speed <=16){color = '#A61720'}
  else{color = '#8D031A'}

  var polyline = L.polyline([start, end], {
    color: color,
    opacity: 1.0,
    weight: 3
  });
  polyline.addTo(map);

}

function formatDate(miliseconds, format){
  var date = new Date(miliseconds);
  var yyyy = date.getFullYear();
  var MM = date.getMonth()+1;
  var dd = date.getDate();
  var hh = date.getHours();
  var mm = date.getMinutes();
  if(mm.toString().length<2) { mm = "0" + mm }
  var ss = date.getSeconds();
  if(ss.toString().length<2) { ss = "0" + ss }

  return format.replace("yyyy", yyyy).replace("MM", MM).replace("dd", dd)
    .replace("hh", hh).replace("mm", mm).replace("ss", ss);
}

function createCharts() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "Speed graph",
          backgroundColor: 'rgb(93, 143, 252)',
          borderColor:'rgb(93, 143, 252)',
          fill:false,
          data: [0, 10, 5, 2, 20, 30, 45],
          pointRadius: 1.5,
          borderWidth: 0.6   
        }]
    },

    // Configuration options go here
    options: {
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Time (mm:ss)'
          },
          ticks: {
            callback: function(value, index, values){
              return formatDate(value, "mm:ss");
            }
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Speed (km/h)'
          },
          ticks: {
            beginAtZero: true,
            callback: function(value, index, values){
              return parseFloat(value).toFixed(3)
            }
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });
  speedChart = chart;

  var ctx = document.getElementById('myChart2').getContext('2d');
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "Response time graph",
          backgroundColor: 'rgb(93, 143, 252)',
          borderColor:'rgb(93, 143, 252)',
          fill:false,
          data: [0, 10, 5, 2, 20, 30, 45],
          pointRadius: 1.5,
          borderWidth: 0.6   
        }]
    },
    // Configuration options go here
    options: {
      responsive: true, 
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Time (mm:ss)'
          },
          ticks: {
            callback: function(value, index, values){
              return formatDate(value, "mm:ss");
            }
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Res Time (ms)'
          },
          ticks: {
            beginAtZero: true,
            //callback: function(value, index, values){ return value + "ms"}
          }
        }]
      },
      legend: {
        display: false
      }
    }
  });
  responseTimeChart = chart;
}

function getDBList() {
  var db = firebase.database()
  db.ref(urlPfx + "/5_Stimulus Record/4_Stimulus Type List").once('value', function(snap) {
    console.debug(snap.val())
  })
}


function showRankingForm() {
  var db = firebase.database()
  db.ref().once('value', function(snap) {
    htmlUserList = ''
    snap.forEach(function(childSnap) {
      htmlUserList = htmlUserList + '<input type="checkbox" name="' + childSnap.key+ '">' +
        '   ' + childSnap.key + '<br>'
    })

    htmlRankingconfig = boxTemplate;
    htmlRankingconfig = htmlRankingconfig.replace(/-div_id-/g, "div_ranking_config")
    .replace(/-div_class-/g, "div_content_box div_slide_down")
    .replace(/-div_content_id-/g, "div_content_ranking_config")
    .replace(/-title-/g, "Ranking Configuration")
  
    $('#user_div').empty()
    htmlRanking = 
    '<div style="padding-top: 5px">' +
      '<span style="padding-right: 5px">From</span>' +
      '<input type="date" id="ranking_from_date" value="2018-01-01" min="2018-01-01" max="2020-12-31">' +
      
      '<span style="padding-right: 5px; padding-left: 10px">To</span>' +
      '<input type="date" id="ranking_to_date" value="2019-04-02" min="2018-01-01" max="2020-12-31">' +

      '<div style="display: inline-block; padding-left: 10px">' +
        '<form >' +
          '<select id="task_dropdown" name = "dropdown">' +
            '<option >A-PVT</option>' +
            '<option >GO/NO-GO</option>' + 
            '<option >Visual</option>' +
          '</select>' + 
        '</form>' +
      '</div>' + 
      
      '<div style="display: inline-block; padding-left: 10px"><button onclick="rankUsers()">Rank</button></div>' +
    '</div>'+

    '<div id=ranking_users_div>' +
      htmlUserList +  
    '</div>' +
    '<br>';
    htmlRankingconfig = htmlRankingconfig.replace(/-box_content-/g, htmlRanking)
    $('#user_div').append(htmlRankingconfig)

  })
}

function rankUsers() {
  userSelected = getUserSelected()
  startDateSelected = getStartDateSelected()
  endDateSelected = getEndDateSelected()
  taskSelected = getTaskSelected()

  var refsOfUserAndDate = []
  var db = firebase.database()

  for (let i = 0; i<userSelected.length; i++) {
    var ref = db.ref(userSelected[i])
    ref.once('value', function(snap) {
      snap.forEach(function(childSnap) {
        if(childSnap.key !== "storageRef") {
          refsOfUserAndDate.push('/' + snap.key + '/' + childSnap.key)
        }
      })
      if(i == userSelected.length-1) {
        var filteredRefs = filterRefs(refsOfUserAndDate, startDateSelected, endDateSelected, taskSelected)
      }
    })
  }
}

function filterRefs(refsOfUserAndDate, startDateSelected, endDateSelected, taskSelected ) {
  var refsFilteredWithTask = []
  var refsFilteredWithDate = []

  var startDateMili = new Date(startDateSelected).getTime()
  var endDateMili = new Date(endDateSelected).getTime()

  var db = firebase.database()
  for (let i = 0; i<refsOfUserAndDate.length; i++) {

    var ref = db.ref(refsOfUserAndDate[i]).child('/2_Training Configuration/3_Task')
    ref.once('value', function(snap) {
      if(snap.val() == taskSelected) {
        refsFilteredWithTask.push(refsOfUserAndDate[i])
      }

      if(i == refsOfUserAndDate.length-1) {
        if(refsFilteredWithTask.length<1) {
          //give empty array and show empty div in the function called
          updateRankingForm([])
        }
        for(let j = 0; j<refsFilteredWithTask.length; j++) {
          
          var ref = db.ref(refsFilteredWithTask[j]).child('/1_User Info/2_Start time')
          ref.once('value', function(snap) {
            if(snap.val() >= startDateMili && snap.val() <= endDateMili) {
              refsFilteredWithDate.push(refsFilteredWithTask[j])
            }

            if(j == refsFilteredWithTask.length-1) {
              console.log(refsFilteredWithDate)
              updateRankingForm(refsFilteredWithDate)
            }
          })  
        }
      }
    })
  }
}

function updateRankingForm(filterRefs) {
  //'<div id=ranking_table></div>'
  //get data
  GetAttrWithRef(filterRefs)
  .then((aryUnsortedAttr)=>{
    aryFilteredWithInvalidScore = aryUnsortedAttr.filter((attr)=>(attr.score !== "invalid"))
    arySortedAttr = SortAttr(aryFilteredWithInvalidScore)

    htmlRankingtable = boxTemplate;
    htmlRankingtable = htmlRankingtable.replace(/-div_id-/g, "div_ranking_table")
    .replace(/-div_class-/g, "div_content_box div_slide_down")
    .replace(/-div_content_id-/g, "div_content_ranking_table")
    .replace(/-title-/g, "Ranking Table")

    htmlTableAttrRow = ""
    if(arySortedAttr.length>0) {
      for(let i=0; i<arySortedAttr.length; i++){
        htmlTableAttrRow = htmlTableAttrRow + 
          '<tr>' +
          '<td>' + (i+1) +'</td>' +
          '<td id =' + (arySortedAttr[i].ref + 'userName') + '></td>' +
          '<td id =' + (arySortedAttr[i].ref + 'score') + '></td>' +
          '<td id =' + (arySortedAttr[i].ref + 'accuracy') + '></td>' +
          '<td id =' + (arySortedAttr[i].ref + 'resTime') + '></td>' +
          '</tr>'

        //create ranking table
        htmlTable = 
          '<table border="1">' +
          '<tr>' + 
          '<th colspan="8" align="center">Ranking of performance</th>' +
          '</tr>' + 
      
          '<tr>' + 
          '<th>Rank</th>' +
          '<th>User</th>' +
          '<th>Score</th>' + 
          '<th>Accuracy</th>' + 
          '<th>Avg RT</th>' +
          '</tr>' +

            htmlTableAttrRow + 

          '</table>';
      }
    }
    else {
      htmlTable = '<div> No matching data </div>'
    }

    htmlRankingtable = htmlRankingtable.replace(/-box_content-/g, htmlTable)
    $('#div_ranking_table').remove()
    $('#user_div').append(htmlRankingtable)

    //fill the ranking table
    for(let i=0; i<arySortedAttr.length; i++){
      document.getElementById(arySortedAttr[i].ref + 'userName').innerHTML = arySortedAttr[i].userName;
      document.getElementById(arySortedAttr[i].ref + 'score').innerHTML = arySortedAttr[i].score;
      document.getElementById(arySortedAttr[i].ref + 'accuracy').innerHTML = arySortedAttr[i].accuracy;
      document.getElementById(arySortedAttr[i].ref + 'resTime').innerHTML = arySortedAttr[i].resTime;
    }
    });
}

function SortAttr(unsortedAttr){
  return unsortedAttr.sort(function(a,b){
    return b.score - a.score;
  });
}

function GetAttrWithRef(prefixs){
  return new Promise(function(resolve){
    var aryUnsortedAttr = []
    var db = firebase.database()
    var getAttrSync = function(prefix, attr, processFunc){
    return new Promise(function(resolve){
      var ref = db.ref(prefix).child(attr)
      ref.once('value', function(snap) {
        attr = ((processFunc != null) ? processFunc(snap.val()) : snap.val());
        resolve(attr)
      })
    })
    };

    finishCnt = 0;
    if(prefixs.length<1){
      resolve([])
    }
    for (let i = 0; i<prefixs.length; i++) {
      aryUnsortedAttr.push({ref:prefixs[i]})
      getAttrSync(prefixs[i], '/1_User Info/1_Name')
      .then((attr)=>{
        aryUnsortedAttr[i].userName = attr;
        return getAttrSync(prefixs[i], '/3_Cognitive Performance/6_Accuracy', function(x){return parseFloat(x).toFixed(1)+'%'});
      })
      .then((attr)=>{
        aryUnsortedAttr[i].accuracy = attr;
        return getAttrSync(prefixs[i], '/3_Cognitive Performance/7_Average Response Time', function(x){return x+'ms'});
      })
      .then(function(attr) {
        aryUnsortedAttr[i].resTime = attr;

        if(parseInt(aryUnsortedAttr[i].resTime) == 0) {
          aryUnsortedAttr[i].score = "invalid"
        } else {
          aryUnsortedAttr[i].score = parseInt(parseInt(aryUnsortedAttr[i].accuracy) * 1000 / parseInt(aryUnsortedAttr[i].resTime))
        }

        if(++finishCnt>=prefixs.length){
          resolve(aryUnsortedAttr);
        }
      })
    }
  });
}

function getUserSelected() {
  userSelected = []
  userCount = document.getElementById("ranking_users_div").children.length

  for (var i = 0; i<userCount; i++) {
    var name = document.getElementById("ranking_users_div").children[i].name
    if(name !== undefined) {
      if(document.getElementById("ranking_users_div").children[i].checked) {
        userSelected.push("/" + name)
      }
    }
  }
  return userSelected
}

function getStartDateSelected() {
  return document.getElementById("ranking_from_date").value
}

function getEndDateSelected() {
  return document.getElementById("ranking_to_date").value
}

function getTaskSelected() {
  indexSelected = document.getElementById("task_dropdown").selectedIndex
  taskSelected = document.getElementById("task_dropdown").options[indexSelected].value
  return taskSelected
}