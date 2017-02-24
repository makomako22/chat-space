class Gruop < ApplicationRecord
  has_many :users, through: :gruop_users
end
