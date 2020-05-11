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

      post '/gyms/upload', to: "gyms#upload"
      get '/gyms/:id/imagens', to: "gyms#imagens"
      delete '/gyms/delete_upload/:blob_id', to: "gyms#delete_upload"
    end
  end

  namespace :ui do
    resources :gyms, only: :index
  end
end
