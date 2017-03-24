require 'rails_helper'

RSpec.describe ChatsController, type: :controller do
  let(:user) { create(:user) }
  let(:group) { create(:group) }
  let(:chat) { create(:chat) }

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

  end

  describe 'POST #create' do

    it 'save a new chat' do
      expect(chat.save).to be true
    end

    it 'dose not save a new chat without body' do
      chat = build(:chat, text: nil)
      chat.valid?
      expect(chat.errors[:text]).to include('を入力してください。')
    end

  end

end
