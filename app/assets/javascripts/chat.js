$(function() {
  function buildHTML(chat) {
    var html =
     `<div class="chat__box">
        <div class="chat__box--name">
         chat.user.name
         </div>
        <div class="chat__box--date">
          chat.date
        </div>
        <div class="chat__box--text">
          chat.text
        </div>
      </div>`;
    return html;
  }

  $('.message').on('submit', function(e) {
    e.preventDefault();
    console.log("確認");
    var textField = $('.message__box--text');
    console.log(textField);
    var formData = new FormData($('.message').get(0));
    console.log(formData);
    $.ajax({
      type: 'POST',
      url: './chats',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      console.log("ここまでの確認");
      var html = buildHTML(data);
      console.log(html);
      $('.chat__box').append(html);
      textField.val('');
    })
    .fail(function() {
      console.log("エラーメッセージ");
      alert('error');
    });
    return false;
  });
});
