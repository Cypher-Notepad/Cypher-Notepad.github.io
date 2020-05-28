var testHeading = document.getElementById("testHeading")
var boxTemplate = $('[data-template]').html();
var selectedUser = ""
var urlPfx = ""
var scrollDelay = 300

window.onload = function() { getIntroTab() }


function getYpos(el) {
  var rect = el.getBoundingClientRect(),
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return rect.top + scrollTop
}

function gotoDiv(el){
  window.scrollTo(0, getYpos(el) - document.getElementById('navigation_bar').clientHeight -5);
}

function removeDiv(divName){
  //exception
  if(divName == 'div_intro'){
    divName = 'div_intro_wrapper'
  }

  $('#'+divName).css('-webkit-animation', 'slide-fade-out 0.4s');
  $('#'+divName).bind('webkitAnimationEnd',function(){
    $('#'+divName).remove();
  });  
}

function getIntroTab(){

  var divIntro = document.getElementById("div_intro_wrapper");
  if(divIntro){
    gotoDiv(divIntro);
    return;
  }

  htmlDivIntro = boxTemplate
  htmlDivIntro = htmlDivIntro.replace(/-div_id-/g, "div_intro")
  .replace(/-div_class-/g, "div_content_box")
  .replace(/-title-/g, "Introduction")

  contentIntro = '<div class="div_content_outer">' + 
                      '<div class="div_content_main noselect">' +
                        '-content_main-' + 
                      '</div>' + 
                      '<div class="div_content_sub">' +
                        '-content_sub-' + 
                      '</div>' + 
                    '</div>';
  htmlDivIntro = htmlDivIntro.replace(/-box_content-/g, contentIntro)

  contentMain = '';
  htmlDivIntro = htmlDivIntro.replace(/-content_main-/g, contentMain)


  contentSub = '<div style="font-size:12px;font-color:#777;margin-bottom:20px;">' + 
                  '<h2 id="intro_tab_sub_title">Cypher Notepad</h2>' + 
                  'Easy, Simple, Secure, and Free' + 
                '</div>' + 
                '<div id="intro_tab_sub_text">' +
                  '<img id="intro_tab_img" alt="sample image for Cypher Notepad" class="noselect" src="resource/sample_main.png" />' +
                '</div>';
  htmlDivIntro = htmlDivIntro.replace(/-content_sub-/g, contentSub)


  contentDetail = '<div id="div_intro_breaker"></div>' + 
                  '<div class="div_content_box intro_tab_detail">' + 
                    '<div class="intro_tab_detail_element">' + 
                      '<div class="icon fas fa-baby"></div>' + 
                      '<div style="margin-left: 60px;">' +
                        '<b>Easy</b>' + 
                        '<br>Cypher Notepad is easy to use. Users don\'t need to care about encryption and decryption. Just keep your secret key.'+
                      '</div>' + 
                    '</div>' +  
                    '<div class="intro_tab_detail_element">' + 
                      '<div class="icon fas fa-bars"></div>' + 
                      '<div style="margin-left: 60px;">' +
                        '<b>Simple</b>' + 
                        '<br>Cypher Notepad has simple UI. Its interface is extremely familiar to users. Users don\'t need to worry about getting used to it.' +
                      '</div>' + 
                    '</div>' +  
                    '<div class="intro_tab_detail_element">' + 
                      '<div class="icon ion-md-lock" style="padding-left:10px; font-size: 47px;"></div>' + 
                      '<div style="margin-left: 60px;">' +
                        '<b>Secure</b>' + 
                        '<br>Cypher Notepad is the best choice to secure your data. It provides hybrid encryption that uses both RSA and AES.' +
                      '</div>' + 
                    '</div>' +  
                    '<div class="intro_tab_detail_element">' + 
                      '<div class="icon fab fa-creative-commons-nc" style="font-size: 37px;"></div>' + 
                      '<div style="margin-left: 60px;">' +
                        '<b>Free</b>' + 
                        '<br>Cypher Notepad is 100% freeware. It is developer\'s pleasure for users to use it. Download it and start protecting your data.' + 
                      '</div>' + 
                    '</div>' +  
                  '</div>';
  htmlDivIntro  = htmlDivIntro + contentDetail
  htmlDivIntro = '<div id="div_intro_wrapper" class="div_slide_down">' + htmlDivIntro + '</div>'

  $('#user_div').append(htmlDivIntro)
  setTimeout(()=>{gotoDiv(document.getElementById("div_intro"))}, scrollDelay);
}

