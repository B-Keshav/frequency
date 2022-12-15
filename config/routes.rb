Rails.application.routes.draw do
  resources :relationships
  resources :users, only: [:index, :create]
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get '/me', to: "users#show"


  get "/hello", to: "application#hello_wrld"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
