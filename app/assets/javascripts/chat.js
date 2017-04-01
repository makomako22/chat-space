$(document).on('turbolinks:load', function(){

  function buildHTML(chat) {
    var html =
     `<div class="chat__box">
        <div class="chat__box--name">
         ${chat.name}
        </div>
        <div class="chat__box--date">
          ${chat.date}
        </div>
        <div class="chat__box--text">
          ${chat.text}
        </div>
      </div>`;
    return html;
  }

  $('.chat_form').on('submit', function(e) {
    e.preventDefault();
    console.log("確認");
    var textField = $('#chat_text');
    console.log(textField);
    var formdata = new FormData($(this).get(0));
    console.log(formdata);
    $.ajax({
      type: 'POST',
      url: './chats',
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
    $('.chat').delay(100).animate({
      scrollTop: $(document).height()
    },1500);
      var html = buildHTML(data);
      $('.chat').append(html);
      textField.val('');
    })
    .fail(function() {
      console.log("エラーメッセージ");
      alert('error');
    });
  });
});
