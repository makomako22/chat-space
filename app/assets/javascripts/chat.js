$(document).on('turbolinks:load', function(){

  function buildHTML(chat) {
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
      </div>`);
  }

  function scroll() {
    $('.chat').delay(100).animate({
      scrollTop: $(document).height()
    },1500);
  }

  $('.chat_form').on('submit', function(e) {
    e.preventDefault();
    var textField = $('#chat_text');
    var formdata = new FormData($(this).get(0));

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
      scroll();
    })
    .fail(function() {
      alert('error');
    });
  });
});
