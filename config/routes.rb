Rails.application.routes.draw do
  devise_for :users
  root      'groups#index'
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :chats, only: [:index, :create]
  end
  resources :users , only: :index
end
