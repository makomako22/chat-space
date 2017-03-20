class GroupsController < ApplicationController
  before_action :find_group, only: [:edit, :update]

  def index
    @groups = current_user.groups
  end

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
  end

  def update
    @group.assign_attributes(group_params)
    if @group.save
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

  def find_group
    @group = Group.find(params[:id])
  end

end
