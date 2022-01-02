const device_info = (function(){
  let isMobile = false;
  return {
      getMobile () {
          return isMobile;
      },
      setMobile (flag){
          if(typeof flag === 'boolean'){
              isMobile = flag;
          }else{
              console.log("failed to setting flag");
          }
      }

  }
})()

if(window.innerWidth <= 767){
  device_info.setMobile(true);
}else{
  device_info.setMobile(false);
}
var resize_timer;
window.onresize =  function(){
  if(!resize_timer){
      resize_timer = setTimeout(function(){
          if(window.innerWidth <= 767){
              device_info.setMobile(true);
          }else{
              device_info.setMobile(false);
          }
      }, 200)
  }
};

$(document).ready(function() {
  const INVALID_KEYS = [13, 16, 17, 18, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46];
    $("#button1").on("click", function(e){
      e.preventDefault();
      if (window.innerWidth > 767) $(".cont-top").removeClass("hide");
      $(".cont-user").removeClass("hide");
      //$(".cont-project.cont").addClass("hide");
      $(".cont-project.cont .cont-top").addClass("hide");
      $(".cont-project.apply .cont-top .cont-inner").addClass("hide");
      $(".home-section.cont-section").find(".cont-tit").html("Contact")

    })

    $("#button3").on("click", function(e){
      e.preventDefault();
      $(".cont-user").removeClass("hide");
      $(".cont-top").addClass("hide");
      $(".cont-project.apply .cont-top .cont-inner").addClass("hide");
      $(".cont-project.apply .form-container").addClass("hide");
      $(".home-section.cont-section").find(".cont-tit").html("Contact")
    })

    //form1 starts - for web
    $("input[name=com_name]").on("keyup focusout focusin paste", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div").css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div").css("color", '');
      }
      
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content]", "plain_text"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_inquiry]", "check"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_email]", "email"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_tel]", "phone"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_name]", "plain_text"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed]:checked", "#button2");
      FORM_METADATAS_CONTACT.emptyList();
    })

    $("input[name=com_tel").on("keydown", function (e) {
      const keyCode = e.keyCode;
      // 189 === -

      if (INVALID_KEYS.lastIndexOf(keyCode) > -1 || keyCode == 189) {
        return false;
      }
      if (check_is_onlyNum($(this).val())) {
        const numStr = `${$(this).val()}`;
        $(this).val(convert_num_to_tel(numStr));
      }
    })
    $("input[name=com_tel]").on("keyup focusout focusin paste", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div").css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div").css("color", '');
      }

      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content]", "plain_text"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_inquiry]", "check"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_email]", "email"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_tel]", "phone"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed]:checked", "#button2");
      FORM_METADATAS_CONTACT.emptyList();
    })
    $("input[name=com_email").on("keydown", function(e){
      const keyCode = e.keyCode;
      if (INVALID_KEYS.lastIndexOf(keyCode) > -1) {
        return false;
      }
    })

    $("input[name=com_email]").on("keyup focusin focusout paste", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div").css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div").css("color", '');
      }

      
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content]", "plain_text"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_inquiry]", "check"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_email]", "email"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed]:checked", "#button2");
      FORM_METADATAS_CONTACT.emptyList();
    })
    $("input[name=com_inquiry]").on("change focusin focusout", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $("input[name=com_inquiry]:checked").length > 0)) {
        $(this).parent("label").parent("div").parent("div.chkBox").children("p").css("color", "black");
        $(this).parent("label").parent("div").css("color", "black");
      } else if (event_type === 'focusout' && $("input[name=com_inquiry]:checked").length <= 0) {
        $(this).parent("label").parent("div").css("color", '');
        $(this).parent("label").parent("div").parent("div.chkBox").children("p").css("color", "");
      }
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content]", "plain_text"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_inquiry]", "check"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed]:checked", "#button2");
      FORM_METADATAS_CONTACT.emptyList();
    })
    //TODO -> 특수 문자...
    const TEXT_AREA_MAX_1 = 800;
    $("textarea[name=com_content]").on("keydown", function(e){
      const keyCode = e.keyCode;
      if (INVALID_KEYS.lastIndexOf(keyCode) > -1) {

        return false;
      }
      const text_val = e.target.value;
      const text_len = text_val.length;
      
      if(text_len > TEXT_AREA_MAX_1){
        return false;
      }
      

      return true;
    })
    $("textarea[name=com_content]").on("paste", function(e){
      setTimeout(function(){
        const text_val = e.target.value;
        const text_len = text_val.length;
        
        if(text_len > TEXT_AREA_MAX_1){
          e.target.value = text_val.slice(0, TEXT_AREA_MAX_1);
        }
      }, 200);
    })
      $("textarea[name=com_content]").on("keyup focusin focusout", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div").css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div").css("color", '');
      }

     
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content]", "plain_text"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed]:checked", "#button2");
      FORM_METADATAS_CONTACT.emptyList();
    })
    const CONTACT_MAX_FILE_SIZE = 10 * 1024 * 1024;

    $("input[name=uploaded_file][type=file]").on("change", function(e){
      const fileSize = $(this)[0].files[0].size;
      if(fileSize >= CONTACT_MAX_FILE_SIZE){
        
        $(this).val("");
        return false;
      }else{
        let html = '';
        const fileName = $(this)[0].files[0].name
        $("p.fileText").html(`${fileName}`);
      }
    })  
    $("input[name=uploaded_file][type=file]").on("change focusin focusout", function (e) {


      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $(this)[0].files[0])) {
        $(this).parent("div").parent("div").css("color", "black");
        $(this).prev().children("span").children("img")[0].src = 'img/file_color.png'
      } else if (event_type === 'focusout' && !$(this)[0].files[0]) {
        $(this).parent("div").parent("div").css("color", '');
        $(this).prev().children("span").children("img")[0].src = 'img/file.png'
      }


      // FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed]", "check"))
      // FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      // form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed]:checked", "#button2");
      // FORM_METADATAS_CONTACT.emptyList();
    })
    $("input[name=agreed]").on("change focusin focusout", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $("input[name=agreed]:checked").length >
        0)) {
        $(this).parent("div.agreement").children("label").css("color", "black");
      } else if (event_type === 'focusout' && $("input[name=agreed]:checked").length <= 0) {
        $(this).parent("div.agreement").children("label").css("color", '');
      }

      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed]", "check"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed]:checked", "#button2");
      FORM_METADATAS_CONTACT.emptyList();
    })
    //form1 end - for web
    //
    //
    //
    //
    //
    //
    //form1 starts - for mobile -==-=-=-=-=-=-=-=-=--=-=-=-=-=-==-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
     $("input[name=com_name_m]").on("keyup focusout focusin paste", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("p").css("color", "black");

        hide_icon_tooltips("input[name=com_name_m]");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("p").css("color", '');
      }
      
      
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed_m]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content_m]", "plain_text"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_inquiry_m]", "check"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_email_m]", "email"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_tel_m]", "phone"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_name_m]", "plain_text"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed_m]:checked", "#button2_m");
      FORM_METADATAS_CONTACT.emptyList();
    })

    $("input[name=com_tel_m]").on("keydown", function (e) {
      const keyCode = e.keyCode;
      // 189 === -

      if (INVALID_KEYS.lastIndexOf(keyCode) > -1 || keyCode == 189) {
        return false;
      }
      if (check_is_onlyNum($(this).val())) {
        const numStr = `${$(this).val()}`;
        $(this).val(convert_num_to_tel(numStr));
      }
    })
    $("input[name=com_tel_m]").on("keyup focusout focusin paste", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("p").css("color", "black");

        hide_icon_tooltips("input[name=com_tel_m]");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("p").css("color", '');
      }

      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed_m]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content_m]", "plain_text"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_inquiry_m]", "check"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_email_m]", "email"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_tel_m]", "phone"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed_m]:checked", "#button2_m");
      FORM_METADATAS_CONTACT.emptyList();
    })
    $("input[name=com_email_m]").on("keydown", function(e){
      const keyCode = e.keyCode;
      if (INVALID_KEYS.lastIndexOf(keyCode) > -1) {
        return false;
      }
    })

    $("input[name=com_email_m]").on("keyup focusin focusout paste", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("p").css("color", "black");

        hide_icon_tooltips("input[name=com_email_m]");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("p").css("color", '');
      }

      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed_m]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content_m]", "plain_text"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_inquiry_m]", "check"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_email_m]", "email"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed_m]:checked", "#button2_m");
      FORM_METADATAS_CONTACT.emptyList();
    })
    $("input[name=com_inquiry_m]").on("change focusin focusout", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $("input[name=com_inquiry]:checked").length > 0)) {
        $(this).parent("label").parent("div").css("color", "black");
      } else if (event_type === 'focusout' && $("input[name=com_inquiry]:checked").length <= 0) {
        $(this).parent("label").parent("div").css("color", '');
      }
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed_m]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content_m]", "plain_text"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=com_inquiry_m]", "check"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed_m]:checked", "#button2_m");
      FORM_METADATAS_CONTACT.emptyList();
    })
    $("textarea[name=com_content_m]").on("keydown", function(e){
      const keyCode = e.keyCode;
      if (INVALID_KEYS.lastIndexOf(keyCode) > -1) {

        return false;
      }
      const text_val = e.target.value;
      const text_len = text_val.length;
     
      if(text_len > TEXT_AREA_MAX_1){
        return false;
      }
      

      return true;
    })
    $("textarea[name=com_content_m]").on("paste", function(e){
      setTimeout(function(){
        const text_val = e.target.value;
        const text_len = text_val.length;
        
        if(text_len > TEXT_AREA_MAX_1){
          e.target.value = text_val.slice(0, TEXT_AREA_MAX_1);
        }
      }, 200);
    })
      $("textarea[name=com_content_m]").on("keyup focusin focusout", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div").css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div").css("color", '');
      }

     
      //input_disabler("input[name=com_tel]", "input[name=com_email]", "input[name=com_inquiry]", "textarea[name=com_content]", "input[name=uploaded_file]", );
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed_m]", "check"))
      //FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("textarea[name=com_content_m]", "plain_text"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed_m]:checked", "#button2_m");
      FORM_METADATAS_CONTACT.emptyList();
    })

    $("input[name=uploaded_file_m][type=file]").on("change", function(e){
      const fileSize = $(this)[0].files[0].size;
      if(fileSize >= CONTACT_MAX_FILE_SIZE){
        
        $(this).val("");
        return false;
      }else{
        let html = '';
        const fileName = $(this)[0].files[0].name
        $("p#fileText_m").html(`${fileName}`);
      }
    })  
    $("input[name=uploaded_file_m][type=file]").on("change focusin focusout", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $(this)[0].files[0])) {
        $(this).parent("div").parent("div").css("color", "black");
        $(this).prev().children("span").children("img")[0].src = 'img/file_color.png'
      } else if (event_type === 'focusout' && !$(this)[0].files[0]) {
        $(this).parent("div").parent("div").css("color", '');
        $(this).prev().children("span").children("img")[0].src = 'img/file.png'
      }


      //input_disabler("input[name=com_tel]", "input[name=com_email]", "input[name=com_inquiry]", "textarea[name=com_content]", "input[name=uploaded_file]", );
      // FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed]", "check"))
      // FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=uploaded_file]", "file"))
      // form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed]:checked", "#button2");
      // FORM_METADATAS_CONTACT.emptyList();
    })
    $("input[name=agreed_m]").on("change focusin focusout", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $("input[name=agreed]:checked").length >
        0)) {
        $(this).parent("div.agreement").children("label").css("color", "black");
      } else if (event_type === 'focusout' && $("input[name=agreed]:checked").length <= 0) {
        $(this).parent("div.agreement").children("label").css("color", '');
      }

      //input_disabler("input[name=com_tel]", "input[name=com_email]", "input[name=com_inquiry]", "textarea[name=com_content]", "input[name=uploaded_file]", );
      FORM_METADATAS_CONTACT.setList(new FORM_DATA_OBJ("input[name=agreed_m]", "check"))
      form_enabler_cascade(FORM_METADATAS_CONTACT, "input[name=agreed_m]:checked", "#button2_m");
      FORM_METADATAS_CONTACT.emptyList();
    })

    //TODO -> 특수 문자...
    //form1 end - for mobile
    //
    //
    //
    //
    //
    //form2 start - for web

    $("input[name=inquiry]").on("change focusin focusout", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $("input[name=inquiry]:checked").length > 0)) {
        $(this).parent("label").parent("div.chk_menu").parent("div.survey_item_chk").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).parent("label").parent("div.chk_menu").parent("div.survey_item_chk").parent("div.survey_item").find("label").css("color", "black");
      } else if (event_type === 'focusout' && $("input[name=inquiry]:checked").length <= 0) {
        $(this).parent("label").parent("div.chk_menu").parent("div.survey_item_chk").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).parent("label").parent("div.chk_menu").parent("div.survey_item_chk").parent("div.survey_item").find("label").css("color", "");
      }

      const isMobile = device_info.getMobile();
      if(isMobile){
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
          //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay_m]", "date"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=email_m]", "email"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=contact_m]", "phone"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=name_m]", "plain_text"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=inquiry]", "check"))
          form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
          FORM_METADATAS_RESUME.emptyList();
      }else{
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
          //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay]", "date"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=email]", "email"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=contact]", "phone"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=name]", "plain_text"))
          FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=inquiry]", "check"))
          form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
          FORM_METADATAS_RESUME.emptyList();
      }
    })
    $("input[name=name]").on("keyup focusin focusout paste", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).css("color", "");
      }

      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay]", "date"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=email]", "email"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=contact]", "phone"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=name]", "plain_text"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })

    $("input[name=contact]").on("keydown", function (e) {
      const keyCode = e.keyCode;
      // 189 === -

      if (INVALID_KEYS.lastIndexOf(keyCode) > -1 || keyCode == 189) {
        return false;
      }
      if (check_is_onlyNum($(this).val())) {
        const numStr = `${$(this).val()}`;
        $(this).val(convert_num_to_tel(numStr));
      }
    })
    $("input[name=contact]").on("keyup focusin focusout paste", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).css("color", "");

      }
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay]", "date"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=email]", "email"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=contact]", "phone"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    $("input[name=email]").on("keyup focusin focusout paste", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).css("color", "");

      }

      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay]", "date"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=email]", "email"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    $("input[name=commuteDay").on("keydown", function (e) {
      const keyCode = e.keyCode;
      // 189 === -

      if (INVALID_KEYS.lastIndexOf(keyCode) > -1 || keyCode == 189) {

        return false;
      }
      if (check_is_onlyNum($(this).val()) && keyCode !== 8) {
        $(this).val(convert_num_to_date($(this).val()))
      }
    })
    $("input[name=commuteDay]").on("keyup focusin focusout paste", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).css("color", "");

      }

      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay]", "date"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    const APPLY_MAX_FILE_SIZE = 5 * 1024 * 1024;
    //, input[name=selfIntro][type=file], input[name=portfolio][type=file], input[name=url][type=file]
    $("input[name=resume][type=file]").on("change.check", function(e){
      
      const fileSize = $(this)[0].files[0].size;
      if(fileSize >= APPLY_MAX_FILE_SIZE){
        $(this).val("");
        return false;
      }else{
        const fileName = $(this)[0].files[0].name
        let html = `
            ${fileName}
            <span class="file-img apply-file">
              <img src="img/file.png" alt="file img"/>
            </span>
                   `
        $(this).next("label").html(html);
      }
    })
    $("input[name=resume]").on("change focusin focusout", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $(this)[0].files[0])) {
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("div.tit2").children("span.question").css("color", "black");
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("p.file_ex").css("color", "black");
        $(this).next("label").css("color", "black");

        $(this).next("label").children("span").children("img")[0].src = 'img/file_color.png'
      } else if (event_type === 'focusout' && !$(this)[0].files[0]) {
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("div.tit2").children("span.question").css("color", "");
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("p.file_ex").css("color", "");
        $(this).next("label").css("color", "");

        $(this).next("label").children("span").children("img")[0].src = 'img/file.png'

      }
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    $("input[name=selfIntro][type=file]").on("change", function(e){
      const fileSize = $(this)[0].files[0].size;
      if(fileSize >= APPLY_MAX_FILE_SIZE){

        $(this).val("");
        return false;
      }else{
        const fileName = $(this)[0].files[0].name
        let html = `
            ${fileName}
            <span class="file-img apply-file1">
              <img src="img/file.png" alt="file img"/>
            </span>
                   `
        $(this).next("label").html(html);
      }
    })

    $("input[name=selfIntro]").on("change focusin focusout", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $(this)[0].files[0])) {
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("div.tit2").children("span.question").css("color", "black");
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("p.file_ex").css("color", "black");
        $(this).next("label").css("color", "black");

        $(this).next("label").children("span").children("img")[0].src = 'img/file_color.png'
      } else if (event_type === 'focusout' && !$(this)[0].files[0]) {
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("div.tit2").children("span.question").css("color", "");
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("p.file_ex").css("color", "");
        $(this).next("label").css("color", "");

        $(this).next("label").children("span").children("img")[0].src = 'img/file.png'

      }
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    $("input[name=portfolio][type=file]").on("change", function(e){
      
      const fileSize = $(this)[0].files[0].size;
      if(fileSize >= APPLY_MAX_FILE_SIZE){
       
        $(this).val("");
        return false;
      }else{
        
        const fileName = $(this)[0].files[0].name
        let html = `
            ${fileName}
            <span class="file-img">
              <img src="img/file.png" alt="file img"/>
            </span>
                   `
        $(this).next("label").html(html);
      }
    })
    $("input[name=portfolio]").on("change focusin focusout", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $(this)[0].files[0])) {
        //$(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("div.tit2").children("span.question").css("color", "black");
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("p.file_ex").css("color", "black");
        $(this).next("label").css("color", "black");

        $(this).next("label").children("span").children("img")[0].src = 'img/file_color.png'
      } else if (event_type === 'focusout' && !$(this)[0].files[0]) {
        //$(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("div.tit2").children("span.question").css("color", "");
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("p.file_ex").css("color", "");
        $(this).next("label").css("color", "");

        $(this).next("label").children("span").children("img")[0].src = 'img/file.png'

      }
      // FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      // FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      // FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))

      // form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      // FORM_METADATAS_RESUME.emptyList();
    })
    $("input[name=url][type=file]").on("change", function(e){
      
      const fileSize = $(this)[0].files[0].size;
      if(fileSize >= APPLY_MAX_FILE_SIZE){
        
        $(this).val("");
        return false;
      }else{
        
        const fileName = $(this)[0].files[0].name
        let html = `
            ${fileName}
            <span class="file-img apply-file1">
              <img src="img/file.png" alt="file img"/>
            </span>
                   `
        $(this).next("label").html(html);
      }
    })
    $("input[name=url][type=file]").on("change focusin focusout", function(e){
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $(this)[0].files[0])) {
        //$(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("div.tit2").children("span.question").css("color", "black");
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("p.file_ex").css("color", "black");
        $(this).next("label").css("color", "black");

        $(this).next("label").children("span").children("img")[0].src = 'img/file_color.png'
      } else if (event_type === 'focusout' && !$(this)[0].files[0]) {
        //$(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("div.tit2").children("span.question").css("color", "");
        $(this).parent("div.file-user").parent("div.survey_item").parent("div.survey").children("p.file_ex").css("color", "");
        $(this).next("label").css("color", "");

        $(this).next("label").children("span").children("img")[0].src = 'img/file.png'
      }
    })
    const TEXT_AREA_MAX_2 = 800;
    $("textarea[name=content]").on("keydown", function(e){
      const text_val = e.target.value;
      const text_len = text_val.length;

      if(text_len > TEXT_AREA_MAX_2){
        return false;
      }
    })
    $("textarea[name=content]").on("paste", function(e){
      setTimeout(function(){
        const text_val = e.target.value;
        const text_len = text_val.length;
        
        if(text_len > TEXT_AREA_MAX_2){
          e.target.value = text_val.slice(0, TEXT_AREA_MAX_2);
        }
      }, 200);
    })

    $("textarea[name=content]").on("keyup focusin focusout", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.textarea").parent("div.survey").children("div.tit2").children("span.question").css("color", "black");
        $(this).css("color", "black");
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.textarea").parent("div.survey").children("div.tit2").children("span.question").css("color", "");
        $(this).css("color", "");
      }

      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    $("input[name=resume_agreed]").on("change focusin focusout", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'change' && $("input[name=resume_agreed]:checked")
          .length > 0)) {
        $(this).parent("div.agreement").children("label").css("color", "black");

      } else if (event_type === 'focusout' && $("input[name=resume_agreed]:checked").length <= 0) {
        $(this).parent("div.agreement").children("label").css("color", "");
      }

      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    //form2 end - for web

    //form2 start - for mobile
    $("input[name=name_m]").on("keyup focusin focusout paste", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).css("color", "black");

        $(this).next("span")[0].style.opacity = 0;
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).css("color", "");

        $(this).next("span")[0].style.opacity = 100;
      }

      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay_m]", "date"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=email_m]", "email"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=contact_m]", "phone"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=name_m]", "plain_text"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })

    $("input[name=contact_m]").on("keydown", function (e) {
      const keyCode = e.keyCode;
      // 189 === -

      if (INVALID_KEYS.lastIndexOf(keyCode) > -1 || keyCode == 189) {
        return false;
      }
      if (check_is_onlyNum($(this).val())) {
        const numStr = `${$(this).val()}`;
        $(this).val(convert_num_to_tel(numStr));
      }
    })
    $("input[name=contact_m]").on("keyup focusin focusout paste", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).css("color", "black");

        $(this).next("span")[0].style.opacity = 0;
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).css("color", "");

        $(this).next("span")[0].style.opacity = 100;
      }
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay_m]", "date"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=email_m]", "email"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=contact_m]", "phone"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    $("input[name=email_m]").on("keyup focusin focusout paste", function (e) {

      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).css("color", "black");

        $(this).next("span")[0].style.opacity = 0;
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).css("color", "");

        $(this).next("span")[0].style.opacity = 100;
      }

      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay_m]", "date"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=email_m]", "email"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    $("input[name=commuteDay_m]").on("keydown", function (e) {
      const keyCode = e.keyCode;
      // 189 === -

      if (INVALID_KEYS.lastIndexOf(keyCode) > -1 || keyCode == 189) {

        return false;
      }
      if (check_is_onlyNum($(this).val()) && keyCode !== 8) {
        $(this).val(convert_num_to_date($(this).val()))
      }
    })
    $("input[name=commuteDay_m]").on("keyup focusin focusout paste", function (e) {
      const event_type = e.type;
      if (event_type === 'focusin' || (event_type === 'keyup' && $(this).val().trim())) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "black");
        $(this).css("color", "black");

        $(this).next("span")[0].style.opacity = 0;
      } else if (event_type === 'focusout' && !$(this).val().trim()) {
        $(this).parent("div.survey_name").parent("div.survey_item").parent("div.survey").children("div.tit").children("span.question").css("color", "");
        $(this).css("color", "");

        $(this).next("span")[0].style.opacity = 100;
      }

      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume_agreed]", "check"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("textarea[name=content]", "plain_text"))
      //FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=portfolio]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=selfIntro]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=resume]", "file"))
      FORM_METADATAS_RESUME.setList(new FORM_DATA_OBJ("input[name=commuteDay_m]", "date"))

      form_enabler_cascade(FORM_METADATAS_RESUME, "input[name=resume_agreed]:checked", "#button4");
      FORM_METADATAS_RESUME.emptyList();
    })
    //form2 end - for mobile

    //form2 start ???
    let form2_timer;
    document.getElementById("button2").addEventListener("click", function (event) {
      event.preventDefault();
      
      if(!form2_timer){
          sendEmailWithFormData("cont-form");
          form2_timer = setTimeout(() => {
              form2_timer = undefined;
          }, 5000);
      }
    })
    let form2_mob_timer;
    document.getElementById("button2_m").addEventListener("click", function (event) {
      event.preventDefault();
      
      if(!form2_mob_timer){
          sendEmailWithFormData("cont-form_m");
          form2_mob_timer = setTimeout(() => {
            form2_mob_timer = undefined;
          }, 5000);
      }
    })

    //form 1????
    let form1_timer;
    document.getElementById("button4").addEventListener("click", function (event) {
      event.preventDefault();
      
      if(!form1_timer){
          sendEmailWithFormDataResume();
          form1_timer = setTimeout(() => {
              form1_timer = undefined;
          }, 5000)
      }
    })

  });
  const SERVER_DOMAIN = 'http://15.164.234.90:3000'
  const LOCAL_DOAMIN = 'http://localhost:3000';

  function sendEmail() {
    const data = {
      "compName": 'Test String',
      "contact": 'Test String',
      "email": 'Test String',
      "content": 'Test String',
      "inquiry": 'Test String',
      "agreed": 'Test String',
      "to": "wgtr9512@gmail.com",
      "subject": "TEST2"
    }
    sendRequest(data, "/home/sendEmail/contact/make");
  }
  const IS_RESUME = 1;
  const IS_CONTACT = 0;
  function sendEmailWithFormDataResume() {
    const formData = new FormData(document.getElementById("apply-form"));

    sendRequestWithFormData(formData, SERVER_DOMAIN + "/home/sendEmail/resume", IS_RESUME);
  }

  function sendEmailWithFormData(id) {
    const formData = new FormData(document.getElementById(id));
    
    sendRequestWithFormData(formData, SERVER_DOMAIN + "/home/sendEmail/contact/makeWithFile", IS_CONTACT);
  }
  
  function sendRequestWithFormData(data, url, which_form) {
    const httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert("failed to send Email");
      return false;
    }
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        if(which_form == IS_RESUME){
          if(device_info.getMobile()){
            $("#popup-apply1-m").fadeIn();
          }else{
            $("#popup-apply1").fadeIn();
          }

        }else if(which_form == IS_CONTACT){
          $("#popup-apply").fadeIn();
        }

      }
    }
    httpRequest.onerror = function(){
        if(which_form === IS_RESUME){
          $("#popup-file1").fadeIn();
        }else if(which_form === IS_CONTACT){
          $("#popup-file").fadeIn();
        }
    }
    httpRequest.ontimeout = function(){
      if(which_form === IS_RESUME){
        $("#popup-file1").fadeIn();
      }else if(which_form === IS_CONTACT){
        $("#popup-file").fadeIn();
      }
    }
    httpRequest.open("POST", url);
    //httpRequest.setRequestHeader("Content-Type", false);
    httpRequest.setRequestHeader("enctype", "multipart/form-data");

    httpRequest.send(data);
  }

  

  class FORM_DATA_OBJ {
    #selector;
    #type;
    #isMobile
    constructor(selector, type, isMobile = false) {
      this.#selector = selector;
      this.#type = type;
      this.#isMobile = isMobile;
    }
    get selector() {
      return this.#selector;
    }
    get type() {
      return this.#type;
    }
    get isMobile(){
        return this.#isMobile;
    }
  }
  const FORM_METADATAS_CONTACT = (function () {
    const list = [];
    return {
      setList(obj) {
        if (obj instanceof FORM_DATA_OBJ) {
          list.push(obj)
        }
      },
      getList() {
        const temp_list = [];
        for (const elem of list) {
          temp_list.push(new FORM_DATA_OBJ(elem.selector, elem.type, elem.isMobile))
        }
        return temp_list;
      },
      emptyList() {
        list.length = 0;
      },
      popList() {
        list.pop();
      }
    }
  })();
  const FORM_METADATAS_RESUME = (function () {
    const list = [];
    return {
      setList(obj) {
        if (obj instanceof FORM_DATA_OBJ) {
          list.push(obj)
        }
      },
      getList() {
        const temp_list = [];
        for (const elem of list) {
          temp_list.push(new FORM_DATA_OBJ(elem.selector, elem.type, elem.isMobile))
        }
        return temp_list;
      },
      emptyList() {
        list.length = 0;
      },
      popList() {
        list.pop();
      }
    }
  })();

  function form_enabler_cascade(r_sorted_forms_metadata, endSelector, submitSelector) {
    const meta_list = r_sorted_forms_metadata.getList();
    const meta_list_len = meta_list.length - 1;
    const i = meta_list_len;
    const type = meta_list[i].type;
    const selector = meta_list[i].selector;


    let isInValid = false;
    switch (type) {
      case 'plain_text': {
        const isInput = $(selector)[0].nodeName == 'INPUT';

        if ($(selector).val().trim() && (i - 1 >= 0)) {
          
          hide_icon_tooltips(selector);

          const next_selector = meta_list[i - 1].selector;
          $(next_selector).prop("disabled", false);
          r_sorted_forms_metadata.popList();

          form_enabler_cascade(r_sorted_forms_metadata, endSelector, submitSelector);
        } else if (!$(selector).val().trim() || (isInput && $(selector).val().length > 25)) {

          show_icon_tooltips(selector);

          r_sorted_forms_metadata.popList();

          isInValid = form_disabler_cascade(r_sorted_forms_metadata, submitSelector);
        }
        break;
      }
      case 'phone': {

        const regex = /^010-[0-9]{4}-[0-9]{4}$/
        if (regex.test($(selector).val()) && (i - 1 >= 0)) {

          hide_icon_tooltips(selector);

          const next_selector = meta_list[i - 1].selector;
          $(next_selector).prop("disabled", false);
          r_sorted_forms_metadata.popList();

          form_enabler_cascade(r_sorted_forms_metadata, endSelector, submitSelector);
        } else if (!regex.test($(selector).val())) {

          show_icon_tooltips(selector);

          r_sorted_forms_metadata.popList();

          isInValid = form_disabler_cascade(r_sorted_forms_metadata, submitSelector);
        }
        break;
      }
      case 'email': {

        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (regex.test($(selector).val()) && (i - 1 >= 0)) {

          hide_icon_tooltips(selector);

          const next_selector = meta_list[i - 1].selector;
          $(next_selector).prop("disabled", false);
          r_sorted_forms_metadata.popList();

          form_enabler_cascade(r_sorted_forms_metadata, endSelector, submitSelector);
        } else if (!regex.test($(selector).val())) {

          show_icon_tooltips(selector);

          r_sorted_forms_metadata.popList();

          isInValid = form_disabler_cascade(r_sorted_forms_metadata, submitSelector);
        }
        break;
      }
      case 'check': {

        if ($(selector + ":checked").length >= 1 && (i - 1 >= 0)) {

          hide_icon_tooltips(selector);

          const next_selector = meta_list[i - 1].selector;
          $(next_selector).prop("disabled", false);
          r_sorted_forms_metadata.popList();

          form_enabler_cascade(r_sorted_forms_metadata, endSelector, submitSelector);

        } else if ($(selector + ":checked").length < 1) {
          r_sorted_forms_metadata.popList();

          isInValid = form_disabler_cascade(r_sorted_forms_metadata, submitSelector);
        }
        break;
      }
      case 'file': {

        const file = $(selector)[0].files[0];
        if (file && (i - 1 >= 0)) {

          hide_icon_tooltips(selector);

          const next_selector = meta_list[i - 1].selector;
          $(next_selector).prop("disabled", false);
          r_sorted_forms_metadata.popList();

          form_enabler_cascade(r_sorted_forms_metadata, endSelector, submitSelector);

        } else if (!file) {
          r_sorted_forms_metadata.popList();

          isInValid = form_disabler_cascade(r_sorted_forms_metadata, submitSelector);
        }
        break;
      }
      case 'date': {

        if ($(selector).val().trim() && (i - 1 >= 0) && isValidDate($(selector).val())) {

          hide_icon_tooltips(selector);

          const next_selector = meta_list[i - 1].selector;
          $(next_selector).prop("disabled", false);
          r_sorted_forms_metadata.popList();

          form_enabler_cascade(r_sorted_forms_metadata, endSelector, submitSelector);
        } else if (!$(selector).val().trim() || !isValidDate($(selector).val())) {

          show_icon_tooltips(selector);

          r_sorted_forms_metadata.popList();

          isInValid = form_disabler_cascade(r_sorted_forms_metadata, submitSelector);
        }
        break;
      }
    }
    //끝 부분 이라면... 전부 체크한다...
    if (i - 1 < 0 && $(endSelector).length > 0) {

      $(submitSelector).prop("disabled", false);
      $(submitSelector).addClass("success")
    } else if ($(endSelector).length > 0) {
      $(submitSelector).prop("disabled", true);
      $(submitSelector).removeClass("success");
    }
  }

  function form_disabler_cascade(r_sorted_forms_metadata, submitSelecotr) {
    const meta_list = r_sorted_forms_metadata.getList();
    const meta_list_len = meta_list.length - 1;
    for (let i = meta_list_len; i >= 0; i--) {
      const type = meta_list[i].type;
      const selector = meta_list[i].selector;

      $(selector).prop("disabled", true);
      hide_icon_tooltips(selector);
    }
    $(submitSelecotr).prop("disabled", true);
    $(submitSelecotr).removeClass("success");
    return true;
  }

  function show_icon_tooltips(invalidSelector) {

    //show icons
    //const parent_find_alert_img = $(invalidSelector).parent().find(".alert-img");
    const next_alert_img = $(invalidSelector).next(".alert-img");
    let alert_img_jq_elem;
    
    alert_img_jq_elem = next_alert_img;

    if (alert_img_jq_elem && alert_img_jq_elem.length == 1) {
      
      $(invalidSelector).addClass("red");
      alert_img_jq_elem.removeClass("hide");

    }
    if( $(invalidSelector).parent("p").next("p.alert-text").length > 0 ){
        $(invalidSelector).parent("p").next("p.alert-text").removeClass("hide");
    }

    //show tooltips
    if( $(invalidSelector).parent().next("p").hasClass("alert-text") ){
      $(invalidSelector).parent().next("p").removeClass("hide");
    }
    if( $(invalidSelector).next("span").next("p.alert-textS").length > 0 ){
      $(invalidSelector).next("span").next("p.alert-textS").removeClass("hide");
    }

    //mobile form 2
    if( $(invalidSelector).next("span").next("span.alert-img").length > 0 ){
      $(invalidSelector).next("span").next("span.alert-img").removeClass("hide");
    }
    if( $(invalidSelector).next("span").next("span.alert-img").next("p").length > 0 ){
      $(invalidSelector).next("span").next("span.alert-img").next("p").removeClass("hide")
    }

    //mobile form1
    if( $(invalidSelector).next("p.alert-text").length > 0 ){
      $(invalidSelector).next("p.alert-text").removeClass("hide");
    }

  }

  function hide_icon_tooltips(validSelector) {
    
    //hide icons
    //const parent_find_alert_img = $(validSelector).parent().find(".alert-img");
    const next_alert_img = $(validSelector).next(".alert-img");
    let alert_img_jq_elem;
    
    alert_img_jq_elem = next_alert_img;
    if (alert_img_jq_elem && alert_img_jq_elem.length == 1) {
      
      alert_img_jq_elem.addClass("hide");
      $(validSelector).removeClass("red");
    }
    
    if( $(validSelector).parent("p").next("p.alert-text").length > 0 ){
        $(validSelector).parent("p").next("p.alert-text").addClass("hide");
    }

    //hide tooltips
    if( $(validSelector).parent().next("p").hasClass("alert-text") ){
      $(validSelector).parent().next("p").addClass("hide");
    }
    if( $(validSelector).next("span").next("p.alert-textS").length > 0 ){
      $(validSelector).next("span").next("p.alert-textS").addClass("hide");
    }
    //mobile form 2
    if( $(validSelector).next("span").next("span.alert-img").length > 0 ){
      $(validSelector).next("span").next("span.alert-img").addClass("hide");
    }
    if( $(validSelector).next("span").next("span.alert-img").next("p").length > 0 ){
      $(validSelector).next("span").next("span.alert-img").next("p").addClass("hide");
    }  
    //mobile form 1
    if( $(validSelector).next("p.alert-text").length > 0 ){
      $(validSelector).next("p.alert-text").addClass("hide");
    }  
  }

  function check_is_onlyNum(str) {
    const no_bar_str = str.replace(/-/gi, "");

    const strLen = no_bar_str.length;
    for (let i = 0; i < strLen; i++) {
      if (no_bar_str[i].charCodeAt(0) >= 48 && no_bar_str[i].charCodeAt(0) <= 57) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  function convert_num_to_tel(numStrWithBar) {
    const numStr = numStrWithBar.replace(/-/gi, "");
    const strLen = numStr.length;
    let outputStr = '';

    if (strLen >= 8 && strLen < 10) {
      outputStr = `${numStr.slice(0, 3)}-${numStr.slice(3, 6)}-${numStr.slice(6, strLen)}`
    } else if (strLen >= 10) {
      outputStr = `${numStr.slice(0, 3)}-${numStr.slice(3, 7)}-${numStr.slice(7, strLen)}`
    } else if (strLen >= 4) {
      outputStr = `${numStr.slice(0, 3)}-${numStr.slice(3, strLen)}`
    } else {
      outputStr = numStr;
    }
    return outputStr;
  }

  function convert_num_to_date(numStrWithBar) {
    const numStr = numStrWithBar.replace(/-/gi, "");
    const strLen = numStr.length;
    let outputStr = '';
    if (strLen <= 4) {
      outputStr = numStr;
      return outputStr;
    }

    //적어도 년은 다 있을 경우부터...
    const year = numStr.substring(0, 4);
    const rest_year = numStr.substring(4, strLen);

    const fst_month_num_CHAR_CODE = rest_year[0]?.charCodeAt(0);
    const scnd_month_num_CHAR_CODE = rest_year[1]?.charCodeAt(0);

    let month = '';
    let rest_month = '';
    // 48 == 0
    // 49 == 1
    if (fst_month_num_CHAR_CODE == 48) {
      month = rest_year.substring(0, 2);
      rest_month = month.length == 1 ? null : rest_year.substring(2, strLen - 4)
    } else if (fst_month_num_CHAR_CODE == 49 && scnd_month_num_CHAR_CODE) {
      month = rest_year.substring(0, 2);
      rest_month = month.length == 1 ? null : rest_year.substring(2, strLen - 4)
    } else if (fst_month_num_CHAR_CODE == 49 && !scnd_month_num_CHAR_CODE) {
      month = rest_year.substring(0, 2);
      rest_month = month.length == 1 ? null : rest_year.substring(2, strLen - 4)
    } else if (fst_month_num_CHAR_CODE >= 49 && fst_month_num_CHAR_CODE <= 57) {
      month = `0${rest_year.substring(0, 1)}`
      rest_month = rest_year.substring(1, strLen - 4)
    }
    outputStr = `${year}-${month}-${rest_month ? rest_month : ''}`;
    return outputStr;
  }

  function isValidDate(dateStr) {
    const date_tokens = dateStr.split("-");
    if (date_tokens.length == 3 && check_is_onlyNum(dateStr)) {
      const input_date = new Date();
      input_date.setFullYear(date_tokens[0])
      input_date.setMonth(date_tokens[1] - 1)

      
      const input_day = new Date();
      input_day.setFullYear(date_tokens[0])
      input_day.setMonth(date_tokens[1] - 1)
      input_day.setDate(date_tokens[2])
      

      if(input_date.getMonth() == input_day.getMonth()){
        return true;
      }else{
        return false;
      }
    } else {
      return false
    }
  }