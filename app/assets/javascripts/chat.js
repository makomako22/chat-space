$(document).on('turbolinks:load', function(){

  function buildHTML(chat) {
    var chatImage = chat.image? `
      <div class="chat__box--image">
        <img src="${chat.image}">
      </div>`: '';
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
          ${chatImage}
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
      $('.chat').empty();
      $.each(data.chats, function(i, chat) {
      buildHTML(chat);
      });
    })
  }

  setInterval(autoLoad, 10000);

  $("#image_file").change(function(e) {
    sendFile(e)
  });

  $('.chat_form').on('submit', function(e) {
    sendFile(e)
  });
});
