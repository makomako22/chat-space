class ChatsController < ApplicationController
  before_action :set_group, only: [:index, :create]
  before_action :set_groups, only: :index
  before_action :set_chat, only: :index
  before_action :set_group_chats, only: :index

  def index
  end

  def create
    @chat = @group.chats.new(chat_params)
    if @chat.save
      respond_to do |format|
        format.html
        format.json
      end
    else
      redirect_to group_chats_path(@group), alert: "テキストを入力してください"
    end
  end

  private
  def chat_params
    params.require(:chat).permit(:text).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

  def set_chat
    @chat = Chat.new
  end

  def set_group_chats
    @chats = @group.chats
  end

end
