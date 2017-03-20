class ChatsController < ApplicationController
  before_action :set_group, only: [:index, :create]
  before_action :set_groups, only: :index
  before_action :set_chat, only: :index
  before_action :set_group_chats, only: :index

  def index
  end

  def create
    @chat = @group.chats.new(chat_params)
    @chat.save
    redirect_to root_path, notice: "メッセージを作成できました。"
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
