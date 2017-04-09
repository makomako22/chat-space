class Chat < ApplicationRecord
  validates :text_or_image, presence: true
  belongs_to :user
  belongs_to :group
  mount_uploader :image, ImageUploader

  def date
    created_at.strftime("%Y-%m-%d %H:%M:%S")
  end

  def text_or_image
    text.presence or image.presence
  end

end
