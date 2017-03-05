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

  private
  def group_params
    params.require(:group).permit(:name, user_ids:[])
  end

end
