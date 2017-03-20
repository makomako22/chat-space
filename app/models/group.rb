class Group < ApplicationRecord
  validates :name, presence: true
  has_many :chats
  has_many :group_users
  has_many :users, through: :group_users

  def latest_chat
    chats.last.try(:text) || "まだメッセージはありません。"
  end

end
