require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['S3_ACCESS_KEY_ID'],
    aws_secret_access_key: ENV['S3_SECRET_ACCESS_KEY'],
    region: 'ap-northeast-1'
  }

  case Rails.env
    when 'production'
      config.storage = :fog
      config.fog_directory = 'rails-app-image-data'
      config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/rails-app-image-data'

    when 'development'
      config.storage = :fog
      config.fog_directory = 'rails-app-image-data'
      config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/rails-app-image-data'

    when 'test'
      config.storage :file
  end
end
