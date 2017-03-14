class Group < ApplicationRecord
  validates :name, presence: true
  has_many :chats
  has_many :group_users
  has_many :users, through: :group_users

  def latest_chat
    if chats.present?
      chats.last.text
    else
      "まだメッセージはありません。"
    end
  end
end
