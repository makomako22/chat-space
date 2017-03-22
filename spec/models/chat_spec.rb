require 'rails_helper'

describe Chat do
  describe '#create' do
    it 'is valid with all' do
      chat = build(:chat)
      expect(chat).to be_valid
    end

    it 'is invalid without a text' do
      chat = build(:chat, text: nil)
      chat.valid?
      expect(chat.errors[:text]).to include('を入力してください。')
    end
  end
end
