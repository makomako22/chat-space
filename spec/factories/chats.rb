FactoryGirl.define do

  factory :chat do
    text    { Faker::Lorem.sentence }
    user
    group
  end

end
