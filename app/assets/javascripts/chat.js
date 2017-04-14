$(document).on('turbolinks:load', function(){
  var path = location.pathname;
  var reloadTime = 10000;

  function buildHTML(chat) {
    var chatImage = chat.image? `
      <img src="${chat.image}">
        `: '';
    $('.chat').append(
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
        <div class="chat__box--image">
          ${chatImage}
        </div>
      </div>`);
  }

  function scroll(d_time, s_time) {
    $('.chat').delay(d_time).animate({
      scrollTop: $(document).height()
    },s_time);
  }

  function sendFile(e) {
    e.preventDefault();
    var textField = $('#chat_text');
    var formdata = new FormData($('.chat_form').get(0));

    $.ajax({
      type: 'POST',
      url: './chats',
      data: formdata,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      buildHTML(data);
      textField.val('');
      scroll(100, 1500);
      $('.message__send').removeAttr('disabled');
      })
    .fail(function() {
      alert('テキストか画像を入力してください');
    });
  }

  function autoLoad() {

    $.ajax({
      type: 'GET',
      url: './chats',
      dataType: 'json'
    })
    .done(function(data) {
      var chatCount = $('.chat__box').length;
      var currentCount = data.chats.length;
      var newCount = (currentCount - chatCount);
      if (newCount > 0) {
        for (var i = chatCount; i < currentCount; i=(i+1)) {
          buildHTML(data.chats[i]);
        scroll(100, 1500);
        }
      }
    })
  }

  if (path.match('/chats')) {
    setInterval(autoLoad, reloadTime);
  }

  $("#image_file").change(function(e) {
    sendFile(e)
  });

  $('.chat_form').on('submit', function(e) {
    sendFile(e)
  });
});