function getDownloadTab(){

  var divDownload = document.getElementById("div_download");
  if(divDownload){
    gotoDiv(divDownload);
    return;
  }

  htmlDivDown = boxTemplate
  htmlDivDown = htmlDivDown.replace(/-div_id-/g, "div_download")
  .replace(/-div_class-/g, "div_content_box div_slide_down")
  .replace(/-title-/g, "Download")


  contentDownload = '<div class="div_content_outer">' + 
                      '<div class="div_content_main noselect">' +
                        '-content_main-' + 
                      '</div>' + 
                      '<div class="div_content_sub">' +
                        '-content_sub-' + 
                      '</div>' + 
                    '</div>';
  htmlDivDown = htmlDivDown.replace(/-box_content-/g, contentDownload)

  contentMain = '<a id="download_windows" href="javascript:window.open(\'https://github.com/LeeDongGeon1996/Cypher-Notepad/releases/tag/1.0\')" class="download">\
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

  contentSub = '<div> <h2 class="tab_sub_title">Download and Protect your data!<h2> </div>' + 
                '<div class="tab_sub_text">' +
                 '<h3> Cypher Notepad 2.1 </h3>' +
                 '<div id="dowload_tab_sub_text_detail">' + 
                  '<ul class="download_detail">' + 
                     '<li>Release Date : 11 Nov 2019</li>' + 
                     '<li>Requirement : The program requires Java Runtime Environment(JRE) 1.8. You can download JRE1.8 ' + 
                     '<a href="https://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html">here</a>.</li>' + 
                  '</ul>' + 
                  '</div>' + 
                '</div>';
                
  htmlDivDown = htmlDivDown.replace(/-content_sub-/g, contentSub)
  


  //$('#div_intro').remove()
  //$('#div_download').remove()
  $('#user_div').append(htmlDivDown)
  
  setTimeout(()=>{gotoDiv(document.getElementById("div_download"))}, scrollDelay);
}

function getContactTab(){

  var divContact = document.getElementById("div_contact");
  if(divContact){
    gotoDiv(divContact);
    return;
  }

  htmlDivContact = boxTemplate
  htmlDivContact = htmlDivContact.replace(/-div_id-/g, "div_contact")
  .replace(/-div_class-/g, "div_content_box div_slide_down")
  .replace(/-title-/g, "Contact")

  
  contentContact = '<div class="div_content_outer">' + 
                      '<div id="sns_btn_div" class="div_content_main">' +
                        '-content_main-' + 
                      '</div>' + 
                      '<div class="div_content_sub">' +
                        '-content_sub-' + 
                      '</div>' + 
                    '</div>';
  htmlDivContact = htmlDivContact.replace(/-box_content-/g, contentContact)


  contentMain = '<a href="javascript:window.open(\'https://www.facebook.com/matth1996\')"><div class="icon ion-logo-facebook icon-bounce"></div></a>' + 
                '<a href="mailto:secmatth1996@gmail.com"><div class="icon ion-md-mail icon-bounce" href="" ></div></a>' + 
                '<a href="javascript:window.open(\'https://github.com/Cypher-Notepad\')"><div class="icon ion-logo-github icon-bounce"></div></a>' + 
                '<a href="javascript:window.open(\'https://www.instagram.com/day12.oct\')"><div class="icon ion-logo-instagram icon-bounce"></div></a>';
  htmlDivContact = htmlDivContact.replace(/-content_main-/g, contentMain)
  
  contentSub = '<div style="font-size:12px;font-color:#777">' + 
                  '<h2 class="tab_sub_title">Feel free to contact</h2> ' +
                  'If you have any problems or questions when using the program, please contact the developer.' +  
                '</div>' + 
                '<div class="tab_sub_text">' +
                  '<div class="contact_tab_noti">' + 
                  '<div id="noti_ring" class="noti_icon icon ion-md-notifications"></div>' + 
                  '<strong style="font-size:28px;">HELP</strong><br>' + 
                  '<div style="margin-left:42px;">We are looking for an Android/IOS developer who is willing to develop and upgrade Cypher Notepad. ' + 
                  'Anyone with an interest on contributing to this project is welcome. ' + 
                  'Please contact us via any of the links above.</div>' +
                  '</div>' + 
                '</div>';
                
    htmlDivContact = htmlDivContact.replace(/-content_sub-/g, contentSub)


  $('#user_div').append(htmlDivContact)
  setTimeout(()=>{gotoDiv(document.getElementById("div_contact"))}, scrollDelay);
}
