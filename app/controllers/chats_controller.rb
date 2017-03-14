class ChatsController < ApplicationController
  before_action :authenticate_user!
  def index
    @chat = Chat.new
    @groups = Group.all
    @group = Group.find(params[:group_id])
  end

  def create
    @chat = current_user.chats.new(chat_params)
    @chat.save
    redirect_to root_path, notice: "メッセージを作成できました。"
  end

  private
  def chat_params
    params.require(:chat).permit(:text).merge(group_id: params[:group_id])
  end


end
