class KeyController < ApplicationController
  def show
    render json: { api_key: ENV['API_KEY'] }
  end
end
