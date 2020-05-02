Rails.application.routes.draw do
  
  devise_for :users

  root 'home#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
    	resources :gyms,   except: [:edit,:new]
    	resources :users,  except: [:edit,:new]
    	resources :aulas,  except: [:edit,:new]
    	resources :avisos, except: [:edit,:new]
      resources :planos, except: [:edit,:new]
      resources :alunos, except: [:edit,:new]

      post '/upload', to: "gyms#upload"
    end
  end

  namespace :ui do
    resources :gyms, only: :index
  end
end
