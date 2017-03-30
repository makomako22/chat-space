$(function() {
  function buildHTML(chat) {
    var html =
     '<div class="chat__box">' +
        '<div class="chat__box--name">' + chat.user.name + '</div>' +
        '<div class="chat__box--date">' + chat.date + '</div>' +
        '<div class="chat__box--text">' + chat.text + '</div>' +
      '</div>';
    return html;
  }

  $('.message').on('submit', function(e) {
    e.preventDefault();
    var textField = $('.message__box--text');
    var text = textField.val();
    $.ajax({
      type: 'POST',
      url: './chats',
      data: {
        chat: {
          text: text
        }
      },
      dataType: 'json'
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
