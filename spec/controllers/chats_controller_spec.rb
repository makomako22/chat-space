require 'rails_helper'

RSpec.describe ChatsController, type: :controller do
  let(:user) { create(:user) }
  let(:group) { create(:group) }
  let(:chat) { create(:chat) }
  let(:chats) { create(:group.chats) }
  let(:groups) { create(:user.groups) }

  before do
    login_user
  end

  describe 'GET #index' do

    before do
      get :index, group_id: group
    end

    it 'renders the :index template' do
      expect(response).to render_template :index
    end

    it 'assigns the requested group to @group' do
      expect(assigns(:group)).to eq group
    end

    it 'assigns the requested chat to @chat' do
      expect(assigns(:chat)).to be_a_new(Chat)
    end

    it 'assigns the requested chat to @chats' do
      expect(assigns(:chats)).to eq group.chats
    end

    it 'assigns the requested chat to @groups' do
      expect(assigns(:groups)).to eq user.groups
    end

  end

  describe 'POST #create' do
    let(:make) { post :create, params: { group_id: group, chat: attributes_for(:chat, group_id: group.id, user_id: user.id) } }

    it 'save a new chat' do
      expect{ make }.to change(Chat, :count).by(1)
    end

    it 'dose not save a new chat without text' do
      expect{ make }.not_to change(Chat, :count)
    end

    it 'redirect_to root_path' do
      make
      expect(response).to redirect_to group_chats_path(group)
    end

  end

end
