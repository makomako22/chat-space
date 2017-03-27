$(function() {
  function buildHTML(chat) {
    var html = $('<div class="chat__box">').append(chat.content);
    return html;
  }

  $('message__box').on('submit', function(event){
    event.preventDefault();
    var textField = $('message__box--text');
    var text = textField.val();
    $ajax({
      type: 'POST',
      url: '/chats.json',
      data: {
        chat: {
          text: text
        }
      },
      dataType: 'json'
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.chat--box').append(html);
      textField.val('');
      })
    .fail(function() {
      alert('error');
      });
    });
  })
