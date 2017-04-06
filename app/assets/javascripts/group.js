$(function(){
  var result = $("#user-search-result");
  var select = $("#chat-group-users");
  var preInput = ''

  function searchUsers(user) {
    var html = $(`
      <div class="chat-group-user__select clearfix" data-name="${user.name}" data-id="${user.id}">
        ${user.name}
        <div class="chat-group-user__btn chat-group-user__btn--add">
        追加
        </div>
      </div>` );
    result.append(html);
  };

  function addUsers(user) {
    var html = $(`
      <div class='chat-group-user clearfix'>
        ${user.data('name')}
        <div class="chat-group-user__btn chat-group-user__btn--remove", data-user-name = ${user.data('name')}, data-user-id = ${user.id} >
        削除
        </div>
        <input name="group[user_ids][]", type="hidden", value="${user.data('id')}">
      </div>`);
    select.append(html);
  };


  $('#group_member').on('keyup', function() {
    var input = $(this).val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(data) {
      $(".chat-group-user__select").remove();
      $.each(data.users, function(i, user){
        searchUsers(user);
        preInput = input;
      });
    });
  });

  $(document).on('click', '.chat-group-user__btn--add', function() {
    var user = $(this).parent();
    addUsers(user);
    $(this).parent().remove();
  });

  $(document).on('click', '.chat-group-user__btn--remove',  function() {
    $(this).parent().remove();
  });
});
