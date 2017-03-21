class Chat < ApplicationRecord
  validates :text, presence: true
  belongs_to :user
  belongs_to :group

  def date
    created_at.strftime("%Y-%m-%d %H:%M:%S")
  end

end