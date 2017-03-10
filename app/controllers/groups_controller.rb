class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: "グループを作成できました。"
    else
      flash[:alert] = "nameを入力してください"
      render :new
    end
  end

  def edit
    @group = Group.find(params[:id])
    @users = User.all
  end

  def update
    group = Group.find(params[:id])
    if group.update(group_params)
      redirect_to root_path, notice: "チャットグループが更新されました"
    else
      flash[:alert] = "nameを入力してください"
      render :new
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, user_ids:[])
  end

end
