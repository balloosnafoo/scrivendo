Rails.application.routes.draw do
  root :to => "static_pages#home"

  resources :users
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :stories, only: [:create, :index, :show, :update, :destroy]
    resources :tellings, only: [:create, :index, :show, :update, :destroy]
    resources :critiques, only: [:create, :index, :show, :update, :destroy]
  end
end
