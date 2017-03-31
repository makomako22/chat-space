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

  $('.chat_form').on('submit', function(e) {
    e.preventDefault();
    var textField = $('.message__box--text');
    var formData = new FormData($('.chat_form').get(0));
    $.ajax({
      type: 'POST',
      url: './chats',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.chat__box').append(html);
      textField.val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});
